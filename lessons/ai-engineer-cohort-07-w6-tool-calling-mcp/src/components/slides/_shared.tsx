import { useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, radii } from '../ui';
import { DeckFrame, Label, NumberBadge } from '../deck';
import { partById } from '../../data/parts';
import { sections } from '../../data/sections';

// 本讲座内容页共用的小零件（不是 slide，只被 S*.tsx 引用；从 W5 的 _shared 复制，文末是 W6 新增）
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

export function Quiz({ n, q, options, explain, left, part = 'review', title }: { n?: number; q?: string; options: Option[]; explain: ReactNode; left: ReactNode; part?: string; title?: string }) {
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

// —— W5 新增 ——

// 一个检索结果 / 证据块：编号 + 状态 + 原文（过期版本加删除线标签）
export function Evidence({ id, stale, gold, children }: { id: string; stale?: boolean; gold?: boolean; children: ReactNode }) {
	return (
		<div style={{ border: line, borderRadius: radii.label + 4, background: stale ? '#f3ece6' : colors.white, padding: '8px 14px', display: 'grid', gap: 4, ...(gold ? { boxShadow: `4px 4px 0 ${colors.green}` } : {}) }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 700 }}>{id}</span>
				{stale && <span style={{ fontSize: 15, fontWeight: 800, background: colors.red, color: colors.white, borderRadius: radii.pill, padding: '1px 10px' }}>已作废</span>}
				{gold && <span style={{ fontSize: 15, fontWeight: 800, background: colors.green, borderRadius: radii.pill, padding: '1px 10px' }}>要找的证据</span>}
			</div>
			<span style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.45 }}>{children}</span>
		</div>
	);
}

// 实验前后对比：一行一个指标，base → exp；good=true 变好（绿），false 变坏（红），不填为持平
export interface Delta { label: string; base: string; exp: string; good?: boolean }

export function DeltaTable({ rows, fontSize = 25 }: { rows: Delta[]; fontSize?: number }) {
	return (
		<div style={{ display: 'grid', gap: 9 }}>
			{rows.map((r, i) => {
				const bg = r.good === true ? colors.green : r.good === false ? colors.red : '#efe7df';
				return (
					<motion.div key={r.label} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: 0.15 + i * 0.08 }}
						style={{ ...card, display: 'grid', gridTemplateColumns: '1fr 120px 40px 150px', alignItems: 'center', gap: 10, padding: '9px 20px' }}>
						<span style={{ fontSize, fontWeight: 800 }}>{r.label}</span>
						<span style={{ fontFamily: fonts.mono, fontSize: fontSize - 2, fontWeight: 700, textAlign: 'right', color: muted }}>{r.base}</span>
						<span style={{ fontFamily: fonts.heading, fontSize: fontSize, fontWeight: 900, textAlign: 'center' }}>{r.base ? '→' : ''}</span>
						<span style={{ fontFamily: fonts.mono, fontSize: fontSize - 2, fontWeight: 700, textAlign: 'center', background: bg, color: r.good === false ? colors.white : colors.black, borderRadius: radii.pill, padding: '2px 12px' }}>{r.exp}</span>
					</motion.div>
				);
			})}
		</div>
	);
}

// 修好的 / 新坏的 case
export function CaseChips({ label, ids, color }: { label: string; ids: string[]; color: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
			<span style={{ fontSize: 23, fontWeight: 900 }}>{label}</span>
			{ids.length === 0
				? <span style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700, color: muted }}>无</span>
				: ids.map((id) => <TermPill key={id} bg={color} fontSize={19}>{id}</TermPill>)}
		</div>
	);
}

// 页脚：数据来自哪次运行
export function RunLine({ children }: { children: ReactNode }) {
	return <div style={{ marginTop: 12, fontFamily: fonts.mono, fontSize: 15, color: muted, lineHeight: 1.5 }}>数据：{children}</div>;
}

export const DEMO_RUN = '本机实测 · FastMCP 4.1.4 · MCP Python SDK 2.3.0 · 2026-10-30';

// —— W6 新增 ——

// 三列定义表：术语 · 大白话 · 在公司里（全课只用这一套类比）
export interface TermRow { term: string; say: ReactNode; co: ReactNode }

export function TermTable({ rows, color = colors.orange }: { rows: TermRow[]; color?: string }) {
	return (
		<div style={{ display: 'grid', gap: 10 }}>
			<div style={{ display: 'grid', gridTemplateColumns: '230px 1fr 1fr', gap: 16, padding: '0 22px', fontSize: 18, fontWeight: 800, color: muted }}>
				<span>术语</span><span>大白话</span><span>在公司里</span>
			</div>
			{rows.map((r, i) => (
				<motion.div key={r.term} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: 0.15 + i * 0.1 }}
					style={{ ...card, display: 'grid', gridTemplateColumns: '230px 1fr 1fr', alignItems: 'center', gap: 16, padding: '13px 22px' }}>
					<span style={{ justifySelf: 'start' }}><TermPill bg={color} fontSize={20}>{r.term}</TermPill></span>
					<span style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>{r.say}</span>
					<span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.45, color: muted }}>{r.co}</span>
				</motion.div>
			))}
		</div>
	);
}

// 终端框：$ 开头的是命令（黄），其余是输出（白）
export function Terminal({ lines, fontSize = 19, title }: { lines: string[]; fontSize?: number; title?: string }) {
	return (
		<div style={{ background: colors.dark, borderRadius: radii.card, padding: '14px 20px', border: line }}>
			{title && <div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#9aa0b4', marginBottom: 8 }}>{title}</div>}
			<pre style={{ margin: 0, fontFamily: fonts.mono, fontSize, lineHeight: 1.5, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
				{lines.map((l, i) => <div key={i} style={{ color: l.startsWith('$') ? colors.yellow : l.startsWith('#') ? '#9aa0b4' : colors.white }}>{l || ' '}</div>)}
			</pre>
		</div>
	);
}

// 代码框（浅底）：hot 是要强调的行号（从 0 开始）
export function Code({ lines, hot = [], fontSize = 20 }: { lines: string[]; hot?: number[]; fontSize?: number }) {
	return (
		<pre style={{ margin: 0, ...card, padding: '14px 18px', fontFamily: fonts.mono, fontSize, lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>
			{lines.map((l, i) => <div key={i} style={{ background: hot.includes(i) ? 'rgba(255,222,89,.55)' : 'transparent', borderRadius: 6, padding: '0 6px' }}>{l || ' '}</div>)}
		</pre>
	);
}

// 总图：上排公司、下排技术，一一对齐；hot 是要高亮的格子（0–5）
export const picture = [
	{ co: '客户', tech: '用户' },
	{ co: '客服专员', tech: '模型' },
	{ co: '客服系统', tech: 'MCP client' },
	{ co: '专用内线', tech: 'stdio' },
	{ co: '订单组窗口', tech: 'MCP server · tool' },
	{ co: '回执', tech: 'result' },
];

export function BigPicture({ hot, delay = 0.15 }: { hot?: number[]; delay?: number }) {
	const on = (i: number) => !hot || hot.includes(i);
	const cols = picture.map(() => '1fr').join(' 34px ');
	const arrow = (i: number) => (
		<motion.div key={`a${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: delay + i * 0.08 + 0.05 }}
			style={{ alignSelf: 'center', textAlign: 'center', fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>→</motion.div>
	);
	return (
		<div style={{ display: 'grid', gridTemplateColumns: cols, rowGap: 10, alignItems: 'stretch' }}>
			{picture.flatMap((c, i) => [
				...(i > 0 ? [arrow(i)] : []),
				<motion.div key={c.co} initial={{ opacity: 0, y: 12 }} animate={{ opacity: on(i) ? 1 : 0.35, y: 0 }} transition={{ duration: 0.3, delay: delay + i * 0.08 }}
					style={{ ...card, minHeight: 104, padding: '12px 10px', display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 24, fontWeight: 900, ...(hot && hot.includes(i) ? { boxShadow: softShadow, borderWidth: 3 } : {}) }}>
					{c.co}
				</motion.div>,
			])}
			{picture.flatMap((c, i) => [
				...(i > 0 ? [<span key={`b${i}`} />] : []),
				<motion.div key={c.tech} initial={{ opacity: 0 }} animate={{ opacity: on(i) ? 1 : 0.35 }} transition={{ duration: 0.3, delay: delay + 0.5 + i * 0.08 }}
					style={{ justifySelf: 'center' }}>
					<TermPill bg={on(i) ? colors.yellow : '#efe7df'} fontSize={17}>{c.tech}</TermPill>
				</motion.div>,
			])}
		</div>
	);
}
