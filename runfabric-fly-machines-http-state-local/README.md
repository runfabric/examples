# runfabric-fly-machines-http-state-local

RunFabric project — provider: **fly-machines**, trigger: **http**.

## Prerequisites

- [RunFabric CLI](https://github.com/runfabric/runfabric) installed
- Node.js 18+
- `npm install` (or your package manager)
- For deploy: run `npm run build` so `dist/` is produced

## Quick start

1. Copy `.env.example` to `.env` and set credentials for fly-machines.
2. Check config: `runfabric doctor --config runfabric.yml --stage dev`
3. Build: `npm run build`
4. Deploy: `runfabric deploy --config runfabric.yml --stage dev`

## Config

- **runfabric.yml** — service, provider, functions, events
- Handler: `src/handler.ts` (compiled to `dist/handler.js` for deploy)
