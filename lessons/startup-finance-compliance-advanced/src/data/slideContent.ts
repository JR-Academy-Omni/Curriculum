export type ContentSlide = {
	kind: 'content';
	section: string;
	title: string;
	subtitle: string;
	accent: string;
	items: Array<{ heading: string; body: string; meta?: string }>;
	footer?: string;
};

export type SectionSlide = {
	kind: 'section';
	number: string;
	title: string;
	statement: string;
	points: string[];
	accent: string;
};

export type CoverSlide = {
	kind: 'cover';
	title: string;
	subtitle: string;
	meta: string;
	sections: string[];
};

export type SlideContent = ContentSlide | SectionSlide | CoverSlide;

const red = '#ff5757';
const yellow = '#FFDE59';
const green = '#7ED957';
const blue = '#38B6FF';
const purple = '#CB6CE6';

export const slideContent: SlideContent[] = [
	{ kind: 'cover', title: '创业财税与合规进阶课', subtitle: '从公司架构到商业壁垒，理清创业关键问题', meta: '主讲 Seven · 2026 年 11 月 1 日 · Sydney Live', sections: ['架构与财税', '政府补助', '商业模式', '商业边界', '竞争壁垒'] },
	{ kind: 'content', section: '课程地图', title: '150 分钟，把创业的五个问题串起来', subtitle: '先判断是否值得做，再设计怎么做，最后确保可以长期做', accent: red, items: [
		{ heading: '01 架构与财税', body: '谁承担责任？钱如何流转？', meta: '25 分钟' }, { heading: '02 政府补助', body: '拿得到、用得对、留得住证据', meta: '30 分钟' }, { heading: '03 商业模式', body: '客户为什么持续付费？', meta: '25 分钟' }, { heading: '04 商业边界', body: '把责任、权利和数据说清楚', meta: '25 分钟' }, { heading: '05 竞争壁垒', body: '凭什么客户下一次还选你？', meta: '25 分钟' },
	], footer: '开场 10 分钟 · 互动问答 10 分钟' },
	{ kind: 'section', number: '01', title: '公司架构与财税', statement: '架构需要匹配风险与业务阶段', points: ['从 Sole Trader 到 Pty Ltd', '股权、控制权与董事责任', '税务、GST 与现金流', '企业合规的固定节奏'], accent: red },
	{ kind: 'content', section: '01 / 架构与财税', title: '结构选择', subtitle: '优先看风险、合伙人、税务、融资与维护成本', accent: red, items: [
		{ heading: 'Sole Trader', body: '低风险、快速试水、单人接单', meta: '个人与业务责任没有完全隔离' }, { heading: 'Pty Ltd 公司', body: '员工、投资者、合同较多、准备规模化', meta: '年审、财务、董事责任和治理要求' }, { heading: 'Partnership', body: '两人以上共同经营', meta: '合伙责任、退出与利润分配争议' }, { heading: 'Trust 信托', body: '资产或受益安排有特殊目标', meta: '规则更复杂、成本更高、须个案设计' },
	], footer: '决策问句：未来 12 个月是否会雇人、签长期合同、引入合伙人或承接明显商业风险？' },
	{ kind: 'content', section: '01 / 架构与财税', title: '治理责任', subtitle: '创业初期先谈钱、权、责和退出机制', accent: red, items: [
		{ heading: '股东 / Shareholder', body: '持有股份并参与重大决策', meta: '约定转让、融资与退出' }, { heading: '董事 / Director', body: '履行法定管理义务并了解财务状况', meta: '“挂名”不能免责' }, { heading: '运营负责人', body: '执行业务流程与预算，管理销售与交付', meta: '按授权承担经营责任' }, { heading: '提前签四项协议', body: '股权比例、出资与分工、决策机制、离职退出与争议处理' },
	] },
	{ kind: 'content', section: '01 / 架构与财税', title: '创业者至少需要看懂四个数字', subtitle: '税率是结果，合规现金流才是起点', accent: red, items: [
		{ heading: 'A$75k', body: 'GST 注册门槛', meta: '通常按年度 GST turnover 判断' }, { heading: '10%', body: '常见 GST 税率', meta: '收取的 GST 不是企业利润' }, { heading: '25% / 30%', body: '公司所得税率', meta: '是否满足 base rate entity 条件' }, { heading: 'Cash', body: '比账面利润更紧迫', meta: '应收、预缴税款和工资会造成现金缺口' },
	], footer: 'Revenue ≠ Profit ≠ Cash · 公司钱 ≠ 个人钱' },
	{ kind: 'content', section: '01 / 架构与财税', title: '把合规变成月度管理系统', subtitle: '尽早发现错误，不要等到年底补作业', accent: red, items: [
		{ heading: '每周', body: '收支流水、应收账款、员工变动', meta: '发现异常交易和回款风险' }, { heading: '每月', body: 'Bank reconciliation、P&L、Cash runway', meta: '知道企业到底能撑多久' }, { heading: '每季 / 按期', body: 'BAS/GST、PAYG、工资与养老金申报', meta: '履行税务与雇主义务' }, { heading: '每年', body: '公司年审、税表、财报、合同与保险复盘', meta: '重新判断企业结构' },
	], footer: '最低要求：每月花 30 分钟看一次收入、利润、现金和风险' },
	{ kind: 'section', number: '02', title: '政府补助', statement: '补助是企业成长资源，不是商业模式本身', points: ['发现适合项目的资助', '资格与时间筛选', 'R&DTI：技术不确定性和证据', 'EMDG：出口市场与支出合规'], accent: blue },
	{ kind: 'content', section: '02 / 政府补助', title: '补助地图', subtitle: '先按企业目标找政策，再按条件筛项目', accent: blue, items: [
		{ heading: '研发创新', body: 'R&DTI 等税务激励', meta: '合格活动 + 证据' }, { heading: '出口拓展', body: 'EMDG 等出口支持', meta: '产品、市场与费用' }, { heading: '投资建设', body: '联邦、州与地方专项资金', meta: '匹配政策目标' }, { heading: '培训及其他', body: '技能、就业和数字化支持', meta: '项目与企业条件' },
	], footer: '入口：business.gov.au → Grants and programs → 按州、行业和企业阶段筛选' },
	{ kind: 'content', section: '02 / 政府补助', title: '拿到补助前的五道筛选', subtitle: '资格不足的项目应尽早排除', accent: blue, items: [
		{ heading: '01 申请主体', body: '公司类型、注册地、运营年限' }, { heading: '02 项目内容', body: '行业、技术、市场与政策目标' }, { heading: '03 财务条件', body: '营业额、配套资金、税务合规' }, { heading: '04 时间节点', body: '申请期、费用发生期、申报期' }, { heading: '05 证据与风险', body: '合同、发票、日志、归属关系' },
	], footer: '三色灯：绿色 = 基本满足 · 黄色 = 需要核实 · 红色 = 不应继续投入申请成本' },
	{ kind: 'content', section: '02 / 政府补助', title: 'R&DTI：写了代码不等于合格研发', subtitle: '核心问题：结果是否无法由有能力的专业人士预先确定？', accent: blue, items: [
		{ heading: '技术不确定性', body: '现有知识能否预先确定结果' }, { heading: '假设与实验', body: '提出可验证假设并设计系统性实验' }, { heading: '观察与结论', body: '记录参数、失败结果和学习所得' }, { heading: '成本与证据', body: '工时、费用、合同和项目材料互相印证' },
	], footer: '普通系统搭建、界面优化和已知方案集成不会自动合格' },
	{ kind: 'content', section: '02 / 政府补助', title: 'EMDG：费用之外还要证明出口推广', subtitle: 'Round 4 已关闭，后续安排以 Austrade 公告为准', accent: blue, items: [
		{ heading: 'Tier 1', body: '准备出口', meta: '最高 A$30k / 年' }, { heading: 'Tier 2', body: '现有市场出口', meta: '最高 A$50k / 年' }, { heading: 'Tier 3', body: '拓展新重点市场', meta: '最高 A$80k / 年' }, { heading: '三类核查', body: '主体与市场资格、合格费用、合同与付款证据' },
	] },
	{ kind: 'section', number: '03', title: '商业模式', statement: '技术回答能不能做，商业模式回答能否持续', points: ['找到付费者与真实痛点', '设计产品、渠道与交付', '看清客单价和单位经济', '把专业服务变成可复制能力'], accent: yellow },
	{ kind: 'content', section: '03 / 商业模式', title: '客户价值从真实行为开始', subtitle: '客户说“很好”，不代表客户愿意付钱', accent: yellow, items: [
		{ heading: '问题是否高频', body: '客户一周或一月遇到几次' }, { heading: '不解决损失多大', body: '时间、金钱、机会或合规风险' }, { heading: '现在如何解决', body: 'Excel、外包、软件或忍受' }, { heading: '谁有预算和决策权', body: '使用者、采购者和付款者可能不是同一人' },
	], footer: '提问：如果今天停止提供你的产品或服务，客户会有多痛？' },
	{ kind: 'content', section: '03 / 商业模式', title: '六问商业画布', subtitle: '钱从哪里来，成本花在哪里', accent: yellow, items: [
		{ heading: '客户是谁', body: '行业、规模和决策人' }, { heading: '解决什么', body: '真实痛点和替代方案' }, { heading: '价值何在', body: '更快、更稳或更省心' }, { heading: '怎么触达', body: '推荐、搜索或合作伙伴' }, { heading: '如何交付', body: '人员、SOP、软件和供应链' }, { heading: '如何赚钱', body: '定价、毛利、续约和回款' },
	], footer: '一句话：我们为【谁】解决【什么问题】，以【什么方式】交付，按【什么方式】收钱' },
	{ kind: 'content', section: '03 / 商业模式', title: '单笔服务的算账逻辑', subtitle: '卖出去、做完、收回钱，每一步都要计算', accent: yellow, items: [
		{ heading: 'A$5,000', body: '客户合同收入' }, { heading: '− A$2,400', body: '交付人工与外包' }, { heading: '− A$600', body: '渠道与获客成本' }, { heading: '= A$2,000', body: '贡献毛利', meta: '假设示例，非 AUGrants 实际数据' },
	], footer: '贡献毛利为正不代表公司已经盈利，还要计算固定工资、软件、保险、坏账和现金占用' },
	{ kind: 'content', section: '03 / 商业模式', title: '专业服务的扩张路径', subtitle: '增长不只靠增加人手', accent: yellow, items: [
		{ heading: '1 专家交付', body: '依赖创始人或资深顾问', meta: '难复制' }, { heading: '2 标准化', body: '模板、清单和复核机制', meta: '可培训' }, { heading: '3 数字化', body: 'CRM、文档流和任务追踪', meta: '可管理' }, { heading: '4 产品化', body: '可复用服务包与自助工具', meta: '可扩张' },
	], footer: '先建立成功交付的 SOP，再谈系统开发；先验证付费意愿，再谈规模化' },
	{ kind: 'section', number: '04', title: '商业边界', statement: '好生意需要经得起争议与复核', points: ['商业合作的四类边界', '把服务范围写进合同', 'Payroll 外包的责任拆分', '隐私、数据、资金与客户风险'], accent: purple },
	{ kind: 'content', section: '04 / 商业边界', title: '利益相关方与承诺边界', subtitle: '客户关系好，也需要书面约定', accent: purple, items: [
		{ heading: '客户边界', body: '交付物、时间、需求变更与验收' }, { heading: '合作伙伴', body: '推荐费、信息共享与客户归属' }, { heading: '员工 / 承包商', body: '岗位职责、保密、知识产权与授权' }, { heading: '监管与公众', body: '宣传、税务与法定义务' },
	], footer: '讲清边界代表准确承担责任，不代表逃避责任' },
	{ kind: 'content', section: '04 / 商业边界', title: '服务协议需要回答六个问题', subtitle: '多数争议来自双方对范围、结果或付款条件理解不同', accent: purple, items: [
		{ heading: '做什么', body: 'Scope / Deliverables' }, { heading: '不做什么', body: 'Exclusions' }, { heading: '谁提供资料', body: 'Responsibilities' }, { heading: '何时付款', body: 'Fees / Milestones' }, { heading: '变更如何处理', body: 'Change requests' }, { heading: '异常如何退出', body: 'Dispute / Termination' },
	], footer: '不能承诺政府一定批准补助，也不能随意转移客户依法应履行的义务' },
	{ kind: 'content', section: '04 / 商业边界', title: 'Payroll 外包的责任链', subtitle: '流程可以外包，雇主责任不会消失', accent: purple, items: [
		{ heading: '业务经理', body: '批准休假、加班和报销', meta: '提供经批准的数据' }, { heading: 'Payroll 服务方', body: '录入、计算、复核和生成 payslip', meta: '按授权处理数据' }, { heading: '企业负责人', body: '批准最终工资并安排付款', meta: '承担最终监督' }, { heading: '系统与记录', body: 'Feishu + Xero + 归档', meta: '权限、修改记录和保密' },
	], footer: '通常应在发薪日起 1 个工作日内提供 payslip，相关员工记录一般保存 7 年' },
	{ kind: 'content', section: '04 / 商业边界', title: '四个常见风险误区', subtitle: '留痕、最小权限、及时升级', accent: purple, items: [
		{ heading: '挂名董事', body: '“我不参与运营”不能免除法定职责' }, { heading: '客户数据', body: 'Excel 和共享文档同样需要访问权限与保密规则' }, { heading: '企业资金', body: '个人使用与企业支出必须分账并经过审批' }, { heading: '合规宣传', body: '不要保证无法控制的补助结果或收益' },
	] },
	{ kind: 'section', number: '05', title: '竞争壁垒', statement: '壁垒来自长期累积的优势', points: ['从卖点走向持续客户价值', '识别容易被复制的优势', '让口碑与复购形成循环', '用十二个月建设护城河'], accent: green },
	{ kind: 'content', section: '05 / 竞争壁垒', title: '竞争壁垒的乘法公式', subtitle: '任何一个因素接近零，长期竞争力都会很弱', accent: green, items: [
		{ heading: '客户价值', body: '解决重要问题', meta: '付费、留存、转介绍' }, { heading: '× 市场空间', body: '市场足够大而且可触达', meta: '客户数量与扩张能力' }, { heading: '× 复制难度', body: '竞争者需要时间和组织才能追上', meta: '数据、系统、品牌和网络' },
	], footer: '低价、功能多和开发快通常只是暂时领先' },
	{ kind: 'content', section: '05 / 竞争壁垒', title: '护城河阶梯', subtitle: '越往上，复制越需要时间、数据、组织与信任', accent: green, items: [
		{ heading: '容易复制', body: '低价、单一功能、宣传口号' }, { heading: '需要积累', body: '客户案例、专业内容、交付模板' }, { heading: '较难复制', body: '合作渠道、标准化团队与系统' }, { heading: '长期形成', body: '信誉、客户关系、反馈数据与复购机制' },
	], footer: '政策知识 + 案例积累 + SOP + 合作伙伴关系，比单一模板更难复制' },
	{ kind: 'content', section: '05 / 竞争壁垒', title: '专业服务的增长飞轮', subtitle: '高质量交付让信任、推荐和学习持续累积', accent: green, items: [
		{ heading: '1 高质量交付', body: '准时、清晰、可追踪' }, { heading: '2 客户信任', body: '专业判断与透明沟通' }, { heading: '3 客户推荐', body: '让满意客户愿意介绍' }, { heading: '4 高匹配新客', body: '更合适的客户和项目' }, { heading: '5 学习与优化', body: '反馈进入团队与系统' },
	], footer: '每次项目结束后：记录反馈、总结经验、确认客户是否愿意推荐' },
	{ kind: 'content', section: '05 / 竞争壁垒', title: '未来 12 个月的建设计划', subtitle: '先建立可观察指标，再持续投入', accent: green, items: [
		{ heading: 'Q1 细分市场', body: '筛选高匹配客户，定义价值主张' }, { heading: 'Q2 交付质量', body: '建设 SOP、复核、知识库与权限' }, { heading: 'Q3 增长渠道', body: '伙伴合作、转介绍和内容信誉' }, { heading: 'Q4 产品化', body: '自动化重复流程，分析复购与毛利' },
	], footer: '仪表盘：客户获取成本 · 交付工时与毛利 · 转介绍与留存' },
	{ kind: 'content', section: '课后行动', title: '30 天，只做五个动作', subtitle: '每个动作都要有负责人和可验证结果', accent: red, items: [
		{ heading: '01 公司结构', body: '核查公司资料、股东协议和董事职责' }, { heading: '02 补助清单', body: '列出项目并标记红黄绿状态' }, { heading: '03 商业模式', body: '写清客户、痛点、交付和付费方式' }, { heading: '04 职责矩阵', body: '明确合同边界、审批和数据权限' }, { heading: '05 长期壁垒', body: '选择标准化、渠道或专业知识库中的一项' },
	], footer: '管理原则：先降低重大风险，再追求增长速度' },
	{ kind: 'content', section: '课程总结', title: '最后，记住五句话', subtitle: '把今天的判断带回真实业务', accent: red, items: [
		{ heading: '架构', body: '匹配阶段，不要为复杂而复杂' }, { heading: '补助', body: '遵守规则，资料从第一天开始留' }, { heading: '商业模式', body: '首先要有人持续愿意付费' }, { heading: '合作边界', body: '依靠书面约定，不依靠默契' }, { heading: '护城河', body: '来自长期积累，不来自单一功能' },
	], footer: 'Q & A · 感谢参与 · Seven' },
	{ kind: 'content', section: '参考资料', title: '政策与法规的官方核查入口', subtitle: '资料核对至 2026 年 10 月 29 日，适用条件以最新公告和企业事实为准', accent: blue, items: [
		{ heading: 'business.gov.au', body: '公司结构、注册、Grant Finder' }, { heading: 'ASIC', body: '董事职责、Director ID 与公司监管' }, { heading: 'ATO / 法律文本', body: 'GST、公司税率与纳税规则' }, { heading: 'R&DTI / DISR', body: '合格研发活动、证据与申请期限' }, { heading: 'Austrade / EMDG', body: '项目条件、协议与后续公告' }, { heading: 'Fair Work / OAIC', body: '雇主记录、工资单与隐私要求' },
	], footer: '本课为一般性教育分享，不代替注册税务代理、会计师或律师的个案建议' },
];
