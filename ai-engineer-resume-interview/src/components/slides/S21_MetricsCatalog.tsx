import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S21 — LLM 项目可以量化的 25 个指标
 * 5 大类 × 5 个具体指标
 */

interface MetricCategory {
	num: string;
	title: string;
	icon: string;
	color: string;
	items: string[];
}

const categories: MetricCategory[] = [
	{
		num: '01',
		title: '质量指标',
		icon: '🎯',
		color: colors.p1,
		items: [
			'Accuracy / F1 / Precision / Recall',
			'RAGAS: Context Recall / Faithfulness / Answer Relevance',
			'LLM-as-Judge score',
			'Hallucination rate',
			'Eval set pass rate',
		],
	},
	{
		num: '02',
		title: '成本指标',
		icon: '💰',
		color: colors.p5,
		items: [
			'$/query · $/1k tokens · $/user/month',
			'Input vs Output token ratio',
			'Cache hit rate (Prompt Caching)',
			'Model routing 后的 weighted cost',
			'Batch API cost reduction %',
		],
	},
	{
		num: '03',
		title: '性能指标',
		icon: '⚡',
		color: colors.p3,
		items: [
			'p50 / p95 / p99 latency',
			'Time to First Token (TTFT)',
			'Tokens/second throughput',
			'Concurrent users supported',
			'Timeout / retry rate',
		],
	},
	{
		num: '04',
		title: '业务指标',
		icon: '📈',
		color: colors.p7,
		items: [
			'转化率 · Deflection rate · NPS · CSAT',
			'用户量 · 处理 query 量 · DAU',
			'工时节省 (hours/week saved)',
			'人力替代率 (FTE equivalent)',
			'Revenue impact / cost saving',
		],
	},
	{
		num: '05',
		title: '工程指标',
		icon: '🔧',
		color: colors.p9,
		items: [
			'部署到 prod 时间',
			'上线后 incident 数',
			'A/B test win rate',
			'Model version 迭代次数',
			'Coverage / test pass rate',
		],
	},
];

export default function S21_MetricsCatalog() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '18px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
				>
					<span style={{ padding: '5px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}`, letterSpacing: 0.5 }}>
						METRICS CATALOG · 25 KPIs
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						LLM 项目可以量化的 25 个指标
					</span>
				</motion.div>

				{/* 5 大类 grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, minHeight: 0 }}>
					{categories.map((c, i) => (
						<CategoryCard key={c.num} c={c} delay={0.15 + i * 0.08} />
					))}
				</div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.4 }}
					style={{
						marginTop: 14, padding: '12px 18px',
						background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`,
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap',
					}}
				>
					<span style={{ fontSize: 22 }}>📏</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
						每个 bullet 至少挑 <span style={{ background: colors.red, color: colors.white, padding: '0 8px' }}>1 个量化指标</span> — 简历不是文学创作。
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

function CategoryCard({ c, delay }: { c: MetricCategory; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{
				background: colors.white, border, boxShadow: shadowSm,
				padding: '14px 12px', display: 'flex', flexDirection: 'column', minHeight: 0,
			}}
		>
			{/* 顶部 header */}
			<div style={{
				display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
				paddingBottom: 8, borderBottom: `2px solid ${c.color}`,
			}}>
				<div style={{
					width: 30, height: 30, background: c.color, color: colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 13, fontWeight: 900,
					border: `2px solid ${colors.black}`,
				}}>
					{c.num}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
					<div style={{ fontSize: 14, lineHeight: 1 }}>{c.icon}</div>
					<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, color: colors.black, letterSpacing: -0.3, lineHeight: 1.1 }}>
						{c.title}
					</div>
				</div>
			</div>

			{/* 5 个 metric */}
			<ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
				{c.items.map((it, idx) => (
					<li key={idx} style={{
						fontFamily: fonts.mono, fontSize: 10.5, color: colors.black, fontWeight: 700,
						lineHeight: 1.35, marginBottom: 8,
						display: 'flex', gap: 5,
					}}>
						<span style={{ color: c.color, fontWeight: 900, flexShrink: 0 }}>{idx + 1}.</span>
						<span>{it}</span>
					</li>
				))}
			</ul>
		</motion.div>
	);
}
