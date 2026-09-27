// 面试题示例：生产级 eval pipeline 设计。
// 图示与回答简化自讲者提供的真实项目架构图（三条 lane：Real-time / Batch / Pre-merge）；
// 题面措辞与“考察点”为讲者视角整理，不是某家公司的原题。

export interface InterviewQuestion {
	role: string;
	kind: string;
	question: string;
	questionZh: string;
	followUps: string[];
	lookingFor: string[];
}

export const EVAL_QUESTION: InterviewQuestion = {
	role: 'Senior AI Engineer',
	kind: 'Experience + System Design',
	question: 'Walk me through the eval pipeline you designed for an LLM / agent system running in production. Please draw the architecture as you go.',
	questionZh: '请举例说明你在之前的生产级项目里是怎么设计 eval pipeline 的，边讲边画出架构图。',
	followUps: [
		'What do you score online vs. offline, and why?',
		'How do you keep LLM-as-judge cost under control?',
		'How do you catch a regression before it ships?',
	],
	lookingFor: ['是否分层：线上 / 离线 / 上线前', '成本意识：贵的 judge 跑在哪', '回归门禁：PR 阶段能否拦住', '结果给谁看、怎么用'],
};

export type LaneColor = 'blue' | 'purple' | 'orange';

export interface EvalStep {
	title: string;
	detail: string;
	hot?: boolean; // 原图中标红的关键节点
	feedsNext?: string; // 指向下一条 lane 的虚线说明
}

export interface EvalLane {
	name: string;
	scope: string;
	cadence: string;
	color: LaneColor;
	steps: EvalStep[];
	answer: string;
}

export const EVAL_LANES: EvalLane[] = [
	{
		name: 'Real-time',
		scope: '每条 trace',
		cadence: '分钟级',
		color: 'blue',
		steps: [
			{ title: '真实用户', detail: '线上和 agent 对话' },
			{ title: 'Langfuse', detail: 'agent 每一步记成 trace' },
			{ title: '入 BigQuery', detail: '每 15 分钟拉取并排队打分', feedsNext: '喂给 Batch' },
			{ title: '实时打分', detail: '延迟 p50 / p95 + 轻量 LLM judge' },
		],
		answer: '线上每条 trace 都进 Langfuse，定时入 BigQuery，只跑便宜、快的指标（延迟 p50/p95、轻量 LLM judge），分钟级就能发现问题。',
	},
	{
		name: 'Batch',
		scope: '每段对话',
		cadence: '小时级',
		color: 'purple',
		steps: [
			{ title: '原始 trace', detail: '存在 BigQuery，由上一条 lane 灌入' },
			{ title: 'dbt 聚合', detail: '把多条 trace 拼回完整对话' },
			{ title: '20 维 LLM judge', detail: 'Gemini 逐段对话深度打分，贵', hot: true },
			{ title: 'Mart 表', detail: '质量分、路由质量，可直接 SQL / BI' },
		],
		answer: '每小时用 dbt 把 trace 拼回完整对话，再用 20 个维度的 LLM judge 深度打分。它贵，所以只按对话、按小时跑。',
	},
	{
		name: 'Pre-merge',
		scope: '每个 PR',
		cadence: '上线前',
		color: 'orange',
		steps: [
			{ title: 'PR 打开', detail: 'develop → main 触发 Azure Pipeline' },
			{ title: '合成测试流量', detail: 'CSV 用例 + LLM 生成多轮对话' },
			{ title: '4 组并行', detail: 'Dev / Stag × 单轮 / 多轮' },
			{ title: 'A/B HTML 报告', detail: 'Dev vs Stag 并排，reviewer 先看回归' },
		],
		answer: '每个 PR 触发 pipeline，用合成流量在 Dev 和 Staging 各跑单轮、多轮，出一份 A/B 报告，reviewer 先看有没有回归再批准 merge。',
	},
];

export const EVAL_CONSUMER = {
	title: '工程师消费',
	items: ['Dashboard：线上质量、回归告警', 'HTML 报告：PR 对比', 'BigQuery SQL：临时排查'],
};

export const EVAL_ANSWER_OPEN = '我们把 eval 拆成三条 lane，按频率和成本分层：便宜的跑得勤，贵的跑得少。';
export const EVAL_ANSWER_CLOSE = '三条 lane 的结果汇到同一处：dashboard、PR 报告和 BigQuery，工程师有统一入口。';
