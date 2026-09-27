import { AppendixBadge, Page, Head, STEPS, colors, fonts, border, shadow } from '../deck';

// A1 · 八步总表 —— 学员要带走的那一张
// 🔴 这不是八个知识点，是一条决定链：每一步都在解决上一步留下的问题。
export default function L13A1_EightSteps() {
	return (
		<Page>
			<AppendixBadge label="A1 · 八步总表" />
			<Head sub="这不是八个知识点，是一条决定链：每一步都在解决上一步留下的问题。">
				造这套东西，要依次回答八个问题
			</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '70px 1.4fr 1.4fr' }}>
					{['步', '要回答的问题', '你产出什么'].map((h, i) => (
						<div key={h} style={{
							padding: '11px 18px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{STEPS.map((s) => (
					<div key={s.n} style={{ display: 'grid', gridTemplateColumns: '70px 1.4fr 1.4fr', borderTop: `2px solid ${colors.black}` }}>
						<div style={{
							padding: '12px 18px', fontFamily: fonts.mono, fontSize: 22, fontWeight: 700,
							background: '#f3efe9', borderRight: `2px solid ${colors.black}`, textAlign: 'center',
						}}>{s.n}</div>
						<div style={{ padding: '12px 18px', fontSize: 22, borderRight: `2px solid ${colors.black}` }}>{s.q}</div>
						<div style={{ padding: '12px 18px', fontSize: 20, fontFamily: fonts.mono, color: '#555' }}>{s.out}</div>
					</div>
				))}
			</div>

			<div style={{
				marginTop: 'auto', paddingTop: 20, fontSize: 24, lineHeight: 1.65,
			}}>
				<b>检查是累积的。</b>每加一条规则就给它加一条检查 —— 这是课堂节奏本身，也是回去之后的规矩。
			</div>
		</Page>
	);
}
