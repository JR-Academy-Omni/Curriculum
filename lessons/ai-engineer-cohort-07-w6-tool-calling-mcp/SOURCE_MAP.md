# AI Engineer W6 · Tool Calling, MCP & CLI Integration · SOURCE_MAP

## 内容与资产来源

终端输出全部来自本机实测（FastMCP 4.1.4、MCP Python SDK 2.3.0，2026-10-30），记录在 `research/demo-runs.md`；示例代码在 `demo/`。

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 3 足迹地图 | `lessons/ai-engineer-landscape-talk/src/data/cohort7Schedule.ts`；W2–W5 PRD | 2026-10-30 | 事实；W1 关键词待讲师确认 | 内部 |
| 4–6 W5 复习 | W5 课件第 13、20、25、32 页 | 2026-10-30 | 事实 | 内部 |
| 8 场景对比 | 教学示例 | — | 示例 | — |
| 9–11 定义与类比 | 讲师 2026-10-30 确认的类比；MCP 规范 overview | 2026-10-30 | 定义是事实，类比是教学用比方 | — |
| 13 一来一回 | MCP 规范 tools；`research/demo-runs.md` 第 2 节 | 2026-10-30 | 事实 | — |
| 14 tool_use 条子 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works（“The model never runs anything on its own.”）；tool_use 块格式见 tool-use/overview | 2026-10-30 | 事实；JSON 是格式示例，不是实测 | — |
| 15 检查点 1 | 教学示例 | — | 示例 | — |
| 16 业务参数 vs SQL | W6 正文范围（讲师提供） | 2026-10-30 | 观点（设计原则） | 内部 |
| 17 实习生测试 | https://developers.openai.com/api/docs/guides/function-calling best practices（“Pass the intern test.”）；docstring 取自 `demo/refund_server.py` | 2026-10-30 | 观点（设计原则） | — |
| 18、19 三张回执、schema 拦截 | `research/demo-runs.md` 第 2 节，`fastmcp call` 原文 | 2026-10-30 | 事实 | 合成数据 |
| 21 N×M | 教学示例（数字为示例） | — | 示例 | — |
| 22 三种能力 | MCP 规范 server primitives（tools / resources / prompts） | 2026-10-27 | 事实 | — |
| 24 MCP 的边界 | W6 正文范围；MCP 规范 | 2026-10-30 | 观点 + 事实 | — |
| 26 server 代码 | `demo/refund_server.py` 节选；FastMCP quickstart https://gofastmcp.com/getting-started/quickstart | 2026-10-30 | 事实 | — |
| 27 inputSchema | `fastmcp list --json` 实测输出 | 2026-10-30 | 事实 | — |
| 28 list / call | `research/demo-runs.md` 第 1、2 节 | 2026-10-30 | 事实 | — |
| 30 Claude Code 写法 | `claude mcp --help`（Claude Code 2.1.312）；code.claude.com/docs/en/mcp（无 cwd 字段） | 2026-10-30 | 事实 | — |
| 30 mcpServers 的 cwd | 实测：FastMCP CLI 读取 mcpServers 配置并按 cwd 启动 | 2026-10-30 | 事实 | — |
| 31 initialize | `research/demo-runs.md` 第 6 节（server/discover → Method not found） | 2026-10-30 | 事实 | — |
| 31 新规范脚注 | https://modelcontextprotocol.io/specification/2026-07-28/changelog | 2026-10-27 | 事实 | — |
| 32 stdout | MCP 规范 stdio transport；`research/demo-runs.md` 第 5 节 | 2026-10-30 | 事实；其他客户端未测 | — |
| 33 env 白名单 | MCP Python SDK 2.3.0 `mcp/client/stdio.py` `get_default_environment()`；实测 KeyError | 2026-10-30 | 事实（仅限该 client） | — |
| 34 四条报错 | `research/demo-runs.md` 第 3 节，逐个改坏配置复现 | 2026-10-30 | 事实 | — |
| 36 四道闸 | W6 课程描述（Secrets、permission、allowlist、human confirmation） | 2026-10-30 | 观点（安全原则） | 内部 |
| 37 simulated | `fastmcp call … send_refund_email` 实测；反例为教学示例 | 2026-10-30 | 事实 + 示例 | — |
| 39 Pi | https://github.com/earendil-works/pi；https://earendil.com/posts/you-said-no-mcp/（2026-09-29） | 2026-10-27 | 事实 | — |
| 40 后续 | 第七期排课：W7 理论、C7P08、C7P09 | 2026-10-30 | 事实 | 内部 |

Logo 使用模板随附官方 SVG，不用生成模型绘制。字体 license 随构建复制到 licenses/。
