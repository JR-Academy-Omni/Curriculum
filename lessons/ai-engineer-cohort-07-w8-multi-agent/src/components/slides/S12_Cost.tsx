import { Page, Say, Tbl } from './_parts';

export default function S12_Cost() {
	return (
		<Page part="第 2 部分" title="拆开以后，多付的是什么">
		  <Tbl size={23} widths="210px 1fr 1fr" head={['', 'Single agent', 'Multi-agent']} rows={[
		    ['Token', '一个上下文', '每个线程都要重新读任务和资料，协调者还要读回报'],
		    ['延迟', '一条线做完', '并行能省时间；派活、等回报、汇总会花时间'],
		    ['出错的地方', '一个循环', '每个线程都会失败，还多了重复、冲突、卡住'],
		    ['排查', '一份运行记录', '多条线程，要能拼回同一次运行'],
		    ['责任', '一个 Agent 的输出', '汇总的结论是谁的？要能追到每条来源'],
		  ]} />
		  <Say>收益要盖过这些成本才成立。协调开销怎么收、怎么用同一组任务实测，第 7 部分讲。</Say>
		</Page>
	);
}
