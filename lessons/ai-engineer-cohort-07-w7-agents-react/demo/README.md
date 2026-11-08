# W7 课堂演示

退款客服，沿用 W6 的例子。全部是合成数据，写操作只返回 `simulated`，不会真的退款或发邮件。

## 准备

需要 [uv](https://docs.astral.sh/uv/)。

```powershell
cd demo
uv sync
Copy-Item .env.example .env    # 然后打开 .env，填入 ANTHROPIC_API_KEY
```

`.env` 不会被提交，也不要发给别人。环境变量由 `settings.py` 用 pydantic-settings 读取，终端里设置的值优先于 `.env`。默认模型 `claude-opus-5-5`，可用 `DEMO_MODEL` 更换。Claude Agent SDK 自带 CLI，不用另外安装 Claude Code。

## 三样东西

| 文件 | 回答什么问题 |
|---|---|
| `01_control.py` | 谁决定下一步：Workflow、一次工具调用、手写 ReAct 循环 |
| `agent.py` | 一个完整的 Agent：SDK + MCP、回合和预算上限、循环检测、审批、运行记录、交接单、resume |
| `tests/test_failures.py` | 失败路径和防线，写成不调用模型的测试 |

这也是常见的工程结构：一个 Agent，边界都写在里面，失败场景写成测试，每次改代码都跑。

## 命令

| 页 | 命令 | 展示 | 需要 API |
|---|---|---|---|
| 8 | `uv run python 01_control.py workflow` | 每一步由代码写死 | 否 |
| 9 | `uv run python 01_control.py once` | 模型选一次工具 | 是 |
| 18 | `uv run python 01_control.py react` | 手写 ReAct 循环，可加 `--task "..."` | 是 |
| 24 | `uv run python agent.py --order A1024` | 小额退款，自动处理 | 是 |
| 31 | `uv run python agent.py --order A8192 --max-turns 4 --no-loop-detect` | 回合上限 | 是 |
| 31 | `uv run python agent.py --order A8192` | hook 循环检测 | 是 |
| 37 | `uv run pytest tests/test_failures.py -v -k error` | 错误处理 | 否 |
| 37 | `uv run python agent.py --order A8192 --interrupt` | 运行中打断 | 是 |
| 43 | `uv run python agent.py --order A4096` | 超过 500 元时人工审批，`--auto no` 可自动回答 | 是 |
| 44 | `uv run pytest tests/test_failures.py -v -k guard` | 伪造调用被哪一层拦下 | 否 |

全部离线测试：`uv run pytest`

## 文件

| 文件 | 作用 |
|---|---|
| `settings.py` | 用 pydantic-settings 读取环境变量和 `.env`，读取 system prompt |
| `system_prompt.md` | system prompt，`01_control.py` 和 `agent.py` 共用 |
| `desk.py` | 后台工具和第三道防线，内置故障场景 |
| `refund_server.py` | MCP server，从 W6 扩展而来 |
| `errors.py` | 错误分类和处理规则 |
| `guards.py` | schema 校验、hook 判断、循环检测 |
| `handoff.py` | 从运行记录生成交接单 |
| `run_trace.py` | 只记录 Action 和 Observation |
| `llm.py` | 调用 Messages API，模型拒答时走服务端 fallback |
| `sdk_common.py` | Agent SDK 公共配置 |
| `data/orders.json` | 合成订单 |
| `runtime/` | 运行时生成的账本、审批和记录，可随时删除 |

## 测试订单

| 订单 | 客户 | 场景 |
|---|---|---|
| A1024 | C001 | 正常，129 元 |
| A2048 | C002 | 运输中，680 元 |
| A3072 | C003 | 签收 40 天，超期 |
| A4096 | C004 | 680 元，需要审批 |
| A5120 | C005 | 读超时两次后恢复 |
| A6144 | C006 | 读一直超时 |
| A7168 | C007 | 退款已记账但回执超时 |
| A8192 | C008 | 退款永远 pending |
| A9216 | C009 | 客户留言里有注入文字，720 元 |

这些代码用于课堂讲解，不是生产模板，也不是 Practice 的 starter。
