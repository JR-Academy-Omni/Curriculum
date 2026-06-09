import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

/**
 * S03 — 从薪水视角揭晓：AI Engineer 在澳洲市场普遍 $150k+ / $200k+ AUD
 * 红线（CLAUDE.md）：引用公开市场行情可以，绝不承诺"学完拿 X 薪资"。
 * 数据来源：Seek / LinkedIn Talent Insights / Levels.fyi (AU) / Glassdoor —— 区间值，非精确数字。
 */

interface SalaryBand {
	level: string;
	yoe: string;
	anchor: string;
	range: string;
	note: string;
	bg: string;
	textColor: string;
	rotate: number;
}

const bands: SalaryBand[] = [
	{
		level: 'Mid · 中级',
		yoe: '3–5 yrs',
		anchor: '$150k+',
		range: '$130–180k base',
		note: '能独立交付 LLM 应用 / RAG / Agent 项目',
		bg: colors.yellow,
		textColor: colors.black,
		rotate: -1.2,
	},
	{
		level: 'Senior+ · 高级及以上',
		yoe: '5+ yrs',
		anchor: '$200k+',
		range: '$180–250k base · +super/bonus/equity',
		note: '能 own 一整条 AI pipeline / 带小团队 / 跟 stakeholder 对话',
		bg: colors.dark,
		textColor: colors.white,
		rotate: 1.2,
	},
];

interface Action {
	num: string;
	title: string;
	desc: string;
}

const actions: Action[] = [
	{
		num: '01',
		title: '先去对市场价',
		desc: 'Seek / Levels.fyi (AU) / Glassdoor 拉真实区间，HR 报价 ≠ 市场价。别问朋友，看数据。',
	},
	{
		num: '02',
		title: '简历必须"看得懂"',
		desc: '今晚 3 小时核心 — 招聘官 6 秒扫一份简历，关键词没踩对 / 项目没数据化 = 直接淘汰。',
	},
	{
		num: '03',
		title: '面试用"框架 + 项目"答',
		desc: 'RAG / Agent / Prompt 一面 15 道题（见 P34），三段式：框架 → 技术名 → 自己项目，少废话。',
	},
	{
		num: '04',
		title: '升薪最快的路是换',
		desc: '内部加薪一般 5–10%/年，跳一次普遍 +20–40%。攒满 2 个 AI 项目就开始投，别等"准备好"。',
	},
];

export default function S03_Poll1Reveal() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1480, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标签 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}
				>
					<span style={{ padding: '7px 16px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}` }}>
						REVEAL · 01
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#666' }}>
						从薪水视角看 AI Engineer · 澳洲市场
					</span>
				</motion.div>

				{/* 主标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '54px',
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: -1.5,
						margin: '0 0 4px',
					}}
				>
					AI Engineer 在澳洲
					<span style={{ display: 'inline-block', background: colors.dark, color: colors.yellow, padding: '0 16px', marginLeft: 12, transform: 'rotate(-1.5deg)', border, boxShadow: shadow }}>
						$150k+ / $200k+
					</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					style={{ fontFamily: fonts.body, fontSize: 18, color: '#555', margin: '0 0 14px', fontWeight: 600 }}
				>
					这是市场报价 — 不是承诺。<b>如果你低于这个区间，下面 4 件事先做。</b>
				</motion.p>

				{/* 两栏：左 薪水档位 / 右 行动方案 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 18, minHeight: 0 }}>
					{/* 左：薪水档位 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						{bands.map((b, i) => (
							<motion.div
								key={b.level}
								initial={{ opacity: 0, y: 28, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: b.rotate }}
								transition={{ delay: 0.4 + i * 0.12, duration: 0.45 }}
								style={{
									background: b.bg,
									color: b.textColor,
									border,
									boxShadow: shadow,
									padding: '18px 22px',
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									minHeight: 0,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>
										{b.level}
									</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, opacity: 0.75 }}>
										{b.yoe}
									</span>
								</div>
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 72,
									fontWeight: 900,
									lineHeight: 1,
									letterSpacing: -3,
									marginBottom: 6,
								}}>
									{b.anchor}
								</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, opacity: 0.9, marginBottom: 6 }}>
									{b.range}
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 15, fontWeight: 600, opacity: 0.9, lineHeight: 1.35 }}>
									{b.note}
								</div>
							</motion.div>
						))}
					</div>

					{/* 右：低于这个价怎么做 */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.45 }}
						style={{
							background: colors.white,
							border,
							boxShadow: shadow,
							padding: '18px 22px',
							display: 'flex',
							flexDirection: 'column',
							minHeight: 0,
						}}
					>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
								低于这个价 → 做这 4 件事
							</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
							{actions.map((a, i) => (
								<motion.div
									key={a.num}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.7 + i * 0.08, duration: 0.35 }}
									style={{
										display: 'flex',
										gap: 14,
										padding: '10px 12px',
										background: i === 1 ? '#fff8d6' : '#f7f5ef',
										borderLeft: `5px solid ${i === 1 ? colors.red : colors.dark}`,
									}}
								>
									<div style={{
										fontFamily: fonts.heading,
										fontSize: 28,
										fontWeight: 900,
										color: i === 1 ? colors.red : colors.dark,
										lineHeight: 1,
										letterSpacing: -1,
										flexShrink: 0,
										width: 44,
									}}>
										{a.num}
									</div>
									<div style={{ flex: 1, minWidth: 0 }}>
										<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.black, lineHeight: 1.25, marginBottom: 3 }}>
											{a.title}
											{i === 1 && (
												<span style={{ marginLeft: 8, padding: '2px 8px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 0.5, verticalAlign: 'middle' }}>
													今晚课
												</span>
											)}
										</div>
										<div style={{ fontFamily: fonts.body, fontSize: 14, color: '#333', fontWeight: 500, lineHeight: 1.4 }}>
											{a.desc}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 底部结论 + 数据来源 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.05 }}
					style={{ marginTop: 14, textAlign: 'center' }}
				>
					<div style={{ display: 'inline-block', padding: '12px 24px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.red}`, fontFamily: fonts.heading, fontSize: 20, fontWeight: 800, lineHeight: 1.3 }}>
						行情就在那儿。<span style={{ color: colors.yellow }}>低于市场价 ≠ 你不行</span> · 多半是简历 + 面试没写到点上
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					style={{ marginTop: 8, textAlign: 'center', fontFamily: fonts.mono, fontSize: 12, color: '#888', fontWeight: 600 }}
				>
					数据来源：Seek AU · LinkedIn Talent Insights AU · Levels.fyi (AU) · Glassdoor AU · 2025 H2 公开数据 · 区间值非精确数字
				</motion.div>
			</div>
		</Slide>
	);
}
