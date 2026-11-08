import { colors } from '../ui';
import { Page, Say, Tbl } from './_parts';

export default function S11_Tradeoff() {
	return (
		<Page part="第 1 部分" title="Agent 不是升级版，是另一种取舍">
		  <Tbl size={26} head={['', 'Workflow', 'Agent']} widths="170px 1fr 1fr" rows={[
		    ['路径', '事先写好', '运行时才知道'],
		    ['适合', '步骤能列出来的任务', '下一步取决于上一步结果的任务'],
		    ['可预测性', '高，容易测试', '低，要看运行记录'],
		    ['成本和延迟', '低', '更高，多轮调用'],
		    ['新风险', '少', '不停、重复执行、越权'],
		  ]} />
		  <Say bg={colors.red}><span style={{ color: colors.white }}>规则：能写成 Workflow 的，就不要用 Agent。</span></Say>
		</Page>
	);
}
