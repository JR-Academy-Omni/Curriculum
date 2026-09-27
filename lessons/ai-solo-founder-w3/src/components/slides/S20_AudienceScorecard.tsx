import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH4 · outline L09 step ④「台下同步在自己的表上打分，看自己会不会被同样的问题问倒」
const QS = [
	{ g: '算式', c: colors.blue, q: '一个客户一次给我多少钱' },
	{ g: '算式', c: colors.blue, q: '我一个月要成交多少单' },
	{ g: '算式', c: colors.blue, q: '这些单主要从哪一个渠道来' },
	{ g: '算式', c: colors.blue, q: '扣掉我自己的时间，一单还剩多少' },
	{ g: '形态', c: colors.orange, q: '客户买的是工具还是结果' },
	{ g: '形态', c: colors.orange, q: '我为什么选这个形态，不选另外三个' },
	{ g: '形态', c: colors.orange, q: '我的定价方式跟形态对得上吗' },
	{ g: '风险', c: colors.red, q: '这门生意最可能怎么死' },
	{ g: '风险', c: colors.red, q: '这件事是我能解开的吗' },
	{ g: '风险', c: colors.red, q: '如果解不开，我打算怎么绕过去' },
];

export default function S20_AudienceScorecard() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§5 · 台下同步做"
					tagBg={colors.yellow}
					title="十个问题。台上被问，你在台下同步答"
					sub="每答得上一个打一勾。答得上的标准是「能说出一个具体的数或事实」，不是「我心里有数」。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 16 }}>
					{QS.map((x, i) => (
						<motion.div
							key={x.q}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.28, delay: 0.1 + i * 0.05 }}
							style={{ display: 'flex', alignItems: 'stretch', border, boxShadow: shadow, background: colors.white }}
						>
							<div
								style={{
									background: x.c,
									color: colors.white,
									fontFamily: fonts.mono,
									fontSize: 13,
									fontWeight: 700,
									padding: '0 10px',
									display: 'flex',
									alignItems: 'center',
									borderRight: '2px solid #000',
									flexShrink: 0,
								}}
							>
								{x.g}
							</div>
							<div style={{ padding: '11px 14px', fontSize: 17, flex: 1, display: 'flex', alignItems: 'center' }}>
								<span style={{ fontFamily: fonts.mono, color: '#aaa', marginRight: 10, fontSize: 14 }}>
									{String(i + 1).padStart(2, '0')}
								</span>
								{x.q}
							</div>
							<div
								style={{
									width: 46,
									borderLeft: '2px solid #000',
									background: '#fdf5ee',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: 22,
									color: '#ccc',
								}}
							>
								☐
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
					{[
						{ n: '0–4 个', c: '#ffe3e0', d: '你现在还处在「有个想法」的阶段。今天下课后的两份作业就是给你的。' },
						{ n: '5–7 个', c: '#fff7d6', d: '正常。缺的那几个通常集中在同一类——那一类就是你本周要补的。' },
						{ n: '8–10 个', c: '#e6f7ea', d: '你已经可以开始卖了。今天重点放在定价那一段，别把价格定低了。' },
					].map((x) => (
						<div key={x.n} style={{ background: x.c, border, padding: '12px 16px' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, marginBottom: 6 }}>{x.n}</div>
							<div style={{ fontSize: 15.5, lineHeight: 1.5 }}>{x.d}</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.red}>
					这十个勾，就是<u>你那份一页报告的骨架</u>。空着的每一格，都是今天下课前还要去补的一件事。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ④</b>「台下同步在自己的表上打分，看自己会不会被同样的问题问倒」。十个问题按 step ④ 的三层追问结构展开。
				</SourceNote>
			</Body>
		</Slide>
	);
}
