import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const SOURCE = [
	{ icon: '📄', label: 'HTML 5', accent: '#e34f26' },
	{ icon: '🎨', label: 'CSS 3', accent: '#1572b6' },
	{ icon: '💅', label: 'SASS', accent: '#cf649a' },
	{ icon: '📜', label: 'JavaScript', accent: '#f0db4f' },
];

export default function L_Stage1WebDeploy() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 26, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
				>
					<div style={{
						display: 'inline-block', padding: '8px 16px',
						background: colors.dark, color: colors.white,
						fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, letterSpacing: 0.5,
						border, boxShadow: shadowSm, borderRadius: 999,
					}}>
						#28 CI / CD
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 48, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: colors.black,
					}}>
						Stage 1 · Web 部署 · <span style={{ color: colors.indigo }}>GitHub Pages</span> 自动上线
					</h2>
				</motion.div>

				{/* 架构流程图 */}
				<div style={{
					background: colors.white, border, boxShadow: shadow,
					padding: '36px 28px', position: 'relative',
					display: 'grid',
					gridTemplateColumns: '170px 60px 130px 100px 170px 100px 170px',
					alignItems: 'center', gap: 8, minHeight: 360,
				}}>
					{/* 左：4 个 source */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
					>
						{SOURCE.map((s) => (
							<div key={s.label} style={{
								background: colors.warmBg, border: `2.5px solid ${colors.black}`,
								padding: '10px 12px', textAlign: 'center', boxShadow: `3px 3px 0 ${s.accent}`,
							}}>
								<div style={{ fontSize: 28, lineHeight: 1, marginBottom: 4 }}>{s.icon}</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 17, fontWeight: 900,
									color: colors.black, letterSpacing: -0.3,
								}}>
									{s.label}
								</div>
							</div>
						))}
					</motion.div>

					{/* 虚线箭头 1 */}
					<DashedArrow delay={0.5} />

					{/* GitHub box */}
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
						<div style={{
							fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.6)',
							fontWeight: 700, marginTop: 4, letterSpacing: 1,
						}}>
							git push
						</div>
					</motion.div>

					{/* CI 节点 + 箭头 */}
					<StepNode letter="A" label="CI" color={colors.red} delay={0.7} />

					{/* GitHub Actions */}
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
							build · test
						</div>
					</motion.div>

					{/* CD 节点 + 箭头 */}
					<StepNode letter="B" label="CD" color={colors.red} delay={0.95} />

					{/* GitHub Pages */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 1.05 }}
						style={{
							background: colors.green, color: colors.black,
							border, boxShadow: `5px 5px 0 ${colors.black}`,
							padding: '24px 12px', textAlign: 'center',
						}}
					>
						<div style={{ fontSize: 44, lineHeight: 1, marginBottom: 6 }}>🌐</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
							letterSpacing: -0.3, lineHeight: 1.1,
						}}>
							GitHub<br />Pages
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 13, color: '#222',
							fontWeight: 700, marginTop: 4, letterSpacing: 1,
						}}>
							public URL
						</div>
					</motion.div>
				</div>

				{/* 底部说明 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.2 }}
					style={{
						marginTop: 18, padding: '14px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					Project 1 学完 · git push → <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>5 分钟自动上线公网</span> · 不再"上传 FTP"
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
