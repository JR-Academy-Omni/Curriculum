import ComponentSlide from '../ComponentSlide';

export default function S10_Cache() {
	return <ComponentSlide tag="P10 · 组件 3" title="缓存：常读的数据放在更快的地方" subtitle="问题：查进度、看视频列表的请求远多于上传，数据库被读得很忙。"
		flow={[{ title: 'Web 服务', sub: '先查缓存' }, { title: '缓存', sub: '如 Redis，放在内存', hot: true }, { title: '数据库', sub: '缓存没有才来查' }]}
		what={<>把常读的结果放在内存里（如 Redis）。先查缓存，查不到再查数据库，并把结果写回缓存。</>}
		solves={<>内存比磁盘快几个数量级（见 P06），大部分读请求不再打到数据库，响应更快，数据库压力更小。</>}
		cost={<>缓存里的数据可能是旧的。要决定多久过期、数据更新时要不要删缓存。适合读多写少、能接受短暂不一致的数据。</>}
	/>;
}
