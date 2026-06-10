import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S23_RedefineCoding() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1300, height: '85%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					style={{ display: 'inline-block', padding: '8px 18px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 30 }}>
					AI Coding for Business
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
					style={{ fontFamily: fonts.heading, fontSize: '55px', fontWeight: 900, color: 'rgba(255,255,255,0.55)', textDecoration: 'line-through', marginBottom: 18 }}>
					≠ 当程序员
				</motion.div>

				<motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
					style={{ fontFamily: fonts.heading, fontSize: '57px', fontWeight: 900, color: colors.white, lineHeight: 1.2, letterSpacing: -1, marginBottom: 28 }}>
					= 会让 AI 帮你<br /><span style={{ background: colors.rose, color: colors.white, padding: '0 16px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: shadow }}>把那件事做出来 / 自动化</span>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
					style={{ fontFamily: fonts.body, fontSize: 23.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)', maxWidth: 820 }}>
					搭一条 pipeline、做个小工具、把流程接起来 —— <b style={{ color: colors.yellow }}>它就是「做得出」那条腿。</b>
				</motion.p>
			</div>
		</Slide>
	);
}
