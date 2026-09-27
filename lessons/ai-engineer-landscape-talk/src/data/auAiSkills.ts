// 九个阶段各自“当年要点的技能”，与 auAiTimeline.ts 的 STAGES 按下标一一对应。
// status 是站在 2026-09 回看的判断（讲者观点，非统计数据）：
//   keep      现在仍然需要
//   downgrade 降级：从卖点变成常识 / 标配
//   obsolete  划掉：现在不再作为卖点 / 已被取代

export type SkillStatus = 'keep' | 'downgrade' | 'obsolete';

export interface StageSkill {
	skill: string;
	detail?: string; // 技能本身的补充说明，两种视角都显示
	verdict?: string; // 站在现在回看的一句话评语，只在“回看”视角显示
	status: SkillStatus;
}

export const STAGE_SKILLS: StageSkill[][] = [
	// 1. ChatGPT + 三大云
	[
		{ skill: '传统 data scientist 考题作为 AI 岗敲门砖', detail: '统计、特征工程、经典 ML', verdict: 'AI engineer 岗基本不考了，DS 岗另算', status: 'obsolete' },
		{ skill: 'Transformer 原理', verdict: '不再是门槛，但 context window、KV cache 这层理解到第 7 阶段又用上了', status: 'downgrade' },
		{ skill: '“做过 ML” 这个背景本身', verdict: '当年能直接转岗，现在不构成优势', status: 'obsolete' },
	],
	// 2. 本地巨头 + demo 时代
	[
		{ skill: '背 AI concepts 八股', status: 'obsolete' },
		{ skill: '展示型个人项目', verdict: 'demo 级作品已经没有区分度', status: 'obsolete' },
		{ skill: '“会用 Cursor”', status: 'obsolete' },
		{ skill: 'n8n 等 no-code / low-code 作为工程师卖点', verdict: '工具还在，但归 business 侧了', status: 'obsolete' },
		{ skill: 'RAG', verdict: '从招牌技能变成标配', status: 'downgrade' },
		{ skill: '模型基础', status: 'downgrade' },
	],
	// 3. Agentic workflow + in-house
	[
		{ skill: 'Agentic workflow 设计、ReAct loop', status: 'keep' },
		{ skill: 'Tool calling、structured output', verdict: '已稳定，当常识', status: 'downgrade' },
		{ skill: 'Python', status: 'keep' },
		{ skill: 'Data engineering 与数据层 integration', verdict: '项目仍然大量落在数据层', status: 'keep' },
		{ skill: '自己手写工具和 integration 层', verdict: '被 MCP 取代', status: 'obsolete' },
		{ skill: 'LangGraph 等 deterministic 框架', verdict: '“今年要不要淘汰”，all-in-one 平台在挤它', status: 'obsolete' },
		{ skill: '“能 deterministic 就不 agentic”', verdict: '原则还对，但模型变强后那条线一直在往 agentic 一侧移', status: 'downgrade' },
	],
	// 4. MCP + 落地压力期
	[
		{ skill: 'MCP 底层协议原理', verdict: '直接 consume SDK', status: 'obsolete' },
		{ skill: '把存量 API 优化成模型可用的工具', detail: '工具设计', status: 'keep' },
		{ skill: '生产环境落地经验', verdict: '从这里开始一直是最硬的通货', status: 'keep' },
		{ skill: '长期运行稳定性、ROI 评估', status: 'keep' },
	],
	// 5. True agent + consulting 回归
	[
		{ skill: 'Main agent / subagent 架构', status: 'keep' },
		{ skill: 'Context management', status: 'keep' },
		{ skill: '模型选型与成本意识', detail: '含国产模型', status: 'keep' },
		{ skill: 'Consulting 式交付能力', status: 'keep' },
		{ skill: '云厂商 SDK 选型', detail: 'Strands、ADK、Agent Framework、Agents SDK', verdict: '知道即可，不再是 focus', status: 'downgrade' },
	],
	// 6. Skills 普及 + 生产 checklist
	[
		{ skill: '写 skill', detail: '把工作流、商业需求描述清楚，BA 和 PM 也要会', status: 'keep' },
		{ skill: '用 skill 跨到 DevOps、infra', status: 'keep' },
		{ skill: 'Long-running task 设计', detail: 'Ralph loop、brainstorming 这类模式', status: 'keep' },
		{ skill: 'AI-DLC', status: 'keep' },
		{ skill: 'Eval、observability、AI gateway', detail: 'Langfuse 类、LiteLLM 类', status: 'keep' },
		{ skill: 'Data sovereignty、access control', status: 'keep' },
		{ skill: 'All-in-one 平台', detail: 'AgentCore 类', status: 'keep' },
	],
	// 7. Harness + loop engineering
	[
		{ skill: 'Harness engineering', detail: '含自研开发用 harness', status: 'keep' },
		{ skill: '写 loop 的验收条件和 back pressure', status: 'keep' },
		{ skill: 'Claude Code 类 CLI 深度使用', detail: 'hooks 等 programmatic enforcement、各种细节操作，context management', status: 'keep' },
		{ skill: 'Eval 驱动调优、loop 自迭代自修复', status: 'keep' },
		{ skill: 'Tokenomics、data residency 作为 day-one 设计', status: 'keep' },
		{ skill: '分层 sampling 长期维护、KV caching 省钱', status: 'keep' },
		{ skill: '提示词工程、逐字微调 prompt', status: 'downgrade' },
	],
	// 8. FDE / enablement
	[
		{ skill: '客户现场快速交付生产级应用', status: 'keep' },
		{ skill: '快速判断当前 use case 中 AI 可以产生的 value', status: 'keep' },
		{ skill: 'BA、PM 都可能要你碰一碰', status: 'keep' },
		{ skill: 'Education', status: 'keep' },
		{ skill: 'Sales、续签下一阶段合同', status: 'keep' },
	],
	// 9. AI governance
	[
		{ skill: 'Agent identity 与 lifecycle', status: 'keep' },
		{ skill: 'Least-privilege access control', status: 'keep' },
		{ skill: 'Shadow AI 治理、统一 guardrail', status: 'keep' },
		{ skill: '把法规和行业守则转成 guardrail、eval dataset、LLM-as-judge、CI gate', status: 'keep' },
	],
];
