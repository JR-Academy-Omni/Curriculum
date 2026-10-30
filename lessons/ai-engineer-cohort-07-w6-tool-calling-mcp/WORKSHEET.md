# AI Engineer W6 · Tool Calling, MCP & CLI Integration · 讲义

本课不布置作业。这份讲义给想课后自己看的同学：内容和课上一致。

## 一、八个词

| 术语 | 大白话 | 在公司里 |
|---|---|---|
| Tool | 我们写好的一段程序，只做一件事 | 后台的一个自动办理窗口 |
| Tool calling | 模型提出“请用这个工具”，程序执行，结果交回模型 | 客服填工单交给后台，后台办完写回执 |
| Schema | 工具要哪几个参数、每个是什么类型 | 工单上的固定栏位 |
| Result | 工具交回来的东西：成功给数据，失败说原因 | 后台回执 |
| MCP | 统一的连接规范 | 全公司统一的工单规范 |
| MCP server | 提供工具的小程序 | 按规范接单的后台部门 |
| MCP client | 使用工具的一方（在 Claude Code 这类应用里） | 派单的客服系统 |
| stdio | 两个程序之间一边写、一边读的管道 | 客服系统和后台之间的专用内线 |

记住两点：后台是只认格式的自动窗口，不是会变通的同事；客服专员（模型）只写单，送单和收回执的是客服系统（client）。

## 二、模型写出来的只是一张条子

模型调用工具时，输出的只是一段结构化文字（Anthropic API 里叫 tool_use，格式示例）：

```json
{"type": "tool_use", "name": "get_order", "input": {"order_id": "A1024", "customer_id": "C001"}}
```

这段文字自己什么也不做：我们的程序读到它，真的去执行 `get_order`；程序把结果塞回对话；模型看到结果才写回复。程序没执行，就什么都没发生，所以模型说“已为您退款”不等于真的退了。

## 三、Tool contract：一个好工具的四样东西

| 项 | 要求 | 反例 |
|---|---|---|
| 名字 | 一看就知道办什么：`get_order` | `do_stuff` |
| 描述（docstring） | 写给模型看：办什么、只读还是会改东西 | 空着 |
| 参数 | 有类型的业务参数：`order_id: str, customer_id: str` | `run_sql(query: str)` |
| 结果 | 统一 `status / data / error`；失败有可识别的 `code` | 只返回一句“出错了” |

**实习生测试**（OpenAI function calling 指南）：想象来了个新实习生，只给他看模型能看到的东西：名字、说明、参数。他能用对吗？他会问的问题，答案就写进说明里。实习生看不懂的说明，模型也看不懂。

失败至少分三种：`not_found`（查不到）、`forbidden`（没权限）、`timeout`（超时）。模型拿到不同的 code，下一步怎么回复客户也不同。

**schema 校验不代替授权**：少填一栏会被 schema 拦下；但栏位全对、单子不是他的，只能由我们的代码核对。

## 四、MCP 的三种能力

| | 是什么 | 谁决定什么时候用 | 示例 |
|---|---|---|---|
| Tools | 要后台去办的事 | 模型 | `get_order` |
| Resources | 只看不办的资料 | 应用 | `policy://refund` |
| Prompts | 写好的话术模板 | 用户 | `refund_reply` |

MCP 不是普通 API 的替代品，不自动给权限，也不要求 agent 循环。它只规定工具怎么接进来。

## 五、接进 CLI：五样配置和 stdio 的一生

| 配置 | 含义 | 常见坑 |
|---|---|---|
| command | 用哪个程序启动 | 写 `python`，但 PATH 里没有 → 写完整路径 |
| args | 交给它的参数（server 文件） | 相对路径 → 和 cwd 一起看 |
| env | 环境变量，密钥放这里 | 以为会从终端继承 → 我们用的 client 只传白名单 |
| cwd | 从哪个目录启动 | Claude Code 的 `.mcp.json` 没有这个字段 |
| transport | 本课只用 stdio | — |

stdio 的一生：client 拉起 server 进程 → `initialize` 互相报版本和能力 → `tools/list`（tool discovery）→ `tools/call`（可以很多次）→ client 退出，server 跟着结束。

2026-07-28 版 MCP 规范把握手改成了 `server/discover`，但 FastMCP 4.1.4 还没实现，实测仍是 `initialize`（协议版本 2025-11-25）。网上教程两种写法都会见到。

**stdout 只放协议，日志写 stderr。**规范禁止 server 往 stdout 写非协议内容。实测：我们用的客户端会把多出来的一行悄悄丢掉；别的客户端不一定。

## 六、四条真实的启动报错

| 报错 | 原因 | 修法 |
|---|---|---|
| `[Errno 2] No such file or directory: 'python'` | command 不在 PATH 里 | command 写完整路径 |
| `can't open file '//refund_server.py'` | 从根目录启动，又用了相对路径 | 写 cwd，或 args 用完整路径 |
| `KeyError: 'ORDERS_API_TOKEN'` | 没把密钥写进配置 | 配置里加 env |
| `ModuleNotFoundError: No module named 'fastmcp'` | 用的 Python 里没装依赖 | command 指向装了 fastmcp 的 `.venv` |

排查顺序：先看是不是根本没启动（command、依赖），再看启动了但读不到东西（cwd、env）。

## 七、四道闸和“模拟就说模拟”

1. 密钥放 env，不写进代码，也不写进 args（args 会出现在进程列表和日志里）。
2. 先授权，再访问。
3. 只开放白名单里的工具。
4. 会改东西的操作（退款、发邮件），先让人确认。

MCP 协议本身不管这四道，要靠我们的代码和客户端配置。

模拟的写操作返回 `"status": "simulated"`，绝不返回 `"sent"`。回执说谎，后面的日志和排错都跟着说谎。

## 八、Pi 的三层

| 包 | 是什么 |
|---|---|
| pi-ai | 统一的模型接口 |
| pi-agent-core | agent runtime |
| pi-coding-agent | coding CLI |

Pi 自 2026-09 起在 core 里内置了 MCP 支持，但它是使用 MCP 的一方，不是写 MCP server 的 SDK。写 server 用 FastMCP。

## 九、面试检查

1. 模型说“已为您办理退款”，你怎么确认真的退了？
2. 为什么工具参数要用 `order_id` 而不是一条 SQL？
3. 一个工具的 input schema 校验通过了，为什么还可能越权？
4. MCP 和普通的 REST API 有什么区别？MCP 会自动给工具权限吗？
5. 本地 MCP server 在 Claude Code 里连不上，你按什么顺序排查？

## 想动手试

课上的代码只用来讲课，不发给学员。想自己动手，用 Practice 课的正式 starter，W8 Practice 会把 MCP 接进项目的 Data Layer。
