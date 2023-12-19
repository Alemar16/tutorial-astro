import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://alemar16-tutorial-astro.netlify.app/",
  integrations: [preact()]
});