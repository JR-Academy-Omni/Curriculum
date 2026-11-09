"""各模块的单元测试，不调用模型。课上演示用 test_failures.py。"""
import importlib
from types import SimpleNamespace

import pytest

from errors import Decision, category_of, decide, make_error, with_retry
from guards import LoopDetector, guarded_call, policy_gate, validate_args
from handoff import build_handoff
from run_trace import Trace


@pytest.mark.parametrize("code,category", [
    ("timeout", "transient"), ("rate_limited", "transient"), ("invalid_argument", "fixable"),
    ("forbidden", "permanent"), ("not_found", "permanent"), ("write_timeout", "unknown_outcome"),
    ("something_new", "unknown_outcome"),
])
def test_categories(code, category):
    assert category_of(code) == category


@pytest.mark.parametrize("code,kwargs,expected", [
    ("timeout", {"attempt": 1}, Decision.RETRY),
    ("timeout", {"attempt": 3}, Decision.ESCALATE),
    ("invalid_argument", {}, Decision.RETURN_TO_MODEL),
    ("invalid_argument", {"model_fix_used": True}, Decision.ESCALATE),
    ("not_found", {}, Decision.TELL_CUSTOMER),
    ("forbidden", {}, Decision.ESCALATE),
    ("policy_denied", {}, Decision.ESCALATE),
    ("write_timeout", {}, Decision.CHECK_STATUS),
    ("write_timeout", {"status_checked": True}, Decision.ESCALATE),
])
def test_rule_of_thumb(code, kwargs, expected):
    assert decide(make_error(code, "x"), **kwargs) is expected


def test_only_transient_is_retried():
    calls = []

    def call():
        calls.append(1)
        return make_error("forbidden", "x")

    with_retry(call, sleep=lambda _: None)
    assert len(calls) == 1


def test_key_required_by_default(desk):
    result = desk.issue_refund("A1024", "C001", 129, None)
    assert result["error"]["code"] == "invalid_argument"
    assert desk.ledger() == []


def test_approval_must_match_order_and_amount(desk):
    approval_id = desk.grant_approval("A4096", 680, "主管")
    assert desk.issue_refund("A9216", "C009", 720, "k", approval_id)["error"]["code"] == "approval_required"
    assert desk.issue_refund("A4096", "C004", 680, "k", approval_id)["status"] == "simulated"


def test_customer_note_is_returned_as_labelled_data(desk):
    assert "customer_note_untrusted" in desk.get_order("A9216", "C009")["data"]


def test_schema_layer(desk):
    assert validate_args("get_refund_policy", {}) is None
    assert validate_args("get_order", {"order_id": "1", "customer_id": "C001"})["error"]["code"] == "invalid_argument"
    assert validate_args("issue_refund", {"order_id": "A1024", "customer_id": "C001", "amount": True,
                                          "idempotency_key": "k"})
    assert guarded_call(desk, "nope", {})[0] == "schema"


def test_policy_gate(desk):
    assert policy_gate(desk, "issue_refund", {"order_id": "A1024"})[0] == "allow"
    assert policy_gate(desk, "issue_refund", {"order_id": "A4096"})[0] == "ask"
    assert policy_gate(desk, "issue_refund", {"order_id": "A0000"})[0] == "deny"
    assert policy_gate(desk, "other", {})[0] == "deny"


def test_loop_detector():
    detector = LoopDetector(limit=3)
    assert [detector.is_looping("t", {"a": 1}) for _ in range(3)] == [False, False, True]
    assert detector.is_looping("t", {"a": 2}) is False


def test_handoff_comes_from_recorded_state():
    trace = Trace(quiet=True)
    trace.action("get_order", {"order_id": "A7168"})
    trace.observation({"status": "ok", "data": {}})
    trace.action("issue_refund", {"order_id": "A7168"})
    trace.observation(make_error("write_timeout", "x"))
    trace.action("send_refund_email", {"order_id": "A7168"})
    trace.observation(make_error("approval_required", "x"))
    handoff = build_handoff("unknown_side_effect", trace, {"order_id": "A7168"}, ["确认"], "核实")
    data = handoff.to_dict()
    assert set(data) >= {"reason_code", "case", "context", "done", "not_done", "side_effects", "next_step", "trace_id"}
    assert [s["state"] for s in data["side_effects"]] == ["unknown", "not_attempted"]
    assert len(data["done"]) == 3
    assert "unknown" in handoff.render()


def _block(**kw):
    return SimpleNamespace(**kw)


def test_react_loop_stops_at_max_steps(desk):
    loop = importlib.import_module("01_control")

    def model(messages, tools):
        return _block(stop_reason="tool_use", content=[
            _block(type="tool_use", id="1", name="get_refund_policy", input={})])

    trace = Trace(quiet=True)
    assert loop.react_loop("t", model, desk, trace, max_steps=3) == "max_steps"
    assert len(trace.steps) == 3


def test_react_loop_finishes_and_hides_thinking(desk, capsys):
    loop = importlib.import_module("01_control")
    replies = iter([
        _block(stop_reason="tool_use", content=[
            _block(type="thinking", thinking="secret"),
            _block(type="tool_use", id="1", name="get_order",
                   input={"order_id": "A1024", "customer_id": "C001"})]),
        _block(stop_reason="end_turn", content=[_block(type="text", text="可以退款")]),
    ])
    assert loop.react_loop("t", lambda *_: next(replies), desk, Trace()) == "done"
    assert "secret" not in capsys.readouterr().out


def test_react_loop_handles_refusal(desk):
    loop = importlib.import_module("01_control")
    response = _block(stop_reason="refusal", content=[])
    assert loop.react_loop("t", lambda *_: response, desk, Trace(quiet=True)) == "refused"
