import { Mono, Page, Say, Tbl } from './_parts';

export default function S39_FailureModes() {
	return (
		<Page part="第 7 部分" at={['carekind.py', 'prompts.py']} title="多 Agent 才有的五种失败">
		  <Tbl size={20} widths="230px 1fr 1fr" head={['失败', '长什么样', 'demo 里怎么挡']} rows={[
		    ['Partial failure', '六位住户，一位的系统不可用', <>不可重试的错误 → <Mono>NOT COVERED</Mono>，其他人照常</>],
		    ['Duplicate work', '两个 drafter 写了同一位住户', <>幂等键 <Mono>resident:shift</Mono>，第二次只返回已有的</>],
		    ['Conflicting results', 'drafter 说没事，checker 说缺项', '不悄悄选一个：写进交班，交给 RN'],
		    ['Stalled thread', '一个线程一直不回报', '墙钟上限，到点 interrupt；session 预算封顶'],
		    ['Runaway fan-out', '协调者开了几十个线程', <>roster 固定、<Mono>inline_agents</Mono> 关、workflows 关</>],
		  ]} />
		  <Say>重试和幂等是 W7 讲过的：读可以重试，写要有幂等键，键由代码生成。</Say>
		</Page>
	);
}
