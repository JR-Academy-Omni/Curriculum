import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P19b · 它凭什么决定现在打断你
 *
 * 🔴 2026-10-04 二改（讲师：「第 20 页这个不对」）：
 *   第一版做成了【事故分级】—— 出了问题才评它多急。**口径错了。**
 *   讲师要的是：**每次做决策、或者发布一个任务的时候，就把这件事多急定清楚。**
 *   它是【前置】的，不是事后的；而且它是**一份规则文档**，
 *   目的是让 **agent 和人用同一套判据，对同一件事得出同一个结论。**
 *
 * 🔴 判据全部换成「这件事」的口径，而且全是形状题（可观察的现象）：
 *   「有没有对外承诺挂在它上面」「点不点得出在等的人」「有没有到期日」
 *   —— 不是「重不重要」。
 */
const LEVELS = [
	{ k: 'P0', cond: '有一个对外的承诺挂在它上面', eg: '答应过客户的日期 · 发出去的报价', when: '立刻打断你', c: colors.red, top: true },
	{ k: 'P1', cond: '有具体的人在等它 —— 点得出名字', eg: '张三的活卡在这上面', when: '进当天汇总', c: colors.orange },
	{ k: 'P2', cond: '没有人在等，但它有到期日', eg: '月底要交的那份', when: '到期前提一次', c: colors.yellow },
	{ k: 'P3', cond: '没有人在等，也没有到期日', eg: '想做的改进', when: '攒着，不主动说', c: colors.green },
];

export default function L14P19b_Severity() {
	return (
		<Page>
			<ActBadge act={5} mode="🎯 动手" />
			<Head sub="它一天看见几十件事。哪件现在打断你，哪件攒着 —— 这个判断不能让它自己拍。">
				它凭什么决定现在打断你
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
				<div style={{
					display: 'grid', gridTemplateColumns: '78px 1.5fr 1.25fr 110px', gap: 14, padding: '0 20px',
					fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 800, letterSpacing: 1, color: '#6f6760',
				}}>
					<div>级别</div><div>判据（问一句就能判）</div><div>例</div><div>它该怎么对待</div>
				</div>
				{LEVELS.map((l, i) => (
					<motion.div
						key={l.k}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.14 + i * 0.12, duration: 0.38 }}
						style={{
							flex: 1, display: 'grid', gridTemplateColumns: '78px 1.5fr 1.25fr 110px', gap: 14,
							alignItems: 'center', padding: '0 20px',
							background: l.top ? colors.dark : colors.white,
							color: l.top ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: l.top ? `9px 9px 0 rgba(255,87,87,.55)` : `5px 5px 0 rgba(255,222,89,.85)`,
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 19, fontWeight: 800, textAlign: 'center',
							padding: '6px 0', borderRadius: radii.label, background: l.c,
							color: l.c === colors.red ? colors.white : colors.black,
						}}>{l.k}</span>
						<span style={{ fontSize: l.top ? 23 : 21, fontWeight: l.top ? 800 : 600, lineHeight: 1.35 }}>{l.cond}</span>
						<span style={{ fontSize: 18, lineHeight: 1.4, opacity: .7 }}>{l.eg}</span>
						<span style={{ fontSize: 19, fontWeight: 800 }}>{l.when}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.45 }}
				style={{ display: 'flex', gap: 15, marginTop: 18 }}
			>
				<div style={{
					flex: 1.25, padding: '17px 21px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white, boxShadow: `9px 9px 0 rgba(203,108,230,.6)`,
					fontSize: 20.5, lineHeight: 1.55,
				}}>
					<strong style={{ fontFamily: fonts.heading, fontSize: 25, color: colors.yellow }}>它自己拍只有两种结局</strong>
					<br />
					<strong>什么都报</strong> —— 一天弹你二十次，两天之内你把它关掉，
					<strong style={{ color: colors.yellow }}>然后连真要紧的那条也没了</strong>。
					<br />
					<strong>什么都不报</strong> —— 你以为一切正常。
					<br /><br />
					所以得有一份规则告诉它什么算急。<strong>因为 agent 读不到你心里。</strong>
				</div>
				<div style={{
					flex: 1, padding: '17px 21px', borderRadius: radii.panel,
					border: `2px solid ${colors.blue}`, background: 'rgba(56,182,255,.1)',
					fontSize: 20, lineHeight: 1.55,
				}}>
					<strong style={{ fontSize: 23 }}>写在哪</strong><br />
					规则仓的 <code>rules/severity.md</code>，
					<strong>并登记进 <code>rules/INDEX.md</code></strong>。
					<br /><br />
					<strong style={{ color: colors.red }}>级别由派活的人在派的时候定</strong>，
					agent 不许自己改。
					<br />
					它只做两件事：<strong>按规则判断该不该现在说</strong>；
					<strong>收到没带级别的活，退回去要。</strong>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.45 }}
				style={{
					marginTop: 13, padding: '13px 21px', borderRadius: radii.card,
					border: `2px solid ${colors.dark}`, background: colors.yellow,
					fontSize: 20.5, lineHeight: 1.5,
				}}
			>
				⭐ <strong>降级条件要和判据写在一起</strong> ——
				「那个对外承诺解除了」「等的那个人说不等了」「到期日取消了」。
				<strong>没有降级条件的分级，三个月后全是 P0</strong> —— 然后它天天打断你，<strong>然后你把它关掉</strong>。
			</motion.div>
		</Page>
	);
}
