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
