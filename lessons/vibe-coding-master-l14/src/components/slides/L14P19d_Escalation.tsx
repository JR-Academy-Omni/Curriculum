import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';

/**
 * P19d · 升级有三种，常被混成一种
 *
 * 🔴 2026-10-04 新增。对照真系统 governance/escalation.md 之后发现：
 *   课上只讲了「超时提醒」，那只是三类里的一类（延迟型）。
 *   而真文件明说：第三类（阻塞型）最容易被滥用 ——
 *   **「我决定不了」通常不是权限问题，当成权限问题处理，
 *     等于教会团队「难的事往上推」。**
 *
 * 🔴 利益冲突那条最反直觉：**横向路由到具名替补，不往上。**
 */
const KINDS = [
	{ k: '权限型', t: '只有更高的帽子能决定它', move: '决策移动了', why: '它本来就路由错了', c: colors.blue },
	{ k: '延迟型', t: '有权限，但没按时答', move: '决策不动', why: '只是被捅一下', c: colors.orange },
	{ k: '阻塞型', t: '有权限，但决定不了', move: '看原因', why: '最容易被滥用的一类', c: colors.red, star: true },
];

export default function L14P19d_Escalation() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="上一页那件超时的活，走的只是其中一类。三类混成一类，是这套东西最常见的坏法。">
				升级有三种
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
				{KINDS.map((x, i) => (
					<motion.div
						key={x.k}
						initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.12 + i * 0.12, duration: 0.36 }}
						style={{
							display: 'grid', gridTemplateColumns: '130px 1.3fr 150px 1fr', gap: 16,
							alignItems: 'center', padding: '15px 20px',
							background: x.star ? colors.dark : colors.white,
							color: x.star ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: x.star ? `9px 9px 0 rgba(255,87,87,.55)` : `5px 5px 0 rgba(255,222,89,.85)`,
						}}
					>
						<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: x.star ? colors.yellow : x.c }}>{x.k}</span>
						<span style={{ fontSize: 21, lineHeight: 1.35 }}>{x.t}</span>
						<span style={{ fontSize: 20, fontWeight: 800 }}>{x.move}</span>
						<span style={{ fontSize: 19, lineHeight: 1.35, opacity: .75 }}>{x.why}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.42 }}
				style={{ display: 'flex', gap: 16, marginTop: 20, flex: 1, minHeight: 0 }}
			>
				<div style={{
					flex: 1.1, padding: '18px 22px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white, boxShadow: `9px 9px 0 rgba(255,87,87,.6)`,
					fontSize: 20, lineHeight: 1.55,
				}}>
					<strong style={{ fontFamily: fonts.heading, fontSize: 24, color: colors.yellow }}>第三类为什么危险</strong>
					<br /><br />
					<strong>「我决定不了」通常不是一个权限问题。</strong>
					<br />
					把它当成权限问题处理，<strong style={{ color: colors.yellow }}>等于教会团队：难的事往上推。</strong>
					<br /><br />
					最常见那条反而不算升级：<strong>缺信息、而他自己拿得到</strong> ——
					记下缺什么、谁去拿、新的回复期限，就完了。
				</div>
				<div style={{
					flex: 1, padding: '18px 22px', borderRadius: radii.panel,
					border: `2px solid ${colors.purple}`, background: 'rgba(203,108,230,.1)',
					fontSize: 20, lineHeight: 1.55,
				}}>
					<strong style={{ fontSize: 24 }}>⟲ 利益冲突横向走，不往上</strong>
					<br /><br />
					审自己的 PR · 给自己提的问题接受风险 · 验收自己的交付
					<br />
					—— 这三种都<strong>路由到一个具名的替补</strong>，<strong>不上升</strong>。
					<br /><br />
					<strong style={{ color: colors.purple }}>往上推只会让上面那个人替你做一个本该平级做的决定。</strong>
				</div>
			</motion.div>

			<div style={{ marginTop: 16 }}>
				<SoBar color={colors.red}>
					还有两条，防的是同一件事：<strong>升级不重置时钟</strong> ——
					一个 P1 在第六小时升级，不会变成两天的决策；
					<strong>否则升级就成了买时间的办法，而通往更晚截止日的最快路线，就是把决策传出去。</strong>
					以及：<strong>升级记在同一条记录上，不开新的</strong> —— 谁决定不了、为什么，这条链本身才是有用的产物。
				</SoBar>
			</div>
		</Page>
	);
}
