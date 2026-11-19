import { DeckFrame, Table } from '../kit';
import { NoteLine, Source } from '../career';
import { sources } from '../../data/sources';

export default function S12_Pay() {
	return <DeckFrame tag="比较收入" title="拿到两个机会，先把薪资口径对齐" subtitle="澳元年薪参考。城市、资历和岗位职责不同，先对照自己的目标 JD。">
		<Table head={['方向', '底薪参考 · AUD', '适用口径']} widths="1fr 1fr 1.65fr" size={23} highlightCol={1} rows={[
			['AI Engineer', 'A$150k–195k', 'Robert Half 全国新聘年基本薪资 · P25 至 P75'],
			['FDE Business', 'A$130k–170k', '悉尼大型企业 · 相近的 AI 转型／采用岗'],
			['FDE Tech', 'A$180k–240k', '悉尼资深 FDE · 布里斯班 A$160k–215k'],
			['AI Product Manager', 'A$160k–190k', 'Parity 跨行业 AI PM 样本'],
			['IT Sales', 'A$125k–140k', '中端市场 AE 底薪 · 达标佣金另算'],
		]} />
		<NoteLine><b>谈 offer 时分开问</b>　底薪、super、奖金或佣金、股权、合同期限。销售 OTE 是达标收入。底薪 A$130k 加达标佣金 A$60k，OTE 为 A$190k。</NoteLine>
		<Source links={[[ 'AI 工程 · Robert Half', sources.aiRh ], [ 'FDE Tech · Re:Sourced', sources.engineerPay ], [ '业务交付 · Galileo', sources.businessPay ], [ '产品 · Parity', sources.pmPay ], [ '销售 · Sales Recruit Partners', sources.salesPay ]]} />
	</DeckFrame>;
}
