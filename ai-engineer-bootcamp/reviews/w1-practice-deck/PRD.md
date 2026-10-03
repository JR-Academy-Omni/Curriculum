> 已由用户要求的完整迁入版取代。当前方案见 [完整迁入版 PRD](../../../lessons/ai-engineer-cohort-07-practice-w1/PRD.md)，当前为 86 页；本文保留为 24 页初稿记录。

---
title: AI Engineer 第七期实践第一课 · 旧课件组合方案
status: eval
owner: Lightman
session_date: 2026-10-04
duration_minutes: 120
planned_slides: 24
---

# AI Coding + ADLC：CareKind 项目启动

状态：用户已确认，24 页课件已完成本地构建和浏览器验收；未部署。日期按本次“明晚”记录，不推断开课时刻。

## 课程依据与学习目标

以 `../../public/outline.json` 中 `C7P01` 为唯一课程范围依据，并对照 `../../COHORT_07_OUTLINE.md` 的确认实践线。

学员在老师提供的 CareKind starter 上建立产品范围、workflow、acceptance criteria、repo map、开发规则和任务拆分，再完成一次小范围修改、测试与人工 review。第一周不要求完成业务或 AI vertical slice。W2 做完整 UI 与 Design System；W3 做非 AI MVP；W4 才第一次接入产品 AI 能力。

以下 CareKind 练习是本课建议的合成教学例子，不声称是真实客户需求、护理制度或已存在的 starter 功能。

## 复用判断

- 大师课第一课：复用 SoT 概念，以及“先给方向、再确认事实”的教学逻辑。个人 AI OS、第二大脑、八周路线、招生和薪资页不纳入。
- 大师课第二课：主要来源。复用想法/功能/需求、需求五问、workflow、PRD 六块、PRD 自检、Rules/Docs/Repo Context、规则分层与排错。
- 第七期 MiniClaw 公开课：只取 W1–W3 课程定位及 CareKind 连续建设逻辑。Router、Memory、Harness、完整 MiniClaw Live Build 不提前到 W1。
- 旧 ADLC 五步图不能原样充当新大纲：统一为 Frame → Specify → Ground → Build → Evaluate → Safeguard → Operate。旧课中的自动部署、整份 PRD 全权交付、直接回滚等表述需要改成受控修改、人工 review 与保留当前工作。
- 旧课的文字和关系图可复用；新版 deck 采用当前 `_template` 引擎和圆角 DeckFrame，避免直接带入旧版直角卡片及过小字号。

## 整体节奏表

| 时间 | 章节 | 页码 | 讲解 / 动手 | 必须产出 |
|---|---|---|---|---|
| 00–20 | Frame | 1–7 | 讲解 12 分钟、练习 8 分钟 | 用户、问题、范围、non-goals |
| 20–40 | Specify | 8–12 | 讲解 10 分钟、练习 10 分钟 | Product Brief、workflow、验收与 test plan |
| 40–60 | Ground | 13–16 | 示范 10 分钟、练习 10 分钟 | Repo Map、Agent Rules、合成数据边界 |
| 60–85 | Build | 17–19 | 示范 8 分钟、练习 17 分钟 | 一次 scoped diff |
| 85–105 | Evaluate + Safeguard | 20–22 | 对照 8 分钟、互审 12 分钟 | 测试记录、人工 review、风险与停止条件 |
| 105–120 | Operate | 23–24 | 汇报 10 分钟、收口 5 分钟 | Task Board、证据包、W2 handoff |

共 120 分钟，其中练习/互审/汇报 67 分钟。Slide 是解释框架和练习提示，不用 24 页填满 120 分钟。

## 逐页 spec 与来源

所有源码路径均相对 `curriculum/`。复用表示已有教学内容，仍需适配 CareKind 和当前视觉。

| 页 | 标题 / 教学内容 | 现有来源 | 组合方式 / 讲师动作 |
|---|---|---|---|
| 1 | AI Coding + ADLC：CareKind 项目启动 | `ai-engineer-bootcamp/public/outline.json` → C7P01 | 新封面；写清今天交付，不带招生 CTA |
| 2 | 今天结束时桌上留下什么 | C7P01 learningMaterial | 新增证据清单；展示 Brief、Flow、Rules、Diff、Test、Review |
| 3 | W1 → W2 → W3：方法、UI、MVP | `lessons/ai-engineer-cohort-07-miniclaw/src/components/slides/S07.tsx` | 缩为前三周；清楚标出 W1 不要求做完整 MVP |
| 4 | 一件事只保留一个权威出处 | `lessons/vibe-coding-master/src/components/slides/S03_SourceOfTruth.tsx` | 复用概念；例子改为 product brief、schema、starter README |
| 5 | 想法、功能、需求、范围 | `lessons/vibe-coding-master-l2/src/components/slides/L2P01b_IdeaVsNeed.tsx` | 原 Mini CRM 换成合成 CareKind 场景；删“今晚跑完整主流程”要求 |
| 6 | 开工前先回答五个问题 | `lessons/vibe-coding-master-l2/src/components/slides/L2P02_FiveQ.tsx` | 保留五问；成功标准用可观测行为，避免没有证据的效率数字 |
| 7 | 练习：给 CareKind 写一句问题定义 | C7P01 Frame + worksheet | 新练习页；8 分钟输出用户/场景/问题/成功/non-goals |
| 8 | ADLC 七步与证据链 | `lessons/vibe-coding-master/src/components/slides/S16d_ADLCFlow.tsx` + C7P01 | 复用循环关系图思路，五步改七步；加人工确认节点 |
| 9 | PRD 六块：让 Agent 少猜一步 | `lessons/vibe-coding-master-l2/src/components/slides/L2P04_PRDFive.tsx` | 保留目标/流程/数据/模块/红线/任务；本周 Action 是受控改动，不是部署 |
| 10 | 光有页面不够，还要有 Flow | `lessons/vibe-coding-master-l2/src/components/slides/L2P01f_Flows.tsx` | 用拟议 draft → review → confirm 流程说明成功/失败/拒绝分支；只画不实现 |
| 11 | 验收写成 Given / When / Then | `lessons/vibe-coding-master-l2/src/components/slides/L2P04b_PRDQuality.tsx` | 六项自检压成一列；另一列展示合成例子的成功/空值/禁止操作 |
| 12 | 练习：Brief + Workflow + Acceptance | C7P01 Specify + worksheet | 10 分钟；同桌指出一处 AI 会猜的缺口 |
| 13 | PRD 之后还有 Rules、Docs、Repo Context | `lessons/vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx` | 复用三层关系；用原生结构图避免依赖未经核查的旧图片 |
| 14 | 让 Agent 先读懂 starter | C7P01 Ground | 新示范页；目录、入口、schema、测试、启动方式必须来自实际 repo |
| 15 | Rules 少而可执行 | `lessons/vibe-coding-master-l2/src/components/slides/L2P04f_RulesFileStructure.tsx` | 复用按领域分层思路；本周只建最少必要文件，不强制大型目录 |
| 16 | 练习：Repo Map + 三条停止条件 | C7P01 Ground + worksheet | 10 分钟；路径/命令不确定就标未确认，禁止脑补 |
| 17 | 从问题到一个可控的小任务 | `lessons/vibe-coding-master/src/components/slides/L04_PRD_ADLC.tsx` | 原导出 CSV 改成一个已确认适合 starter 的小修改；明确可改文件和不可改契约 |
| 18 | 三段 Prompt：读、计划、执行 | C7P01 AI Coding workflow | 新提示页；只读分析 → 人确认计划 → 小改动与测试 |
| 19 | 动手：完成一次 scoped diff | C7P01 Build + worksheet | 17 分钟；老师示范 8 分钟计在本章开头；完成证据比改动大小重要 |
| 20 | AI 说好了以后，人看什么 | C7P01 Review | 新 review 页；diff scope、URL/API、合成数据、失败路径、测试结果 |
| 21 | 卡住时先缩小问题 | `lessons/vibe-coding-master-l2/src/components/slides/L2P05_Unstuck.tsx` | 复用根因/最小复现/规则留痕/测试；删除无授权直接回滚要求 |
| 22 | 互审：通过、未通过、未验证 | C7P01 Evaluate + Safeguard | 新互审页；12 分钟；无证据不可标通过，不让 AI 自动确认事实 |
| 23 | Task Board：每项任务有 Owner 和证据 | C7P01 Operate | 新任务板；Todo/Doing/Review/Done；Done 必须挂验收证据 |
| 24 | 今天交付与 W2 接力 | C7P01 + C7P02 | 新收口页；提交完整证据包，下周由 Brief 推导 UI/Design System |

复用/适配现有内容 12 页（3–6、8–11、13、15、17、21），新补课堂定位与练习/验收页 12 页。

## 制作前要补齐的真实材料

1. CareKind starter：本次仓库检索未定位到可确认的课程 starter。正式 code walkthrough 的路径、命令、测试与示例 diff 必须在拿到实际 repo 后核查。
2. 开课准确时间与主讲安排未验证：不在封面编造时刻。课程公开资料显示实践由 Lightman/Jason 带领，但本场谁主讲需按实际安排填写。
3. 不重新设计课程大纲，不同步学生平台，不修改旧课件及已上线 URL。

## 后续制作与验收

按 Talk Deck Skill，逐页方案确认后创建 `lessons/ai-engineer-cohort-07-practice-w1/`，从 `_template` 逐字复制引擎/runtime；内容一页一文件，使用官方本地 Logo。

完成后：检查每页、键盘、深链、前后导航、全屏、桌面与手机等比显示、文字溢出与实际动画；执行 build；更新 lessons.html（24 页/120 分钟/讲师/复用/入口/源码/讲稿/Local）、部署流水线和 CHANGELOG。没有部署和 public read-back 时不标线上可用。

本方案已合并到 `curriculum/lessons/ai-engineer-cohort-07-practice-w1/`；具体本地验收见该目录 QA.md。
