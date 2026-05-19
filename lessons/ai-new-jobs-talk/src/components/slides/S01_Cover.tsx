import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block',
							padding: '8px 20px',
							background: colors.black,
							color: colors.yellow,
							fontFamily: fonts.mono,
							fontSize: 14,
							fontWeight: 700,
							letterSpacing: 3,
							marginBottom: 32,
						}}>
						JR ACADEMY · 60 MIN 公开讲座
					</motion.div>

					<Title size="104px" style={{ lineHeight: 1.05, marginBottom: 24 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>Your Career</motion.span>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							style={{ display: 'block' }}
						>
							in the Age of{' '}
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
								style={{
									display: 'inline-block', background: colors.red,
									color: colors.white, padding: '0 24px',
								}}
							>AI</motion.span>
						</motion.span>
					</Title>

					<motion.p
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.85 }}
						style={{
							fontSize: 26,
							fontWeight: 600,
							color: colors.dark,
							marginTop: 32,
							marginBottom: 16,
						}}>
						消失的 5 个 · 出现的 26 个 · 一个正在发生的案例
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.0 }}
						style={{
							fontSize: 17,
							color: '#666',
							marginBottom: 40,
							fontFamily: fonts.mono,
							letterSpacing: 1.5,
						}}>
						AI 时代的职业变化 · 你的下一步在哪
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.05 }}
						style={{
							display: 'inline-flex',
							gap: 16,
							alignItems: 'center',
							padding: '20px 32px',
							background: colors.white,
							border,
							boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: '#666', letterSpacing: 2 }}>RESEARCH</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>JR Academy · 18 个月追踪 · 2026-05</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
