import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';

/**
 * P07 · 白名单管什么、不管什么
 *
 * 🔴 2026-10-04 改版：原来这一页是「翻车①」—— 让学员故意把白名单放宽、
 *   跑一条会改东西的命令，然后发现没人拦他。
 *   **讲师取消了：不要从反面教。**（沿用第十三节 v3.2 那条「正面给规矩，
 *   不赌学员犯错」—— 只在你恰好犯过错时才成立的教学点，是抽奖不是教学。）
 *   现在改成正面讲清楚它管什么、不管什么，然后直接进写权限表。
 */
export default function L14P07_WhatAllowlistDoes() {
	return (
		<Page>
			<ActBadge act={2} />
			<Head sub="它确实有用 —— 但它解决的是另一个问题。把这两件事分清楚，后面那张表才站得住。">
				白名单管什么，不管什么
			</Head>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<motion.div
					initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.42 }}
					style={{
						flex: 1, padding: '26px 28px', borderRadius: radii.panel,
						border: `2px solid ${colors.green}`, background: 'rgba(126,217,87,.12)',
						display: 'flex', flexDirection: 'column', gap: 16,
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black }}>它管这个 ✓</div>
					<div style={{ fontSize: 23, lineHeight: 1.75 }}>
						<strong>少弹几次确认框。</strong><br /><br />
						不用每跑一条只读命令都来问你一次 ——
						一天下来省掉几十次打断。
					</div>
					<div style={{ marginTop: 'auto', fontSize: 20, lineHeight: 1.6, opacity: .72 }}>
						所以它该放的是<strong>不动你工作区</strong>的那些：
						看状态、看差异、看历史、取远端更新。
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.42 }}
					style={{
						flex: 1.15, padding: '26px 28px', borderRadius: radii.panel,
						border: `2px solid ${colors.dark}`, background: colors.dark, color: colors.white,
						boxShadow: `10px 10px 0 rgba(255,87,87,.6)`,
						display: 'flex', flexDirection: 'column', gap: 16,
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.red }}>它不管这个 ✕</div>
					<div style={{ fontSize: 23, lineHeight: 1.75 }}>
						<strong style={{ color: colors.yellow }}>它不阻止任何事。</strong><br /><br />
						一条命令**在不在白名单里**，决定的是
						「要不要问你一声」—— <strong>不是「能不能做」</strong>。
						<br /><br />
						白名单之外的命令，它还是会做，只是会先问一句。
					</div>
					<div style={{
						marginTop: 'auto', padding: '14px 18px', borderRadius: radii.card,
						background: 'rgba(255,222,89,.16)', fontSize: 22, lineHeight: 1.55, fontWeight: 800,
					}}>
						所以白名单是<span style={{ color: colors.yellow }}>省事边界</span>，
						不是<span style={{ color: colors.yellow }}>安全边界</span>。
					</div>
				</motion.div>
			</div>

			<div style={{ marginTop: 22 }}>
				<SoBar color={colors.blue}>
					真正的权限政策，记在<strong>下一页那张表</strong>上。
					而真正<strong>能拦住人</strong>的，是第五幕那层自动检查 —— 今天最后会讲到。
					<strong>这三样东西不要混。</strong>
				</SoBar>
			</div>
		</Page>
	);
}
