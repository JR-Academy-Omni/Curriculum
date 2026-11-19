import { Mono, Page, Say, Tbl } from './_parts';

export default function S39_FailureModes() {
	return (
		<Page part="第 7 部分" at={['carekind.py', 'prompts.py']} title="多 Agent 才有的七种失败">
		  <Tbl size={18} widths="230px 1fr 1.2fr" head={['失败', '长什么样', '怎么解决（demo 里）']} rows={[
		    ['Partial failure', '六位住户，一位的系统不可用', <>不可重试 → <Mono>NOT COVERED</Mono>，写明原因；其他人照常</>],
		    ['Duplicate work', '两个 drafter 写了同一位住户', <>协调者汇总时去重；后台幂等键 <Mono>resident:shift</Mono> 保证只有一份 Draft</>],
		    ['Conflicting results', 'drafter 说没事，checker 说缺项', '不悄悄选一个：两种说法都写进交班，交给 RN'],
		    ['Stalled thread', '一个线程一直不回报', '墙钟上限，到点 interrupt；没回报的住户列进 Not covered'],
		    ['Runaway fan-out', '协调者开了几十个线程', <>roster 固定、<Mono>inline_agents</Mono> 关、workflows 关</>],
		    ['Error compounding', '一个坏输出被下游当成事实，越传越像真的', '交接点用代码校验，下游读原件（下一页）'],
		    ['Coordination overhead', '派活、等待、汇总比干活还贵', '合并成大块（第 13 页）、传引用（第 30 页）、单 Agent 基线实测（第 38 页）'],
		  ]} />
		  <Say>重试和幂等是 W7 讲过的：读可以重试，写要有幂等键，键由代码生成。</Say>
		</Page>
	);
}
