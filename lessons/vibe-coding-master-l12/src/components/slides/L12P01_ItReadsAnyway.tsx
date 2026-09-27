import { motion } from 'framer-motion';
import { ActBadge, Page, FS, colors, fonts, border, shadow, shadowSm } from '../deck';

// P01 · 演示 A：CLAUDE.md 里写着，它照样犯
// 🔴 演示页只放引导语，正文是老师的屏幕（蓝图 §11.1）。deck 不许放演示结果截图。
//
// 这一页在课上被看两次：
//   ① 演示前 —— 老师念左边「盯两件事」，然后切走去自己的终端跑演示；
//   ② 演示后 —— 切回来，指着右边那句大字收口。
// 所以两块同屏，但视觉重心在右边那句。
//
// 🔥 埋点 1：「读到，不等于照做。」→ P04 回收（「你刚才没有跟它商量」）。
export default function L12P01_ItReadsAnyway() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={1} mode="🎬 现场跑" />

			<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 54 }}>
				{/* 左：演示前念这个 */}
				<div style={{ flex: 0.82 }}>
					<div style={{
						fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
						letterSpacing: 2, color: colors.yellow, marginBottom: 14,
					}}>
						换我 · 这是我自己的项目
					</div>
					<h3 style={{
						fontFamily: fonts.heading, fontSize: 34, fontWeight: 800,
						color: colors.white, lineHeight: 1.35, letterSpacing: -0.5, marginBottom: 26,
					}}>
						这条规矩，写在我的
						<br />
						<span style={{ color: colors.yellow }}>CLAUDE.md</span> 里。
					</h3>

					<div style={{ border, background: colors.white, boxShadow: shadowSm, padding: '20px 24px' }}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 700,
							letterSpacing: 2, color: colors.red, marginBottom: 14,
						}}>
							你们盯两件事
						</div>
						{['它读没读到', '它照没照做'].map((t, i) => (
							<div key={t} style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: i === 0 ? 10 : 0 }}>
								<span style={{
									fontFamily: fonts.heading, fontSize: 30, fontWeight: 900,
									color: colors.red, lineHeight: 1, minWidth: 24,
								}}>
									{i + 1}
								</span>
								<span style={{ fontSize: 25, fontWeight: 700 }}>{t}</span>
							</div>
						))}
					</div>

					<p style={{ fontSize: FS.note, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginTop: 18 }}>
						它在那个文件里躺了很久。它每一次会话都读到这一条。
					</p>
				</div>

				{/* 右：演示后指这个 —— 视觉重心 */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
					style={{ flex: 1.18 }}
				>
					<div style={{
						border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.07)',
						padding: '38px 34px', boxShadow: `6px 6px 0px ${colors.yellow}`,
					}}>
						<h2 style={{
							fontFamily: fonts.heading, fontSize: 'clamp(46px, 4.6vw, 66px)', fontWeight: 900,
							color: colors.white, lineHeight: 1.22, letterSpacing: -1.5,
						}}>
							读到，
							<br />
							<span style={{ color: colors.red }}>不等于</span>照做。
						</h2>
						<div style={{ width: 70, height: 4, background: colors.yellow, margin: '24px 0 20px' }} />
						<p style={{ fontSize: 21, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8 }}>
							CLAUDE.md 的内容进到它眼里，就是
							<b style={{ color: colors.yellow }}>一段文字</b>。
							<br />
							它和你说的话、和它读到的代码，是同一种东西 ——
							<b style={{ color: colors.yellow }}>都是可以被权衡的信息</b>。
							<br />
							<b style={{ color: colors.white }}>它没有一个「必须遵守」的分区。</b>
						</p>
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
