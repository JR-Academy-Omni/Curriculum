import { DeckFrame, Table } from '../kit';

export default function S07_States() {
	return <DeckFrame tag="P07 · SYSTEM DESIGN" title="给作业状态一个唯一的所有者" subtitle="Job 持有业务状态，队列传递工作。">
		<Table size={24} head={["状态", "写入条件", "页面行为"]} rows={[
			["queued", "Job 与 outbox 已写入", "显示已排队"],
			["processing", "Worker 获得有效处理尝试", "提示等待，可刷新"],
			["ready", "成品已存在且 Job 引用提交", "展现播放入口"],
			["failed", "错误不能重试或已达上限", "展示失败原因和可选操作"]
		]} />
	</DeckFrame>;
}
