import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoFrame from './VideoFrame';

const PIPELINE = [
	{ p: 'P1', name: 'Landing Page', sub: 'CareerMate AI 官网\nHTML / CSS / JS / React', color: colors.blue },
	{ p: 'P2', name: 'Auth + Dashboard', sub: 'Login · Register\nNode.js · API · MongoDB', color: colors.green },
	{ p: 'P3', name: 'AI Chatbot + RAG', sub: 'Streaming · OpenAI\nVector DB · Retrieval', color: colors.red },
];

export default function L16_CareerMateIntro() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoFrame
				src="videos/square-1.mp4"
				width={260} height={260}
				position={{ top: 56, right: 64 }}
				rotate={-2}
				caption="CAPSTONE PRODUCT"
			/>
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.orange, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 14,
					}}>
						05 · CAPSTONE PROJECT
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						3 个月你会造出<br />
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 18px', border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`, transform: 'rotate(-1deg)', marginTop: 8,
						}}>
							CareerMate AI
						</span>
					</h2>
					<div style={{
						marginTop: 14, fontFamily: fonts.body, fontSize: 22, color: '#444',
						fontWeight: 600, lineHeight: 1.4, maxWidth: 1100,
					}}>
						一个真实可上线的 AI 求职助手 — 简历优化 + 面试模拟 + 岗位推荐 + Streaming Chat。
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{PIPELINE.map((p, i) => (
						<motion.div
							key={p.p}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
							style={{
								background: colors.white, border, boxShadow: shadow,
								padding: '20px 22px', position: 'relative',
								borderTop: `8px solid ${p.color}`,
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
								<div style={{
									width: 56, height: 56, background: p.color, color: colors.white,
									border: `3px solid ${colors.black}`, boxShadow: shadowSm,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, letterSpacing: -0.5,
								}}>
									{p.p}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
									color: colors.black, lineHeight: 1.1, letterSpacing: -0.5,
								}}>
									{p.name}
								</div>
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 17, color: '#555',
								fontWeight: 700, lineHeight: 1.5, whiteSpace: 'pre-line',
							}}>
								{p.sub}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 24,
						display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
					}}
				>
					<div style={{
						background: colors.indigo, color: colors.white,
						border, boxShadow: shadow, padding: '18px 22px',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.yellow, letterSpacing: 2, marginBottom: 8,
						}}>
							为什么不是 todo / weather app
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, lineHeight: 1.5 }}>
							CareerMate AI = production-grade 项目（已经在 jiangren.com.au 跑生产）。结业可以放简历、推 GitHub、给面试官 Demo。
						</div>
					</div>
					<div style={{
						background: colors.white, border, boxShadow: shadow, padding: '18px 22px',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.red, letterSpacing: 2, marginBottom: 8,
						}}>
							三个项目 = 渐进式
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 20, color: '#333', fontWeight: 600, lineHeight: 1.5 }}>
							P1 → P2 → P3 不是 3 个 demo，是同一产品 3 个版本：先做 landing page，再加 Dashboard，再上 AI 能力。
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
