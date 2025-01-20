import path from "path";
import express, { type NextFunction, type Request, type Response } from "express";
import { pageInfo, proxyMiddlewares } from "../proxy.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function render(page: keyof typeof pageInfo) {
  return async function (req: Request, res: Response, next: NextFunction) {
    // DEV MODE: proxy request to vite dev server
    if (process.env.NODE_ENV === "development") {
      const proxyMiddleware = proxyMiddlewares[page];
      if (!proxyMiddleware) {
        res.status(500).json({ error: "Proxy middleware not available" });
      }

      // @ts-ignore
      await proxyMiddleware!(req, res, next);
      return;
    }

    // PRODUCTION MODE: serve prebuilt assets
    else {
      const assetPath = path.join(__dirname, "..", "..", "bundles");
      if (req.path === "/") {
        res.sendFile(path.join(assetPath, "page1", "index.html"));
        return;
      }
      const serveStaticAssets = express.static(assetPath);
      serveStaticAssets(req, res, next);
      return;
    }
  };
}

export const pages = express.Router();

// pages
pages.get("/", render("page1"));
pages.get("/page1", render("page1"));
pages.get("/page2", render("page2"));
pages.get("/page3", render("page3"));
pages.get("/page4", render("page4"));
pages.get("/page5", render("page5"));
pages.get("/page6", render("page6"));

// assets
pages.get("/page1/*", render("page1"));
pages.get("/page2/*", render("page2"));
pages.get("/page3/*", render("page3"));
pages.get("/page4/*", render("page4"));
pages.get("/page5/*", render("page5"));
pages.get("/page6/*", render("page6"));
