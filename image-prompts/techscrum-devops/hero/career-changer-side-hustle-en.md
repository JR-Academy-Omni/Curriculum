---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps Bootcamp
role: career-changer
roleName: Career changers / Job seekers
painPoint: side-hustle
painPointName: Freelance / consulting income
format: hero
formatName: Landing page hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: TechScrum DevOps Bootcamp (Freelance hero · invoice + pipeline still-life)
ctaText: ""
tags: [hero, landing, freelance, side-hustle]
---

# Career Changer × Side Hustle × Landing Hero (EN)

> Model: `gpt-image-2` · Mode: **Instant** · Aspect 16:9

## What this poster says

Landing-page hero. Restrained editorial mood. Anchor: a desk with an invoice, a green pipeline check, and a coffee. Visual whisper: "This skill bills."

## Text on the poster

> Mode A (recommended): **0-text ambient image**, frontend overlays real H1 on left
> Mode B: minimal one-line headline + brand tag

- **Minimal headline (Mode B only)**: A skill that bills.
- **Brand tag (Mode B only)**: JR Academy · TechScrum DevOps Bootcamp

## Full Prompt

### Mode A — 0-text ambient

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a desk still-life on warm wooden surface. A printed paper invoice slightly tilted, showing a single clean line item "DevOps Migration — A$2,000" in dark serif (small, suggestive only — no client name, no date, no ABN). Beside it: a modern open laptop showing an abstract pipeline run UI with three completed stages and a single green checkmark at the end (sharp focus). Half-full coffee mug. A pen. A small office plant on the far edge. Soft warm window light from upper-right at low angle, long gentle shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, golden-hour mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm light spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #4FB477 / #444.

NO text overlay anywhere on the image except the small invoice line item. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. The invoice must show ONLY the line item and the A$2,000 figure — no client name, no ABN, no dates, no payment method.
```

### Mode B — with minimal headline

```
[Copy all of Mode A, then append:]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold sans-serif (Bricolage Grotesque style), color #10162F,
with generous letter spacing, in 1 line, reading:
"A skill that bills."

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps Bootcamp"

Text must be sharp and beautifully composed. Use ASCII straight quotes/apostrophes and a regular period at the end. Flat solid color, no stroke, no outline, no shadow on text.
```

## Variants

### v2 — Headline tweak (range)
> Headline: **"From manual SSH to A$2,000 invoices."**

### v3 — Universal (no freelance narrative)
> Drop the invoice. Replace with `a notebook with handwritten labels "Plan · Build · Deploy · Monitor"`. Reusable as a default hero.

### v4 — Range angle
> Replace "A$2,000" with "A$1,500" on the invoice; same composition.

## Out tips

- **Empty-left rule**: model often fills it — append `LEFT 55% must remain EMPTY background only — no objects, no text, no diagram`
- **Invoice content**: append `the invoice must show ONLY a single line item with the A$2,000 figure — no client name, no ABN, no date`
- **Green check color**: append `the small checkmark must be in #4FB477 green color`
- **No real product UI**: append `pipeline UI is abstract — no real CircleCI / GitHub Actions / Jenkins screenshots`
