import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const steps = [
	{ n: 'L1', label: '朴素版', desc: '一句话问 ChatGPT', bg: colors.white, dim: true },
	{ n: 'L2', label: '模板化', desc: '固定流水线自动跑', bg: colors.white, dim: true },
	{ n: 'L3', label: '多平台', desc: '一份真相分发全网', bg: colors.white, dim: true },
	{ n: 'L4', label: '反馈闭环', desc: '数据自动调权重', bg: colors.white, dim: true },
	{ n: 'L5', label: '企业记忆', desc: 'AI 当同事不当工具', bg: colors.rose, dim: false },
] as const;

export default function S03_Poll1Reveal() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1440, height: '86%', padding: '32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
					<span style={{ padding: '6px 16px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.black}` }}>REVEAL · 01</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, color: '#666' }}>不管你选 A 还是 B</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '59.5px', fontWeight: 900, lineHeight: 1.12, letterSpacing: -1.5, marginBottom: 14 }}>
					99% 的人，只用了 AI 的
					<span style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '0 16px', marginLeft: 12, transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}>1%</span>
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
					style={{ fontFamily: fonts.body, fontSize: 23.5, color: '#444', fontWeight: 600, marginBottom: 44 }}>
					你把 AI 当成一个<b>全能临时工</b>，每件事都得站旁边一句句指挥 —— 这只是<b>第 1 级</b>。
				</motion.p>

				<div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: 12, paddingTop: 26 }}>
					{steps.map((s, i) => (
						<motion.div key={s.n} initial={{ opacity: 0, y: 30 }} animate={{ opacity: s.dim ? 0.6 : 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
							style={{ flex: 1, background: s.bg, border, boxShadow: s.dim ? '3px 3px 0 #ccc' : `6px 6px 0 ${colors.black}`, padding: '22px 16px', textAlign: 'center', position: 'relative' }}>
							{i === 0 && (
								<div style={{ position: 'absolute', left: '50%', top: -26, transform: 'translateX(-50%)', whiteSpace: 'nowrap', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, padding: '3px 10px', border: `2px solid ${colors.black}` }}>👇 你在这</div>
							)}
							<div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, color: s.dim ? '#999' : colors.white, marginBottom: 8 }}>{s.n}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: s.dim ? colors.black : colors.white, marginBottom: 6 }}>{s.label}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 600, color: s.dim ? '#666' : colors.white, lineHeight: 1.4 }}>{s.desc}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ marginTop: 40, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '14px 28px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 25.5, fontWeight: 800 }}>
						今晚，我把同一句话跑给你看 <span style={{ color: colors.yellow }}>5 个段位</span>的差距
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
