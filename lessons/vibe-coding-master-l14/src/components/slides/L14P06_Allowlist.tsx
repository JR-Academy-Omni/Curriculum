import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, colors, fonts, radii } from '../deck';

/**
 * P06 · 白名单长什么样、它是怎么来的、怎么正经建一个
 *
 * 🔴 2026-10-04 改版（讲师：「第八页白名单怎么建」）：
 *   原来这一页只讲了「里面该放什么」，**从没教怎么建**。
 *   而取消翻车① 之后，学员整节课根本没碰过白名单 —— 幕二也丢了终端输出。
 *   现在改成：长什么样 → 它其实是怎么攒出来的 → 怎么正经建 → 当堂建一个。
 *
 * 🔴 顺带修掉一处讲得不准的地方：settings 里不只有 allow，**还有 deny**。
 *   「白名单不是安全边界」只对 allow 成立。**deny 是真的拦得住的，而且是命令级的。**
 */
export default function L14P06_Allowlist() {
	return (
		<Page>
			<ActBadge act={2} mode="🎯 动手" />
			<Head sub="先看它长什么样 —— 然后我们说一件让人不太舒服的事：你那份是怎么来的。">
				白名单怎么建
			</Head>

			<div style={{ display: 'flex', gap: 24, flex: 1, minHeight: 0 }}>
				<Code
					style={{ flex: '0 0 620px' }}
					label=".claude/settings.json（提交进仓库，团队共用）"
					size={19}
					hi={[9, 10, 11, 12]}
					hiColor={colors.red}
					code={`{
  "permissions": {
    "allow": [
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Read(**)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Bash(git push --force:*)",
      "Bash(git reset --hard:*)"
    ]
  }
}`}
				/>

				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 13 }}>
					<motion.div
						initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.4 }}
						style={{
							padding: '18px 22px', borderRadius: radii.panel, background: colors.dark, color: colors.white,
							boxShadow: `9px 9px 0 rgba(255,87,87,.55)`,
						}}
					>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.yellow, marginBottom: 8 }}>
							先说一件不太舒服的事
						</div>
						<div style={{ fontSize: 21, lineHeight: 1.6 }}>
							你现在那份 <code>allow</code>，**多半不是你设计出来的** ——
							是你一路点<strong>「总是允许」</strong>，它自己攒出来的。
							<br /><br />
							<strong style={{ color: colors.yellow }}>所以它才不是安全边界：没有人设计过它。</strong>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.4 }}
						style={{
							flex: 1, padding: '18px 22px', borderRadius: radii.panel,
							border: `2px solid ${colors.dark}`, background: colors.white,
							boxShadow: `6px 6px 0 rgba(255,222,89,.9)`, fontSize: 20, lineHeight: 1.65,
						}}
					>
						<strong style={{ fontSize: 23 }}>正经建，三件事：</strong>
						<div style={{ marginTop: 10 }}>
							<strong>① <code>allow</code> 只放不动你工作区的</strong><br />
							<span style={{ opacity: .72 }}>看状态、看差异、看历史、取远端更新</span><br />
							<strong>② <code>deny</code> 放真正危险的</strong> <span style={{ color: colors.red, fontWeight: 800 }}>← 今天最值钱的一条</span><br />
							<span style={{ opacity: .72 }}>删除、强推、硬重置。<strong>deny 优先于 allow</strong>，而且它不问你，直接不做</span><br />
							<strong>③ 个人偏好放 <code>settings.local.json</code></strong><br />
							<span style={{ opacity: .72 }}>并且 gitignore 掉 —— 别把你的习惯塞给全队</span>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.4 }}
				style={{
					marginTop: 18, padding: '15px 22px', borderRadius: radii.card,
					border: `2px solid ${colors.dark}`, background: colors.yellow,
					fontSize: 22, lineHeight: 1.55,
				}}
			>
				🎯 <strong>现在建一个：给 <code>deny</code> 加三条你真的不想让它跑的命令，保存，重开会话。</strong>
				<br />
				<span style={{ fontSize: 19 }}>
					<strong>但别把它当护城河</strong> —— 下一页说清楚它挡得住什么、挡不住什么。
				</span>
			</motion.div>
		</Page>
	);
}
