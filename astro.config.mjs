import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Target domain; not yet registered (see README, "Deployment").
  site: "https://ictpathfinder.org",
  // Vitest (via `getViteConfig`) resolves the content layer's cache in "dev" mode from
  // `.astro/`; pointing `cacheDir` there keeps `pnpm test` working on a fresh checkout.
  cacheDir: "./.astro/",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
