import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { sources } from '../../data/sources';

export default function SalesComparison() {
	return <DeckFrame tag="方向 4 · 企业技术销售" title="IT Sales 和房产、美妆销售有什么区别？" titleSize={52}
		subtitle="先看卖给个人还是企业。卖给企业之后，再看是中小企业客户还是 Enterprise 大客户。">
		<Table head={['比什么', 'B2C · 卖给个人', 'B2B · 中小企业客户', 'B2B · Enterprise 大客户']} widths=".53fr 1.02fr 1.06fr 1.31fr" size={22} rows={[
			['客户是谁', '家庭买自住房，顾客买护肤品。用个人或家庭预算。', '例如小公司为客服团队买 AI 工具。用公司预算，老板或部门负责人常能拍板。', '例如银行为多个部门采购 AI 平台。使用者、技术负责人、预算负责人和签约方分属不同团队。'],
			['客户买什么', '住房满足居住需求，护肤品满足个人使用需求。', '买一个业务结果，例如少漏回咨询，减少重复处理。', '买可规模化部署的业务能力。要证明它能接入现有系统、满足安全要求，并达到业务指标。'],
			['怎么达成交易', '顾客选产品。住宅还要协调买卖双方、出价和交割。', '找清负责人，演示实际场景，谈价格和上线计划。有需要时做小范围试点。', '协调业务、IT、安全、法务和采购，经试点和审查进入合同。上线后继续看采用、续约和扩容。'],
		]} />
		<NoteLine>同样卖 AI 工具。给小公司卖一个团队的方案，和给大型企业卖跨部门平台，要说服的人和需要证明的事都不同。</NoteLine>
		<Source links={[[ 'Salesforce · Commercial AE', sources.salesAe ], [ 'OpenAI · Enterprise Account Director', sources.sales ]]} />
	</DeckFrame>;
}
