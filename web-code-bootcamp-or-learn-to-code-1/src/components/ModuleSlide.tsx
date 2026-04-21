import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from './ui';
import type { IModule } from '../data/modules';

export default function ModuleSlide({ m }: { m: IModule }) {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 14 }}>
						<div style={{
							width: 64, height: 64, background: m.color, color: colors.white,
							border, boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center',
							fontSize: 34, fontFamily: fonts.heading, fontWeight: 900,
						}}>
							{m.icon}
						</div>
						<div>
							<div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
								<span style={{ padding: '3px 10px', background: m.color, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, border: `2px solid ${colors.black}` }}>
									{m.code}
								</span>
								{m.isNewInV30 && (
									<span style={{ padding: '3px 10px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, border: `2px solid ${colors.black}`, transform: 'rotate(-2deg)' }}>
										V30 NEW
									</span>
								)}
								<span style={{ fontFamily: fonts.mono, fontSize: 12, color: '#666', fontWeight: 700 }}>
									{m.lessons} 节 · {m.live} 直播 · {m.lab} Lab · {m.quest} Quest
								</span>
							</div>
							<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, margin: 0 }}>
								{m.name}
								<span style={{ color: m.color, marginLeft: 14 }}>{m.nameCn}</span>
							</h2>
						</div>
					</div>
					<p style={{ fontFamily: fonts.body, fontSize: 'clamp(13px,1.4vw,17px)', color: '#333', fontWeight: 500, lineHeight: 1.5, maxWidth: 1100 }}>
						{m.summary}
					</p>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}
					>
						<div style={{ display: 'inline-block', padding: '3px 10px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, marginBottom: 14, letterSpacing: 1 }}>
							HIGHLIGHTS
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{m.highlights.map((h, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 + i * 0.08 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 'clamp(13px,1.4vw,17px)', color: colors.black, fontWeight: 600, lineHeight: 1.4 }}
								>
									<span style={{ color: m.color, fontWeight: 900, fontSize: 18, marginTop: -2, flexShrink: 0 }}>→</span>
									<span>{h}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
							style={{ background: m.color, color: colors.white, border, boxShadow: shadowSm, padding: '14px 16px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, letterSpacing: 2, opacity: 0.85, marginBottom: 8 }}>
								TOOLS · STACK
							</div>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
								{m.tools.map((t) => (
									<span key={t} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.18)', fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, border: `1.5px solid ${colors.black}` }}>
										{t}
									</span>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
							style={{ background: colors.dark, color: colors.white, border, boxShadow: shadowSm, padding: '14px 16px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 800, letterSpacing: 2, color: colors.yellow, marginBottom: 8 }}>
								学完 = 能做什么
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 'clamp(13px,1.4vw,17px)', fontWeight: 800, lineHeight: 1.3, letterSpacing: -0.3 }}>
								{m.jobOutcome}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</Slide>
	);
}
