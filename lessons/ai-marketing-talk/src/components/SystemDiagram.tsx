import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { DeckFrame, colors, fonts, radii } from './deck';

type Kind = 'person' | 'ai' | 'doc' | 'post' | 'phone' | 'gate' | 'task' | 'folder' | 'clock' | 'store';
export interface DiagramNode {
  id: string; x: number; y: number; w: number; h: number;
  title: string; sub?: string; kind?: Kind; tint?: string; rows?: string[]; badge?: string;
}
export interface DiagramEdge {
  from: string; to: string; label?: string; path?: string; dashed?: boolean; color?: string;
  start?: 'top' | 'bottom' | 'left' | 'right'; end?: 'top' | 'bottom' | 'left' | 'right';
  lx?: number; ly?: number;
}
export interface DiagramSpec {
  stage: string; title: string; takeaway: string;
  nodes: DiagramNode[]; edges?: DiagramEdge[];
  labels?: { x: number; y: number; text: string; color?: string }[];
  zones?: { x: number; y: number; w: number; h: number; label: string }[];
}

// Original schematic icons, not provider or JR logos.
function Icon({ kind = 'doc' }: { kind?: Kind }) {
  const paths: Record<Kind, ReactNode> = {
    person: <><circle cx="24" cy="14" r="8"/><path d="M8 43v-7c0-15 32-15 32 0v7"/></>,
    ai: <><rect x="7" y="12" width="34" height="27" rx="5"/><path d="M24 5v7M15 23h2m14 0h2M16 31h16M2 21v9m44-9v9"/></>,
    doc: <><path d="M10 3h20l9 9v33H10zM30 3v11h9M17 23h16M17 30h16M17 37h10"/></>,
    post: <><rect x="5" y="5" width="38" height="38"/><path d="M5 30l12-11 10 9 8-8 8 10M12 37h24"/><circle cx="31" cy="13" r="3"/></>,
    phone: <><rect x="12" y="2" width="25" height="44" rx="4"/><path d="M21 16l10 7-10 7zM21 39h7"/></>,
    gate: <><path d="M24 2l22 22-22 22L2 24zM14 24l7 7 14-16"/></>,
    task: <><rect x="7" y="7" width="34" height="37"/><path d="M17 3h14v9H17zM13 22l3 3 5-6m4 4h10M13 34l3 3 5-6m4 4h10"/></>,
    folder: <path d="M4 12h17l5 6h18v25H4zM4 12V6h15l6 6h15v6"/>,
    clock: <><circle cx="24" cy="24" r="20"/><path d="M24 10v15l10 7"/></>,
    store: <><ellipse cx="24" cy="9" rx="19" ry="7"/><path d="M5 9v29c0 10 38 10 38 0V9M5 23c0 10 38 10 38 0"/></>,
  };
  return <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

function Node({ node, index }: { node: DiagramNode; index: number }) {
  const { x, y, w, h, title, sub, rows, badge, kind = 'doc' } = node;
  const dark = kind === 'ai';
  const bg = node.tint ?? (dark ? colors.dark : colors.white);
  const ink = dark ? colors.white : colors.dark;
  const artifact = Boolean(rows?.length);
  const compact = w < 280;
  return <motion.div data-diagram-node={node.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035, duration: 0.22 }}
    style={{ position: 'absolute', left: x, top: y, width: w, height: h, padding: artifact ? '14px 22px' : '16px 18px', background: bg, color: ink,
      border: `2px solid ${colors.dark}`, borderRadius: radii.card, boxShadow: `5px 5px 0 ${dark ? colors.rose : colors.yellow}`, display: 'flex', flexDirection: 'column', justifyContent: artifact ? 'flex-start' : 'center', gap: 10, overflow: 'hidden' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
      {!compact && <Icon kind={kind}/>}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontFamily: fonts.heading, fontSize: w < 220 ? 26 : 30, lineHeight: 1.25, fontWeight: 900 }}>{title}</h2>
        {sub && <p style={{ marginTop: 5, fontSize: 22, fontWeight: 600, lineHeight: 1.35, opacity: 0.85 }}>{sub}</p>}
      </div>
    </div>
    {artifact && <div style={{ borderTop: `2px solid ${ink}`, paddingTop: 13, marginTop: 4, display: 'grid', gap: 10 }}>
      {kind === 'post' && <div aria-hidden="true" style={{ height: 64, borderRadius: radii.label, background: colors.rose, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.white, fontSize: 28, fontWeight: 900 }}>AI 工作流体验课</div>}
      {kind === 'phone' && <div aria-hidden="true" style={{ height: 74, borderRadius: radii.label, background: colors.dark, color: colors.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 35 }}>▶</div>}
      {rows?.map((row, i) => <p key={i} style={{ fontSize: 24, fontWeight: i === 0 ? 800 : 600, lineHeight: 1.4 }}>{row}</p>)}
    </div>}
    {badge && <span style={{ alignSelf: 'flex-start', marginTop: 'auto', padding: '4px 9px', borderRadius: radii.label, background: colors.yellow, color: colors.dark, fontSize: 18, fontWeight: 800 }}>{badge}</span>}
  </motion.div>;
}

function port(n: DiagramNode, side: 'top' | 'bottom' | 'left' | 'right') {
  return side === 'top' ? [n.x + n.w / 2, n.y] : side === 'bottom' ? [n.x + n.w / 2, n.y + n.h] : side === 'left' ? [n.x, n.y + n.h / 2] : [n.x + n.w, n.y + n.h / 2];
}

export default function SystemDiagram({ stage, title, takeaway, nodes, edges = [], labels = [], zones = [] }: DiagramSpec) {
  return <DeckFrame stage={stage} title={title} takeaway={takeaway}>
        {zones.map(z => <div key={z.label} style={{ position: 'absolute', left: z.x, top: z.y, width: z.w, height: z.h, border: '1px dashed #aaa', borderRadius: radii.panel, background: colors.warmBg }}><p style={{ position: 'absolute', left: 14, top: 10, fontSize: 18, fontWeight: 800, color: '#666' }}>{z.label}</p></div>)}
        <svg width="1380" height="554" style={{ position: 'absolute', inset: 0, overflow: 'visible' }} aria-hidden="true">
          <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill={colors.rose}/></marker></defs>
          {edges.map((e, i) => {
            const a = nodes.find(n => n.id === e.from), b = nodes.find(n => n.id === e.to);
            if (!a || !b) return null;
            const [x1, y1] = port(a, e.start ?? 'right'), [x2, y2] = port(b, e.end ?? 'left');
            const d = e.path ?? (y1 === y2 || x1 === x2 ? `M${x1} ${y1}L${x2} ${y2}` : `M${x1} ${y1}L${(x1+x2)/2} ${y1}L${(x1+x2)/2} ${y2}L${x2} ${y2}`);
            return <g key={i}><path d={d} fill="none" stroke={e.color ?? colors.rose} strokeWidth="3" strokeDasharray={e.dashed ? '8 7' : undefined} markerEnd="url(#arrow)"/>{e.label && <><rect x={(e.lx ?? (x1+x2)/2)-e.label.length*10-8} y={(e.ly ?? (y1+y2)/2)-15} width={e.label.length*20+16} height="30" fill={colors.warmBg}/><text x={e.lx ?? (x1+x2)/2} y={(e.ly ?? (y1+y2)/2)+7} textAnchor="middle" fill={e.color ?? colors.rose} fontSize="20" fontFamily={fonts.body} fontWeight="800">{e.label}</text></>}</g>;
          })}
        </svg>
        {nodes.map((node, i) => <Node key={node.id} node={node} index={i}/>)}
        {labels.map((l, i) => <p key={i} style={{ position: 'absolute', left: l.x, top: l.y, fontSize: 22, fontWeight: 800, lineHeight: 1.4, color: l.color ?? colors.rose, background: colors.warmBg }}>{l.text}</p>)}
  </DeckFrame>;
}
