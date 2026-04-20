import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

// 生成伪 QR 码格子 — 纯视觉占位
const QR_SIZE = 13;
const QR_GRID: boolean[][] = (() => {
	// 固定种子伪随机，保证每次渲染一致
	const grid: boolean[][] = [];
	let seed = 42;
	const rand = () => {
		seed = (seed * 9301 + 49297) % 233280;
		return seed / 233280;
	};
	for (let y = 0; y < QR_SIZE; y++) {
		const row: boolean[] = [];
		for (let x = 0; x < QR_SIZE; x++) {
			// 三个定位方块
			const inFinder =
				(x < 3 && y < 3) ||
				(x >= QR_SIZE - 3 && y < 3) ||
				(x < 3 && y >= QR_SIZE - 3);
			row.push(inFinder ? true : rand() > 0.45);
		}
		grid.push(row);
	}
	return grid;
})();

export default function S30_PricingCta() {
	return (
		<Slide bg={colors.dark} style={{ position: 'relative' }}>
			{/* 背景装饰 */}
			<div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
				<motion.div
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
					style={{
						position: 'absolute', top: -200, right: -200, width: 600, height: 600,
						border: `3px solid rgba(255,255,255,0.05)`, borderRadius: '50%',
					}}
				/>
				<div style={{
					position: 'absolute', bottom: 80, left: 100, width: 80, height: 80,
					background: colors.red, opacity: 0.25, transform: 'rotate(15deg)',
				}} />
				<div style={{
					position: 'absolute', top: 140, right: 140, width: 60, height: 60,
					background: colors.yellow, opacity: 0.2, transform: 'rotate(-10deg)',
				}} />
			</div>

			<div style={{
				position: 'relative', zIndex: 1,
				width: '94%', maxWidth: 1400, height: '90%', padding: '20px 16px',
				display: 'flex', flexDirection: 'column', gap: 16,
			}}>
				{/* 顶部徽章 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{
						display: 'inline-block',
						padding: '6px 20px', background: colors.yellow, color: colors.black,
						fontFamily: fonts.heading, fontSize: 'clamp(14px,1.6vw,20px)', fontWeight: 900,
						border: `3px solid ${colors.black}`, boxShadow: `6px 6px 0 ${colors.red}`,
						letterSpacing: 0.5, transform: 'rotate(-1deg)',
					}}>
						🔥 第五期 · 5 月开课 · 限 30 人
					</div>
				</motion.div>

				{/* 两栏主体 */}
				<div style={{
					display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20,
					flex: 1, minHeight: 0,
				}}>
					{/* 左栏：价格 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.2 }}
						style={{
							background: colors.yellow, color: colors.black,
							border: `4px solid ${colors.black}`, boxShadow: `8px 8px 0 ${colors.red}`,
							padding: '24px 28px',
							display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
						}}
					>
						<div>
							<div style={{
								fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1,
								color: '#555',
							}}>
								AI ENGINEER BOOTCAMP V5
							</div>

							{/* 原价 */}
							<div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', gap: 10 }}>
								<span style={{
									fontFamily: fonts.mono, fontSize: 13, color: '#666', fontWeight: 700,
								}}>
									原价
								</span>
								<span style={{
									fontFamily: fonts.heading, fontSize: 'clamp(22px,2.5vw,34px)',
									fontWeight: 800, color: '#888',
									textDecoration: 'line-through',
								}}>
									{/* TODO(讲师回填): 确认原价；当前用 AUD 4,500 占位 */}
									AUD 4,500
								</span>
							</div>

							{/* 早鸟价 */}
							<div style={{ marginTop: 6 }}>
								<div style={{
									fontFamily: fonts.mono, fontSize: 11, color: colors.red,
									fontWeight: 800, letterSpacing: 1,
								}}>
									★ EARLY BIRD · 早鸟价
								</div>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
									<span style={{
										fontFamily: fonts.heading, fontSize: 'clamp(42px,5.2vw,76px)',
										fontWeight: 900, color: colors.red, lineHeight: 1,
										letterSpacing: -2,
									}}>
										AUD 3,600
									</span>
									<span style={{
										fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#555',
									}}>
										/ 24 周
									</span>
								</div>
								<div style={{
									fontFamily: fonts.mono, fontSize: 11, color: '#555',
									marginTop: 4, fontWeight: 600,
								}}>
									折合每周约 AUD 150 · 覆盖技术课 12 周 + P3 孵化 12 周
								</div>

								{/* 澳洲退税 */}
								<div style={{
									marginTop: 10, padding: '8px 12px',
									background: '#E6F0FF', color: '#0B2A6B',
									border: `3px solid ${colors.black}`,
									boxShadow: `4px 4px 0 ${colors.black}`,
								}}>
									<div style={{
										fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
										letterSpacing: 1, color: '#0B2A6B',
									}}>
										🇦🇺 AUSTRALIA · Self-education 退税
									</div>
									<div style={{
										fontFamily: fonts.heading, fontSize: 'clamp(11px,1.1vw,14px)',
										fontWeight: 800, lineHeight: 1.4, marginTop: 2,
									}}>
										澳洲学员按 37% 税率可抵税约 <span style={{ color: colors.red }}>AUD 1,332</span>，实付约 <span style={{ color: colors.red }}>AUD 2,268</span>
									</div>
								</div>
							</div>

							{/* 福利 */}
							<div style={{
								marginTop: 16, padding: '10px 14px',
								background: colors.black, color: colors.yellow,
								border: `3px solid ${colors.black}`,
							}}>
								<div style={{
									fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
									letterSpacing: 1, color: colors.red,
								}}>
									EARLY BIRD 福利
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: 'clamp(12px,1.2vw,15px)',
									fontWeight: 800, lineHeight: 1.4, marginTop: 4,
								}}>
									{/* TODO(讲师回填): 确认福利细节 */}
									前 20 名 · 额外赠《AI Engineer 面试 200 题》 + 1v1 导师答疑券
								</div>
							</div>
						</div>

						{/* 倒计时 */}
						<motion.div
							animate={{ scale: [1, 1.04, 1] }}
							transition={{ duration: 1.2, repeat: Infinity }}
							style={{
								marginTop: 14,
								padding: '8px 14px', background: colors.red, color: colors.white,
								border: `3px solid ${colors.black}`, boxShadow: shadowSm,
								display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10,
							}}
						>
							<span style={{ fontSize: 16 }}>⏰</span>
							<span style={{
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1,
							}}>
								{/* TODO(讲师回填): 实际倒计时数字 */}
								限时 5 天 22 小时
							</span>
						</motion.div>
					</motion.div>

					{/* 右栏：二维码 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.3 }}
						style={{
							background: colors.white, color: colors.black,
							border: `4px solid ${colors.black}`, boxShadow: `8px 8px 0 ${colors.yellow}`,
							padding: '20px 20px',
							display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
						}}
					>
						{/* 二维码 placeholder — TODO(讲师回填): 替换为真实二维码图片 */}
						<div style={{
							width: 'clamp(180px,22vw,250px)', aspectRatio: '1/1',
							background: colors.white, border: `3px solid ${colors.black}`,
							padding: 8,
							display: 'grid',
							gridTemplateColumns: `repeat(${QR_SIZE}, 1fr)`,
							gridTemplateRows: `repeat(${QR_SIZE}, 1fr)`,
							gap: 0,
						}}>
							{QR_GRID.flat().map((on, i) => (
								<div key={i} style={{
									background: on ? colors.black : colors.white,
								}} />
							))}
						</div>

						<div style={{
							fontFamily: fonts.heading, fontSize: 'clamp(13px,1.3vw,17px)',
							fontWeight: 800, color: colors.black, textAlign: 'center', lineHeight: 1.3,
						}}>
							扫码加小助手 · 当场咨询<br />
							<span style={{ fontSize: '0.8em', color: '#666', fontWeight: 600 }}>
								审核通过发报名链接
							</span>
						</div>

						<motion.div
							animate={{ y: [0, -3, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
							style={{
								width: '100%',
								padding: '10px 14px', background: colors.red, color: colors.white,
								border: `3px solid ${colors.black}`, boxShadow: shadow,
								fontFamily: fonts.heading, fontSize: 'clamp(14px,1.5vw,20px)',
								fontWeight: 900, textAlign: 'center', letterSpacing: 0.3,
							}}
						>
							立刻锁定第五期名额 →
						</motion.div>
					</motion.div>
				</div>

				{/* 底部：其他学习路径 + 报名进度 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
					style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
				>
					{/* 其他学习路径对比 */}
					<div style={{
						background: colors.white, color: colors.black,
						border: `3px solid ${colors.black}`,
						boxShadow: `4px 4px 0 rgba(255,255,255,0.3)`,
						padding: '8px 14px',
						display: 'flex', alignItems: 'center',
						gap: 12, flexWrap: 'wrap',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 'clamp(9px,0.85vw,11px)',
							fontWeight: 900, letterSpacing: 1, color: '#555',
							whiteSpace: 'nowrap',
						}}>
							其他 AI ENGINEER 学习路径 →
						</div>

						{/* 当前方案 */}
						<div style={{
							display: 'flex', alignItems: 'center', gap: 6,
							padding: '3px 8px', background: colors.yellow,
							border: `2px solid ${colors.black}`,
						}}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 'clamp(9px,0.85vw,11px)',
								fontWeight: 900, color: colors.red,
							}}>★ 当前</span>
							<span style={{
								fontFamily: fonts.heading, fontSize: 'clamp(10px,1vw,13px)',
								fontWeight: 800,
							}}>
								Bootcamp V5 · AUD 3,600 · 24 周 · Live + P3 · 冲就业
							</span>
						</div>

						{/* 自学课 */}
						<div style={{
							display: 'flex', alignItems: 'center', gap: 6,
							padding: '3px 8px',
							border: `2px solid #999`,
						}}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 'clamp(9px,0.85vw,11px)',
								fontWeight: 700, color: '#666',
							}}>SELF-PACED</span>
							<span style={{
								fontFamily: fonts.heading, fontSize: 'clamp(10px,1vw,13px)',
								fontWeight: 700, color: '#333',
							}}>
								AI Engineer 入门 · AUD 299 · 4 周 · 视频 + Lab · 打基础
							</span>
						</div>
					</div>

					{/* 报名进度 */}
					<div style={{
						padding: '6px 14px', background: 'rgba(255,255,255,0.08)',
						border: '2px solid rgba(255,255,255,0.15)',
						fontFamily: fonts.mono, fontSize: 'clamp(10px,1vw,12px)',
						color: 'rgba(255,255,255,0.85)', fontWeight: 600,
						textAlign: 'center', letterSpacing: 0.5,
					}}>
						{/* TODO(讲师回填): 真实已报 / 剩余名额数 */}
						已有 <span style={{ color: colors.yellow, fontWeight: 900 }}>23</span> 位同学锁定名额 ·
						剩余 <span style={{ color: colors.red, fontWeight: 900 }}>7</span> 席
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
