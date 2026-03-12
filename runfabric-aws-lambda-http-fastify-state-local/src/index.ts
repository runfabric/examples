import type { UniversalHandler } from "@runfabric/core";
import { createHandler } from "@runfabric/runtime-node";
import Fastify from "fastify";

const app = Fastify({ logger: false });

app.get("/hello", async () => ({
  framework: "fastify",
  message: "hello from fastify example"
}));

app.post("/echo", async (request) => ({
  framework: "fastify",
  body: request.body ?? null
}));

await app.ready();

export const handler: UniversalHandler = createHandler(app);
