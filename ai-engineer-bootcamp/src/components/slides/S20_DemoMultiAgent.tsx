import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

/**
 * S20 — Demo ③ Multi-Agent 协作
 * 三角形编排：Researcher (top) / Analyst (bottom-left) / Writer (bottom-right)
 * 中间 LangGraph Orchestrator，三边双向数据流动画循环
 * 配色：colors.p6（橙色）对应 Phase 6 Multi-Agent
 */
export default function S20_DemoMultiAgent() {
	const accent = colors.p6;

	// 三个 Agent 在容器中的百分比坐标（viewBox 1000x580）
	const R = { x: 500, y: 110 };   // Researcher 顶点
	const A = { x: 200, y: 460 };   // Analyst 左下
	const W = { x: 800, y: 460 };   // Writer 右下
	const O = { x: 500, y: 320 };   // Orchestrator 中心

	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景装饰方格 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `linear-gradient(${accent}14 1px, transparent 1px), linear-gradient(90deg, ${accent}14 1px, transparent 1px)`,
				backgroundSize: '48px 48px',
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
						padding: '6px 14px', background: accent, color: colors.black,
						fontFamily: fonts.mono, fontWeight: 800, fontSize: 13,
						border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
					}}>
						DEMO · 3 / 3
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
						Phase 6 · Multi-Agent & Orchestration
					</span>
				</motion.div>

				{/* 大标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(26px, 3.2vw, 40px)',
						fontWeight: 900, lineHeight: 1.15, letterSpacing: -1,
						color: colors.white, marginBottom: 18,
					}}
				>
					<span style={{ display: 'inline-block', background: accent, color: colors.black, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}` }}>
						三个 Agent
					</span>
					{' '}协作完成一次市场调研任务
				</motion.h2>

				{/* 舞台 */}
				<div style={{ position: 'relative', width: '100%', aspectRatio: '1000 / 560', maxHeight: 460 }}>
					{/* SVG 连接线 */}
					<svg viewBox="0 0 1000 580" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
						{/* 三角形三条边 */}
						{[
							{ from: R, to: A, delay: 0 },
							{ from: A, to: W, delay: 0.3 },
							{ from: W, to: R, delay: 0.6 },
						].map((e, i) => (
							<g key={i}>
								<motion.line
									x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y}
									stroke={accent} strokeWidth={3} strokeDasharray="6 8"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 0.55 }}
									transition={{ delay: 0.5 + e.delay, duration: 0.7 }}
								/>
								{/* 循环沿边移动的数据包 */}
								<motion.circle
									r={7}
									fill={colors.yellow}
									stroke={colors.black}
									strokeWidth={2}
									initial={{ cx: e.from.x, cy: e.from.y, opacity: 0 }}
									animate={{
										cx: [e.from.x, e.to.x],
										cy: [e.from.y, e.to.y],
										opacity: [0, 1, 1, 0],
									}}
									transition={{
										duration: 2.2,
										repeat: Infinity,
										delay: 1.3 + e.delay,
										ease: 'easeInOut',
										times: [0, 0.1, 0.85, 1],
									}}
								/>
							</g>
						))}

						{/* Orchestrator 到三个 Agent 的辐射线 */}
						{[R, A, W].map((p, i) => (
							<motion.line
								key={`spoke-${i}`}
								x1={O.x} y1={O.y} x2={p.x} y2={p.y}
								stroke={accent} strokeWidth={1.5} strokeDasharray="3 4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.35 }}
								transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
							/>
						))}
					</svg>

					{/* Researcher Agent — 顶部 */}
					<AgentCard
						posLeft="50%" posTop="3%" posTransform="translate(-50%, 0)"
						color={colors.blue} emoji="🔎" name="Researcher"
						role="搜索 + 读网页"
						delay={0.4}
					/>

					{/* Analyst Agent — 左下 */}
					<AgentCard
						posLeft="7%" posTop="70%" posTransform="none"
						color={colors.green} emoji="📊" name="Analyst"
						role="数据分析 + 对比"
						delay={0.55}
					/>

					{/* Writer Agent — 右下 */}
					<AgentCard
						posLeft="72%" posTop="70%" posTransform="none"
						color={colors.purple} emoji="✍️" name="Writer"
						role="写成报告 · Markdown"
						delay={0.7}
					/>

					{/* LangGraph Orchestrator — 中间 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.9, duration: 0.4 }}
						style={{
							position: 'absolute', left: '50%', top: '48%',
							transform: 'translate(-50%, -50%)',
							background: colors.black, border: `3px solid ${accent}`,
							boxShadow: `5px 5px 0 ${accent}`,
							padding: '10px 16px', minWidth: 180, textAlign: 'center',
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, color: accent, fontWeight: 800, letterSpacing: 1, marginBottom: 3 }}>
							ORCHESTRATOR
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 18, color: colors.white, fontWeight: 900, letterSpacing: -0.5 }}>
							LangGraph
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 700, marginTop: 3 }}>
							state machine · A2A
						</div>
					</motion.div>
				</div>

				{/* 底部说明 + Tag */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.6, duration: 0.4 }}
					style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}
				>
					<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.4vw,18px)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', borderLeft: `4px solid ${accent}`, paddingLeft: 12, lineHeight: 1.4, maxWidth: 640, margin: 0 }}>
						<span style={{ color: accent }}>Phase 6 · L119 · Multi-Agent + LangGraph</span> 你会亲手搭出这套架构
					</p>
					<div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
						{['LangGraph', 'A2A Protocol', 'Agent Ops · LangSmith'].map((t) => (
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

function AgentCard({
	posLeft, posTop, posTransform, color, emoji, name, role, delay,
}: {
	posLeft: string; posTop: string; posTransform: string;
	color: string; emoji: string; name: string; role: string; delay: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{
				position: 'absolute', left: posLeft, top: posTop, transform: posTransform,
				background: colors.white, border: `3px solid ${colors.black}`,
				boxShadow: `5px 5px 0 ${colors.black}`,
				padding: '12px 14px', minWidth: 200,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
				<div style={{
					width: 34, height: 34, background: color, border: `2px solid ${colors.black}`,
					display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
				}}>
					{emoji}
				</div>
				<div>
					<div style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900, color: colors.black, lineHeight: 1, letterSpacing: -0.3 }}>
						{name}
					</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 10, color: '#666', fontWeight: 700, marginTop: 3 }}>
						agent
					</div>
				</div>
			</div>
			<div style={{ fontFamily: fonts.body, fontSize: 12, color: colors.black, fontWeight: 700, lineHeight: 1.3 }}>
				{role}
			</div>
			{/* 工作状态灯 */}
			<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
				<motion.div
					animate={{ opacity: [1, 0.25, 1] }}
					transition={{ duration: 1.2, repeat: Infinity }}
					style={{ width: 8, height: 8, background: colors.green, borderRadius: '50%', border: `1.5px solid ${colors.black}` }}
				/>
				<span style={{ fontFamily: fonts.mono, fontSize: 10, color: '#444', fontWeight: 700 }}>working…</span>
			</div>
		</motion.div>
	);
}
