import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';


export default function S11_Export() {
	return (
		<DeckFrame tag="报价单 · 07" title="从当前 HTML 导出最终 PDF" subtitle="用浏览器预览 A4 打印版，检查同一份文件的内容和排版。">
			<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28}}><Panel><h2 style={{fontSize:31,marginTop:0}}>打印之前</h2><Steps items={['选择正确版本并打开打印预览','纸张选 A4，关闭浏览器页眉页脚','检查表格、合计区与条款分页']} /></Panel><Panel><h2 style={{fontSize:31,marginTop:0}}>保存之后</h2><Steps items={['用客户名、编号、版本命名','重新打开 PDF，核对日期、币种和金额','确认 PDF 和本版 HTML 的范围、价格一致']} /><p style={{ fontSize: 23 }}><a href={assetPath('quote/Cedar-Events-QT-2026-014-V1.pdf')} target="_blank" rel="noreferrer">打开最终报价 PDF ↗</a></p></Panel></div>
		</DeckFrame>
	);
}
