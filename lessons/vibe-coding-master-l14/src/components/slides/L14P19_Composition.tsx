import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, radii } from '../deck';

/** P19 · 技能的组合方向是反的，这一格容易想错 */
export default function L14P19_Composition() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub="多数技能是「消费」记录的 —— 读进度、生成报告。但会有一个技能是「生产」记录的。">
				有一个技能的方向是反的
			</Head>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.42 }}
					style={{
						flex: 1, padding: '26px 28px', borderRadius: radii.panel,
						border: `2px solid ${colors.dark}`, background: colors.white,
						boxShadow: `7px 7px 0 rgba(255,222,89,.9)`,
						display: 'flex', flexDirection: 'column', gap: 14,
					}}
				>
					<div style={{ fontSize: 30, fontWeight: 900 }}>消费型（多数）</div>
					<div style={{ fontSize: 22, lineHeight: 1.6, opacity: .78 }}>
						读记录 → 出报告。<br />它放在规范仓里，没有争议。
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.42 }}
					style={{
						flex: 1.3, padding: '26px 28px', borderRadius: radii.panel,
						border: `2px solid ${colors.dark}`, background: colors.dark, color: colors.white,
						boxShadow: `10px 10px 0 rgba(203,108,230,.6)`,
						display: 'flex', flexDirection: 'column', gap: 14,
					}}
				>
					<div style={{ fontSize: 30, fontWeight: 900, color: colors.yellow }}>生产型（那一个）</div>
					<div style={{ fontSize: 22, lineHeight: 1.6, opacity: .82 }}>
						帮人起草每天的更新。<br />
						它<strong>放在它输出落地的那个仓库里</strong>，不放规范仓 ——
						它是可执行的，而且它在输出落地的地方运行。
					</div>
					<div style={{
						marginTop: 'auto', padding: '14px 18px', borderRadius: radii.card,
						background: 'rgba(255,222,89,.16)', fontSize: 21, lineHeight: 1.55,
					}}>
						<strong style={{ color: colors.yellow }}>但是：规范仓的写操作总表里仍然要列它。</strong>
					</div>
				</motion.div>
			</div>

			<div style={{ marginTop: 22 }}>
				<SoBar color={colors.purple}>
					因为指令文件声称「<strong>所有被允许的写都在这张表里</strong>」。
					一个<strong>只在代码所在地登记</strong>的写操作，
					就是一个<strong>没人找得到其批准门禁</strong>的写操作。
				</SoBar>
			</div>
		</Page>
	);
}
