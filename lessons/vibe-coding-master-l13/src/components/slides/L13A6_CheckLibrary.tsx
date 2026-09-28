import { AppendixBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// A6 · 检查样例库索引，完整版在 HANDOUT
// 🔴 每条都标了能不能在课堂那个仓库上直接跑。
// 🔴 「明确不该查的」那一格必须留着，不假装，是这套东西能被信任的原因。
const CATS: { k: string; items: [string, string][] }[] = [
	{
		k: 'A · 存在性与引用完整性',
		items: [
			['角色文件都被索引登记', '课堂'],
			['索引登记的文件都存在（note）', '课堂'],
			['每个目录都在裁决表里有位置', '课堂'],
			['文档内部链接', '回去'],
		],
	},
	{
		k: 'B · 格式与结构',
		items: [['必需表头字段', '回去'], ['小节顺序固定', '回去'], ['表头后不许有自由段落', '回去']],
	},
	{
		k: 'C · 派生值与重复',
		items: [['派生值不许被手写第二遍', '回去']],
	},
	{
		k: 'D · 禁用词与边界',
		items: [['角色文件不许出现花名册上的名字', '课堂'], ['个人标识符不进规则仓', '回去']],
	},
	{
		k: 'E · 状态一致性',
		items: [['标了生效的文件不许残留留白', '课堂'], ['缺口分布（纯提示）', '回去']],
	},
	{
		k: 'F · 权限与访问漂移',
		items: [['八条不需要身份就能查的不变式', '回去']],
	},
];

export default function L13A6_CheckLibrary() {
	return (
		<Page>
			<AppendixBadge label="A6 · 检查样例库" />
			<Head sub="完整代码在讲义里。这一页只是索引。">还能查什么</Head>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
				{CATS.map((c) => (
					<div key={c.k} style={{ border, background: colors.white, boxShadow: '3px 3px 0 #000', padding: '12px 15px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.blue, marginBottom: 7 }}>{c.k}</div>
						{c.items.map(([t, when]) => (
							<div key={t} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 18, lineHeight: 1.6 }}>
								<span>{t}</span>
								<span style={{
									fontFamily: fonts.mono, fontSize: 13, flexShrink: 0,
									color: when === '课堂' ? colors.green : '#aaa', fontWeight: 700,
								}}>{when}</span>
							</div>
						))}
					</div>
				))}
			</div>

			<div style={{
				marginTop: 16, border: `3px solid ${colors.red}`, background: colors.white,
				boxShadow: shadow, padding: '14px 20px',
			}}>
				<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, marginBottom: 6 }}>
					G · 明确不该查的
				</div>
				<div style={{ fontSize: FS.note, lineHeight: 1.6, color: '#444' }}>
					权限划分对不对 · 阈值合不合理 · 职责该归谁 · 流程是不是真能执行 · 描述写得好不好
					<br />
					<b style={{ color: colors.red }}>不假装，是这套东西能被信任的原因。</b>
					一个声称能查判断题的检查器，只会在你最需要它的时候给你一个错误的绿灯。
				</div>
			</div>
		</Page>
	);
}
