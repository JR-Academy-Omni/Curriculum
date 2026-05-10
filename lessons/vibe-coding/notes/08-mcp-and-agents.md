# 08 · MCP & Agent 自动化谱系

> 上一章我们看完了 Claude Code 这一个**单点工具**；这一章往外扩——AI Coding 怎么连**外部能力**（MCP），怎么走向**全自动**（Agent）。

---

## 8.1 Connect MCP

- **MCP** = Model Context Protocol
- 让 AI Coding 工具连上**外部能力**：
  - DB（Postgres / Mongo）
  - Slack / Linear / Notion
  - 浏览器（Playwright / Chrome DevTools）
  - 文件系统、Git、自家内部 API
- 一句话：**MCP 是 AI 时代的 USB**
- 一次写好一个 MCP server，所有支持 MCP 的 client 都能用（Claude Code / Cursor / Codex...）

> 讲师提示：MCP 不是 Anthropic 私有协议，它是**开放标准**。OpenAI、Google 都在跟。

---

## 8.2 Agent 自动化阶梯（按 Autonomy 从低到高）

| 层级 | 工具 | 模式 | Autonomy |
|------|------|------|----------|
| **补全** | Cursor / GitHub Copilot | `/Chat`（聊天） | 低 — 你问它答 |
| **编辑** | Cursor / Copilot | `/Edit`（按指令改一段） | 中 — 你指哪它改哪 |
| **Agent** | Cursor Agent / Copilot Agent | `/Agent`（自主多步） | 高 — 一句话完成多步 |
| **全自动** | Lovable / Replit | Copilot/Assistant Agent | **拉满** — 自然语言到上线 |

- 同一个工具内部也有这个阶梯（Cursor Chat → Edit → Agent）
- 不是越自主越好——**关键代码 / 不可逆操作**手动反而稳

> 讲师提示：Autonomy 越高，**前期 Prompt + 文档**越关键。你给得越清楚，它跑得越远。

---

## 8.3 Devin & 异步 Bot：派活给 AI

- **Devin** = 第一个商用 SWE Agent（Cognition AI）
- 工作模式：
  - 在 **Slack** 里 `@Devin 修一下登录页 bug` → Devin 接活
  - 在 **Linear** 里把 issue 派给 Devin → 自动开 PR
- 不只 Devin——**Cursor / Codex / Claude Code 都能做 GitHub / Slack bot**
  - 自动接 issue
  - 自动跑 bug fix
  - 跑完返回 diff / PR
- 你下班前派活 → 第二天早上看 PR

> 讲师提示：MCP 是连**能力**（让 AI 能操作什么），Agent 是连**自主性**（让 AI 自己决定做什么）。**两条线都要懂**——MCP 是横向扩展，Agent 是纵向放权。
