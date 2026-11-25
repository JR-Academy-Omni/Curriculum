import { DeckFrame, Table } from '../kit';

export default function S14_Failures() {
	return <DeckFrame tag="P14 · 第 5 步" title="每个组件挂了会怎样" subtitle="沿着图逐个问：它挂了，用户看到什么？有没有第二个顶上？">
		<Table size={22} widths="1fr 1.35fr 1.35fr" head={['组件', '挂了会怎样', '常见做法']} rows={[
			['负载均衡', '所有请求进不来', '用云厂商托管的，自带多副本'],
			['某台 Web 服务', '分到它的请求失败', '负载均衡做健康检查，自动摘掉'],
			['数据库', '查不了状态、建不了任务', '主从复制，主库挂了切到从库'],
			['缓存', '请求全打到数据库', '数据库要能扛住，缓存只是加速'],
			['Worker', '转码做到一半中断', '没确认的消息会重新投递，换一个 Worker 再做'],
		]} />
	</DeckFrame>;
}
