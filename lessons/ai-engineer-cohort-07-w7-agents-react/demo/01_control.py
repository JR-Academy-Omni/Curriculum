"""谁决定下一步：同一笔退款咨询，三种控制方式。

    uv run python 01_control.py workflow    # 第 1 级：每一步由代码写死，不调用模型
    uv run python 01_control.py once        # 第 2 级：模型选一次工具（W6 的水平）
    uv run python 01_control.py react       # 第 3 级：手写 ReAct 循环
    uv run python 01_control.py react --task "客户 C003 问：订单 A3072 能退款吗？"
"""
import argparse
import json

from desk import Desk
from errors import with_retry
from guards import validate_args
from llm import TOOLS, ask, text_of
from run_trace import Trace

ORDER_ID, CUSTOMER_ID = "A1024", "C001"
TASK = "客户 C001 问：订单 A1024 能退款吗？请结合订单状态和退款政策回答。"
MAX_STEPS = 6


def workflow() -> None:
    trace = Trace()
    desk = Desk()

    trace.action("get_order", {"order_id": ORDER_ID})        # 第 1 步：永远先查订单
    order = desk.get_order(ORDER_ID, CUSTOMER_ID)
    trace.observation(order)

    trace.action("get_refund_policy", {})                    # 第 2 步：永远再查政策
    trace.observation(desk.get_refund_policy())

    # 第 3 步：判断规则也是代码写死的
    data = order["data"]
    eligible = data["state"] == "已签收" and data["delivered_days_ago"] <= 14
    reply = f"订单 {ORDER_ID} 金额 {data['amount']} 元，{'可以退款' if eligible else '不能退款'}。"

    trace.reply(reply)
    print("\n[结束] 路径固定：不管订单什么情况，步骤都一样。")


def tool_once() -> None:
    trace = Trace()
    desk = Desk()
    messages = [{"role": "user", "content": TASK}]
    one_at_a_time = {"type": "auto", "disable_parallel_tool_use": True}

    response = ask(messages, TOOLS, tool_choice=one_at_a_time)
    messages.append({"role": "assistant", "content": response.content})

    calls = [block for block in response.content if block.type == "tool_use"]
    for call in calls:                                 # 只有这一轮
        trace.action(call.name, call.input)
        result = getattr(desk, call.name)(**call.input)
        trace.observation(result)
        messages.append({"role": "user", "content": [
            {"type": "tool_result", "tool_use_id": call.id,
             "content": json.dumps(result, ensure_ascii=False)}]})

    final = ask(messages, TOOLS, tool_choice=one_at_a_time)
    if any(block.type == "tool_use" for block in final.content):
        print("\n[结束] 模型还想调用下一个工具，但这个程序只跑一轮，所以到此为止。")
        print("       要让它继续，就需要一个循环：这就是 Agent。")
    else:
        trace.reply(text_of(final))
        print("\n[结束] 只跑了一轮。")


def run_tool(desk: Desk, name: str, args: dict) -> dict:
    """工具由我们的代码执行：先校验，再执行，临时错误由代码重试。"""
    error = validate_args(name, args)
    if error:
        return error
    result, _ = with_retry(lambda: getattr(desk, name)(**args))
    return result


def react_loop(task: str, model, desk: Desk, trace: Trace, max_steps: int = MAX_STEPS) -> str:
    messages = [{"role": "user", "content": task}]

    for _ in range(max_steps):                          # 上限写在代码里
        response = model(messages, TOOLS)               # 模型决定下一步
        messages.append({"role": "assistant", "content": response.content})

        if response.stop_reason == "refusal":
            return "refused"
        calls = [b for b in response.content if b.type == "tool_use"]
        if not calls:                                   # 没有 Action：模型认为做完了
            trace.reply(text_of(response))
            return "done"

        results = []
        for call in calls:                              # Action
            trace.action(call.name, call.input)
            observation = run_tool(desk, call.name, call.input)
            trace.observation(observation)              # Observation
            results.append({"type": "tool_result", "tool_use_id": call.id,
                            "content": json.dumps(observation, ensure_ascii=False),
                            "is_error": observation["status"] == "error"})
        messages.append({"role": "user", "content": results})  # 结果进入状态，回到循环

    return "max_steps"


def main() -> None:
    parser = argparse.ArgumentParser(description="三种控制方式")
    parser.add_argument("mode", choices=["workflow", "once", "react"])
    parser.add_argument("--task", default=TASK, help="只用于 react")
    args = parser.parse_args()

    if args.mode == "workflow":
        workflow()
    elif args.mode == "once":
        tool_once()
    else:
        trace = Trace()
        print(f"[任务] {args.task}")
        reason = react_loop(args.task, ask, Desk(), trace)
        print(f"\n[结束] 退出原因：{reason}，共 {len(trace.steps)} 个 Action")


if __name__ == "__main__":
    main()
