import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ies-erasmus.netlify.app",
  integrations: [preact(), icon(), tailwind()],
  output: "server",
  adapter: netlify(),
});
