import { Slide, Inner, Title, colors, fonts } from '../ui';
import { motion } from 'framer-motion';

// 中场休息②
export default function BR2_Break() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 160, damping: 14 }}
					style={{ fontSize: 90 }}>☕</motion.div>
				<Title white size="72px" style={{ marginTop: 10 }}>中场 <span style={{ color: colors.yellow }}>休息一下</span></Title>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
					style={{ fontSize: 22, color: '#cfd3e6', marginTop: 18, textAlign: 'center', maxWidth: 780, lineHeight: 1.5 }}>
					最后冲刺 <b style={{ color: colors.white }}>Part 3 + 4</b>：把「让 AI 干活」工程化 ——
					<b style={{ color: colors.yellow }}> ADLC</b>、Workflow、子 agent，然后做综合实战。
				</motion.p>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
					style={{ marginTop: 22, fontSize: 16, color: '#8890b0', fontFamily: fonts.mono }}>
					// 倒杯水，回来我们把今天所有东西串成一个闭环
				</motion.p>
			</Inner>
		</Slide>
	);
}
