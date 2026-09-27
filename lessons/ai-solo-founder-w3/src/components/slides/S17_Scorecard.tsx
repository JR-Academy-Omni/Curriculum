import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH3 收口 —— 四把尺子当场打分（outline step ③「每把尺子当场给自己打分」）
const ROWS = [
	{ r: 'Ⅰ · 市场规模', c: colors.blue, low: '算不出来，或只有「行业很大」', high: '有名单、有触达量、有客单价，乘得出来' },
	{ r: 'Ⅱ · 竞争', c: colors.orange, low: '说不出客户现在把钱付给谁', high: '点得出替代方案，也知道自己抢的是哪一笔' },
	{ r: 'Ⅲ · 单位经济', c: colors.green, low: '没算过，或者算了没扣自己时间', high: '两套贡献都算过，都是正的' },
	{ r: 'Ⅳ · 护城河', c: colors.purple, low: '三种都对不上', high: '至少一种对得上，并说得出为什么是你' },
];

export default function S17_Scorecard() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§3 · 现场打分"
					tagBg={colors.dark}
					title="四把尺子，现在给自己打分"
					sub="1 分 = 完全答不上来，5 分 = 有数字有出处。别客气，虚高的分数骗不到任何人，只会浪费你后面十二周。"
				/>

				<div style={{ border, boxShadow: shadow, background: colors.white, overflow: 'hidden', marginBottom: 16 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '210px 1.25fr 1.25fr 250px', background: colors.dark }}>
						{['尺子', '1 分长这样', '5 分长这样', '我的分数'].map((h, i) => (
							<div
								key={h}
								style={{
									padding: '12px 16px',
									color: i === 3 ? colors.yellow : colors.white,
									fontFamily: fonts.mono,
									fontSize: 14,
									fontWeight: 700,
									textAlign: i === 3 ? 'center' : 'left',
									borderRight: i === 3 ? 'none' : '2px solid rgba(255,255,255,0.25)',
								}}
							>
								{h}
							</div>
						))}
					</div>
					{ROWS.map((row, i) => (
						<motion.div
							key={row.r}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.15 + i * 0.09 }}
							style={{ display: 'grid', gridTemplateColumns: '210px 1.25fr 1.25fr 250px', borderTop: '2px solid #000', background: i % 2 === 0 ? colors.white : '#fdf5ee' }}
						>
							<div style={{ padding: '14px 16px', borderRight: '2px solid #000', display: 'flex', alignItems: 'center', gap: 10 }}>
								<span style={{ width: 8, height: 34, background: row.c, flexShrink: 0 }} />
								<b style={{ fontSize: 17.5 }}>{row.r}</b>
							</div>
							<div style={{ padding: '14px 16px', borderRight: '2px solid #000', fontSize: 15.5, lineHeight: 1.45, color: '#666', display: 'flex', alignItems: 'center' }}>
								{row.low}
							</div>
							<div style={{ padding: '14px 16px', borderRight: '2px solid #000', fontSize: 15.5, lineHeight: 1.45, display: 'flex', alignItems: 'center' }}>
								{row.high}
							</div>
							<div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
								{[1, 2, 3, 4, 5].map((n) => (
									<span
										key={n}
										style={{
											width: 34,
											height: 34,
											border: '2px solid #000',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontFamily: fonts.mono,
											fontSize: 15,
											fontWeight: 700,
											background: colors.white,
										}}
									>
										{n}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
					{[
						{ h: '有任何一把是 1–2 分', c: '#ffe3e0', d: '别急着做产品。今天下课先去补那一把——补不动的，那就是「换」的信号。' },
						{ h: '全部 3 分左右', c: '#fff7d6', d: '典型状态。挑最低的那把，本周就去补，下周再看它有没有动。' },
						{ h: '有 4–5 分的', c: '#e6f7ea', d: '好消息：那一把就是你的主场。定价、讲故事、找客户，都从它出发。' },
					].map((x) => (
						<div key={x.h} style={{ background: x.c, border, padding: '12px 16px' }}>
							<div style={{ fontSize: 17, fontWeight: 800, marginBottom: 6 }}>{x.h}</div>
							<div style={{ fontSize: 15, lineHeight: 1.5 }}>{x.d}</div>
						</div>
					))}
				</div>

				<Punchline bg={colors.red}>
					打完分先别改。<u>记住你最低的那一把</u>——等一下上台被拆的时候，Stan 大概率就是从那儿开始问的。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ③</b>末句「每把尺子当场给自己打分」。1 分 / 5 分的判据与三档判读为本 deck 展开。
				</SourceNote>
			</Body>
		</Slide>
	);
}
