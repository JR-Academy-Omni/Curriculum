import { Page, Say, Tbl } from './_parts';

export default function S46b_HarnessFramework() {
	return (
		<Page part="第 8 部分 · 例子" at={['github.com/MCP-Simplr/Harness-Engineering-Framework']} title="换个领域：编码 Agent 团队怎么拆">
		  <Tbl size={19} widths="1.3fr 1fr" head={['Harness Engineering Framework 的做法', '对应今天的概念']} rows={[
		    ['Sonnet 当协调者；每个项目一个 Haiku worker；Opus 当 reviewer', 'Specialization、按子任务选模型'],
		    ['Reviewer 用更强的模型，没有 Edit / Write 工具', '独立检查，挡住错误累积'],
		    ['跨项目的票先写进 WHITEBOARD.md：涉及哪些项目、共享的契约是什么', 'Shared blackboard：只放当前状态，用完就删'],
		    ['跨项目的改动按顺序做：先改拥有契约的一方，审过再改使用方', '防止重复劳动和互相矛盾'],
		    ['每个 worker 只在自己的项目目录里工作', 'Context isolation、权限范围'],
		    ['四个人工关卡：PRD、开工、合并前、部署', '交给人'],
		  ]} />
		  <Say>讲师的开源项目（MIT）。领域和 CareKind 不同，判断方法一样。</Say>
		</Page>
	);
}
