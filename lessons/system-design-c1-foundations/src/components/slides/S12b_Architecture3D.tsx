import { DeckFrame } from '../kit';
import Architecture3D from '../Architecture3D';

export default function S12b_Architecture3D() {
	return <DeckFrame tag="P14 · 第 3 步 · 互动" title="3D 看系统怎么长大" subtitle="从 v0 切到 v4，每一步只加一块组件。拖动画面换个角度看连线。" titleSize={52}>
		<Architecture3D />
	</DeckFrame>;
}
