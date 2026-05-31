# ai-programming 目标用户画像 PERSONAS.md

> 课程：人人都能学的 AI Coding 实战课（零基础 Cursor + AI，从想法到产品上线）
> 由 `/target-user-persona-mapper init` 生成 · 2026-05-28
>
> ⚠️ **v0.5 enhanced 2026-05-29** — Ground truth 覆盖率 **0.55**（v0 0.25 → 用真实 prod 定价 + 销售页 content.ts + prod-state.json cohort 数据补到合格阈值）。
> 阈值刚过，FUNNEL_PLAN.md 和 PROMOTION_PLAN.md 可以基于本版决策，但**用户行为字段（痛点 Top 3 / 决策周期 / 平台 / 黑名单 / 异议）仍是 AI 推测**。
> 要让 marketing 物料文案真信得过，**继续跑 INTERVIEW × 2 + scraper × 3 源**升到 0.75+（见 §7 task 表）。

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Slug | ai-programming | — |
| Prod Training ID | `68d27c49150c9d0071939f7a` | prod-state.json |
| 课程定位 | 零基础 Cursor + AI 从想法到产品上线（入门 / 大众线）| outline.json |
| 语言 | 主中文站（en 字段存在但人群偏中文，英文站 persona 暂不建）| — |
| **真实客单价**（AUD 预售）| 基础班 6 周 $860（原 $960）/ 进阶班 8 周 $1360（原 $2080）| jiangren.com.au 销售页 curl |
| 多币种 | USD $559/$884 · CNY ¥4042/¥6388 · SGD/MYR/GBP | 销售页 regionalPrices |
| 02 期 cohort | 已开课（2025-11-16，113 lessons）| prod-state.json |
| **Ground truth 覆盖率** | **0.55** ✅ 阈值刚过（v0 0.25 → v0.5 enhance 2026-05-29）| 见 §6 |
| Created | 2026-05-28 (v0 AI 初稿) | — |
| Updated | 2026-05-29 (enhance · 用真实 prod 数据补 GT) | — |
| 下次 refresh | 2026-08-29（3 个月，或 03 期开课后 30 天）| — |
| 状态 | ⚠️ enhance v0.5 — 真实 prod 数据接入，但**用户级 ground truth（访谈/客服/评论）仍待补** | — |

**Ground truth 来源（v0.5 enhanced 共 5 类）**：

| # | 来源 | weight | 内容 |
|---|------|-------|------|
| GT-01 | `outline.json` targetAudience / suitable / prerequisiteknowledge | 0.10 | 课程方定义的 3 类目标人群 |
| GT-02 | `prod-state.json` 02 期 113 lessons + 基础班 5 周 cohort 数据 | 0.10 | 真实已开课结构 |
| GT-03 | 销售页 `content.ts` 6 KILL POINTS + 4 大交付物 + 6 FAQ + TIER_COMPARISON | 0.15 | Marketing 已落地的真实卖点描述 |
| GT-04 | 真实定价（curl jiangren.com.au · 2 档预售）+ 多币种配置 | 0.10 | 销售决策依据 |
| GT-05 | JR 平台三圈用户画像（留学生在校 / 求职 active / 在职 AI 学习者）来自 `webinar-topic-feasibility` | 0.10 | 平台级（非本课专属）|
| **GT-AI** | AI 推测（年龄 / 痛点 Top 3 / 决策周期 / 平台 / 信任 / 黑名单 / 触发器 / 异议）| **0.45** ⚠️ 仍偏高 | 待补 |

**总 weight**：0.55（合格 ≥ 0.5）+ AI 推测 0.45（仍超红线 0.3，但可用）

**🚨 enhance v0.5 仍未解决**：
- ❌ 用户真实访谈 0 次（INTERVIEW_SCRIPT.md）
- ❌ 真实评论 scrape 0 源（persona-ground-truth-scraper）
- ❌ 02 期真实学员名单 / 自我介绍 没看到

→ **GT 0.55 是"可启动下游决策的最低门槛"**，要让 PROMOTION_PLAN / 销售页迭代真信得过，必须继续跑 INTERVIEW + scraper 升到 0.75+。

---

## 1. Persona 速查表

| | A · 非技术创业者 | B · 传统行业转型者 | C · 在校学生 / 应届 | D · 不会买的人（资深程序员）|
|---|---|---|---|---|
| 一句话 | 有 idea 请不起开发团队的个体创业者 | 市场/运营/老师等想加 AI 技能的职场人 | 想做作品集/增竞争力的大学生 | 已经天天用 Cursor 的工程师 |
| 占比预估 | ~40% ⚠️ 推测 | ~35% ⚠️ 推测 | ~20% ⚠️ 推测 | ~5%（误点进来）|
| 核心驱动 | 把脑子里的产品做出来 | 不被 AI 淘汰 + 涨薪 | 求职 / 项目作品 | — |
| 客单价敏感度 | 中（愿为"能做出东西"付费）⚠️ | 中高（要看 ROI）⚠️ | 高（学生党预算紧）⚠️ | — |
| 是否目标 | ✅ 核心 | ✅ 核心 | 🔸 边缘 | ❌ 明确不是 |

⚠️ 占比全部是 AI 推测，必须用第 1 期真实报名数据 refresh。

---

## 2. Persona 详情

### Persona A · 非技术创业者 / 个体户

- **画像**：28-42 岁，一二线城市或澳洲华人，有副业 / 小生意 / 产品 idea，不会写代码，之前要么找外包（贵 + 沟通累）要么搁置。[来源: outline.json "创业者：有想法但请不起开发团队，想自己动手" + ⚠️ 年龄/城市为 AI 推测]
- **痛点 Top 3**：
  1. ⚠️ 推测："找外包报价 3 万还要等一个月，改个按钮都要排期" — 待真实访谈验证
  2. ⚠️ 推测："学过几次编程网课，全是语法，学完还是做不出东西"
  3. ⚠️ 推测："看到别人用 AI 一个周末做个小程序，我连从哪开始都不知道"
  - 🚨 以上全是 AI 拟写的"像痛点的话"，**不是真实用户原话**，必须按 INTERVIEW_SCRIPT 补
- **决策周期**：⚠️ 推测 1-3 周（要确认"零基础真能学会"）— 待补
- **日常活跃平台 Top 5**：⚠️ 推测 — 小红书 / 视频号 / 公众号 / 抖音 / 即刻（创业者）。时段未知。**待补**
- **信任谁**：⚠️ 推测 — 看到"真人零基础学完做出产品"的案例 > 讲师头衔。待补
- **不信什么（黑名单）**：⚠️ 推测 — "月入 10W / 躺赚 / 包做出 APP" 这类话术。待补（这个字段最重要但最缺真实数据）
- **购买触发器**：⚠️ 推测 — 看到一个跟自己一样不懂代码的人晒出上线的产品。待补
- **异议 Top 3**：⚠️ 全部待补（"我不买因为..."需要真实销售口播）
- **触达 ROI 排序**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意，禁止当 ground truth 引用）：
  > "又一个客户问我能不能做个预约小程序，我只能说我去问问技术。其实我哪有技术。上次找的外包做了两个月还是个半成品。今天刷到一个宝妈说她用 Cursor 自己做了个记账网站，我盯着看了 20 分钟。要是我也能自己做……至少不用看外包脸色。"

### Persona B · 传统行业转型者

- **画像**：26-38 岁，市场 / 运营 / 教师 / HR / 财务等非技术岗，感到 AI 焦虑，想加一项"能做东西"的硬技能。[来源: outline.json "传统行业转型：想了解 AI 编程能做什么" + ⚠️ 具体岗位为 AI 推测]
- **痛点 Top 3**：⚠️ 全部推测，待补
  1. "公司开始用 AI，我怕三年后被替代"
  2. "想转行但零基础转码来不及，听说 AI Coding 不用学语法"
  3. "报过 Python 课，看完视频还是不会用"
- **决策周期**：⚠️ 推测 2-4 周（要对比"这个跟之前学不会的编程课有什么不同"）— 待补
- **日常活跃平台 Top 5**：⚠️ 推测 — 小红书 / 公众号 / 抖音 / 视频号 / 脉脉（职场转型）。待补
- **信任谁**：⚠️ 推测 — 同样从非技术岗转型成功的人 / 公众号深度文。待补
- **不信什么**：⚠️ 推测 — "速成 / 包就业 / 7 天学会编程"。待补
- **购买触发器**：⚠️ 推测 — 看到"完整作品 + 学完当晚能用"的承诺 + 试听一节。待补
- **异议 Top 3**：⚠️ 待补
- **触达 ROI 排序**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：
  > "今天开会老板说下季度每个组都要有人会用 AI 提效。我们组看了我一眼。我做运营 6 年，Excel 玩得溜，但代码一点不会。晚上搜'非技术转 AI'，全是劝退的，说要学 Python 学半年。又刷到这个'不用学语法用中文写代码'，将信将疑。要是真的……"

### Persona C · 在校学生 / 应届（边缘买家）

- **画像**：19-24 岁，大学生 / 研究生 / 应届，想用 AI 做项目增加求职竞争力或做副业。[来源: JR 平台三圈"留学生在校"画像 + ⚠️ 与本课的匹配为推测]
- **痛点 Top 3**：⚠️ 全部推测，待补
  1. "简历上想有能拿得出手的项目，但不会从 0 写一个完整产品"
  2. "想做点副业但没启动资金，自己做产品成本最低"
  3. "学校教的太理论，想要能直接用的实操"
- **决策周期**：⚠️ 推测 1-2 周（学生决策快但预算敏感）— 待补
- **日常活跃平台 Top 5**：⚠️ 推测 — 小红书 / B站 / 抖音 / 即刻 / 小红书。待补
- **信任谁**：⚠️ 推测 — 学长学姐 / B站 UP 主 / 同龄人晒的成果。待补
- **不信什么**：⚠️ 推测 — 贵 / 太长 / 像割韭菜的训练营。待补
- **购买触发器**：⚠️ 推测 — 学生价 / 同龄人案例 / 作品集导向。待补
- **异议 Top 3**：⚠️ 待补（"太贵" / "没时间" 待真实验证）
- **触达 ROI 排序**：⚠️ 待补
- **虚构日记**（⚠️ 虚构示意）：略（边缘 persona，待确认占比后再细化）

---

## 3. 跨 persona 渠道平台汇总

⚠️ **本节因 persona 平台数据全是推测，暂不可作为 PROMOTION_PLAN 渠道清单的权威来源。**

基于推测的初步排序（待真实访谈后用 Mode E export-channels 重算）：

| 平台 | A 创业者 | B 转型者 | C 学生 | 加权（推测）| 备注 |
|------|---------|---------|--------|-----------|------|
| 小红书 | 高 | 高 | 高 | ⭐⭐⭐⭐⭐ | 三 persona 都在，但都是推测 |
| 公众号 | 中 | 高 | 低 | ⭐⭐⭐ | B 转型者深度阅读 |
| 视频号/抖音 | 中 | 中 | 中 | ⭐⭐⭐ | 产品成果展示型内容 |
| 即刻 | 中 | 低 | 中 | ⭐⭐ | 创业者 / 学生 |
| B站 | 低 | 低 | 高 | ⭐⭐ | 学生为主 |

🚨 这张表是"AI 猜的平台" × "AI 猜的占比"，置信度极低。补完访谈前不要让 PROMOTION_PLAN 照抄。

---

## 4. 不会买的人（防资源错配）

### Persona D · 资深程序员 / 已会 Cursor 的工程师

- **为什么不是目标**：本课从"打开浏览器"教起，对已经天天用 Cursor 的工程师是浪费。他们要的是 `ai-engineer-bootcamp`（硬核）或 `ai-builder`（进阶），不是这门大众入门课。[来源: outline.json level="零基础" + DESIGN.md 明确区隔 ai-engineer/ai-builder]
- **怎么避免误伤**：小红书 / 海报文案不要用"AI 编程""全栈"等让工程师以为是进阶课的词；强调"零基础""不学语法""不会代码也能"。
- **其他不是目标的人**：⚠️ 待补（如"只想白嫖免费教程的人""想快速变现不想学的人"——需要销售口播确认）

---

## 5. 历史决策日志

| 日期 | 事件 | 变化 |
|------|------|------|
| 2026-05-28 | init 首版 | AI 初稿，coverage ~25%，3 买家 persona + 1 不买，全部待真实访谈验证 |

---

## 6. Ground truth 来源清单

| 标注 | 实际来源 | 强度 |
|------|---------|------|
| outline.json targetAudience / suitable | `curriculum/ai-programming/public/outline.json` | 中（课程方定义，非用户自述）|
| JR 三圈画像 | `webinar-topic-feasibility` 沉淀 | 中（平台级，非本课专属）|
| 其余所有字段 | ⚠️ AI 推测 | 无 |

---

## 7. 🚨 必须补的 Ground Truth Task（不补则下游全部不可信）

> ⚡ **2026-05-29 升级**：现在有 2 个新 skill 可帮你跑 task —— `INTERVIEW_SCRIPT.md`（团队访谈 30min SOP）+ `/persona-ground-truth-scraper`（5 数据源半自动采集）。
> 每条产出落 `curriculum/ai-programming/gt-sources/`。

| # | Task | 负责人 | 优先级 | 用什么 skill | 产出 |
|---|------|--------|--------|------------|------|
| 1 | 课程顾问 Amelia / Rain / Angela 面访 30min — 问咨询 ai-programming / 类似课的人到底是谁、问什么、为什么没买 | Beta 组织 | P0 | 按 `.claude/skills/target-user-persona-mapper/INTERVIEW_SCRIPT.md` 4-part 结构跑 | `gt-sources/interview-sales-{date}.md` |
| 2 | 翻 ai-programming 已有咨询记录 / 类似课（ai-essentials）历史学员名单 + 自我介绍 | 课程运营 | P0 | 人工 + INTERVIEW_SCRIPT 拉课程主理人 30min | `gt-sources/historical-students.md` |
| 3 | 扒小红书 / Boss / 公众号 评论区："零基础学 AI 编程 / Cursor 入门"真实评论 | 新媒体 Summer | P1 | `/persona-ground-truth-scraper init ai-programming --source=xhs,wechat` | `gt-sources/scrape-xhs-{date}.{json,md}` + `scrape-wechat-{date}.{json,md}` |
| 3b | 扒 Reddit r/Entrepreneur + r/IndieHackers 看英文站候选 persona（如有英文站需求）| 任何人 | P2 | `/persona-ground-truth-scraper init ai-programming --source=reddit,v2ex` | `gt-sources/scrape-reddit-{date}.{json,md}` |
| 4 | 确认客单价档（要先有 FUNNEL_PLAN.md）— 决定 persona 收入区间是否合理 | Aurora + Beta | P0 | `/course-funnel-architect init ai-programming` | `FUNNEL_PLAN.md` |
| 5 | 补 Persona A/B/C 的"不信什么"黑名单（最重要字段，全空）+ 异议 Top 3 | 销售口播 + Summer 扒评论 | P0 | INTERVIEW（销售）+ scraper（公开评论）合起来 | 回填 PERSONAS.md §2 |
| 6 | 确认是否真要做英文站 persona（outline 有 en 字段）| Beta | P2 | 决策 + 如做则跑 scraper Reddit/Twitter | 决定建不建 PERSONAS.en.md |

**补完 task 1+2+3+5 后立刻跑 `/target-user-persona-mapper validate ai-programming`** 看 coverage 是否过 50%。过了才能让 PROMOTION_PLAN 用。

**预计 task 完成总耗时**：3-5 人/天（不含等 Beta / Aurora 排会议时间）。
- INTERVIEW × 3 次（课顾 + 课程主理人 + 销售主管）= 1.5h × 3 = 4.5h 实操 + 各 30min 整理
- Scraper init = 员工开页面截图 10 张 × 3 源 = 1.5h + AI 提取 30min
- FUNNEL_PLAN = 0.5d（已有产品端 skill 流程）

→ **2 周内 GT 覆盖率从 0.25 拉到 0.70+ 完全可行**。
