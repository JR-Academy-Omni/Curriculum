import { AppendixBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// A7 · 回路图 ⭐ v3 新增
// 🔴 六层图只画了「规则 → 执行」。回路是缺的那半边。
// 🔴 三条进正课（检查来源注释 / 留白在等谁 / Review date 过期），
//    度量和破例记录留给更后面的课，学员还没跑过一天，讲了没体感。
const MISSING = [
	{ k: '度量', d: '决策等了几天、某顶帽子手上挂着几个审批', why: '没有它，"队列在涨说明矩阵错了"这条规则永远不会被触发' },
	{ k: '破例记录', d: '这条规矩这次为什么不适用', why: '被破例的次数，是"它该改了"的最强信号' },
	{ k: '检查命中记录', d: '哪条检查、什么时候、抓到了什么', why: '没有它，后来人判断不了一条检查能不能删' },
	{ k: '到期', d: 'Review date 过了没有', why: '规则会烂。位置留了，机制没有' },
];

export default function L13A7_Loop() {
	return (
		<Page>
			<AppendixBadge label="A7 · 回路" />
			<Head sub="六层图只画了「规则 → 执行」。这是缺的那半边。">
				规矩怎么知道<span style={{ color: colors.red }}>自己有没有用</span>
			</Head>

			<div style={{
				border, background: colors.dark, boxShadow: shadow, padding: '26px 30px', marginBottom: 24,
			}}>
				<div style={{
					fontFamily: fonts.mono, fontSize: 24, color: colors.white, lineHeight: 2, whiteSpace: 'pre',
				}}>
{`规则  →  执行  →  偏差  →  发现  →  改规则
                ↑                      ↓
                └──────────────────────┘
        被挡了几次 · 破例了几次 · 检查抓到了什么`}
				</div>
			</div>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.3fr 2fr' }}>
					{['缺什么', '是什么', '没有它会怎样'].map((h, i) => (
						<div key={h} style={{
							padding: '10px 16px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
							borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{MISSING.map((m) => (
					<div key={m.k} style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.3fr 2fr', borderTop: `2px solid ${colors.black}` }}>
						<div style={{ padding: '11px 16px', fontSize: 21, fontWeight: 700, background: '#f3efe9', borderRight: `2px solid ${colors.black}` }}>{m.k}</div>
						<div style={{ padding: '11px 16px', fontSize: 19, borderRight: `2px solid ${colors.black}`, lineHeight: 1.4 }}>{m.d}</div>
						<div style={{ padding: '11px 16px', fontSize: 18, color: '#555', lineHeight: 1.4 }}>{m.why}</div>
					</div>
				))}
			</div>

			<div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', gap: 22 }}>
				<div style={{
					flex: 1, border: `3px solid ${colors.green}`, background: colors.white, padding: '13px 17px',
					fontSize: FS.note, lineHeight: 1.65,
				}}>
					<b style={{ color: colors.green }}>今天已经带到的三条：</b>
					每条检查旁边写它是因为什么加的 · 每个留白写在等谁 · Review date 过期报一条提示
				</div>
				<div style={{
					flex: 1, fontSize: FS.note, color: '#888', lineHeight: 1.65,
				}}>
					度量和破例记录是<b>「跑起来之后」</b>的事。
					你还没跑过一天，<b>现在讲没有体感</b> ,
					等你那个仓库活过一个月再回来看这一页。
				</div>
			</div>
		</Page>
	);
}
