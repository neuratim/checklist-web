import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));

test("the browser loads a selected locale without eager translated imports", async () => {
    const source = await readFile(new URL("../src/i18n/registry.ts", import.meta.url), "utf8");
    const imports = [...source.matchAll(/^import\s+[^\n]+from\s+["']\.\/locales\/([^"']+)["']/gm)];
    assert.deepEqual(
        imports.map((match) => match[1]),
        ["en"],
        "Only the English fallback belongs in the initial browser graph",
    );
    assert.ok(!source.includes("DICTIONARIES"), "An eager all-language registry regresses startup transfer");
    const bootstrap = await readFile(new URL("../src/main.tsx", import.meta.url), "utf8");
    const awaitedDictionary = bootstrap.indexOf("await loadDictionary(language)");
    assert.ok(
        awaitedDictionary >= 0 && awaitedDictionary < bootstrap.indexOf("createRoot(root)"),
        "Keep the static translated document visible until its exact dictionary is ready",
    );
    const provider = await readFile(new URL("../src/i18n/LanguageContext.tsx", import.meta.url), "utf8");
    assert.ok(
        provider.includes("setLanguage: syncLanguageUrl"),
        "Switch documents before changing visible content",
    );
    assert.ok(!provider.includes("loadDictionary"), "Bootstrap and SSR supply the exact complete dictionary");
});

test("concurrent loads share one promise and a failed locale can retry", async () => {
    const server = await createServer({
        configFile: false,
        logLevel: "error",
        root,
        server: { middlewareMode: true, watch: null },
        optimizeDeps: { noDiscovery: true, include: [] },
        plugins: [
            {
                name: "transient-locale-failure-fixture",
                enforce: "pre",
                transform(source, id) {
                    if (!id.replaceAll("\\", "/").endsWith("/src/i18n/registry.ts")) return;
                    const needle = 'cs: async () => (await import("./locales/cs")).default,';
                    assert.ok(source.includes(needle), "Fixture must exercise the actual Czech loader");
                    return (
                        "let fixtureAttempts = 0;\n" +
                        source.replace(
                            needle,
                            'cs: async () => { if (fixtureAttempts++ === 0) throw new Error("transient dictionary fixture"); return (await import("./locales/cs")).default; },',
                        )
                    );
                },
            },
        ],
    });
    try {
        const { loadDictionary } = await server.ssrLoadModule("/src/i18n/registry.ts");
        const first = loadDictionary("cs");
        const concurrent = loadDictionary("cs");
        assert.equal(concurrent, first, "Concurrent requests must share their pending load");
        await assert.rejects(first, /transient dictionary fixture/);
        const retried = loadDictionary("cs");
        assert.notEqual(retried, first, "A failed promise must be evicted");
        const actual = await retried;
        const { DICTIONARIES } = await server.ssrLoadModule("/src/i18n/serverRegistry.ts");
        assert.deepEqual(actual, DICTIONARIES.cs);
        assert.equal(loadDictionary("cs"), retried, "Successful retries stay cached");
    } finally {
        await server.close();
    }
});

test("every async locale equals its complete SSR dictionary and reuses its cache", async () => {
    const server = await createServer({
        configFile: false,
        logLevel: "error",
        root,
        server: { middlewareMode: true, watch: null },
        optimizeDeps: { noDiscovery: true, include: [] },
    });
    try {
        const [{ loadDictionary }, { DICTIONARIES }] = await Promise.all([
            server.ssrLoadModule("/src/i18n/registry.ts"),
            server.ssrLoadModule("/src/i18n/serverRegistry.ts"),
        ]);
        assert.ok(Object.keys(DICTIONARIES).length >= 2);
        await Promise.all(
            Object.entries(DICTIONARIES).map(async ([language, expected]) => {
                const loaded = await loadDictionary(language);
                assert.deepEqual(
                    loaded,
                    expected,
                    `${language}: no lost translation, policy, array entry or English fallback`,
                );
                assert.equal(
                    await loadDictionary(language),
                    loaded,
                    `${language}: reuse the loaded dictionary`,
                );
            }),
        );
    } finally {
        await server.close();
    }
});
