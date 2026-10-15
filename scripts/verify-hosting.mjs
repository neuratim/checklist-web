import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parsers } from "prettier/plugins/babel";

// Exact existing Git-integrated Workers; drafts and unactivated Manfile are excluded.
export const hostingSites = {
    "canvasforge.neuratim.com": { name: "canvasforge-web", site: "canvasforge" },
    "checklist.neuratim.com": { name: "checklist-web", site: "checklist" },
    "decolab.neuratim.com": { name: "decolab-web", site: "decolab" },
    "frameosu.neuratim.com": { name: "frameosu-web", site: "frameosu" },
    "inklume.neuratim.com": { name: "inklume", site: "inklume" },
    "lifecue.neuratim.com": { name: "lifecue-web", site: "lifecue" },
    "moodlo.neuratim.com": { name: "moodlo-web", site: "moodlo" },
    "neuratim.com": { name: "neuratim-web", output: "dist/client", site: "web" },
    "possessionary.neuratim.com": {
        name: "possessionary-web",
        site: "possessionary",
    },
    "recordry.neuratim.com": { name: "recordry-web", site: "recordry" },
    "settlo.neuratim.com": { name: "settlo-web", site: "settlo" },
    "stockfind.neuratim.com": { name: "stockfind-web", site: "stockfind" },
    "tempolane.neuratim.com": { name: "tempolane-web", site: "tempolane" },
    "testers.neuratim.com": { name: "neurtim-web-testers", site: "web-testers" },
    "timer.neuratim.com": { name: "timer-web", site: "timer" },
    "timlinq.neuratim.com": { name: "timlinq-web", site: "timlinq" },
};

function jsonValue(node) {
    switch (node.type) {
        case "ArrayExpression":
            return node.elements.map(jsonValue);
        case "BooleanLiteral":
        case "NumericLiteral":
        case "StringLiteral":
            return node.value;
        case "NullLiteral":
            return null;
        case "UnaryExpression":
            assert.equal(node.operator, "-", "Unsupported JSONC unary value");
            assert.equal(node.argument.type, "NumericLiteral");
            return -node.argument.value;
        case "ObjectExpression": {
            const result = Object.create(null);
            for (const property of node.properties) {
                assert.equal(property.type, "ObjectProperty", "Expected JSONC property");
                assert.equal(property.key.type, "StringLiteral", "Expected quoted JSONC key");
                const key = property.key.value;
                assert.ok(!Object.hasOwn(result, key), `Duplicate JSONC key: ${key}`);
                result[key] = jsonValue(property.value);
            }
            return result;
        }
        default:
            throw new Error(`Unsupported JSONC value: ${node.type}`);
    }
}

export function parseConfig(source) {
    return jsonValue(parsers.json.parse(source).node);
}

function headerRules(source) {
    const rules = [];
    let current;
    for (const line of source.split(/\r?\n/)) {
        if (!line.trim() || line.trimStart().startsWith("#")) continue;
        if (!/^\s/.test(line)) {
            current = { headers: new Map(), pattern: line.trim() };
            rules.push(current);
            continue;
        }
        const match = /^\s+([^:]+):\s*(.+)$/.exec(line);
        assert.ok(current && match, `Invalid static header line: ${line}`);
        const name = match[1].toLowerCase();
        assert.ok(!current.headers.has(name), `Duplicate ${name} in ${current.pattern}`);
        current.headers.set(name, match[2]);
    }
    return rules;
}

export function verifyHeaders(source) {
    const rules = headerRules(source);
    const global = rules.filter(({ pattern }) => pattern === "/*");
    assert.equal(global.length, 1, "Expected exactly one global static header rule");
    for (const [name, value] of [
        ["referrer-policy", "strict-origin-when-cross-origin"],
        ["strict-transport-security", "max-age=31536000"],
        ["x-content-type-options", "nosniff"],
    ]) {
        assert.equal(global[0].headers.get(name), value, `Global ${name} baseline changed`);
    }
    let immutable = 0;
    for (const { headers, pattern } of rules) {
        const cache = headers.get("cache-control");
        if (cache?.split(",").some((part) => part.trim().toLowerCase() === "immutable")) {
            assert.equal(pattern, "/assets/*", "Immutable caching must be limited to /assets/*");
            assert.equal(cache, "public, max-age=31536000, immutable");
            immutable++;
        }
        for (const [name, value] of global[0].headers) {
            if (
                ["referrer-policy", "strict-transport-security", "x-content-type-options"].includes(name) &&
                headers.has(name)
            ) {
                assert.equal(headers.get(name), value, `Scoped ${name} weakens the baseline`);
            }
        }
    }
    assert.equal(immutable, 1, "Expected one immutable generated asset rule");
}

async function generatedAssets(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const groups = await Promise.all(
        entries.map(async (entry) => {
            assert.ok(!entry.isSymbolicLink(), `Linked generated asset: ${entry.name}`);
            if (entry.isDirectory()) return generatedAssets(join(directory, entry.name));
            assert.ok(entry.isFile(), `Unsupported asset entry: ${entry.name}`);
            assert.match(
                basename(entry.name),
                /[-.][A-Za-z0-9_-]{8,}\.[a-z0-9]+(?:\.map)?$/i,
                `Immutable asset needs a generated fingerprint: ${entry.name}`,
            );
            return [entry.name];
        }),
    );
    return groups.flat();
}

function canonicalHost(html) {
    const links = html.match(/<link\b[^>]*>/gi) ?? [];
    const canonicals = links.filter((tag) => /\brel=["']canonical["']/i.test(tag));
    assert.equal(canonicals.length, 1, "Expected one homepage canonical");
    const href = /\bhref=["']([^"']+)["']/i.exec(canonicals[0]);
    assert.ok(href, "Missing homepage canonical href");
    const url = new URL(href[1]);
    assert.equal(url.protocol, "https:", "Homepage canonical must use HTTPS");
    return url.host;
}

export async function verifyHosting(siteDirectory) {
    const config = parseConfig(await readFile(join(siteDirectory, "wrangler.jsonc"), "utf8"));
    const entry = Object.entries(hostingSites).find(([, site]) => site.name === config.name);
    assert.ok(entry, `Unexpected Worker name: ${config.name}`);
    const [host, site] = entry;
    const output = site.output ?? "dist";
    assert.equal(config.assets?.directory, `./${output}`, "Wrong static asset output directory");
    assert.equal(config.assets.not_found_handling, "404-page", "Missing routes must use real 404s");
    assert.ok(!config.assets.run_worker_first, "Preserve default asset-first routing");
    if (host === "neuratim.com") assert.equal(config.main, "./worker/index.ts");
    else assert.ok(!config.main, "Presentation must remain assets-only");

    const outputDirectory = join(siteDirectory, output);
    const [home, missing, sourceHeaders, builtHeaders, packageText] = await Promise.all([
        readFile(join(outputDirectory, "index.html"), "utf8"),
        readFile(join(outputDirectory, "404.html"), "utf8"),
        readFile(join(siteDirectory, "public/_headers"), "utf8"),
        readFile(join(outputDirectory, "_headers"), "utf8"),
        readFile(join(siteDirectory, "package.json"), "utf8"),
    ]);
    assert.equal(canonicalHost(home), host, "Worker name and built canonical host disagree");
    assert.notEqual(missing, home, "404 artifact must not be the homepage");
    assert.match(missing, /<main\b/i, "404 needs a meaningful main document");
    assert.match(missing, /<h1\b/i, "404 needs a heading");
    assert.match(missing, /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i);
    assert.equal(builtHeaders, sourceHeaders, "Build must preserve all source static headers");
    verifyHeaders(sourceHeaders);
    const copiedAssets = await readdir(join(siteDirectory, "public/assets")).catch((error) => {
        if (error.code !== "ENOENT") throw error;
        return [];
    });
    assert.equal(
        copiedAssets.length,
        0,
        "public/assets must not copy mutable files into the immutable scope",
    );
    const assets = await generatedAssets(join(outputDirectory, "assets"));
    assert.ok(assets.length > 0, "Expected fingerprinted generated assets");
    const scripts = JSON.parse(packageText).scripts;
    assert.match(scripts.build, /(?:^|&&\s*)node scripts\/verify-hosting\.mjs\s*$/);
    if (scripts.deploy?.includes("wrangler")) {
        assert.match(scripts.deploy, /--config(?:=|\s+)wrangler\.jsonc\b/);
    }
    return { assets: assets.length, host, output, workerName: config.name };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
    const directory = dirname(dirname(fileURLToPath(import.meta.url)));
    try {
        console.log(`Static hosting verified: ${JSON.stringify(await verifyHosting(directory))}`);
    } catch (error) {
        console.error(`Static hosting verification failed: ${error.message}`);
        process.exitCode = 1;
    }
}
