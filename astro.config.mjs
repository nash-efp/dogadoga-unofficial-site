import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nash-efp.github.io',
  base: '/dogadoga-unofficial-site',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
