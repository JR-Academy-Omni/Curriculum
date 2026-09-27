import { motion } from 'framer-motion';
import { colors, border, shadow } from '../ui';
import { Page, AsciiFlow, FS } from '../deck';
import { fonts } from '../ui';

// P19 · 搬运四 · 开放区会漏回隐藏区（蓝图 §8.5）—— 全课第二个高光
// 🔴 反转页。前面三条都在教「怎么搬进开放区」，学员这时形成了错觉：搬进去就结束了。
// 🔴 这一条不许提前讲。P13 只埋引信（「先记着，一会儿回来算这笔账」），这里才点。
// 🔴 退化循环图的纵向落差本身就是表达，不要改写成横向图（§11.1）。
// 这也是本课比 Johari 原型多出来的那一条 —— 它证明这个框架能预测新东西，
// 不只是解释旧课（回应 P10 那句「你要是觉得像事后归纳」）。

export default function L10P19_OpenLeaksBack() {
	return (
		<Page>
			<motion.div
				initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				style={{ flexShrink: 0 }}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
					<span style={{
						background: colors.blue, color: colors.white, padding: '4px 16px',
						fontSize: 18, fontWeight: 800, border: `2px solid ${colors.black}`,
					}}>讲</span>
					<span style={{
						marginLeft: 'auto', fontFamily: fonts.mono, fontSize: FS.note, fontWeight: 700,
						letterSpacing: 2, color: colors.white, background: colors.red,
						padding: '4px 14px', border: `2px solid ${colors.black}`,
					}}>搬运 4 / 4 · 第四条来了</span>
				</div>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 54, fontWeight: 900, lineHeight: 1.12, letterSpacing: -1 }}>
					开放区会<span style={{ background: colors.red, color: colors.white, padding: '0 12px' }}>漏回隐藏区</span>
				</h2>
			</motion.div>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				<AsciiFlow size={21} lh={1.32} accent={colors.red} label="THE LEAK" style={{ flex: 1 }}>{`你写了 CLAUDE.md（隐藏 → 开放）
   ↓
项目变了 / 决定变了 / 人换了
   ↓
你没更新（开放区悄悄过期，但看起来没变）
   ↓
它每一轮照旧读那份过期的
   ↓
「它又不守规范了」「它怎么又忘了」
   ↓            ← 你以为是它的问题
你补一句 prompt 打补丁（改症状，不改源）
   ↓
开放区继续烂，补丁越来越多`}</AsciiFlow>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
					<motion.div
						initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.15 }}
						style={{ border, boxShadow: shadow, background: colors.yellow, padding: '18px 22px' }}
					>
						<div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.45, color: colors.black }}>
							刚才那笔账，现在算。
							<div style={{ fontSize: 23, fontWeight: 700, marginTop: 8 }}>
								你在自己的 CLAUDE.md 里数出来的<strong>已过期</strong>那几条，就是漏掉的部分。
							</div>
						</div>
					</motion.div>

					{[
						'开放区不是你达成的状态，是你维护的状态。',
						'它退化的时候没有报错。这是它比另外三格危险的原因。',
						'你打的每一个 prompt 补丁，都是在替一条过期的开放区条目付利息。',
					].map((t, i) => (
						<motion.div
							key={t}
							initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.3 + i * 0.12 }}
							style={{
								border, boxShadow: '4px 4px 0 #000',
								background: i === 0 ? colors.dark : colors.white,
								color: i === 0 ? colors.white : colors.dark,
								padding: '15px 20px', fontSize: i === 0 ? 26 : 23,
								fontWeight: i === 0 ? 900 : 700, lineHeight: 1.45,
							}}
						>
							{t}
						</motion.div>
					))}
				</div>
			</div>

			<div style={{ fontSize: FS.note, color: '#777' }}>
				L3 说过「修宪法 &gt; 改页面」。现在你知道为什么：改页面是付利息，改宪法是还本金。
			</div>
		</Page>
	);
}
