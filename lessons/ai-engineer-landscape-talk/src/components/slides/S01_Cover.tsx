import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 封面
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
							background: colors.black, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
							letterSpacing: 3, marginBottom: 32,
						}}>
						JR ACADEMY · 公开讲座
					</motion.div>

					<Title size="84px" style={{ lineHeight: 1.12, marginBottom: 24 }}>
						<motion.span
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.15 }}
							style={{ display: 'block' }}
						>
							GenAI Foundations
							<br />
							& AI Engineer{' '}
							<motion.span
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
								style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 24px' }}
							>Landscape</motion.span>
						</motion.span>
					</Title>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.85 }}
						style={{
							display: 'inline-flex', gap: 16, alignItems: 'center',
							padding: '20px 32px', marginTop: 32,
							background: colors.white, border, boxShadow: shadow,
						}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.dark, opacity: 0.6, letterSpacing: 2 }}>主讲人</span>
						<span style={{ fontSize: 22, fontWeight: 700 }}>Jason</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '3px 10px', background: colors.yellow, border: `2px solid ${colors.black}` }}>Lead FDE</span>
						<span style={{ fontSize: 18, fontWeight: 700 }}>2026 年 9 月 27 日 · 周日</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						style={{ marginTop: 28, fontSize: 14, color: '#999', fontFamily: fonts.mono, letterSpacing: 1 }}>
						← → 翻页 · F 全屏 · V 开摄像头
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
