import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH2 收口 · outline L09 step ② 后半 —— 单量靠什么来 + 每个来源的产能上限
const SOURCES = [
	{
		h: '内容',
		c: colors.blue,
		how: '写 / 拍 / 发，让人自己找上来',
		ceiling: '你一周能出几条，以及多久才起量',
		lag: '慢热，前几个月接近 0',
		ask: '你一周能稳定出几条？（写实际的）',
	},
	{
		h: '主动敲门',
		c: colors.orange,
		how: '一个个去找、去发消息、去约',
		ceiling: '你一周能认真发出去多少条',
		lag: '最快见效，但停了就断',
		ask: '你一周能发几条不群发的？',
	},
	{
		h: '别人介绍',
		c: colors.green,
		how: '做好的客户帮你带人',
		ceiling: '你手上有几个满意的客户',
		lag: '质量最高，但你得先有客户',
		ask: '现在有几个人愿意帮你介绍？',
	},
	{
		h: '搜索',
		c: colors.purple,
		how: '有人搜到你、或 AI 引用你',
		ceiling: '有多少人真的在搜这件事',
		lag: '最慢，但会自己复利',
		ask: '你的客户会用什么词去搜？',
	},
];

export default function S11_TrafficCeiling() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§2 · 单量从哪来"
					tagBg={colors.blue}
					title="算出来要 40 单，那 40 单从哪来"
					sub="只有四条路。每一条的上限都不是「市场有多大」，是「你一周有几个小时」。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
					{SOURCES.map((s, i) => (
						<motion.div
							key={s.h}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.14 + i * 0.11 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}
						>
							<div
								style={{
									background: s.c,
									color: s.c === colors.green ? colors.black : colors.white,
									padding: '11px 16px',
									fontFamily: fonts.heading,
									fontSize: 24,
									fontWeight: 900,
									borderBottom: '3px solid #000',
								}}
							>
								{s.h}
							</div>
							<div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
								<div style={{ fontSize: 15.5, lineHeight: 1.45 }}>{s.how}</div>
								<div style={{ fontSize: 14.5, lineHeight: 1.45 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1, display: 'block' }}>上限卡在</span>
									<b>{s.ceiling}</b>
								</div>
								<div style={{ fontSize: 14.5, lineHeight: 1.45, color: '#555' }}>{s.lag}</div>
								<div style={{ marginTop: 'auto', paddingTop: 10, borderTop: '2px solid #000', fontSize: 14.5, fontWeight: 700, background: '#fff7d6', margin: '10px -16px -14px', padding: '10px 16px' }}>
									{s.ask}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '16px 22px', color: colors.white }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 8 }}>现在填这一句，填不出来就是还没想清楚</div>
					<div style={{ fontSize: 21, lineHeight: 1.6 }}>
						我每月要成交 <b style={{ background: colors.yellow, color: colors.black, padding: '0 14px' }}>____</b> 单，主要靠{' '}
						<b style={{ background: colors.yellow, color: colors.black, padding: '0 14px' }}>__________</b>，我每周能为它投入{' '}
						<b style={{ background: colors.yellow, color: colors.black, padding: '0 14px' }}>____</b> 小时。
					</div>
				</div>

				<Punchline bg={colors.red}>
					写「每周 20 小时」之前先想想：<u>你还有工作、有家庭、有上周没做完的事。</u>写实际的那个数——这门课后面十二周都按它排。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ②</b>「再往前推单量靠什么来（内容 / outreach / 引荐 / 搜索）、每个来源的产能上限」。各来源的「上限卡在 / 见效快慢」为本 deck 展开的教学说明，非引用数据。
				</SourceNote>
			</Body>
		</Slide>
	);
}
