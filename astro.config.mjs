import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    define: {
      "process.env.PUBLIC_PB_URL": JSON.stringify(process.env.PUBLIC_PB_URL)
    }
  }
});