import { DeckFrame } from '../kit';
import StreamingPlayer from '../StreamingPlayer';

export default function S02_Watch() {
	return <DeckFrame tag="P03 · SYSTEM DESIGN" title="同一条视频的两档画质" subtitle="切换 720p 与 360p，观察实际解码尺寸。">
		<StreamingPlayer />
	</DeckFrame>;
}
