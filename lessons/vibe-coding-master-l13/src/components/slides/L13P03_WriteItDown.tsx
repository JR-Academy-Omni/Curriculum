import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P03 · 那就写下来？ ⭐ v3 新增 · 全课主链的入口
// 🔴 三拍有顺序，不能打乱：写下来（刚证明没用）→ wiki（谁都能悄悄改）→ git（有个你改不了的远端）。
// 🔴 第三拍那半句是全课的支点：**不是因为 git 更专业，是因为它有一个你改不了的远端。**
// 🔥 埋点 4：「你改不了的远端」埋在这里，第四幕「本地的都可以改」展开。
// 🔴 这一页不许出现「CI」「分支保护」「第几级」,那是第四幕的东西。
const BEATS = [
	{
		q: '那就写下来？',
		a: '刚才已经试过了。写了三个地方，破的时候照样没人拦。',
		c: colors.red,
		kill: true,
	},
	{
		q: '那写进 wiki？',
		a: '谁都能悄悄改，而且改了没人知道。',
		c: colors.orange,
		kill: true,
	},
	{
		q: '那放进 git 仓？',
		a: '对。',
		c: colors.green,
		kill: false,
	},
];

export default function L13P03_WriteItDown() {
	return (
		<Page>
			<ActBadge act={1} />
			<Head sub="靠人记得不行，那靠什么？三个答案，前两个都会死。">
				那就<span style={{ color: colors.red }}>写下来</span>？
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
				{BEATS.map((b, i) => (
					<motion.div
						key={b.q}
						initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.2 + i * 0.35 }}
						style={{
							display: 'flex', alignItems: 'stretch',
							border: b.kill ? border : `4px solid ${colors.green}`,
							background: colors.white,
							boxShadow: b.kill ? '4px 4px 0 #000' : shadow,
						}}
					>
						<div style={{
							flex: '0 0 250px', padding: '16px 20px', background: b.c,
							color: b.c === colors.green ? colors.black : colors.white,
							fontFamily: fonts.heading, fontSize: 27, fontWeight: 900,
							display: 'flex', alignItems: 'center',
						}}>
							{b.q}
						</div>
						<div style={{
							flex: 1, padding: '16px 22px', fontSize: 25, lineHeight: 1.5,
							display: 'flex', alignItems: 'center',
							textDecoration: b.kill ? 'none' : 'none',
							color: b.kill ? '#666' : colors.black,
							fontWeight: b.kill ? 400 : 700,
						}}>
							{b.a}
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.6 }}
				style={{
					marginTop: 26, border: `4px solid ${colors.black}`, background: colors.dark,
					padding: '22px 26px', boxShadow: shadow,
				}}
			>
				<div style={{ fontSize: 24, color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
					但<b>不是</b>因为 git 更专业、更规范、更工程化。
				</div>
				<div style={{
					fontFamily: fonts.heading, fontSize: 42, fontWeight: 900,
					color: colors.white, lineHeight: 1.35,
				}}>
					是因为它有一个
					<span style={{ background: colors.yellow, color: colors.black, padding: '2px 14px', marginLeft: 6 }}>
						你改不了的远端
					</span>
				</div>
			</motion.div>

			<div style={{
				marginTop: 'auto', paddingTop: 16, fontSize: FS.note,
				color: '#888', lineHeight: 1.6,
			}}>
				wiki、共享文档、共享盘，都没有这个东西 ,
				<b>它们里面的每一条，都可以被有权限的人悄悄改成另一条。</b>
			</div>
		</Page>
	);
}
