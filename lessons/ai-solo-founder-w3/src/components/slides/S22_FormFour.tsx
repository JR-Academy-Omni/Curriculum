import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH5 · outline L09 step ⑤ 前半 —— 形态四选一
const FORMS = [
	{
		h: '软件',
		en: 'SaaS',
		c: colors.blue,
		buy: '工具',
		d: '客户自己用，你不在也能用。',
		good: '你不在场也能收钱',
		hard: '前期投入大，而且要一直有人来用',
	},
	{
		h: '做成标准品的服务',
		en: '生产化服务',
		c: colors.green,
		buy: '结果',
		d: '你交付一个做好的成果，流程固定、价格固定、不按小时算。',
		good: '现在就能开张，AI 让你产能翻倍',
		hard: '你走开就停',
	},
	{
		h: '信息产品',
		en: '课程 / 模板',
		c: colors.orange,
		buy: '方法',
		d: '把你会的东西打包成能自学的东西，做一次卖很多次。',
		good: '边际成本几乎是 0',
		hard: '没人认识你就卖不动',
	},
	{
		h: '混合',
		en: 'Hybrid',
		c: colors.purple,
		buy: '结果 + 工具',
		d: '先按项目给他做好，再收一个持续的使用或维护费。',
		good: '现金流和复利都占一点',
		hard: '两件事都要做，最累',
	},
];

export default function S22_FormFour() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 形态四选一"
					tagBg={colors.blue}
					title="你到底在卖什么样的东西"
					sub="判断依据只有一条：客户掏钱买的是一个「工具」，还是一个「结果」。这条想清楚，四选一就不难了。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
					{FORMS.map((f, i) => (
						<motion.div
							key={f.h}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.13 + i * 0.11 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ background: f.c, color: f.c === colors.green ? colors.black : colors.white, padding: '13px 16px', borderBottom: '3px solid #000' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, lineHeight: 1.15 }}>{f.h}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 12.5, marginTop: 3, opacity: 0.9 }}>{f.en}</div>
							</div>
							<div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1, color: '#888' }}>
									客户买的是 <b style={{ color: colors.black, fontSize: 15 }}>{f.buy}</b>
								</div>
								<div style={{ fontSize: 15.5, lineHeight: 1.5 }}>{f.d}</div>
								<div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14.5, lineHeight: 1.4 }}>
									<div style={{ background: '#e6f7ea', border: '2px solid #000', padding: '7px 10px' }}>
										<b>好处 · </b>
										{f.good}
									</div>
									<div style={{ background: '#ffe3e0', border: '2px solid #000', padding: '7px 10px' }}>
										<b>代价 · </b>
										{f.hard}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					不写代码的同学请注意：<b style={{ color: colors.yellow }}>第二格「做成标准品的服务」多半才是你的答案。</b>
					<u>它不比做软件低级，它现在就能收到钱。</u>
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ⑤</b>「形态四选一：SaaS / 生产化服务 / 信息产品 / 混合，判断依据是客户买的到底是『工具』还是『结果』」。
					各形态的好处 / 代价为本 deck 展开的教学说明。
				</SourceNote>
			</Body>
		</Slide>
	);
}
