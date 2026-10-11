import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://abdelrhman-fikri-runbook.netlify.app', // TODO(owner): switch to the final domain at cutover
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
