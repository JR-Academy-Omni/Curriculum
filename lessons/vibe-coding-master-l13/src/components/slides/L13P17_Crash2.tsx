import { ActBadge, Page, Head, Code, TwoCol, colors, fonts, border, FS } from '../deck';

// P13 · 翻车② 全设成失败 🎬⭐⭐ 本幕支点
// 🔴 全节最容易被讲轻的一页。三句一句都不能省，中间都要停：
//    1 这是错吗？（不是）2 那你明天还会跑它吗？（不会）
//    3 一个天天红的检查，和一个不存在的检查，是同一个东西
// 🔴 解药是一个词：bad → note。用 hi 高亮那一行。
const BEFORE = `hdr('5. 索引登记的文件都存在');
for (const m of index.matchAll(/[a-z0-9-]+\\.md/g)) {
  if (!existsSync(\`rules/\${m[0]}\`))
    bad(\`\${m[0]} 被登记但不存在\`);
}`;

const AFTER = `  if (!existsSync(\`rules/\${m[0]}\`))
    note(\`尚未创建: \${m[0]}\`);`;

export default function L13P17_Crash2() {
	return (
		<Page>
			<ActBadge act={3} mode="🎬 翻车② · 本幕支点" />
			<Head sub="在索引里加三行，写三个你们那儿还没写、但迟早要写的角色。文件不要建。">
				既然判断类查不了，<span style={{ color: colors.red }}>那就把能查的全查上</span>
			</Head>

			<div style={{
				border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.15)',
				padding: '11px 16px', marginBottom: 16, fontSize: 20, lineHeight: 1.5,
			}}>
				<b style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', marginRight: 10 }}>你说的</b>
				「再加一条：<b>索引里提到的文件，必须都存在。</b>」
				<span style={{ color: '#888', marginLeft: 10 }}>,注意你没说「哪些不算失败」。</span>
			</div>

			<div style={{ display: 'flex', gap: 26, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 520px', display: 'flex', flexDirection: 'column', gap: 12 }}>
					<Code label="第五条 · 反方向" code={BEFORE} size={17} wrap />
					<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
						{[
							['这是错吗？', '不是。那几个角色本来就还没写。'],
							['那你明天还会跑它吗？', '不会。你会关掉它。'],
						].map(([q, a], i) => (
							<div key={i} style={{ border, background: colors.white, boxShadow: '3px 3px 0 #000', padding: '11px 15px' }}>
								<div style={{ fontSize: 21, fontWeight: 700 }}>{q}</div>
								<div style={{ fontSize: 20, color: colors.red, marginTop: 3 }}>{a}</div>
							</div>
						))}
					</div>
					<div style={{
						background: colors.dark, color: colors.white, border, padding: '14px 16px',
						fontFamily: fonts.heading, fontSize: 25, fontWeight: 900, lineHeight: 1.4,
					}}>
						一个天天红的检查，和一个不存在的检查，
						<span style={{ color: colors.yellow }}>是同一个东西。</span>
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ fontSize: 22, fontWeight: 700 }}>
						解药是一个词：
					</div>
					<Code label="bad → note" code={AFTER} hi={[1]} size={19} wrap />
					<TwoCol
						head={['硬失败 bad', '提示 note']}
						headColor={colors.dark}
						rows={[
							['不变式被破坏', '计划中的文件、缺口统计'],
							[<b key="a" style={{ color: colors.red }}>退出码 1 · 合不了 PR</b>, <span key="b" style={{ color: '#777' }}>退出码 0 · 只是让你看见</span>],
							['「必须立刻修的错」', '「一个已知的状态」'],
						]}
					/>
					<div style={{ fontSize: FS.note, lineHeight: 1.6, color: '#555', marginTop: 'auto' }}>
						分界线：<b>没人负责的角色是一条被破坏的不变式。还没建的文件不是。</b>
						<br />
						<b style={{ color: colors.red }}>把什么当失败，是这个检查能不能活过两周的唯一决定因素。</b>
					</div>
				</div>
			</div>
		</Page>
	);
}
