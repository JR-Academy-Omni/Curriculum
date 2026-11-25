import { DeckFrame, Table, Takeaway } from '../kit';

export default function S07b_Consistency() {
	return <DeckFrame tag="P09 · 一致性" title="观看人数、弹幕、打赏，要多「准」" subtitle="数据复制到多个节点总有延迟。不同数据能接受的误差不一样，做法也不一样。">
		<div style={{ display: 'grid', gap: 22 }}>
			<Table size={22} widths="1fr 1.4fr 1.6fr" head={['数据', '能接受什么', '常见做法']} rows={[
				['在线观看人数', '晚几秒、差几十人都没关系', '各节点各自计数，定时汇总（最终一致）'],
				['弹幕', '晚到一两秒可以，同一个人的弹幕不能乱序', '按直播间分区进消息队列，同一分区内保持顺序'],
				['打赏扣款', '不能多扣，也不能少记', '写主库，带幂等编号，确认时读主库（强一致）'],
			]} />
			<Takeaway>一致性不是一个开关。按数据逐项问：错了会怎样？再决定花多少代价换「准」。</Takeaway>
		</div>
	</DeckFrame>;
}
