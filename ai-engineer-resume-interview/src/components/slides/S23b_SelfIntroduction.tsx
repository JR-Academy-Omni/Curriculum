import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const badPoints = [
	'① 🚨 学位开场 — 立刻被划归"应届/无经验"档（最致命）',
	'② "I have X years experience" — 流水账，无信息密度',
	'③ "familiar with" — 不可信 ≈ "会一点点"',
	'④ "looking for opportunity" — 万能尾句，记忆点零',
];

const goodPoints = [
	'① 反 frame Junior — "shipping in production for 18 months" 立刻定位 senior',
	'② 具体技术栈 — Cohere Rerank / hybrid RAG / LangGraph（不是 "I know AI"）',
	'③ 量化项目 — RAGAS 0.91 / 80k QPD / $0.004（数字 = 可信度）',
	'④ 跟岗位强相关 — "agentic systems" 直接抠 JD 关键字',
];

const hooks = [
	{
		scenario: '有 prod 经验',
		line: '"I\'ve been shipping LLM features in production for the last 18 months..."',
		color: colors.p5,
	},
	{
		scenario: '转型中',
		line: '"My background is full-stack, but the last year I\'ve moved deep into AI engineering..."',
		color: colors.p3,
	},
	{
		scenario: '输出态势',
		line: '"Three of my last projects all had a common pattern — RAG + Eval + Cost optimization..."',
		color: colors.p7,
	},
];

export default function S23b_SelfIntroduction() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							INTERVIEW · OPENING
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							60 秒 = 7-9 句话 = 第一印象的全部
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '42px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						自我介绍 ·{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							60 秒决定第一印象
						</span>
					</h2>
				</motion.div>

				{/* 公式 bar */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.15 }}
					style={{
						padding: '14px 20px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm, fontFamily: fonts.heading, fontSize: 20, fontWeight: 800,
						textAlign: 'center', letterSpacing: -0.3,
					}}
				>
					<span style={{ color: colors.yellow }}>[反 Junior frame · 1 句]</span>
					<span style={{ margin: '0 10px', opacity: 0.5 }}>+</span>
					<span style={{ color: colors.blue }}>[具体技术栈 · 不 general]</span>
					<span style={{ margin: '0 10px', opacity: 0.5 }}>+</span>
					<span style={{ color: colors.green }}>[最亮项目 + 量化]</span>
					<span style={{ margin: '0 10px', opacity: 0.5 }}>+</span>
					<span style={{ color: colors.red }}>[跟 JD 强相关]</span>
				</motion.div>

				{/* 🚨 红色警告条 — 学位开场红线 */}
				<motion.div
					initial={{ opacity: 0, x: -16 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					style={{
						padding: '10px 16px', background: colors.red, color: colors.white,
						border, boxShadow: `4px 4px 0 ${colors.black}`,
						display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, letterSpacing: 0.5, background: colors.black, padding: '4px 10px', flexShrink: 0 }}>
						🚨 学位开场红线
					</span>
					<span style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 700, lineHeight: 1.4 }}>
						除非你应聘的就是 <strong style={{ background: colors.yellow, color: colors.black, padding: '0 6px' }}>Junior / 应届岗</strong>，否则 <strong>禁止以"我毕业于 XX 大学 / 学位是 XX"开场</strong>。一开口就让面试官把你 frame 成"应届无经验" — 后面再多技术栈也救不回来。
					</span>
				</motion.div>

				{/* 左右对比 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
					{/* 烂版本 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.25 }}
						style={{ background: colors.white, border: `3px solid ${colors.red}`, boxShadow: `5px 5px 0 ${colors.red}`, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<span style={{ padding: '3px 10px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border: `2px solid ${colors.black}` }}>
								❌ 烂版本
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', fontWeight: 700 }}>背简历 / 流水账</span>
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, lineHeight: 1.6, color: '#333', background: '#fff5f5', padding: '10px 12px', border: `2px dashed ${colors.red}` }}>
							"Hi, my name is X. <span style={{ background: 'rgba(231,60,79,0.25)', padding: '0 4px', fontWeight: 800, color: colors.red }}>I graduated from University of Sydney with a Master's in Computer Science.</span> I have 3 years of experience as a software engineer. I've worked at Company A and Company B. I'm familiar with Python, JavaScript, React, and AI. I'm looking for new opportunities..."
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							{badPoints.map((p, i) => (
								<div key={i} style={{ fontSize: 12, color: colors.red, fontWeight: 700, lineHeight: 1.4 }}>{p}</div>
							))}
						</div>
					</motion.div>

					{/* 好版本 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.35 }}
						style={{ background: colors.white, border: `3px solid ${colors.green}`, boxShadow: `5px 5px 0 ${colors.green}`, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<span style={{ padding: '3px 10px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border: `2px solid ${colors.black}` }}>
								✅ 好版本
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', fontWeight: 700 }}>定位 → 项目 → 量化 → 关联</span>
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, lineHeight: 1.5, color: '#222', background: '#f4faf2', padding: '10px 12px', border: `2px dashed ${colors.green}` }}>
							<div>"I've been shipping LLM features in production for the last 18 months. Most recently I architected a <b>hybrid-search RAG</b> over 12k internal docs with <b>Cohere Rerank</b>, hitting <b>RAGAS Faithfulness 0.91</b> and serving <b>80k queries/day at $0.004/query</b>.</div>
							<div style={{ marginTop: 6 }}>Before that, I built a <b>5-agent LangGraph workflow</b> that replaced 3 manual hires.</div>
							<div style={{ marginTop: 6 }}>I'm here because your team is doing <b>serious work on agentic systems</b>, and I want to bring that production discipline to your stack."</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							{goodPoints.map((p, i) => (
								<div key={i} style={{ fontSize: 12, color: '#1a7f37', fontWeight: 700, lineHeight: 1.4 }}>{p}</div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 必命中清单 + 3 个 hook 开头句 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 14 }}>
					{/* 必命中技术栈清单 */}
					<div style={{ background: colors.yellow, border, boxShadow: shadowSm, padding: '10px 12px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 900, color: colors.black, marginBottom: 4, letterSpacing: 0.5 }}>
							60 秒必命中 · 至少念出来 3 个
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 12, color: colors.black, fontWeight: 700, lineHeight: 1.45 }}>
							具体技术栈名 — <strong>不 general 才有信</strong>：
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.black, lineHeight: 1.5, marginTop: 4, fontWeight: 600 }}>
							RAG · Cohere Rerank · pgvector · LangGraph · MCP Server · Mem0 · RAGAS · LangSmith · Cursor / Claude Code · Bedrock · vLLM
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 11.5, color: colors.red, fontWeight: 800, marginTop: 6, lineHeight: 1.4 }}>
							⚠ 只说 "AI / LLM / ChatGPT" = 零信息 = 自动 reject
						</div>
					</div>
					{/* 3 个 hook 开头句 */}
					<div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 800, color: '#444', marginBottom: 6, letterSpacing: 0.5 }}>
							3 个 HOOK 开头句 · 按场景选（全部反 Junior frame）
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
							{hooks.map((h, i) => (
								<div key={i} style={{ border, background: colors.white, boxShadow: `3px 3px 0 ${colors.black}`, padding: '8px 10px' }}>
									<div style={{ display: 'inline-block', padding: '2px 8px', background: h.color, color: colors.white, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, marginBottom: 5 }}>
										{h.scenario}
									</div>
									<div style={{ fontSize: 11.5, fontFamily: fonts.mono, color: '#333', lineHeight: 1.45 }}>{h.line}</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-flex', padding: '8px 18px', background: colors.black, color: colors.white, fontFamily: fonts.heading, fontSize: 16, fontWeight: 800, border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>
						60 秒能让面试官记住你 <span style={{ color: colors.yellow, margin: '0 6px' }}>1 个亮点</span> = 成功
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused_shadow = shadow;
