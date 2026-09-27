import { motion } from 'framer-motion';
import { ActBadge, Page, Head, Code, FS, colors, fonts, border, shadow } from '../deck';

// P18 · 角色文件里只出现角色 🎬⭐⭐ 翻车③
//
// 🚨🚨 v3.2 整页翻面（讲师反馈）：**不要从反面说，直接正面说应该怎么做。**
//     旧版是「这条检查我不解释，你先跑」—— 全部赌在「它会咬到学员自己」。
//     但**每个人的仓库不一样，这一下不一定咬得到**：
//     学员今天只写两个角色，模板那三段又不天然招人名，很多人跑出来是绿的。
//     一个只在你恰好犯过错时才成立的教学点，不是教学点，是抽奖。
//     ⛔ 旧版的连带损失更大：P11 必须全程忍着不提人名（「本 deck 最大的自毁按钮」），
//        讲师一句好心提醒就整格作废。现在这个按钮拆掉了。
//
// 🔴 新结构：先给规矩（正面）→ 给理由 → 才跑 → **两种结果都有话说**。
//    「没抓到」必须当场接住，否则那批学员会得出「这条跟我无关」的结论，
//    而他们回去写第十个角色的时候一定会碰到。
//
// 🔴 「检查从哪来」（第四道判断线）的交付改由**讲师自己的例子**承重，
//    不再依赖学员中没中 —— 那一层本来就写着「并行主路径」，现在它是主路径。
//
// 🔴 用花名册精确匹配，不用人名正则 —— 正则版在中文最自然的写法上全部漏掉
//    （「由某某审批」后面紧跟汉字），还会把普通词误判成人名（蓝图 §0.5）。
const CHECK6 = `hdr('6. 角色文件里不许出现花名册上的名字');
const roster = read('people/ROSTER.md')
  .split('\\n')
  .map(l => (l.match(/^[-*]\\s*(.+?)\\s*$/) || [])[1])
  .filter(Boolean);

for (const f of ls('rules')) {
  if (f === 'INDEX.md') continue;
  const body = read(\`rules/\${f}\`);
  for (const n of roster)
    for (const line of body.split('\\n'))
      if (line.includes(n))
        bad(\`rules/\${f} 写了名字「\${n}」\`);
}`;

/** 跑完两种结果，各自怎么读。🔴 「没抓到」那格必须存在，它是这一页新增的那一半。 */
const OUTCOMES = [
	{
		k: '抓到了',
		c: colors.red,
		lead: '现在就改掉。',
		body: '你早就破了这条规矩 ,而前五条检查一直是绿的。**没有任何东西在查它。**',
	},
	{
		k: '没抓到',
		c: colors.dark,
		lead: '两种可能，别急着高兴。',
		body: '你确实写对了，或者**你今天只写了两个角色，还没碰到**。回去写第十个的时候会碰到。',
	},
];

export default function L13P18_Crash3() {
	return (
		<Page>
			<ActBadge act={3} mode="🎬 翻车③" />
			<Head sub="第六条。这一条我先讲清楚，再让你跑。">
				角色文件里，<span style={{ color: colors.green }}>只出现角色</span>，不出现人名
			</Head>

			{/* 🔴 alignItems: flex-start ,默认 stretch 会把左栏拉到和代码等高，中间空一大块。 */}
			<div style={{ display: 'flex', gap: 28, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				{/* 左 · 规矩 + 理由 */}
				<div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
						style={{
							border: `3px solid ${colors.green}`, background: 'rgba(60,200,120,0.08)',
							padding: '18px 22px', flexShrink: 0,
						}}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#777', letterSpacing: 1, marginBottom: 10 }}>
							规矩
						</div>
						<div style={{ fontSize: 25, lineHeight: 1.6 }}>
							人名<b style={{ color: colors.green }}>只活在花名册里</b>。
							<br />
							角色文件里写<b>「谁管发布」</b>，不写<b style={{ color: colors.red }}>「张伟」</b>。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', flexShrink: 0 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#777', letterSpacing: 1, marginBottom: 10 }}>
							为什么
						</div>
						<div style={{ fontSize: 23, lineHeight: 1.65 }}>
							那个人离职的那天，
							<b style={{ background: colors.yellow, padding: '2px 8px' }}>你要改的应该只有一份文件。</b>
							<div style={{ height: 10 }} />
							名字一旦散进角色文件，离职就变成一次<b>全仓搜索</b> ,
							<b style={{ color: colors.red }}>而搜索总会漏。</b>
						</div>
					</motion.div>
				</div>

				{/* 右 · 这条检查长什么样 */}
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
					style={{ flex: '0 0 560px', minWidth: 0 }}
				>
					<Code label="第六条 · 跑一次" code={CHECK6} size={14} wrap />
				</motion.div>
			</div>

			{/* 下 · 两种结果都有话说 */}
			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
				style={{ display: 'flex', gap: 20, marginTop: 20, flexShrink: 0 }}
			>
				{OUTCOMES.map((o) => (
					<div
						key={o.k}
						style={{
							flex: 1, minWidth: 0, border: `3px solid ${o.c}`, background: colors.white,
							padding: '14px 18px',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
							<span style={{
								fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
								padding: '3px 12px', background: o.c,
								color: o.c === colors.dark ? colors.white : colors.white,
							}}>{o.k}</span>
							<span style={{ fontSize: 21, fontWeight: 700 }}>{o.lead}</span>
						</div>
						<div style={{ fontSize: FS.note, color: '#555', lineHeight: 1.65 }}>
							{o.body.split('**').map((seg, i) =>
								i % 2 === 1 ? <b key={i} style={{ color: colors.black }}>{seg}</b> : <span key={i}>{seg}</span>
							)}
						</div>
					</div>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
				style={{
					marginTop: 16, fontSize: FS.note, color: '#888', lineHeight: 1.6,
					borderTop: '2px dashed #ccc', paddingTop: 12, flexShrink: 0,
				}}
			>
				⭐ 这条检查<b>不是想出来的</b>。<b style={{ color: colors.black }}>是它先咬过一次，才被写下来的。</b>
				<span style={{ marginLeft: 14, fontFamily: fonts.mono, fontSize: 14, color: colors.red }}>← 第四道判断线</span>
			</motion.div>
		</Page>
	);
}
