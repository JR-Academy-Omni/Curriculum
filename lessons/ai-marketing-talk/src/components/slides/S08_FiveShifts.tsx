import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const shifts = [
	{ n: '01', old: '拼产能（谁写得多）', neo: '拼判断力', hook: 'AI 让人人能写一万篇，写什么才是护城河' },
	{ n: '02', old: 'SEO 抢 Google 前十', neo: 'GEO 被 AI 引用', hook: '你妈已经不 Google 了，她问 AI' },
	{ n: '03', old: '私域靠人一条条回', neo: 'agent 7×24 跑', hook: '一个 agent = 不睡觉不离职的运营团队' },
	{ n: '04', old: '月底复盘报表', neo: '每天实时心电图', hook: 'AI 每天告诉你哪条该停、哪个加投' },
	{ n: '05', old: 'AI 内容越多越好', neo: '真实性溢价', hook: 'AI 越多，人味越值钱' },
] as const;

export default function S08_FiveShifts() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1440, height: '86%', padding: '32px 40px', display: 'flex', flexDirection: 'column' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, letterSpacing: -1, marginBottom: 8 }}>
					营销的底层逻辑，这 18 个月被<span style={{ color: colors.rose }}>换了一遍</span>
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
					style={{ fontFamily: fonts.body, fontSize: 20, color: '#666', fontWeight: 600, marginBottom: 22 }}>
					5 个结构性转变 —— 不是「AI 帮你写文案」那种小事
				</motion.p>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 11 }}>
					{shifts.map((s, i) => (
						<motion.div key={s.n} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.09 }}
							style={{ display: 'grid', gridTemplateColumns: '52px 1fr 30px 1fr 1.5fr', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: i === 1 || i === 4 ? `5px 5px 0 ${colors.rose}` : shadow, padding: '12px 18px' }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.rose }}>{s.n}</span>
							<span style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, color: '#999', textDecoration: 'line-through' }}>{s.old}</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.rose, textAlign: 'center' }}>→</span>
							<span style={{ fontFamily: fonts.heading, fontSize: 22.5, fontWeight: 900, color: colors.black }}>{s.neo}</span>
							<span style={{ fontFamily: fonts.body, fontSize: 17.5, fontWeight: 600, color: '#444', fontStyle: 'italic' }}>「{s.hook}」</span>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 18, fontFamily: fonts.body, fontSize: 19, fontWeight: 700, color: colors.dark, textAlign: 'center' }}>
					第 <span style={{ color: colors.rose }}>02 GEO</span> 和 <span style={{ color: colors.rose }}>05 真实性</span>，多数人还没反应过来 —— 重点讲这两个
				</motion.p>
			</div>
		</Slide>
	);
}
