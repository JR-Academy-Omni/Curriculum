import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, radii } from '../ui';
import { Label } from '../deck';

// 收尾 + Q&A
export default function S23_End() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 34 }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Label bg={colors.yellow} color={colors.black}>Q &amp; A</Label>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}
					style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 900, lineHeight: 1.4, color: colors.white }}>
					答得出，<span style={{ display: 'inline-block', background: colors.yellow, color: colors.black, padding: '0 20px', borderRadius: radii.card }}>指得出出处</span>；<br />
					答不出，<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 20px', borderRadius: radii.card }}>说不知道</span>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
