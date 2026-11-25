import { DeckFrame } from '../kit';
import StreamingPlayer from '../StreamingPlayer';

export default function S09_Observe() {
	return <DeckFrame tag="P12 · SYSTEM DESIGN" title="改变带宽，看播放器怎么选择" subtitle="固定档位验证链路，再切到 Auto。">
		<StreamingPlayer />
	</DeckFrame>;
}
