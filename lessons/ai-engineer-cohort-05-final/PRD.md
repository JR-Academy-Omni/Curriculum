# AI Engineer 第五期结课总结 · Classroom Deck PRD

## 定位

这是一场 120 分钟结课总结课。课程不再增加新的工具教程，而是帮助第五期学员完成四件事：把已有知识连接成完整 AI Engineering System Map，识别五类岗位方向，建立 Product Thinking，并确定下一条能力升级主线。

内容 SoT：`curriculum/ai-engineer-bootcamp/COHORT_05_FINAL_CLASS_RUNSHEET.md`

## 设计记录

```yaml
surface: classroom-deck
brand: jr-academy
register: B
reason: 结课课需要高密度系统图、岗位对比和事故诊断
extends:
  - jr-omni/jr-academy-brand/DESIGN.md
  - jr-omni/jr-academy-brand/COURSE_DESIGN.md
facts:
  - curriculum/ai-engineer-bootcamp/COHORT_05_FINAL_CLASS_RUNSHEET.md
overrides:
  - 不使用 Cohort 7 招生页的 Register A
  - 不出现价格、商业权益或销售解释
```

2026-09-09 视觉升级：浅色页采用课程新版网格纸画布、黄色 marker underline、克制的圆角结构面板和黄色偏移强调；粗黑边只保留给主要教学对象，不让每个小元素都变成重边框卡片。

## 学习结果

1. 解释 Product、Model、Context、RAG、Tools、Agent、Memory、Harness、Evaluation 与 Governance 的系统关系。
2. 根据工作职责区分 Applied AI、Agent Engineer、FDE、AI Platform/Eval 与 ML Engineer。
3. 用 User、Job、Pain、AI Fit、Workflow、Success、Failure、Boundary 检查一个 AI 产品。
4. 用 trace 和 evidence 对 Production Incident 做分层诊断。
5. 根据工作内容选择 Claude 认证学习方向，不把认证当作岗位替代品。

## 整体节奏

| 时间 | 章节 | 页数 |
| --- | --- | ---: |
| 00–08 | 岗位与证据冷启动 | 3 |
| 08–23 | AI Engineering System Map | 4 |
| 23–42 | 五类岗位方向 | 6 |
| 42–57 | Product Thinking | 2 |
| 57–70 | 背景与工程成熟度 | 2 |
| 70–91 | Policy Assistant Incident | 2 |
| 91–101 | Claude 认证路径 | 1 |
| 101–117 | 第五期复盘与第七期实践路线 | 5 |
| 117–120 | 个人升级主线与结课 | 2 |

## 逐页规格

1. 封面：AI Engineer 第五期结课总结；副标题“把知识点连接成系统能力”。
2. 课堂结果：系统地图、岗位方向、Product Thinking、下一步路径。
3. 冷启动：学生现场回答目标岗位与项目证据。
4. 空白系统：User Request 与 Business Outcome 中间缺什么。
5. 完整系统地图：十层能力的输入、执行、控制和证据关系。
6. 缺层故障：每一层缺失时的典型失败。
7. 系统链：业务问题到可发布系统的工程链路。
8. 岗位地图：五类岗位按工作重心分布，不按高低排序。
9. Applied AI Engineer：产品 workflow、RAG、Agent 与 Evals。
10. Agent Engineer：tool contract、state、memory、harness 与 approval。
11. FDE / AI Solutions Engineer：discovery、scope、integration 与 adoption。
12. AI Platform / Eval Engineer：gateway、routing、observability 与 regression。
13. ML Engineer：训练、数据、推理和实验，与本课主线的边界。
14. Product Thinking：Feature Thinking 与 Product Thinking 对照。
15. 八个产品问题：User、Job、Pain、AI Fit、Workflow、Success、Failure、Boundary。
16. 背景迁移：六种原有背景各自可复用能力与缺口。
17. 工程成熟度：Demo Builder、System Builder、Production AI Engineer。
18. Incident：Policy Assistant 上线后同时出现五类问题。
19. 分层诊断：用九层证据定位，不先换模型。
20. Claude 认证路径：CCAO-F、CCDV-F、CCAR-F、CCAR-P。
21. 第五期复盘：知识覆盖已经足够，交付连续性仍有缺口。
22. 第七期重构：以 Lightman + Jason 共同带领的 13 场 Production 实践路线为主视觉；Theory Live、录播与 Lab 作为支撑系统。
23. W1–W3：ADLC 证据链、Product UI / Design System 与可运行 Application MVP。
24. W4–W7：Confirmed Transcript、AI-Native Engineering Workspace、Evaluation Pipeline 与 Policy RAG。
25. W8–W13：Data Layer / MCP、Bounded Agent、Memory、Harness、Model Router 与 Production Readiness Review。
26. 下一条能力升级主线：Product、AI、Production 或 Domain depth。
27. 结课：重新回答“投什么岗位”和“用什么证据证明”。

## 内容红线

- 不讲价格、商业权益或销售话术。
- 不放未经核验的薪资、岗位数量或就业保证。
- 不声称四门 Claude 认证必须全部参加，也不承诺通过。
- 不把第五期说成每周一场课；第五期原本就是每周两场。
- 不声称第七期所有实践都在同一个 repository。
- 不把 CareKind 或 Aged Care 描述成课程唯一适用行业。

## 验收

- 27 页，一页一个教学任务。
- 1600×900 固定画布；1366×768、1440×900、1920×1080 无溢出。
- 正文不低于 21px；标题不低于 52px。
- 课程入口支持方向键、空格、触摸、全屏与摄像头。
- 官方 Logo 保持比例，不使用文字模拟。
- `bun run build` 通过，并完成普通视图与全屏截图检查。
