---
# ⚠️ 草稿：本课参考资料。建议作为 Wiki 文章或课程"资料"页发布;非顺序课文
title: Vibe Coding 大师课 · 速查卡合集
description: Cursor 快捷键、Claude Code 命令、提示词模式、MCP 配置、workflow 四段式——一页纸随时抄。
type: reference
---

# Vibe Coding 速查卡合集

> 五张一页纸。用 Claude Code / Cursor / Codex CLI 干活时直接抄。
> 快捷键随版本会变，冲突时以 `Shift+P`(Cursor) / `/help`(Claude Code) 现查为准。

---

## 卡 1 · Cursor 快捷键卡

> macOS 用 `Cmd`，Windows/Linux 用 `Ctrl`。下表以 `Cmd` 写，Win/Linux 自行替换。

| 快捷键 | 干什么 | 什么时候用 |
|---|---|---|
| `Cmd+K` | 就地生成/改（inline edit，改选中代码或在光标处写） | 改一个函数、加个 try/catch、改个变量名——不想开侧栏，改完就在原地看 diff |
| `Cmd+L` | 打开 chat 侧栏（对当前文件/选区提问、多轮讨论） | 问"这段在干嘛"、让它解释报错、要它给方案但先别动代码 |
| `Cmd+I` | Composer / Agent（跨文件多处改，AI 自己决定动哪些文件） | 加一个功能要动 3+ 个文件、重命名散在多处的东西、脚手架一个新模块 |
| `Cmd+Shift+P` | 命令面板（所有命令、切模型、开设置） | 找任何命令、切 model、改快捷键、开 MCP 设置——记不住时的万能入口 |
| `Tab` | 接受 AI 补全（Cursor Tab / autocomplete） | 顺着写，AI 猜下一段——最高频操作 |
| `Cmd+Shift+K` | 在 chat 里加当前选区/文件为上下文 | 让 AI 只盯着你选中的那段看 |
| `Esc` | 打断正在生成 / 关掉 inline 输入框 | 生成跑偏了立刻停 |
| `Cmd+Enter` | 在 chat 里用 codebase 全库检索回答（@Codebase） | 问"登录逻辑在哪个文件"、跨全项目找实现 |

**选哪个的心法**：单点小改 `Cmd+K` → 想讨论/问 `Cmd+L` → 一次改一堆文件 `Cmd+I` → 记不住 `Cmd+Shift+P`。

---

## 卡 2 · Claude Code 常用操作卡

> 终端里跑 `claude` 进入。以下为交互态常用操作。

**斜杠命令（在输入框打 `/`）**

| 命令 | 作用 |
|---|---|
| `/help` | 列出所有命令（记不住时先打这个） |
| `/clear` | 清空当前对话上下文，重开一段（上下文脏了/换任务时用） |
| `/init` | 扫项目生成 `CLAUDE.md`（新项目第一步） |
| `/model` | 切模型（Opus/Sonnet 等） |
| `/agents` | 管理 sub-agent（子代理） |
| `/review` | 让它 review 当前 diff |
| `/compact` | 压缩历史上下文，省 token 又不丢主线 |

**引用与上下文**

| 写法 | 作用 |
|---|---|
| `@path/to/file.ts` | 把某个文件塞进上下文（打 `@` 会有路径补全） |
| `@目录/` | 引用整个目录 |
| 直接贴报错/日志 | 让它照着错误定位——比描述"报错了"有用得多 |

**CLAUDE.md 的作用**
项目根的 `CLAUDE.md` = 每次对话自动加载的项目说明书。写进去：技术栈、约定、"禁止用什么"、跑测试的命令、目录结构。写好一次，之后每次 Claude Code 都自动读，不用重复交代。

**sub-agent（子代理）**
把一个独立子任务丢给一个新开、干净上下文的 agent 去跑（比如"去搜整个 codebase 找所有调用点"），它只把结论带回来，不污染主对话。适合：大范围搜索、并行探查、把一坨脏活隔离出去。

**跑验证 / 回退**

```bash
# 让它改完后自己跑验证（在 prompt 里明确写出命令）
#   "改完跑 npm test 和 npm run typecheck，红了就修"

# 手动回退它的改动
git diff                      # 先看它改了什么
git checkout -- path/to/file  # 撤掉单个文件的未提交改动
git checkout -- .             # 撤掉所有未提交改动（慎用）
git stash                     # 先藏起来，保留后悔药
git reset --hard HEAD         # 彻底回到上次 commit（危险，会丢改动）
```

> 铁律：**让 AI 大改前先 commit 一次**，改坏了 `git checkout` 一键回到干净态。

---

## 卡 3 · 提示词模式卡

> 每个模式一行说明 + 一个最小可抄模板。混用比单用强。

**① 任务+背景+约束+输出+验收（万能结构，默认首选）**
把需求拆成五块，AI 不用猜。

```
任务：给 UserService 加一个按 email 查用户的方法。
背景：TypeScript + Prisma，代码在 src/services/user.ts。
约束：复用现有 prisma client，不新增依赖，email 要小写归一化。
输出：只改 user.ts，给出 diff。
验收：新增方法有单测，npm test 全绿。
```

**② 角色+步骤+检查表（要它按流程走、别跳步）**
先设定身份，再给步骤，最后给自检清单。

```
你是资深 code reviewer。按步骤做：
1) 读 diff  2) 找 bug 和边界情况  3) 查是否有重复逻辑
检查表：空值处理？错误处理？测试覆盖？命名？逐条打勾或标 ✗。
```

**③ diff-patch（只要改动，不要整文件重贴）**
明确要 patch，省 token 也好 review。

```
只输出 unified diff（不要重贴整个文件），改动最小化，别动无关行。
```

**④ few-shot（给例子定风格/格式）**
给 1-2 个输入→输出样例，AI 照葫芦画瓢。

```
按这个风格写 commit message：
输入：加了登录限流 → 输出：feat(auth): add login rate limiting
输入：修了空指针     → 输出：fix(user): handle null email in lookup
现在给这次改动写一条：____
```

**⑤ Chain-of-Thought（复杂逻辑，先想后写）**
让它先出计划/推理，你确认了再让它写代码。

```
先别写代码。先分析：这个 bug 可能的三个成因，各自怎么验证。
我确认方向后你再动手。
```

---

## 卡 4 · MCP 配置速查

> MCP = 给 AI 工具挂外部能力（数据库、浏览器、文件系统等）的标准协议。
> 下面是各工具的配置文件位置。路径随版本可能微调，找不到时以官方文档 / 应用内"MCP 设置"为准。

**配置文件位置**

| 工具 | macOS | Windows | Linux |
|---|---|---|---|
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` | `%APPDATA%\Claude\claude_desktop_config.json` | 见官方文档（随版本） |
| Claude Code | 项目根 `.mcp.json`（项目级）/ `~/.claude.json`（用户级） | 同左（`%USERPROFILE%\.claude.json`） | 同左（`~/.claude.json`） |
| Cursor | 项目级 `.cursor/mcp.json` / 全局 `~/.cursor/mcp.json` | 项目级 `.cursor\mcp.json` / 全局 `%USERPROFILE%\.cursor\mcp.json` | `~/.cursor/mcp.json` |
| VS Code (Copilot) | 工作区 `.vscode/mcp.json` / 用户 settings | 工作区 `.vscode\mcp.json` / 用户 settings | `.vscode/mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` | `%USERPROFILE%\.codeium\windsurf\mcp_config.json` | `~/.codeium/windsurf/mcp_config.json` |

> 提示：Claude Code 也可以直接命令行加，不用手写文件——`claude mcp add`。

**最小 server 配置片段（stdio 本地 server，最常见形态）**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    }
  }
}
```

**远程 / HTTP server 形态（部分工具支持）**

```json
{
  "mcpServers": {
    "my-remote": {
      "url": "https://example.com/mcp",
      "headers": { "Authorization": "Bearer ${MY_TOKEN}" }
    }
  }
}
```

> 注意：VS Code 的 `.vscode/mcp.json` 用的是顶层 `servers` 键（不是 `mcpServers`），且支持 `inputs` 让你运行时填密钥。**密钥永远走环境变量 / 输入提示，别硬编进 json 提交进 git。**

---

## 卡 5 · "让 AI 干活"四段式 workflow 卡

> 一次交办 = 四段说清楚。缺哪段，AI 就在哪段自由发挥（=跑偏）。

**① 入口（说清楚要什么）**

```
目标：<一句话，做完什么算数>
范围：<只动哪些文件 / 模块，别扩散>
禁止：<不许碰的东西：不改 schema / 不加依赖 / 不动 API 签名>
成功标准：<怎么算完成：测试绿 / 某功能能跑 / 输出符合 X>
```

**② 上下文（喂它需要知道的）**

```
相关文件：@src/... @src/...
约束：技术栈、代码风格、团队约定（能引用 CLAUDE.md 就引用）
历史：这块之前踩过什么坑 / 为什么现在长这样 / 别重蹈的错
```

**③ 执行（先计划后改 + 带验证）**

```
先给方案和要改的文件清单，我确认后再动手。
改动最小化，别顺手重构无关代码。
改完自己跑：<npm test / typecheck / lint / 启动看效果>，红了继续修到绿。
```

**④ 出口（交付要能验收）**

```
给我：diff、跑过的验证结果、这次改动的风险点、建议的下一步。
```

**一句话记忆**：**入口定边界 → 上下文喂料 → 执行先计划后验证 → 出口交 diff 和风险。**
每段独立成句，AI 越不用猜，结果越稳。

---

> 用法建议：把这五张卡钉在第二屏 / 打印贴墙上。开工前扫一眼卡 5 摆好 workflow，卡在哪个环节就翻对应那张。
