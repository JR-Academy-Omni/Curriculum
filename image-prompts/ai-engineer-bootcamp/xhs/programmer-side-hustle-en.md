---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: Developers / Engineers
painPoint: side-hustle
painPointName: Side hustle / Second income
format: xhs
formatName: Instagram / LinkedIn Post
size: 1024x1792
displaySize: 1080x1350
model: gpt-image-2
mode: Thinking
lang: en
version: 1
title: Your second income won't come from another job. It'll come from AI you ship.
ctaText: Comment "AI" for the syllabus
tags: [developer, side-hustle, build-in-public, AI-Engineer]
---

# Developer × Side Hustle × Instagram / LinkedIn Post (EN)

> Model: `gpt-image-2` · Mode: **Thinking** · Aspect ratio 4:5

## Why this works for English audiences

LinkedIn / IG / Twitter are saturated with `#buildinpublic` and `#sidehustle` content. English-speaking devs aren't worried about "35-year anxiety" — they're worried about being stuck on a single salary while peers ship indie products. This poster speaks to that: don't take a second job, ship something AI-powered.

## Text on the poster

- **Headline (2 lines)**: Your second income / won't come from another job
- **Subheadline**: It'll come from the AI tools you ship.
- **Bullets**:
  - ✓ 7 production projects you can fork into your own SaaS
  - ✓ Context Engineering · RAG · Agent · Eval
  - ✓ 18 weeks · 1-on-1 review · ship-ready stacks
- **CTA**: Comment "AI" for the syllabus
- **Brand tag**: JR Academy · AI Engineer Bootcamp

## Full Prompt

```
Model: gpt-image-2.
Aspect ratio: 4:5. Image size: 1024×1792 px. Mode: Thinking.

A vertical 4:5 lifestyle-tech poster in editorial Instagram / LinkedIn post style,
featuring a developer working at a small home studio at night —
not a corporate office, but a personal building space.
Three-quarter back view (we see profile and screens, never a full front face).
The laptop screen shows a Stripe-style payment dashboard with a small but real-looking
"Today: $147" stat and a few transaction rows (don't render real Stripe branding).
A second monitor shows code with visible "openai", "fastapi", and "agent" tokens.
On the desk: an open notebook with hand-sketched product wireframes,
a half-full cold-brew bottle, a mechanical keyboard.
Photo-realistic, slight film grain, candid iPhone night photo, warm desk lamp from camera-left.

Composition: top 60% is the photo scene; bottom 40% is a clean off-white text card
with a thin 2px black top border, on a flat #FFF1E7 background.

Place at the top of the text card, extra-large heavy bold sans-serif typography
(Bricolage Grotesque or Inter Black style), color #10162F, tight letter spacing,
in 2 lines, reading:
"Your second income"
"won't come from another job"

Just below, medium-weight sans-serif (DM Sans Medium style), color #444, in one line, reading:
"It'll come from the AI tools you ship"

Three bullet lines, equal font size, medium weight, color #10162F,
each preceded by a "✓" mark in #FF5757, reading:
"✓ 7 production projects you can fork into your own SaaS"
"✓ Context Engineering · RAG · Agent · Eval"
"✓ 18 weeks · 1-on-1 review · ship-ready stacks"

Bottom CTA strip, solid #FF5757 background, white bold sans-serif, reading:
"Comment AI for the syllabus"

Bottom-right corner, tiny flat single-line text, color #10162F, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed.
Use straight ASCII apostrophes for "won't" and "It'll" (not smart quotes).
All text in flat solid color. No stroke, no outline, no shadow on text.
Consistent font size for all bullet lines.

Color palette: #FFF1E7 (background), #10162F (text), #FF5757 (accent), #FFB800 (lamp glow).

No watermark. No graphic logos. No real Stripe / Vercel / Supabase logos.
No fake brand marks. No emojis embedded in image. No Chinese text.
Do not show full face. Do not render specific dollar amounts above $999.
```

## Variants

### v2 — Indie hacker tone
> Headline: **"Stop chasing raises." / "Start shipping AI products."**
> Subheadline: **"18 weeks to your first $1k MRR project."**
> ⚠️ "$1k MRR" should be `"$1k MRR"` literal — image-2 may render it as "1k$" or "$1000" — restate format in prompt.

### v3 — Quiet confidence
> Headline: **"The dev who ships AI tools" / "outearns the dev who doesn't."**
> Visual: same.

### v4 — No human, no monitor (lowest risk)
> Replace photo block with:
> ```
> A flat off-white background with a single subtle vector illustration of a laptop
> emitting soft glowing dots that flow upward into small product icons (a chat bubble,
> a pricing card, a chart). Minimalist editorial illustration, NOT photo.
> ```
> Switches the whole poster to illustration mode — risk: less premium feel.

## Generation tips

- **Critical check on "won't" and "It'll"**: smart quotes vs straight apostrophes — restate `"won't" must use a straight ASCII apostrophe character (U+0027)`
- **If Stripe dashboard looks too much like real Stripe**: replace with `a generic indie payment dashboard, no recognizable brand`
- **If "$147" doesn't render**: skip the dollar amount, just show generic transaction rows
- **Switch to Thinking mode** — 5 text blocks need it for accuracy
