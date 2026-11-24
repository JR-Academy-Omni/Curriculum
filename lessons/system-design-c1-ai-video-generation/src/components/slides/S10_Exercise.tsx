import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S10_Exercise() {
	return <DeckFrame tag="P10 · SYSTEM DESIGN" title="小组设计 · 只重做出错的镜头" subtitle="把返工落实到状态、版本和验证。">
		<Panel>
			<Steps size={27} items={[
				"Draw separate generation and rendering paths and name their state owners.",
				"Shot 2 changes the product colour. Write a revised manifest that replaces only that shot.",
				"List the checks that must pass before the new cut becomes the current version."
			]} />
			<p style={{ marginTop: 26, fontSize: 24 }}><a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">打开课堂工作单</a></p>
		</Panel>
	</DeckFrame>;
}
