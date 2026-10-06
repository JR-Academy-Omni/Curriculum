import { TestSlide } from './_shared';

// M5 前测：连跑两次，cache 字段会怎么变
export default function S22_M5Pre() {
	return (
		<TestSlide
			module="M5"
			kind="pre"
			question="同一条 claude -p 命令连跑两次，第二次的 usage 会有什么不同？"
			sub="再猜：如果每次都在 system prompt 里加上当前时间，第二次还会命中 cache 吗？"
			items={['完全一样 —— 每次都是新请求', '第二次 cache_read_input_tokens 变大，更快也更便宜', '第二次直接返回上次的答案，不调用模型']}
		/>
	);
}
