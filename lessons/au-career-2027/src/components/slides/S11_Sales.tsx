import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { EmployerLinks } from '../EmployerLinks';
import { sources } from '../../data/sources';

export default function S11_Sales() {
	return <DeckFrame tag="方向 4 · 谁能转" title="三条路进入 IT Sales" subtitle="卖 AI 客服工具时，先找到有业务痛点和预算的人，再和客户定试点、走采购、签合同。">
		<Table head={['你现在做什么', '第一站可以看什么', '转岗前补什么']} widths=".94fr .98fr 1.2fr" size={21} rows={[
			['客服 / 招聘 / 行业运营', 'SDR / BDR · 拓客、筛商机', '选一批目标客户，写触达、做需求访谈，拿到双方确认的下一次会谈。'],
			['技术实施 / 咨询 / 工程', 'Sales Engineer / 售前 · 做验证', '把系统能力讲成客户收益，定试点指标，回答数据权限、成本和集成问题。'],
			['已有 B2B 销售经验', 'Account Executive · 成交', '证明你背过业绩指标，找过预算人，处理过采购阻力并推进到签约。'],
		]} />
		<EmployerLinks jobs={[
			{ company: 'Salesforce', logo: 'salesforce', role: 'Commercial AE · 5 年以上带指标销售经验', location: '悉尼／墨尔本', href: sources.salesAe },
			{ company: 'Google Cloud', logo: 'google', role: 'AI Sales Specialist · 10 年企业技术销售经验', location: '悉尼／墨尔本', href: sources.googleCloudSales },
			{ company: 'OpenAI', logo: 'openai', role: 'Account Director · 10 年以上 SaaS／PaaS 销售经验', location: '悉尼', href: sources.sales },
		]} />
		<NoteLine><b>澳洲市场</b>　ICT Sales 月均广告 27.0 → 25.7（10 月止三个月同比）。全行业销售提到 AI 技能的广告 228 → 486（10 月同比）。</NoteLine>
		<Source links={[[ 'Salesforce BDR · 拓客入门', sources.salesSdr ], [ 'JSA ICT Sales', sources.ict ], [ 'Lightcast 全行业销售', sources.salesSkills ]]} />
	</DeckFrame>;
}
