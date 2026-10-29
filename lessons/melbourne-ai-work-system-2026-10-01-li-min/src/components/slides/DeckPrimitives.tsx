import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, Panel, Label, NumberBadge, AnimatedGroup, colors, fonts, radii } from '../deck';
import { assetPath } from '../ui';

export { Panel, Label, NumberBadge, AnimatedGroup, colors, fonts, radii, assetPath };
export const PPT_HREF = assetPath('speakers/li-min.pptx');

export function Frame({ page, tag, title, subtitle, children, titleSize = 54 }: {
  page: number; tag: string; title: ReactNode; subtitle?: ReactNode; children: ReactNode; titleSize?: number;
}) {
  return <div data-slide-number={page} style={{ width: '100%', height: '100%', position: 'relative', color: colors.dark }}>
    <DeckFrame tag={tag} title={title} subtitle={subtitle} titleSize={titleSize} footerSpace={24}>
      <div data-slide-content style={{ height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
    </DeckFrame>
    <div style={{ position: 'absolute', left: 140, bottom: 49, fontSize: 16, fontFamily: fonts.body, color: '#68615e' }}>李敏 · AI 对会计行业的影响</div>
    <a href={PPT_HREF} target="_blank" rel="noreferrer" download="AI_会计行业影响_15分钟演讲_李敏.pptx" aria-label="下载李敏的原始 PowerPoint 讲稿"
      onClick={event => event.stopPropagation()}
      style={{ position: 'absolute', right: 118, bottom: 42, display: 'inline-flex', alignItems: 'center', gap: 12, minHeight: 42, padding: '9px 17px', border: `2px solid ${colors.dark}`, borderRadius: radii.label, color: colors.dark, background: colors.white, fontSize: 18, fontWeight: 700, textDecoration: 'none', boxShadow: `4px 4px 0 ${colors.yellow}`, zIndex: 5 }}>
      <span>李敏 · 原始 PPT</span><span aria-hidden>↗</span>
    </a>
  </div>;
}

export function BodyGrid({ children, columns = '1fr 1fr', gap = 24, style }: { children: ReactNode; columns?: string; gap?: number; style?: CSSProperties }) {
  return <div style={{ display: 'grid', gridTemplateColumns: columns, gap, flex: 1, minHeight: 0, ...style }}>{children}</div>;
}

export function TextList({ items, size = 25, gap = 12, color = colors.dark }: { items: ReactNode[]; size?: number; gap?: number; color?: string }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap, fontSize: size, lineHeight: 1.35, color }}>{items.map((item, i) => <div key={i}>{item}</div>)}</div>;
}

export function ListPanel({ title, items, accent = colors.yellow, style, size = 25 }: {
  title: string; items: ReactNode[]; accent?: string; style?: CSSProperties; size?: number;
}) {
  return <Panel style={{ display: 'flex', flexDirection: 'column', gap: 20, ...style }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 10, height: 28, borderRadius: 5, background: accent, flexShrink: 0 }} /><h2 style={{ fontSize: 29, lineHeight: 1.2, fontWeight: 850 }}>{title}</h2></div>
    <TextList items={items} size={size} />
  </Panel>;
}

export function Takeaway({ children, accent = colors.yellow, size = 25 }: { children: ReactNode; accent?: string; size?: number }) {
  return <div style={{ borderLeft: `7px solid ${accent}`, borderRadius: 8, padding: '10px 20px', fontSize: size, lineHeight: 1.4, fontWeight: 700 }}>{children}</div>;
}

export function SoftNode({ children, accent = colors.yellow, style }: { children: ReactNode; accent?: string; style?: CSSProperties }) {
  return <div style={{ borderRadius: radii.card, background: colors.white, border: `2px solid ${colors.dark}`, padding: '18px 22px', boxShadow: `5px 5px 0 ${accent}`, ...style }}>{children}</div>;
}

export function FlowArrow() {
  return <span aria-hidden style={{ alignSelf: 'center', fontSize: 36, fontWeight: 800, color: colors.red }}>→</span>;
}
