import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import { remarkReadingTime } from './src/utils/readTime.ts';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://simplysteeped.com/',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    },
    drafts: true
  }), sitemap(), tailwind(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), react()],
  adapter: netlify()
});