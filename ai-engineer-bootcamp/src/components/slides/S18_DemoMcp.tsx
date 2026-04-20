import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts } from '../ui';

/**
 * S18 — Demo ① MCP Server 调用业务工具
 * 用 framer-motion 分步骤动画重现一次 MCP 调用（不是真 GIF）
 * 配色：colors.p4（青色）对应 Phase 4 Capability Layer
 */
export default function S18_DemoMcp() {
	// step 0=空，1=用户输入出现，2=MCP 调用出现，3=Claude 回复出现
	const [step, setStep] = useState(0);

	useEffect(() => {
		const timers = [
			setTimeout(() => setStep(1), 500),
			setTimeout(() => setStep(2), 1500),
			setTimeout(() => setStep(3), 2700),
		];
		return () => timers.forEach(clearTimeout);
	}, []);

	const accent = colors.p4;

	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景装饰网格点 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `radial-gradient(${accent}33 1px, transparent 1px)`,
				backgroundSize: '32px 32px', opacity: 0.4,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1400, padding: 36 }}>
				{/* 顶部小标题 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}
				>
					<span style={{
						padding: '6px 14px', background: accent, color: colors.black,
						fontFamily: fonts.mono, fontWeight: 800, fontSize: 13,
						border: `3px solid ${colors.black}`, boxShadow: `3px 3px 0 ${colors.black}`,
					}}>
						DEMO · 1 / 3
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
						Phase 4 · Capability Layer · MCP
					</span>
				</motion.div>

				{/* 大标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					style={{
						fontFamily: fonts.heading, fontSize: 'clamp(26px, 3.2vw, 42px)',
						fontWeight: 900, lineHeight: 1.15, letterSpacing: -1,
						color: colors.white, marginBottom: 36,
					}}
				>
					看一个{' '}
					<span style={{ display: 'inline-block', background: accent, color: colors.black, padding: '0 10px', border: `3px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}` }}>
						MCP Server
					</span>{' '}
					在 Claude Code 里跑起来是什么样
				</motion.h2>

				{/* 主体流程图 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 16, alignItems: 'center', marginTop: 20 }}>
					{/* STEP 1 — 用户输入 */}
					<StepCard
						visible={step >= 1}
						label="① USER · Claude Code"
						labelBg={colors.yellow}
						labelColor={colors.black}
						title="帮我查一下第五期 Syllabus 有多少节课"
						sub="> _"
					/>

					{/* 箭头 1 */}
					<Arrow visible={step >= 2} color={accent} />

					{/* STEP 2 — MCP Server（脉冲光晕） */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 20 }}
						transition={{ duration: 0.4 }}
						style={{ position: 'relative' }}
					>
						{step >= 2 && (
							<>
								<motion.div
									animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0, 0.45] }}
									transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
									style={{ position: 'absolute', inset: -12, background: accent, borderRadius: 6, filter: 'blur(14px)' }}
								/>
								<motion.div
									animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0, 0.25] }}
									transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
									style={{ position: 'absolute', inset: -12, background: accent, borderRadius: 6, filter: 'blur(24px)' }}
								/>
							</>
						)}
						<div style={{
							position: 'relative', background: colors.black, border: `3px solid ${accent}`,
							padding: '18px 16px', boxShadow: `5px 5px 0 ${accent}`, color: colors.white,
						}}>
							<div style={{ fontFamily: fonts.mono, fontSize: 11, color: accent, fontWeight: 800, marginBottom: 6, letterSpacing: 1 }}>
								② MCP SERVER
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, lineHeight: 1.4, wordBreak: 'break-all' }}>
								jr-academy-mcp<br />
								<span style={{ color: accent }}>.getSyllabus()</span>
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.55)', marginTop: 10, lineHeight: 1.5 }}>
								tool_use_id: 01a...<br />
								GET /api/bootcamps/v5
							</div>
						</div>
					</motion.div>

					{/* 箭头 2 */}
					<Arrow visible={step >= 3} color={accent} />

					{/* STEP 3 — Claude 回复 */}
					<StepCard
						visible={step >= 3}
						label="③ CLAUDE · Response"
						labelBg={colors.teal}
						labelColor={colors.white}
						title="第五期共 183 节课"
						sub="10 Phase · 59 Live · 68 Labs"
					/>
				</div>

				{/* 底部说明 + Tag */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: step >= 3 ? 1 : 0 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					style={{ marginTop: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}
				>
					<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,20px)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', borderLeft: `4px solid ${accent}`, paddingLeft: 14, lineHeight: 1.4, maxWidth: 680, margin: 0 }}>
						这不是录屏 —— 是 <span style={{ color: accent }}>Phase 4 · L100</span> 你会亲手写出的 MCP Server
					</p>
					<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
						{['MCP Server', 'Tool Use', 'Production Integration'].map((t) => (
							<span key={t} style={{
								padding: '6px 12px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800,
								background: 'transparent', color: accent, border: `2px solid ${accent}`,
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

function StepCard({
	visible, label, labelBg, labelColor, title, sub,
}: {
	visible: boolean; label: string; labelBg: string; labelColor: string; title: string; sub: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
			transition={{ duration: 0.4 }}
			style={{
				background: colors.white, border: `3px solid ${colors.black}`,
				padding: '18px 16px', boxShadow: `5px 5px 0 ${colors.black}`,
			}}
		>
			<div style={{
				display: 'inline-block', padding: '3px 10px', background: labelBg, color: labelColor,
				fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 0.5,
				border: `2px solid ${colors.black}`, marginBottom: 10,
			}}>
				{label}
			</div>
			<div style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 800, color: colors.black, lineHeight: 1.4, marginBottom: 6 }}>
				{title}
			</div>
			<div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#666', fontWeight: 600 }}>
				{sub}
			</div>
		</motion.div>
	);
}

function Arrow({ visible, color }: { visible: boolean; color: string }) {
	return (
		<svg viewBox="0 0 80 24" style={{ width: 64, height: 24 }}>
			<motion.path
				d="M 2 12 L 70 12"
				stroke={color} strokeWidth={3} fill="none" strokeLinecap="round"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: visible ? 1 : 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			/>
			<motion.path
				d="M 62 4 L 74 12 L 62 20"
				stroke={color} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round"
				initial={{ opacity: 0 }}
				animate={{ opacity: visible ? 1 : 0 }}
				transition={{ duration: 0.3, delay: 0.4 }}
			/>
		</svg>
	);
}
