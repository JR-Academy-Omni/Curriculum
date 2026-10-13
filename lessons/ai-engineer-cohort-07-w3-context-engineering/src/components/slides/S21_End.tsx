import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, radii } from '../ui';
import { Label } from '../deck';

// 收尾 + Q&A
export default function S21_End() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 34 }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Label bg={colors.yellow} color={colors.black}>Q &amp; A</Label>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}
					style={{ fontFamily: fonts.heading, fontSize: 70, fontWeight: 900, lineHeight: 1.35, color: colors.white }}>
					模型答错了，<br />先看它这一轮{' '}
					<span style={{ display: 'inline-block', background: colors.yellow, color: colors.black, padding: '0 22px', borderRadius: radii.card }}>拿到了什么</span>。
				</motion.div>
			</Inner>
		</Slide>
	);
}
