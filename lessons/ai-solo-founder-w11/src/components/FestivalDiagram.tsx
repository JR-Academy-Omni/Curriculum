import { useId, type ReactNode } from 'react';
import { DeckFrame, colors, fonts } from './deck';
import { bilingualChildren, bilingualSubtitle } from './Teaching';
import { MotionArrow } from './MotionArrow';
import { teachingTermEn } from '../data/teaching-terms-en';

export function FestivalFrame({ title, subtitle, takeaway, children, evidence }: { title: string; subtitle: string; takeaway: string; children: ReactNode; evidence: string }) {
  return <DeckFrame tag="真实业务场景 · 新生节" title={title} subtitle={bilingualSubtitle(title,subtitle)} accent={colors.green}>
    <div style={{ height: 480, width: 1400, position: 'relative' }}>{bilingualChildren(children)}</div>
    <p style={{ margin: '8px 0', fontFamily: fonts.heading, fontSize: 28, fontWeight: 800 }}>{takeaway}</p>
    <p style={{ margin: '8px 0 0', fontFamily: fonts.body, fontSize: 17, maxWidth: 1300, color: colors.dark, opacity: .75 }}>{evidence}</p>
  </DeckFrame>;
}

export function Diagram({ title, children }: { title: string; children: (arrowId: string) => ReactNode }) {
  const arrowId = `festival-arrow-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return <svg role="img" aria-label={title} viewBox="0 0 1400 540" width="1400" height="480" style={{ overflow: 'visible', fontFamily: fonts.body }}>
    <title>{title}</title><defs><marker id={arrowId} markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse"><path d="M 0 0 L 9 5 L 0 10 Z" fill={colors.dark} /></marker></defs>{children(arrowId)}
  </svg>;
}

export function Node({ x, y, width = 300, title, detail, color = colors.white }: { x: number; y: number; width?: number; title: string; detail?: string; color?: string }) {
  const english=teachingTermEn(title);
  return <g><rect x={x + 6} y={y + 6} width={width} height={116} rx={24} fill={colors.yellow} /><rect x={x} y={y} width={width} height={116} rx={24} fill={color} stroke={colors.dark} strokeWidth={2} /><text x={x + width / 2} y={y + (english?33:47)} textAnchor="middle" fontSize={width < 280 ? 25 : 28} fontWeight={800} fill={colors.dark}>{title}</text>{english&&<text data-teaching-term-en x={x+width/2} y={y+58} textAnchor="middle" fontSize={width<280?16:18} fontWeight={550} fill={colors.dark}>{english}</text>}{detail && <text x={x + width / 2} y={y + 90} textAnchor="middle" fontSize={21} fill={colors.dark}>{detail}</text>}</g>;
}
export function Arrow({ d, arrowId, dashed = false }: { d: string; arrowId: string; dashed?: boolean }) {
  return <MotionArrow d={d} dashed={dashed} markerEnd={`url(#${arrowId})`} />;
}

export function ChartText({ x, y, children, size = 22, color = colors.dark }: { x: number; y: number; children: ReactNode; size?: number; color?: string }) {
  const english=typeof children==='string' ? teachingTermEn(children) : undefined;
  return <text x={x} y={y} fontSize={size} textAnchor="middle" fontWeight={700} fill={color}>{children}{english&&<tspan data-teaching-term-en x={x} dy={19} fontSize={17} fontWeight={550}>{english}</tspan>}</text>;
}
