import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { EmployerLinks } from '../EmployerLinks';
import { sources } from '../../data/sources';

export default function S10_Product() {
	return <DeckFrame tag="方向 3 · 谁能转" title="三条路进入 AI Product Manager" subtitle="入门要能为一个用户问题做决定，自己做出可测试的原型，并拿证据解释该不该上线。">
		<Table head={['你现在做什么', '能带过来什么', '转岗前补什么']} widths=".74fr 1fr 1.3fr" size={21} rows={[
			['PM / Product Owner', '用户研究、路线图、上线节奏', '做过一个会出错的 AI 功能，能定义确认、拒绝和撤回，拿测试结果决定放量。'],
			['BA / UX / 业务运营', '懂一线流程，能发现需求和例外', '亲自做出可点原型，比较两个方案，用试点结果说明先做哪一段。'],
			['AI Engineer / 数据', '懂模型行为、成本和技术取舍', '主导用户访谈、机会排序和产品指标，证明自己对发布后的结果负责。'],
		]} />
		<EmployerLinks jobs={[
			{ company: 'Suntory', logo: 'suntory', role: 'AI Product Manager · 企业内部 AI', location: '悉尼 · 路线图、治理、采用', href: sources.pm },
			{ company: 'MYOB', logo: 'myob', role: 'Principal AI Product Manager · 客户产品', location: '悉尼／墨尔本 · 已上线的 LLM 产品', href: sources.pmMyob },
		]} />
		<NoteLine><b>10 月同比</b>　Product Owner / Manager 广告 553 → 638（+15.4%），其中提到 AI 技能的 79 → 125（+58.2%）。</NoteLine>
		<Source links={[[ 'Lightcast · Product Owner / Manager', sources.pmVolume ]]} />
	</DeckFrame>;
}
