import { DeckFrame, colors } from '../kit';
import { StillScope } from '../live';
import { CoursePath } from '../CoursePath';

const weeks = [
	{ en: 'Enterprise Discovery & AI Opportunities', zh: '导师带着调查企业怎样完成一单业务，讲清部门、收入成本、系统和决策关系。学生还原流程，再接着提问。', out: '业务流程图、Stakeholder Map、事实与未知信息清单' },
	{ en: 'Solution Design & Delivery Planning', zh: '比较流程改进、代码自动化、RAG 与 Agent。提出范围、完整成本、依赖和停止条件，做第一次方案 Pitch。', out: 'Proposal、方案比较、架构与预算、里程碑' },
	{ en: 'AI Governance, Data & Security', zh: '按调查提纲访谈业务、IT 和安全负责人。核对数据主权、访问权限、审批与责任，修改方案和关键实现。', out: '数据流与权限图、审批边界、治理记录与技术验证' },
	{ en: 'AI Evaluation & Reliability', zh: '建立经业务核对的 golden dataset，区分开发与验收数据，检查错误、遗漏、引用和越权，再答辩是否值得试点。', out: 'Golden dataset、评分依据、失败分析与修订 Proposal' },
	{ en: 'Client Discovery & Solution Proposal', zh: '启动完整项目，减少调查提示。自己决定找谁核实问题，独立提出方案、预算、验收标准和里程碑，争取客户批准。', out: '完整项目 Proposal、决策记录、预算与验收计划' },
	{ en: 'Enterprise Integration & Implementation', zh: '在已有代码、数据和接口中实现关键链路。处理最小权限、环境边界、重复事件和长任务，用运行证据检查接入。', out: '可运行核心流程、接口契约、接入和异常处理证据' },
	{ en: 'Evaluation, Cost & Performance', zh: '验证 Agent 的权限、人工接管和失败恢复，核算质量、延迟、模型与复核成本，按失败证据调整实现。', out: '评估报告、成本与性能记录、恢复验证' },
	{ en: 'Stakeholder Management & Change Negotiation', zh: '面对预算削减、接口延期或新增需求，和业务、IT、安全及预算负责人协商，重算范围、架构、费用与时间。', out: 'Change Request、影响分析、修订方案与决定记录' },
	{ en: 'Pilot Delivery & User Enablement', zh: '用基线、成功标准和试点证据判断投入。教用户怎样操作、检查结果、处理异常，并验证回滚和维护责任。', out: '试点结论、操作说明、启用与回滚计划' },
	{ en: 'Acceptance, Handover & Final Pitch', zh: '对照最初承诺接受最终验收，接手者按资料独立运行和处理异常。每人解释自己的贡献、取舍与剩余问题。', out: '最终系统、验收矩阵、Runbook、交接包与答辩' },
];
const groups = [
	{ name: '客户调查', why: '先弄清客户现场，再确定工程团队值得投入什么。', tasks: ['Enterprise System Discovery', 'Discovery under Uncertainty', 'Data Readiness and Ownership', 'Baselines and Acceptance', 'Scope, Budget and Delivery'] },
	{ name: '架构取舍', why: '把数据、权限、质量和费用一起放进架构选择。', tasks: ['Choosing the Right Architecture', 'Model Routing and Cost Control', 'Retrieval with Evidence', 'Identity-aware Retrieval', 'Context and Knowledge Lifecycle'] },
	{ name: '系统接入', why: '接手已有接口和数据，让系统在真实限制下协作。', tasks: ['Working with Legacy APIs', 'MCP in Enterprise Systems', 'Events, Idempotency and Duplicates', 'Long-running Workflows', 'Deployment and Environment Boundaries'] },
	{ name: 'Agent 控制', why: '让工具调用有边界，让出错的流程能够停下、核对和继续。', tasks: ['Bounded Agent Execution', 'Approval-aware Tool Use', 'Skills for Team Workflows', 'Human Handover and Resume', 'Recovery after Partial Failure'] },
	{ name: '评估质量', why: '用质量、权限、延迟和成本证据，判断系统能不能交付。', tasks: ['Evals and Regression Gates', 'Prompt Injection and Trust Boundaries', 'Testing Retrieval and Permissions', 'Latency and Unit Economics', 'Observability and Incident Diagnosis'] },
	{ name: '试点交接', why: '带着实现面对变更，完成试点并让客户接得住。', tasks: ['Technical Reviews with Stakeholders', 'Engineering through Change', 'Release Readiness and Rollback', 'From Pilot to Adoption', 'Handover that Others Can Run'] },
];

export default function S13b_FdeTech() {
	return <DeckFrame tag="04 · FDE Tech" title="FDE Tech：拿到企业情况，设计架构并实现" subtitle="起点是已经能开发 AI 应用；要补的是调查、取舍、接入、评估和交接。" accent={colors.blue}>
		<StillScope><CoursePath weeks={weeks} groups={groups} accent={colors.dark}
			phases={[{ from: 1, to: 2, label: '导师带着做' }, { from: 3, to: 4, label: '按框架练' }, { from: 5, to: 10, label: '独立推进完整项目' }]}
			outputs={['客户方案、架构和预算', '能运行的代码、接入和评估', '客户展示和运维交接']}
			cases="课程案例：企业政策知识助手（40 位员工、两个部门）——开发上限 A$24,000，评审修订后 A$21,600，预计运行 A$1,060／月。来源：FDE Tech 课程页" /></StillScope>
	</DeckFrame>;
}
