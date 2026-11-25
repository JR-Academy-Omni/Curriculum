import { DeckFrame, Table, Takeaway } from '../kit';

export default function S05b_Reliability() {
	return <DeckFrame tag="P07 · 任务可靠性" title="长任务怎样不丢、不重复" subtitle="L01 讲了重试必须幂等。这里把每个状态谁来写、什么时候写讲清楚。">
		<div style={{ display: 'grid', gap: 22 }}>
			<Table size={21} widths="170px 1.2fr 1.5fr" head={['状态', '什么时候写', '关键规则']} rows={[
				['queued', '提交分镜后', '任务记录和待发消息（outbox）在同一个事务里写入，避免建了任务却没发消息'],
				['processing', 'Worker 领取任务时', 'Worker 拿到有时限的租约；超时没续约，别的 Worker 可以接手'],
				['ready', '镜头素材写好之后', '带版本号条件更新：版本对得上才写入，两个 Worker 不会互相覆盖'],
				['failed', '不能重试或超过次数', '保留失败原因和已生成的镜头，返工只重做这一镜'],
			]} />
			<Takeaway>先把任务改成 ready，再确认消息。顺序反过来，Worker 一挂，任务就卡在 processing。</Takeaway>
		</div>
	</DeckFrame>;
}
