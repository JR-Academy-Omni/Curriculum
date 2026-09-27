import { AppendixBadge, Page, Head, colors, fonts, border, shadow } from '../deck';

// A2 · 一条规则的五要素
// 🔴 大多数组织的规矩，前四格都有，第五格是空的。
const ELS: [string, string, string, string][] = [
	['1', '断言（可被反驳的一句话）', '「我们要重视质量」', '「建记录和改记录不是同一种行为」'],
	['2', '标记 + 日期', '「大概一天吧」', '「[proposed] 1 个工作日，待批」'],
	['3', '权威归属', '三个文件都写了', '一处写，其余指向'],
	['4', '触发条件', '「必要时需要审批」', '「五个触发器，一个都不中就自己决定」'],
	['5', '强制点', '无', 'CI / 分支保护 / 钩子'],
];

export default function L13A2_FiveElements() {
	return (
		<Page>
			<AppendixBadge label="A2 · 一条规则的五要素" />
			<Head sub="缺任何一样，那条规则就只是一段文字。">一条规则的五要素</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '60px 1.1fr 1.1fr 1.4fr' }}>
					{['#', '要素', '反面', '正面'].map((h, i) => (
						<div key={i} style={{
							padding: '11px 16px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i < 3 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{ELS.map(([n, el, bad, good], i) => {
					const last = i === ELS.length - 1;
					return (
						<div key={n} style={{
							display: 'grid', gridTemplateColumns: '60px 1.1fr 1.1fr 1.4fr',
							borderTop: `2px solid ${colors.black}`,
							background: last ? colors.yellow : colors.white,
						}}>
							<div style={{ padding: '12px 16px', fontFamily: fonts.mono, fontSize: 20, fontWeight: 700, textAlign: 'center', borderRight: `2px solid ${colors.black}` }}>{n}</div>
							<div style={{ padding: '12px 16px', fontSize: 21, fontWeight: last ? 900 : 700, borderRight: `2px solid ${colors.black}` }}>{el}</div>
							<div style={{ padding: '12px 16px', fontSize: 19, color: last ? colors.red : '#999', borderRight: `2px solid ${colors.black}`, fontWeight: last ? 700 : 400 }}>{bad}</div>
							<div style={{ padding: '12px 16px', fontSize: 19 }}>{good}</div>
						</div>
					);
				})}
			</div>

			<div style={{
				marginTop: 'auto', paddingTop: 24, fontFamily: fonts.heading,
				fontSize: 34, fontWeight: 900, lineHeight: 1.4,
			}}>
				大多数组织的规矩，<b>前四格都有</b>，
				<span style={{ background: colors.yellow, padding: '2px 12px' }}>第五格是空的。</span>
			</div>
		</Page>
	);
}
