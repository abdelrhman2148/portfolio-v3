import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://abdelrhman-fikri.netlify.app', // TODO(owner): update if a custom domain is bought
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
