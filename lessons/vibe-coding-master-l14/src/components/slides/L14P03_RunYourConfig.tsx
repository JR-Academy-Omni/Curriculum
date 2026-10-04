import { Instruction } from '../deck';

/**
 * P03 · 翻车前哨 · 全班动手
 * 🔴 纪律 3：只放指令和大等待区，不放结果。
 *   多数人会发现它能跑的比自己以为的多 —— 那就是这节课的起点，
 *   不是吓人，是让「边界」这个词第一次变成具体的东西。
 */
export default function L14P03_RunYourConfig() {
	return (
		<Instruction
			kicker="全班动手"
			sub={<>做完在聊天框打 <strong>1</strong>。<br />多数人会发现，它能跑的比你以为的多。</>}
		>
			打开你那个 agent 的配置，<br />
			把它<span style={{ color: '#FFDE59' }}>实际能跑的命令</span>列出来
		</Instruction>
	);
}
