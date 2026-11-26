import { DeckFrame, colors } from '../kit';
import { StillScope } from '../live';
import { CoursePath } from '../CoursePath';

const weeks = [
	{ en: 'Business Problems and AI Opportunities', zh: '调查部门目标与重复工作。用市场调研练习核对资料与判断依据，确定值得改进的流程。', out: '问题定义、流程与机会优先级' },
	{ en: 'AI Fluency for Decision-Makers', zh: '判断 AI、规则与人工各承担什么。先理解资料处理、工具操作、权限和人工复核的边界。', out: '能力边界、人工决策点与验证计划' },
	{ en: 'Designing AI Workflows', zh: '从邮件、PDF 和 SOP 任务出发，画出输入、处理、输出、审批与异常路径。', out: 'Workflow Map、输入输出规则与审批设计' },
	{ en: 'Building AI Automations', zh: '选择发票、Excel、报价或内容任务，用 Codex 亲手完成输入到成果的处理流程，核对并修改结果。', out: '完整成果、操作记录与结果核对' },
	{ en: 'Connecting Business Tools', zh: '把客户跟进、采购或入职等任务串成流程，处理表单、文件和业务工具之间的信息，保留授权、去重与人工确认。', out: '连接后的工作流、授权与重复事件处理记录' },
	{ en: 'Testing and Improving Automations', zh: '用工资、合同和收支核对练习识别缺项、冲突和计算问题，检查重复执行与人工复核成本。', out: '错误与异常清单、修订结果与成本核对' },
	{ en: 'The Business Case for AI', zh: '向客户角色展示工作流、核对结果和 Proposal，解释预算、范围、技术依赖与风险，回应质询并争取试点决定。', out: 'Business Case、预算、范围与决定记录' },
	{ en: 'AI Adoption and Business Value', zh: '完成项目展示与交接，说明个人承担的调查、方案、验证和协作；对照目标 FDE 岗位找出还要补的能力。', out: '试点建议、Adoption Plan 与交接材料' },
];
const groups = [
	{ name: '财务与核对', why: '把反复核对的工作交给 AI 辅助处理，自己把住金额、凭证和审批。', tasks: ['澳洲发票提取与 GST 核对', 'Excel 自动化处理', '工资核对', '收支追踪', '员工报销核对与异常'] },
	{ name: '销售与客服', why: '让信息整理、回复和跟进连起来，减少遗漏，保留关键的人工判断。', tasks: ['邮件整理', '报价单制作', '市场与竞品调研', '客户资料整理', '销售线索接收与跟进', '客服分流与人工升级'] },
	{ name: '采购与运营', why: '从处理资料到推进流程，练清楚每一步的条件、责任和异常。', tasks: ['PDF 转换与结构整理', '网页填表', 'SOP 制作', '合同阅读', '文件批量整理', '定时工作任务', '采购申请与审批', '供应商方案比较', '库存检查与补货建议', '资料请求与权限审批', '工作流监测与人工接管'] },
	{ name: '团队与交接', why: '让会议、人员与项目的信息变成有人负责、能够跟进的工作。', tasks: ['录音成文', '面试安排与协调', '员工入职任务与责任交接', '会议记录到行动计划', '项目周报与决策简报'] },
	{ name: '内容与营销', why: '从业务资料出发，练习把内容做出来、改到位。', tasks: ['宣传图制作与修改', '视频号策划', '小红书创作'] },
];

export default function S13c_FdeBusiness() {
	return <DeckFrame tag="04 · FDE Business" title="FDE Business：从业务问题，推进到试点" subtitle="起点是业务、产品、咨询经验；要补的是 AI 动手能力、方案、预算和 Pitch。" accent={colors.yellow}>
		<StillScope><CoursePath weeks={weeks} groups={groups} accent={colors.yellow}
			outputs={['Solution Proposal', '能演示的 AI 工作流和验证', 'Pitch 和个人项目材料']}
			cases="企业案例拆解：ANZ Z-GPT（银行内部知识助手）· Woolworths Olive（购物助手）· IAG CASI（理赔查保单）。来源：FDE Business 课程页" /></StillScope>
	</DeckFrame>;
}
