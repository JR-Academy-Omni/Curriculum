import { DeckFrame, Label, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S17_Exercise() {
	return <DeckFrame tag="P20 · 小组练习" title="新题：订单报表导出" subtitle="运营在后台点「导出本月订单」，系统生成 Excel，几分钟后给下载链接。">
		<Panel>
			<Label>Use the 5 steps · 20 minutes</Label>
			<div style={{ marginTop: 18 }}><Steps size={24} items={[
				'Requirements: list the functional and non-functional requirements.',
				'Estimate: 600 exports per peak hour, 2 minutes each, 20 MB per file. How many run at once? How much new storage per peak hour?',
				'Draw the high-level design. Label the database, object storage, queue and workers.',
				'Deep dive: an operator clicks Export twice. How do you produce only one file?',
				'Failures: a worker stops halfway, or the database is slow. What does the operator see?',
			]} /></div>
			<p style={{ marginTop: 20, fontSize: 23 }}><a href={assetPath('worksheet.html')} target="_blank" rel="noreferrer">打开课堂工作单</a></p>
		</Panel>
	</DeckFrame>;
}
