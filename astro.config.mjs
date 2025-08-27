// astro.config.mjs
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "lib",   // dossier source
            dest: ""      // copie dans dist/lib
          }
        ]
      })
    ]
  }
});