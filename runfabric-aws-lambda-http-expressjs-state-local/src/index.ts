import type { UniversalHandler } from "@runfabric/core";
import { createHandler } from "@runfabric/runtime-node";
import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.status(200).json({
    framework: "expressjs",
    message: "hello from express example"
  });
});

app.post("/echo", (req, res) => {
  res.status(200).json({
    framework: "expressjs",
    body: req.body ?? null
  });
});

export const handler: UniversalHandler = createHandler(app);
