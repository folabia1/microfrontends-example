import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 4002 },
  base: "/page3",
  build: { outDir: "../../../server/bundles/page3", emptyOutDir: true },
});
