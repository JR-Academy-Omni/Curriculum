import { DeckFrame, Panel, Steps, PromptCard } from '../kit';
import { assetPath } from '../ui';

export default function S09_Build() {
	return (
		<DeckFrame tag="报价单 · 05" title="用 SoT 和 Design System 生成 HTML" subtitle="quote-sot.md 提供内容，design-system.md 决定版式。">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 28 }}>
				<Panel>
					<Steps size={25} items={[
						<><a href={assetPath('quote/quote-sot.md')} target="_blank" rel="noreferrer">quote-sot.md</a> · 已确认的报价</>,
						<><a href={assetPath('quote/design-system.md')} target="_blank" rel="noreferrer">design-system.md</a> · 品牌与 A4 版式</>,
						<><a href={assetPath('quote/quote.html')} target="_blank" rel="noreferrer">quote.html</a> · 浏览与打印</>,
					]} />
				</Panel>
				<PromptCard label="交给 Codex 的任务" size={22}>{'只从 quote-sot.md 读取客户、明细、税率与条款，按 design-system.md 生成 A4 可打印的 quote.html。\n逐行算数量 × 单价，再计算小计、税额、总额与订金。保留币种和两位小数。\n打开 HTML 核对。发现业务内容需要修改，先回到 SoT，再重新生成。'}</PromptCard>
			</div>
		</DeckFrame>
	);
}
