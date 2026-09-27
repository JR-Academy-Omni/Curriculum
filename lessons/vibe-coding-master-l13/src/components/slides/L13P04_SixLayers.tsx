import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P04 · 这套东西长什么样（六层图）⭐ v3 新增
// 🚨 只给六层，L6 留一个空格，七层里 L6 就是强制力阶梯，第一幕给全等于提前亮底。
//    第四幕阶梯那页把它补上。**缺一块的图会让学员一直惦记**，那是故意的。
// 🔴 这张图一次回答三件事：这系统是做什么的 / SOP 是什么 / 为什么今天不先写 SOP。
//    最后一句是白送的，它不是话术，是这张图的结构本身在说话。
// 🔴 第二重身份要点出来：**这张图也是 agent 的检索路径**（蓝图 §1.7）。
const LAYERS = [
	{ lv: 'L5', k: '技能层', d: 'AI 怎么干活', tag: '下一节', dim: true },
	{ lv: 'L4', k: '流程层', d: 'SOP / 模板', tag: 'SOP 在这里', sop: true },
	{ lv: 'L3', k: '组织层', d: '角色 / 花名册', tag: '今天做', today: true },
	{ lv: 'L2', k: '治理层', d: '谁说了算（最高权威）', tag: '今天做', today: true },
	{ lv: 'L1', k: '入口层', d: '人读的那一份', tag: '' },
	// 🔴 v3.2（讲师）：L0 从「今天做一点」改成「**最后做**」。
	//    指令层是唯一一份会反过来管住「你这次施工」的文件 ,
	//    写早了，帮你建仓库的那个 agent 立刻开始受它管，
	//    而你很可能已经没权限改那条规矩了。理由在下面那行，必须讲。
	{ lv: 'L0', k: '指令层', d: 'AI 读的那一份', tag: '最后做', last: true },
];

export default function L13P04_SixLayers() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="在动手之前，先知道自己在造什么。">
				这套东西<span style={{ color: colors.blue }}>长什么样</span>
			</Head>

			<div style={{ display: 'flex', gap: 32, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
				<div style={{ flex: '0 0 700px', display: 'flex', flexDirection: 'column', gap: 6 }}>
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
						style={{
							border: `3px dashed ${colors.red}`, background: 'rgba(255,87,87,0.06)',
							padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 16,
						}}
					>
						<span style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700, width: 42, color: colors.red }}>？</span>
						<span style={{ fontSize: 23, color: colors.red, fontWeight: 700 }}>还差最上面一层</span>
						<span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 15, color: colors.red }}>← 今天下半场才填</span>
					</motion.div>

					{LAYERS.map((l, i) => (
						<motion.div
							key={l.lv}
							initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
							style={{
								display: 'flex', alignItems: 'center', gap: 16, padding: '11px 18px',
								border, background: l.sop ? colors.yellow : (l.today || l.last) ? colors.white : '#f3efe9',
								boxShadow: l.sop ? '4px 4px 0 #000' : 'none',
								opacity: l.dim ? 0.5 : 1,
							}}
						>
							<span style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 700, width: 42 }}>{l.lv}</span>
							<span style={{ fontSize: 24, fontWeight: 700, minWidth: 96 }}>{l.k}</span>
							<span style={{ fontSize: 21, color: '#555' }}>{l.d}</span>
							{l.tag && (
								<span style={{
									marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700,
									padding: '3px 10px',
									background: l.sop ? colors.black : l.today ? colors.green : l.last ? colors.red : 'transparent',
									color: l.sop ? colors.yellow : l.today ? colors.black : l.last ? colors.white : '#999',
									border: l.today || l.sop || l.last ? 'none' : '1px solid #ccc',
								}}>{l.tag}</span>
							)}
						</motion.div>
					))}

					{/* 🔴 L0 为什么最后做 ,这一行不许省，它是「顺序本身也是设计」的第一个例子。 */}
					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
						style={{
							marginTop: 8, padding: '12px 16px', flexShrink: 0,
							border: `3px solid ${colors.red}`, background: 'rgba(255,87,87,0.06)',
							fontSize: 19, lineHeight: 1.6, color: '#444',
						}}
					>
						{/* 🔴 「L0」必须走等宽字体：正文字体里的 0 看起来是字母 O，
						    而同一页的层标签用的是 mono，两处对不上会让人以为是两个东西。 */}
						<b style={{ color: colors.red }}>
							<span style={{ fontFamily: fonts.mono }}>L0</span> 为什么排最后：
						</b>
						它是唯一一份<b>会反过来管住你这次施工</b>的文件。
						写早了，帮你建仓库的那个 agent 当场开始受它管 ,
						<b style={{ color: colors.black }}>而那时候你可能已经没权限改它了。</b>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}
				>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', letterSpacing: 1, marginBottom: 10 }}>
							那 SOP 是什么
						</div>
						<div style={{ fontSize: 23, lineHeight: 1.65 }}>
							把「这件事该怎么做」写下来，<b>让换个人也能做</b>。
							<div style={{ height: 10 }} />
							<b style={{ color: colors.red }}>大多数公司的 SOP 失败，不是因为写得不好，</b>
							<br />
							<b style={{ color: colors.red }}>是因为写完之后没有任何东西保证它被执行。</b>
						</div>
					</div>

					<div style={{
						border: `3px solid ${colors.blue}`, background: 'rgba(56,182,255,0.07)',
						padding: '18px 20px',
					}}>
						<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, lineHeight: 1.45 }}>
							所以今天<b style={{ color: colors.blue }}>不从写步骤开始</b>，
							<br />
							从<b style={{ color: colors.blue }}>「谁说了算」</b>和
							<b style={{ color: colors.blue }}>「谁来拦」</b>开始。
						</div>
						<div style={{ fontSize: FS.note, color: '#555', marginTop: 12, lineHeight: 1.6 }}>
							L4 站在 L2 和 L3 上面。<b>没有谁说了算，SOP 写出来也没人执行。</b>
						</div>
					</div>

					<div style={{
						marginTop: 'auto', fontSize: FS.note, color: '#888', lineHeight: 1.65,
						borderTop: '2px dashed #ccc', paddingTop: 14,
					}}>
						⭐ 这张图还有第二重身份：<b>它是 AI 的检索路径。</b>
						<br />
						每层一个位置，它才知道去哪找 ,
						<b>一个话题散在三个文件里，它必须三个都读完才敢答。</b>
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
