// @ts-check
import { defineConfig } from 'astro/config';

// TODO: replace with the live domain once it's confirmed (used for canonical + social share URLs).
export default defineConfig({
  site: 'https://www.matastudio.com',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
