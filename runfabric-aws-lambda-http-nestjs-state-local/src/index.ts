import "reflect-metadata";
import type { UniversalHandler } from "@runfabric/core";
import { createHandler } from "@runfabric/runtime-node";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

let cachedHandler: UniversalHandler | null = null;

async function createNestHandler(): Promise<UniversalHandler> {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.init();
  return createHandler(app);
}

export const handler: UniversalHandler = async (req) => {
  if (!cachedHandler) {
    cachedHandler = await createNestHandler();
  }
  return cachedHandler(req);
};
