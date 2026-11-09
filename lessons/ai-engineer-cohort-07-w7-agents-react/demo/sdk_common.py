"""Claude Agent SDK 的公共配置，给 agent.py 用。"""
import json
import sys
from pathlib import Path

from claude_agent_sdk import (
    AssistantMessage, ClaudeAgentOptions, ResultMessage, TextBlock, ToolResultBlock,
    ToolUseBlock, UserMessage,
)

from run_trace import Trace
from settings import Settings

HERE = Path(__file__).parent


def tool_name(tool: str) -> str:
    return f"mcp__refund__{tool}"


def options(allowed: list[str], **extra) -> ClaudeAgentOptions:
    return ClaudeAgentOptions(
        model=Settings().demo_model,
        system_prompt=Settings().system_prompt(),
        tools=[],                      # 关掉内置 Read/Bash 等，Agent 只剩退款工具
        mcp_servers={"refund": {"type": "stdio", "command": sys.executable,
                                "args": [str(HERE / "refund_server.py")]}},
        strict_mcp_config=True,        # 不加载本机其它 MCP 配置
        setting_sources=[],            # 不读本机 settings / CLAUDE.md
        allowed_tools=[tool_name(t) for t in allowed],  # 自动批准，不是“只能用这些”
        permission_mode="dontAsk",     # 没批准的直接拒绝，不弹窗
        cwd=HERE,
        env=Settings().sdk_env(),      # .env 里的 key 不在 os.environ，要显式传给 CLI
        **extra,
    )


def _parse(content) -> object:
    if isinstance(content, list):
        content = "".join(part.get("text", "") for part in content if isinstance(part, dict))
    try:
        return json.loads(content)
    except (TypeError, ValueError):
        return content


class Printer:
    """把 SDK 的消息流翻译成 Action / Observation。ThinkingBlock 一律跳过。"""

    def __init__(self, trace: Trace):
        self.trace = trace
        self.by_id: dict[str, int] = {}
        self.result: ResultMessage | None = None

    def feed(self, message) -> None:
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, ToolUseBlock):
                    self.by_id[block.id] = self.trace.action(block.name.rsplit("__", 1)[-1], block.input)
                elif isinstance(block, TextBlock):
                    self.trace.reply(block.text)
        elif isinstance(message, UserMessage) and isinstance(message.content, list):
            for block in message.content:
                if isinstance(block, ToolResultBlock) and block.tool_use_id in self.by_id:
                    self.trace.observation(_parse(block.content), self.by_id[block.tool_use_id])
        elif isinstance(message, ResultMessage):
            self.result = message


def report(result: ResultMessage | None) -> None:
    if result is None:
        print("\n[结束] 没有收到 ResultMessage")
        return
    cost = f"{result.total_cost_usd:.4f}" if result.total_cost_usd is not None else "?"
    print(f"\n[结束] subtype={result.subtype}  terminal_reason={result.terminal_reason}"
          f"  回合={result.num_turns}  费用=${cost}")
