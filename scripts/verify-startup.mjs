import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { gzipSync } from "node:zlib";

const LANGUAGES = "ar bn cs de en es fr hi id it ja ko pl pt ru tr vi zh".split(" ");
export const MAX_STARTUP_GZIP_BYTES = 150 * 1024;

export function staticImports(source) {
    return [...source.matchAll(/(?:import|export)\s*(?:[^"'();]*?\bfrom\s*)?["'](\.[^"']+\.js)["']/g)].map(
        (match) => match[1],
    );
}

export async function measureStartup(directory) {
    const html = await readFile(join(directory, "index.html"), "utf8");
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
    const tags = [...head.matchAll(/<(?:script|link)\b[^>]*>/g)].map((match) => match[0]);
    const initial = tags
        .filter((tag) => /type="module"|rel="modulepreload"/.test(tag))
        .map((tag) => tag.match(/(?:src|href)="([^"]+\.js)"/)?.[1])
        .filter(Boolean);
    assert.ok(initial.length > 0, "Build a public JavaScript presentation before checking startup");
    const assets = await readdir(join(directory, "assets"));
    const modules = new Map();
    async function closure(paths, selected = new Set()) {
        const pending = paths.filter((path) => !selected.has(path));
        for (const path of pending) selected.add(path);
        await Promise.all(
            pending.map(async (path) => {
                assert.ok(
                    path.startsWith("/assets/") && !path.includes(".."),
                    `Unexpected startup module: ${path}`,
                );
                if (!modules.has(path)) {
                    const bytes = await readFile(join(directory, path));
                    modules.set(path, {
                        gzipBytes: gzipSync(bytes).length,
                        imports: staticImports(bytes.toString("utf8")).map(
                            (value) => `/assets/${value.slice(2)}`,
                        ),
                    });
                }
                await closure(modules.get(path).imports, selected);
            }),
        );
        return selected;
    }
    const base = await closure(initial);
    const languages = await Promise.all(
        LANGUAGES.map(async (language) => {
            const chunks = assets
                .filter((name) => new RegExp(`^${language}(?:\\d+)?-[^.]+\\.js$`).test(name))
                .map((name) => `/assets/${name}`);
            const paths = await closure(chunks, new Set(base));
            return {
                language,
                gzipBytes: [...paths].reduce((sum, path) => sum + modules.get(path).gzipBytes, 0),
                modules: [...paths].toSorted(),
            };
        }),
    );
    return {
        initialGzipBytes: [...base].reduce((sum, path) => sum + modules.get(path).gzipBytes, 0),
        languages,
    };
}

export function assertStartupBudget(measurement) {
    for (const row of measurement.languages)
        assert.ok(
            row.gzipBytes <= MAX_STARTUP_GZIP_BYTES,
            `${row.language}: ${(row.gzipBytes / 1024).toFixed(1)} KiB startup JavaScript exceeds the 150 KiB gzip budget`,
        );
}

async function main() {
    const root = dirname(dirname(fileURLToPath(import.meta.url)));
    const directory = process.argv[2] ? resolve(process.argv[2]) : join(root, "dist");
    const measurement = await measureStartup(directory);
    assertStartupBudget(measurement);
    const worst = measurement.languages.reduce((highest, row) =>
        row.gzipBytes > highest.gzipBytes ? row : highest,
    );
    console.log(
        `Startup verified: ${(measurement.initialGzipBytes / 1024).toFixed(1)} KiB initial, ${(worst.gzipBytes / 1024).toFixed(1)} KiB conservative ${worst.language} maximum, including selected-locale chunks and static imports.`,
    );
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
