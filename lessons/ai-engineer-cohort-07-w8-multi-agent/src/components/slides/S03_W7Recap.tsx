import { Page, Say, Tbl } from './_parts';

export default function S03_W7Recap() {
	return (
		<Page part="第 1 部分 · 接上 W7" title="W7 讲过的，今天直接用">
		  <Tbl size={21} widths="200px 1fr 1fr" head={['W7', '一句话', '今天乘以 N，在哪出现']} rows={[
		    ['谁决定下一步', '代码定是 Workflow，模型定是 Agent；能写死就写死', '下一页：阶梯多一级'],
		    ['边界写在代码里', 'Prompt 是请求，hook 和工具内部检查是保证', '第 5 部分：每个 Agent 的工具和权限'],
		    ['交接单', '接手的人不读运行记录就能开工', '第 6 部分：委派契约，接手的是另一个 Agent'],
		    ['怎么停', '步数、预算、超时，都在模型外面', '第 7 部分：一个 session，所有线程共用预算'],
		    ['出错怎么办', '读可以重试，写要幂等键；先分清错误类型', '第 7 部分：部分失败、重复、矛盾、错误累积'],
		  ]} />
		  <Say>今天不重讲这些。Multi-agent 不是新问题，是 W7 的每个问题乘以 N。</Say>
		</Page>
	);
}
