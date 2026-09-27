import { ActBadge, Page, Head, Code, colors, fonts, border, FS } from '../deck';

// P24 · 把这八步固化 🎯
// 🔴 承接 L5：反复用的套路要固化成 skill。
// 🔴 v3.2（讲师）：第 6 步末尾加「最后才写给 AI 的那一份」。
//    指令层排最后，跟 P04 那条红框是同一条 ,写早了，
//    帮你建仓库的 agent 当场受它管，而你可能已经没权限改它了。
//    放在生成器里几乎不花课堂时间，但它是学员回去唯一会重跑八步的地方。
// 🔴 纪律 4：约束那一段必须留空 —— 给了范文，收上来全是它的变体。
//    这一段正好是本节全部知识点的浓缩，学员从零写。
const SKILL = `---
name: ops-repo-init
description: 按八步问出一个组织的规则结构，生成仓库骨架
---

## 步骤
0. 问：你们最疼的是哪一条？（五个症状选一）
1. 问：哪些是规则，哪些是状态？建仓，写第一条检查
2. 问：目录之间谁赢？生成 AUTHORITY.md，加检查
3. 问：有谁？先建花名册。再问有哪些角色，各自答应什么
4. 把答不上「谁定的」的值，全部写成 [to supply]
5. 为每条新规则生成一条检查，并区分硬失败和提示
6. 生成 CI 和分支保护清单。
   最后才写给 AI 的那一份指令文件 —— 不许提前写
7. 列出所有 [to supply]，并注明每一条在等谁

## 约束
`;

export default function L13P24_Generator() {
	return (
		<Page>
			<ActBadge act={5} mode="🎯 全班动手" />
			<Head sub="你今天做的是一个很小的仓库。回去要做真的那个，不止八步，也不止六个文件。">
				把这八步固化
			</Head>

			<div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<Code label="ops-repo-init · 骨架" code={SKILL} size={18} style={{ flex: '0 0 640px' }} />
				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
					<div style={{
						border: `4px dashed ${colors.red}`, padding: '28px 26px', textAlign: 'center',
					}}>
						<div style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1.3 }}>
							约束那一段
							<br />
							<span style={{ color: colors.red }}>你来写</span>
						</div>
						<div style={{ fontSize: 21, color: '#666', marginTop: 14, lineHeight: 1.6 }}>
							从零写。不给范文。
						</div>
					</div>
					<div style={{ fontSize: FS.body, lineHeight: 1.75, color: '#333' }}>
						提示：把今天八步里，它<b>绝对不许做</b>的事写出来。
						<br />
						想不起来就往回翻 ——
						<b>留白那一格、标 approved 那一格、翻车② 、翻车③</b>，各有一条。
					</div>
					<div style={{
						border, background: colors.yellow, padding: '12px 16px',
						fontSize: 20, lineHeight: 1.5,
					}}>
						等下要拿它跑一次，所以别写空话。
					</div>
				</div>
			</div>
		</Page>
	);
}
