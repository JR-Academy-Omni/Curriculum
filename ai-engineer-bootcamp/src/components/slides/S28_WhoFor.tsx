import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const fitList = [
	'有编程基础的后端 / 前端 / 数据工程师（Python / JS / TS / Java 都可以），想转 AI Engineer',
	'在职 DevOps / SRE / 平台工程师，想给团队搭 AI Agent / RAG 平台、把 LLM 接入现有 infra',
	'ML Engineer 想补全 Agent / RAG / MCP 工程化能力',
	'创业者自己下场写 AI 产品，不想只靠外包',
	'AI Adoption / AI Builder 结业后想继续进阶工程化',
	'读博 / 硕中做 LLM 应用方向，缺真实工程训练',
];

const notFitList = [
	'完全零编程基础 —— 建议先学 AI Builder / Vibe Coding',
	'只想"了解 AI"不想写代码 —— 建议去 AI Adoption Bootcamp',
	'想速成 7 天学会 —— 这是 24 周严肃课程，不是速成班',
	'不想做 P3 真实项目 —— P3 是课程核心价值',
];

export default function S28_WhoFor() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1400, height: '90%', padding: '28px 16px',
				display: 'flex', flexDirection: 'column', gap: 20,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						诚实告诉你：<span style={{
							display: 'inline-block', padding: '0 12px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>谁应该报</span>、谁不应该
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: 'clamp(11px,1.2vw,14px)', color: '#555',
						fontWeight: 700, marginTop: 8, letterSpacing: 0.5,
					}}>
						我们不想赚你学不动的钱
					</p>
				</motion.div>

				{/* 两栏 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 20,
					flex: 1,
					minHeight: 0,
				}}>
					{/* 适合 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							padding: '10px 16px', background: colors.green, color: colors.black,
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', alignItems: 'center', gap: 10,
						}}>
							<div style={{
								width: 32, height: 32, background: colors.black, color: colors.green,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
							}}>✓</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(16px,1.7vw,22px)',
									fontWeight: 900, lineHeight: 1.1,
								}}>
									适合报名
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, opacity: 0.8 }}>
									IF YOU ARE
								</div>
							</div>
						</div>
						<div style={{ padding: '16px 18px', flex: 1 }}>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
								{fitList.map((item, i) => (
									<motion.li
										key={i}
										initial={{ opacity: 0, x: -8 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: 0.35 + i * 0.08 }}
										style={{
											display: 'flex', gap: 10, alignItems: 'flex-start',
											fontSize: 'clamp(12px,1.3vw,16px)', lineHeight: 1.4,
											color: colors.black, fontWeight: 500,
										}}
									>
										<span style={{
											flexShrink: 0, color: colors.green,
											fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
											lineHeight: 1,
										}}>✓</span>
										<span>{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* 不适合 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.25 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							display: 'flex', flexDirection: 'column',
						}}
					>
						<div style={{
							padding: '10px 16px', background: colors.red, color: colors.white,
							borderBottom: `3px solid ${colors.black}`,
							display: 'flex', alignItems: 'center', gap: 10,
						}}>
							<div style={{
								width: 32, height: 32, background: colors.black, color: colors.red,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
							}}>✕</div>
							<div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(16px,1.7vw,22px)',
									fontWeight: 900, lineHeight: 1.1,
								}}>
									不适合报名
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, opacity: 0.8 }}>
									DON&apos;T WASTE YOUR MONEY
								</div>
							</div>
						</div>
						<div style={{ padding: '16px 18px', flex: 1 }}>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
								{notFitList.map((item, i) => (
									<motion.li
										key={i}
										initial={{ opacity: 0, x: 8 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
										style={{
											display: 'flex', gap: 10, alignItems: 'flex-start',
											fontSize: 'clamp(12px,1.3vw,16px)', lineHeight: 1.4,
											color: '#444', fontWeight: 500,
										}}
									>
										<span style={{
											flexShrink: 0, color: colors.red,
											fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
											lineHeight: 1,
										}}>✕</span>
										<span>{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>

				{/* 底部 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					style={{
						padding: '12px 18px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm, textAlign: 'center',
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: 'clamp(13px,1.5vw,20px)',
						fontWeight: 900, letterSpacing: 0.3,
					}}>
						诚实筛人，是对你<span style={{ color: colors.yellow }}>负责</span>。如果你在「适合」那边，这课就是为你做的
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
