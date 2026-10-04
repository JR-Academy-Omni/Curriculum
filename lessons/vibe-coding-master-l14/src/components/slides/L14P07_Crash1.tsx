import { Instruction } from '../deck';

/**
 * P07 · 翻车① —— 形态「认知错位」
 * 🔴 只给指令 + 等待区。收上来之后讲师口头点破：
 *   白名单不是安全边界，是省事边界。真正的边界在下一页那张表上。
 */
export default function L14P07_Crash1() {
	return (
		<Instruction
			kicker="翻车 · 你自己造"
			sub={<>跑完在聊天框打 <strong>1</strong>。<br />然后想一个问题：<strong style={{ color: '#fff' }}>刚才有什么东西拦过你吗？</strong></>}
		>
			在白名单里加一条<span style={{ color: '#FFDE59' }}>会改东西的命令</span>，<br />
			然后让它跑
		</Instruction>
	);
}
