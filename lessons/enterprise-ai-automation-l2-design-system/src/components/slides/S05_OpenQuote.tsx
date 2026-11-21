import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S05_OpenQuote() {
	return (
		<DeckFrame tag="报价单 · 01" title="一份报价单，四步做出来" subtitle="客户询价经过确认，最后变成可以交付的报价文件。">
			<Panel>
				<Steps size={27} items={[
					<>起草报价 Markdown · <a href={assetPath('quote/quote.md')} target="_blank" rel="noreferrer">打开 quote.md</a></>,
					<>确认报价事实与条款 · <a href={assetPath('quote/quote-sot.md')} target="_blank" rel="noreferrer">打开 quote-sot.md</a></>,
					<>套用 Design System 并生成 · <a href={assetPath('quote/quote.html')} target="_blank" rel="noreferrer">打开报价 HTML</a></>,
					<>按 A4 导出，打开最终文件 · <a href={assetPath('quote/Cedar-Events-QT-2026-014-V1.pdf')} target="_blank" rel="noreferrer">打开报价 PDF</a></>,
				]} />
			</Panel>
		</DeckFrame>
	);
}
