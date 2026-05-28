import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S25 — System Design 真题：客服 AI Agent 1M query/day
 * 5 步答题骨架，每步独立卡
 */

interface Step {
	num: string;
	title: string;
	time: string;
	color: string;
	bullets: string[];
}

const steps: Step[] = [
	{
		num: '01',
		title: '澄清需求',
		time: '5 min',
		color: colors.p1,
		bullets: [
			'query 类型分布：FAQ 60% / 订单查询 30% / 复杂咨询 10%',
			'语言：中文为主',
			'是否需要工单升级到人工：是',
			'SLA：p95 < 2s，可用性 99.9%',
		],
	},
	{
		num: '02',
		title: '高层架构',
		time: '10 min',
		color: colors.p3,
		bullets: [
			'Web Chat Widget (SSE streaming) → API Gateway (rate limit + auth)',
			'Router 意图分类：用便宜模型 Claude Haiku / GPT-4o-mini',
			'FAQ → RAG flow · 订单 → Function calling 查 DB · 复杂 → Sonnet · 闹脾气 → 人工',
			'RAG：12k FAQ → pgvector + BM25 + Cohere Rerank',
			'LLM：Bedrock Claude Sonnet 4 + Fallback OpenAI GPT-4o',
			'Semantic Cache (高频问 hit rate ~40%) · LangSmith trace + nightly RAGAS eval',
		],
	},
	{
		num: '03',
		title: '成本估算',
		time: '5 min',
		color: colors.p5,
		bullets: [
			'1M query/day × 40% cache hit = 600k 真实调用',
			'60% FAQ × Haiku $0.001/q = $360',
			'30% 订单 × GPT-4o-mini $0.0008/q = $144',
			'10% 复杂 × Sonnet $0.008/q = $480',
			'Total ≈ $700/day · 留 30% buffer 给 retry / eval / monitor',
		],
	},
	{
		num: '04',
		title: '失败模式',
		time: '5 min',
		color: colors.p6,
		bullets: [
			'LLM down → fallback chain (Anthropic → OpenAI → self-hosted)',
			'Hallucination → RAG grounding + structured output + eval gate',
			'Spam / abuse → rate limit + 用户 token bucket',
			'Cost 爆了 → prompt caching + alert + 自动降级到便宜模型',
		],
	},
	{
		num: '05',
		title: '上线策略',
		time: '5 min',
		color: colors.p8,
		bullets: [
			'Shadow mode 1 周（双跑不返回，对比答案）',
			'Canary 5% 1 周',
			'A/B vs old FAQ system (deflection rate / CSAT)',
			'全量切换 + 24/7 LangSmith monitor',
		],
	},
];

export default function S25_SystemDesignCase() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '96%', maxWidth: 1480, height: '92%', padding: '20px 18px',
				display: 'flex', flexDirection: 'column', gap: 12,
			}}>
				{/* 标题 + 题目 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<span style={{
						padding: '4px 12px', background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 2,
						border, boxShadow: shadowSm,
					}}>
						SYSTEM DESIGN · REAL CASE
					</span>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '36px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: '8px 0 4px',
					}}>
						客服 AI Agent · <span style={{
							display: 'inline-block', padding: '0 10px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>1M query/day</span>
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: 12, color: '#555', fontWeight: 700,
						margin: '4px 0 0', letterSpacing: 0.3,
					}}>
						峰值 200 QPS · cost &lt; $1000/day · p95 latency &lt; 2s · hallucination 可控
					</p>
				</motion.div>

				{/* 5 步卡片 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
					style={{
						display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
						gap: 10, flex: 1, minHeight: 0,
					}}
				>
					{steps.map((s) => (
						<motion.div
							key={s.num}
							variants={{
								hidden: { opacity: 0, y: 24 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{
								background: colors.white,
								border, boxShadow: shadow,
								display: 'flex', flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
							{/* 顶部色条 */}
							<div style={{
								background: s.color, color: colors.white,
								padding: '8px 10px',
								borderBottom: `3px solid ${colors.black}`,
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
							}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>
										STEP {s.num}
									</span>
								</div>
								<span style={{
									fontFamily: fonts.mono, fontSize: 10, fontWeight: 700,
									padding: '2px 6px', background: 'rgba(0,0,0,0.25)',
								}}>
									{s.time}
								</span>
							</div>

							{/* 标题 */}
							<div style={{
								padding: '8px 10px 4px',
								fontFamily: fonts.heading, fontSize: 16, fontWeight: 900,
								color: colors.black,
							}}>
								{s.title}
							</div>

							{/* bullets */}
							<div style={{ padding: '4px 10px 10px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
								{s.bullets.map((b, i) => (
									<div key={i} style={{
										fontSize: 10.5, color: '#333', lineHeight: 1.35,
										paddingLeft: 8, position: 'relative', fontWeight: 500,
									}}>
										<span style={{
											position: 'absolute', left: 0, top: 0,
											color: s.color, fontWeight: 900,
										}}>
											•
										</span>
										{b}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
						padding: '8px 16px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>
						先讲清楚 <span style={{ color: colors.yellow }}>5 步骨架</span> →
						再深挖面试官追问的点（cost / fallback / eval 最常被深挖）
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
