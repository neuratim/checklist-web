import assert from "node:assert/strict";
import test from "node:test";
import { assertStartupBudget, MAX_STARTUP_GZIP_BYTES, staticImports } from "./verify-startup.mjs";

test("startup counts static dependencies and excludes unrelated dynamic imports", () => {
    assert.deepEqual(
        staticImports(
            'import{a}from"./core.js";import"./styles.js";export{x}from"./shared.js";const load=()=>import("./ar.js");',
        ),
        ["./core.js", "./styles.js", "./shared.js"],
    );
});
test("startup budget rejects an oversized selected locale even if base entry is small", () => {
    assert.doesNotThrow(() =>
        assertStartupBudget({ languages: [{ language: "en", gzipBytes: MAX_STARTUP_GZIP_BYTES }] }),
    );
    assert.throws(
        () =>
            assertStartupBudget({
                languages: [
                    { language: "en", gzipBytes: 75000 },
                    { language: "cs", gzipBytes: MAX_STARTUP_GZIP_BYTES + 1 },
                ],
            }),
        /cs:.*exceeds/,
    );
});
