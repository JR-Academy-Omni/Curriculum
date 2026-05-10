import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const BREAKDOWN = [
	{ k: 'Lab + Quest 实操', h: 250, color: colors.green, sub: '80 Lab + 12 Quest · 浏览器内 / 真电脑' },
	{ k: 'P3 团队项目', h: 350, color: colors.red, sub: 'Project 1/2/3 + Sprint 真业务 commit' },
	{ k: '直播 + 录播 跟练', h: 200, color: colors.indigo, sub: '37 直播 + 77 录播 同步打代码' },
	{ k: 'AI Coding 自由探索', h: 200, color: colors.purple, sub: 'Cursor / Claude Code 自己造小工具 · 哪怕 vibe' },
];

export default function L_Study1000Hours() {
	const total = BREAKDOWN.reduce((s, b) => s + b.h, 0);

	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '32px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 22 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 16, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, transform: 'rotate(-1.5deg)', marginBottom: 14,
					}}>
						⏱ 学习建议 · 时长承诺
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 64, fontWeight: 900,
						letterSpacing: -2, lineHeight: 1, color: colors.black,
					}}>
						6 个月内累计{' '}
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 16px', border: `4px solid ${colors.black}`,
							boxShadow: `6px 6px 0 ${colors.black}`,
						}}>
							1000 小时 coding
						</span>
					</h2>
					<div style={{
						marginTop: 12, fontFamily: fonts.body, fontSize: 22, color: '#444',
						fontWeight: 600, lineHeight: 1.4,
					}}>
						哪怕是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>AI Coding</span> · 也算时间 · 关键是手在键盘上 · 大脑在工程
					</div>
				</motion.div>

				{/* 1000 小时拆解 */}
				<div style={{
					background: colors.white, border, boxShadow: shadow,
					padding: '20px 24px',
				}}>
					<div style={{
						display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16,
					}}>
						<div style={{
							fontFamily: fonts.heading, fontSize: 80, fontWeight: 900,
							color: colors.red, letterSpacing: -3, lineHeight: 1,
						}}>
							{total}
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
							color: colors.black, letterSpacing: -1, lineHeight: 1,
						}}>
							小时 · 怎么分？
						</div>
						<div style={{
							marginLeft: 'auto',
							padding: '6px 14px', background: colors.dark, color: colors.yellow,
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 1,
							border: `2.5px solid ${colors.black}`,
						}}>
							= ~ 40 h / 周 × 25 周
						</div>
					</div>

					{/* Stacked bar */}
					<div style={{
						display: 'flex', height: 40, border: `3px solid ${colors.black}`, marginBottom: 18,
					}}>
						{BREAKDOWN.map((b) => (
							<div
								key={b.k}
								style={{
									flex: b.h, background: b.color, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1,
									borderRight: `2px solid ${colors.black}`,
								}}
							>
								{b.h}h
							</div>
						))}
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
						{BREAKDOWN.map((b, i) => (
							<motion.div
								key={b.k}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
								style={{
									display: 'grid', gridTemplateColumns: '14px 1fr 70px', gap: 12,
									alignItems: 'center', padding: '10px 12px',
									background: colors.warmBg, border: `2.5px solid ${colors.black}`,
								}}
							>
								<div style={{ width: 14, height: 14, background: b.color, border: `2px solid ${colors.black}` }} />
								<div>
									<div style={{
										fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
										color: colors.black, letterSpacing: -0.3, lineHeight: 1.15,
									}}>
										{b.k}
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 13, color: '#666',
										fontWeight: 700, marginTop: 3, letterSpacing: 0.5,
									}}>
										{b.sub}
									</div>
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
									color: b.color, letterSpacing: -0.5, textAlign: 'right',
								}}>
									{b.h}h
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 18, padding: '14px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `5px 5px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					1000 小时是 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>底线</span> · 不是上限 · 真实想拿 offer 的同期都跑到 1500h+
				</motion.div>
			</div>
		</Slide>
	);
}
