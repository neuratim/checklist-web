import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "dist-ssr");
// This separate Node build must not invoke the deployment/Worker plugin.
await build({
    build: {
        copyPublicDir: false,
        emptyOutDir: true,
        outDir: output,
        ssr: "src/entry-server.tsx",
    },
    configFile: false,
    plugins: [react()],
    root,
});

const { renderApp, renderPrivacyPolicyMetadata } = await import(
    pathToFileURL(join(output, "entry-server.js")).href
);
const candidates = [join(root, "dist", "client"), join(root, "dist")];
const directory = candidates.find((candidate) => existsSync(join(candidate, "index.html")));
if (!directory) throw new Error("Build the client before prerendering.");
const template = await readFile(join(directory, "index.html"), "utf8");

const container = '<div id="root"></div>';
if (!template.includes(container)) throw new Error("Missing empty #root; rebuild the client first.");
const policyMetadata = renderPrivacyPolicyMetadata();

function renderDocument(page) {
    const markup = renderApp(page === "privacy-policy" ? "/privacy-policy/" : "/");
    const links = markup.match(/<link\b[^>]*>/g) ?? [];
    return template
        .replace(container, () => `<div id="root">${markup.replaceAll(/<link\b[^>]*>/g, "")}</div>`)
        .replace("</head>", () => `${links.join("\n")}\n</head>`);
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function policyDocument() {
    const { path, title, description } = policyMetadata;
    const homepage = template.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    if (!homepage) throw new Error("Missing homepage canonical URL.");
    const canonical = new URL(path, homepage).href;
    const metadata = {
        description,
        "og:url": canonical,
        "og:title": title,
        "og:description": description,
        "twitter:title": title,
        "twitter:description": description,
    };
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonical,
        inLanguage: "en",
    };
    return renderDocument("privacy-policy")
        .replace(
            /(<meta\b[^>]*name="viewport"[^>]*content=")[^"]*(")/,
            "$1width=device-width, initial-scale=1.0, viewport-fit=cover$2",
        )
        .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(title)}</title>`)
        .replace(
            /<link\b[^>]*rel="canonical"[^>]*>/,
            () => `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
        )
        .replace(/<meta\b[^>]*>/g, (tag) => {
            const key = tag.match(/(?:name|property)="([^"]+)"/)?.[1];
            return key && key in metadata
                ? tag.replace(/content="[^"]*"/, () => `content="${escapeHtml(metadata[key])}"`)
                : tag;
        })
        .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g, "")
        .replace(
            "</head>",
            () =>
                `<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>\n</head>`,
        );
}

await writeFile(join(directory, "index.html"), renderDocument("home"));
const privacyDirectory = join(directory, policyMetadata.path);
await mkdir(privacyDirectory, { recursive: true });
await writeFile(join(privacyDirectory, "index.html"), policyDocument());
console.log(`Prerendered the homepage and dedicated privacy policy into ${directory}`);
