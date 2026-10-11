import { Page, Instruction, Code, ChatSignal, ActBadge, colors } from '../deck';

/**
 * P03 · 动手① 去看一眼它到底活在哪（✅ 第一个终端输出）
 * 纪律 6：动手页只放指令和代码，不放结果截图。
 * 🔴 讲师必须先说「这条命令只读」—— 这一节所有动手都要先说它会动什么、不会动什么。
 */
export default function L15P03_WhereItLives() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<ActBadge act={1} mode="动手 ①" />
			<Instruction
				kicker="只读 · 不改任何东西"
				sub="跑完你会看到三段。先别急着理解它们是什么 —— 先确认你看到的是三段，不是一段。"
			>
				去看一眼<br />你造的东西活在哪
			</Instruction>
			<div style={{ position: 'absolute', left: 0, right: 0, bottom: 128, display: 'flex', justifyContent: 'center' }}>
				<Code code={`bash p03-where-it-lives/where-it-lives.sh`} style={{ minWidth: 700 }} />
			</div>
			<ChatSignal>跑通了发 <strong style={{ color: colors.yellow }}>1</strong> · 卡住了发 <strong style={{ color: colors.yellow }}>2</strong> 加一个词</ChatSignal>
		</Page>
	);
}
