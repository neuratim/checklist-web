import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const directory = [join(root, "dist", "client"), join(root, "dist")].find((path) =>
    existsSync(join(path, "index.html")),
);
assert.ok(directory, "Prerender the English documents before localizing them.");
const entry = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);
const homepage = await readFile(join(directory, "index.html"), "utf8");
const origin = new URL(homepage.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]).origin;
const noindex = /<meta\b[^>]*name="robots"[^>]*content="[^"]*\bnoindex\b/.test(homepage);
const languages = entry.seoLanguages ?? ["en"];
assert.ok(Array.isArray(languages) && languages.includes("en"), "SEO languages must include English.");
assert.equal(new Set(languages).size, languages.length, "Duplicate SEO languages.");
assert.ok(
    languages.every((language) => /^[a-z]{2}(?:-[A-Z]{2})?$/.test(language)),
    "Invalid SEO language.",
);
if (languages.length > 1) assert.equal(typeof entry.renderSeoPage, "function", "Provide renderSeoPage.");

function decode(value) {
    return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|#39);/gi, (_, entity) => {
        if (entity.startsWith("#"))
            return String.fromCodePoint(
                entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)),
            );
        return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[entity.toLowerCase()];
    });
}

function escape(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function text(html) {
    return decode(html.replace(/<[^>]*>/g, " "))
        .replace(/\s+/g, " ")
        .trim();
}

function localPath(path, language) {
    return language === "en" ? path : `/${language}${path}`;
}

function filename(path) {
    assert.match(path, /^\/(?:[a-z0-9-]+\/)*$/, `Unsafe or noncanonical document path: ${path}`);
    return join(directory, path, "index.html");
}

function replaceRoot(html, markup) {
    const start = html.indexOf('<div id="root">');
    assert.ok(start >= 0, "Missing rendered #root.");
    const tags = /<div\b[^>]*>|<\/div\s*>/g;
    tags.lastIndex = start;
    let depth = 0;
    for (const tag of html.matchAll(tags)) {
        depth += tag[0].startsWith("</") ? -1 : 1;
        if (depth === 0)
            return `${html.slice(0, start)}<div id="root">${markup}</div>${html.slice(tag.index + tag[0].length)}`;
    }
    throw new Error("Unclosed rendered #root.");
}

function alternateLinks(path) {
    return [
        ...languages.map(
            (language) =>
                `<link rel="alternate" hreflang="${language}" href="${origin}${localPath(path, language)}" />`,
        ),
        `<link rel="alternate" hreflang="x-default" href="${origin}${path}" />`,
    ].join("\n");
}

function languageLinks(path) {
    if (languages.length < 2) return "";
    const links = languages.map((language) => {
        const name = new Intl.DisplayNames([language], { type: "language" }).of(language);
        return `<a href="${localPath(path, language)}" lang="${language}" hreflang="${language}" style="display:inline-flex;align-items:center;min-height:44px;padding:0.5rem">${escape(name)}</a>`;
    });
    return `<noscript data-seo-languages><div style="display:flex;flex-wrap:wrap;gap:0.75rem">${links.join("")}</div></noscript>`;
}

function setMetadata(html, metadata) {
    return html
        .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escape(metadata.title)}</title>`)
        .replace(/<meta\b[^>]*>/g, (tag) => {
            const key = tag.match(/(?:name|property)="([^"]+)"/)?.[1];
            return key && key in metadata
                ? tag.replace(/content="[^"]*"/, () => `content="${escape(metadata[key])}"`)
                : tag;
        });
}

function schema(metadata, language, canonical) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        description: metadata.description,
        inLanguage: language,
        isPartOf: { "@type": "WebSite", url: `${origin}/` },
        name: metadata.title,
        url: canonical,
    }).replaceAll("<", "\\u003c");
}

function schemaNodes(value) {
    return Array.isArray(value)
        ? value.flatMap(schemaNodes)
        : [value, ...(value["@graph"] ? schemaNodes(value["@graph"]) : [])];
}

function ensureSelfSchema(html, canonical) {
    const schemas = [
        ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    ].flatMap(([, json]) => schemaNodes(JSON.parse(json)));
    if (schemas.some((node) => node.url === canonical)) return html;
    const metadata = {
        title: text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ""),
        description: decode(html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1] ?? ""),
    };
    return html.replace(
        "</head>",
        () =>
            `<script type="application/ld+json" id="seo-page-schema">${schema(metadata, "en", canonical)}</script>\n</head>`,
    );
}

async function translatedDocument(base, path, language) {
    const result = await entry.renderSeoPage(path, language);
    let markup = typeof result === "string" ? result : result.markup;
    assert.equal(typeof markup, "string", `${path} ${language}: missing rendered markup.`);
    const title =
        typeof result === "object" && result.title
            ? result.title
            : text(markup.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
    const description =
        typeof result === "object" && result.description
            ? result.description
            : [...markup.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
                  .map(([, body]) => text(body))
                  .find((value) => value.length >= 40);
    assert.ok(title && description, `${path} ${language}: translated metadata requires actual page content.`);
    const canonical = `${origin}${localPath(path, language)}`;
    const links = markup.match(/<link\b[^>]*>/g) ?? [];
    markup = markup.replaceAll(/<link\b[^>]*>/g, "");
    const html = replaceRoot(base, markup)
        .replace(/<html\b[^>]*>/, `<html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}">`)
        .replace(/<link\b(?=[^>]*rel="preload")(?=[^>]*as="image")[^>]*>/g, "")
        .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "")
        .replace(/<link\b[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
        .replace(
            "</head>",
            () =>
                `${links.join("\n")}\n<script type="application/ld+json" id="seo-page-schema">${schema({ description, title }, language, canonical)}</script>\n</head>`,
        );
    return setMetadata(html, {
        description,
        title,
        "og:description": description,
        "og:locale": language,
        "og:title": title,
        "og:url": canonical,
        "twitter:description": description,
        "twitter:title": title,
    });
}

const sitemap = await readFile(join(directory, "sitemap.xml"), "utf8");
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(decode(url)));
for (const url of locations) {
    assert.equal(url.protocol, "https:", "Sitemap URLs must use HTTPS.");
    assert.equal(url.search + url.hash + url.username + url.password, "", "Sitemap URLs must be clean.");
}
const paths = [
    ...new Set(
        locations
            .filter((url) => url.origin === origin && !languages.includes(url.pathname.split("/")[1]))
            .map((url) => url.pathname),
    ),
];
const bases = await Promise.all(
    paths.map(async (path) => ({
        path,
        html: (await readFile(filename(path), "utf8")).replace(
            /<noscript data-seo-languages>[\s\S]*?<\/noscript>/g,
            "",
        ),
    })),
);
const documents = (
    await Promise.all(
        bases.map(async ({ path, html }) =>
            Promise.all(
                languages.map(async (language) => {
                    let page =
                        language === "en"
                            ? ensureSelfSchema(html, `${origin}${path}`)
                            : await translatedDocument(html, path, language);
                    page = page.replace(/<a\b[^>]*>/g, (tag) => {
                        const code = tag.match(/data-(?:code|language)="([^"]+)"/)?.[1];
                        return code && languages.includes(code)
                            ? tag.replace(/href="[^"]*"/, () => `href="${localPath(path, code)}"`)
                            : tag;
                    });
                    page = page.replace(/<link\b[^>]*hreflang="[^"]+"[^>]*>\r?\n?/g, "");
                    page = page.replace("</head>", () => `${alternateLinks(path)}\n</head>`);
                    const fallback = languageLinks(path);
                    page = page.includes("</footer>")
                        ? page.replace("</footer>", () => `${fallback}</footer>`)
                        : page.replace("</main>", () => `${fallback}</main>`);
                    return { html: page, language, path: localPath(path, language) };
                }),
            ),
        ),
    )
).flat();

// The hub swaps two routes in one document; keep every swapped signal in its locale.
for (const document of documents) {
    if (!document.html.includes('id="page-metadata"')) continue;
    const pages = Object.fromEntries(
        documents
            .filter((candidate) => candidate.language === document.language)
            .map((candidate) => {
                const path =
                    candidate.language === "en"
                        ? candidate.path
                        : candidate.path.slice(candidate.language.length + 1);
                const head = candidate.html.split("</head>")[0];
                const metadata = {
                    title: decode(head.match(/<title>([\s\S]*?)<\/title>/)[1]),
                };
                for (const [, attribute, key, value] of head.matchAll(
                    /<meta\b[^>]*(name|property)="([^"]+)"[^>]*content="([^"]*)"/g,
                ))
                    if (key === "description" || /^(?:og|twitter):(?:title|description|url)$/.test(key))
                        metadata[`meta[${attribute}="${key}"]`] = decode(value);
                for (const [, tag] of head.matchAll(
                    /(<link\b[^>]*(?:rel="canonical"|hreflang="[^"]+")[^>]*>)/g,
                )) {
                    const locale = tag.match(/hreflang="([^"]+)"/)?.[1];
                    metadata[locale ? `link[hreflang="${locale}"]` : 'link[rel="canonical"]'] = decode(
                        tag.match(/href="([^"]+)"/)[1],
                    );
                }
                const pageSchema = head.match(
                    /<script\b[^>]*id="seo-page-schema"[^>]*>([\s\S]*?)<\/script>/,
                )?.[1];
                if (pageSchema) metadata["script#seo-page-schema"] = pageSchema;
                return [path === "/" ? "home" : path.replaceAll("/", ""), metadata];
            }),
    );
    document.html = document.html.replace(
        /(<script\b[^>]*id="page-metadata"[^>]*>)[\s\S]*?(<\/script>)/,
        () =>
            `<script type="application/json" id="page-metadata">${JSON.stringify(pages).replaceAll("<", "\\u003c")}</script>`,
    );
}
await Promise.all(
    documents.map(async ({ html, path }) => {
        const file = filename(path);
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, html);
    }),
);
const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...documents.map(({ path }) => `    <url><loc>${origin}${path}</loc></url>`),
    "</urlset>",
    "",
].join("\n");
await writeFile(join(directory, "sitemap.xml"), noindex ? sitemap : xml);

// A root 404 disables Cloudflare Pages' implicit success response for unknown routes.
const siteName = text(
    homepage.match(/<meta\b[^>]*property="og:site_name"[^>]*content="([^"]+)"/)?.[1] ??
        new URL(origin).hostname,
);
const notFound = `<!doctype html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /><meta name="robots" content="noindex, follow" /><title>404 — ${escape(siteName)}</title><style>body{margin:0;font:1.2rem system-ui}main{padding:max(2rem,env(safe-area-inset-top)) max(2rem,env(safe-area-inset-right)) max(2rem,env(safe-area-inset-bottom)) max(2rem,env(safe-area-inset-left))}a{display:inline-flex;align-items:center;min-height:44px}</style></head><body><main><h1>404</h1><a href="/">${escape(siteName)}</a></main></body></html>`;
await writeFile(join(directory, "404.html"), notFound);
await writeFile(
    join(directory, "seo-pages.json"),
    `${JSON.stringify({ languages, pages: documents.map(({ path }) => `${origin}${path}`) }, null, 2)}\n`,
);
console.log(
    `Localized ${documents.length} static documents in ${languages.length} languages; real 404 emitted.`,
);
