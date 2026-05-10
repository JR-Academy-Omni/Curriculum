import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface TutorBioProps {
	name: string;
	role: string;
	org: string;
	accentColor: string;
	bullets: string[];
	quote: string;
	stack: string[];
	icon?: string;
}

export default function TutorBio({ name, role, org, accentColor, bullets, quote, stack, icon = '👤' }: TutorBioProps) {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '36px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 24 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: accentColor, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, marginBottom: 12,
					}}>
						TUTOR BIO
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 80, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						{name}
					</h2>
					<div style={{
						marginTop: 8, fontFamily: fonts.mono, fontSize: 18, fontWeight: 800,
						color: accentColor, letterSpacing: 1,
					}}>
						{role} · <span style={{ color: '#666' }}>{org}</span>
					</div>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '24px 28px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: accentColor, letterSpacing: 2, marginBottom: 14,
						}}>
							TRACK RECORD
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
							{bullets.map((b, i) => (
								<motion.li
									key={i}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.35, delay: 0.4 + i * 0.07 }}
									style={{
										display: 'flex', alignItems: 'flex-start', gap: 12,
										fontFamily: fonts.body, fontSize: 18, color: colors.black,
										fontWeight: 600, lineHeight: 1.5,
									}}
								>
									<span style={{ color: accentColor, fontWeight: 900, fontSize: 22, lineHeight: 1, marginTop: -2, flexShrink: 0 }}>→</span>
									<span>{b}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
					>
						<div style={{
							background: colors.dark, color: colors.white, border, boxShadow: shadow,
							padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 14,
						}}>
							<div style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
								color: colors.yellow, letterSpacing: 2,
							}}>
								他在课上会教你
							</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
								{stack.map((s) => (
									<span key={s} style={{
										padding: '4px 10px', background: 'rgba(255,255,255,0.12)',
										fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
										border: `1.5px solid ${colors.yellow}`, color: colors.yellow,
									}}>
										{s}
									</span>
								))}
							</div>
						</div>

						<div style={{
							background: accentColor, color: colors.white,
							border, boxShadow: shadow, padding: '20px 24px',
							display: 'flex', alignItems: 'flex-start', gap: 14,
						}}>
							<div style={{ fontSize: 36, lineHeight: 1, flexShrink: 0 }}>{icon}</div>
							<div style={{
								fontFamily: fonts.heading, fontSize: 22, fontWeight: 800,
								lineHeight: 1.4, letterSpacing: -0.3, fontStyle: 'italic',
							}}>
								"{quote}"
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
