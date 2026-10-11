import { motion } from 'framer-motion';
import { Page, colors, fonts } from '../deck';

/**
 * P00 · 封面
 * 课名《怎么把它交出去》+ 副标题「一套只在你这台机器上成立的系统，不是系统，是习惯」
 * 视觉要点（PRD §4）：让「它」和「交出去」形成张力。
 * ⚠️ 纪律：封面不出现「最后一节」字样 —— 收口自己会说。
 */
export default function L15P00_Cover() {
	return (
		<Page bg={colors.dark} style={{ justifyContent: 'center', padding: '0 92px' }}>
			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
				style={{ fontFamily: fonts.mono, fontSize: 19, letterSpacing: 3, color: 'rgba(255,255,255,.5)' }}
			>
				VIBE CODING 大师课 · 第十五节
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.3, type: 'spring', stiffness: 170, damping: 16 }}
				style={{
					fontFamily: fonts.heading, fontSize: 104, fontWeight: 900, letterSpacing: -4,
					color: colors.white, margin: '28px 0 0', lineHeight: 1,
				}}
			>
				《把<span style={{ color: colors.yellow }}>你造的东西</span>交出去》
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
				style={{
					fontFamily: fonts.heading, fontSize: 38, fontWeight: 800,
					color: colors.white, marginTop: 44, letterSpacing: -1, lineHeight: 1.4,
				}}
			>
				一套只在<span style={{
					backgroundImage: `linear-gradient(transparent 62%, ${colors.red} 62%, ${colors.red} 93%, transparent 93%)`,
				}}>你这台机器上</span>成立的系统，<br />不是系统，是习惯。
			</motion.p>

			<motion.p
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.5 }}
				style={{ fontSize: 23, lineHeight: 1.7, color: 'rgba(255,255,255,.58)', marginTop: 30, maxWidth: 1060 }}
			>
				前面十四节，你造了一堆真东西。<br />
				今天我们不造新的 —— 我们把它们装到一台不是你的机器上。
			</motion.p>
		</Page>
	);
}
