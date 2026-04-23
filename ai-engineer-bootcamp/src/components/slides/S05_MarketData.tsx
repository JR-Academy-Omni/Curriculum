import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface SalaryRow {
	flag: string;
	country: string;
	median: string;
	range: string;
	usd: string; // 统一 USD 参考
}

// 中位数为总包 (Total Comp: base + bonus + equity)
// 数据来源: Levels.fyi / LinkedIn / seek.com.au / Glassdoor / 拉勾脉脉 / JobStreet · 2025-Q4 ~ 2026-Q1
const salaries: SalaryRow[] = [
	{ flag: '🇺🇸', country: '美国',     median: 'USD 280K',  range: '180K – 600K+', usd: '$280K' },
	{ flag: '🇸🇬', country: '新加坡',   median: 'SGD 180K',  range: '130K – 280K',  usd: '$133K' },
	{ flag: '🇦🇺', country: '澳洲',     median: 'AUD 175K',  range: '145K – 240K',  usd: '$115K' },
	{ flag: '🇬🇧', country: '英国',     median: '£ 125K',    range: '90K – 200K',   usd: '$158K' },
	{ flag: '🇨🇳', country: '中国大厂', median: '¥ 80W',     range: '55W – 150W',   usd: '$111K' },
	{ flag: '🇲🇾', country: '马来西亚', median: 'MYR 140K',  range: '105K – 240K',  usd: '$31K' },
];

interface MiniCard {
	label: string;
	big: string;
	secondary?: string;
	note: string;
	bg: string;
}

const miniCards: MiniCard[] = [
	{
		label: '全球 JD 同比增速',
		big: '+340%',
		secondary: 'AI Engineer / RAG / Agent 岗位',
		note: 'LinkedIn Economic Graph · 2025-Q4',
		bg: colors.green,
	},
	{
		label: '全球企业 AI 采购预算',
		big: '$297B',
		secondary: '2025-2026 两年投入总量',
		note: 'IDC Worldwide AI Spending Guide',
		bg: colors.teal,
	},
	{
		label: '招聘最疯的公司',
		big: '8 家',
		secondary: 'OpenAI · Anthropic · AWS · Canva · Meta · 字节 · 腾讯 · Shopee',
		note: '各家官网招聘页 + seek.com.au',
		bg: colors.red,
	},
];

export default function S05_MarketData() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			{/* 背景装饰 */}
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.25 }}>
				<div style={{ position: 'absolute', top: -80, right: -80, width: 260, height: 260, background: colors.indigo, transform: 'rotate(20deg)', border: `3px solid ${colors.black}` }} />
				<div style={{ position: 'absolute', bottom: -60, left: -60, width: 180, height: 180, background: colors.red, transform: 'rotate(-15deg)', border: `3px solid ${colors.black}` }} />
			</div>

			<div style={{
				position: 'relative', zIndex: 1,
				width: '94%', maxWidth: 1420, height: '90%', padding: '24px 32px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{
						display: 'inline-flex', alignItems: 'center', gap: 10, padding: '5px 12px',
						background: colors.yellow, border, boxShadow: `4px 4px 0 ${colors.red}`,
						marginBottom: 10, transform: 'rotate(-1deg)',
					}}>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, color: colors.black }}>MARKET · 2026</span>
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '48px',
						fontWeight: 900, color: colors.white, letterSpacing: -1.2, lineHeight: 1.1,
					}}>
						2026，AI Engineer{' '}
						<span style={{ color: colors.yellow }}>是什么处境？</span>
					</h2>
				</motion.div>

				{/* 6 国薪资对比（横向列） */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.45 }}
					style={{
						background: colors.yellow,
						border,
						boxShadow: shadow,
						padding: '14px 18px',
					}}
				>
					<div style={{
						display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
						marginBottom: 10,
					}}>
						<span style={{
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
							letterSpacing: 1.2, padding: '3px 10px',
							background: colors.black, color: colors.yellow,
						}}>
							SALARY · 6 国中位数
						</span>
						<span style={{
							fontFamily: fonts.heading, fontSize: '18px',
							fontWeight: 900, color: colors.black, letterSpacing: -0.3,
						}}>
							从硅谷到东南亚 · AI Engineer 全球都在抢人
						</span>
					</div>

					<div style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(6, 1fr)',
						gap: 8,
					}}>
						{salaries.map((s, i) => (
							<motion.div
								key={s.country}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.25 + i * 0.06, duration: 0.35 }}
								style={{
									background: colors.white,
									border: `2px solid ${colors.black}`,
									padding: '10px 10px 8px',
									display: 'flex', flexDirection: 'column', gap: 3,
									minWidth: 0,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
									<span style={{ fontSize: '26px', lineHeight: 1 }}>{s.flag}</span>
									<span style={{
										fontFamily: fonts.heading, fontSize: '13px',
										fontWeight: 900, color: colors.black, letterSpacing: -0.2,
									}}>
										{s.country}
									</span>
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: '17px',
									fontWeight: 900, color: colors.red, lineHeight: 1.05,
									letterSpacing: -0.3, marginTop: 2,
								}}>
									{s.median}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 9,
									color: '#666', fontWeight: 700,
								}}>
									range {s.range}
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 9,
									color: '#999', fontWeight: 600,
									borderTop: '1px dashed #ccc', paddingTop: 3, marginTop: 2,
								}}>
									≈ {s.usd} USD
								</div>
							</motion.div>
						))}
					</div>

					{/* 顶尖 AI Lab 总包 callout */}
					<div style={{
						marginTop: 8,
						display: 'grid',
						gridTemplateColumns: '1fr auto',
						gap: 10,
						alignItems: 'center',
					}}>
						<div style={{
							padding: '7px 12px',
							background: colors.red,
							color: colors.white,
							border: `2px solid ${colors.black}`,
							display: 'flex',
							alignItems: 'center',
							gap: 10,
							flexWrap: 'wrap',
						}}>
							<span style={{
								fontFamily: fonts.mono,
								fontSize: 10,
								fontWeight: 800,
								padding: '2px 7px',
								background: colors.yellow,
								color: colors.black,
								letterSpacing: 0.5,
							}}>
								顶尖 AI Lab · 总包
							</span>
							<span style={{
								fontFamily: fonts.heading,
								fontSize: '15px',
								fontWeight: 800,
								color: colors.white,
							}}>
								OpenAI · Anthropic · Google DeepMind Senior ={' '}
								<span style={{
									fontFamily: fonts.mono,
									fontSize: '17px',
									fontWeight: 900,
									color: colors.yellow,
								}}>
									$500K – $1M+
								</span>
							</span>
						</div>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 10,
							color: '#555',
							fontWeight: 700,
						}}>
							Anthropic 中位数 $746K · DeepMind Senior $893K · Fortune 2026
						</div>
					</div>

					<div style={{
						fontFamily: fonts.mono, fontSize: 10, color: '#555',
						fontWeight: 600, marginTop: 6, letterSpacing: 0.3,
					}}>
						📊 总包 (base + bonus + equity) · Levels.fyi · LinkedIn · seek.com.au · Glassdoor · 拉勾脉脉 · JobStreet · 2025-Q4 ~ 2026-Q1
					</div>
				</motion.div>

				{/* 底部 3 张小卡片 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 12,
					flex: 1,
					minHeight: 0,
				}}>
					{miniCards.map((c, i) => {
						const textColor = c.bg === colors.red ? colors.white : colors.black;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
								style={{
									background: c.bg,
									border,
									boxShadow: shadowSm,
									padding: '12px 16px',
									color: textColor,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
								}}
							>
								<div style={{
									fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
									opacity: 0.8, letterSpacing: 1,
									textTransform: 'uppercase',
								}}>
									{c.label}
								</div>

								<div style={{
									fontFamily: fonts.mono,
									fontSize: '46px',
									fontWeight: 900, lineHeight: 1,
									letterSpacing: -1.5,
									marginTop: 4,
								}}>
									{c.big}
								</div>

								{c.secondary && (
									<div style={{
										fontFamily: fonts.heading, fontSize: '13px',
										fontWeight: 700, marginTop: 6, lineHeight: 1.3,
									}}>
										{c.secondary}
									</div>
								)}

								<div style={{
									fontFamily: fonts.mono, fontSize: 10,
									fontWeight: 600, opacity: 0.7,
									marginTop: 6, paddingTop: 4,
									borderTop: `1.5px solid ${textColor === colors.white ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.2)'}`,
								}}>
									{c.note}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</Slide>
	);
}
