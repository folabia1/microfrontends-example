import express from "express";

export const infoRouter = express.Router();

infoRouter.get("/info", async (req, res) => {
  res.status(500).json({ error: "Unable to info" });
});
