import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const engineeringRoles = [
	{ name: 'Software Engineer', sub: 'Full-stack Developer', color: colors.p3 },
	{ name: 'DevOps Engineer', sub: 'SRE / Platform', color: colors.p5 },
	{ name: 'Data Engineer', sub: 'ETL · Pipeline · Warehouse', color: colors.p7 },
];

const aiEngineerResponsibilities = [
	'Feature Implementation',
	'CICD / Data Pipeline',
	'Modelling Implementation',
	'Multiple Cloud Services',
	'AI Solution Design',
];

export default function S05b2_EngineeringConvergence() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1420, padding: '24px 36px' }}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18 }}
				>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
						<div style={{
							padding: '4px 12px',
							background: colors.dark,
							color: colors.yellow,
							fontFamily: fonts.mono,
							fontSize: 11,
							fontWeight: 800,
							letterSpacing: 1,
							border,
							boxShadow: shadowSm,
						}}>
							ENGINEERING · 方向趋势
						</div>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, color: '#555', fontWeight: 700 }}>
							jiangren.com.au · 2026 技术岗收敛图
						</span>
					</div>
					<h2 style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(26px, 3.6vw, 46px)',
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: -1,
						color: colors.black,
						margin: 0,
					}}>
						三条 Engineering 路径{' '}
						<span style={{
							display: 'inline-block',
							padding: '0 10px',
							background: colors.red,
							color: colors.white,
							border: `3px solid ${colors.black}`,
							boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-1deg)',
						}}>
							都在收敛
						</span>{' '}
						到 AI Engineer
					</h2>
				</motion.div>

				{/* 主体：左入口 → 3 分支 → AI Engineer */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: '1.1fr 54px 1fr 60px 1.5fr',
					gap: 10,
					alignItems: 'center',
					marginBottom: 14,
				}}>
					{/* 左：Software Engineer 入口 */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							padding: '18px 14px',
							background: colors.white,
							border: `3px solid ${colors.dark}`,
							boxShadow: shadow,
							textAlign: 'center',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, color: '#888',
							fontWeight: 800, letterSpacing: 1.5, marginBottom: 6,
						}}>
							ENTRY POINT
						</div>
						<div style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(17px, 2.1vw, 24px)',
							fontWeight: 900,
							color: colors.dark,
							lineHeight: 1.15,
							letterSpacing: -0.3,
						}}>
							Software<br />Engineer
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: colors.red,
							fontWeight: 700, marginTop: 6,
						}}>
							大多数人的起点
						</div>
					</motion.div>

					{/* 中间：分支箭头 */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 6,
						}}
					>
						<div style={{ fontSize: 26, color: colors.orange, fontWeight: 900, lineHeight: 1, transform: 'rotate(-25deg)' }}>↗</div>
						<div style={{ fontSize: 26, color: colors.orange, fontWeight: 900, lineHeight: 1 }}>→</div>
						<div style={{ fontSize: 26, color: colors.orange, fontWeight: 900, lineHeight: 1, transform: 'rotate(25deg)' }}>↘</div>
					</motion.div>

					{/* 3 个分支（中间列） */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}
						style={{ display: 'flex', flexDirection: 'column', gap: 9 }}
					>
						{engineeringRoles.map((r) => (
							<motion.div
								key={r.name}
								variants={{
									hidden: { opacity: 0, x: -20 },
									visible: { opacity: 1, x: 0 },
								}}
								transition={{ duration: 0.35 }}
								style={{
									padding: '10px 14px',
									background: colors.white,
									border: `3px solid ${colors.dark}`,
									boxShadow: shadowSm,
									borderLeft: `8px solid ${r.color}`,
								}}
							>
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(13px, 1.4vw, 17px)',
									fontWeight: 900,
									color: colors.dark,
									lineHeight: 1.1,
									letterSpacing: -0.2,
								}}>
									{r.name}
								</div>
								<div style={{
									fontFamily: fonts.mono,
									fontSize: 10,
									color: '#666',
									fontWeight: 700,
									marginTop: 2,
								}}>
									{r.sub}
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* 收敛箭头 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.55 }}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<motion.div
							animate={{ x: [0, 5, 0] }}
							transition={{ duration: 1.3, repeat: Infinity }}
							style={{ fontSize: 32, color: colors.red, fontWeight: 900, lineHeight: 1 }}
						>
							⇒
						</motion.div>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 9,
							color: colors.red,
							fontWeight: 800,
							letterSpacing: 1,
						}}>
							CONVERGE
						</div>
					</motion.div>

					{/* 右：AI Engineer + 5 职责 */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.4 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
					>
						{/* AI Engineer 标题卡 */}
						<div style={{
							padding: '14px 18px',
							background: colors.red,
							color: colors.white,
							border,
							boxShadow: `6px 6px 0 ${colors.black}`,
							textAlign: 'center',
							transform: 'rotate(0.5deg)',
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 10, color: colors.yellow,
								fontWeight: 800, letterSpacing: 1.5, marginBottom: 4,
							}}>
								CONVERGENCE · 终点
							</div>
							<div style={{
								fontFamily: fonts.heading,
								fontSize: 'clamp(22px, 2.6vw, 32px)',
								fontWeight: 900,
								lineHeight: 1,
								letterSpacing: -0.8,
							}}>
								AI Engineer
							</div>
						</div>

						{/* 5 职责 */}
						<div style={{
							padding: '10px 14px',
							background: colors.white,
							border,
							boxShadow: shadowSm,
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 10, color: '#888',
								fontWeight: 800, letterSpacing: 1.2, marginBottom: 6,
							}}>
								AI ENGINEER · 5 大核心职责
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
								{aiEngineerResponsibilities.map((r, i) => (
									<motion.div
										key={r}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: 0.7 + i * 0.07 }}
										style={{
											display: 'flex',
											gap: 6,
											alignItems: 'center',
											fontFamily: fonts.heading,
											fontSize: 'clamp(12px, 1.25vw, 15px)',
											fontWeight: 700,
											color: colors.black,
										}}
									>
										<span style={{ color: colors.red, fontWeight: 900 }}>•</span>
										{r}
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* 底部：说明 + CTA */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
					style={{
						padding: '10px 18px',
						background: colors.dark,
						color: colors.white,
						border,
						boxShadow: `5px 5px 0 ${colors.red}`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 14,
						flexWrap: 'wrap',
					}}
				>
					<div style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(12px, 1.4vw, 16px)',
						fontWeight: 900,
						letterSpacing: -0.2,
					}}>
						无论你现在是{' '}
						<span style={{ color: colors.yellow }}>SDE / DevOps / Data Engineer</span>，
						往前走{' '}
						<span style={{ color: colors.red, background: colors.white, padding: '0 6px', border: `2px solid ${colors.white}` }}>
							同一个目的地
						</span>
					</div>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: 11,
						color: 'rgba(255,255,255,0.7)',
						fontWeight: 700,
					}}>
						图源 · jiangren.com.au · 2026 Engineering 趋势图
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
