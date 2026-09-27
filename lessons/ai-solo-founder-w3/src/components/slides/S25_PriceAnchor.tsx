import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH5 · outline L09 step ⑥ 的定价部分 —— 价格 anchor 四步
// 🚨 早鸟 30-50% off 取自 outline 原文，标为课程建议做法，deck 不给任何绝对金额
const STEPS = [
	{
		n: '1',
		h: '先去看 5 家',
		c: colors.blue,
		d: '找 5 个跟你抢同一笔钱的（软件、同行、外包都算），把他们的价格页截图存下来。看不到价格的，那本身就是信息——说明他们在按项目谈。',
		out: '一张五行的对照表',
	},
	{
		n: '2',
		h: '算给客户听',
		c: colors.green,
		d: '你要报的价，得对上你帮他省下或赚到的东西：省几个小时、少雇几个人、早拿到几周。这个数说不出来，你就只能拼便宜。',
		out: '一句话：「这帮你省下 ____」',
	},
	{
		n: '3',
		h: '第一批给折扣，换的是案例',
		c: colors.orange,
		d: '前几个客户可以便宜，但要说清楚为什么便宜——你要的是他的真实反馈和一个能公开的案例。这是交换，不是打折甩卖。',
		out: '早鸟价 + 换案例的条件',
	},
	{
		n: '4',
		h: '给一个年付的理由',
		c: colors.purple,
		d: '订阅或续费类的，年付折扣能一次拿回现金、也顺手筛掉随时会走的客户。折多少你自己定，但要划得动算得清。',
		out: '年付 vs 月付的两个价',
	},
];

export default function S25_PriceAnchor() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 价格 anchor"
					tagBg={colors.orange}
					title="定出那个你敢开口说的数字"
					sub="anchor 就是你报价时第一个说出口的数。它不需要完美，但必须有依据——今天下课前你得有一个。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
					{STEPS.map((s, i) => (
						<motion.div
							key={s.n}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.13 + i * 0.11 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '3px solid #000' }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 18,
										fontWeight: 700,
										background: s.c,
										color: s.c === colors.green ? colors.black : colors.white,
										padding: '2px 11px',
									}}
								>
									{s.n}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, lineHeight: 1.2 }}>{s.h}</span>
							</div>
							<div style={{ padding: '14px 16px', fontSize: 15.5, lineHeight: 1.55, flex: 1 }}>{s.d}</div>
							<div style={{ background: '#fff7d6', borderTop: '2px solid #000', padding: '10px 16px', fontSize: 14.5, fontWeight: 700 }}>
								产出 · {s.out}
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '16px 24px', color: colors.white }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 10 }}>现在写下这一句，写完这一节就算过了</div>
					<div style={{ fontSize: 21, lineHeight: 1.7 }}>
						我的产品叫 <b style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>________</b>，
						按 <b style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>______</b> 的方式收钱，
						价格是 <b style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>______</b>，
						因为 <b style={{ background: colors.yellow, color: colors.black, padding: '0 12px' }}>____________</b>。
					</div>
				</div>

				<Punchline bg={colors.red}>
					定不下来的时候，往<u>高</u>了定。<b>价格低不会让人更想买，只会让人怀疑你交付得好不好</b>——而且降价随时可以，涨价很难。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ⑥</b>「一个定价模型 + 价格 anchor（竞品调研 5 家 + 价值锚 + case study 早鸟 30-50% off + 年付折扣）」。
					<b style={{ fontFamily: fonts.body, marginLeft: 6 }}>
						⚠️ 原文的早鸟 30–50% 是课程建议的做法区间，本页不把它印成规定；具体折扣由学员按自己的成本自己定。deck 内不出现任何绝对金额。
					</b>
				</SourceNote>
			</Body>
		</Slide>
	);
}
