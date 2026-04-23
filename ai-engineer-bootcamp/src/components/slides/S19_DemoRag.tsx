import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

/**
 * S19 — Demo ② RAG QA 系统问答
 * 从左到右的 5-step Pipeline 动画，最后显示答案片段
 * 配色：colors.p3（蓝色）对应 Phase 3 RAG
 */
export default function S19_DemoRag() {
	// step: 0=无, 1=Query, 2=Embedding, 3=VectorDB, 4=Rerank, 5=LLM, 6=最终答案
	const [step, setStep] = useState(0);

	useEffect(() => {
		const timers = [
			setTimeout(() => setStep(1), 400),
			setTimeout(() => setStep(2), 1100),
			setTimeout(() => setStep(3), 1800),
			setTimeout(() => setStep(4), 2500),
			setTimeout(() => setStep(5), 3200),
			setTimeout(() => setStep(6), 4000),
		];
		return () => timers.forEach(clearTimeout);
	}, []);

	const accent = colors.p3;

	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景装饰斜纹 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, ${accent}0a 0 2px, transparent 2px 18px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: 32 }}>
				{/* 顶部小标题 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}
				>
					<span style={{
						padding: '6px 14px', background: accent, color: colors.white,
						fontFamily: fonts.mono, fontWeight: 800, fontSize: 13,
						border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
					}}>
						DEMO · 2 / 3
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
						Phase 3 · RAG · 45 Lessons
					</span>
				</motion.div>

				{/* 大标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading, fontSize: '42px',
						fontWeight: 900, lineHeight: 1.15, letterSpacing: -1,
						color: colors.white, marginBottom: 28,
					}}
				>
					再看一个{' '}
					<span style={{ display: 'inline-block', background: accent, color: colors.white, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}` }}>
						RAG QA
					</span>{' '}
					系统的问答链路
				</motion.h2>

				{/* Pipeline: 5 steps */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: '1.3fr 0.9fr 1.1fr 1fr 1.2fr',
					gap: 10, alignItems: 'stretch', marginTop: 10,
				}}>
					<PipeCard visible={step >= 1} index={1} title="User Query">
						<div style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.black, lineHeight: 1.5, fontWeight: 600 }}>
							{'> '}What's the difference between <span style={{ background: colors.yellow, padding: '0 3px' }}>GraphRAG</span> and naive RAG?
						</div>
					</PipeCard>

					<PipeCard visible={step >= 2} index={2} title="Embedding">
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '4px 0' }}>
							{[0, 1, 2, 3].map((i) => (
								<motion.div
									key={i}
									initial={{ width: '20%' }}
									animate={{ width: step >= 2 ? `${60 + ((i * 17) % 35)}%` : '20%' }}
									transition={{ delay: 0.05 * i, duration: 0.4 }}
									style={{ height: 6, background: accent, border: `1.5px solid ${colors.black}` }}
								/>
							))}
							<div style={{ fontFamily: fonts.mono, fontSize: 10, color: '#555', fontWeight: 700, marginTop: 4 }}>
								vec[1536]
							</div>
						</div>
					</PipeCard>

					<PipeCard visible={step >= 3} index={3} title="Vector DB">
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
							{['chunk_42 · GraphRAG 介绍', 'chunk_88 · naive RAG 流程', 'chunk_11 · 对比评测'].map((txt, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -8 }}
									animate={{
										opacity: step >= 3 ? 1 : 0,
										x: step >= 3 ? 0 : -8,
										background: step >= 3 ? (i === 0 ? accent : colors.white) : colors.white,
										color: step >= 3 && i === 0 ? colors.white : colors.black,
									}}
									transition={{ delay: 0.1 * i, duration: 0.3 }}
									style={{
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 700,
										padding: '3px 6px', border: `1.5px solid ${colors.black}`, lineHeight: 1.3,
									}}
								>
									{txt}
								</motion.div>
							))}
						</div>
					</PipeCard>

					<PipeCard visible={step >= 4} index={4} title="Re-rank">
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
							{[
								{ k: 'chunk_42', s: '0.94' },
								{ k: 'chunk_11', s: '0.81' },
								{ k: 'chunk_88', s: '0.72' },
							].map((c, i) => (
								<motion.div
									key={c.k}
									initial={{ y: -4, opacity: 0 }}
									animate={{ y: 0, opacity: step >= 4 ? 1 : 0 }}
									transition={{ delay: 0.1 * i, duration: 0.3 }}
									style={{
										display: 'flex', justifyContent: 'space-between',
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 700,
										padding: '3px 6px', background: i === 0 ? colors.yellow : colors.white,
										border: `1.5px solid ${colors.black}`,
									}}
								>
									<span>{c.k}</span>
									<span>{c.s}</span>
								</motion.div>
							))}
						</div>
					</PipeCard>

					<PipeCard visible={step >= 5} index={5} title="LLM · GPT-4o">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: step >= 5 ? 1 : 0 }}
							transition={{ duration: 0.4 }}
							style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.black, lineHeight: 1.45, fontWeight: 600 }}
						>
							<span style={{ display: 'inline-block', width: 8, height: 8, background: colors.green, borderRadius: '50%', marginRight: 6 }} />
							generating…
						</motion.div>
					</PipeCard>
				</div>

				{/* 答案片段 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: step >= 6 ? 1 : 0, y: step >= 6 ? 0 : 14 }}
					transition={{ duration: 0.5 }}
					style={{
						marginTop: 22, padding: '18px 20px',
						background: colors.white, border: `3px solid ${colors.black}`,
						boxShadow: `6px 6px 0 ${accent}`,
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
						<span style={{
							padding: '3px 10px', background: colors.black, color: accent,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 0.5,
						}}>
							ANSWER
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, color: '#888', fontWeight: 700 }}>
							sources: chunk_42, chunk_11
						</span>
					</div>
					<div style={{ fontFamily: fonts.body, fontSize: '17px', color: colors.black, fontWeight: 700, lineHeight: 1.5 }}>
						GraphRAG 在检索前引入 <span style={{ background: colors.yellow, padding: '0 4px' }}>knowledge graph</span>，把实体关系显式建模，适合复杂关系推理；naive RAG 只做单跳 vector similarity，遇到多实体交叉问题就会丢信息。
					</div>
				</motion.div>

				{/* 底部 Tag + 说明 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: step >= 6 ? 1 : 0 }}
					transition={{ delay: 0.3 }}
					style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}
				>
					<p style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', borderLeft: `4px solid ${accent}`, paddingLeft: 12, lineHeight: 1.4, maxWidth: 640, margin: 0 }}>
						<span style={{ color: accent }}>Phase 3 · L59 · RAG from Scratch</span> 你会亲手写出这套 Pipeline
					</p>
					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{['LangChain', 'Chroma', 'Cohere Re-rank', 'GPT-4o'].map((t) => (
							<span key={t} style={{
								padding: '5px 10px', fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
								color: accent, border: `2px solid ${accent}`,
							}}>
								{t}
							</span>
						))}
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}

/* ---------- helpers ---------- */

function PipeCard({ visible, index, title, children }: {
	visible: boolean; index: number; title: string; children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
			transition={{ duration: 0.4 }}
			style={{
				background: colors.white, border: `3px solid ${colors.black}`,
				padding: '12px 12px', boxShadow: `4px 4px 0 ${colors.black}`,
				display: 'flex', flexDirection: 'column', minHeight: 140,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
				<div style={{
					width: 22, height: 22, background: colors.black, color: colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.mono, fontSize: 12, fontWeight: 900,
				}}>
					{index}
				</div>
				<div style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
					{title}
				</div>
			</div>
			<div style={{ flex: 1 }}>{children}</div>
		</motion.div>
	);
}
