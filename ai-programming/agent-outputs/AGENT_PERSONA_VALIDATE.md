No ground truth has been collected since v0.5 — the `gt-sources/` directory doesn't exist, and neither `FUNNEL_PLAN.md` nor `PROMOTION_PLAN.md` exist yet. I now have everything I need. This is **Mode B (validate)** — audit only, I will **not** modify the document.

---

# 🔍 validate 审计报告 · `ai-programming` PERSONAS.md

> Mode B 只审不改。下面是 ground truth 浓度审计 + 健康度判定 + 待补清单。

## 一句话结论

**❌ 不合格（按本 skill 的 30 槽测量法）。** 文档头标注的 **0.55 覆盖率是虚高的** —— 它统计的是「课程侧素材」（定价 / 大纲 / 销售卖点），不是 10 字段 schema 要求的「用户行为 ground truth」。**按 skill validate 的标准算法（3 persona × 10 字段 = 30 个标注位），真实用户级 ground truth ≈ 15%，决策关键字段（痛点 / 平台 / 决策周期 / 黑名单 / 异议）= 0% 真实来源，全是 AI 推测。**

文档本身很诚实（§0 已自承"用户行为字段仍是 AI 推测""AI 推测 0.45 仍超红线 0.3"），所以这次 validate 不是抓它造假，而是**纠正它的计分口径**：0.55 不该让下游误以为"画像可信了"。

---

## 1. 30 槽标注覆盖率矩阵

| 字段 | A 创业者 | B 转型者 | C 学生 | 真实来源 |
|------|---------|---------|--------|---------|
| 1 一句话画像 | 🟡 半真 | 🟡 半真 | 🟡 半真 | 职业=outline.json / 三圈；年龄城市=AI |
| 2 痛点 Top 3 | 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 3 决策周期 | 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 4 平台 Top 5 | 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 5 信任谁 | 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 6 不信什么（黑名单）| 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 7 购买触发器 | 🔴 AI | 🔴 AI | 🔴 AI | 0 |
| 8 异议 Top 3 | ⬜ 待补 | ⬜ 待补 | ⬜ 待补 | 0 |
| 9 触达 ROI | ⬜ 待补 | ⬜ 待补 | ⬜ 待补 | 0 |
| 10 GT 来源 | 🟡 弱 | 🟡 弱 | 🟡 弱 | outline / 三圈（课程方/平台级，非用户自述）|

**统计**：
- 🟢 真实用户级来源：**0 / 30**
- 🟡 半真 / 弱来源（课程方定义、平台级画像）：6 / 30
- 🔴 AI 推测：18 / 30（字段 2-7 全员）
- ⬜ 完全空白（待补）：6 / 30（字段 8、9 全员）

**字段级真实 GT ≈ 4.5/30 = 15%**（且全部是"课程方/平台级"间接来源，无一条用户原话 / 访谈 / 评论 / 客服记录）。

---

## 2. 为什么文档的 0.55 和 skill 算出的 15% 差这么多

文档 §0 的 0.55 是**文档级加权**，把这些算进了分子：

| 文档计入的 GT | 是真实数据吗 | 但它回答"买家是谁/怎么决策"吗 |
|------|------|------|
| GT-03 销售页 6 KILL POINTS / FAQ / 定价档 | ✅ 真 | ❌ 那是**我们想卖什么**，不是**谁会买** |
| GT-04 真实定价 curl | ✅ 真 | ❌ 同上 |
| GT-02 02 期 113 lessons 结构 | ✅ 真 | ❌ 课程结构 ≠ 学员画像 |
| GT-01 outline targetAudience | 🟡 课程方自述 | 🟡 课程方"希望招谁"≠ 真实买家 |

→ **这 4 类都是"课程侧 ground truth"，对 funnel 定价 / 销售页结构有用，但对 persona 的核心使命（痛点 / 平台 / 黑名单 / 异议）零贡献。** skill 的 10 字段 schema 全是用户行为字段，所以按 validate 标准算法这些课程侧数据根本不进分子。

**建议**：把 §0 的 headline 从"覆盖率 0.55 ✅"改成两个分开的数字——
- 课程侧 GT：0.55 ✅（可支撑 FUNNEL 定价决策）
- **用户行为 GT：0.15 ❌（不可支撑任何 PROMOTION / 销售页文案 / 渠道决策）**

---

## 3. 健康度判定（按 skill 三档）

| 档位 | 阈值 | 本课 |
|------|------|------|
| ✅ 合格 | ≥ 80% 真实 GT | ✗ |
| ⚠️ 偏弱 | 50-80% | ✗ |
| ❌ 不合格 | < 50% | **✓ 本课在此档（15%）** |

**= 本质是 AI 拍脑袋写的 persona，所有下游决策都不能信。**

具体到红线：
- 🚨 红线 1（每字段标来源）：字段 2-9 共 24 槽无真实来源 —— **违反**
- 🚨 红线 2（黑名单必填真实）：字段 6「不信什么」3 persona 全 AI 推测 —— **违反**（schema 明示这是"最重要最容易跳过"字段）
- 🚨 AI 推测权重 ≤ 30%：实际 ≈ 60-85%（按字段算）—— **违反**

---

## 4. 强制补的空白 / AI 字段（下游解锁顺序）

下游谁现在能用 / 不能用：

| 下游 skill | 依赖字段 | 现状 | 能用吗 |
|-----------|---------|------|--------|
| course-funnel-architect | 决策周期 + 收入区间 | 决策周期=AI；收入有真实定价 | 🟡 定价可用，节奏不可用 |
| course-promotion-architect | 平台 Top 5 加权 | 全 AI（§3 自己标"置信度极低"）| ❌ 不可用 |
| course-custom-landing | 痛点原话 + 异议 | 痛点=AI拟写、异议=空 | ❌ 不可用 |
| xhs-draft / blog-longform | 切角 + 黑名单 | 全 AI | ❌ 不可用 |
| poster-user-test | 6 persona 替换 | 占比全 AI | ❌ 不可用 |

**最高优先补（P0，缺则下游全锁）**：
1. **字段 6 黑名单**（3 persona 全空）+ **字段 8 异议**（3 persona 全空）→ 销售口播 + 扒评论
2. **字段 2 痛点原话**（现在是 AI 拟写的"像痛点的话"，schema 明确这不算）→ 访谈 + 评论
3. **字段 4 平台 Top 5**（PROMOTION 渠道清单的唯一依据）→ 访谈问"下班最常开的 5 个 App"
4. **占比预估**（A40/B35/C20 全 AI）→ 02 期真实报名名单

---

## 5. 推荐动作

文档 §7 的 task 表已经写得很到位，直接照跑即可。**最快回血路径（2 周内拉到 0.5+ 用户级）**：

1. **跑 `/persona-ground-truth-scraper init ai-programming --source=xhs,wechat`** — 半自动扒"零基础学 AI 编程 / Cursor 入门"真实评论，直接喂字段 2/6/8（成本最低，新媒体 Summer 1.5h）
2. **按 `INTERVIEW_SCRIPT.md` 面访课顾 Amelia/Rain/Angela 30min** — 拿到字段 6 黑名单 + 字段 8 异议 + 真实占比（Beta 组织，P0）
3. **要 02 期真实学员名单 + 自我介绍** — 校准三 persona 占比（A40/B35/C20 现在纯猜）
4. 补完 1+2+3 后**重跑 `/target-user-persona-mapper validate ai-programming`** 复测

**结论给决策者一句话**：现在的 PERSONAS.md 可以支撑**定价/漏斗结构**决策（课程侧数据是真的），但**不能支撑任何渠道投放、销售页文案、海报、小红书切角**——那些字段 100% 是 AI 猜的。在跑完 scraper + 1 次销售面访之前，别让 `course-promotion-architect` / `course-custom-landing` 照抄本文档。

---

要不要我直接帮你启动第 1 步 `/persona-ground-truth-scraper`，把 xhs + 公众号评论先扒回来填字段 2/6/8?
