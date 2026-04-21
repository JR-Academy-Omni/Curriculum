import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S24_FollowUs() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1200, padding: '40px 40px', textAlign: 'center' }}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, letterSpacing: -2, lineHeight: 1.05, margin: 0 }}>
						感谢你看到这里 ✨
					</h2>
					<p style={{ fontFamily: fonts.heading, fontSize: 'clamp(18px,2.2vw,28px)', fontWeight: 700, color: '#333', marginTop: 16, lineHeight: 1.4 }}>
						继续关注 <span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block' }}>匠人学院 JR Academy</span>
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 34 }}
				>
					{[
						{ name: '官网', url: 'jiangren.com.au', bg: colors.red, icon: '🌐' },
						{ name: '小红书', url: '@匠人学院', bg: colors.m7, icon: '📕' },
						{ name: '公众号', url: '匠人学院', bg: colors.m5, icon: '📰' },
						{ name: '知识库', url: '/learn', bg: colors.m4, icon: '📚' },
					].map((c) => (
						<motion.div
							key={c.name}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
						>
							<div style={{ width: 54, height: 54, background: c.bg, color: colors.white, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
								{c.icon}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.black }}>
								{c.name}
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#666', fontWeight: 700 }}>
								{c.url}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
					style={{ marginTop: 30, fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 700, letterSpacing: 1 }}
				>
					// 2026 最稳的技术饭碗 = 会交付 × 会 AI · 咱们班见
				</motion.div>
			</div>
		</Slide>
	);
}
