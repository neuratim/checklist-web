import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const locales = readdirSync(new URL("../src/i18n/locales/", import.meta.url))
    .filter((file) => file.endsWith(".ts"))
    .map((file) => file.replace(/\.ts$/, ""))
    .toSorted();
const SCREEN_VIEWS = [
    "01-packing-progress",
    "02-reusable-templates",
    "03-daily-weekly-reminders",
    "06-progress-and-history",
    "07-condition-editor",
    "08-statistics",
    "09-backup",
    "10-start-checklist",
];

/** Pixel size of a WebP file, read from its VP8, VP8L or VP8X header. */
function webpSize(bytes) {
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
    const chunk = bytes.toString("ascii", 12, 16);
    if (chunk === "VP8 ") return [bytes.readUInt16LE(26) & 0x3fff, bytes.readUInt16LE(28) & 0x3fff];
    if (chunk === "VP8X") return [bytes.readUIntLE(24, 3) + 1, bytes.readUIntLE(27, 3) + 1];
    assert.equal(chunk, "VP8L");
    const bits = bytes.readUInt32LE(21);
    return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
}

test("the top menu does not list the privacy policy, which the footer and Privacy section still link", () => {
    // Read as text: the module's extension-less imports resolve only under the bundler.
    const source = readFileSync(new URL("../src/constants/navigation.ts", import.meta.url), "utf8");
    const labelKeys = [...source.matchAll(/labelKey: "(\w+)"/g)].map((match) => match[1]);
    assert.ok(labelKeys.length > 0);
    assert.ok(labelKeys.includes("tryIt"));
    assert.ok(!labelKeys.includes("privacyPolicy"));
    assert.doesNotMatch(source, /ROUTE_HREFS\.privacyPolicy/);
});

test("no dictionary keeps a label for the removed top-menu link", () => {
    assert.equal(locales.length, 18);
    for (const locale of locales) {
        const source = readFileSync(new URL(`../src/i18n/locales/${locale}.ts`, import.meta.url), "utf8");
        const nav = /\n    nav: \{[\s\S]*?\n    \},/.exec(source);
        assert.ok(nav, `${locale} has a nav block`);
        assert.doesNotMatch(nav[0], /privacyPolicy/, `${locale} nav label`);
        assert.match(source, /\n {8}privacyPolicy:/, `${locale} keeps its footer link label`);
    }
});

test("every language ships the eight native app screens at the exported size", () => {
    for (const locale of locales) {
        for (const view of SCREEN_VIEWS) {
            const file = new URL(`../public/screens/${locale}/${view}.webp`, import.meta.url);
            assert.deepEqual(webpSize(readFileSync(file)), [603, 1311], `${locale}/${view}`);
        }
        assert.deepEqual(
            readdirSync(new URL(`../public/screens/${locale}/`, import.meta.url)).toSorted(),
            SCREEN_VIEWS.map((view) => `${view}.webp`).toSorted(),
            `${locale} has exactly the eight views`,
        );
    }
});

test("on wide screens the pledge sits beside the tip checkout, stacked above it otherwise", () => {
    const tsx = readFileSync(new URL("../src/components/FreeAndSupport.tsx", import.meta.url), "utf8");
    const css = readFileSync(new URL("../src/components/FreeAndSupport.css", import.meta.url), "utf8");
    const pair = tsx.slice(tsx.indexOf('className="support-pair"'));
    assert.ok(pair.indexOf("support-pledge") > 0, "pledge is inside the pair");
    assert.ok(pair.indexOf("<TipCheckout") > pair.indexOf("support-pledge"), "checkout follows the pledge");
    assert.ok(pair.indexOf("<TipCheckout") < pair.indexOf("free-tip-links"), "checkout is inside the pair");
    assert.match(css, /\.support-pair\s*\{[^}]*flex-direction:\s*column/);
    assert.match(
        css,
        /@media \(min-width: 901px\)\s*\{[\s\S]*?\.support-pair\[data-with-tip\]\s*\{[^}]*display:\s*grid[^}]*grid-template-columns/,
    );
});
