import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node"; 
import vercel from "@astrojs/vercel"; 


// https://astro.build/config
export default defineConfig({
  site: 'https://br-wasi.vercel.app',
  output: 'server',
  adapter: vercel(),
  adapter: node({                        
    mode: "standalone",
  }),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  integrations: [
    tailwind(),
    icon(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    astroI18next(),
  ],
  
});