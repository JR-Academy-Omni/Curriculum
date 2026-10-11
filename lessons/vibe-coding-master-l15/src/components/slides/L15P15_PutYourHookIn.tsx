import { motion } from 'framer-motion';
import { Page, Head, ActBadge, Code, ChatSignal, colors, fonts, border, radii } from '../deck';

/**
 * P15 · 动手⑤ 放一个钩子进去（✅ 终端）
 * 🔴 本页重点不是动作，是那条铁律：脚本路径绝不能写死。
 *    写死的路径只在你这台机器上成立 —— 别人装上之后钩子【静默失败】，而他不会知道。
 *    一句话点回第十四节收口，不要重复讲。
 * hooks.json 形状来自已核实的技术事实（PRD §3）。
 */
export default function L15P15_PutYourHookIn() {
	return (
		<Page>
			<ActBadge act={3} mode="动手 ⑤" />
			<Head sub="钩子跟技能不一样。技能是一个目录丢进去就行，钩子需要一份配置，说清楚它在什么时机触发、触发之后跑什么。">
				再放一个钩子进去
			</Head>

			<div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
				<motion.div
					initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.45 }}
					style={{ flex: 1.25 }}
				>
					<Code
						label="hooks/hooks.json"
						hi={[5]}
						wrap
						size={20}
						code={`{
  "hooks": {
    "SessionStart": [
      { "hooks": [
        { "type": "command",
          "command": "node \\"\${CLAUDE_PLUGIN_ROOT}/scripts/leave-a-trace.mjs\\"",
          "timeout": 5 }
      ] }
    ]
  }
}`}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.45 }}
					style={{
						flex: 1, padding: '22px 24px', background: colors.white,
						border, borderRadius: radii.panel, boxShadow: `6px 6px 0 ${colors.red}`,
					}}
				>
					<div style={{
						display: 'inline-block', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 2,
						background: colors.red, color: colors.white, border: `2px solid ${colors.black}`,
						borderRadius: radii.label, padding: '4px 12px',
					}}>铁律</div>
					<div style={{ fontSize: 27, fontWeight: 900, marginTop: 14, lineHeight: 1.4 }}>
						脚本路径<span style={{ color: colors.red }}>绝对不能写死</span>
					</div>
					<p style={{ fontSize: 20, color: '#555', lineHeight: 1.72, marginTop: 14 }}>
						你写死的路径，是<strong>你这台机器上</strong>的路径。别人装上你的包，那个路径在他机器上根本不存在。
					</p>
					<p style={{ fontSize: 20, color: '#555', lineHeight: 1.72, marginTop: 12 }}>
						然后会发生什么？<strong>钩子静默失败。</strong>不报错，不提示，什么都不发生 —— 而他完全不会知道。
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.9, type: 'spring', stiffness: 170, damping: 17 }}
				style={{
					marginTop: 'auto', padding: '18px 28px', background: colors.dark,
					borderRadius: radii.panel, boxShadow: `8px 8px 0 ${colors.yellow}`,
				}}
			>
				<div style={{ fontFamily: fonts.heading, fontSize: 30, fontWeight: 900, color: colors.white, lineHeight: 1.45 }}>
					又是那句话：<span style={{ color: colors.yellow }}>什么都没发生，而你以为发生了。</span>
				</div>
			</motion.div>

			<ChatSignal>跑通了发 1</ChatSignal>
		</Page>
	);
}
