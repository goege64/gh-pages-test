import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    runes: true,
  },
  kit: {
    adapter: adapter(),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
};
