# W8 讲义 · Multi-Agent 架构

一句话：**先证明一个 Agent 不够，再拆。**

## 1. 要不要 Agent

| 级别 | 谁决定下一步 | 什么时候用 |
|---|---|---|
| Single call | 没有下一步 | 一次输入，一次输出 |
| Workflow | 代码 | 步骤能事先列出来 |
| Single agent | 模型 | 下一步取决于查到什么 |
| Multi-agent | 协调者派给别的 Agent | 单 Agent 有说得出的瓶颈 |

永远不交给 Agent：权限、只读已确认事实、写入的幂等、确认和导出、需要人负责的决定。

## 2. 拆分判断清单

只有说得出下面哪一条，才拆：

- [ ] 有能并行的独立工作（赚墙钟时间）
- [ ] 子任务需要不同的工具或权限（赚安全边界）
- [ ] 单个上下文装不下，或会被无关资料塞满（赚注意力）
- [ ] 少数难步骤需要更强的模型（赚质量）

不算理由：按职位起名字、“Agent 越多越聪明”、为了流程图好看。

## 3. 五种模式

| 模式 | 解决什么 | 必须配什么 |
|---|---|---|
| Sequential | 依赖和独立检查 | 每一步的输入输出契约 |
| Fan-out / synthesis | 量大、能并行 | 并发上限、汇总规则、部分失败怎么报 |
| Specialization | 权限和上下文不同 | 每个 Agent 一份工具清单，后台再查一次 |
| Escalation / advisor | 少数难步骤 | 分清“建议”和“决定”，决定交给人 |
| Dynamic workflow | 规模事先不知道 | 预算、时间上限、终止条件 |

## 4. 每个 Agent 的六样东西

Model、System prompt、Tools、MCP servers、Skills、Permission scope。子 Agent 看不到协调者的对话，只知道任务里写了什么。

## 5. 委派契约模板

```text
Task:                 （一件事，做到什么程度）
Inputs / references:  （ID、路径；不要贴内容）
Allowed tools:        （只列它需要的）
Output schema:        （回报格式，能直接汇总）
Deadline / budget:    （时间、花费上限）
Completion condition: （什么时候算完，包括“确认做不了”）
Failure semantics:    （失败了怎么报；不可重试时报什么）
```

## 6. 汇总规则

- 重复：去重，后台用幂等键保证只写一次。
- 冲突：不要悄悄选一个，写出来交给人。
- 缺失：列进 Not covered，写明原因。
- 每个结论都能追回到一条记录或一次工具调用。

## 7. 上线检查

- [ ] session 预算（创建时就设）
- [ ] 墙钟上限，到点 interrupt
- [ ] 委派层数和线程数有上限；不许临时造 Agent，除非有理由
- [ ] 部分失败、重复工作、冲突、卡住的线程，各有测试
- [ ] 交给人的出口，以及每次工具调用的审计记录（session、thread、agent）
- [ ] 同一组任务对比单 Agent 和多 Agent：质量、完成率、墙钟、费用、工具调用、失败率、人工介入

## 8. 面试六步

1. 要不要 Agent
2. 单 Agent 基线
3. 拆分理由和模式
4. 隔离和契约
5. 停止和失败
6. 怎么证明

## 课后自己试

```powershell
cd w8
uv sync
uv run pytest -v
# 需要 API key 和 Managed Agents：
uv run python setup_agents.py
uv run python handover.py --mode single
uv run python handover.py --mode team
uv run python handover.py --mode team --residents R-102
```
