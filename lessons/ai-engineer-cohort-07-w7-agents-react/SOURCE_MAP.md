# SOURCE MAP

核对日期：2026-11-06。版本：claude-agent-sdk 0.2.178、fastmcp 4.1.6、mcp 2.3.0、anthropic 2.6.0；PyPI 当日版本 openai-agents 0.24.0、pydantic-ai 2.66.0、langgraph 1.2.20。

## 课程范围

| 内容 | 来源 |
|---|---|
| 大纲、时间、课程边界、不展示隐藏推理 | Curriculum 仓库 `ai-engineer-bootcamp/public/outline.json` L111、L112、L115、L117；`COHORT_07_OUTLINE.md` |
| W1–W6 内容 | `COHORT_07_OUTLINE.md` 第 2 节 |
| 学员情况、类比、退款例子、四道闸 | `lessons/ai-engineer-cohort-07-w6-tool-calling-mcp/PRD.md` |
| 超出大纲的四个主题 | 讲师要求，2026-11-06 |

## 概念

| 页 | 内容 | 来源 |
|---|---|---|
| 7–11 | Workflow 与 Agent 的区别，先选简单方案 | Anthropic, Building Effective Agents, https://www.anthropic.com/engineering/building-effective-agents |
| 14、16 | ReAct，原始形式含 Thought | Yao et al., ReAct, https://arxiv.org/abs/2210.03499 |
| 34–35、42、45–47、讲义第 8 节 | 错误分类、经验法则、结构性约束、交接单、防御式编程（讲义） | 本课的教学设计，由讲师要求整理，不是某份标准 |
| 49 | Agentic AI 设计模式：Single-agent、ReAct、Human-in-the-loop，以及从单个 Agent 开始的建议（核对于 2026-11-07） | Google Cloud Architecture Center, https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system |

## Claude Agent SDK

以已安装的包为准（`claude_agent_sdk/types.py`、`client.py`）和 https://github.com/anthropics/claude-agent-sdk-python 。

| 页 | 内容 | 依据 |
|---|---|---|
| 21、27 | `max_turns`、`max_budget_usd`、`resume`、`interrupt()`、hooks | `ClaudeAgentOptions`、`ClaudeSDKClient` |
| 23 | `tools=[]` 关闭内置工具；`allowed_tools` 只是自动批准 | `ClaudeAgentOptions` docstring；README Using Tools 一节 |
| 41 | `dontAsk`：未预先批准的拒绝 | `permission_mode` docstring |
| 41 | hook 默认超时 60 秒；默认失败算没有决定，`on_failure="block"` 才阻止 | `HookMatcher` 字段注释 |

## 框架对比（第 50–51 页）

| 内容 | 来源 |
|---|---|
| `max_turns`、`MaxTurnsExceeded` | https://openai.github.io/openai-agents-python/running_agents/ |
| `needs_approval`、interruptions、`RunState` | https://openai.github.io/openai-agents-python/human_in_the_loop/ |
| 并行 guardrail 触发时，工具可能已经执行 | https://openai.github.io/openai-agents-python/guardrails/ |
| `requires_approval`、`DeferredToolRequests` | https://ai.pydantic.dev/deferred-tools/ |
| `UsageLimits(request_limit=...)` | https://ai.pydantic.dev/agent/ |
| `ModelRetry` | https://ai.pydantic.dev/tools-advanced/ |
| `interrupt()` 需要 checkpointer，`Command(resume=...)` 接上；恢复时节点从头重跑（讲稿第 50 页备查，核对于 2026-11-08） | https://docs.langchain.com/oss/python/langgraph/interrupts |
| checkpointer、`thread_id`；`InMemorySaver` / `MemorySaver` 不跨重启，`SqliteSaver` 开发用，`PostgresSaver` 生产用；Store 管跨 thread 的长期记忆（讲稿第 50 页备查，核对于 2026-11-08） | https://docs.langchain.com/oss/python/langgraph/persistence |
| `recursion_limit`、`GraphRecursionError` | https://docs.langchain.com/oss/python/langgraph/graph-api |

## 代码

页面上标了文件名的代码，都从 `demo/` 文件原文摘出，已用脚本逐段核对。页面顶部的代码标签已逐一核对：文件存在，函数在该文件里。第 10、16、47 页是教学示例，不是实际输出，第 16、47 页已在页面上标注。
