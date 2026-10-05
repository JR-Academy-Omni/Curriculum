import { TestSlide } from './_shared';

// M1 前测：一个什么都没做的会话，context 已经用了多少
export default function S07_M1Pre() {
	return (
		<TestSlide
			module="M1"
			kind="pre"
			question="新开一个 Claude Code 会话，一个字都还没打，context window 已经用掉多少？"
			sub="再猜一个：用 claude -p 只发一句 “Reply OK”，这次请求的 input 一共多少 token？"
			items={['几乎是 0 —— 我还什么都没说', '几百 token —— 一点点系统设定', '几千到几万 token —— system prompt + tool definitions + memory 都在里面']}
		/>
	);
}
