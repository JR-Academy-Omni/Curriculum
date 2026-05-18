# Claude Code 大师课 ｜ 宣传规划

> 单一文档：本场 workshop 对外宣传的全部物料源头。Notion 详情页 / 公众号文章 / 小红书 / 海报 / EDM / 报名页都从这里出。
> **填空字段**统一标 `{{TBD}}`，用户拍板后一次性填全，不要在多处重复维护。

---

## 一、活动基本信息

> 本场提供**两种形式**：3 小时线上速通版 vs 全天线下小班版。下面表格并列。

| 字段 | 🖥 线上 · 速通版 | 🏛 线下 · 全天小班版 |
|------|---------------|---------------|
| 主标题 | **Claude Code 大师课** | 同左 |
| 副标题 | 3 小时跟着敲：从开发前准备（PRD / design.md）+ 常用命令，到 Agents 管理、最佳实践、Agent Development Lifecycle | 全天小班，把自己 repo 改造成"AI 可工程化协作"的样子 |
| 时长 | **180 分钟**（含 10min Q&A） | **全天 10:00 – 16:00**（含 60min 午餐，≈ 5h 实操） |
| 形式 | 匠人课堂 Zoom 直播 + 屏幕共享 + 实操 | 现场小班，老师 + 助教 1v1 救场 |
| 名额 | ≤ 50 人 | **小班 ~15 人**（保证 1v1 答疑密度） |
| 地点 | **匠人课堂（Zoom）** — 链接报名后发 | **墨尔本场 `{{TBD - 具体场地}}` / 悉尼场 `{{TBD}}`** |
| 时间 | `{{TBD - 日期 + 时段}}` | `{{TBD - 周末日期}}` 10:00 – 16:00（含 1h 午餐） |
| 讲师 | `{{TBD - 讲师名 + 一句话身份}}` | 同左（线下 + 1 名助教） |
| 价格 | **A$99 早鸟 / A$199 全价** | **A$299 一价**（含午餐 + 茶歇 `{{待确认}}`） |
| 早鸟截止 | `{{TBD - 建议开课前 7 天}}` | — |
| 报名链接 | `{{TBD}}` | `{{TBD}}` |

---

## 二、给谁看（受众画像 + 切入痛点）

### 主受众 A ｜ IT 在职工程师

- **现状**：每天在用 Cursor / Copilot / Windsurf，AI 已经能补全方法，但**任务级**的工作（写一个新模块、迁移一个 service、review 一个 PR）还是手工拆步。
- **痛点**：感觉 AI 工具就是"高级补全"，没把它当生产力杠杆用。
- **来这里能得到**：把 AI 从"行级补全"升级到"任务编排"——一个指令同时跑 3 个 subagent、把团队规范沉到 CLAUDE.md 让 AI 自动遵守、用 MCP 让 Claude 自己开浏览器测自己写的页面。

### 主受众 B ｜ 在校 / 转码学习者

- **现状**：写过几个 demo，会基本命令行 + git，但项目永远停在"能跑"阶段，没有工程感。
- **痛点**：作品集打开 README 就一段"This is a Next.js project"，面试官一看就是教程项目。
- **来这里能得到**：用 Claude Code 把作品集从"demo 项目"做出"工程项目"的样子——有架构文档、有 review 流程、有自定义 agent 自动跑检查。

> **不适合**：从没写过代码的纯小白（前 30min 拉齐起点段也要求会基础 git + 命令行）。

---

## 三、核心卖点（4 个，按转化漏斗排序）

### 卖点 1 ｜ 不是介绍功能，是改你自己的项目

90% 的 AI 工具教程是"这里有个按钮，点一下能干什么"。本场 workshop 全程让你打开**自己的 repo**，跟着改：写自己的 CLAUDE.md、配自己的 subagent、生成自己的 cheat sheet。走出会场你的 repo 就比来之前更工程化。

### 卖点 2 ｜ 覆盖 Agent 开发全生命周期，不是单点技巧

从「开发前准备（PRD / design.md）+ 常用命令」起步，到「Agents 管理（Fleet View）→ 最佳实践（CLAUDE.md / Skills / Hooks）→ ADLC（Plan → Code → Review → Ship）」一路打通。不是教你单点命令，是给你一套**从规划到上线**能用的 agent 工作流。

### 卖点 3 ｜ 混合班设计，零基础 / 老司机都不浪费

前 50 分钟：写好 PRD + design.md，再用常用命令把项目跑起来，零基础学员保底跟上。  
后续：Fleet View 多 agent 编排 / Hooks 强制规则 / ADLC 跑通真实 PR，在职工程师拿到能直接用的技巧。  
中间用同一个 demo repo 串起来，跟不上的随时 `git checkout part-3-start` 跳过。

### 卖点 4 ｜ 带走 6 件可复用资产

- 一份 **PRD 模板**（AI 能直接读懂、拆 task、生成代码的写法）
- 一份 **design.md 模板**（架构 / 模块拆分 / 接口约定，让 AI 不乱写）
- 一份**单页命令 cheat sheet**（含 `/init` `/plan` `/resume` `/clear` `/compact` 等高频命令 + context window 原理图）
- 一份自己写的 **CLAUDE.md**（项目宪法）
- 一个自定义 **subagent** 配置 + 一个 **slash command** + 一个 **pre-commit hook**
- 一份 **ADLC 工作流模板**（Plan → Code → Review → Ship 的 prompt 串）

加上持续答疑社群，会后碰到坑能继续问。

---

## 四、你将带走什么（outcome-based，给报名页用）

> **写法原则**：只承诺过程 / 作品 / 技能，**不承诺**金钱 / 涨薪 / 接单 / 副业（CLAUDE.md 红线）。

会后你能做到：

1. 在动手写代码前，先写出一份 AI 能直接读懂的 **PRD + design.md**（含架构 / 接口 / 拆分模板）
2. 熟练使用 Claude Code 常用命令（`/init` `/plan` `/resume` `/clear` `/compact`），并解释 context window / Plan Mode 的工作原理
3. 在 Fleet view / Agents view 里同时管理 3+ 个 subagent，并行跑研究 / 实现 / review
4. 写一份 CLAUDE.md + 一个 `/slash` 命令 + 一个 hook，把团队规范沉到工具层（AI 自动遵守，新人不用再口头培训）
5. 跑通一次完整 **Agent Development Lifecycle**：Plan（PRD / design.md）→ Code（subagent 并行）→ Review（自动跑检查）→ Ship（提 PR）

---

## 五、课程大纲

> **优先级**：先把 5.1 线上 3h 版定稿；5.2 线下全天版会镜像 5.1 的内容骨架并加深实操，**等 5.1 锁定后再展开**。

### 5.1 🖥 线上 · 180min · 五段式（含 10min Q&A）

> **主线流程**：**开发前准备（PRD + design.md）+ 常用命令 → Agents 管理 → 最佳实践 → ADLC 实战 → Q&A**。  
> 顺序刻意——先教学员"动 Claude Code 前怎么准备"，而不是上来教按钮。每段都有跟着敲的 demo，不是纯讲。

| 时段 | 主题 | 你会动手做 |
|------|------|----------|
| 0–10min | **开场 + 环境检查** | 跑 `claude --version` 确认装好；助教在匠人课堂 breakout room 1v1 救装机 |
| 10–60min | **Part 1 · 开发前准备 + 常用命令**（50min）<br/>① 准备工作：怎么写 AI 能读懂的 **PRD**（10min）<br/>② 准备工作：写 **design.md**（架构 / 模块拆分 / 接口约定，10min）<br/>③ 常用命令：`/init` `/plan` `/resume` `/clear` `/compact`（20min）<br/>④ 工作原理：context window + Plan Mode + 任务循环（10min） | 在自己 repo 写一份 mini-PRD + design.md，用 `/init` `/plan` 让 Claude 读懂全局并出第一个 plan |
| 60–100min | **Part 2 · Agents 管理（Fleet View / Agents View）**（40min）<br/>主 agent vs subagent 任务分配 · Fleet view UI 演示 · 一次发 3 个 subagent 并行（research / implementation / review） | 在自己 repo 同时跑 3 个 subagent，对比串行 / 并行的速度 |
| 100–135min | **Part 3 · 最佳实践**（35min）<br/>CLAUDE.md = 项目宪法 · Skills = 团队 SOP · Slash Commands · Hooks 强制规则 · 推荐 MCP（context7 / playwright） | 给自己 repo 写 5 条 CLAUDE.md 规则 + 一个 `/<命令>` + 一个 pre-commit hook |
| 135–170min | **Part 4 · Agent Development Lifecycle 实战**（35min）<br/>Plan（PRD / design.md）→ Code（subagent 并行）→ Review（自动跑检查）→ Ship（提 PR）全循环 | 跟着老师在 demo repo 跑通一次完整 ADLC，提一个真实 PR |
| 170–180min | **收尾 + Q&A** | 拿 cheat sheet PDF + PRD 模板 + design.md 模板 + ADLC prompts + 加群 |

### 5.2 🏛 线下 · 全天 6h 小班版（10:00 – 16:00，含 60min 午餐 ≈ 5h 实操）

> ⚠️ **草稿，待 5.1 锁定后镜像更新**。骨架沿用 5.1 的四段式（开发准备+命令 / Agents 管理 / 最佳实践 / ADLC），每段拉长到 60–90min，加上现场 1v1 救场 + 真实 PR 出货。下表为占位。

| 时段 | 时长 | 主题 | 比线上多出的"深度" |
|------|------|------|------------------|
| 10:00–10:30 | 30min | 签到 + 装机救援 + 破冰 | 老师 + 助教挨个看每个学员的本机环境，没装好的不让进 Part 1 |
| 10:30–12:00 | 90min | **Part 1**：开发前准备（PRD + design.md）+ 常用命令 | 现场写出能 commit 的 PRD + design.md，互评 + 用命令跑通 |
| 12:00–13:00 | 60min | 🍱 午餐 + 自由敲 | 助教在场答疑 |
| 13:00–14:00 | 60min | **Part 2**：Agents 管理（Fleet View） | 一次跑 3 个 subagent，出真实 PR |
| 14:00–15:00 | 60min | **Part 3**：最佳实践（CLAUDE.md / Skills / Hooks / MCP） | 写**团队级**规范 + `/<命令>` + hook 并提交 |
| 15:00–15:50 | 50min | **Part 4**：ADLC 完整跑通 | 在自己 repo 上做一次 Plan → Code → Review → Ship 全循环 |
| 15:50–16:00 | 10min | 收尾 + 1v1 答疑预约 + 加群 | 留电话/微信继续答疑 |

---

## 六、前置要求（报名页明示，避免现场炸场）

学员**报名前**自行准备好：

- 自带笔记本（Mac / Windows / Linux 均可）
- 已安装 Node 20+ 和 Claude Code（`npm i -g @anthropic-ai/claude-code`）
- 有可用的 Anthropic API key 或 Claude Pro/Max 订阅
- 至少有 1 个自己的 GitHub repo（任意语言任意大小，workshop 中要在上面动手）
- 会基本的 git 命令（clone / branch / commit）和命令行操作

> 装环境遇到问题：报名后 3 天内进答疑群，会有助教协助排查；workshop 当天不留装环境的时间。

---

## 七、讲师介绍

`{{TBD - 讲师名}}`

`{{TBD - 一句话身份：现任 / 做过什么 / 为什么由 ta 讲}}`

`{{TBD - 跟 Claude Code 的关系：日均使用时长 / 团队推广历程 / 踩过的坑}}`

> **写法建议**：不要堆"X 年经验 / Y 个项目"，写一个具体的"我用 Claude Code 做成了什么不容易做的事"故事更可信。

---

## 八、FAQ（报名页折叠区）

**Q：完全没用过 Claude Code 能跟上吗？**  
A：可以。前 30 分钟会拉齐起点，带你从零跑通第一个任务。但要求会基础 git + 命令行（如果你这俩都没接触过，建议先看 1 小时入门视频再来）。

**Q：可以用 Cursor / Copilot 代替来跟课吗？**  
A：不可以。Claude Code 的 plan mode / subagent / hooks 这些机制和 Cursor / Copilot 是不同的工作范式，工具替换不了。

**Q：会有录像吗？**  
A：`{{TBD - 是否录像 / 谁能看 / 保留多久}}`

**Q：可以退款吗？**  
A：`{{TBD - 退款政策}}`

**Q：和市面上其他 "AI 编程课" 有什么区别？**  
A：市面上 90% 的课在讲"怎么写 prompt 让 AI 给你写代码"。这场讲的是把 AI 当成**多线程协作的工程师**怎么编排——这是工具范式的差异，不是技巧差异。

---

## 九、分发物料清单（拍板后由 Marketing 落地）

> 这一段不是对外文案，是给 Marketing 同学的执行清单。

### 9.1 渠道 + Owner（建议）

| 渠道 | Owner | 物料形式 | 自检 skill |
|------|-------|---------|-----------|
| Notion 详情页 | `{{TBD}}` | 完整长文（本文档第一~八节直接转） | `offline-event-article-quality` |
| 公众号文章 | `{{TBD - 建议 Aurora / Seren}}` | 1500–2000 字推广文（C 类结构） | `wechat-article-quality` |
| 小红书 | `{{TBD - Summer / Lily / KIKI 分账号}}` | 3 张图文 + 1 条视频 | `xhs-score` |
| 海报 | `{{TBD}}` | 1242×1660 竖版（Canvas，字号 ≥ 24）+ 横版主视觉 | `poster-user-test`（先给 ChatGPT 走 persona 测试） |
| EDM / 群发 | `{{TBD}}` | 短版（≤ 200 字）+ 长版 |  — |
| EOI 报名跟进 | `{{TBD - Amelia / Rain / Angela}}` | 24h / 72h / 7d 三档跟进话术 | `eoi-followup` |

### 9.2 Marketing 自检红线

写文案前**必读** CLAUDE.md 的内容质量红线：

- ❌ 不准说"副业 / 接单 / 月入 / 涨薪 X%"
- ❌ 不准写"在当今 AI 时代 / 让我们一起 / 准备好了吗"这类万能句式
- ❌ 不准用模版化承诺（"全面掌握 / 深入探讨 / 至关重要"）
- ✅ 必须给具体可验证的承诺（卖点四里的 4 件可复用资产 = 具体）
- ✅ 海报字号最小 24px（Canvas 渲染，引用 FONT_SIZE 常量表）
- ✅ 用 Canva / Keynote / Notion 做演示稿和 Word，**不准代码生成 pptx / docx**

---

## 十、待用户拍板的项

按重要性排序，**这些不定，宣传发不出去**：

1. **日期 + 时间段**（决定所有渠道发文档时间倒推）
2. **形式**（线下 / 线上 / Hybrid 三选一，决定场地费 + 名额）
3. **讲师**
4. **早鸟截止时间 + 会员策略**（价格已定：线上 A$99 早鸟 / A$199 全价、线下 A$299 一价；关联会员体系：BASIC $8 / PLUS $19.90 / PREMIUM $88 三档是否含本场？）
5. **录像政策**
6. **退款政策**
7. **报名平台**（小鹅通 / 飞书 / 自家 web-zh / 第三方）

---

## 十一、关联文档

- 课程内容大纲（讲师讲稿源）：`curriculum/claude-code-workshop/OUTLINE.md` `{{待写}}`
- 讲师逐页讲稿：`curriculum/claude-code-workshop/SPEAKER_SCRIPT.md` `{{待写}}`
- 学员 cheat sheet：`curriculum/claude-code-workshop/CHEATSHEET.md` `{{待写}}`
- Demo repo（学员现场跟改）：`{{待建 — claude-code-workshop-demo GitHub repo}}`
