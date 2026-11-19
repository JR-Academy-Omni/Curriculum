import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { PartnerMarks } from '../PartnerMarks';

export default function PartnerSales() {
	return <DeckFrame tag="合作伙伴学习资源与实训" title="IT Sales 实训 · 用 OpenAI 和 Claude 练企业销售" titleSize={50}
		subtitle="从匠人的合作伙伴学习资源起步。拿同一个客户需求练产品选型、演示和试点提案。">
		<Table head={['怎么练', '以研发团队想缩短代码审查时间为例', '留下什么销售材料']} widths=".58fr 1.8fr 1fr" size={22} rows={[
			['学产品', '用 OpenAI PartnerU 和 Claude 学习资源弄懂 Codex、Claude Code 和企业部署选项。', '产品对照表，列出适用场景与部署限制。'],
			['做客户访谈', '问清每周多少 PR、平均等多久、谁管代码权限、谁批预算。约定下一次会议。', '客户访谈记录、决策人和下一步。'],
			['做演示和试点提案', '选一段客户流程做演示。提议先试一个仓库，约定审查耗时、误报和试点成本怎么量。', '演示、试点范围、成功指标和费用估算。'],
			['跟进商机', '演练安全、采购和预算异议。有真实项目时随团队参加客户会议，记录反馈并推动下一步。', '商机跟进记录、客户反馈和个人贡献。'],
		]} />
		<NoteLine>每轮做完一套销售材料。求职时拿一个案例讲清你怎样从客户问题推进到试点决定。</NoteLine>
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<Source links={[[ 'OpenAI 企业产品', 'https://openai.com/business/' ], [ 'Claude 企业产品', 'https://www.anthropic.com/enterprise' ]]} />
			<PartnerMarks height={45} />
		</div>
	</DeckFrame>;
}
