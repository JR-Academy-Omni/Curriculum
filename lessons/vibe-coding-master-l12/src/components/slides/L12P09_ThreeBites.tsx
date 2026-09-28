import { ActBadge, Page, Head, CRASHES, colors, fonts, border, shadow, shadowSm } from '../deck';

// P09 · 你们刚才被咬了三次
// 🔴 这是第一次给结构，但**还不是判断线**（判断线在 P10）。
// 🔴 翻车②那一列视觉上要更重（蓝图 §22 检查项）。
export default function L12P09_ThreeBites() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head>你们刚才被咬了三次</Head>

			<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, minHeight: 0 }}>
				{CRASHES.map((c) => {
					const hot = 'pivot' in c && c.pivot;
					return (
						<div
							key={c.n}
							style={{
								border: hot ? `4px solid ${colors.black}` : border,
								background: hot ? colors.red : colors.white,
								color: hot ? colors.white : colors.black,
								boxShadow: hot ? shadow : shadowSm,
								padding: hot ? '24px 22px' : '20px 18px',
								display: 'flex', flexDirection: 'column', gap: 14,
								transform: hot ? 'scale(1.03)' : 'none',
							}}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
								<span style={{
									fontFamily: fonts.heading, fontSize: hot ? 46 : 38, fontWeight: 900,
									color: hot ? colors.yellow : c.color, lineHeight: 1,
								}}>
									{c.n}
								</span>
								<span style={{ fontSize: hot ? 28 : 24, fontWeight: 900 }}>{c.title}</span>
							</div>

							<code style={{
								fontFamily: fonts.mono, fontSize: 14, padding: '6px 9px',
								background: hot ? 'rgba(0,0,0,0.28)' : '#f0f0f0',
								color: hot ? colors.yellow : '#555', display: 'block', lineHeight: 1.4,
							}}>
								{c.change}
							</code>

							<Row label="现象" v={c.symptom} hot={hot} />
							<Row label="你的感受" v={c.feel} hot={hot} big={hot} />
							<Row label="后果" v={c.result} hot={hot} big={hot} />
						</div>
					);
				})}
			</div>

			<div style={{
				marginTop: 22, textAlign: 'center',
				fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1.45,
			}}>
				第一次和第三次，你会自己把它关掉。
				<br />
				<span style={{ color: colors.red }}>第二次，你不会 —— 因为你不知道。</span>
			</div>
		</Page>
	);
}

function Row({ label, v, hot, big }: { label: string; v: string; hot?: boolean; big?: boolean }) {
	return (
		<div>
			<div style={{
				fontFamily: fonts.mono, fontSize: 12, letterSpacing: 1,
				color: hot ? 'rgba(255,255,255,0.6)' : '#999', marginBottom: 3,
			}}>
				{label}
			</div>
			<div style={{ fontSize: big ? 20 : 18, lineHeight: 1.45, fontWeight: big ? 700 : 400 }}>{v}</div>
		</div>
	);
}
