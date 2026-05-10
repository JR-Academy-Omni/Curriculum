import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

export default function L_OfferProof() {
	const baseRaw = (import.meta as unknown as { env: { BASE_URL: string } }).env.BASE_URL;
	const base = baseRaw.replace(/\/$/, '');

	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 14px)`,
				zIndex: 0,
			}} />

			<div style={{
				position: 'relative', zIndex: 1, width: '96%', maxWidth: 1700,
				padding: '24px 36px', display: 'grid', gridTemplateColumns: '1fr 1.05fr',
				gap: 32, alignItems: 'center',
			}}>
				{/* 左：标题 + 卖点 */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div style={{
						display: 'inline-block', padding: '7px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 16, transform: 'rotate(-1.5deg)',
					}}>
						🏆 REAL OFFER · STUDENT PROOF
					</div>

					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black, marginBottom: 18,
					}}>
						不是<span style={{ color: '#888', textDecoration: 'line-through' }}>"宣传"</span>·<br />
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`, marginTop: 8,
						}}>
							真实学员 offer
						</span>
					</h2>

					<div style={{
						display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24,
					}}>
						{[
							{ k: 'Macquarie Group', v: '澳洲投行 · Top 20', accent: colors.dark },
							{ k: 'Senior Associate', v: 'Corporate Operations', accent: colors.indigo },
							{ k: 'Sydney Office', v: 'Hybrid working', accent: colors.green },
							{ k: '37.5h / 周', v: 'Full-time + TPV', accent: colors.orange },
						].map((m) => (
							<div key={m.k} style={{
								background: colors.white, border, boxShadow: shadowSm,
								padding: '12px 16px', borderLeft: `8px solid ${m.accent}`,
							}}>
								<div style={{
									fontFamily: fonts.heading, fontSize: 20, fontWeight: 900,
									color: colors.black, lineHeight: 1.15, letterSpacing: -0.4,
								}}>
									{m.k}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 13, color: '#666',
									fontWeight: 700, marginTop: 4, letterSpacing: 0.5,
								}}>
									{m.v}
								</div>
							</div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{
							marginTop: 22, padding: '14px 20px',
							background: colors.indigo, color: colors.white,
							border, boxShadow: `5px 5px 0 ${colors.yellow}`,
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
							letterSpacing: -0.3, lineHeight: 1.4,
						}}
					>
						5000+ offer · 这只是其中一份 ·{' '}
						<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>
							下一份是不是你
						</span>
					</motion.div>
				</motion.div>

				{/* 右：offer 截图 (Polaroid 风) */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
					animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					style={{
						background: colors.white, border: `5px solid ${colors.black}`,
						boxShadow: `12px 12px 0 ${colors.black}`,
						padding: 14, position: 'relative',
					}}
				>
					{/* 顶部 paper-clip 装饰 */}
					<div style={{
						position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%) rotate(-3deg)',
						background: colors.red, color: colors.white,
						padding: '4px 14px', border: `3px solid ${colors.black}`,
						boxShadow: `3px 3px 0 ${colors.black}`,
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 2,
						zIndex: 2,
					}}>
						OFFER LETTER · 2025
					</div>

					<img
						src={`${base}/offer-macquarie.jpg`}
						alt="Macquarie Group Offer Letter"
						style={{
							width: '100%', height: 'auto', display: 'block',
							border: `2px solid ${colors.black}`,
						}}
					/>

					<div style={{
						marginTop: 10,
						display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 12, color: '#888',
							fontWeight: 700, letterSpacing: 1,
						}}>
							* 学员姓名 / 起薪等敏感信息已模糊
						</div>
						<div style={{
							padding: '4px 10px', background: colors.dark, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1,
							border: `2px solid ${colors.black}`,
						}}>
							✓ JR ACADEMY 学员
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
