import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from './ui';

// ============================================================
// L11 deck 的共享构件
// SoT：VIBE_CODING_MASTER_L11_BLUEPRINT.md v1.0 §11.1「Deck 性质」
//
//   · 每页只承担一个教学任务
//   · 🔴 P00 到 P09 不许出现：任何闸门图 / 四步流程图 / 有编号的判据列表，
//        也不许出现「定时」「Schedule」「Cron」「自动化」任何一个词。
//        这条覆盖封面标题本身（P00 =「你不在的时候」）和 index.html 的 <title>。
//   · 🔴 **deck 上不许出现绝对分钟数**（沿用 L10 的教训）。绝对刻度是从上课
//        那一刻起算的，属于讲师：它把讲师架上被公开计时的位置，而且上课晚
//        开始 5 分钟就全 deck 失效。动作页只给**时长**。时间表只存在于 RUNSHEET。
//   · 🔴 **deck 里不留任何待填空白页。** 讲师的个人素材（自己那次静默失败
//        隔了几天才发现、演示用哪个项目）只写进 RUNSHEET，不在 slide 上留
//        「___」等着课前补。每一页都是发出去就能讲的完整版。
//   · 骨架给了，**范文不给** —— 给了范文任务书就变成填空题（§9.1）
//   · 1600×900 下：主正文 ≥ 26px，示例与代码 ≥ 22px，脚注 ≥ 16px
//   · 本节没有标准答案：每位学员的任务不同，deck 上不许出现任何看起来像
//     「正确答案应该是……」的东西（§19.2）
//   · 学员的任务内容是个人材料，不许要求投屏或上交原文（§19.2）
// ============================================================

/** 字号下限（§11.1）。所有页面只能从这里取值，不允许写更小的数字。 */
export const FS = {
	body: 26,
	bodyLg: 30,
	code: 22,
	note: 16,
} as const;

/** 中性色 —— 第一幕（P00–P09）唯一允许的强调色，绝不泄露后面的框架 */
export const ASK_ACCENT = colors.dark;

/** 判断闸的主色。🔴 只能从 P10 开始用。 */
export const GATE_COLOR = colors.teal;

/**
 * 四道判断闸（§1.2）。
 * 🔴 不是四个格子，是一条链 —— 前一道过不了，后面不用问。
 * 这个「有顺序」正是 P10 揭示的那句话，所以 P10 之前不许出现本数组。
 */
export type Gate = {
	n: number; q: string; sub: string;
	fail: string; then: string; seg: string;
	/** 全课支点那一道（第二问），视觉上要更重 */
	pivot?: boolean;
};

export const GATES: readonly Gate[] = [
	{
		n: 1,
		q: '它做完之后，世界上多了什么？',
		sub: '用一个名词回答',
		fail: '说不出',
		then: '这是愿望，不是任务。不能交。',
		seg: '目标',
	},
	{
		n: 2,
		q: '它做错了，你多久会知道？',
		sub: '判据必须来自它之外',
		fail: '不知道',
		then: '先把回执加上，再谈自动。',
		seg: '判据',
		pivot: true,
	},
	{
		n: 3,
		q: '它做错了，你收得回来吗？',
		sub: '开 PR 不许合 / 存草稿不许发',
		fail: '收不回',
		then: '降级：只让它提议，不让它生效。',
		seg: '边界',
	},
	{
		n: 4,
		q: '中途有没有只有你能答的问题？',
		sub: 'L10 的隐藏区',
		fail: '有',
		then: '现在答完，写进任务书。答不出 = 今天还不能交。',
		seg: '预答',
	},
];

/** 卡住的三种形态（§1.3-A）：它还活着，但不往前走 */
export const STUCK = [
	{ n: 1, where: '卡在权限上', what: '它想做的事需要人批准', fix: '提前批', how: '选通道 + 白名单' },
	{ n: 2, where: '卡在问题上', what: '它想问你一个业务决定', fix: '提前答', how: '任务书第 4 段' },
	{ n: 3, where: '卡在等待上', what: '它在等一个不会来的东西', fix: '给边界', how: '超时 / 到点就退出' },
] as const;

/** 断掉的五种断法（§1.3-B）：它没活到最后 */
export type Break = {
	name: string; scene: string; note: string;
	/** 凭证过期：唯一会静默三个月的一种 */
	star?: boolean;
	/** 额度用完：性质和前四种不同 —— 前四种是跑了没成，这种是压根没跑 */
	alone?: boolean;
};

export const BREAKS: readonly Break[] = [
	{ name: '网络断了', scene: '要抓的东西抓不到，或被网络策略挡在外面', note: '最常见。而且它经常不报错，它换个做法继续' },
	{ name: '凭证过期了', scene: '登录失效、令牌到期', note: '无人值守的头号杀手：从某天起再也没跑成过，而它不会尖叫', star: true },
	{ name: '环境没准备好', scene: '依赖装不上、工具没连上、目录不在', note: '每次冷启动都可能碰上' },
	{ name: '被限流 / 超时了', scene: '退避重试耗尽，或跑太久被掐断', note: '长任务的默认结局' },
	{ name: '额度用完了', scene: '到了账号运行上限，这一次直接没起来', note: '压根没跑 —— 和「跑了但什么都没交」在你眼里长得一样', alone: true },
];

/** 三条通道（§8.1）。⚠️ 这是本课的教学分类，不是官方文档的分法（§19.1）。 */
export const CHANNELS = {
	cloud: { key: 'cloud', label: '云端', color: colors.blue, fg: colors.white },
	local: { key: 'local', label: '本地', color: colors.green, fg: colors.black },
	cli: { key: 'cli', label: '命令行', color: colors.purple, fg: colors.white },
} as const;

/**
 * 结果契约的三个状态（§8.5）。
 * 🔴 必须写死成这三个词，deck 上不许写成「等等」「诸如此类」（§20）。
 * needsHuman 是本节的关键一档：二选一会逼它把「我没做」塞进成功里。
 */
export type Status = {
	key: string; color: string; fg: string; mean: string;
	/** needs-human：本节的关键一档，视觉上要突出 */
	star?: boolean;
};

export const STATUS: readonly Status[] = [
	{ key: 'done', color: colors.green, fg: colors.black, mean: '做完了，判据过了' },
	{ key: 'skipped', color: colors.orange, fg: colors.white, mean: '没做，原因写清楚了' },
	{ key: 'needs-human', color: colors.blue, fg: colors.white, mean: '卡在一个只有你能拍板的地方', star: true },
];

/** 阶段标记 —— 对应蓝图 §11.2 逐页表的「形式」列 */
export type Phase = 'talk' | 'write' | 'demo' | 'ask';

const PHASE_CFG: Record<Phase, { label: string; bg: string; fg: string }> = {
	talk: { label: '讲', bg: colors.blue, fg: colors.white },
	write: { label: '写', bg: colors.orange, fg: colors.white },
	demo: { label: '演', bg: colors.purple, fg: colors.white },
	ask: { label: '问', bg: colors.green, fg: colors.black },
};

/** 页眉：阶段徽章 + 可选右上角标记 + 标题。🔴 没有时间参数，见文件头。 */
export function PageHead({
	phase, title, sub, mark, markBg, style,
}: {
	phase: Phase;
	title: ReactNode;
	sub?: ReactNode;
	/** 右上角标记，例如「问题 3 / 4」「闸 2 / 4」。自由文本。 */
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

/** ASCII 图（浅色）—— 按原样保留形状 */
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
	head, rows, widths, size = 21, starRow, style,
}: {
	head: ReactNode[]; rows: ReactNode[][]; widths?: string[];
	size?: number; starRow?: number; style?: CSSProperties;
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
					background: ri === starRow ? '#fff8e5' : ri % 2 ? '#fafafc' : colors.white,
					boxShadow: ri === starRow ? `inset 5px 0 0 ${colors.orange}` : 'none',
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
//    不许分组、不许加分类标题、不许画成链条或流程（§5.2）。
//    学员在这里回答的就是四道闸，但他们还不知道它有顺序。
// ============================================================

export function AskBoard({
	n, question, hint, stopAt, silent,
}: {
	/** 顺序编号，1 到 4。只做顺序，不暗示因果。 */
	n: number;
	question: string;
	hint?: ReactNode;
	/** **时长**，不是绝对刻度。写「3 分钟」，不许写「硬停 16 min」。 */
	stopAt: string;
	/** 第二问专用：沉默的执法提示 */
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
// 第三幕之后（P10 起）：判断闸
// 🔴 GateChain 在 P10 之前一次都不许出现。
// ============================================================

/** 一道闸 */
export function GateRow({
	g, dim, showFail = true, delay = 0,
}: {
	g: Gate;
	dim?: boolean;
	showFail?: boolean;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -16 }}
			animate={{ opacity: dim ? 0.3 : 1, x: 0 }}
			transition={{ duration: 0.35, delay }}
			style={{
				border: g.pivot ? `3px solid ${colors.red}` : border,
				background: g.pivot ? '#fff0f0' : colors.white,
				boxShadow: dim ? 'none' : g.pivot ? `5px 5px 0 ${colors.red}` : '4px 4px 0 #000',
				padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 16,
			}}
		>
			<span style={{
				flexShrink: 0, width: 40, height: 40, background: g.pivot ? colors.red : GATE_COLOR,
				color: colors.white, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				border: `2px solid ${colors.black}`,
			}}>{g.n}</span>
			<div style={{ flex: 1, minWidth: 0 }}>
				<div style={{ fontSize: 25, fontWeight: 900, color: colors.black, lineHeight: 1.3 }}>{g.q}</div>
				<div style={{ fontSize: 18, color: '#777', marginTop: 2 }}>{g.sub}</div>
			</div>
			{showFail && (
				<>
					<span style={{
						flexShrink: 0, fontFamily: fonts.mono, fontSize: 19, fontWeight: 700,
						color: colors.white, background: colors.red, padding: '3px 10px',
						border: `2px solid ${colors.black}`,
					}}>{g.fail}</span>
					<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 20, color: '#999' }}>▶</span>
					<span style={{ flexShrink: 0, width: 330, fontSize: 20, fontWeight: 700, color: colors.dark, lineHeight: 1.35 }}>
						{g.then}
					</span>
				</>
			)}
		</motion.div>
	);
}

/** 四道闸的完整链条。🔴 P10 第一次出现。 */
export function GateChain({
	focus, showFail = true, style,
}: { focus?: number; showFail?: boolean; style?: CSSProperties }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 9, minHeight: 0, ...style }}>
			{GATES.map((g, i) => (
				<GateRow key={g.n} g={g} dim={focus != null && focus !== g.n} showFail={showFail} delay={i * 0.08} />
			))}
			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
				style={{
					border, boxShadow: shadow, background: GATE_COLOR, color: colors.white,
					padding: '12px 20px', fontSize: 23, fontWeight: 800, textAlign: 'center',
				}}
			>
				四道都过 ▶ 可以交。剩下的才是：走哪条通道、怎么让它不卡住。
			</motion.div>
		</div>
	);
}

/**
 * 看门狗三层架构（P20 用）。
 * 🔴 补的是 deck 里一个真窟窿：全 deck 有 8 处提到「那个脚本」
 *    （P19 外面那个脚本 / P20 你的脚本 / P22 盯着它的那个脚本 / P23 不留给脚本），
 *    但从来没说过它是什么、在哪、长什么样 —— 硬产物的 B 块等于写给一个
 *    学员没见过的读者。这一层图就是给那个读者一张脸。
 * 🔴 仍然不教脚本工程（§4 非目标）：只给「谁负责什么」，不给代码。
 *    可跑样板和八条写法在 HANDOUT §7。
 */
export type StackLayer = {
	who: string; sub: string; does: string; not: string;
	color: string; fg: string;
	/** 看门狗那一层：判成败的就是它，视觉上要突出 */
	star?: boolean;
};

export const STACK: readonly StackLayer[] = [
	{
		who: '调度器', sub: 'cron / 计划任务 / 托管定时',
		does: '到点了，起一个进程',
		not: '管不了「做没做成」',
		color: colors.dark, fg: colors.white,
	},
	{
		who: '看门狗', sub: '你的脚本',
		does: '删旧回执 · 带超时跑 · 读回执 · 分支',
		not: '⭐ 判成败的就是这一层',
		color: colors.teal, fg: colors.white, star: true,
	},
	{
		who: 'Agent', sub: '按任务书 A 块干活',
		does: '干完把回执写到约定路径',
		not: '它说「完成了」不算数',
		color: colors.blue, fg: colors.white,
	},
];

export function WatchdogStack({ style }: { style?: CSSProperties }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
			{STACK.map((L, i) => (
				<div key={L.who}>
					<motion.div
						initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: i * 0.1 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 14,
							border: L.star ? `3px solid ${colors.teal}` : border,
							background: L.star ? '#eafaf4' : colors.white,
							boxShadow: L.star ? `5px 5px 0 ${colors.teal}` : '4px 4px 0 #000',
							padding: '6px 14px',
						}}
					>
						<span style={{
							flexShrink: 0, width: 128, background: L.color, color: L.fg,
							padding: '4px 10px', border: `2px solid ${colors.black}`,
							fontSize: 19, fontWeight: 900, textAlign: 'center',
						}}>{L.who}</span>
						<span style={{ flexShrink: 0, width: 132, fontSize: 15, color: '#888', fontFamily: fonts.mono }}>
							{L.sub}
						</span>
						<span style={{ flex: 1, fontSize: 19, color: colors.dark, fontWeight: 600 }}>{L.does}</span>
						<span style={{
							flexShrink: 0, width: 236, fontSize: 18, textAlign: 'right',
							color: L.star ? colors.black : '#999', fontWeight: L.star ? 800 : 500,
						}}>{L.not}</span>
					</motion.div>
					{i < STACK.length - 1 && (
						<div style={{
							fontFamily: fonts.mono, fontSize: 14, color: '#bbb',
							paddingLeft: 62, lineHeight: 1,
						}}>▼</div>
					)}
				</div>
			))}
		</div>
	);
}

/** 结果契约的三状态框（P19 / P22 用）。🔴 三个词写死。 */
export function StatusBox({ compact, style }: { compact?: boolean; style?: CSSProperties }) {
	return (
		<div style={{ display: 'flex', gap: 12, ...style }}>
			{STATUS.map((s, i) => (
				<motion.div
					key={s.key}
					initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: i * 0.09 }}
					style={{
						flex: 1, border: s.star ? `3px solid ${colors.blue}` : border,
						boxShadow: s.star ? `5px 5px 0 ${colors.blue}` : '4px 4px 0 #000',
						background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0,
					}}
				>
					<div style={{
						background: s.color, color: s.fg, padding: '8px 12px', borderBottom: border,
						fontFamily: fonts.mono, fontSize: compact ? 20 : 23, fontWeight: 700,
						letterSpacing: 0.5, textAlign: 'center',
					}}>{s.key}</div>
					<div style={{
						padding: compact ? '10px 12px' : '13px 15px', fontSize: compact ? 19 : 21,
						lineHeight: 1.4, color: colors.dark, flex: 1, fontWeight: s.star ? 800 : 600,
					}}>{s.mean}</div>
				</motion.div>
			))}
		</div>
	);
}

/**
 * 回执的第二个读者（P20 用）。
 * 🔴 补的是 deck 的第二个窟窿：P19 只讲了给**脚本**看的三个状态，
 *    从没讲第二天早上**你自己**要拿到什么 —— 于是学员写出来的回执
 *    只够脚本分支，人读了还是不知道昨晚发生了什么。
 * ⭐ decisions 是全套最值钱的一项，理由就是本节立论：
 *    你把提问取消了，那个决定并没有消失 —— 它被交给它自己做了。
 *    所以那些决定必须留痕，否则你永远不知道它昨晚替你决定了什么。
 */
export type ReportRow = {
	ask: string; field: string; why: string; star?: boolean;
};

export const REPORT_ROWS: readonly ReportRow[] = [
	{ ask: '它做到哪了？',        field: 'progress · stopped_at', why: '只说「没做完」，你不知道从哪接手' },
	{ ask: '改了哪些文件？',      field: 'files_changed',         why: '不知道改了什么，你不敢合，只能全看一遍' },
	{ ask: '中间出过什么错？',    field: 'errors',                why: '有些错它自己恢复了 —— 但那说明有个地方不稳' },
	{ ask: '它替我做了什么决定？', field: 'decisions[].what',      why: '你取消的那些提问，答案都在这', star: true },
	{ ask: '为什么这么决定？',     field: 'decisions[].why',       why: '没有 why 的决定等于没记录', star: true },
	{ ask: '验过没有？',          field: 'tests · evidence',      why: '没验过的「完成」，等于它自己说了算' },
];

export function ReportTable({ style }: { style?: CSSProperties }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 5, minHeight: 0, ...style }}>
			{REPORT_ROWS.map((r, i) => (
				<motion.div
					key={r.ask}
					initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.28, delay: i * 0.07 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 12, flex: 1, minHeight: 0,
						border: r.star ? `3px solid ${colors.red}` : border,
						background: r.star ? '#fff0f0' : colors.white,
						boxShadow: r.star ? `4px 4px 0 ${colors.red}` : '3px 3px 0 #000',
						padding: '6px 14px',
					}}
				>
					<span style={{
						flexShrink: 0, width: 250, fontSize: 21, fontWeight: 900,
						color: colors.black,
					}}>{r.star ? '⭐ ' : ''}{r.ask}</span>
					<code style={{
						flexShrink: 0, width: 220, fontFamily: fonts.mono, fontSize: 17,
						color: r.star ? colors.red : '#777', fontWeight: 700,
					}}>{r.field}</code>
					<span style={{
						flex: 1, fontSize: 19, lineHeight: 1.3,
						color: r.star ? colors.black : '#666', fontWeight: r.star ? 700 : 500,
					}}>{r.why}</span>
				</motion.div>
			))}
		</div>
	);
}

// ============================================================
// 动作页三件套（§11.1）：现在做什么 / 完成判据 / 限时多久
// 🔴 stopAt 传**时长**（「6 分钟」），不许传绝对刻度。
// 本节每位学员的任务都不同，所以「完成判据」写的是产物形态，不是内容。
// deck 上只给骨架，不给范文 —— 给了范文任务书就变成填空题（§9.1）。
// ============================================================

export function PracticeBoard({
	doWhat, criteria, stopAt, warn,
}: {
	doWhat: ReactNode; criteria: ReactNode[];
	stopAt: string;
	warn?: ReactNode;
}) {
	return (
		<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
			<div style={{ flex: 1.25, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
				<div style={{
					background: colors.green, color: colors.black, padding: '10px 20px',
					borderBottom: border, fontSize: 22, fontWeight: 900, flexShrink: 0,
				}}>🔨 现在做什么</div>
				<div style={{ padding: '16px 20px', fontSize: 22, lineHeight: 1.5, color: colors.dark, flex: 1, minHeight: 0, overflow: 'hidden' }}>
					{doWhat}
				</div>
			</div>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 20px',
						borderBottom: border, fontSize: 22, fontWeight: 900, flexShrink: 0,
					}}>✅ 完成判据（产物形态）</div>
					<div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, minHeight: 0 }}>
						{criteria.map((c, i) => (
							<div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
								<span style={{
									flexShrink: 0, width: 20, height: 20, border: `3px solid ${colors.black}`,
									background: colors.white, marginTop: 3,
								}} />
								<span style={{ fontSize: 20, lineHeight: 1.4, color: colors.dark, fontWeight: 600 }}>{c}</span>
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
						padding: '11px 16px', fontSize: 20, lineHeight: 1.45, color: '#444',
					}}>{warn}</div>
				)}
			</div>
		</div>
	);
}

/**
 * 演示页（P07 / P08）。
 * 🔴 只有标题、一句引导语和「看什么」三行 —— 正文是老师的屏幕。
 *    不放结果截图（放了老师就会照着念，现场感全没）。
 *    也不留待填空白：用哪个项目写在 RUNSHEET，不在 slide 上留「___」。
 */
export function DemoBoard({
	lead, watch, mode, note,
}: {
	lead: ReactNode;
	/** 「请盯着看的三件事」—— 给学员的观察指令 */
	watch: ReactNode[];
	/** 形态标签：现场跑 / 展示昨夜会话 */
	mode: string;
	note?: ReactNode;
}) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
			<div style={{
				border, boxShadow: shadow, background: colors.dark, color: colors.white,
				padding: '26px 32px', display: 'flex', alignItems: 'center', gap: 22, flexShrink: 0,
			}}>
				<span style={{ fontSize: 44 }}>🎬</span>
				<div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.35, flex: 1 }}>{lead}</div>
				<span style={{
					flexShrink: 0, background: colors.yellow, color: colors.black,
					padding: '7px 16px', fontSize: 20, fontWeight: 900,
					border: `2px solid ${colors.black}`, whiteSpace: 'nowrap',
				}}>{mode}</span>
			</div>

			<div style={{
				border, boxShadow: shadow, background: colors.white,
				flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
			}}>
				<div style={{
					background: colors.purple, color: colors.white, padding: '10px 20px',
					borderBottom: border, fontSize: 22, fontWeight: 900, flexShrink: 0,
				}}>👀 盯着这三件事看</div>
				<div style={{ padding: '20px 26px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1, justifyContent: 'center' }}>
					{watch.map((w, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
							style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
						>
							<span style={{
								flexShrink: 0, width: 34, height: 34, background: colors.purple, color: colors.white,
								fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								border: `2px solid ${colors.black}`,
							}}>{i + 1}</span>
							<span style={{ fontSize: 25, lineHeight: 1.45, color: colors.dark, fontWeight: 600 }}>{w}</span>
						</motion.div>
					))}
				</div>
			</div>

			{note && (
				<div style={{
					border: `3px solid ${colors.orange}`, background: '#fff8e5', flexShrink: 0,
					padding: '13px 20px', fontSize: 21, lineHeight: 1.45, color: '#444',
				}}>{note}</div>
			)}
		</div>
	);
}
