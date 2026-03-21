import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nash-efp.github.io',
  base: '/dogadoga-unofficial-site',
  integrations: [tailwind()],
  output: 'static',
});
