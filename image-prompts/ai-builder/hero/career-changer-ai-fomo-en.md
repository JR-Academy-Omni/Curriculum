---
bootcamp: ai-builder
bootcampName: Vibe Coding 提升班
role: career-changer
roleName: Career changers / Job seekers
painPoint: ai-fomo
painPointName: AI FOMO (junior devs catching up)
format: hero
formatName: Course detail hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: Vibe Coding 提升班 (modern junior toolkit hero, EN)
ctaText: ""
tags: [hero, junior-dev, toolkit, EN]
---

# Career Changer / Junior Dev × AI FOMO × Hero (EN)

## Full Prompt

### Use case A — Pure ambient

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 40% of canvas: a flat-design illustration of five small rectangular tool badges arranged in a clean horizontal row on cream background.
Each badge has a subtle drop shadow and a label in dark navy text. The five labels left to right:
"Claude Code"
"Cursor"
"Codex CLI"
"MCP"
"agent.md"
Each badge uses a different muted accent color (soft peach, indigo, teal, soft green, warm orange).
Below the row of five badges, a single thin horizontal line connects them, then drops down into one rounded green node labeled "shipped" in lowercase.
Premium editorial design, plenty of breathing room.

Left 60% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Premium editorial design, soft ambient warm light. Labels must spell exactly: "Claude Code", "Cursor", "Codex CLI", "MCP", "agent.md", "shipped". No watermark. No real Anthropic / Cursor / OpenAI / GitHub branding. No people. No real flags.
```

### Use case B — With minimal headline

```
[Copy Use case A above, then append:]

Bottom-left text overlay, 60px from canvas edge, geometric heavy bold sans-serif (Bricolage Grotesque Black style), color #10162F, 1 line:
"The modern junior toolkit. Ship before you apply."

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · Vibe Coding 提升班"

Sharp text. Flat solid color.
```

## Variants

### v2 — Replace badge row with workflow arrow
> Right side: 5 badges arranged left to right with thin arrows between them: "Idea → Claude Code → Cursor → Codex CLI → ship". Conveys "linear pipeline from idea to ship".

### v3 — Replace with split path
> Right side: top half shows a small icon labeled "LeetCode 500 problems" with no arrow, bottom half shows the 5-badge toolkit ending in "shipped" — visualizing the divergence between two job-seeking strategies.

## Generation tips

- **Left 60% must remain empty**
- **Five badge labels exact**: append `the five badges must spell exactly, in order: "Claude Code", "Cursor", "Codex CLI", "MCP", "agent.md" — model often misspells "Codex" as "Code"`
- **"agent.md"**: append `"agent.md" badge must contain a literal period between 'agent' and 'md', all lowercase`
- **"shipped" in lowercase**: append `the "shipped" node label must be all lowercase letters`
- **No people / no devices**: hero must have NO laptop, NO monitor, NO human — only the 5-badge row and shipped node
- **No real logos**: append `each badge must contain ONLY the text label — absolutely no logo, no icon, no graphic mark inside the badge`
