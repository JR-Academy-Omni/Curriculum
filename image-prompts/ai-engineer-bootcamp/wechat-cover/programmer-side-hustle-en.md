---
bootcamp: ai-engineer-bootcamp
bootcampName: AI Engineer Bootcamp
role: programmer
roleName: Developers / Engineers
painPoint: side-hustle
painPointName: Side hustle / Second income
format: wechat-cover
formatName: LinkedIn / Instagram Cover
size: 1024x1792
displaySize: 1080x1260
model: gpt-image-2
mode: Instant
lang: en
version: 1
title: Ship AI. Get paid twice.
ctaText: ""
tags: [developer, side-hustle, LinkedIn, cover]
---

# Developer × Side Hustle × LinkedIn / Instagram Cover (EN)

> Model: `gpt-image-2` · Mode: **Instant** · Aspect ratio ~4:5

## What this poster says

LinkedIn cover, ~1 second of attention. One line that names the action: ship AI tools, get a second income on top of your day job. Not aspirational, not preachy — declarative.

## Text on the poster

- **Massive headline (2 lines)**:
  - Ship AI.
  - Get paid twice.
- **Subheadline**: Day job + the AI tools you ship.
- **Brand tag**: JR Academy · AI Engineer Bootcamp

## Full Prompt

```
Model: gpt-image-2.
Aspect ratio: 9:11 (close to 4:5). Image size: 1024×1792 px (will be cropped to 1080×1260).
Mode: Instant.

A vertical bold poster for LinkedIn / Instagram cover,
featuring a tightly cropped overhead shot of a developer's hand
just clicking the green "Deploy" button on a laptop trackpad,
or alternately their finger pressed on the Return key of a mechanical keyboard.
The screen (partially visible) shows a generic deployment terminal output
with green success indicators streaming down. Cool blue-white screen glow,
warm amber rim light from upper-left, deep cool shadows on the right.
Cinematic editorial poster mood, slight film grain, photo-realistic,
high contrast against dark navy #10162F background.

Composition: hand and laptop occupy the lower 35%,
large overlapping typography fills upper 55%.

Place centered upper third, extra-large heavy bold sans-serif (Bricolage Grotesque Black
or Inter Black style), tight letter spacing, in 2 lines.
Line 1 in #FFF1E7 (off-white):
"Ship AI."
Line 2 in #FF5757 (red):
"Get paid twice."

Below the headline, smaller medium-bold sans-serif (Inter SemiBold style),
color #FFF1E7, in one line, reading:
"Day job + the AI tools you ship."

Bottom-right corner, tiny flat single-line text, color #FFF1E7, reading:
"JR Academy · AI Engineer Bootcamp"

Text must be sharp and beautifully composed.
All text in flat solid color. No stroke, no outline, no shadow on text.
Use straight ASCII periods at the end of "Ship AI.", "Get paid twice.", "you ship."
No smart quotes anywhere.

Color palette: #10162F (dominant dark), #FF5757 (Line 2 accent),
#FFF1E7 (Line 1 / subtitle / tag), #FFB800 (warm rim light), green #2ecc71 (success indicators on screen).
Cinematic dramatic lighting. Crisp typography on cinematic photo.

No watermark. No graphic logos. No fake brand marks (no Vercel, no Stripe, no AWS).
No emojis embedded in image. No Chinese text.
No bullet points. No CTA buttons. No URL.
Do NOT show face — only the hand and laptop.
```

## Variants

### v2 — Calmer, "second curve" framing
> Headline: **"Your salary is one curve." / "AI products are another."**
> Visual: same hand on keyboard.

### v3 — Direct CTA hint
> Headline: **"Stop building for someone else." / "Start shipping for yourself."**

### v4 — Pure type, no photo (most reliable)
> Replace visual with:
> ```
> Pure flat dark navy #10162F background. No photographic elements.
> A subtle thin 2px red #FF5757 horizontal line below the headline for accent.
> A faint vertical column of green #2ecc71 dots on the right edge,
> evoking a success indicator strip.
> ```

## Generation tips

- **"Get paid twice."**: Sometimes image-2 renders this as "Get paid two times" — restate `"Get paid twice." must render exactly as written, with the word "twice"`
- **If "Ship AI." renders as "Ship Al."** (lowercase L): explicitly say `"AI" must be uppercase A and uppercase I, not lowercase L`
- **If keyboard / hand looks distorted**: switch to v4 pure type version
- **No Thinking needed** — 2 text blocks, Instant handles fine
