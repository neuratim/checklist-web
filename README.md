# NeuraTiM Checklist — presentation site

React + TypeScript + Vite. Notes below the fold are the Vite template's own.

## Build and deployment

Run `npm ci`, then `npm run build` to produce the static site in `dist/`.
Run `npm run preview` after building to preview it with Vite.
Cloudflare's dashboard Git integration deploys `main`, using the repository root as the project root.
`wrangler.jsonc` pins the existing assets-only Worker and real 404 fallback.
The pinned deploy command is recorded in [REPOSITORY.md](REPOSITORY.md#pinned-static-worker-deployment).
See [CODEMAP.md](CODEMAP.md) for the source and configuration map.

## Copy and translations

The site supports the same eighteen languages as the app. English is the complete
`Dictionary`; other dictionaries overlay it at runtime for recovery. Add and change
copy in all eighteen dictionaries, translated, in the same change. Update
`src/types/dictionary.ts` when its shape changes. Arrays merge by index, so keep
translated entries in the same semantic order.

## Real app screens

The eight screen components use `NativeAppScreen` to display real native iOS captures
in the app's default Alpine Calm style, light theme, and the chosen language. `PhoneFrame` preserves
the complete native frame and adds no invented OS controls.

`public/screens/<app-language>/` contains eight 603×1311 WebPs per language (144 images).
The medium-iPhone originals and capture-only production-route tooling live in
`../app/store-assets/app-store-connect/ios/.sources/screenshots/capture/`: `web_capture.dart.txt`
(the eight views, built as `tool/web_capture.dart` in a disposable app copy with
`store_fixture.dart.txt`), `run_web.sh` (one bounded simulator session) and
`export_website.py`. After recapturing, run:

```sh
python ../app/store-assets/app-store-connect/ios/.sources/screenshots/capture/export_website.py   <native-capture-folder> public/screens
```

The exporter requires Pillow and expects eighteen store-locale folders. It maps
`en-US/es-ES/fr-FR/pt-BR/zh-Hans` to runtime `en/es/fr/pt/zh`, retaining the other codes.
It resizes the complete 1206×2622 frame once, without editing UI or cropping content.
Review the source captures and website layout after every image refresh. See
[the store assets](../app/store-assets/README.md) for device and capture provenance.

The 29 October 2026 refresh recaptured all 144 views from Checklist 1.6.0+31 (`dev` 2498c1f,
iPhone 17, iOS 26.5, 9:41 status bar) after the app's redesign. Seven views come straight from
`dev`. **Backup & restore (`09-backup`) was captured from a disposable copy of `dev` with
`ai/checklist-encrypted-backups` (a775a53) applied**, because this site's copy describes
passphrase-encrypted backups that `dev` does not have yet. Once that branch is merged, recapture
`09-backup` from `dev`. All 18 languages were reviewed as contact sheets; `npm test` checks the
files exist at the exported size. No deployment was performed.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
    "$schema": "./node_modules/oxlint/configuration_schema.json",
    "plugins": ["react", "typescript", "oxc"],
    "options": {
        "typeAware": true
    },
    "rules": {
        "react/rules-of-hooks": "error",
        "react/only-export-components": ["warn", { "allowConstantExport": true }]
    }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Repository ownership

This is the independent checklist-web repository. Read [REPOSITORY.md](REPOSITORY.md)
for main-only CI, Cloudflare repository settings and optional app refresh workflows.
Read [CODEMAP.md](CODEMAP.md) for the local source map.
