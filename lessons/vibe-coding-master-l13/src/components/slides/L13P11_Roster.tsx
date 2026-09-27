import { ActBadge, Page, Head, Code, colors, fonts, border, FS } from '../deck';

// P08 · 先记下有谁，再写谁答应什么 🎯
// 🔴 deck 纪律 2（v3.2 降级）：本页不提「角色文件该怎么写」,
//    顺序上没必要提前，规矩在 P18 正面给。
//    ⛔ 但它**不再是自毁按钮**：P18 已改成先讲规矩再跑，
//       讲师这里说漏嘴，最多是少一点意外，不会整格作废。
//       旧版把整格压在「那条检查会咬到学员自己」上面，而那件事不保证发生。
// 🔴 花名册必须先建，顺序不能反。对学员的说法是
//    「先记下有谁，再写每个角色答应什么」，完全自然，不会联想到后面那一刀。
// 🔴 第三段写成「什么必须报批，报给谁」—— 「报给谁」是故意的（蓝图 §0.5）。
const ROSTER = `# 花名册

- 张伟
- 李明
- 王芳`;

const ROLE = `# <角色名>

## 答应什么
（这个角色最终要对什么负责，两三条）

## 独自能决定什么
（不用问任何人）

## 什么必须报批，报给谁
（要报批的事，和报给谁）`;

export default function L13P11_Roster() {
	return (
		<Page>
			<ActBadge act={2} mode="🎯 全班动手" />
			<Head sub="写你们那儿真实的情况，不要编一个好看的。">
				先记下有谁，再写谁答应什么
			</Head>

			<div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 420px', display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>
						① <span style={{ color: colors.blue }}>people/ROSTER.md</span>
					</div>
					<Code label="花名册 · 一行一个" code={ROSTER} size={21} />
					<div style={{ fontSize: 21, lineHeight: 1.7, color: '#444' }}>
						中文英文都行。
						<br />
						三个人的组就写三个，<b>不寒碜</b>。
					</div>
					<div style={{
						marginTop: 'auto', border: `2px dashed ${colors.red}`, padding: '12px 14px',
						fontSize: FS.note, color: colors.red, lineHeight: 1.55,
					}}>
						这是你自己电脑上的文件，<b>不要贴到聊天框</b>
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>
						② <span style={{ color: colors.purple }}>rules/&lt;角色&gt;.md</span>
						<span style={{ fontSize: 20, fontWeight: 400, color: '#888', marginLeft: 12 }}>写两个</span>
					</div>
					<Code label="角色文件 · 三段" code={ROLE} size={20} style={{ flex: 1, minHeight: 0 }} />
					<div style={{
						border, background: colors.yellow, padding: '12px 16px',
						fontSize: 21, lineHeight: 1.55,
					}}>
						三个人的组照样有角色：<b>谁管发布、谁管对外、谁能合主分支。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
