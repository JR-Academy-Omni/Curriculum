import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

export default function S17_SoTThesis() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '88%', maxWidth: 1280, textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
					style={{ display: 'inline-block', padding: '8px 18px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 28 }}>
					整场最该被记住的一页
				</motion.div>

				<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
					style={{ fontFamily: fonts.heading, fontSize: '42.5px', fontWeight: 800, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3, marginBottom: 28 }}>
					这么多 AI、这么多平台、20 个工具 ——<br />你到底该<span style={{ color: colors.yellow }}>抓什么？</span>
				</motion.h2>

				<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
					style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '20px 48px', border, boxShadow: `8px 8px 0 ${colors.yellow}`, transform: 'rotate(-1.5deg)', marginBottom: 28 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, opacity: 0.85, marginBottom: 4 }}>答案就一个词</div>
					<div style={{ fontFamily: fonts.heading, fontSize: '76.5px', fontWeight: 900, letterSpacing: -2, lineHeight: 1 }}>一份真相</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, opacity: 0.85, marginTop: 4 }}>Source of Truth · Master</div>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ fontFamily: fonts.body, fontSize: 25, fontWeight: 600, color: 'rgba(255,255,255,0.9)', maxWidth: 880, margin: '0 auto' }}>
					你不管 5 个平台、不管 20 个工具。你只维护<b style={{ color: colors.yellow }}>一份关于「你是谁、卖给谁、说什么、不说什么」的真相</b>，剩下交给流水线。
				</motion.p>
			</div>
		</Slide>
	);
}
