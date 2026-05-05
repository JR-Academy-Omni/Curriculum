# AI Marketing 漏斗规划（高 level）

> 最近更新：2026-05-05
> 单一真相 — 决策 + 状态 + 日志。具体内容在子目录。
> 入口请从 [`./README.md`](./README.md) 开始。

## 1. 漏斗定位

- **方向**：AI 营销全链路（W1 内容 / W2 投放+SEO+GEO / W3 私域+agent / W4 数据整合），4 周
- **业务模式**：4 个独立 ¥99/$29 引流课 + 主课三档（自学/教学/陪跑）
- **核心承诺**：4 周搭建自己的 AI 营销工具链（4 模块各跑通 1 次完整闭环 + 数据复盘报告）
  - 🚨 禁说月入/副业/接单/包就业（详见 memory `feedback_no_revenue_promise.md`）
- **目标用户**：双轨（中文站 + 英文站），具体 personas 见 PRD §1.3

## 2. 阶段状态

| # | 阶段 | 状态 | 详情 / 链接 |
|---|---|---|---|
| 1 | 主课大纲 | ✅ v0 | `public/outline.json` 64 lessons / 5 HTML 页 |
| 2 | 主课三档定型 | ✅ | [`operations/PRICING.md`](./operations/PRICING.md) |
| 3 | 4 引流课主题 | ✅ | [`intro/README.md`](./intro/README.md) — 4 主题已定 |
| 4 | 4 引流课 deliverable | ⏳ 0/24 | 各 6 件 = 24 件，见 `intro/wN/TODO.md` |
| 5 | 7 天过渡序列 | ⏳ | [`operations/HANDOFF.md`](./operations/HANDOFF.md) — 待 4 套独立 vs 共用决策 |
| 6 | 18 个新 lab 创建 | ❌ | `jr-academy-web-zh/src/config/prompt-labs/` |
| 7 | 4 个新 Quest 创建 | ❌ | 同上 |
| 8 | deploy.yml 接入 | ❌ | `.github/workflows/deploy.yml` |
| 9 | posters.html 注册 | ❌ | `curriculum/posters.html` |
| 10 | 上线后审计 | — | 待第 1 期 D7 后跑 |

## 3. 关键文档

| 文档 | 作用 |
|---|---|
| [`README.md`](./README.md) | 单一入口，文档地图 |
| [`public/outline.json`](./public/outline.json) | 主课 64 lessons 数据源 |
| [`intro/README.md`](./intro/README.md) | 4 引流课进度看板 |
| [`operations/PRICING.md`](./operations/PRICING.md) | 4 档定价 + 升级补差价 |
| [`operations/SCHEDULE.md`](./operations/SCHEDULE.md) | 16 直播排课 + 中英时差 |
| [`operations/HANDOFF.md`](./operations/HANDOFF.md) | 7 天过渡序列 |
| [`operations/SALES_PLATFORMS.md`](./operations/SALES_PLATFORMS.md) | 售卖平台对接 |
| [`operations/INSTRUCTORS.md`](./operations/INSTRUCTORS.md) | 讲师 + bio |
| `docs/prd/AI_MARKETING_BOOTCAMP_PRD.md` | PRD（项目根级） |
| `docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md` | 市场调研 |
| `docs/prd/AI_MARKETING_BOOTCAMP_PLATFORM_RESOURCES.md` | 平台资源盘点 |
| `docs/prd/AI_MARKETING_BOOTCAMP_MARKETING.md` | Marketing 文案 |

## 4. 决策日志

- 2026-05-03 ❌ 漏斗规划首版 mock（被推翻 — Claude 凭空编了三档定价 + 引流课 + 7 天序列，未与用户对齐）
- 2026-05-04 ✅ 重置 + 真跑 5 问初始化（course-funnel-architect）— 方向 D 全链路 4 周 / 业务模式 A 完整四档 / 双轨中英文 / 大纲从零创建
- 2026-05-04 ✅ 承诺红线确立 — 禁止承诺金钱/收入/订单/入职，禁用"副业"，只承诺过程/作品/技能/服务量
- 2026-05-04 ✅ 主课大纲 v0 落盘 — 64 lessons / 4 周 / outline.json + 5 HTML 页 / 18 新 lab slug 待创建
- 2026-05-04 ✅ 引流课改"4 个独立入口"模式（W1 小红书 / W2 GEO / W3 bot / W4 周报，独立可售）
- 2026-05-04 ⏸ 4-in-1 打包套装暂缓 — 第 1 期跑完看转化数据再评估
- 2026-05-05 ✅ 文档结构重构 — 拆 FUNNEL_PLAN.md 单一文件 → 多子目录（intro/ + operations/ + public/）+ 顶层 README.md 当入口；FUNNEL_PLAN.md 瘦身只留高 level 决策

## 5. 待确认 / 阻塞决策

> 这些不解决就阻塞下一步。

- [ ] **Q3 双轨走法**：① 一份课翻译 / ② 两条独立漏斗 / ③ 轻量版 ②（PRD §3.5 推荐）— 影响 tier-design / intro / handoff 是写 1 份还是 2 份
- [ ] **7 天过渡序列**：4 套独立 / 共用 / 折中（D0-D3 共用 + D4-D7 分轨）— 影响 funnel-handoff-design 工作量
- [ ] **4 引流课优先级**：全做 / 分批（先 W1+W3）/ 先 W1 单卖验证 — 影响第 1 期开课前工程量
- [ ] **澳洲 GST**：$199 / $899 / $2980 是否含 10% GST — 待法务/财务确认
- [ ] **课程目录 deploy.yml 接入**：当前 `curriculum/ai-marketing/` 已经有 outline.json + HTML，必须接入 `.github/workflows/deploy.yml` 才能上线
- [ ] **讲师 lock**：[`operations/INSTRUCTORS.md`](./operations/INSTRUCTORS.md) bio 待填，第 1 期开课前 6-8 周必须 lock
