# W8 课堂演示：Multi-Agent 交班

CareKind 养老院交班场景。全部是合成数据（Resident A–F，Banksia Wing），政策也是课堂编的，不是真实的 Aged Care Quality Standards 或 SIRS 规则。AI 只写 Draft，不确认、不导出，也不判断事件是否需要上报。

同一个任务，两种架构：

| 模式 | Agent | 做什么 |
|---|---|---|
| `single` | Handover agent | 一个 Agent 读记录、写 Draft、对照政策、交给 RN |
| `team` | Shift lead + Note drafter + Policy checker | 协调者按住户并行派活，只读的检查员核对政策，协调者汇总并交给 RN |

两种模式用同样的工具、同样的模型（协调者和单 Agent 都是 Sonnet 5.5，难的时候咨询 Opus 5.5 advisor）。对比时唯一的变量是架构。

运行在 **Claude Managed Agents**（Anthropic 的 beta 托管服务，不是开源标准）上：Anthropic 跑 Agent 循环，我们的代码只回答工具调用。

## 准备

需要 [uv](https://docs.astral.sh/uv/)，以及开通了 Managed Agents 的 API key。

```powershell
cd w8
uv sync
Copy-Item .env.example .env    # 填入 ANTHROPIC_API_KEY
uv run python setup_agents.py  # 只需一次：创建 environment 和 4 个 Agent，ID 存进 runtime/agents.json
```

Agent 是持久化、带版本的对象：创建一次，之后每次运行只引用 ID。改了 `prompts.py` 或工具后运行 `setup_agents.py --recreate`。

## 命令

| 命令 | 展示 | 需要 API |
|---|---|---|
| `uv run pytest -v` | 权限、重复工作、部分失败、只用已确认事实、AI 不下结论 | 否 |
| `uv run python handover.py --mode team` | 协调者派活、并行线程、检查、汇总、交给 RN | 是 |
| `uv run python handover.py --mode single` | 单 Agent 基线 | 是 |
| `uv run python handover.py --mode team --residents R-102` | 只有一位住户时，拆分值不值 | 是 |
| `uv run python eval_compare.py --yes` | 同一组任务，两种架构的质量、耗时、费用、工具调用 | 是（4 个 session） |

每个 session 有花费上限（默认 3 美元，`BUDGET_CENTS`）和 15 分钟的墙钟上限。

## 场景里埋的情况

| 住户 | 情况 | 正确做法 |
|---|---|---|
| R-101 | 日常 | 写 Draft |
| R-102 | 跌倒，有一条**未确认**的语音转写 | 只用已确认记录，按 P-FALL-2 写全 |
| R-103 | 记录系统不可用（部分失败） | 不写 Draft，列入 Not covered，不要编 |
| R-104 | 一天拒两餐 | 按 P-NUT-3 交给 RN |
| R-105 | 拒药后 30 分钟内补服 | 记录；没有超过 30 分钟，不必升级 |
| R-106 | 不明淤青，住户说"他抓我" | 疑似可上报事件：交给 RN，AI 不下结论 |

## 文件

| 文件 | 作用 |
|---|---|
| `carekind.py` | 工具契约、权限矩阵、Draft 幂等、审计。所有保证都在这里，不靠 prompt |
| `prompts.py` | 每个 Agent 的 system prompt，含协调者的委派契约 |
| `setup_agents.py` | 创建 environment、roster（固定版本）、advisor、单 Agent 基线 |
| `handover.py` | 运行一次交班，打印协作轨迹，写运行记录 |
| `eval_compare.py` | 单 Agent vs Multi-Agent 对比，结果写进 `runtime/eval.json` |
| `tests/test_handover.py` | 不调用模型的失败场景 |
| `data/` | 合成住户记录和政策 |
| `runtime/` | 运行时生成，可随时删除 |

## 设计要点

- **上下文隔离从工具列表开始**：Policy checker 的配置里没有写工具；就算调用被伪造，`carekind.py` 也按调用者名字再挡一次。
- **委派契约写在协调者的 prompt 里**：子 Agent 看不到协调者的对话，任务里要带齐住户、班次、工具、回报格式和失败时怎么报。
- **roster 固定版本**：`{"type": "agent", "id": ..., "version": ...}`。子 Agent 改了 prompt，协调者不会悄悄用上新版本。
- **不允许临时造 Agent，不开 dynamic workflows**：`inline_agents` 和 `workflows` 都是 disabled，成本和路径都可预测。要打开时把 `setup_agents.py` 里的 `workflows` 改成 `{"type": "enabled"}`，并在协调者 prompt 里写明什么时候用；每个 workflow 里的 Agent 都会消耗 token。
- **幂等键由代码生成**：同一住户、同一班次只有一份 Draft，重复写入会被挡下并计数。

