import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from './ui';

// ============================================================
// L10 deck 的共享构件
// SoT：VIBE_CODING_MASTER_L10_BLUEPRINT.md v1.0 §11.1「Deck 性质」
//
//   · 每页只承担一个教学任务
//   · 🔴 P00 到 P07 不许出现任何四格图形、2×2 布局、或「象限」二字
//        —— 这条覆盖封面标题本身（P00 = 「你以为它知道」）
//        —— 四格配色（QUAD）只能从 P08 开始用
//   · 四问全文 / 指令骨架 / 检查清单放 HANDOUT，deck 只显示当前那一问
//   · 动作页只显示「现在做什么 / 完成判据 / 限时多久」
//   · 🔴 **deck 上不许出现绝对分钟数**（「硬停 52 min」「46–52 min」这种）。
//        绝对刻度是从上课那一刻起算的，属于讲师的东西：它把讲师架上被公开
//        计时的位置（屏幕写 52、实际 58，全场都知道你落后），而且上课晚开始
//        5 分钟就全 deck 失效。P05 尤其不能有 —— 那页整个设计是 90 秒沉默，
//        屏幕上挂个钟只会让人盯钟不动脑。
//        时间表只存在于 RUNSHEET（讲师的文档）。动作页只给**时长**。
//   · 禁止按时间自动出现答案；需要分步时用讲师控制的拆页
//   · 1600×900 下：主正文 ≥ 26px，示例与代码 ≥ 22px，脚注 ≥ 16px
//   · 退化循环图的纵向落差本身就是表达，不要改写成横向图
//   · 本节没有标准答案：每位学员的任务不同，deck 上不许出现
//     任何看起来像「正确答案应该是……」的东西（§19.2）
// ============================================================

/** 字号下限（§11.1）。所有页面只能从这里取值，不允许写更小的数字。 */
export const FS = {
	body: 26,
	bodyLg: 30,
	code: 22,
	note: 16,
} as const;

/**
 * 四格配色 —— 全 deck 统一，学员靠颜色认格（§11.1）。
 * 🔴 只能从 P08 开始用。P00 到 P07 一律走 ASK_ACCENT 的中性色。
 *
 * hidden 用紫色是刻意的：L9 的知识债也是紫色，而「隐藏区 = 知识债」
 * 正是本节承接 L9 的那句话（§1.1）。学员换课不换色。
 */
export const QUAD = {
	open: {
		key: 'open', label: '开放区', en: 'OPEN',
		color: colors.green, fg: colors.black,
		you: '你知道', it: '它知道',
		action: '直接交，别废话',
	},
	hidden: {
		key: 'hidden', label: '隐藏区', en: 'HIDDEN',
		color: colors.purple, fg: colors.white,
		you: '你知道', it: '它不知道',
		action: '你不说它就编',
	},
	blind: {
		key: 'blind', label: '盲区', en: 'BLIND',
		color: colors.blue, fg: colors.white,
		you: '你不知道', it: '它知道',
		action: '先让它说，你别先下结论',
	},
	unknown: {
		key: 'unknown', label: '未知区', en: 'UNKNOWN',
		color: colors.orange, fg: colors.white,
		you: '你不知道', it: '它不知道',
		action: '设计实验，不是设计 prompt',
	},
} as const;

export type QuadKey = keyof typeof QUAD;

/**
 * 四条搬运动作 —— 协议的实体，比格子重要（§0.2）。
 * 第四条是唯一一条流出开放区的，也是本课比 Johari 原型多出来的那条（§9.3）。
 */
export const MOVES = [
	{ from: 'hidden', to: 'open', verb: '落盘', src: 'L1–L3 全部 SoT' },
	{ from: 'blind', to: 'open', verb: '先让它说', src: 'L6 诊断 · L9 Discovery' },
	{ from: 'unknown', to: 'blind', verb: '设计实验', src: 'L7 只读调查' },
	{ from: 'open', to: 'hidden', verb: '退化', src: 'L9 知识债，方向反过来' },
] as const;

/** 中性色 —— 第一幕（P00–P07）唯一允许的强调色，绝不泄露四格 */
export const ASK_ACCENT = colors.dark;

/** 阶段标记 —— 对应蓝图 §11.2 逐页表的「阶段」列 */
export type Phase = 'talk' | 'do' | 'demo' | 'write';

const PHASE_CFG: Record<Phase, { label: string; bg: string; fg: string }> = {
	talk: { label: '讲', bg: colors.blue, fg: colors.white },
	do: { label: '做', bg: colors.green, fg: colors.black },
	demo: { label: '演', bg: colors.purple, fg: colors.white },
	write: { label: '写', bg: colors.orange, fg: colors.white },
};

/** 页眉：阶段徽章 + 时间窗 + 可选右上角标记 + 标题 */
export function PageHead({
	phase, time, title, sub, mark, markBg, style,
}: {
	phase: Phase;
	/** 已废弃：deck 上不许出现绝对分钟数（见文件头）。保留只为兼容，不要再传。 */
	time?: string;
	title: ReactNode;
	sub?: ReactNode;
	/** 右上角标记，例如「问题 3 / 4」「搬运 2 / 4」。自由文本，不硬编码分母。 */
	mark?: string;
	markBg?: string;
	style?: CSSProperties;
}) {
	const cfg = PHASE_CFG[phase];
	return (
		<div style={{ flexShrink: 0, ...style }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
				<span style={{
					background: cfg.bg, color: cfg.fg, padding: '4px 16px',
					fontSize: 18, fontWeight: 800, border: `2px solid ${colors.black}`,
				}}>{cfg.label}</span>
				{time && (
					<span style={{ fontFamily: fonts.mono, fontSize: FS.note, color: '#888', letterSpacing: 1 }}>
						{time}
					</span>
				)}
				{mark && (
					<span style={{
						marginLeft: 'auto', fontFamily: fonts.mono, fontSize: FS.note,
						fontWeight: 700, letterSpacing: 2, color: colors.white,
						background: markBg ?? colors.dark, padding: '4px 14px',
						border: `2px solid ${colors.black}`,
					}}>{mark}</span>
				)}
			</div>
			<h2 style={{
				fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
				lineHeight: 1.18, color: colors.black, letterSpacing: -0.5,
			}}>{title}</h2>
			{sub && (
				<p style={{ fontSize: FS.body, color: '#555', marginTop: 10, lineHeight: 1.5 }}>{sub}</p>
			)}
		</div>
	);
}

/** 页面容器：撑满画布、上下留白一致 */
export function Page({
	bg = colors.warmBg, children, style,
}: { bg?: string; children: ReactNode; style?: CSSProperties }) {
	return (
		<div style={{
			width: '100%', height: '100%', background: bg,
			padding: '52px 68px', display: 'flex', flexDirection: 'column', gap: 22,
			overflow: 'hidden', ...style,
		}}>
			{children}
		</div>
	);
}

/** 一句话结论条 —— 讲授页的收口 */
export function Verdict({
	children, bg = colors.dark, fg = colors.white, label, size = 30, style,
}: { children: ReactNode; bg?: string; fg?: string; label?: string; size?: number; style?: CSSProperties }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.35 }}
			style={{ border, boxShadow: shadow, background: bg, color: fg, padding: '20px 26px', flexShrink: 0, ...style }}
		>
			{label && (
				<div style={{
					fontFamily: fonts.mono, fontSize: FS.note, letterSpacing: 2,
					color: colors.yellow, marginBottom: 8,
				}}>{label}</div>
			)}
			<div style={{ fontSize: size, fontWeight: 800, lineHeight: 1.45 }}>{children}</div>
		</motion.div>
	);
}

/** 代码 / prompt 块（深色）—— 字号下限 22px */
export function Code({
	children, label, size = FS.code, style,
}: { children: string; label?: string; size?: number; style?: CSSProperties }) {
	return (
		<div style={{ border, boxShadow: shadow, background: colors.dark, minHeight: 0, display: 'flex', flexDirection: 'column', ...style }}>
			{label && (
				<div style={{
					background: 'rgba(255,255,255,0.08)', color: colors.yellow,
					padding: '7px 16px', fontFamily: fonts.mono, fontSize: FS.note,
					letterSpacing: 1.4, fontWeight: 700, borderBottom: '2px solid rgba(255,255,255,0.15)',
					flexShrink: 0,
				}}>{label}</div>
			)}
			<pre style={{
				margin: 0, padding: '16px 20px', color: '#e8e8f0',
				fontFamily: fonts.mono, fontSize: size, lineHeight: 1.62,
				whiteSpace: 'pre-wrap', overflow: 'hidden',
			}}>{children}</pre>
		</div>
	);
}

/** ASCII 流程图（浅色）—— 按原样保留形状（§11.1） */
export function AsciiFlow({
	children, label, size = FS.code, lh = 1.55,
	accent = colors.dark, bg = colors.white, fg = colors.dark,
	align = 'left', style,
}: {
	children: string; label?: string; size?: number; lh?: number;
	accent?: string; bg?: string; fg?: string;
	align?: 'left' | 'center'; style?: CSSProperties;
}) {
	return (
		<div style={{ border, boxShadow: shadow, background: bg, display: 'flex', flexDirection: 'column', minHeight: 0, ...style }}>
			{label && (
				<div style={{
					background: accent, color: colors.white, padding: '8px 16px',
					fontFamily: fonts.mono, fontSize: FS.note, letterSpacing: 1.4,
					fontWeight: 700, borderBottom: border, flexShrink: 0,
				}}>{label}</div>
			)}
			<pre style={{
				margin: 0, padding: '16px 22px', color: fg,
				fontFamily: fonts.mono, fontSize: size, lineHeight: lh,
				whiteSpace: 'pre', overflow: 'hidden',
				textAlign: align, flex: 1,
				display: 'flex', flexDirection: 'column', justifyContent: 'center',
			}}>{children}</pre>
		</div>
	);
}

/** 脚注 —— 字号下限 16px */
export function Note({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return <div style={{ fontSize: FS.note, color: '#777', lineHeight: 1.55, flexShrink: 0, ...style }}>{children}</div>;
}

/** 编号项 */
export function NumRow({
	n, title, desc, color = colors.dark, style,
}: { n: ReactNode; title: ReactNode; desc?: ReactNode; color?: string; style?: CSSProperties }) {
	return (
		<div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', ...style }}>
			<span style={{
				flexShrink: 0, width: 38, height: 38, background: color, color: colors.white,
				fontFamily: fonts.mono, fontSize: 22, fontWeight: 700,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				border: `2px solid ${colors.black}`,
			}}>{n}</span>
			<div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
				<div style={{ fontSize: FS.body, fontWeight: 800, color: colors.dark, lineHeight: 1.4 }}>{title}</div>
				{desc && <div style={{ fontSize: 23, color: '#666', lineHeight: 1.5, marginTop: 4 }}>{desc}</div>}
			</div>
		</div>
	);
}

/** 带标题栏的白卡 */
export function Panel({
	title, accent = colors.dark, fg = colors.white, children,
	bg = colors.white, tight, style, bodyStyle,
}: {
	title?: ReactNode; accent?: string; fg?: string; children: ReactNode;
	bg?: string; tight?: boolean; style?: CSSProperties; bodyStyle?: CSSProperties;
}) {
	return (
		<div style={{ border, boxShadow: shadow, background: bg, display: 'flex', flexDirection: 'column', minHeight: 0, ...style }}>
			{title && (
				<div style={{
					background: accent, color: fg, padding: '9px 18px', borderBottom: border,
					fontSize: 21, fontWeight: 900, letterSpacing: 0.5, flexShrink: 0,
				}}>{title}</div>
			)}
			<div style={{
				padding: tight ? '12px 16px' : '16px 20px', flex: 1, minHeight: 0,
				display: 'flex', flexDirection: 'column', ...bodyStyle,
			}}>{children}</div>
		</div>
	);
}

/** 「为什么这么组词」表 —— prompt 原理层（系列标准要求） */
export function WhyTable({
	rows, size = 21, lineW = 300, style,
}: {
	rows: { line: string; why: ReactNode; star?: boolean }[];
	size?: number; lineW?: number; style?: CSSProperties;
}) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
			{rows.map((r, i) => (
				<motion.div
					key={r.line}
					initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
					style={{
						display: 'flex', gap: 14, alignItems: 'flex-start',
						background: r.star ? '#fff8e5' : 'transparent',
						border: r.star ? `3px solid ${colors.orange}` : '3px solid transparent',
						padding: r.star ? '8px 12px' : '4px 12px',
					}}
				>
					<code style={{
						flexShrink: 0, width: lineW, fontFamily: fonts.mono, fontSize: size - 1,
						color: r.star ? colors.black : colors.dark, fontWeight: 700, lineHeight: 1.4,
					}}>{r.star ? '⭐ ' : ''}{r.line}</code>
					<span style={{ fontSize: size, color: '#555', lineHeight: 1.45 }}>{r.why}</span>
				</motion.div>
			))}
		</div>
	);
}

/** 简单对照表 */
export function MiniTable({
	head, rows, widths, size = 21, style,
}: {
	head: ReactNode[]; rows: ReactNode[][]; widths?: string[];
	size?: number; style?: CSSProperties;
}) {
	const cols = widths ?? head.map(() => '1fr');
	return (
		<div style={{ border, background: colors.white, ...style }}>
			<div style={{
				display: 'grid', gridTemplateColumns: cols.join(' '),
				background: colors.dark, color: colors.white, borderBottom: border,
			}}>
				{head.map((h, i) => (
					<div key={i} style={{ padding: '9px 14px', fontSize: size - 3, fontWeight: 800, letterSpacing: 0.5 }}>{h}</div>
				))}
			</div>
			{rows.map((r, ri) => (
				<div key={ri} style={{
					display: 'grid', gridTemplateColumns: cols.join(' '),
					borderBottom: ri === rows.length - 1 ? 'none' : '2px solid #e4e4ec',
					background: ri % 2 ? '#fafafc' : colors.white,
				}}>
					{r.map((c, ci) => (
						<div key={ci} style={{ padding: '10px 14px', fontSize: size, color: '#444', lineHeight: 1.4 }}>{c}</div>
					))}
				</div>
			))}
		</div>
	);
}

// ============================================================
// 第一幕专用（P02–P06）：AskBoard
// 🔴 这四页必须看起来完全平行：同一套版式、同一个中性色、顺序编号。
//    不许分组、不许加分类标题、不许排成 2×2（§5.1）。
//    学员在这里填的就是四格的内容，但他们还不知道它是四格。
// ============================================================

export function AskBoard({
	n, question, hint, stopAt, silent,
}: {
	/** 顺序编号，1 到 4。只做顺序，不做分类。 */
	n: number;
	question: string;
	hint?: ReactNode;
	/** **时长**，不是绝对刻度。写「3 分钟」，不许写「硬停 8 min」。 */
	stopAt: string;
	/** 第三问专用：90 秒沉默的执法提示 */
	silent?: ReactNode;
}) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1, minHeight: 0 }}>
			<div style={{
				border, boxShadow: shadow, background: colors.white,
				padding: '30px 34px', display: 'flex', gap: 24, alignItems: 'flex-start',
			}}>
				<span style={{
					flexShrink: 0, width: 62, height: 62, background: ASK_ACCENT, color: colors.white,
					fontFamily: fonts.mono, fontSize: 32, fontWeight: 700,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					border: `3px solid ${colors.black}`,
				}}>{n}</span>
				<div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.35, color: colors.black }}>
					{question}
				</div>
			</div>

			{hint && (
				<div style={{
					border: `3px solid ${colors.black}`, background: colors.warmBg,
					padding: '16px 22px', fontSize: 23, lineHeight: 1.5, color: '#444',
				}}>{hint}</div>
			)}

			{silent && (
				<div style={{
					border: `3px solid ${colors.red}`, background: '#fff0f0',
					padding: '16px 22px', fontSize: 23, lineHeight: 1.5, color: colors.dark, fontWeight: 700,
				}}>{silent}</div>
			)}

			<div style={{ flex: 1 }} />

			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0,
			}}>
				<span style={{ fontSize: 22 }}>✍️</span>
				<span style={{ fontSize: 22, fontWeight: 700 }}>自己写下来，不用交，不用念</span>
				<span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, color: '#aaa' }}>限时</span>
				<span style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: colors.yellow }}>{stopAt}</span>
			</div>
		</div>
	);
}

// ============================================================
// 第二幕之后（P08 起）：四格图与色标
// 🔴 以下两个组件在 P08 之前一次都不许出现。
// ============================================================

/** 四格色标 chip */
export function QuadChip({ q, style }: { q: QuadKey; style?: CSSProperties }) {
	const d = QUAD[q];
	return (
		<span style={{
			display: 'inline-block', background: d.color, color: d.fg,
			padding: '3px 12px', fontSize: 18, fontWeight: 800,
			border: `2px solid ${colors.black}`, ...style,
		}}>{d.label}</span>
	);
}

/**
 * 2×2 四格图。P08 第一次出现，之后当索引图复用。
 * cell 传入时替换该格的正文（P08 用来放学员刚才填的那一问）。
 */
export function QuadGrid({
	cells, focus, size = 22, style,
}: {
	/** 每格要显示的正文；不传就显示 QUAD 里的默认动作 */
	cells?: Partial<Record<QuadKey, ReactNode>>;
	/** 高亮某一格，其余降到 35% 不透明 */
	focus?: QuadKey;
	size?: number;
	style?: CSSProperties;
}) {
	const order: QuadKey[] = ['open', 'hidden', 'blind', 'unknown'];
	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, ...style }}>
			{/* 列头：它知道 / 它不知道 */}
			<div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', flexShrink: 0 }}>
				<div />
				{['它知道', '它不知道'].map((h) => (
					<div key={h} style={{
						textAlign: 'center', padding: '6px 0', fontSize: 20, fontWeight: 800,
						fontFamily: fonts.mono, color: '#666', letterSpacing: 1,
					}}>{h}</div>
				))}
			</div>

			<div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', flex: 1, minHeight: 0 }}>
				{/* 行头：你知道 */}
				<RowLabel text="你知道" />
				{[QUAD.open, QUAD.hidden].map((d, i) => (
					<Cell key={d.key} d={d} body={cells?.[d.key as QuadKey]} focus={focus} size={size} delay={i * 0.07} />
				))}
				{/* 行头：你不知道 */}
				<RowLabel text="你不知道" />
				{[QUAD.blind, QUAD.unknown].map((d, i) => (
					<Cell key={d.key} d={d} body={cells?.[d.key as QuadKey]} focus={focus} size={size} delay={0.14 + i * 0.07} />
				))}
			</div>
			<div style={{ display: 'none' }}>{order.join()}</div>
		</div>
	);
}

function RowLabel({ text }: { text: string }) {
	return (
		<div style={{
			display: 'flex', alignItems: 'center', justifyContent: 'center',
			fontSize: 20, fontWeight: 800, fontFamily: fonts.mono, color: '#666',
			letterSpacing: 1, writingMode: 'vertical-rl', textOrientation: 'upright',
		}}>{text}</div>
	);
}

function Cell({
	d, body, focus, size, delay,
}: {
	d: typeof QUAD[QuadKey];
	body?: ReactNode;
	focus?: QuadKey;
	size: number;
	delay: number;
}) {
	const dim = focus != null && focus !== d.key;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.94 }}
			animate={{ opacity: dim ? 0.32 : 1, scale: 1 }}
			transition={{ duration: 0.35, delay }}
			style={{
				border, background: colors.white, margin: 5,
				display: 'flex', flexDirection: 'column', minHeight: 0,
				boxShadow: dim ? 'none' : '5px 5px 0 #000',
			}}
		>
			<div style={{
				background: d.color, color: d.fg, padding: '7px 14px', borderBottom: border,
				display: 'flex', alignItems: 'baseline', gap: 10, flexShrink: 0,
			}}>
				<span style={{ fontSize: 24, fontWeight: 900 }}>{d.label}</span>
				<span style={{ fontFamily: fonts.mono, fontSize: 14, letterSpacing: 1.5, opacity: 0.8 }}>{d.en}</span>
			</div>
			<div style={{
				padding: '13px 16px', fontSize: size, lineHeight: 1.45, color: colors.dark,
				flex: 1, minHeight: 0, overflow: 'hidden',
			}}>
				{body ?? <span style={{ fontWeight: 700 }}>{d.action}</span>}
			</div>
		</motion.div>
	);
}

/** 一条搬运动作的横向箭头行 —— P11 / P20 用 */
export function MoveRow({
	from, to, verb, src, degrade, delay = 0,
}: {
	from: QuadKey; to: string; verb: string; src?: string;
	/** 退化那条：反色 + 标出「唯一流出开放区」 */
	degrade?: boolean;
	delay?: number;
}) {
	const f = QUAD[from];
	return (
		<motion.div
			initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.35, delay }}
			style={{
				display: 'flex', alignItems: 'center', gap: 12,
				border: degrade ? `3px solid ${colors.red}` : border,
				background: degrade ? '#fff0f0' : colors.white,
				boxShadow: degrade ? `5px 5px 0 ${colors.red}` : '4px 4px 0 #000',
				padding: '11px 16px',
			}}
		>
			<span style={{
				flexShrink: 0, background: f.color, color: f.fg, padding: '4px 12px',
				fontSize: 21, fontWeight: 900, border: `2px solid ${colors.black}`,
			}}>{f.label}</span>
			<span style={{ fontFamily: fonts.mono, fontSize: 22, color: degrade ? colors.red : '#999', fontWeight: 700 }}>──▶</span>
			<span style={{
				flexShrink: 0, fontSize: 22, fontWeight: 900, color: colors.dark,
				background: colors.yellow, padding: '3px 12px', border: `2px solid ${colors.black}`,
			}}>{verb}</span>
			<span style={{ fontFamily: fonts.mono, fontSize: 22, color: degrade ? colors.red : '#999', fontWeight: 700 }}>──▶</span>
			<span style={{ fontSize: 21, fontWeight: 800, color: colors.dark }}>{to}</span>
			{src && <span style={{ marginLeft: 'auto', fontSize: FS.note, color: '#999', fontFamily: fonts.mono }}>{src}</span>}
		</motion.div>
	);
}

// ============================================================
// 动作页三件套（§11.1）：现在做什么 / 完成判据 / 限时多久
// 🔴 stopAt 传**时长**（「10 分钟」），不许传绝对刻度（「硬停 84 min」）。
// 本节每位学员的任务都不同，所以「完成判据」写的是产物形态，不是内容。
// deck 上只给骨架，不给范文 —— 给了范文四格就变成填空题（§9.1）。
// ============================================================

export function PracticeBoard({
	doWhat, criteria, stopAt, warn,
}: {
	doWhat: ReactNode; criteria: ReactNode[];
	/** **时长**，不是绝对刻度。写「10 分钟」，不许写「硬停 84 min」。 */
	stopAt: string;
	warn?: ReactNode;
}) {
	return (
		<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
			<div style={{ flex: 1.15, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
				<div style={{
					background: colors.green, color: colors.black, padding: '10px 20px',
					borderBottom: border, fontSize: 22, fontWeight: 900, flexShrink: 0,
				}}>🔨 现在做什么</div>
				<div style={{ padding: '18px 22px', fontSize: 23, lineHeight: 1.55, color: colors.dark, flex: 1, minHeight: 0, overflow: 'hidden' }}>
					{doWhat}
				</div>
			</div>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 20px',
						borderBottom: border, fontSize: 22, fontWeight: 900, flexShrink: 0,
					}}>✅ 完成判据（产物形态）</div>
					<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 11, flex: 1, minHeight: 0 }}>
						{criteria.map((c, i) => (
							<div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
								<span style={{
									flexShrink: 0, width: 22, height: 22, border: `3px solid ${colors.black}`,
									background: colors.white, marginTop: 3,
								}} />
								<span style={{ fontSize: 22, lineHeight: 1.4, color: colors.dark, fontWeight: 600 }}>{c}</span>
							</div>
						))}
					</div>
				</div>

				<div style={{
					border, boxShadow: shadow, background: colors.red, color: colors.white,
					padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0,
				}}>
					<span style={{ fontSize: 22 }}>⏱</span>
					<span style={{ fontSize: 21, fontWeight: 700 }}>限时</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 700, marginLeft: 'auto' }}>{stopAt}</span>
				</div>

				{warn && (
					<div style={{
						border: `3px solid ${colors.orange}`, background: '#fff8e5', flexShrink: 0,
						padding: '11px 16px', fontSize: 21, lineHeight: 1.45, color: '#444',
					}}>{warn}</div>
				)}
			</div>
		</div>
	);
}
