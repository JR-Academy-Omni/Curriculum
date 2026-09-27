import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH3 · 尺子 Ⅰ —— 市场规模：自下而上算，不甩 TAM
const CHAIN = [
	{ h: '你能点名的名单', d: '真实存在、你有办法联系上的人或公司。写得出名字、找得到联系方式的那种。', unit: '个' },
	{ h: '你今年真能碰到多少', d: '不是名单总数。是按你每周的小时数，一年之内真能认真接触到的数量。', unit: '个' },
	{ h: '其中有多少会买', d: '你没数据就先猜，但要写下「我凭什么这么猜」。W7 之后拿真实成交率回来替换。', unit: '%' },
	{ h: '每个给你多少钱', d: '你的客单价 × 一年买几次。', unit: '$' },
];

export default function S13_RulerMarketSize() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§3 · 尺子 Ⅰ · 市场规模"
					tagBg={colors.blue}
					title="从你能点名的人开始算，不要从「万亿市场」开始"
					sub="报告里那个「全球市场规模 XX 亿」跟你没关系。你要算的是：你一年最多能碰到多少人，其中多少会掏钱。"
				/>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 10, marginBottom: 18 }}>
					{CHAIN.map((c, i) => (
						<motion.div
							key={c.h}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.14 + i * 0.12 }}
							style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}
						>
							<div style={{ flex: 1, background: colors.white, border, boxShadow: shadow, padding: '16px 18px', minHeight: 200, display: 'flex', flexDirection: 'column' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', letterSpacing: 1 }}>第 {i + 1} 步</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, margin: '8px 0 10px', lineHeight: 1.25 }}>{c.h}</div>
								<div style={{ fontSize: 15, lineHeight: 1.5, flex: 1 }}>{c.d}</div>
								<div style={{ marginTop: 12, fontFamily: fonts.mono, fontSize: 22, fontWeight: 700, background: colors.yellow, border: '2px solid #000', padding: '6px 10px', textAlign: 'center' }}>
									______ {c.unit}
								</div>
							</div>
							{i < CHAIN.length - 1 ? (
								<span style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 700, color: '#999' }}>×</span>
							) : null}
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					<div style={{ background: '#ffe3e0', border, padding: '14px 18px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 8 }}>❌ 不接受的算法</div>
						<div style={{ fontSize: 16, lineHeight: 1.55 }}>
							「这个行业全澳有 X 万家公司，我只要拿到 1% 就是……」
							<br />
							<b>1% 不是一个计划，是一个愿望。</b>它没告诉任何人你打算怎么碰到那些人。
						</div>
					</div>
					<div style={{ background: '#e6f7ea', border, padding: '14px 18px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, marginBottom: 8 }}>✅ 接受的算法</div>
						<div style={{ fontSize: 16, lineHeight: 1.55 }}>
							「我手上有一份 XXX 名单，一年能认真聊 XX 家，按 XX% 成交，每家一年给我 $XX。」
							<br />
							<b>每个数字都能被追问「凭什么」，而你答得上来。</b>
						</div>
					</div>
				</div>

				<Punchline bg={colors.dark}>
					自下而上算出来的数，通常比你想象的<b style={{ color: colors.yellow }}>小得多</b>——那是好事。
					<u>小而算得清的生意能做，大而算不清的只能想。</u>
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>「市场规模自下而上算，不甩 TAM」。四步链条为本 deck 展开的算法，页面上不预填任何数字。
				</SourceNote>
			</Body>
		</Slide>
	);
}
