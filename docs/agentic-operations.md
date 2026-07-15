# Agentic Operations: One Working Loop

This document is the operating contract for the Tet Prompt Hub. It keeps chat, code, deployment, email, and logging connected without pretending that an unconnected service has already been automated.

## 1. Request contract

Before an agent acts, capture:

- **Goal:** the concrete result the user wants.
- **Scope:** files, repository, account, or messages involved.
- **Side effects:** what may be changed, published, sent, or deleted.
- **Constraints:** free-first, privacy, licensing, deadline, and quality requirements.
- **Done condition:** the check that proves the work is complete.

## 2. Execution loop

1. Inspect the current source of truth.
2. Choose the smallest capable tool or model.
3. Make an additive, reversible change where possible.
4. Run syntax, content, and deployment checks.
5. Inspect the diff before publishing.
6. Publish only when the requested side effect is explicit.
7. Record the result, verification, and blockers.

## 3. Email handling

Email automation requires an authenticated email connection. Until Gmail or another email provider is connected, this repository does **not** read inboxes, send replies, or claim that email work is complete.

When an email connection is available, use this policy:

- Read only the requested scope; state that scope in the report.
- Classify messages as **informational**, **needs a draft**, **safe to send**, or **requires approval**.
- Never auto-send messages involving money, credentials, legal commitments, medical issues, account deletion, or irreversible changes.
- Preserve the original message ID and a short outcome, but do not log raw message bodies by default.
- Draft first for new contacts, complaints, ambiguous requests, and anything with personal data.
- Send only when the user has explicitly authorized sending or an established rule covers the exact case.

## 4. Unified event log

Use one event record for every meaningful action. Store metadata, not secrets or raw private content.

```json
{
  "timestamp": "2026-01-01T00:00:00Z",
  "source": "chat|email|github|web",
  "goal": "short description",
  "scope": "files or message IDs",
  "action": "what changed",
  "verification": ["check performed"],
  "status": "complete|partial|blocked",
  "side_effect": "none|committed|published|sent",
  "next_step": "only if blocked or intentionally deferred"
}
```

Do not record API keys, access tokens, passwords, full email bodies, or raw prompts containing personal information.

## 5. Public deployment checklist

- Confirm the repository and branch.
- Confirm the correct source directory.
- Run `git diff --check`.
- Check that links and assets resolve.
- Confirm that the GitHub Pages deployment succeeds.
- Report the public URL and exactly what was verified.

## 6. Current project boundary

The website is a static GitHub Pages project. It can explain workflows and provide copyable prompts, but it is not itself an email agent, payment processor, or private inbox. Those capabilities must be connected and configured separately.
