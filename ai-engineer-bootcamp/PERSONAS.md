# AI Engineer Bootcamp 目标用户画像 PERSONAS.md

> 课程：AI Engineer Bootcamp（12 周技术 + 12 周 P3 职业孵化，从 Context Engineering → RAG → Agent → Fine-Tuning → Eval 全栈）
> 由 `/target-user-persona-mapper init` 生成 · 2026-06-16
> 课程类型：Type 1 求职转型 bootcamp（客单价区间 ¥2980-9800 档，⚠️ 真实定价需 curl 销售页核实）

---

## 🚧🚧🚧 AI 推断版 · 待真实数据校准 🚧🚧🚧

**本文档 100% 是 AI 基于课程 outline.json + 真实就业市场常识推断出来的，没有一条来自真实用户访谈 / 客服记录 / 评论区。**

- Ground truth 覆盖率 ≈ **0.15**（只有"课程方定义的 targetAudience/suitable" 算半个 GT，其余全是 AI 推测）
- ❌ 用户真实访谈：0 次
- ❌ 真实咨询客服记录：0 条
- ❌ 小红书 / Boss / 公众号 评论 scrape：0 源
- ❌ 第 1-4 期真实学员名单 / 自我介绍：未看到

**这意味着：下游 FUNNEL_PLAN.md / PROMOTION_PLAN.md 可以基于本版搭骨架、排节奏，但任何「写进销售页 / 小红书 / 投放定向」的文案，必须等 §7 的 ground truth task 补完、跑 `/target-user-persona-mapper validate` 升到 0.5+ 才能信。**

每个 persona 字段里 AI 推断的部分都标了 `⚠️ AI 推断`。看到这个标记 = 当假设用，别当事实用。

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Slug | ai-engineer-bootcamp | — |
| 课程定位 | 12 周技术 + 12 周 P3 孵化，全栈 AI 工程（学会 → 就业闭环）| outline.json description |
| 目标人群（课程方定义）| 有 Python/API 基础的软件工程师 / 数据科学家 / ML 工程师 / DevOps / AI 创业者 | outline.json suitable |
| 语言 | 主中文站（en 字段存在，英文站 persona 暂不建，待确认是否双轨）| — |
| 客单价档 | ⚠️ 待 curl 销售页核实（Type 1 基线 ¥2980-9800）| COURSE_TYPE_PLAYBOOKS Type 1 |
| 当前 cohort | 第五期 RECRUITING（program.cohortStatus）| outline.json program |
| 课程结构 | 286 lessons / 96 主课 / 59 直播 / 68 InteractiveLab / 7 capstone / 12 周 P3 | outline.json |
| 导师背书 | Meta / Microsoft / Amazon（features 字段）| outline.json features ⚠️ 实名需核实 |
| **Ground truth 覆盖率** | **0.15** ❌ 不合格（< 0.5）— 本质 = AI 拍脑袋 | 见 §6 |
| Created | 2026-06-16（v0 AI 初稿）| — |
| Updated | 2026-06-16 | — |
| 下次 refresh | 第五期开课后 30 天，或补完 §7 task 后立即 validate | — |
| 状态 | 🚧 AI 推断版 — 待真实数据校准 | — |

**Ground truth 来源（当前仅 1 类）**：

| # | 来源 | weight | 内容 |
|---|------|-------|------|
| GT-01 | `outline.json` targetAudience / suitable / prerequisiteknowledge / highlights | 0.15 | 课程方定义的目标人群（非用户自述）|
| GT-AI | AI 推测（年龄 / 痛点 / 决策周期 / 平台 / 信任 / 黑名单 / 触发器 / 异议 / 渠道 ROI）| 0.85 ❌ 远超红线 0.3 | 全部待补 |

---

## 1. Persona 速查表

> ⚠️ 全表占比为 AI 推断，必须用第五期真实报名数据 refresh。

| | A · 想转 AI 方向的在职开发 | B · 想转码进 AI 的留学生/转行者 | C · 想系统补 LLM 工程的资深工程师 | D · 不会买的人（纯小白）| E · 不会买的人（白嫖型）|
|---|---|---|---|---|---|
| 一句话 | 写了 3-5 年 CRUD，怕被 AI 甩下车，想转 AI 工程岗 | 签证/求职倒计时，想用 AI 方向找到第一份 offer | 已会调 API，但 RAG/Agent/微调缺系统训练 | 完全不会 Python，被"AI 热"吸引进来 | 想白嫖免费教程、不想付费跟练的人 |
| 占比预估（⚠️ AI 推断）| ~40% | ~30% | ~20% | ~7%（误点）| ~3%（误点）|
| 核心驱动 | 不被淘汰 + 跳槽涨薪到 AI 岗 | 拿到第一个 AI 相关 offer | 补齐工程短板 + 内部转岗/接私活 | — | — |
| 客单价敏感度（⚠️ AI 推断）| 中（看 ROI，能为"对得上 JD"付费）| 中高（求职预算紧但愿赌一把）| 低（在职有收入，看内容深度）| — | — |
| 是否目标 | ✅ 核心 | ✅ 核心 | ✅ 核心 | ❌ 明确不是（该去 ai-programming）| ❌ 明确不是 |

---

## 2. Persona 详情

### Persona A · 想转 AI 方向的在职开发者（核心买家，~40% ⚠️ AI 推断）

- **画像**：26-35 岁，一二线城市或澳洲华人，3-5 年后端 / 全栈 / 数据开发经验，会 Python + REST API，日常写业务 CRUD，公司开始上 AI 但没自己的份。[来源: outline.json suitable "有 Python 和 API 开发基础的软件工程师" + ⚠️ 年龄/城市/经验年限为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，非真实用户原话，待 §7 访谈补）：
  1. ⚠️ AI 推断："公司招 AI 工程师开的薪资比我现在高 30%，但 JD 里 RAG、Agent、向量库我一个都没真做过"
  2. ⚠️ AI 推断："我能调 OpenAI API，但那只是 `client.chat.completions.create`，离'AI 工程师'差着一整套系统"
  3. ⚠️ AI 推断："看了一堆 RAG 教程都是 demo，跑通了也不知道生产环境怎么扛并发、怎么评估、怎么排错"
- **决策周期**：⚠️ AI 推断 2-4 周（在职、客单价高、要对比"这课内容是不是真比 YouTube 免费教程深"）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — 小红书（晚 8-10 点刷职业内容）/ 公众号（通勤 + 午休读技术长文）/ 脉脉（午休 12-1 点看薪资和跳槽）/ Bilibili（周末看技术 up 主）/ GitHub & 掘金（工作时间技术搜索）。**待真实访谈核实时段**
- **信任谁**：⚠️ AI 推断 — 脉脉认证的大厂 AI 工程师 > 课程讲师头衔；看「真有人从普通开发转成 AI 岗 + 晒了 JD/offer」的案例。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — "AI 头像 + 月入 10W 截图"、"包就业"、"零基础 7 天成为 AI 工程师"（他知道自己有基础，反而警惕速成话术）、纯营销号无代码的"AI 科普"。待补（**这个字段最重要也最缺真实数据**）
- **购买触发器**：⚠️ AI 推断 — 看到课程大纲里的技能点能一条条对上他正在投的 JD（RAG/Agent SDK/Eval）+ 有可放简历的真实项目 + 校友真的转岗成功。待补
- **异议 Top 3**（⚠️ "我不买因为..." 需真实销售口播）：
  1. ⚠️ AI 推断："这些我自己看文档+GitHub 也能学，凭什么花几千块"
  2. ⚠️ AI 推断："12 周 + 12 周孵化，我在职哪有这么多时间"
  3. ⚠️ AI 推断："学完真能转 AI 岗吗，还是只是又一个发证书的训练营"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 脉脉/公众号深度技术内容 > 小红书案例 > 讲座试听 > 海报。待补
- **虚构日记**（⚠️ 虚构示意，禁止当 ground truth 引用）：
  > "今天又看到组里招 AI 工程师的 JD，base 比我高一大截。要求里写 RAG pipeline、Agent orchestration、LLM evaluation——我点开公司 GitHub 看了眼，确实是我没碰过的东西。我能写 API，但他们要的是把 LLM 接成一个能扛生产的系统。晚上刷到一个讲座，说 12 周从'会调 API'到'能搭 Agent'。我犹豫的是：这玩意儿我自己啃文档行不行？可我已经'打算自学'半年了，连第一个 RAG 都没真跑通过。"

### Persona B · 想转码进 AI 的留学生 / 转行者（核心买家，~30% ⚠️ AI 推断）

- **画像**：23-30 岁，澳洲留学生 / 应届 / 国内想转行的人，有一定编程基础（CS 科班或自学过 Python），盯着「第一份能进门的 offer」，部分人有签证/存款倒计时压力。[来源: outline.json suitable 含"数据科学家 / ML 工程师 / AI 创业者" + ⚠️ 签证/留学/转行身份为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，待补）：
  1. ⚠️ AI 推断："投了几十份开发岗没回音，听说 AI 方向缺人、机会多，想换个赛道试试"
  2. ⚠️ AI 推断："我简历上全是课程作业和小项目，没有一个能拿出手对得上 AI JD 的真东西"
  3. ⚠️ AI 推断："签证/存款只够再撑几个月，需要尽快有能写进简历、能聊进面试的项目"
- **决策周期**：⚠️ AI 推断 1-3 周（求职压力推着走，但预算紧要反复算值不值）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — 小红书（晚 7-9 点刷求职/留学）/ 脉脉 & 一亩三分地（看 AU/海外 IT 求职）/ LinkedIn（白天看岗位 + 改简历）/ Bilibili（学技术）/ 微信群（留学生/求职社群）。**待核实**
- **信任谁**：⚠️ AI 推断 — 同样背景转 AI 成功的学长学姐 / 校友 offer 截图 / 真实学员 vlog。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — "包就业""保 offer""内推大厂"这类承诺（被中介坑过）、看起来像割留学生韭菜的训练营、纯销售号。待补
- **购买触发器**：⚠️ AI 推断 — 校友真实 offer + 12 周 P3 孵化「真实企业项目能写进简历」+ 有简历/面试辅导 + 同背景的人晒了进 AI 岗。待补
- **异议 Top 3**（⚠️ 待补）：
  1. ⚠️ AI 推断："学完没找到工作不就白花钱了"
  2. ⚠️ AI 推断："我基础不够硬，跟不上 12 周硬核内容怎么办"
  3. ⚠️ AI 推断："P3 孵化的项目是真企业项目还是攒出来的假项目"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 小红书校友案例/vlog > 讲座试听 > 脉脉/一亩三分地 > 公众号。待补
- **虚构日记**（⚠️ 虚构示意）：
  > "签证还有 8 个月，投的 dev 岗基本石沉大海。今天在小红书刷到一个跟我差不多背景的人，说在 AI Engineer 营做了个 RAG + Agent 的项目写进简历，拿到了一个 AI 相关的 offer。我盯着她贴的项目截图看了好久——那确实比我简历上的'课程大作业'像样多了。就是怕：万一我跟不上、万一学完还是找不到呢。可坐着等也不是办法。"

### Persona C · 想系统补 LLM 工程的资深工程师（核心买家，~20% ⚠️ AI 推断）

- **画像**：30-40 岁，5-10 年经验的高级/资深工程师或 ML/数据工程师，已经在工作里零散用过 LLM API，想系统补齐 RAG/Agent/微调/Eval 这套工程能力，目标是内部转岗 AI 团队、接私活、或为下一步跳槽备弹药。[来源: outline.json suitable "ML 工程师、DevOps 工程师" + level "中级进阶" + ⚠️ 资深/动机为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，待补）：
  1. ⚠️ AI 推断："我能拼 demo，但缺一套'生产级 AI 工程'的系统认知——评估、可观测、成本、微调该什么时候上"
  2. ⚠️ AI 推断："网上内容太碎，我没时间自己把 RAG/GraphRAG/Agent SDK/Fine-Tuning 串成体系"
  3. ⚠️ AI 推断："想内部转 AI 团队，但缺一个能证明'我系统做过'的完整项目"
- **决策周期**：⚠️ AI 推断 1-2 周（有收入、决策快，主要看内容深度够不够、别太水）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — 公众号深度技术文 / GitHub & 掘金 / Twitter/X（看 AI 工程动态）/ 脉脉 / Bilibili。小红书权重低。**待核实**
- **信任谁**：⚠️ AI 推断 — 技术深度本身（看大纲就能判断水不水）、讲师真实履历（Meta/MS/Amazon 实名）、开源项目 / 技术博客。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — 营销味重、大纲只有 buzzword 没有工程细节、"零基础也能学"（他要深的）、没有真实代码/Lab 的纯讲解。待补
- **购买触发器**：⚠️ AI 推断 — 大纲技术细节扎实（GraphRAG/混合检索/QLoRA/Eval Engineering 这些他认）+ 68 个 Lab 真能动手 + 讲师实名履历过硬。待补
- **异议 Top 3**（⚠️ 待补）：
  1. ⚠️ AI 推断："这些我自己都能学，课程能给我的增量是什么"
  2. ⚠️ AI 推断："12 周节奏对我这种有基础的会不会太慢、前几周全是 Python/Git 基础浪费时间"
  3. ⚠️ AI 推断："我要的是深度，别又是面向小白的 demo 课"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 公众号/技术长文深度内容 > GitHub/开源露出 > 讲座（看大纲 demo）> 小红书（低）。待补
- **虚构日记**（⚠️ 虚构示意）：
  > "用 LLM 拼过几个内部工具，能跑，但说实话我不知道怎么做对——评估指标、检索召回、什么时候该微调而不是 RAG，全靠感觉。我没时间自己把这套东西从一堆博客里拼出来。看了下这个营的大纲，GraphRAG、混合检索、QLoRA、Eval Engineering 都有，还有 68 个 Lab——如果不水的话，倒是能帮我把碎知识串成体系。前提是别浪费我前三周教 Git。"

---

## 3. 跨 persona 渠道平台汇总

> 🚨 **本节因 persona 平台数据全是 AI 推测，置信度极低，暂不可作为 PROMOTION_PLAN 渠道清单的权威来源。** 补完 §7 访谈后用 Mode E `export-channels` 重算。

基于推测的初步排序（⚠️ AI 推断）：

| 平台 | A 在职转 AI | B 留学/转行 | C 资深补课 | 加权（⚠️ 推测）| 备注 |
|------|---------|---------|--------|-----------|------|
| 小红书 | 高 | 高 | 低 | ⭐⭐⭐⭐ | A/B 主战场，技术求职号 + 校友 vlog |
| 公众号深度长文 | 高 | 中 | 高 | ⭐⭐⭐⭐ | A/C 看深度，技术拆解 + 薪资/JD 解读 |
| 脉脉 / 一亩三分地 | 高 | 高 | 中 | ⭐⭐⭐ | 求职/跳槽场景精准，但非自有渠道 |
| LinkedIn（英文）| 中 | 中 | 中 | ⭐⭐⭐ | 若做英文站则权重上升，AU 求职者池 |
| Bilibili / 掘金 / GitHub | 中 | 中 | 高 | ⭐⭐ | 技术信任建立，长尾 |

🚨 这张表是"AI 猜的平台" × "AI 猜的占比"，置信度极低。补完访谈前，PROMOTION_PLAN 只能用它搭骨架、不能照抄进投放。

---

## 4. 不会买的人（防资源错配）

### Persona D · 完全不会 Python 的纯小白
- **为什么不是目标**：本课 prerequisiteknowledge 明确要 Python + REST API + 云平台 + Git 基础，level = 中级进阶。纯小白进来前三周 Pre-work 就劝退，且学不到核心。[来源: outline.json prerequisiteknowledge + level]
- **怎么避免误伤**：小红书 / 海报文案**不要**用"零基础""人人都能学"——那是 `ai-programming`（入门大众课）的话。本课要明说"有编程基础"、"已经会调 API 的开发者"。把纯小白导流去 ai-programming。

### Persona E · 想白嫖 / 不想付费跟练的人
- **为什么不是目标**：本课价值在 7 个可写简历的真实项目 + 12 周 P3 孵化 + 答疑批改，白嫖型只想要免费 PDF，不会转化。[来源: ⚠️ AI 推断]
- **怎么避免误伤**：免费内容（公众号/小红书）做"建立信任的钩子"够了，别投 budget 追这群人。
- **其他不是目标的人**：⚠️ 待补（需销售口播确认，如"只想要证书不想做项目的人")

---

## 5. 历史决策日志

| 日期 | 事件 | 变化 |
|------|------|------|
| 2026-06-16 | init 首版 | AI 初稿，GT 覆盖率 ≈ 0.15，3 买家 persona（A 在职转 AI / B 留学转行 / C 资深补课）+ 2 不买（D 小白 / E 白嫖），**全部字段待真实数据校准** |

---

## 6. Ground truth 来源清单

| 标注 | 实际来源 | 强度 |
|------|---------|------|
| outline.json targetAudience / suitable / prerequisiteknowledge / highlights | `curriculum/ai-engineer-bootcamp/public/outline.json` | 中（课程方定义，非用户自述）|
| 课程结构 / cohort 状态 / 导师背书 | 同上 outline.json program/features | 中（导师实名待核实）|
| 其余所有用户行为字段（痛点/决策/平台/信任/黑名单/触发器/异议/渠道 ROI）| ⚠️ AI 推测 | 无 |

---

## 7. 🚨 必须补的 Ground Truth Task（不补则下游全部不可信）

> 配套工具：`INTERVIEW_SCRIPT.md`（团队访谈 30min SOP）+ `/persona-ground-truth-scraper`（5 数据源半自动采集）。产出落 `curriculum/ai-engineer-bootcamp/gt-sources/`。

| # | Task | 负责人 | 优先级 | 用什么 skill | 产出 |
|---|------|--------|--------|------------|------|
| 1 | 面访课程顾问 Amelia/Rain/Angela 30min — 咨询 AI Engineer 营的人到底是谁、问什么、为什么没买、最大异议是什么 | Beta 组织 | P0 | `target-user-persona-mapper/INTERVIEW_SCRIPT.md` 4-part | `gt-sources/interview-sales-{date}.md` |
| 2 | 翻第 1-4 期真实学员名单 + 自我介绍 + 背景（是在职转 AI / 留学转行 / 资深补课各占多少）| 课程运营 | P0 | 人工 + 拉课程主理人 30min | `gt-sources/historical-students.md` |
| 3 | 扒小红书/Boss/脉脉评论："转 AI 工程师 / AI Engineer 培训 / RAG Agent 求职"真实评论与异议 | 新媒体 Summer | P0 | `/persona-ground-truth-scraper init ai-engineer-bootcamp --source=xhs,wechat` | `gt-sources/scrape-{src}-{date}.{json,md}` |
| 4 | 扒 一亩三分地 / Reddit r/cscareerquestions / V2EX 看 AU+海外 AI 求职真实痛点（含英文站候选 persona）| 任何人 | P1 | `/persona-ground-truth-scraper init ai-engineer-bootcamp --source=reddit,v2ex` | `gt-sources/scrape-reddit-{date}.{json,md}` |
| 5 | curl jiangren.com.au 销售页核实真实客单价 + 多币种 + 三档（若有）→ 校验 persona 收入区间 | Aurora | P0 | 人工 curl / `/course-funnel-architect` | 回填 §0 Meta 客单价 |
| 6 | 补 A/B/C 的"不信什么"黑名单（最重要字段，全空）+ 异议 Top 3 真实原话 | 销售口播 + Summer 扒评论 | P0 | INTERVIEW（销售）+ scraper（评论）| 回填 §2 |
| 7 | 核实导师实名履历（Meta/MS/Amazon 是真名还是泛称）— Type 1 求职课 Faculty 实名是命脉 | Beta | P0 | 人工 | 回填 §0 + 给销售页用 |
| 8 | 确认是否做英文站 persona（outline 有 en 字段 + AU 留学生群体）| Beta | P1 | 决策 + 如做则 scraper Reddit/LinkedIn | 决定建不建 PERSONAS.en.md |

**补完 task 1+2+3+6 后立即跑 `/target-user-persona-mapper validate ai-engineer-bootcamp`** 看覆盖率是否过 0.5。过了 PROMOTION_PLAN / 销售页文案才能用。

**预计完成总耗时**：3-5 人/天（不含等会议排期）。2 周内把 GT 从 0.15 拉到 0.6+ 完全可行。
