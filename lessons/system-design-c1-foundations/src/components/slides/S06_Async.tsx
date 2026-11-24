import { DeckFrame } from '../kit';
import AsyncTopology from '../AsyncTopology';

export default function S06_Async() {
	return <DeckFrame tag="P06 · SYSTEM DESIGN" title="方案 B · 先返回任务编号" subtitle="把请求、后台任务和文件读取分别画清。">
		<AsyncTopology />
	</DeckFrame>;
}
