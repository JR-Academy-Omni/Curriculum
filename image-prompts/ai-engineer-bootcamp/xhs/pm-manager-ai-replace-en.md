---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: pm-manager
roleName: Product / Marketing / Managers
painPoint: ai-replace
painPointName: AI replacement anxiety
format: xhs
formatName: Instagram / LinkedIn Post
size: 1024x1792
displaySize: 1080x1350
model: gpt-image-2
mode: Thinking
lang: en
version: 1
title: 57% of agent failures aren't model problems
ctaText: Comment "AI" for the syllabus
tags: [PM, ai-replace, Context-Engineering, Gartner-2026]
---

# PM × AI Replacement × Instagram / LinkedIn Post (EN)

> Model: `gpt-image-2` · Mode: **Thinking** · Aspect ratio 4:5

## What this poster says

For PMs / managers on LinkedIn worried about AI eating their role. Reframe with **Gartner 2026 data: 57% of agent failures are context design problems, not model problems**. Context design is exactly what PMs should own. The course teaches it properly (Phase 2, 18 lessons). PMs aren't replaced by AI — they're upgraded.

## Text on the poster

- **Headline (2 lines)**:
  - 57% of agent failures
  - aren't model problems
- **Subheadline**: They're context design problems — the part PMs own.
- **Bullets**:
  - ✓ Phase 2: 18 lessons on Context Engineering
  - ✓ 4-layer context architecture (System / Retrieved / Memory / Task)
  - ✓ Built for PMs who want to ship AI features that work
- **CTA**: Comment "AI" for the syllabus
- **Brand tag**: JR Academy · AI Engineer Bootcamp

## Full Prompt (short version)

```
Vertical 4:5 poster (1024×1792), editorial style.

Top 60%: a clean flat-design illustration of a 4-layer pyramid on cream background.
From bottom to top, each layer labeled in small dark text:
"System Context" / "Retrieved Context" / "Memory Context" / "Task Context".
Pyramid uses muted blues and warm cream, top in red #FF5757. Soft drop shadow.

Bottom 40%: clean off-white card on background #FFF1E7, with these texts.

Large bold sans-serif title in #10162F, 2 lines:
"57% of agent failures"
"aren't model problems"

Medium sans-serif subtitle in #444, one line:
"They're context design problems — the part PMs own."

Three checkmarks "✓" in #FF5757 followed by text in #10162F:
"✓ Phase 2: 18 lessons on Context Engineering"
"✓ 4-layer architecture: System Retrieved Memory Task"
"✓ Built for PMs who ship AI features that work"

Red CTA strip #FF5757 with white text:
"Comment AI for the syllabus"

Small text bottom-right #10162F: "JR Academy · AI Engineer Bootcamp"

Sharp text, flat solid color, no shadow on text. Use straight ASCII apostrophes and periods. The number "57%" must render exactly. The word "aren't" must use a straight ASCII apostrophe. No watermark. No logos.
```

## Variants

### v2 — Stat-led
> Headline (huge): **"57%"** dominating the top half
> Subheadline: **"Gartner 2026: 57% of agent failures are context design problems, not models."**
> Same bullets.

### v3 — PM-direct
> Headline: **"PMs aren't replaced by AI." / "PMs who can't ship AI features are."**
> Same bullets.

### v4 — ReAct loop visual
> Top 60% replace pyramid with: `a flat circular flow diagram with 4 nodes "Plan", "Tool", "Observation", "Reflect" connected by arrows in a loop, on cream background, minimalist editorial style.`

## Generation tips

- **"57%" critical check**: percent symbol must render — append `the number "57%" must include the percent sign, attached to the digits`
- **"aren't" apostrophe**: append `straight ASCII apostrophe in "aren't", not a curly smart quote`
- **"Gartner 2026"**: if you want this in the prompt, mention it lightly. If image-2 refuses (Gartner is a real brand), drop and use generic "industry research"
- **Pyramid label spelling**: append `the labels must spell: System Context, Retrieved Context, Memory Context, Task Context — exact spelling`
