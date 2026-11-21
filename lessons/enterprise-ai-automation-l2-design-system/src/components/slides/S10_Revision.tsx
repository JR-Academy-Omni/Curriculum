import { DeckFrame, Table } from '../kit';
import { assetPath } from '../ui';

export default function S10_Revision() {
	return (
		<DeckFrame tag="报价单 · 06" title="客户追加一小时，怎样出 V2？" subtitle="先在 quote-sot.md 增加 V2，把现场执行从 2 小时改到 3 小时，再生成 HTML 和 PDF。">
			<Table head={['字段','V1 · 2 小时','V2 · 3 小时']} rows={[[ '执行费','AUD 500.00','AUD 750.00'],['整单小计','AUD 1,340.00','AUD 1,590.00'],['税额','AUD 134.00','AUD 159.00'],['总计','AUD 1,474.00','AUD 1,749.00'],['30% 订金','AUD 442.20','AUD 524.70']]} widths="1.15fr 1fr 1fr" size={23} highlightCol={2} /><p style={{fontSize:24,marginTop:18}}><a href={assetPath('quote/quote.html')} target="_blank" rel="noreferrer">打开报价单，切换到 V2 ↗</a></p>
		</DeckFrame>
	);
}
