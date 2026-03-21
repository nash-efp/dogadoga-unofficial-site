import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nash-efp.github.io',
  base: '/dogadoga-unofficial-site',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [],
      serialize(item) {
        // トップページは最優先
        if (item.url === 'https://nash-efp.github.io/dogadoga-unofficial-site/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // gigs ページはやや低め
        if (item.url.includes('/gigs/')) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
  output: 'static',
});
