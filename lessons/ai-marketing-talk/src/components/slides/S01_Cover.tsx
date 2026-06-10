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
							display: 'inline-block', padding: '8px 20px',
							background: colors.black, color: colors.rose,
							fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700,
							letterSpacing: 3, marginBottom: 32,
						}}>
						JR ACADEMY · 公开讲座
					</motion.div>

					<Title size="92px" style={{ lineHeight: 1.05, marginBottom: 28 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							新时代的{' '}
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '0 24px', transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}
							>AI Marketing</motion.span>
						</motion.span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 800, color: colors.black, marginBottom: 8 }}>
						一个人 <span style={{ color: colors.rose }}>=</span> 一支营销队伍
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.95 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '16px 28px', marginTop: 24,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 15.5, color: '#666', letterSpacing: 2 }}>JR ACADEMY</span>
						<span style={{ fontSize: 20, fontWeight: 700 }}>做得出 × 卖得动 = 一人公司</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.2 }}
						style={{ marginTop: 26, fontSize: 15.5, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · C 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
