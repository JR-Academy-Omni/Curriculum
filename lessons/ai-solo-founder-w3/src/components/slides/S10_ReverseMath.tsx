import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH2 · outline L09 step ② —— 用 $1k / $10k 两个量级反推需要多少客户
// 🚨 这一页上的每个数字都是现场除法的结果，不是市场数据、不是收入承诺。
//    客单价档位只是刻度尺，用来让学员看清自己的定价落在哪一格。
const PRICES = [20, 50, 100, 300, 1000, 3000];
const TARGETS = [1000, 10000];

function need(target: number, price: number) {
	return Math.ceil(target / price);
}

export default function S10_ReverseMath() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§2 · 反推"
					tagBg={colors.orange}
					title="你的定价，撑得到你想要的那个数吗"
					sub="下面全是除法。把你的客单价对到最近的一列，看看你要去哪儿找这么多人。"
				/>

				<div style={{ border, boxShadow: shadow, background: colors.white, overflow: 'hidden' }}>
					{/* 表头：客单价档位 */}
					<div style={{ display: 'grid', gridTemplateColumns: `230px repeat(${PRICES.length}, 1fr)`, background: colors.dark }}>
						<div style={{ padding: '13px 16px', color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, borderRight: '2px solid rgba(255,255,255,0.25)' }}>
							每月目标毛利 ＼ 客单价
						</div>
						{PRICES.map((p, i) => (
							<div
								key={p}
								style={{
									padding: '13px 8px',
									color: colors.yellow,
									fontFamily: fonts.mono,
									fontSize: 17,
									fontWeight: 700,
									textAlign: 'center',
									borderRight: i === PRICES.length - 1 ? 'none' : '2px solid rgba(255,255,255,0.25)',
								}}
							>
								${p}
								<span style={{ fontSize: 12, color: '#9aa4b0' }}>/月</span>
							</div>
						))}
					</div>

					{/* 每个目标一行 */}
					{TARGETS.map((t, r) => (
						<motion.div
							key={t}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.18 + r * 0.14 }}
							style={{
								display: 'grid',
								gridTemplateColumns: `230px repeat(${PRICES.length}, 1fr)`,
								borderTop: '2px solid #000',
								background: r === 0 ? colors.white : '#fdf5ee',
							}}
						>
							<div style={{ padding: '20px 16px', borderRight: '2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900 }}>${t.toLocaleString()}</span>
								<span style={{ fontSize: 13.5, color: '#666', marginTop: 2 }}>{r === 0 ? '先活下来的量级' : '替代一份工资的量级'}</span>
							</div>
							{PRICES.map((p, i) => {
								const n = need(t, p);
								const hard = n > 200;
								return (
									<div
										key={p}
										style={{
											padding: '18px 6px',
											textAlign: 'center',
											borderRight: i === PRICES.length - 1 ? 'none' : '2px solid #000',
											background: hard ? '#ffe3e0' : 'transparent',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
										}}
									>
										<span style={{ fontFamily: fonts.mono, fontSize: 27, fontWeight: 700, color: hard ? colors.red : colors.black }}>{n}</span>
										<span style={{ fontSize: 12.5, color: '#777' }}>个付费客户</span>
									</div>
								);
							})}
						</motion.div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
					<div style={{ background: '#ffe3e0', border, padding: '12px 16px', fontSize: 16, lineHeight: 1.5 }}>
						<b style={{ color: colors.red }}>红格子 = 超过 200 个付费客户。</b>
						一个人做，从零开始，把两百个人变成掏钱的客户是什么工作量——先自己想两秒钟再往下看。
					</div>
					<div style={{ background: '#e6f7ea', border, padding: '12px 16px', fontSize: 16, lineHeight: 1.5 }}>
						<b>同一个目标，右边比左边省力得多。</b>
						所以「涨价」往往比「拉新」更快见效——前提是你交付的东西真的值那个价。
					</div>
				</div>

				<Punchline bg={colors.dark}>
					<b style={{ color: colors.yellow }}>这一页是算术，不是承诺。</b>
					它不保证你能赚到任何一个数，只回答一件事：<u>按你现在的定价，要到那个数得服务多少人。</u>
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L09 step ②</b>「现场用 $1k MRR 和 $10k MRR 两个量级反推需要多少客户，很多人第一次发现自己的定价撑不到目标」。
					表内数字 = 目标 ÷ 客单价 的除法结果（向上取整），客单价档位为演算刻度，非市场调研数据。
				</SourceNote>
			</Body>
		</Slide>
	);
}
