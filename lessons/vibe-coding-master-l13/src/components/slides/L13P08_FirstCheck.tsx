import { motion } from 'framer-motion';
import { ActBadge, Page, Head, Code, colors, fonts, border, FS } from '../deck';

// P08 · 第一条检查：说给它听 🎯 全班动手 · 本节地基
// 🚨 v3 最大的改动之一：**代码不是让学员抄的。**
//    学员的动作是「说一句话 → 它写 → 你判它对不对」，不是敲 readdirSync 循环。
//    一门 Vibe Coding 课让学员手敲正则，本身就是跑题；而且抄完的东西他两周后改不动。
// 🔴 页面统一三栏：你说的话 / 它写的东西 / 它抓到什么。
//    右边那段代码是**给学员评判用的**，不是给他抄的，讲师不许念它。
// 🔴 bad / note 两个函数现在不解释，只说「等下你会非常需要这个区分」。
// 🔥 埋点 3：结尾必须说「目前没有任何东西自动跑它」。
// 🔴 骨架故意只给形状，不给完整实现 ,这一页的重点是「你不用会写」。
//    完整骨架在课前包里，学员不用照着敲。
const SKELETON = `let fail = 0;

const bad  = (m) => { ... };   // 硬失败
const note = (m) => { ... };   // 只打印

// ← 它写的检查加在这里

process.exit(fail);`;

const GENERATED = `hdr('1. 规则目录存在且非空');
if (ls('rules').length === 0)
  bad('rules/ 是空的');`;

export default function L13P08_FirstCheck() {
	return (
		<Page>
			<ActBadge act={1} mode="🎯 全班动手" />
			<Head sub="从现在开始有一条规矩：每加一条规则，当场给它加一条检查。">
				第一条检查：<span style={{ color: colors.green }}>说给它听</span>
			</Head>

			{/* 🔴 三栏不要 stretch ,第一栏内容短，等高会空出一大截。
			    箭头用 alignSelf: center 单独居中，三栏顶对齐。 */}
			<div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
				{/* 栏 1 · 你说的话 */}
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
					style={{ flex: '0 0 420px', display: 'flex', flexDirection: 'column', gap: 12 }}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.green, letterSpacing: 2 }}>
						① 你说的话
					</div>
					<div style={{
						border: `4px solid ${colors.green}`, background: colors.white,
						padding: '18px 20px', fontSize: 24, lineHeight: 1.6,
					}}>
						「在 <code style={{ fontFamily: fonts.mono }}>check.mjs</code> 里加一条检查：
						<b>规则目录必须存在，而且不能是空的。</b>
						空的就报失败。」
					</div>
					<div style={{ fontSize: FS.note, color: '#888', lineHeight: 1.6 }}>
						<b>你不用会写。</b> 你只需要把那条规矩说到
						<b>它不用猜</b>。
					</div>
				</motion.div>

				<div style={{ alignSelf: 'center', fontSize: 30, color: '#bbb', paddingTop: 60 }}>→</div>

				{/* 栏 2 · 它写的东西 */}
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
					style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#888', letterSpacing: 2 }}>
						② 它写的东西
					</div>
					<Code label="骨架（课前包里有）" code={SKELETON} size={17} />
					<Code label="它加进去的" code={GENERATED} size={18} wrap />
				</motion.div>

				<div style={{ alignSelf: 'center', fontSize: 30, color: '#bbb', paddingTop: 60 }}>→</div>

				{/* 栏 3 · 你判它对不对 */}
				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
					style={{ flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: 12 }}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.red, letterSpacing: 2 }}>
						③ 你判它对不对
					</div>
					<div style={{ border, background: colors.white, padding: '14px 16px', fontSize: 20, lineHeight: 1.7 }}>
						<div style={{ marginBottom: 12 }}>
							<b style={{ color: colors.green }}>先红</b> ,目录现在是空的
						</div>
						<div style={{ marginBottom: 12 }}>
							建一个文件，<b style={{ color: colors.green }}>再跑，绿了</b>
						</div>
						<div style={{
							borderTop: '2px dashed #ddd', paddingTop: 12,
							fontSize: 18, color: '#666',
						}}>
							骨架里有 <b style={{ fontFamily: fonts.mono, color: colors.red }}>bad</b> 和
							<b style={{ fontFamily: fonts.mono, color: '#888' }}> note</b> 两个函数。
							<br />
							<b>现在不用管为什么有两个 ,等下你会非常需要这个区分。</b>
						</div>
					</div>
					<div style={{
						fontFamily: fonts.mono, fontSize: 19, fontWeight: 700, textAlign: 'center',
						padding: '8px 14px', background: colors.yellow, border,
					}}>
						绿了的 → 打 1
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
