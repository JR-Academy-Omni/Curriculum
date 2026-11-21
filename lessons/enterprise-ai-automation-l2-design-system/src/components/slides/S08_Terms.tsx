import { DeckFrame, Panel, PromptCard, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S08_Terms() {
	return (
		<DeckFrame tag="报价单 · 04" title="确认草稿，形成报价 SoT" subtitle="SoT 是后续 HTML 和 PDF 都要遵循的定稿。变更先写回这里。">
			<div style={{ display: 'grid', gridTemplateColumns: '1.12fr 1fr', gap: 28 }}>
				<Panel>
					<Steps items={['对照原始询价和单价表，确认范围、计量单位、数量和单价。','确认客户、编号、币种、税率、有效期、付款和书面接受方式。','把未确认的日期和场地写清，报价变更记录在同一份资料里。']} />
					<p style={{ fontSize: 23 }}><a href={assetPath('quote/quote-sot.md')} target="_blank" rel="noreferrer">打开完整 quote-sot.md</a></p>
				</Panel>
				<PromptCard label="确认后的 Markdown 字段" size={21}>{'- 编号：QT-2026-014\n- 有效期至：2026-11-13\n- 币种：AUD\n- 税率（%）：10\n- 订金（%）：30\n- 余款期限（天）：7\n- 排除项：布里斯班以外的差旅费用'}</PromptCard>
			</div>
		</DeckFrame>
	);
}
