import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead, Verdict, Code } from '../deck';

// P07 · 最小可用单位：Lead + 2（蓝图 §7.1 / §11.4）
// 讲法：从 Lead + 1 开始问「只有一名 teammate，谁和谁直接协作？」——答案是没有。

const WHY_NOT = [
	'只有一名 teammate，没有成员间通信',
	'协调仍然是 Hub-and-spoke',
	'这更像一个长期一点的 Subagent',
];

export default function L8P07_MinimalUnit() {
	return (
		<Page>
			<PageHead phase="talk" time="25–34 min" title="最小可用单位：Lead + 2" />

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				{/* Lead + 1 为什么不算 */}
				<motion.div
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column' }}
				>
					<div style={{
						background: colors.red, color: colors.white, padding: '10px 22px',
						borderBottom: border, fontSize: 23, fontWeight: 900,
					}}>Lead + 1 ✕ 不是最小 Team</div>

					<div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
						<div style={{
							fontSize: 28, fontWeight: 800, color: colors.dark, lineHeight: 1.45,
							padding: '16px 20px', background: '#fff2f2', border: `3px solid ${colors.red}`,
						}}>
							只有一名 teammate —— <span style={{ color: colors.red }}>谁和谁直接协作？</span>
						</div>

						<div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 13 }}>
							{WHY_NOT.map((w) => (
								<div key={w} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
									<span style={{ color: colors.red, fontSize: 22, fontWeight: 900, lineHeight: 1.35 }}>✕</span>
									<span style={{ fontSize: 23, lineHeight: 1.45, color: '#555' }}>{w}</span>
								</div>
							))}
						</div>

						<div style={{
							marginTop: 'auto', paddingTop: 18, borderTop: '2px dashed #ddd',
							fontSize: 22, color: '#777', lineHeight: 1.5,
						}}>
							产品可能允许更小的形态。但<strong style={{ color: colors.dark }}>「最小能学到协作结构的单位」必须有两名 teammates</strong>。
						</div>
					</div>
				</motion.div>

				{/* 最小可用 Team */}
				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
				>
					<div style={{
						border, boxShadow: shadow, background: colors.green, color: colors.black,
						padding: '10px 22px', fontSize: 23, fontWeight: 900,
					}}>Lead + 2 ✓ 本课的最小可用单位</div>

					<Code>{`1 Lead
+ 2 teammates
+ 1 个共享任务
+ 1 次 teammate → teammate 直接消息
+ 1 次 Lead 决定与外部验收`}</Code>

					<div style={{
						flex: 1, border: `3px solid ${colors.dark}`, background: colors.white,
						padding: '18px 22px', display: 'flex', alignItems: 'center',
					}}>
						<div style={{ fontSize: 23, lineHeight: 1.55, color: colors.dark }}>
							这五条<strong>缺一条都不算</strong>。
							<br />
							成员名单和共享任务<strong style={{ color: colors.red }}>不是充分证据</strong> ——
							必须出现一次 <span style={{ fontFamily: fonts.mono, background: colors.yellow, padding: '0 8px' }}>teammate → teammate</span> 的直接消息。
						</div>
					</div>
				</motion.div>
			</div>

			<Verdict bg={colors.white} fg={colors.dark} style={{ border, boxShadow: shadow }}>
				只有 Lead ↔ 成员的往返，<span style={{ background: colors.red, color: colors.white, padding: '0 10px' }}>按 Subagent 处理</span>，不算本节过关。
			</Verdict>
		</Page>
	);
}
