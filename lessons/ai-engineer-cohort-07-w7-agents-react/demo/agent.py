"""退款客服 Agent：课上所有边界都在这一个 Agent 里，每次只换场景。

    uv run python agent.py --order A1024              # 小额，自动处理
    uv run python agent.py --resume                   # 恢复上一次的对话
    uv run python agent.py --order A4096              # 680 元，暂停等人审批
    uv run python agent.py --order A8192              # 永远 pending，hook 发现打转
    uv run python agent.py --order A8192 --max-turns 4 --no-loop-detect   # 只靠回合上限
    uv run python agent.py --order A8192 --interrupt  # 运行中由人打断

彩排时加 --auto yes 或 --auto no，审批就不用手动输入。
"""
import argparse
import asyncio
import json

from claude_agent_sdk import ClaudeSDKClient, HookMatcher, ResultError

from desk import Desk, runtime_dir
from errors import make_error
from guards import LoopDetector, policy_gate
from handoff import build_handoff
from llm import require_key
from run_trace import Trace
from sdk_common import Printer, options, report

TOOLS = ["get_order", "get_refund_policy", "check_refund_status", "issue_refund", "send_refund_email"]
MAX_TURNS = 8
MAX_BUDGET_USD = 1.0
FOLLOW_UP = "刚才那张订单金额是多少？不要调用工具，直接回答。"

# 停下来的原因 → (没做完的事, 需要人决定什么)
NEXT_STEPS = {
    "approval_denied": (["退款", "确认邮件"], "主管已拒绝。请联系客户说明原因，或走例外流程。"),
    "loop_detected": (["确认退款最终状态"], "退款一直 pending，请到退款系统核实是否卡单。"),
    "interrupted": (["确认退款最终状态"], "运行被人工打断，请决定是否继续。"),
}
DEFAULT_NEXT_STEP = (["完成这次任务"], "运行提前结束，请查看运行记录后决定是否重跑。")


def task_for(order_id: str, customer_id: str) -> str:
    if order_id == "A8192":
        return (f"订单 {order_id} 的退款正在处理。请反复调用 check_refund_status 查询，"
                "一直查到状态不再是 pending 才能结束，然后告诉我结果。")
    return (f"客户 {customer_id} 申请退款订单 {order_id}。请核实订单和政策，符合条件就调用 issue_refund 退款"
            f"（idempotency_key 用 refund-{order_id}），然后发确认邮件。不符合就说明原因。")


def request_of(order_id: str) -> str:
    return "查询退款进度" if order_id == "A8192" else "申请退款"


def deny(reason: str, **extra) -> dict:
    return {**extra, "hookSpecificOutput": {
        "hookEventName": "PreToolUse",
        "permissionDecision": "deny",
        "permissionDecisionReason": reason,
    }}


def make_gate(desk: Desk, stop: dict, ask_human, detector: LoopDetector | None = None):
    """每次工具调用之前都经过这里：先看有没有打转，再看策略，需要时等人决定。"""

    async def gate(input_data, tool_use_id, context):
        tool = input_data["tool_name"].rsplit("__", 1)[-1]
        args = input_data["tool_input"]

        if detector and detector.is_looping(tool, args):
            stop["reason"] = "loop_detected"
            return {"continue_": False, "stopReason": "检测到重复调用，停止循环"}

        decision, reason = policy_gate(desk, tool, args)
        if decision == "allow":
            return {}
        if decision == "deny":
            return deny(reason)

        order = desk.orders[args["order_id"]]
        if await ask_human(order, reason):
            # approval_id 由代码写入，模型看不到也编不出来
            approval_id = desk.grant_approval(args["order_id"], order["amount"], "主管")
            return {"hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                "permissionDecision": "allow",
                "updatedInput": {**args, "approval_id": approval_id},
            }}
        stop["reason"] = "approval_denied"
        return deny("主管拒绝了这笔退款", continue_=False, stopReason="审批被拒绝，Agent 停止")

    return gate


def make_ask_human(auto: str | None):
    async def ask_human(order: dict, reason: str) -> bool:
        print(f"\n>>> 需要审批：{reason}\n>>> 系统里的订单：金额 {order['amount']}，客户 {order['customer_id']}")
        answer = auto or await asyncio.to_thread(input, ">>> 批准吗？(y/n) ")
        print(f">>> 回答：{answer}")
        return answer.strip().lower() in {"y", "yes"}

    return ask_human


def stop_reason_of(stop: dict, result, failure: str | None) -> str | None:
    """这次运行为什么停下。正常做完返回 None。"""
    if stop.get("reason"):
        return stop["reason"]
    if failure:
        return failure
    if result is None:
        return "no_result"
    if result.is_error or result.subtype != "success":
        return result.terminal_reason or result.subtype
    return None


def state_file():
    return runtime_dir() / "task_state.json"


def save_task_state(order_id: str, customer_id: str, status: str, session_id: str | None, trace: Trace) -> dict:
    """task state：我们自己存，不靠模型记忆。"""
    state = {"order_id": order_id, "customer_id": customer_id, "status": status,
             "session_id": session_id, "trace_id": trace.trace_id}
    state_file().write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")
    return state


async def run_agent(prompt: str, agent_options, trace: Trace, interrupt: bool, stop: dict) -> tuple[Printer, str | None]:
    printer = Printer(trace)
    failure = None
    print(f"[任务] {prompt}")
    try:
        async with ClaudeSDKClient(options=agent_options) as client:
            await client.query(prompt)
            async for message in client.receive_response():
                printer.feed(message)
                if interrupt and len(trace.steps) >= 2 and not stop.get("reason"):
                    stop["reason"] = "interrupted"
                    print("\n[操作员] 打断！")
                    await client.interrupt()
    except ResultError as error:          # 撞到上限时，CLI 报告结果后以非零退出
        failure = error.terminal_reason or error.subtype or "sdk_error"
    report(printer.result)
    return printer, failure


def agent_options(desk: Desk, stop: dict, args, **extra):
    gate = make_gate(desk, stop, make_ask_human(args.auto), None if args.no_loop_detect else LoopDetector(limit=3))
    # timeout：默认 60 秒，人来审批要留够时间
    # on_failure：默认 hook 出错算“没意见”，调用会继续；审批 hook 必须 fail closed
    hooks = {"PreToolUse": [HookMatcher(matcher="mcp__refund__.*", hooks=[gate], timeout=600, on_failure="block")]}
    return options(allowed=TOOLS, max_turns=args.max_turns, max_budget_usd=MAX_BUDGET_USD, hooks=hooks, **extra)


async def new_run(args) -> None:
    desk = Desk()
    desk.reset()
    order_id, customer_id = args.order, desk.orders[args.order]["customer_id"]
    trace, stop = Trace(), {}

    printer, failure = await run_agent(task_for(order_id, customer_id), agent_options(desk, stop, args),
                                       trace, args.interrupt, stop)
    reason = stop_reason_of(stop, printer.result, failure)

    if reason == "approval_denied":
        for step in trace.steps:              # 被拒绝的调用没有执行，记下来
            if step["observation"] is None:
                step["observation"] = make_error("approval_required", "审批被拒绝，未执行")
    if reason:
        not_done, next_step = NEXT_STEPS.get(reason, DEFAULT_NEXT_STEP)
        print(build_handoff(reason, trace, {"customer_id": customer_id, "order_id": order_id},
                            not_done, next_step, request=request_of(order_id)).render())

    trace.save()
    session_id = printer.result.session_id if printer.result else None
    state = save_task_state(order_id, customer_id, reason or "completed", session_id, trace)
    print(f"\n账本（只看系统）：{desk.ledger()}")
    print(f"已保存 task state：{state}")


async def resume_run(args) -> None:
    if not state_file().exists():
        raise SystemExit("还没有可以恢复的运行，先跑一次 --order。")
    saved = json.loads(state_file().read_text(encoding="utf-8"))
    session_id = args.resume if args.resume != "last" else saved["session_id"]
    if not session_id:
        raise SystemExit("上一次运行没有 session_id，无法恢复。")

    desk = Desk()
    trace, stop = Trace(), {}
    await run_agent(FOLLOW_UP, agent_options(desk, stop, args, resume=session_id), trace, False, stop)

    print("\n这是全新的进程，对话回来了，内存里的东西都没了。业务事实要从系统读：")
    print(f"退款账本：{desk.ledger()}")
    print(f"业务进度：{saved['status']}（从自己存的 task state 读回）")


def parse_args():
    parser = argparse.ArgumentParser(description="退款客服 Agent")
    parser.add_argument("--order", default="A1024", choices=sorted(Desk().orders))
    parser.add_argument("--resume", nargs="?", const="last", help="恢复对话；不写 id 就用 task state 里的")
    parser.add_argument("--max-turns", type=int, default=MAX_TURNS)
    parser.add_argument("--no-loop-detect", action="store_true", help="关掉循环检测，只靠回合上限")
    parser.add_argument("--interrupt", action="store_true", help="看到两个 Action 后由操作员打断")
    parser.add_argument("--auto", choices=["yes", "no"], help="彩排用，自动回答审批")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    require_key()
    asyncio.run(resume_run(args) if args.resume else new_run(args))


if __name__ == "__main__":
    main()
