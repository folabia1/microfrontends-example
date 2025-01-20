import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 4003 },
  base: "/page4",
  build: { outDir: "../../../server/bundles/page4", emptyOutDir: true },
});
