"""把模型输出当不可信输入：写在代码里的校验（第 7 部分）。

三道防线，由弱到强：
  1. system prompt：只是请求，模型可能忽略
  2. schema 校验 + hook：调用到达工具之前拦下
  3. 工具内部检查（desk.py）：就算前两道被绕过也成立
"""
import json

from desk import APPROVAL_LIMIT, CUSTOMER_ID, ORDER_ID, Desk
from errors import make_error

READ_TOOLS = {"get_order", "get_refund_policy", "check_refund_status"}
WRITE_TOOLS = {"issue_refund", "send_refund_email"}


def validate_args(tool: str, args: dict) -> dict | None:
    """schema 校验：类型和格式。有问题返回 fixable 错误，模型可以改一次。"""
    if tool not in READ_TOOLS | WRITE_TOOLS:
        return make_error("forbidden", f"未知工具 {tool}")
    if tool == "get_refund_policy":
        return None
    order_id = args.get("order_id")
    if not isinstance(order_id, str) or not ORDER_ID.match(order_id):
        return make_error("invalid_argument", "order_id 应形如 A1024")
    if tool in {"get_order", "issue_refund"}:
        customer_id = args.get("customer_id")
        if not isinstance(customer_id, str) or not CUSTOMER_ID.match(customer_id):
            return make_error("invalid_argument", "customer_id 应形如 C001")
    if tool == "issue_refund":
        amount = args.get("amount")
        if isinstance(amount, bool) or not isinstance(amount, (int, float)) or amount <= 0:
            return make_error("invalid_argument", "amount 必须是正数")
        if not args.get("idempotency_key"):
            return make_error("invalid_argument", "写操作必须带 idempotency_key")
    return None


def policy_gate(desk: Desk, tool: str, args: dict) -> tuple[str, str]:
    """hook 用的判断：allow / ask / deny。凡是没明确允许的，一律不放行。"""
    if tool in READ_TOOLS or tool == "send_refund_email":
        return "allow", "允许"
    if tool != "issue_refund":
        return "deny", f"工具 {tool} 不在名单内"
    order = desk.orders.get(args.get("order_id", ""))
    if order is None:
        return "deny", "订单不存在"
    if order["amount"] > APPROVAL_LIMIT:
        return "ask", f"金额 {order['amount']} 超过 {APPROVAL_LIMIT} 元，需要主管确认"
    return "allow", "金额在自动处理范围内"


def guarded_call(desk: Desk, tool: str, args: dict, *, skip_hook: bool = False) -> tuple[str, dict]:
    """让一次调用走完所有防线，返回 (拦下它的那一层, 结果)。"""
    error = validate_args(tool, args)
    if error:
        return "schema", error
    if not skip_hook:
        decision, reason = policy_gate(desk, tool, args)
        if decision != "allow":
            return "hook", make_error("approval_required" if decision == "ask" else "forbidden", reason)
    result = getattr(desk, tool)(**args)
    return ("tool" if result["status"] == "error" else "放行"), result


class LoopDetector:
    """同一个工具、同样的参数重复调用，就判定为原地打转。"""

    def __init__(self, limit: int = 3):
        self.limit = limit
        self.counts: dict[str, int] = {}

    def is_looping(self, tool: str, args: dict) -> bool:
        key = tool + json.dumps(args, sort_keys=True, ensure_ascii=False)
        self.counts[key] = self.counts.get(key, 0) + 1
        return self.counts[key] >= self.limit
