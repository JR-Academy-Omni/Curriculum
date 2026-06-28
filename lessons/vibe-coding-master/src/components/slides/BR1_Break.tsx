import { Slide, Inner, Title, colors, fonts } from '../ui';
import { motion } from 'framer-motion';

// 中场休息①
export default function BR1_Break() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center>
				<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 160, damping: 14 }}
					style={{ fontSize: 90 }}>☕</motion.div>
				<Title size="72px" style={{ marginTop: 10 }}>中场 <span style={{ background: colors.yellow, padding: '0 12px' }}>休息一下</span></Title>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
					style={{ fontSize: 22, color: '#555', marginTop: 18, textAlign: 'center', maxWidth: 760, lineHeight: 1.5 }}>
					回来我们进 <b>Part 2</b>：把记忆系统跑深，
					再做今天第一个真正的「武器」—— <b style={{ color: colors.red }}>Skill</b>。
				</motion.p>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
					style={{ marginTop: 22, fontSize: 16, color: '#999', fontFamily: fonts.mono }}>
					// 没跟上动手①的，趁现在让旁边同学帮你补上 CLAUDE.md
				</motion.p>
			</Inner>
		</Slide>
	);
}
