"""调用 Claude Messages API 的薄封装，给 01_control.py 用。课上不用细讲这个文件。"""
import sys

import anthropic

from settings import Settings

MODEL = Settings().demo_model
SYSTEM = Settings().system_prompt()    # 内容在 system_prompt.md，agent.py 也用这一份

TOOLS = [
    {
        "name": "get_order",
        "description": "查一张订单的状态、金额和签收天数。只读。",
        "strict": True,
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string", "description": "订单号，如 A1024"},
                "customer_id": {"type": "string", "description": "客户号，如 C001"},
            },
            "required": ["order_id", "customer_id"],
            "additionalProperties": False,
        },
    },
    {
        "name": "get_refund_policy",
        "description": "查退款政策。只读。",
        "strict": True,
        "input_schema": {"type": "object", "properties": {}, "required": [],
                         "additionalProperties": False},
    },
]


def require_key() -> None:
    if not Settings().has_credentials():
        sys.exit("没有设置 ANTHROPIC_API_KEY。把 key 写进 demo\\.env，或在终端里设置。见 .env.example。")


def ask(messages: list, tools: list | None = None, **extra):
    """发一次请求。模型拒答时由服务端切到备用模型（fallbacks）。"""
    require_key()
    return anthropic.Anthropic(**Settings().client_kwargs()).beta.messages.create(
        model=MODEL,
        max_tokens=4096,
        betas=["server-side-fallback-2026-07-01"],
        fallbacks="default",
        output_config={"effort": "low"},
        system=SYSTEM,
        messages=messages,
        tools=tools or [],
        **extra,
    )


def text_of(response) -> str:
    return "".join(block.text for block in response.content if block.type == "text")
