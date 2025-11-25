// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://staging.thefuture3d.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx()
  ],

  adapter: vercel()
});