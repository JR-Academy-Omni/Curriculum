import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S20 — 改写 Case 3：AI Coding 工作流改造
 * ⚠️ 强调：不要写 "AI coding assistance"，要用具体工具名
 */

const beforeText = `- Used AI coding assistance to improve developer
  productivity
- Adopted Cursor for the team`;

const afterBullets: string[] = [
	`Led adoption of Claude Code + Cursor across 12-engineer team, building 14 custom Claude Code skills + 6 MCP servers (internal API / DB schema / design system) tailored to our monorepo`,
	`Designed hook-based pre-commit pipeline (type-check / test / lint) preventing 200+ broken commits/month, reducing PR review cycles 40%`,
	`Built shared prompt library (40+ patterns) for migration / refactor / test generation, cutting boilerplate writing time 60% across team`,
	`Outcome: feature-to-merge velocity +35%, junior engineer ramp-up time 4w → 2w, $84k/yr eng productivity gain (measured via DORA metrics)`,
];

const upgrades: { num: string; text: string }[] = [
	{ num: '①', text: '动词：Used → Led / Designed / Built（领导力 + 设计层级）' },
	{ num: '②', text: '具体工具名：Claude Code + Cursor + MCP server + hook + skills' },
	{ num: '③', text: '加 eval 维度：DORA metrics（行业公认）+ velocity +35%' },
	{ num: '④', text: '加 ops 维度：200+ broken commits/month prevented · ramp-up 4w → 2w' },
	{ num: '⑤', text: '双轨结果：工程指标 +35% velocity + 业务 $84k/yr 量化' },
];

export default function S20_RewriteCase3() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '18px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}
				>
					<span style={{ padding: '5px 12px', background: colors.p5, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						REWRITE · CASE 03
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						改写 Case 3 · AI Coding 工作流改造
					</span>
				</motion.div>

				{/* Before vs After 左右 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 14, marginBottom: 10 }}>
					{/* Before */}
					<motion.div
						initial={{ opacity: 0, x: -16 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15, duration: 0.4 }}
						style={{
							background: colors.white,
							border: `3px solid ${colors.red}`,
							boxShadow: `5px 5px 0 ${colors.red}`,
							padding: '14px 14px',
						}}
					>
						<BadgeRow icon="❌" label="BEFORE" color={colors.red} />
						<pre style={{
							fontFamily: fonts.mono, fontSize: 12.5, color: '#444', fontWeight: 600,
							lineHeight: 1.5, whiteSpace: 'pre-wrap', margin: 0,
							background: '#fff5f5', padding: '10px 12px',
							borderLeft: `4px solid ${colors.red}`,
						}}>
							{beforeText}
						</pre>
						<div style={{
							marginTop: 10, padding: '8px 10px', background: '#fafafa',
							border: `2px dashed ${colors.red}`,
							fontFamily: fonts.body, fontSize: 11, color: '#666', fontWeight: 600, lineHeight: 1.4,
						}}>
							"AI coding assistance" = 万能词，HR / hiring manager 看不出你到底用什么工具做什么改造。
						</div>
					</motion.div>

					{/* After */}
					<motion.div
						initial={{ opacity: 0, x: 16 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.25, duration: 0.4 }}
						style={{
							background: colors.white,
							border: `3px solid ${colors.green}`,
							boxShadow: `5px 5px 0 ${colors.green}`,
							padding: '14px 14px',
						}}
					>
						<BadgeRow icon="✅" label="AFTER" color={colors.green} />
						<ul style={{
							listStyle: 'none', margin: 0,
							background: '#f1f8e9', padding: '10px 12px',
							borderLeft: `4px solid ${colors.green}`,
						}}>
							{afterBullets.map((b, i) => (
								<li key={i} style={{
									fontFamily: fonts.mono, fontSize: 11.5, color: colors.black, fontWeight: 600,
									lineHeight: 1.45, marginBottom: i < afterBullets.length - 1 ? 8 : 0,
									display: 'flex', gap: 6,
								}}>
									<span style={{ color: colors.green, fontWeight: 900, flexShrink: 0 }}>•</span>
									<span>{b}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* 5 升级点 + 特别强调 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.45, duration: 0.4 }}
					style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, minHeight: 0 }}
				>
					{upgrades.map((u, i) => (
						<UpgradeCard key={u.num} u={u} delay={0.55 + i * 0.06} />
					))}
				</motion.div>

				{/* 红色强调横幅 */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95, duration: 0.4 }}
					style={{
						marginTop: 10, padding: '10px 14px',
						background: colors.dark, border, boxShadow: `4px 4px 0 ${colors.red}`,
						display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
					}}
				>
					<span style={{
						padding: '3px 10px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
						border: `2px solid ${colors.white}`,
					}}>
						特别强调
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 800, color: colors.white, letterSpacing: -0.2, lineHeight: 1.35 }}>
						用 <span style={{ color: colors.yellow }}>Cursor / Claude Code / MCP server / hook / skills</span> 这些具体工具名 — 绝对不是 "AI coding assistance"。
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

function BadgeRow({ icon, label, color }: { icon: string; label: string; color: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
			<span style={{ fontSize: 16 }}>{icon}</span>
			<span style={{
				padding: '3px 10px', background: color, color: colors.white,
				fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 0.5,
				border: `2px solid ${colors.black}`,
			}}>
				{label}
			</span>
		</div>
	);
}

function UpgradeCard({ u, delay }: { u: { num: string; text: string }; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.35 }}
			style={{
				background: colors.yellow, border, boxShadow: shadowSm,
				padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 6,
			}}
		>
			<div style={{
				fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
				color: colors.red, lineHeight: 1,
			}}>
				{u.num}
			</div>
			<div style={{
				fontFamily: fonts.body, fontSize: 11.5, color: colors.black,
				fontWeight: 700, lineHeight: 1.35,
			}}>
				{u.text}
			</div>
		</motion.div>
	);
}
