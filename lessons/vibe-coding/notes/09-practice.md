# 09 · 实战经验 + 常见坑 + Lab

## 9.1 AI Coding Workflow · Human-in-the-loop（5 步）

1. **Analysis** — AI 分析需求 / 现有代码
2. **Planning** — AI 出 plan，人 review
3. **Patch Generation** — AI 写 diff
4. **Verification** — 跑 tests / linter / 人工 review
5. **Commit** — AI 写 commit message + PR

> 讲师提示：5 步缺一不可，把 AI 当 junior dev 用，每一步都要人卡口。

---

## 9.2 Step 1 · Analysis 细节

- AI 分析输入：**API / DB schema / 现有代码 / PRD**
- 输出：**影响范围** / **涉及文件** / **风险点**

> 讲师提示：不要直接让 AI 写代码，先让它"讲清楚要做什么"。

---

## 9.3 Step 2 / 4 / 5 · Planning + Verification + Commit

- **Planning**：列出 files / function diff / patch
- **Verification**：跑测试 / linter；**AI 不要直接 commit**
- **Commit**：AI 出 commit message + PR description

> 讲师提示：Planning 阶段没对齐，后面三步都白做。

---

## 9.4 Codex Optimization · 打开网络访问

- Codex CLI 默认沙箱**无网络**
- 配置文件 `~/.codex/config.toml`：

```toml
[sandbox_workspace_write]
network_access = true
```

> 讲师提示：要让 agent 能 `npm install` / `pip install` / `git push`，必须开。

---

## 9.5 AI Coding 三条最佳实践

### 1. Prompt Output Review

- 写 prompt → AI 出 **diff & tests** → review → 改 prompt → 再来
- 闭环越短，质量越高

### 2. Small Steps Shipping

- 每 **30 min** 一个小提交
- commit & run tests
- 别让 AI 一次性憋 500 行

### 3. Feedback Logging

- 给 prompt 打 **PASS / FAIL** 标签
- 沉淀成 **rules / docs**（CLAUDE.md / .cursorrules）

---

## 9.6 AI Coding 1000 行问题 · Context Window

- 单文件超 **1000 行**，AI context window 顶不住
- 解法：拆 component / utils

> 讲师提示：不是因为 AI 蠢，是 token 真的不够。

---

## 9.7 拆模块策略

- 按 **component / utils** 拆
- 一个 component 一个文件
- AI 每次只读它要改的那块
- 副作用：人也更容易 review

---

## 9.8 Vibe Coding · build / dist

- AI 帮你 build，但 **dist 包要自己理解**
- 知道 build 出来的是什么再 deploy
- 不要"build 完直接扔上线"

---

## 9.9 实战 · Protected Router

- AI Coding CRUD 时**必须考虑 JWT Auth**
- 流程：building code → api → 接入 **Protected Router**
- AI 默认会忘记加权限，必须在 prompt 里写死

---

## 9.10 端口占用排查

```bash
lsof -i:5050      # 查 5050 端口占用
kill -9 [PID]     # 强杀
```

> 讲师提示：开发常见问题，AI 经常忘记 kill 旧进程，自己心里要有数。

---

## 9.11 Lab · Pizza Maker Web App

- 实战：做一个**披萨制作 web app**
- 功能模块：
  - **Ingredients**（配料）
  - **Preparation Steps**（步骤）
- AI 全程协助：**PRD → UI → CRUD → 部署**
- 学完输出：一个能跑的 web app + 一份完整 commit history

> 讲师提示：现场 demo 节奏 — 先让学员看 PRD，再看 AI 出 plan，再看 diff，最后跑起来。
