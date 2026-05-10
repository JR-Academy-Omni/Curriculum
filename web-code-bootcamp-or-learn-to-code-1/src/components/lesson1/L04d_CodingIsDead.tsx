import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function L04d_CodingIsDead() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜纹 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 28px)`,
				zIndex: 0,
			}} />

			{/* 装饰色块 */}
			<motion.div
				initial={{ scale: 0, rotate: 0 }}
				animate={{ scale: 1, rotate: 8 }}
				transition={{ duration: 0.7, delay: 0.1 }}
				style={{
					position: 'absolute', top: -80, right: -60, width: 280, height: 280,
					background: colors.red, border: `6px solid ${colors.black}`, zIndex: 0, opacity: 0.65,
				}}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				style={{
					position: 'absolute', bottom: -50, left: -40, width: 200, height: 200,
					background: colors.yellow, transform: 'rotate(-12deg)', zIndex: 0,
				}}
			/>

			<div style={{ position: 'relative', zIndex: 1, width: '92%', maxWidth: 1500, textAlign: 'center' }}>
				{/* 上半 · Coding is Dead (灰红 · 斜杠效果) */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					style={{ position: 'relative', display: 'inline-block', marginBottom: 8 }}
				>
					<h1 style={{
						fontFamily: fonts.heading, fontSize: 144, fontWeight: 900,
						lineHeight: 1, letterSpacing: -4,
						color: 'rgba(255,255,255,0.45)',
						textShadow: `5px 5px 0 rgba(255,87,87,0.35)`,
					}}>
						Coding is <span style={{
							color: colors.red, opacity: 0.9,
							display: 'inline-block', position: 'relative',
						}}>
							Dead<span style={{
								position: 'absolute', left: '-4%', right: '-4%', top: '52%',
								height: 8, background: colors.red, transform: 'rotate(-3deg)',
							}} />
						</span>.
					</h1>
				</motion.div>

				{/* 下半 · Long Live Engineering (金黄/白 · 加重) */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
					style={{ marginBottom: 24 }}
				>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 144, fontWeight: 900,
						lineHeight: 1, letterSpacing: -4, color: colors.white,
						textShadow: `6px 6px 0 ${colors.indigo}`,
					}}>
						Long Live<br />
						<span style={{
							display: 'inline-block', background: colors.yellow, color: colors.dark,
							padding: '0 24px', border: `5px solid ${colors.black}`,
							boxShadow: `8px 8px 0 ${colors.black}`,
							transform: 'rotate(-1deg)', marginTop: 14,
						}}>
							Engineering.
						</span>
					</h2>
				</motion.div>

				{/* 中文 punchline */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.0 }}
					style={{
						display: 'inline-flex', alignItems: 'center', gap: 24,
						marginTop: 30, marginBottom: 28,
					}}
				>
					<span style={{
						fontFamily: fonts.heading, fontSize: 48, fontWeight: 900,
						color: 'rgba(255,255,255,0.55)', letterSpacing: -1, lineHeight: 1,
						textDecoration: 'line-through', textDecorationColor: colors.red,
						textDecorationThickness: 5,
					}}>
						代码已死
					</span>
					<span style={{
						fontFamily: fonts.heading, fontSize: 36, color: colors.yellow,
						fontWeight: 900,
					}}>
						·
					</span>
					<span style={{
						fontFamily: fonts.heading, fontSize: 56, fontWeight: 900,
						color: colors.yellow, letterSpacing: -1, lineHeight: 1,
					}}>
						工程万岁
					</span>
				</motion.div>

				{/* 底部解释 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.3 }}
					style={{
						marginTop: 12, padding: '18px 28px',
						background: colors.white, color: colors.black,
						border, boxShadow: `8px 8px 0 ${colors.yellow}`,
						display: 'inline-block', maxWidth: 1100,
					}}
				>
					<div style={{
						fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
						lineHeight: 1.4, letterSpacing: -0.4,
					}}>
						普通 coding 会被 AI 取代 ·{' '}
						<span style={{
							background: colors.dark, color: colors.yellow,
							padding: '2px 10px', border: `2.5px solid ${colors.black}`,
						}}>
							但工程师是全社会最稀缺的岗位
						</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
