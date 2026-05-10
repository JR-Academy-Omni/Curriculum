import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const SOURCE = [
	{ icon: '⚛️', label: 'React', accent: '#61dafb' },
	{ icon: '💅', label: 'styled-components', accent: '#db7093' },
	{ icon: '📜', label: 'JS · ES6', accent: '#f0db4f' },
	{ icon: '🛣️', label: 'React Router', accent: '#ca4245' },
	{ icon: '✅', label: 'ESLint', accent: '#4b32c3' },
];

const AWS_TARGETS = [
	{ icon: '📦', label: 'amazon S3', sub: 'static hosting', color: '#ff9900' },
	{ icon: '🌐', label: 'Route 53', sub: 'DNS / domain', color: '#8c4fff' },
	{ icon: '🔐', label: 'AWS IAM', sub: 'access control', color: '#dd344c' },
];

export default function L_Stage2ReactDeploy() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
				>
					<div style={{
						display: 'inline-block', padding: '8px 16px',
						background: colors.dark, color: colors.white,
						fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, letterSpacing: 0.5,
						border, boxShadow: shadowSm, borderRadius: 999,
					}}>
						#28 ReactApp Deployment
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: colors.black,
					}}>
						Stage 2 · React App · CI / CD 到 <span style={{ color: '#ff9900' }}>AWS</span>
					</h2>
				</motion.div>

				{/* 架构流程图 */}
				<div style={{
					background: colors.white, border, boxShadow: shadow,
					padding: '28px 24px', position: 'relative',
					display: 'grid',
					gridTemplateColumns: '210px 60px 130px 100px 170px 100px 130px 60px 1fr',
					alignItems: 'center', gap: 8, minHeight: 420,
				}}>
					{/* 左：5 个 source */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
					>
						{SOURCE.map((s) => (
							<div key={s.label} style={{
								background: colors.warmBg, border: `2.5px solid ${colors.black}`,
								padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10,
								boxShadow: `3px 3px 0 ${s.accent}`,
							}}>
								<div style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{s.icon}</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
									color: colors.black, letterSpacing: -0.3, lineHeight: 1.1,
								}}>
									{s.label}
								</div>
							</div>
						))}
					</motion.div>

					<DashedArrow delay={0.5} />

					{/* GitHub */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						style={{
							background: colors.dark, color: colors.white,
							border, boxShadow: `5px 5px 0 ${colors.black}`,
							padding: '24px 12px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 44, lineHeight: 1, marginBottom: 6 }}>🐙</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
							letterSpacing: -0.3,
						}}>
							GitHub
						</div>
					</motion.div>

					<StepNode letter="A" label="CI" color={colors.red} delay={0.7} />

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.8 }}
						style={{
							background: colors.white, border, boxShadow: shadowSm,
							padding: '20px 12px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 38, lineHeight: 1, marginBottom: 6 }}>⚙️</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
							color: colors.black, lineHeight: 1.1, letterSpacing: -0.3,
						}}>
							GitHub<br />Actions
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 13, color: '#666',
							fontWeight: 700, marginTop: 4, letterSpacing: 1,
						}}>
							npm build
						</div>
					</motion.div>

					<StepNode letter="B" label="CD" color={colors.red} delay={0.95} />

					{/* AWS */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 1.05 }}
						style={{
							background: colors.dark, color: colors.white,
							border, boxShadow: `5px 5px 0 #ff9900`,
							padding: '24px 8px', textAlign: 'center',
						}}
					>
						<div style={{
							fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
							color: '#ff9900', letterSpacing: -0.5, lineHeight: 1,
						}}>
							aws
						</div>
						<div style={{
							marginTop: 6, fontFamily: fonts.mono, fontSize: 14,
							color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: 1,
						}}>
							deploy
						</div>
					</motion.div>

					<DashedArrow delay={1.15} />

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 1.2 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
					>
						{AWS_TARGETS.map((t) => (
							<div key={t.label} style={{
								background: colors.warmBg, border: `2.5px solid ${colors.black}`,
								padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 10,
								boxShadow: `3px 3px 0 ${t.color}`,
							}}>
								<div style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{t.icon}</div>
								<div>
									<div style={{
										fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
										color: colors.black, letterSpacing: -0.3, lineHeight: 1.1,
									}}>
										{t.label}
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 13, color: '#666',
										fontWeight: 700, letterSpacing: 0.5, marginTop: 2,
									}}>
										{t.sub}
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>

				{/* 底部说明 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.3 }}
					style={{
						marginTop: 16, padding: '14px 22px',
						background: colors.dark, color: colors.white,
						border, boxShadow: `6px 6px 0 #ff9900`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					Project 2 学完 · 你已经掌握 <span style={{ background: '#ff9900', color: colors.black, padding: '0 8px', border: `2px solid ${colors.white}` }}>真实 AWS 生产部署链路</span> · 简历直接写
				</motion.div>
			</div>
		</Slide>
	);
}

function DashedArrow({ delay }: { delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, scaleX: 0 }}
			animate={{ opacity: 1, scaleX: 1 }}
			transition={{ duration: 0.4, delay }}
			style={{
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				transformOrigin: 'left center',
			}}
		>
			<svg width="100%" height="14" style={{ display: 'block' }}>
				<line x1="0" y1="7" x2="90%" y2="7" stroke={colors.black} strokeWidth="2.5" strokeDasharray="6 5" />
				<polygon points="0,0 12,7 0,14" transform="translate(calc(100% - 14), 0)" fill={colors.black} />
			</svg>
		</motion.div>
	);
}

function StepNode({ letter, label, color, delay }: { letter: string; label: string; color: string; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.35, delay }}
			style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
		>
			<div style={{
				width: 32, height: 32, borderRadius: '50%',
				background: color, color: colors.white,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
				border: `2.5px solid ${colors.black}`, boxShadow: `2px 2px 0 ${colors.black}`,
				flexShrink: 0,
			}}>
				{letter}
			</div>
			<div style={{
				fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
				color: colors.black, letterSpacing: 1,
			}}>
				{label}
			</div>
		</motion.div>
	);
}
