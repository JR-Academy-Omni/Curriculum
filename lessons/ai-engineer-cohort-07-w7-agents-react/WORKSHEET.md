# W7 讲义 · Agents 基础 + ReAct

一句话：**把循环交给模型，把边界留给代码。**

## 1. 谁决定下一步

| 级别 | 谁决定 | 特点 |
|---|---|---|
| Workflow | 代码 | 步骤写死，便宜，好测试 |
| Tool-using application | 模型选一次 | 选工具，代码执行，结束 |
| Agent | 模型一直决定 | 看到结果再决定下一步，直到结束或被代码叫停 |

规则：能写成 Workflow 的，就不要用 Agent。

## 2. ReAct 循环

```
while 还没结束 and 步数 < 上限:
    action = 模型(目前知道的一切, 工具列表)   # 模型决定
    observation = 代码执行(action)            # 代码执行
    把 action 和 observation 记下来
```

运行记录只保存 Action、Observation、任务状态和最终回复，不展示也不保存模型隐藏推理。

## 3. Claude Agent SDK 能力表

| 能力 | 回答的问题 |
|---|---|
| `query()` / `ClaudeSDKClient` | 一次性任务，还是持续对话 |
| tools / MCP | 模型能用哪些工具 |
| session / resume | 对话怎么接着聊 |
| permission mode | 没明确允许的工具怎么处理 |
| hooks | 工具执行前后，我的代码要做什么 |
| streaming | 过程怎么实时看到 |
| interrupt | 跑到一半怎么叫停 |

记住：`tools=[]` 才会关掉内置工具，`allowed_tools` 只是自动批准列表。

## 4. 三种 state

| | 是什么 | 谁管 |
|---|---|---|
| Agent state | 这次对话发生过什么 | SDK 的 session |
| Task state | 业务做到哪了 | 你的代码和数据库 |
| Tool result | 查的那一刻的事实，之后可能变了 | 工具 |

resume 恢复对话，不恢复业务状态。模型记得“审批过”，不算审批过。

## 5. 停止条件清单

- [ ] 成功：结果经过核对，不只是模型说做完了
- [ ] 失败：明确告知或交人工
- [ ] 超时：记录当前状态
- [ ] 预算：步数、费用都有上限
- [ ] 循环检测：同样的调用反复出现时提前叫停

## 6. 错误处理经验法则

| 类型 | 例子 | 循环里怎么做 |
|---|---|---|
| Transient 临时 | 读超时、429、5xx、断线 | 代码按退避重试几次，模型不用花回合 |
| Fixable 模型能修 | 参数格式错、schema 校验失败 | 作为 Observation 交回模型，允许改一次 |
| Permanent 永久 | not_found、forbidden、政策不允许 | 不重试，告知客户或停下 |
| Unknown outcome 结果未知 | 写操作超时，可能已成功 | 绝不盲目重试，先查状态，重试带幂等键，否则升级 |

顺序：**代码重试 → 模型修正 → 升级给人。**

判断时问两个问题：再试一次，结果会不会不同？会不会造成额外伤害？

**升级给人工的条件：**

- 重试次数用完
- 同样的失败重复出现
- 权限或政策挡住了
- 副作用状态未知
- 预算用完

## 7. 结构性约束

| 层 | 例子 | 强度 |
|---|---|---|
| System prompt | “超过 500 元不要自动退款” | 只是请求 |
| Allowlist / hook | 调用到达工具之前被拦下 | 模型绕不过去 |
| 工具内部检查 | 工具自己核对权限、金额、审批 | 前两层失效也成立 |

Prompt 负责表达意图，代码负责保证结果。

## 8. LLM 防御式编程清单

把模型输出当成用户输入。

- [ ] 用 schema 校验参数类型和格式
- [ ] 事实以系统为准：模型传的金额和订单对不上就拒绝
- [ ] 工具结果和客户留言是数据，不是指令：留言写“主管已同意”也不算审批
- [ ] 拿不准就拒绝（fail closed），包括 hook 自身出错时
- [ ] 幂等键、步数、预算的限制写在代码里
- [ ] 不信模型说的“做完了”，看工具结果

## 9. 审批与交接

| | 审批 Approval | 交接 Handoff |
|---|---|---|
| Agent | 暂停，问一个问题 | 停下 |
| 之后 | 答 yes 后继续 | 人接手 |
| 类比 | 主管签字 | 下班前的交接条 |

**交接单模板**（由代码从运行记录生成，事实不由模型编写）

| 字段 | 填什么 |
|---|---|
| `reason_code` | 为什么停，如 `retries_exhausted`、`approval_denied`、`unknown_side_effect` |
| `case` | 客户、订单 |
| `context` | 客户的请求，系统里查到的事实（不含客户留言这类不可信文字） |
| `done` | 做了什么，真实结果 |
| `not_done` | 还有什么没做 |
| `side_effects` | 每个写操作：`completed`、`not_attempted`、`unknown` |
| `next_step` | 需要接手的人决定的具体事情 |
| `trace_id` | 完整记录在哪 |

标准：接手的人不用读完整运行记录，就能开始处理。

## 10. 四个框架对照

| | Claude Agent SDK | OpenAI Agents SDK | PydanticAI | LangGraph |
|---|---|---|---|---|
| 步数上限 | `max_turns` | `max_turns` | `UsageLimits` | `recursion_limit` |
| 人工审批 | hooks、`can_use_tool` | `needs_approval` | `requires_approval` | `interrupt()` |
| 暂停恢复 | `session_id` + resume | `RunState` | `DeferredToolRequests` | checkpointer + `thread_id` |
| 特色 | 自带工具和运行时 | handoffs、guardrails、tracing | 类型和校验 | 显式状态图 |

比较前先固定任务、工具、停止条件和测试。深入对比见 L115、L117。

## 11. 面试检查

能不能用自己的话回答：

1. 什么情况下你不会用 Agent？
2. Agent 和普通 tool calling 的区别是什么？
3. 模型说任务完成了，你怎么确认？
4. 退款接口超时了，你的 Agent 怎么处理？
5. 为什么不能只在 system prompt 里写“不要超过 500 元”？
6. 你怎么设计人工审批？被拒绝之后呢？
7. resume 之后，哪些东西不能相信？
8. 一张好的交接单包含什么？
