import { Quiz } from './_parts';

export default function S13_Check2() {
	return (
		<Quiz part="第 2 部分" q="哪个是拆分的好理由？（可多选）"
		  options={['A. 想要一个“护理总监 Agent”审核所有人', 'B. 检查员不能有写 Draft 的权限', 'C. 30 位住户的记录放不进一个上下文', 'D. 只有一位住户，想让结果更可靠']}
		  answer="B 和 C"
		  why="A 是按职位拆；D 只有一件事，拆了只多成本。要更可靠，先给工具、检查和更高的 effort。" />
	);
}
