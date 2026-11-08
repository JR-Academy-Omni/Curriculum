"""交接单（handoff message）。

审批：答 yes 后 Agent 继续。交接：Agent 停下，由人接手。
交接单由代码从运行记录生成，所以里面没有模型编造的事实。
接手的人不用读完整 trace，也知道：为什么停、做了什么、没做什么、要他决定什么。
"""
from dataclasses import asdict, dataclass, field

from guards import WRITE_TOOLS
from run_trace import Trace


# 只收系统字段。客户留言是不可信文字，不能混进“事实”。
FACT_FIELDS = ("state", "amount", "delivered_days_ago", "policy")


def _bare(tool: str) -> str:
    return tool.rsplit("__", 1)[-1]


def side_effect_state(observation) -> str:
    """写操作现在到底是什么状态。分不清就写 unknown，不猜。"""
    if not isinstance(observation, dict):
        return "unknown"
    if observation.get("status") in {"simulated", "ok"}:
        return "completed"
    error = observation.get("error") or {}
    return "unknown" if error.get("category") == "unknown_outcome" else "not_attempted"


def gather_context(request: str, trace: Trace) -> dict:
    """背景：客户要什么，加上运行记录里查到的事实。"""
    facts = {}
    for step in trace.steps:
        observation = step["observation"]
        if isinstance(observation, dict) and observation.get("status") == "ok":
            data = observation.get("data") or {}
            facts.update({key: data[key] for key in FACT_FIELDS if key in data})
    return {"request": request, "facts": facts}


@dataclass
class Handoff:
    reason_code: str
    case: dict
    context: dict
    done: list
    not_done: list
    side_effects: list
    next_step: str
    trace_id: str
    model_summary: str = ""  # 可选，必须标明是模型写的，不算事实
    extra: dict = field(default_factory=dict)

    def to_dict(self) -> dict:
        return asdict(self)

    def render(self) -> str:
        lines = ["", "========== 交接单 HANDOFF ==========",
                 f"原因       {self.reason_code}",
                 f"案件       {self.case}",
                 f"客户请求   {self.context['request'] or '（未记录）'}",
                 f"已查到     {self.context['facts'] or '（无）'}"]
        lines.append("已完成")
        lines += [f"  - {item}" for item in self.done] or ["  - （无）"]
        lines.append("未完成")
        lines += [f"  - {item}" for item in self.not_done] or ["  - （无）"]
        lines.append("副作用状态")
        lines += [f"  - {item['tool']} {item['order_id']}：{item['state']}" for item in self.side_effects] or ["  - （无写操作）"]
        lines.append(f"需要你决定 {self.next_step}")
        lines.append(f"运行记录   {self.trace_id}")
        if self.model_summary:
            lines.append(f"模型摘要（非事实，仅供参考）{self.model_summary}")
        lines.append("====================================")
        return "\n".join(lines)


def build_handoff(reason_code: str, trace: Trace, case: dict, not_done: list,
                  next_step: str, model_summary: str = "", request: str = "") -> Handoff:
    done, side_effects = [], []
    for step in trace.steps:
        tool, observation = _bare(step["tool"]), step["observation"]
        status = observation.get("status") if isinstance(observation, dict) else "unknown"
        done.append(f"{tool} {step['args']} → {status}")
        if tool in WRITE_TOOLS:
            side_effects.append({"tool": tool, "order_id": step["args"].get("order_id"),
                                 "state": side_effect_state(observation)})
    return Handoff(reason_code, case, gather_context(request, trace), done, not_done, side_effects, next_step,
                   trace.trace_id, model_summary)
