import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const columns = [
	{
		tag: 'A 半对', tagBg: colors.green, title: 'AI 比 P50 文案强', bg: colors.yellow, rotate: -2,
		bullets: ['P50 = 中等水平的文案（前 50%）', '出稿快、量大、不喊累不请假', '基础种草 / 营销话术，全部碾压', '一天能写你一周的量'],
	},
	{
		tag: 'B 半对', tagBg: colors.orange, title: 'AI 比 P95 文案弱', bg: colors.rose, rotate: 0,
		bullets: ['P95 = 顶尖 5% 的操盘手', '看不懂「你的客户到底要什么」', '没有你的真相：产品 / 人设 / 真实数据', '不会判断「这条到底该不该发」'],
	},
	{
		tag: '结论', tagBg: colors.dark, title: '你不缺 P50 内容', bg: colors.dark, rotate: 2,
		bullets: ['缺的是 P95 判断力', '要「P95 + 会驾驭 AI + 维护真相」的人', '这就是新时代的营销人', '不是被 AI 替代，是被 AI 放大'],
	},
] as const;

export default function S05_Poll2Reveal() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '88%', padding: '28px 40px', display: 'flex', flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.black}` }}>REVEAL · 02</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, color: '#666' }}>两边都对了一半</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '53px', fontWeight: 900, lineHeight: 1.12, letterSpacing: -1.5, marginBottom: 20 }}>
					两边都对了
					<span style={{ display: 'inline-block', background: colors.rose, color: colors.white, padding: '0 16px', marginLeft: 10, transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}>一半</span>
				</motion.h2>

				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
					{columns.map((c, i) => {
						const textColor = c.bg === colors.dark || c.bg === colors.rose ? colors.white : colors.black;
						const accent = c.bg === colors.dark ? colors.yellow : c.bg === colors.rose ? colors.yellow : colors.rose;
						const tagText = c.tagBg === colors.dark ? colors.white : colors.black;
						return (
							<motion.div key={i} initial={{ opacity: 0, y: 40, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: c.rotate }} transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
								style={{ background: c.bg, border, boxShadow: shadow, padding: '24px 22px', minHeight: 360, display: 'flex', flexDirection: 'column', color: textColor }}>
								<span style={{ alignSelf: 'flex-start', padding: '4px 12px', background: c.tagBg, color: tagText, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border: `2px solid ${colors.black}`, marginBottom: 14 }}>{c.tag}</span>
								<div style={{ fontFamily: fonts.heading, fontSize: 28.5, fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>{c.title}</div>
								<ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: fonts.body, fontSize: 18.5, lineHeight: 1.6, fontWeight: 500 }}>
									{c.bullets.map((b, bi) => (
										<li key={bi} style={{ marginBottom: 10, paddingLeft: 18, position: 'relative' }}>
											<span style={{ position: 'absolute', left: 0, color: accent, fontWeight: 900 }}>→</span>{b}
										</li>
									))}
								</ul>
							</motion.div>
						);
					})}
				</div>

				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} style={{ marginTop: 22, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '16px 32px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 28.5, fontWeight: 900, lineHeight: 1.25 }}>
						你凭什么，是那个把 AI <span style={{ background: colors.rose, color: colors.white, padding: '0 12px', display: 'inline-block' }}>放大 100 倍</span> 的人？
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
