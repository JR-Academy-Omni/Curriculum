# Claude / Anthropic Design Style Reference

> **What this is**: A practical reference for designing pages/slides/artifacts that look like they belong to Anthropic / Claude — based on Anthropic's official brand-guidelines Skill ([github.com/anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md)), Geist Studio's identity case study, and inspection of claude.ai / anthropic.com.
>
> **Use this when**: building Cowork / Claude-themed workshop slides, demo pages, marketing artifacts, or any time you want the output to feel like an official Anthropic product rather than a generic AI brand.
>
> **Don't use this when**: building JR Academy's own brand surfaces (those use the JR neo-brutalism system in `UI_DESIGN_SYSTEM.md` — black 1px borders, offset shadows, `#ff5757` red, `#FFDE59` yellow). Pick one system per artifact and commit; never mix.

---

## 1. Brand DNA — One Paragraph

> **"Warm, trustworthy, thoughtfully restrained."**

Anthropic deliberately avoids the cold, intimidating aesthetic typical of AI brands (think OpenAI's stark mono-grid or Bard's sterile blue). Instead it leans **organic tan palette** + **editorial typography** (serif body!) + **subtle terracotta accent** to project safety-focused, human-centered AI research.

Geist Studio (who designed the identity) describes the type pairing as **"both technically refined and charmingly quirky"** — that tension is the whole brand. The logo itself is a pure typographic wordmark with one detail: a slash, referencing code and signaling forward motion.

When in doubt, ask: *"Is this warmer than ChatGPT's interface? Is it calmer than Midjourney's? Does it read like a thoughtful magazine, not a trading terminal?"* If yes — you're in the zone.

---

## 2. Color Palette (Authoritative Hex Codes)

From Anthropic's official `brand-guidelines` Skill on github.com/anthropics/skills:

### Foundation (use 90% of the time)

| Role | Hex | Notes |
|------|-----|-------|
| **Dark** | `#141413` | Primary text, dark backgrounds. Near-black, not pure black. Has warmth. |
| **Light** | `#faf9f5` | Primary background, text on dark. Signature **cream/tan** — *the* Anthropic background color. |
| **Mid Gray** | `#b0aea5` | Secondary text, dividers, muted UI |
| **Light Gray** | `#e8e6dc` | Subtle backgrounds, input fields, card bases on cream pages |

### Accents (use sparingly — one accent per region)

| Role | Hex | Notes |
|------|-----|-------|
| **Orange / Terracotta** | `#d97757` | **Primary accent** — for CTAs, highlighted state, brand moments. The signature "Anthropic warmth" |
| **Blue** | `#6a9bcc` | Secondary accent — for info, links, secondary buttons. A muted dusty blue, not a tech-y bright blue |
| **Green / Sage** | `#788c5d` | Tertiary accent — for success states, organic visuals. Olive/sage, not bright |

### Usage Rules

- **Cycling rule**: When you have multiple non-text shapes (cards, chart bars, badges) cycling through accent colors, go orange → blue → green → orange. Never two adjacent same-color.
- **One bold accent per slide/card region**. Don't use orange + blue + green at full saturation in the same field. Pick one to lead, the rest become muted.
- **Never use pure black `#000` or pure white `#fff`** — always `#141413` and `#faf9f5`. Pure black/white feels generic; the slight warmth in both is the brand.
- **Don't add accent colors not in this list**. No purple, no red, no yellow. The restraint is the brand. (If you need a "warning red", use orange + a `⚠` glyph instead.)

---

## 3. Typography

### The Real Brand Stack (paid, what claude.ai actually ships)

| Use | Font | Designer | Weights |
|-----|------|----------|---------|
| Headlines + subheadings | **Styrene A** | Berton Hasebe / Commercial Type | Various |
| Chat / UI text | **Styrene B** | Panos Haratzopoulos, Ilya Ruderman, Berton Hasebe / Commercial Type | Regular, Medium, Bold |
| Body / long-form | **Tiempos** | Kris Sowersby / Klim Type Foundry | Various |

Both are commercial fonts (no free version). If you have license access (some agencies/Anthropic partners), use them.

### The Open-Source Fallback Stack (what Anthropic itself recommends for Skills/Artifacts)

This is **what to ship for any artifact going to public web** — directly from the official `brand-guidelines` Skill:

| Use | Font | Where to get | Fallback |
|-----|------|--------------|----------|
| **Headings (≥24pt)** | **Poppins** | Google Fonts | Arial |
| **Body** | **Lora** | Google Fonts | Georgia |
| **Mono / code / data labels** | JetBrains Mono *or* Space Mono | Google Fonts | monospace |

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

### Hierarchy (suggested)

| Level | Font | Weight | Size (slide) | Size (web) | Line height | Letter spacing |
|-------|------|--------|--------------|------------|-------------|----------------|
| Display (hero) | Poppins | 800 | 120-160px | 64-80px | 1.0 | -0.03em |
| H1 | Poppins | 800 | 72-96px | 48-56px | 1.05 | -0.02em |
| H2 | Poppins | 700 | 48-56px | 32-40px | 1.1 | -0.01em |
| H3 | Poppins | 700 | 32-36px | 24-28px | 1.2 | normal |
| Body | Lora | 400 | 22-28px | 16-18px | 1.6 | normal |
| Body emphasis | Lora | 600 | — | — | — | — |
| Caption / meta | JetBrains Mono | 500 | 14-18px | 11-13px | 1.4 | 0.05em (UPPERCASE) |
| Pull quote | Lora italic | 500 | 32-40px | 22-28px | 1.4 | normal |

### Type Rules

- **Lora is a serif. Use it for body — yes, on slides too.** This is the most counterintuitive Anthropic move and the most distinctive. Most AI brands use sans body; Anthropic uses serif. Don't second-guess.
- Headings stay sans (Poppins). The serif/sans pairing is the editorial feel.
- Mono is for *labels, timestamps, version numbers, code, data*. Not for body. Not for emphasis.
- Don't use ALL CAPS body text. Caps only for monospace tags/labels (and even then, use letter-spacing 0.05em).

---

## 4. Layout & Spacing

### Spacing scale (8px base)

```
4   8   12   16   24   32   48   64   96   128
```

Use these values exclusively. Don't invent `13px` or `27px`.

### Layout principles

- **Generous white space.** Anthropic pages breathe. Cards have 32-48px internal padding minimum. Slides have 80-96px outer padding. If it feels too empty, you're close.
- **Editorial column widths.** For body text, max 720-820px line length (60-75 characters per line). Wider = harder to read = wrong vibe.
- **Asymmetric balance over centered grids.** Anthropic loves a hero where the headline is left-aligned in a 2/3 column with whitespace on the right, not centered. (Slides obviously can center; web/marketing rarely should.)
- **Single-column hero, then 2-3 column grid below.** Don't open with a 4-column grid; let the eye land first.

---

## 5. Shapes, Borders, Shadows

This is where Anthropic differs *most* from JR Academy's brutalism.

| Property | Anthropic | (Anti-pattern: JR Brutalism) |
|----------|-----------|-------------------------------|
| Border | None, or `1px solid rgba(20,20,19,0.08)` (whisper) | `4px solid #000` (loud) |
| Border-radius | `8px` cards, `12px` modals, `999px` pills, `4px` inputs | `0` (sharp) |
| Shadow | `0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06)` (soft, dispersed) | `8px 8px 0 #000` (hard offset) |
| Hover shadow | Slight grow + `translateY(-1px)` | `translateY(4px)` + remove shadow |
| Card background | `#faf9f5` on cream page → `#fff` cards. Or `#fff` page → `#faf9f5` cards. Subtle contrast. | `#fff` cards on any background, with black border |

### Why

Brutalism *announces*. Anthropic *settles*. Anthropic cards should feel like a New Yorker article spread, not a Bandcamp page.

---

## 6. Motion & Animation

Anthropic motion is **slow, deliberate, ease-out**. Never bouncy, never "playful" with overshoot. Think Apple's keynote transitions — present, then disappear.

### Tokens

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);   /* The signature ease — long tail */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast: 200ms;
--duration-base: 400ms;
--duration-slow: 600ms;
--duration-hero: 800ms;
```

### Common patterns

```css
/* Slide / element entrance */
@keyframes enter {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: enter 600ms cubic-bezier(0.16, 1, 0.3, 1) both; }

/* Stagger children */
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
.stagger > *:nth-child(4) { animation-delay: 240ms; }
/* etc — 80ms increments */

/* Hover lift */
.card { transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out); }
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(20,20,19,0.10); }
```

### Don'ts

- ❌ No `bounce` easings (`cubic-bezier(0.68, -0.55, 0.27, 1.55)`)
- ❌ No `rotate` on enter (Anthropic doesn't do "playful")
- ❌ No `infinite` loops on hero elements
- ❌ Total page motion should be done within 1.5 seconds of arrival — then quiet

---

## 7. Iconography & Imagery

- **Icons**: Outline style, 1.5-2px stroke, rounded line caps. Heroicons or Lucide are good free fits.
- **Emoji**: Used sparingly in product UI; more freely in marketing/educational artifacts. When using, prefer the rounder Apple-style emoji over Google's.
- **Photography**: Warm, human, slightly grainy. Aaron Wojack shot the official Anthropic team photos — soft natural light, no studio glow, real moments.
- **Illustration**: Custom organic shapes, hand-drawn quality, never vector-clean corporate illustration. Avoid stock illustration libraries entirely.
- **Gradients**: When used, soft + warm (cream → tan → terracotta). Never neon, never tech-blue gradients.

---

## 8. Voice / Copy Tone

When writing UI text, headings, or marketing copy in this style:

- **Direct, not promotional.** "Train Claude as your assistant" beats "Unlock the power of AI to revolutionize your workflow!"
- **Plain English, low jargon.** Anthropic targets non-engineers as much as engineers.
- **Single-clause sentences.** Period-driven, not comma-driven.
- **"You" not "users".** Second person, conversational.
- **Comfortable with white space in copy too.** Short paragraphs. Lots of returns.

---

## 9. Component Patterns

### Card

```css
.card {
  background: #ffffff;          /* or #faf9f5 if page is white */
  border: 1px solid rgba(20,20,19,0.08);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 2px rgba(20,20,19,0.04), 0 4px 16px rgba(20,20,19,0.06);
  transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
}
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(20,20,19,0.10); }
```

### Primary Button (terracotta CTA)

```css
.btn-primary {
  background: #d97757;
  color: #faf9f5;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 200ms var(--ease-out);
}
.btn-primary:hover { background: #c66943; }
```

### Pill / Tag (for meta info)

```css
.pill {
  display: inline-block;
  padding: 4px 12px;
  background: #e8e6dc;
  color: #141413;
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

### Pull-quote / hero text moment

```css
.pull-quote {
  font-family: 'Lora', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.4;
  color: #141413;
  border-left: 3px solid #d97757;
  padding-left: 24px;
  max-width: 720px;
}
```

---

## 10. Quick "Am I doing it right?" checklist

Before shipping a Claude-styled artifact:

- [ ] Background is `#faf9f5` (or `#141413` for inverse), not pure white/black
- [ ] Body text is in **Lora (serif)**, not sans
- [ ] Headings are in **Poppins**, weight 700+
- [ ] Only one accent color leads each region (terracotta, blue, *or* sage)
- [ ] Borders are whisper (`1px solid rgba(20,20,19,0.08)`) or absent — never thick black
- [ ] Border-radius ≥ 8px on cards — no sharp brutalist corners
- [ ] Shadows are soft and dispersed, not hard offset
- [ ] Animations use `cubic-bezier(0.16, 1, 0.3, 1)` ease-out, ≥400ms — not snappy 200ms linear
- [ ] White space feels generous — could you remove an element and the page would still feel intentional? Then leave it removed
- [ ] No bounce, no rotate-on-enter, no infinite loops
- [ ] Mono is reserved for labels/timestamps/code, not used as body or emphasis
- [ ] Copy is short sentences, second person, plain English

If 9+ boxes pass, you're aligned.

---

## 11. Sources

- [Anthropic Skills · brand-guidelines/SKILL.md](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md) — official font + color tokens
- [Geist Studio · Anthropic case study](https://geist.co/work/anthropic) — design philosophy, identity origin
- [Type.today · Styrene at Anthropic](https://type.today/en/journal/anthropic) — typography breakdown
- [Commercial Type · Styrene](https://commercialtype.com/catalog/styrene) — Styrene A/B reference
- [Klim Type Foundry · Tiempos](https://klim.co.nz/retail-fonts/tiempos-text/) — Tiempos reference
- [Anthropic homepage](https://www.anthropic.com/) — live reference for "what does it look like in 2026"
- [Claude.ai](https://claude.ai/) — live product surface

---

*Last updated: 2026-04-28. If Anthropic ships a new visual identity, re-verify the color hex codes against the latest version of the official `brand-guidelines` Skill.*
