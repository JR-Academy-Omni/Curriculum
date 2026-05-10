# 04 · Vibe Coding 工作流

## 4.1 AI Coding Workflow 全景

- 一句话：AI Coding ≠ 让 AI 替你打字，而是把"**敏捷开发**"塞进每个 prompt 里
- 上游：**Agile / PRD** (Product Requirement Document)
- 中游：**Planning Prompt** → **Code Agent** → **Requirement Validation**
- 下游：**Repo 形态**（monolith / polyrepo）+ **三类文档基石**（Readme / Rules / PRD）
- 横切关心：**SOLID / KISS / 设计风格 / Color Palette**

> 讲师提示：AI Coding 不是"取代敏捷"，是把敏捷各环节都加上 AI Co-pilot；学员上来如果只想"让 Cursor 帮我写"，先把这张图甩出去。

---

## 4.2 Existing Project vs Brand New

- **Brand New (从 0 起)**
  - 优势：可以严格按 Vibe Coding 五阶段走 PRD → PLAN → IMPL
  - 风险：容易让 AI 一口气堆出 1 万行没人 review 的代码
- **Existing Project (在老仓库里)**
  - 优势：业务上下文清晰、有真实 user
  - 风险：AI 不懂老代码风格，必须先喂 **Rules + Readme + 关键模块导览**
- **共同点**：不管哪种，都先写 PRD，不要直接 "帮我加个功能"

> 讲师提示：现场问学员手上是哪种项目，按手数决定后面案例偏哪一种。

---

## 4.3 Token 是什么

- **Token = 模型计费 / context 的最小单位**，不是一个汉字也不是一个单词
- 经验值：
  - 1 个英文单词 ≈ 1.3 token
  - 1 个汉字 ≈ 1.5 token
  - 1 行普通代码 ≈ 10–20 token
- **Context Window 是上限**：Claude Sonnet 200k、Opus 1M、GPT-4o 128k
- 计费两端都算：**input token + output token**，长 prompt 烧钱
- 实战影响：
  - 大 repo 不能整个塞进去 → 必须靠 **submodule + Rules** 让 AI 按需读
  - 长对话越聊越贵 → 适时 `/compact` 或开新会话

> 讲师提示：让学员去 platform.openai.com/tokenizer 现场粘一段中文 + 一段代码看 token 数，体感最快。

---

## 4.4 Vibe Coding 五阶段

| 阶段 | 名字 | 关键产物 |
|------|------|---------|
| **1** | **PRD** | 一份能 print 的需求文档 |
| **2** | **PLAN** (Plan Mode) | 任务拆解 + 影响面分析，不写代码 |
| **3** | **IMPLEMENTATION** | Code Agent 真正动手 |
| **4** | **DEBUG & TESTING** | 跑测试 / 复现 bug / 修 |
| **5** | **PR** | 提交代码 + 等 review |

- 每一阶段都有**独立 prompt 模式**，不要混着用
- **Plan Mode 是 Vibe Coding 的灵魂**：先让 AI 想清楚再动手，省下 90% 返工

> 讲师提示：五阶段每节后面都会单独展开，这一页只让学员先有完整地图。

---

## 4.5 让 AI 真的"懂代码"——Repo / Submodule

- AI 只能看到你**显式给它**的代码；不在 context 里的等于不存在
- **Git submodule** = 把多个 repo 拼成一个工作区，AI 一眼能看到全貌

```bash
git submodule add <repo_url> <path>
git submodule update --init --recursive
git clone --recursive <repo_url>
```

- 典型场景：
  - 主 repo + 共享组件库（design-system 是 submodule）
  - 多服务架构（frontend / backend / infra 各一 repo）
- **坑**：submodule 不会自动 pull，每次开工先 `submodule update`

> 讲师提示：现场 demo 一次 `git submodule add` 比讲十遍有用。

---

## 4.6 Monolith vs Polyrepo vs Monorepo

| 形态 | 含义 | AI 友好度 |
|------|------|----------|
| **Monolith Repo** | 单 repo 多目录，所有代码挤一起 | 中（容易超 context） |
| **Polyrepo** | 每个服务一个 repo（/frontend, /backend, /models, /infra） | 低（AI 跨 repo 难） |
| **Polyrepo + Submodule** | 多 repo 但用 submodule 拼成工作区 | 高（拆分清晰 + AI 可见） |
| **Monorepo** | 一个 repo 全在（pnpm workspace / Turbo / Nx） | **最高**（AI 一次看全） |

- 给新项目：**Monorepo 优先**
- 给老项目（已经 polyrepo）：**加 submodule 兜底**，不要硬迁

> 讲师提示：Monolith ≠ Monorepo，学员经常混；Monolith 是部署形态，Monorepo 是代码组织形态。

---

## 4.7 AI Coding 三大基石

- **Rules** (`.cursor/rules/` / `CLAUDE.md`) — AI 必须遵守的硬规则
- **Docs / PRD** — 这次要做什么，业务上下文
- **README** — 这个项目 / 模块 / 函数是干什么的

> 任何一项缺失 → AI 输出质量直线下降。
> 三件齐全 → AI 输出接近 mid-level 工程师。

> 讲师提示：下一节（Rules 体系）会把第一项展开讲，这页只让学员记住"三件套"概念。

---

## 4.8 Editor 推荐（2025 年 5 月）

| 评级 | 工具 | 理由 |
|------|------|------|
| ✅ **Recommend** | **Claude Code (CC)** / **Gemini CLI** | Agent 能力最强、Plan Mode 成熟、CLI 适合 power user |
| ⚪ **Neutral** | **Cursor** / **GitHub Copilot** | 主流稳定，但 Agent 模式不如 CC |
| ❌ **Not Recommend** | **Amazon Kiro** | 生态弱、更新慢、不建议作为主力 |

- **个人选择路径**：
  - 重度终端党 → Claude Code
  - 习惯 IDE → Cursor + Claude Code 双开
  - 已经在 GitHub 生态 → Copilot Agent Mode 也够用

> 讲师提示：不要陷入"哪个最好"的争论，让学员先选一个用 2 周再换。

---

## 4.9 Review Pull Request

- AI 写完代码 ≠ 任务结束，**必须人 review**
- PR 是 Vibe Coding 五阶段的最后一关，也是最被忽略的一关
- Review 三件事：
  - **Diff 看得懂吗** — 看不懂说明 prompt 写崩了，回去改 PRD
  - **Test 真跑过吗** — 不要相信 AI 说"我已经测试通过"
  - **风格符合 Rules 吗** — 跟你 `.cursor/rules/` 对齐
- AI 辅助 review 也行：让另一个 model（不同厂家）看 PR，互相挑刺

> 讲师提示：演示一次"AI A 写代码 + AI B review"，学员会很有感。
