import { Live } from './_parts';

export default function S40_Live7() {
	return (
		<Live part="第 6 部分" at={["tests/test_failures.py · test_error_*"]} n={4} title="每类错误走一遍" cmd={["uv run pytest tests/test_failures.py -v -k error", "uv run python agent.py --order A8192 --interrupt"]} watch={["这些情况写成测试，每次改代码都跑", "transient：尝试 3 次恢复，模型没有参与", "forbidden、not_found：只试 1 次", "写超时：没有 key 退两次，同一个 key 退一次", "--interrupt：跑到一半被打断，也有交接单"]} file="demo/tests/test_failures.py" code={"def test_error_write_timeout_with_same_key_refunds_once(desk):\n    args = dict(order_id=\"A7168\", customer_id=\"C007\", amount=350)\n    first = desk.issue_refund(**args, idempotency_key=\"refund-A7168\")\n    assert decide(first) is Decision.CHECK_STATUS\n    assert desk.check_refund_status(\"A7168\")[\"data\"][\"refund\"][0][\"refund_id\"]\n    assert desk.issue_refund(**args, idempotency_key=\"refund-A7168\")[\"data\"][\"replayed\"] is True\n    assert len(desk.ledger()) == 1"} />
	);
}
