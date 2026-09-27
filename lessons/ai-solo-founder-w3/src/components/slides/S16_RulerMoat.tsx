import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH3 · 尺子 Ⅳ —— 护城河：一人公司只有三种现实答案
const MOATS = [
	{
		h: '行业积累',
		c: colors.blue,
		d: '你在这个行业干了很多年，知道那些外人问不出来的门道——流程哪一步最容易出错、客户嘴上说的和实际要的差在哪、哪些话一说对方就信你。',
		who: '本班多数人真正的护城河在这',
		test: '一个聪明的外行，需要多久才能知道你知道的事？',
	},
	{
		h: '分发渠道',
		c: colors.orange,
		d: '你有一个别人拿不走的触达客户的方式：一个你经营了几年的社群、一份名单、一个持续在更新的账号、一批愿意帮你介绍的老客户。',
		who: '内容做得久的人',
		test: '明天你发一条消息，有多少目标客户会真的看到？',
	},
	{
		h: '数据与流程沉淀',
		c: colors.purple,
		d: '你做得越久，攒下的东西越值钱：一套调教过很多遍的提示词和工作流、一批真实案例、一份别人没有的数据。新人从零开始要重走一遍。',
		who: '做久了才有，但复利最强',
		test: '你做第 100 单的时候，会比第 1 单快多少、好多少？',
	},
];

const NOT_MOATS = ['做得比别人好看', '功能比别人多', '我更努力 / 更懂 AI', '我先做的（除非你同时占住了上面三条之一）'];

export default function S16_RulerMoat() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§3 · 尺子 Ⅳ · 护城河"
					tagBg={colors.purple}
					title="一个人做生意，护城河只有三种"
					sub="不是三种之一，那就是没有。没有也能开张——但你得知道自己是在跟时间赛跑。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 16 }}>
					{MOATS.map((m, i) => (
						<motion.div
							key={m.h}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.14 + i * 0.13 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ background: m.c, color: colors.white, padding: '12px 18px', borderBottom: '3px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{m.h}</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12.5, opacity: 0.9 }}>{m.who}</span>
							</div>
							<div style={{ padding: '15px 18px', fontSize: 15.5, lineHeight: 1.55, flex: 1 }}>{m.d}</div>
							<div style={{ borderTop: '2px solid #000', background: '#fff7d6', padding: '11px 18px', fontSize: 15, fontWeight: 700, lineHeight: 1.45 }}>
								<span style={{ color: colors.red }}>自测：</span>
								{m.test}
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '14px 22px', color: colors.white, display: 'flex', alignItems: 'center', gap: 22 }}>
					<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, color: colors.red, flexShrink: 0 }}>这些不是护城河</span>
					<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
						{NOT_MOATS.map((n) => (
							<span key={n} style={{ fontSize: 15.5, border: '2px solid #55606d', padding: '5px 12px', color: '#c8d0d8' }}>
								{n}
							</span>
						))}
					</div>
				</div>

				<Punchline bg={colors.red}>
					你们班上大多数人真正的护城河，是<u>那 5 到 15 年的专业积累</u>——不是 AI。
					AI 是所有人都能拿到的，你的行业经验不是。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>「护城河对一人公司只有三种现实答案——行业积累、分发渠道、数据与流程沉淀」。
					「不是护城河」四条与自测问题为本 deck 展开。
				</SourceNote>
			</Body>
		</Slide>
	);
}
