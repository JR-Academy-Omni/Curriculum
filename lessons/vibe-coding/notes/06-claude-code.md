# 06 · Claude Code 主体

> 本节建立"Claude Code 是怎么被设计的"骨架；07 章会贴 System Prompt 完整全文。

---

## 6.1 Docs：AI 不读代码靠猜，AI 读 docs

- AI Coding 不是"读你代码猜你想干嘛"，而是**读 docs / README / PRD**
- 没有文档 = AI 在猜；有文档 = AI 在执行
- 这就是为什么 `CLAUDE.md` / `README.md` / PRD 是 AI 时代的一等公民

> 讲师提示：这一页要敲黑板——很多新人以为 AI 会"看懂代码"，其实它读的是你写的字。

---

## 6.2 `/init` — 进 repo 第一件事

- `/init` = Initialize a new **CLAUDE.md** file with codebase documentation
- 进入新 repo 第一件事：跑 `/init`
- Claude 自动扫码、识别技术栈、生成 `CLAUDE.md` 骨架
- 后续每次对话都会自动加载这个文件

> 讲师提示：现场演示——`cd` 到一个新 repo，敲 `/init`，让学员看 Claude 怎么"读懂"项目。

---

## 6.3 Claude Code · Git 内置能力

- Claude Code 内置 **git 操作能力**：commit / branch / push / diff / log
- 不需要你切到终端再敲 git——Claude 直接调
- 经典操作：**让 Claude 自己写 commit message**
- 也可以让它读 diff、做 code review、解 merge conflict

> 讲师提示：演示一句"帮我 commit 一下"，看 Claude 自动 stage + 写 message + push。

---

## 6.4 `CLAUDE.md` Token 量经济学

- 总 system prompt ≈ **2800 tokens**
- `CLAUDE.md` 推荐 **1000–2000 tokens**
- 全部加起来 ≈ **9400 tokens** 进每次对话
- 每条消息都吃这些 token——不是"写一次就完了"

> 讲师提示：CLAUDE.md 不是越长越好。**超 2000 token 就要拆**——按子项目拆 sub-CLAUDE.md，按主题拆 docs/ 引用。

---

## 6.5 提示词架构：XML + Markdown + System Reminder + Memory

- **XML + Markdown** 混合
  - Markdown 写人话段落
  - XML 标签包结构化指令（`<good-example>` / `<system-reminder>` / `<env>`）
- **System Reminder** 模式
  - 上下文里随时插 `<system-reminder>` 注入规则
  - 优先级高于普通对话
- **Memory**
  - Memory management + `CLAUDE.md` 双层
  - 跨 session 持久化（auto-memory）

> 讲师提示：这就是为什么 Claude Code 比裸调 API 强——它有一整套**上下文工程框架**。

---

## 6.6 Prompt 中的强调词：不要客气

- 真实例子：`"THIS IS IMPORTANT: ... NEVER generate or guess URLs ..."`
- Claude Code Prompt 大量使用：
  - **IMPORTANT**
  - **VERY IMPORTANT**
  - **NEVER**
  - **ALWAYS**
  - **CRITICAL**

> 讲师提示：写 Prompt 不要客气，**越斩钉截铁 LLM 越听话**。"请尽量不要..."不如"NEVER"。

---

## 6.7 `<good-example>` / `<bad-example>` 正反例 XML

- 用 XML tag 给正反例，比纯文字解释有效 10 倍
- Claude Code 自己的 Prompt 里到处是这种 pattern

```xml
<good-example>
cd /path/to/dir
ls
</good-example>

<bad-example>
cd /path/to/dir ; ls
</bad-example>
```

- 教 cd 命令：用 `cd` 切目录后再单独执行命令，**不要用 `;` 链式**
- 你写自己的 Prompt 时也照抄这个 pattern

> 讲师提示：现场让学员翻 06 章后面的 System Prompt 全文，数一下 `<good-example>` 出现多少次。

---

## 6.8 斜杠命令清单

| 命令 | 作用 |
|------|------|
| `/init` | 初始化 `CLAUDE.md` |
| `/compact` | 压缩对话历史（保留要点，丢细节） |
| `/clear` | 清空对话（重新开始） |
| `README.md` | 项目对外文档 |
| `CLAUDE.md` | 项目对 AI 的文档 |

> 讲师提示：感觉"Claude 越聊越蠢" → **先 `/compact`，不行再 `/clear`**。Context window 满了模型就开始遗忘。
