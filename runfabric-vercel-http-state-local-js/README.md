# runfabric-vercel-http-state-local-js

RunFabric project — provider: **vercel**, trigger: **http**.

## Prerequisites

- [RunFabric CLI](https://github.com/runfabric/runfabric) installed
- Node.js 18+
- `npm install` (or your package manager)

## Quick start

1. Copy `.env.example` to `.env` and set credentials for vercel.
2. Check config: `runfabric doctor --config runfabric.yml --stage dev`
3. Deploy: `runfabric deploy --config runfabric.yml --stage dev`

## Config

- **runfabric.yml** — service, provider, functions, events
- Handler: `src/handler.js`
