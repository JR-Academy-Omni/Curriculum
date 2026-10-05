import { TestSlide } from './_shared';

// M4 前测：生成第 100 个 token 时要不要重算前面
export default function S19_M4Pre() {
	return (
		<TestSlide
			module="M4"
			kind="pre"
			question="模型生成第 100 个 token 时，要不要把前 99 个 token 的 attention 全部重算一遍？"
			items={['要，每一步都从头算一遍', '不用，前面算过的结果存起来了，只算新的那个', '看情况，长回答才会存']}
		/>
	);
}
