import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { colors, fonts } from '../kit';

export default function S18_Rule() {
	return <Slide bg={colors.dark}>
		<Inner style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 30 }}>
			<div style={{ fontFamily: fonts.mono, fontSize: 18, letterSpacing: 2, color: colors.yellow, fontWeight: 700 }}>04 · 这节课最重要的一句话</div>
			<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} style={{ fontFamily: fonts.heading, fontSize: 84, fontWeight: 900, lineHeight: 1.22, color: colors.white, letterSpacing: -2 }}>
				宁可交回一句<br /><span style={{ color: colors.yellow }}>「我没做，因为 X」</span>，<br />也不要交回一个<br />它猜着做完的结果。
			</motion.div>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} style={{ fontSize: 27, lineHeight: 1.55, color: '#d8d8dd', maxWidth: 1240 }}>
				默认情况下，Agent 会把「完成任务」排在最前面。你要在任务卡里给它一个合法的退出：允许它说「我没做」。没有这个出口，它只能绕过去、猜着做。
			</motion.div>
		</Inner>
	</Slide>;
}
