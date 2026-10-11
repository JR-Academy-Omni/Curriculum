import { Page, Instruction, Code, ChatSignal, ActBadge, colors } from '../deck';

/**
 * P14 · 动手④ 放一个技能进去（✅ 终端）
 * 纪律 6：只放目录结构和命令，不放结果。
 * 🔴 讲师留意：慢的人通常不是不会放，是找不到自己当初那个技能文件在哪了。
 *    如果有人说找不到了，顺一句「这正是我们今天在讲的事情」，然后往下，不要停太久。
 */
export default function L15P14_PutYourSkillIn() {
	return (
		<Page bg={colors.dark} style={{ padding: 0 }}>
			<ActBadge act={3} mode="动手 ④" />
			<Instruction
				kicker="第五节课那个"
				sub="一个目录就是一个技能。里面放一份 SKILL.md。"
			>
				把你自己的<br />一个技能放进去
			</Instruction>
			<div style={{ position: 'absolute', left: 0, right: 0, bottom: 118, display: 'flex', justifyContent: 'center' }}>
				<Code
					label="把里面那个占位目录删掉，换成你的"
					code={`p13-my-package/plugins/my-handover/skills/`}
					style={{ minWidth: 820 }}
				/>
			</div>
			<ChatSignal>放好了发 <strong style={{ color: colors.yellow }}>1</strong></ChatSignal>
		</Page>
	);
}
