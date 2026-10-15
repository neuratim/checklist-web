import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const { renderApp, renderPrivacyPolicyCopy, renderPrivacyPolicyMetadata } = await import(
    new URL("dist-ssr/entry-server.js", root).href
);
const languages = (await readdir(new URL("src/i18n/locales/", root)))
    .filter((name) => name.endsWith(".ts"))
    .map((name) => name.replace(/\.ts$/, ""));
assert.equal(languages.length, 18, "Verify every supported website locale.");

function decode(html) {
    return html.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (_, entity) => {
        if (entity.startsWith("#"))
            return String.fromCodePoint(
                entity[1].toLowerCase() === "x"
                    ? Number.parseInt(entity.slice(2), 16)
                    : Number(entity.slice(1)),
            );
        return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[entity.toLowerCase()];
    });
}
function strings(value) {
    return typeof value === "string" ? [value] : Object.values(value).flatMap(strings);
}
function verifyPolicy(html, copy, language) {
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${language}: one policy main landmark`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${language}: one policy h1`);
    assert.ok(html.includes('id="content"'), `${language}: a local content target`);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
    assert.ok(!/<iframe\b/.test(main), `${language}: the policy must never embed the app`);
    assert.ok(!/class="[^"]*\bhero\b/.test(main), `${language}: a policy must not render the landing page`);
    const text = decode(html.replace(/<[^>]*>/g, ""));
    for (const value of strings(copy))
        assert.ok(text.includes(value), `${language}: preserve policy copy: ${value.slice(0, 80)}`);
    assert.ok(text.length > 800, `${language}: serve meaningful app-specific policy content`);
    assert.ok(/href="mailto:[^"]+"/.test(html), `${language}: reachable privacy contact`);
    assert.ok(
        html.includes(`href="${language === "en" ? "/" : `/${language}/`}`),
        `${language}: preserve language when returning home`,
    );
    for (const [, fragment] of html.matchAll(/href="(#[^"]+)"/g))
        assert.equal(fragment, "#content", `${language}: page navigation must leave the policy`);
    assert.ok(
        /class="[^"]*(?:safe-page|policy-page)/.test(html),
        `${language}: shared safe-inset policy surface`,
    );
}

const metadata = renderPrivacyPolicyMetadata();
const homepage = await readFile(new URL("dist/index.html", root), "utf8");
assert.ok(
    /<footer\b[\s\S]*?href="\/privacy-policy\/"/.test(homepage),
    "The homepage footer links to the dedicated policy in its active language.",
);
const dedicated = await readFile(new URL("dist/privacy-policy/index.html", root), "utf8");
const english = await renderPrivacyPolicyCopy("en");
verifyPolicy(dedicated, english, "en");
assert.equal(decode(dedicated.match(/<title>([\s\S]*?)<\/title>/)[1]), metadata.title);
const homeCanonical = homepage.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)[1];
const canonical = new URL("/privacy-policy/", homeCanonical).href;
assert.equal(dedicated.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)[1], canonical);
const tags = new Map(
    [...dedicated.matchAll(/<meta\b[^>]*(?:name|property)="([^"]+)"[^>]*content="([^"]*)"/g)].map(
        ([, key, value]) => [key, decode(value)],
    ),
);
assert.equal(tags.get("og:url"), canonical);
for (const name of ["description", "og:description", "twitter:description"])
    assert.equal(tags.get(name), english.intro);
for (const name of ["og:title", "twitter:title"]) assert.equal(tags.get(name), metadata.title);
const schemas = [
    ...dedicated.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
].map(([, body]) => JSON.parse(body));
assert.equal(schemas.length, 1);
assert.equal(schemas[0]["@type"], "WebPage");
assert.equal(schemas[0].url, canonical);
assert.ok((await readFile(new URL("dist/sitemap.xml", root), "utf8")).includes(`<loc>${canonical}</loc>`));
assert.ok(!dedicated.includes("%VITE_"), "Resolve deployment variables in the dedicated document.");
const css = await readFile(new URL("src/components/PrivacyPolicy.css", root), "utf8");
for (const edge of ["top", "right", "bottom", "left"])
    assert.ok(
        css.includes(`env(safe-area-inset-${edge})`),
        `The shared policy surface must consume the ${edge} inset.`,
    );
await Promise.all(
    languages.map(async (language) => {
        const copy = await renderPrivacyPolicyCopy(language);
        const canonicalPage = await renderApp("/privacy-policy/", language);
        verifyPolicy(canonicalPage, copy, language);
        assert.equal(
            await renderApp("/privacy-policy", language),
            canonicalPage,
            `${language}: support the direct URL without a trailing slash`,
        );
        const home = await renderApp("/", language);
        assert.ok(
            home.includes(
                `href="${language === "en" ? "/privacy-policy/" : `/${language}/privacy-policy/`}"`,
            ),
            `${language}: the footer retains the selected locale`,
        );
    }),
);
// Exercise the legacy fragment on the real rendered application, including route precedence.
const previousWindow = globalThis.window;
try {
    globalThis.window = { location: { pathname: "/", hash: "#privacy-policy" } };
    verifyPolicy(await renderApp("/", "en"), english, "en");
    globalThis.window.location.hash = "#try";
    verifyPolicy(await renderApp("/privacy-policy/", "en"), english, "en");
} finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
}
console.log(
    `Privacy verified: static app policy, metadata, sitemap, safe insets and complete policy/navigation in ${languages.length} locales.`,
);
