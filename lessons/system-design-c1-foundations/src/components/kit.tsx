import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { DeckFrame, Panel, Label, NumberBadge, AnimatedGroup, colors, fonts, radii } from './deck';

export { DeckFrame, Panel, Label, NumberBadge, AnimatedGroup, colors, fonts, radii };

export const ink = '#514c48';
export const soft = '#fff8f2';

/** 章节标签：环节编号 + 是否断流 */
export function SegTag(seg: string, offAir = false) {
	return `${seg}${offAir ? ' · 🔴 断流' : ''}`;
}

export function Table({ head, rows, widths, size = 21, highlightCol }: { head: string[]; rows: ReactNode[][]; widths?: string; size?: number; highlightCol?: number }) {
	const cols = widths ?? `repeat(${head.length}, 1fr)`;
	return <div style={{ border: `2px solid ${colors.dark}`, borderRadius: radii.card, overflow: 'hidden', background: colors.white }}>
		<div style={{ display: 'grid', gridTemplateColumns: cols, background: colors.dark, color: colors.white }}>
			{head.map(h => <div key={h} style={{ padding: '13px 16px', fontWeight: 800, fontSize: size - 1 }}>{h}</div>)}
		</div>
		{rows.map((r, i) => <motion.div key={i} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 + i * .07 }} style={{ display: 'grid', gridTemplateColumns: cols, background: i % 2 ? soft : colors.white, borderTop: i ? '1px solid rgba(16,22,47,.14)' : undefined }}>
			{r.map((c, j) => <div key={j} style={{ padding: '12px 16px', fontSize: size, lineHeight: 1.38, fontWeight: j === 0 ? 800 : 500, background: highlightCol === j ? 'rgba(255,222,89,.35)' : undefined }}>{c}</div>)}
		</motion.div>)}
	</div>;
}

export function Node({ title, sub, bg = colors.white, color = colors.dark, style }: { title: ReactNode; sub?: ReactNode; bg?: string; color?: string; style?: CSSProperties }) {
	return <div style={{ background: bg, color, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 18px', boxShadow: '5px 5px 0 rgba(16,22,47,.85)', ...style }}>
		<div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.2 }}>{title}</div>
		{sub && <div style={{ fontSize: 19, lineHeight: 1.4, marginTop: 6, fontWeight: 500 }}>{sub}</div>}
	</div>;
}

export function Arrow({ dir = 'right', size = 34 }: { dir?: 'right' | 'down'; size?: number }) {
	return <div aria-hidden style={{ fontSize: size, fontWeight: 900, color: colors.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>{dir === 'right' ? '→' : '↓'}</div>;
}

/** Prompt / 文件内容卡。中文内容用正文字体，不用等宽字体 */
export function PromptCard({ label, children, dark = false, size = 19 }: { label: string; children: ReactNode; dark?: boolean; size?: number }) {
	return <div style={{ background: dark ? '#0f1428' : '#fffdf8', color: dark ? '#f3f0e8' : colors.dark, border: `2px solid ${colors.dark}`, borderRadius: radii.card, padding: '18px 22px', height: '100%', boxSizing: 'border-box' }}>
		<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1.4, color: dark ? colors.yellow : colors.red, marginBottom: 10 }}>{label}</div>
		<div style={{ fontFamily: fonts.body, fontSize: size, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{children}</div>
	</div>;
}

export function Check({ children }: { children: ReactNode }) {
	return <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: colors.green, border: `2px solid ${colors.dark}`, borderRadius: 999, padding: '12px 24px', fontSize: 22, fontWeight: 800 }}>
		<span style={{ fontFamily: fonts.mono, fontSize: 15, background: colors.dark, color: colors.white, borderRadius: 999, padding: '4px 10px' }}>验收</span><span>{children}</span>
	</div>;
}

export function Steps({ items, size = 23, start = 1 }: { items: ReactNode[]; size?: number; start?: number }) {
	return <div style={{ display: 'grid', gap: 14 }}>
		{items.map((t, i) => <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 + i * .07 }} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
			<NumberBadge bg={i % 2 ? colors.white : colors.yellow}>{start + i}</NumberBadge>
			<div style={{ fontSize: size, lineHeight: 1.42, paddingTop: 8 }}>{t}</div>
		</motion.div>)}
	</div>;
}

export function Takeaway({ children, bg = colors.dark }: { children: ReactNode; bg?: string }) {
	return <div style={{ background: bg, color: bg === colors.dark ? colors.white : colors.dark, borderRadius: radii.card, padding: '15px 24px', fontSize: 24, fontWeight: 800, lineHeight: 1.35 }}>{children}</div>;
}
