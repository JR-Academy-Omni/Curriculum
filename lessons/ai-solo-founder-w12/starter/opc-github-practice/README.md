# W15 练习包 · 用 GitHub 做自动化

OPC 创业营 W15 · 让生意自己运转。练习时间 **30 分钟**。

这个仓库就是你的「生意运营中心」：资料在 `docs/`，规则在 `business.md` 和 `tasks/`，自动化在 `.github/workflows/`。下面 6 个任务互相独立，**挑一个做完**就行。

| # | 任务 | 自动化类型 | GitHub 触发器 | 要不要 API key |
|---|---|---|---|---|
| 1 | 页面监控 | 巡检 · 有变化才开 Issue | 定时 schedule | **不用** |
| 2 | 资料一更新就生成目录 | 接力 · 文件一改就开工 | push + paths | **不用** |
| 3 | 每日行业简报 | 定时 · 单步 | 定时 schedule | 要 |
| 4 | Issue 收件箱 | 事件 · 来信就起草回复 | issues | 要 |
| 5 | AI 改稿，开 PR 等你批准 | 审批闸 | 手动 workflow_dispatch | 要 |
| 6 | 每周数据周报 | 闭环 · 数据回来写周报 | 定时 schedule | 要 |

没有 OpenAI API key 的同学，做 1 或 2。

## 0–5 分钟：建好仓库

1. 在 Codex App 里打开这个文件夹，对 Codex 说：

   > 帮我把这个文件夹建成一个新的私有 GitHub 仓库，默认分支叫 main，并推上去。推完告诉我仓库地址。

2. 打开仓库 → **Settings → Actions → General**，拉到最下面 Workflow permissions：
   - 选 **Read and write permissions**
   - 勾上 **Allow GitHub Actions to create and approve pull requests**（任务 5 要用）
3. 做 3–6 的同学：**Settings → Secrets and variables → Actions → New repository secret**，名字填 `OPENAI_API_KEY`。这条路按 API 用量计费，先在 OpenAI 后台给这个 key 设一个每月用量上限。
4. 用练习数据的同学：`business.md` 换成 `practice-data/business-practice.md` 的内容（一家卖「澳洲小企业 BAS 申报清单」订阅的一人公司）。有自己生意的，按 `business.md` 的提示填自己的。

## 5–25 分钟：做你选的任务

所有任务都在仓库的 **Actions** 页面看运行过程：点进一次运行，能看到每一步的输出。

### 任务 1 · 页面监控（不用 AI）

**它在做什么：** 每 6 小时把 `watch/pages.txt` 里的页面抓一次，存成快照。Git 会比较这次和上次：没变就安静，变了就开一个 Issue，里面列出改了哪几行。

1. 在 `watch/pages.txt` 里换成你要盯的页面（竞品的价格页、你自己的产品页）。
2. Actions → **1 · 页面监控** → Run workflow。第一次只建快照，不开 Issue。
3. 在 GitHub 网页上打开 `watch/snapshots/` 里的一个快照，随便改一个字，提交。
4. 再 Run 一次：它发现「页面和快照不一样」，开了一个 Issue。

**成功：** Issues 里出现「页面有变化」，正文里的 diff 能看出改了什么。

**弄坏它：** 在 `pages.txt` 里加一个打不开的网址，例如 `https://example.invalid/`。再跑一次，Issue 里应该写着「打不开」。打不开也是一种变化，要叫你。

### 任务 2 · 资料一更新就生成目录（不用 AI）

**它在做什么：** `docs/` 里的文档一被修改并推上来，就自动重新生成 `docs/INDEX.md` 目录。匠人的知识库也是这样：规范文档一推到 main，就自动进入 AI 助手的知识库。

1. 在 GitHub 网页上打开 `docs/faq.md`，点铅笔图标加一行，提交到 main。
2. 去 Actions 看：**2 · 资料一更新就生成目录** 自己跑起来了。
3. 跑完打开 `docs/INDEX.md`：最后更新日期变了。
4. 再新建一个 `docs/新文档.md`，第一行写 `# 标题`，提交。目录里多了一行。

**成功：** 你没点任何「运行」按钮，目录自己更新了。

**弄坏它：** 新建一个 `docs/note.txt` 并提交。这次**不会**触发，因为工作流只看 `.md`。触发条件写得多精确，决定了它什么时候会醒。

### 任务 3 · 每日行业简报（AI）

1. 打开 `tasks/3-daily-brief.md`，把信息源换成你的行业每天会更新的 3–5 个网址。
2. Actions → **3 · 每日行业简报** → Run workflow。
3. 跑完看 `briefs/<今天>.md`。点开每个来源核对。

**成功：** 3 件事都有来源，都写了「对我的用户意味着什么」。之后它会每天早上 8 点自己跑。

**弄坏它：** 把信息源全换成 `https://example.invalid/news`，再跑一次。运行日志里的状态行应该是 `needs-human`，并且**没有**生成简报文件。

### 任务 4 · Issue 收件箱（AI）

1. 仓库 → Issues → New issue。标题写来信主题，正文贴一封来信（`practice-data/emails/` 里有 5 封，或者用你自己的，去掉姓名电话）。
2. 等一两分钟，刷新：Issue 下面多了一条评论，是分类和回复草稿。
3. 看草稿里每句话后面的「依据」，去 `docs/` 里核对。

**成功：** 退款类的写「转人工」，使用和购买类的有草稿，每个说法都有依据。

**弄坏它：** 开一个新 Issue，贴 `emails/05.md`（问搬去新西兰还能不能用）或者问一个 `docs/` 里完全没写的问题。它应该回 `needs-human`，写清楚缺什么信息，而不是编一个答案。

### 任务 5 · AI 改稿，开 PR 等你批准（AI）

**它在做什么：** AI 不直接改你的资料。它在旁边的分支上改好，提一个 Pull Request。你看改了什么，点 Merge 才算数。

1. Actions → **5 · AI 改稿** → Run workflow，文件名填 `02.md`（或者 `old-posts/` 里的其他文件）。
2. 跑完去 Pull requests：多了一个「改稿：02.md」。
3. 点 **Files changed**，看它新写的内容。重点核对税务说法有没有被改错（例如「除以 11」）。
4. 满意就 **Merge**；不满意就 **Close**。

**成功：** 你在 PR 里看到了改动，并且是你决定了它算不算数。

**弄坏它：** 关掉 PR，然后回到 main 分支看 `rewritten/`：什么都没多。没有你的 Merge，资料一个字都没动。

### 任务 6 · 每周数据周报（AI）

1. 用练习数据的同学直接做；有自己数据的，把后台导出的周数据整理成和 `weekly.csv` 一样的列。
2. Actions → **6 · 每周数据周报** → Run workflow。
3. 跑完去 Issues：多了一个「周报」。挑一个数字，自己在 `weekly.csv` 里加一遍。

**成功：** 每个数字后面都标了来自哪一周，加减能对上。之后它会每周一早上 7:30 自己跑。

**弄坏它：** 在 GitHub 网页上编辑 `weekly.csv`，把 `2026-10-19` 那行的 active_customers 从 34 改成 40，提交，再跑一次。它应该回 `needs-human`，指出这一行前后对不上，而不是照样算出一个增长率。

## 25–30 分钟：带走

- 跑通的任务，现在已经是真的定时 / 事件自动化了，明天会自己跑。
- 打开 `任务书-WORKSHEET.md`，给**你自己的生意**写一份：哪件事、被什么触发、交出什么、什么时候交 `needs-human`。

## 规则（所有 AI 任务共用 `AGENTS.md`）

- 回答第一行必须是状态：`done` / `skipped` / `needs-human`。
- **宁可交回一句「我没做，因为 X」，也不要交回一个猜着做完的结果。**
- 不对外发布、不发邮件、不付款，对外的东西只写草稿。
- API key 只放在 GitHub Secrets 里，不写进任何文件。

## 知道一下

- GitHub 的定时用 UTC 时间；定时任务只在默认分支上跑，高峰期可能晚几分钟。
- 用仓库自带的令牌推送的提交，不会再触发新的工作流，所以任务 2 不会自己触发自己、无限循环。
- 公开仓库如果 60 天没有任何活动，定时任务会被自动停用。
