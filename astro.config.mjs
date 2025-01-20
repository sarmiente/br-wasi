import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";



import vercel from "@astrojs/vercel";



// https://astro.build/config
export default defineConfig({
  output: 'server',

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

  vite: {
    ssr: {
      noExternal: ["astro-i18next"], // Evita que esta dependencia sea externalizada
    },
  },

  adapter: vercel(),
});