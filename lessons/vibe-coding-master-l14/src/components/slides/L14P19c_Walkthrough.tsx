import { motion } from 'framer-motion';
import { Page, Head, ActBadge, colors, fonts, radii } from '../deck';

/**
 * P19c · 走一遍：一件超时没验收的活
 *
 * 🔴 2026-10-04 新增（讲师给的场景）：
 *   「CEO 给 AI 工程师任务，任务没验收成功超时了，
 *     agent 触发了降级策略和提醒机制，要怎么做。」
 *
 * 🔴 这一页是全课唯一的【整合测试】—— 它一次用上四格：
 *   P10 四条禁令第 4 条（不许自己改日期/优先级/负责人）
 *   P11 草稿与发送那条线
 *   P16 连接失败三件事（事实 / 没覆盖什么 / 恢复的确切一步）
 *   P19b P0–P3 分级
 *
 * 🔴 本页最硬的一句，也是讲师最容易讲反的：
 *   **超时不触发降级。超时是问题还在，不是问题解决了。**
 */
const STEPS = [
	{ n: '①', t: '观察事实，不下判断', d: '到期日已过 + 未验收。这两条都是可观察的现象，agent 报得出来。', ok: true },
	{ n: '②', t: '按规则定级，不自己定', d: '就用上一页那四条：有对外承诺 → P0 · 点得出谁在等 → P1 · 只有到期日 → P2。', ok: true },
	{ n: '③', t: '起草一条提醒', d: '在操作者自己那里建草稿。⚠️ 发送要人按 —— 那条线今天讲过。', ok: true },
	{ n: '④', t: '发给验收人 + 负责人', d: '只发负责人没用 —— 他多半就是卡住的那个人。', ok: true },
];

export default function L14P19c_Walkthrough() {
	return (
		<Page>
			<ActBadge act={5} />
			<Head sub="CEO 派给工程师一件活。到期了，没验收成功。agent 发现了 —— 它该做什么，不该做什么？">
				走一遍：一件超时没验收的活
			</Head>

			<div style={{ display: 'flex', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ flex: 1.15, display: 'flex', flexDirection: 'column', gap: 10 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: colors.green }}>
						它该做的 ✓
					</div>
					{STEPS.map((st, i) => (
						<motion.div
							key={st.n}
							initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.15 + i * 0.1, duration: 0.36 }}
							style={{
								flex: 1, display: 'flex', gap: 14, alignItems: 'center', padding: '0 18px',
								background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: radii.card,
								boxShadow: `5px 5px 0 rgba(126,217,87,.8)`,
							}}
						>
							<span style={{ fontFamily: fonts.mono, fontSize: 21, fontWeight: 800, color: colors.green, flexShrink: 0 }}>{st.n}</span>
							<div style={{ minWidth: 0 }}>
								<div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.3 }}>{st.t}</div>
								<div style={{ fontSize: 17.5, lineHeight: 1.4, opacity: .72, marginTop: 3 }}>{st.d}</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.42 }}
					style={{
						flex: 1, padding: '22px 24px', borderRadius: radii.panel,
						background: colors.dark, color: colors.white,
						boxShadow: `10px 10px 0 rgba(255,87,87,.6)`,
						display: 'flex', flexDirection: 'column', gap: 14,
					}}
				>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 1, color: colors.red }}>
						它绝不许做的 ⛔
					</div>
					<div style={{ fontSize: 23, lineHeight: 1.7 }}>
						改日期（延期）· 改优先级 · 改负责人
						<div style={{ fontSize: 18, opacity: .62, marginTop: 6 }}>
							—— 今天第二幕那四条禁令的第 4 条，一字不差。
						</div>
					</div>
					<div style={{
						marginTop: 'auto', padding: '16px 18px', borderRadius: radii.card,
						background: 'rgba(255,87,87,.16)', border: `2px solid ${colors.red}`,
					}}>
						<div style={{ fontFamily: fonts.heading, fontSize: 27, fontWeight: 900, color: colors.yellow, lineHeight: 1.35 }}>
							所以「超时自动降级」<br />是个反模式。
						</div>
						<div style={{ fontSize: 19.5, lineHeight: 1.6, marginTop: 10 }}>
							降级的条件是<strong>「问题解决了」</strong>。
							<br />
							<strong style={{ color: colors.yellow }}>超时是问题还在，不是问题解决了。</strong>
							<br /><br />
							自动降级等于<strong>把「没人管」当成「不要紧」的证据</strong> ——
							而没人管的那件事，<strong>经常正是最该管的。</strong>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.4 }}
				style={{
					marginTop: 18, padding: '14px 22px', borderRadius: radii.card,
					border: `2px solid ${colors.dark}`, background: colors.yellow, fontSize: 21, lineHeight: 1.55,
				}}
			>
				<strong>那条提醒里必须有三件事</strong>（跟连接失败那三件一模一样）：
				<strong>事实</strong>（到期日、已逾期多久）·
				<strong>这件事现在卡在哪</strong> ·
				<strong style={{ color: colors.red }}>下一步具体该谁做什么</strong> ——
				最后那件通常是缺的，而缺了它，提醒就只是在制造焦虑。
			</motion.div>
		</Page>
	);
}
