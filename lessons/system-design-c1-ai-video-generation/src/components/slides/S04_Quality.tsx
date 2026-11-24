import { DeckFrame, Table } from '../kit';

export default function S04_Quality() {
	return <DeckFrame tag="P04 · SYSTEM DESIGN" title="什么样的镜头可以选入成片" subtitle="同一套标准用于两种方案。">
		<Table size={24} head={["维度", "要看的证据", "采取的动作"]} rows={[
			["产品外观", "与参考图一致的颜色与轮廓", "记录理由并换候选"],
			["符合分镜", "指定机位、动作、时长", "调整该镜头输入"],
			["镜头连续性", "相邻镜头的方向与构图", "必要时联动修改相邻镜头"],
			["媒体规格", "可读的尺寸、帧率和时长", "FFmpeg 统一输出规格"]
		]} />
	</DeckFrame>;
}
