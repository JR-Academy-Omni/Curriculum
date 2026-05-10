import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { modules, courseMeta } from '../../data/modules';

export default function S06_ModuleOverview() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{
				width: '94%', maxWidth: 1440, height: '90%', padding: '28px 20px',
				display: 'flex', flexDirection: 'column', gap: 18,
			}}>
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
						<span style={{
							padding: '4px 14px', background: colors.red, color: colors.white,
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 2,
							border, boxShadow: shadowSm,
						}}>
							V30 · COHORT {courseMeta.cohort}
						</span>
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0,
					}}>
						第 30 期 · <span style={{
							display: 'inline-block', padding: '0 14px', background: colors.yellow,
							border, boxShadow: shadowSm, transform: 'rotate(-1deg)',
						}}>10 Module</span> 全栈 + AI
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: '19px', color: '#555',
						fontWeight: 700, marginTop: 10, letterSpacing: 0.5,
					}}>
						{courseMeta.totalLessons} 节课 · {courseMeta.liveClasses} 节直播 · {courseMeta.interactiveLabs}+ Lab · {courseMeta.quests} Quest · {courseMeta.weeks} 周技术 + P3 孵化
					</p>
				</motion.div>

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
					{modules.map((m) => (
						<motion.div
							key={m.num}
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
							{m.isNewInV30 && (
								<div style={{
									position: 'absolute', top: 6, right: -2,
									padding: '2px 10px', background: colors.red, color: colors.yellow,
									fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1,
									border: `2px solid ${colors.black}`, transform: 'rotate(3deg)',
									zIndex: 2,
								}}>
									V30 NEW
								</div>
							)}

							<div style={{
								background: m.color, color: colors.white, padding: '8px 12px',
								display: 'flex', justifyContent: 'space-between', alignItems: 'center',
								borderBottom: `3px solid ${colors.black}`,
							}}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1 }}>
										{m.code}
									</span>
									<span style={{ fontSize: 18, lineHeight: 1 }}>{m.icon}</span>
								</div>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, opacity: 0.9 }}>
									{m.lessons} 节
								</span>
							</div>

							<div style={{ padding: '10px 12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
								<div style={{
									fontFamily: fonts.heading, fontSize: '20px',
									fontWeight: 900, lineHeight: 1.15, color: colors.black,
									letterSpacing: -0.3,
								}}>
									{m.name}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: '16px', color: m.color,
									fontWeight: 700, marginTop: 3,
								}}>
									{m.nameCn}
								</div>

								<div style={{
									fontSize: '15px', color: '#555', lineHeight: 1.4,
									marginTop: 8, fontWeight: 500,
									display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
									overflow: 'hidden',
								}}>
									{m.summary.length > 42 ? m.summary.slice(0, 42) + '…' : m.summary}
								</div>
							</div>

							<div style={{
								padding: '6px 12px', background: '#f7f7f7', borderTop: '1px solid #ddd',
								display: 'flex', justifyContent: 'space-between',
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#333',
							}}>
								<span>🎥 {m.live}</span>
								<span>🧪 {m.lab}</span>
								<span>🤖 {m.quest}</span>
							</div>
						</motion.div>
					))}
				</motion.div>

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
					<span style={{ fontFamily: fonts.mono, fontSize: '16px', fontWeight: 700, letterSpacing: 1 }}>
						<span style={{ color: colors.yellow }}>M1 Launchpad</span>
						<span style={{ margin: '0 8px' }}>→</span>
						<span style={{ color: colors.yellow }}>M10 Career Accelerator</span>
						<span style={{ margin: '0 12px', opacity: 0.5 }}>|</span>
						每个模块都带 Lab + Quest AI Tutor，不是看视频走过场
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
