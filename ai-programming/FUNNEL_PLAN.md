# ai-programming — FUNNEL_PLAN.md

> 课程：人人都能学的 AI Coding 实战课（零基础 · Cursor + AI · 从想法到产品上线）
> 由 `/course-funnel-architect init` 生成 · 2026-05-29
> 数据源：production prod-state.json + jiangren.com.au/program-course/ai-programming 实时定价 + custom landing content.ts

---

## 0. Meta

| Field | Value | 来源 |
|-------|-------|------|
| Course Slug | ai-programming | — |
| Prod Training ID | `68d27c49150c9d0071939f7a` | prod-state.json |
| 当前活跃 cohort | 2 期（02 期 + 基础班 5 周）| prod-state.json `programs[]` |
| 02 期开课日 | 2025-11-16（已开）| 销售页 `commenceCourseDate` |
| 03 期开课日 | ⚠️ 待运营定 | — |
| 当前定价模式 | 2 档：基础版 + 进阶版（预售价）| 销售页 `pricingOptions` |
| 总课时 | 113 lessons / 138 steps / 27 直播 / 18 Lab / 14 Quest | outline.json |
| AI 工具数 | 33 个 | content.ts QUICK_STATS |
| 可上线交付物 | 4 个（PPT/PDF/网站/视频）| content.ts DELIVERABLES |
| 上次更新 | 2026-05-29 | — |
| 上游依赖 | PERSONAS.md（GT 0.55 enhanced）| — |

---

## 1. 真实定价（production · 2026-05-29 抓取）

### 当前 2 档（预售价模式）

| 班型 | 预售价 (AUD) | 原价 | 折扣 | 名额限制 | slug |
|------|----------|------|------|--------|------|
| **基础班 6 周** | **$860** | $960 | 10% off | 前 10 名 | `ai-builder-ai-6` |
| **进阶班 8 周** | **$1360** | $2080 | 35% off | — | `ai-builder-ai-8` |

### 多币种（已配置）

| 货币 | 基础班预售 | 进阶班预售 |
|------|---------|---------|
| AUD | $860 | $1360 |
| USD | $559 | ~$884（按 AUD/USD 换算估算）|
| CNY | ¥4042 | ~¥6388 |
| SGD | $756.8 | ~$1198 |
| MYR | RM 2623 | ~RM 4148 |
| GBP | £447.2 | ~£707 |

→ **关键发现**：目前**没有 ¥99 / $29 引流课**，也**没有三档（自学/教学/陪跑）结构**。
→ 当前漏斗结构 = **2 档预售（基础 + 进阶），按周数 / Phase 数差异化**。

---

## 2. 当前漏斗实际状态（reality check）

```
潜在用户进来
    ↓
看销售页 /program-course/ai-programming（已有 custom landing · 真实 content.ts 写好）
    ↓
2 档选择：基础班 6 周 AUD $860 OR 进阶班 8 周 $1360
    ↓
点 ApplyForm（CTA 行为已对齐通用模板）
    ↓
报名 → cohort 入群 → 开课
```

### ✅ 已经在做的

- 真实销售页 custom landing（components: page.tsx + CustomBootcampPage.tsx + content.ts + styles.ts）
- 6 个 KILL POINTS（零基础 / 4 交付物 / 33 工具 / 双班型 / Lab+Quest / 答辩制）
- 4 大交付物详情（PPT / PDF / Landing Page / 视频）
- 6 条 FAQ（编程基础 / 时间投入 / 工具费 / 学习方式 / 学完做什么 / 双班选择）
- 8 张海报（poster-v1 ~ v6 + poster.html + xhs-posters 文件夹）
- 02 期 cohort 已开班（2025-11-16，113 lessons 完整）

### ❌ 漏斗缺口

| 缺口 | 严重度 | 现状 |
|------|------|------|
| **无 ¥99 / $29 引流课** | 🟡 中 | 大量"先了解再决策"型用户没接住入口 |
| **无自学 / 教学 / 陪跑三档** | 🟢 低 | 当前 2 档按"周数 + Phase 数"差异化已合理 |
| **无明确 03 期开课日** | 🔴 高 | 销售页让人不知道什么时候能上 |
| **无 7 天过渡 / nurture 序列** | 🟡 中 | 没有从"加微信"到"下单"的中间环节 |
| **无校友作品 OFFER WALL** | 🟡 中 | content.ts 还没加学员真实作品 URL（ai-engineer-bootcamp 加了 5 张 OFFER 截图 v1.6）|

---

## 3. 推荐漏斗设计（3 选 1，等运营拍板）

### 选项 A · 保持现状 2 档（最小改动）

**适合**：02 期上完后 03 期立刻开，预售期还在
**改动**：
1. 销售页加 03 期 commenceCourseDate
2. 把 02 期校友作品 / 反馈加进 content.ts（参考 ai-engineer-bootcamp v1.6 OFFER WALL 模式）
3. 把 "前 10 名" 实时倒计时（防止假紧迫感被识破）

**优点**：0 新产品，0 新落地页
**缺点**：高价位（$860+）对新用户决策成本高，转化漏斗窄

---

### 选项 B · 加 ¥99 引流课 + 现有 2 档作为主课（推荐）

**适合**：要扩流量池，把"试一下"型用户接住

```
¥99 引流课「3 天用 Claude Cowork 做出第一个 PPT 网站」
       (Phase 0 拆出来单卖，2-3 节直播 + 1 个 Lab)
                    ↓
            7 天过渡（不推销，每日 1 篇案例 + 1 个工具 SOP）
                    ↓
        AUD $860 基础班 OR AUD $1360 进阶班
```

**为什么是 ¥99 引流课能 work**：
- ai-programming 的 Phase 0「上手 Claude Cowork（零代码起步）」已经是 6 节完整课
- 直接拆出来当独立引流课 = 0 新内容生产，1 周内可上
- ¥99 客单价低 = 决策周期从 14-30 天压缩到 3-7 天
- 学完产出"可上线 PPT" → 自然导流到"想做更多产品" = 进阶班

**预期数据**（基线推测，第 1 期跑完用真实数据替换）：
- 引流课页面 UV → 报名转化率 30%
- 引流课报名 → 加微信群 60%
- 微信群 → 主课转化率 15%

→ 引流课报 100 人 → 60 人入群 → 9 人买主课 = $860 × 9 = $7,740（其中部分升级进阶版）
→ 引流课收入 ¥99 × 100 = ¥9900（约 $2,062 AUD）
→ 总 ROI vs 单纯卖主课 = 4-5x（按"如果没引流课，那 100 人里直接下单的可能只有 1-2 人"对比）

---

### 选项 C · 加三档主课结构（自学 / 教学 / 陪跑）

**适合**：要做大跨度客单价，吃高净值人群

```
自学版 (无社群) AUD $580  ← 录播 + 自习
教学版 (含 cohort) AUD $1360  ← 当前进阶版位置
陪跑版 (1v1 + 项目) AUD $2980  ← 高客单价高陪伴
```

**为什么不强推**：
- 当前 02 期还在跑 cohort 模式，运营 bandwidth 紧
- 陪跑版需要 Beta / Faculty 1v1 时间，目前没人手
- ai-solo-founder-bootcamp 已经在做高客单价市场 ¥9800-30k，本课错配
- → **建议暂时不做 C，等课程跑 3-5 期后再加**

---

## 4. 推荐：选项 B + 加 03 期开课日

| Phase | 价格 | 周期 | 入口 | 转化目标 |
|-------|------|------|------|--------|
| **引流课** | ¥99 / $29 | 3 天 | 销售页底部 + 小红书种草 + 公众号长文末尾 CTA | 上完转主课 15% |
| **基础班** | $860 (预售) | 6 周 | /program-course/ai-programming 现有页面 | 100 人入群 → 15 人 |
| **进阶班** | $1360 (预售) | 8 周 | 同上 | 基础班 → 进阶班升级 30% |

→ **关键依赖**：等 PERSONAS.md GT 升到 0.55+（用本次 enhance 的版本）+ 03 期 commenceCourseDate 锁定。

---

## 5. 7 天过渡序列（B/C 都需要 · 引流课 → 主课）

> 详细见 `/funnel-handoff-design` 子 skill，本节是上层骨架。

| Day | 内容 | 目的 | 形式 |
|-----|------|------|------|
| D0 | 引流课报名确认 + Day 1 课程 URL + 微信群入口 | 接住 | 邮件 + 群通知 |
| D1-D3 | 引流课正课 3 节 + Lab 1 | 完课体验 | 平台学习 |
| D4 | 「02 期校友做了什么」案例长文 | 触发想象 | 公众号 / 朋友圈 |
| D5 | 引流课 KEEP / GAP 分析（你能 / 还缺什么）| 让用户看见差距 | 群内分享 + 1v1 答疑 |
| D6 | 「基础班 vs 进阶班」选择题 + 03 期开课日 + 早鸟剩余名额 | 决策窗口 | 公众号 + 微信群 |
| D7 | 主课报名截止（"03 期开课前 7 天"压力点）| 临门一脚 | EOI 收单 |

**红线**（参考 funnel-handoff-design）：
- ❌ 不推销 / 不群发课程链接 / 不假装"个人推荐"
- ❌ 不承诺"学完保 offer / 月入 X" — 本课定位是"做产品"不是"找工作"
- ✅ 只服务（答疑 / 案例 / 工具 SOP），让用户自己看见差距

---

## 6. 调度子 skill 决策树

```
做 ¥99 引流课设计                → /intro-course-design ai-programming-intro-99
设计 7 天过渡序列                → /funnel-handoff-design ai-programming
做现有 2 档定价审计              → /main-course-tier-design ai-programming
审 funnel 翻车风险              → /curriculum-positioning-audit ai-programming
做整套推广方案                  → /course-promotion-architect init ai-programming （消费本文件）
改销售页 hero / FAQ             → /course-custom-landing (Mode B) ai-programming
```

---

## 7. 风险与决策日志

### 2026-05-29 v0 init

**已验证**：
- 价格 $860 / $1360 真实（curl prod 实时确认）
- 02 期 cohort 已开班（2025-11-16）
- 销售页 custom landing 已存在（5 文件 19KB content + styles）

**未验证**：
- 03 期开课日 — 销售页没显示，等运营定
- 真实学员是 ABCD 哪类（PERSONAS.md 还是 AI 推测，需要 INTERVIEW + scraper 补 GT）
- 02 期完课率 / NPS / 转化率 — 没有真实数据

**🚨 红线**（参考 CLAUDE.md 顶级铁律）：
- 禁止承诺金钱 / 副业 / 入职 / offer
- 禁止说 "包就业 / 月入 X / 副业接单"
- 本课承诺：4 个真实可上线作品 + 33 工具 + 8 种产出能力 = **过程承诺**，不是 **结果承诺**

---

## 8. 下游消费

本 FUNNEL_PLAN.md 是 `/course-promotion-architect` 的核心输入：

```
PERSONAS.md (v0.5 enhanced GT 0.55)
   +
FUNNEL_PLAN.md (本文件 · 真实定价 + 2 档结构 + 选项 B 推荐)
   ↓
PROMOTION_PLAN.md (重新生成 · 替换 2026-05-28 拍脑袋版本)
   ↓
具体 marketing 物料：
   ├─ 销售页 enhance (course-custom-landing Mode B)
   ├─ ¥99 引流课设计 (intro-course-design)
   ├─ 03 期开课倒计时 banner
   ├─ 小红书 / 公众号 内容矩阵
   ├─ 8 张海报（已有）+ 03 期专属海报
   └─ EOI 跟进 SOP
```

下次更新触发：
1. 03 期开课日确定 → 立刻 update §0 Meta + §5 D7
2. PERSONAS.md refresh 到 GT ≥ 0.7 → 重审本文件
3. 02 期 cohort 真实数据出来 → §3 选项 B 预期数据用真实值替换
