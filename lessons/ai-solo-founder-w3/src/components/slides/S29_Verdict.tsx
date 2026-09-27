import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH6 收口 · outline L11 step ④ —— 裁决：继续 / 调整 / 换
const V = [
	{
		k: '继续',
		en: 'CONTINUE',
		c: colors.green,
		txt: colors.black,
		when: '算式站得住、形态和定价对得上、四把尺子里至少有一把是强项',
		then: '回去照着做。下周开始的每一件事，都以这一页为准。',
	},
	{
		k: '调整',
		en: 'REVISE',
		c: colors.yellow,
		txt: colors.black,
		when: '大方向对，但某一个具体的东西错了——客户选窄了、价格定低了、形态挑错了',
		then: '写清是六个字段里的哪一个，回去改 W1 那份原件。不要开新文档。',
	},
	{
		k: '换',
		en: 'STOP',
		c: colors.red,
		txt: colors.white,
		when: '证据撑不住：没人真遇到过、没人在为它花钱、算式怎么算都不成立',
		then: '本周内重跑 W1 锁方向 + W2 简版访谈，并告诉组内召集人。',
	},
];

export default function S29_Verdict() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§7 · 裁决"
					tagBg={colors.red}
					title="三个字，选一个，写下来"
					sub="今天所有的算、所有的追问，都是为了这三个字。写完发进组内群——让同组的人有机会拍醒你。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 16 }}>
					{V.map((v, i) => (
						<motion.div
							key={v.k}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.14 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}
						>
							<div style={{ background: v.c, color: v.txt, padding: '18px 20px', borderBottom: '3px solid #000' }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1 }}>{v.k}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, letterSpacing: 2, marginTop: 6, opacity: 0.75 }}>{v.en}</div>
							</div>
							<div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1, marginBottom: 4 }}>什么时候选它</div>
									<div style={{ fontSize: 16, lineHeight: 1.5 }}>{v.when}</div>
								</div>
								<div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '2px solid #000' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, color: '#888', letterSpacing: 1, marginBottom: 4 }}>然后做什么</div>
									<div style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 700 }}>{v.then}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '16px 24px', color: colors.white, display: 'flex', gap: 24, alignItems: 'center' }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.yellow, flexShrink: 0 }}>允许写「换」</div>
					<div style={{ fontSize: 18, lineHeight: 1.6 }}>
						这门课里，第三周换方向的人不是掉队的人，是省下了后面十二周的人。
						<b style={{ color: colors.yellow }}>现在换，比第十一周换便宜得多</b>——那时候你已经做了产品、建了品牌、发了内容。
					</div>
				</div>

				<Punchline bg={colors.red}>
					唯一不合格的答案是<u>「再看看」</u>。三小时之后还没有结论，说明今天该算的东西你还没算。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L11 step ④</b>「三选一并写清理由。选『调整』的回去改 W1 那份 SoT（改原件，不新建文件）；选『换』的当周内重跑一遍 W1 锁方向 + W2 简版访谈，组内召集人跟进。裁决写完发进组内群，让同组的人有机会拍醒你」；
					及 L11「<b>允许写「换」</b>：W3 换方向比 W11 换便宜」。
				</SourceNote>
			</Body>
		</Slide>
	);
}
