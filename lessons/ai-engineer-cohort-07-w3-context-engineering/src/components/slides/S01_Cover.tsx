import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, radii } from '../ui';
import { Label } from '../deck';

const grid = 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)';
const marker = `linear-gradient(transparent 68%, ${colors.yellow} 68%, ${colors.yellow} 94%, transparent 94%)`;

// 封面
export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: grid, backgroundSize: '48px 48px' }}>
			<div aria-hidden style={{ position: 'absolute', left: -90, top: 120, width: 200, height: 200, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .52 }} />
			<div aria-hidden style={{ position: 'absolute', right: -60, bottom: -40, width: 260, height: 160, borderRadius: '130px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 28 }}>
					<Label bg={colors.dark} color={colors.yellow}>JR ACADEMY · AI ENGINEER 第七期 · W3</Label>
				</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: 96, lineHeight: 1.14, letterSpacing: -2, margin: 0 }}>
					<span style={{ backgroundImage: marker, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>Context</span>{' '}
					<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px', borderRadius: radii.card }}>Engineering</span>
				</motion.h1>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, marginTop: 26 }}>
					Selection · Assembly · Lifecycle
				</motion.p>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.45, marginTop: 26 }}>
					每一轮，给模型看什么、不给看什么。
				</motion.p>
			</Inner>
		</Slide>
	);
}
