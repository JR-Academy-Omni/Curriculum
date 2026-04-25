---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps Bootcamp
role: programmer
roleName: Backend / Ops engineers
painPoint: age-35
painPointName: Mid-career experience as advantage
format: hero
formatName: Landing page hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: TechScrum DevOps Bootcamp (Mid-career hero · books + dashboard still-life)
ctaText: ""
tags: [hero, landing, mid-career, age-35]
---

# Programmer × Age-35 × Landing Hero (EN)

> Model: `gpt-image-2` · Mode: **Instant** · Aspect 16:9

## What this poster says

Landing-page hero. Restrained editorial mood. Anchor: a stack of well-worn dev books beside a laptop showing a calm dashboard. Visual whisper: "Years of work + new stack = the actual hire profile."

## Text on the poster

> Mode A (recommended): **0-text ambient image**, frontend overlays real H1 on left
> Mode B: minimal one-line headline + brand tag

- **Minimal headline (Mode B only)**: Years stack. So does the salary.
- **Brand tag (Mode B only)**: JR Academy · TechScrum DevOps Bootcamp

## Full Prompt

### Mode A — 0-text ambient

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a desk still-life on warm wooden surface. A stack of 4 well-worn paperback technical books laying horizontally on the left side of the still-life zone (slightly out of focus, spines suggestive only — no real titles or author names). Beside the books: a modern open laptop showing an abstract monitoring dashboard with calm green status indicators and one small upward-trend chart (sharp focus, labels minimal, suggestive only). A pair of glasses resting on the books. Half-full coffee mug. A pen. Soft warm window light from upper-right at low angle, long gentle shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, golden-hour mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm light spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #4FB477 / #444.

NO text overlay anywhere on the image. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. No real Grafana/Datadog/AWS brand marks. Book spines must show NO real titles, NO real author names — abstract muted color spines only. Dashboard must show NO real product UI screenshots.
```

### Mode B — with minimal headline

```
[Copy all of Mode A, then append:]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold sans-serif (Bricolage Grotesque style), color #10162F,
with generous letter spacing, in 1 line, reading:
"Years stack. So does the salary."

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps Bootcamp"

Text must be sharp and beautifully composed. Use ASCII straight quotes/apostrophes and regular periods. Flat solid color, no stroke, no outline, no shadow on text.
```

## Variants

### v2 — Headline tweak (reframe)
> Headline: **"Mid-career is the door."**

### v3 — Universal (no age narrative)
> Drop the books. Replace with `a paper resume showing a clean line item "DevOps Project — TechScrum 7-week"`. Reusable as a default hero.

### v4 — Outage scars angle
> Add a small printed postmortem document beside the books, with the only legible word being "POSTMORTEM" in dry serif top-left. Subtle nod to "scars = experience".

## Out tips

- **Empty-left rule**: model often fills it — append `LEFT 55% must remain EMPTY background only — no objects, no text, no diagram`
- **Book spines blank**: append `book spines must be solid muted colors with NO text, NO titles, NO author names`
- **Dashboard abstract**: append `dashboard charts are abstract — no real numbers, no real metric names, no real product UI`
- **Status indicators**: append `green status indicators must be small dots, not full status pills with text`
