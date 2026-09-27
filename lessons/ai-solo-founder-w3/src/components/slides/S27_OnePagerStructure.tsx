import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH6 · outline L11 —— 一页商业验证报告的四段结构
const SECTIONS = [
	{
		n: '①',
		h: '证据段',
		c: colors.blue,
		d: 'W2 那 5 场访谈里，有几个人「上个月真遇到过」、几个人「已经在为它花钱」。',
		rule: '数字写实。0 就写 0 —— 写 0 不丢人，写假的才要命。',
	},
	{
		n: '②',
		h: '算式段',
		c: colors.green,
		d: '客单价 × 目标单量 − 可变成本 = 月毛利。加上：到你定的第一个数要多久、靠哪个渠道。',
		rule: '每个数字都要能指回来源：哪场访谈、哪次计算。',
	},
	{
		n: '③',
		h: '形态与定价段',
		c: colors.orange,
		d: '交付形态 + 收钱方式 + 价格 anchor，还有那张五家竞品的对照表。',
		rule: '形态和收钱方式必须对得上，对不上的自己先改。',
	},
	{
		n: '④',
		h: '裁决段',
		c: colors.red,
		d: '继续 / 调整 / 换，三选一，再加上 Top 2 结构性风险和你打算怎么办。',
		rule: '结论明确，不许写「再看看」「视情况而定」。',
	},
];

export default function S27_OnePagerStructure() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§7 · 一页裁决书"
					tagBg={colors.dark}
					title="四段，真的只准一页"
					sub="这一页是写给你自己看的裁决书，不是交给老师的作业。压到一页，是为了逼出真话。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
					{SECTIONS.map((s, i) => (
						<motion.div
							key={s.n}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.13 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', minHeight: 260 }}
						>
							<div style={{ background: s.c, color: s.c === colors.green ? colors.black : colors.white, padding: '12px 16px', borderBottom: '3px solid #000', display: 'flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 24, fontWeight: 700 }}>{s.n}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900 }}>{s.h}</span>
							</div>
							<div style={{ padding: '14px 16px', fontSize: 16, lineHeight: 1.55, flex: 1 }}>{s.d}</div>
							<div style={{ background: '#fff7d6', borderTop: '2px solid #000', padding: '11px 16px', fontSize: 14.5, lineHeight: 1.45, fontWeight: 700 }}>
								{s.rule}
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '16px 24px', color: colors.white, display: 'flex', gap: 26, alignItems: 'center' }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.yellow, flexShrink: 0, lineHeight: 1.3 }}>
						为什么
						<br />
						必须压到一页
					</div>
					<div style={{ fontSize: 18, lineHeight: 1.6 }}>
						不是为了省纸。是因为一页写不下的时候，你会被迫做选择——
						<b style={{ color: colors.yellow }}>而被你删掉的那些，通常正是「你希望是真的」但没有证据的部分。</b>
						留下来的才是你真的知道的事。
					</div>
				</div>

				<Punchline bg={colors.red}>
					这一页还有两个下家：<u>它是 W4 决定做什么形态的输入，也是 W14 那份 BP 的骨架。</u>现在写扎实，十一周后省一整天。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L11</b>「四段，真的只准一页：① 证据段 ② 算式段 ③ 形态与定价段 ④ 裁决段」及其 step ① 「压到一页的意义不是省纸，是逼你分清『有证据的』和『你希望是真的』」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
