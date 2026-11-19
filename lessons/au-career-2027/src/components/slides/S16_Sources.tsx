import { DeckFrame, Panel } from '../kit';
import { Body, Source, Subheading, columns } from '../career';
import { sources } from '../../data/sources';

export default function S16_Sources() {
	return <DeckFrame tag="进一步核对" title="招聘、岗位与薪资资料" subtitle="招聘数据截至 2026 年 10 月。岗位说明和薪资来源核对于 2026 年 11 月 19 日。">
		<div style={{ ...columns, marginTop: 18 }}>
			<Panel><Subheading>劳动力与招聘广告</Subheading><Body>ABS 是调查估计。Lightcast 与 JSA 各自记录所覆盖的招聘广告。</Body>
				<Source links={[[ 'ABS 裁员表', sources.abs ], [ 'JSA 广告月报', sources.ivi ], [ 'Lightcast 全国数据', sources.market ], [ 'Lightcast 职业数据', sources.roles ], [ 'RBA 对 AI 与就业的观察', sources.rba ]]} />
			</Panel>
			<Panel><Subheading>薪资与雇主要求</Subheading><Body>薪资按来源的城市、资历和口径阅读。销售达标收入含浮动佣金。</Body>
				<Source links={[[ '工程 · Re:Sourced', sources.engineerPay ], [ '业务交付 · Galileo', sources.businessPay ], [ '产品 · Parity', sources.pmPay ], [ '销售 · Sales Recruit Partners', sources.salesPay ]]} />
			</Panel>
		</div>
	</DeckFrame>;
}
