# packages/checklist/web — presentation site

React 19 + TypeScript + Vite. The marketing/landing site for the Flutter app in `../app`,
published at `checklist.neuratim.com`. Static, no backend of its own: the only network
call it makes is Stripe's, cross-origin, for the optional tip widget.

Formatting and the commit gate are local to this website — see [REPOSITORY.md](REPOSITORY.md).
Use [CODEMAP.md](CODEMAP.md) to locate source and build configuration.

`README.md` records the native capture workflow and language mapping for the presentation images.

## Commands

| Purpose       | Command                                                      |
| ------------- | ------------------------------------------------------------ |
| Dev server    | `npm run dev`                                                |
| Format        | `npm run format`                                             |
| Verify format | `npm run format:check`                                       |
| Lint          | `npm run lint` (oxlint)                                      |
| Type-check    | `npm run tsc`                                                |
| Build         | `npm run build` (TypeScript, Vite, prerender and SEO checks) |
| Preview build | `npm run preview` (Vite; run build first)                    |

Prettier: 4-space indent, double quotes, `printWidth: 110`, trailing commas everywhere.
tsconfig is strict plus `noUncheckedIndexedAccess`, `noUnusedLocals/Parameters`,
`erasableSyntaxOnly` and `verbatimModuleSyntax` — so type-only imports **must** be written
`import type { … }`. oxlint runs the react / react-perf / typescript / unicorn / oxc /
import / jsx-a11y plugins with `correctness: error`, `perf` and `suspicious` at warn.

## Layout

```
index.html            Title, description, theme-color, favicon — the SEO surface
public/               Copied verbatim to dist/: _headers (Cloudflare response headers,
                      CSP report-only while Stripe and the app iframe are watched),
                      robots.txt + sitemap.xml (without them the SPA fallback answers
                      /robots.txt with index.html), app-icon-64.png for the page chrome
                      and app-icon.png, the 1024px master, for artwork only
site.config.ts        The only reader of import.meta.env and the only place a URL is
                      written; store links in a fixed order: android, web, ios, mac, windows
                      (mac and windows are optional and come together)
src/main.tsx          StrictMode → LanguageProvider → App
src/App.tsx           Routes: #try → TryApp, /privacy-policy/ → PrivacyPolicy,
                      otherwise the landing page (Nav, Hero, HowItWorks, QuickStart,
                      ConditionalItems, Features, Insights, Security, Privacy,
                      FreeAndSupport, GetApp, Footer)
src/components/       One component per file, each with a sibling .css it imports itself
src/components/Showcase.tsx  The copy-beside-a-phone section shape, shared by
                      ConditionalItems, QuickStart, Insights and Security — those four
                      own only their dictionary keys and which mockup goes in the frame
src/components/screens/   NativeAppScreen image renderer, eight view wrappers and PhoneFrame
public/screens/<locale>/   Eight native captures per app language, exported as WebP
src/constants/        Every constant (routes and section ids, nav links, platforms, tip
                      presets and limits, storage keys, timings, mockup literals).
                      Imports only `site.config.ts` and `types/`
src/types/            Every shared type and interface — `dictionary.ts` (the copy shape),
                      `language.ts`, `tip.ts`, `components.ts`, … Imports only other
                      `types/` files, which is what keeps the graph acyclic
                      (`import/no-cycle` is an error in oxlint)
src/lib/              Pure helpers: storage, anchorScroll, navFit, brand, formatCopy
src/hooks/            useHashRoute, useScrollReveal (IntersectionObserver, honours
                      prefers-reduced-motion)
src/i18n/             Dictionaries, provider, English-fallback merge, language metadata
src/index.css         Global reset + all design tokens
```

Notable components: `TryApp` embeds the live Flutter web app in a sandboxed cross-origin
iframe with a bootstrap-grace overlay and an optional `checklist-app:ready` postMessage
handshake. `TipCheckout` mounts Stripe Elements and gets its PaymentIntent from the hub
Worker at `STRIPE_API_BASE_URL` — nothing secret lives in this project. `PrivacyPolicy` is
its own dedicated page, not a section, because that URL is what the app stores are given (the
app’s legacy `/?lang=xx#privacy-policy` links also remain compatible).

## i18n — English is the source of truth

`src/i18n/locales/en.ts` is the only file typed as the full `Dictionary`. Every other
locale is a `LocaleDictionary` (a `DeepPartial`) overlaid onto English at load time by
`mergeDictionary.ts`, index-aligned for arrays.

- **Adding or changing copy** — update the dictionary types and all eighteen locale
  dictionaries in the same change, translated; the runtime English fallback is recovery,
  not permission to leave translations stale.
- **Renaming/removing a key** — update every locale that uses it.
- **Arrays merge by index.** Keep their semantic ordering consistent in all languages;
  insertions and reordering require the corresponding translated entries.

18 locales, same set as the app. `LanguageProvider` reads an explicit language path first, accepts legacy `?lang=`
links on unprefixed paths, and otherwise uses English so each URL stays stable.
It sets `documentElement.lang`/`dir`; language changes navigate to the matching
static document. Read [SEO.md](SEO.md) for the URL and build contract.

## Native app presentation images

`NativeAppScreen` selects `/screens/<app-language>/<view>.webp` using the active
`LanguageProvider`. The eight view wrappers show Checklists, Templates, Run, Schedule,
Condition, Start, Statistics and Backup. The images are native iOS framebuffer captures
of the actual production routes with isolated fictional data, light theme and Misty Aurora.
They retain the app's real background, localized content and system bars.

`PhoneFrame` is a decorative shell; it adds no status bar, Dynamic Island or home indicator.
Its screen preserves the complete 1206:2622 aspect ratio. The source captures are 1206×2622;
website WebPs are 603×1311. The Hero loads eagerly at high priority and other views lazily.
The surrounding translated prose explains these decorative images to assistive technology.

When the app UI changes, capture it first. Use the capture-only production entrypoint in
`../app/store-assets/app-store-connect/ios/.sources/screenshots/capture/` on the medium
iPhone, then run `export_plain.py iphone-medium <native-captures> --website public/screens`.
The exporter preserves the whole native frame and creates all 144 website images.
It maps store locale folders `en-US/es-ES/fr-FR/pt-BR/zh-Hans` to runtime folders
`en/es/fr/pt/zh`; the other thirteen identifiers are shared. Review the real captures
and the resulting desktop, narrow/mobile and Arabic site layout. Never redraw or edit
app controls or replace an app background in a raster editor. See the platform assets
README for capture provenance and source/build requirements.

Site tokens remain separate from the native image pixels; changing `--app-*` CSS tokens
does not update a captured screen. Native image refreshes therefore belong with app UI
changes rather than theme-token approximation.

## Config and deployment

`site.config.ts` is the single place `import.meta.env` is read and the single place a URL is
written; import the constants from it rather than touching env vars or writing a link inline.
No user-visible word lives in a component or a constant: copy comes from the dictionaries (an
email subject included), and only proper names (`constants/brand.ts`, store and platform names)
are written in code. `.env` is committed and holds no secrets — site
URL, app URL, contact email, tip links, and the Stripe _publishable_ key. The secret key
and the PaymentIntent Worker live in `../../web` (see its `PAYMENTS.md`).

The Flutter workflow publishes `app/build/web` to Cloudflare Pages at
`checklist-app.neuratim.com`; that is separate from this presentation site.
Cloudflare's dashboard Git integration deploys this static site from `main`, with
the repository root as the project root. `npm run build` produces the deployable `dist/` directory.
This repository uses plain Vite. `wrangler.jsonc` pins the existing assets-only
Worker with real 404 fallback; `scripts/verify-hosting.mjs` checks the final packaging.
Use the explicit deploy command in [REPOSITORY.md](REPOSITORY.md#pinned-static-worker-deployment).
Build first, then use `npm run preview` locally; a local build does not verify production.

## Independent repository

This directory is the checklist-web Git root. Read [CODEMAP.md](CODEMAP.md) and
[REPOSITORY.md](REPOSITORY.md) for standalone build, main-only CI and deployment
settings; those repository boundaries supersede older parent-workflow descriptions.
Run format checking, lint, type checking and the complete build before committing.
Sibling app paths are for capture/refresh tasks, never ordinary CI build inputs.

The public app policy is served at `/privacy-policy/` (also accepts `/privacy-policy`); legacy `#privacy-policy` links remain compatible. The build includes `scripts/verify-privacy.mjs`; run `npm test` for route regressions. See [CODEMAP.md](CODEMAP.md) for content, rendering and navigation ownership.
