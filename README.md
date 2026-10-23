# ICT Pathfinder Website

The public website of the ICT Pathfinder project, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com). Static output, no client-side JavaScript framework.

## Quick start

Install [nvm](https://github.com/nvm-sh/nvm), then in the repository root:

```bash
nvm use
corepack enable   # provides the pnpm version pinned in package.json
make install
make dev
```

The site runs at <http://localhost:4321>.

## Make targets

- `make install` — installs dependencies from `pnpm-lock.yaml`.
- `make lint` — `astro check` (type-checks `.astro` files) and `prettier --check`.
- `make reformat` — `prettier --write .`.
- `make test-local` — builds the site, then runs the Vitest suite against `dist/`.
- `make build` — builds the production site into `dist/`.
- `make dev` — development server with live reload.

The CI (`.github/workflows/pages.yaml`) calls the same targets.

## Brand

Colours, typography and logo rules come from the style guide in
[`ictpathfinder/.github`](https://github.com/ictpathfinder/.github). The tokens in
`src/styles/global.css` mirror it. `public/logo.svg` is a copy of the master asset
`ict-pathfinder-logo.svg`; `public/icon.png` and the favicons are scaled from
`ictpathfinder-icon.png`.

## Deployment

Every push to `main` builds the site and publishes `dist/` to GitHub Pages. Pull requests run
lint and tests only.

Prerequisites outside this repository:

- **GitHub Pages must be enabled** with "GitHub Actions" as source (Settings → Pages). On the
  GitHub Free plan for organisations the repository must be **public** for Pages to work.
- **Custom domain** `ictpathfinder.org` is set in Settings → Pages, not by a `CNAME` file:
  with an Actions deployment a `CNAME` file is ignored. DNS records are listed in
  [the GitHub documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
