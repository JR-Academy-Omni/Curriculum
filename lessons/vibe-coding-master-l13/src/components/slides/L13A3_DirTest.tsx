import { AppendixBadge, Page, Head, colors, fonts, border, shadow } from '../deck';

// A3 · 目录准入测试 —— 一个新文件该放哪
// 🔴 「这个流程没有 trigger，它就不是 SOP，是文档」这一行要视觉最重。
const TESTS: [string, string, boolean?][] = [
	['这条被违反时，有人有权说「不行」吗？', 'governance/'],
	['这句话在描述一个角色答应什么？', 'rules/<角色>.md'],
	['这是「有谁」？', 'people/ROSTER.md'],
	['这个流程有 trigger 吗？', 'sops/'],
	['没有 trigger？', '它不是 SOP，是文档', true],
	['这是每次重复填的结构吗？', 'templates/'],
	['以上都不是？', '它多半是状态，不属于这个仓库', true],
];

export default function L13A3_DirTest() {
	return (
		<Page>
			<AppendixBadge label="A3 · 目录准入测试" />
			<Head sub="建到第二十个文件的时候，你会需要这一张。">一个新文件该放哪</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr' }}>
					{['问自己', '答「是」→ 放这里'].map((h, i) => (
						<div key={h} style={{
							padding: '12px 20px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i === 0 ? `2px solid ${colors.black}` : 'none',
						}}>{h}</div>
					))}
				</div>
				{TESTS.map(([q, a, warn], i) => (
					<div key={i} style={{
						display: 'grid', gridTemplateColumns: '1.6fr 1fr', borderTop: `2px solid ${colors.black}`,
						background: warn ? colors.yellow : colors.white,
					}}>
						<div style={{ padding: '14px 20px', fontSize: 23, borderRight: `2px solid ${colors.black}`, fontWeight: warn ? 700 : 400 }}>{q}</div>
						<div style={{
							padding: '14px 20px', fontSize: warn ? 22 : 21,
							fontFamily: warn ? fonts.body : fonts.mono,
							fontWeight: warn ? 900 : 400,
							color: warn ? colors.black : colors.blue,
						}}>{a}</div>
					</div>
				))}
			</div>
		</Page>
	);
}
