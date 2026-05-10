import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const PAST = [
	{ y: '2014', t: 'AngularJS 1.x 出来 · 大部分公司还在 jQuery' },
	{ y: '2015-16', t: '一批前端早学 · 直接跳过 Junior 拿 Mid offer' },
	{ y: '2017', t: 'React + Angular 2 普及 · 红利窗口关上' },
	{ y: '——', t: '后面进场的人 = 跟所有人一起卷 Junior' },
];

const NOW = [
	{ y: '2024', t: 'GPT-4 / Claude 3 出来 · 大部分公司还在观望' },
	{ y: '2025-26', t: '一批人早学 AI Engineer · 直接拿 AI 岗 offer' },
	{ y: '2027+', t: 'AI Engineer 普及 · 红利窗口关上' },
	{ y: '——', t: '这次更狠：企业只招 AI Engineer · 不要其他岗' },
];

export default function L05d_AngularJsAnalogy() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, padding: '28px 48px' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 18 }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px',
						background: colors.red, color: colors.white,
						fontFamily: fonts.mono, fontSize: 17, fontWeight: 900, letterSpacing: 2,
						border, boxShadow: shadowSm, transform: 'rotate(-1.5deg)', marginBottom: 12,
					}}>
						⚡ HISTORICAL WINDOW · 同款剧本
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 52, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: colors.black,
					}}>
						现在 ={' '}
						<span style={{
							display: 'inline-block', background: colors.dark, color: colors.yellow,
							padding: '0 14px', border: `4px solid ${colors.black}`,
							boxShadow: `5px 5px 0 ${colors.black}`, marginRight: 6,
						}}>
							当年 AngularJS
						</span>
						弯道超车窗口
					</h2>
				</motion.div>

				<div style={{
					display: 'grid', gridTemplateColumns: '1fr 90px 1fr', gap: 14,
					alignItems: 'stretch', marginBottom: 16,
				}}>
					{/* 左：过去 AngularJS 故事 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						style={{
							background: colors.white, border, boxShadow: shadow,
							padding: '20px 22px', opacity: 0.85,
						}}
					>
						<div style={{
							display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12,
						}}>
							<div style={{
								fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
								color: '#888', letterSpacing: -0.5, lineHeight: 1,
							}}>
								过去
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 800,
								color: '#aaa', letterSpacing: 2,
							}}>
								2014 — 2017
							</div>
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
							color: colors.black, lineHeight: 1.2, letterSpacing: -0.4, marginBottom: 14,
						}}>
							前端 + AngularJS
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{PAST.map((p, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
									style={{
										display: 'grid', gridTemplateColumns: '70px 1fr', gap: 10,
										alignItems: 'baseline',
									}}
								>
									<div style={{
										fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
										color: colors.dark, letterSpacing: 0.5, textAlign: 'right',
									}}>
										{p.y}
									</div>
									<div style={{
										fontFamily: fonts.body, fontSize: 17, color: '#333',
										fontWeight: 600, lineHeight: 1.4,
									}}>
										{p.t}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 中：同款剧本 */}
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						style={{
							display: 'flex', flexDirection: 'column',
							alignItems: 'center', justifyContent: 'center', gap: 10,
						}}
					>
						<div style={{
							padding: '8px 12px', background: colors.yellow, color: colors.black,
							fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
							border: `4px solid ${colors.black}`, boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-3deg)', textAlign: 'center', lineHeight: 1.1,
						}}>
							同款<br />剧本
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 50, fontWeight: 900,
							color: colors.red, lineHeight: 1,
						}}>
							→
						</div>
						<div style={{
							fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
							color: '#666', letterSpacing: 1, textAlign: 'center', lineHeight: 1.3,
						}}>
							每 10 年<br />一次窗口
						</div>
					</motion.div>

					{/* 右：现在 AI Engineer */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							background: colors.dark, color: colors.white, border,
							boxShadow: `6px 6px 0 ${colors.red}`,
							padding: '20px 22px',
						}}
					>
						<div style={{
							display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12,
						}}>
							<div style={{
								fontFamily: fonts.heading, fontSize: 32, fontWeight: 900,
								color: colors.yellow, letterSpacing: -0.5, lineHeight: 1,
							}}>
								现在
							</div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 800,
								color: 'rgba(255,255,255,0.6)', letterSpacing: 2,
							}}>
								2024 — 2026
							</div>
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
							color: colors.white, lineHeight: 1.2, letterSpacing: -0.4, marginBottom: 14,
						}}>
							全栈 + AI Engineer
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
							{NOW.map((p, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: 10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
									style={{
										display: 'grid', gridTemplateColumns: '70px 1fr', gap: 10,
										alignItems: 'baseline',
									}}
								>
									<div style={{
										fontFamily: fonts.mono, fontSize: 17, fontWeight: 900,
										color: colors.yellow, letterSpacing: 0.5, textAlign: 'right',
									}}>
										{p.y}
									</div>
									<div style={{
										fontFamily: fonts.body, fontSize: 17, color: colors.white,
										fontWeight: 600, lineHeight: 1.4,
									}}>
										{p.t}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* 底部 punchline */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.0 }}
					style={{
						padding: '14px 22px',
						background: colors.indigo, color: colors.white,
						border, boxShadow: `6px 6px 0 ${colors.yellow}`,
						fontFamily: fonts.heading, fontSize: 22, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					上一波你 <span style={{ background: '#444', padding: '0 6px' }}>错过 / 没赶上</span> · 这一波{' '}
					<span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', border: `2px solid ${colors.black}` }}>
						必须抓住
					</span>{' '}
					· 企业只招 AI Engineer，不要其他岗
				</motion.div>
			</div>
		</Slide>
	);
}
