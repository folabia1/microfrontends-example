import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 4005 },
  base: "/page6",
  build: { outDir: "../../../server/bundles/page6", emptyOutDir: true },
});
