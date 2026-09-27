import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadow, FS } from '../deck';

// P02 · 它写在三个地方，然后呢 🎬 讲师现场跑 + 追问
// 🔴 这一页做两件事，**一页做完**：演示 A 的台子，和第一幕到第二幕的桥。
//    早先版本把它拆成两张（一张演示台、一张「靠人记得」转场），
//    讲师反馈「两张连着的纯叙述页有点多余」，合成一张，每半屏都有实物。
// 🔴 上半：跑之前挂着。讲师说完就切自己的终端跑 K.1，**不解释、不辩护、
//    不说「平时不这样」**，让沉默持续两秒。
// 🔴 下半：跑完切回来指着它讲。四个灰色答案是学员**大概率会在聊天框打出来的那几句** ,
//    先让他们自己说，再收成一句。这一句是第二幕的入口。
// 🔴 最后那行是唯一的前瞻，刻意不说「八个问题」：
//    路线图放这里会让后面每一步的发现感全部消失（八步总表在附录）。
const WHERE = ['项目文档里', '指令文件里', '会上说过不止一次'];
const ANSWERS = ['开会说', '写进 wiki', 'leader 盯', '大家自觉'];

export default function L13P02_ItWasWritten() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={1} mode="🎬 我现场跑" />
			<Head color={colors.white}>
				这条规矩，写在<span style={{ color: colors.yellow }}>三个地方</span>
			</Head>

			<div style={{ display: 'flex', gap: 16, marginBottom: 30 }}>
				{WHERE.map((w, i) => (
					<motion.div
						key={w}
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.15 + i * 0.12 }}
						style={{
							border: `3px solid ${colors.white}`, padding: '12px 22px',
							fontSize: 24, color: colors.white, fontWeight: 600,
						}}
					>
						{w}
					</motion.div>
				))}
				<motion.div
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
					style={{
						display: 'flex', alignItems: 'center', paddingLeft: 10,
						fontSize: 24, color: colors.yellow, fontFamily: fonts.mono,
					}}
				>
					→ 现在看它被破掉
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.7 }}
				style={{
					borderTop: '2px dashed rgba(255,255,255,0.22)', paddingTop: 26,
					display: 'flex', gap: 34, alignItems: 'flex-start',
				}}
			>
				<div style={{ flex: '0 0 560px' }}>
					<div style={{
						fontFamily: fonts.heading, fontSize: 40, fontWeight: 900,
						color: colors.white, lineHeight: 1.35,
					}}>
						三个地方都写了。
						<br />
						<span style={{ color: colors.red }}>破它的时候，没有任何东西拦一下。</span>
					</div>
					<div style={{
						marginTop: 22, fontSize: 25, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65,
					}}>
						我想问的不是「为什么会有人破规矩」。
						<br />
						是另一个问题 ，
						<span style={{ color: colors.yellow }}>右边那个。</span>
						<div style={{
							marginTop: 18, padding: '12px 16px', border: `3px solid ${colors.yellow}`,
							fontSize: 22, color: colors.white, lineHeight: 1.55,
						}}>
							顺带说一句：<b>这不是它的问题。</b>
							<br />
							<b style={{ color: colors.yellow }}>换个人来做，结果一模一样。</b>
						</div>
					</div>
					<div style={{
						marginTop: 26, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.12)',
						fontSize: 19, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7,
					}}>
						这条规矩我写过、说过、也提醒过。
						<br />
						<b style={{ color: 'rgba(255,255,255,0.6)' }}>这从来不是「没写下来」的问题。</b>
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
					<div style={{
						border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.07)',
						padding: '16px 20px', boxShadow: shadow,
					}}>
						<div style={{ fontSize: 28, color: colors.white, fontWeight: 700, lineHeight: 1.5 }}>
							在你们那儿，<b style={{ color: colors.yellow }}>是什么东西</b>
							保证一条规矩会被执行的？
						</div>
					</div>

					<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
						{ANSWERS.map((a) => (
							<span key={a} style={{
								fontFamily: fonts.mono, fontSize: 19, padding: '7px 14px',
								border: '2px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.45)',
							}}>{a}</span>
						))}
					</div>

					<div style={{
						marginTop: 24, fontFamily: fonts.heading,
						fontSize: 34, fontWeight: 900, color: colors.white, lineHeight: 1.4,
					}}>
						这四个是同一个答案：
						<span style={{ background: colors.yellow, color: colors.black, padding: '2px 14px', marginLeft: 8 }}>
							靠人记得
						</span>
					</div>
					<div style={{ fontSize: FS.note, color: 'rgba(255,255,255,0.4)', marginTop: 12, lineHeight: 1.6 }}>
						今天我们给规矩配一个<b style={{ color: 'rgba(255,255,255,0.75)' }}>不靠人记得</b>的东西。
						它是一个仓库 ，<b style={{ color: 'rgba(255,255,255,0.75)' }}>但在动手建之前，有一个问题最容易搞错。</b>
					</div>
				</div>
			</motion.div>
		</Page>
	);
}
