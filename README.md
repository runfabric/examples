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

## Languages

Examples are available in **Node (TypeScript and JavaScript)**, **Python**, and **Go**:

| Language | Suffix / dir pattern | Run / build |
|----------|----------------------|-------------|
| **TypeScript** | (default, no suffix) e.g. `runfabric-aws-lambda-http-state-local` | `npm install && npm run build` then `runfabric doctor` |
| **JavaScript** | `-js` e.g. `runfabric-aws-lambda-http-state-local-js` | `npm install` then `runfabric doctor` |
| **Python** | `-python` e.g. `runfabric-aws-lambda-http-state-local-python` | `pip install -e .` (if needed) then `runfabric doctor` |
| **Go** | `-go` e.g. `runfabric-aws-lambda-http-state-local-go` | `go build ./...` then `runfabric doctor` |

Most examples are TypeScript; a subset is provided in JS, Python, and Go for the same providers.

## Quick Start

1. Ensure `runfabric` is available in your shell.
2. Pick an example folder from the list below (Node/TS: use `runfabric`; Python: `runfabric doctor` etc.; Go: same).
3. Open that folder and run (Node examples):

```bash
npm run doctor
npm run plan
npm run build
npm run call:local
```

For Python/Go, run `runfabric doctor`, `runfabric plan`, etc. from the example directory. For full `runfabric init` commands, see [`example.md`](./example.md).

## Example Index

### AWS Lambda

- [`runfabric-aws-lambda-http-state-local`](./runfabric-aws-lambda-http-state-local) (TypeScript)
- [`runfabric-aws-lambda-http-state-local-js`](./runfabric-aws-lambda-http-state-local-js) (JavaScript)
- [`runfabric-aws-lambda-http-state-local-python`](./runfabric-aws-lambda-http-state-local-python) (Python)
- [`runfabric-aws-lambda-http-state-local-go`](./runfabric-aws-lambda-http-state-local-go) (Go)
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

- [`runfabric-vercel-http-state-local`](./runfabric-vercel-http-state-local) (TypeScript)
- [`runfabric-vercel-http-state-local-js`](./runfabric-vercel-http-state-local-js) (JavaScript)

### Netlify

- [`runfabric-netlify-http-state-local`](./runfabric-netlify-http-state-local)

### Cloudflare Workers

- [`runfabric-cloudflare-workers-http-state-local`](./runfabric-cloudflare-workers-http-state-local) (TypeScript)
- [`runfabric-cloudflare-workers-http-state-local-js`](./runfabric-cloudflare-workers-http-state-local-js) (JavaScript)
- [`runfabric-cloudflare-workers-http-state-local-python`](./runfabric-cloudflare-workers-http-state-local-python) (Python)
- [`runfabric-cloudflare-workers-cron-state-local`](./runfabric-cloudflare-workers-cron-state-local)

### DigitalOcean Functions

- [`runfabric-digitalocean-functions-http-state-local`](./runfabric-digitalocean-functions-http-state-local)

### GCP Functions

- [`runfabric-gcp-functions-http-state-local`](./runfabric-gcp-functions-http-state-local) (TypeScript)
- [`runfabric-gcp-functions-http-state-local-python`](./runfabric-gcp-functions-http-state-local-python) (Python)
- [`runfabric-gcp-functions-http-state-local-go`](./runfabric-gcp-functions-http-state-local-go) (Go)
- [`runfabric-gcp-functions-queue-state-local`](./runfabric-gcp-functions-queue-state-local)
- [`runfabric-gcp-functions-storage-state-local`](./runfabric-gcp-functions-storage-state-local)
- [`runfabric-gcp-functions-pubsub-state-local`](./runfabric-gcp-functions-pubsub-state-local)

### Azure Functions

- [`runfabric-azure-functions-http-state-local`](./runfabric-azure-functions-http-state-local) (TypeScript)
- [`runfabric-azure-functions-http-state-local-python`](./runfabric-azure-functions-http-state-local-python) (Python)
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

- Most examples are TypeScript (Node); a subset is provided in **JavaScript**, **Python**, and **Go** (see Languages table above).
- Some non-HTTP examples use `--template storage`, `eventbridge`, or `pubsub` (or were bootstrapped from `worker` and adapted in `runfabric.yml`).
- Each example is isolated so you can test provider behavior independently.
