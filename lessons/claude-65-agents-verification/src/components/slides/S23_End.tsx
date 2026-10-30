import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts } from '../ui';
import { muted } from '../lesson';

export default function S23_End() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
			<div aria-hidden style={{ position: 'absolute', right: -80, top: 100, width: 240, height: 240, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .55 }} />
			<Inner center style={{ flexDirection: 'column', gap: 28, textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }}
					style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 120, letterSpacing: -3 }}>
					<span style={{ backgroundImage: `linear-gradient(transparent 66%, ${colors.yellow} 66%, ${colors.yellow} 94%, transparent 94%)` }}>Q &amp; A</span>
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 34 }}>
					Bowen Jia · 我指挥了 65 个 AI 助手
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}
					style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, padding: '16px 26px', fontSize: 20, lineHeight: 1.6, color: muted, maxWidth: 1000 }}>
					本课讲的是用 AI 收集和核验信息的方法。课中出现的公司只作查证样例，不构成任何投资建议。
				</motion.div>
			</Inner>
		</Slide>
	);
}
