# Search and crawler output

The production build renders the actual English React page into the initial HTML.
There is no separately maintained plain-text fallback page. The same styled content
is readable without JavaScript; React replaces that markup when it starts, using the
visitor's existing language and route preferences. Baked reveal sections start visible.
Interactive controls still require JavaScript.

Run `npm run build` to produce and verify the complete deployable output, then
`npm run verify:seo` to repeat the crawler checks. Deploy the normal asset directory;
`dist-ssr/` is build tooling and is never deployed. No server runtime was added.

The build checks the canonical URL, Open Graph URL, title, description, primary
headings, JSON-LD, unresolved variables, sitemap URLs and robots rules. It adds a
site-specific WebSite node when needed, plus sitemap and llms.txt discovery links.
The supplementary llms.txt quotes the page metadata; it is not a Google ranking signal.
Existing product claims and intentional noindex directives are preserved. A scaffold
without page content is reported; this build does not invent a presentation for it.

Translations and hash routes remain client-side views, so the sitemap does not claim
they are independently served pages. Only use lastmod when an actual content-change
date is known, never the current build date.

## Safari Reader

Automatic Reader is Safari's saved browser preference, not a site route or overlay.
There is no supported website switch that disables automatic Reader while preserving
manual Reader. Do not add invented Reader meta tags, hide text from crawlers or remove
semantic markup to try to defeat it.

On the affected Mac: Safari → Settings → Websites → Reader, turn the affected sites
Off and set “When visiting other websites” to Off. Manual Reader remains available.
Native Safari Reader must be checked on macOS; a Chromium or WebKit test cannot verify
Safari's application-level Reader preference.

## Sources and maintenance

- [Apple: website settings](https://support.apple.com/guide/safari/ibrwe2159f50/mac)
- [Google: JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: robots directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

The build scripts are local copies so this repository builds independently. Their
shared source is the workspace's `scripts/site-*-template.mjs`; after changing one,
run `node scripts/sync-site-seo.mjs` there. Its `--check` mode verifies all copies.
The workspace's `node --test scripts/site-seo.test.mjs` tests the checks themselves.
The hub keeps its existing specialised prerender and full llms.txt generation.
