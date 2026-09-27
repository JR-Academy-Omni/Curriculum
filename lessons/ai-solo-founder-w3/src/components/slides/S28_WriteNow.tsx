import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// CH6 · 现场 20 分钟写 —— outline L09 step ⑥ 的现场部分（原 35min，压到 20min，余下进 L11 自学）
const BLOCKS = [
	{ t: '0–5 min', h: '证据段', d: '翻你 W2 的访谈记录，数出 L2 和 L3 各几个人。只填数字，不写形容词。' },
	{ t: '5–11 min', h: '算式段', d: '把下午算的四个数抄进去，再补一句「这些单主要从哪来」。' },
	{ t: '11–16 min', h: '形态与定价段', d: '形态一个词、收钱方式一个词、价格一个数、五家竞品的对照表附上。' },
	{ t: '16–20 min', h: '裁决段', d: '三个字选一个，写两句理由，再写 Top 2 风险和应对。' },
];

export default function S28_WriteNow() {
	return (
		<Slide bg={colors.blue}>
			<Body>
				<SlideHead
					tag="§7 · 动笔 · 20 min"
					tagBg={colors.white}
					title="现在开始写。安静二十分钟。"
					sub="不用写漂亮，用你自己的话写。写不出来的地方，说明那一块你还不知道——把「不知道」三个字写上去，也算数。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 18 }}>
					{BLOCKS.map((b, i) => (
						<motion.div
							key={b.t}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.14 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px', minHeight: 190, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, background: colors.black, color: colors.yellow, padding: '3px 10px', alignSelf: 'flex-start' }}>
								{b.t}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, margin: '12px 0 10px' }}>{b.h}</div>
							<div style={{ fontSize: 16, lineHeight: 1.55 }}>{b.d}</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '15px 20px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 9 }}>写的时候可以用 AI，但只能这么用</div>
						<div style={{ fontSize: 16, lineHeight: 1.55 }}>
							让它帮你<b>整理</b>你说出来的东西、帮你<b>算</b>、帮你<b>挑刺</b>。
							<br />
							<b style={{ color: colors.red }}>不要让它替你填数字。</b>它编出来的证据，你自己会信，那才是最危险的。
						</div>
					</div>
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '15px 20px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 9 }}>线上的同学</div>
						<div style={{ fontSize: 16, lineHeight: 1.55 }}>
							同样二十分钟，写完把裁决那一段发到群里。
							<b>现场和线上这一节的产出是同一个标准</b>——写完才算参加了这节课。
						</div>
					</div>
				</div>

				<Punchline bg={colors.dark}>
					二十分钟写不完是正常的。<u>课后那份 60 分钟的自学任务，就是把它写完。</u>但裁决那一段，今天必须落地。
				</Punchline>
			</Body>
		</Slide>
	);
}
