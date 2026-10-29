import { TestSlide } from './_shared';

// M1 后测：读 Codex 官方示例的 usage
export default function S10_M1Post() {
	return (
		<TestSlide
			module="M1"
			kind="post"
			question="读这行 usage：input_tokens 24763，cached_input_tokens 24448，output_tokens 122"
			sub="（Codex 官方文档里的示例）回答两个问题："
			items={['这次输入里，大约多大比例是从 cache 读的？', '如果 cache 全部没命中，这次请求的成本主要会涨在哪一块？']}
			answer={<>① 24448 ÷ 24763 ≈ 98.7% 的输入走了 cache。② 涨在输入：这 24448 个 token 要按原价重新处理（prefill），输出只有 122 个，影响很小。</>}
		/>
	);
}
