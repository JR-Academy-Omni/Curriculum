# W2 · 四条 Agent 路线资料包（讲师现场用）

> 用途：补 `W2_RUNSHEET.md` §8 标记的硬缺口 —— 14:30-14:50「四条 agent 路线现场选型」讲师要能当场回答「选哪条、多少钱、我的电脑能跑吗」。
> 查询日期：**2026-07-29**（澳东时间）。所有价格随时会变，**开课前 48 小时讲师必须自己重新点一遍官网**。
> 币种：官方页全部是 **USD**。汇率参考 1 USD ≈ **1.43 AUD**（[Wise USD→AUD 历史页](https://wise.com/au/currency-converter/usd-to-aud-rate/history)，2026-07-28 区间 1.4237–1.4358）。**现场报数字建议直接报 USD 原价 + 「大概乘 1.4 是澳币」**，不要报一个精确澳币数。

## 0. 来源可靠性分级（本文件每条数据都带这个标记）

| 标记 | 含义 |
|---|---|
| 🟢 **官方一手** | 直接抓到厂商官网/官方 docs 原文 |
| 🟡 **官方页但摘要** | 抓到的是官方域名页面，但内容经过摘要，数字可能有偏差，讲师需二次点开确认 |
| 🟠 **第三方** | 官网抓取被 403/429 挡掉，用的是第三方汇总站。**不要在课上当权威口径报** |
| 🔵 **JR 内部 repo** | 我们自己的课程/PRD 文档，是我们自己的教学口径 |
| ⛔ **未查到** | 查不到，讲师需自行验证，**不许现场编** |

---

## 1. 四条路线 + DeepRouter 总对照表

| | **Hermes Agent** | **龙虾 / OpenClaw** | **Codex（OpenAI）** | **Claude Code（Anthropic）** | **DeepRouter（自研）** |
|---|---|---|---|---|---|
| **它是什么** | Nous Research 出的开源自进化 agent，常驻你电脑/服务器，从 IM 里派活 🟢 | OpenClaw Foundation（非营利）的开源本地 agent，25+ 消息平台网关 🟢 | OpenAI 的编码 agent，跟 ChatGPT 订阅打通，有 CLI / IDE / web / 桌面 / 云五个入口 🟢 | Anthropic 的终端 agent，也有桌面 App（不用终端也能用）🟢 | 我们自己的多模型 API 网关，一个 key 调 20+ 模型 🔵 |
| **读邮件 / 日历** | ✅ 官方 Google Workspace skill（Gmail/Calendar/Drive/Sheets/Docs，OAuth2）；只要邮件可用 himalaya skill + Gmail App Password 🟠（搜索结果指向官方 docs 页，未逐字抓取） | ✅ 官方文档列 Gmail Pub/Sub 集成 + MCP；JR 课程里 W2 就在接邮箱/日历/CRM/Notion 🟢🔵 | 通过 ChatGPT 的 connectors / plugins 走，Codex 本体是编码 agent ⛔（Gmail/Calendar connector 在 Codex 里的具体可用性未在官方页核到） | 通过 MCP connectors（claude.ai integrations）走；Routines 默认把你已连的 connector 全带上 🟢。具体 Gmail/Calendar connector ⛔ 未逐一核实 | ❌ 不是 agent，是模型网关，本身不接邮箱 🔵 |
| **长期记忆** | ✅ 核心卖点：持久记忆 + 自动把解法写成 skill；FTS5 会话检索 + LLM 摘要 🟢。存储路径 ⛔ 官方站未标 | ✅ 本地 workspace `~/.openclaw/workspace`，skill 存 `workspace/skills/<skill>/SKILL.md`，配置 `~/.openclaw/openclaw.json` 🟢 | 会话/项目上下文 + skills；跨会话长期记忆机制 ⛔ 未在官方页核到 | CLAUDE.md + skills + session resume；跨会话「记住你」不是产品化的长期记忆 🟢（推断自 docs，讲师按「靠文件不是靠记忆」讲更稳） | — |
| **定时自动跑** | ✅ 自然语言排程，通过 gateway 无人值守跑（日报/备份/简报）🟢 | ✅ 原生 cron + webhooks 🟢；daemon 常驻 | ✅ Automations/Scheduled tasks：web 侧在**云端**跑；桌面 App 接本地项目的任务要**电脑开着 + App 开着** 🟡 | ✅ 三档：**Routines**（Anthropic 云端跑，笔记本可以关机，最小间隔 1 小时，research preview）/ **Desktop scheduled tasks**（本机，要开机）/ **`/loop`**（会话内，7 天自动过期）🟢 | ❌ |
| **软件本体价格** | 免费，MIT 🟢 | 免费，MIT 🟢 | 含在 ChatGPT 订阅里（Free 也能用基础）🟢 | **不含在 Free 计划**，要 Pro/Max/Team/Enterprise/Console 账号 🟢 | 未上线 🔵 |
| **月费（USD，2026-07-29）** | 软件 $0 + 模型钱。Nous Portal 官方档位名 = Free / Plus / Super / Ultra 🟢；价格 Plus $20（含 $22 额度）/ Super $100（$110）/ Ultra $200（$220）🟠 **官方 pricing 页 429 抓不到，讲师必须自己点** | 软件 $0 + 模型钱。**JR 自己的教学口径**：4h workshop 「月均几到十几美元」；4 周 bootcamp 「10-30 美元/月」🔵 | Free $0 / Go $8 / Plus $20 / Pro $100（5x）或 $200（20x）/ Business $20 每人每月（年付，月付 $25）/ Enterprise 定制 🟡（[learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing)，OpenAI 官方域名） | Pro $20 月付 / $17 年付折算；Max 5x $100；Max 20x $200；Team standard $20 年付 / $25 月付（含 Claude Code + Cowork）；Team premium $100 / $125 🟡（[claude.com/pricing](https://claude.com/pricing)） | ⛔ 未定价。BP 里写「会员月费 ¥29 / ¥99 / ¥299 三档（**待验证价格点**）」🔵 —— **不许对学员报这个数** |
| **API 消耗区间** | 走你选的 provider，按 token；Portal 订阅自带额度 🟢 | 走你选的 provider（Anthropic/OpenAI/Gemini/xAI/OpenRouter/Copilot/MiniMax，或任何 OpenAI/Anthropic 兼容端点）🟢 | API 价（每百万 token）：gpt-5.6-sol $5 in / $30 out，terra $2.5 / $15，luna $1 / $6，gpt-5.3-codex $1.75 / $14 🟡（[developers.openai.com/api/docs/pricing](https://developers.openai.com/api/docs/pricing)）。订阅内超额靠 credits：Sol 125 credits/百万输入、750/百万输出 🟡，**credit 兑美元的价格 ⛔ 未查到（官方 rate card 403）** | 官方 docs 原话：企业部署平均 **$13/开发者/活跃日**、**$150-250/开发者/月**，90% 用户低于 $30/活跃日 🟢（[code.claude.com/docs/en/costs](https://code.claude.com/docs/en/costs)）。⚠️ 这是**企业全职写代码**的量，一人创业者远低于此。模型单价 Opus 5 $5/$25、Sonnet 5 促销 $2/$10（9 月 1 日起 $3/$15）🟠 | 商业模式 = 上游价加 5%-20% 卖 🔵 |
| **免费额度** | Portal 有 Free 档 + 按量充值起 $10（1:1 抵扣）🟠 | 本体免费；模型侧看你选谁（JR 课程口径：Gemini 免费额度最友好，OpenAI 要充 $5 起步）🔵 | ChatGPT Free 档能用 Codex 做基础任务 🟡 | ❌ Free 计划不含 Claude Code 🟢 | ⛔ |
| **怎么获取 / 装机** | `curl -fsSL https://hermes-agent.nousresearch.com/install.sh \| bash`（Linux/macOS/WSL2/Termux）；Windows PowerShell `iex (irm .../install.ps1)` 🟢 | `curl -fsSL https://openclaw.ai/install.sh \| bash` / Windows `iwr -useb https://openclaw.ai/install.ps1 \| iex` / `npm install -g openclaw@latest`，然后 `openclaw onboard --install-daemon` 🟢 | `npm install -g @openai/codex` 或 `brew install --cask codex`，或下 GitHub Release 二进制；登录选「Sign in with ChatGPT」🟢 | `curl -fsSL https://claude.ai/install.sh \| bash`（mac/Linux/WSL）/ PowerShell `irm https://claude.ai/install.ps1 \| iex` / `brew install --cask claude-code` / `winget install Anthropic.ClaudeCode` 🟢 | ✅ **<https://deeprouter.co>**（`.co` 不是 `.ai`）站点是活的，**邮箱可自助注册**（需邮箱验证，无第三方登录）。API base `api.deeprouter.co`，25 个模型 🟢 |
| **要 waitlist / 邀请码吗** | 否 🟢 | 否 🟢 | 否，有 ChatGPT 账号即可 🟢 | 否，但**必须有付费账号** 🟢 | ⚠️ 事实上是「等我们发额度」，见 §4 |
| **平台支持** | macOS 12+ / Windows 10-11 / Linux；官方说 Windows 安装器自带 Python 3.11 + Node + ripgrep + ffmpeg + 便携 Git Bash，**不需要管理员权限** 🟢 | 官方：macOS / Linux / Windows（有 Windows Hub 伴侣 App）🟢 ⚠️ **但 JR 自己的课程口径是「原生 Windows 跑不了 OpenClaw，必须装 WSL2」，且明令禁止 PowerShell 路径、禁 Bun、Node ≥ 22** 🔵 —— **两边冲突，见 §4 必验清单** | Mac（Apple Silicon + x86_64）/ Linux（x64+arm64）/ Windows 均有官方二进制 🟢。Windows 是否需要 WSL ⛔ 官方 docs 有 "Windows sandbox" 和 "WSL" 章节但未核到结论 | macOS 13+ / Windows 10 1809+ / Ubuntu 20.04+ / Debian 10+ / Alpine 3.19+；4GB+ RAM。**Windows 原生可跑**（Git for Windows 可选，装了才有 Bash 工具）；WSL2 只在需要 sandboxing 时必须 🟢 | — |
| **上手难度（完全不写代码的人）** | 中。要开终端，但 Windows 安装器免管理员权限这点对公司电脑友好 🟢 | 中偏高。JR 三门课的做法是 **Quest 模式 AI 小花 1v1 + 人类 Tutor 兜底**，专门防三个坑：Win 没装 WSL2 / Node < 22 / 误用 Bun 🔵 | 中。装完「Sign in with ChatGPT」浏览器点一下就登录，不用配 API key 🟢 | **四条里最低**。有官方桌面 App，官方 docs 原话是让你「不用终端也能用 Claude Code」；装机一条命令，Windows 不需要管理员权限 🟢 | — |
| **数据去哪（学员必问）** | 本机跑；模型调用去你选的 provider（Nous Portal / OpenRouter / OpenAI / 自建端点）🟢 | 本机跑，workspace + skill 都是本地 markdown；模型调用去你选的 provider 🟢 —— 这是它对律师/会计/医疗的核心卖点 | 本地任务在你机器上跑，云端任务在 OpenAI 托管环境；个人 workspace **训练开关默认开**，要去 Settings → Data Controls 关；Codex 另有独立的 "full environments" 训练开关；滥用监控保留 30 天，ZDR 只有 Enterprise 有 🟠（官方 help 页 403，来自搜索摘要） | 调用走 Anthropic。**消费者条款（Free/Pro/Max）**：打开「Help improve Claude」= 数据用于训练且留存 **5 年**；关掉 = **30 天**、不训练。Team/Enterprise/API/Bedrock/Vertex 走商业条款，**不适用** 🟢（[anthropic.com/news/updates-to-our-consumer-terms](https://www.anthropic.com/news/updates-to-our-consumer-terms)，2025-08 公告） | 数据经我们网关转发到上游 🔵 |
| **适合谁：完全不写代码** | ⚠️ 能装，但生态太新、JR 内部没有实战积累，卡住没人兜底 | ⚠️ 装机有坑，但我们有三门课 + Quest + Tutor 的成熟兜底 | ✅ 已经买了 ChatGPT 的人，登录零摩擦 | ✅ **最推荐**（桌面 App + 一条命令 + Windows 原生） |
| **适合谁：会一点** | ✅ 想在手机 IM 里随时派活、想要「越用越懂你」 | ✅ 数据敏感行业（律师/会计/医疗）+ 想跨 21 个 IM 平台 | ✅ 任务偏写代码 / 已有 ChatGPT 订阅不想再付一份 | ✅ 要它连续维护一个真实项目 |
| **适合谁：工程师** | ✅ 6 种终端后端（local/Docker/SSH/Daytona/Singularity/Modal），能扔上服务器做团队 brain | ✅ 完全开源可魔改，不锁模型商 | ✅ 跟 IDE / CI 打通 | ✅ agentic 能力最强 + 云端 Routines + GitHub 触发 |

---

## 2. 「定时自动跑」这一栏要单独讲清楚（W2 ③ 的命门）

W2 现场第三段是「一起搭 Agent Schedule，让它在你睡觉的时候干活」。四条路线在这件事上**根本不是一个机制**，选错了周末那 3 条任务跑不起来：

| 路线 | 你睡觉时它靠什么醒着 | 电脑必须开着吗 | 最小间隔 |
|---|---|---|---|
| **Claude Code · Routines** | Anthropic 云端跑 🟢 | **不用**（官方原话：laptop closed 也继续） | 1 小时 |
| **Claude Code · Desktop 定时任务** | 你的机器 | 要 | 1 分钟 |
| **Claude Code · `/loop`** | 当前会话内 | 要，且会话要开着，7 天自动过期 | 1 分钟 |
| **Codex · web automations** | OpenAI 云端 🟡 | 不用 | 支持 RRULE 自定义 |
| **Codex · 桌面 App 接本地项目** | 你的机器 | 要（官方原话：keep the computer on and the app running） | 同上 |
| **OpenClaw** | 本机/服务器 daemon 常驻 🟢 | 要（除非部署到 VPS） | cron |
| **Hermes** | gateway 常驻，可跑在 VPS/Modal/Daytona 🟢 | 要（同上） | 自然语言排程 |

**现场一句话**：想要「合上笔记本它还在跑」，四条里**只有 Claude Code 的 Routines 和 Codex 的 web automations 是开箱即用的云端**；OpenClaw / Hermes 要么电脑别关，要么你得会往 VPS 上部署。

> ⚠️ Routines 是 **research preview**，且有「每账号每日 run 上限」。上课当天必须确认还开着、上限是多少（页面在 claude.ai/code/routines）🟢。

---

## 3. 讲师现场会被问到的 10 个问题 + 答案

**Q1「一个月到底多少钱？给我一个数。」**
> 分两块：**订阅**和**烧的 token**。Claude Code 走订阅 Pro **$20 美金/月**（约 AU$29），基本不用另付 token；Codex 走 ChatGPT Plus **$20 美金/月**，超了要买 credits。OpenClaw 和 Hermes 软件免费，但你自己付模型钱——我们自己 4 周 OpenClaw bootcamp 学员的真实区间是 **10-30 美金/月**。
> 🚨 讲师注意：**不要拿 Anthropic 文档里 "$150-250/开发者/月" 那个数吓人**，那是企业全职工程师、用 API 计费的量，跟一人创业者的订阅制不是一回事。

**Q2「我要多买一份订阅吗？我已经有 ChatGPT 了。」**
> 已经有 ChatGPT Plus 的，Codex 直接就能用，**不用再花一分钱**（Free/Go/Plus/Pro/Business/Enterprise 都含 Codex 🟡）。想用 Claude Code 必须另开 Anthropic 的付费账号——**Claude 的免费计划不含 Claude Code** 🟢，这是硬门槛。

**Q3「我的公司电脑装不了东西，怎么办？」**
> 先按 W2 课前清单自测一次能不能装。装不了的话：① Hermes 的 Windows 安装器官方说**不需要管理员权限** 🟢，是四条里最可能绕过公司管控的；② Claude Code 的 Windows 安装官方也说**不用 Administrator** 🟢；③ 实在不行**用私人电脑**，或先跟同桌共用一台把「工作说明书」写完（W2_RUNSHEET §7 的既定兜底）。

**Q4「Windows 能直接跑吗？还是要装 WSL？」**
> - **Claude Code**：Windows 10 1809+ 原生跑 🟢，WSL2 只在你要 sandbox 时才需要。
> - **Hermes**：官方列 Windows 10/11 🟢。
> - **Codex**：官方有 Windows 二进制 🟢，是否需要 WSL ⛔ **未查到，讲师必须自己在 Win 机器上跑一遍**。
> - **OpenClaw**：⚠️ 官网说 Windows 支持（有 install.ps1 + Windows Hub App）🟢，**但我们自己三门 OpenClaw 课的口径是「原生 Windows 跑不了，必须 WSL2」，还明令禁止 PowerShell 路径** 🔵。**两个口径打架，开课前必须验一台真 Windows，给全班一个答案。**

**Q5「它能读我的 Gmail 和日历吗？我的邮件会不会被拿去训练？」**
> 能读——OpenClaw 有 Gmail Pub/Sub + MCP 🟢，Hermes 有官方 Google Workspace skill（Gmail/Calendar/Drive/Sheets/Docs）🟠，Claude Code 走 MCP connectors 🟢，Codex 走 ChatGPT connectors 🟡。
> 训练问题分两种：
> - **本地跑的（OpenClaw / Hermes）**：邮件正文进的是你自己的电脑，只有你发给模型的那部分请求出去 🟢。
> - **Claude（Free/Pro/Max）**：默认取决于「Help improve Claude」开关。**开着 = 用于训练 + 留存 5 年；关掉 = 30 天不训练**。Team/Enterprise/API 走商业条款，不训练 🟢。**现场建议每个人当场去 Privacy Settings 关掉。**
> - **ChatGPT 个人账号**：训练默认开，Settings → Data Controls → 「Improve the model for everyone」关掉；Codex 还有一个独立的 "full environments" 开关要单独关 🟠。

**Q6「合上笔记本，它还会在周三早上 7 点跑吗？」**
> 只有 **Claude Code 的 Routines**（Anthropic 云端，最小 1 小时间隔）和 **Codex 的 web automations** 是真云端 🟢🟡。OpenClaw / Hermes 是本机 daemon——**电脑关了就不跑**，除非你把它部署到 VPS（这不是 W2 现场能教完的）。

**Q7「OpenClaw 免费，那是不是最省钱？」**
> 软件免费≠总成本低。你要自己付模型 API，用得凶反而比 $20 订阅贵。我们自己 bootcamp 学员的实测区间是 **10-30 美金/月** 🔵。OpenClaw 真正的卖点不是省钱，是**数据不出你的电脑 + 不锁死一家模型商**。另外它也支持用订阅账号 OAuth 登录（Anthropic / OpenAI / GitHub Copilot）🟢，不一定非要 API key。

**Q8「我选错了怎么办？」**
> 不是死刑。W6 有一节 `L25` 专门讲切换和双 agent 配合，而且我们的既有口径是：**80% 的 OPC 学员最后是两个一起用**（一个干桌面 GUI 活，一个干合规敏感 + IM 活）🔵。今天的目标是**跑起来一个**，不是选得完美。

**Q9「DeepRouter 是什么？pre-work 里说更省，我去哪注册？」**

> ✅ **网址是 <https://deeprouter.co>（`.co`，不是 `.ai`）。站点是活的，学员可以自助注册。**
>
> 🚨 **2026-07-29 更正**：本文件此前写「deeprouter.ai 是 Launching Soon 邮件收集页、学员自助注册不到」，**这是查错了域名得出的错误结论，三处都错**（域名错、站点状态错、注册可用性错）。`deeprouter.ai` 与本产品无关。**以下为对 `deeprouter.co` 的实测结果。**

| 项 | 实测(2026-07-29) | 来源 |
|---|---|---|
| 站点 | ✅ 活站,React SPA。`/` `/pricing` `/login` `/signup` `/models` `/dashboard` 全部 **200** | curl 🟢 |
| 定位 | 站点 meta 自述:**"multi-tenant LLM gateway for Airbotix and internal services"** | 首页 HTML 🟢 |
| **自助注册** | ✅ **开放**。`POST /api/user/register` 返回的是**密码长度校验错误**,不是「注册已关闭」→ 端点正常受理 | 空 body 探测 🟢 |
| 邮箱验证 | ✅ **必须**(`email_verification: true`) | `/api/status` 🟢 |
| 第三方登录 | ❌ 全关(GitHub / 微信 / Discord / Telegram / OIDC / passkey 均 false)→ **只能邮箱注册** | `/api/status` 🟢 |
| API base | `https://api.deeprouter.co` | `/api/status` 🟢 |
| 可用模型 | **25 个**:Claude Opus 4.6 / 4.7 / 4.8(含 low/medium/high/xhigh/max/thinking 各档)、GPT-5 / 5.1-codex / 5.3-codex / 5.4 / 5.4-pro、ElevenLabs TTS、图像 | `/api/pricing` 🟢 |
| 计价显示 | **USD**(`quota_display_type: USD`) | `/api/status` 🟢 |
| 每日签到送额度 | ✅ 开着(`checkin_enabled: true`) | `/api/status` 🟢 |
| 底层 | new-api 系网关(报错体 `new_api_error`;`docs_link` 指向 `docs.newapi.pro`) | 🟢 |

> ⚠️ **仍未核实的两件事(需要登录态才能看,我没建账号)**:
> 1. **充值档位和最低充值金额** —— `/api/status` 里有 `stripe_unit_price: 8`、`quota_per_unit: 500000`,但**这两个数怎么换算成学员实付,我没验证,不要在台上推算**。
> 2. **新用户注册是否送初始额度**(`quota_for_new_user` 未在公开 status 里返回)。
>
> **现场话术(已可以正面回答)**:「DeepRouter 是我们自己做的模型网关,**deeprouter.co**,邮箱就能注册,一个 key 打通 Claude Opus 4.8 和 GPT-5 全家。**具体充多少怎么算,以站上 /pricing 页面为准**——别报我嘴上的数。」
> 🚨 **依然不要报 ¥29/¥99/¥299** —— 那是 `DeepRouter-BP.md` 里标着「待验证」的**假设值**,和线上真实计价没有对应关系。

**Q10「Hermes 这么新，靠谱吗？」**
> 它是 Nous Research 出的开源项目，MIT 协议，官方站显示版本 v0.19.0 🟢，官方文档齐（Google Workspace skill、MCP、cron、6 种终端后端都有页）。但**我们内部没有实战积累**——TA 手上没有踩坑清单。想选它的学员要接受「卡住时助教也是第一次见」。

---

## 4. 查不到 / 需要讲师亲自验证的清单（开课前必做）

| # | 事项 | 为什么必须验 | 怎么验 | 状态 |
|---|---|---|---|---|
| 1 | **OpenClaw 在原生 Windows 到底能不能跑** | 官网说能（install.ps1 + Windows Hub App）🟢 vs JR 课程口径说必须 WSL2 🔵，**两个真相源打架**。现场给错答案 = Win 学员当场卡死 | 借一台真 Windows 机器，原生 PowerShell 跑一次 install.ps1 + `openclaw onboard --install-daemon` | ⛔ 未验证 |
| 2 | **Codex 在 Windows 要不要 WSL** | 官方 docs 有 "Windows sandbox" / "WSL" 章节但没抓到结论 | 同上，Win 机器 `npm install -g @openai/codex` 跑一次 | ⛔ 未查到 |
| 3 | **Nous Portal 四档真实价格** | 官方 pricing 页 429 抓不到；$20/$100/$200 + $22/$110/$220 额度是第三方数 🟠 | 打开 portal.nousresearch.com/pricing 截图存档 | ⛔ 待核实 |
| 4 | **Codex credit 兑美元的价格** | 官方 rate card 403；只查到 credit 数（Sol 125/百万输入、750/百万输出），换算不出美元 | 登录 ChatGPT → Codex Settings → Usage 面板看购买价 | ⛔ 未查到 |
| 5 | **ChatGPT 各档月费的官网原页** | 我们拿到的是 OpenAI 官方域名的 Codex pricing 文档 🟡；openai.com/chatgpt/pricing 和 help.openai.com 全部 403 | 用浏览器打开 chatgpt.com/pricing 截图 | 🟡 需二次确认 |
| 6 | **Claude 免费档到底含不含 Claude Code** | setup 文档明确说「Free 计划不含，需要 Pro/Max/Team/Enterprise/Console」🟢，但 pricing 页抓取里 Free 行显示 "Includes Claude Code"，**读数有歧义** | 打开 claude.com/pricing 亲眼看 Free 那一列 | 🟡 以 setup 文档为准 |
| 7 | **Claude Code Routines 的每日 run 上限 + 是否还在 preview** | Routines 是 research preview，limits「may change」🟢。这是「合上笔记本还能跑」的唯一卖点，塌了整个推荐就塌了 | claude.ai/code/routines 看当前配额 | ⛔ 未验证 |
| 8 | **Hermes / Claude Code / Codex 各自的 Gmail + Calendar connector 现况** | W2 ② 就是「接权限」，接不上现场直接崩 | 每条路线各接一次 Gmail + Calendar，记录耗时和卡点 | ⛔ 未验证 |
| 9 | **DeepRouter 对学员的供给方案** | ~~页面是 Launching Soon~~ → **2026-07-29 更正：站点是活的、注册开放，原结论查错域名**。阻塞降级：不再是「会穿帮」，只剩商业选择 | Lightman 拍板：让学员自己注册充值 / 还是课程统一发额度（两者都可行了） | 🟡 待拍板（**已不阻塞 pre-work**） |
| 10 | **四条路线各自的装机耗时 + 卡点** | `W2_RUNSHEET.md` §"课前 T-7" 已经列为讲师必做，至今没做 | 讲师自己四条全装一遍，记装机耗时 / 要不要付费 / 卡在哪一步 / Win 能不能跑 | ⛔ 未做 |
| 11 | **每个 TA 认领一条路线** | runsheet 要求「不要 6 个 TA 都只会 Claude Code」 | 排班表按路线分工 | ⛔ 未做 |

---

## 5. 默认推荐哪条 —— 建议，**待 Lightman 拍板**

> 判据按 W2_RUNSHEET §8 给的三条：① 不写代码的人能不能自己装 ② 成本 ③ 能不能定时跑。

### 建议默认路线：**Claude Code**

| 判据 | Claude Code 的表现 |
|---|---|
| **不写代码的人能自己装** | ✅ 最优。有官方桌面 App（官方 docs 明说「不用终端也能用」），命令行也是一条命令；**Windows 原生可跑、不需要管理员权限、不需要 WSL2** —— 直接消掉 W2 runsheet 标记的「本周最大隐形坑」 |
| **成本** | ✅ 可预期。Pro **$20 USD/月**（≈AU$29）封顶，不用配 API key、不会月底账单爆炸。对「第一次给 AI 花钱」的学员心理门槛最低 |
| **能定时跑** | ✅ 唯一开箱即用的云端排程（Routines，Anthropic 基础设施，笔记本合上照跑）。W2 ③ 「你睡觉时它干活」的卧槽点靠它才成立 |
| **风险** | ⚠️ Routines 是 research preview，有每日 run 上限；⚠️ Free 计划不含，必须付费；⚠️ Pro/Max 默认训练开关要现场教学员关 |

### 另外三条的定位（不是备胎，是分流）

- **Codex** —— 给「已经买了 ChatGPT 的人」。零增量成本、浏览器一点就登录。任务偏写代码的首选。
- **OpenClaw（龙虾）** —— 给**数据敏感行业**（律师/会计/医疗）和想在 21 个 IM 平台派活的人。这也是我们自己有三门课、有 Quest+Tutor 兜底、TA 最熟的一条。**装机门槛最高，别给完全不碰终端的人当默认。**
- **Hermes** —— 给想要「跨设备 + 越用越懂我 + 以后升级成团队 brain」的人。生态最新、官方文档齐，但**我们内部零实战**，卡住没人兜底，不适合当默认。

### 需要 Lightman 拍板的两件事

1. **默认路线定 Claude Code，跟 W1 的默认（Claude Cowork）是一条线**——好处是学员 W1→W2 心智连续、都在 Anthropic 生态；坏处是我们自己有 OpenClaw 课程线，默认不推自家生态**是不是想要的商业口径**。这条我给不了答案。
2. **DeepRouter 在 pre-work 里怎么处理**。~~现在这条不动，W1 就会有学员去 deeprouter.ai 扑空。~~ **2026-07-29 更正：不会扑空** —— 正确网址是 `deeprouter.co`，站点活着、注册开放。**唯一必须做的动作是把 pre-work 里的网址核对成 `.co`**；至于「学员自付 vs 课程发额度」，现在是纯商业选择，不再是上线阻塞。

---

## 6. 来源清单

**官方一手 🟢**
- OpenClaw：<https://github.com/openclaw/openclaw> · <https://docs.openclaw.ai/>（2026-07-29）
- Hermes Agent：<https://github.com/NousResearch/hermes-agent> · <https://hermes-agent.nousresearch.com/>（2026-07-29）
- Codex CLI：<https://github.com/openai/codex>（2026-07-29）
- Codex/ChatGPT 定价与用量：<https://learn.chatgpt.com/docs/pricing> 🟡 · 排程 <https://learn.chatgpt.com/docs/automations> 🟡（2026-07-29）
- OpenAI API 价格：<https://developers.openai.com/api/docs/pricing> 🟡（2026-07-29）
- Claude Code 安装与系统要求：<https://code.claude.com/docs/en/setup>（2026-07-29）
- Claude Code 成本：<https://code.claude.com/docs/en/costs>（2026-07-29）
- Claude Code 排程：<https://code.claude.com/docs/en/scheduled-tasks> · <https://code.claude.com/docs/en/routines>（2026-07-29）
- Claude 订阅价：<https://claude.com/pricing> 🟡（2026-07-29）
- Anthropic 消费者条款/训练与留存：<https://www.anthropic.com/news/updates-to-our-consumer-terms>（公告 2025-08，2026-07-29 查阅）
- DeepRouter 站点实测：<https://deeprouter.co> 🟢（2026-07-29 curl 实测：`/` `/pricing` `/login` `/signup` `/models` `/dashboard` 均 200；`/api/status` 与 `/api/pricing` 为公开端点）
- ⚠️ <https://deeprouter.ai> 是**无关域名**，此前误当作本产品官网并据此得出「Launching Soon / 注册不到」的错误结论，已全文更正

**JR 内部 repo 🔵**
- `curriculum/openclaw-workshop/public/outline.json`（费用透明说、WSL2 要求、API key 三选一）
- `curriculum/openclaw-bootcamp/public/outline.json`（月成本 10-30 美元、Quest guardrail：禁 PowerShell / Node≥22 / 禁 Bun）
- `curriculum/openclaw-fullday-workshop/PRD.md`（零代码老板的装机兜底方案）
- `deeprouter-brand/DeepRouter-BP.md` §4.3（¥29/¥99/¥299 待验证价格点）· `DeepRouter-PRD.md`（Draft v0.1，**其中「域名待注册」已过时——`deeprouter.co` 已上线运行**，JR tenant Week 12 上线）
- `curriculum/ai-solo-founder-bootcamp/FOUNDER_MATCHING_PRD.md` §13（DeepRouter 额度供给待拍板）
- `curriculum/ai-solo-founder-bootcamp/W2_RUNSHEET.md` §8（本文件要填的缺口清单）

**第三方 🟠（不要在课上当权威口径报）**
- Nous Portal 档位价格：多个第三方汇总站（官方 pricing 页 429）
- Anthropic API 模型单价、ChatGPT 各档月费的交叉验证：第三方 2026 定价汇总站
- ChatGPT/Codex 数据控制开关细节：搜索摘要（help.openai.com 全站 403）
- 汇率：<https://wise.com/au/currency-converter/usd-to-aud-rate/history>
