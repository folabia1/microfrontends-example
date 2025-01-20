import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 4004 },
  base: "/page5",
  build: { outDir: "../../../server/bundles/page5", emptyOutDir: true },
});
