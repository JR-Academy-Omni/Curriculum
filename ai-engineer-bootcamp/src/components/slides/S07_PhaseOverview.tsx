import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { phases, courseMeta } from '../../data/phases';

export default function S07_PhaseOverview() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '90%', padding: '28px 20px',
				display: 'flex', flexDirection: 'column', gap: 18,
			}}>
				{/* 顶部标题 */}
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
						<span style={{
							padding: '4px 14px', background: colors.red, color: colors.white,
							fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, letterSpacing: 2,
							border, boxShadow: shadowSm,
						}}>
							V5 · COHORT {courseMeta.cohort}
						</span>
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						第五期 · <span style={{
							display: 'inline-block', padding: '0 14px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>10 Phase</span> 全栈架构
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: '16px', color: '#555',
						fontWeight: 700, marginTop: 10, letterSpacing: 0.5,
					}}>
						{courseMeta.totalLessons} 节课 · {courseMeta.liveClasses} 节直播 · {courseMeta.interactiveLabs} 个 Interactive Lab · {courseMeta.weeksTechnical} 周技术 + {courseMeta.weeksP3} 周 P3 孵化
					</p>
				</motion.div>

				{/* 10 Phase 网格：两排 × 5 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(5, 1fr)',
						gridTemplateRows: 'repeat(2, 1fr)',
						gap: 14,
						flex: 1,
						minHeight: 0,
					}}
				>
					{phases.map((p) => (
						<motion.div
							key={p.num}
							variants={{
								hidden: { opacity: 0, y: 24, scale: 0.92 },
								visible: { opacity: 1, y: 0, scale: 1 },
							}}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadow,
								display: 'flex',
								flexDirection: 'column',
								overflow: 'hidden',
								position: 'relative',
							}}
						>
							{/* V5 NEW 角标 */}
							{p.isV5New && (
								<div style={{
									position: 'absolute', top: 6, right: -2,
									padding: '2px 10px', background: colors.red, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, letterSpacing: 1,
									border: `2px solid ${colors.black}`, transform: 'rotate(3deg)',
									zIndex: 2,
								}}>
									V5 NEW
								</div>
							)}

							{/* 顶部色条 */}
							<div style={{
								background: p.color, color: colors.white, padding: '8px 12px',
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
								borderBottom: `3px solid ${colors.black}`,
							}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>
										{p.code}
									</span>
									<span style={{ fontSize: 18, lineHeight: 1 }}>{p.icon}</span>
								</div>
								<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, opacity: 0.9 }}>
									{p.lessons} 节
								</span>
							</div>

							{/* 中部：英文大标题 + 中文小标题 */}
							<div style={{ padding: '10px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								<div style={{
									fontFamily: fonts.heading, fontSize: '17px',
									fontWeight: 900, lineHeight: 1.15, color: colors.black,
									letterSpacing: -0.3,
								}}>
									{p.name}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: '13px', color: p.color,
									fontWeight: 700, marginTop: 3,
								}}>
									{p.nameCn}
								</div>

								{/* summary 截断 */}
								<div style={{
									fontSize: '12px', color: '#555', lineHeight: 1.4,
									marginTop: 8, fontWeight: 500,
									display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
									overflow: 'hidden',
								}}>
									{p.summary.length > 42 ? p.summary.slice(0, 42) + '…' : p.summary}
								</div>
							</div>

							{/* 底部统计 */}
							<div style={{
								padding: '6px 12px', background: '#f7f7f7', borderTop: '1px solid #ddd',
								display: 'flex', justifyContent: 'space-between',
								fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: '#333',
							}}>
								<span>🎥 {p.live} live</span>
								<span>🧪 {p.lab} lab</span>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 底部一行箭头总结 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.3 }}
					style={{
						display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
						padding: '10px 18px', background: colors.dark, color: colors.white,
						border, boxShadow: shadowSm,
					}}
				>
					<span style={{ fontFamily: fonts.mono, fontSize: '13px', fontWeight: 700, letterSpacing: 1 }}>
						<span style={{ color: colors.yellow }}>Phase 1</span>
						<span style={{ margin: '0 8px' }}>→</span>
						<span style={{ color: colors.yellow }}>Phase 10</span>
						<span style={{ margin: '0 12px', opacity: 0.5 }}>|</span>
						从底层 Transformer 到顶层 Eval，每一层都不漏
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
