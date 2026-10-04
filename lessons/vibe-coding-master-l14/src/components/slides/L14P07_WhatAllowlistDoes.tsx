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
			<Head sub="allow 和 deny 不是一回事。把这两件事分清楚，后面那张表才站得住。">
				<code style={{ fontSize: 44 }}>allow</code> 管什么，<code style={{ fontSize: 44 }}>deny</code> 管什么
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
					<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black }}><code>allow</code> —— 省事 ✓</div>
					<div style={{ fontSize: 22, lineHeight: 1.7 }}>
						它决定的是<strong>「要不要问你一声」</strong>，
						<strong style={{ color: colors.red }}>不是「能不能做」</strong>。
						<br /><br />
						不在 <code>allow</code> 里的命令，它<strong>照样会做</strong> —— 只是先问一句。
						<br /><br />
						<strong>所以 allow 是省事边界，不是安全边界。</strong>
					</div>
					<div style={{ marginTop: 'auto', fontSize: 19, lineHeight: 1.6, opacity: .72 }}>
						该放的是<strong>不动你工作区</strong>的那些：看状态、看差异、看历史、取远端更新。
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
					<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.red }}><code>deny</code> —— 挡手滑 ⛔</div>
					<div style={{ fontSize: 22, lineHeight: 1.7 }}>
						列进 <code>deny</code> 的命令，它<strong>不会问你，直接不做</strong>。
						<strong>deny 优先于 allow。</strong>
						<br /><br />
						⚠️ <strong style={{ color: colors.yellow }}>但它是按命令文本匹配的，不是操作系统级的边界。</strong>
						换个写法（套一层 shell、用全路径、把命令拼出来）就可能不匹配同一条规则。
						<br /><br />
						<strong>所以：它挡得住手滑和顺手，挡不住绕路。</strong>
					</div>
					<div style={{
						marginTop: 'auto', padding: '14px 18px', borderRadius: radii.card,
						background: 'rgba(255,222,89,.16)', fontSize: 20, lineHeight: 1.5, fontWeight: 800,
					}}>
						而且它管的是<strong>工具调用</strong>。「<strong>发一封邮件</strong>」「<strong>改一条工单</strong>」
						走的是连接器，<span style={{ color: colors.yellow }}>归下一页那张表和它背后的凭据管。</span>
					</div>
				</motion.div>
			</div>

			<div style={{ marginTop: 22 }}>
				<SoBar color={colors.blue}>
					<strong>四样东西，管的事都不一样，不要混：</strong>
					　<code>allow</code> / <code>deny</code> —— <strong>工具层</strong>。allow 省事，deny 挡手滑（<strong>不是 OS 边界</strong>）·
					　<strong>写权限表</strong> —— <strong>政策记录</strong>，写下组织批准了什么，<strong>它不执行</strong> ·
					　<strong>连接器凭据 / CI / 钩子</strong> —— <strong>真正限制得住对外动作的那层</strong> ·
					　<strong>人</strong> —— 定规矩、改规矩，<strong>不是每次去点按钮</strong>。
				</SoBar>
			</div>
		</Page>
	);
}
