# PRD · AI Engineer W8 · Multi-Agent Architectures · CCAR-F Alignment

## 定位

第七期 W8 理论课（`L122`），90 分钟，线上，讲师 Harris。接 W7 Agents/ReAct（单 Agent、边界写在代码里），下接 W9 Agent Memory 与 Bounded CareKind Agent。对齐 Claude Certified Architect – Foundations 的 Agentic Architecture & Orchestration。

一句话主线：**先证明一个 Agent 不够，再拆。**

## 学习目标

学完以后，学员能够：

1. 判断一个任务该用 single call、workflow、single agent 还是 multi-agent，并说出哪些步骤必须留给代码或人。
2. 说出四个站得住的拆分理由，识别按职位拆分等反模式，并说出多付的成本。
3. 区分 sequential、parallel fan-out/synthesis、specialization、escalation/advisor、dynamic workflow，说出每种必须配的工程措施。
4. 说明 Claude Agent SDK 与 Managed Agents 的 coordinator、roster（版本固定）、thread 的区别，并知道 Managed Agents 是 beta 的供应商服务，不是开放标准。
5. 为每个 Agent 设计 model、system、tools、MCP、skills 与 permission scope，并在后台按调用者再检查一次。
6. 写出完整的委派契约（7 个字段），用引用代替转述，按规则汇总冲突和缺失。
7. 设计终止、预算、部分失败、重复工作、交给人与审计，并用同一组任务对比单 Agent 与多 Agent 的质量、延迟和成本。

## 与大纲的关系

时间完全按大纲：第 1–8 部分 10/10/15/15/10/10/15/5 分钟，合计 90 分钟，没有缓冲。时间紧时的删减见 RUNSHEET（第 19、23 页可跳过）。

## 例子与边界

CareKind 交班：六位合成住户、一个班次、课堂编写的政策。AI 只写 Draft，不确认、不作临床判断、不判断事件是否需要上报；疑似可上报事件只能交给 RN。不使用真实数据，不代表真实的 Aged Care Quality Standards 或 SIRS 规则。

## Demo

代码在课程代码仓库 `australiaitgroup/AI-Engineer-Bootcamp-07` 的 `w8/`，不随课件部署。Claude Managed Agents（beta）：Shift lead（Sonnet 5.5 + Opus 5.5 advisor）协调 Note drafter 与只读的 Policy checker；同样工具和模型的单 Agent 作基线。14 项离线测试覆盖权限、重复、部分失败、只用已确认事实、AI 不下结论。两次现场演示：第 26 页 team 运行，第 42 页 pytest。

## 节奏

| 部分 | 页 | 时间 |
|---|---|---|
| 开场 + 1 要不要 Agent | 1–8 | 0–10′ |
| 2 一个还是多个 | 9–13 | 10–20′ |
| 3 五种编排模式 | 14–20 | 20–35′ |
| 4 Agent SDK 与 Managed Agents | 21–27 | 35–50′ |
| 5 Context isolation | 28–32 | 50–60′ |
| 6 委派契约与汇总 | 33–37 | 60–70′ |
| 7 上线以后（失败、停止、交给人、评估） | 38–44 | 70–85′ |
| 8 系统设计 | 45–47 | 85–90′ |

## 数据纪律

第 43 页的对比数字只来自课前运行 `eval_compare.py`；没运行前显示“待实测”。其余页面不引用外部统计。来源见 SOURCE_MAP。
