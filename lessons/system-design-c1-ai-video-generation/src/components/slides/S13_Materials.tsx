import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S13_Materials() {
	return <DeckFrame tag="P13 · SYSTEM DESIGN" title="从成片回查每个镜头" subtitle="工作单、两版成片和可重跑的脚本。">
		<Panel>
			<Steps size={27} items={[
				<a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">课堂工作单</a>,
				<a href={assetPath("lab/cut-v1.webm")} target="_blank" rel="noreferrer">旧版成片</a>,
				<a href={assetPath("lab/cut-v2.webm")} target="_blank" rel="noreferrer">修订版成片</a>,
				<a href={assetPath("lab/film-lab.zip")} target="_blank" rel="noreferrer">FFmpeg 练习包</a>
			]} />
		</Panel>
	</DeckFrame>;
}
