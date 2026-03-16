# runfabric-gcp-functions-http-state-local-python

RunFabric project — provider: **gcp-functions**, trigger: **http**.

## Prerequisites

- [RunFabric CLI](https://github.com/runfabric/runfabric) installed
- Python 3.11+

## Quick start

1. Copy `.env.example` to `.env` and set credentials for gcp-functions.
2. Check config: `runfabric doctor --config runfabric.yml --stage dev`
3. Deploy: `runfabric deploy --config runfabric.yml --stage dev`

## Config

- **runfabric.yml** — service, provider, functions, events
- Handler: `handler.py`
