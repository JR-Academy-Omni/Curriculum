---
bootcamp: ai-builder
bootcampName: Vibe Coding 大师课
role: programmer
roleName: Developers / Engineers
painPoint: side-hustle
painPointName: Side hustle / Second income
format: hero
formatName: Course detail hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: Vibe Coding 大师课 (5-project ship hero, EN)
ctaText: ""
tags: [hero, side-hustle, 5-projects, EN]
---

# Developer × Side Hustle × Hero (EN)

## Full Prompt

### Use case A — Pure ambient

```
Horizontal 16:9 hero banner (1792×1024), editorial minimalist style.

Right 40% of canvas: a flat-design illustration of five small product cards arranged in an isometric loose stack on cream background.
Each card has a different generic SaaS UI: a chat interface, a pricing tier card, a chart card, a settings panel, a small landing-page hero.
Each card uses a different muted accent (soft peach, indigo, teal, soft green, warm orange).
A small thin red ribbon labeled "shipped" lays across the top-right card.
Subtle drop shadow under each card. Premium editorial design.

Left 60% of canvas: completely empty — calm gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom). MUST stay clean for frontend H1 overlay.

Premium editorial design, soft ambient warm light. The text "shipped" on the ribbon must render exactly as lowercase letters. No watermark. No logos. No real product / company branding visible on any card. No people. No real flags.
```

### Use case B — With minimal headline

```
[Copy Use case A above, then append:]

Bottom-left text overlay, 60px from canvas edge, geometric heavy bold sans-serif (Bricolage Grotesque Black style), color #10162F, 1 line:
"5 ship-ready stacks. Fork them into your own SaaS."

Bottom-right corner, 40px from edge, tiny text in #444:
"JR Academy · Vibe Coding 大师课"

Sharp text. Flat solid color. The number "5" must be an Arabic numeral.
```

## Variants

### v2 — Three-tool badges
> Right side: replace the 5-card stack with three rounded badges in a row labeled "Claude Code", "Cursor", "Codex CLI", each with a small ✓ underneath, conveying "all three tools, one workflow".

### v3 — agent.md flag
> Right side: a single flat illustration of a notebook lying open showing "# agent.md" header, with three thin connector lines flowing out to three small abstract product icons floating to the right, conveying "one config powers many products".

## Generation tips

- **Left 60% must remain empty**: append `the entire left 60% of the canvas must remain empty — no text, no decoration, no shape, only soft cream gradient`
- **"shipped" ribbon**: if model adds a checkmark or bow, append `the ribbon must contain only the word "shipped" in lowercase letters — no decorative elements`
- **Cards must be generic**: append `each card UI must be visually distinct but completely generic — absolutely no real product names, real currency amounts, real brand logos, or recognizable real SaaS interfaces (no Stripe, Notion, Linear, Vercel, or similar)`
- **Card count = 5**: append `there must be exactly 5 cards in the stack, no more, no fewer`
- **No people / no devices**: hero must have NO laptop, NO monitor, NO human silhouette — only the abstract card stack and empty negative space
