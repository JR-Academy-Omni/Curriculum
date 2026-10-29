import { TestSlide } from './_shared';

// M6 前测：跨公司复用答案
export default function S28_M6Pre() {
	return (
		<TestSlide
			module="M6"
			kind="pre"
			question="A 公司的管理员问过「本季度退款总额是多少？」。B 公司的员工问了一模一样的问题，能直接把缓存里的答案给他吗？"
			items={['能 —— 问题一样，答案就一样', '不能 —— 但只要问题文本不同就没事', '不能 —— cache key 里必须区分公司（tenant）和权限（role）']}
		/>
	);
}
