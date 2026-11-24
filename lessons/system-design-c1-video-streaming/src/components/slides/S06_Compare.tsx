import { DeckFrame, Table } from '../kit';

export default function S06_Compare() {
	return <DeckFrame tag="P06 · SYSTEM DESIGN" title="什么时候用全员实时" subtitle="用谁需要上麦、观看规模和延迟预算做选择。">
		<Table size={24} head={["维度", "全部走实时媒体", "嘉宾实时 + 观众 HLS"]} rows={[
			["互动", "所有人可进入实时拓扑", "嘉宾实时，观众接受缓冲"],
			["扩容", "媒体节点维护连接与订阅", "相同分片经 CDN 缓存和分发"],
			["延迟", "面向对话交互", "打包和缓冲增加时间"],
			["故障", "关注媒体连接和重连", "分别观测嘉宾和观看端"]
		]} />
	</DeckFrame>;
}
