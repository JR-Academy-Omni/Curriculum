import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S26 — Behavioral 高频 5 题（STAR）+ 反向问 5 问
 * 左右双栏
 */

interface Behavioral {
	q: string;
	hint: string;
}

interface Reverse {
	q: string;
	why: string;
}

const behavioral: Behavioral[] = [
	{
		q: '"Tell me a time when LLM gave you wrong output. How did you handle it?"',
		hint: 'S/T/A/R 套：项目 hallucination 实例 → RAGAS + grounding + LLM-as-judge gate → faithfulness 0.72→0.91',
	},
	{
		q: '"Conflict with PM/team on AI feature scope?"',
		hint: '用数据说话，不是吵架。讲清楚你做了什么 trade-off 分析',
	},
	{
		q: '"Most challenging AI project debugging?"',
		hint: '重点：trace tool / eval / 系统化 debug 方法，不是"我加了 log"',
	},
	{
		q: '"How do you keep up with AI?"',
		hint: '具体来源：Anthropic / OpenAI blog · Arxiv · Lilian Weng · Simon Willison · awesome-llm。禁说 "follow AI news"',
	},
	{
		q: '"Why this company over competitor?"',
		hint: '提前 research：公司 AI 产品 / 技术 blog / 团队公开演讲',
	},
];

const reverse: Reverse[] = [
	{
		q: 'How do you decide build vs buy for LLM stack?',
		why: '看出公司技术深度',
	},
	{
		q: "What's your eval pipeline before prompt changes hit prod?",
		why: '看出工程成熟度',
	},
	{
		q: 'How do you balance cost between Claude / GPT / open-source models?',
		why: '看出 cost 思维',
	},
	{
		q: "What part of LLM stack do you wish was solved but isn't?",
		why: '制造技术共鸣',
	},
	{
		q: 'What does AI Engineer career path look like 2 years out here?',
		why: '看出公司是否真在投资 AI Engineer',
	},
];

export default function S26_BehavioralReverse() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '92%', padding: '20px 18px',
				display: 'flex', flexDirection: 'column', gap: 12,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: '0 0 4px',
					}}>
						Behavioral · <span style={{
							display: 'inline-block', padding: '0 10px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>STAR 高频</span> + 反问 5 问
					</h2>
					<p style={{ fontSize: 12, color: '#555', fontWeight: 600, margin: 0 }}>
						Behavioral 用 STAR 回答 · 反问决定 senior 印象分
					</p>
				</motion.div>

				{/* 双栏 */}
				<div style={{
					display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 14, flex: 1, minHeight: 0,
				}}>
					{/* 左：Behavioral 5 题 */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column', overflow: 'hidden',
						}}
					>
						<div style={{
							background: colors.p3, color: colors.white,
							padding: '8px 12px',
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						}}>
							<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900 }}>
								Behavioral 高频 5 题
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, opacity: 0.9 }}>
								STAR 框架
							</span>
						</div>
						<div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
							{behavioral.map((b, i) => (
								<motion.div
									key={i}
									variants={{
										hidden: { opacity: 0, x: -10 },
										visible: { opacity: 1, x: 0 },
									}}
									transition={{ duration: 0.3 }}
									style={{
										paddingLeft: 10, borderLeft: `3px solid ${colors.p3}`,
									}}
								>
									<div style={{
										fontFamily: fonts.heading, fontSize: 13, fontWeight: 800,
										color: colors.black, lineHeight: 1.3, marginBottom: 2,
									}}>
										{i + 1}. {b.q}
									</div>
									<div style={{ fontSize: 11, color: '#555', lineHeight: 1.4, fontWeight: 500 }}>
										→ {b.hint}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 右：反问 5 问 */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
						style={{
							background: colors.dark, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column', overflow: 'hidden',
						}}
					>
						<div style={{
							background: colors.yellow, color: colors.black,
							padding: '8px 12px',
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						}}>
							<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900 }}>
								反问 5 问 · 拉满印象分
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800 }}>
								YOUR TURN
							</span>
						</div>
						<div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
							{reverse.map((r, i) => (
								<motion.div
									key={i}
									variants={{
										hidden: { opacity: 0, x: 10 },
										visible: { opacity: 1, x: 0 },
									}}
									transition={{ duration: 0.3 }}
									style={{
										padding: '6px 10px',
										background: 'rgba(255,255,255,0.06)',
										border: `2px solid ${colors.yellow}`,
									}}
								>
									<div style={{
										fontFamily: fonts.heading, fontSize: 12, fontWeight: 800,
										color: colors.white, lineHeight: 1.3, marginBottom: 2,
									}}>
										Q{i + 1}. "{r.q}"
									</div>
									<div style={{ fontSize: 10.5, color: colors.yellow, lineHeight: 1.3, fontWeight: 600 }}>
										✓ {r.why}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
						padding: '8px 16px', background: colors.red, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>
						反问 = <span style={{ color: colors.yellow }}>你也在面试他们</span> · 问题质量决定 senior 分数
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
