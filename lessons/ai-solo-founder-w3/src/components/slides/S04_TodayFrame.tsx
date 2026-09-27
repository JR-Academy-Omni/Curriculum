import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 定调页 —— 今天怎么走 + 三种合格结论
// 时间表来源：outline.json L09 六个 step（原时长 25/30/25/40/25/35 = 180）
//   按 HANDOVER_DECKS.md §4.1（中段必有 30min Founder Exchange）等比压缩，环节顺序未动。
const AGENDA = [
	{ t: '14:10', h: '顾问怎么看一门生意', d: '把生意拆成可算的部件' },
	{ t: '14:25', h: '变现路径 + 赚钱算式', d: '钱从哪几条路进来，怎么算' },
	{ t: '14:50', h: '麦肯锡四把尺子', d: '市场 / 竞争 / 单位经济 / 护城河' },
	{ t: '15:10', h: 'Founder Exchange', d: '中场 30min，固定环节', mid: true },
	{ t: '15:40', h: '现场拆 3–4 个 idea', d: '上台 3 分钟，被追问到只剩骨头', live: true },
	{ t: '16:15', h: '形态决策 + 定价选型', d: '卖什么样的东西，怎么收钱' },
	{ t: '16:35', h: '现场写一页裁决书', d: '继续 / 调整 / 换，写下来' },
];

const VERDICTS = [
	{ k: '继续', c: colors.green, d: '算式站得住，形态和定价对得上，风险你认。回去照着做。' },
	{ k: '调整', c: colors.yellow, d: '方向没错，但某个字段错了。写清改哪一个，回去改 W1 那份 SoT 原件。' },
	{ k: '换', c: colors.red, d: '证据撑不住。今天换，比第十一周换便宜得多——这是今天最有价值的一种结论。' },
];

export default function S04_TodayFrame() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§0 · 今天怎么走"
					tagBg={colors.blue}
					title="今天不是让你放弃，是让你算清楚"
					sub="三种结论都合格。不合格的只有一种：三小时之后还是「我觉得应该有戏」。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 22 }}>
					{/* 左：时间表 */}
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 12 }}>
							三小时怎么走
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
							{AGENDA.map((a, i) => (
								<motion.div
									key={a.t}
									initial={{ opacity: 0, x: -12 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.12 + i * 0.06 }}
									style={{
										display: 'grid',
										gridTemplateColumns: '68px 1fr',
										gap: 12,
										alignItems: 'baseline',
										padding: '6px 8px',
										background: a.mid ? colors.yellow : a.live ? '#FFE9E4' : 'transparent',
										border: a.mid || a.live ? '2px solid #000' : '2px solid transparent',
									}}
								>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#555' }}>{a.t}</span>
									<span>
										<b style={{ fontSize: 17 }}>{a.h}</b>
										<span style={{ fontSize: 14.5, color: '#555' }}> — {a.d}</span>
									</span>
								</motion.div>
							))}
						</div>
					</div>

					{/* 右：三种结论 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888' }}>
							下课时你会写下三个字之一
						</div>
						{VERDICTS.map((v, i) => (
							<motion.div
								key={v.k}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.35, delay: 0.3 + i * 0.12 }}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 16px', display: 'flex', gap: 14 }}
							>
								<span
									style={{
										fontFamily: fonts.heading,
										fontSize: 30,
										fontWeight: 900,
										background: v.c,
										color: v.c === colors.red ? colors.white : colors.black,
										padding: '2px 14px',
										height: 'fit-content',
										flexShrink: 0,
									}}
								>
									{v.k}
								</span>
								<span style={{ fontSize: 16, lineHeight: 1.5 }}>{v.d}</span>
							</motion.div>
						))}
					</div>
				</div>

				<Punchline bg={colors.dark}>
					线上的同学：<u>每讲完一段我会点名问你们</u>。现场的个案问题找你所在城市的 Tutor，别打断主线——今天六个环节环环相扣，掉一个后面就接不上。
				</Punchline>
			</Body>
		</Slide>
	);
}
