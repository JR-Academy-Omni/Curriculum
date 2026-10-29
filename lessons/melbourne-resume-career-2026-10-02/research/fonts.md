# Offline font assets

Prepared for the 2026-10-02 Melbourne resume and career event. Source deck: `src/data/deck.json`.

## Noto Sans SC

- Destination: `public/fonts/noto-sans-sc.ttf`.
- Original local source: `/Users/shijie/Library/Fonts/NotoSansSC[wght].ttf`.
- The original file is copied byte-for-byte; system fonts are unchanged. SHA-256: `a3041811a78c361b1de50f953c805e0244951c21c5bd412f7232ef0d899af0da`.
- Size: 17,772,300 bytes. TrueType variable font, weight axis 100–900; the presentation may request 400–900. No font outlines, names, metrics, or variable tables were modified.
- Embedded version: `Version 2.004-H2;hotconv 1.0.118;makeotfexe 2.5.65603`.
- Intended web usage: a local `@font-face` with a stable alias such as `JR Noto Sans SC`, source `url(.../fonts/noto-sans-sc.ttf) format('truetype')`, `font-weight: 100 900`, and `font-style: normal`. Local CSS and offline single-file packaging should preserve the embedded font bytes. This task adds the asset and provenance only; the parent task handles CSS and packaging.
- Coverage check against the current deck: 451 unique non-whitespace characters checked against the font's Unicode cmap. Missing characters: [].
- PPTX can use the installed Noto Sans SC / Source Han Sans family to keep Chinese metrics close; merely referring to the family name in PPTX is not the same as embedding a font.

## License and attribution

The font's embedded name metadata identifies SIL Open Font License 1.1. The matching official license is preserved as `public/fonts/OFL-NotoSansSC.txt`, downloaded from [Google Fonts' Noto Sans SC source](https://raw.githubusercontent.com/google/fonts/main/ofl/notosanssc/OFL.txt).

Copyright 2014–2021 Adobe, with Reserved Font Name “Source”. Keep the included copyright and OFL license with any redistribution of these font bytes. The official license permits use and embedding under its terms.

## Subsetting and optional Latin fonts

The bundled Python and system Python both lack `fontTools`; `pyftsubset` is not available. Following the allowed fallback, the complete existing TTF is used instead of generating a WOFF2 subset. No package was installed and no system font was changed. The tradeoff is a larger offline file.

The initial command-line Google Fonts request timed out. This was resolved by reading the live reference CSS and downloading its exact font URLs through a real browser. The four Latin WOFF2 assets below are now present locally; they do not depend on an online Google Fonts request during presentation.


## Latin fonts: exact reference asset provenance

The live reference is the September Melbourne AI Startup Showcase deck at `https://jracademy.ai/curriculum/lessons/melbourne-ai-startup-showcase-networking/editions/2026-09/?page=1`. Its official Google Fonts CSS requests Bricolage Grotesque 400/600/700/800, DM Sans 400/500/600/700, Space Mono 400/700, and Noto Sans SC 400/500/700/900. The downloaded Latin files are the exact URLs returned by that CSS, copied without conversion or modification.

- Bricolage Grotesque: Google Fonts delivery version `v9`, Latin subset, true variable `wght` axis 200–800. Default instance 800.
- DM Sans: Google Fonts delivery version `v17`, Latin subset, true variable `wght` axis 100–1000. Default instance 400.
- Space Mono: Google Fonts delivery version `v17`, separate static Latin files for regular 400 and bold 700.
- These ranges were verified directly from the downloaded WOFF2 `fvar` / `OS/2` tables, not inferred only from CSS names.
- Suggested local declarations: `Bricolage Grotesque` with `font-weight: 200 800`; `DM Sans` with `font-weight: 100 1000`; two `Space Mono` declarations with `font-weight: 400` and `700`. Use `format('woff2')`. The parent task owns CSS integration and offline bundling.
- The Latin unicode range includes U+0000–00FF (including multiplication sign ×), basic Latin punctuation, U+2000–206F, and the other Google Fonts Latin ranges. Chinese continues to use the bundled Noto Sans SC font.

| Local file | Official original URL | Bytes | SHA-256 |
|---|---|---:|---|
| `public/fonts/bricolage-grotesque.woff2` | `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9H6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiawA1XphjhQYg.woff2` | 41236 | `4fd48b2c1ab27220e71f15f990550261b35245c3bdfd8d8025b4bdac0459ee2d` |
| `public/fonts/dm-sans.woff2` | `https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2` | 36980 | `468d56b6b25b05b70190b6c233d773f6f1770e8579827ce022a57f03fa8002fb` |
| `public/fonts/space-mono-regular.woff2` | `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRYEF8RXi4EwQ.woff2` | 9464 | `e0c8e616bda27642f4c3cebaecff6525d901e73afc8a227cbbb0f2af4810f300` |
| `public/fonts/space-mono-bold.woff2` | `https://fonts.gstatic.com/s/spacemono/v17/i7dMIFZifjKcF5UAWdDRaPpZUFWaHi6WZ3Q.woff2` | 9552 | `af7cf6d2b897ec453acdcdacde4e9bcc8410718af5914de865b453e09f10eebc` |

All three families use SIL Open Font License 1.1. Complete unmodified license files are included:

- `public/fonts/OFL-BricolageGrotesque.txt`: `https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/OFL.txt`
- `public/fonts/OFL-DMSans.txt`: `https://raw.githubusercontent.com/google/fonts/main/ofl/dmsans/OFL.txt`
- `public/fonts/OFL-SpaceMono.txt`: `https://raw.githubusercontent.com/google/fonts/main/ofl/spacemono/OFL.txt`

Keep these copyright and license notices with redistributed font bytes. No system fonts were installed or changed.
