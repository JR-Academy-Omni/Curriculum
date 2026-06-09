# PERSONAS Init Report — ai-programming

> 给 Lightman 看的对账报告：现有 PERSONAS.md 状态 + 还差什么 + 谁该做什么。
> 2026-05-29 · 由 `/target-user-persona-mapper init` dogfood 跑出（v0 stub 已在 2026-05-28 init，本次 enhance + 写 report）

---

## TL;DR

| 指标 | 当前 | 目标 | 差距 |
|------|------|------|------|
| PERSONAS.md 存在 | ✅ 157 行 | ✅ | 0 |
| Persona 数量 | 3 买家 + 1 不买 | 3-5 | OK |
| **Ground truth 覆盖率** | **0.25** ❌ | ≥ 0.50 | **+0.25** |
| AI 推测占比 | 75% | ≤ 30% | **-45%** |
| FUNNEL_PLAN.md（依赖） | ❌ | ✅ | 需先做 |
| PROMOTION_PLAN.md（下游）| ❌ | ✅ | 不能造（GT 不够）|
| INTERVIEW 已做 | 0 次 | 3 次 | -3 |
| Scraper 已跑 | 0 源 | 3-5 源 | -3 |

**结论**：v0 骨架已搭，但**所有 persona 字段都是 AI 推测**，下游 marketing 决策**禁止基于本 v0**。

---

## 现有 PERSONAS.md 是什么样

文件路径：`/Users/lightman/Documents/sites/jr-academy-ai/curriculum/ai-programming/PERSONAS.md`

直接 `cat` 或在 IDE 打开看。结构：

```
§0 Meta（slug / 客单价待补 / GT 25%）
§1 Persona 速查表（A 创业者 35-40% / B 转型者 35% / C 学生 20% / D 不会买）
§2 Persona 详情（每个 10 字段全部标 ⚠️ 推测）
§3 跨 persona 渠道汇总（推测排序：小红书 ⭐⭐⭐⭐⭐ / 公众号 ⭐⭐⭐ / 视频号 ⭐⭐⭐ / 即刻 ⭐⭐ / B站 ⭐⭐）
§4 不会买的人（资深程序员 + 待补）
§5 历史决策日志（2026-05-28 v0 init）
§6 Ground truth 来源（仅 2 类：outline.json + JR 三圈画像）
§7 必须补的 7 项 Task ← 2026-05-29 enhance 加了 skill 引用
```

---

## 4 个候选 Persona 当前假设

> ⚠️ 全部是 outline.json `targetAudience` + AI 推测，没有真实用户访谈支撑

### Persona A · 非技术创业者（35-40% 推测）

- 28-42 岁，一二线 / 澳洲华人
- 痛点：找外包贵 + 不知道从哪开始 + 看别人 ship 焦虑
- 主战场推测：小红书 + 视频号 + 公众号 + 抖音 + 即刻
- 决策周期推测：1-3 周
- **客单价档**：⚠️ 没有 FUNNEL_PLAN.md，无法确定

### Persona B · 传统行业转型者（35% 推测）

- 26-38 岁，市场/运营/教师/HR/财务
- 痛点：AI 焦虑 + 不被替代 + 学过 Python 没学会
- 主战场推测：小红书 + 公众号 + 抖音 + 视频号 + 脉脉
- 决策周期推测：2-4 周

### Persona C · 在校学生 / 应届（20% 推测，边缘）

- 19-24 岁
- 痛点：作品集 + 副业 + 学校太理论
- 主战场推测：小红书 + B站 + 抖音 + 即刻
- 决策周期推测：1-2 周

### Persona D · 资深程序员（不会买，5% 误点）

- 已天天用 Cursor 的工程师
- 明确不是目标 — 销售页 / 海报文案不要让他们以为是进阶课
- 应该看 ai-engineer-bootcamp / ai-builder

---

## 还差什么（按优先级）

### 🚨 P0 阻塞（GT 覆盖率必须从 0.25 → 0.50）

| Task | 工作量 | 负责人 | 用什么 |
|------|------|--------|--------|
| **GT-A1**：拉 Amelia / Rain / Angela 任一课顾访谈 30min | 30min + 30min 整理 | Beta 约 + 课顾接受 | `INTERVIEW_SCRIPT.md` 4-part 结构 |
| **GT-A2**：拉课程主理人 / 教学主管访谈 30min | 30min + 30min 整理 | Beta 约 | 同上 |
| **GT-B1**：扒小红书"零基础 AI 编程 / Cursor 入门"评论 5-10 张截图 | 10min + 30min vision 提取 | Summer | `/persona-ground-truth-scraper init ai-programming --source=xhs` |
| **GT-B2**：扒公众号留言 5-10 张截图 | 10min + 30min vision 提取 | Summer / Lily | `/persona-ground-truth-scraper init ai-programming --source=wechat` |
| **GT-D**：确认 FUNNEL_PLAN.md 客单价档 | 2-4h | Aurora + Beta | `/course-funnel-architect init ai-programming` |

→ **2 周内全做完 → GT 覆盖率 0.70+**

### 🔶 P1 增强（可选）

| Task | 用什么 |
|------|--------|
| 跑 Reddit r/Entrepreneur 看英文站 persona | `/persona-ground-truth-scraper init --source=reddit` |
| 跑 V2EX programmer 节点看程序员候选（确认不是目标）| `/persona-ground-truth-scraper init --source=v2ex` |
| 跑 Boss 直聘看"AI 应用工程师"JD 反推目标人群是否真存在 | `/persona-ground-truth-scraper init --source=boss` |

### 🔵 P2 长尾（半年后）

| Task | 用什么 |
|------|--------|
| 第 1 期开班 30 天后用真实学员数据 refresh | `/target-user-persona-mapper refresh ai-programming --cohort=1` |
| 季度审计是否过时 | `/persona-ground-truth-scraper audit ai-programming` |

---

## 阻塞链

```
PERSONAS.md (v0 当前)
   ↓ 阻塞（GT < 50%）
FUNNEL_PLAN.md
   ↓ 阻塞
PROMOTION_PLAN.md
   ↓ 阻塞
小红书 / 公众号 / 销售页 marketing 物料生产
   ↓ 阻塞
开班招生
```

→ **GT 不补，整条链卡住**。

但有 fast path：

```
GT-A1 (课顾访谈 30min) + GT-B1 (Summer 扒小红书 1h)
   ↓ GT 从 0.25 → 0.55（够阈值）
PROMOTION_PLAN.md 可以试做
   ↓ 同时 GT-D 跟进
FUNNEL_PLAN.md 决定客单价
   ↓
小红书 / 公众号 开始造内容
```

→ **3 天内启动整条链可行**（GT-A1 + GT-B1 是关键瓶颈，2 个人各 1h）。

---

## 你（Lightman）现在能看到什么

| 文件 | 路径 | 你打开能看到什么 |
|------|------|---------------|
| `PERSONAS.md` | `curriculum/ai-programming/PERSONAS.md` | 157 行 v0 stub · 4 persona 占位 · 7 项 GT task 清单 |
| `PERSONAS-INIT-REPORT.md` | `curriculum/ai-programming/PERSONAS-INIT-REPORT.md`（本文件）| 现状对账 + 阻塞链 + fast path |
| 还没生成 | `gt-sources/` 目录 | INTERVIEW + scraper 跑完才会有 |
| 还没生成 | `FUNNEL_PLAN.md` | 等 Aurora + Beta 用 `/course-funnel-architect` |
| 还没生成 | `PROMOTION_PLAN.md` | 等 GT 补 + FUNNEL 完 |

打开 PERSONAS.md 你会看到 Claude 现在能"猜"成什么样 + 7 个 task 表清楚列出哪几个人/skill 要补什么数据。

---

## 你接下来最低成本的 3 个动作

```
1. 现在：cat curriculum/ai-programming/PERSONAS.md 在 IDE 打开看
   ↓ 知道当前 AI 推测的 persona 长什么样

2. 30 min：让 Beta 约一个课顾（Amelia/Rain/Angela）做 INTERVIEW
   ↓ GT-A1 完成，覆盖率 0.25 → 0.40

3. 2 天内：让 Summer 跑 /persona-ground-truth-scraper init --source=xhs,wechat
   ↓ GT-B1+B2 完成，覆盖率 0.40 → 0.60+ → 可以让下游 skill 用了
```

不动 = persona 永远是 AI 推测 = 下游所有 marketing 决策都是 garbage in garbage out。

---

## 跟昨天交付的关系

- 昨天我建了 5 个 skill（persona-mapper 5 文件 + 9 下游 wire + persona-ground-truth-scraper 4 文件）
- 今天 dogfood 跑了一次 init mode 在 ai-programming 上，发现 PERSONAS.md 在 2026-05-28 已经被 init 过了（157 行 v0）
- 现在 enhance 了 §7 task 表加上新建 skill 的引用 + 写本 report

→ **第一次有真实可打开的产物（PERSONAS.md + 本 report）**。
