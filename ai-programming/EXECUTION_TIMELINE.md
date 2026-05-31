# ai-programming — Marketing Workflow EXECUTION_TIMELINE

> 创建：2026-05-29 · 团队**下周一就能开干**的具体 task 时间轴
> 课程：人人都能学的 AI Coding 实战课（零基础 · Cursor + AI · 从想法到产品上线）
>
> 📌 这是 MASTER 文档的「明天怎么干」翻译
> 📌 不是"愿景规划"，是"周一早会派单"
> 📌 每个 task 都标了：谁 / 用哪个 skill / 在哪个文件落地 / 完成判据
> 📌 03 期 launch date = `L`（Lightman 周一拍板后，所有 `L-N` / `L+N` 全部代入真日期）

---

## §0. 真相源 + 前置依赖

### 0.1 这份 timeline 引用的上游

| 上游文档 | 路径 | 给本 timeline 提供什么 |
|---------|------|---------------------|
| MASTER 总指挥 | `MARKETING_WORKFLOW_MASTER.md` | 全局状态 / 5 phase 覆盖率 / 12 优先级 task |
| GAP_AUDIT 诊断 | `MARKETING_WORKFLOW_GAP_AUDIT.md` | 5 phase × 76 task 缺口清单 |
| PERSONAS 用户真相 | `PERSONAS.md` | xhs 切角 / 顾问话术 / 决策周期（GT 0.55，刚过阈值）|
| FUNNEL_PLAN 漏斗 | `FUNNEL_PLAN.md` | 引流课定价 / 7 天过渡 / 三档主课定价 |
| PROMOTION_PLAN 推广 | `PROMOTION_PLAN.md` | 渠道矩阵 / RACI / 调度子 skill |

### 0.2 本 timeline 产出的下游交付物（截至 Week 4 末）

| 交付物 | 谁产出 | 落盘路径 | 谁消费 |
|--------|--------|---------|--------|
| 02 期 STATE.md（追溯建档）| Beta | `curriculum/ai-programming/cohort-02/STATE.md` | Aurora 复盘 / 03 期参照 |
| 03 期 STATE.md（开班前建好）| Beta + Aurora | `curriculum/ai-programming/cohort-03/STATE.md` | 日常运营单一真相文档 |
| 02 期学员产出包（截图 + 1 句话 + 同意）| Beta 收 / Beta 助教协助 | `curriculum/ai-programming/student-outputs/cohort-02/` | OFFER WALL / xhs / 公众号 |
| 第一周 daily metrics（5/26-5/30）| Aurora | `curriculum/ai-programming/metrics/daily/2026-05-30.md` | weekly 复盘 / KILL POINT 触发 |
| 03 期 PROMOTION_PLAN 完整时间轴 | Aurora | 编辑 `PROMOTION_PLAN.md` §4 | 11 账号矩阵执行 |
| Marketing 文案岗 JD | Lightman + HR | Notion + Seek 发布 | 招聘 |

### 0.3 03 期 launch date 锁定的影响范围

只要 Lightman 周一拍板 `L = 2026-MM-DD`，以下全部立刻可以展开：

- PROMOTION_PLAN §4 时间轴 T-21 → D+30 全部回填真日期
- FUNNEL_PLAN ¥99 引流课上线 deadline = `L - 28d`
- 销售页倒计时 banner 上线 = `L - 21d`
- 7 天 nurture 序列发送窗口 = `L - 7d → L`
- D-1 开学典礼 zoom 链接 = `L - 1d`

---

## §1. 一张图看清第一周 → 第三周节奏

```
2026-05-29 (今天 Fri) ── workflow 系统完工，6 deliverable 入库
        │
        ▼
W1 ──────────────────────────────────────────────────────────────
2026-06-01 Mon ◆ D1 拍板日（最关键）
        │  ├─ Lightman 拍 03 期 launch date `L`
        │  ├─ Beta 启动 02 期学员产出收集（STUDENT_OUTPUT_COLLECTION_SOP）
        │  └─ Aurora 读 MASTER + GAP_AUDIT 准备周三周会
2026-06-02 Tue ◆ D2 周会派单
        │  ├─ Aurora 召开 marketing 周会用 MASTER §1 全局状态板
        │  ├─ 派 13 个 P0/P1 task 到 11 账号矩阵 + 4 顾问 + Beta
        │  └─ Marketing 文案岗 JD 发布（Lightman + HR）
2026-06-03 Wed ◆ D3 内容 + 新 SOP 启动
        │  ├─ Summer/Lily/KIKI 用新 PERSONAS 切角写第一批 9 篇 xhs
        │  ├─ Beta 开始用 COHORT_GROUP_OPERATIONS_SOP 跑 02 期班级群
        │  └─ Beta 助教启动 02 期学员产出第一批收集
2026-06-04 Thu ◆ D4 OFFER WALL 第一批
        │  └─ 收集 5 件 02 期学员作品 + 同意书 → 销售页 content.ts 加段
2026-06-05 Fri ◆ D5 第一次 daily metrics
        │  ├─ Aurora 跑 marketing-data-collector daily mode
        │  ├─ 产出 metrics/daily/2026-06-05.md
        │  └─ 周五 16:00 全员周回顾（MASTER §6 模板）
        │
        ▼
W2 ──────────────────────────────────────────────────────────────
2026-06-08 Mon ◆ 03 期 PROMOTION_PLAN 时间轴展开
        │  ├─ Aurora 跑 `/course-promotion-architect init --launch=L`
        │  ├─ PROMOTION_PLAN §4 T-21 → D+30 全部回填真日期
        │  └─ alumni-nurture-loop 第一次启动（02 期老学员推 03/ai-engineer）
2026-06-09 Tue-06-12 Fri ◆ 内容 + 03 期招生预热
        │  ├─ 公众号长文 2「02 期校友零基础做出 X」（文案岗或临时 Beta 顶）
        │  ├─ 销售页 OFFER WALL 第一版上线（5 件作品）
        │  └─ 03 期销售页倒计时 banner（如果 L ≤ 7/06）
        │
        ▼
W3 ──────────────────────────────────────────────────────────────
2026-06-15 Mon ◆ runtime 系统 ramp up
        │  ├─ /marketing-data-collector 切自动 cron（daily 8:00 跑）
        │  ├─ cohort-ops-conductor 跑 02 期最后阶段（结业答辩 + 证书）
        │  └─ Marketing 文案岗候选人面试（如果 Week 1 发的 JD 有人投）
2026-06-16 Tue-06-19 Fri ◆ 03 期 launch 前两周冲刺
        │  ├─ ¥99 引流课上线（如果 FUNNEL_PLAN 选项 B 被采纳）
        │  ├─ 第 1 场试听讲座（webinar-topic-feasibility 审完 ≥ 80）
        │  └─ EOI 24-72h-7d 跟进开始（顾问团 Amelia/Rain/Angela）
        │
        ▼
W4+ ──────────────────────────────────────────────────────────────
runtime 持续运转，每周一晨会用 MASTER §6 周报模板
```

---

## §2. Day 1（周一 2026-06-01）— 拍板日

### 2.1 Lightman 09:00-10:00：拍 03 期 launch date

**这是整个系统的钥匙。** 没有 `L`，PROMOTION_PLAN §4 完整时间轴不能展开，FUNNEL_PLAN ¥99 引流课不能定 deadline，销售页倒计时不能上线。

| 决策点 | 选项 | 影响 |
|--------|------|------|
| 03 期 launch date `L` | 2026-06-22 / 2026-06-29 / 2026-07-13 / 2026-07-20 | 决定 T-N → D+30 全部日期 |
| 03 期目标人数 | 30 / 50 / 80 / 120 | 决定渠道矩阵投入度 |
| FUNNEL_PLAN 选项 B（¥99 引流课）是否采纳 | Yes / No | 决定有没有引流课 funnel |
| Marketing 文案岗预算 | 招 / 不招 / 外包 | 决定 Aurora 是否要分担文案 |

**完成判据**：MASTER §0 → "03 期 launch date" 字段从 "⚠️ 待 Lightman 拍板" 改成具体日期。

**落地动作**：Lightman 直接编辑 `MARKETING_WORKFLOW_MASTER.md` §0.1 表格 + Slack 通知 Aurora / Beta / Neomi。

### 2.2 Beta 10:00-17:00：启动 02 期学员产出收集

**用 SOP**：`curriculum/ai-programming/sops/STUDENT_OUTPUT_COLLECTION_SOP.md`

**目标**：本周（W1）收满 5 件 02 期校友的真作品截图 + 1 句话感受 + 公开同意书。

| 时段 | 动作 | 落盘 |
|------|------|------|
| 10:00-11:00 | 班级群发"作品采集"消息（SOP §3 模板）| 群内截图存档 |
| 11:00-13:00 | 1v1 私聊 Top 5 学员（按 02 期 cohort 完课率排）| 待回复 list |
| 14:00-17:00 | 收回作品 → SOP §5 三段式整理：截图 + 1 句话 + 同意书 | `curriculum/ai-programming/student-outputs/cohort-02/{学员化名}/` |

**完成判据**：W1 末（周五）有 ≥ 5 件入库（最低 3 件能上销售页）。

### 2.3 Aurora 14:00-17:00：周三周会准备

**动作**：

1. 通读 `MARKETING_WORKFLOW_MASTER.md`（40 KB · 全局总指挥）
2. 通读 `MARKETING_WORKFLOW_GAP_AUDIT.md` §6 12 top 优先级 task
3. 准备周三周会 agenda：
   - MASTER §1 全局状态板讲 5 phase 覆盖率
   - GAP_AUDIT 5 系统性 gap → 派单到 11 账号矩阵
   - 拿到 Lightman 拍的 `L` 后倒推 T-N 节奏

**完成判据**：周二晚 21:00 前周会 agenda 入 Notion + 邀请发到 Slack。

---

## §3. Day 2（周二 2026-06-02）— 周会派单 + JD 发布

### 3.1 Aurora 10:00-11:30：marketing 周会

**会议参与人**：Aurora / Seren / Summer / Lily / KIKI / Beta / Neomi / Lightman（旁听）

**Agenda**（基于 MASTER + GAP_AUDIT）：

1. **状态同步（10 min）**：5 phase 覆盖率（A 71% / B 62% / C 7% / D 42% / E 39%）
2. **本周派单（30 min）**：W1 13 个 P0/P1 task 分给具体人
3. **02 期复盘启动（15 min）**：Beta 介绍 STUDENT_OUTPUT_COLLECTION_SOP
4. **新 SOP 培训（20 min）**：COHORT_GROUP_OPERATIONS_SOP / ALUMNI_NURTURE_LOOP 讲一遍
5. **答疑（15 min）**：谁不清楚自己要干什么 → 现场对齐

**派单清单**（写到周会纪要 + Notion task）：

| Task | 谁 | 用哪个 skill / SOP | Deadline |
|------|---|----------------|---------|
| W1 xhs 9 篇（基于新 PERSONAS）| Summer | xhs-topic-picker→draft→poster→review | 周五 16:00 |
| W1 公众号长文 1「02 期校友故事」| 文案（如缺岗 Aurora 顶）| blog-longform-writer + wechat-article-quality | 周五 16:00 |
| W1 02 期学员产出收集 5 件 | Beta + Beta 助教 | STUDENT_OUTPUT_COLLECTION_SOP | 周五 16:00 |
| W1 02 期班级群运营 daily | Beta | COHORT_GROUP_OPERATIONS_SOP | 每日 |
| W1 alumni 推 03 期 first batch | Aurora + Beta | ALUMNI_NURTURE_LOOP | 周四 |
| W1 daily metrics 第一次跑 | Aurora | marketing-data-collector daily mode | 周五 16:00 |
| W1 海报第 1 套 user-test | Designer + Marketing | poster-user-test | 周四 |
| W1 销售页 OFFER WALL 第一版 | Dev + 文案 | course-custom-landing | 周五 16:00 |

### 3.2 Lightman + HR 14:00-17:00：Marketing 文案岗 JD 发布

**为什么必须本周发**：PROMOTION_PLAN §5 RACI 标 "Marketing 文案 — 未指派"。当前公众号长文 / 销售页文案 / 海报文案全是 Aurora 顶，Aurora 是 marketing 主管不应该当一线写手，这是 5 系统性 gap 之一。

**JD 要写清楚**：
- 工种：Marketing 文案（公众号 + 销售页 + 海报文案）
- 能力门槛：3 年以上中文营销文案 / 懂技术教育产品优先 / 能用 AI 工具（不抗拒 ChatGPT/Claude）
- 工作模式：远程 OK / 周一 + 周五线下 / 试用期 1 个月
- 不要 KPI 唯流量论：用 wechat-article-quality 9 维度评分 + 完读率 + 留资率综合考核

**完成判据**：JD 周二 17:00 前在 Notion 创建 + Seek + LinkedIn + 朋友圈发布。

---

## §4. Day 3-5（周三周四周五）— 新 SOP 上线 + 第一波内容

### 4.1 周三（2026-06-03）

**早上 09:00 Beta 启动 02 期班级群 SOP**

用 `COHORT_GROUP_OPERATIONS_SOP.md` 跑 02 期班级群第一天的：
- 09:30 早报：昨日 lesson 完课率 + 今日重点
- 11:00 进度提醒：3 位掉队学员私聊
- 18:00 晚总结：今日新作品 / 明日预告
- 21:00 答疑收口

**完成判据**：周五 17:00 前班级群有 5 天连续运营记录 + 至少 3 位掉队学员被介入。

**早上 10:00 Summer 启动 xhs 第一批选题**

工作流：
1. 跑 `/xhs-topic-picker` 拉出 9 个候选选题（基于新 PERSONAS GT 0.55）
2. Summer 跟 Lily/KIKI 分配（每人 3 篇）
3. 周三-周五逐篇过 `/xhs-draft → /xhs-poster → /xhs-review` 流水线
4. 周五 16:00 前 9 篇全部入库（不发，等周一周会拍板发布顺序）

**完成判据**：9 篇 xhs 草稿入 `curriculum/ai-programming/xhs/drafts/2026-W1/`，每篇 review 评分 ≥ 75。

**下午 14:00 Beta 助教启动 02 期学员产出第一批**

接 Beta 周一发的"作品采集"消息回流，整理周三-周五的回收：
1. 收到截图先丢 `curriculum/ai-programming/student-outputs/cohort-02/_raw/`
2. 三段式整理：1 句话感受 / 同意书 / 学员化名
3. 每件作品入 SOP §5 模板归档
4. 周五汇总给 Beta → 选 5 件入 OFFER WALL

### 4.2 周四（2026-06-04）

**OFFER WALL 第一版上线启动**

- 09:00 Beta 拍板 5 件作品入 OFFER WALL
- 11:00 文案（或 Aurora）按 ai-engineer-bootcamp v1.6 OFFER WALL 模式起草 content.ts 加段
- 14:00 Dev 接活，预览 UAT 销售页
- 17:00 用户视角 review（让 Neomi / Beta 站在零基础学员立场看）

**完成判据**：周五 17:00 前 UAT 销售页 OFFER WALL 第一版可访问。prod deploy 等周一周会拍板。

**alumni-nurture-loop 第一次启动**

用 `curriculum/ai-programming/sops/ALUMNI_NURTURE_LOOP.md` 跑 02 期老学员推 03 期 / ai-engineer-bootcamp 的第一波：

- 上午 Aurora 拉 02 期完课学员 list
- 下午 Beta + Aurora 起草"老学员专属优惠 + 推荐人激励"私信
- 17:00 前 first batch 私信发出（不群发，1v1 私聊保持温度）

**完成判据**：发出 ≥ 10 条 1v1 私信，记录到 ALUMNI_NURTURE_LOOP 工作日志。

### 4.3 周五（2026-06-05）

**第一次 daily metrics 跑通**

Aurora 用 `/marketing-data-collector daily` 模式跑通第一次：

1. 拉取昨日全渠道数据（小红书 / 公众号 / 销售页 GTM / EOI / 班级群活跃度）
2. 产出 `curriculum/ai-programming/metrics/daily/2026-06-05.md`
3. 对比 W1 周一基线 → 看 5 天后哪个渠道有动静
4. KILL POINT 检查：哪个指标低于阈值要警告

**完成判据**：metrics/daily/2026-06-05.md 入库 + 周五 16:00 周会有数据可讲。

**周五 16:00 全员 W1 回顾会**

用 MASTER §6 周报模板：

| 维度 | 内容 |
|------|------|
| ✅ 完成 | 列本周完成的 task |
| ⚠️ 阻塞 | 列阻塞 + 需要谁解 |
| 🎯 下周目标 | W2 三件大事 |
| 🚨 风险 | 系统性 gap 有没有恶化 |

**落盘**：编辑 `PROMOTION_PLAN.md` §6 加 "Week of 2026-06-01" 块。

---

## §5. Week 2（2026-06-08 → 06-12）— 03 期招生预热

### 5.1 周一 09:00 Aurora：跑 PROMOTION_PLAN 完整时间轴

**前置**：Lightman 周一拍的 `L` 已锁定。

**动作**：

```bash
/course-promotion-architect init ai-programming --launch=L --target=N
```

skill 会自动展开 PROMOTION_PLAN §4 T-21 → D+30 完整 task 矩阵：
- T-21（开班前 3 周）= `L - 21d`
- T-14 / T-7 / T-3 / T-1 / D0 / D+7 / D+14 / D+30 全部回填真日期

每个时间点的 task 都标了：负责人 / skill / 耗时 / 完成判据。

**完成判据**：PROMOTION_PLAN §4 不再有"待 launch date 锁定后展开"字样，全部是真日期 + 真 task。

### 5.2 周二-周四：内容产出 + alumni 第二批

- 公众号长文 2「不会代码的 02 期校友怎么做出 Y」（文案岗或 Aurora）
- xhs 第二批 9 篇（基于 W1 9 篇数据择优切角）
- alumni-nurture-loop 第二批私信发送（覆盖 02 期完课学员 50%+）
- 销售页 OFFER WALL prod 上线（W1 UAT 版本审过）

### 5.3 周五：02 期 NPS 调研启动

**用 SOP**：`COHORT_GROUP_OPERATIONS_SOP.md` §7

Beta 给 02 期发 NPS 调研问卷（不强制 + 不交换福利）：
- 问 5 个核心问题：推荐意愿 / 最满意点 / 最不满 / 期待新增 / 是否愿意推荐
- 收集到 `curriculum/ai-programming/cohort-02/STATE.md` §NPS

**完成判据**：W2 末 02 期完课学员 NPS 回收率 ≥ 60%。

---

## §6. Week 3（2026-06-15 → 06-19）— runtime 全面 ramp up

### 6.1 周一：marketing-data-collector 切自动 cron

**前两周是手动跑**（Aurora 每天 16:00 跑一次）。W3 周一起切自动：

- 每日 08:00 cron 跑 daily 模式
- 产出 metrics/daily/{YYYY-MM-DD}.md 自动入库
- 异常指标（KILL POINT 触发）发 Slack 提醒 Aurora

**完成判据**：W3 周一晚 08:00 第一次自动跑成功 + Slack 有产出。

### 6.2 周二-周五：02 期结业 + 03 期 ¥99 引流课

- 02 期最后一周：结业答辩 / 证书发放 / OFFER WALL 入库（cohort-ops-conductor 跑结业 SOP）
- 03 期 ¥99 引流课上线（如果 FUNNEL_PLAN 选项 B 被 Lightman 周一拍板采纳）
- 第 1 场试听讲座举办（W2 已审过 webinar-topic-feasibility ≥ 80）
- EOI 24-72h-7d 跟进开始（Amelia / Rain / Angela 顾问团）

---

## §7. Week 4 及之后（runtime）

### 7.1 每周一晨会节奏

- 09:00 Aurora 看 dashboard 上周数据
- 09:30 marketing 周会用 MASTER §6 模板派单
- 10:30 顾问团周会（EOI + 1v1 跟进）
- 14:00 Beta 看 cohort STATE.md → cohort-ops-conductor

### 7.2 每日 cron 节奏

- 08:00 marketing-data-collector 自动跑
- 09:00 Beta 看 02/03 期班级群 + 早报
- 16:00 顾问团 EOI 24h SLA check
- 21:00 答疑收口

### 7.3 W4 末关键 milestone

- 03 期开课 D-1（如果 `L = 2026-06-22`）→ 开学典礼
- 或 03 期 T-7（如果 `L = 2026-06-29`）→ 7 天 nurture 序列发送
- 02 期完结复盘 → 数据回灌 PERSONAS.md refresh + FUNNEL_PLAN postmortem

---

## §8. 跨 phase 衔接断裂的修复点（在 timeline 上的位置）

GAP_AUDIT 找出的 3 处跨 phase 断裂，这份 timeline 在以下位置修复：

| 断裂 | 描述 | 修复位置 | 修复手段 |
|------|------|---------|---------|
| B → C | EOI lead 数据 / 入群名单没传给运营 | W1 周二周会 | Aurora 把 EOI 字段加进 STATE.md schema，Neomi 派单时同步通知 Beta |
| C → D | cohort NPS / 卡点 / 产出没传给复盘 | W2 周五 02 期 NPS 启动 | NPS 结果直接进 cohort-02/STATE.md + 喂回 PERSONAS refresh |
| D → A | 复盘真实转化率 / OFFER WALL 没回灌下一期销售页 | W1 周四 OFFER WALL 第一版 + W3 周二 02 期结业 OFFER WALL 入库 | content.ts 加段 + 销售页 deploy |

---

## §9. 第一周成功判据（W1 末自检）

周五 16:00 W1 回顾会前 Aurora 自检：

| 判据 | 目标值 | 不达标怎么办 |
|------|--------|-----------|
| MASTER §0 03 期 launch date 已锁定 | 真日期 | Lightman 没拍 → 周一立刻找 |
| 02 期学员产出收集入库 | ≥ 5 件 | < 3 件 → 调整 SOP §3 触达话术 |
| xhs 9 篇草稿入库 | 9 篇 review ≥ 75 | 数量不够 → 文案岗 JD 上线临时招人 |
| Marketing 文案岗 JD 发布 | 已发布 + 有应聘记录 | 0 应聘 → 调整薪资范围 + 渠道扩展 |
| daily metrics 跑通 | 周五有 metrics/daily/2026-06-05.md | 数据源缺 → marketing-data-collector DATA_SOURCES.md 补 |
| 02 期班级群 SOP 跑通 | 5 天连续运营记录 | 漏运营 → 排 Beta 助教加班 |
| OFFER WALL UAT 第一版可访问 | UAT 链接可点击 | content.ts 没改完 → 推到 W2 周一 |
| 周五回顾会有数据可讲 | metrics + xhs + 学员产出三件套齐 | 缺一件 → 那块负责人下周补 |

---

## §10. KILL POINTs（系统性 gap 恶化预警）

如果以下任何一条触发，**立刻暂停其他 task** 优先修：

| KILL POINT | 触发条件 | 谁负责 | 修复 SOP |
|-----------|---------|--------|---------|
| **Phase C 黑洞继续扩大** | 02 期班级群 SOP W1 没跑通（连续 2 天漏运营）| Beta | COHORT_GROUP_OPERATIONS_SOP §应急 |
| **数据回收失效** | daily metrics W1 跑 ≤ 3 天 | Aurora | marketing-data-collector DATA_SOURCES.md 优先补缺源 |
| **学员产出 0 入库** | W1 末入库 < 3 件 | Beta | STUDENT_OUTPUT_COLLECTION_SOP §3 触达话术升级 |
| **Marketing 文案岗 W1 末 0 应聘** | JD 发出 5 天 0 简历 | Lightman + HR | 重写 JD + 加薪资范围 + 朋友圈 + 朋友群 |
| **跨 cohort 学习路径继续断** | alumni-nurture W1 末 < 10 条私信发出 | Aurora + Beta | ALUMNI_NURTURE_LOOP §应急简化版 |

---

## §11. 维护规则

- **每周一晨会** → 编辑本 timeline，标 W{N} 实际进度（不删旧周）
- **L 拍板后** → 把 `L` 全部替换成真日期（W2 §5.1 跑完 promotion-architect 后）
- **W4 末** → 跑 `/course-promotion-architect weekly` 出第一份正式 weekly 报告
- **02 期结业后** → 跑 `postmortem` 回灌 FUNNEL_PLAN + PERSONAS refresh
- **本文件由谁维护**：Aurora（主） + Beta（02/03 期运营侧补充） + Lightman（决策点签字）

---

## 附录 A · Skill / SOP 索引（快速查表）

| 我要做的事 | 用哪个 |
|----------|--------|
| 看全局状态 | `MARKETING_WORKFLOW_MASTER.md` §1 |
| 看 5 phase 76 task 缺口 | `MARKETING_WORKFLOW_GAP_AUDIT.md` |
| 跑 02 期班级群运营 | `sops/COHORT_GROUP_OPERATIONS_SOP.md` |
| 收 02 期学员作品 | `sops/STUDENT_OUTPUT_COLLECTION_SOP.md` |
| 推 02 期老学员 03 期 / ai-engineer | `sops/ALUMNI_NURTURE_LOOP.md` |
| 跑 cohort 全周期运营 | `.claude/skills/cohort-ops-conductor/SKILL.md` |
| 跑全渠道数据回收 | `.claude/skills/marketing-data-collector/SKILL.md` |
| 跑 03 期推广时间轴 | `/course-promotion-architect init` |
| 写 xhs | `/xhs-topic-picker → /xhs-draft → /xhs-poster → /xhs-review` |
| 写公众号 | `/blog-longform-writer + /wechat-article-quality` |
| 审讲座 topic | `/webinar-topic-feasibility` |
| EOI 跟进 | `/eoi-followup` |

---

## 附录 B · 03 期 launch date 决策辅助（给 Lightman 周一拍板用）

| 选项 | Launch Date | T-21 起步日 | 优 | 劣 |
|------|------------|-----------|---|---|
| A | 2026-06-22（W4 周一）| 2026-06-01（今天 Day 1）| 紧凑，立刻起跑 | 销售页 OFFER WALL 来不及完整 |
| **B（推荐）** | **2026-06-29（W5 周一）**| **2026-06-08（W2 周一）**| **OFFER WALL + 文案岗有 4 周 ramp** | **要忍一周不开 03 期**|
| C | 2026-07-13（W7 周一）| 2026-06-22（W4 周一）| 时间最充裕 + 引流课跑通 | 02 期老学员热度散，alumni 转化打折 |
| D | 2026-07-20（W8 周一）| 2026-06-29（W5 周一）| 假期前最后一波 | 7 月底澳洲冬假家长学员注意力差 |

**Aurora + Beta 推荐**：选项 B（2026-06-29），理由：
1. OFFER WALL 有时间建到 8-10 件再上 prod
2. Marketing 文案岗能招进来一个再开新一期
3. 02 期完结跟 03 期开始有 2 周缓冲（不会人手两边抢）
4. 7 天 nurture 序列有 7 月第一周完整窗口
