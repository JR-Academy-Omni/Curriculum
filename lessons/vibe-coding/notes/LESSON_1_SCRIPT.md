# AI Web 全栈班 · Lesson 1 现场讲稿

> **谁讲**：Lightman
> **谁听**：AI Web 全栈班学员（首课开机）
> **时长**：120 min（含 10 min 弹性 + 10 min Q&A）
> **目标**：让学员在 2 小时内建立"AI 时代怎么写 Web 全栈"的世界观，并亲手跑通一次 Vibe Coding 完整链路
> **不要做的事**：不要想 2 小时把 10 章讲完。本节课只挑 4 章 + 一次 Live Demo。

---

## 时间排布总表

| 时段 | 时长 | 内容 | 引用章节 |
|------|------|------|---------|
| 00:00 – 00:10 | 10 min | 开场 / 自我介绍 / 课程定位 | [01](./01-landscape.md) §1.1 |
| 00:10 – 00:25 | 15 min | AI Coding 全景 · 4 类工具 | [01](./01-landscape.md) §1.3-1.7 |
| 00:25 – 00:40 | 15 min | AI 时代的岗位地图 · 全栈在哪 | [02](./02-roles-and-agile.md) §2.1, 2.5-2.7 |
| 00:40 – 00:55 | 15 min | Vibe Coding 工作流 · PRD→PLAN→IMPL→DEBUG→PR | [04](./04-vibe-coding-workflow.md) §D, §H |
| 00:55 – 01:35 | 40 min | **Live Demo** · 现场用 Claude Code 起一个 Mini CRM | [03](./03-product-and-prd.md) §H + [09](./09-practice.md) §A-E |
| 01:35 – 01:55 | 20 min | **学员动手 Lab** · 跟着做 Pizza Maker 第一步 | [09](./09-practice.md) §K |
| 01:55 – 02:05 | 10 min | Q&A + 第二节课预告 + 课后作业 | — |

---

## 00:00 – 00:10 · 开场（10 min）

**第 1 分钟 · 破冰**

- 一句话开场：「这门课结束的时候，你能做到的事是——把脑子里的产品 idea，一个人在一个周末跑出 demo，下周一上线给朋友试。」
- 不卖关子，先说"能做到什么"，再讲"怎么做到"

**第 2-5 分钟 · 自我介绍**

- 我是 Lightman，JR Academy 创始人之一
- 我自己每天用 AI Coding 写 jr-academy / SigmaQ / SuperAdmin CMS（白板写出这 3 个产品名字）
- 不是教你"AI 取代程序员"，是教你"用 AI 把一个人放大成一个团队"

**第 6-10 分钟 · 这门课跟别的 AI 课不一样**

- 别的课教你「调 ChatGPT」 — 这门课教你「让 AI 给你写完整 Web 应用并部署」
- 别的课停在 Prompt — 这门课要你交付 PR、跑 CI/CD、让别人能访问
- 节奏：8 周 / 每周 2 次 / 每次都有 deliverable / 第 8 周交毕业项目（自己的 web app 上线）

> 现场动作：在白板写"PRD → PLAN → IMPL → DEBUG → PR"五个词，告诉学员"这是你下周开始每天做的循环"

---

## 00:10 – 00:25 · AI Coding 全景（15 min）

**讲法**：先让学员说，再归类。

**第 1-3 分钟 · 互动**

- 提问："你听过哪些 AI Coding 工具？大声说出来。"
- 把学员说的工具名字写到白板（Cursor、Copilot、Claude、ChatGPT、Bolt、Lovable、v0、Codex、Windsurf、Devin...）

**第 4-12 分钟 · 4 类归位**

照 [01-landscape.md §1.3](./01-landscape.md) 的表格在白板划 4 列：

| AI 网页生成 | Coding Agent (7×24) | IDE | CLI |
|-----------|---------------------|-----|-----|
| Lovable / v0 / Bolt | OpenAI Codex / Cursor Agent | Cursor / Copilot / Antigravity | Claude Code / Codex / Gemini CLI |

- 每一类讲一个代表 + 用户画像
- 强调："4 类不是替代关系，**资深开发者一天会同时用 IDE + CLI + Agent**"

**第 13-15 分钟 · 我们这门课主要用哪几个**

- **主力**：Claude Code（CLI） — 因为它对全栈最友好
- **辅助**：Cursor（IDE） — UI 操作直观
- **进阶**：Codex（Agent） — 后期自动化
- **不用**：Lovable / Bolt — 适合 demo 不适合教全栈

> 板书重点：圈出 Claude Code，箭头指向 Cursor，再箭头到 Codex — 形成"学习路径线"

---

## 00:25 – 00:40 · 岗位地图（15 min）

**讲法**：先讲传统岗位，再讲 AI 重塑后的新岗位。

**第 1-5 分钟 · 传统 IT 岗位全景**

- 翻 [02 §2.1](./02-roles-and-agile.md)
- 白板画一个 Software Development 全景圈，把 BA / PO / UI / 前端 / 后端 / Data / DevOps / QA 全列出来
- 强调："**全栈 = 跨 3-5 个岗位的能力**，不是只会前端 + 后端"

**第 6-10 分钟 · AI 重塑后**

- 翻 [02 §2.6](./02-roles-and-agile.md)
- 关键变化：
  - **BA → AI Builder**：不再是写需求文档，是**写 PRD 给 AI**
  - **Developer → Vibe Coder**：不再是手敲 1000 行，是**审 AI 的 1000 行**
  - **DevOps → CI/CD Operator**：依然在，但更多用 AI 自动写 pipeline
- 不变的事：Stakeholder 沟通 / 系统设计 / 业务理解

**第 11-15 分钟 · 这门课会让你成为哪个岗位**

- 翻 [02 §2.7](./02-roles-and-agile.md)
- 目标岗位：**AI Builder**（横跨 BA + 全栈 + 部署）
- 6 大技能：PRD / LLM Prompt / AI Coding / Feature 拆分 / Git / Deployment
- 一句话："过去 3 个人 6 个月做的事，现在 1 个 AI Builder 4 周做完。这门课让你成为那个人。"

> 现场动作：让学员在笔记本写下"我现在最弱的是哪个技能？"，下课收上来作为分组依据

---

## 00:40 – 00:55 · Vibe Coding 工作流（15 min）

**讲法**：把 5 阶段当作"未来 8 周每天循环的动作"讲清楚。

**第 1-10 分钟 · 五阶段拆解**

翻 [04 §D](./04-vibe-coding-workflow.md)。每个阶段花 2 分钟：

| 阶段 | 你做什么 | AI 做什么 |
|------|---------|---------|
| **PRD** | 把 idea 写成结构化文档 | 帮你补完整 / 找漏洞 |
| **PLAN（Plan Mode）** | 检查 AI 出的 plan | 列出要改的文件 + 影响 |
| **IMPLEMENTATION** | 一边监督一边喝咖啡 | 写代码 + 跑测试 |
| **DEBUG & TESTING** | 看测试结果 / 浏览器实测 | 自动修 bug / 重跑 |
| **PR** | review diff + 写好 commit | 写 commit message + PR description |

**第 11-15 分钟 · Editor 推荐**

翻 [04 §H](./04-vibe-coding-workflow.md)：

- ✅ **Recommendation**：Claude Code、Gemini CLI
- ➖ **Neutral**：Cursor、Copilot
- ❌ **Not Recommend**：Amazon Kiro

> 讲师提示：不要花时间给学员讲 Cursor 怎么装。让他们课后自己装，下节课带电脑来。

---

## 00:55 – 01:35 · Live Demo · Mini CRM（40 min）

> **本节课最重要的 40 分钟**。学员要看到"AI 真的能从零写出一个能用的 web app"。

**Demo 目标**：
- 时长 30 min 写代码 + 10 min 演示效果
- 产出：一个能 add / list / edit / delete 客户的 Mini CRM
- 技术栈：Next.js + Tailwind + 本地 JSON 存储（不接 DB，省时间）

### 第 0 分钟 · 准备工作（已提前完成）

- 全屏 Cursor + Claude Code 终端
- 桌面留一个空文件夹 `mini-crm/`
- 浏览器开 [03 §F](./03-product-and-prd.md) 的 PRD 模板

### 第 1-5 分钟 · PRD（写给 AI 看）

现场打开终端：

```bash
cd mini-crm
claude
```

进入 Claude Code 后，**口述 + 让学员看着**输入：

```
我要做一个 Mini CRM，给小型咨询工作室用。

## 需求
- 管理客户列表（姓名 / 公司 / email / 备注）
- 4 个 Action：Create / Edit / Delete / List
- 数据存本地 JSON 文件，不接数据库
- 用 Next.js 14 App Router + Tailwind
- 风格简洁，不要花哨

请先生成一份 PRD（不超过 1 页），然后等我确认。
```

> 讲师讲解：注意我没说"写代码"，先要 PRD。这就是 PLAN MODE 思维。

### 第 6-10 分钟 · PLAN

Claude Code 出 PRD 后，让学员评论"哪里写得好 / 哪里漏了"，然后说：

```
PRD 看起来不错。现在请列出你要创建/修改的所有文件，
以及每个文件的职责，等我确认再开始写代码。
```

**讲解重点**：
- 看 Claude 列出的文件树
- 故意让学员发现一个问题（比如"没有 search 功能"）
- 现场加一句："加一个搜索框，按姓名 / 公司 fuzzy 搜索。然后开始写。"

### 第 11-25 分钟 · IMPLEMENTATION

`Plan Mode` 退出后，Claude 开始写代码。这 15 分钟讲师做 3 件事：

1. **不要发呆**：边写边讲解每个生成的文件作用
2. **指出 AI 的取舍**："看，它选了 fs/promises 不是 fs.readFileSync — 因为 Next.js 是 async"
3. **有 bug 不要慌**：现场让 AI 自己 debug，告诉学员这就是真实工作流

### 第 26-30 分钟 · DEBUG & TESTING

```bash
npm run dev
```

打开 `http://localhost:3000`，现场操作：
- 添加 1 个客户：姓名"张三" / 公司"匠人学院" / email
- 编辑 / 删除 / 搜索 各做一次
- 如果有 bug，**直接把报错贴回 Claude Code**

### 第 31-35 分钟 · 让学员看真实场景

打开 [09 §J](./09-practice.md) 的端口排查 slide：

```bash
lsof -i:3000
kill -9 [PID]
```

讲："这是你每天会遇到 5 次的命令。AI 经常忘记 kill 旧进程。记住。"

### 第 36-40 分钟 · PR & Demo 收尾

让 Claude 写 commit message：

```
帮我把这次改动 commit 一下，message 按 conventional commit 写，
不要 push，我自己来。
```

然后演示 git diff 简单看一眼。

> **回到学员**："看到了吗？我们刚刚 30 分钟做完了一个 Mini CRM。这是你下周开始要每天做的事。"

---

## 01:35 – 01:55 · 学员动手 Lab · Pizza Maker（20 min）

**讲法**：让学员自己跑一遍 PRD → PLAN，体验"对话感"。

**第 1-5 分钟 · 环境检查**

- 学员打开 Cursor（事先要求装好）
- 没装 Claude Code 的，先用 Cursor 的 Composer

**第 6-15 分钟 · 任务**

照 [09 §K](./09-practice.md) Pizza Maker：

```
我要做一个 Pizza Maker Web App。
- 用户能选 Ingredients（配料：芝士 / 番茄 / 蘑菇 / 火腿 / 菠萝...）
- 显示 Preparation Steps（步骤：揉面 → 铺料 → 烘烤）
- 单页应用，React + Tailwind

请先给我 PRD，然后列出文件结构，**先不要写代码**。
```

**讲师巡场**：
- 不写代码 — 重点是体验"AI 能跟我对话规划"
- 注意学员卡在哪儿（最常见：Prompt 写得太短 / 一上来就要代码）

**第 16-20 分钟 · 集体复盘**

- 抽 2-3 个学员展示 AI 的 PRD 输出
- 对比：谁的 Prompt 写得清楚 → AI 出的 PRD 就完整
- 总结一句："**Prompt 是新时代的源代码**。"

---

## 01:55 – 02:05 · Q&A + 预告 + 作业（10 min）

**第 1-5 分钟 · Q&A**

预期高频问题 + 预设答案：

| 问题 | 答案 |
|------|------|
| Cursor / Claude Code 收费吗？ | Cursor 有免费 tier；Claude Code 按 API 计费，新用户有 $5 免费额度 |
| 我没编程基础能跟上吗？ | 这门课假设你写过 1 个 to-do list 项目。如果完全零基础，建议先上 [ai-essentials-bootcamp](../ai-essentials-bootcamp/)。 |
| 8 周后我能找到工作吗？ | 这门课不承诺求职结果。但 [10 章](./10-job-checklist.md) 有完整 4 步 Checklist。 |
| AI 写的代码安全吗？ | 后面专门一节讲 Code Review + Rules + Secrets 管理。 |

**第 6-8 分钟 · 第二节课预告**

- 主题：**PRD 工程**——把 idea 翻译成 AI 能精确执行的 PRD
- 学员要带：
  - 一个你想做的 web app idea（个人项目 / 副业想法）
  - 装好 Cursor + Claude Code（链接发课程群）

**第 9-10 分钟 · 课后作业**

- **必做**（30 min）：照 Mini CRM Demo 复刻一遍，能跑起来即可
- **选做**（90 min）：自己出一个 idea，用 AI 写出 PRD（不写代码）
- **阅读**（45 min）：通读 [07 章 Claude Code System Prompt 全文 + 解读](./07-claude-code-system-prompt.md)
  - 这是理解 AI Coding 工具设计哲学的最佳教材

---

## 讲师 Cheat Sheet

### 备用素材（万一某段进度太快）

- 加讲 [01 §1.9 SigmaQ 案例](./01-landscape.md)（5 min）
- 加讲 [04 §F Monolith vs Polyrepo](./04-vibe-coding-workflow.md)（5 min）
- 加讲 [08 §C Devin & 异步 Bot](./08-mcp-and-agents.md)（5 min）

### 跳过素材（万一进度落后）

- 跳过 §00:25-00:40 岗位地图，挪到第二节课开头
- 缩短 Live Demo 到 25 min（只做 List + Create）
- 学员 Lab 改成"看老师演示"

### 现场翻车应急

| 翻车 | 应急 |
|------|------|
| Claude Code 罢工 / API 超限 | 切 Cursor Composer，用免费 tier |
| Live Demo 写出 bug 卡住 | 不要慌，**当场让 AI debug 就是教学** |
| 投影 / 网络挂了 | 切到 [02-roles-and-agile.md](./02-roles-and-agile.md) 白板纯讲 |
| 学员问超纲问题（比如 RAG / Agent） | 答："好问题，第 5/6/7 周专门讲" — 不被带偏 |

### 讲完一句话总结（最后定调）

> 「这门课不教你写代码，教你**指挥 AI 写代码**。
> 你的核心竞争力不再是手速，是**写 PRD、拆任务、读 diff 的判断力**。
> 8 周后我们再见的时候，你的产品已经在跑。」
