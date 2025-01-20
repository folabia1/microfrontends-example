import express from "express";
import morgan from "morgan";

import { api } from "./routers/api.js";
import { pages } from "./routers/pages.js";
import { setupProxyMiddlewares } from "./proxy.js";
import { startAllViteDevServers } from "./scripts/viteDevServerScripts.js";

const app = express();
const port = 3000;

// middlewares
app.use(morgan("tiny"));

// routers
app.use("/api", api);
app.get("/*", pages);

const server = app.listen(port, () => console.log(`Example application listening on port ${port}`));

// setup dev servers & proxies
if (process.env.NODE_ENV === "development") {
  await startAllViteDevServers();
  setupProxyMiddlewares(server);
}
