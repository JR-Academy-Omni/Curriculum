import { ActBadge, Page, Head, Code, SoBar, colors, fonts, FS } from '../deck';

// P07 · 裁决表 + 检查② 🎯
// 🔴 模板里「以后再建」的目录现在不存在，这是对的：裁决表本来就该先于目录存在。
// 🔴 检查②的价值不是找错，是把「别漏格」从「记得」变成「绕不过去」。
// 🔴 行宽实测过：最长一行必须放得进 600px 块（19px Space Mono + 18px 左右 padding）。
//    早先版本在每行尾部挂「（以后再建）」注记，右边被裁掉 33px，注记移到块下方的说明行。
// 🔴 「这儿有谁」不写「公司里有谁」：单位可以是三个人的项目组（蓝图 §1.0）。
const AUTH = `# 权威优先级

冲突时，上面的赢。

1. governance/   谁决定、谁批准、什么禁止
2. rules/        每个角色答应什么
3. people/       这儿有谁
4. sops/         活怎么干
5. README.md     摘要。与上面冲突时，上面赢

## 例外
（暂无。加例外要同时加一条检查）`;

const CHECK2 = `hdr('2. 每个目录都在 AUTHORITY.md 里有位置');
const auth = read('AUTHORITY.md');
for (const d of readdirSync('.', { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith('.')) continue;
  if (!auth.includes(\`\${d.name}/\`))
    bad(\`目录 \${d.name}/ 没有出现在 AUTHORITY.md 里\`);
}`;

export default function L13P10_Authority() {
	return (
		<Page>
			<ActBadge act={2} mode="🎯 全班动手" />
			<Head sub="裁决表必须是全序：任意两个目录打架，都要有确定答案。">
				裁决表 + 检查②
			</Head>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 600px', display: 'flex', flexDirection: 'column', gap: 12 }}>
					<Code label="AUTHORITY.md" code={AUTH} size={19} />
					<div style={{ fontSize: FS.note, color: '#888', fontFamily: fonts.mono, lineHeight: 1.6 }}>
						<b style={{ color: colors.blue }}>governance/ 和 sops/ 现在还不存在</b>，先写进表里是对的：
						<br />
						裁决表本来就该先于目录存在。
					</div>
				</div>
				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<Code label="检查②" code={CHECK2} size={18} wrap />
					<SoBar color={colors.blue}>
						它保证你以后<b>每新建一个目录，都必须先决定它在裁决表里的位置</b>，否则合不进去。
						<br />
						<b style={{ color: colors.blue }}>它把「别漏格」从「记得」变成了「绕不过去」。</b>
					</SoBar>
					<div style={{
						marginTop: 14, border: `2px dashed ${colors.purple}`, padding: '12px 15px',
						fontSize: FS.note, lineHeight: 1.65, color: '#444',
					}}>
						⭐ 顺带两条，都是给 <b>AI 读它</b> 用的：
						<br />
						<b>一个话题只在一个文件里</b> ,散在三个文件，它必须三个都读完才敢答，
						<b style={{ color: colors.purple }}>漏一个就给你一个自信的错答案。</b>
						<br />
						<b>例外必须和规则在同一个文件里</b> ,所以上面那个「## 例外」是内嵌一节，
						<b style={{ color: colors.purple }}>不是另一个文件。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
