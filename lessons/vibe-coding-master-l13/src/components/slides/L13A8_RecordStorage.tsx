import { AppendixBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// A8 · 记录存储三方案 ⭐ v3 新增
// 🔴 正课只给判据（被读还是被数），完整对比在这里。
// 🔴 最后一行三个风险形态完全不同，是这张表的重点：
//    纯 git 的风险又是「它什么都没做而你以为它做了」。
const ROWS: { k: string; git: string; db: string; mix: string; hot?: boolean }[] = [
	{ k: '抹不掉', git: '结构性保证', db: '策略性，能改的人可以不留痕', mix: 'git 那半是结构性的' },
	{ k: '查询聚合', git: '几乎没有', db: '强', mix: '分流之后各就各位' },
	{ k: '写入门槛', git: '中（网页能提交，但笨）', db: '低（一个表单）', mix: '看分到哪边' },
	{ k: 'AI 读的代价', git: '小量可整读，大了读不起', db: '不进 context', mix: '被读的那半保持小' },
	{ k: '运维', git: '零', db: '要人管、备份、权限', mix: '要人管' },
	{ k: '规模上限', git: '十人量级', db: '无明显上限', mix: '无明显上限' },
	{ k: '最大风险', git: '长大之后 AI 读不完，而它不会说', db: '能改的人和定规则的人是同一批', mix: '分流判断做错', hot: true },
];

export default function L13A8_RecordStorage() {
	return (
		<Page>
			<AppendixBadge label="A8 · 记录放哪" />
			<Head sub="正课只给了判据。这是完整对比。">
				纯 git · 纯数据库 · <span style={{ color: colors.green }}>混合</span>
			</Head>

			<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr 1.3fr 1.3fr' }}>
					{[
						{ t: '比什么', c: colors.dark },
						{ t: '纯 git', c: colors.blue },
						{ t: '纯数据库', c: colors.purple },
						{ t: '混合', c: colors.green },
					].map((h, i) => (
						<div key={i} style={{
							padding: '10px 16px', background: h.c,
							color: h.c === colors.green ? colors.black : colors.white,
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
							borderRight: i < 3 ? `2px solid ${colors.black}` : 'none',
						}}>{h.t}</div>
					))}
				</div>
				{ROWS.map((r) => (
					<div key={r.k} style={{
						display: 'grid', gridTemplateColumns: '0.9fr 1.3fr 1.3fr 1.3fr',
						borderTop: `2px solid ${colors.black}`,
						background: r.hot ? colors.yellow : colors.white,
					}}>
						<div style={{ padding: '10px 15px', fontSize: 18, fontWeight: 700, background: r.hot ? colors.yellow : '#f3efe9', borderRight: `2px solid ${colors.black}` }}>{r.k}</div>
						{[r.git, r.db, r.mix].map((v, j) => (
							<div key={j} style={{
								padding: '10px 15px', fontSize: 17, lineHeight: 1.4,
								borderRight: j < 2 ? `2px solid ${colors.black}` : 'none',
								fontWeight: r.hot ? 700 : 400,
							}}>{v}</div>
						))}
					</div>
				))}
			</div>

			<div style={{ display: 'flex', gap: 22, marginTop: 20 }}>
				<div style={{
					flex: 1, border: `3px solid ${colors.green}`, background: colors.white, padding: '14px 18px',
				}}>
					<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, marginBottom: 8 }}>
						混合 = 分流 + 锚定 + 一条对账
					</div>
					<div style={{ fontSize: 19, lineHeight: 1.6, color: '#444' }}>
						被读的进 git，被数的进数据库；数据库定期出快照提交进 git；
						<br />
						<b>一条检查：数据库当前历史 vs git 快照序列，对不对得上。</b>
						<br />
						<span style={{ color: '#777' }}>它补的正是数据库那个「策略性不可改写」的洞。</span>
					</div>
				</div>
				<div style={{
					flex: '0 0 430px', border: `2px dashed ${colors.red}`, padding: '14px 18px',
					fontSize: FS.note, lineHeight: 1.65,
				}}>
					<b style={{ color: colors.red }}>混合方案的真实代价：</b>
					<br />
					「这条记录该去哪」变成<b>每天都要做的判断</b>。
					<br />
					<b>所以那条判据必须简单到能写进模板里</b> ,
					这就是它只有一句的原因。
				</div>
			</div>
		</Page>
	);
}
