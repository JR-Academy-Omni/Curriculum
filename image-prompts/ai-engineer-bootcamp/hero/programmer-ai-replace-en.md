---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: Developers / Engineers
painPoint: ai-replace
painPointName: AI replacement anxiety
format: hero
formatName: Course detail hero
size: 1792x1024
displaySize: 1920x900
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: AI Engineer Bootcamp (English minimal hero)
ctaText: ""
tags: [hero, landing, minimal, developer]
---

# Developer × AI Replacement Anxiety × Course Detail Hero (EN)

> Model: `gpt-image-2` · Mode: **Instant** · Aspect ratio 16:9

## What this poster says

The English landing page hero. Same craftsmanship as the Chinese hero — no anxiety, no slogans — but the optional headline shifts to a more universal English framing ("Engineer with AI, don't compete with it") instead of an age-specific hook.

## Text on the poster

> Use case A (recommended): **No baked-in text** — frontend overlays H1 on the left
> Use case B: minimal headline + brand tag baked in

- **Minimal headline (case B only)**: Engineer with AI. Don't compete with it.
- **Brand tag (case B only)**: JR Academy · AI Engineer Bootcamp

## Full Prompt (gpt-image-2 optimized)

### Use case A — Pure ambient hero (recommended)

```
Model: gpt-image-2.
Aspect ratio: 16:9. Image size: 1792×1024 px. Mode: Instant.

A horizontal 16:9 editorial minimalist hero banner for a Bootcamp landing page,
featuring a still-life arrangement on the right 45% of the canvas:
an open black moleskine notebook with a handwritten diagram of nodes and arrows
labeled "Context", "RAG", "Agent", "Eval" (small handwriting, partially visible),
a half-full ceramic coffee mug with steam catching light,
a pair of glasses folded on the notebook,
a small mechanical keyboard partially in frame at the right edge.
Soft warm window light from upper-right at low angle, casting long gentle shadows
leftward into the negative space. Photo-realistic premium magazine still-life,
shallow depth of field, slight film grain.

Composition: left 55% of the canvas (≈ 1056px wide) is intentionally empty —
just a calm subtle gradient wash from off-white #FFF1E7 (top) to slightly warmer cream (bottom),
with a hint of warm light spill from the right-side window.
This left zone will later be overlaid with H1 typography by the frontend,
so it MUST stay clean — no objects, no text, no patterns there.
Right 45% holds the still-life with generous breathing room.

Color palette: #FFF1E7 (background), #10162F (deep shadows / notebook),
#FFB800 (warm window light hint), #444 (subtle handwriting tone on notebook).
Editorial photography, soft natural light, professional studio composition,
muted warm color temperature, golden hour mood.

NO text overlay anywhere on the image. No watermarks. No logos. No people.
No emojis. No screens or monitors or laptops in frame.
No saturated colors — keep palette muted and warm.
No futuristic / sci-fi aesthetic — keep it grounded and human.
The LEFT 55% must remain empty background only — no objects allowed there.
This is a strict layout constraint.
```

### Use case B — With minimal headline

```
[Copy all of Use case A above, then append:]

Add bottom-left text overlay, 60px from canvas edge,
geometric bold sans-serif (Bricolage Grotesque style), color #10162F,
with generous letter spacing, reading:
"Engineer with AI. Don't compete with it."

Add bottom-right corner, 40px from edge, tiny flat single-line text, color #444, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed.
Flat solid color, no stroke, no outline, no shadow on text.
Use straight ASCII apostrophes (not smart quotes).

Even with this overlay text, keep the upper-left area clean
so frontend can still overlay H1 there if needed.
```

## Variants

### v2 — Abstract code visual
> Replace the still-life block with:
> ```
> An abstract close-up of an open laptop screen showing softly out-of-focus
> Python + LangChain code with subtle bokeh, the screen glow as the only light source,
> a hand barely visible at the edge resting on the keyboard.
> ```

### v3 — Window with city dawn (calmer, less object-heavy)
> Replace still-life with:
> ```
> A soft-focus window view at dawn, looking out at a quiet city skyline,
> with a notebook and coffee mug on the inner windowsill catching first light.
> ```

### v4 — Generic Bootcamp hero (not pain-specific)
> Same as A, just keep "Foundation / RAG / Agent / Eval" labels generic.
> Reusable across the entire AI Engineer Bootcamp landing page.

## Generation tips

- **Critical check**: Is the left half actually empty? If filled, append `LEFT 55% must be EMPTY background only, do not place any object in the left half. This is a strict constraint.`
- **If right-side still-life is too cluttered**: reduce to 2 objects (notebook + mug)
- **If overall feels too cool/blue**: append `overall warm color temperature, golden hour mood, 4500K white balance`
- **If frontend H1 lacks contrast**: add a subtle dark text-shadow in CSS, don't change the prompt
- **If aspect ratio drifts (square output)**: restate `Aspect ratio: 16:9. This must be a horizontal 16:9 image, NOT square, NOT vertical.`

## Frontend usage example

```html
<!-- Use case A (no baked text, frontend overlays H1) -->
<section class="hero" style="background-image: url('hero/programmer-ai-replace-en-v1.png');
  background-position: right center; background-size: cover;">
  <div class="hero-content"> <!-- left 50% -->
    <h1>AI Engineer Bootcamp</h1>
    <p>12 weeks tech + 12 weeks P3 — engineer with AI, don't compete with it.</p>
    <a class="cta">Free consultation</a>
  </div>
</section>
```
