# PRD · 网页版讲座《AI 催生了哪些新岗位？》

> 文档类型：产品需求文档 (PRD)
> 版本：v0.1（待 sign-off）
> 项目代号：`ai-new-jobs-talk`
> 数据来源：`jiangren.com.au/ai-new-jobs`（23 个新岗位）+ `jiangren.com.au/career-impact-map`（78 个传统岗位 AI 风险地图）

---

## 0. 项目背景与目标

### 0.1 业务背景
- **页面已存在但分散**：JR Academy 已有两个数据完整的产品页 — `/ai-new-jobs`（23 个 AI-native 岗位）和 `/career-impact-map`（78 个传统岗位 + AI 风险评级），但都是**让用户自己点**，缺一个**把数据串成故事**的对外触达载体
- **市场需求清晰**：2024-2026 年公众讨论从"AI 会取代谁"转向"AI 催生了什么"，但中文世界缺少基于真实薪资和雇主数据的盘点；社交媒体上充斥模版化"10 大未来职业"清单
- **JR 资产优势**：23 个岗位每个都已绑定 `jrCourses[]`（指向 production 上能买的 bootcamp / workshop），讲座可直接把听众导流到具体课程
- **讲座形态**：60 分钟公开讲座（混合背景听众：留学生 / 求职 active / 在职转型），中性科普为主，结尾收口到 JR 学习路径

### 0.2 学习目标（Learning Outcomes）

听众听完应该能：

1. **建立分类心智模型** — 知道 AI 新岗位分技术岗 / 治理管理岗 / 行业垂直岗三大类，每类典型代表是谁
2. **辨识真假新岗位** — 区分"真新岗位"（薪资数据、雇主公开 JD、增长曲线都支撑）和"营销噱头岗位"
3. **找到自己的入口** — 知道根据现有背景（技术 / 业务 / 非技术）能往哪条新岗位转型
4. **看见盘点的缺失** — 知道 ai-new-jobs 页面**没有覆盖**但 2025-2026 已经成型的 4 个新工种（Vibe Coder / 具身智能 / 合成数据 / AI Sales Engineer）
5. **拿到下一步行动** — 留下 1 个可立刻做的动作（去 `/career-impact-map` 自检 / 报名某个 bootcamp / 加群跟进）

### 0.3 项目交付物
- 一份 35-40 页网页版 slides（中文为主，公司名/职位名保英文）
- 部署到 `jiangren.com.au/curriculum/ai-new-jobs-talk/`
- 现场展示用 + 录播后做引流素材

---

## 1. 讲座内容大纲（60 分钟）

### 1.1 整体节奏

| 时间 | 章节 | 时长 | 页数 | 交付什么 |
|---|---|---|---|---|
| 0:00-0:08 | Chapter 0 · 开场 + 立论 | 8 min | 4 | 听众理解"为什么这个话题不是又一个清单文" |
| 0:08-0:20 | Chapter 1 · 技术岗（13 个） | 12 min | 9 | 4 个深讲 + 9 个一句话带过 |
| 0:20-0:32 | Chapter 2 · 治理管理岗（5 个） | 12 min | 7 | 3 个深讲 + 2 个一句话带过 |
| 0:32-0:44 | Chapter 3 · 行业垂直岗（5 个） | 12 min | 7 | 3 个深讲 + 2 个一句话带过 |
| 0:44-0:54 | Chapter 4 · 盘点的漏网之鱼（4 个） | 10 min | 7 | 4 个完整新工种，每个 2.5 min |
| 0:54-1:00 | Chapter 5 · 自检 + 转型路径 + Q&A | 6 min | 4 | 听众拿走一个行动 |

**页数预算**：~38 页（含封面、章节封面、转场页）

### 1.2 每页内容拆解（38 页 Slide-by-Slide Spec）

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

### 4.1 阶段拆解

| 阶段 | 内容 | 预计工时 |
|---|---|---|
| **当前** | PRD v0.1 → 用户 review | — |
| **Phase 1** | PRD sign-off + 大纲细调 | 30 min |
| **Phase 2** | 创建 Vite 工程脚手架 + 38 张 slide 框架（仅标题 + 占位） | 1-2 hr |
| **Phase 3** | 逐张填实质内容（含 4 个漏网之鱼的外部数据拉取） | 4-6 hr |
| **Phase 4** | 内部预览 + 文字校对 + 部署 | 1 hr |

### 4.2 待 sign-off 的关键点

请用户在 review 时明确以下：

1. **深讲岗位选择**：技术岗选了 AI Engineer / FDE / AI Agent Developer / AI Adoption Specialist；治理岗选了 CAIO / AI PM / AI Ethics Officer；行业岗选了 GEO / Healthcare AI Integrator / AI Compliance (Finance)。要不要换？
2. **漏网之鱼 4 个**：Vibe Coder / 具身智能 / 合成数据 / AI Sales Engineer — 顺序和详略要不要调？
3. **JR 课程绑定**：每个深讲岗位推荐绑哪些课程，要不要按"销售优先级"重排？
4. **现场互动**：60 min 时长够紧，要不要加举手投票 / 二维码即时填表？目前 PRD 没设计互动，纯讲。
5. **录播用途**：讲完之后这套 slides 是否需要做成可以独立看的"网页版盘点报告"（额外加叙事文字，不只是讲师 talking points）？

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

**END · PRD v0.1**

> 下一步：请用户 review 大纲 + Section 4.2 的 5 个 sign-off 点。确认后进入 Phase 2 工程脚手架。
