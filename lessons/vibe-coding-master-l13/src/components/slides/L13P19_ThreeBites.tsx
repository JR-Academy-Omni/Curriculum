import { ActBadge, Page, Head, CRASHES, FALLBACK, colors, fonts, border, shadow, FS } from '../deck';

// P15 · 你们刚才被咬了三次
// 🔴 三列视觉权重不同：②③更重（都是 ⭐⭐）。
// 🔴 收口到一条规矩：新加的检查从哪来？不从想象来，从已经发生过的错来。
const ROWS: [string, (c: typeof CRASHES[number]) => string][] = [
	['现象', (c) => c.sym],
	['感受', (c) => c.feel],
	['后果', (c) => c.out],
	['解法', (c) => c.fix],
];

export default function L13P19_ThreeBites() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head>你们刚才被咬了三次</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr' }}>
					<div style={{
						padding: '13px 20px', background: colors.dark, color: 'rgba(255,255,255,0.6)',
						fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
						borderRight: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center',
					}}>被咬的时候</div>
					{CRASHES.map((c, i) => (
						<div key={c.n} style={{
							padding: '13px 18px',
							background: c.weight === 2 ? colors.red : colors.dark,
							color: colors.white, fontFamily: fonts.heading, fontSize: 24, fontWeight: 900,
							borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
						}}>
							{c.n} {c.title}
						</div>
					))}
				</div>
				{ROWS.map(([label, get], ri) => (
					<div key={label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr 1fr', borderTop: `2px solid ${colors.black}` }}>
						<div style={{
							padding: '15px 16px', fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							background: '#f3efe9', borderRight: `2px solid ${colors.black}`, color: '#666',
						}}>{label}</div>
						{CRASHES.map((c, i) => (
							<div key={c.n} style={{
								padding: '15px 18px', fontSize: 21, lineHeight: 1.45,
								borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
								fontWeight: c.weight === 2 && ri >= 2 ? 700 : 400,
							}}>{get(c)}</div>
						))}
					</div>
				))}
			</div>

			<div style={{ display: 'flex', gap: 22, marginTop: 20, flexShrink: 0 }}>
				<div style={{ flex: '0 0 560px', border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
					<div style={{
						padding: '9px 16px', background: colors.dark, color: colors.white,
						fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
					}}>
						判断不了的，兜底三级
					</div>
					{FALLBACK.map((x, i) => (
						<div key={x.lv} style={{
							borderTop: `2px solid ${colors.black}`, padding: '9px 16px',
							background: i === 2 ? colors.yellow : colors.white,
						}}>
							<div style={{ fontSize: 20, lineHeight: 1.4 }}>
								<b style={{ fontFamily: fonts.mono, color: i === 2 ? colors.black : '#888', marginRight: 8 }}>{x.lv}</b>
								<b>{x.k}</b> ,{x.d}
							</div>
							<div style={{ fontSize: 16, color: i === 2 ? colors.black : '#888', marginTop: 2 }}>
								代价：{x.cost}
							</div>
						</div>
					))}
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{
						fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.4,
					}}>
						检查挡得住的，
						<br />
						<span style={{ background: colors.yellow, padding: '2px 12px' }}>
							只有你说得清的那部分。
						</span>
					</div>
					<div style={{ fontSize: FS.body, color: '#555', marginTop: 14, lineHeight: 1.65 }}>
						说不清的，你能<b>转化</b>掉一部分 ,
						<b style={{ color: colors.red }}>剩下的必须承认它只能靠人记得，不许假装它被守住了。</b>
						<br />
						<span style={{ fontSize: FS.note, color: '#888' }}>
							一个声称能查判断题的检查器，<b>只会在你最需要它的时候给你一个错误的绿灯。</b>
						</span>
					</div>
				</div>
			</div>

		</Page>
	);
}
