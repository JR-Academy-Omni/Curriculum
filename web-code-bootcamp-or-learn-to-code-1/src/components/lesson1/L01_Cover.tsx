import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import VideoBg from './VideoBg';

/**
 * L01 — Day 1 封面
 * 学员第一天上课打开看到的第一张
 */
export default function L01_Cover() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			<VideoBg src="videos/cinematic-wide.mp4" overlay="rgba(16,22,47,0.55)" />
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 24px)`,
				zIndex: 0,
			}} />

			<motion.div
				initial={{ scale: 0, rotate: -10 }}
				animate={{ scale: 1, rotate: -3 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				style={{
					position: 'absolute', top: -80, right: -60, width: 280, height: 280,
					background: colors.indigo, border: `6px solid ${colors.black}`, zIndex: 0,
				}}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				style={{
					position: 'absolute', bottom: -40, left: -40, width: 160, height: 160,
					background: colors.yellow, transform: 'rotate(-12deg)', zIndex: 0,
				}}
			/>

			<div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: 1500, textAlign: 'left' }}>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					style={{
						display: 'inline-block',
						padding: '8px 18px',
						background: colors.yellow, color: colors.black,
						fontFamily: fonts.mono, fontSize: 19, fontWeight: 900, letterSpacing: 2,
						border: `4px solid ${colors.black}`, boxShadow: `5px 5px 0 ${colors.white}`,
						marginBottom: 28, transform: 'rotate(-1deg)',
					}}
				>
					LECTURE 01 · DAY 1 · 开课日
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					style={{
						fontFamily: fonts.heading, fontSize: 124, fontWeight: 900,
						lineHeight: 0.95, letterSpacing: -3, color: colors.white,
						textShadow: `6px 6px 0 ${colors.indigo}`,
					}}
				>
					欢迎加入<br />
					<span style={{ color: colors.yellow }}>Junior AI Engineer</span><br />
					<span style={{
						display: 'inline-block',
						background: colors.white, color: colors.dark,
						padding: '0 22px', border: `5px solid ${colors.black}`,
						boxShadow: `8px 8px 0 ${colors.indigo}`,
						transform: 'rotate(-0.5deg)', marginTop: 12,
					}}>
						全栈项目班
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
					}}
				>
					{[
						{ k: '第 30 期', v: 'Cohort #30' },
						{ k: '6 个月', v: 'Apr 2026 — Sep 2026' },
						{ k: '278 节课', v: '10 Module · 80 Lab · 12 Quest' },
					].map((m) => (
						<div key={m.k} style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '14px 22px', minWidth: 220,
						}}>
							<div style={{ fontFamily: fonts.mono, fontSize: 17, color: '#666', fontWeight: 800, letterSpacing: 1 }}>
								{m.v}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 28, color: colors.black, fontWeight: 900, letterSpacing: -0.5 }}>
								{m.k}
							</div>
						</div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.2 }}
					style={{ marginTop: 40, fontFamily: fonts.mono, fontSize: 18, color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: 2 }}
				>
					LIGHTMAN WANG · JR ACADEMY · jiangren.com.au
				</motion.div>
			</div>
		</Slide>
	);
}
