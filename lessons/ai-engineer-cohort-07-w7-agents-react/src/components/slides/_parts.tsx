import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts, radii } from '../ui';

// W7 内容层共用零件（不是 slide，只被 S*.tsx 引用）。只用 theme 令牌，不动引擎。
// 视觉按 JR Craft：网格纸画布、marker underline 标题、圆角容器（禁止直角）、2px 深色描边、品牌色偏移软阴影。
// 页框的画布与标题写法和模板 deck.tsx 的 DeckFrame 一致；这里把代码位置标签和环节名放在同一行，给高密度页留出空间。

export const line = `2px solid ${colors.dark}`;
export const softShadow = '6px 6px 0 rgba(255,222,89,.92)';

const rise = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.35, delay },
});

const grid = {
	backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
	backgroundSize: '48px 48px',
};

const isDark = (c: string) => c === colors.dark || c === colors.black || c === colors.red;

// 页面主题对应的代码位置，学员可以按这个回到 demo 里找。
export function CodeRef({ children }: { children: ReactNode }) {
	return (
		<span style={{
			display: 'inline-flex', alignItems: 'center', padding: '5px 12px', background: colors.dark, color: colors.yellow,
			borderRadius: radii.label, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
		}}>{children}</span>
	);
}

export function Page({ part, title, children, bg = colors.warmBg, at }: { part: string; title: ReactNode; children: ReactNode; bg?: string; at?: string[] }) {
	return (
		<Slide bg={bg} style={{ position: 'relative', ...grid }}>
			<div aria-hidden style={{ position: 'absolute', right: -62, bottom: -38, width: 220, height: 138, borderRadius: '110px 0 0 0', background: colors.yellow, opacity: .45 }} />
			<div style={{ position: 'relative', width: '100%', height: '100%', padding: '66px 76px 54px', display: 'flex', flexDirection: 'column', gap: 18 }}>
				<div style={{ maxWidth: 1300 }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
						style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
						<span style={{ width: 46, height: 9, borderRadius: 999, background: colors.red }} />
						<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 1.8, marginRight: 6 }}>{part}</span>
						{at?.map(ref => <CodeRef key={ref}>{ref}</CodeRef>)}
					</motion.div>
					<motion.h1 {...rise(0.06)} style={{ fontFamily: fonts.heading, fontSize: 46, lineHeight: 1.12, letterSpacing: -1.2, margin: '14px 0 0', color: colors.black }}>
						<span style={{ backgroundImage: `linear-gradient(transparent 70%, ${colors.yellow} 70%, ${colors.yellow} 94%, transparent 94%)`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>{title}</span>
					</motion.h1>
				</div>
				<motion.div {...rise(0.12)} style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}>
					{children}
				</motion.div>
			</div>
		</Slide>
	);
}

export function PartCover({ n, title, question, minutes }: { n: string; title: string; question: string; minutes: string }) {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			<div aria-hidden style={{ position: 'absolute', right: 120, top: 150, width: 260, height: 260, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .35 }} />
			<div style={{ position: 'relative', width: '100%', padding: '0 120px', display: 'flex', flexDirection: 'column', gap: 24 }}>
				<motion.div {...rise()}>
					<span style={{ display: 'inline-flex', padding: '7px 16px', borderRadius: radii.label, background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 1.2 }}>{`第 ${n} 部分 · ${minutes}`}</span>
				</motion.div>
				<motion.h1 {...rise(0.12)} style={{ fontFamily: fonts.heading, fontSize: 84, lineHeight: 1.08, letterSpacing: -2, color: colors.white, margin: 0 }}>{title}</motion.h1>
				<motion.p {...rise(0.25)} style={{ color: colors.yellow, fontSize: 34, fontWeight: 700, margin: 0 }}>{question}</motion.p>
			</div>
		</Slide>
	);
}

export function Code({ file, code, size = 19 }: { file?: string; code: string; size?: number }) {
	return (
		<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', background: colors.dark, boxShadow: softShadow, minHeight: 0 }}>
			{file && (
				<div style={{ padding: '7px 18px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14 }}>{file}</div>
			)}
			<pre style={{
				margin: 0, padding: '14px 20px', color: colors.white, fontFamily: fonts.mono,
				fontSize: size, lineHeight: 1.42, whiteSpace: 'pre-wrap', overflow: 'hidden',
			}}>{code}</pre>
		</div>
	);
}

export function Say({ children, bg = colors.yellow }: { children: ReactNode; bg?: string }) {
	return (
		<div style={{ padding: '14px 24px', background: bg, color: isDark(bg) ? colors.white : colors.black, border: line, borderRadius: radii.card, fontSize: 27, fontWeight: 700, lineHeight: 1.35 }}>{children}</div>
	);
}

export function Box({ title, children, bg = colors.white, style, size = 25 }: { title?: ReactNode; children?: ReactNode; bg?: string; style?: CSSProperties; size?: number }) {
	return (
		<div style={{ background: bg, color: isDark(bg) ? colors.white : colors.black, border: line, borderRadius: radii.card, boxShadow: bg === colors.white ? softShadow : undefined, padding: '16px 22px', fontSize: size, lineHeight: 1.42, minWidth: 0, ...style }}>
			{title && <div style={{ fontFamily: fonts.heading, fontSize: size + 5, fontWeight: 800, marginBottom: 6 }}>{title}</div>}
			{children}
		</div>
	);
}

export function Cols({ n = 3, gap = 18, children, style }: { n?: number; gap?: number; children: ReactNode; style?: CSSProperties }) {
	return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, gap, ...style }}>{children}</div>;
}

export function Flow({ items, size = 23 }: { items: { t: string; d?: string; bg?: string }[]; size?: number }) {
	return (
		<div style={{ display: 'flex', alignItems: 'stretch', gap: 10 }}>
			{items.map((item, i) => (
				<div key={item.t} style={{ display: 'contents' }}>
					{i > 0 && <div style={{ alignSelf: 'center', fontSize: 30, fontWeight: 900 }}>→</div>}
					<Box bg={item.bg ?? colors.white} style={{ flex: 1 }} size={size - 3} title={item.t}>{item.d}</Box>
				</div>
			))}
		</div>
	);
}

export function Tbl({ head, rows, widths, size = 20 }: { head: string[]; rows: ReactNode[][]; widths?: string; size?: number }) {
	const columns = widths ?? `repeat(${head.length}, minmax(0, 1fr))`;
	const cell: CSSProperties = { padding: '9px 14px', fontSize: size, lineHeight: 1.32, borderTop: '1px solid rgba(16,22,47,.22)', minWidth: 0 };
	return (
		<div style={{ border: line, borderRadius: radii.card, overflow: 'hidden', boxShadow: softShadow, background: colors.white }}>
			<div style={{ display: 'grid', gridTemplateColumns: columns, background: colors.dark, color: colors.white }}>
				{head.map(h => <div key={h} style={{ padding: '9px 14px', fontSize: size, fontWeight: 700 }}>{h}</div>)}
			</div>
			{rows.map((row, i) => (
				<div key={i} style={{ display: 'grid', gridTemplateColumns: columns, background: i % 2 ? '#fff8f2' : colors.white }}>
					{row.map((c, j) => <div key={j} style={{ ...cell, fontWeight: j === 0 ? 700 : 400 }}>{c}</div>)}
				</div>
			))}
		</div>
	);
}

export function Mono({ children }: { children: ReactNode }) {
	return <code style={{ fontFamily: fonts.mono, fontSize: '0.9em', background: colors.warmBg, borderRadius: 6, padding: '0 5px' }}>{children}</code>;
}

export function Quiz({ part, q, options, answer, why }: { part: string; q: ReactNode; options?: string[]; answer: ReactNode; why?: ReactNode }) {
	const [open, setOpen] = useState(false);
	return (
		<Page part={`${part} · 聊天框回答`} title={q}>
			{options && (
				<Cols n={options.length > 3 ? 2 : options.length}>
					{options.map(o => <Box key={o} size={27}>{o}</Box>)}
				</Cols>
			)}
			{open ? (
				<motion.div {...rise()}>
					<Say bg={colors.green}>{answer}{why && <div style={{ fontWeight: 500, fontSize: 24, marginTop: 6 }}>{why}</div>}</Say>
				</motion.div>
			) : (
				<div>
					<button
						onClick={e => { setOpen(true); e.currentTarget.blur(); }}
						style={{ padding: '12px 30px', background: colors.red, color: colors.white, border: line, borderRadius: radii.pill, boxShadow: `3px 3px 0 ${colors.dark}`, fontFamily: fonts.body, fontSize: 24, fontWeight: 700, cursor: 'pointer' }}
					>看答案</button>
				</div>
			)}
		</Page>
	);
}

export function Live({ part, n, title, cmd, watch, code, file, at }: { part: string; n: number; title: string; cmd: string[]; watch: string[]; code?: string; file?: string; at?: string[] }) {
	return (
		<Page part={`${part} · LIVE`} at={at} title={<><span style={{ background: colors.red, color: colors.white, borderRadius: radii.label, padding: '0 14px' }}>{`Demo ${n}`}</span> {title}</>} bg={colors.white}>
			<div style={{ display: 'grid', gridTemplateColumns: code ? '1.3fr 1fr' : '1fr', gap: 22, alignItems: 'stretch' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
					<Code file="切到终端" code={cmd.join('\n')} size={code ? 18 : 21} />
					{code && <Code file={file} code={code} size={15} />}
				</div>
				<Box title="看什么" size={27} bg={colors.warmBg}>
					{watch.map(w => <div key={w} style={{ marginTop: 10 }}>→ {w}</div>)}
				</Box>
			</div>
		</Page>
	);
}
