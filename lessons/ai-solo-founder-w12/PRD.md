---
title: OPC 创业营 W12 · 让生意自己运转 — 用 Codex 搭会接力的自动化 · 课件与课程包 PRD
status: eval
owner: @lightman
priority: high
---

# OPC 创业营 W12 · 让生意自己运转 · PRD

## SoT 与范围

- 本次 SoT = 本文件。2026-11-08 owner 改定方向：去掉开场学员分享；不讲 n8n / Zapier 这类只把 App 串起来、每一步还要人判断的伪自动化；整节课改成用 Codex 搭一条有前后依赖、会接力的深度自动化，分 Agent 原生与代码上云两种实现。原 runsheet（`ai-solo-founder-bootcamp/W8-W15_RUNSHEETS.md` W12 段：Notion ERP / 客服分流 / 经营看板）不再作为本节内容，生产课节描述与知识点待同步（见「待办」）。
- 生产课节：`[W12] 让生意自己运转 · Autopilot`，2026-11-08 14:30 墨尔本时间，讲师 Lightman Wang，180 min。按日期是第 15 节现场课；下周 11-15 是 W14 Pitch & BP。
- 交付两件：① 网页 Talk Deck（React SlideEngine，沿用 OPC W11 课件视觉）② 学生课程包 `starter/opc-autopilot/`（现场实验用的仓库模板）。
- 发布范围：Local / 未部署，未 commit、未 push、未触发 CI。

## 一句话定位

真正的自动化：每一步都会判断、会产出，下一步接着用上一步的结果；今天的产出还会影响明天的选择。

## 学习目标（课堂硬产物）

1. 能把自己的琐事对上六种形态之一，说清它被什么触发、交出什么、怎么失败。
2. 练习 30 分钟：从 6 个并列任务里挑 1 个跑通，有产出、有三档回执，并亲手弄坏一次。
3. 给自己的生意写一份自动化任务书（`WORKSHEET.md`：触发、上游、完成判据、边界、预答、出口、重跑）。
4. 能说清三种实现方式的取舍：Codex App Automations（订阅、电脑要开着）/ 代码上云 / 代码管流程 + Agent 管判断。

## 节奏表（180 min，详见 RUNSHEET.md）

讲解 + 讲师演示为主，只有一次 30 分钟练习。

| 时间 | 页 | 环节 |
|---|---|---|
| 14:30–14:45 | 1–3 | 开场：天花板、真自动化 vs 伪自动化 |
| 14:45–15:25 | 4–12 | 六种形态 + 审批闸（每种：触发 / 交出什么 / 怎么失败） |
| 15:25–15:55 | 13–16 | 三种实现 + 讲师演示（demo/opc-autopilot-chain） |
| 15:55–16:05 | — | 休息 |
| 16:05–16:25 | 17–19 | 它会怎么失败、铁律、重跑 |
| 16:25–16:55 | 20–21 | 练习 30 分钟：6 个并列小任务挑 1 个（starter/opc-practice） |
| 16:55–17:20 | 22 | 分享 + 给自己的生意写任务书 |
| 17:20–17:30 | 23 | 收口 + 派活 |

## 六种自动化形态（第②环节）

| 形态 | 触发 | 例子 | 推荐实现 |
|---|---|---|---|
| 定时接力 | 时间 | 09:00 选题 → 10:00 写文 → 12:00 视频脚本 | A 或 B |
| 事件触发 | 外部事件 | Stripe 新付款 → 起草上手邮件 | 需能接 webhook 的云函数 |
| 监控巡检 | 定时检查，有变化才通知 | 竞品改价、网站宕机、失败付款 | B |
| 反馈闭环 | 发布后回读数据 | 24 小时 / 7 天数据 → 下周选题权重建议 | B |
| 批量回填 | 一次性大批任务 | 100 篇旧文改英文版 / SEO 版 | 本机 Codex，分批 |
| 审批闸 | 自动做到草稿为止 | 主编审稿通过 → 你批准 → 发布 | 任何一种的最后一段 |

另讲第三种实现：代码负责定时、状态、重试，Agent（`codex exec`）只负责判断和生成。课程包就是这种结构。

## 已核实的技术事实（2026-11-08）

- Codex App 有 Automations，可按时间表跑任务；有的能回到同一对话接着做；电脑醒着、Codex 开着才运行（OpenAI Academy · Codex automations）。
- `codex exec` 是非交互模式，默认只读沙箱，`--sandbox workspace-write` 允许写文件；`--full-auto` 已不再支持（Codex 文档 · Non-interactive mode）。
- `openai/codex-action@v1` 参数：`openai-api-key` / `prompt-file` / `permission-profile` / `codex-args` / `output-file` 等，唯一输出 `final-message`；`:workspace` 权限不开命令行网络；web search 是托管工具，与命令行网络分开，`--search` 可通过 `codex-args` 传入（README）。
- **未实测**：`:workspace` + `--search` 在 Actions 里能否联网搜索；讲师课前必须用自己的仓库跑一次 01 → 04。

## 学员练习包 `starter/opc-practice/`（一次 30 分钟，6 个并列任务挑 1 个）

| # | 任务 | 类型 |
|---|---|---|
| 01 | 每日行业简报 | 定时 · 单步 |
| 02 | 竞品页面监控 | 巡检 · 有变化才报（state/ 快照） |
| 03 | 客户邮件分诊 | 事件（分三类，只起草） |
| 04 | 选题排序 + 草稿 | 小接力（第 1 名 ≥ 3.0 才写） |
| 05 | 旧内容批量改写 | 批量 · 断点续跑（progress.json） |
| 06 | 每周数据小结 | 闭环（数字可追回原始行） |

每张任务卡：目标、输入、产出、完成判据（done / skipped / needs-human）、对 Codex 说、弄坏它、设成 Automation。共用 `AGENTS.md`。`practice-data/` 给没带数据的学员用：一家卖「澳洲小企业 BAS 申报清单」订阅的一人公司的生意说明、5 封来信、5 篇旧帖子、6 周导出数据（活跃客户数已校验前后一致；税务说法只用 ATO 公开规则：GST $75,000 注册门槛、含税价 ÷ 11、季度 BAS 次月 28 日 / 10–12 月季 2 月 28 日）。课堂练习用，非真实公司数据。

## 讲师演示仓库 `demo/opc-autopilot-chain/`

接力版：brief / topic-radar → article → video → review / watch / publish-gate（APPROVED 文件）/ batch / feedback，`scripts/pipeline.py` 把关（gate / prompt / check / digest，不调用模型），`.github/workflows/autopilot.yml` 用 `openai/codex-action@v1` 定时运行。本机已测：上游缺回执或非 done 被挡、没交回执与 done 缺产物 → needs-human、未批准被挡；真实 Codex 与 Actions 端到端未测。

## 逐页规格

已制作 23 页（`src/components/slides/S01–S23`），每页讲师备注在 `src/data/notes.ts`。

## 数据纪律

- 课件不写工具价格、配额和版本号；只写能力描述，并注明以开课当天官方文档为准。
- 三档回执、六种形态、三种实现方式是本课的教学分类，不是任何工具的内置功能。
- 不出现收入承诺、学员人数或转化率。

## 待办

- [ ] 讲师课前用自己的仓库端到端跑一次 01 → 04（含 `--search`）。
- [ ] 生产课节 description / knowledge 改成新大纲（需 owner 授权后在 admin 或经 SDM 同步）。
- [ ] 课件按本大纲制作并登记 `lessons.html`、接入 `deploy.yml`。
