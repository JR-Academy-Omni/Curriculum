import { DeckFrame, Panel, Steps } from '../kit';
import { assetPath } from '../ui';

export default function S13_Materials() {
	return <DeckFrame tag="P16 · SYSTEM DESIGN" title="把直播链路画回自己的项目" subtitle="回放、工作单和可重跑的转码脚本。">
		<Panel>
			<Steps size={27} items={[
				<a href={assetPath("worksheet.html")} target="_blank" rel="noreferrer">课堂工作单</a>,
				<a href={assetPath("lab/hls/master.m3u8")} target="_blank" rel="noreferrer">主播放列表</a>,
				<a href={assetPath("lab/streaming-lab.zip")} target="_blank" rel="noreferrer">FFmpeg 练习包</a>
			]} />
		</Panel>
	</DeckFrame>;
}
