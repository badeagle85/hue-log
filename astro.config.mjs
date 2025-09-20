// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://badeagle85.github.io',
  base: '/hue-log',

  integrations: [
      mdx(),
      sitemap(),
      tailwind()
	],

  markdown: {
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: [],
	},

  vite: {
    plugins: [tailwindcss()]
  }
});