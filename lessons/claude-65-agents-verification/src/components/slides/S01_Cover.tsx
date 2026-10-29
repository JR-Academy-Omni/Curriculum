import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts } from '../ui';
import { muted } from '../lesson';

export default function S01_Cover() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,22,47,.055) 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
			<div aria-hidden style={{ position: 'absolute', left: -90, top: 120, width: 220, height: 220, borderRadius: '50%', border: `26px solid ${colors.yellow}`, opacity: .55 }} />
			<div aria-hidden style={{ position: 'absolute', right: -70, bottom: -50, width: 300, height: 190, borderRadius: '150px 0 0 0', background: colors.yellow, opacity: .58 }} />
			<Inner style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 30 }}>
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .4 }}
					style={{ background: colors.dark, color: colors.yellow, borderRadius: 8, padding: '8px 18px', fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3 }}>
					JR ACADEMY · AI 实战公开课
				</motion.div>
				<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .12 }}
					style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 104, lineHeight: 1.04, letterSpacing: -3, margin: 0 }}>
					我指挥了{' '}
					<span style={{ display: 'inline-block', background: colors.red, color: colors.white, borderRadius: 14, padding: '0 22px' }}>65 个</span>
					<br />AI 助手
				</motion.h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .45 }}
					style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 40, lineHeight: 1.3, margin: 0 }}>
					<span style={{ backgroundImage: `linear-gradient(transparent 68%, ${colors.yellow} 68%, ${colors.yellow} 94%, transparent 94%)` }}>用 Claude 搭一套信息核验系统</span>
				</motion.p>
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: .7 }}
					style={{ display: 'flex', gap: 18, alignItems: 'center', background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 18, boxShadow: '7px 7px 0 rgba(255,222,89,.92)', padding: '16px 26px' }}>
					<span style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>Bowen Jia</span>
					<span style={{ width: 2, height: 26, background: colors.dark, opacity: .3 }} />
					<span style={{ fontSize: 22, color: muted, fontWeight: 700 }}>我和 Claude 三天搭起来的系统</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
