import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://uiuxwithshree.com",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      }

    },
  },
});

