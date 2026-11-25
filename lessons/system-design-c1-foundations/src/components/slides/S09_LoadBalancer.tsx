import ComponentSlide from '../ComponentSlide';

export default function S09_LoadBalancer() {
	return <ComponentSlide tag="P09 · 组件 2" title="负载均衡与无状态服务：一台不够就加几台" subtitle="问题：一台 Web 服务扛不住高峰，也不能停机升级。"
		flow={[{ title: '浏览器', sub: '所有请求' }, { title: '负载均衡', sub: '分给健康的机器', hot: true }, { title: 'Web 服务 × N', sub: '每台都一样' }, { title: '数据库 / 对象存储', sub: '状态都放这里' }]}
		what={<>负载均衡站在最前面，把请求分给后面多台一样的服务器，并自动跳过挂掉的那台。</>}
		solves={<>想扛更多流量就加机器（横向扩展）；一台坏了或要升级，其余照常服务。</>}
		cost={<>服务必须「无状态」：登录信息、上传进度不能存在某台机器的内存或磁盘里，要放到共享的存储中。</>}
	/>;
}
