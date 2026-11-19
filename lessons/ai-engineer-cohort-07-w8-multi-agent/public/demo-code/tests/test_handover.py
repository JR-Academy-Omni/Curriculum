"""不调用模型的失败场景：Multi-Agent 的问题，在代码这一层要挡得住。

    uv run pytest -v
"""
import pytest

import carekind as ck

SHIFT = "S-2026-11-20-PM"


@pytest.fixture
def b():
    return ck.Backend()  # 只在内存里，不写文件


def draft(b, agent=ck.NOTE_DRAFTER, rid="R-102", ids=("O-102-1",), text="Found on floor at 16:05.", refs=("P-FALL-2",)):
    return b.call(agent, "create_progress_note_draft",
                  {"resident_id": rid, "shift_id": SHIFT, "text": text,
                   "observation_ids": list(ids), "policy_refs": list(refs)})


# ---------- 上下文隔离：权限 ----------
def test_tool_lists_follow_permissions():
    assert {t["name"] for t in ck.tools_for(ck.POLICY_CHECKER)} == {"search_policy", "get_draft"}
    assert {t["name"] for t in ck.tools_for(ck.SHIFT_LEAD)} == {"flag_for_rn_review"}


def test_checker_cannot_write_even_if_it_tries(b):
    """配置里没有这个工具；就算调用被伪造出来，后台也拒绝。"""
    with pytest.raises(ck.ToolError, match="not allowed"):
        draft(b, agent=ck.POLICY_CHECKER)
    assert b.drafts == {}
    assert b.audit[-1]["status"] == "error"   # 被拒的调用也留审计


def test_lead_cannot_read_resident_records(b):
    with pytest.raises(ck.ToolError, match="not allowed"):
        b.call(ck.SHIFT_LEAD, "get_resident_context", {"resident_id": "R-101", "shift_id": SHIFT})


# ---------- 重复工作：两个 drafter 写同一位住户 ----------
def test_duplicate_draft_is_blocked_by_idempotency_key(b):
    first = draft(b)
    second = draft(b, text="A different second version.")
    assert first["duplicate"] is False and second["duplicate"] is True
    assert len(b.drafts) == 1 and b.duplicates == 1
    assert b.drafts["R-102:" + SHIFT]["text"] == "Found on floor at 16:05."


# ---------- 部分失败：一位住户的系统不可用 ----------
def test_partial_failure_is_not_retryable_and_writes_nothing(b):
    with pytest.raises(ck.ToolError) as e:
        b.call(ck.NOTE_DRAFTER, "get_resident_context", {"resident_id": "R-103", "shift_id": SHIFT})
    assert e.value.retryable is False and "not covered" in str(e.value)
    with pytest.raises(ck.ToolError):
        draft(b, rid="R-103", ids=("O-103-1",))
    assert b.drafts == {}


def test_other_residents_still_work_after_one_fails(b):
    with pytest.raises(ck.ToolError):
        b.call(ck.NOTE_DRAFTER, "get_resident_context", {"resident_id": "R-103", "shift_id": SHIFT})
    assert draft(b)["status"] == "Draft"


# ---------- 只用已确认的事实 ----------
def test_unconfirmed_transcript_is_never_returned(b):
    ctx = b.call(ck.NOTE_DRAFTER, "get_resident_context", {"resident_id": "R-102", "shift_id": SHIFT})
    assert "O-102-3" not in {o["id"] for o in ctx["observations"]}


def test_draft_cannot_cite_unconfirmed_observation(b):
    with pytest.raises(ck.ToolError, match="Not confirmed"):
        draft(b, ids=("O-102-1", "O-102-3"))


# ---------- 人来决定：AI 不下上报结论 ----------
@pytest.mark.parametrize("text", ["This incident is reportable under SIRS.",
                                  "Bruise is not reportable.",
                                  "Likely diagnosis: fall-related haematoma."])
def test_draft_cannot_state_a_decision(b, text):
    with pytest.raises(ck.ToolError, match="Only the RN decides"):
        draft(b, rid="R-106", ids=("O-106-1",), text=text, refs=("P-INC-5",))


def test_rn_flag_is_the_escalation_path_and_is_deduplicated(b):
    args = {"resident_id": "R-106", "shift_id": SHIFT, "reason": "Possible reportable incident (P-INC-5)",
            "observation_ids": ["O-106-1"]}
    first = b.call(ck.SHIFT_LEAD, "flag_for_rn_review", args)
    again = b.call(ck.SHIFT_LEAD, "flag_for_rn_review", args)
    assert first["status"] == "awaiting RN" and again["duplicate"] is True
    assert len(b.rn_flags) == 1


# ---------- 契约：参数不对就报错，不猜 ----------
def test_bad_arguments_are_a_tool_error(b):
    with pytest.raises(ck.ToolError, match="Bad arguments"):
        b.call(ck.NOTE_DRAFTER, "get_resident_context", {"resident": "R-101"})


def test_policy_search_finds_the_falls_section(b):
    hits = b.call(ck.NOTE_DRAFTER, "search_policy", {"query": "fall found on floor"})
    assert hits["sections"][0]["id"] == "P-FALL-2"

