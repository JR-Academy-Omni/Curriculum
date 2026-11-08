import { DeckFrame, Table, Takeaway, colors } from '../kit';

export default function P04_JRCases() {
	return <DeckFrame tag="为什么是 GitHub · 真实例子" title="匠人自己就是这样跑的" subtitle="下面每一条，都是匠人仓库里正在运行的 GitHub 自动化。" accent={colors.red}>
		<Table size={21} widths="1.1fr 1.3fr 1.6fr" head={['做什么', '怎么触发', '效果']} rows={[
			['知识库自动入库', '规范和 PRD 文档一推到 main', '几分钟后，AI 助手就能搜到新写的规范，不用人去「同步」'],
			['每日 SEO 体检', '每天早上 6 点定时', '团队上班前，体检结果已经出来了'],
			['GEO 内容工厂', '每周一定时 + AI 可见度报告一更新就触发', '上一步的报告推进仓库，下一步自动开工：这就是接力'],
			['课件网站', '课件推到 main', '自动构建、发布到网站，不用手动上传'],
			['营销看板', '直接读仓库 main 上的文档', '改完文档推上去，看板就是最新的'],
		]} />
		<div style={{ marginTop: 20 }}><Takeaway>共同点：资料只有一份，在仓库里。改资料就是改业务，自动化跟着资料走。</Takeaway></div>
	</DeckFrame>;
}
