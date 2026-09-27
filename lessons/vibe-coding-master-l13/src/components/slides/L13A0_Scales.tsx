import { AppendixBadge, Page, Head, SCALES, colors, fonts, border, shadow, FS } from '../deck';

// A0 · 按规模选形态
// 🔴 一定会有人问「我们就三个人要不要做」。不要答「那你可以简化一下」,
//    那等于说他不配做这套东西。正确答案见下方那句话。
export default function L13A0_Scales() {
	return (
		<Page>
			<AppendixBadge label="A0 · 按规模选形态" />
			<Head sub="规模决定形态，不决定要不要做。">我们就三个人，要不要做？</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.2fr 1.2fr' }}>
					{['按规模看这几项', '三人项目组', '十人团队', '五十人'].map((h, i) => (
						<div key={i} style={{
							padding: '11px 16px',
							background: i === 1 ? colors.green : colors.dark,
							color: i === 1 ? colors.black : colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i < 3 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{SCALES.map((s) => (
					<div key={s.k} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.2fr 1.2fr', borderTop: `2px solid ${colors.black}` }}>
						<div style={{ padding: '11px 16px', fontSize: 19, fontWeight: 700, background: '#f3efe9', borderRight: `2px solid ${colors.black}` }}>{s.k}</div>
						{[s.a, s.b, s.c].map((v, j) => (
							<div key={j} style={{
								padding: '11px 16px', fontSize: 19, lineHeight: 1.4,
								borderRight: j < 2 ? `2px solid ${colors.black}` : 'none',
								background: j === 0 ? 'rgba(126,217,87,0.1)' : 'transparent',
								fontWeight: j === 0 ? 600 : 400,
								color: j === 0 ? colors.black : '#555',
							}}>{v}</div>
						))}
					</div>
				))}
			</div>

			<div style={{ marginTop: 'auto', paddingTop: 14, display: 'flex', gap: 20, flexShrink: 0 }}>
				<div style={{ flex: 1, fontSize: FS.body, lineHeight: 1.7 }}>
					三个人的组<b>收益最快</b>，因为小组最吃亏的是第五句那条：
					<b>只有一个人知道那件事怎么做。</b>那人请假、离职，或者只是那天忙，整摊就停了。
					<br />
					<b>规则文件正是这件事最直接的解药。</b>
					<div style={{ marginTop: 10, paddingTop: 10, borderTop: '2px dashed #ccc', fontSize: 17 }}>
						⭐ 「记录的命门」那行最该记住：
						<b style={{ color: colors.red }}>没人读 → 然后就没人写。</b>
						五十人时没人读 50 份日更，记录的用途从「给人看」变成「喂聚合」,
						<b>那是数据库的活</b>（A8）。
					</div>
				</div>
				<div style={{
					flex: '0 0 480px', border: `3px solid ${colors.green}`, background: colors.white,
					padding: '18px 22px', fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, lineHeight: 1.4,
				}}>
					课上八步走的就是三人形态。
					<br />
					<span style={{ color: colors.green }}>你不是做了个简版，你做完了。</span>
				</div>
			</div>
		</Page>
	);
}
