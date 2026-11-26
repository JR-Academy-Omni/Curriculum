import { DeckFrame, colors } from '../kit';
import { StillScope } from '../live';
import { TaskWall } from '../TaskWall';
import { BIZ_GROUPS, BIZ_TASKS } from '../../data/fdeTasks';

export default function S13e_BizTasks() {
	return <DeckFrame tag="04 · FDE Business 练什么" title="FDE Business 的 30 项练习：你每天的业务活" subtitle="发票、报价、客服、采购、入职、周报：先把熟悉的活用 AI 做完，再把它放进客户方案和预算。" accent={colors.yellow}>
		<StillScope><TaskWall tasks={BIZ_TASKS} groups={BIZ_GROUPS} bottom="一眼能看懂：这些就是业务岗位每天在做的事。Business 练的是把它们交给 AI 做完，再讲清值不值得做。" /></StillScope>
	</DeckFrame>;
}
