# Claude Code 实战 Workshop ｜ 宣传规划

> 单一文档：本场 workshop 对外宣传的全部物料源头。Notion 详情页 / 公众号文章 / 小红书 / 海报 / EDM / 报名页都从这里出。
> **填空字段**统一标 `{{TBD}}`，用户拍板后一次性填全，不要在多处重复维护。

---

## 一、活动基本信息

| 字段 | 内容 |
|------|------|
| 主标题 | **Claude Code 实战 Workshop ｜ 从命令行到任务编排** |
| 副标题 | 2 小时跟着敲，掌握 CLAUDE.md / Subagent / Skill / MCP 四层杠杆 |
| 时长 | 120 分钟（含 10min Q&A） |
| 形式 | 现场实操（学员自带电脑跟着敲，不是纯听讲） |
| 时间 | `{{TBD - 日期 + 时间段}}` |
| 地点 | `{{TBD - 线下场地 / Zoom 链接}}` |
| 讲师 | `{{TBD - 讲师名 + 一句话身份}}` |
| 价格 | `{{TBD - 单价 / 早鸟价 / 会员价}}` |
| 名额上限 | `{{TBD - 建议线下 ≤ 20 人，线上 ≤ 50 人，保证实操}}` |
| 报名链接 | `{{TBD}}` |

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

### 卖点 2 ｜ 4 层杠杆累乘，不是单点技巧

CLAUDE.md（让 AI 遵守你的规则）→ Subagent（让 AI 并行干活）→ Skill（让你的最佳实践可复用）→ MCP（让 AI 操作浏览器 / 数据库 / 任意外部系统）。一层一层叠上来，每层 20–25 分钟，每层都有实操。

### 卖点 3 ｜ 混合班设计，零基础 / 老司机都不浪费

前 30 分钟：心智模型 + Hello World，零基础学员保底跟上。  
后 90 分钟：Subagent / Skill / MCP 高阶玩法，在职工程师拿到能直接用的技巧。  
中间用同一个 demo repo 串起来，跟不上的随时 `git checkout part-3-start` 跳过。

### 卖点 4 ｜ 带走 4 件可复用资产

- 一份自己写的 CLAUDE.md（项目宪法模板）
- 一个自定义 subagent 配置文件
- 一个自己写的 slash command
- 一份单页 cheat sheet（含本场所有命令 / 模板）

加上持续答疑社群，会后碰到坑能继续问。

---

## 四、你将带走什么（outcome-based，给报名页用）

> **写法原则**：只承诺过程 / 作品 / 技能，**不承诺**金钱 / 涨薪 / 接单 / 副业（CLAUDE.md 红线）。

会后你能做到：

1. 在任何项目里 30 秒装好 Claude Code 并跑起第一个任务规划
2. 写一份 CLAUDE.md，让 Claude 在你的命名约定、技术栈红线、禁止动的文件这些规则内工作
3. 一次发出多个 subagent 并行干活（找代码 / 出方案 / review 同时跑）
4. 把团队的 PR 模板、代码 review checklist、上线 SOP 沉成 `/slash` 命令，团队人人能用
5. 接入至少 1 个 MCP server（context7 实时查文档 / playwright 让 Claude 自己测页面）

---

## 五、课程大纲（120min · 五段式）

| 时段 | 主题 | 你会动手做 |
|------|------|----------|
| 0–5min | 开场 + 环境检查 | 跑 `claude --version` 确认装好 |
| 5–30min | **Part 1**：心智模型 + Plan Mode | 让 Claude 读懂你陌生的 repo，规划一个 feature |
| 30–55min | **Part 2**：CLAUDE.md = 项目宪法 | 给自己 repo 写 5 条规则，对比加 / 不加的输出差距 |
| 55–80min | **Part 3**：Subagent 并行编排 | 一次发 3 个 subagent 并行跑研究任务 |
| 80–100min | **Part 4**：Skills + Slash Commands + Hooks | 写一个属于自己的 `/<命令名>` |
| 100–115min | **Part 5**：MCP 接入外部能力 | 装 context7，让 Claude 现拉最新文档 |
| 115–120min | 收尾 + Q&A | 拿 cheat sheet PDF + 加群 |

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
4. **价格 + 会员/早鸟策略**（关联会员体系：BASIC $8 / PLUS $19.90 / PREMIUM $88 三档是否含本场？）
5. **录像政策**
6. **退款政策**
7. **报名平台**（小鹅通 / 飞书 / 自家 web-zh / 第三方）

---

## 十一、关联文档

- 课程内容大纲（讲师讲稿源）：`curriculum/claude-code-workshop/OUTLINE.md` `{{待写}}`
- 讲师逐页讲稿：`curriculum/claude-code-workshop/SPEAKER_SCRIPT.md` `{{待写}}`
- 学员 cheat sheet：`curriculum/claude-code-workshop/CHEATSHEET.md` `{{待写}}`
- Demo repo（学员现场跟改）：`{{待建 — claude-code-workshop-demo GitHub repo}}`
