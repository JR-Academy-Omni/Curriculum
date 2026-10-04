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
// L15《它碰过什么》deck 的共享构件
// SoT：VIBE_CODING_MASTER_L15_BLUEPRINT.md DRAFT 2.1 · PRD.md §3 逐页 spec
//
// ── 🔴 deck 纪律（违反任何一条 = 这一页要重做）────────────
//   1. **deck 上不许出现绝对分钟数。** 上课晚开始 5 分钟全 deck 失效。
//      时间只存在于 RUNSHEET 和 PRD。
//   2. 🔄 **产品名纪律在本节切了一刀**（蓝图 §0.11）：
//      **学员公司的系统**（工单 / 聊天 / 邮箱 / 代码托管）**绝对不说**；
//      **Claude 自己的**（定时任务 / 会话 / 技能 / 钩子）**照常说**。
//      判据：学员换一家公司还要用的，说；换一家公司就不用了的，不说。
//      ⚠️ 不切这一刀，第四幕根本没法做。
//   3. **定时任务只讲形状不讲参数**（蓝图 §0.12）。
//      不写「有几种 / 各活多久 / 什么条件才触发」的具体值 —— 那些会变版本，
//      进 A3 的讲师课前核对清单。deck 上只留三个不变的形状。
//   4. **动手页只放指令和代码，不放结果截图。** 放了学员就低头看屏幕，
//      不看自己终端。
//   5. **不出现精确计数。** 文件数、提交数这类组合起来是可反查的指纹。
//   6. **不出现「原话」式引用。** 所有观点用本课自己的话说 —— 包括复述 L14
//      的结论时，也用本课的说法，不做引号引用。
//   7. **不留任何待填空白。** 讲师个人素材只进 RUNSHEET。
//   8. ⭐ **收口页不许出现「下节课」。** 收口最后那句尺子（真正的年龄）
//      就是 L16 的开场，预告会削弱它（蓝图 §6.1 铁律 10）。
//   9. **页面上不写页码。** 理由同不写分钟数 —— 插一页就全错。
//  10. **不用「它」指代两样以上的东西。** 本节「它」默认指 agent；
//      指痕迹写「这条痕迹」，指定时任务写「那个定时任务」。
//  11. **不用本课程仓库自己的东西当例子**（全系列纪律）。
//  12. ⭐ **P22 的空列表和 P27 收口第一行必须用同一个 `EmptyList`。**
//      收口要的是「学员一眼认出这就是我十五分钟前看到的那个空列表」，
//      两处各画一个就做不到（蓝图 §0.8 / §7）。
//  13. ⭐ **三句话各自独占一屏，不许和别的内容混**（P09 / P16 / P27）。
//  14. **闭合内容容器一律圆角**（talk-deck 硬规则 4）：
//      面板 22–24 / 卡片 16–20 / 标签 7–10 / 胶囊 999。
//      坐标轴、连接线、表格分隔线可以是直线。
// ============================================================

export const FS = {
	body: 26,
	bodyLg: 30,
	code: 23,
	codeSm: 21,
	note: 16,
} as const;

/** 第一幕：翻出来的是作文不是事实，中性色 */
export const ACT1 = colors.dark;
/** 第二幕：证据没人读，秩序色 */
export const ACT2 = colors.blue;
/** 第三幕：撤不回来，警告色 */
export const ACT3 = colors.red;
/** 第四幕：放手让它自己跑 —— 全课唯一往上走的一幕，用亮色 */
export const ACT4 = colors.teal;
/** 第五幕：回流与收口 */
export const ACT5 = colors.purple;

export type Act = 1 | 2 | 3 | 4 | 5;
const ACT_META: Record<Act, { name: string; color: string }> = {
	1: { name: '一 · 它刚才干了什么', color: ACT1 },
	2: { name: '二 · 这条痕迹谁会读', color: ACT2 },
	3: { name: '三 · 撤得回来吗', color: ACT3 },
	4: { name: '四 · 凭什么让它自己跑', color: ACT4 },
	5: { name: '五 · 这次错怎么变成下次的规矩', color: ACT5 },
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

/**
 * 痕迹三级（P05）。0 级要「变丑」—— 灰、虚线、塌陷，
 * 让学员一眼看出自己在哪一级，不用讲师解释。
 */
export type TraceLevelSpec = { level: string; name: string; sample: ReactNode; verdict: string };

export function TraceLevel({ spec, tone }: { spec: TraceLevelSpec; tone: 'bad' | 'mid' | 'good' }) {
	const cfg = {
		bad: { bg: '#efebe8', bd: `2px dashed #b3aaa4`, fg: '#8c837d', chip: '#b3aaa4', sh: 'none' },
		mid: { bg: colors.white, bd: `2px solid ${colors.dark}`, fg: colors.black, chip: colors.blue, sh: `6px 6px 0 rgba(56,182,255,.42)` },
		good: { bg: colors.white, bd: `2px solid ${colors.dark}`, fg: colors.black, chip: colors.green, sh: `8px 8px 0 rgba(126,217,87,.82)` },
	}[tone];
	return (
		<div style={{
			background: cfg.bg, border: cfg.bd, borderRadius: radii.card,
			boxShadow: cfg.sh, padding: '18px 22px', display: 'flex', gap: 20, alignItems: 'flex-start',
		}}>
			<span style={{
				fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1,
				padding: '6px 11px', borderRadius: radii.label, flexShrink: 0,
				background: cfg.chip, color: tone === 'bad' ? colors.white : colors.black,
			}}>{spec.level}</span>
			<div style={{ minWidth: 0, flex: 1 }}>
				<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: cfg.fg, marginBottom: 8 }}>{spec.name}</div>
				<div style={{ fontFamily: fonts.mono, fontSize: 20, lineHeight: 1.5, color: cfg.fg, opacity: tone === 'bad' ? 0.8 : 1 }}>{spec.sample}</div>
				<div style={{ fontSize: 19, lineHeight: 1.5, color: cfg.fg, marginTop: 10, fontWeight: tone === 'bad' ? 700 : 400 }}>{spec.verdict}</div>
			</div>
		</div>
	);
}

/**
 * 两张表并排（P11）—— 本节最重要的一页，唯一一页必须让学员拍照。
 * 左表是上节课的（灰化），右表是今天要重排出来的（高亮）。
 */
export function SideBySideTables({ left, right, note }: {
	left: { caption: string; head: string; rows: string[] };
	right: { caption: string; head: string[]; rows: string[] };
	note: ReactNode;
}) {
	const cell: CSSProperties = { padding: '11px 16px', fontSize: 20, lineHeight: 1.45, borderTop: `2px solid rgba(16,22,47,.18)` };
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 26, width: '100%' }}>
			{/* 左：L14 的表，灰化 —— 它没错，只是只排了一半 */}
			<div style={{ flex: '0 0 420px', opacity: 0.55 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1, marginBottom: 8, color: '#6f6760' }}>{left.caption}</div>
				<div style={{ background: '#f3efec', border: `2px solid #b3aaa4`, borderRadius: radii.card, overflow: 'hidden' }}>
					<div style={{ padding: '10px 16px', background: '#ddd6d0', fontFamily: fonts.mono, fontSize: 15, fontWeight: 700 }}>{left.head}</div>
					{left.rows.map(r => <div key={r} style={cell}>{r}</div>)}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.35, type: 'spring', stiffness: 200, damping: 15 }}
				style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
			>
				<div style={{ fontSize: 56, fontWeight: 900, color: colors.red, lineHeight: 1 }}>→</div>
				<div style={{
					fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1, textAlign: 'center',
					padding: '7px 12px', borderRadius: radii.label, background: colors.yellow,
					border: `2px solid ${colors.black}`, whiteSpace: 'nowrap',
				}}>同一批行<br />重排一次</div>
			</motion.div>

			{/* 右：今天要排出来的 */}
			<motion.div
				initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, duration: 0.45 }}
				style={{ flex: 1, minWidth: 0 }}
			>
				<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 1, marginBottom: 8, color: colors.red }}>{right.caption}</div>
				<div style={{
					background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.card,
					boxShadow: `9px 9px 0 rgba(255,87,87,.5)`, overflow: 'hidden',
				}}>
					<div style={{ display: 'grid', gridTemplateColumns: `1.1fr .9fr .8fr 1.2fr`, background: colors.dark }}>
						{right.head.map((h, i) => (
							<div key={h} style={{
								padding: '10px 14px', fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 800,
								color: i === 1 || i === 3 ? colors.yellow : colors.white,
								borderRight: i < right.head.length - 1 ? `2px solid rgba(255,255,255,.2)` : 'none',
							}}>{h}</div>
						))}
					</div>
					{right.rows.map(r => (
						<div key={r} style={{ ...cell, display: 'grid', gridTemplateColumns: `1.1fr .9fr .8fr 1.2fr`, padding: 0 }}>
							<div style={{ padding: '11px 14px', borderRight: `2px solid rgba(16,22,47,.12)` }}>{r}</div>
							<div style={{ padding: '11px 14px', borderRight: `2px solid rgba(16,22,47,.12)`, background: 'rgba(255,222,89,.28)' }} />
							<div style={{ padding: '11px 14px', borderRight: `2px solid rgba(16,22,47,.12)` }} />
							<div style={{ padding: '11px 14px', background: 'rgba(255,222,89,.28)' }} />
						</div>
					))}
				</div>
			</motion.div>

			{note}
		</div>
	);
}

/** 升级三道门（P20）。支持指定哪一道最大 —— 门 2 是全幕唯一会被记住的一句 */
export function GateRow({ gates, emphasize }: {
	gates: { n: string; name: string; how: string; punch?: ReactNode }[];
	emphasize?: number;
}) {
	return (
		<div style={{ display: 'flex', gap: 20, alignItems: 'stretch', width: '100%' }}>
			{gates.map((g, i) => {
				const big = i === emphasize;
				return (
					<motion.div
						key={g.n}
						initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.18 + i * 0.16, duration: 0.42 }}
						style={{
							flex: big ? 1.45 : 1, minWidth: 0,
							background: big ? colors.dark : colors.white,
							color: big ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.panel,
							boxShadow: big ? `10px 10px 0 rgba(255,87,87,.62)` : `7px 7px 0 rgba(255,222,89,.9)`,
							padding: big ? '26px 24px' : '22px 20px',
							display: 'flex', flexDirection: 'column', gap: 12,
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1.4,
							padding: '6px 11px', borderRadius: radii.label, alignSelf: 'flex-start',
							background: big ? colors.yellow : colors.dark, color: big ? colors.black : colors.white,
						}}>{g.n}</span>
						<div style={{ fontFamily: fonts.heading, fontSize: big ? 34 : 27, fontWeight: 900, lineHeight: 1.25 }}>{g.name}</div>
						<div style={{ fontSize: big ? 21 : 19, lineHeight: 1.5, opacity: big ? 0.82 : 0.72 }}>{g.how}</div>
						{g.punch && (
							<div style={{
								marginTop: 'auto', paddingTop: 14, fontSize: 23, lineHeight: 1.4, fontWeight: 800,
								color: colors.yellow,
							}}>{g.punch}</div>
						)}
					</motion.div>
				);
			})}
		</div>
	);
}

/**
 * 空列表视觉。🔴 纪律 12：P22（自检 B）和 P27（收口第一行）**必须共用这一个**，
 * 否则「学员一眼认出这就是我十五分钟前看到的那个空列表」做不到。
 */
export function EmptyList({ title, hint, compact }: { title: string; hint?: ReactNode; compact?: boolean }) {
	return (
		<div style={{
			background: '#0b0f1e', border: `2px solid ${colors.dark}`, borderRadius: radii.card,
			boxShadow: compact ? 'none' : `8px 8px 0 rgba(255,87,87,.55)`,
			padding: compact ? '14px 16px' : '20px 22px', minWidth: 0,
		}}>
			<div style={{
				fontFamily: fonts.mono, fontSize: compact ? 16 : 19, fontWeight: 700,
				color: '#8892b0', marginBottom: compact ? 8 : 12,
			}}>{title}</div>
			<div style={{
				fontFamily: fonts.mono, fontSize: compact ? 20 : 26, fontWeight: 400,
				color: '#4a5270', fontStyle: 'italic', padding: compact ? '8px 0' : '14px 0',
				borderTop: `1px dashed #2a3050`, borderBottom: `1px dashed #2a3050`, textAlign: 'center',
			}}>
				（空）
			</div>
			{hint && <div style={{ fontSize: compact ? 17 : 20, lineHeight: 1.5, color: colors.yellow, marginTop: compact ? 8 : 14, fontWeight: 700 }}>{hint}</div>}
		</div>
	);
}

export { colors, fonts, border, radii, shadow, shadowSm };
