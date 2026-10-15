# Search and crawler output

The production build serves static HTML for every genuinely translated language.
English retains the existing URLs; other languages use explicit paths such as
`/cs/` and `/cs/privacy-policy/`. Each translated page has its own title,
description, canonical URL, reciprocal hreflang links and sitemap entry.
There is no separately maintained fallback copy or added server runtime.
The styled content is readable without JavaScript; React selects the language
from the explicit URL when it starts. Interactive controls require JavaScript.

`npm run build` runs the existing prerender, `scripts/localize.mjs`, then the
SEO and product-specific checks. Deploy the normal asset directory; `dist-ssr/`
is build tooling and is never deployed. `npm run verify:seo` repeats the
crawler checks without rebuilding.

The build checks each indexed document's canonical and social URLs, metadata,
primary heading, structured data, reciprocal alternates, crawler files and
real static assets. It emits a dedicated 404 document for unknown paths.
English-only placeholders do not advertise untranslated alternate pages.
Empty unfinished presentations remain `noindex, follow` with empty sitemaps
until substantive product content is ready.

Explicit language paths take precedence over preferences. Legacy `?lang=`
links still work and migrate to the matching language path while retaining
the section and other query values. Language choices navigate between real
documents; hash-only application previews remain client-side and stay out of
the sitemap. Use lastmod only for an actual known content-change date.

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
