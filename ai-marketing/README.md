# AI Marketing 4 周 Bootcamp

> 单一入口 — 看一眼就知道东西在哪。最近更新：2026-05-05

**定位**：AI 营销全链路（内容 + 投放 + 私域 + 数据），4 周。中英文双轨。
**业务模式**：4 个独立 ¥99/$29 引流课 + 主课三档（自学 ¥699/$199 · 教学 ¥2980/$899 · 陪跑 ¥9800/$2980）。
**承诺红线**：禁说月入/副业/接单/包就业。只承诺过程结果（作品集 / 工具链 / 跑通 SOP / 数据复盘）。

---

## 文档地图

```
curriculum/ai-marketing/
├── README.md           ← 你正在看
├── FUNNEL_PLAN.md      ← 漏斗高 level（决策 + 状态 + 日志）
│
├── public/             ← 学员看的对外页面
│   ├── outline.json    主课 64 lessons 数据源
│   ├── curriculum.html 主课总览
│   ├── phase1-4.html   每周详情
│   └── styles.css
│
├── intro/              ← 4 个引流课
│   ├── README.md       4 引流课进度看板
│   ├── w1-xhs-hook/    W1: AI 写小红书爆款
│   ├── w2-geo/         W2: GEO 让 LLM 引用品牌
│   ├── w3-bot/         W3: Coze 0 代码搭客服 bot
│   └── w4-weekly-report/  W4: AI 自动出营销周报
│   每个引流课目录有：
│     README.md  主题/Hook/承诺/对应主课位置
│     TODO.md    工程清单（具体 deliverable 待做事项）
│
└── operations/         ← 运营 / 销售 / 招生
    ├── PRICING.md          4 档定价 + 升级补差价
    ├── SCHEDULE.md         16 直播排课 + 中英时差
    ├── HANDOFF.md          7 天过渡序列
    ├── SALES_PLATFORMS.md  售卖平台对接（小鹅通/Stripe/...）
    └── INSTRUCTORS.md      讲师 + 脚本 + bio
```

---

## 当前状态（速查）

- ✅ 主课大纲 v0：`public/outline.json` 1233 行 / 64 lessons / 37 lab / 4 Quest
- ✅ 主课静态页：`public/{curriculum,phase1-4}.html`（本地 server `cd public && python3 -m http.server`）
- ✅ 三档定价定型：`operations/PRICING.md`
- ✅ 4 引流课主题已定（W1-W4）：每个目录 README.md
- ⏳ 4 引流课 deliverable 工程：`intro/{wN}/TODO.md` 各 6 件待做
- ⏳ 7 天过渡序列：`operations/HANDOFF.md`
- ⏳ 18 个新 lab 创建：`jr-academy-web-zh/src/config/prompt-labs/`（不在本目录）
- ⏳ deploy.yml 接入：`.github/workflows/deploy.yml` 加 ai-marketing 块

完整阶段状态见 `FUNNEL_PLAN.md` 第 2 节。

---

## 相关文档（项目根级）

- 市场调研：`docs/prd/AI_MARKETING_BOOTCAMP_JD_RESEARCH.md`
- 平台资源盘点：`docs/prd/AI_MARKETING_BOOTCAMP_PLATFORM_RESOURCES.md`
- PRD：`docs/prd/AI_MARKETING_BOOTCAMP_PRD.md`
- Marketing 文案：`docs/prd/AI_MARKETING_BOOTCAMP_MARKETING.md`

---

## 第 1 期目标

- **首讲**：2026-07-30（周三）
- **招生窗口**：2026-06-20 — 2026-07-25
- **直播主时段**：AEST 周三 / 周六 19:30 / 11:00（中英分轨详见 `operations/SCHEDULE.md`）
