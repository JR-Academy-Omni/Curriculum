import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH1 · outline L09 step ① —— 顾问怎么看一门生意：从情怀到结构
const MOVES = [
	{
		n: '1',
		h: '拆成可算的部件',
		c: colors.blue,
		d: '「做一个给中小企业用的记账工具」不是一门生意，是一句话。拆开：谁在付钱、付多少、多久付一次、你交付一次要花多少小时、这些小时值多少钱。',
		q: '拆完之后，还剩几个数字是你真的知道的？',
	},
	{
		n: '2',
		h: '找结构性约束',
		c: colors.orange,
		d: '每门生意都有一个卡死它的东西——不是「不够努力」，是结构。可能是客户一年只买一次、可能是获客只能靠你亲自出面、可能是交付时间跟收入死死绑在一起。',
		q: '你这门生意，天花板是被什么卡住的？',
	},
	{
		n: '3',
		h: '看这个约束能不能被你解开',
		c: colors.green,
		d: '这才是关键一步。约束人人都有，问题是——凭你手上的东西（行业积累、人脉、AI、时间），这个约束解得开吗？解不开，就换一个约束解得开的生意。',
		q: '解开它，你需要的是什么？你手上有吗？',
	},
];

export default function S05_ConsultantView() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§1 · 顾问视角"
					tagBg={colors.green}
					title="顾问看生意，只做三个动作"
					sub="不谈情怀、不谈赛道、不谈风口。这三个动作做完，一门生意好不好，基本就露底了。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
					{MOVES.map((m, i) => (
						<motion.div
							key={m.n}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.14 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px', display: 'flex', flexDirection: 'column' }}
						>
							<div
								style={{
									fontFamily: fonts.mono,
									fontSize: 15,
									fontWeight: 700,
									background: m.c,
									color: m.c === colors.orange || m.c === colors.blue ? colors.white : colors.black,
									padding: '3px 10px',
									alignSelf: 'flex-start',
									marginBottom: 12,
								}}
							>
								动作 {m.n}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>{m.h}</div>
							<div style={{ fontSize: 16, lineHeight: 1.55, flex: 1 }}>{m.d}</div>
							<div style={{ marginTop: 14, paddingTop: 12, borderTop: '2px solid #000', fontSize: 15.5, fontWeight: 700 }}>
								<span style={{ color: colors.red }}>问自己：</span>
								{m.q}
							</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					这套东西不神秘。它只是<u>逼你把「我觉得」换成「我算过」</u>——难的从来不是方法，是愿意面对算出来的那个数。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ①</b>「顾问怎么看一门生意：从情怀到结构」——原文即「先把生意拆成可算的部件、再找结构性约束、最后看这个约束能不能被你解开」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
