import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const directory = [join(root, "dist", "client"), join(root, "dist")].find((candidate) =>
    existsSync(join(candidate, "index.html")),
);
assert.ok(directory, "Build the site before verifying SEO.");

function decode(value) {
    return value
        .replaceAll(/&#(x[\da-f]+|\d+);/gi, (_, code) =>
            String.fromCodePoint(code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code)),
        )
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&nbsp;", " ")
        .replaceAll("&amp;", "&");
}

function attributes(tag) {
    return Object.fromEntries(
        [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map((match) => [
            match[1].toLowerCase(),
            decode(match[2] ?? match[3] ?? match[4]),
        ]),
    );
}

function tags(html, name) {
    return (html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? []).map(attributes);
}

function hasRelation(link, relation) {
    return link.rel?.toLowerCase().split(/\s+/).includes(relation);
}

function textContent(html) {
    return decode(html.replaceAll(/<[^>]*>/g, " "))
        .replaceAll(/\s+/g, " ")
        .trim();
}

function cleanUrl(value, label) {
    assert.ok(value, `${label}: missing URL.`);
    const url = new URL(value);
    assert.equal(url.protocol, "https:", `${label}: require HTTPS.`);
    assert.equal(url.username + url.password, "", `${label}: URL must not contain credentials.`);
    assert.equal(url.search + url.hash, "", `${label}: do not advertise query translations or hash routes.`);
    return url;
}

function schemaNodes(value) {
    assert.ok(value && typeof value === "object", "JSON-LD must contain objects.");
    if (Array.isArray(value)) return value.flatMap(schemaNodes);
    return [value, ...(value["@graph"] ? schemaNodes(value["@graph"]) : [])];
}

function readPage(html, label) {
    const document = html.replaceAll(/<!--[\s\S]*?-->/g, "");
    const head = document.match(/<head\b[^>]*>([\s\S]*?)<\/head\s*>/i)?.[1];
    assert.ok(head, `${label}: missing response head.`);
    assert.ok(
        !/%[A-Z_][A-Z0-9_]{2,}%/.test(document),
        `${label}: unresolved build variables in shipped HTML.`,
    );
    const metas = tags(head, "meta");
    const links = tags(head, "link");
    const canonicals = links.filter((link) => hasRelation(link, "canonical"));
    assert.equal(canonicals.length, 1, `${label}: exactly one canonical URL is required.`);
    const canonical = cleanUrl(canonicals[0].href, label);
    const titles = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi)];
    const descriptions = metas.filter((meta) => meta.name?.toLowerCase() === "description");
    assert.equal(titles.length, 1, `${label}: exactly one title is required.`);
    assert.equal(descriptions.length, 1, `${label}: exactly one description is required.`);
    const title = textContent(titles[0][1]);
    const description = descriptions[0].content?.trim() ?? "";
    assert.ok(
        /[\p{L}\p{N}]/u.test(title) && /[\p{L}\p{N}]/u.test(description),
        `${label}: meaningful title and description are required.`,
    );
    const socialUrls = metas.filter((meta) => meta.property?.toLowerCase() === "og:url");
    assert.equal(socialUrls.length, 1, `${label}: exactly one og:url is required.`);
    assert.equal(
        cleanUrl(socialUrls[0].content, label).href,
        canonical.href,
        `${label}: og:url must match canonical.`,
    );
    const robots = metas.filter((meta) => meta.name?.toLowerCase() === "robots");
    assert.equal(robots.length, 1, `${label}: exactly one robots directive is required.`);
    const crawlerMetas = metas.filter((meta) => /^(?:robots|googlebot|bingbot)$/i.test(meta.name ?? ""));
    const noindex = crawlerMetas.some((meta) => /\b(?:noindex|none)\b/i.test(meta.content ?? ""));
    assert.ok(
        !metas.some((meta) => meta["http-equiv"]?.toLowerCase() === "refresh"),
        `${label}: a sitemap document must not redirect.`,
    );
    const schemas = [...head.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)]
        .filter(([, attrs]) => attributes(attrs).type?.toLowerCase() === "application/ld+json")
        .flatMap(([, , json]) => schemaNodes(JSON.parse(json)));
    const language = tags(document, "html")[0]?.lang?.toLowerCase();
    assert.ok(language, `${label}: the document language is required.`);
    verifyContent(document, label, noindex);
    return {
        canonical,
        description,
        language,
        links,
        metas,
        noindex,
        schemas,
        title,
    };
}

function verifyContent(html, label, noindex) {
    const visible = html.replaceAll(/<(script|style|noscript|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "");
    const body = visible.match(/<body\b[^>]*>([\s\S]*?)<\/body\s*>/i)?.[1];
    assert.ok(body, `${label}: the real page must be present without JavaScript.`);
    const mains = [...body.matchAll(/<main\b([^>]*)>([\s\S]*?)<\/main\s*>/gi)];
    assert.equal(mains.length, 1, `${label}: exactly one main landmark is required.`);
    assert.ok(
        !/(?:^|\s)hidden(?:\s|=|$)|aria-hidden\s*=\s*["']true["']/i.test(mains[0][1]),
        `${label}: main content must be visible.`,
    );
    const headings = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)];
    // An explicitly noindex, empty scaffold may await its real presentation content.
    if (noindex && headings.length === 0 && !textContent(mains[0][2])) return;
    assert.equal(headings.length, 1, `${label}: exactly one primary heading is required.`);
    assert.ok(
        /[\p{L}\p{N}]/u.test(textContent(headings[0][1])),
        `${label}: the primary heading must contain text.`,
    );
    const content = mains[0][2].replaceAll(/<h1\b[^>]*>[\s\S]*?<\/h1\s*>/gi, "");
    assert.ok(
        /[\p{L}\p{N}]/u.test(textContent(content)),
        `${label}: main must contain readable page content beyond its heading.`,
    );
    assert.ok(!/<noscript\b[^>]*>\s*<main\b/i.test(html), `${label}: do not ship a second plain-text page.`);
}

async function optionalFile(name) {
    try {
        return await readFile(join(directory, name), "utf8");
    } catch (error) {
        if (error.code !== "ENOENT") throw error;
        return "";
    }
}

function matchesPath(pattern, url) {
    const subject = pattern.startsWith("https://") ? url.href : url.pathname;
    const expression = pattern
        .replaceAll(/[.+?^${}()|[\]\\]/g, "\\$&")
        .replaceAll("*", ".*")
        .replaceAll(/:[a-zA-Z]\w*/g, "[^/]+");
    return new RegExp(`^${expression}$`).test(subject);
}

function verifyHosting(url, headers, redirects) {
    let pattern;
    for (const line of headers.split(/\r?\n/)) {
        if (!line.trim() || line.trimStart().startsWith("#")) continue;
        if (!/^\s/.test(line)) pattern = line.trim();
        else if (pattern && matchesPath(pattern, url) && /^\s*x-robots-tag\s*:/i.test(line)) {
            assert.ok(
                !/\b(?:noindex|none)\b/i.test(line),
                `${url.href}: sitemap URL has an X-Robots-Tag noindex header.`,
            );
        }
    }
    for (const line of redirects.split(/\r?\n/)) {
        const [source, target, status = "302"] = line.trim().split(/\s+/);
        if (!source?.startsWith("/") || !target || !/^(?:200|30[12378])$/.test(status)) continue;
        if (!matchesPath(source, url)) continue;
        if (status !== "200") {
            assert.fail(`${url.href}: sitemap URL redirects through _redirects.`);
        }
        break;
    }
}

function documentPath(url) {
    const segments = url.pathname.split("/").filter(Boolean).map(decodeURIComponent);
    assert.ok(
        segments.every((part) => part !== "." && part !== ".." && !/[\\/:]/.test(part)),
        `${url.href}: unsafe document path.`,
    );
    return join(directory, ...segments, ...(url.pathname.endsWith("/") ? ["index.html"] : []));
}

function verifySchemas(page) {
    const label = page.canonical.href;
    assert.ok(
        page.schemas.some((node) => node.url === label),
        `${label}: JSON-LD must identify this document URL.`,
    );
    for (const node of page.schemas) {
        const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
        if (types.some((type) => typeof type === "string" && type.endsWith("Page"))) {
            assert.equal(node.url, label, `${label}: page JSON-LD must match its canonical URL.`);
        }
    }
}

function alternateLinks(page) {
    const entries = page.links
        .filter((link) => hasRelation(link, "alternate") && link.hreflang)
        .map((link) => [link.hreflang.toLowerCase(), cleanUrl(link.href, page.canonical.href).href]);
    assert.equal(
        new Set(entries.map(([language]) => language)).size,
        entries.length,
        `${page.canonical.href}: duplicate hreflang language.`,
    );
    return new Map(entries);
}

function verifyAlternates(pages) {
    const documents = new Map(pages.map((page) => [page.canonical.href, page]));
    const localized = new Set(pages.map((page) => page.language)).size > 1;
    const alternates = new Map(pages.map((page) => [page.canonical.href, alternateLinks(page)]));
    for (const page of pages) {
        const links = alternates.get(page.canonical.href);
        if (!localized && links.size === 0) continue;
        assert.equal(
            links.get(page.language),
            page.canonical.href,
            `${page.canonical.href}: hreflang must include this document's language and URL.`,
        );
    }
    for (const page of pages) {
        const links = alternates.get(page.canonical.href);
        for (const [language, href] of links) {
            if (new URL(href).origin !== page.canonical.origin) continue;
            const target = documents.get(href);
            assert.ok(
                target,
                `${page.canonical.href}: hreflang target must be an indexable sitemap document: ${href}`,
            );
            if (language !== "x-default")
                assert.equal(
                    target.language,
                    language,
                    `${href}: hreflang must match the target document language.`,
                );
            assert.deepEqual(
                alternates.get(href),
                links,
                `${page.canonical.href}: hreflang links must be complete and reciprocal with ${href}.`,
            );
        }
    }
}

const [homeHtml, sitemap, robotsTxt, headers, redirects, files] = await Promise.all([
    readFile(join(directory, "index.html"), "utf8"),
    readFile(join(directory, "sitemap.xml"), "utf8"),
    readFile(join(directory, "robots.txt"), "utf8"),
    optionalFile("_headers"),
    optionalFile("_redirects"),
    readdir(directory, { recursive: true }),
]);
const documents = new Set(files.map((file) => join(directory, file)));
const home = readPage(homeHtml, "Homepage");
const { canonical, description, links, metas, noindex, title } = home;
assert.equal(canonical.pathname, "/", "The homepage canonical must identify the origin root.");
const locations = [...sitemap.matchAll(/<loc\b[^>]*>\s*([^<]+?)\s*<\/loc\s*>/gi)].map((match) =>
    cleanUrl(decode(match[1]), "Sitemap"),
);
assert.equal(new Set(locations.map((url) => url.href)).size, locations.length, "Duplicate sitemap URLs.");
assert.ok(
    noindex ? locations.length === 0 : locations.some((url) => url.href === canonical.href),
    "Sitemap must match homepage indexability.",
);

// Read each advertised local document once. Cross-origin hub entries belong to other builds.
const pages = await Promise.all(
    locations
        .filter((url) => url.origin === canonical.origin)
        .map(async (url) => {
            verifyHosting(url, headers, redirects);
            const path = documentPath(url);
            assert.ok(
                documents.has(path),
                `${url.href}: sitemap document is missing from the build (check path case).`,
            );
            const html =
                url.href === canonical.href
                    ? homeHtml
                    : await readFile(path, "utf8").catch((error) => {
                          if (error.code !== "ENOENT") throw error;
                          throw new Error(`${url.href}: sitemap document is missing from the build.`, {
                              cause: error,
                          });
                      });
            const page = url.href === canonical.href ? home : readPage(html, url.href);
            assert.equal(
                page.canonical.href,
                url.href,
                `${url.href}: sitemap document must have a self canonical.`,
            );
            assert.ok(!page.noindex, `${url.href}: a noindex document must not appear in the sitemap.`);
            if (page !== home) verifySchemas(page);
            return page;
        }),
);
verifyAlternates(pages);
assert.ok(/^User-agent:\s*\*/im.test(robotsTxt), "Missing general crawler rules.");
assert.ok(
    !/^Disallow:\s*\/\s*$/im.test(robotsTxt),
    "Allow crawling so robots can read the index/noindex directive.",
);
if (!noindex) assert.ok(robotsTxt.includes(`Sitemap: ${canonical.href}sitemap.xml`));

let html = homeHtml;
// WebSite identifies this origin, not the umbrella origin. Do not invent ratings or offers.
if (!noindex && !home.schemas.some((node) => node["@type"] === "WebSite" && node.url === canonical.href)) {
    const name = metas.find((meta) => meta.property === "og:site_name")?.content ?? title;
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        description,
        inLanguage: home.language,
        name,
        url: canonical.href,
    };
    html = html.replace(
        /<\/head\s*>/i,
        () =>
            `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n</head>`,
    );
    home.schemas.push(schema);
}
if (!noindex) verifySchemas(home);

// A supplementary discovery file, not a replacement for HTML or a ranking guarantee.
const summary = `# ${title}\n\n> ${description}\n\n- [Website](${canonical.href})\n- [Sitemap](${canonical.href}sitemap.xml)\n\nThe response contains the rendered page. Available indexable language documents are listed in the sitemap.\n`;
try {
    await readFile(join(directory, "llms.txt"));
} catch (error) {
    if (error.code !== "ENOENT") throw error;
    await writeFile(join(directory, "llms.txt"), summary);
}
if (!links.some((link) => hasRelation(link, "sitemap")))
    html = html.replace(
        /<\/head\s*>/i,
        () => `<link rel="sitemap" type="application/xml" href="${canonical.href}sitemap.xml" />\n</head>`,
    );
if (!links.some((link) => link.href?.endsWith("/llms.txt")))
    html = html.replace(
        /<\/head\s*>/i,
        () =>
            `<link rel="alternate" type="text/plain" href="${canonical.href}llms.txt" title="llms.txt" />\n</head>`,
    );
await writeFile(join(directory, "index.html"), html);
console.log(
    `SEO verified: ${canonical.href} (${noindex ? "noindex preserved" : `${pages.length} local indexable documents`})`,
);
