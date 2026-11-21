import { DeckFrame, Table } from '../kit';


export default function S07_Calculate() {
	return (
		<DeckFrame tag="报价单 · 03" title="逐行算钱，再算整单" subtitle="用已经确认的数量和单价。例中币种为 AUD，税费按本案例资料给定的 10% 计算。">
			<Table head={['交付项','数量','单价','行金额（AUD）']} rows={[[ '工作坊策划','4 小时','180.00','720.00'],['现场工作坊执行','2 小时','250.00','500.00'],['配套材料包','1 套','120.00','120.00'],['小计','—','—','1,340.00'],['税额','10%','—','134.00'],['总计','—','—',<strong>1,474.00</strong>]]} widths="1.6fr 1fr 1fr 1fr" size={23} highlightCol={3} />
		</DeckFrame>
	);
}
