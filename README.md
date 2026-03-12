# Runfabric Examples

Runfabric Examples is a collection of boilerplates and serverless architecture examples built with Runfabric for AWS Lambda, Azure Functions, Google Cloud Functions, Cloudflare Workers, Vercel, Netlify, and more.

## Purpose

This repository gives you ready-to-run example projects for:

- HTTP APIs
- Queue workers
- Cron jobs
- Storage/event-driven handlers
- Provider-specific runtime wiring
- Framework wiring examples (ExpressJS, NestJS, Fastify)

## Quick Start

1. Ensure `runfabric` is available in your shell.
2. Pick an example folder from the list below.
3. Open that folder and run:

```bash
npm run doctor
npm run plan
npm run build
npm run call:local
```

For full `runfabric init` commands used to generate each folder, see [`example.md`](./example.md).

## Example Index

### AWS Lambda

- [`runfabric-aws-lambda-http-state-local`](./runfabric-aws-lambda-http-state-local)
- [`runfabric-aws-lambda-http-expressjs-state-local`](./runfabric-aws-lambda-http-expressjs-state-local)
- [`runfabric-aws-lambda-http-nestjs-state-local`](./runfabric-aws-lambda-http-nestjs-state-local)
- [`runfabric-aws-lambda-http-fastify-state-local`](./runfabric-aws-lambda-http-fastify-state-local)
- [`runfabric-aws-lambda-http-state-postgres`](./runfabric-aws-lambda-http-state-postgres)
- [`runfabric-aws-lambda-http-state-s3`](./runfabric-aws-lambda-http-state-s3)
- [`runfabric-aws-lambda-http-state-gcs`](./runfabric-aws-lambda-http-state-gcs)
- [`runfabric-aws-lambda-http-state-azblob`](./runfabric-aws-lambda-http-state-azblob)
- [`runfabric-aws-lambda-queue-state-local`](./runfabric-aws-lambda-queue-state-local)
- [`runfabric-aws-lambda-storage-state-local`](./runfabric-aws-lambda-storage-state-local)
- [`runfabric-aws-lambda-eventbridge-state-local`](./runfabric-aws-lambda-eventbridge-state-local)

### Vercel

- [`runfabric-vercel-http-state-local`](./runfabric-vercel-http-state-local)

### Netlify

- [`runfabric-netlify-http-state-local`](./runfabric-netlify-http-state-local)

### Cloudflare Workers

- [`runfabric-cloudflare-workers-http-state-local`](./runfabric-cloudflare-workers-http-state-local)
- [`runfabric-cloudflare-workers-cron-state-local`](./runfabric-cloudflare-workers-cron-state-local)

### DigitalOcean Functions

- [`runfabric-digitalocean-functions-http-state-local`](./runfabric-digitalocean-functions-http-state-local)

### GCP Functions

- [`runfabric-gcp-functions-http-state-local`](./runfabric-gcp-functions-http-state-local)
- [`runfabric-gcp-functions-queue-state-local`](./runfabric-gcp-functions-queue-state-local)
- [`runfabric-gcp-functions-storage-state-local`](./runfabric-gcp-functions-storage-state-local)
- [`runfabric-gcp-functions-pubsub-state-local`](./runfabric-gcp-functions-pubsub-state-local)

### Azure Functions

- [`runfabric-azure-functions-http-state-local`](./runfabric-azure-functions-http-state-local)
- [`runfabric-azure-functions-queue-state-local`](./runfabric-azure-functions-queue-state-local)
- [`runfabric-azure-functions-storage-state-local`](./runfabric-azure-functions-storage-state-local)

### Alibaba FC

- [`runfabric-alibaba-fc-http-state-local`](./runfabric-alibaba-fc-http-state-local)
- [`runfabric-alibaba-fc-queue-state-local`](./runfabric-alibaba-fc-queue-state-local)
- [`runfabric-alibaba-fc-storage-state-local`](./runfabric-alibaba-fc-storage-state-local)

### Other

- [`runfabric-fly-machines-http-state-local`](./runfabric-fly-machines-http-state-local)
- [`runfabric-ibm-openwhisk-http-state-local`](./runfabric-ibm-openwhisk-http-state-local)

## Notes

- Some non-HTTP examples are bootstrapped from `--template worker` and then adapted in `runfabric.yml` to `storage`, `eventbridge`, or `pubsub` trigger types.
- Each example is isolated so you can test provider behavior independently.
