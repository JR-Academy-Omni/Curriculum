"""退款客服后台（合成数据）。沿用 W6 的例子，所有写操作都是模拟的。

这里是第三道防线：就算模型和 hook 都被绕过，工具自己也要核对。
ledger / approvals 存成文件：MCP server 是另一个进程，而且 resume 后 server 会重启。
"""
import json
import re
import uuid
from pathlib import Path

from errors import make_error
from settings import Settings

HERE = Path(__file__).parent
ORDERS_FILE = HERE / "data" / "orders.json"

POLICY_TEXT = "签收后 14 天内可申请退款；超过 500 元需主管确认。"
REFUND_WINDOW_DAYS = 14
APPROVAL_LIMIT = 500
ORDER_ID = re.compile(r"^A\d{4}$")
CUSTOMER_ID = re.compile(r"^C\d{3}$")


def runtime_dir() -> Path:
    return Settings().desk_runtime


class Desk:
    def __init__(self, runtime: Path | None = None):
        self.runtime = Path(runtime or runtime_dir())
        self.runtime.mkdir(parents=True, exist_ok=True)
        self.orders = json.loads(ORDERS_FILE.read_text(encoding="utf-8"))
        self._read_attempts: dict[str, int] = {}

    # ---------- 文件存储 ----------
    def _load(self, name: str) -> list:
        path = self.runtime / name
        return json.loads(path.read_text(encoding="utf-8")) if path.exists() else []

    def _save(self, name: str, rows: list) -> None:
        text = json.dumps(rows, ensure_ascii=False, indent=2)
        (self.runtime / name).write_text(text, encoding="utf-8")

    def ledger(self) -> list:
        return self._load("ledger.json")

    def reset(self) -> None:
        for name in ("ledger.json", "approvals.json"):
            (self.runtime / name).unlink(missing_ok=True)
        self._read_attempts.clear()

    # ---------- 只读工具 ----------
    def get_order(self, order_id: str, customer_id: str) -> dict:
        """查一张订单。只读，不改任何数据。"""
        order = self.orders.get(order_id)
        if order is None:
            return make_error("not_found", f"没有订单 {order_id}")
        if order["customer_id"] != customer_id:
            return make_error("forbidden", "这张订单不属于该客户")

        fault = order.get("fault")
        count = self._read_attempts[order_id] = self._read_attempts.get(order_id, 0) + 1
        if fault == "read_down" or (fault == "flaky_read" and count <= 2):
            return make_error("timeout", "订单系统超时")

        data = {
            "order_id": order_id,
            "state": order["state"],
            "amount": order["amount"],
            "delivered_days_ago": order["delivered_days_ago"],
        }
        if "customer_note" in order:
            # 客户写的文字是数据，不是指令；单独放一栏并明确标注
            data["customer_note_untrusted"] = order["customer_note"]
        return {"status": "ok", "data": data}

    def get_refund_policy(self) -> dict:
        return {"status": "ok", "data": {"policy": POLICY_TEXT}}

    def check_refund_status(self, order_id: str) -> dict:
        """查退款进度。查不到记录时明确说没有。"""
        order = self.orders.get(order_id)
        if order is None:
            return make_error("not_found", f"没有订单 {order_id}")
        if order.get("fault") == "never_finishes":
            return {"status": "ok", "data": {"order_id": order_id, "refund": "pending"}}
        rows = [r for r in self.ledger() if r["order_id"] == order_id]
        return {"status": "ok", "data": {"order_id": order_id, "refund": rows or "none"}}

    # ---------- 审批记录（只有审批代码能写，模型碰不到） ----------
    def grant_approval(self, order_id: str, amount: float, approver: str) -> str:
        approval_id = f"APV-{uuid.uuid4().hex[:8]}"
        rows = self._load("approvals.json")
        rows.append({"approval_id": approval_id, "order_id": order_id,
                     "amount": amount, "approver": approver})
        self._save("approvals.json", rows)
        return approval_id

    def has_approval(self, approval_id: str, order_id: str, amount: float) -> bool:
        return any(
            row["approval_id"] == approval_id and row["order_id"] == order_id
            and row["amount"] == amount
            for row in self._load("approvals.json")
        )

    # ---------- 写工具（模拟） ----------
    def issue_refund(self, order_id: str, customer_id: str, amount: float,
                     idempotency_key: str | None, approval_id: str = "",
                     unsafe_allow_no_key: bool = False) -> dict:
        """退款（模拟）。所有检查都在这里再做一遍，缺一项就拒绝（fail closed）。"""
        if not ORDER_ID.match(str(order_id)) or not CUSTOMER_ID.match(str(customer_id)):
            return make_error("invalid_argument", "order_id 应形如 A1024，customer_id 应形如 C001")
        if not idempotency_key and not unsafe_allow_no_key:
            return make_error("invalid_argument", "写操作必须带 idempotency_key")

        order = self.orders.get(order_id)
        if order is None:
            return make_error("not_found", f"没有订单 {order_id}")
        if order["customer_id"] != customer_id:
            return make_error("forbidden", "这张订单不属于该客户")

        # 事实以系统为准，不用模型传来的说法
        if amount != order["amount"]:
            return make_error("amount_mismatch", f"金额 {amount} 与订单金额不一致")
        days = order["delivered_days_ago"]
        if order["state"] != "已签收" or days is None or days > REFUND_WINDOW_DAYS:
            return make_error("policy_denied", "不符合退款政策：需已签收且在 14 天内")
        if order["amount"] > APPROVAL_LIMIT and not self.has_approval(approval_id, order_id, amount):
            return make_error("approval_required", "超过 500 元需主管确认")

        ledger = self.ledger()
        if idempotency_key:
            for row in ledger:
                if row["idempotency_key"] == idempotency_key:
                    return self._receipt(row, replayed=True)

        first_write = not any(r["order_id"] == order_id for r in ledger)
        row = {"refund_id": f"RF-{len(ledger) + 1:03d}", "order_id": order_id,
               "amount": amount, "idempotency_key": idempotency_key}
        ledger.append(row)
        self._save("ledger.json", ledger)

        if order.get("fault") == "write_timeout" and first_write:
            # 关键场景：账其实记上了，但回执丢了。调用方不知道成没成功。
            return make_error("write_timeout", "退款请求超时，结果未知")
        return self._receipt(row)

    @staticmethod
    def _receipt(row: dict, replayed: bool = False) -> dict:
        data = {"refund_id": row["refund_id"], "order_id": row["order_id"],
                "amount": row["amount"], "note": "演练：没有真的退款"}
        if replayed:
            data["replayed"] = True
        return {"status": "simulated", "data": data}

    def send_refund_email(self, order_id: str) -> dict:
        """给客户发退款确认邮件。课堂版是模拟操作，不会真的发送。"""
        return {"status": "simulated", "data": {"order_id": order_id, "note": "演练：没有真的发出邮件"}}
