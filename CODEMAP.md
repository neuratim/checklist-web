# checklist-web code map

This repository is checked out at `packages/checklist/web/` in the NeuraTiM
workspace and also builds on its own. Its Git root is this directory.

| Path                                                                    | Responsibility                                              |
| ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| `index.html`, `src/main.tsx`, `src/App.tsx`                             | HTML and React entry points                                 |
| `site.config.ts`                                                        | Public URLs, product identity and support settings          |
| `src/`                                                                  | Page components, styles, dictionaries and browser behavior  |
| `public/`                                                               | Committed website media, crawler files and response headers |
| `scripts/` (where present)                                              | Site generation and validation tools                        |
| `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig*.json` | Reproducible install, build and strict TypeScript settings  |
| `.github/workflows/verify.yml`                                          | Main-only website checks without the app checkout           |
| `.gitattributes`, `.gitignore`                                          | Cross-platform line endings and generated/local exclusions  |

For page changes, start in `src/` and update every affected locale. For deployment
or repository boundaries, read [REPOSITORY.md](REPOSITORY.md). For app captures,
use the sibling `../app/` only while preparing images; CI consumes committed media.

## Privacy policy

`src/constants/routes.ts` defines the canonical `/privacy-policy/` page;
`src/lib/pageLinks.ts` accepts the slashless URL and preserves the active language path.
`src/types/app.ts` defines explicit static/browser route selection.
`src/App.tsx` also keeps legacy `#privacy-policy` navigation working.
`src/components/PrivacyPolicy.tsx` renders the app policy and owns its safe-inset
surface through `PrivacyPolicy.css`. Its wrapping `policy-nav` keeps Back left
and the language selector physically right in LTR and RTL, and is hidden in print.
`src/entry-server.tsx` selects and renders
all locale policies for `scripts/prerender.mjs`, which writes the independent
static document and its policy-specific metadata and WebPage schema.
`scripts/verify-privacy.mjs` is a build gate for the complete static policy,
all locale content and return links, metadata, sitemap and safe-inset ownership;
`scripts/privacy-route.test.mjs` rejects unrelated paths and lost locale links.

## Indexed language documents

`scripts/localize.mjs` is a standalone copy of the workspace
`scripts/site-localization-template.mjs`, refreshed by
`node scripts/sync-site-seo.mjs checklist`. It runs after prerendering and
emits translated static documents, canonical/hreflang metadata and the sitemap.
`src/entry-server.tsx` exports the real translated `seoLanguages` and
`renderSeoPage` contract; untranslated placeholders advertise English only.
`src/lib/seoLanguage.ts` is copied from the workspace language URL template
by `node scripts/site-language-sync.mjs`. English retains its existing paths;
other languages use prefixes such as `/cs/` and `/cs/privacy-policy/`.
Explicit URLs select the language deterministically, while legacy `?lang=` links
migrate with their section and other query values preserved.

## Webmaster verification

`index.html` retains the issued Seznam ownership meta in its static head.
`public/ae5a50858faf2d8dbed2814509f0ac83.txt` is the permanent, per-host IndexNow
ownership key, copied unchanged to the deployment root. Keep both for ownership
rechecks; these files add no analytics and send no indexing notifications.

## Static hosting contract

`wrangler.jsonc` pins the existing `checklist-web` Worker and serves
`dist/` with `404-page` fallback. The Git deploy command must explicitly use
`--config wrangler.jsonc` so automatic Vite SPA configuration cannot replace it.
`public/_headers` supplies host-only HSTS, nosniff and referrer policy while preserving
existing CSP and embed allowances. Only fingerprinted `/assets/*` files are immutable;
HTML, crawler files and permanent webmaster keys retain normal revalidation.

`npm run build` ends with `scripts/verify-hosting.mjs`, a standalone copy of the
workspace hosting guard. It checks the exact Worker/output/fallback contract, the
noindex 404 artifact, preserved headers and fingerprinted immutable asset scope.
Refresh it from the workspace with `node scripts/sync-site-hosting.mjs`; standalone
CI needs only this repository and its locked dependencies.

The pinned Cloudflare Git deploy command is documented in [REPOSITORY.md](REPOSITORY.md#pinned-static-worker-deployment).

## Browser language loading

'src/i18n/registry.ts' imports only English eagerly and asynchronously loads the
selected browser dictionary. 'serverRegistry.ts' retains the complete synchronous
SSR inventory; 'src/entry-server.tsx' supplies its exact dictionary to the provider.
'src/main.tsx' keeps the translated static document visible until initialization
finishes. 'scripts/locale-loading.test.mjs' checks all-locale SSR parity, English
fallback, caching and the browser import boundary without a browser or network.

## Startup transfer budget

`scripts/verify-startup.mjs` checks the generated entry and module preloads,
recursively counts static dependencies plus selected-locale chunks, and rejects
startup JavaScript above 150 KiB gzip. `scripts/startup-budget.test.mjs` guards
static/dynamic boundaries and the selected-language budget; ordinary builds run
the budget gate before the final hosting validation.

`src/lib/retainStaticPage.ts` restores the existing reveal sections when startup
cannot load its selected locale, preserving translated static text.
`scripts/static-fallback.test.mjs` guards both reveal forms and the bootstrap
failure boundary; it never substitutes English or clears the prerendered page.
