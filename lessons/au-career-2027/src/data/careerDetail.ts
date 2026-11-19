import type { CareerDetail, SalaryDetail } from '../components/career';
import { sources } from './sources';

export const aiEngineering: SalaryDetail = {
	payTitle: 'AI Engineer · 城市和工作内容都会影响薪资',
	paySubtitle: 'Robert Half 2026 新聘年基本薪资，澳元，不含 super、奖金及福利。',
	payColumns: ['地点', 'P25', 'P50', 'P75'],
	payRows: [
		['澳洲全国', 'A$150,000', 'A$170,000', 'A$195,000'],
		['悉尼', 'A$163,500', 'A$185,300', 'A$212,550'],
		['墨尔本', 'A$154,500', 'A$175,100', 'A$200,850'],
		['布里斯班', 'A$151,500', 'A$171,700', 'A$196,950'],
	],
	payNote: 'P25 指第 25 百分位。另看高位职位：Dreamerlabs 悉尼 Staff 岗公开报价 A$250k–400k，广告另列奖金与股权。',
	payLinks: [['全国', sources.aiRh], ['悉尼', sources.aiRhSydney], ['墨尔本', sources.aiRhMelbourne], ['布里斯班', sources.aiRhBrisbane], ['Dreamerlabs Staff 招聘报价', sources.aiStaff]],
};

export const fdeBusiness: SalaryDetail = {
	payTitle: 'FDE Business · 毕业生能投什么，薪资多少？',
	paySubtitle: '第一份工作可以搜 Graduate／Associate AI Consultant、Associate Consultant 或 Graduate Business Analyst。',
	payColumns: ['岗位与职级', '澳元年薪', '招聘或薪资来源'],
	payRows: [
		['Graduate／Associate Forward Deployed AI Consultant', 'A$100k–120k', 'ADAPTOVATE 悉尼，合并广告年薪'],
		['Associate Consultant · 2027 Graduate', '未公布', 'Appian 悉尼，AI 流程自动化'],
		['AI 转型／采用 · Mid／Senior／Lead', 'A$130k／150k／170k', 'Galileo 悉尼大型企业底薪基准'],
		['AI Delivery Lead · 有经验岗位', 'A$180k–200k + super', 'Talenza 悉尼，永久岗位公开报价'],
	],
	payNote: 'ADAPTOVATE 同一份广告收应届和早期人才。Graduate 接受无咨询经历的人，Associate 通常看 2–3 年经验。面试带自己搭过、测过的项目。',
	payLinks: [['ADAPTOVATE 悉尼毕业生 JD 与薪资', sources.businessGraduate], ['Appian 2027 Graduate JD', sources.businessGraduateAppian], ['Galileo 底薪基准', sources.businessPay], ['Talenza 招聘报价', sources.businessTalenza]],
};

export const fdeTech: SalaryDetail = {
	payTitle: 'FDE Tech · 中级和资深的薪资差在哪？',
	paySubtitle: 'Bluebird 2026 招聘市场参考。澳元年基本薪资，不含 super 和股权。',
	payColumns: ['资历', '悉尼', '墨尔本', '布里斯班／远程'],
	payRows: [
		['中级（3–5 年）', 'A$150k–185k', 'A$145k–175k', 'A$135k–165k'],
		['资深（5–8 年）', 'A$180k–240k', 'A$175k–230k', 'A$165k–215k'],
		['Lead / Principal（8 年以上）', 'A$240k–300k+', 'A$230k–285k+', 'A$210k–265k+'],
	],
	payNote: 'Re:Sourced 资深 FDE 悉尼、墨尔本区间相同，布里斯班下限为 A$160k。两家都是招聘机构基准。谈薪前问清是否要出差，以及谁对生产、客户采用和上线后的问题负责。',
	payLinks: [['Bluebird 2026 FDE 分级基准', sources.fdeBluebird], ['Re:Sourced 资深薪资对照', sources.engineerPay]],
};

export const aiProduct: CareerDetail = {
	title: 'AI Product Manager 需要什么能力？',
	subtitle: '判断哪些功能适合用 AI，设计 Agent，再用 AI Coding 做出可运行的原型。',
	capabilities: [
		["User Discovery · 用户研究", "访谈真实用户，找出谁在哪一步卡住，记录现有做法和代价。"],
		["Opportunity Sizing · 机会评估", "用频次、影响人数和返工成本，解释哪个问题值得先做。"],
		["Product Strategy · 产品路线图", "给第一版定边界，说明先服务谁、推迟什么、为什么。"],
		["AI Product Requirements · AI 需求", "决定哪些任务用模型理解、哪些用规则执行、哪些交给用户。"],
		["Agent Design · Agent 设计", "定义目标、输入、工具权限、行动顺序和失败处理。"],
		["AI Coding · 动手做原型", "用 Codex 或 Claude Code 搭能跑的 Agent，接上输入和工具。"],
		["Agent Evaluation · 评估与治理", "测任务完成、错误操作和越权，决定何时需要人工确认。"],
		["Delivery Leadership · 跨团队交付", "和设计、工程、法务定负责人；条件变化时调整发布时间和范围。"],
		["Product Analytics · 采用与效果", "看用户是否回来、是否完成任务，再判断有没有真正省下时间。"],
		["Commercial Judgment · 商业判断", "比较每次成功任务的成本与收益，向决策人解释是否继续投入。"],
	],
	practice: '面试时打开你做的 Agent，演示它怎么处理没有截止日的任务，再解释设计取舍。',
	jobLinks: [['匠人 AI 产品经理（BA）课纲', sources.jrAiPm], ['Suntory · AI PM', sources.pm], ['MYOB · Principal AI PM', sources.pmMyob]],
	payTitle: 'AI 产品薪资 · 普通 PM、资深 PM 和 AI PM',
	paySubtitle: '澳元年薪。Parity 公布跨行业底薪中位区间，Aquent 公布一个独立样本中位数。',
	payColumns: ['角色', '薪资参考', '来源与范围'],
	payRows: [
		['Product Manager', 'A$135k–155k', 'Parity · 跨行业'],
		['Senior Product Manager', 'A$180k–200k', 'Parity · 跨行业'],
		['AI Product Manager', 'A$160k–190k', 'Parity · 跨行业'],
		['AI Product Manager', '中位 A$160k', 'Aquent · 澳洲 2026 指南'],
	],
	payNote: 'Suntory 悉尼 AI PM 是两年固定期，MYOB Principal 是永久岗。两份 JD 均未公布报价。AI PM 薪资区间与 Senior PM 重叠。',
	payLinks: [['Parity FY26–27 产品薪资', sources.pmPay], ['Aquent 澳洲 2026', sources.pmAquent], ['Suntory 固定期 JD', sources.pm], ['MYOB 永久岗 JD', sources.pmMyob]],
};

export const itSales: CareerDetail = {
	title: 'IT Sales 需要什么能力？',
	subtitle: 'BDR 负责找到合格商机；售前负责验证方案；AE 负责推进采购、签约并对收入目标负责。',
	capabilities: [
		["Account Research · 客户研究", "查客户的业务、购买时机和现有供应商，写出为何现在联系。"],
		["Prospecting · 主动拓客", "给合适的人写邮件或打电话，以对方正在处理的问题开场。"],
		["Discovery · 需求访谈", "问清今天怎么做、代价多大、谁受影响，复述给客户核对。"],
		["Qualification · 商机判断", "确认预算、决策人和时间表，判断是否值得交给 AE 跟进。"],
		["Technical Discovery · 技术售前", "和技术团队核实数据、权限与集成限制，谈清产品能做到哪里。"],
		["Value Selling · 价值论证", "用客户自己的用量和成本算回报，和售前约定试点成功指标。"],
		["Stakeholder Mapping · 决策关系", "找出使用者、技术把关人、预算负责人，以及谁能否决采购。"],
		["Negotiation & Close · 谈判签约", "处理价格、合同、安全审查与采购条款，确定签约时间和责任人。"],
		["Pipeline Forecasting · 收入预测", "按客户已确认的进展更新 CRM，解释哪些订单可能延期。"],
		["Account Growth · 大客户经营", "跟进上线后的用量和效果，据此规划续约、扩容与下一笔收入。"],
	],
	practice: '求职演练：BDR 做一次陌生电话和商机交接；售前演示试点；AE 解释谁批预算、何时签约。',
	jobLinks: [['Salesforce · 悉尼 BDR', sources.salesSdr], ['Salesforce · Commercial AE', sources.salesAe], ['Google Cloud · AI Sales Specialist', sources.googleCloudSales], ['OpenAI · 大客户销售', sources.sales]],
	payTitle: 'IT Sales · 底薪和达标佣金要分开算',
	paySubtitle: 'Sales Recruit Partners FY26 报告，科技销售样本采自 2025 年第二季度。澳元底薪，浮动按达标口径。',
	payColumns: ['科技销售岗位', '年薪底薪', '达标浮动相对底薪'],
	payRows: [
		['SDR／BDR', 'A$70k–85k', '+20% 至 30%'],
		['中小企业 AE', 'A$110k–125k', '+30% 至 40%'],
		['中端市场 AE', 'A$125k–140k', '+40% 至 50%'],
		['企业级 AE', 'A$150k–200k', '+50% 至 100%'],
		['Sales Engineer／售前', 'A$140k–175k', '+20% 至 30%'],
	],
	payNote: 'A$130k 底薪和 A$60k 达标佣金对应 A$190k OTE。问清 quota、团队实际达标率、入职爬坡期和佣金结算条件，再判断哪部分能用来覆盖家庭开销。',
	payLinks: [['Sales Recruit Partners · 科技销售基准', sources.salesPay], ['37 Talent 悉尼头部厂商口径', sources.salesSydney]],
};
