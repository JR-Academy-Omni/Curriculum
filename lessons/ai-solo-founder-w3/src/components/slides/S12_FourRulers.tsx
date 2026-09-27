import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH3 · outline L09 step ③ 总览页 —— 四把尺子
const RULERS = [
	{ n: 'Ⅰ', h: '市场规模', c: colors.blue, q: '这门生意最多能长到多大？', rule: '自下而上算，不甩 TAM' },
	{ n: 'Ⅱ', h: '竞争', c: colors.orange, q: '这笔钱现在正付给谁？', rule: '把 Excel 和实习生也算成竞争对手' },
	{ n: 'Ⅲ', h: '单位经济', c: colors.green, q: '做成一单，你到底剩多少？', rule: '你自己的时间必须折成钱算进成本' },
	{ n: 'Ⅳ', h: '护城河', c: colors.purple, q: '为什么别人抄不走？', rule: '一人公司只有三种现实答案' },
];

export default function S12_FourRulers() {
	return (
		<Slide bg={colors.dark}>
			<Body>
				<SlideHead
					tag="§3 · 四把尺子"
					tagBg={colors.yellow}
					title={<span style={{ color: colors.white }}>顾问量一门生意，就量这四样</span>}
					sub={<span style={{ color: '#b9c2cc' }}>接下来四页，每把尺子讲一页，讲完你当场给自己打分。四个分数拼起来，就是今天的裁决依据。</span>}
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
					{RULERS.map((r, i) => (
						<motion.div
							key={r.n}
							initial={{ opacity: 0, y: 22 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.13 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', minHeight: 300 }}
						>
							<div
								style={{
									background: r.c,
									color: r.c === colors.green ? colors.black : colors.white,
									padding: '16px 18px',
									borderBottom: '3px solid #000',
								}}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, lineHeight: 1 }}>{r.n}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, marginTop: 6 }}>{r.h}</div>
							</div>
							<div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
								<div style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.4 }}>{r.q}</div>
								<div style={{ marginTop: 'auto', fontSize: 15.5, lineHeight: 1.5, background: '#fff7d6', border: '2px solid #000', padding: '10px 12px' }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1, display: 'block', marginBottom: 4 }}>规矩</span>
									{r.rule}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					四把尺子里，<u>只有第三把是纯算术</u>。另外三把都要你去查、去问、去承认自己不知道——那才是这三小时真正花时间的地方。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>「麦肯锡四把尺子：市场规模 / 竞争 / 单位经济 / 护城河……每把尺子当场给自己打分」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
