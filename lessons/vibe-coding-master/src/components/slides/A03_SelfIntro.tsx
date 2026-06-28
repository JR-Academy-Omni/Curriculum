import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

const lines = [
	{
		n: '①', q: '我是谁 + 现在做什么',
		d: '一句话交代身份和当下在忙的事 —— 让大家知道你从哪来。',
		color: colors.dark, map: null as null | { label: string; color: string },
	},
	{
		n: '②', q: '我最拿得出手的一件事',
		d: '做过什么，最好带个数字 —— 带过几人 / 干了多久 / 做到多少量 / 提升多少。',
		color: colors.blue, map: { label: '→ 输入', color: colors.blue },
	},
	{
		n: '③', q: '我想用 AI / 这门课达成什么',
		d: '说清你来这里要解决的那件事 —— 越具体越好。',
		color: colors.purple, map: { label: '→ 目标', color: colors.purple },
	},
];

// 暖场互动：3 句话自我介绍 → 口头打好简历 PRD 草稿
export default function A03_SelfIntro() {
	return (
		<Slide>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.red}>开场互动</Tag>
					<Title size="50px" style={{ marginTop: 12 }}>
						先认识一下你们 · <span style={{ color: colors.red }}>3 句话自我介绍</span>
					</Title>
					<p style={{ fontSize: 19, color: '#555', marginTop: 8 }}>
						别紧张 —— 照下面三句填，每句一行，说完正好是一段完整介绍。
					</p>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
					{lines.map((x, i) => (
						<motion.div key={x.n}
							initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.13, type: 'spring', stiffness: 180, damping: 18 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 18 }}>
							<div style={{ flexShrink: 0, width: 60, height: 60, background: x.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 900, color: colors.white, fontFamily: fonts.heading }}>{x.n}</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 23, fontWeight: 900, fontFamily: fonts.heading }}>{x.q}</div>
								<div style={{ fontSize: 15.5, color: '#444', marginTop: 5, lineHeight: 1.4 }}>{x.d}</div>
							</div>
							{x.map && (
								<div style={{ flexShrink: 0, padding: '8px 16px', background: x.map.color, border, fontSize: 16, fontWeight: 900, color: colors.white, fontFamily: fonts.mono }}>
									{x.map.label}
								</div>
							)}
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
					style={{ marginTop: 18, background: colors.dark, border, boxShadow: shadow, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
					<span style={{ fontSize: 17, color: colors.white, fontWeight: 700, lineHeight: 1.4 }}>
						第<span style={{ background: colors.blue, color: colors.white, padding: '0 8px', fontFamily: fonts.mono, fontWeight: 900 }}>②</span>句 = 你等会简历 PRD 的「<span style={{ color: colors.blue, fontWeight: 900 }}>输入</span>」；
						第<span style={{ background: colors.purple, color: colors.white, padding: '0 8px', fontFamily: fonts.mono, fontWeight: 900 }}>③</span>句 = 你的「<span style={{ color: colors.purple, fontWeight: 900 }}>目标</span>」。
						<span style={{ color: colors.yellow, fontWeight: 900 }}> 说完，你的 PRD 已经口头打好草稿了。</span>
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
