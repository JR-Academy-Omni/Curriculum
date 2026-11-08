# 我的生意记忆仓库 · 内容自动化

OPC 创业营 W15 · 让生意自己运转。

这个仓库是你的**生意记忆**。本地的 Codex 和云端的 GitHub Actions 读的是同一份记忆、同一套规则，每天自动走完这条线：

```
第 0 步 记忆 ──▶ 第 1 步 话题调查 ──▶ 第 2 步 生成 ──▶ 第 3 步 Eval ──▶ 第 4 步 发布
memory/          topics/日期.md        公众号稿 + 网页       evals/日期.md      你点 Merge → 网页上线
   ▲                                                                              │
   └────────────── 发布 3 天后，把数据和结论写进 memory/learnings.md ◀───────────────┘
```

## 目录

| 路径 | 是什么 | 谁写 |
|---|---|---|
| `memory/brand.md` | 我是谁、卖什么、卖给谁、语气、**不能说的话** | 你 |
| `memory/sources.md` | 每天要看的信息源 | 你 |
| `memory/past-posts/` | 你写过、反响好的文章 | 你 |
| `memory/learnings.md` | 发布后学到的：什么题目有人看 | Agent 提建议，你同意才写 |
| `rules/1-research.md` | 第 1 步：话题调查怎么做 | 你（和 Codex 一起改） |
| `rules/2-write.md` | 第 2 步：公众号文章 + 网页怎么写 | 你 |
| `rules/3-eval.md` | 第 3 步：评分卡和通过线 | 你 |
| `AGENTS.md` | 总规则：先读记忆、只写指定文件、第一行交状态 | 一般不动 |
| `topics/` `drafts/wechat/` `evals/` | 每天的产出，按日期存 | Agent |
| `site/` | 网页，合并到 main 后自动发布 | Agent 写，你 Merge |
| `.github/workflows/daily-content.yml` | 云端每天 09:00 跑第 1–3 步，通过开 PR，不通过开 Issue | 不动 |
| `.github/workflows/publish-site.yml` | `site/` 有改动合并后，自动发布到 GitHub Pages | 不动 |

## 课上 30 分钟：在本机按步骤走一遍（不需要 API key）

在 Codex App 里打开这个文件夹，一步一步来。每一步跑完，先看它交出来的文件，再进下一步。

### 第 0 步 · 写记忆（5 分钟）

填 `memory/brand.md`。没有自己生意的，把 `practice/brand-practice.md` 的内容复制进去（一家卖「澳洲小企业 BAS 申报清单」订阅的一人公司）。再把 `memory/sources.md` 换成你行业的信息源。

> **对 Codex 说：** 读 memory/ 下的文件，告诉我哪里写得太空泛，会让后面写出来的东西像谁都能写的。只提问题，不要替我编内容。

### 第 1 步 · 话题调查（7 分钟）

> **对 Codex 说：** 今天是（今天日期）。按 AGENTS.md，执行 rules/1-research.md。

看 `topics/<今天>.md`：**排序你同意吗？** 不同意，改的是 `rules/1-research.md` 里的权重，然后再跑一次。

### 第 2 步 · 生成（8 分钟）

> **对 Codex 说：** 今天是（今天日期）。按 AGENTS.md，执行 rules/2-write.md。

会得到三个文件：
- `drafts/wechat/…md`：公众号文章
- `drafts/wechat/…html`：排好版的公众号稿。用浏览器打开，全选复制，粘贴到公众号编辑器里看效果
- `site/…html`：网页版本，用浏览器打开看

### 第 3 步 · Eval（5 分钟）

> **对 Codex 说：** 今天是（今天日期）。按 AGENTS.md，执行 rules/3-eval.md。

看 `evals/<今天>.md`：总分多少、哪一项扣分、理由具体到哪一句。

**弄坏它：** 在文章里手动加一句「保证你不会被罚款」，再跑一次 Eval。「不踩红线」应该是 0 分，结论是不通过，回答第一行是 `needs-human`。

### 第 4 步 · 发布（5 分钟，有 GitHub 账号的同学）

> **对 Codex 说：** 帮我把这个文件夹建成一个新的私有 GitHub 仓库，默认分支叫 main，先把 memory/ rules/ AGENTS.md 推上去；然后新建一个分支，把今天的 topics、drafts、evals、site 提交上去，开一个 Pull Request。

去 GitHub 打开这个 PR，点 **Files changed** 看它改了什么，再点 **Merge**。这一下就是你的批准。

## 课后：让它每天自己跑（云端）

1. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。之后 `site/` 一合并，网页就自动上线。
2. **Settings → Actions → General → Workflow permissions**：选 **Read and write permissions**，并勾上 **Allow GitHub Actions to create and approve pull requests**。
3. **Settings → Secrets and variables → Actions** 加 `OPENAI_API_KEY`。云端跑按 API 用量计费，先在 OpenAI 后台给这个 key 设每月用量上限。
4. Actions → **每日内容** → Run workflow，先手动跑一次。之后它每天 09:00 自己跑：
   - Eval 通过 → 开一个 PR，你 Merge，网页就上线；公众号稿复制粘贴进编辑器，你点群发
   - Eval 不通过，或者今天没有值得写的 → 开一个 Issue 告诉你为什么
5. 每篇发布 3 天后，把阅读、收藏、咨询数写进 `memory/learnings.md`（一行一篇），下一次话题调查会先读它。

## 规则

- 每一步回答的第一行都是状态：`done` / `skipped` / `needs-human`。
- **宁可交回一句「我没做，因为 X」，也不要交回一个猜着做完的结果。**
- 记忆里没写的，Agent 就是不知道，不许编。
- 对外的一切都等你在 PR 里点 Merge。公众号最后一步由你粘贴、你群发；想自动进公众号草稿箱，要用公众号开发接口，需要账号有对应权限。
- API key 只放在 GitHub Secrets 里。

## 知道一下

- GitHub 的定时用 UTC 时间，只在默认分支上跑，高峰期可能晚几分钟。
- 用仓库自带令牌推送的提交，不会再触发新的工作流，所以「每日内容」不会自己触发自己。
- 云端的联网搜索（`--search`）第一次请先手动 Run workflow 确认能搜到；如果搜不到，第 1 步会交 `needs-human`，不会编题目。
