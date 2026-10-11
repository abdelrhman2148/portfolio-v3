import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'reference/', '.lighthouseci/', 'src/env.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: { globals: { process: 'readonly', Buffer: 'readonly', fetch: 'readonly', setTimeout: 'readonly', console: 'readonly', document: 'readonly', globalThis: 'readonly' } },
  },
];
