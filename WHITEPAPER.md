# Tet Prompt + AI Workflow Hub — Whitepaper

## 1. Vision

Make useful AI workflows understandable, reusable, and auditable. The project combines a public static site, a versioned prompt library, and operating rules that connect chat requests to verified changes.

## 2. The fused system

### Public layer

`index.html` explains the free-first stack, shows the workflow loop, and links to the reusable prompts.

### Prompt layer

`PROMPTS.md` stores portable skills with explicit inputs, outputs, constraints, verification, and manual fallbacks.

### Operations layer

`docs/agentic-operations.md` defines the boundary between planning, execution, deployment, email, and logging. It prevents the project from claiming that an unconnected service has been automated.

### Deployment layer

GitHub Pages publishes the repository root from the `main` branch. The root-level `index.html` is the site entry point; no custom build workflow is required.

## 3. Design principles

1. **Free-first, not free fantasy:** start at zero recurring infrastructure cost, but document quotas, transaction fees, domains, and limits.
2. **One source of truth:** change the repository, not a pasted copy in chat.
3. **One working loop:** capture → route → build → verify → log.
4. **Model portability:** prompts should work across providers and degrade to manual methods.
5. **Privacy by default:** do not commit secrets or log raw personal content.
6. **Human control:** public publishing, email sending, payments, and irreversible actions require explicit authorization and verification.

## 4. AI routing

Use reasoning models for difficult planning, coding models for structured transformations, general models for drafting, and deterministic scripts for repeatable administration. The exact model, limits, and license must be checked before commercial use.

## 5. Email and automation boundary

The static repository is not an inbox agent. Reading or replying to email requires an authenticated provider integration. When connected, the system should classify messages, draft sensitive replies, preserve message IDs, avoid raw-body logging, and send only under explicit authorization or a narrowly scoped rule.

## 6. Success criteria

The project is successful when a visitor can:

- understand what the system does in under one minute;
- copy a prompt and adapt it safely;
- reproduce the website from the repository;
- see the limits of free tiers and AI claims;
- inspect what changed and how it was verified.
