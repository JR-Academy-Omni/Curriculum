import { motion } from 'framer-motion';
import { Page, Head, ActBadge, SoBar, colors, fonts, radii } from '../deck';

/**
 * P19b · 这事儿有多急 —— 分级，以及怎么降回去
 *
 * 🔴 2026-10-04 新增（讲师指出缺口）：四态模型只教了「它该报什么」，
 *   没教「报了之后谁动、多快动」。而 L14 内容库 §6.1 规矩 2
 *   （硬失败和提示必须分开，全设成失败 = 天天红 = 没人再看）
 *   本来就是分级的种子，只是从没长成一条策略。
 *
 * 🔴 两条是这一页的全部重量：
 *   ① 分级判据必须是【可观察的现象】，不是「很严重」—— 沿用第十三节的转化表
 *   ② 【降级条件必须和升级条件一起写】。没有降级条件的分级，
 *      三个月后全是最高级 —— 跟「天天红就没人看」是同一个形状。
 */
const LEVELS = [
	{ k: '最高', cond: '对外可见的东西已经错了', eg: '客户看到了 / 钱动了 / 消息发出去了', who: '立刻叫到人', c: colors.red, top: true },
	{ k: '高', cond: '它没跑，而且没有人知道', eg: '查询失败报成 0、连接过期没人发现', who: '当天有人看', c: colors.orange },
	{ k: '中', cond: '它跑了，但没拿全', eg: '分页只拿到前两页', who: '下次有人来的时候告诉他', c: colors.yellow },
	{ k: '低', cond: '只影响内部，且可以等', eg: '格式不统一、命名不规范', who: '攒着，每周一起看', c: colors.green },
];

export default function L14P19b_Severity() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="四态模型说的是「它该报什么」。这一页说的是：报了之后，谁动、多快动。">
				这事儿有多急
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
				<div style={{
					display: 'grid', gridTemplateColumns: '92px 1.25fr 1.15fr 1fr', gap: 14, padding: '0 20px',
					fontFamily: fonts.mono, fontSize: 14.5, fontWeight: 800, letterSpacing: 1, color: '#6f6760',
				}}>
					<div>多急</div><div>判据（可观察的现象）</div><div>例</div><div>谁动、多快</div>
				</div>
				{LEVELS.map((l, i) => (
					<motion.div
						key={l.k}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.14 + i * 0.12, duration: 0.38 }}
						style={{
							flex: 1, display: 'grid', gridTemplateColumns: '92px 1.25fr 1.15fr 1fr', gap: 14,
							alignItems: 'center', padding: '0 20px',
							background: l.top ? colors.dark : colors.white,
							color: l.top ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: l.top ? `9px 9px 0 rgba(255,87,87,.55)` : `5px 5px 0 rgba(255,222,89,.85)`,
						}}
					>
						<span style={{
							fontFamily: fonts.mono, fontSize: 16, fontWeight: 800, textAlign: 'center',
							padding: '6px 0', borderRadius: radii.label, background: l.c,
							color: l.c === colors.red ? colors.white : colors.black,
						}}>{l.k}</span>
						<span style={{ fontSize: l.top ? 23 : 21, fontWeight: l.top ? 800 : 600, lineHeight: 1.35 }}>{l.cond}</span>
						<span style={{ fontSize: 18, lineHeight: 1.4, opacity: .7 }}>{l.eg}</span>
						<span style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 700 }}>{l.who}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.45 }}
				style={{ display: 'flex', gap: 16, marginTop: 20 }}
			>
				<div style={{
					flex: 1.3, padding: '18px 22px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white, boxShadow: `9px 9px 0 rgba(203,108,230,.6)`,
					fontSize: 22, lineHeight: 1.55,
				}}>
					<strong style={{ fontFamily: fonts.heading, fontSize: 27, color: colors.yellow }}>降级条件必须和升级条件一起写。</strong>
					<br />
					<strong>没有降级条件的分级，三个月后全是最高级</strong> ——
					然后所有人对最高级脱敏，它就跟没分级一样了。
					<br />
					这跟「全设成失败 = 天天红 = 没人再看」<strong>是同一个形状</strong>。
				</div>
				<div style={{
					flex: 1, padding: '18px 22px', borderRadius: radii.panel,
					border: `2px solid ${colors.red}`, background: 'rgba(255,87,87,.09)',
					fontSize: 21, lineHeight: 1.55,
				}}>
					<strong style={{ fontSize: 25 }}>⛔ 定级权不给 agent。</strong>
					<br />
					它只报<strong>事实</strong>（上一幕那四种状态）。
					<strong>多急是规则说了算，不是它说了算</strong> ——
					否则它会很合理地觉得什么都很急。
				</div>
			</motion.div>

			<div style={{ marginTop: 14 }}>
				<SoBar color={colors.purple}>
					判据那一列<strong>全是可观察的现象</strong>，不是「很严重」。
					这是上节课那个动作的第三次出现：<strong>把判断题换成形状题。</strong>
				</SoBar>
			</div>
		</Page>
	);
}
