import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S19 — 改写 Case 2：Multi-Agent 工作流
 * Before vs After 左右对照 + 5 升级点
 */

const beforeText = `- Used AI agents to automate marketing tasks
- Saved time for the team`;

const afterBullets: string[] = [
	`Designed 5-agent LangGraph workflow (planner / researcher / writer / reviewer / publisher) for content marketing, replacing 3-person manual pipeline`,
	`Implemented agent-level retry + reflection loop using ReAct pattern, reducing factual error rate from 18% → 3% across 200 weekly articles`,
	`Integrated MCP server exposing CMS / SEO / image-gen tools to agents, enabling end-to-end content production without human intervention`,
	`Outcome: 200 articles/week production capacity (vs 40 manual baseline), $24k/yr in marketing ops savings, content team refocused on strategy`,
];

const upgrades: { num: string; text: string }[] = [
	{ num: '①', text: '动词：Used → Designed / Implemented / Integrated（三个强动词）' },
	{ num: '②', text: '技术栈：LangGraph 5-agent + ReAct + MCP server（架构具体）' },
	{ num: '③', text: '加 eval 维度：factual error rate 18% → 3%' },
	{ num: '④', text: '加 ops 维度：200 articles/week vs 40 baseline（5× 产能）' },
	{ num: '⑤', text: '双轨结果：业务 $24k/yr 节省 + 团队角色转型' },
];

export default function S19_RewriteCase2() {
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
					<span style={{ padding: '5px 12px', background: colors.p7, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						REWRITE · CASE 02
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						改写 Case 2 · Multi-Agent 自动化
					</span>
				</motion.div>

				{/* Before vs After 左右 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 14, marginBottom: 12 }}>
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
							两句话 0 信息：没说几个 agent / 哪个 framework / 多少任务 / 替代了什么人力 / 跑了多久。
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

				{/* 5 升级点 横排 */}
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
