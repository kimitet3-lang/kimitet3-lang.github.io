# AI Platform Routing Manual

Use the least expensive method that can meet the quality requirement. “Free” means within a provider's current limits; check the current model card, license, and pricing before shipping a commercial feature.

## Routing table

| Work | First choice | Fallback | Reason |
| --- | --- | --- | --- |
| Long reasoning or difficult planning | A reasoning model such as DeepSeek-R1-family | Manual outline plus smaller model | Spend more compute only when it improves the decision |
| Code and structured transformations | A Qwen Coder-family model | Local editor and tests | Strong structure, but tests remain the authority |
| General drafting and multilingual work | Llama, Gemma, or Mistral family | Manual draft | Choose by language, context window, and latency |
| Visual concepts and layout ideas | A multimodal or design-oriented model | Hand sketch or existing component library | Do not confuse a concept with production code |
| Repetitive administration | A deterministic script or workflow | Manual batch | Automation should be predictable before it is autonomous |

## Selection rules

1. Prefer local or browser-only processing for sensitive content.
2. Verify the exact model version and commercial-use license.
3. Never paste credentials, private keys, or unnecessary personal data into a model.
4. Require a human check for public claims, payments, legal text, and customer-facing replies.
5. Include a manual fallback when AI is slower or riskier than doing the task directly.
