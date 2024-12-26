import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  adapter: netlify(),
  integrations: [tailwind(), icon(), mdx(), react(), sitemap({
    i18n: {
      defaultLocale: "es", 
      locales: {
        en: "en", 
        es: "es",
      },
    },
  }), astroI18next() ],
});