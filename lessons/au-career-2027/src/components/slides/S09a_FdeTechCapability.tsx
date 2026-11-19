import { DeckFrame, Panel, colors } from '../kit';
import { NoteLine, Source } from '../career';
import { PartnerMarks } from '../PartnerMarks';
import { sources } from '../../data/sources';

const dimensions = [
	["Business Acumen", "理解企业如何创造收入、承担成本，判断问题是否值得投入。"],
	["Client Discovery", "主动调查陌生业务，核实假设、基线、决策权和项目边界。"],
	["Solution Architecture", "比较技术路线，根据客户限制解释架构和取舍。"],
	["Commercial Planning", "确定范围、完整预算、里程碑、依赖和停止条件。"],
	["AI Governance", "把数据主权、权限、安全、审批和责任落实为控制。"],
	["Engineering Execution", "在已有系统中实现接入，处理重复事件、重试和故障恢复。"],
	["AI Reliability", "建立 golden dataset 和验收标准，用评估证据检查质量、成本与延迟。"],
	["Stakeholder Leadership", "协调业务、IT、安全和预算负责人，在冲突与变化中推动决定。"],
	["Executive Communication", "面向决策者讲清投入、风险和收益依据，回应质疑并争取批准。"],
	["Enterprise Adoption", "推动用户采用，完成培训、试点判断、独立接手和运行维护。"],
];

export default function S09a_FdeTechCapability() {
	return <DeckFrame tag="FDE TECH · Founder + AI Engineer" title="十个维度，练出完整的 FDE 交付能力" titleSize={53}
		subtitle="看你能否解释决定、拿出证据，并在条件变化后调整。评审关注每个人的材料、现场表现和实际贡献。">
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
			{[dimensions.slice(0, 5), dimensions.slice(5)].map(group => <Panel key={group[0][0]} style={{ padding: '6px 20px' }}>
				<dl style={{ margin: 0 }}>
					{group.map(([name, description], index) => <div key={name} style={{ padding: '7px 0', borderTop: index ? '1px solid #10162f26' : undefined }}>
						<dt style={{ fontSize: 22, fontWeight: 800, color: colors.dark }}>{name}</dt>
						<dd style={{ margin: 0, fontSize: 20, lineHeight: 1.36 }}>{description}</dd>
					</div>)}
				</dl>
			</Panel>)}
		</div>
		<NoteLine><b>10 周怎么练</b>　第 1–2 周导师示范与跟练，第 3–4 周做有指导的案例，第 5–10 周独立提案、接受质询、修订并完成交付。</NoteLine>
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			<Source links={[[ '匠人 FDE Tech · 十项能力与评审方式', sources.jrFdeTech ]]} />
			<PartnerMarks height={44} />
		</div>
	</DeckFrame>;
}
