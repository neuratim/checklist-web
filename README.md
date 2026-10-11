# NeuraTiM Checklist — presentation site

React + TypeScript + Vite. Notes below the fold are the Vite template's own.

## Build and deployment

Run `npm ci`, then `npm run build` to produce the static site in `dist/`.
Run `npm run preview` after building to preview it with Vite.
Cloudflare's dashboard Git integration deploys `main`, using the repository root as the project root.
There is no repository Wrangler configuration, Wrangler dependency, Cloudflare Vite
plugin or local deploy script. Cloudflare supplies its own deployment tooling.
See [CODEMAP.md](CODEMAP.md) for the source and configuration map.

## Copy and translations

The site supports the same eighteen languages as the app. English is the complete
`Dictionary`; other dictionaries overlay it at runtime for recovery. Add and change
copy in all eighteen dictionaries, translated, in the same change. Update
`src/types/dictionary.ts` when its shape changes. Arrays merge by index, so keep
translated entries in the same semantic order.

## Real app screens

The eight screen components use `NativeAppScreen` to display real native iOS captures,
with the app's Misty Aurora background and the chosen language. `PhoneFrame` preserves
the complete native frame and adds no invented OS controls.

`public/screens/<app-language>/` contains eight 603×1311 WebPs per language (144 images).
The medium-iPhone originals and capture-only production-route tooling live in
`../app/store-assets/app-store-connect/ios/.sources/screenshots/`. After recapturing, run:

```sh
python ../app/store-assets/app-store-connect/ios/.sources/screenshots/export_plain.py \
  iphone-medium <native-capture-folder> --website public/screens
```

The exporter requires Pillow and expects eighteen store-locale folders. It maps
`en-US/es-ES/fr-FR/pt-BR/zh-Hans` to runtime `en/es/fr/pt/zh`, retaining the other codes.
It resizes the complete 1206×2622 frame once, without editing UI or cropping content.
Review the source captures and website layout after every image refresh. See
[the store assets](../app/store-assets/README.md) for device and capture provenance.

The October 2026 refresh was compiled locally. All eight image views were manually
inspected in Czech desktop and Arabic mobile (390×578), with additional Arabic
desktop Hero/Run review. [Review evidence](../app/store-assets/app-store-connect/ios/.sources/screenshots/evidence/website-review.json)
records the scope; test suites were not run after the user's instruction. No deployment was performed.

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
