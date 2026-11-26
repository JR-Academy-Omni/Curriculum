import { DeckFrame, colors } from '../kit';
import { StillScope } from '../live';
import { TaskWall } from '../TaskWall';
import { TECH_GROUPS, TECH_TASKS } from '../../data/fdeTasks';

export default function S13f_TechTasks() {
	return <DeckFrame tag="04 · FDE Tech 练什么" title="FDE Tech 的 30 项练习：进大企业的系统里交付" subtitle="老系统、权限、重复事件、Agent 边界、评估、回滚：每一项都是大企业项目上线前躲不开的工程问题。" accent={colors.blue}>
		<StillScope><TaskWall tasks={TECH_TASKS} groups={TECH_GROUPS} bottom="对比上一页：Business 练业务活，Tech 练的是在大企业现有系统里，把 AI 做到能上线、能维护、能交接。" /></StillScope>
	</DeckFrame>;
}
