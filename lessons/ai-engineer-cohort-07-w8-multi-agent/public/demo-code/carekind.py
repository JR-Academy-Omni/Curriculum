"""CareKind 后台：工具契约、权限矩阵、Draft 存储和审计记录。

这里不调用模型。所有边界都写在代码里，tests/ 直接测这一层：
- 每个 Agent 能调用哪些工具，由 PERMISSIONS 决定（Agent 配置里没有的工具也会在这里再挡一次）
- create_progress_note_draft 只能写 Draft，同一位住户、同一班次只写一次（幂等）
- 只能引用已确认的观察记录；不能写"是否需要上报"的结论
- flag_for_rn_review 是唯一的升级出口：交给人（RN），不由 AI 决定
"""
from __future__ import annotations

import json
import re
import threading
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).parent

# Agent 名字与 setup_agents.py 里一致。名字也是权限的主键。
SHIFT_LEAD = "Shift lead"
NOTE_DRAFTER = "Note drafter"
POLICY_CHECKER = "Policy checker"
SINGLE_AGENT = "Handover agent"

PERMISSIONS: dict[str, set[str]] = {
    SHIFT_LEAD: {"flag_for_rn_review"},
    NOTE_DRAFTER: {"get_resident_context", "search_policy", "create_progress_note_draft"},
    POLICY_CHECKER: {"search_policy", "get_draft"},
    SINGLE_AGENT: {"get_resident_context", "search_policy", "create_progress_note_draft",
                   "get_draft", "flag_for_rn_review"},
}

# 草稿里不允许出现的结论：是否上报只能由 RN 和机构经理决定（policy P-INC-5）
FORBIDDEN = re.compile(r"\b(is|is not|not) reportable\b|\bSIRS (report|notified|not required)|\bdiagnos", re.I)


def _schema(props: dict, required: list[str]) -> dict:
    return {"type": "object", "properties": props, "required": required, "additionalProperties": False}


TOOLS: dict[str, dict] = {
    "get_resident_context": {
        "type": "custom",
        "name": "get_resident_context",
        "description": "Read one resident's profile and the CONFIRMED observations for one shift. "
                       "Unconfirmed voice transcripts are never returned. Read-only.",
        "input_schema": _schema({"resident_id": {"type": "string"}, "shift_id": {"type": "string"}},
                                ["resident_id", "shift_id"]),
    },
    "search_policy": {
        "type": "custom",
        "name": "search_policy",
        "description": "Search the wing's documentation policy. Returns matching sections with their "
                       "section ids (e.g. P-FALL-2). Read-only.",
        "input_schema": _schema({"query": {"type": "string"}}, ["query"]),
    },
    "create_progress_note_draft": {
        "type": "custom",
        "name": "create_progress_note_draft",
        "description": "Save a progress note as a DRAFT for staff review. Never confirms or exports. "
                       "Must cite the observation ids it is based on. One draft per resident per shift: "
                       "calling again returns the existing draft.",
        "input_schema": _schema({
            "resident_id": {"type": "string"},
            "shift_id": {"type": "string"},
            "text": {"type": "string"},
            "observation_ids": {"type": "array", "items": {"type": "string"}},
            "policy_refs": {"type": "array", "items": {"type": "string"}},
        }, ["resident_id", "shift_id", "text", "observation_ids", "policy_refs"]),
    },
    "get_draft": {
        "type": "custom",
        "name": "get_draft",
        "description": "Read a saved draft by draft_id. Read-only.",
        "input_schema": _schema({"draft_id": {"type": "string"}}, ["draft_id"]),
    },
    "flag_for_rn_review": {
        "type": "custom",
        "name": "flag_for_rn_review",
        "description": "Hand a resident's issue to the Registered Nurse for a human decision. Use for possible "
                       "reportable incidents and for anything policy says goes to the RN. Does not decide anything.",
        "input_schema": _schema({
            "resident_id": {"type": "string"},
            "shift_id": {"type": "string"},
            "reason": {"type": "string"},
            "observation_ids": {"type": "array", "items": {"type": "string"}},
        }, ["resident_id", "shift_id", "reason", "observation_ids"]),
    },
}


def tools_for(agent_name: str) -> list[dict]:
    """Agent 配置里只放它有权限的工具：上下文隔离从工具列表开始。"""
    return [TOOLS[n] for n in sorted(PERMISSIONS[agent_name])]


class ToolError(Exception):
    """返回给模型的错误（is_error=True）。retryable 告诉它值不值得再试。"""

    def __init__(self, message: str, retryable: bool = False):
        super().__init__(message)
        self.retryable = retryable


@dataclass
class Backend:
    """一次运行的后台状态。runtime_dir=None 时只在内存里（测试用）。"""
    data_file: Path = HERE / "data" / "residents.json"
    policy_file: Path = HERE / "data" / "policy.md"
    runtime_dir: Path | None = None
    session_id: str = "offline"
    drafts: dict[str, dict] = field(default_factory=dict)
    rn_flags: list[dict] = field(default_factory=list)
    audit: list[dict] = field(default_factory=list)
    duplicates: int = 0

    def __post_init__(self):
        raw = json.loads(self.data_file.read_text(encoding="utf-8"))
        self.shift = raw["shift"]
        self.residents = raw["residents"]
        self.policy = self._parse_policy(self.policy_file.read_text(encoding="utf-8"))
        self._lock = threading.Lock()

    @staticmethod
    def _parse_policy(md: str) -> dict[str, str]:
        sections = {}
        for block in md.split("\n## ")[1:]:
            title, _, body = block.partition("\n")
            sid = title.split()[0]
            sections[sid] = f"{title.strip()}\n{body.strip()}"
        return sections

    # ---------- 入口：所有工具调用都经过这里 ----------
    def call(self, agent_name: str, tool: str, args: dict, thread_id: str | None = None) -> dict:
        record = {"ts": datetime.now(timezone.utc).isoformat(timespec="seconds"), "session": self.session_id,
                  "thread": thread_id, "agent": agent_name, "tool": tool, "args": args}
        try:
            if tool not in PERMISSIONS.get(agent_name, set()):
                raise ToolError(f"{agent_name} is not allowed to call {tool}.")
            result = getattr(self, f"_{tool}")(**args)
            record["status"] = "ok"
            return result
        except ToolError as e:
            record["status"] = "error"
            record["error"] = str(e)
            raise
        except TypeError as e:  # 参数不符合契约
            record["status"] = "error"
            record["error"] = f"bad arguments: {e}"
            raise ToolError(f"Bad arguments for {tool}: {e}") from e
        finally:
            with self._lock:
                self.audit.append(record)
                self._write_audit(record)

    def _write_audit(self, record: dict) -> None:
        if self.runtime_dir is None:
            return
        self.runtime_dir.mkdir(parents=True, exist_ok=True)
        with open(self.runtime_dir / "audit.jsonl", "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

    def _check_shift(self, shift_id: str) -> None:
        if shift_id != self.shift["id"]:
            raise ToolError(f"Unknown shift {shift_id}. Current shift is {self.shift['id']}.")

    def _resident(self, resident_id: str) -> dict:
        if resident_id not in self.residents:
            raise ToolError(f"Unknown resident {resident_id}.")
        return self.residents[resident_id]

    def _confirmed(self, resident_id: str) -> list[dict]:
        obs = self._resident(resident_id)["observations"]
        if obs == "SYSTEM_UNAVAILABLE":
            # 合成的部分失败：这位住户的记录系统不可用，重试也没用
            raise ToolError(f"Care record system unavailable for {resident_id}. Not retryable this shift; "
                            "report the resident as not covered.", retryable=False)
        return [o for o in obs if o["confirmed"]]

    # ---------- 工具实现 ----------
    def _get_resident_context(self, resident_id: str, shift_id: str) -> dict:
        self._check_shift(shift_id)
        r = self._resident(resident_id)
        return {"resident_id": resident_id, "name": r["name"], "room": r["room"], "care_flags": r["care_flags"],
                "shift": self.shift, "observations": self._confirmed(resident_id)}

    def _search_policy(self, query: str) -> dict:
        words = {w for w in re.findall(r"[a-z]+", query.lower()) if len(w) > 3}
        scored = sorted(((sum(w in text.lower() for w in words), sid) for sid, text in self.policy.items()),
                        reverse=True)
        hits = [sid for score, sid in scored if score > 0][:2] or ["P-DOC-1"]
        return {"sections": [{"id": sid, "text": self.policy[sid]} for sid in hits]}

    def _create_progress_note_draft(self, resident_id: str, shift_id: str, text: str,
                                    observation_ids: list[str], policy_refs: list[str]) -> dict:
        self._check_shift(shift_id)
        valid_ids = {o["id"] for o in self._confirmed(resident_id)}
        if not observation_ids:
            raise ToolError("A draft must cite at least one confirmed observation id.")
        bad = [i for i in observation_ids if i not in valid_ids]
        if bad:
            raise ToolError(f"Not confirmed observations for {resident_id}: {bad}. Use only ids from get_resident_context.")
        unknown = [p for p in policy_refs if p not in self.policy]
        if unknown:
            raise ToolError(f"Unknown policy sections: {unknown}.")
        if FORBIDDEN.search(text):
            raise ToolError("Draft states a diagnosis or a reportability decision. Only the RN decides; "
                            "describe what was observed and flag for RN review instead.")
        key = f"{resident_id}:{shift_id}"  # 幂等键：由代码按业务生成，不让模型编
        with self._lock:
            if key in self.drafts:
                self.duplicates += 1
                return {**self.drafts[key], "duplicate": True,
                        "message": "A draft already exists for this resident and shift. Nothing new was written."}
            draft = {"draft_id": f"D-{resident_id}-{shift_id}", "resident_id": resident_id, "shift_id": shift_id,
                     "status": "Draft", "text": text, "observation_ids": observation_ids,
                     "policy_refs": policy_refs}
            self.drafts[key] = draft
        return {**draft, "duplicate": False}

    def _get_draft(self, draft_id: str) -> dict:
        for d in self.drafts.values():
            if d["draft_id"] == draft_id:
                return d
        raise ToolError(f"No draft {draft_id}.")

    def _flag_for_rn_review(self, resident_id: str, shift_id: str, reason: str,
                            observation_ids: list[str]) -> dict:
        self._check_shift(shift_id)
        self._resident(resident_id)
        with self._lock:
            for f in self.rn_flags:  # 同一住户同一原因不重复升级
                if f["resident_id"] == resident_id and f["reason"] == reason:
                    return {**f, "duplicate": True}
            flag = {"flag_id": f"F-{len(self.rn_flags) + 1}", "resident_id": resident_id, "shift_id": shift_id,
                    "reason": reason, "observation_ids": observation_ids, "status": "awaiting RN"}
            self.rn_flags.append(flag)
        return {**flag, "duplicate": False}

    # ---------- 收尾 ----------
    def save(self) -> None:
        if self.runtime_dir is None:
            return
        out = self.runtime_dir / "drafts"
        out.mkdir(parents=True, exist_ok=True)
        for d in self.drafts.values():
            (out / f"{d['draft_id']}.json").write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding="utf-8")
        (self.runtime_dir / "rn_flags.json").write_text(json.dumps(self.rn_flags, ensure_ascii=False, indent=2),
                                                       encoding="utf-8")

