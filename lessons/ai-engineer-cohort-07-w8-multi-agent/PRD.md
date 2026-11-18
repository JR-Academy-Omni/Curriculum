# PRD · AI Engineer W8 · Multi-Agent Architectures · CCAR-F Alignment

## 定位

第七期 W8 理论课（`L122`），90 分钟，线上，讲师 Harris。接 W7 Agents/ReAct（单 Agent、边界写在代码里），下接 W9 Agent Memory 与 Bounded CareKind Agent。对齐 Claude Certified Architect – Foundations 的 Agentic Architecture & Orchestration。

一句话主线：**先证明一个 Agent 不够，再拆。**

## 学习目标

学完以后，学员能够：

1. 判断一个任务该用 single call、workflow、single agent 还是 multi-agent，并说出哪些步骤必须留给代码或人。
2. 说出四个站得住的拆分理由，识别按职位拆分等反模式，说出多付的成本。
3. 区分 sequential、parallel fan-out/synthesis、specialization、escalation/advisor、dynamic workflow，说出每种必须配的工程措施；比较 message passing 与 shared blackboard，并把 BDI、Contract Net、Blackboard 对应到今天的做法。
4. 说明 Claude Agent SDK 与 Managed Agents 的 coordinator、roster（版本固定）、thread 的区别，并知道 Managed Agents 是 beta 的供应商服务，不是开放标准。
5. 为每个 Agent 设计 model、system、tools、MCP、skills 与 permission scope，并在后台按调用者再检查一次；按子任务选模型，把预算设在模型外面。
6. 用 W7 交接单的标准写委派契约，用引用代替转述，按规则汇总冲突和缺失。
7. 识别并处理多 Agent 的失败模式（部分失败、重复工作、互相矛盾、错误累积、协调开销超过工作本身），设计终止、预算、交给人与审计，并用同一组任务对比单 Agent 与多 Agent 的质量、延迟和成本。

## 与大纲的关系

第 1 部分（deterministic / single / multi-agent 判断）的大部分内容 W7 已讲过：四级阶梯、哪些事不交给 Agent、对应的检查点。这里压成第 3、4 页两页回顾，开场和第 1 部分共 7 分钟（大纲给 10 分钟）。第 3 部分的五种模式不再每种一页：合成一张对照表（第 12 页），只把 demo 的主模式 fan-out 单独讲一页，第 3 部分 12 分钟（大纲给 15 分钟）。第 6 部分的委派契约 W7 讲交接单时已有同样的标准，合成一页“W7 的交接单，反过来用”，第 6 部分 7 分钟（大纲给 10 分钟）。所有失败模式（包括原来第 2 部分的协调开销）集中到第 7 部分：第 2 部分 8 分钟，第 7 部分 15 分钟；第 4、5、8 部分按大纲 15/10/5 分钟，结尾留约 11 分钟缓冲。时间紧时的删减见 RUNSHEET（第 18 页可跳过）。

## 例子与边界

CareKind 交班：六位合成住户、一个班次、课堂编写的政策。AI 只写 Draft，不确认、不作临床判断、不判断事件是否需要上报；疑似可上报事件只能交给 RN。不使用真实数据，不代表真实的 Aged Care Quality Standards 或 SIRS 规则。

## Demo

代码在课程代码仓库 `australiaitgroup/AI-Engineer-Bootcamp-07` 的 `w8/`，不随课件部署。Claude Managed Agents（beta）：Shift lead（Sonnet 5.5 + Opus 5.5 advisor）协调 Note drafter 与只读的 Policy checker；同样工具和模型的单 Agent 作基线。14 项离线测试覆盖权限、重复、部分失败、只用已确认事实、AI 不下结论。两次现场演示：第 21 页 team 运行，第 37 页 pytest。

## 节奏

| 部分 | 页 | 时间 |
|---|---|---|
| 开场 + 1 接上 W7（回顾，阶梯多一级） | 1–5 | 0–7′ |
| 2 一个还是多个 | 6–10 | 7–15′ |
| 3 五种编排模式（一张表 + fan-out）、通信方式、经典架构 | 11–15 | 15–27′ |
| 4 Agent SDK 与 Managed Agents | 16–22 | 27–42′ |
| 5 Context isolation（含模型路由和预算） | 23–28 | 42–52′ |
| 6 委派契约（对齐 W7 交接单）与汇总 | 29–31 | 52–59′ |
| 7 失败模式与上线以后（七种失败总表、错误累积、停止、交给人、评估） | 32–39 | 59–74′ |
| 8 系统设计（含 Harness Engineering Framework 例子） | 40–43 | 74–79′ |
| 缓冲 | — | 79–90′ |

## 数据纪律

第 38 页的对比数字只来自课前运行 `eval_compare.py`；没运行前显示“待实测”。其余页面不引用外部统计。来源见 SOURCE_MAP。
