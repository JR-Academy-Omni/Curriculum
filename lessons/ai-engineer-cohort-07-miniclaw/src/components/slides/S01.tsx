import { motion } from 'framer-motion';
import { Slide, colors, fonts, radii } from '../ui';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const systemLayers = [
	{ name: 'TUI / CLI', color: colors.blue },
	{ name: 'HARNESS', color: colors.red },
	{ name: 'SKILLS / TOOLS', color: colors.purple },
	{ name: 'MEMORY', color: colors.green },
	{ name: 'ROUTER / PROVIDERS', color: colors.yellow },
];

export default function S01() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative', color: colors.white }}>
			<div aria-hidden style={{
				position: 'absolute', inset: 0,
				backgroundImage: 'linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)',
				backgroundSize: '48px 48px',
			}} />
			<div aria-hidden style={{ position: 'absolute', width: 560, height: 560, borderRadius: '50%', border: `78px solid ${colors.red}`, right: -294, top: -228, opacity: .95 }} />
			<div aria-hidden style={{ position: 'absolute', width: 190, height: 190, borderRadius: '50%', background: colors.yellow, left: -102, bottom: -96 }} />

			<div style={{ width: 1420, height: 760, position: 'relative', display: 'grid', gridTemplateColumns: '1.13fr .87fr', gap: 58, alignItems: 'stretch' }}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0 4px' }}>
					<div>
						<motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .48, ease }} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
							<span style={{ width: 52, height: 9, background: colors.red, borderRadius: radii.pill }} />
							<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 800, letterSpacing: 2.1 }}>AI ENGINEER BOOTCAMP · COHORT 07</span>
						</motion.div>

						<motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08, ease }} style={{
							fontFamily: fonts.heading, fontSize: 92, lineHeight: .98, letterSpacing: -3.7,
							margin: '56px 0 0', fontWeight: 900, maxWidth: 820,
						}}>
							AI Engineer
							<span style={{ display: 'block', marginTop: 18, fontSize: 70, letterSpacing: -2.6 }}>
								第七期<span style={{ color: colors.yellow }}>公开课</span>
							</span>
						</motion.h1>

						<motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease }} style={{
							fontFamily: fonts.body, fontSize: 25, lineHeight: 1.42, color: '#daddE8',
							margin: '30px 0 0', maxWidth: 755, fontWeight: 600,
						}}>
							<span style={{ display: 'block', color: colors.yellow, fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, marginBottom: 9 }}>IT 行业正在进入：又缺人，又裁员的时代</span>
							先看清 AI Engineer 的薪资、就业与训练路线，再现场写出一个真正能跑的 Agent 系统。
						</motion.p>
					</div>

					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .36, duration: .5 }} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
							<span style={{ width: 38, height: 38, borderRadius: '50%', display: 'grid', placeItems: 'center', background: colors.yellow, color: colors.dark, fontFamily: fonts.mono, fontWeight: 900 }}>01</span>
							<span style={{ fontSize: 20, fontWeight: 800 }}>就业与课程</span>
						</div>
						<span style={{ height: 2, width: 64, background: '#66708b', position: 'relative' }}><span style={{ position: 'absolute', right: -2, top: -4, width: 9, height: 9, borderTop: '2px solid #66708b', borderRight: '2px solid #66708b', transform: 'rotate(45deg)' }} /></span>
						<div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
							<span style={{ width: 38, height: 38, borderRadius: '50%', display: 'grid', placeItems: 'center', background: colors.red, fontFamily: fonts.mono, fontWeight: 900 }}>02</span>
							<span style={{ fontSize: 20, fontWeight: 800 }}>MiniClaw Live Coding</span>
						</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, x: 46, rotate: 1.2 }} animate={{ opacity: 1, x: 0, rotate: -.8 }} transition={{ duration: .7, delay: .16, ease }} style={{
					alignSelf: 'center', height: 658, background: '#080c1c', border: `3px solid ${colors.white}`,
					borderRadius: 28, boxShadow: `16px 16px 0 ${colors.red}`, overflow: 'hidden', position: 'relative',
				}}>
					<div style={{ height: 61, borderBottom: '2px solid #30364c', display: 'flex', alignItems: 'center', padding: '0 23px', gap: 10 }}>
						{[colors.red, colors.yellow, colors.green].map((color) => <span key={color} style={{ width: 13, height: 13, borderRadius: '50%', background: color }} />)}
						<span style={{ marginLeft: 13, fontFamily: fonts.mono, color: '#9da5bd', fontSize: 14 }}>miniclaw / live-build</span>
					</div>

					<div style={{ padding: '30px 30px 25px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 17, color: '#aab2c9', lineHeight: 1.7 }}>
							<span style={{ color: colors.green }}>➜</span> miniclaw build <span style={{ color: colors.yellow }}>--live</span><br />
							<span style={{ color: '#68718a' }}>assembling production agent…</span>
						</div>

						<div style={{ marginTop: 30, position: 'relative', display: 'grid', gap: 16 }}>
							<div aria-hidden style={{ position: 'absolute', left: 21, top: 21, bottom: 21, width: 2, background: '#39415b' }} />
							{systemLayers.map((layer, index) => (
								<motion.div key={layer.name} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .38, delay: .42 + index * .08, ease }} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 14, alignItems: 'center', position: 'relative' }}>
									<span style={{ width: 44, height: 44, borderRadius: '50%', background: layer.color, border: '3px solid #080c1c', boxShadow: '0 0 0 2px #39415b', display: 'grid', placeItems: 'center', color: colors.dark, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900 }}>{index + 1}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 20, fontWeight: 800, letterSpacing: 1.5 }}>{layer.name}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, color: layer.color, fontWeight: 800 }}>CONNECTED</span>
								</motion.div>
							))}
						</div>

						<motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .88, duration: .38, ease }} style={{
							marginTop: 31, padding: '17px 20px', background: '#141b35', border: `2px solid ${colors.green}`,
							borderRadius: radii.card, fontFamily: fonts.mono, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
						}}>
							<span style={{ color: '#b8bfd0', fontSize: 14 }}>STATUS</span>
							<span style={{ color: colors.green, fontWeight: 900, fontSize: 16 }}>● READY TO RUN</span>
						</motion.div>
					</div>
					<div style={{ position: 'absolute', right: 18, bottom: 34, transform: 'rotate(-7deg)', background: colors.yellow, color: colors.dark, padding: '12px 24px', border: `3px solid ${colors.dark}`, borderRadius: radii.label, boxShadow: `6px 6px 0 ${colors.red}`, fontFamily: fonts.heading, fontWeight: 900, fontSize: 24 }}>
						现场写 · 现场跑
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
