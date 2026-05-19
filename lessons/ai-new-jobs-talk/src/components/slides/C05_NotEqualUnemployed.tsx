import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

export default function C05_NotEqualUnemployed() {
	return (
		<Slide bg={colors.dark}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 36 }}>
				{/* Label */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						display: 'inline-block', padding: '8px 18px', background: colors.yellow,
						color: colors.black, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
						letterSpacing: 3, border: `2px solid ${colors.black}`,
					}}
				>
					BRIDGE · 章节衔接
				</motion.div>

				{/* Big statement */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 160, damping: 14 }}
					style={{
						fontFamily: fonts.heading, fontSize: 140, fontWeight: 900,
						color: colors.white, lineHeight: 1.05, letterSpacing: -3,
					}}
				>
					消失 <span style={{ color: colors.yellow }}>≠</span> 失业
				</motion.div>

				{/* Sub-message card */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
					style={{
						border: `3px solid ${colors.white}`, background: 'rgba(255,255,255,0.06)',
						padding: '28px 36px', maxWidth: 1100, boxShadow: `6px 6px 0 ${colors.yellow}`,
					}}
				>
					<div style={{
						fontSize: 22, lineHeight: 1.7, color: colors.white, fontWeight: 500,
					}}>
						这些岗位的<span style={{ color: colors.yellow, fontWeight: 800 }}>人</span>并没有失业。
						<br />
						他们要么<span style={{ background: colors.explosive, color: colors.white, padding: '2px 10px', margin: '0 4px', fontWeight: 700 }}>转型</span>去做 Step 2+ 的工作（AI Engineer / AI PM / GEO），
						<br />
						要么用 AI 把自己原来的产出<span style={{ background: colors.green, color: colors.black, padding: '2px 10px', margin: '0 4px', fontWeight: 700 }}>放大 10 倍</span>。
					</div>
				</motion.div>

				{/* Hook for next chapter */}
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.3, type: 'spring', stiffness: 200, damping: 14 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 14,
						padding: '16px 28px', background: colors.yellow, color: colors.black,
						border, boxShadow: shadow,
					}}
				>
					<span style={{ fontSize: 24, fontWeight: 900 }}>→</span>
					<div style={{ textAlign: 'left' }}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 11, color: '#555',
							letterSpacing: 2, marginBottom: 2,
						}}>
							NEXT CHAPTER
						</div>
						<div style={{ fontSize: 19, fontWeight: 800 }}>
							AI 催生了哪些新岗位？接下来盘点 <span style={{ color: colors.explosive }}>26 个</span>真实新工种。
						</div>
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
