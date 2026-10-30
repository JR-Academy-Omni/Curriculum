# W6 演示实测记录

实测日期：2026-10-30。机器：macOS（Apple M5），Python 3.12.14。
版本：FastMCP 4.1.4，MCP Python SDK 2.3.0（`fastmcp version` 输出）。
代码：`demo/refund_server.py`、`demo/data/orders.json`（合成数据：A1024 属于 C001，A2048 属于 C002）。

这不是正式 starter。正式 starter 的版本锁定、命令和测试由 Practice 那边验收；课件上的命令和输出以本文件为准，starter 定版后再核对一次。

## 1. Tool discovery：`fastmcp list`

客户端配置（标准 `mcpServers` 格式，FastMCP CLI 支持 `cwd`）：

```json
{
  "mcpServers": {
    "refund-desk": {
      "command": "/绝对路径/.venv/bin/python",
      "args": ["refund_server.py"],
      "env": { "ORDERS_API_TOKEN": "demo-token" },
      "cwd": "/绝对路径/demo"
    }
  }
}
```

`fastmcp list mcp-config.json --resources --prompts` 输出（节选）：

```
Tools (2)
  get_order(order_id: str, customer_id: str) -> dict
    查一张订单的状态。只读，不改任何数据。
  send_refund_email(order_id: str) -> dict
    给客户发退款确认邮件。课堂版是模拟操作，不会真的发送。
Resources (1)
  policy://refund
    refund_policy — 退款政策（只看不办）。
Prompts (1)
  refund_reply(customer_name)
    标准退款回复模板。
```

`--json` 输出里 `get_order` 的 inputSchema（由 type hint 自动生成）：

```json
{
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "order_id": { "type": "string" },
    "customer_id": { "type": "string" }
  },
  "required": ["order_id", "customer_id"]
}
```

启动横幅和 `INFO Starting MCP server 'refund-desk' with transport 'stdio'` 都写在 stderr，不影响 stdout 上的协议。

## 2. 手动调用：`fastmcp call`

| 命令 | 返回 |
|---|---|
| `fastmcp call mcp-config.json get_order order_id=A1024 customer_id=C001` | `{"status": "ok", "data": {"order_id": "A1024", "state": "已签收", "amount": 129}}` |
| `… get_order order_id=Z9999 customer_id=C001` | `{"status": "error", "error": {"code": "not_found", "message": "没有订单 Z9999"}}` |
| `… get_order order_id=A2048 customer_id=C001` | `{"status": "error", "error": {"code": "forbidden", "message": "这张订单不属于该客户"}}` |
| `… send_refund_email order_id=A1024` | `{"status": "simulated", "data": {"order_id": "A1024", "note": "演练：没有真的发出邮件"}}` |
| `… get_order order_id=A1024`（少一个参数） | `Error: Missing required arguments: customer_id`（schema 校验拦下，工具代码没有运行） |

## 3. 启动错误（逐个改坏配置复现）

从根目录 `/` 启动，环境只保留 `HOME` 和 `PATH=/usr/bin:/bin`。

| 改坏了什么 | 屏幕上的报错（原文） |
|---|---|
| `command` 写成 `python`（PATH 里没有） | `Error: Client failed to connect: [Errno 2] No such file or directory: 'python'` |
| 去掉 `cwd`，`args` 用相对路径 | `…/.venv/bin/python: can't open file '//refund_server.py': [Errno 2] No such file or directory` |
| 去掉 `env` | `KeyError: 'ORDERS_API_TOKEN'` |
| `command` 换成没装 fastmcp 的 `/usr/bin/python3` | `ModuleNotFoundError: No module named 'fastmcp'` |

另一次真实遇到的：直接在 shell 里运行 `fastmcp list refund_server.py`，而 `.venv/bin` 不在 PATH 里，报 `Error: Client failed to connect: [Errno 2] No such file or directory: 'fastmcp'`（FastMCP CLI 会再启动一个 `fastmcp` 子进程）。

## 4. env 不会自动继承

在 shell 里 `export ORDERS_API_TOKEN=demo-token` 之后运行 `fastmcp list refund_server.py`，仍然报 `KeyError: 'ORDERS_API_TOKEN'`。

原因（源码）：MCP Python SDK 2.3.0 `mcp/client/stdio.py` 的 `get_default_environment()`，注释是 “Returns only the environment variables that are safe to inherit”，只从 `DEFAULT_INHERITED_ENV_VARS` 白名单（如 `PATH`）里取值。所以密钥要写进配置的 `env`。

## 5. stdout 混进一行 `print`

在 `mcp = FastMCP(...)` 之后加 `print("loading orders...")`：

- 直接运行 server，这一行确实出现在 stdout。
- 用 FastMCP CLI（MCP SDK 2.3.0 客户端）连接，工具照样列出来，屏幕上没有任何提示。源码 `_parse_line()` 解析失败时 `logger.exception("Failed to parse JSONRPC message from server")`，把这一行当作错误值交给 session，不断开连接。
- 规范原文（stdio transport）：server MUST NOT write anything to its stdout that is not a valid MCP message。其他客户端不一定这样宽容；未在 Claude Code 上实测（需要开真实会话、调用模型）。

课上的说法：规范禁止；有的客户端悄悄丢掉，有的可能断线；别赌，日志写 stderr。

## 6. 握手：`initialize` 还是 `server/discover`

直接往 server 的 stdin 写 JSON-RPC：

- `{"method": "server/discover"}` → `{"error": {"code": -32601, "message": "Method not found", "data": "server/discover"}}`
- `{"method": "initialize", "params": {"protocolVersion": "2025-11-25", …}}` → `{"result": {"protocolVersion": "2025-11-25", "capabilities": {"prompts": …, "resources": …, "tools": …}, "serverInfo": {"name": "refund-desk", "version": "4.1.4"}}}`

结论：FastMCP 4.1.4 还是 2025-11-25 版协议，走 `initialize` 握手；2026-07-28 版规范的 `server/discover` 尚未实现。课上按 `initialize` 讲，新规范只用一行脚注。

## 7. Claude Code 的配置

- `claude mcp add my-server -e API_KEY=xxx -- npx my-mcp-server`（`claude mcp --help` 原文示例，Claude Code 2.1.312）。
- `.mcp.json` 只有 `command`、`args`、`env`，没有 `cwd` 字段（code.claude.com/docs/en/mcp，2026-10-27 核对），所以 `args` 里要写绝对路径；server 里的数据路径按 `Path(__file__).parent` 找，不依赖启动目录。
