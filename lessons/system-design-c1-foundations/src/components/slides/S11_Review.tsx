import { DeckFrame, Table } from '../kit';

export default function S11_Review() {
	return <DeckFrame tag="P11 · SYSTEM DESIGN" title="沿图评审一份设计" subtitle="看状态归属、失败恢复和观测证据。">
		<Table size={24} head={["检查", "参考做法", "验证证据"]} rows={[
			["重复创建", "唯一约束保证一个业务 Job", "两次相同请求返回同一 job_id"],
			["重复处理", "核对输出键、来源和作业版本", "一个有效成品，无重复处理"],
			["刷新可播", "提交 ready 和成品引用", "刷新后状态和播放一致"],
			["积压", "记录任务年龄及进出速率", "能分辨消费者不足和突发输入"]
		]} />
	</DeckFrame>;
}
