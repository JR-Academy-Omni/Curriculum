# AI Engineer W7 · Agents 基础 + The ReAct Framework · PRD

第七期 L112 理论 Live，90 分钟（内容 80 分钟 + 缓冲 10 分钟），53 页。底座：Curriculum `lessons/_template`（Talk Deck 2.0），引擎与模板一致（见 `engine-manifest.json`）；内容层按 JR Craft 视觉。

## 课程定位

W6 的结论是：模型只提出调用，执行的是我们的代码。W7 往前走一步：**让模型决定下一步**，然后回答随之而来的问题：它怎么停、失败怎么办、谁来把关。

一句话：**把循环交给模型，把边界留给代码。**

## 学习目标

学完能做到：

1. 用“谁决定下一步”区分 Workflow、Tool-using application、Agent，并说明什么时候不该用 Agent。
2. 说出 ReAct 的 Action → Observation → 下一步决策，看懂一段运行记录，知道不展示也不保存模型隐藏推理。
3. 看懂一段 Claude Agent SDK 代码，知道 `query()` 与 `ClaudeSDKClient`、tools/MCP、session/resume、permission mode、hooks、streaming、interrupt 各管什么。
4. 区分 agent state、task state、tool result，说清 resume 恢复什么、不恢复什么。
5. 为循环设计退出路径：成功、失败、超时、预算；区分 max steps 和循环检测。
6. 用经验法则处理错误：transient 重试，fixable 让模型改一次，permanent 不重试，unknown outcome 先查状态；知道何时升级给人工。
7. 说明为什么结构性约束强于 system prompt。LLM 防御式编程清单只放讲义，W9 展开。
8. 区分审批和交接，设计一张接手的人不用读 trace 也能处理的交接单。
9. 对比 Claude Agent SDK、OpenAI Agents SDK、PydanticAI、LangGraph 的选型和失败模式。

完成判据：课堂检查点在聊天框答对并说出理由。本课不布置作业。

## 已确认范围

- **对象**：第七期学员，约 30 人，基础偏弱，有的没有开发经验。线上，互动只用聊天框，学员不用装任何东西。
- **语言**：中文，术语保留英文。
- **主线例子**：沿用 W6 退款客服，合成数据，所有写操作都是模拟的。
- **类比**：沿用 W6 的前台客服专员（模型）和后台自动窗口（工具）。W7 新增：客服自己决定下一张派什么单；主管签字是人工审批；交接班条是 handoff。
- **演示**：讲师现场运行 `../demo/`，页面上放真实代码（从 demo 文件原文摘出，已用脚本逐段核对）和观察要点，不放预录输出。
- **超出大纲的内容（讲师要求）**：交接单设计、transient vs permanent 经验法则、LLM 防御式编程（只放讲义）、结构性约束强于 system prompt。
- **留到后面**：Multi-Agent（W8）；MCP Data Layer（W8 Practice）；Bounded Agent 实现（W9）；长期 Memory（W9/W10）；Harness（W10/W11）；SDK 深入对比（L115、L117）。
- **数据纪律**：不放未经核实的数字。框架信息按 2026-11 文档核对，见 `SOURCE_MAP.md`。

## 与大纲的时间差异

大纲八块共 90 分钟。为容纳开场、缓冲和新增内容，失败与审批两块加长，状态一块缩短：只讲三种 state 和 resume 不恢复什么，记忆留给 W9、W10，省下的时间进缓冲。防御式编程清单和分层拦截偏实现，留给 W9：前者只放讲义，后者的 Demo 6 改为可选。

| 块 | 大纲 | 本课 |
|---|---|---|
| Workflow / Agent | 10′ | 9′ |
| ReAct | 15′ | 13′ |
| Claude Agent SDK | 15′ | 13′ |
| State | 10′ | 2′ |
| 停止条件 | 10′ | 8′ |
| 失败处理 | 10′ | 12′ |
| 审批与副作用 | 10′ | 12′ |
| 选型与面试 | 10′ | 8′ |
| 开场 | — | 3′ |
| 缓冲 | — | 10′ |

## 节奏表

| 时间 | 部分 | 页 |
|---|---|---|
| 0–3′ | 0 开场 | 1–5 |
| 3–12′ | 1 谁决定下一步 | 6–12 |
| 12–25′ | 2 ReAct | 13–19 |
| 25–38′ | 3 Claude Agent SDK | 20–25 |
| 38–40′ | 4 State | 26–27 |
| 40–48′ | 5 停止条件 | 28–31 |
| 48–60′ | 6 失败处理 | 32–38 |
| 60–72′ | 7 副作用、审批与约束 | 39–47 |
| 72–80′ | 8 选型与收尾 | 48–53 |

## 逐页规格

| 页 | 文件 | 内容 |
|---|---|---|
| 1 | S01_Cover | 课名与一句话 |
| 2 | S02_Agenda | 八个部分 |
| 3 | S03_Footprint | W1–W6 学过什么，W7 在哪 |
| 4 | S04_Review1 | W6 复习：模型说退了，工具调用 0 次 |
| 5 | S05_Review2 | W6 复习：schema 校验能代替授权吗 |
| 6 | C06_Part1 | 第 1 部分封面 |
| 7 | S07_WhoDecides | 三级对比：谁决定下一步 |
| 8 | S08_Workflow | Level 1 代码（01_control.py） |
| 9 | S09_ToolOnce | Level 2 代码（01_control.py） |
| 10 | S10_Loop | Level 3 循环骨架 |
| 11 | S11_Tradeoff | 收益与代价；能写死就别用 Agent |
| 12 | S12_Check1 | 检查点：三个任务选哪级 |
| 13 | C13_Part2 | 第 2 部分封面 |
| 14 | S14_Cycle | Action → Observation → 下一步；一行带过：ReAct 不是 thinking 模式 |
| 15 | S15_Analogy | W6 类比延伸 |
| 16 | S16_Trace | 一段运行记录；一句带过：只看输入输出，不展示隐藏推理 |
| 17 | S18_LoopCode | 手写循环（01_control.py 原文） |
| 18 | S19_Live3 | 现场运行 `01_control.py react` |
| 19 | S20_Check2 | 检查点：模型不再调用工具时 |
| 20 | C21_Part3 | 第 3 部分封面 |
| 21 | S22_WhatSdkDoes | SDK 替你做了什么 |
| 22 | S23_QueryClient | query() vs ClaudeSDKClient |
| 23 | S24_AllowedTools | tools 和 allowed_tools 的区别 |
| 24 | S25_Live4 | 现场运行 `agent.py`（A1024） |
| 25 | S25b_Architecture | 架构图：进程、工具调用路径和共享数据，与 README.md 的 demo 架构图一致 |
| 26 | C27_Part4 | 第 4 部分封面 |
| 27 | S28_ThreeStates | 三种 state，resume 只接回对话 |
| 28 | C31_Part5 | 第 5 部分封面 |
| 29 | S32_Exits | 四条退出路径 |
| 30 | S33_MaxVsLoop | max steps vs 循环检测 |
| 31 | S34_Live6 | 现场运行 `agent.py`（A8192） |
| 32 | C35_Part6 | 第 6 部分封面 |
| 33 | S36_FiveWords | timeout、retry、fallback、interrupt、partial failure |
| 34 | S37_ErrorTypes | 四类错误 |
| 35 | S38_RuleOfThumb | 经验法则与升级条件 |
| 36 | S39_Idempotency | 安全重试 vs 重复副作用 |
| 37 | S40_Live7 | 现场运行错误测试和 `--interrupt` |
| 38 | S41_Check3 | 检查点：五个错误怎么处理 |
| 39 | C42_Part7 | 第 7 部分封面 |
| 40 | S43_AuthFirst | 副作用先过授权 |
| 41 | S44_ThreeTools | permission mode、hook、人工审批 |
| 42 | S45_Structural | 结构性约束强于 system prompt |
| 43 | S47_Live8 | 现场运行 `agent.py`（A4096） |
| 44 | S48_Live9 | 现场运行防线测试 |
| 45 | S49_ApprovalVsHandoff | 审批 vs 交接 |
| 46 | S50_HandoffDesign | 交接单八个字段 |
| 47 | S51_HandoffExample | 好坏交接单对比 |
| 48 | C52_Part8 | 第 8 部分封面 |
| 49 | S52b_Patterns | Agentic 设计模式：只点到本课用到的三个 |
| 50 | S53_Frameworks | 同样的概念，四个 SDK |
| 51 | S54_Choose | 怎么选，各自怎么出问题 |
| 52 | S55_Interview | 面试怎么答 |
| 53 | S56_Next | 接下来与收尾 |
