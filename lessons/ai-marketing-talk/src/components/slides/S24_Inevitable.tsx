import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const era: { y: string; s: string; now?: boolean }[] = [
	{ y: '30 年前', s: '会用电脑' },
	{ y: '20 年前', s: '会用 Excel / 邮件' },
	{ y: '10 年前', s: '会做 PPT / 查资料' },
	{ y: '现在', s: '会让 AI 搭东西', now: true },
];

export default function S24_Inevitable() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '85%', padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 10 }}>
					每一代都从「专业技能」塌成「<span style={{ color: colors.rose }}>人人 baseline</span>」
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
					style={{ fontFamily: fonts.body, fontSize: 21, color: '#666', fontWeight: 600, marginBottom: 30 }}>
					这一代，轮到 AI Coding。无法避免。
				</motion.p>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
					{era.map((e, i) => (
						<motion.div key={e.y} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.15 }}
							style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>
							<div style={{ flex: 1, background: e.now ? colors.rose : colors.white, color: e.now ? colors.white : colors.black, border, boxShadow: e.now ? `7px 7px 0 ${colors.dark}` : shadow, padding: '22px 16px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, opacity: 0.7, marginBottom: 8 }}>{e.y}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: e.now ? 24 : 20, fontWeight: 900, lineHeight: 1.2 }}>{e.s}</div>
							</div>
							{i < era.length - 1 && <span style={{ fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, color: colors.rose }}>→</span>}
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
					style={{ marginTop: 30, fontFamily: fonts.heading, fontSize: 26, fontWeight: 800, color: colors.dark, textAlign: 'center' }}>
					没人再说「我不会用电脑」—— 很快，「我不会让 AI 搭东西」也一样
				</motion.p>
			</div>
		</Slide>
	);
}
