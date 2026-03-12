import type { UniversalHandler, UniversalRequest, UniversalResponse } from "@runfabric/core";

export const handler: UniversalHandler = async (
  req: UniversalRequest
): Promise<UniversalResponse> => ({
  status: 200,
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    message: "cron template tick",
    at: new Date().toISOString()
  })
});
