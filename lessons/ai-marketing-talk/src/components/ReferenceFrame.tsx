import type { ReactNode } from 'react';
import { DeckFrame } from './deck';

/** Shared chrome only; each reference-derived page owns its teaching composition. */
export default function ReferenceFrame(props: { stage: string; title: string; takeaway: string; children: ReactNode }) {
  return <DeckFrame {...props} />;
}
