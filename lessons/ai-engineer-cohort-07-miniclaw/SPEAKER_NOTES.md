# AI Engineer 第七期公开课 · 逐页讲师备注

## 1–3 · 开场与背景

1. 先说封面这句话：“IT 行业正在进入一个又缺人、又裁员的时代。”紧接着给出今晚承诺：先讲清哪些能力仍然缺人和第七期怎么训练，再现场搭 MiniClaw。不要先播放完整 Demo。
2. 直接讲第七期最容易理解的变化：一周两节，一节学，一节做；第二节始终开发同一个项目，连续 13 周。
3. 按背景逐项讲。重点不是谁更适合，而是每个人能把什么带进来、接下来具体要补什么。

## 4–13 · 岗位判断、市场与能力自测

4. 直接说硬门槛：这不是零代码入门课。四类观众都可以进入，但要能读写 Python 或 Node.js / TypeScript，并理解 API。三类共同缺口正是本期要补的系统能力。
5. 快速处理六个误区。每个误区只讲一组错误认知和真实工作，不引用旧页未经验证的百分比。
6. 六国数字沿用课程现有市场页，口径是 Total Compensation。先提醒级别、公司、bonus 和 equity 差异，再展示全球机会；不要把它讲成新人起薪。
7. 先说出口号：“这是一个又缺人、又裁员的 IT 行业。”左侧解释企业为什么缩减重复、模板化岗位，右侧解释为什么仍然缺能负责 RAG、Agent、MCP、Eval、Harness 和发布判断的人。传统工程能力没有作废，岗位价值正在重新分配。
8. 解释三条入口路径。Software、Data、Platform / DevOps 都带着已有能力进入 AI Engineer，终点不是一个 title，而是一组更完整的交付责任。
9. 逐项读公式。Product Thinking 必须单列，因为技术做得再完整，如果没有真实用户问题、合适 AI UX 和价值验证，仍然只是技术展示。
10. 把观众最关心的钱讲清楚：A$160K–300K+ 是中高级市场区间，不是应届统一起薪。逐项展示全国平均、高位 base 和悉尼 Senior 区间。
11. 用公开数据讲澳洲就业前景。不要说“唯一不会被 AI 替代”，要说企业仍需要人为架构、数据、权限、评测、成本、故障与发布承担责任。
12. 讲清 JR Academy 为什么不是新课试水：官网公开口径为 200+ 学员学习验证、30+ 校友真实 Offer。把 13 周主课、12 周 P3 与 Career Evidence 连起来讲。
13. 让观众现场给自己打 0–10 分。每一层只有在能独立设计、实现、测试并解释取舍时才计分；这是学习差距图，不是招聘评级。

## 14–23 · 课程结构

14. 理论 12 周、实践 13 周是并行双线，共 25 场 Live。138 项内容合计 118 小时 25 分钟，包括 Live、录播、自学、Lab 与 Quest。
15. 按真实的一周讲：课前录播和 Lab，理论 Live，实践 Live，课后留下代码、测试、Trace 或 Eval。
16. 左侧 Lightman，右侧 Jason。实践主线主要由两人共同带练。
17. 点亮澳洲、美国、中国、英国伦敦、新加坡和马来西亚。只讲来源，不追加人数和比例。
18. 从 W1 讲到 W13，每周回答增加什么能力、现场写什么、如何验收。
19. W1–W3 先交付非 AI MVP，避免 Agent 建在跑不通的产品上。
20. W4 接 AI，W5 建立 RAG 质量和工程工作区。
21. W6 先建 Evaluation Pipeline，W7 再实现 Policy RAG。
22. W8 明确 Data / Service / MCP 边界，W9 做 bounded Agent，W10 加 safe long-term memory。
23. P3 是主课后的独立 12 周团队项目，具体项目和名额按当期匹配。

## 24–30 · 校友证据、匹配与第一次 CTA

24. 直接展示官网已经公开的真实微信、Offer 与入职截图。个人经历不代表普遍结果。
25. 展示 EY 与 Macquarie 两个岗位。市场参考不是学员实际 Offer 金额。
26. 问能否跑 repo、修改 Python / API 基础代码、稳定投入约 9 小时。
27. 按企业责任解释五类常见工作重心。
28. 按六类背景讲可迁移能力和重点缺口。
29. 用责任范围解释 Demo、System、Production 三档成熟度。
30. 给出申请与 1 节试学入口，然后停 2–3 分钟回答问题。

## 31–37 · OpenClaw / MiniClaw 架构

31. 说明边界：这是教学纵切面，不是生产 OpenClaw 的完整复刻。
32. 用六层定位 OpenClaw，强调这是教学拆法。
33. 切到“自己怎么造”。从 Channels / UI 和 Gateway 往下讲，Harness 居中控制七步循环；Memory 提供状态，Tool Runtime 执行动作，Sandbox 限制动作范围，Skills Loader 提供做事方法，Observability / Eval / Audit 保存证据并判断质量。
34. TUI 是连接 Gateway 或本地 Runtime 的操作面。
35. Harness 负责一轮 Agent 的上下文、工具循环、边界和持久化。
36. CLI 调 Agent；Skill 与 Memory 提供上下文；Router 调 Provider；Trace 横向记录。
37. 让观众复述 Contract、Translation、Policy 三层职责。

## 38–45 · Live Coding

38. 从失败 Provider 写起，再写 Router。先红后绿。
39. 展示 `doctor` 和只读发现命令，再执行显式 Memory 写入。
40. 修改 `SKILL.md` 后证明 loader 读到了变化。
41. 写入 confirmed 事实，开新进程召回。
42. 当前 Demo 未实现完整更正与删除，不假装已有命令。
43. 执行 `reflect propose`，只有明确决定时才 approve。
44. 执行故障 Demo，读真实 JSON 的 attempts、memoryIds、skill 和 trace。
45. 第二次运行证明跨进程召回；Mock 是排练模式。

## 46–48 · 收口

46. 对照教学版本与 Production 仍需补齐的能力。
47. 把模块映射回 W6–W13。
48. 第二次 CTA。只承诺课程交付，不承诺薪资、Offer 或未经官网确认的名额。
