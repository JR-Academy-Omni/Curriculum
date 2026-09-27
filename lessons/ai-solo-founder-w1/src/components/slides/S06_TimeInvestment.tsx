import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm, CountUp } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 时间投入 —— 来源：../../ai-solo-founder-bootcamp/public/outline.json 逐节 duration 汇总
//   Lesson(180min)×15 = 2700min = 45h 现场
//   Information 合计 2545min = 42.4h 周中自学
//   InteractiveLab 合计 375min = 6.2h Lab
//   → 93.7h ≈ 94h；÷15 周 ≈ 6.2h/周（周日现场 3h + 周中约 3.2h）
//   另有 W8 两场周中线上 workshop（L32a / L33a，各 90min = 3h），不含在这 94h 里，见页脚。

function Stat({
	label,
	value,
	unit,
	sub,
	bg,
	delay,
	big,
}: { label: string; value: string; unit: string; sub: string; bg: string; delay: number; big?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.35, delay }}
			style={{
				border,
				boxShadow: big ? shadow : shadowSm,
				background: bg,
				padding: big ? '20px 22px' : '18px 20px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>{label}</div>
			<div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
				<span style={{ fontFamily: fonts.heading, fontSize: big ? 64 : 46, fontWeight: 900, lineHeight: 1 }}>{value}</span>
				<span style={{ fontFamily: fonts.mono, fontSize: big ? 22 : 18, fontWeight: 700 }}>{unit}</span>
			</div>
			<div style={{ fontSize: big ? 17 : 16, lineHeight: 1.4, marginTop: 7, fontWeight: 500 }}>{sub}</div>
		</motion.div>
	);
}

export default function S06_TimeInvestment() {
	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 56px 30px' }}>
				<SlideHead
					tag="§1 · 你要付出的时间"
					tagBg={colors.orange}
					title="15 周一共约 94 小时 —— 平均每周约 6 小时"
					titleSize="clamp(28px, 2.6vw, 42px)"
					sub="先看清每周需要留出多少时间，再决定怎样把现场课、自学和动手任务排进生活。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr 1fr 1fr', gap: 14 }}>
					<Stat
						big
						label="TOTAL · 15 周合计"
						value="94"
						unit="小时"
						sub="约 94 小时（93.7h），摊到 15 周 ≈ 每周 6.2 小时"
						bg={colors.yellow}
						delay={0.1}
					/>
					<Stat
						label="现场 · 每周日下午"
						value="45"
						unit="h"
						sub="15 节 × 3 小时，线下 office + 同步直播"
						bg="#FFE9E4"
						delay={0.2}
					/>
					<Stat
						label="周中自学"
						value="42.4"
						unit="h"
						sub="录播 / 图文 / 模板，自己排时间，不绑定哪一天"
						bg="#DCEBFF"
						delay={0.3}
					/>
					<Stat
						label="互动 Lab"
						value="6.2"
						unit="h"
						sub="浏览器内动手 + 即时验收，共 9 个 Lab"
						bg="#D9F2E4"
						delay={0.4}
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.55 }}
					style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 16 }}
				>
					<div style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.yellow, marginBottom: 8 }}>
							你的一周长这样
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.55 }}>
							<b>周日下午 3 小时</b> —— 现场课，动手为主
							<br />
							<b>
								周中约 <CountUp value={40} suffix=" 分钟" /> / 晚
							</b>{' '}
							—— 自学 + Lab 摊到 5 个晚上
						</div>
						<div style={{ marginTop: 8, fontSize: 16, color: '#cfd3e6', lineHeight: 1.5 }}>
							周中部分<b style={{ color: colors.yellow }}>没有固定日子</b>，你自己排；做最小交付、内容与获客实验的周会更重，整理与复盘的周会更轻。
						</div>
					</div>

					<div style={{ border, boxShadow: shadowSm, background: '#FFF6D6', padding: '16px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
							周中怎么推进
						</div>
						<div style={{ fontSize: 20, lineHeight: 1.55 }}>
							现场定下一个动作，周中由你执行；AI 可以协助调研、整理和起草，但客户联系、承诺、付款与专业判断必须由你确认。
							<span style={{ display: 'block', marginTop: 8, fontSize: 17, fontWeight: 600 }}>
								下周带回结果和证据，再决定 SoT 要不要更新。
							</span>
						</div>
					</div>
				</motion.div>

				<Punchline bg={colors.red}>
					现在就给自己留出每周约 6 小时：<b>3 小时现场课 + 约 3 小时周中推进。</b>
					<span style={{ display: 'block', marginTop: 6, fontSize: 15, fontWeight: 500, fontFamily: fonts.mono, color: colors.yellow }}>
						* 94h 按 outline.json 逐节 duration 汇总。W8 另有 2 场周中线上 workshop（AI 视频实操陪跑 / 小红书图文诊断室，各 90min）不含在内，算上是 96.7h。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
