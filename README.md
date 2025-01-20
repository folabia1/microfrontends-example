# microfrontends-example

An example of a Multi-Page Application (MPA) where:

- each page is served individually from its own endpoint
- each page is bundled individually
- in Production Mode, requests for a page (and its assets) respond by serving the static assets created when bundling
- in Development mode, requests for a page (and its assets) are proxied to the Dev Server for that page
- in Development mode, developers get Hot Module Replacement (HMR)
- each page can use any frontend framework/library (e.g. React, Vue, Vanilla JS, etc)
- each page manages its own dependencies with its own `package.json`

## running locally

- `npm install`
- `npm run dev`

## building for production

- `npm install`
- `npm run build`

## running in production

- `npm run production`

## adding a new page

- in `/web/pages`, run `npm create vite@latest` to create a new vite project (e.g. `my-new-page`)
- choose a template (e.g. React + JS)
- `cd my-new-page`
- `npm install`
- if a `vite.config.js` was not automatically created, create one in `/web/page/my-new-page`
- decide on which port the dev server for `my-new-page` should run on (e.g. port `4005`)
- set `server: { port: 4005 }` in `vite.config.js`
- set `base: "/my-new-page"` in `vite.config.js`
- set `build: { outDir: "../../../server/bundles/my-new-page", emptyOutDir: true }` in `vite.config.js`
- add a new entry to `pageInfo` in `proxy.ts`
  - `"my-new-page": { devServerPort: 4005 }`
- add a new endpoint to serve the page in `pages.ts`
  - `pages.get("/my-new-page", render("my-new-page"));`
- add a new endpoint to serve the page assets in `pages.ts`
  - `pages.get("/my-new-page/*", render("my-new-page"));`
