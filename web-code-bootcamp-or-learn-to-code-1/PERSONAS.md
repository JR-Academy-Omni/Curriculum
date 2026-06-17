# AI Engineer 全栈项目班 目标用户画像 PERSONAS.md

> 课程：AI Engineer 全栈项目班 Code Bootcamp（slug: `web-code-bootcamp-or-learn-to-code-1`）
> 由 `/target-user-persona-mapper init` 生成 · 2026-06-17
> 课程类型：Type 1 求职转型 bootcamp（实付 $5360 AUD 早鸟 / 标价 $5900 AUD，16 周，已开 30 期）

---

## 🚧🚧🚧 AI 推断版 · 待真实数据校准（访谈 / 客服记录 / 评论补充后 refresh）🚧🚧🚧

**本文档目前 85% 是 AI 基于 outline.json + 真实就业市场常识推断出来的，没有一条用户行为字段来自真实学员访谈 / 客服记录 / 评论区。**

- Ground truth 覆盖率 ≈ **0.15**（只有"课程方定义的 suitable / highlights / 30 期历史 cohort 名"算半个 GT，其余全是 AI 推测）
- ❌ 用户真实访谈：0 次
- ❌ 真实咨询客服记录：0 条
- ❌ 小红书 / Boss / 一亩三分地 评论 scrape：0 源
- ✅ 唯一相对硬的线索：这门课已经跑了 **30 期**（11→30），有 .NET / Node.js / Java / 英文班多方向 → 真实学员名单是现成的金矿，但目前还没翻

**这意味着：下游 FUNNEL_PLAN.md / PROMOTION_PLAN.md 可以基于本版搭骨架、排节奏，但任何「写进销售页 / 小红书 / 投放定向」的文案，必须等 §7 ground truth task 补完、跑 `/target-user-persona-mapper validate` 升到 0.5+ 才能信。**

每个 persona 字段里 AI 推断的部分都逐条标了 `⚠️ AI 推断`。看到这个标记 = 当假设用，别当事实用。

---

## 🆚 跟 ai-engineer-bootcamp 的定位区分（必读，否则 persona 会画串）

这两门课**名字都带 AI Engineer，但卖的是两拨人，买的是两样东西**，做 marketing 千万别混：

| | **本课 · 全栈项目班** | ai-engineer-bootcamp |
|---|---|---|
| 核心交付 | **3 个能上线的全栈项目**（2 个人项目 + 1 个 Agile 团队商业项目）写进简历 | RAG / Agent / Fine-Tuning / Eval 这套 LLM 工程能力 |
| 学完是谁 | **能独立做完整全栈产品**的 Junior 开发 / 求职者 | 会把 LLM 接成生产系统的 AI 工程师 |
| 主线技能 | React + Redux + (.NET / Node.js / Spring Boot) + AWS + Agile 团队协作 + Git/CI/CD，AI（RAG/OpenAI/Azure）是其中 1 个模块 | 全程围绕 LLM 工程，全栈基础是地基不是主菜 |
| 买家的痛 | "我没有澳洲本地经验 / 没有能拿出手的项目作品集，投简历石沉大海" | "公司招 AI 工程师我对不上 JD 的 RAG/Agent" |
| 前置门槛 | HTML/CSS/JS/Git 基础（中级，不收纯小白）| Python + REST API 基础 |
| 一句话 slogan | **"亲手做出 3 个能上线的全栈项目，补齐你简历上最缺的那一块"** | "12 周从会调 API 到能搭 Agent" |

> **marketing 切角铁律**：本课所有物料突出的是 **「做出来的真实项目 demo + 上线作品 + 从 0 到部署的过程」+「16 周全真团队协作（BA/DevOps/UI 加入）」**，不是泛泛的 "AI 工程"。把本课包装成"学 AI 大模型"就是把学全栈作品集的人和学 LLM 工程的人混成一锅 → 两边都不买账。

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Slug | web-code-bootcamp-or-learn-to-code-1 | — |
| 课程定位 | 16 周全栈**项目**班，亲手做 3 个能上线的全栈项目（2 人项目 + 1 Agile 团队商业项目）补作品集 → 求职 | outline.json description / features |
| 目标人群（课程方定义）| IT/CS 在校生和毕业生 / IS 毕业生 / 国内有 IT 经验但无本地经验的新移民 / Job Changer | outline.json suitable |
| 前置门槛 | HTML CSS JS Programming Git（中级，**不收纯小白**）| outline.json prerequisiteknowledge |
| 主线技能栈 | React + Redux + .NET Core / Node.js / Spring Boot（多方向可选）+ AWS + Agile + Git/CI/CD + RAG/OpenAI/Azure AI 模块 | outline.json courseObjective / 大纲 lesson |
| 三大交付物 | Project 1（前端个人项目）+ Project 2（全栈个人项目）+ Project 3（Agile 团队商业项目，含 BA/DevOps/UI Designer 协作）| outline.json features |
| 求职服务 | 80+ 节 Career Coaching 自学课 + 12 个月简历内推 + 校友网络 | outline.json courseObjective |
| 语言 | 主中文站；**有英文班（29 期英文班）→ 大概率双轨**，英文站 persona 待决策后单独建 PERSONAS.en.md | outline.json programs |
| 客单价 | **$5360 AUD 早鸟 / $5900 AUD 标价**（30 期，多币种待 curl 销售页核实）| outline.json program.tuition/promoTuition |
| 当前 cohort | 30 期（2026-04-12 开课）+ 29 期英文班（2026-03-29）| outline.json programs |
| 课程成熟度 | **已开 30 期**（从 Web 全栈班 11 期演化到 AI Engineer 全栈项目班 30 期）— 真实学员样本极大 | outline.json programs（33 条）|
| 课程结构 | 485 lessons / 20 直播 / ~853 estimated hours / 2 phase（.NET 方向 + Node.js 方向）| outline.json |
| **Ground truth 覆盖率** | **0.15** ❌ 不合格（< 0.5）— 本质 = AI 拍脑袋 | 见 §6 |
| Created | 2026-06-17（v0 AI 初稿）| — |
| 下次 refresh | 补完 §7 task 后立即 validate；或 30/31 期开课后 30 天 | — |
| 状态 | 🚧 AI 推断版 — 待真实数据校准 | — |

**Ground truth 来源（当前仅 2 类，都偏弱）**：

| # | 来源 | weight | 内容 |
|---|------|-------|------|
| GT-01 | `outline.json` suitable / prerequisiteknowledge / highlights / features | 0.10 | 课程方定义的目标人群（非用户自述）|
| GT-02 | `outline.json` programs（33 条 cohort 历史，含方向/期数/开课日）| 0.05 | 证明课程成熟、学员样本大，但没看到具体学员是谁 |
| GT-AI | AI 推测（年龄 / 痛点 / 决策周期 / 平台 / 信任 / 黑名单 / 触发器 / 异议 / 渠道 ROI）| 0.85 ❌ 远超红线 0.3 | 全部待补 |

---

## 1. Persona 速查表

> ⚠️ 全表占比为 AI 推断，必须用 30 期真实报名 / 客服数据 refresh。

| | A · 缺本地经验的新移民开发 | B · 无项目作品集的应届/在校生 | C · 想转码的 Job Changer | D · 不会买（纯零基础小白）| E · 不会买（只想刷 AI 大模型）|
|---|---|---|---|---|---|
| 一句话 | 国内有 IT 经验、来澳后投简历被"无本地经验"卡死 | CS/IS 在读或刚毕业，简历只有课程作业、没拿得出手的项目 | 非科班但有点编程基础，想换赛道进开发岗 | HTML/JS 都没碰过，被"学编程"吸引进来 | 想学 RAG/Agent/微调 LLM，不想做全栈项目 |
| 占比预估（⚠️ AI 推断）| ~35% | ~35% | ~20% | ~6%（误点）| ~4%（错配）|
| 核心驱动 | 补"本地项目 + 团队协作经验"突破求职壁垒 | 简历上有 3 个能 demo 的真项目，超过同期毕业生 | 用一套能上线的作品集证明"我能做开发" | — | — |
| 客单价敏感度（⚠️ AI 推断）| 中（有积蓄/工作，看"能不能真帮我落地"）| 高（学生预算紧，$5360 是大钱，反复算值不值）| 中（看 ROI，愿为转行赌一把）| — | — |
| 是否目标 | ✅ 核心 | ✅ 核心 | ✅ 核心 | ❌（该去 ai-programming 零基础课）| ❌（该去 ai-engineer-bootcamp）|

---

## 2. Persona 详情

### Persona A · 缺本地经验的新移民开发者（核心买家，~35% ⚠️ AI 推断）

- **画像**：26-38 岁，国内有 1-5 年开发 / IT 相关工作经验的新移民（PR / 工签 / 配偶签），落地澳洲后发现投简历全被"no local experience"卡住。[来源: outline.json suitable "国内有IT工作经验, 无本地工作经验的新移民" + ⚠️ 年龄/签证状态为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，非真实用户原话，待 §7 访谈补）：
  1. ⚠️ AI 推断："我国内写了好几年代码，但澳洲 HR 一看简历没有本地经验直接划掉，连面试都进不去"
  2. ⚠️ AI 推断："我有技术，缺的是一段'用澳洲这套流程（Agile / Git flow / AWS 部署）做出来的、能给雇主看的项目'"
  3. ⚠️ AI 推断："我没在本地团队里跟 BA、DevOps、UI 协作过，面试一问团队经验我就露怯"
- **决策周期**：⚠️ AI 推断 3-6 周（客单价高、要对比 bootcamp、要看校友是不是真上岸、要协调上班/家庭时间）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — 小红书（晚 8-10 点刷澳洲求职/移民）/ 一亩三分地 & 微信群（澳洲华人 IT 求职社群）/ LinkedIn（白天看本地岗位 + 改简历）/ Boss 直聘/Seek（看 JD 要求）/ 公众号（通勤读技术 + 移民求职长文）。**待核实**
- **信任谁**：⚠️ AI 推断 — 同样新移民背景、跟着匠人上岸的校友（真实 offer + 公司名）> 课程讲师头衔；信"FLAG/澳洲大厂出来的老师"。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — "包就业""保 offer""内推大厂"（被中介坑过）、纯营销号晒月薪截图、看不到真实学员项目 demo 的课。待补（**这个字段最重要也最缺真实数据**）
- **购买触发器**：⚠️ AI 推断 — 看到校友真实 offer（带公司名）+ 项目是"能上线 + 团队协作"的真东西 + 12 个月简历内推真有人靠它进面 + 多方向（.NET/Node）能对上他投的 JD。待补
- **异议 Top 3**（⚠️ "我不买因为..." 需真实销售口播）：
  1. ⚠️ AI 推断："我已经会写代码了，花 5000 多块就为做几个项目，值吗"
  2. ⚠️ AI 推断："16 周我边上班/打工边学跟得下来吗"
  3. ⚠️ AI 推断："内推是真的能进面，还是只是发个简历就没下文"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 一亩三分地/华人求职群校友案例 > 小红书上岸 vlog > 公众号深度长文 > 讲座试听 > 海报。待补
- **虚构日记**（⚠️ 虚构示意，禁止当 ground truth 引用）：
  > "来澳半年，投了快 80 份开发岗，回的全是 'we're looking for candidates with local experience'。我国内明明做过项目啊，可这边不认。今天在一亩三分地刷到一个跟我一样国内来的，说在匠人做了个 Agile 团队项目写进简历——有 BA、有 DevOps，跟真公司一样——后来进了面，拿到 offer。我盯着他贴的项目截图看了半天，那确实是我简历上最缺的'本地团队 + 上线项目'那一块。就是怕：16 周边打工边学，我撑得住吗。"

### Persona B · 无项目作品集的应届/在校生（核心买家，~35% ⚠️ AI 推断）

- **画像**：21-26 岁，澳洲 CS / IS / IT 在读或刚毕业的学生（含中国留学生），课上学了语法但简历上只有"课程大作业"，没有一个能拿出手 demo 给雇主的真项目。[来源: outline.json suitable "IT、CS 专业在校生和毕业生 / IS毕业生" + ⚠️ 留学生身份/年龄为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，待补）：
  1. ⚠️ AI 推断："我会写 React，但简历项目栏空空的，HR 一看没有真做过的东西就过了"
  2. ⚠️ AI 推断："学校教的是理论，没人带我从 0 把一个全栈项目部署上线，更别说团队协作"
  3. ⚠️ AI 推断："同届毕业的同学已经有作品集了，我再不动手就彻底落后"
- **决策周期**：⚠️ AI 推断 2-5 周（求职/毕业压力推着走，但学生预算紧，$5360 要反复算、要问父母 / 凑钱）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — 小红书（晚 7-9 点刷求职/留学/作品集）/ 微信留学生群 / B站（学技术 + 看项目教程）/ 一亩三分地（看 grad 岗）/ LinkedIn（建 profile + 投 grad program）。**待核实**
- **信任谁**：⚠️ AI 推断 — 同校 / 同背景上岸的学长学姐 + offer 截图 + 真实学员项目作品 vlog；信"看得见摸得着的项目 demo"。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — "包就业""保 grad offer"、像割留学生韭菜的训练营、纯销售号、看不到真项目只有 PPT 的课。待补
- **购买触发器**：⚠️ AI 推断 — 校友真实 grad offer + 3 个项目是"能 demo + 能写进简历 + 能在面试讲清楚"的 + 有简历/面试辅导 + 同校同学晒了进开发岗。待补
- **异议 Top 3**（⚠️ 待补）：
  1. ⚠️ AI 推断："学完没找到工作不就白花这么多钱了"
  2. ⚠️ AI 推断："我学校都教过 React 了，这课能多给我什么"
  3. ⚠️ AI 推断："Project 3 的'商业项目'是真企业项目还是攒出来的假项目"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 小红书校友作品/上岸 vlog > 讲座试听（现场做项目）> 一亩三分地/留学生群 > 公众号 > 海报。待补
- **虚构日记**（⚠️ 虚构示意）：
  > "毕业 4 个月，grad program 投了一圈基本石沉大海。今天改简历，盯着 Projects 那一栏发呆——除了几个课程作业，我真没什么能写的。室友面 grad 岗被问'讲讲你做过的项目'当场卡壳。小红书刷到一个学姐，说在匠人做了 3 个项目，其中一个是有 BA、DevOps、UI 一起的团队项目，面试时她就讲这个，拿了 offer。那种'真做过、能讲清楚'的项目，正是我简历上最虚的地方。就是 5000 多块对学生不是小数，得想清楚。"

### Persona C · 想转码的 Job Changer（核心买家，~20% ⚠️ AI 推断）

- **画像**：27-38 岁，非 CS 科班但自学过点编程（HTML/JS/Git 摸过）的转行者（原本做测试 / 数据 / 运维 / 其它行业），想真正转进开发岗，需要一套能证明"我能做开发"的作品集。[来源: outline.json suitable "Job Changer" + prerequisiteknowledge "HTML CSS JS Programming Git" + ⚠️ 原职业/年龄为 AI 推断]
- **痛点 Top 3**（⚠️ 全部 AI 拟写，待补）：
  1. ⚠️ AI 推断："我自学过一些前端，但东一榔头西一棒子，没系统做过一个完整的全栈项目"
  2. ⚠️ AI 推断："想转开发岗，但我没有任何能证明实力的作品，面试官凭什么信我"
  3. ⚠️ AI 推断："我需要有人带我把整条链路（前端→后端→数据库→部署）从头跑通一遍"
- **决策周期**：⚠️ AI 推断 4-8 周（转行决策重、要确认自己能学下来、要算清职业回报、客单价高）— 待补
- **日常活跃平台 Top 5 + 时段**：⚠️ AI 推断 — B站（系统学技术）/ 小红书（晚刷转码/转行）/ 公众号（深度读"转行做开发"经验）/ 掘金/CSDN（技术搜索）/ 知乎（看"转码值不值"讨论）。**待核实**
- **信任谁**：⚠️ AI 推断 — 同样非科班转码成功的人 + 完整学习路径展示 + 系统化的大纲（看得出不是东拼西凑）。待补
- **不信什么（黑名单）**：⚠️ AI 推断 — "零基础速成""7 天转码进大厂"（他知道转行难，反而警惕速成）、纯卖焦虑的转码营、大纲只有 buzzword 没有完整项目链路的。待补
- **购买触发器**：⚠️ AI 推断 — 大纲是"从前端到部署完整链路 + 3 个递进项目" + 多方向可选（能选个对口的就业方向）+ 非科班转码校友真实案例 + 12 个月内推托底。待补
- **异议 Top 3**（⚠️ 待补）：
  1. ⚠️ AI 推断："我非科班、年龄也不小了，转码现在还来得及吗"
  2. ⚠️ AI 推断："16 周真能让我从'摸过点前端'到'能找开发工作'吗"
  3. ⚠️ AI 推断："学完技术栈会不会过时 / 跟市场要的对不上"
- **触达 ROI 排序（个人）**：⚠️ AI 推断 — 公众号/B站系统化深度内容 > 小红书转码案例 > 知乎讨论 > 讲座 > 海报。待补
- **虚构日记**（⚠️ 虚构示意）：
  > "做了 5 年测试，越来越觉得天花板就在那。一直想转开发，自学过 freeCodeCamp、跟着教程做过几个小 demo，但都是碎的，从没自己端到端做完一个真项目、更没部署上线过。面试时人家要看作品，我拿不出。今天看了匠人的大纲——前端、后端、数据库、AWS 部署、还有团队项目，是一条完整的线，不是零散知识点。多方向还能选个对口的。就是 5000 多 + 16 周对我是不小的投入，转行这一步得想清楚再迈。"

---

## 3. 跨 persona 渠道平台汇总

> 🚨 **本节因 persona 平台数据全是 AI 推测，置信度极低，暂不可作为 PROMOTION_PLAN 渠道清单的权威来源。** 补完 §7 后用 Mode E `export-channels` 重算。

基于推测的初步排序（⚠️ AI 推断）：

| 平台 | A 新移民 | B 应届/在校 | C 转行 | 加权（⚠️ 推测）| 备注 |
|------|---------|-----------|--------|-----------|------|
| 小红书 | 高 | 高 | 中 | ⭐⭐⭐⭐⭐ | 三 persona 主战场，校友作品 vlog + 上岸案例 |
| 一亩三分地 / 华人求职群 | 高 | 中 | 低 | ⭐⭐⭐⭐ | A 精准（澳洲华人 IT 求职）+ B 看 grad 岗 |
| 公众号深度长文 | 高 | 中 | 高 | ⭐⭐⭐⭐ | A/C 看深度，项目复盘 + 本地求职 + 校友故事 |
| B站 | 低 | 高 | 高 | ⭐⭐⭐ | B/C 系统学技术 + 看项目从 0 到部署过程 |
| LinkedIn（英文）| 中 | 中 | 低 | ⭐⭐⭐ | **若做英文班 persona 则权重大涨**，AU 本地求职者 + 雇主 referral |
| 讲座（现场做项目 demo）| 中 | 高 | 中 | ⭐⭐⭐ | "现场从 0 做出一个能跑的项目"试听爆点 |

🚨 这张表是"AI 猜的平台" × "AI 猜的占比"，置信度极低。补完 ground truth 前，PROMOTION_PLAN 只能用它搭骨架、不能照抄进投放。

---

## 4. 不会买的人（防资源错配）

### Persona D · 完全零基础的纯小白
- **为什么不是目标**：本课 prerequisiteknowledge 明确要 HTML/CSS/JS/Programming/Git 基础，level = 中级。纯小白进来第一周 HTML&CSS 就跟不上，且核心是"做项目"不是"教你打字写第一行代码"。[来源: outline.json prerequisiteknowledge + level]
- **怎么避免误伤**：小红书 / 海报文案**不要**用"零基础""人人都能学"——那是 `ai-programming`（入门大众课）的话。本课要明说"有编程基础""想做出能上线的全栈项目作品集"。把纯小白导流去 ai-programming。

### Persona E · 只想刷 AI 大模型 / RAG / Agent 的人
- **为什么不是目标**：本课主线是**全栈项目作品集**，AI（RAG/OpenAI/Azure）只是其中一个模块。想系统学 LLM 工程（RAG/GraphRAG/Agent/Fine-Tuning/Eval）的人会觉得 AI 部分不够深。[来源: outline.json courseObjective + 大纲对比]
- **怎么避免误伤**：marketing 物料**不要**把本课包装成"学 AI 大模型 / 成为 AI 工程师"——会吸引来错配人群，他们买完发现是全栈项目课会失望、退款、给差评。把这类人导流去 `ai-engineer-bootcamp`。
- **其他不是目标的人**：⚠️ 待补（需销售口播确认，如"只想要证书不想做项目的人""只想白嫖免费教程的人"）

---

## 5. 历史决策日志

| 日期 | 事件 | 变化 |
|------|------|------|
| 2026-06-17 | init 首版 | AI 初稿，GT 覆盖率 ≈ 0.15，3 买家 persona（A 新移民 / B 应届在校 / C 转行）+ 2 不买（D 小白 / E 只想刷 LLM），**全部字段待真实数据校准**。明确跟 ai-engineer-bootcamp 区分：本课 = 全栈**项目**作品集，ai-engineer = LLM 工程 |

---

## 6. Ground truth 来源清单

| 标注 | 实际来源 | 强度 |
|------|---------|------|
| outline.json suitable / prerequisiteknowledge / highlights / features | `curriculum/web-code-bootcamp-or-learn-to-code-1/public/outline.json` | 中（课程方定义，非用户自述）|
| outline.json programs（33 期 cohort 历史）| 同上 | 中（证明成熟度，未指向具体学员）|
| 其余所有用户行为字段（痛点/决策/平台/信任/黑名单/触发器/异议/渠道 ROI）| ⚠️ AI 推测 | 无 |

---

## 7. 🚨 必须补的 Ground Truth Task（不补则下游全部不可信）

> 配套工具：`target-user-persona-mapper/INTERVIEW_SCRIPT.md`（团队访谈 30min SOP）+ `/persona-ground-truth-scraper`（5 数据源半自动采集）。产出落 `curriculum/web-code-bootcamp-or-learn-to-code-1/gt-sources/`。
>
> 💡 **本课最大优势：30 期真实学员是现成金矿。** 别先去 scrape 陌生评论，先翻自己 30 期的学员名单 + 客服记录，那是最强 GT。

| # | Task | 负责人 | 优先级 | 用什么 skill | 产出 |
|---|------|--------|--------|------------|------|
| 1 | 翻 26-30 期真实学员名单 + 自我介绍 + 背景（新移民 / 应届在校 / 转行 各占多少，国内经验多少年）| 课程运营 + Beta | **P0**（金矿，优先于一切）| 人工 + 拉课程主理人 30min | `gt-sources/historical-students.md` |
| 2 | 面访课程顾问 Amelia/Rain/Angela 30min — 咨询全栈项目班的人到底是谁、问什么、为什么没买、最大异议、最常拿来跟哪门课比（ai-engineer? 别家 bootcamp?）| Beta 组织 | P0 | `INTERVIEW_SCRIPT.md` 4-part | `gt-sources/interview-sales-{date}.md` |
| 3 | 扒一亩三分地 / 小红书 / 华人求职群："澳洲无本地经验 / IT 转码 / 全栈 bootcamp / 求职作品集"真实评论与异议 | 新媒体 Summer | P0 | `/persona-ground-truth-scraper init web-code-bootcamp-or-learn-to-code-1 --source=xhs,reddit` | `gt-sources/scrape-{src}-{date}.{json,md}` |
| 4 | 收集 26-30 期校友真实 offer（公司名 + 岗位，脱敏 base/super）做 OFFER WALL — Type 1 求职课命脉 | 课程运营 + Beta | P0 | 人工 + STUDENT_OUTPUT_COLLECTION SOP | `gt-sources/alumni-offers.md` |
| 5 | 补 A/B/C 的"不信什么"黑名单（最重要字段，全空）+ 异议 Top 3 真实原话 | 销售口播 + Summer 扒评论 | P0 | INTERVIEW（销售）+ scraper（评论）| 回填 §2 |
| 6 | curl jiangren.com.au 销售页核实真实客单价 + 多币种 + 是否有 .NET/Node 多方向差异定价 → 校验 persona 收入区间 | Aurora | P0 | 人工 curl | 回填 §0 Meta 客单价 |
| 7 | 核实 Faculty 实名履历（"FLAG / 澳洲大厂资深专家"是真名还是泛称）— Type 1 求职课 Faculty 实名是命脉 | Beta | P0 | 人工 | 回填 §0 + 给销售页用 |
| 8 | 确认是否做英文班 persona（已有 29 期英文班 + AU 本地求职者群体）| Beta | P1 | 决策 + 如做则 scraper Reddit/LinkedIn | 决定建不建 PERSONAS.en.md |

**补完 task 1+2+3+5 后立即跑 `/target-user-persona-mapper validate web-code-bootcamp-or-learn-to-code-1`** 看覆盖率是否过 0.5。过了 PROMOTION_PLAN / 销售页文案才能用。

**预计完成总耗时**：3-5 人/天（task 1 翻历史学员名单是最快见效的，半天就能把 GT 从 0.15 拉到 0.4+）。
