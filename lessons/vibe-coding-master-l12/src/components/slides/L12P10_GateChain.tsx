import { motion } from 'framer-motion';
import { ActBadge, Page, GATES, GATE, colors, fonts, border, shadow, shadowSm } from '../deck';

// P10 · 判断线首次出现 ⭐
// 🔴 P10 之前，全场不许出现过任何判断线 / 四步图 / 「判据」二字（蓝图 §10.1 铁律 1）。
// 🔴 第一句台词固定：「你们刚才被咬的三次，不是三个 bug。它们是三个问题，而且有顺序。」
// 🔴 不是四个格子，是一条链 —— 前一道过不了，后面不用问。
// 🔥 闸④回收埋点 3（「怎么挂才不会被你自己关掉」）。
export default function L12P10_GateChain() {
	return (
		<Page>
			<ActBadge act={3} />

			<div style={{ marginBottom: 18 }}>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 44, fontWeight: 900, letterSpacing: -1, lineHeight: 1.2 }}>
					这不是三个 bug。是<span style={{ color: GATE }}>三个问题</span>，而且<span style={{ color: GATE }}>有顺序</span>。
				</h2>
			</div>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9, minHeight: 0 }}>
				<div style={{
					alignSelf: 'center', fontFamily: fonts.mono, fontSize: 15,
					letterSpacing: 2, color: '#888', marginBottom: 2,
				}}>
					你想让它守的那条规矩
				</div>

				{GATES.map((g, i) => (
					<motion.div
						key={g.n}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.16, duration: 0.42 }}
						style={{ display: 'flex', alignItems: 'stretch', gap: 14, flex: 1, minHeight: 0 }}
					>
						{/* 序号 + 竖线 */}
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 42, flexShrink: 0 }}>
							<div style={{
								width: 38, height: 38, borderRadius: 19, flexShrink: 0,
								background: g.pivot ? colors.red : GATE, color: colors.white,
								border: `3px solid ${colors.black}`,
								display: 'flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.heading, fontSize: 19, fontWeight: 900,
							}}>
								{g.n}
							</div>
							{i < GATES.length - 1 && <div style={{ width: 3, flex: 1, background: colors.black, minHeight: 8 }} />}
						</div>

						{/* 问题 */}
						<div style={{
							flex: 1,
							border: g.pivot ? `4px solid ${colors.black}` : border,
							background: g.pivot ? colors.red : colors.white,
							color: g.pivot ? colors.white : colors.black,
							boxShadow: g.pivot ? shadow : shadowSm,
							padding: '11px 18px', display: 'flex', alignItems: 'center', gap: 18,
						}}>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: g.pivot ? 25 : 23, fontWeight: 800, lineHeight: 1.3 }}>{g.q}</div>
								<div style={{
									fontSize: 16, marginTop: 2,
									color: g.pivot ? 'rgba(255,255,255,0.72)' : '#777',
									fontFamily: fonts.mono,
								}}>
									{g.sub}
								</div>
							</div>
						</div>

						{/* 不过怎么办 */}
						<div style={{
							width: 430, flexShrink: 0, border, background: g.pivot ? colors.yellow : '#f7f2ea',
							padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 12,
						}}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
								padding: '3px 9px', background: colors.black, color: colors.white, flexShrink: 0,
							}}>
								{g.fail}
							</span>
							<span style={{ fontSize: 17, lineHeight: 1.4 }}>{g.then}</span>
						</div>
					</motion.div>
				))}

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.95, duration: 0.5 }}
					style={{
						alignSelf: 'center', marginTop: 4, padding: '9px 26px',
						background: GATE, color: colors.white, border, boxShadow: shadowSm,
						fontSize: 20, fontWeight: 700,
					}}
				>
					↓ 可以挂。剩下的才是：挂在哪个文件（谁受它管）
				</motion.div>
			</div>

			<div style={{
				marginTop: 16, padding: '14px 22px', background: colors.dark, color: colors.white,
				fontSize: 24, fontWeight: 700, lineHeight: 1.5, textAlign: 'center',
			}}>
				一条规矩该不该挂成 hook，不取决于它有多重要，
				<br />
				取决于「违反了没有」这件事，<span style={{ color: colors.yellow }}>一个不动脑的脚本判不判得出来。</span>
			</div>
		</Page>
	);
}
