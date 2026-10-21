import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseConfig } from "./verify-hosting.mjs";

// Cloudflare starts a Git build only when GitHub's push webhook reaches its
// app, and a lost delivery leaves no failed build anywhere. Waiting for the
// Workers Builds check on the pushed commit turns that silence into a failure.
export const cloudflareApp = "cloudflare-workers-and-pages";
export const deployCommand = "npx --yes wrangler@4.148.0 deploy --config wrangler.jsonc";

export function checkName(workerName) {
    return `Workers Builds: ${workerName}`;
}

/**
 * Classifies the Cloudflare checks of one commit: `deployed`, `pending`,
 * `failed`, `missing`, or `superseded` once main has moved to another commit
 * (that push's own run then owns the guarantee).
 */
export function evaluateBuild({ checkRuns, headSha, mainSha, workerName }) {
    const runs = checkRuns.filter(
        (run) => run.app?.slug === cloudflareApp && run.name === checkName(workerName),
    );
    const deployed = runs.find((run) => run.status === "completed" && run.conclusion === "success");
    if (deployed) return { state: "deployed", url: deployed.details_url };
    if (mainSha && mainSha !== headSha) return { state: "superseded", mainSha };
    const unfinished = runs.find((run) => run.status !== "completed");
    if (unfinished) return { state: "pending", url: unfinished.details_url };
    const failed = runs.at(-1);
    if (failed)
        return {
            conclusion: failed.conclusion,
            state: "failed",
            url: failed.details_url,
        };
    return { state: "missing" };
}

/** Polls GitHub until the build is decided or the deadline passes. */
export async function waitForBuild({
    fetchJson,
    headSha,
    intervalMs = 20_000,
    now = Date.now,
    repository,
    sleep = (ms) => new Promise((done) => setTimeout(done, ms)),
    timeoutMs = 15 * 60_000,
    workerName,
}) {
    const deadline = now() + timeoutMs;
    const checks = `/repos/${repository}/commits/${headSha}/check-runs?check_name=${encodeURIComponent(checkName(workerName))}&per_page=100`;
    // Each poll depends on the previous answer, so polling recurses instead of looping.
    const poll = async (previous) => {
        let result = previous;
        try {
            const [{ check_runs: checkRuns }, main] = await Promise.all([
                fetchJson(checks),
                fetchJson(`/repos/${repository}/commits/main`),
            ]);
            result = evaluateBuild({
                checkRuns,
                headSha,
                mainSha: main.sha,
                workerName,
            });
            if (result.state !== "pending" && result.state !== "missing") return result;
        } catch (error) {
            result = { ...previous, error: error.message };
        }
        if (now() >= deadline) return { ...result, timedOut: true };
        await sleep(intervalMs);
        return poll(result);
    };
    return poll({ state: "missing" });
}

export function report(result, { headSha, workerName }) {
    const commit = headSha.slice(0, 7);
    if (result.state === "deployed")
        return {
            ok: true,
            message: `Cloudflare deployed ${commit}: ${result.url}`,
        };
    if (result.state === "superseded")
        return {
            ok: true,
            message: `main moved to ${result.mainSha.slice(0, 7)}; its run confirms that deployment`,
        };
    const reason =
        result.state === "failed"
            ? `Cloudflare build for ${commit} ended ${result.conclusion}: ${result.url}. The live site still serves the previous deployment`
            : result.state === "pending"
              ? `Cloudflare build for ${commit} did not finish in time: ${result.url}`
              : result.error
                ? `Could not read the Cloudflare build check for ${commit} (GitHub API: ${result.error})`
                : `Cloudflare never started a build for ${commit}; its push webhook was lost. The live site still serves the previous deployment`;
    return {
        ok: false,
        message: `${reason}. Retry the build of ${workerName} in the Cloudflare dashboard, or deploy this commit from a clean checkout: npm ci && npm run build && ${deployCommand}`,
    };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
    const directory = dirname(dirname(fileURLToPath(import.meta.url)));
    const { name: workerName } = parseConfig(await readFile(join(directory, "wrangler.jsonc"), "utf8"));
    const { GITHUB_API_URL, GITHUB_REPOSITORY, GITHUB_SHA, GITHUB_TOKEN } = process.env;
    if (!GITHUB_REPOSITORY || !GITHUB_SHA || !GITHUB_TOKEN)
        throw new Error("Run in GitHub Actions with GITHUB_TOKEN, GITHUB_REPOSITORY and GITHUB_SHA");
    const api = GITHUB_API_URL ?? "https://api.github.com";
    const fetchJson = async (path) => {
        const response = await fetch(api + path, {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });
        if (!response.ok) throw new Error(`GitHub API ${response.status} for ${path}`);
        return response.json();
    };
    const context = { headSha: GITHUB_SHA, workerName };
    const result = await waitForBuild({
        ...context,
        fetchJson,
        repository: GITHUB_REPOSITORY,
    });
    const { message, ok } = report(result, context);
    if (ok) console.log(message);
    else {
        console.error(`::error title=Cloudflare deployment missing::${message}`);
        process.exitCode = 1;
    }
}
