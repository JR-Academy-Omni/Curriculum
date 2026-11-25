import { DeckFrame } from '../kit';
import RequestTimeline from '../RequestTimeline';

export default function S15b_Timeline() {
	return <DeckFrame tag="P18 · 第 5 步 · 互动" title="时间线：同一次上传，三种结局" subtitle="切换场景，拖动时间，看每个组件在做什么、用户此刻看到什么。" titleSize={52}>
		<RequestTimeline />
	</DeckFrame>;
}
