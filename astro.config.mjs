<<<<<<< HEAD
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://energy-template.vbartalis.dev",
  output: "static",
  trailingSlash: "ignore",
});
=======
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  adapter: netlify(),
});
>>>>>>> fcb02746200fb67f133bf9bf4407084ba5154c70
