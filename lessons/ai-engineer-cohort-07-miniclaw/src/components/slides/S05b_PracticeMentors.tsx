import { motion } from 'framer-motion';
import { Slide, assetPath, colors, fonts, radii } from '../ui';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function S05b_PracticeMentors() {
	return <Slide bg={colors.dark} style={{ position: 'relative', color: colors.white }}>
		<div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
		<div aria-hidden style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', border: `54px solid ${colors.blue}`, left: -210, top: -184, opacity: .72 }} />

		<div style={{ width: 1420, height: 760, position: 'relative', display: 'grid', gridTemplateColumns: '1fr 500px', gap: 70, alignItems: 'center' }}>
			<div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .38, ease }} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<span style={{ width: 48, height: 9, background: colors.yellow }} />
					<span style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 17, letterSpacing: 1.6 }}>PRACTICE LIVE · 双导师带练</span>
				</motion.div>

				<motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08, ease }} style={{ fontFamily: fonts.heading, fontSize: 62, lineHeight: 1.08, letterSpacing: -2.2, margin: '34px 0 0', maxWidth: 820 }}>
					实践课主要由<br /><span style={{ color: colors.yellow }}>Lightman 和 Jason</span> 一起带
				</motion.h1>

				<motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: .2, ease }} style={{ margin: '28px 0 0', maxWidth: 790, fontSize: 25, lineHeight: 1.5, color: '#dce1ef', fontWeight: 650 }}>
					每周第二场是 Practice Live。两个人一起带着大家，把当周学到的能力写进同一个 CareKind 项目。
				</motion.p>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: .3, ease }} style={{ marginTop: 38, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, maxWidth: 790 }}>
					<div style={{ borderTop: `7px solid ${colors.red}`, paddingTop: 18 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900 }}>Lightman <span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.red }}>左</span></div>
						<div style={{ fontSize: 19, color: '#bfc6d8', marginTop: 8 }}>匠人学院创始人 / CEO</div>
					</div>
					<div style={{ borderTop: `7px solid ${colors.blue}`, paddingTop: 18 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 31, fontWeight: 900 }}>Jason <span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.blue }}>右</span></div>
						<div style={{ fontSize: 19, color: '#bfc6d8', marginTop: 8 }}>Lead AI Engineer</div>
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .4, delay: .42 }} style={{ marginTop: 40, fontSize: 21, lineHeight: 1.45, fontWeight: 800, color: colors.white }}>
					课堂现场写代码、调试和验收。下一周沿用同一份代码继续做。
				</motion.div>
			</div>

			<motion.div initial={{ opacity: 0, x: 38, rotate: 1.2 }} animate={{ opacity: 1, x: 0, rotate: -.7 }} transition={{ duration: .65, delay: .14, ease }} style={{ height: 704, background: '#071b43', border: `3px solid ${colors.white}`, borderRadius: 28, overflow: 'hidden', boxShadow: `15px 15px 0 ${colors.blue}`, position: 'relative' }}>
				<img src={assetPath('presenters/lightman-jason-practice.jpg')} alt="左侧 Lightman、右侧 Jason 的 AI Engineer 第七期双导师实战带练海报" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
				<div style={{ position: 'absolute', left: 18, bottom: 18, background: colors.yellow, color: colors.dark, border: `2px solid ${colors.dark}`, borderRadius: radii.label, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, boxShadow: `5px 5px 0 ${colors.red}` }}>LIGHTMAN × JASON</div>
			</motion.div>
		</div>
	</Slide>;
}
