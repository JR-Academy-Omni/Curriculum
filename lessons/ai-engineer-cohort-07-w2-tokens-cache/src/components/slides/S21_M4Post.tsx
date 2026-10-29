import { TestSlide } from './_shared';

// M4 后测：用 Qwen2.5-7B 的真实配置推算
export default function S21_M4Post() {
	return (
		<TestSlide
			module="M4"
			kind="post"
			question="还是 Qwen2.5-7B：8K context、batch 1 时 KV Cache 约 0.44 GiB。下面两种情况各是多少？"
			items={['context 拉长到 128K，batch 还是 1', 'context 还是 8K，并发提高到 batch 32']}
			answer={<>都是线性放大：① 长度 ×16 → 约 7 GiB；② batch ×32 → 约 14 GiB。这只是 KV Cache，还没算模型权重 —— 所以长 context 和高并发都在抢同一块显存。推理引擎用 GQA、PagedAttention（vLLM）、KV 量化来缓解。</>}
		/>
	);
}
