# runfabric-aws-lambda-http-state-local-go

RunFabric project — provider: **aws-lambda**, trigger: **http**.

## Prerequisites

- [RunFabric CLI](https://github.com/runfabric/runfabric) installed
- Go 1.21+

## Quick start

1. Copy `.env.example` to `.env` and set credentials for aws-lambda.
2. Check config: `runfabric doctor --config runfabric.yml --stage dev`
3. Deploy: `runfabric deploy --config runfabric.yml --stage dev`

## Config

- **runfabric.yml** — service, provider, functions, events
- Handler: `handler.go`
