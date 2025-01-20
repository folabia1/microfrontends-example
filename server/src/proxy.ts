import type { Server } from "http";
import type { RequestHandler } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

export const pageInfo = {
  page1: { devServerPort: 4000 },
  page2: { devServerPort: 4001 },
  page3: { devServerPort: 4002 },
  page4: { devServerPort: 4003 },
  page5: { devServerPort: 4004 },
  page6: { devServerPort: 4005 },
} as const;

export const proxyMiddlewares: { [index: string]: RequestHandler } = {};
export function setupProxyMiddlewares(server: Server) {
  Object.entries(pageInfo).forEach(async ([page, { devServerPort }]) => {
    const devServerUrl = `http://localhost:${devServerPort}`;
    const proxyMiddleware = createProxyMiddleware({
      target: devServerUrl,
      changeOrigin: true,
      ws: true,
    });

    server.on("upgrade", proxyMiddleware.upgrade); // <-- subscribe to http 'upgrade'
    proxyMiddlewares[page] = proxyMiddleware;
  });
}
