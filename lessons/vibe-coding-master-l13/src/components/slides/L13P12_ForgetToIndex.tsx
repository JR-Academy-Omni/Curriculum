import { ActBadge, Instruction, ChatSignal, colors, fonts } from '../deck';

// P09 · 加一个角色，别登记它 🎬 学员触发 · 第一次红
// 🔴 纪律 5：动手页只放指令和代码，不放结果截图。
// 🔴 这条检查看起来很蠢，「文件要登记」谁会忘。但这类检查第一次自动跑起来，
//    抓到的往往就是这个。人工检查几十遍都发现不了。
const SAID = '「再加一条：每个角色文件都必须在 INDEX.md 里登记。存在但没登记的，报失败。」';

export default function L13P12_ForgetToIndex() {
	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<ActBadge act={2} mode="🎬 你自己触发" />
			<Instruction
				kicker="现在"
				sub={<>这正是真实世界里发生的事：<b style={{ color: 'rgba(255,255,255,0.9)' }}>有人加了一个新角色，忘了登记。</b></>}
			>
				再建一个角色文件。
				<br />
				<span style={{ color: colors.yellow }}>不要去动 INDEX.md。</span>
			</Instruction>

			<div style={{ position: 'absolute', top: 96, right: 48, width: 560 }}>
				<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, letterSpacing: 2, marginBottom: 8 }}>
					先加检查③ ,你只说这一句
				</div>
				<div style={{
					border: `3px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.08)',
					padding: '14px 16px', fontSize: 20, lineHeight: 1.6, color: colors.white,
				}}>
					{SAID}
				</div>
			</div>

			<ChatSignal>
				<span>红了的 →</span>
				<code style={{
					fontFamily: fonts.mono, fontSize: 20, fontWeight: 700,
					padding: '6px 16px', background: colors.yellow, color: colors.black,
					border: `3px solid ${colors.black}`,
				}}>聊天框打 1</code>
			</ChatSignal>
		</div>
	);
}
