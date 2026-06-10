import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const cards = [
	{ who: '如果你在打工', punch: '你怕的不是 AI', detail: '是那个「会用 AI 搭东西的同事」—— 他才是真正替代你的人。', bg: colors.dark },
	{ who: '如果你是老板', punch: '你和每个员工都得会', detail: '否则你养不起一个能自动化的团队，迟早被能自动化的对手拉开。', bg: colors.rose },
] as const;

export default function S25_WhyEveryone() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1340, height: '85%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 28 }}>
					为什么<span style={{ color: colors.rose }}>人人</span>躲不掉？
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, marginBottom: 26 }}>
					{cards.map((c, i) => (
						<motion.div key={i} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.16 }}
							style={{ background: c.bg, color: colors.white, border, boxShadow: shadow, padding: '26px 26px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, opacity: 0.85, marginBottom: 12 }}>{c.who}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, marginBottom: 10, color: colors.yellow }}>{c.punch}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, lineHeight: 1.55, opacity: 0.95 }}>{c.detail}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} style={{ textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '16px 32px', background: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 25.5, fontWeight: 900 }}>
						所以这门课叫「<span style={{ color: colors.rose }}>人人都能学</span>的 AI Coding」—— 不是给工程师的
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
