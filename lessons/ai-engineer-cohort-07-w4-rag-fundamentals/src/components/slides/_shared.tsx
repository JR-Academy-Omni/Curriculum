import { useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { DeckFrame, Label, NumberBadge } from '../deck';
import { partById } from '../../data/parts';
import { sections } from '../../data/sections';

// 本讲座内容页共用的小零件（不是 slide，只被 S*.tsx 引用；从 W3 的 _shared 复制后扩展）
// 页面给学生看：一页一件事，几行「大白话 → 术语」。讲法和时间放讲师备注。
// 视觉遵循模板 2.0 的 Register B：DeckFrame 页头 + 圆角容器（禁止直角容器）

export const line = `2px solid ${colors.dark}`;
export const card: CSSProperties = { border: line, borderRadius: radii.card, background: colors.white };
export const softShadow = '5px 5px 0 rgba(255,222,89,.92)';
export const muted = '#514c48';

const isDarkColor = (c: string) => c === colors.red || c === colors.dark || c === colors.purple;

// 重点词：圆角色块（模板 Highlight 是直角，内容层用这个）
export function Mark({ children, color = colors.yellow }: { children: ReactNode; color?: string }) {
	return <span style={{ display: 'inline-block', padding: '1px 12px', borderRadius: radii.label, background: color, color: isDarkColor(color) ? colors.white : colors.black }}>{children}</span>;
}

// 英文术语胶囊
export function TermPill({ children, bg = colors.yellow, fontSize = 21 }: { children: ReactNode; bg?: string; fontSize?: number }) {
	return <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, fontFamily: fonts.mono, fontSize, fontWeight: 700, padding: '7px 16px', border: line, borderRadius: radii.pill, background: bg, color: isDarkColor(bg) ? colors.white : colors.black, whiteSpace: 'nowrap' }}>{children}</span>;
}

// 页框：左上角写环节名
export function PartFrame({ part, title, subtitle, titleSize = 54, children }: {
	part: string;
	title: ReactNode;
	subtitle?: ReactNode;
	titleSize?: number;
	children: ReactNode;
}) {
	const p = partById(part);
	return <DeckFrame tag={p.tag} title={title} subtitle={subtitle} accent={p.color} titleSize={titleSize}>{children}</DeckFrame>;
}

// 一行「大白话 → 术语」
export interface Row { say: ReactNode; term: string; note?: string; dim?: boolean; hot?: boolean }

export function Rows({ items, color = colors.yellow, fontSize = 29, gap = 12, pad = 13 }: { items: Row[]; color?: string; fontSize?: number; gap?: number; pad?: number }) {
	return (
		<div style={{ display: 'grid', gap }}>
			{items.map((it, i) => (
				<motion.div key={i} initial={{ opacity: 0, x: -18 }} animate={{ opacity: it.dim ? 0.42 : 1, x: 0 }} transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
					style={{ ...card, display: 'flex', alignItems: 'center', gap: 16, padding: `${pad}px 24px`, ...(it.hot ? { boxShadow: softShadow, borderWidth: 3 } : {}) }}>
					<span style={{ fontSize, fontWeight: 800, lineHeight: 1.35, flex: 1 }}>{it.say}</span>
					{it.note && <span style={{ fontSize: 18, fontWeight: 700, color: muted, whiteSpace: 'nowrap' }}>{it.note}</span>}
					<TermPill bg={color}>{it.term}</TermPill>
				</motion.div>
			))}
		</div>
	);
}

// 一句话收尾
export function Punch({ children, delay = 0.8, size = 31, mt = 24 }: { children: ReactNode; delay?: number; size?: number; mt?: number }) {
	return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay }} style={{ marginTop: mt, fontSize: size, fontWeight: 900, lineHeight: 1.45 }}>{children}</motion.div>;
}

// 页脚来源（只用在引用外部资料的页面）
export function SourceLine({ children }: { children: ReactNode }) {
	return <div style={{ marginTop: 14, fontFamily: fonts.mono, fontSize: 15, color: muted, lineHeight: 1.5 }}>来源：{children}</div>;
}

// 「点一下展开」按钮（点完失焦，避免空格键翻页被按钮吃掉）
export function RevealButton({ open, label, onClick }: { open: boolean; label: string; onClick: () => void }) {
	return (
		<button
			onClick={(e) => { onClick(); e.currentTarget.blur(); }}
			style={{
				padding: '10px 24px', background: open ? colors.white : colors.yellow,
				border: line, borderRadius: radii.pill, boxShadow: open ? 'none' : `3px 3px 0 ${colors.dark}`, cursor: 'pointer',
				fontFamily: fonts.body, fontSize: 22, fontWeight: 800, color: colors.black, flexShrink: 0,
			}}
		>
			{open ? '收起' : label}
		</button>
	);
}

// 一条聊天气泡（用户 / 助手）
export function Bubble({ who, children, bg }: { who: string; children: ReactNode; bg?: string }) {
	const user = who === '家属' || who === '用户';
	return (
		<div style={{ justifySelf: user ? 'end' : 'start', maxWidth: '92%', background: bg ?? (user ? colors.blue : colors.white), color: colors.black, border: line, borderRadius: radii.card, padding: '10px 18px', fontSize: 25, fontWeight: 700, lineHeight: 1.45 }}>
			<span style={{ fontFamily: fonts.mono, fontSize: 15, opacity: .7, marginRight: 8 }}>{who}</span>{children}
		</div>
	);
}

// 一道复习题：选项 + 点开答案
export interface Option { text: string; ok?: boolean; tag?: string }

export function Quiz({ n, q, options, explain, left, part = 'review', title }: { n?: number; q: string; options: Option[]; explain: ReactNode; left: ReactNode; part?: string; title?: string }) {
	const [open, setOpen] = useState(false);
	return (
		<PartFrame part={part} title={title ?? `第 ${n} 题：${q}`} titleSize={46} subtitle="先在聊天区写下你的答案。">
			<div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 26, alignItems: 'start' }}>
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>{left}</motion.div>
				<div style={{ display: 'grid', gap: 12 }}>
					{options.map((o, i) => {
						const hit = open && o.ok;
						return (
							<motion.div key={o.text} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.25 + i * 0.1 }}
								style={{ ...card, background: hit ? colors.green : colors.white, display: 'flex', alignItems: 'center', gap: 16, padding: '13px 20px', opacity: open && o.ok === false ? 0.5 : 1 }}>
								<NumberBadge bg={hit ? colors.white : colors.yellow}>{String.fromCharCode(65 + i)}</NumberBadge>
								<span style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.4, flex: 1 }}>{o.text}</span>
								{open && o.tag && <TermPill bg={colors.yellow} fontSize={18}>{o.tag}</TermPill>}
							</motion.div>
						);
					})}
					<div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginTop: 6 }}>
						<RevealButton open={open} label="看答案" onClick={() => setOpen((v) => !v)} />
						{open && <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.5, paddingTop: 6 }}>{explain}</div>}
					</div>
				</div>
			</div>
		</PartFrame>
	);
}

// 几张并排的卡片：大白话 + 术语 + 一句例子
export interface CardItem { zh: string; term: string; d: ReactNode; color: string }

export function TermCards({ items, minHeight = 300 }: { items: CardItem[]; minHeight?: number }) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 20 }}>
			{items.map((it, i) => (
				<motion.div key={it.term} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.1 }}
					style={{ ...card, boxShadow: softShadow, borderTop: `12px solid ${it.color}`, padding: '24px 24px', minHeight, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
					<div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.25 }}>{it.zh}</div>
					<TermPill bg={it.color}>{it.term}</TermPill>
					<div style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.55, color: muted, marginTop: 6 }}>{it.d}</div>
				</motion.div>
			))}
		</div>
	);
}

// 一排步骤：编号卡片 + 箭头（离线 / 在线流水线）
export interface Step { en: string; zh: ReactNode; d?: ReactNode }

export function Flow({ steps, color, minHeight = 230, zhSize = 30 }: { steps: Step[]; color: string; minHeight?: number; zhSize?: number }) {
	return (
		<div style={{ display: 'flex', alignItems: 'stretch', gap: 8 }}>
			{steps.map((s, i) => (
				<div key={s.en} style={{ display: 'contents' }}>
					{i > 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 + i * 0.12 }} style={{ alignSelf: 'center', fontFamily: fonts.heading, fontSize: 34, fontWeight: 900 }}>→</motion.div>}
					<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: 0.15 + i * 0.12 }}
						style={{ ...card, boxShadow: softShadow, borderTop: `12px solid ${color}`, flex: 1, minWidth: 0, minHeight, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700 }}>{s.en}</div>
						<div style={{ fontSize: zhSize, fontWeight: 900, lineHeight: 1.25 }}>{s.zh}</div>
						{s.d && <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.5, color: muted }}>{s.d}</div>}
					</motion.div>
				</div>
			))}
		</div>
	);
}

// 一张对比卡：标签 + 正文（左右对照用）
export function Side({ label, labelBg, dark, children, delay = 0.15, minHeight }: { label: string; labelBg: string; dark?: boolean; children: ReactNode; delay?: number; minHeight?: number }) {
	return (
		<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay }}
			style={{ ...card, background: dark ? colors.dark : colors.white, color: dark ? colors.white : colors.black, boxShadow: dark ? 'none' : softShadow, padding: '22px 26px', minHeight, display: 'flex', flexDirection: 'column', gap: 14 }}>
			<div><Label bg={labelBg} color={isDarkColor(labelBg) ? colors.white : colors.black}>{label}</Label></div>
			{children}
		</motion.div>
	);
}

// 一块证据（chunk）：编号 + 原文
export function Chunk({ id, children, faded }: { id: string; children: ReactNode; faded?: boolean }) {
	return (
		<div style={{ border: line, borderRadius: radii.label + 4, background: faded ? '#f3ece6' : colors.white, padding: '8px 14px', display: 'flex', gap: 12, alignItems: 'baseline', opacity: faded ? 0.75 : 1 }}>
			<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>{id}</span>
			<span style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45, color: colors.black }}>{children}</span>
		</div>
	);
}

// 目录：current 为空时是总目录；有值时是章节过渡页（当前部分亮，讲过的打勾，没讲的变淡）
export function Agenda({ current }: { current?: number }) {
	return (
		<div style={{ display: 'grid', gap: 8 }}>
			{sections.map((s, i) => {
				const hot = s.n === current;
				const done = current !== undefined && s.n < current;
				const later = current !== undefined && s.n > current;
				const color = partById(s.part).color;
				return (
					<motion.div key={s.n} initial={{ opacity: 0, x: -16 }} animate={{ opacity: done ? 0.5 : later ? 0.38 : 1, x: 0 }} transition={{ duration: 0.28, delay: 0.1 + i * 0.05 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '64px 200px 1fr auto', alignItems: 'center', gap: 16, padding: hot ? '11px 22px' : '6px 22px', borderLeft: `12px solid ${color}`, ...(hot ? { boxShadow: softShadow, borderWidth: 3, borderLeftWidth: 12 } : {}) }}>
						<span style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 700 }}>{done ? '✓' : String(s.n).padStart(2, '0')}</span>
						<span style={{ fontSize: hot ? 34 : 27, fontWeight: 900 }}>{s.zh}</span>
						<span style={{ fontSize: hot ? 28 : 23, fontWeight: 800 }}>{s.q}</span>
						<span style={{ fontSize: 17, fontWeight: 700, color: muted, whiteSpace: 'nowrap' }}>{s.back ?? ''}</span>
					</motion.div>
				);
			})}
		</div>
	);
}

// 章节过渡页：标题写第几部分，下面是高亮当前部分的目录
export function SectionCover({ n }: { n: number }) {
	const s = sections.find((x) => x.n === n)!;
	return (
		<PartFrame part={s.part} title={`第 ${n} 部分 · ${s.zh}`}>
			<Agenda current={n} />
		</PartFrame>
	);
}
