import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S10_Exercise() {
	return <DeckFrame tag="P10 · SYSTEM DESIGN" title="小组工作单 · 一次上传，一份成品" subtitle="每组画出读写路径和故障恢复。">
		<Panel>
			<Steps size={27} items={[
				"Draw the system boundary and label the upload, job creation, and status-read paths.",
				"Show where the idempotency key is stored.",
				"The worker exits after storing its output. Explain a safe recovery and the evidence you would check."
			]} />
			<p style={{ marginTop: 26, fontSize: 24 }}><a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">打开课堂工作单</a></p>
		</Panel>
	</DeckFrame>;
}
