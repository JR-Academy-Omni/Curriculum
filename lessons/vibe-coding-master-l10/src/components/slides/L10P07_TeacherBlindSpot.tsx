import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Note, FS } from '../deck';

// P07 · 老师现场暴露一次自己的盲区（蓝图 §6）
// 形式：投屏，老师自己那个没有文档的老项目（L9 用的那个）。
// 让 AI 读一段自己写的代码，要它说出「三件作者可能没意识到的事」。
//
// 🔴 这次调用**不许提前跑**（§6.2）。排练过的惊讶是假的，学员看得出来。
// 🔴 但「不许排练」只约束当天那个模块，**不豁免运维兜底**（§6.4）：
//      一级 换备用模块重跑（仍是现场）
//      二级 投第三个模块的预录，**必须明说是预录，不许假装现场**
//      三级 只讲不演，用 P05 第三问填不出来的举手数当替代证据
// 🔴 三条全中时走 §6.3 台词，第二次还全中就承认「今天没抓到」往下走，不许硬演。

export default function L10P07_TeacherBlindSpot() {
	return (
		<Page>
			<PageHead
				phase="demo"
				title="换我。这是我自己的项目，没有任何文档"
				sub="我让它读一段我写的代码，要它说出三件「作者可能没意识到的事」。"
			/>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.45, delay: 0.2 }}
				style={{
					border, boxShadow: shadow, background: colors.dark, color: colors.white,
					padding: '34px 40px', flexShrink: 0,
				}}
			>
				<div style={{ fontFamily: fonts.mono, fontSize: FS.note, letterSpacing: 2, color: colors.yellow, marginBottom: 14 }}>
					读完之后我要说的那句话
				</div>
				<div style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.35 }}>
					「这是我写的。它刚才告诉了我
					<span style={{ background: colors.red, padding: '0 12px' }}>一件我不知道的事</span>
					。」
				</div>
			</motion.div>

			<div style={{ display: 'flex', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.purple, color: colors.white, padding: '9px 18px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
						上节课我说过一句
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
						「这是我写的，我现在<strong>不记得为什么</strong>了。」
					</div>
				</div>
				<div style={{
					flexShrink: 0, alignSelf: 'center', fontFamily: fonts.mono,
					fontSize: 30, color: '#bbb', fontWeight: 700,
				}}>──▶</div>
				<div style={{ flex: 1, border, boxShadow: '4px 4px 0 #000', background: colors.white, display: 'flex', flexDirection: 'column' }}>
					<div style={{ background: colors.red, color: colors.white, padding: '9px 18px', borderBottom: border, fontSize: 20, fontWeight: 900 }}>
						今天这句更重一档
					</div>
					<div style={{ padding: '16px 20px', fontSize: 23, lineHeight: 1.5, color: colors.dark }}>
						上次承认的是<strong>遗忘</strong>。<br />
						今天承认的是<strong>无知</strong> —— 我不知道自己不知道。
					</div>
				</div>
			</div>

			<Note>
				现在回头看你的问题三。<span style={{ color: colors.red, fontWeight: 700 }}>你填不出来，不是因为你的项目没有这一类东西。</span>
			</Note>
		</Page>
	);
}
