import { Page, Instruction, ChatSignal, ActBadge, colors } from '../deck';

/**
 * P27 · 动手⑧ 写一条（✅ 收口前最后一个终端输出）
 * 两分钟，要快。课前包模板：p27-removal-template.md
 * 🔴 收信号不要等齐，看到陆续有人发就往下。
 * 🔴 翻到 P28 之前不要说任何过渡的话，直接翻。
 */
export default function L15P27_WriteTheRemoval() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<ActBadge act={5} mode="动手 ⑧" />
			<Instruction
				kicker="最后一个动作 · 两分钟"
				sub="写一条就行 —— 四类里最扎到你的那一类。"
			>
				在你那个包里加一条：<br />
				我走了之后，<span style={{ color: colors.yellow }}>要收回什么</span>
			</Instruction>
			<ChatSignal>写完发 <strong style={{ color: colors.yellow }}>1</strong></ChatSignal>
		</Page>
	);
}
