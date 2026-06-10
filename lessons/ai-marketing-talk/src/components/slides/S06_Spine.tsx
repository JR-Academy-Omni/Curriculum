import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const branches = [
	{ who: '你有自己的生意 / 想自己干', got: '这是你一人公司的引擎', sub: '不用养团队，也能卖得动', bg: colors.rose },
	{ who: '你在打工', got: '这是你「一个人顶五个」的不可替代性', sub: '也是哪天想自己干的起点', bg: colors.dark },
] as const;

export default function S06_Spine() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, height: '85%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 18 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.rose, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>今晚的主线</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '61.5px', fontWeight: 900, lineHeight: 1.12, letterSpacing: -1.5, marginBottom: 12 }}>
					AI 让一个人 <span style={{ color: colors.rose }}>=</span> 一支营销队伍
				</motion.h2>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
					style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 30, fontFamily: fonts.heading, fontSize: 27.5, fontWeight: 800 }}>
					<span style={{ background: colors.white, border, boxShadow: shadow, padding: '10px 20px' }}>做得出（coding）</span>
					<span style={{ color: colors.rose, fontSize: 34 }}>+</span>
					<span style={{ background: colors.white, border, boxShadow: shadow, padding: '10px 20px' }}>卖得动（marketing）</span>
					<span style={{ color: colors.rose, fontSize: 34 }}>=</span>
					<span style={{ background: colors.rose, color: colors.white, border, boxShadow: shadow, padding: '10px 20px' }}>一人公司</span>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
					{branches.map((b, i) => (
						<motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }}
							style={{ background: b.bg, color: colors.white, border, boxShadow: shadow, padding: '24px 26px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, opacity: 0.85, marginBottom: 10 }}>如果 — {b.who}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, lineHeight: 1.3, marginBottom: 8 }}>{b.got}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 500, opacity: 0.9 }}>{b.sub}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 26, fontFamily: fonts.body, fontSize: 22.5, fontWeight: 600, color: '#444', textAlign: 'center' }}>
					今晚我们练「<b style={{ color: colors.rose }}>卖得动</b>」这条腿 —— 顺便告诉你「做得出」缺什么。
				</motion.p>
			</div>
		</Slide>
	);
}
