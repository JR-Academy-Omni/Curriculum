import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S22_TwoLegs() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<motion.h2 initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 12, textAlign: 'center' }}>
					营销是后半句。前半句是：<span style={{ color: colors.rose }}>东西得先存在</span>
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
					style={{ fontFamily: fonts.body, fontSize: 22.5, color: '#555', fontWeight: 600, marginBottom: 36 }}>
					营销跑得再顺，你得有个东西可卖。一人公司是<b>两条腿</b>：
				</motion.p>

				<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: `7px 7px 0 ${colors.rose}`, padding: '30px 34px', textAlign: 'center', minWidth: 280 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, marginBottom: 6 }}>做得出</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 17.5, color: colors.yellow, fontWeight: 700 }}>AI Coding</div>
						<div style={{ fontFamily: fonts.body, fontSize: 17.5, opacity: 0.85, marginTop: 8 }}>把产品 / 工具做出来</div>
					</motion.div>

					<motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
						style={{ fontFamily: fonts.heading, fontSize: 59.5, fontWeight: 900, color: colors.rose }}>+</motion.div>

					<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
						style={{ background: colors.rose, color: colors.white, border, boxShadow: `7px 7px 0 ${colors.dark}`, padding: '30px 34px', textAlign: 'center', minWidth: 280 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, marginBottom: 6 }}>卖得动</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 17.5, color: colors.yellow, fontWeight: 700 }}>AI Marketing</div>
						<div style={{ fontFamily: fonts.body, fontSize: 17.5, opacity: 0.9, marginTop: 8 }}>今晚讲的这套</div>
					</motion.div>
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 34, fontFamily: fonts.heading, fontSize: 26, fontWeight: 800, color: colors.dark }}>
					缺一条腿，都跑不起来。
				</motion.p>
			</div>
		</Slide>
	);
}
