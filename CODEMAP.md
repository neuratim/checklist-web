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
`src/lib/pageLinks.ts` accepts the slashless URL and preserves the active `?lang=`.
`src/types/app.ts` defines explicit static/browser route selection.
`src/App.tsx` also keeps legacy `#privacy-policy` navigation working.
`src/components/PrivacyPolicy.tsx` renders the app policy and owns its safe-inset
surface through `PrivacyPolicy.css`. `src/entry-server.tsx` selects and renders
all locale policies for `scripts/prerender.mjs`, which writes the independent
static document and its policy-specific metadata and WebPage schema.
`scripts/verify-privacy.mjs` is a build gate for the complete static policy,
all locale content and return links, metadata, sitemap and safe-inset ownership;
`scripts/privacy-route.test.mjs` rejects unrelated paths and lost locale links.
