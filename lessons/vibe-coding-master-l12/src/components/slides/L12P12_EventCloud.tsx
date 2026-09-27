import { ActBadge, Page, Head, EVENT_GROUPS, TODAY_SIX, colors, fonts, border, shadowSm } from '../deck';

// P12 · 三十多个事件，你一个都不用背
// 🔴 这一页的目的是**防止学员回去打开文档就懵**（蓝图 §8.2）。
// 🔴 不给完整表格的"讲法"，但**名单必须是全的** —— 之前拿 "…" 收尾是偷懒，
//    学员照着这页去查文档会发现对不上。33 个事件按生命周期分 13 组，一个不缺。
// 🔴 「接 L6」「接 L7 / L8」不许只写「接 Lx」—— 那是黑话。必须写清**接的是什么**。
const LEFT = EVENT_GROUPS.slice(0, 7);
const RIGHT = EVENT_GROUPS.slice(7);

function Row({ g }: { g: (typeof EVENT_GROUPS)[number] }) {
	return (
		<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
			<div style={{
				width: 82, flexShrink: 0, textAlign: 'right',
				fontFamily: fonts.heading, fontSize: 19, fontWeight: 800,
				color: g.note ? colors.purple : '#666',
			}}>
				{g.group}
			</div>
			<div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
				{g.events.map((e) => {
					const hot = TODAY_SIX.has(e);
					return (
						<code key={e} style={{
							fontFamily: fonts.mono,
							fontSize: hot ? 23 : 18,
							fontWeight: hot ? 700 : 400,
							padding: hot ? '4px 11px' : '3px 7px',
							background: hot ? colors.yellow : 'transparent',
							color: hot ? colors.black : '#8a8a8a',
							border: hot ? `2px solid ${colors.black}` : '2px solid transparent',
							lineHeight: 1.3,
						}}>
							{e}
						</code>
					);
				})}
			</div>
		</div>
	);
}

export default function L12P12_EventCloud() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub={<>名字是有规律的：<code style={{ fontFamily: fonts.mono }}>Pre</code> 开头在前面，<code style={{ fontFamily: fonts.mono }}>Post</code> 开头在后面，<code style={{ fontFamily: fonts.mono }}>Stop</code> 在收工。你要挂的时点，名字基本猜得出来。</>}>
				三十<span style={{ color: colors.blue }}>三</span>个事件，<span style={{ color: colors.blue }}>你一个都不用背</span>
			</Head>

			{/* 全名单 · 两栏 */}
			<div style={{ display: 'flex', gap: 40, marginBottom: 18, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: 1, minWidth: 0 }}>{LEFT.map((g) => <Row key={g.group} g={g} />)}</div>
				<div style={{ flex: 1, minWidth: 0 }}>{RIGHT.map((g) => <Row key={g.group} g={g} />)}</div>
			</div>

			{/* 两条接续 —— 写清接的是什么，不写「接 Lx」黑话 */}
			<div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
				{EVENT_GROUPS.filter((g) => g.note).map((g) => (
					<div key={g.group} style={{
						flex: 1, border: `3px solid ${colors.purple}`,
						background: 'rgba(203,108,230,0.07)', padding: '14px 18px',
					}}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 12, fontWeight: 700,
								padding: '2px 8px', background: colors.purple, color: colors.white,
							}}>
								{g.group}
							</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 13.5, color: '#888' }}>
								{g.events.join(' · ')}
							</span>
						</div>
						<div style={{ fontSize: 19, lineHeight: 1.5, fontWeight: 700 }}>{g.note}</div>
					</div>
				))}
			</div>

			<div style={{ display: 'flex', gap: 16 }}>
				<div style={{
					flex: 1, border, background: colors.yellow, boxShadow: shadowSm,
					padding: '13px 20px', fontSize: 20, fontWeight: 700, lineHeight: 1.5,
				}}>
					黄色的这 <b>6 个</b>，是你今天用得上的全部。
				</div>
				<div style={{
					flex: 1.15, border, background: colors.white, boxShadow: shadowSm,
					padding: '13px 20px', fontSize: 18, lineHeight: 1.5,
				}}>
					剩下的等你需要了再查：<code style={{ fontFamily: fonts.mono }}>/hooks</code> 看有哪些，
					官方 hooks 页看每个的输入输出。
				</div>
			</div>
		</Page>
	);
}
