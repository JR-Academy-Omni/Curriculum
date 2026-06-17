# AI 工作流提效营 推广方案 PROMOTION_PLAN.md

> 推广总指挥 by `/course-promotion-architect init` · 2026-06-16
> 单一真相文档 — 推广端任何调整改这里
> 目标用户画像见 ./PERSONAS.md (last updated 2026-06-16)
> 漏斗机制见 ./FUNNEL_PLAN.md（三档 + 引流课 + 3 天过渡）

---

## 0. Meta

| Field | Value |
|-------|-------|
| Slug | ai-adoption-bootcamp |
| **识别课程类型** | **Type 2 · Bootcamp 在职提效**（COURSE_TYPE_PLAYBOOKS） |
| 识别理由 | 中客单价（$199-2980 AUD）+ 短决策周期（1-3 周）+ 弱结果导向（学员不要 offer，要在现岗提效）— REALITY_CHECK 已锁定在职提效定位 |
| 推广周期 | **T-21 → D+30（7 周）** |
| Launch date | 🚧 待补（prod commence 字段写 2026-05-12 已过，需运营给第一期真实开班日） |
| Target enrollment | 🚧 待补（运营给三档分别目标） |
| Status | spec — 渠道矩阵 + 近期 task 已排，待 launch date / target 补全展开全程 |

**识别为 Type 2 · 在职提效，关键差异（vs Type 1 求职 bootcamp）**：
1. 周期 **7 周（T-21→D+30）** 不是 8 周（T-30）——在职人决策快，不用拉 30 天
2. 内容重点 **"工具栈秀肌肉：学完手上的活能这么干"**——不是 OFFER WALL（在职学员不要 offer）
3. 🚫 **禁说"包就业 / 拿 offer / 转 AI 新岗 / $70K-$250K"**——改讲"省 X 小时/周 / 被会 AI 的同事卷 / 给老板算出 ROI"
4. 不跑学员 OFFER WALL、不跑私域 1v1 群发（PERSONAS 黑名单：微信群发课程链接）、不跑付费投放

---

## 1. 课程定位摘要（从 FUNNEL_PLAN.md / outline.json 抽取，不重写）

8 周搭出你部门的 AI 工作流（识别→选工具→试点→SOP→度量→治理），毕业带 5 个可复用 SOP + 1 份给老板的 ROI 报告。**不是转职课**。漏斗：$29 引流课（当晚出活）→ 三档主课（自学 $199 / 教学 $899 / 陪跑 $2980 AUD）→ 3 天过渡转化。

**主推内容角度（Type 2 在职提效优先级）**：

| 内容角度 | 权重 | 对应 PERSONAS |
|---------|------|--------------|
| 学完当晚能用的 quick win | ⭐⭐⭐⭐⭐ | A 购买触发器 |
| 工作流提效具体小时数（"省 6h/周"） | ⭐⭐⭐⭐⭐ | A/C 痛点 |
| 同事/竞品对比（"他用 AI 一上午出 5 版，我做一版"） | ⭐⭐⭐⭐ | A 痛点 #1 |
| AI 工具栈选型（ChatGPT/Claude vs Coze/Dify/n8n + OpenClaw 部门部署） | ⭐⭐⭐⭐ | A/B |
| 组织级 AI 落地方法论（成熟度评估 / ADKAR / ROI 报告） | ⭐⭐⭐⭐ | **B 团队负责人独有，护城河** |
| 学员 SOP / 作品集 | ⭐⭐⭐ | 全 persona |

---

## 2. 目标与漏斗反推

> 🚧 target enrollment 待补，下面用变量 N（三档合计报名目标）+ 行业基线比例。运营给真实 N 后替换。

```
报名目标 N 人（自学 + 教学 + 陪跑）
  ↓ 主课转化率 ~5%（行业基线 🚧 待第一期实测）
加微信目标 20N 人
  ↓ 引流课 → 主课转化率 ~15%
引流课报名目标 ~3N 人
  ↓ 引流课页 CTR ~30%
引流课页面 UV 目标 ~10N 人
  ↓ 各渠道分摊（按 PERSONAS §3 加权，非默认基线）
  - 小红书种草：~4N UV（40%）← 最高权重
  - 公众号长文：~2N UV（20%）
  - 线下活动 EOI（Bupa/ANZ 类，C persona）：~1.5N UV（15%）
  - 讲座直播：~1.5N UV（15%）
  - LinkedIn + SEO 自然流量：~1N UV（10%）
```

⚠️ 比例是行业基线，第一期跑完用真实数据回写 FUNNEL_PLAN.md。

---

## 3. 渠道矩阵（按 PERSONAS.md §3 反推，非 Type 2 默认数字）

### 启用渠道（Type 2 基线 × PERSONAS 加权）

| Rank | 渠道 | 频次 | 主负责 | 子 skill | 内容角度 |
|------|------|------|--------|----------|---------|
| 1 | 小红书工具栈秀肌肉 | **9 篇/周** × 7 周 = 63 篇（3 人各 3 篇/周） | Summer / Lily / KIKI | `/xhs-topic-picker`→`/xhs-draft`→`/xhs-poster`→`/xhs-review` | 当晚能用 + 省 X 小时 + 同事对比 |
| 2 | 销售页 Custom Landing | 1 次搭 + 季度迭代 | Beta + Dev | `/course-custom-landing` | hero 放 **SOP 截图**（不放 OFFER WALL）+ 三档对比表 |
| 3 | 公众号长文 | 1-2 篇/周 × 7 = 7-14 篇 | 文案 | `/blog-longform-writer` + `/wechat-article-quality` | "我把每周 6 小时周报交给 AI 那天" / B persona 看的"部门 AI 落地方法论" |
| 4 | 线上讲座 | **2-3 场** 整周期 | Beta | `/webinar-topic-feasibility`（先审 topic）| T-14 工具栈 demo / T-7 学员答疑 / D-3 倒数 |
| 5 | 线下活动（Bupa/ANZ 类，C persona 触点）| 按档期 1-2 场 | Aurora / Seren | `/offline-event-content-design` + `/offline-event-sop` | 现场 demo + 5 SOP 交付承诺 |
| 6 | EOI 销售跟进（讲座 / 线下后）| 24h-72h-7d SOP | Amelia / Rain / Angela + Neomi | `/eoi-followup` | 按 persona 异议话术（🚧 待 GT-T1 补真实异议）|
| 7 | LinkedIn（英文站，C persona）| 1 篇/周 × 7 = 7 篇 | Beta / 外包 | — | AU 在职白领"把 AI 装进现有工作流" |
| 8 | SEO 长尾 | 长尾矩阵 30+ | Dev | `/seo-optimizer` + `/eeat-optimizer` | "AI 工作流" / "部门 AI 落地" / "AI ROI 怎么算" |
| 9 | 海报（朋友圈 + 小红书 + 视频号）| 3-4 套 | Designer | `/poster-user-test`（ChatGPT 侧测）| 主题色 #FF914D（DESIGN.md），主打 quick win |

### ❌ 暂不启用（Type 2 红线）
- ❌ 学员 OFFER WALL — 错频道，在职学员不要 offer
- ❌ 私域 1v1 群发 — PERSONAS A/C 黑名单（看到群发课程链接直接划走），成本高转化低
- ❌ 付费投放 — 第一期默认不投（⚠️ 需 Lightman 审批预算，没验证渠道前不烧钱）

---

## 4. 时间轴 Task 矩阵（先给 T-21 / T-14 两个时间点，launch 确认后展开全程）

> 🚧 下面日期用相对时点。运营给 launch date 后换成真实日期。颗粒度参考 course-promotion-architect 示范。

### T-21（开班前 3 周）— 地基

- T-21 周一 09:00：✏️ Beta + Dev 确认销售页 `/program-course/ai-adoption-bootcamp/` 是否需要 Custom Landing（hero=SOP 截图 + 三档对比表）— 调 `/course-custom-landing` — 决策 30min — **P0**（学员落地无处去就崩）
- T-21 周一 11:00：🤖 `/xhs-topic-picker` 出 9 个候选选题（工具栈秀肌肉 + 当晚能用 + 同事对比角度）— ✏️ Summer 选 3 个 — 30min — P1
- T-21 周一 14:00：🤖 `/xhs-draft` 3 选题 × 3 切角 = 9 稿 — 60min；🤖 `/xhs-poster` 配图（主题色 #FF914D）— 90min — P1
- T-21 周二 10:00：✏️ Beta 跑 `/webinar-topic-feasibility` 审"T-14 工具栈 demo 讲座" topic 能不能爆 — 30min — P1
- T-21 周三 10:00：🤖 `/blog-longform-writer` 公众号长文 1 篇（"我把每周 6 小时周报交给 AI 那天"，A persona 角度）→ `/wechat-article-quality` 审 — P1
- T-21 周四：✏️ Aurora 确认是否排 Bupa/ANZ 类线下活动（C persona 触点），有则起 `/offline-event-content-design` — P1
- T-21 全周：✏️ Dev 起 SEO 长尾矩阵（`/seo-optimizer`，长尾词"AI 工作流/部门 AI 落地/AI ROI"）— P2（起效慢，早开工）
- 🚨 T-21 必做：✏️ 完成 **GT-T1 + GT-T2**（拉销售 Amelia + 主理人 Beta 面访补真实异议 / 占比）→ 把 PERSONAS 用户行为字段从 🚧 升级，否则 EOI 话术 + 销售页文案是 AI 拍脑袋

### T-14（开班前 2 周）— 流量 + 试听

- T-14 周一：✏️ Summer/Lily/KIKI 小红书 9 篇排期发布（周二/三/五各 3 条）— P1
- T-14 周二 19:30：✏️ Beta 办 **线上讲座#1 工具栈 demo**（现场把一个重复活自动化，秀 quick win）— 讲座末 5min 推 $29 引流课 — P1
- T-14 周三：🤖 公众号长文 #2（B persona 角度："给老板算 AI ROI 的 5 步"）— P1
- T-14 周四：✏️ 讲座后 EOI 倒进系统，`/eoi-followup` 24h 首联 — Amelia/Rain — P1
- T-14 周五：✏️ Designer 出海报套 #1（quick win 主题，`/poster-user-test` ChatGPT 侧测 6 选 3）— P2

### T-7 / T-3 / T-1 / D0 / D+3 / D+7 / D+30
🚧 待 launch date 确认后展开。骨架：
- T-7：讲座#2 学员答疑 + 引流课冲量（小红书高密度）+ 早鸟截止预热
- T-3：讲座#3 倒数 + 朋友圈真名发声 + 海报套 #2
- T-1：开课通知 + 拉群 + 排课确认（**P0** D-1 没拉群没排课就崩）
- D0：开课 + 学员 SOP 晒图启动 3 天过渡序列（见 FUNNEL_PLAN §5）
- D+3：引流课买家 3 天过渡转化锚点（三档对比）
- D+7 / D+30：周报回收数据 + EOI 7 天 close + postmortem 准备

---

## 5. 责任分配（RACI）

| 角色 | 负责 task |
|------|----------|
| Lightman | 三档定价拍板 / 付费投放审批（本期默认不投）/ 红线把关 |
| Aurora / Seren | 渠道排期 / 线下活动总指挥（Bupa/ANZ）/ KPI 监控 |
| Summer / Lily / KIKI | 小红书选题 / 写稿 / 配图 / 排期（9 篇/周）|
| 文案 | 公众号长文 / 销售页文案 / 海报文案 |
| Beta | 讲座主持 / topic 可行性 / 课程定位 / GT-T2 面访 |
| Amelia / Rain / Angela | EOI 1v1 跟进（24-72h-7d）/ GT-T1 面访 |
| Neomi | EOI 派单 / SLA 监控 |
| Designer | 海报（主题色 #FF914D）/ 销售页视觉 |
| Dev | 销售页搭建 / SEO 上线 / 报名表单 |

---

## 6. 周报（每周一晨会更新，永不删旧周）

### Week of 2026-06-16（init）
- 完成：识别 Type 2 在职提效 + 渠道矩阵（按 PERSONAS §3 加权）+ T-21/T-14 task
- 阻塞：launch date + target enrollment 待运营补；PERSONAS 用户行为字段待 GT-T1/T2 面访补
- 本周目标：① 运营拍 launch date + 三档 target；② 排 GT-T1/T2 面访；③ 确认销售页要不要 Custom Landing
- 风险 flag：prod 当前是单档 $1999，改三档需 outline.json + 销售页改造，先改 FUNNEL_PLAN 再改实现

---

## 7. 风险与决策日志

- **2026-06-16 init**：按 REALITY_CHECK 在职提效定位识别为 Type 2；渠道清单按 PERSONAS §3 反推（小红书最高 > 公众号 > 讲座/线下 > LinkedIn/SEO），与 Type 2 默认基线一致。
- **红线**：全程禁说 offer / 包就业 / $70K-$250K / 月入；内容角度统一"工具栈秀肌肉 + 省 X 小时 + 给老板算 ROI"。
- **⚠️ 待补 ground truth**：launch date / target enrollment / PERSONAS 真实异议（GT-T1）/ 真实占比（GT-T2）。不补 = 目标反推和 EOI 话术是 AI 拍脑袋。

---

## 8. 调用子 skill 索引

| Task | 子 skill |
|------|---------|
| 小红书三件套 | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` |
| 公众号长文 | `/blog-longform-writer` + `/wechat-article-quality` |
| 讲座 topic 审核 | `/webinar-topic-feasibility` |
| 线下活动 | `/offline-event-content-design` + `/offline-event-sop` + `/offline-event-article-quality` |
| EOI 跟进 | `/eoi-followup` |
| 海报测试 | `/poster-user-test`（ChatGPT 侧）|
| 销售页 | `/course-custom-landing` |
| SEO | `/seo-optimizer` + `/eeat-optimizer` |
| 补 persona ground truth | `/persona-ground-truth-scraper`（GT-T3）|
| 漏斗机制（不在本 skill）| `/course-funnel-architect`（见 FUNNEL_PLAN.md）|
