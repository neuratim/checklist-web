import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
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

const { renderApp } = await import(pathToFileURL(join(output, "entry-server.js")).href);
const candidates = [join(root, "dist", "client"), join(root, "dist")];
const directory = candidates.find((candidate) => existsSync(join(candidate, "index.html")));
if (!directory) throw new Error("Build the client before prerendering.");
let html = await readFile(join(directory, "index.html"), "utf8");

const container = '<div id="root"></div>';
if (!html.includes(container)) throw new Error("Missing empty #root; rebuild the client first.");
const markup = renderApp();
const links = markup.match(/<link\b[^>]*>/g) ?? [];
html = html.replace(container, () => `<div id="root">${markup.replaceAll(/<link\b[^>]*>/g, "")}</div>`);
html = html.replace("</head>", () => `${links.join("\n")}\n</head>`);
await writeFile(join(directory, "index.html"), html);
console.log(`Prerendered the actual page into ${directory}`);
