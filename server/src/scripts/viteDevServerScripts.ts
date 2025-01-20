import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";
import { pageInfo } from "../proxy.js";
import path from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export async function startViteDevServer(page: keyof typeof pageInfo) {
  const rootPath = path.join(__dirname, "..", "..", "..", "web", "pages", page);

  const server = await createViteServer({
    root: rootPath,
    server: { port: pageInfo[page].devServerPort },
    configFile: path.join(rootPath, "vite.config.js"),
  });

  await server.listen(pageInfo[page].devServerPort, false);

  server.printUrls();
  server.bindCLIShortcuts({ print: true });
}

export async function startAllViteDevServers() {
  const promises = Object.keys(pageInfo).map(async (page) => {
    await startViteDevServer(page as keyof typeof pageInfo);
  });

  await Promise.allSettled(promises);
}
