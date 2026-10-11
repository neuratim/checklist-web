import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const directory = [join(root, "dist", "client"), join(root, "dist")].find((candidate) =>
    existsSync(join(candidate, "index.html")),
);
assert.ok(directory, "Build the site before verifying SEO.");
let html = await readFile(join(directory, "index.html"), "utf8");

function attributes(tag) {
    return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
}
function decode(value) {
    return value
        .replaceAll(/&#(x[\da-f]+|\d+);/gi, (_, code) =>
            String.fromCodePoint(code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code)),
        )
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&amp;", "&");
}
const head = html.split("</head>")[0];
const metas = (head.match(/<meta\b[^>]*>/g) ?? []).map(attributes);
const links = (head.match(/<link\b[^>]*>/g) ?? []).map(attributes);
const canonicals = links.filter((link) => link.rel === "canonical");
assert.equal(canonicals.length, 1, "Exactly one canonical URL must exist in the response head.");
const canonical = new URL(decode(canonicals[0].href));
assert.equal(canonical.protocol, "https:");
assert.equal(canonical.pathname, "/");
assert.equal(canonical.search + canonical.hash, "", "A homepage canonical must not name a client-side view.");
assert.ok(!/%[A-Z_]+%/.test(html), "Unresolved build variables in shipped HTML.");
const headings = (html.match(/<h1\b/g) ?? []).length;
assert.ok(headings <= 1, "The page must not ship duplicate primary headings.");
assert.ok(/<main\b/.test(html), "The real page must be present without JavaScript.");
if (headings === 0)
    console.warn(
        "This site is still an empty scaffold; meaningful search content awaits its presentation page.",
    );
assert.ok(!/<noscript>\s*<main\b/.test(html), "Do not ship a second plain-text page.");
const title = decode(head.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "").trim();
const description = decode(metas.find((meta) => meta.name === "description")?.content ?? "").trim();
assert.ok(title && description, "Page-specific title and description are required.");
assert.equal(new URL(decode(metas.find((meta) => meta.property === "og:url")?.content)).href, canonical.href);
const robots = metas.filter((meta) => meta.name === "robots");
assert.equal(robots.length, 1, "Exactly one robots directive is required.");
const noindex = /\bnoindex\b/.test(robots[0].content);
const schemas = [...head.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
const schemaNodes = schemas.flatMap(([, json]) => {
    const value = JSON.parse(json);
    return value["@graph"] ?? [value];
});

// WebSite identifies this origin, not the umbrella origin. Do not invent ratings or offers.
if (!noindex && !schemaNodes.some((node) => node["@type"] === "WebSite" && node.url === canonical.href)) {
    const name = decode(metas.find((meta) => meta.property === "og:site_name")?.content ?? title);
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        description,
        inLanguage: "en",
        name,
        url: canonical.href,
    };
    html = html.replace(
        "</head>",
        () =>
            `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n</head>`,
    );
}

const sitemap = await readFile(join(directory, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(new Set(locations).size, locations.length, "Duplicate sitemap URLs.");
assert.ok(
    noindex ? locations.length === 0 : locations.includes(canonical.href),
    "Sitemap must match indexability.",
);
for (const location of locations) {
    const url = new URL(location);
    assert.equal(url.protocol, "https:");
    assert.equal(url.search + url.hash, "", "Do not advertise client-only translations or hash routes.");
}
const robotsTxt = await readFile(join(directory, "robots.txt"), "utf8");
assert.ok(/^User-agent:\s*\*/m.test(robotsTxt), "Missing general crawler rules.");
assert.ok(
    !/^Disallow:\s*\/\s*$/m.test(robotsTxt),
    "Allow crawling so robots can read the index/noindex directive.",
);
if (!noindex) assert.ok(robotsTxt.includes(`Sitemap: ${canonical.href}sitemap.xml`));

// A supplementary discovery file, not a replacement for HTML or a ranking guarantee.
const summary = `# ${title}\n\n> ${description}\n\n- [Website](${canonical.href})\n- [Sitemap](${canonical.href}sitemap.xml)\n\nThe response contains the English page. Other languages, where offered, are selected in the browser.\n`;
try {
    await readFile(join(directory, "llms.txt"));
} catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeFile(join(directory, "llms.txt"), summary);
}
if (!links.some((link) => link.rel === "sitemap"))
    html = html.replace(
        "</head>",
        () => `<link rel="sitemap" type="application/xml" href="${canonical.href}sitemap.xml" />\n</head>`,
    );
if (!links.some((link) => link.href?.endsWith("/llms.txt")))
    html = html.replace(
        "</head>",
        () =>
            `<link rel="alternate" type="text/plain" href="${canonical.href}llms.txt" title="llms.txt" />\n</head>`,
    );
await writeFile(join(directory, "index.html"), html);
console.log(`SEO verified: ${canonical.href} (${noindex ? "noindex preserved" : "indexable"})`);
