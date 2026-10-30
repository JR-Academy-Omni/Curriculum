import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, radii } from '../ui';
import { Label } from '../deck';

const grid = 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)';
const marker = `linear-gradient(transparent 68%, ${colors.yellow} 68%, ${colors.yellow} 94%, transparent 94%)`;

// 封面（版式沿用 W4）
export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: grid, backgroundSize: '48px 48px' }}>
			<div aria-hidden style={{ position: 'absolute', left: -90, top: 120, width: 200, height: 200, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .52 }} />
			<div aria-hidden style={{ position: 'absolute', right: -60, bottom: -40, width: 260, height: 160, borderRadius: '130px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 28 }}>
					<Label bg={colors.dark} color={colors.yellow}>JR ACADEMY · AI ENGINEER 第七期 · W6</Label>
				</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: 88, lineHeight: 1.14, letterSpacing: -2, margin: 0 }}>
					<span style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px', borderRadius: radii.card }}>Tool Calling</span>{' '}
					<span style={{ backgroundImage: marker, WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>&amp; MCP</span>
				</motion.h1>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700, marginTop: 26 }}>
					Tool Contract · MCP · FastMCP · CLI
				</motion.p>
				<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.45, marginTop: 26 }}>
					模型只提出要调哪个工具；<br />真正去查、去改的，永远是你的代码。
				</motion.p>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.75 }} style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 34 }}>
					<Label bg={colors.white} color={colors.black}>讲师</Label>
					<span style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900 }}>Jessie</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
