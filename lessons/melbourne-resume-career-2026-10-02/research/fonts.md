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

An official Google Fonts CSS request for Bricolage Grotesque, DM Sans, and Space Mono timed out after 35 seconds. No Latin WOFF2 was downloaded, and no substitute file is mislabeled as one of those families. Additional Latin font assets remain absent; CSS must use the locally supplied Noto font or an explicit system fallback until genuine font files are obtained.
