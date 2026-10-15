# checklist-web repository and deployment

The presentation site is now the independent `neuratim/checklist-web` repository.
In a full workspace it stays at `packages/checklist/web/`, ignored by the parent
app repository. It is not a Git submodule. The Flutter platform directory
`../app/web/`, where supported, remains owned by the app repository.

## Verify and commit

Run from this repository root:

```sh
npm ci
npm run format:check
npm run lint
npm run tsc
npm run build
```

The build retains its existing prerender, SEO and test gates where present.
GitHub Actions verifies pushes to `main` and manual `main` runs; it downloads
only this repository. This standalone site keeps `main`, without an app-style
`dev` branch. Commit and push site changes here, separately from app changes.

## Cloudflare Git build

Connect Cloudflare to `neuratim/checklist-web`, production branch `main`, with the
repository root (empty path or `.`), build command `npm run build`, and output
`dist`. The former project root `web` is no longer correct in this repository.
Keep the existing public build variables, custom domain and deployment tooling.
The workflow validates the static build; the existing Cloudflare Git integration
owns deployment. Reconnecting Cloudflare is a dashboard operation and is not
performed by moving these Git files.

All current product websites have independent repositories. Use the workspace
`docs/web-repositories-windows.md` for older checkouts.
See [CODEMAP.md](CODEMAP.md) for source ownership. App files are used only for
capture/refresh workflows; an ordinary site install and build needs no sibling.

## Migration source

Initial website content was exported from `neuratim/checklist` at
`d8d2b7ab91c2341d5dfc2f274a3169ccdcb753b6`, tree `web/`. The independent repository
contains website history only; application history is retained in the parent.

## Pinned static Worker deployment

The existing Git-integrated Worker is `checklist-web`. Keep the repository
root and `npm run build` build command. Its deploy command must be exactly
`npx --yes wrangler@4.148.0 deploy --config wrangler.jsonc`. The checked-in config
serves `dist/` using `404-page`; do not fall back to automatic Vite SPA
configuration. Changing dashboard settings or publishing requires separate approval.
A local build verifies packaging and headers, not the deployed HTTP status.
