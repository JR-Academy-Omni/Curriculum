import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S18 — 改写 Case 1：RAG 客服系统
 * Before vs After 左右对照 + 5 升级点
 */

const beforeText = `- Built a chatbot for customer support using
  OpenAI API and LangChain
- Integrated with internal knowledge base
- Reduced support ticket volume`;

const afterBullets: string[] = [
	`Architected hybrid-search RAG over 12k internal docs (BM25 + pgvector + Cohere Rerank v3) for L1 customer support, replacing keyword FAQ system`,
	`Designed RAGAS-based eval pipeline (Context Recall, Faithfulness) driving prompt iteration from 0.71 → 0.91 Faithfulness across 3 sprints`,
	`Deployed via AWS Bedrock with LiteLLM gateway + LangSmith tracing, serving 80k queries/day at p95 latency < 1.2s and $0.004/query`,
	`Result: 41% L1 ticket deflection, $180k/yr support cost reduction, zero hallucinated policy answers in 6-month production window`,
];

const upgrades: { num: string; text: string }[] = [
	{ num: '①', text: '动词：Built → Architected（设计层级提升）' },
	{ num: '②', text: '技术栈：具体到工具 + 版本（BM25 + pgvector + Cohere Rerank v3）' },
	{ num: '③', text: '加 eval 维度：RAGAS Context Recall / Faithfulness' },
	{ num: '④', text: '加 ops 维度：cost $0.004/query · p95 < 1.2s' },
	{ num: '⑤', text: '双轨结果：业务 deflection 41% + LLM faithfulness 0.91' },
];

export default function S18_RewriteCase1() {
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
					<span style={{ padding: '5px 12px', background: colors.p3, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						REWRITE · CASE 01
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						改写 Case 1 · RAG 客服系统
					</span>
				</motion.div>

				{/* Before vs After 左右 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 14, marginBottom: 12 }}>
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
						<BadgeRow icon="❌" label="BEFORE · 学员实际投递版本" color={colors.red} />
						<pre style={{
							fontFamily: fonts.mono, fontSize: 15, color: '#444', fontWeight: 600,
							lineHeight: 1.5, whiteSpace: 'pre-wrap', margin: 0,
							background: '#fff5f5', padding: '10px 12px',
							borderLeft: `4px solid ${colors.red}`,
						}}>
							{beforeText}
						</pre>
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
						<BadgeRow icon="✅" label="AFTER · 90 分钟后你能写出的" color={colors.green} />
						<ul style={{
							listStyle: 'none', margin: 0,
							background: '#f1f8e9', padding: '10px 12px',
							borderLeft: `4px solid ${colors.green}`,
						}}>
							{afterBullets.map((b, i) => (
								<li key={i} style={{
									fontFamily: fonts.mono, fontSize: 14, color: colors.black, fontWeight: 600,
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
				fontFamily: fonts.body, fontSize: 13.5, color: colors.black,
				fontWeight: 700, lineHeight: 1.35,
			}}>
				{u.text}
			</div>
		</motion.div>
	);
}
