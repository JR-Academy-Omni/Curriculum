"""失败路径和防线：不调用模型，每次结果都一样。

真实项目里，这些情况写成测试，每次改代码都跑，而不是靠演示时碰运气。

    uv run pytest tests/test_failures.py -v -k error    # 第 41 页：错误怎么处理
    uv run pytest tests/test_failures.py -v -k guard    # 第 49 页：伪造调用被哪一层拦下
"""
import asyncio

import pytest

from agent import make_gate, stop_reason_of
from errors import Decision, decide, with_retry
from guards import LoopDetector, guarded_call
from handoff import build_handoff
from run_trace import Trace

GOOD = {"order_id": "A1024", "customer_id": "C001", "amount": 129, "idempotency_key": "k-1"}
BIG = {"order_id": "A4096", "customer_id": "C004", "amount": 680, "idempotency_key": "k-2"}
BIG_CALL = {"tool_name": "mcp__refund__issue_refund", "tool_input": BIG}


def no_sleep(_):
    pass


# ---------- 错误处理：先分类，再决定 ----------

def test_error_transient_read_recovers_in_code(desk):
    result, attempts = with_retry(lambda: desk.get_order("A5120", "C005"), sleep=no_sleep)
    assert (result["status"], attempts) == ("ok", 3)


def test_error_fixable_goes_back_to_model_only_once(desk):
    _, result = guarded_call(desk, "get_order", {"order_id": "1024", "customer_id": "C001"})
    assert decide(result) is Decision.RETURN_TO_MODEL
    assert decide(result, model_fix_used=True) is Decision.ESCALATE


def test_error_forbidden_is_not_retried_and_escalates(desk):
    result, attempts = with_retry(lambda: desk.get_order("A1024", "C999"), sleep=no_sleep)
    assert attempts == 1
    assert decide(result) is Decision.ESCALATE


def test_error_not_found_is_not_retried_and_tells_customer(desk):
    result, attempts = with_retry(lambda: desk.get_order("A0000", "C001"), sleep=no_sleep)
    assert attempts == 1
    assert decide(result) is Decision.TELL_CUSTOMER


def test_error_retries_exhausted_escalates_with_handoff(desk):
    trace = Trace(quiet=True)
    trace.action("get_order", {"order_id": "A6144", "customer_id": "C006"})
    result, attempts = with_retry(lambda: desk.get_order("A6144", "C006"), sleep=no_sleep)
    trace.observation(result)
    assert decide(result, attempt=attempts) is Decision.ESCALATE

    handoff = build_handoff("retries_exhausted", trace, {"order_id": "A6144"},
                            ["判断是否可退款"], "稍后人工查询后答复客户。")
    assert handoff.reason_code == "retries_exhausted"
    assert "判断是否可退款" in handoff.render()


def test_error_blind_retry_without_key_refunds_twice(desk):
    args = dict(order_id="A7168", customer_id="C007", amount=350)
    first = desk.issue_refund(**args, idempotency_key=None, unsafe_allow_no_key=True)
    assert first["error"]["code"] == "write_timeout"
    desk.issue_refund(**args, idempotency_key=None, unsafe_allow_no_key=True)
    assert len(desk.ledger()) == 2


def test_error_write_timeout_with_same_key_refunds_once(desk):
    args = dict(order_id="A7168", customer_id="C007", amount=350)
    first = desk.issue_refund(**args, idempotency_key="refund-A7168")
    assert decide(first) is Decision.CHECK_STATUS
    assert desk.check_refund_status("A7168")["data"]["refund"][0]["refund_id"]
    assert desk.issue_refund(**args, idempotency_key="refund-A7168")["data"]["replayed"] is True
    assert len(desk.ledger()) == 1


def test_error_handoff_context_has_request_and_system_facts(desk):
    trace = Trace(quiet=True)
    trace.action("get_order", {"order_id": "A1024", "customer_id": "C001"})
    trace.observation(desk.get_order("A1024", "C001"))
    trace.action("get_refund_policy", {})
    trace.observation(desk.get_refund_policy())
    context = build_handoff("x", trace, {}, [], "y", request="申请退款").context
    assert context["request"] == "申请退款"
    assert context["facts"]["amount"] == 129
    assert "14 天" in context["facts"]["policy"]


# ---------- 防线：这些调用是伪造的，证明的是代码挡得住，不是模型一定会犯错 ----------

@pytest.mark.parametrize("tool,args,skip_hook,layer,code", [
    pytest.param("issue_refund", {**GOOD, "amount": "129"}, False, "schema", "invalid_argument",
                 id="schema-blocks-string-amount"),
    pytest.param("get_order", {"order_id": "A1024' OR 1=1", "customer_id": "C001"}, False, "schema", "invalid_argument",
                 id="schema-blocks-sql-like-order-id"),
    pytest.param("issue_refund", {**GOOD, "idempotency_key": ""}, False, "schema", "invalid_argument",
                 id="schema-blocks-missing-idempotency-key"),
    pytest.param("delete_all_orders", {}, False, "schema", "forbidden",
                 id="schema-blocks-unknown-tool"),
    pytest.param("issue_refund", BIG, False, "hook", "approval_required",
                 id="hook-blocks-680-without-approval"),
    pytest.param("issue_refund", BIG, True, "tool", "approval_required",
                 id="tool-blocks-680-when-hook-is-bypassed"),
    pytest.param("issue_refund", {**BIG, "approval_id": "APV-fake"}, True, "tool", "approval_required",
                 id="tool-blocks-made-up-approval-id"),
    pytest.param("issue_refund", {**GOOD, "amount": 9999}, True, "tool", "amount_mismatch",
                 id="tool-blocks-amount-above-order"),
    pytest.param("issue_refund", {**GOOD, "customer_id": "C002"}, True, "tool", "forbidden",
                 id="tool-blocks-another-customers-order"),
])
def test_guard_blocks_forged_call(desk, tool, args, skip_hook, layer, code):
    blocked_by, result = guarded_call(desk, tool, args, skip_hook=skip_hook)
    assert (blocked_by, result["error"]["code"]) == (layer, code)
    assert desk.ledger() == []


def test_guard_allows_small_refund_all_the_way(desk):
    layer, result = guarded_call(desk, "issue_refund", GOOD)
    assert (layer, result["status"]) == ("放行", "simulated")
    assert len(desk.ledger()) == 1


def test_guard_customer_note_saying_approved_changes_nothing(desk):
    order = desk.get_order("A9216", "C009")["data"]
    assert "主管已同意" in order["customer_note_untrusted"]
    forged = {"order_id": "A9216", "customer_id": "C009", "amount": 720, "idempotency_key": "k-5"}
    layer, result = guarded_call(desk, "issue_refund", forged, skip_hook=True)
    assert (layer, result["error"]["code"]) == ("tool", "approval_required")
    assert desk.ledger() == []


def test_guard_customer_note_stays_out_of_handoff_facts(desk):
    trace = Trace(quiet=True)
    trace.action("get_order", {"order_id": "A9216", "customer_id": "C009"})
    trace.observation(desk.get_order("A9216", "C009"))
    handoff = build_handoff("x", trace, {}, [], "y")
    assert handoff.context["facts"]["amount"] == 720
    assert "主管已同意" not in str(handoff.context)


# ---------- agent.py 的 hook：不用模型也能测 ----------

def run_gate(desk, stop, answer, call=BIG_CALL, detector=None):
    async def ask_human(order, reason):
        return answer

    return asyncio.run(make_gate(desk, stop, ask_human, detector)(call, "id", None))


def test_guard_gate_allows_small_read_without_asking(desk):
    async def never(order, reason):
        raise AssertionError("读操作不应该问人")

    call = {"tool_name": "mcp__refund__get_order", "tool_input": {"order_id": "A1024"}}
    assert asyncio.run(make_gate(desk, {}, never)(call, "id", None)) == {}


def test_guard_gate_approval_writes_real_id_that_the_tool_accepts(desk):
    output = run_gate(desk, {}, True)["hookSpecificOutput"]
    assert output["permissionDecision"] == "allow"
    assert desk.issue_refund(**output["updatedInput"])["status"] == "simulated"


def test_guard_gate_rejection_stops_the_agent_and_refunds_nothing(desk):
    stop = {}
    output = run_gate(desk, stop, False)
    assert output["continue_"] is False
    assert output["hookSpecificOutput"]["permissionDecision"] == "deny"
    assert stop["reason"] == "approval_denied"
    assert desk.ledger() == []


def test_guard_gate_stops_on_third_identical_call(desk):
    stop, detector = {}, LoopDetector(limit=3)
    call = {"tool_name": "mcp__refund__check_refund_status", "tool_input": {"order_id": "A8192"}}
    outputs = [run_gate(desk, stop, True, call, detector) for _ in range(3)]
    assert outputs[:2] == [{}, {}]
    assert outputs[2]["continue_"] is False
    assert stop["reason"] == "loop_detected"


class FakeResult:
    def __init__(self, subtype="success", is_error=False, terminal_reason=None):
        self.subtype, self.is_error, self.terminal_reason = subtype, is_error, terminal_reason


@pytest.mark.parametrize("stop,result,failure,expected", [
    pytest.param({}, FakeResult(), None, None, id="clean-finish-needs-no-handoff"),
    pytest.param({"reason": "approval_denied"}, FakeResult(), None, "approval_denied", id="hook-reason-wins"),
    pytest.param({}, FakeResult("error_max_turns", True, "max_turns"), None, "max_turns", id="turn-limit"),
    pytest.param({}, None, "max_turns", "max_turns", id="sdk-raised-before-result"),
    pytest.param({}, FakeResult("success", True, "api_error"), None, "api_error", id="api-failure-marked-success"),
    pytest.param({}, None, None, "no_result", id="no-result-is-not-success"),
])
def test_guard_every_early_exit_is_detected(stop, result, failure, expected):
    assert stop_reason_of(stop, result, failure) == expected
