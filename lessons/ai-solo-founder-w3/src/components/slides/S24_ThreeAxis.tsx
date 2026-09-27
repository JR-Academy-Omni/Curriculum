import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH5 · outline L09 step ⑤ 收口 —— 三维决策框架
const AXES = [
	{ n: '轴 1', h: '客户是谁', c: colors.blue, a: '个人（C 端）', b: '公司（B 端）', hint: '公司付得起更高的价，但决策慢、要发票、要合同' },
	{ n: '轴 2', h: '多久用一次', c: colors.orange, a: '每天 / 每周', b: '一年一两次', hint: '这一轴直接决定「订阅」这个选项能不能用' },
	{ n: '轴 3', h: '要你花多少时间', c: colors.purple, a: '几乎不用你', b: '每单都要你亲自上', hint: '要你亲自上的，就别指望纯软件的价' },
];

export default function S24_ThreeAxis() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§6 · 收口"
					tagBg={colors.purple}
					title="三个问题问完，形态和定价就定了"
					sub="不用纠结。把这三个轴上的位置圈出来，答案基本自己会跳出来。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 18 }}>
					{AXES.map((x, i) => (
						<motion.div
							key={x.n}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.14 + i * 0.13 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: x.c, letterSpacing: 1 }}>{x.n}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, margin: '6px 0 14px' }}>{x.h}</div>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ flex: 1, textAlign: 'center', border: '2px solid #000', padding: '9px 6px', fontSize: 15.5, fontWeight: 700, background: '#fdf5ee' }}>
									{x.a}
								</span>
								<span style={{ fontFamily: fonts.mono, color: '#aaa', fontSize: 15 }}>／</span>
								<span style={{ flex: 1, textAlign: 'center', border: '2px solid #000', padding: '9px 6px', fontSize: 15.5, fontWeight: 700, background: '#fdf5ee' }}>
									{x.b}
								</span>
							</div>
							<div style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.45, color: '#555' }}>{x.hint}</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.6 }}
					style={{ background: colors.dark, border, boxShadow: shadow, padding: '18px 24px', color: colors.white }}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, letterSpacing: 1.5, marginBottom: 12 }}>大纲里给的那个例子，照着走一遍</div>
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 19 }}>
						<span style={{ border: '2px solid #55606d', padding: '7px 14px' }}>一年用一两次</span>
						<span style={{ fontFamily: fonts.mono, color: colors.yellow }}>+</span>
						<span style={{ border: '2px solid #55606d', padding: '7px 14px' }}>卖给公司</span>
						<span style={{ fontFamily: fonts.mono, color: colors.yellow }}>+</span>
						<span style={{ border: '2px solid #55606d', padding: '7px 14px' }}>每单都要你亲自上</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 26, color: colors.yellow }}>→</span>
						<span style={{ background: colors.yellow, color: colors.black, padding: '7px 18px', fontWeight: 800 }}>大概率走混合模型，不是订阅</span>
					</div>
					<div style={{ marginTop: 12, fontSize: 16, color: '#b9c2cc', lineHeight: 1.5 }}>
						道理很直白：他一年只用两次，你却每个月找他收一次钱——第三个月他就把订阅关了。
					</div>
				</motion.div>

				<Punchline bg={colors.red}>
					现在圈出你自己的三个位置，写下你的形态和收钱方式。<u>下一页会告诉你哪些组合当场就该被否掉。</u>
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ⑤</b>「用三维决策框架收口——客户类型（C 端 / B 端）× 使用频次（每天 / 一次性）× 创始人时间占用，例如低频 + B 端 + 高创始人投入，大概率走混合模型而不是订阅」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
