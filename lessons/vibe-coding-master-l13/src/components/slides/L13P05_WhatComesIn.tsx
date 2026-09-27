import { ActBadge, Page, Head, Code, FS, colors, fonts, border, shadow } from '../deck';

// P05 · 什么进得来 🎯 全班动手
// 🔴 两张表都必须有主语。早先版本：六个格子光秃秃没表头，三判据那张第一列表头是空的 ,
//    学员看不出「这六样是什么」「这三行在问什么」。
// 🔴 右边两列**不叫「规则 / 状态」**。那两个词在这一页之前从没出现过，
//    而且「状态」跟下一页的「记录仓」打架 ,不进的那三样里，
//    会议纪要是**记录**，值班和 bug 进度才是**状态**，两类混不进一个名字。
//    所以这一页只说「该进来的 / 不该进来的」，**下一页才给它们名字**。
// 🔴 答案（1 3 5 进）不上屏，讲师口播揭晓。上屏就没得猜了。
const ITEMS = [
	{ n: 1, t: '谁审批超额支出' },
	{ n: 2, t: '上周三的会议纪要' },
	{ n: 3, t: '角色的职责边界' },
	{ n: 4, t: '今天谁在值班' },
	{ n: 5, t: '提交信息的写法要求' },
	{ n: 6, t: '这个 bug 的处理进度' },
];

const TESTS: [string, string, string][] = [
	['改一次要不要审？', '要', '不要'],
	['改错了多久能发现？', '可能几个月', '当天'],
	['写它的人会不会 git？', '会', '不一定'],
];

export default function L13P05_WhatComesIn() {
	return (
		<Page>
			<ActBadge act={1} mode="🎯 全班动手" />
			<Head sub="仓库建好了。现在回答第一个问题，而且它最容易搞错。">什么进得来？</Head>

			<div style={{ display: 'flex', gap: 32, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				{/* 左：建仓 + 六样待分拣 */}
				<div style={{ flex: '0 0 480px', display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Code label="先建仓" size={FS.codeSm} code={`mkdir my-ops && cd my-ops
git init
mkdir rules`} />

					<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
						<div style={{
							padding: '11px 16px', background: colors.dark, color: colors.white,
							fontSize: 20, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						}}>
							<span>这六样，哪些该进这个仓库？</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow }}>聊天框打编号</span>
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
							{ITEMS.map((it, i) => (
								<div key={it.n} style={{
									padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center',
									borderTop: `2px solid ${colors.black}`,
									borderRight: i % 2 === 0 ? `2px solid ${colors.black}` : 'none',
								}}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
										width: 24, height: 24, flexShrink: 0, border: `2px solid ${colors.black}`,
										display: 'flex', alignItems: 'center', justifyContent: 'center',
									}}>{it.n}</span>
									<span style={{ fontSize: 18, lineHeight: 1.35 }}>{it.t}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* 右：三个问题 */}
				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontSize: FS.body, marginBottom: 14, lineHeight: 1.6 }}>
						判据<b>不是</b>内容主题。<b>是拿同一样东西，问这三个问题：</b>
					</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
						<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr' }}>
							{['问这三个问题', '该进来的', '不该进来的'].map((h, i) => (
								<div key={i} style={{
									padding: '11px 16px',
									background: i === 1 ? colors.blue : i === 2 ? colors.purple : colors.dark,
									color: colors.white,
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
									borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
								}}>{h}</div>
							))}
						</div>
						{TESTS.map((r, i) => (
							<div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', borderTop: `2px solid ${colors.black}` }}>
								{r.map((cell, j) => (
									<div key={j} style={{
										padding: '14px 16px', fontSize: 21, lineHeight: 1.45,
										borderRight: j < 2 ? `2px solid ${colors.black}` : 'none',
										fontWeight: j > 0 ? 700 : 400,
										color: j === 2 && i === 2 ? colors.red : colors.black,
									}}>{cell}</div>
								))}
							</div>
						))}
					</div>

					<div style={{
						marginTop: 18, borderLeft: `4px solid ${colors.black}`, paddingLeft: 16,
						fontSize: FS.note, color: '#555', lineHeight: 1.65,
					}}>
						注意第三行那个「<b style={{ color: colors.red }}>不一定</b>」 ,
						<b>它后面藏着这一步真正的收获，下一页说。</b>
						<br />
						这两堆东西现在还没有名字。<b>名字也在下一页。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
