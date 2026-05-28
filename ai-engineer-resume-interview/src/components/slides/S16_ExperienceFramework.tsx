import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S16 — 简历经验描述公式
 * [动词] + [具体技术栈] + [for 业务目标] + [量化结果 + LLM 指标]
 * 4 变量 × 每个 1 块 good/bad 对照
 */

interface Variable {
	num: string;
	name: string;
	subtitle: string;
	good: string[];
	bad: string[];
	color: string;
}

const variables: Variable[] = [
	{
		num: '01',
		name: '动词',
		subtitle: '强动作词，明确"你做了什么"',
		good: ['Built', 'Architected', 'Designed', 'Shipped', 'Reduced', 'Improved', 'Migrated', 'Automated'],
		bad: ['Worked on', 'Helped with', 'Was involved in', 'Familiar with', 'Assisted', 'Participated in'],
		color: colors.p1,
	},
	{
		num: '02',
		name: '具体技术栈',
		subtitle: '接 Skills section 口径，工具 + 版本',
		good: [
			'LangGraph multi-agent',
			'hybrid-search RAG (BM25 + pgvector + Cohere Rerank)',
			'vLLM-served Qwen-2.5-72B',
		],
		bad: ['AI tools', 'LLM-based system', 'some AI features', 'cutting-edge models'],
		color: colors.p3,
	},
	{
		num: '03',
		name: 'for 业务目标',
		subtitle: '业务对齐，让 HR 看懂"做来干嘛"',
		good: [
			'for invoice extraction',
			'for customer support deflection',
			'for code review automation',
		],
		bad: ['for AI use case', 'for innovation', 'for digital transformation', 'for enterprise solutions'],
		color: colors.p5,
	},
	{
		num: '04',
		name: '量化结果 + LLM 指标',
		subtitle: '业务 + LLM 双轨指标（缺一不可）',
		good: [
			'accuracy 67% → 94%',
			'cost $0.003/query · p95 latency 800ms',
			'1M req/day · deflection rate 41%',
		],
		bad: ['improved efficiency', 'significantly reduced cost', 'enhanced user experience'],
		color: colors.p7,
	},
];

export default function S16_ExperienceFramework() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
				>
					<span style={{ padding: '5px 12px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						MODULE 03 · EXPERIENCE
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						简历经验 · 一个公式 4 个变量
					</span>
				</motion.div>

				{/* 公式横幅 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.15, duration: 0.4 }}
					style={{
						background: colors.dark, border, boxShadow: `5px 5px 0 ${colors.red}`,
						padding: '14px 20px', marginBottom: 16,
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
						flexWrap: 'wrap',
					}}
				>
					<FormulaToken text="[动词]" color={colors.p1} />
					<Plus />
					<FormulaToken text="[具体技术栈]" color={colors.p3} />
					<Plus />
					<FormulaToken text="[for 业务目标]" color={colors.p5} />
					<Plus />
					<FormulaToken text="[量化结果 + LLM 指标]" color={colors.p7} />
				</motion.div>

				{/* 4 变量 grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, minHeight: 0 }}>
					{variables.map((v, i) => (
						<VariableCard key={v.num} v={v} delay={0.3 + i * 0.08} />
					))}
				</div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.4 }}
					style={{
						marginTop: 14, padding: '12px 18px',
						background: colors.yellow, border, boxShadow: shadow,
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
					}}
				>
					<span style={{ fontSize: 22 }}>⚠️</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
						没有这 4 个变量 = 不要写。
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

function FormulaToken({ text, color }: { text: string; color: string }) {
	return (
		<span style={{
			padding: '6px 12px', background: color, color: colors.white,
			fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
			border: `2px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
			letterSpacing: -0.3,
		}}>
			{text}
		</span>
	);
}

function Plus() {
	return (
		<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.white }}>+</span>
	);
}

function VariableCard({ v, delay }: { v: Variable; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{
				background: colors.white, border, boxShadow: shadowSm,
				padding: '14px 14px', display: 'flex', flexDirection: 'column', minHeight: 0,
			}}
		>
			{/* 编号 + 名字 */}
			<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
				<div style={{
					width: 30, height: 30, background: v.color, color: colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 14, fontWeight: 900,
					border: `2px solid ${colors.black}`,
				}}>
					{v.num}
				</div>
				<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
					{v.name}
				</div>
			</div>
			<div style={{ fontFamily: fonts.body, fontSize: 12, color: '#555', fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>
				{v.subtitle}
			</div>

			{/* ✅ */}
			<div style={{ background: '#e8f5e9', border: `2px solid ${colors.green}`, padding: '8px 10px', marginBottom: 6 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: '#1b5e20', letterSpacing: 1, marginBottom: 4 }}>
					✓ 这样写
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
					{v.good.map((g) => (
						<div key={g} style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.black, fontWeight: 700, lineHeight: 1.3 }}>
							{g}
						</div>
					))}
				</div>
			</div>

			{/* ❌ */}
			<div style={{ background: '#ffebee', border: `2px solid ${colors.red}`, padding: '8px 10px' }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: '#b71c1c', letterSpacing: 1, marginBottom: 4 }}>
					✗ 别这样写
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
					{v.bad.map((b) => (
						<div key={b} style={{ fontFamily: fonts.mono, fontSize: 11, color: '#555', fontWeight: 700, lineHeight: 1.3, textDecoration: 'line-through' }}>
							{b}
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
