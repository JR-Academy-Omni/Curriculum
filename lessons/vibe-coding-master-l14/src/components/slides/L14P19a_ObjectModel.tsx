import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P19a · 三种对象，判据不一样
 *
 * 🔴 2026-10-04 新增。对照真系统 schemas/ 之后发现：
 *   不讲对象模型，学员会给所有东西定级 —— 而真系统里
 *   **Action 根本没有优先级，只有到期日和负责人。**
 *
 * 🔴 这一页还藏着 P14 那个 0 的真实版本：
 *   两个项目的状态值不一样，按一个名字查，两边都匹配不到，返回零 ——
 *   而零读起来像一个干净的结果。**回扣第三幕。**
 */
const OBJS = [
	{ k: '问题', c: '谁受影响，有没有可接受的绕行', p: '有优先级', col: colors.red },
	{ k: '决策', c: '晚做的后果是什么', p: '有优先级', col: colors.orange },
	{ k: '动作', c: '—', p: '没有优先级。只有到期日和负责人', col: colors.green, flat: true },
];

export default function L14P19a_ObjectModel() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="下一页要给它一套判断「多急」的规则。但在那之前 —— 判断的对象不止一种，而且判据不一样。">
				三种东西，别用同一把尺子
			</Head>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
				<div style={{
					display: 'grid', gridTemplateColumns: '150px 1.4fr 1.2fr', gap: 16, padding: '0 20px',
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: '#6f6760',
				}}>
					<div>对象</div><div>判据</div><div>有没有优先级</div>
				</div>
				{OBJS.map((o, i) => (
					<motion.div
						key={o.k}
						initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.14 + i * 0.13, duration: 0.38 }}
						style={{
							display: 'grid', gridTemplateColumns: '150px 1.4fr 1.2fr', gap: 16,
							alignItems: 'center', padding: '18px 20px',
							background: o.flat ? colors.dark : colors.white,
							color: o.flat ? colors.white : colors.black,
							border: `2px solid ${colors.dark}`, borderRadius: radii.card,
							boxShadow: o.flat ? `9px 9px 0 rgba(126,217,87,.6)` : `5px 5px 0 rgba(255,222,89,.85)`,
						}}
					>
						<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: o.flat ? colors.yellow : o.col }}>{o.k}</span>
						<span style={{ fontSize: 21, lineHeight: 1.4 }}>{o.c}</span>
						<span style={{ fontSize: o.flat ? 22 : 20, fontWeight: o.flat ? 900 : 600, lineHeight: 1.4 }}>{o.p}</span>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.42 }}
				style={{ display: 'flex', gap: 16, marginTop: 20, flex: 1, minHeight: 0 }}
			>
				<div style={{
					flex: 1, padding: '18px 22px', borderRadius: radii.panel,
					border: `2px solid ${colors.dark}`, background: 'rgba(255,222,89,.26)',
					fontSize: 21, lineHeight: 1.6,
				}}>
					<strong style={{ fontSize: 25 }}>一个决策如果挡着一个问题，<br />它就继承那个问题的级别。</strong>
					<br /><br />
					不用判断，直接继承。
					<br />
					<strong>公司里只要一个时钟，不要两个互相不同意的。</strong>
				</div>
				<div style={{
					flex: 1.15, padding: '18px 22px', borderRadius: radii.panel,
					background: colors.dark, color: colors.white, boxShadow: `9px 9px 0 rgba(255,87,87,.6)`,
					fontSize: 20, lineHeight: 1.55,
				}}>
					<strong style={{ fontFamily: fonts.heading, fontSize: 24, color: colors.yellow }}>顺便，第三幕那个 0 又来了</strong>
					<br /><br />
					真实情况：两个项目的「完成」<strong>用的不是同一个词</strong>。
					一条按单个词写的查询，<strong style={{ color: colors.yellow }}>两边都匹配不到，返回零</strong>。
					<br /><br />
					<strong>而零读起来，像一个干净的结果。</strong>
				</div>
			</motion.div>
		</Page>
	);
}
