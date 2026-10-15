import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { retainStaticPage } from "../src/lib/retainStaticPage.ts";

test("failed startup keeps every existing reveal variant readable without replacing translated content", () => {
    const sections = [
        { style: { opacity: "0", transform: "translateY(20px)", visibility: "hidden" } },
        { style: {} },
    ];
    const attributes = {};
    const root = {
        setAttribute(name, value) {
            attributes[name] = value;
        },
        querySelectorAll(selector) {
            assert.equal(selector, ".reveal, [data-reveal]", "Cover class and attribute reveal primitives");
            return sections;
        },
    };
    retainStaticPage(root);
    assert.equal(attributes["data-static-fallback"], "true");
    for (const section of sections)
        assert.deepEqual(section.style, { opacity: "1", transform: "none", visibility: "visible" });
});

test("the failure handler restores static content after the selected-language initialization rejects", async () => {
    const source = await readFile(new URL("../src/main.tsx", import.meta.url), "utf8");
    assert.match(source, /mount\(\)\.catch\([\s\S]*retainStaticPage\(root\)/);
    assert.ok(!source.includes('root.innerHTML = ""'), "Never clear the readable static document on failure");
});
