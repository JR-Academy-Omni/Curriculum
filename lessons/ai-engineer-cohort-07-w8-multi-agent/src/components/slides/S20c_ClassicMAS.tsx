import { Page, Say, Tbl } from './_parts';

export default function S20c_ClassicMAS() {
	return (
		<Page part="第 3 部分" title="经典多 Agent 架构：今天的问题早有名字">
		  <Tbl size={19} widths="250px 1fr 1fr" head={['经典架构', '核心想法', '对应今天的什么']} rows={[
		    [<>BDI<br />Belief–Desire–Intention</>, 'Agent 有信念（它认为世界是什么样）、愿望（目标）、意图（决定去执行的计划）', '信念 ≈ 工具查到的事实，会过期，要能追来源；愿望 ≈ 任务；意图 ≈ 当前计划。LLM 不会自己存这些，要写进 state'],
		    [<>Contract Net Protocol<br />（Smith，1980）</>, '管理者公布任务 → 承包者投标 → 管理者选一个 → 承包者回报结果', '协调者派活就是简化版：roster 固定，不投标。事先不知道谁能做、谁更便宜时，才需要投标'],
		    [<>Blackboard<br />（Hearsay-II，1970 年代）</>, '多个专家读写同一块黑板，由控制器决定下一个谁上', '共享文件、共享记录；上一页的写入规则全都适用'],
		  ]} />
		  <Say>名字换了，问题没变：谁知道什么、谁来派活、在哪里共享。</Say>
		</Page>
	);
}
