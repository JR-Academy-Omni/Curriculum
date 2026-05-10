import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

export default function L05b_WhyRenamedAiEngineer() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, transform: 'rotate(-1.5deg)', marginBottom: 14,
					}}>
						🔄 RENAMING · COHORT #30
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						为什么 30 期开始改名叫<br />
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, marginTop: 8,
						}}>
							AI Engineer 全栈项目班
						</span>
					</h2>
				</motion.div>

				{/* 全栈班 → AI Engineer 演进箭头 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					style={{
						display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 18,
						alignItems: 'center', marginBottom: 18,
					}}
				>
					<div style={{
						background: colors.white, border, boxShadow: shadowSm,
						padding: '18px 22px', textAlign: 'center', opacity: 0.7,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, color: '#888',
							fontWeight: 800, letterSpacing: 2, marginBottom: 6,
						}}>
							#1 — #29 · 2017-2025
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							color: colors.black, letterSpacing: -0.5, lineHeight: 1.1,
						}}>
							AI Web 全栈班
						</div>
						<div style={{
							marginTop: 8, fontFamily: fonts.body, fontSize: 16, color: '#666',
							fontWeight: 600, lineHeight: 1.4,
						}}>
							React + Node + MongoDB + AWS · AI 接入是模块 / 后期补
						</div>
					</div>

					<div style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						color: colors.red, lineHeight: 1, padding: '0 4px',
					}}>
						→
					</div>

					<div style={{
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.red}`,
						padding: '18px 22px', textAlign: 'center',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, color: colors.yellow,
							fontWeight: 800, letterSpacing: 2, marginBottom: 6,
						}}>
							#30 + · 2026 →
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							color: colors.white, letterSpacing: -0.5, lineHeight: 1.1,
						}}>
							AI Engineer 全栈项目班
						</div>
						<div style={{
							marginTop: 8, fontFamily: fonts.body, fontSize: 16, color: 'rgba(255,255,255,0.85)',
							fontWeight: 600, lineHeight: 1.4,
						}}>
							同样 React + Node + Cloud · 但 AI Coding 贯穿全程 · AI 基本功 = 必修
						</div>
					</div>
				</motion.div>

				{/* 核心理由：未来只剩一种工程师 */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					style={{
						background: colors.indigo, color: colors.white,
						border, boxShadow: `8px 8px 0 ${colors.yellow}`,
						padding: '22px 28px', marginBottom: 18,
					}}
				>
					<div style={{
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
						color: colors.yellow, letterSpacing: 2, marginBottom: 10,
					}}>
						为什么必须改名
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
						lineHeight: 1.3, letterSpacing: -0.5,
					}}>
						因为未来短期内 · 工程师{' '}
						<span style={{
							background: colors.yellow, color: colors.black,
							padding: '0 10px', border: `3px solid ${colors.black}`,
						}}>只剩一种活法</span>{' '}
						= AI Engineer
					</div>
				</motion.div>

				{/* 两条必修 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.7 }}
					style={{
						display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
					}}
				>
					<div style={{
						background: colors.white, border, boxShadow: shadow,
						padding: '18px 22px', borderTop: `8px solid ${colors.purple}`,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
							color: colors.purple, letterSpacing: 2, marginBottom: 8,
						}}>
							必修 · 第 1 件
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
							color: colors.black, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 8,
						}}>
							AI 基本功
						</div>
						<div style={{
							fontFamily: fonts.body, fontSize: 18, color: '#444',
							fontWeight: 600, lineHeight: 1.5,
						}}>
							Prompt Engineering · RAG · Agent · MCP · LLMOps · Vector DB · Evaluation — 不是选修，是底层语法
						</div>
					</div>
					<div style={{
						background: colors.white, border, boxShadow: shadow,
						padding: '18px 22px', borderTop: `8px solid ${colors.red}`,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 900,
							color: colors.red, letterSpacing: 2, marginBottom: 8,
						}}>
							必修 · 第 2 件
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
							color: colors.black, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 8,
						}}>
							AI Coding
						</div>
						<div style={{
							fontFamily: fonts.body, fontSize: 18, color: '#444',
							fontWeight: 600, lineHeight: 1.5,
						}}>
							Cursor / Claude Code / Vibe Coding — 6 个月项目全程用 · 不是"试一下"，是日常工作流
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
