"""错误分类与处理规则（第 6 部分）。

一句话：先看错误属于哪一类，再决定 重试 / 让模型改 / 停 / 交人工。
这段判断写在代码里，不交给模型临场发挥。
"""
import time
from enum import Enum

TRANSIENT = {"timeout", "rate_limited", "server_error", "connection_error"}
FIXABLE = {"invalid_argument"}
UNKNOWN_OUTCOME = {"write_timeout"}
# 永久错误里，这些要人来判断；其余（如 not_found）直接告诉客户即可
NEEDS_HUMAN = {"forbidden", "policy_denied", "approval_required", "amount_mismatch"}
PERMANENT = {"not_found"} | NEEDS_HUMAN


def category_of(code: str) -> str:
    if code in TRANSIENT:
        return "transient"
    if code in FIXABLE:
        return "fixable"
    if code in UNKNOWN_OUTCOME:
        return "unknown_outcome"
    if code in PERMANENT:
        return "permanent"
    return "unknown_outcome"  # 没见过的错误：按最保守的一类处理（fail closed）


def make_error(code: str, message: str) -> dict:
    """W6 的 status / data / error 回执，多了 category 和 retryable 两栏。"""
    category = category_of(code)
    return {
        "status": "error",
        "error": {
            "code": code,
            "message": message,
            "category": category,
            "retryable": category == "transient",
        },
    }


class Decision(str, Enum):
    CONTINUE = "继续"
    RETRY = "代码重试"
    RETURN_TO_MODEL = "交回模型修正"
    TELL_CUSTOMER = "停止，告知客户"
    CHECK_STATUS = "先查状态，不能盲目重试"
    ESCALATE = "升级给人工"


def decide(result: dict, *, attempt: int = 1, max_attempts: int = 3,
           model_fix_used: bool = False, status_checked: bool = False) -> Decision:
    """经验法则：重试 → 模型修正 → 升级。"""
    if result["status"] != "error":
        return Decision.CONTINUE
    code = result["error"]["code"]
    category = result["error"]["category"]
    if category == "transient":
        return Decision.RETRY if attempt < max_attempts else Decision.ESCALATE
    if category == "fixable":
        return Decision.ESCALATE if model_fix_used else Decision.RETURN_TO_MODEL
    if category == "unknown_outcome":
        return Decision.ESCALATE if status_checked else Decision.CHECK_STATUS
    if code in NEEDS_HUMAN:
        return Decision.ESCALATE
    return Decision.TELL_CUSTOMER


def with_retry(call, *, max_attempts: int = 3, base_delay: float = 0.2, sleep=time.sleep):
    """只重试 transient，用指数退避。模型不用为这种错误花回合。

    返回 (result, attempts)。
    """
    attempt = 1
    while True:
        result = call()
        if decide(result, attempt=attempt, max_attempts=max_attempts) is not Decision.RETRY:
            return result, attempt
        sleep(base_delay * (2 ** (attempt - 1)))
        attempt += 1
