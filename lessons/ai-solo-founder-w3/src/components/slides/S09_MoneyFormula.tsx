import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH2 · outline L09 step ② 核心 —— 把「能赚钱」压成一条算式
function Term({ label, hint, color: c }: { label: string; hint: string; color: string }) {
	return (
		<div style={{ background: c, border, boxShadow: shadow, padding: '12px 16px', textAlign: 'center', minWidth: 158 }}>
			<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, lineHeight: 1.1 }}>{label}</div>
			<div style={{ fontSize: 13, color: '#333', marginTop: 5, lineHeight: 1.3 }}>{hint}</div>
		</div>
	);
}

function Op({ children }: { children: string }) {
	return <div style={{ fontFamily: fonts.mono, fontSize: 32, fontWeight: 700, padding: '0 2px' }}>{children}</div>;
}

const STEPS = [
	{ n: '第一步', h: '先定你要的那个数', d: '不是「越多越好」。写一个具体的月毛利目标——覆盖学费？覆盖房租？替代工资？三个答案对应完全不同的生意。' },
	{ n: '第二步', h: '反推需要多少单', d: '目标毛利 ÷（客单价 − 可变成本）= 每月要成交多少单。这一步很多人第一次发现：按现在的定价，根本到不了。' },
	{ n: '第三步', h: '问这些单从哪来', d: '算出来要 40 单，那这 40 单是内容带来的、主动敲门敲来的、老客户介绍的，还是搜索搜来的？说不出来的，这条算式就是空的。' },
];

export default function S09_MoneyFormula() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§2 · 赚钱算式"
					tagBg={colors.yellow}
					title="把「能赚钱」压成一条能按计算器的式子"
					sub="讲了半天商业模式，最后都要落到这一行。落不到，就是还没想清楚。"
				/>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.45, delay: 0.15 }}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}
				>
					<Term label="客单价" hint="一个客户一次给你多少" color={colors.white} />
					<Op>×</Op>
					<Term label="目标单量" hint="一个月成交多少次" color={colors.white} />
					<Op>−</Op>
					<Term label="可变成本" hint="每多做一单就多花的钱" color={colors.white} />
					<Op>=</Op>
					<Term label="月毛利" hint="这门生意每月真正剩下的" color={colors.yellow} />
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{STEPS.map((s, i) => (
						<motion.div
							key={s.n}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.4 + i * 0.13 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 16px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: colors.red, letterSpacing: 1 }}>{s.n}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, margin: '7px 0 8px' }}>{s.h}</div>
							<div style={{ fontSize: 15, lineHeight: 1.48 }}>{s.d}</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					注意「可变成本」里<u>不包含你自己的时间</u>——那个我们等一下单独算，因为它是服务型生意最大的谎言。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ②</b>原文「把『能赚钱』压成一条算式：客单价 × 目标单量 − 可变成本 = 月毛利，再往前推单量靠什么来（内容 / outreach / 引荐 / 搜索）、每个来源的产能上限」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
