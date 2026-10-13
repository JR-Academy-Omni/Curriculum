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
	{ k: 'P0', cond: '公司暴露了', eg: '生产挂了没绕行 · 数据泄露 · 安全事件 · 客户要走 · 法规期限 · 发薪风险', when: '✅ 唯一能打断你的一级', c: colors.red, top: true },
	{ k: 'P1', cond: '客户被卡住，或一个承诺要破', eg: '⚠️ 必须点名 —— 没有抽象的 P1', when: '当天安排，不打断', c: colors.orange },
	{ k: 'P2', cond: '内部被卡，但有可接受的绕行', eg: '文档缺口 · 非客户侧缺陷 · 缺一条批准有人在等', when: '通知解决负责人', c: colors.yellow },
	{ k: 'P3', cond: '没有人被卡的改进', eg: '质量 · 技术债 · 想做的改动', when: '每周复盘，但仍要有负责人和复审日期', c: colors.green },
];

export default function L14P19b_Severity() {
	return (
		<Page>
			<ActBadge act={5} mode="🎯 动手" />
			<Head sub="判据是「谁受影响 + 有没有可接受的绕行」—— 两条都是可观察的事实，不是「这件事有多重要」。">
				它凭什么决定现在打断你
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
				<div style={{
					display: 'grid', gridTemplateColumns: '78px 1.5fr 1.25fr 110px', gap: 14, padding: '0 20px',
					fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 800, letterSpacing: 1, color: '#6f6760',
				}}>
					<div>级别</div><div>判据（可观察的事实）</div><div>例</div><div>能不能打断</div>
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
					<strong style={{ fontFamily: fonts.heading, fontSize: 25, color: colors.yellow }}>防的是同一种病：最后全变成 P1</strong>
					<br />
					<strong>截止时间是推导出来的，不是挑的</strong> ——
					写一个很早的日期不会让它变急，<strong style={{ color: colors.yellow }}>符合判据才会</strong>。
					<br />
					<strong>级别不是提出者单方面定的</strong> —— 他提议，解决负责人按判据确认。
					<br />
					<strong>降级要被记录</strong> —— 为了让违约消失而偷偷改级，是让这个指标彻底没用的那个失败模式。
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
					<strong style={{ color: colors.red }}>P3 是这类系统通常死掉的地方。</strong>
					<br />
					「问题提了，但常常没人解决」—— 一个没有边界的 P3 桶就是这么来的，
					<strong>而且流程看起来还很健康</strong>。
					<br />
					所以 <strong>P3 仍要有负责人和复审日期</strong>：四周没人接，
					就必须明确处置 —— 延到某个具体日期，或带理由拒掉。<strong>它不能就那么待着。</strong>
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
				<strong>只有 P0 可以打断你。</strong> 这是整份规则里，对 agent 最直接的那一句。
			</motion.div>
		</Page>
	);
}
