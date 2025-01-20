import express from "express";

import { usersRouter } from "./users.js";
import { infoRouter } from "./info.js";

export const api = express.Router();

// * API ENDPOINTS GO HERE
api.use(usersRouter);
api.use(infoRouter);
