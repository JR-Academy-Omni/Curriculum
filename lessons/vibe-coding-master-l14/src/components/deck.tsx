import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';
import { Slide, Inner, colors, fonts, border, shadow, shadowSm, radii } from './ui';

export function DeckFrame({
	tag,
	title,
	subtitle,
	children,
	bg = colors.warmBg,
	accent = colors.red,
	titleSize = 58,
}: {
	tag: string;
	title: ReactNode;
	subtitle?: ReactNode;
	children: ReactNode;
	bg?: string;
	accent?: string;
	titleSize?: number;
}) {
	const darkCanvas = bg === colors.dark || bg === colors.darkBg;
	return (
		<Slide bg={bg} style={{
			position: 'relative',
			backgroundImage: darkCanvas ? undefined : 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
			backgroundSize: darkCanvas ? undefined : '48px 48px',
		}}>
			{!darkCanvas && <>
				<div aria-hidden style={{ position: 'absolute', left: -84, top: 145, width: 164, height: 164, borderRadius: '50%', border: `22px solid ${colors.yellow}`, opacity: .52 }} />
				<div aria-hidden style={{ position: 'absolute', right: -62, bottom: -38, width: 220, height: 138, borderRadius: '110px 0 0 0', background: colors.yellow, opacity: .58 }} />
			</>}
			<Inner style={{ flexDirection: 'column', gap: 20, paddingTop: 52, paddingBottom: 48 }}>
				<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ width: 46, height: 9, background: accent }} />
					<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, letterSpacing: 1.8, color: darkCanvas ? colors.white : colors.black }}>{tag}</span>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.08 }}>
					<h1 style={{ fontFamily: fonts.heading, fontSize: titleSize, lineHeight: 1.08, letterSpacing: -1.6, margin: 0, maxWidth: 1370, color: darkCanvas ? colors.white : colors.black }}>
						<span style={darkCanvas ? undefined : { backgroundImage: `linear-gradient(transparent 70%, ${colors.yellow} 70%, ${colors.yellow} 94%, transparent 94%)`, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>{title}</span>
					</h1>
					{subtitle && <p style={{ fontFamily: fonts.body, fontSize: 23, lineHeight: 1.45, color: darkCanvas ? '#d8d8dd' : '#514c48', margin: '12px 0 0', maxWidth: 1260 }}>{subtitle}</p>}
				</motion.div>
				<div style={{ flex: 1, minHeight: 0, width: '100%' }}>{children}</div>
			</Inner>
		</Slide>
	);
}

export function Panel({ children, bg = colors.white, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
	const isDark = bg === colors.dark || bg === colors.darkBg;
	return <div style={{ background: bg, border: `2px solid ${colors.dark}`, borderRadius: radii.panel, boxShadow: `9px 9px 0 ${isDark ? 'rgba(255,87,87,.58)' : 'rgba(255,222,89,.92)'}`, padding: 26, ...style }}>{children}</div>;
}

export function Label({ children, bg = colors.dark, color = colors.white }: { children: ReactNode; bg?: string; color?: string }) {
	return <span style={{ display: 'inline-flex', alignItems: 'center', background: bg, color, border: `2px solid ${colors.dark}`, borderRadius: radii.label, padding: '7px 12px', fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, letterSpacing: .35 }}>{children}</span>;
}

export function NumberBadge({ children, bg = colors.yellow }: { children: ReactNode; bg?: string }) {
	return <span style={{ width: 48, height: 48, borderRadius: '50%', border, background: bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{children}</span>;
}

export function AnimatedGroup({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
	return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay }} style={style}>{children}</motion.div>;
}

// ============================================================
// L14《它能碰什么》deck 的共享构件
// SoT：VIBE_CODING_MASTER_L14_BLUEPRINT.md DRAFT 1.2
//      内容库：VIBE_CODING_MASTER_L14_ARCH_BRIEFING.md DRAFT 1.1
//      逐页 spec：PRD.md · 讲稿：RUNSHEET.md
//
// ── 🔴 deck 纪律（违反任何一条 = 这一页要重做）────────────
//   1. **deck 上不许出现绝对分钟数。** 时间只存在于 RUNSHEET 和 PRD。
//   2. ⭐⭐ **不出现学员公司那边的任何产品名。**（蓝图 §0.5）
//      一律用「工单系统 / 聊天工具 / 邮箱 / 代码托管」。
//      这是三重收益：脱敏 · 国内班海外班共用一份课件 · 学员能把自己代入。
//      **本节比别节更要紧，因为它通篇在讲外部系统。**
//      ⚠️ Claude 自己的东西（白名单配置、技能、钩子）照常说 —— 那是这门课教的工具。
//   3. **动手页只放指令和代码，不放结果截图。**
//   4. **不出现精确计数。** 文件数、提交数这类组合起来是可反查的指纹。
//   5. **不出现「原话」式引用。** 所有观点用本课自己的话说。
//   6. **不留任何待填空白。** 讲师个人素材只进 RUNSHEET。
//   7. **页面上不写页码。** 插一页就全错。
//   8. ⭐ **写权限表第三列（批准立在什么上面）视觉上必须最重。**
//      学员会想只填前两列 —— 第三列是这节课存在的理由（蓝图 §1.2）。
//   9. ⭐ **反转那页必须写死是对「人工审批」的，不是对「审批」的。**
//      讲错了学员回去会把审批全撤掉（蓝图 §1.5 第 4 类错误）。
//  10. ⭐⭐ **收口页必须把四种静默失败并排放，不能只放最后那句话。**
//      四件事是同一个形状：看起来发生了，实际没有。
//  11. **第三幕翻车②那页只给一句指令 + 大等待区。**
//      它是全课唯一一个「学员看完会后背发凉」的时刻，放结果就毁了。
//  12. **不用本课程仓库自己的东西当例子**（全系列纪律）。
//  13. **闭合内容容器一律圆角**（talk-deck 硬规则 4）。
// ============================================================

export const FS = {
	body: 26,
	bodyLg: 30,
	code: 23,
	codeSm: 21,
	note: 16,
} as const;

/** 第一幕：边界第一次变成具体的东西，中性色 */
export const ACT1 = colors.dark;
/** 第二幕：一行一行批出来的表，秩序色 */
export const ACT2 = colors.blue;
/** 第三幕：它报了个 0 —— 全节高光，警告色 */
export const ACT3 = colors.red;
/** 第四幕：它会干什么活 */
export const ACT4 = colors.teal;
/** 第五幕：维护、反转与收口 */
export const ACT5 = colors.purple;

export type Act = 1 | 2 | 3 | 4 | 5;
const ACT_META: Record<Act, { name: string; color: string }> = {
	1: { name: '一 · 它现在能碰什么', color: ACT1 },
	2: { name: '二 · 给它钥匙', color: ACT2 },
	3: { name: '三 · 它够得着外面吗', color: ACT3 },
	4: { name: '四 · 它会干什么活', color: ACT4 },
	5: { name: '五 · 谁来维护', color: ACT5 },
};

export function ActBadge({ act, mode }: { act: Act; mode?: string }) {
	const m = ACT_META[act];
	const light = m.color === colors.teal || m.color === colors.blue;
	const chip: CSSProperties = {
		fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
		padding: '5px 12px', border: `2px solid ${colors.black}`, borderRadius: radii.label,
	};
	return (
		<div style={{ position: 'absolute', top: 22, left: 28, display: 'flex', gap: 8, zIndex: 40 }}>
			<span style={{ ...chip, background: m.color, color: light ? colors.black : colors.white }}>{m.name}</span>
			{mode && <span style={{ ...chip, background: colors.white, color: colors.black }}>{mode}</span>}
		</div>
	);
}

/** 附录徽章，课上不讲，投屏留最后给学员拍照 */
export function AppendixBadge({ label }: { label: string }) {
	const chip: CSSProperties = {
		fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1,
		padding: '5px 12px', borderRadius: radii.label,
	};
	return (
		<div style={{ position: 'absolute', top: 22, left: 28, display: 'flex', gap: 8, zIndex: 40 }}>
			<span style={{ ...chip, background: colors.white, color: colors.black, border: `2px solid ${colors.black}` }}>附录 · 课上不讲</span>
			<span style={{ ...chip, background: colors.black, color: colors.yellow }}>{label}</span>
		</div>
	);
}

// ── 代码块 ────────────────────────────────────────

type CodeProps = {
	code: string;
	/** 要高亮的行号（0 起） */
	hi?: number[];
	hiColor?: string;
	label?: string;
	/** 长行软换行而不是裁掉。投屏上宁可折行，也不能把代码藏起来 */
	wrap?: boolean;
	size?: number;
	style?: CSSProperties;
};

export function Code({ code, hi = [], hiColor = colors.yellow, label, size = FS.code, wrap, style }: CodeProps) {
	const lines = code.replace(/\n$/, '').split('\n');
	const hiSet = new Set(hi);
	return (
		// flexShrink: 0 是必须的：被 flex 父级压扁时 overflow:hidden 会**静默裁掉代码行**，
		// 而学员正在照着敲。宁可让它撑破画布（截图核对会抓到），也不能悄悄少一行。
		<div style={{
			border, borderRadius: radii.card, background: colors.dark,
			boxShadow: `8px 8px 0 rgba(255,222,89,.92)`, overflow: 'hidden',
			minWidth: 0, flexShrink: 0, ...style,
		}}>
			{label && (
				<div style={{
					fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1,
					padding: '7px 14px', background: colors.black, color: colors.yellow,
				}}>
					{label}
				</div>
			)}
			<div style={{ padding: '16px 0' }}>
				{lines.map((ln, i) => {
					const isHi = hiSet.has(i);
					const isComment = /^\s*(#|\/\/)/.test(ln);
					return (
						<div key={i} style={{
							fontFamily: fonts.mono, fontSize: size, lineHeight: 1.55, padding: '1px 18px',
							...(wrap
								? { whiteSpace: 'pre-wrap' as const, overflowWrap: 'anywhere' as const }
								: { whiteSpace: 'pre' as const }),
							background: isHi ? hiColor : 'transparent',
							color: isHi ? colors.black : isComment ? '#8892b0' : '#e6f1ff',
							fontWeight: isHi ? 700 : 400,
						}}>
							{ln === '' ? ' ' : ln}
						</div>
					);
				})}
			</div>
		</div>
	);
}

/** 终端输出块。跟代码块视觉上要分开：这是「它说了什么」，不是「你写了什么」 */
export function Term({ lines, style }: { lines: { t: string; kind?: 'fail' | 'note' | 'ok' | 'hdr' }[]; style?: CSSProperties }) {
	const colorOf = (k?: string) =>
		k === 'fail' ? colors.red : k === 'ok' ? colors.green : k === 'note' ? '#8892b0' : '#e6f1ff';
	return (
		<div style={{
			border, borderRadius: radii.card, background: '#0b0f1e',
			boxShadow: `6px 6px 0 rgba(255,222,89,.72)`, padding: '16px 18px', ...style,
		}}>
			{lines.map((l, i) => (
				<div key={i} style={{
					fontFamily: fonts.mono, fontSize: FS.codeSm, lineHeight: 1.6,
					color: colorOf(l.kind), fontWeight: l.kind === 'fail' ? 700 : 400,
					whiteSpace: 'pre-wrap', overflowWrap: 'anywhere',
				}}>
					{l.t === '' ? ' ' : l.t}
				</div>
			))}
		</div>
	);
}

/** 一句话独占一屏。立论（P09）/ 反转（P16）/ 收口（P27）专用 —— 纪律 13 */
export function BigLine({ children, sub, color: c = colors.black, bg }: {
	children: ReactNode; sub?: ReactNode; color?: string; bg?: string;
}) {
	const dark = bg === colors.dark || bg === colors.darkBg;
	return (
		<div style={{
			width: '100%', height: '100%', background: bg ?? colors.warmBg,
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			textAlign: 'center', padding: '0 100px', gap: 34,
		}}>
			<motion.h2
				initial={{ opacity: 0, y: 26 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(46px, 5.2vw, 76px)', fontWeight: 900,
					lineHeight: 1.24, letterSpacing: -1.5, color: c, maxWidth: 1320,
				}}
			>
				{children}
			</motion.h2>
			{sub && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.45, duration: 0.5 }}
					style={{ fontSize: FS.bodyLg, lineHeight: 1.7, color: dark ? 'rgba(255,255,255,0.62)' : '#444', maxWidth: 1080 }}
				>
					{sub}
				</motion.div>
			)}
		</div>
	);
}

/** 动手指令页：只有一句口令 + 一个大等待区（纪律 4：不放结果） */
export function Instruction({ kicker, children, sub }: { kicker: string; children: ReactNode; sub?: ReactNode }) {
	return (
		<div style={{
			width: '100%', height: '100%', background: colors.dark,
			display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
			textAlign: 'center', padding: '0 90px', gap: 30,
		}}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 3,
				padding: '7px 18px', background: colors.yellow, color: colors.black,
				border, borderRadius: radii.label,
			}}>
				{kicker}
			</span>
			<motion.h2
				initial={{ opacity: 0, scale: 0.94 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 180, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 'clamp(44px, 4.8vw, 68px)', fontWeight: 900,
					lineHeight: 1.28, color: colors.white, maxWidth: 1280, letterSpacing: -1,
				}}
			>
				{children}
			</motion.h2>
			{sub && <div style={{ fontSize: FS.body, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, maxWidth: 1040 }}>{sub}</div>}
		</div>
	);
}

/** 聊天框信号条。线上无助教，所有信号走这里（沿用 L13 §0.6） */
export function ChatSignal({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2, duration: 0.6 }}
			style={{
				position: 'absolute', bottom: 66, left: 0, right: 0,
				display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12,
				fontSize: 19, color: 'rgba(255,255,255,0.45)',
			}}
		>
			{children}
		</motion.div>
	);
}

/** 页面标准头 */
export function Head({ children, sub, color: c }: { children: ReactNode; sub?: ReactNode; color?: string }) {
	return (
		<div style={{ marginBottom: 24 }}>
			<h2 style={{
				fontFamily: fonts.heading, fontSize: 'clamp(36px, 3.4vw, 50px)', fontWeight: 900,
				lineHeight: 1.2, letterSpacing: -1, color: c ?? colors.black,
			}}>
				{children}
			</h2>
			{sub && <p style={{ fontSize: FS.body, color: '#555', marginTop: 12, lineHeight: 1.6 }}>{sub}</p>}
		</div>
	);
}

/** 内容页外壳（带 padding，留出徽章位） */
export function Page({ children, bg = colors.warmBg, style }: { children: ReactNode; bg?: string; style?: CSSProperties }) {
	const dark = bg === colors.dark || bg === colors.darkBg;
	return (
		<div style={{
			width: '100%', height: '100%', background: bg, position: 'relative',
			backgroundImage: dark ? undefined : 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
			backgroundSize: dark ? undefined : '48px 48px',
			padding: '72px 64px 48px', display: 'flex', flexDirection: 'column', ...style,
		}}>
			{children}
		</div>
	);
}

/** 「所以」条，每行事实都要落一个所以 */
export function SoBar({ children, color: c = colors.red }: { children: ReactNode; color?: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginTop: 12 }}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1,
				padding: '3px 10px', background: c, color: colors.white,
				borderRadius: radii.label, flexShrink: 0, marginTop: 3,
			}}>
				所以
			</span>
			<span style={{ fontSize: FS.body, lineHeight: 1.6 }}>{children}</span>
		</div>
	);
}

/** 通用两列对照表 */
export function TwoCol({ head, rows, headColor = colors.dark, style }: {
	head: [string, string];
	rows: [ReactNode, ReactNode][];
	headColor?: string;
	style?: CSSProperties;
}) {
	return (
		<div style={{
			border, borderRadius: radii.card, background: colors.white,
			boxShadow: `8px 8px 0 rgba(255,222,89,.92)`, overflow: 'hidden', ...style,
		}}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
				{head.map((h, i) => (
					<div key={i} style={{
						padding: '12px 18px', background: headColor, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 1,
						borderRight: i === 0 ? `2px solid ${colors.black}` : 'none',
					}}>{h}</div>
				))}
			</div>
			{rows.map((r, i) => (
				<div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `2px solid ${colors.black}` }}>
					{r.map((cell, j) => (
						<div key={j} style={{
							padding: '13px 18px', fontSize: 21, lineHeight: 1.5,
							borderRight: j === 0 ? `2px solid ${colors.black}` : 'none',
						}}>{cell}</div>
					))}
				</div>
			))}
		</div>
	);
}

// ============================================================
// 本节新增构件
// ============================================================

/**
 * 递增字号的三句话。反转（P16）、冷启动三连问（P18）、三行递进（P08）共用。
 * 最后一句最大 —— 这是本系列「一口气到底」那种节奏的视觉形态。
 */
export function ThreeBeats({ lines, color: c = colors.black, bg, numbered }: {
	lines: ReactNode[]; color?: string; bg?: string; numbered?: boolean;
}) {
	const sizes = [34, 44, 60];
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 22, width: '100%' }}>
			{lines.map((l, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, x: -22 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 + i * 0.22, duration: 0.45 }}
					style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}
				>
					{numbered && (
						<span style={{
							fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, flexShrink: 0,
							color: bg ? 'rgba(255,255,255,.4)' : '#a8a09a',
						}}>{i + 1}</span>
					)}
					<span style={{
						fontFamily: fonts.heading,
						fontSize: sizes[Math.min(i, sizes.length - 1)],
						fontWeight: i === lines.length - 1 ? 900 : 800,
						lineHeight: 1.3, letterSpacing: -0.8, color: c,
					}}>{l}</span>
				</motion.div>
			))}
		</div>
	);
}

// ============================================================
// 本节新增构件
// ============================================================

/**
 * 三仓图（第一幕）。规则仓 / 记录 / 产品仓，职责完全不同。
 * ⭐ 产品仓那一格要视觉上最硬 —— 「agent 只读，绝不写」是全部权限设计里
 *   最便宜、收益最高的一条（内容库 §2.3）。
 */
export function ThreeRepos({ repos }: {
	repos: { name: string; what: string; who: string; agent: string; forbid?: boolean }[];
}) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
			{repos.map((r, i) => (
				<motion.div
					key={r.name}
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 + i * 0.14, duration: 0.4 }}
					style={{
						display: 'grid', gridTemplateColumns: '220px 1fr 220px 260px', alignItems: 'center',
						background: r.forbid ? colors.dark : colors.white,
						color: r.forbid ? colors.white : colors.black,
						border: `2px solid ${colors.dark}`, borderRadius: radii.card,
						boxShadow: r.forbid ? `9px 9px 0 rgba(255,87,87,.6)` : `6px 6px 0 rgba(255,222,89,.9)`,
						overflow: 'hidden',
					}}
				>
					<div style={{ padding: '16px 18px', fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>{r.name}</div>
					<div style={{ padding: '16px 18px', fontSize: 20, lineHeight: 1.45, opacity: .82 }}>{r.what}</div>
					<div style={{ padding: '16px 18px', fontFamily: fonts.mono, fontSize: 17, opacity: .7 }}>{r.who}</div>
					<div style={{
						padding: '16px 18px', fontSize: 21, fontWeight: 800,
						color: r.forbid ? colors.red : colors.black,
						background: r.forbid ? 'rgba(255,87,87,.12)' : 'rgba(126,217,87,.22)',
						height: '100%', display: 'flex', alignItems: 'center',
					}}>{r.agent}</div>
				</motion.div>
			))}
		</div>
	);
}

/**
 * 写权限表（第二幕）⭐⭐ 全课核心产物。
 * 🔴 纪律 8：第三列「批准立在什么上面」视觉上必须最重 ——
 *   学员会想只填前两列，而第三列是这节课存在的理由。
 */
export function WritePermTable({ rows, strength }: {
	rows: { where: string; who?: string; basis?: string; upgrade?: string }[];
	strength?: { strong: ReactNode; weak: ReactNode };
}) {
	const HEAD = ['写到哪', '谁批准的', '批准立在什么上面', '什么时候能升级'];
	const cols = '1fr 1fr 1.6fr 1fr';
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%' }}>
			<div style={{
				border: `2px solid ${colors.dark}`, borderRadius: radii.card, overflow: 'hidden',
				boxShadow: `9px 9px 0 rgba(255,222,89,.92)`, background: colors.white,
			}}>
				<div style={{ display: 'grid', gridTemplateColumns: cols, background: colors.dark }}>
					{HEAD.map((h, i) => (
						<div key={h} style={{
							padding: i === 2 ? '15px 18px' : '12px 16px',
							fontFamily: fonts.mono, fontSize: i === 2 ? 19 : 15.5,
							fontWeight: i === 2 ? 900 : 700, letterSpacing: .6,
							color: i === 2 ? colors.yellow : colors.white,
							background: i === 2 ? 'rgba(255,222,89,.14)' : 'transparent',
							borderRight: i < 3 ? `2px solid rgba(255,255,255,.2)` : 'none',
						}}>
							{h}{i === 2 && <div style={{ fontSize: 13, fontWeight: 700, opacity: .75, marginTop: 3 }}>这一格是这节课存在的理由</div>}
						</div>
					))}
				</div>
				{rows.map((r, i) => (
					<motion.div
						key={r.where}
						initial={{ opacity: 0 }} animate={{ opacity: 1 }}
						transition={{ delay: 0.2 + i * 0.09, duration: 0.3 }}
						style={{ display: 'grid', gridTemplateColumns: cols, borderTop: `2px solid rgba(16,22,47,.16)` }}
					>
						{[r.where, r.who, r.basis, r.upgrade].map((c, j) => (
							<div key={j} style={{
								padding: '14px 16px', fontSize: j === 2 ? 21 : 20, lineHeight: 1.45,
								fontWeight: j === 2 ? 700 : 400,
								background: j === 2 ? 'rgba(255,222,89,.3)' : 'transparent',
								borderRight: j < 3 ? `2px solid rgba(16,22,47,.12)` : 'none',
								minHeight: 54,
							}}>{c ?? ''}</div>
						))}
					</motion.div>
				))}
			</div>

			{strength && (
				<motion.div
					initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}
					style={{ display: 'flex', gap: 16 }}
				>
					<div style={{ flex: 1, padding: '14px 18px', borderRadius: radii.card, border: `2px solid ${colors.green}`, background: 'rgba(126,217,87,.14)', fontSize: 19, lineHeight: 1.5 }}>{strength.strong}</div>
					<div style={{ flex: 1, padding: '14px 18px', borderRadius: radii.card, border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,.1)', fontSize: 19, lineHeight: 1.5 }}>{strength.weak}</div>
				</motion.div>
			)}
		</div>
	);
}

/**
 * 四态结果模型（第三幕）⭐⭐ 独占一屏。
 * 规则：分支判断看错误，不看结果集长度。
 * 🔴 failed 那一行必须视觉上最刺眼 —— 它是收口第一条静默失败的来源。
 */
export function FourStates({ states }: {
	states: { key: string; meaning: string; report: string; danger?: boolean }[];
}) {
	return (
		<div style={{ display: 'flex', gap: 16, width: '100%' }}>
			{states.map((st, i) => (
				<motion.div
					key={st.key}
					initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15 + i * 0.13, duration: 0.4 }}
					style={{
						flex: st.danger ? 1.4 : 1, minWidth: 0,
						background: st.danger ? colors.dark : colors.white,
						color: st.danger ? colors.white : colors.black,
						border: `2px solid ${colors.dark}`, borderRadius: radii.panel,
						boxShadow: st.danger ? `10px 10px 0 rgba(255,87,87,.62)` : `7px 7px 0 rgba(255,222,89,.9)`,
						padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 12,
					}}
				>
					<span style={{
						fontFamily: fonts.mono, fontSize: st.danger ? 26 : 22, fontWeight: 800,
						padding: '7px 13px', borderRadius: radii.label, alignSelf: 'flex-start',
						background: st.danger ? colors.red : colors.dark,
						color: colors.white,
					}}>{st.key}</span>
					<div style={{ fontSize: 20, lineHeight: 1.45, opacity: .8 }}>{st.meaning}</div>
					<div style={{
						marginTop: 'auto', paddingTop: 12, fontFamily: fonts.mono,
						fontSize: st.danger ? 27 : 22, fontWeight: 900,
						color: st.danger ? colors.yellow : colors.black,
					}}>{st.report}</div>
				</motion.div>
			))}
		</div>
	);
}

/**
 * 四种静默失败并排（第五幕收口）⭐⭐⭐
 * 🔴 纪律 10：收口不能只放最后那句话，必须把这四样合到一起 ——
 *   四件事是同一个形状：看起来发生了，实际没有。
 */
export function SilentFailures({ rows }: { rows: { looks: string; actually: string }[] }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 11, width: '100%' }}>
			{rows.map((r, i) => (
				<motion.div
					key={r.looks}
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.25 + i * 0.3, duration: 0.42 }}
					style={{
						display: 'grid', gridTemplateColumns: '1fr 54px 1fr', alignItems: 'center',
						background: 'rgba(255,255,255,.05)', border: `2px solid rgba(255,255,255,.16)`,
						borderRadius: radii.card, overflow: 'hidden',
					}}
				>
					<div style={{ padding: '15px 20px', fontSize: 24, lineHeight: 1.35, color: 'rgba(255,255,255,.95)' }}>{r.looks}</div>
					<div style={{ textAlign: 'center', fontSize: 22, color: colors.red, fontWeight: 900 }}>→</div>
					<div style={{ padding: '15px 20px', fontSize: 24, lineHeight: 1.35, color: colors.yellow, fontWeight: 800 }}>{r.actually}</div>
				</motion.div>
			))}
		</div>
	);
}

export { colors, fonts, border, radii, shadow, shadowSm };
