import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S10b_WhySOT() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1320, height: '82%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: colors.white }}>
				<motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ border, background: colors.red, padding: '8px 18px', fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 1.5 }}>
					OPPORTUNITY CARD → BUSINESS SoT
				</motion.div>

				<motion.h2 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }} style={{ marginTop: 26, maxWidth: 1100, fontFamily: fonts.heading, fontSize: 'clamp(38px, 4vw, 61px)', lineHeight: 1.16, fontWeight: 950, letterSpacing: -1.5 }}>
					聊天越来越多、文档越来越多、<br />AI 也越来越多——<span style={{ color: colors.yellow }}>到底哪一份算数？</span>
				</motion.h2>

				<motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.46, delay: 0.38 }} style={{ marginTop: 30, border, boxShadow: '9px 9px 0 #FFE162', background: colors.red, minWidth: 410, padding: '16px 34px 18px' }}>
					<div style={{ fontSize: 16, fontWeight: 800 }}>答案只有一个</div>
					<div style={{ marginTop: 2, fontFamily: fonts.heading, fontSize: 58, lineHeight: 1, fontWeight: 950 }}>当前 SoT</div>
					<div style={{ marginTop: 7, fontFamily: fonts.mono, fontSize: 15, fontWeight: 800 }}>SINGLE SOURCE OF TRUTH</div>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.68 }} style={{ marginTop: 30, maxWidth: 980, fontSize: 22, lineHeight: 1.55, fontWeight: 700 }}>
					你、同学和 AI 都从这一版开始。<br />新证据出现时，只更新这一版；<span style={{ color: colors.yellow }}>旧聊天和旧文档不再驱动下一步。</span>
				</motion.p>
			</div>
		</Slide>
	);
}
