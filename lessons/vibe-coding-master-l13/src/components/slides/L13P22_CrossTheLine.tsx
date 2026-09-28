import { ActBadge, Page, Head, Code, SoBar, colors, fonts, border, FS } from '../deck';

// P17 · 八行，跨过那条线 🎯
// 🔴 沿用 L4 的立场：这些命令你早就让 Agent 干过了，今天还是让它干，
//    你只要知道要发生什么。本节不教 CI 语法（纪律：runner / 缓存 / matrix 一律不讲）。
// 🔴 数据边界只在这一页插一次，而且必须说清它跟花名册那条不是同一件事。
const WORKFLOW = `name: Consistency
on:
  pull_request:
  push:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: node check.mjs`;

const PR = `git checkout -b add-role
# 建一个角色文件，故意不登记到 INDEX.md
git add . && git commit -m "add role"
git push -u origin add-role`;

export default function L13P22_CrossTheLine() {
	return (
		<Page>
			<ActBadge act={4} mode="🎯 全班动手" />
			<Head sub="这些命令你早就让 Agent 干过了。今天还是让它干，你只要知道要发生什么。">
				八行，跨过那条线
			</Head>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 520px', display: 'flex', flexDirection: 'column', gap: 14 }}>
					<Code label=".github/workflows/check.yml" code={WORKFLOW} size={19} />
					<Code label="造一个违规 PR" code={PR} size={17} wrap />
					<div style={{ fontSize: FS.note, color: '#888', fontFamily: fonts.mono }}>
						今天不讲 CI 语法。只看最后一行：它跑你那个脚本，看退出码。
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<div style={{ border: `3px solid ${colors.purple}`, background: colors.white, padding: '18px 22px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, marginBottom: 10 }}>
							推之前：我写的是真实情况，能推吗？
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.7, color: '#333' }}>
							<b>能。推到你自己的私有仓。</b>这是你的东西，不交给任何人。
							<div style={{ height: 10 }} />
							但有一条真的边界：<b style={{ color: colors.purple }}>个人标识符不进这个仓库</b>，
							邮箱、账号 ID、手机号。
							<div style={{ height: 6 }} />
							理由不是敏感，是<b>单一权威源</b>：它们属于另一套系统，
							一个值存两份，两份一定会不一致。
							<div style={{
								marginTop: 10, fontFamily: fonts.mono, fontSize: 19,
								padding: '8px 12px', background: colors.purple, color: colors.white,
							}}>
								列的定义进库，行不进库。
							</div>
						</div>
					</div>
					<div style={{
						border: `2px dashed ${colors.red}`, padding: '12px 15px',
						fontSize: FS.note, lineHeight: 1.6, color: '#444',
					}}>
						⚠️ 这跟刚才那条花名册检查<b>不是同一件事</b>：
						那条的理由是<b>可维护性</b>（离职只动一份文件），这条是<b>单一权威源</b>。两条都成立，别混。
					</div>
					<SoBar color={colors.teal}>
						刚才那个检查<b>在你机器上，你改得了</b>。
						现在<b style={{ color: colors.teal }}>它在一台你改不了的机器上跑</b>。
						<br />
						区别不是谁记得，<b style={{ color: colors.teal }}>是谁改得了。</b>
					</SoBar>
				</div>
			</div>
		</Page>
	);
}
