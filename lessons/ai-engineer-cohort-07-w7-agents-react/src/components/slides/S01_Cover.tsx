import { motion } from 'framer-motion';
import { Slide, colors, fonts, radii } from '../ui';
import { line, softShadow } from './_parts';

export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{
			position: 'relative',
			backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)',
			backgroundSize: '48px 48px',
		}}>
			<div aria-hidden style={{ position: 'absolute', left: -84, top: 145, width: 164, height: 164, borderRadius: '50%', border: `22px solid ${colors.yellow}`, opacity: .52 }} />
			<div aria-hidden style={{ position: 'absolute', right: -62, bottom: -38, width: 220, height: 138, borderRadius: '110px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<div style={{ position: 'relative', textAlign: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
					style={{ display: 'inline-block', padding: '8px 20px', borderRadius: radii.label, background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 3, marginBottom: 32 }}>
					AI ENGINEER 第七期 · W7 理论课
				</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.08 }}
					style={{ fontFamily: fonts.heading, fontSize: 88, lineHeight: 1.1, letterSpacing: -2, margin: '0 0 30px' }}>
					Agents 基础 + <span style={{ background: colors.red, color: colors.white, borderRadius: radii.card, padding: '0 22px' }}>ReAct</span>
				</motion.h1>
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.2 }}
					style={{ display: 'inline-block', padding: '18px 32px', background: colors.white, border: line, borderRadius: radii.panel, boxShadow: softShadow, fontSize: 32, fontWeight: 700 }}>
					把循环交给模型，把边界留给代码
				</motion.div>
			</div>
		</Slide>
	);
}
