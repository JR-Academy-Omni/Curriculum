import { DeckFrame, Table } from '../kit';

export default function S03_Requirements() {
	return <DeckFrame tag="P03 · SYSTEM DESIGN" title="明确交付、时限与边界" subtitle="把用户需求写成可观察的系统行为。">
		<Table size={24} head={["所需功能", "约束或可观察证据"]} rows={[
			["上传", "上传成功才创建处理任务。"],
			["等待", "长任务先返回编号，页面可以退出。"],
			["查询", "刷新后仍能用编号读取状态。"],
			["播放", "存在可授权播放的成品，且任务已为 ready。"],
			["隐私", "仅授权人可读任务和播放地址。"]
		]} />
	</DeckFrame>;
}
