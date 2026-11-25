import { DeckFrame, Table } from '../kit';

export default function S13_ComponentMap() {
	return <DeckFrame tag="P13 · 速查表" title="遇到什么问题，加什么组件" subtitle="拍下这张表。练习和后两节都会用到。">
		<Table size={22} widths="1.25fr .95fr 1.3fr" head={['遇到的问题', '加的组件', '要付出的代价']} rows={[
			['大文件塞满磁盘，元数据要查询', '数据库 + 对象存储', '两边的数据可能对不上'],
			['一台机器扛不住，也不能停机', '负载均衡 + 无状态服务', '状态必须放到共享存储'],
			['读请求太多，数据库很忙', '缓存', '可能读到旧数据'],
			['任务太慢，用户不该一直等', '消息队列 + Worker', '重复投递、积压、要管任务状态'],
			['用户离各地很远，下载慢', 'CDN（第 2 节）', '缓存更新慢、回源流量'],
		]} />
	</DeckFrame>;
}
