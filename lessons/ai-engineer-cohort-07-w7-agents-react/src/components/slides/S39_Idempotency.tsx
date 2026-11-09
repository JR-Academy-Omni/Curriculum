import { colors } from '../ui';
import { Box, Code, Cols, Page, Say } from './_parts';

export default function S39_Idempotency() {
	return (
		<Page part="第 6 部分" at={["desk.py · Desk.issue_refund()"]} title="读可以随便重试，写不行">
		  <Cols n={2}>
		    <Box title="没有幂等键" bg={colors.red} style={{ color: colors.white }}>退款请求超时，其实已经记账。<br />重试一次，又记一笔。<br /><strong>客户被退了两次。</strong></Box>
		    <Box title="有幂等键" bg={colors.green}>每笔退款带一个固定的 key。<br />系统看到同一个 key，直接返回上次的结果。<br /><strong>只退一次。</strong></Box>
		  </Cols>
		  <Code file="demo/desk.py" size={18} code={"if idempotency_key:\n    for row in ledger:\n        if row[\"idempotency_key\"] == idempotency_key:\n            return self._receipt(row, replayed=True)"} />
		  <Say>写操作超时，先问“它成功了吗？”，再决定下一步。</Say>
		</Page>
	);
}
