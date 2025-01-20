import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/users/:userId", async (req, res) => {
  res.status(500).json({ error: "Unable to retrieve user" });
});
usersRouter.patch("/users/:userId", async (req, res) => {
  res.status(500).json({ error: "Unable to edit user" });
});
