# CareKind Voice AI — Tutorial 08/11

22-slide English web deck (React 19 + Vite + framer-motion, 1600×900 SlideEngine): from recording to a nurse-confirmed transcript — feature flow, technical design (trace, adapter pattern, scaling), test strategy, and coding-agent fundamentals (skills vs agents).

- Source brief: [SLIDES_PROMPT.md](SLIDES_PROMPT.md). All data is invented (Resident A, Room 12).
- Speaker notes live in the JSDoc block at the top of each `src/slides/Snn_*.tsx`.
- Shared diagram primitives (Frame, Node, Arrow, Pill, SequenceDiagram, Chain…) are in `src/kit.tsx`.

```bash
npm ci
npm run dev      # ← → to navigate, ?page=N to deep-link, C toggles camera, F fullscreen
npm run build    # tsc -b && vite build → dist/
```
