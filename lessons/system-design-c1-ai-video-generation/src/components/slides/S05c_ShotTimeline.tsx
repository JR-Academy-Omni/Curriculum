import { DeckFrame } from '../kit';
import ShotTimeline from '../ShotTimeline';

export default function S05c_ShotTimeline() {
	return <DeckFrame tag="P08 · 任务编排 · 互动" title="时间线：并发上限和返工怎么影响出片" subtitle="课堂假设：三镜分别生成 40、50、45 秒，审核 5 秒，合成 15 秒。" titleSize={50}>
		<ShotTimeline />
	</DeckFrame>;
}
