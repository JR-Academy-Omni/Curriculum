import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P13 · 交互式登录撑不过定时任务 —— 完整推论链，一步都不能跳
 * 🔴 代价必须一起说：由人触发意味着这个能力追不上你。
 *   兜底不是加定时器，是「下次有人来的时候，告诉他哪个已结束的周期没有报告」。
 */
const CHAIN = [
	'上面那些连接，多数是靠「点一下同意」授权的',
	'这种授权一定会过期',
	'而定时运行的时候，没有人可以去点那个同意屏',
	'所以令牌过期那天，它返回一个空结果',
	'空结果读起来像「今天没什么可报的」',
	'而真实情况是「今天什么都没查」',
];

export default function L14P13_LoginExpires() {
	return (
		<Page>
			<ActBadge act={3} />
			<Head sub="这一条决定了什么能自动、什么不能。每一步都要说到，一步都不能跳。">
				点一下同意的那种授权，撑不过定时任务
			</Head>

			<div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 7 }}>
					{CHAIN.map((c, i) => (
						<motion.div
							key={c}
							initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.15 + i * 0.16, duration: 0.38 }}
							style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}
						>
							<span style={{
								width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
								background: i >= 4 ? colors.red : colors.dark, color: colors.white,
								display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
								fontFamily: fonts.mono, fontSize: 14, fontWeight: 800,
							}}>{i + 1}</span>
							<span style={{
								fontSize: i >= 4 ? 25 : 22, lineHeight: 1.4,
								fontWeight: i >= 4 ? 800 : 400,
								color: i >= 4 ? colors.red : colors.black,
							}}>{c}</span>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}
					style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
				>
					<div style={{
						padding: '24px 26px', borderRadius: radii.panel, background: colors.dark, color: colors.white,
						boxShadow: `10px 10px 0 rgba(255,87,87,.6)`,
						fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, lineHeight: 1.35, letterSpacing: -1,
					}}>
						所以：宁可全部<span style={{ color: colors.yellow }}>由人触发</span>，
						也不要一个<span style={{ color: colors.red }}>会悄悄失败</span>的定时任务。
					</div>

					<div style={{
						padding: '18px 22px', borderRadius: radii.card,
						border: `2px solid ${colors.dark}`, background: 'rgba(255,222,89,.26)',
						fontSize: 21, lineHeight: 1.6,
					}}>
						<strong>但代价必须一起说：</strong>由人触发意味着
						<strong>这个能力追不上你</strong> —— 没人开会话，就没人被提醒。
						<br /><br />
						兜底<strong>不是加一个定时器</strong>，是：
						<strong style={{ color: colors.red }}>下次有人来的时候，告诉他哪个已经结束的周期没有报告。</strong>
					</div>
				</motion.div>
			</div>
		</Page>
	);
}
