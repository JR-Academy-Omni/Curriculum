import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S10_Exercise() {
	return <DeckFrame tag="P13 · SYSTEM DESIGN" title="小组设计 · 两位嘉宾，万人观看" subtitle="画两条媒体路径，算带宽，标出故障影响。">
		<Panel>
			<Steps size={27} items={[
				"Draw the media paths for two guests and 10,000 viewers.",
				"Estimate egress when 40% watch at 3 Mbps and the rest at 1 Mbps.",
				"The host goes offline for eight seconds. Describe recovery and name one measurement."
			]} />
			<p style={{ marginTop: 26, fontSize: 24 }}><a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">打开课堂工作单</a></p>
		</Panel>
	</DeckFrame>;
}
