import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border } from '../ui';

// 开场问题：回到 2023 年重新布局，为后面的时间线埋伏笔
export default function S02_TimeTravelQuestion() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<div style={{ width: 1240, textAlign: 'center', color: colors.white }}>
					<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
						style={{ display: 'inline-block', padding: '6px 18px', marginBottom: 40, background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 2, border }}>
						开场先问一个问题
					</motion.div>

					<motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
						style={{ fontFamily: fonts.heading, fontSize: 50, fontWeight: 800, lineHeight: 1.4, margin: 0 }}>
						回到 2023 年，ChatGPT 刚出来那会儿。
					</motion.p>

					<motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}
						style={{ fontFamily: fonts.heading, fontSize: 50, fontWeight: 800, lineHeight: 1.4, margin: '18px 0 0' }}>
						如果再给你一次机会，
					</motion.p>

					<motion.div initial={{ opacity: 0, scale: 0.85, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -1.5 }} transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 1.7 }}
						style={{ display: 'inline-block', marginTop: 48, padding: '14px 36px', background: colors.red, color: colors.white, border: `3px solid ${colors.white}`, boxShadow: `8px 8px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 64, fontWeight: 900, lineHeight: 1.25 }}>
						求职、换赛道，你会怎么布局？
					</motion.div>

					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}
						style={{ marginTop: 56, fontFamily: fonts.mono, fontSize: 18, color: colors.yellow, letterSpacing: 1 }}>
						先别急着回答，我们把这几年一段一段过一遍 →
					</motion.p>
				</div>
			</Inner>
		</Slide>
	);
}
