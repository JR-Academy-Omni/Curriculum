import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const levels = [
	{ l: 'L1', t: '用 AI', d: '一句话问，复制粘贴', val: '×1' },
	{ l: 'L2–L4', t: '搭 pipeline', d: '流水线 + 多平台 + 反馈闭环', val: '×10' },
	{ l: 'L5', t: '设计 + 落地能力', d: '整个公司 + 记忆系统', val: '×100' },
] as const;

export default function S16_LadderRecap() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1340, height: '85%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 30, textAlign: 'center' }}>
					从「用 AI」到「会设计 AI」<span style={{ color: colors.rose }}>×100 价值跃迁</span>
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{levels.map((lv, i) => {
						const last = i === 2;
						return (
							<motion.div key={lv.l} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.18 }}
								style={{ background: last ? colors.rose : colors.white, color: last ? colors.white : colors.black, border, boxShadow: last ? `8px 8px 0 ${colors.dark}` : shadow, padding: '26px 22px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, opacity: 0.7, marginBottom: 8 }}>{lv.l}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 25.5, fontWeight: 900, marginBottom: 8 }}>{lv.t}</div>
								<div style={{ fontFamily: fonts.body, fontSize: 17.5, fontWeight: 600, opacity: 0.85, marginBottom: 16, minHeight: 42 }}>{lv.d}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 55, fontWeight: 900, color: last ? colors.yellow : colors.rose, letterSpacing: -2 }}>{lv.val}</div>
							</motion.div>
						);
					})}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 28, fontFamily: fonts.heading, fontSize: 26, fontWeight: 800, color: colors.dark, textAlign: 'center' }}>
					差距不在「会不会用 AI」，在 <span style={{ color: colors.rose }}>有没有那一份东西</span> 喂养它 →
				</motion.p>
			</div>
		</Slide>
	);
}
