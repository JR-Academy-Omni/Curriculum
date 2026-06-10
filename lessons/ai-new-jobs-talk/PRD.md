---
title: 网页版讲座《AI 催生了哪些新岗位？》PRD
status: ship
owner: @lightman
priority: high
---

# PRD · 网页版讲座《AI 催生了哪些新岗位？》

> 文档类型：产品需求文档 (PRD)
> 版本：**v0.2（已上线 · 持续迭代）** — v0.1 是 38 页计划稿，本版同步到实际上线的 63 页结构
> 项目代号：`ai-new-jobs-talk`
> 线上地址：`jiangren.com.au/curriculum/lessons/ai-new-jobs-talk/`（已部署，已现场讲过，反馈好）
> 数据来源：`jiangren.com.au/ai-new-jobs`（23 个新岗位）+ `jiangren.com.au/career-impact-map`（78 个传统岗位 AI 风险地图）

---

## 0.0 v0.2 演进说明 — 实际上线 vs v0.1 计划

> v0.1 是 38 页的纸面计划。真正构建并上线的 deck 是 **63 页**，结构有重大演进。本节记录差异，下面 §1 大纲已按实际结构更新。

**实际上线结构（63 页 / `src/App.tsx` 装配顺序）**：

| Block | 章节 | 页数 | 关键变化 vs v0.1 |
|---|---|---|---|
| CH 0 | 开场 + 立论 | 4 | 基本保留 |
| CH 1 | **消失的岗位**（C01–C05） | 6 | 🆕 新增整章 — 先讲"谁在消失"立张力，再讲"谁在出现" |
| CH 2 | 技术岗（含 4 个漏网之鱼并入） | 18 | Vibe Coder / 具身智能 / 合成数据 / AI Sales Eng 不再单设 CH4，**并入对应章节深讲** |
| CH 3 | 治理管理岗 | 10 | 基本保留；CAIO 移到附录 |
| CH 4 | 行业垂直岗 | 9 | GEO / Healthcare / Finance Compliance |
| **CH 5** | **🔥 AI Adoption 案例 — 营销 pipeline 5 级阶梯（Z01–Z07）** | **9** | 🆕🆕 **v0.1 完全没有。这是现场反馈最好的一章**，详见 §1.6 |
| 收尾 | 自检 + 三路径 + 入口（S35–S38） | 5 | 加 S35a 互动诊断角色 |
| 附录 | CAIO（niche 角色后置） | 2 | 从 CH2 移出 |

**v0.2 新增的战略定位（本次更新的重点）**：

这套 deck 不再只是"岗位盘点科普"，**CH 5 的营销 pipeline 阶梯让它具备了独立做一场「AI Marketing 讲座」的能力**，并天然导流到两门课：

- **CH 5 的「你卡在哪一层」自检 = 天然 CTA**。观众看完 5 级阶梯（朴素 ChatGPT → 模板化 → 多平台 Master/Variant → 反馈闭环 → 企业记忆）会自检"我一直在 Step 1"。
- **导流分叉**：
  - 卡在低层、想往上爬但缺"搭 pipeline / 接 skill+API"的能力 → **『人人都能学的 AI Coding 实战课』**（`ai-programming`，零基础 Cursor 从想法到上线）
  - 想要 Step 5 那个终态（一个人 + 一套有记忆的 AI 系统，把营销+产品+运营全转起来变成自己的公司）→ **『AI 一人创业营』**（`ai-solo-founder-bootcamp`，OPC + 澳洲 Grant + 三城线下）
- 守红线：只承诺能力/作品/pipeline，**禁说月入/副业/接单/包就业**（见 §2.2）。

**配套营销资产（已存在）**：`xhs/` 目录 = 把本讲座改编成小红书的成品（6 张 poster N1–N6 + case-T01 四步 pipeline 实操材料），本身就是 CH 5 "搭 pipeline" 思路的现身说法。

---

## 0. 项目背景与目标

### 0.1 业务背景
- **页面已存在但分散**：JR Academy 已有两个数据完整的产品页 — `/ai-new-jobs`（23 个 AI-native 岗位）和 `/career-impact-map`（78 个传统岗位 + AI 风险评级），但都是**让用户自己点**，缺一个**把数据串成故事**的对外触达载体
- **市场需求清晰**：2024-2026 年公众讨论从"AI 会取代谁"转向"AI 催生了什么"，但中文世界缺少基于真实薪资和雇主数据的盘点；社交媒体上充斥模版化"10 大未来职业"清单
- **JR 资产优势**：23 个岗位每个都已绑定 `jrCourses[]`（指向 production 上能买的 bootcamp / workshop），讲座可直接把听众导流到具体课程
- **讲座形态**：公开讲座（弹性 75–100 分钟，混合背景听众：留学生 / 求职 active / 在职转型），中性科普为主，**CH 5 营销 pipeline 阶梯收口到 JR 学习路径 + 两门课导流**

### 0.2 学习目标（Learning Outcomes）

听众听完应该能：

1. **建立分类心智模型** — 知道 AI 新岗位分技术岗 / 治理管理岗 / 行业垂直岗三大类，每类典型代表是谁
2. **辨识真假新岗位** — 区分"真新岗位"（薪资数据、雇主公开 JD、增长曲线都支撑）和"营销噱头岗位"
3. **找到自己的入口** — 知道根据现有背景（技术 / 业务 / 非技术）能往哪条新岗位转型
4. **看见盘点的缺失** — 知道 ai-new-jobs 页面**没有覆盖**但 2025-2026 已经成型的 4 个新工种（Vibe Coder / 具身智能 / 合成数据 / AI Sales Engineer）
5. **拿到下一步行动** — 留下 1 个可立刻做的动作（去 `/career-impact-map` 自检 / 报名某个 bootcamp / 加群跟进）

### 0.3 项目交付物（v0.2 实际）
- ✅ 一份 **63 页** 网页版 slides（中文为主，公司名/职位名保英文）— React 19 + framer-motion，已构建
- ✅ 已部署到 `jiangren.com.au/curriculum/lessons/ai-new-jobs-talk/`，已现场讲过（反馈好）
- ✅ 配套小红书引流资产 `xhs/`（6 张 poster + case-T01 四步 pipeline 实操材料）
- 🔄 **重用方向**：以 CH 5 为主体裁出独立「AI Marketing 讲座」，导流 `ai-programming` + `ai-solo-founder-bootcamp`

---

## 1. 讲座内容大纲（实际 63 页 · 弹性 75–100 分钟）

### 1.1 整体节奏（v0.2 实际结构）

| 章节 | 页数 | 建议时长 | 交付什么 |
|---|---|---|---|
| CH 0 · 开场 + 立论（S01/S02/S04/S04b） | 4 | 8 min | 听众理解"为什么这不是又一个清单文" |
| CH 1 · 消失的岗位（C01–C05） | 6 | 10 min | 🆕 先立张力："谁在消失" → 引出"谁在出现" |
| CH 2 · 技术岗 + 4 漏网之鱼（S05–S13 / S29–S32 并入） | 18 | 20 min | AI Engineer / FDE / Agent Dev / Adoption Specialist 深讲 + Vibe Coder / 具身 / 合成数据 / AI Sales Eng |
| CH 3 · 治理管理岗（S14/S09/S16/S17/S18–S20） | 10 | 14 min | CAIO（→附录）/ AI PM / AI Ethics 深讲 |
| CH 4 · 行业垂直岗（S21/S22/S24/S32/S25/S26） | 9 | 12 min | GEO / Healthcare AI / Finance Compliance |
| **CH 5 · 🔥 AI Adoption 营销 pipeline 阶梯（Z01–Z07）** | **9** | **18 min** | **同一选题跑 5 级，让观众肉眼看到落差 — 见 §1.6** |
| 收尾 · 自检 + 三路径 + 入口（S35/S35a/S36/S37/S38） | 5 | 8 min | 「你卡在哪一层」诊断 → 导流两门课 |
| 附录 · CAIO（S15/S15b） | 2 | 按需 | niche 角色，时间够才讲 |

**总计**：63 页。**作为「AI Marketing 专题讲座」重用时**：可裁掉 CH1–CH4 的岗位盘点，以 CH 0 立论 + **CH 5 阶梯为主体** + 收尾导流，压成一场聚焦 marketing 的 2 小时讲座（配现场 demo）。

### 1.2 每页内容拆解（岗位章节 · 内容口径不变）

> ⚠️ 下面 §1.2 的 P05–P34 是 v0.1 的岗位内容规格，**岗位事实/薪资/数据口径仍然准确并已上线**，仅章节归属按 §0.0 表重排（漏网之鱼并入 CH2、CAIO 移附录）。**CH 5 营销阶梯是 v0.2 新增，规格见 §1.6。**

#### **Chapter 0 · 开场 + 立论**（4 页 / 8 min）

1. **P01 · 封面** — 标题《AI 催生了哪些新岗位？》/ 副标题《23 个真实新工种 + 4 个盘点漏掉的》/ JR Academy logo / 日期
2. **P02 · 一组反差数据** — 左半"过去 18 个月最快消失的岗位"（CRUD 程序员、SDR、手动 SEO、纯 UI 前端、QA 测试），右半"过去 18 个月最快出现的岗位"（AI Engineer +300%、AI Agent Developer +986%、Digital Agronomist +470%、AI Trainer +112%）。**立论**：AI 不是单纯杀岗位，而是同时**催生了一批全新岗位**
3. **P03 · 为什么这次盘点不一样** — 三条标准：(1) 有公开雇主 JD（不是 LinkedIn 上的营销 title）；(2) 有可验证薪资范围；(3) 在 2023 年之前不存在或几乎不存在。**所有数据来自 `jiangren.com.au/ai-new-jobs` 的原始研究**
4. **P04 · 三大分类地图** — 一张分类总览图：技术岗 13（紫色）/ 治理管理岗 5（橙色）/ 行业垂直岗 5（青色）。承诺 "60 分钟内我们会过完这 23 个，其中 10 个深讲，再补 4 个盘点漏掉的"

#### **Chapter 1 · 技术岗（13 个）**（9 页 / 12 min）

5. **P05 · 章节封面 1 · 技术岗 13** — 大标题"AI 时代的工程师们"
6. **P06 · AI Engineer 深讲** — 2026 中级 base $155K-$200K、senior $350-600K+，OpenAI 人均股权 $1.5M，70%+ 编码通过 Cursor/Claude Code 完成。**真正的故事**：AI 工程师不是"会调 API 的传统工程师"，是软件工程师 × 数据科学家的混合体。**绑定 JR 课程**：AI Engineer Bootcamp / AI Engineer Full-stack
7. **P07 · Forward Deployment Engineer (FDE) 深讲** — Palantir 2010 年代发明、OpenAI/Anthropic 2024 起复制；base $270K-$485K + 股权，总包 $500K+。**真正的故事**：不在总部写模型，直接坐进客户会议室两周内交付生产 demo。25-40% 出差率。前 Palantir FDE 现在占据头部 AI 公司工程领导层
8. **P08 · AI Agent Developer 深讲** — LinkedIn 数据 +986% 增长，Gartner 预测 2026 年底 40% 企业应用集成 Agent（2025 初 <5%），新加坡 AI 岗位密度全球最高 (3.2%)。**真正的故事**：从 Prompt Engineer → Context Engineer → Agent Developer 的演化链
9. **P09 · AI Adoption Specialist 深讲** — 半技术半心理的复合岗位，$90K-$190K。**真正的故事**：71,000 个全球缺口（ServiceNow 数据 2028 前），心理学/HR/培训/咨询背景反而**比纯工程师有优势**。给非技术听众一个明确的"我也能转"的入口
10. **P10 · 技术岗 9 个一句话带过**（一个 9 卡片网格） — Prompt Engineer / Context Engineer / RAG Engineer / AI Trainer / Algorithm Bias Auditor / AI Red Teamer / MLOps Engineer / AI Automation Specialist / Knowledge Architect。每个卡片：中文名 + 一句话 + 薪资范围
11. **P11 · 技术岗薪资全景图** — 13 个岗位横向条形图，y 轴薪资上下限。视觉冲击：FDE 和 AI Engineer 在 top，Bias Auditor / Automation Specialist 是入门门槛
12. **P12 · 技术岗学习路径合并** — 13 个岗位 → 主要 3 条学习路径（AI Engineer / Prompt Master / DevOps+MLOps），每条路径对应的 JR bootcamp
13. **P13 · 转场 · "技术岗讲完了，但你不写代码也能进 AI"** — 引出 Chapter 2

#### **Chapter 2 · 治理管理岗（5 个）**（7 页 / 12 min）

14. **P14 · 章节封面 2 · 治理管理岗 5** — 大标题"董事会上谈 AI 战略的人"
15. **P15 · Chief AI Officer (CAIO) 深讲** — IBM 数据 26% 组织已设立（两年前 11%），FTSE 100 中 48% 已任命；平均总薪酬 $1.8M，top $2.6M+。**真正的故事**：50% 来自数据科学，21% 来自咨询，17% 来自工程 — 不是只有技术大牛才能当
16. **P16 · AI Product Manager 深讲** — 比传统 PM 高 20-30%（KPMG）；2025 年全球超 12,000 人转入；新加坡/马来西亚的 Grab/Shopee/Sea Group 是亚太最大雇主。**真正的故事**：转型最现实的路径，传统 PM 1-2 年就能进
17. **P17 · AI Ethics & Compliance Officer 深讲** — 2026 年 8 月 EU AI Act 高风险条款强制执行 + 新加坡 MAS 收紧框架 = 需求 45% YoY。**真正的故事**：完全不写代码，法律/政策/合规背景**最吃香**。给非技术、非工程听众另一个明确入口
18. **P18 · 治理岗 2 个一句话带过** — Chief AI Revenue Officer（CAIO 的细分，专做"用 AI 赚钱"）/ Human-AI Collaboration Leader（IDC 2026 年 G2000 中 40% 岗位涉及和 Agent 协作，管理 Agent 的人有 40% 薪资溢价）
19. **P19 · 治理岗共同点** — 一张总结卡：5 个岗位都是**业务×技术×沟通**的交叉点，**没有一个**要求你是 PhD 或 Senior Engineer。给"我已经工作 5-10 年但不是工程师"的听众明确信号
20. **P20 · 转场 · "AI 不只在科技公司，每个行业都在变"** — 引出 Chapter 3

#### **Chapter 3 · 行业垂直岗（5 个）**（7 页 / 12 min）

21. **P21 · 章节封面 3 · 行业垂直岗 5** — 大标题"AI 进入了医院、银行、农田、教室、搜索引擎"
22. **P22 · GEO Specialist 深讲** — 一个全新学科，2024 年前几乎不存在；市场 2025 ~$10 亿，2034 预计 $170 亿（45.5% CAGR）；中国 2025 上半年单半年 $36.5 亿（+240% YoY）；**36% 从业者年薪 $200K-$500K**。**真正的故事**：SEO 死了，但 SEO 人没死 — 转 GEO 的人正在吃这波红利
23. **P23 · Healthcare AI Integrator 深讲** — **71% 美国医院已部署预测 AI 模型**，医疗行业 AI 采纳速度是整体经济的 2.2 倍；新加坡 Smart Health 计划 + 马来西亚 MyDigital Blueprint 推动区域需求
24. **P24 · AI Compliance Expert (Finance) 深讲** — 2026 EU AI Act + DORA + MiCA 三重法规叠加，70%+ 银行已用 AI 但缺治理框架；新加坡 MAS 是亚太最严的 AI 监管框架。**真正的故事**：澳洲四大行 + 新加坡金融机构是亚太最大雇主，对**法律/合规/审计背景的人是开放的**
25. **P25 · 行业岗 2 个一句话带过** — Digital Agronomist（农业 AI +470%，马来西亚棕榈油 + 澳洲大农场是亚太主场）/ AI Education Designer（21% EdTech 岗位明确要求 AI 技能，企业培训 EdTech AI 采纳率最高 31%）
26. **P26 · 行业岗的关键洞察** — 总结卡："**不必离开你现在的行业**" — 医生、银行家、农艺师、教师、SEO 专家**都能在原行业内**升级成 AI 角色，不一定要转去硅谷
27. **P27 · 转场 · "盘点完了 23 个，但还有 4 个 ai-new-jobs 没收录的新工种"** — 引出 Chapter 4

#### **Chapter 4 · 盘点的漏网之鱼（4 个）**（7 页 / 10 min）

> 这一章是讲座的**记忆点**和差异化卖点 — JR 内部页面没收录但市场上确实存在的新工种。

28. **P28 · 章节封面 4 · 漏掉的 4 个新工种** — 大标题"23 远远不够 — 这 4 个工种正在野生爆发"
29. **P29 · Vibe Coder / AI-First Founder 深讲** — Karpathy 2025 年初推的"vibe coding"概念催生的工种。Levelsio (Pieter Levels) / Marc Lou 等单人开发者用 AI 做到 $1-10M ARR；**重点**：不是"AI Engineer"那种企业岗，而是个人/小团队商业模式 — 一人 + 一 AI = 一产品。**绑定 JR 课程**：AI Solo Founder Bootcamp / Vibe Coding Masterclass
30. **P30 · 具身智能 / Robotics-AI Engineer 深讲** — Figure AI、Tesla Optimus、1X、Unitree 浪潮；在 LLM 工程师之外的 Embodied AI 工程师 — 把基础模型接到机械臂、双足机器人、自动驾驶。**重点**：硅谷已经从"软件 AI"转向"具身 AI"作为下一波叙事；目前北美 base $200-400K
31. **P31 · 合成数据工程师 Synthetic Data Engineer 深讲** — 训练数据短缺是 2025 年 AI 行业最大瓶颈（Epoch AI 报告：高质量公开文本数据 2026-2032 用尽）；Scale AI / Gretel / Mostly AI 是头部；生成合成图像/文本/代码作为训练数据。**重点**：介于数据工程师和 ML 工程师之间的全新细分
32. **P32 · AI Sales Engineer / Solution Engineer 深讲** — OpenAI/Anthropic/Cohere/Databricks 都在大规模招（仅次于 FDE）；介于 FDE（深技术嵌入客户）和传统 Sales（关系驱动）之间。**重点**：技术背景 + 客户沟通能力 = 这个岗位；总包通常 $250-500K
33. **P33 · 为什么这 4 个 ai-new-jobs 还没收录？** — 诚实的回答：ai-new-jobs 数据库每季度更新，这 4 个是 2025 Q4 - 2026 Q1 才显著爆发的，**下一次更新会收录**。把这个透明度变成讲座可信度 — "我们不是营销文，是真实在追踪的研究项目"
34. **P34 · 漏网之鱼共同特征** — 总结卡：4 个工种都符合 (1) 2025 之后才形成 (2) 雇主已经在公开发 JD (3) 还没被中文媒体大量报道。**给听众的暗示**：现在进入 = 早期红利

#### **Chapter 5 · 自检 + 转型路径 + Q&A**（4 页 / 6 min）

35. **P35 · 三问自检** — 一张大卡：
    - 你现在的岗位在 `/career-impact-map` 78 个岗位里吗？（扫码访问）
    - 它的 AI 风险评级是 High / Medium / Low？
    - 它对应的 transitionRole 是这 27 个新岗位中的哪一个？
36. **P36 · 三条典型转型路径**（一张图） —
    - **技术背景 → AI Engineer / AI Agent Developer / RAG Engineer**（路径：AI Engineer Bootcamp）
    - **业务/产品背景 → AI Product Manager / AI Adoption Specialist**（路径：AI 必修课 + Business Analyst Bootcamp）
    - **非技术背景 → AI Ethics Officer / GEO Specialist / AI Compliance**（路径：AI 必修课 + AI Marketing / Digital Marketing）
37. **P37 · JR 学习入口** — 三张课程卡（不超过 3 张避免硬卖感）：AI Essentials Bootcamp（全员入门）/ AI Engineer Bootcamp（技术深度）/ Business Analyst Bootcamp（产品/业务方向）。每张卡只显示一句价值主张 + 价格 + 时长
38. **P38 · 收尾 · Q&A 入口 + 资源** — 三个资源链接：
    - 完整 23 岗位详情 → `jiangren.com.au/ai-new-jobs`
    - 自检你现在的岗位 → `jiangren.com.au/career-impact-map`
    - 加微信社群 / 1 对 1 咨询入口

---

### 1.6 🔥 Chapter 5 · AI Adoption 营销 pipeline 阶梯（v0.2 新增 · 现场反馈最好的一章）

> **slides**：`Z01–Z07`（线上 page 48–56）
> **配套实操材料**：`xhs/case-T01/`（同一选题 T01 跑完每一级的真实成品 + prompt）
> **核心设计**：用**同一个选题（T01 · 2026 AI 新岗位地图）跑 5 个进化等级**，让观众肉眼看到自己用的 AI 和真正的 AI pipeline 差多远。它不讲道理，它**演示落差** —— 这是整章最值钱的设计，不要改成抽象讲解。
> **一句话立论**（封面 Z01）：**「AI Adoption 不是『用 AI』，是『搭 pipeline』。」**

| Page | Slide | 等级 | 内容 | 杀伤点 / 金句 |
|---|---|---|---|---|
| 48 | Z01 | 封面 | 立靶子：AI Adoption = 搭 pipeline | — |
| 49 | Z02 | **Step 1 · 朴素版** | ChatGPT 一句话 → "宝子们👋" 模板垃圾，2 分钟发布 | **"99% 的人停在这里 —— 这就是大多数人以为的『用 AI』"** |
| 50 | Z03 | **Step 2 · 模板化** | 5 阶段 cron pipeline（TRIGGER→GENERATE→VISUAL→REVIEW→SCHEDULE），每周自动跑 | 角色：你写你发你重复 → **AI 执行，你只决策** |
| 51 | Z04 | **Step 3 · 自动选题+多平台** | 5 层 pipeline：数据采集（Reddit/X/Trends）→AI 选题→4 平台生成→配图→发布追踪 | Built with Claude Skills × 5 |
| 52 | Z04b | **Step 3.5 · 匠人 Master/Variant** | 1 份 Master（单一真相）→ per-platform variant transformers 并行 → publisher → feedback loop | **改 1 处，5 个平台同步生效**；你升级为「内容架构师」 |
| 53 | Z05 | **Step 4 · 完整闭环** | 互动数据回流，AI 自动分析 hook 转化 / 时段表现 → 自动调权重 | AI-native，飞轮自己转 |
| 54 | Z05b | **Step 5 · 企业级记忆** | 3 层记忆（员工 / 公司知识库 / 业务状态）→ AI BRAIN → 主动安排/调整/生成/提醒 | **"没有记忆的 AI = 工具，有记忆的 AI = 同事"** |
| 55 | Z06 | 概念收口 | L1（用 AI）→ L2（搭 pipeline）→ L3（设计+落地能力） | **L1→L3 · ×100 价值跃迁** |
| 56 | Z07 | **自检 = CTA** | "现在轮到你 —— 你卡在哪一层？" | 天然导流分叉点（见下） |

**Z07 自检 → 两门课导流话术（守红线，只说能力不说钱）**：

> "看完这 5 级，问自己卡在哪 ——
> - 想往上爬却发现 Step 2–4 全要你能**把 skill、API、自动化接成一条 pipeline** → 这是『**做得出**』的能力，零基础也能学 → **『人人都能学的 AI Coding 实战课』**。
> - 你已经能搭单条 pipeline，但想要的是 **Step 5 那个终态：一个人 + 一套有记忆的 AI 系统，把营销+产品+运营全转起来，变成自己的公司** → **『AI 一人创业营』**（OPC + 澳洲 Grant + 三城线下）。
> - 而今晚这场讲座本身，**就是一次 AI Marketing 的演示** —— 选题、内容、把你引到这里，全是你刚看到的那套 pipeline。"

**现场 demo 建议**：讲 Z02 vs Z05 时，当场把同一句"写条 AI 岗位的小红书"分别用朴素 prompt 和 pipeline 跑一遍，对照成品落差最有冲击力。素材直接取 `xhs/case-T01/STEP1_CHATGPT_NAIVE.md` vs `STEP4_PIPELINE_FINAL.md`。

---

## 2. 内容口径与红线（必须遵守）

### 2.1 数据口径
- 所有薪资数据**必须**来自 `jiangren.com.au/ai-new-jobs` 已公开的数据；不在该页面的数字（漏网之鱼 4 个除外）一律不上 slide
- 漏网之鱼 4 个的数据需要现场拉外部源（Levels.fyi、Glassdoor、公司公开 JD），slide 上写明 "来源：xxx"
- 所有"X% 增长"数据保留**月份和数据源**（如"LinkedIn 2025 Q3 报告"），不要孤数字

### 2.2 红线（不可触碰）

| 不能说 | 替代说法 |
|---|---|
| "学完这门课你就能拿到 $XXX 工资" | "市场上这个岗位的薪资带宽是 $XXX，掌握这些技能是入场券" |
| "副业 / 月入过万" | "把它当主业去学，不要当副业幻想" |
| "AI 取代了 XXX 行业" | "AI 改变了 XXX 的工作方式，让 XX 类任务自动化" |
| "100% 包就业 / 100% 转型成功" | 任何就业承诺一律不写 |
| "卷 / 杀岗位 / 鄙视链" | 中性叙述，不情绪化 |

### 2.3 语气
- **中性科普为主**，不卖课感强；卖课只在 P37 一页集中出现
- **每一个深讲岗位**都要包含一个"真实公司在招 + 公开 JD 链接"的证据，不是 LinkedIn 营销文
- **不要用 AI 味套话**："在当今快速发展的 / 让我们一起 / 准备好了吗 / 深入探讨" 全部禁用（参照 CLAUDE.md 全局规则）

---

## 3. 技术实现

### 3.1 Slide Deck 技术栈
- **完全复刻 `claude-skills-workshop/` 的工程结构**：Vite 8 + React 19 + framer-motion 12 + inline styles
- **Neo-Brutalism 设计系统**：黑 3px 边框 + 6px 6px 0 #000 阴影 + hover 移位
- **字体**：Bricolage Grotesque（标题）/ DM Sans（正文）/ Space Mono（数据）/ Noto Sans SC（中文）
- **共享 UI**：`src/components/ui.tsx`（Slide、Card、Title、Highlight、Grid、Stagger）
- **每张 slide 是独立文件**：`src/components/slides/S01_Cover.tsx` → `S38_Closing.tsx`

### 3.2 目录结构（待 sign-off 后创建）

```
ai-new-jobs-talk/
├── package.json
├── index.html
├── vite.config.ts          # base: '/curriculum/ai-new-jobs-talk/'
├── tsconfig.json / tsconfig.app.json
├── public/
│   ├── outline.json        # 38 张 slide 元数据
│   └── (后续可加 curriculum.html 文字版备份)
├── src/
│   ├── main.tsx
│   ├── App.tsx             # SlideEngine + Slides 装配
│   ├── styles/theme.ts
│   └── components/
│       ├── SlideEngine.tsx
│       ├── ui.tsx
│       └── slides/
│           ├── S01_Cover.tsx
│           ├── ...
│           └── S38_Closing.tsx
└── bun.lock
```

### 3.3 部署
- push 到 `main` → GitHub Actions deploy.yml 自动构建
- 必须改 `deploy.yml` 的 Assemble 步骤加入 `ai-new-jobs-talk` slug（参照 CLAUDE.md 强制规则 1）
- 上线地址：`jiangren.com.au/curriculum/ai-new-jobs-talk/`

### 3.4 海报（可选，二期）
- 如果做营销海报，必须加入 `curriculum/posters.html` 的"Workshop 海报"section（参照 CLAUDE.md 强制规则 2）
- 1242×1660 竖版，所有字号 ≥24px（参照全局规则）

---

## 4. 时间表与下一步

### 4.1 阶段拆解（v0.1 计划 → 已完成）

| 阶段 | 内容 | 状态 |
|---|---|---|
| Phase 1 | PRD sign-off + 大纲细调 | ✅ 完成 |
| Phase 2 | Vite 工程脚手架 + slide 框架 | ✅ 完成 |
| Phase 3 | 逐张填实质内容 + 加 CH1 消失的岗位 + CH5 营销阶梯 | ✅ 完成（最终 63 页） |
| Phase 4 | 内部预览 + 部署 + 现场讲 | ✅ 完成（已上线 + 已讲，反馈好） |

### 4.2 下一步（v0.2 迭代方向）

1. **裁出独立 AI Marketing 讲座**：以 CH 5（Z01–Z07）为主体 + 现场 demo，导流 `ai-programming` + `ai-solo-founder-bootcamp`（收尾按 §1.6 话术，守 §2.2 红线）。
2. **CH 5 收尾页加两门课入口卡**：在 Z07 自检后补 2–3 页把两门课作为"下一台阶"接上（复用本 deck 的 `theme.ts`，不破坏原岗位 deck）。
3. **数据 refresh**：薪资/增长数据底部统一署"数据截至 2026-05"，半年后做 v3 刷新。
4. **小红书延展**：`xhs/` 已有 6 poster，可按 `talk-to-xhs-posters` skill 把 CH5 阶梯扩成系列稿。

### 4.3 风险

| 风险 | 应对 |
|---|---|
| 60 min 内讲 27 个岗位（23 + 4）信息量过载 | 已用"10 深讲 + 13 一句话带过 + 4 漏网之鱼"的密度控制；每页讲师 talking points 不超过 90 秒 |
| 漏网之鱼数据来源不在 ai-new-jobs 内部库 | Phase 3 拉取时**每个数据点附 URL**，slide 底部署源 |
| 数据 6 个月后过时 | slide 底部统一署"数据截至 2026-05"；后续可做 v2 |
| 听众期待"清单文"心态，深度章节注意力流失 | 每章节封面有"接下来 12 分钟我们会讲 X" 的预告，每章节末有转场页打破节奏 |

---

## 5. 附录：数据源映射

### 5.1 23 个岗位 ↔ 来源代码位置
- 全量数据：`jr-academy-web-zh/src/config/aiNewJobs/index.ts`（764 行）
- 详情页文案：`jr-academy-web-zh/src/config/aiNewJobs/job-details/` 子目录
- 英文翻译：`jr-academy-web-zh/src/config/aiNewJobs/jobDetails.en.ts`

### 5.2 78 个传统岗位 ↔ 来源代码位置
- 全量数据：`jr-academy-web-zh/src/config/careerImpactMap/careers.ts`（1043 行）
- 风险评级 + 转型建议：每个 Career 对象自带 `riskLevel` / `growthPotential` / `transitionRole` / `learningPath`

### 5.3 4 个漏网之鱼 — 待拉取的外部数据源（Phase 3 落地）

| 工种 | 拟用数据源 |
|---|---|
| Vibe Coder / AI-First Founder | Karpathy 推文（2025-02 vibe coding 定义）、Levelsio Twitter（公开 ARR 数据）、Indie Hackers 排行榜 |
| Robotics-AI Engineer (具身智能) | Levels.fyi（Figure AI / 1X / Tesla Optimus 团队薪资）、各公司 careers 页公开 JD |
| Synthetic Data Engineer | Scale AI / Gretel 招聘页、Epoch AI 数据短缺研究报告 |
| AI Sales Engineer | OpenAI / Anthropic / Cohere / Databricks careers 页公开 JD 范围 |

---

**END · PRD v0.2（已上线 · 持续迭代）**

> 本版同步实际上线的 63 页结构，补全 CH 5 营销 pipeline 阶梯规格（§1.6）+ 导流两门课定位（§0.0）。
> 下一步见 §4.2：裁出独立 AI Marketing 讲座 + CH5 收尾加两门课入口卡。
