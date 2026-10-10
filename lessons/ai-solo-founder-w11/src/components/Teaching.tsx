import type { ReactNode } from 'react';
import { DeckFrame, Panel, Label, colors } from './deck';

export function Teaching({ tag, title, subtitle, children, dark = false }: { tag: string; title: string; subtitle?: string; children: ReactNode; dark?: boolean }) {
  return <DeckFrame tag={tag} title={title} subtitle={subtitle} bg={dark ? colors.dark : colors.warmBg}><div style={{ height: 474, color: dark ? colors.white : colors.dark }}>{children}</div></DeckFrame>;
}
export function Three({ items }: { items: { title: string; text: string; detail?: string }[] }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, height: '100%' }}>{items.map((item, i) => <Panel key={item.title} style={{ height: '100%', padding: 28 }}><Label bg={colors.yellow} color={colors.dark}>{`0${i + 1}`}</Label><h2 style={{ fontSize: 34, margin: '28px 0 18px', lineHeight: 1.2 }}>{item.title}</h2><p style={{ fontSize: 27, lineHeight: 1.5, margin: 0 }}>{item.text}</p>{item.detail && <p style={{ fontSize: 22, lineHeight: 1.5, marginTop: 24 }}>{item.detail}</p>}</Panel>)}</div>;
}
