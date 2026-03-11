# TypeScript Prototype Template

Purpose
This repository is a minimal TypeScript template for quickly prototyping a small script and starting a debugger-backed iteration loop.

Quick references
- Source: [src/helloWorld.ts](src/helloWorld.ts#L1)
- Tests: [tests/helloWorld.test.ts](tests/helloWorld.test.ts#L1)
- Project config: [package.json](package.json#L1)

Prerequisites
- Node.js (>= 18)
- pnpm (recommended, repo uses pnpm but npm/yarn also work)

Install
```bash
pnpm install
```

Run the example
- Run directly with tsx (no build):

```bash
pnpm dev
```

Watch / auto-restart (recommended for fast prototyping)
```bash
pnpm dev:watch
```

Build & Run the compiled js
```bash
pnpm build
node ./src/helloWorld.js
```

Tests
```bash
pnpm test
```

VS Code Debugging

Example .vscode/launch.json included. Open the ./src/helloWorld.ts file and press F5.
