import { Page, Say, Tbl } from './_parts';

export default function S30b_ModelRouting() {
	return (
		<Page part="第 5 部分" at={['setup_agents.py', 'settings.py']} title="成本和延迟预算：按子任务选模型">
		  <Tbl size={21} widths="1fr 1fr 1fr 1fr" head={['子任务', '需要什么', '选什么模型', 'CareKind demo']} rows={[
		    ['规划、派活、汇总', '判断和取舍', '中高档', 'Shift lead：Sonnet 5.5'],
		    ['拿不准的判断', '更强的推理，次数少', '最强的，需要时才问', 'Opus 5.5 advisor'],
		    ['按模板起草', '照格式写', '中档', 'Note drafter：Sonnet 5.5'],
		    ['对照条款、查缺项', '只读，规则明确', '便宜、快', 'Policy checker：Haiku 5.5'],
		  ]} />
		  <Say>预算设在模型外面：session 金额上限、墙钟上限、线程上限。模型路由的完整做法在 W12。</Say>
		</Page>
	);
}
