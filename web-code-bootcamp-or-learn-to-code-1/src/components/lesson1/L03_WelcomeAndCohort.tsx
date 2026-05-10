import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import VideoFrame from './VideoFrame';

export default function L03_WelcomeAndCohort() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoFrame
				src="videos/cinematic-3.mp4"
				width={320} height={180}
				position={{ top: 48, right: 64 }}
				rotate={-2}
				caption="COHORT #30 · 2026"
			/>
			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1500, padding: '36px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ marginBottom: 30 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, transform: 'rotate(-1deg)', marginBottom: 14,
					}}>
						YOU'RE HERE · 第 30 期
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 76, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1.05, color: colors.black,
					}}>
						这是 <span style={{ color: colors.red }}>9 年</span>来<br />
						第 <span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`,
						}}>30 期</span> 全栈班
					</h2>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28 }}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '28px 32px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.indigo, letterSpacing: 2, marginBottom: 12,
						}}>
							YOUR COHORT
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 36, fontWeight: 900,
							color: colors.black, lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 6,
						}}>
							你跟一群人一起走 <span style={{ color: colors.indigo }}>3 + 3</span> 个月
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 17, color: '#666',
							fontWeight: 700, letterSpacing: 1, marginBottom: 18,
						}}>
							3 个月主课 (Stage 1-4) + 3 个月真项目 & 求职冲刺 (Stage 5)
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
							{[
								{ n: '~30', l: '学员' },
								{ n: '🌏', l: '澳 / 新西兰 / 新加坡\n4 城 + 全球线上' },
								{ n: '6', l: 'Career Coach' },
							].map((m) => (
								<div key={m.l} style={{
									background: colors.warmBg, border: `2.5px solid ${colors.black}`,
									padding: '14px 12px', textAlign: 'center',
								}}>
									<div style={{
										fontFamily: fonts.heading, fontSize: 48, fontWeight: 900,
										color: colors.indigo, lineHeight: 1, letterSpacing: -1,
									}}>
										{m.n}
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
										color: '#444', marginTop: 6, whiteSpace: 'pre-line', lineHeight: 1.3,
									}}>
										{m.l}
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							background: colors.dark, color: colors.white, border, boxShadow: shadow,
							padding: '28px 28px',
						}}
					>
						<div style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 900,
							color: colors.yellow, letterSpacing: 2, marginBottom: 12,
						}}>
							TRACK RECORD · 9 YEARS
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
							lineHeight: 1.3, letterSpacing: -0.4, marginBottom: 20,
						}}>
							2017 至今
						</div>
						<ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
							{[
								{ n: '600+', l: '学员通过我们拿到 offer' },
								{ n: '29 期', l: '全栈班连续运营' },
								{ n: '20+', l: 'tutor · 真实在职' },
								{ n: '4 城', l: '线下 + 线上 hybrid' },
							].map((m) => (
								<li key={m.l} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
									<span style={{
										minWidth: 78, fontFamily: fonts.heading, fontSize: 28, fontWeight: 900,
										color: colors.yellow, letterSpacing: -0.5,
									}}>{m.n}</span>
									<span style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, lineHeight: 1.4 }}>
										{m.l}
									</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
