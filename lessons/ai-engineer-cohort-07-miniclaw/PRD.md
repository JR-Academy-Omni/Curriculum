# AI Engineer 第七期公开课：课程说明与 MiniClaw Live Build

状态：已按 Talk Deck 制作并完成本地构建、三视口 DOM QA 与关键页肉眼检查；尚未部署。

## 制作规范与唯一来源

- 制作 Skill：`curriculum/.claude/skills/talk-deck/SKILL.md`。
- 只升级本目录，不另起第二套课件。固定 1600×900；一文件一页；从 `_template` 原样复用引擎、UI、摄像头及 theme。
- 视觉：JR Register B 圆角课程风，暖色网格纸、官方 Logo、少量品牌色偏移阴影。内容关系决定版式，不堆同款卡片。
- 课程事实：`../../ai-engineer-bootcamp/public/outline.json` 及 `COHORT_07_OUTLINE.md`。售卖信息以官网课程页为准，制作报名页前重新核对。
- Demo 事实：本目录 `demo/miniclaw` 实际代码和运行结果。OpenClaw-like 教学实现，不声称重建完整 OpenClaw。
- 本次交付为本地可放映 Talk Deck 与逐页讲师备注。不包含自动发布、录播、配音或摄像头采集。

## 学习与销售目标

先让观众判断第七期的内容、训练方式和前置基础是否匹配，并完成第一次报名引导；随后通过现场代码解释 LLM 接口、Provider、Router、CLI、Skills、Memory 与受控调整的职责。

主标题：AI Engineer 第七期公开课

副标题：课程路线解读，现场搭建 MiniClaw

## 整体节奏

| 时间 | 章节 | 页码 | 动作 |
|---|---|---|---|
| 00–20 min | 为什么现在做 AI Engineer | 1–13 | 人群与门槛、六个误区、全球与澳洲薪资、工程责任变化、岗位路径、能力公式、就业增长与能力自测 |
| 20–42 min | 第七期课程安排 | 14–23 | 双线课堂、双导师实践、全球学员、CareKind、逐周交付与 Production 级 P3 |
| 42–48 min | 校友原话与真实截图 | 24–25 | 展示已公开的微信反馈摘录和脱敏双 Offer 截图 |
| 48–59 min | 匹配判断、岗位方向与报名 | 26–30 | 入学自测、五类岗位、背景迁移、工程成熟度与第一次 CTA |
| 59–68 min | OpenClaw / MiniClaw 架构 | 31–37 | 用 OpenClaw 六层总图定位，再展示 MiniClaw 八层施工图、TUI、Harness 与模型三层 |
| 68–84 min | 现场 Coding | 38–45 | 在关键实现节点切编辑器和终端，PPT 只解释结构与验收 |
| 84–90 min | 课程映射与收口 | 46–48 | 回到正式课，答疑与第二次 CTA |

## 逐页 spec

| 页 | 标题 | 画面与信息 | 讲师动作 / 验收 |
|---|---|---|---|
| 1 | AI Engineer 第七期公开课 | 大标题、“又缺人，又裁员”行业钩子，以及 TUI / CLI、Harness、Skills / Tools、Memory、Router / Providers 现场构建预告 | 说明先课程、后 Coding |
| 2 | 一周两节，一节学，一节做 | 复用第七期既有推广主线：当周学原理、当周做进项目、连续 13 周不换 Demo | 直接讲清教学方式的变化 |
| 3 | 不同背景进入 AI Engineering，起点并不相同 | 复用既有公开课六类背景页，逐类列出可迁移能力与需要补齐的部分 | 让学员先找到自己的起点 |
| 4 | 会写代码，是进入 AI Engineer 的起点 | 四类主要学员背景、Python / Node.js / TypeScript + API 硬门槛，以及 Context、RAG / Eval、Agent / MCP / Harness 三类共同缺口 | 直接回答谁适合这门进阶课 |
| 5 | 关于 AI Engineer，最常见的六个误解 | API Caller、ML Researcher、Prompt Engineer、No-code、PhD、Demo 六个误区 | 用工作责任纠正概念，不用夸张百分比 |
| 6 | AI Engineer 的机会，不只在澳洲 | 六个市场 Total Compensation 参考和统一口径说明 | 明确不能跨国家、级别和股权结构直接横比 |
| 7 | AI Engineer 面对的 IT 行业：又缺人，又裁员 | 一边解释模板化工作为什么缩减，一边列出仍然短缺的 AI 系统责任 | 用具体工作解释行业矛盾，不让口号悬空 |
| 8 | 三条工程路径，正在汇入 AI Engineer | Software、Data、Platform / DevOps 三条入口与 AI Engineer 五类职责 | 说明原有经验如何迁移 |
| 9 | AI Engineer = 六类能力一起工作 | Software、AI、Data、Cloud、Product Thinking、Eval & Governance | Product Thinking 决定做什么，其余能力负责交付 |
| 10 | 澳洲 AI Engineer 薪资 | 中高级 A$160K–300K+ 主张，并拆出全国平均、高位与悉尼 Senior 参考 | 明确不是统一起薪，也不是学员薪资承诺 |
| 11 | AI Engineer 就业前景 | 41,000 条 AI 技能岗位、AI Developer +81.2%、Agentic AI +174.4%、Governance +123.2% | 解释岗位增长集中在能交付、治理 AI 的人 |
| 12 | JR Academy 训练与就业证据 | 官网公开的 200+ 学员、30+ 校友 Offer，以及 13 周主课 + 12 周 P3 + Career Evidence 完整链路 | 直接展示可比较的体系 |
| 13 | AI Engineer 十层能力自测 | Model、Context、RAG、Tools/MCP、Agent、Multi-Agent、Memory、Harness、Routing、Governance/Evals | 用四档定位学习差距，不冒充招聘评级 |
| 14 | 第七期的课堂结构 | 理论 12 周、实践 13 周、25 场 Live、118 小时 25 分钟总学习投入 | 双线并行，不能相加成 25 周 |
| 15 | 每周怎么学 | 课前录播与 Lab、理论 Live、实践 Live、课后工程证据四步安排 | 回答怎么安排，以及为什么这样安排 |
| 16 | 实践课双导师 | 使用课程正式双导师海报，明确左侧 Lightman、右侧 Jason | 说明实践主线主要由两人共同带练 |
| 17 | 全球学员分布 | 世界地图点亮澳洲、美国、中国、英国伦敦、新加坡和马来西亚 | 不添加人数或比例 |
| 18 | 13 周完整实践主线 | 同屏列出 W1–W13 | 一页看清全部安排 |
| 19 | W1–W3：产品与 Context 基础 | 理论、实践、内容和交付 | AI 能力建立在产品底座上 |
| 20 | W4–W5：第一次接入 AI | Voice、RAG Fundamentals、RAG Quality 与 AI-Native Workspace | 展示可信输入与评估意识 |
| 21 | W6–W7：Evaluation-Driven RAG | MCP、Evaluation Pipeline、Agent 理论与 Policy RAG | 解释工程依赖顺序 |
| 22 | W8–W10：Tools、Agent 与 Memory | Data/MCP/CLI、Bounded Agent、Memory 与 Harness | 能力和控制同步增加 |
| 23 | P3：Production 级团队项目 | 独立 12 周真实项目 | 项目和名额以当期匹配为准 |
| 24 | 校友怎么说 | 官网公开微信、Offer 与入职记录 | 直接展示原图 |
| 25 | 第 4 期学员双 Offer 微信截图 | EY 与 Macquarie 咨询截图 | 区分市场参考和实际 Offer |
| 26 | 报名前的三个自测 | 独立运行项目、修改基础代码、稳定投入 | 给出报名判断 |
| 27 | AI Engineer 五类岗位 | 五类工作重心 | 先看责任，再看 title |
| 28 | 六类背景迁移 | 各类背景可迁移能力和缺口 | 把原经验和目标岗位对上 |
| 29 | 三档工程成熟度 | Demo、System、Production 责任阶梯 | 解释企业继续追问什么 |
| 30 | 申请与试学入口 | 可点击官网入口 | 完成第一次 CTA |
| 31 | 现在开始搭 MiniClaw | 构建目标与生产边界 | 明确教学范围 |
| 32 | OpenClaw 六层系统图 | 六层和跨层控制 | 说明是教学拆法 |
| 33 | MiniClaw 八层施工图 | Channels / UI、Gateway、Harness、Memory、Tool Runtime、Sandbox、Skills Loader、Observability / Eval / Audit | Harness 居中，画清 Tool Runtime 与 Sandbox 的依赖 |
| 34 | OpenClaw TUI | Session、运行、工具、审批、状态与 Trace | TUI 是操作面 |
| 35 | Harness 运行控制 | 一轮 Agent 从接收到回传 | Harness 管运行 |
| 36 | 一次请求经过哪些模块 | MiniClaw 模块关系 | 不讲成单一路径 |
| 37 | LLM、Provider、Router | Contract、Translation、Policy | 分清职责 |
| 38 | 模型调用与降级 | 最小 Router 代码 | 验证 fallback |
| 39 | CLI 是系统的操作入口 | doctor / models / chat / memory / skills | 命令一致 |
| 40 | Skill 改变任务说明 | SKILL.md 进入请求 | 验证加载 |
| 41 | 记忆如何跨进程保留 | 确认写入和召回 | 未确认内容不写入 |
| 42 | 长期记忆的边界 | 用户、来源和生命周期 | 说明缺失能力 |
| 43 | 自我调整需要批准 | Trace、Proposal、人工批准 | 不暗示自动回归 |
| 44 | 故障演示：主模型不可用 | 故障注入命令 | 展示真实输出 |
| 45 | 第二次运行带上记忆 | 新进程召回和 Trace | 标记 Mock |
| 46 | 从教学版本到生产系统 | 当前能力与 Production 缺口 | 对照代码说明边界 |
| 47 | 课程映射 | MiniClaw 映射 W6–W13 | 回到正式训练 |
| 48 | 最终 CTA | 申请入口与答疑 | 不承诺薪资或 Offer |

## 制作与验收闸门

1. 逐页方案确认后改 src；本次用户已明确要求直接制作。
2. 复用模板引擎，内容页独立文件，补齐同一份逐页讲师备注。
3. 核查官网售卖信息；复跑安全离线 Demo；所有日志只取真实输出。
4. 运行 typecheck / build，逐页检查文字、关系图和圆角容器；验证键盘、深链及全屏。
5. 更新 `curriculum/lessons.html` 页数与 Local 状态及根 CHANGELOG。不声称已上线。
