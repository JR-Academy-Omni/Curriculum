import { Page, Instruction, Code, ChatSignal, ActBadge, colors } from '../deck';

/**
 * P08 · 动手② 装一个现成的（✅ 终端）
 * 🔴 纪律 3：公开的插件名和市场名可以上屏 —— 它们是公开 marketplace 内容，不是指纹。
 * 🔴 纪律 8：不留待填空白 —— 这里写死用哪一个，不让学员自己挑。
 * 命令已实测（2026-10-11 · Claude Code 2.1.296）。
 */
export default function L15P08_InstallOne() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<ActBadge act={2} mode="动手 ②" />
			<Instruction
				kicker="先装别人做好的"
				sub="加市场 · 装插件 · 选哪一层"
			>
				把完整的过程<br />走一遍
			</Instruction>
			<div style={{ position: 'absolute', left: 0, right: 0, bottom: 118, display: 'flex', justifyContent: 'center' }}>
				<Code
					code={`claude plugin marketplace add anthropics/claude-plugins-official
claude plugin install feature-dev@claude-plugins-official --scope user`}
					hi={[1]}
					wrap
					style={{ minWidth: 980 }}
				/>
			</div>
			<ChatSignal>跑通了发 <strong style={{ color: colors.yellow }}>1</strong> · 卡住了发 <strong style={{ color: colors.yellow }}>2</strong> 加一个词</ChatSignal>
		</Page>
	);
}
