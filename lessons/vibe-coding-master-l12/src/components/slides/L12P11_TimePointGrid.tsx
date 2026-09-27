import { motion } from 'framer-motion';
import { ActBadge, Page, OfficialQuote, SLOT, colors, fonts, border, shadow, shadowSm } from '../deck';

// P11 · 挂在哪个时点 ⭐⭐ 全 deck 视觉重心
// 🔴 学员最常犯的错不是不会写脚本，是**挂错时点**（蓝图 §1.2）。
// 🔴 右上角那格必须是个明确的大叉。
// 🔴 讲师必须停够、必须逼学员当场判自己那条（§10.1 铁律 6）。
// 🔴 第四格（Stop）是 L6 铁律的执行机构 —— 这是全系列最漂亮的一次前后呼应。

type Cell = {
	row: string; col: string; events: readonly string[]; tag: string;
	bg: string; fg: string; hero?: boolean; cross?: boolean;
};

const CELLS: readonly Cell[] = [
	{
		row: '拦得住', col: '它还没动手',
		events: ['PreToolUse'], tag: '唯一能拦的时点',
		bg: SLOT, fg: colors.white, hero: true,
	},
	{
		row: '拦得住', col: '它已经动手了',
		events: [], tag: '工具已经跑完了',
		bg: '#e8e4de', fg: '#999', cross: true,
	},
	{
		row: '拦不住', col: '它还没动手',
		events: ['SessionStart', 'UserPromptSubmit'], tag: '提前把话塞进去',
		bg: colors.white, fg: colors.black,
	},
	{
		row: '拦不住', col: '它已经动手了',
		events: ['PostToolUse', 'Stop'], tag: '事后补救 / 打回',
		bg: colors.yellow, fg: colors.black,
	},
] as const;

export default function L12P11_TimePointGrid() {
	return (
		<Page>
			<ActBadge act={4} />

			<div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 14 }}>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 46, fontWeight: 900, letterSpacing: -1 }}>
					挂在哪个时点
				</h2>
				<span style={{ fontSize: 21, color: '#666' }}>挂反了都会失败，而第一种挂反了你还看不出来</span>
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 26, minHeight: 0 }}>
				{/* 二维图 */}
				<div style={{ flex: 1.35, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					{/* 列头 */}
					<div style={{ display: 'flex', gap: 12, marginBottom: 8, paddingLeft: 108 }}>
						{['它还没动手', '它已经动手了'].map((c) => (
							<div key={c} style={{
								flex: 1, textAlign: 'center', fontFamily: fonts.mono,
								fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#555',
							}}>
								{c}
							</div>
						))}
					</div>

					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
						{['拦得住', '拦不住'].map((rowName, ri) => (
							<div key={rowName} style={{ flex: 1, display: 'flex', gap: 12, minHeight: 0 }}>
								<div style={{
									width: 96, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
									fontFamily: fonts.heading, fontSize: 25, fontWeight: 900,
									color: ri === 0 ? SLOT : '#777', textAlign: 'right', lineHeight: 1.2,
								}}>
									{rowName}
								</div>
								{CELLS.filter((c) => c.row === rowName).map((cell, ci) => (
									<motion.div
										key={cell.col}
										initial={{ opacity: 0, scale: 0.94 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.18 + (ri * 2 + ci) * 0.12, duration: 0.4 }}
										style={{
											flex: 1, minWidth: 0,
											border: cell.hero ? `4px solid ${colors.black}` : border,
											background: cell.bg, color: cell.fg,
											boxShadow: cell.hero ? shadow : cell.cross ? 'none' : shadowSm,
											padding: '16px 18px', display: 'flex', flexDirection: 'column',
											justifyContent: 'center', alignItems: 'center', gap: 9, position: 'relative',
										}}
									>
										{cell.cross ? (
											<>
												<div style={{ fontSize: 62, lineHeight: 1, color: '#b8b0a6', fontWeight: 900 }}>✗</div>
												<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>拦不住</div>
												<div style={{ fontSize: 17 }}>{cell.tag}</div>
											</>
										) : (
											<>
												{cell.events.map((e) => (
													<code key={e} style={{
														fontFamily: fonts.mono, fontSize: cell.hero ? 30 : 21, fontWeight: 700,
														lineHeight: 1.25, textAlign: 'center',
													}}>
														{e}
													</code>
												))}
												<div style={{
													fontSize: 16, marginTop: 2, textAlign: 'center',
													color: cell.hero ? 'rgba(255,255,255,0.8)' : '#666',
												}}>
													← {cell.tag}
												</div>
											</>
										)}
									</motion.div>
								))}
							</div>
						))}
					</div>
				</div>

				{/* 右：判断线 + Stop 那格的说明 */}
				<div style={{ flex: 0.85, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
					<div style={{ border, background: colors.dark, color: colors.white, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, letterSpacing: 2, color: colors.yellow, marginBottom: 12 }}>
							一句话记住
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.7 }}>
							怕「它<b style={{ color: colors.yellow }}>做了不该做的</b>」
							<br />
							→ 事前拦，<code style={{ fontFamily: fonts.mono }}>PreToolUse</code>
							<div style={{ height: 12 }} />
							怕「它<b style={{ color: colors.yellow }}>漏了该做的</b>」
							<br />
							→ 事后补，<code style={{ fontFamily: fonts.mono }}>PostToolUse</code> / <code style={{ fontFamily: fonts.mono }}>Stop</code>
						</div>
					</div>

					<OfficialQuote>
						<b>PostToolUse</b> hooks <b>can't undo actions</b> since the tool has already executed.
					</OfficialQuote>

					<div style={{
						border: `3px solid ${colors.teal}`, background: 'rgba(16,185,129,0.08)',
						padding: '16px 20px', flex: 1, minHeight: 0,
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, letterSpacing: 1, color: colors.teal, marginBottom: 8 }}>
							右下角那个 Stop · 接 L6
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, lineHeight: 1.5, color: '#333', marginBottom: 10 }}>
							Stop | Yes | Prevents Claude from stopping, continues the conversation
						</div>
						<div style={{ fontSize: 19, lineHeight: 1.6 }}>
							L6 那条铁律「<b>它说完成了不算完成</b>」，一直是一条<b>原则</b>。
							<br />
							<b style={{ color: colors.teal }}>今天它有执行机构了。</b>
						</div>
					</div>
				</div>
			</div>

			<div style={{
				marginTop: 14, padding: '11px 20px', background: colors.yellow, border,
				fontSize: 22, fontWeight: 700, textAlign: 'center',
			}}>
				👉 现在看你手上那条规矩。它是哪一格？想清楚了再往下听 —— 这一格错了，你回去挂的东西是白挂的。
			</div>
		</Page>
	);
}
