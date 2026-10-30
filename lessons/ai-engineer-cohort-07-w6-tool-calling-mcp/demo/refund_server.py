"""W6 课堂示例：退款客服的只读 MCP server（合成数据）。"""
import json
import os
from pathlib import Path

from fastmcp import FastMCP

mcp = FastMCP("refund-desk")

HERE = Path(__file__).parent  # 按文件自己的位置找数据，不依赖从哪个目录启动
ORDERS = json.loads((HERE / "data" / "orders.json").read_text(encoding="utf-8"))
TOKEN = os.environ["ORDERS_API_TOKEN"]


@mcp.tool
def get_order(order_id: str, customer_id: str) -> dict:
    """查一张订单的状态。只读，不改任何数据。"""
    order = ORDERS.get(order_id)
    if order is None:
        return {"status": "error", "error": {"code": "not_found", "message": f"没有订单 {order_id}"}}
    if order["customer_id"] != customer_id:
        return {"status": "error", "error": {"code": "forbidden", "message": "这张订单不属于该客户"}}
    return {"status": "ok", "data": {"order_id": order_id, "state": order["state"], "amount": order["amount"]}}


@mcp.tool
def send_refund_email(order_id: str) -> dict:
    """给客户发退款确认邮件。课堂版是模拟操作，不会真的发送。"""
    return {"status": "simulated", "data": {"order_id": order_id, "note": "演练：没有真的发出邮件"}}


@mcp.resource("policy://refund")
def refund_policy() -> str:
    """退款政策（只看不办）。"""
    return "签收后 14 天内可申请退款；超过 500 元需主管确认。"


@mcp.prompt
def refund_reply(customer_name: str) -> str:
    """标准退款回复模板。"""
    return f"请用礼貌、简短的语气回复 {customer_name}，说明退款进度。"


if __name__ == "__main__":
    mcp.run()
