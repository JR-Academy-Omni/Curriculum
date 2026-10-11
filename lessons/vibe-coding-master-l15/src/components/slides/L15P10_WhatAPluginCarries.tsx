import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, border, radii } from '../deck';

/**
 * P10 · 一个包能带什么（⭐⭐ 独占一屏 · 整节课的枢纽）
 *
 * 🔴 全课成败判据（PRD §0.4）：每一类后面必须挂上「你第几节课造的那个」。
 *    学员在这一页认不出自己造的东西 = 这一节白讲。
 * 🔴 讲师要点名问，不要自己一口气念完。第六类先放着，P11 单独讲。
 *
 * 六类来自已核实的技术事实（PRD §3）：skills / agents / commands / hooks / scripts / MCP。
 */
const ROWS = [
	{ dir: 'skills',   zh: '技能',     from: '第五节 · 你固化的那个套路', c: colors.blue },
	{ dir: 'agents',   zh: '助手',     from: '第七节 · 你分出去的那个助手', c: colors.teal },
	{ dir: 'commands', zh: '斜杠命令', from: '你自己定义的快捷入口', c: colors.purple },
	{ dir: 'hooks',    zh: '钩子',     from: '第十二节 · 那个绕不过去的钩子', c: colors.orange },
	{ dir: 'scripts',  zh: '脚本',     from: '第十一节的定时任务 · 第十三节那个检查', c: colors.green },
];

export default function L15P10_WhatAPluginCarries() {
	return (
		<Page>
			<ActBadge act={2} mode="六类" />
			<Head sub="每一类，都对应你前面某一节课造的东西。">一个包，能带什么</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
				{ROWS.map((r, i) => (
					<motion.div
						key={r.dir}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.15 + i * 0.13, duration: 0.42 }}
						style={{
							display: 'flex', alignItems: 'center', gap: 18,
							background: colors.white, border, borderRadius: radii.card,
							boxShadow: `5px 5px 0 ${r.c}`, padding: '13px 20px',
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, letterSpacing: 1,
							background: r.c, color: colors.black, border: `2px solid ${colors.black}`,
							borderRadius: radii.label, padding: '5px 12px', minWidth: 124, textAlign: 'center', flexShrink: 0,
						}}>{r.dir}</span>
						<span style={{ fontSize: 26, fontWeight: 800, minWidth: 116, flexShrink: 0 }}>{r.zh}</span>
						<span style={{ fontSize: 20, color: '#555', lineHeight: 1.5 }}>{r.from}</span>
					</motion.div>
				))}

				{/* 第六类：下一页单独讲 */}
				<motion.div
					initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 + 5 * 0.13, duration: 0.42 }}
					style={{
						display: 'flex', alignItems: 'center', gap: 18,
						background: '#f2eeea', border: `2px dashed ${colors.black}`, borderRadius: radii.card,
						padding: '13px 20px',
					}}
				>
					<span style={{
						fontFamily: fonts.mono, fontSize: 18, fontWeight: 800, letterSpacing: 1,
						background: '#ded8d3', color: '#777', border: `2px solid ${colors.black}`,
						borderRadius: radii.label, padding: '5px 12px', minWidth: 124, textAlign: 'center', flexShrink: 0,
					}}>mcp</span>
					<span style={{ fontSize: 26, fontWeight: 800, minWidth: 116, flexShrink: 0, color: '#777' }}>外部连接</span>
					<span style={{ fontSize: 20, color: '#8c8c8c', lineHeight: 1.5 }}>跟前五类不一样 —— 下一页</span>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1.15, type: 'spring', stiffness: 165, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '24px 32px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.red}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 33, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					这不是一个新工具的功能列表。<br />
					<span style={{ color: colors.yellow }}>这是你这十四节课造出来的清单。</span>
				</div>
			</motion.div>
		</Page>
	);
}
