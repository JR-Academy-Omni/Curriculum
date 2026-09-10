# MiniClaw

MiniClaw is an OpenClaw-like teaching vertical slice for the AI Engineer Cohort 07 public class. It demonstrates provider adapters, model failover, layered memory, runtime `SKILL.md` loading, traces, and approval-gated self-adjustment. It does not claim feature parity with OpenClaw.

## Install

```bash
bun install
bun run build
bun link
miniclaw --json doctor
```

Offline mode uses the deterministic mock provider and needs no API key. Real adapters require the provider key plus an explicitly verified `OPENAI_MODEL` or `ANTHROPIC_MODEL` value from the environment. Tokens are never written to config or output.

## Command map

```bash
miniclaw init
miniclaw --json doctor
miniclaw models list
miniclaw models set openai --fallback anthropic,mock
miniclaw skills list
miniclaw skills show course-advisor
miniclaw memory add "我的目标是转 AI Engineer" --confirmed
miniclaw memory search "目标"
miniclaw chat "我下一步该补什么" --skill course-advisor
miniclaw reflect propose
miniclaw reflect approve <proposal-id>
miniclaw request get /status
miniclaw demo --fail-primary
```

## JSON policy

`--json` emits `{"ok":true,"data":...,"meta":{"version":"0.1.0"}}`. Errors emit `{"ok":false,"error":{"code":"command_failed","message":"..."}}` and exit non-zero. Provider keys never appear in either shape.

Write commands are narrow: `models set`, `memory add`, and `reflect approve`. Reflection only writes a proposal until a human runs `reflect approve`; it never edits `SKILL.md` silently. The raw `request` escape hatch only accepts local GET reads.
