import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S30_MetaClose() {
	return (
		<Slide bg={colors.rose}>
			<div style={{ width: '88%', maxWidth: 1280, textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					style={{ display: 'inline-block', padding: '8px 18px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 30 }}>
					最后，一个坦白
				</motion.div>

				<motion.h2 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
					style={{ fontFamily: fonts.heading, fontSize: '59.5px', fontWeight: 900, color: colors.white, lineHeight: 1.2, letterSpacing: -1.5, marginBottom: 28 }}>
					今晚这场讲座本身<br />就是一次 <span style={{ background: colors.white, color: colors.rose, padding: '0 16px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: `6px 6px 0 ${colors.dark}` }}>AI Marketing 演示</span>
				</motion.h2>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
					style={{ fontFamily: fonts.body, fontSize: 26, fontWeight: 600, color: 'rgba(255,255,255,0.95)', maxWidth: 920, margin: '0 auto' }}>
					我怎么选的题、怎么准备的内容、怎么把你引到刚才那两张卡 —— 全是你今天看到的<b style={{ color: colors.yellow }}>那套 pipeline</b>。
				</motion.p>
			</div>
		</Slide>
	);
}
