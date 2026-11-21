import { DeckFrame, Table } from '../kit';
import { assetPath } from '../ui';


export default function S06_Scope() {
	return (
		<DeckFrame tag="报价单 · 02" title="先把客户需求写成报价 Markdown" subtitle="客户询价：我们想办一场工作坊，你们能帮忙准备、到场带课并提供材料吗？">
			<Table head={['客户说的','报价里写清楚','报价前确认']} rows={[[ '帮忙准备','工作坊策划 4 小时，含一次方案修订','确认议程、对象和时长'],['到场带课','一次现场工作坊，执行 2 小时','确认日期、场地及是否在布里斯班'],['提供材料','配套材料包 1 套','确认内容及是否需要印刷']] } widths="1fr 1.45fr 1.35fr" size={26}/><p style={{fontSize:24,marginTop:26}}>将明细和待确认项写入 <a href={assetPath('quote/quote.md')} target="_blank" rel="noreferrer">quote.md</a>。保留原始依据和需要追问的问题。</p>
		</DeckFrame>
	);
}
