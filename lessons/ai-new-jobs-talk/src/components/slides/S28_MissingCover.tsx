import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts } from '../ui';

export default function S28_MissingCover() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ textAlign: 'center' }}>
					<motion.div
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						style={{
							display: 'inline-block', padding: '8px 18px', background: colors.yellow,
							color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 24,
						}}
					>CHAPTER 4 · BONUS</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.2, rotate: -12 }}
						animate={{
							opacity: 1, scale: 1, rotate: 0,
							x: [0, -8, 8, -6, 6, 0],
						}}
						transition={{
							opacity: { duration: 0.4, delay: 0.2 },
							scale: { duration: 0.7, delay: 0.2, type: 'spring', stiffness: 180, damping: 12 },
							rotate: { duration: 0.7, delay: 0.2, type: 'spring', stiffness: 180, damping: 12 },
							x: { duration: 0.5, delay: 0.85, ease: 'easeInOut' },
						}}
						style={{
							fontFamily: fonts.mono, fontSize: 200, fontWeight: 700, color: colors.yellow,
							lineHeight: 0.9, marginBottom: 24,
						}}
					>+4</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
					>
						<Title white size="80px" style={{ maxWidth: 1200, margin: '0 auto', lineHeight: 1.1 }}>
							23 远远不够 ——<br />
							<span style={{ color: colors.yellow }}>这 4 个工种正在野生爆发</span>
						</Title>
					</motion.div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 1.4 }}
						style={{
							fontSize: 22, color: 'rgba(255,255,255,0.7)', marginTop: 28,
							maxWidth: 900, marginLeft: 'auto', marginRight: 'auto',
						}}
					>
						2025 Q4 - 2026 Q1 才显著爆发 · 中文圈几乎没人系统盘点过
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
