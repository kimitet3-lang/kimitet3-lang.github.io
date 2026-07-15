# Tet Prompt + AI Workflow Hub

A transparent, free-first repository for reusable prompts, small web experiments, and agentic operating rules.

## What is included

- **Website:** [`index.html`](./index.html) is a root-level static homepage for GitHub Pages.
- **Prompt library:** [`PROMPTS.md`](./PROMPTS.md) contains reusable skills for page generation, task routing, and study planning.
- **Operating rules:** [`docs/agentic-operations.md`](./docs/agentic-operations.md) connects request capture, execution, verification, email boundaries, and unified logging.
- **Tool routing:** [`docs/ai-platforms.md`](./docs/ai-platforms.md) explains how to choose a model or a deterministic method.
- **Whitepaper:** [`WHITEPAPER.md`](./WHITEPAPER.md) records the project vision and design principles.
- **Deployment:** GitHub Pages publishes the repository root from the `main` branch (configured in the repository’s Pages settings).

## Free-first architecture

1. Start with GitHub and a static Pages site.
2. Keep simple features in the browser.
3. Add Cloudflare Workers, D1, or R2 only when an API, database, or object store is needed.
4. Use local or free-tier AI for experiments, respecting quotas and model licenses.
5. Add Supabase or another hosted backend only when the product requires richer auth or relational features.

Free tiers are finite. Domains, payment processing, higher quotas, and some AI APIs can still cost money.

## Quick start

```bash
git clone https://github.com/kimitet3-lang/kimitet3-lang.github.io.git
cd kimitet3-lang.github.io
python3 -m http.server 8000
```

Open `http://localhost:8000` to preview the static site. GitHub Pages publishes the repository root after a push to `main`, using the repository’s configured branch source.

## Email boundary

This repository does not access an inbox or send email. Email handling requires an authenticated provider connection and follows the approval and privacy rules in [`docs/agentic-operations.md`](./docs/agentic-operations.md).

## Ethics

- No guaranteed income claims.
- Clear affiliate disclosures where applicable.
- No license is currently declared; do not assume reuse or redistribution rights.
- No secrets or raw private messages in commits or logs.
- Verify public changes before calling them deployed.
