import { Page, Say, Tbl } from './_parts';

export default function S34_Contract() {
	return (
		<Page part="第 6 部分" at={['prompts.py · SHIFT_LEAD']} title="每次派活，都是一份契约">
		  <Tbl size={21} widths="250px 1fr 1fr" head={['字段', '缺了会怎样', 'CareKind 例子']} rows={[
		    ['Task', '它做多了或做少了', '给一位住户写一条 Draft'],
		    ['Inputs / references', '它去猜，或者从头查', 'resident_id、shift_id'],
		    ['Allowed tools', '它尝试做不该做的事', '读记录、查政策、写 Draft'],
		    ['Output schema', '回报没法汇总', 'resident | draft_id | 观察 id | 要交 RN 的事'],
		    ['Deadline / budget', '一个线程拖垮整次运行', 'session 3 美元上限，15 分钟墙钟'],
		    ['Completion condition', '不知道什么时候算完', 'Draft 写好，或确认写不了'],
		    ['Failure semantics', '失败被藏起来', '工具说 not retryable，就报 NOT COVERED'],
		  ]} />
		  <Say>和 W7 的交接单是同一个标准：接手的一方不用回头问。区别是这次接手的是另一个 Agent。</Say>
		</Page>
	);
}
