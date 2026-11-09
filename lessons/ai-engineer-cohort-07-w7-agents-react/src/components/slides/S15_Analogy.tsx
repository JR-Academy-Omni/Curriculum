import { Page, Tbl } from './_parts';

export default function S15_Analogy() {
	return (
		<Page part="第 2 部分" title="还是那家公司，客服多了一项权力">
		  <Tbl size={26} widths="1fr 1.4fr" head={['技术概念', '在公司里']} rows={[
		    ['模型', '前台客服专员，碰不到任何系统'],
		    ['Action', '客服填一张工单'],
		    ['Observation', '后台写回来的回执'],
		    ['循环', '客服看完回执，自己决定下一张单'],
		    ['max steps', '一个案子最多来回几轮：派单、看回执'],
		    ['人工审批', '动钱的单要主管签字'],
		    ['交接', '客服下班前写的交接条'],
		  ]} />
		</Page>
	);
}
