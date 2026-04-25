---
bootcamp: techscrum-devops
bootcampName: TechScrum DevOps Bootcamp
role: programmer
roleName: Backend / Ops engineers
painPoint: overseas
painPointName: Australia skilled-migration / sponsorship pathway
format: hero
formatName: Landing page hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: TechScrum DevOps Bootcamp (AU sponsorship hero · pipeline still-life)
ctaText: ""
tags: [hero, landing, AU, sponsor]
---

# Programmer × Overseas × Landing Hero (EN)

> Model: `gpt-image-2` · Mode: **Instant** · Aspect 16:9

## What this poster says

Landing-page hero. Restrained editorial mood. Anchor: a desk with a laptop showing a clean 3-stage pipeline + a small visa-style stamp on a notebook page reading "AU APPROVED" in dry serif. Lets the visual whisper "DevOps in Australia is the door".

## Text on the poster

> Mode A (recommended): **0-text ambient image**, frontend overlays real H1 on left
> Mode B: minimal one-line headline + brand tag

- **Minimal headline (Mode B only)**: A 7-week project that opens the AU door.
- **Brand tag (Mode B only)**: JR Academy · TechScrum DevOps Bootcamp

## Full Prompt

### Mode A — 0-text ambient

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

Horizontal 16:9 editorial minimalist hero banner for a DevOps Bootcamp landing page.

Right 45% of canvas: a desk still-life on warm wooden surface. Modern open laptop showing an abstract 3-stage pipeline labeled "Build" "Test" "Deploy" with a green checkmark at the end (labels small, suggestive only). Open notebook page tilted slightly, with a small red ink stamp in the corner reading "AU APPROVED" in dry serif (small). Half-full coffee mug. A pen. A boarding-pass-shaped paper card half-tucked under the notebook (no real airline branding). Soft warm window light from upper-right at low angle, long gentle shadows leftward. Photo-realistic premium magazine still-life, shallow depth of field, slight film grain, golden-hour mood. Text must be sharp and beautifully composed.

Left 55% of canvas (≈ 985px wide): intentionally empty — subtle gradient wash from #FFF1E7 (top) to slightly warmer cream (bottom), hint of warm light spill from the right. This zone will be overlaid with H1 by the frontend, so it MUST stay clean — no objects, no text, no patterns. This is a strict layout constraint.

Color palette: #FFF1E7 / #10162F / #FFB800 / #FF5757 / #444.

NO text overlay except the small "AU APPROVED" ink stamp and the "Build" "Test" "Deploy" pipeline labels. No watermarks. No logos. No people. No emojis. No futuristic/sci-fi aesthetic. No real AWS/Azure/HashiCorp brand marks. No real airline/immigration logos on the boarding-pass shape.
```

### Mode B — with minimal headline

```
[Copy all of Mode A, then append:]

Add bottom-left text overlay, 60px from canvas edge,
heavy bold sans-serif (Bricolage Grotesque style), color #10162F,
with generous letter spacing, in 1 line, reading:
"A 7-week project that opens the AU door."

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · TechScrum DevOps Bootcamp"

Text must be sharp and beautifully composed. The digit "7" must be Arabic numeral. Use ASCII straight quotes/apostrophes and a regular period at the end. Flat solid color, no stroke, no outline, no shadow on text.
```

## Variants

### v2 — No boarding pass (cleaner)
> Drop the boarding-pass card. Replace with `a paper resume showing a clean line item "DevOps Project — TechScrum 7-week"`.

### v3 — Universal (no overseas narrative)
> Drop the "AU APPROVED" stamp. Reusable as a default hero for the bootcamp.

## Out tips

- **Empty-left rule**: model often fills it — append `LEFT 55% must remain EMPTY background only — no objects, no text, no diagram`
- **"AU APPROVED" stamp**: keep small, append `the red ink stamp must occupy < 15% of the notebook page`
- **No real airline branding**: append `the boarding-pass shape must show no real airline logos, no real flight numbers, no real airport codes`
- **Pipeline labels**: append `pipeline node labels are simple text only — no AWS / Azure / Jenkins icons, no real product UI screenshots`
