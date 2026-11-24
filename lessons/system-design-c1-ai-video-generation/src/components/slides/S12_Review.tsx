import { DeckFrame, Panel, Steps } from '../kit';

export default function S12_Review() {
	return <DeckFrame tag="P12 · SYSTEM DESIGN" title="用两份清单证明返工范围" subtitle="把选片版本与最终成片的验证一起交付。">
		<Panel>
			<Steps size={27} items={[
				"v1 绑定原来的三个镜头版本。",
				"v2 只换 shot-02-v2，首尾两镜仍引用原对象。",
				"同一规格和字幕时间线重新生成成片。",
				"播放新版，核对第二镜外观、剪辑顺序和字幕。"
			]} />
		</Panel>
	</DeckFrame>;
}
