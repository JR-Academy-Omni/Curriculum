import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from './ui';

// ============================================================
// L8 deck 的共享构件
// SoT：蓝图 v1.0 §12.1「Deck 性质」—— 这里的每一条都是硬约束，不是风格偏好：
//
//   · 每页只承担一个教学任务
//   · 完整配置 / Charter / prompt / 消息模板放 HANDOUT，deck 只显示必要片段
//   · 讲授页可以完整呈现结论（本节明确先讲后做）
//   · 实践页只显示「现在做什么 / 完成判据 / 硬停时间」，不自动揭示案例答案
//   · 禁止按时间自动出现答案；需要分步时用拆页，不用 delay 揭晓
//   · 1600×900 下：主正文 ≥ 26px，代码与证据 ≥ 22px，辅助脚注 ≥ 16px
//   · 不在一页同时放完整代码、解释表、prompt 和警告
// ============================================================

/** 字号下限（§12.1）。所有页面只能从这里取值，不允许写更小的数字。 */
export const FS = {
	body: 26,      // 主正文下限
	bodyLg: 30,
	code: 22,      // 代码与证据下限
	note: 16,      // 辅助脚注下限
} as const;

/** 阶段标记：讲 / 看 / 做 / 讲评 —— 对应蓝图 §12.2 逐页表的「阶段」列 */
export type Phase = 'talk' | 'watch' | 'do' | 'review';

const PHASE_CFG: Record<Phase, { label: string; bg: string; fg: string }> = {
	talk: { label: '讲', bg: colors.blue, fg: colors.white },
	watch: { label: '看', bg: colors.purple, fg: colors.white },
	do: { label: '做', bg: colors.green, fg: colors.black },
	review: { label: '讲评', bg: colors.orange, fg: colors.white },
};

/** 页眉：阶段徽章 + 时间窗 + 标题。每页一个教学任务，标题就是那个任务。 */
export function PageHead({
	phase,
	time,
	title,
	sub,
	style,
}: { phase: Phase; time: string; title: ReactNode; sub?: ReactNode; style?: CSSProperties }) {
	const cfg = PHASE_CFG[phase];
	return (
		<div style={{ flexShrink: 0, ...style }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
				<span style={{
					background: cfg.bg, color: cfg.fg, padding: '4px 16px',
					fontSize: 18, fontWeight: 800, border: `2px solid ${colors.black}`,
				}}>{cfg.label}</span>
				<span style={{ fontFamily: fonts.mono, fontSize: FS.note, color: '#888', letterSpacing: 1 }}>
					{time}
				</span>
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

/** 页面容器：撑满画布、上下留白一致，内容区自动纵向排布 */
export function Page({
	bg = colors.warmBg,
	children,
	style,
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

/** 一句话结论条 —— 讲授页的收口。本节先讲后做，结论可以完整呈现。 */
export function Verdict({
	children,
	bg = colors.dark,
	fg = colors.white,
	label,
	style,
}: { children: ReactNode; bg?: string; fg?: string; label?: string; style?: CSSProperties }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 14 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.35 }}
			style={{ border, boxShadow: shadow, background: bg, color: fg, padding: '20px 26px', ...style }}
		>
			{label && (
				<div style={{
					fontFamily: fonts.mono, fontSize: FS.note, letterSpacing: 2,
					color: colors.yellow, marginBottom: 8,
				}}>{label}</div>
			)}
			<div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.45 }}>{children}</div>
		</motion.div>
	);
}

/** 代码 / 证据块 —— 字号下限 22px（§12.1） */
export function Code({
	children,
	label,
	style,
}: { children: string; label?: string; style?: CSSProperties }) {
	return (
		<div style={{ border, boxShadow: shadow, background: colors.dark, ...style }}>
			{label && (
				<div style={{
					background: 'rgba(255,255,255,0.08)', color: colors.yellow,
					padding: '7px 16px', fontFamily: fonts.mono, fontSize: FS.note,
					letterSpacing: 1.4, fontWeight: 700, borderBottom: '2px solid rgba(255,255,255,0.15)',
				}}>{label}</div>
			)}
			<pre style={{
				margin: 0, padding: '16px 20px', color: '#e8e8f0',
				fontFamily: fonts.mono, fontSize: FS.code, lineHeight: 1.62,
				whiteSpace: 'pre-wrap',
			}}>{children}</pre>
		</div>
	);
}

/** 脚注 —— 字号下限 16px */
export function Note({ children, style }: { children: ReactNode; style?: CSSProperties }) {
	return (
		<div style={{ fontSize: FS.note, color: '#777', lineHeight: 1.55, ...style }}>{children}</div>
	);
}

/** 编号项 —— 讲授页列举用，正文 26px */
export function NumRow({
	n,
	title,
	desc,
	color = colors.dark,
	style,
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

// ============================================================
// 实践页三件套（§12.1）：现在做什么 / 完成判据 / 硬停时间
// P14–P18 专用。**这三块之外不放任何案例答案。**
// ============================================================

export function PracticeBoard({
	doWhat,
	criteria,
	stopAt,
	warn,
}: {
	doWhat: ReactNode;
	criteria: ReactNode[];
	stopAt: string;
	warn?: ReactNode;
}) {
	return (
		<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
			{/* 现在做什么 */}
			<div style={{ flex: 1.15, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}>
				<div style={{
					background: colors.green, color: colors.black, padding: '10px 20px',
					borderBottom: border, fontSize: 22, fontWeight: 900,
				}}>🔨 现在做什么</div>
				<div style={{ padding: '20px 24px', fontSize: FS.body, lineHeight: 1.6, color: colors.dark, flex: 1 }}>
					{doWhat}
				</div>
			</div>

			{/* 完成判据 + 硬停 */}
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{
						background: colors.dark, color: colors.white, padding: '10px 20px',
						borderBottom: border, fontSize: 22, fontWeight: 900,
					}}>✅ 完成判据</div>
					<div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
						{criteria.map((c, i) => (
							<div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
								<span style={{
									flexShrink: 0, width: 24, height: 24, border: `3px solid ${colors.black}`,
									background: colors.white, marginTop: 3,
								}} />
								<span style={{ fontSize: 23, lineHeight: 1.45, color: colors.dark, fontWeight: 600 }}>{c}</span>
							</div>
						))}
					</div>
				</div>

				<div style={{
					border, boxShadow: shadow, background: colors.red, color: colors.white,
					padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14,
				}}>
					<span style={{ fontSize: 24 }}>⏱</span>
					<span style={{ fontSize: 22, fontWeight: 700 }}>硬停</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, marginLeft: 'auto' }}>{stopAt}</span>
				</div>

				{warn && (
					<div style={{
						border: `3px solid ${colors.orange}`, background: '#fff8e5',
						padding: '12px 18px', fontSize: 22, lineHeight: 1.5, color: '#444',
					}}>{warn}</div>
				)}
			</div>
		</div>
	);
}
