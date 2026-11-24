import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S13_Materials() {
	return <DeckFrame tag="P13 · SYSTEM DESIGN" title="带一张完整设计图离开课堂" subtitle="把这套方法带进后面的直播案例。">
		<Panel>
			<Steps size={27} items={[
				<a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">课堂工作单</a>,
				<a href={assetPath("result.html")} target="_blank" rel="noreferrer">完整架构图和执行轨迹</a>
			]} />
		</Panel>
	</DeckFrame>;
}
