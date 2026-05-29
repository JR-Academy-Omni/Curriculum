# ALUMNI_NURTURE_LOOP.md — ai-programming 校友留存 / 跨课程升学 / 老带新闭环

> 课程：人人都能学的 AI Coding 实战课（零基础 · Cursor + AI · 从想法到产品上线）
> 由 ai-programming marketing workflow 设计补全 · 2026-05-29
> 单一真相文档（SoT）of **课程结业后 alumni 全生命周期运营**
> 上游：[`AUDIT_LOG.md`](../AUDIT_LOG.md) · [`MARKETING_WORKFLOW_GAP_AUDIT.md`](../MARKETING_WORKFLOW_GAP_AUDIT.md) · [`FUNNEL_PLAN.md`](../FUNNEL_PLAN.md) · [`PERSONAS.md`](../PERSONAS.md)
> 下游消费：`/cohort-ops-conductor postmortem mode` · `/marketing-data-collector` · `/course-funnel-architect` · 销售页 content.ts OFFER WALL · `/xhs-draft` testimonial 切角

---

## §0. Meta + 为什么这是 P0

### 0.1 文件元信息

| Field | Value | 来源 |
|-------|-------|------|
| Slug | ai-programming | — |
| Prod Training ID | `68d27c49150c9d0071939f7a` | prod-state.json |
| 02 期 cohort | 已开课 2025-11-16，113 lessons 完整结构 | prod-state.json `programs[]` |
| 02 期估算 alumni 池 | 基础班 ~37 人 + 进阶班 ~47 人 ⚠️ 估算待校准 | 待 Beta 提供真实 cohort 名单 |
| 03 期 launch date | ⚠️ 待 Lightman 拍板（gap audit Top1 P0） | — |
| Sister courses（可升学目标）| ai-engineer-bootcamp / ai-solo-founder-bootcamp / ai-marketing-bootcamp | curriculum/ |
| 上次更新 | 2026-05-29 | — |
| 上游依赖（必读）| MARKETING_WORKFLOW_GAP_AUDIT.md §2.3 / FUNNEL_PLAN.md / PERSONAS.md GT 0.55 | — |
| 文件归宿 | `curriculum/ai-programming/sops/ALUMNI_NURTURE_LOOP.md` | — |

### 0.2 为什么这是 P0（5 系统性 gap 之一：跨 cohort 学习路径缺失）

引用 `MARKETING_WORKFLOW_GAP_AUDIT.md` §2 系统性 Gap #3 + 跨 phase 衔接断裂 §3 中"Phase D → Phase A（下一期 cohort）"段落原文：

> **Phase D 老学员 → 下一门课跨课程 upsell 路径未建 → 每门课 Phase A 推广预算 80% 给新 lead，alumni 金矿浪费，全 JR Academy 多门 AI 课之间无 LTV 闭环。**

具体到 ai-programming 02 期：

1. **02 期 37 人基础班 + 47 人进阶班** ⚠️ 估算 — 已经付费、已经知道课程质量、已经完成 113 lessons 中至少 40% — 是**最贵的获客成本接近 0、转化率最高的 lead 池**
2. 但目前**没人推他们**：
   - 没人在结业后 7 天告诉基础班学员"你下一步可以升级进阶班"
   - 没人在结业后 30 天告诉进阶班学员"你下一步可以学 ai-engineer-bootcamp 加技术深度，或者 ai-solo-founder 把作品做成生意"
   - 没人在结业后 90 天问"你最近用 AI Coding 做什么了？要不要回来当 alumni mentor / 当 testimonial / 帮我们推 03 期"
3. **结果**：
   - 03 期销售页 hero / OFFER WALL / Testimonial 没真实 02 期作品（gap audit Top2 P0 同根因）
   - 03 期招生 100% 靠冷流量 + Marketing 预算，CAC 居高不下
   - ai-engineer-bootcamp 等姐妹课程**0 alumni 升学来源**（最容易转化的就是这批已有 Coding 基础的）
   - **2 期跑过去 = 2 期 alumni 金矿浪费**，04 期还会重复

### 0.3 黄金 reframe — 暖 lead 的真实价值

| 指标 | 冷流量（小红书 / 公众号）| 02 期 alumni |
|-----|-----|-----|
| 触达成本 | $30-80 per lead ⚠️ 行业基线 | $0（已加入群 / 已留 wechat）|
| 信任成本 | 7 天 nurture 序列 | 0（已经付过钱）|
| 跨课程转化率假设 | 1-3% ⚠️ 基线 | 8-15% ⚠️ 待 02→03 真实数据验证 |
| 客单价 | $860 / $1360 | 升学客单价可达 $1980-3500（ai-engineer / ai-solo-founder）|

→ **CLAUDE.md 红线 reminder**：本表写"假设"和"待验证"，**不做金钱承诺**（feedback_no_revenue_promise 已纠正过）。所有数字仅是运营内部假设，不能进销售文案。

### 0.4 P0 而不是 P1 的判定理由

| 判定维度 | 状态 |
|---|---|
| 是否解锁下游多个动作？ | ✅ 解锁 销售页 OFFER WALL / xhs testimonial 切角 / cohort postmortem PERSONAS refresh / 跨课程 LTV 数据池 |
| 是否窗口期会过？ | ✅ 02 期已结业，每过 1 周配合度衰减；03 期开课后老学员注意力分流 |
| 是否需要新基础设施？ | 部分 — 需要 referral collection（gap audit Top4 数据系统的一部分），但 SOP 可先用 wechat + 飞书表跑 |
| 投入产出比 | 1 周设计 + 持续低强度运营 → 撑住整个 ai-programming 多期产品线 |

---

## §1. Alumni 等级定义

> 不是会员体系，是 **运营内部识别度的标签**，决定推什么、什么时候推、推什么节奏。

| 等级 | 定义 | 02 期估算池 ⚠️ | 识别方法 | 运营动作 |
|-----|------|---------|---------|---------|
| **L0** | 基础班结业（完成 6 周 95+ lessons 中 ≥80%）| ~37 人 | prod 后端 cohortProgress（gap Top4 数据系统造好后）/ 暂用 Beta 凭记忆 + 课程作业提交记录 | D-14 升级窗 / D+7 最终升级窗 / D+30 跨课升学推荐 |
| **L1** | 进阶班结业（完成 8 周 113 lessons 中 ≥80%）| ~47 人 | 同上 | D+30 跨课升学 / 招募 OFFER WALL 候选 / Testimonial 视频 |
| **L2** | 朋友圈晒证 / 主动分享 / 主动推荐课程链接 | 估算 5-10 人 | Mason / Aurora 手动看 wechat moment + 给 referral link | 个性化感谢 + 邀请进 alumni 内圈群 + 优先 OFFER WALL |
| **L3** | 推荐过 ≥1 个新学员成交 | 待 03 期开课后才有数据 | referrals collection（待造）/ 暂用飞书表 | 老带新立减 $200（详 §3）+ 公开致谢 + 优先 mentor |
| **L4** | 成为 Faculty / 助教 / mentor / 答辩评委 | 长期目标，理论上 0 人 | 主动邀请 | 04+ 期收讲师课时费 / 头衔 / 销售页 Faculty 段位 |

**晋级是流动的**：L0 学员朋友圈晒证后晋 L2；L1 推荐成交后晋 L3；L3 持续推荐 + 愿意分享后邀请晋 L4。

**晋级触发**：每月 1 号 Beta + Mason 跑一次 alumni 等级 review（30min）。L3+ 个人通知；L2 个性化感谢；L0/L1 走标准 nurture 时间轴。

---

## §2. 4 条跨课程学习路径推荐图

```
ai-programming 基础班 6 周结业（L0 · ~37 人）
  │
  ├─→ A. 进阶班升级（同课延伸 8 周加 Chatbot / CMS / Dashboard 等）
  │     触发：结业前 14 天 → D+7 最终窗
  │     差价：$1360 - 已支付 $860 = 补 $500（推荐价，最终由 Lightman 拍板）
  │     转化目标 ⚠️：基础班 → 进阶班 20-30% 升级率（行业基线，待 02→03 验证）
  │
ai-programming 进阶班 8 周结业（L1 · ~47 人）
  │
  ├─→ B. ai-engineer-bootcamp（技术深度 · 12 周）
  │     触发：D+30 至 D+90 窗口
  │     前置：完成进阶班 Phase 3 后端 / API 部分（已具备 Python / Cursor 基础）
  │     升学优惠：alumni $200 立减（同 §3 老带新折扣对齐）
  │     真实路径：ai-programming 进阶班 → 学 RAG / agent / LLM 工程化
  │
  ├─→ C. ai-solo-founder-bootcamp（创业孵化 · cohort 经济）
  │     触发：D+30 至 D+90 窗口
  │     前置：进阶班学员已经能上线 4 大交付物 → 缺的是把作品做成生意
  │     升学优惠：alumni 享 invite-only 入学优先位（非折扣，护城河逻辑）
  │     真实路径：把 ai-programming 做的 Landing Page / Chatbot → 接 VC / 客户 / 共创人
  │
  └─→ D. ai-marketing-bootcamp（marketing AI 提效）
        触发：D+30 至 D+90 窗口
        前置：学员本职是 marketing / 运营 → 之前学 ai-programming 是为了做工具
        升学优惠：alumni $150 立减
        真实路径：用 AI 写文案 / 投放 / 漏斗设计，把自己的产品推出去
```

### 2.1 每条路径的触发时机 / 推荐话术 / 真实案例

#### Path A · 进阶班升级

- **触发时机**：基础班 W5 末（结业前 14 天）→ Beta 在群内 + 1v1 私聊提醒；W6 结业当天 + D+3 + D+7 三次轻推
- **升学优惠**：基础班学员补差价升进阶（待 Lightman 拍板具体差价，建议 $500 = $1360 - $860 + 0 加价）
- **推荐话术示例**（给 Beta 用，**禁用金钱承诺词**）：
  > "你基础班结业了 — 你已经能用 Cursor 做出 Landing Page。进阶班的 8 周会带你做 Chatbot / CMS / Dashboard 这 3 类更复杂的产品，跟基础班是同一套方法只是产品形态更深。结业前 14 天补差价 $XXX 就能升 — 要不要看一眼进阶班大纲？"
- **真实案例**：⚠️ 待 02 期完结后补 02→进阶 真实升级案例

#### Path B · 升 ai-engineer-bootcamp

- **触发时机**：进阶班结业 D+30 → Mason 1v1 私聊
- **判定**：学员目标里写过"想做 AI 工程师 / 想接 AI 项目 / 想做 RAG / 想做 agent"（B EOI intake 记录或群里聊过）
- **升学优惠**：alumni $200 立减
- **话术**（**禁用副业 / 包就业**）：
  > "你进阶班结业了 — 4 大交付物里你做的网站 / Chatbot 是入门级。ai-engineer-bootcamp 12 周是 Python 后端 + RAG + agent + 部署，技术深度比 ai-programming 深一档。如果你想往 AI 工程方向走，alumni 减 $200。要不要看一眼 ai-engineer 的大纲？"
- **真实案例**：⚠️ 待补

#### Path C · 升 ai-solo-founder-bootcamp

- **触发时机**：进阶班结业 D+30 → Lightman / 课程顾问 1v1
- **判定**：学员目标是"做副业 / 创业 / 想找客户"（注意：禁说"副业"对外，但学员自己说就识别）
- **升学优惠**：alumni 享 invite-only 优先入学位（不打折，逻辑是稀缺）
- **话术**：
  > "你进阶班做出了 4 大交付物 — 已经有作品。下一步不是再学 8 周技术，是把作品做成生意。ai-solo-founder-bootcamp 是 cohort 经济 + Faculty 阵营 — 一线 SEO / VC / CPA / Grant 帮你把作品商业化。同学之间互相是协作者不是竞争者。是 invite-only — 你 alumni 优先位。"
- **真实案例**：⚠️ 待补

#### Path D · 升 ai-marketing-bootcamp

- **触发时机**：进阶班结业 D+30
- **判定**：学员本职是 marketing / 内容 / 运营（EOI 表里有职业字段）
- **升学优惠**：alumni $150 立减
- **话术**：
  > "你 ai-programming 学的是用 AI 做产品，ai-marketing 学的是用 AI 把产品推出去。你本职是 marketing — 这门课会把 ai-programming 学的 Cursor / Claude / GPT 用到投放 / 写文案 / 漏斗设计上。alumni 减 $150。"
- **真实案例**：⚠️ 待补

### 2.2 升学路径决策树（给课程顾问 Amelia / Rain / Angela 用）

```
Q1：学员是 L0 还是 L1？
  ├─ L0 → 永远先推 Path A 进阶班（先内升）
  └─ L1 → 看 Q2

Q2：学员目标里有"工程师 / Python / RAG / agent"关键词吗？
  ├─ 有 → Path B ai-engineer-bootcamp
  └─ 没 → 看 Q3

Q3：学员目标里有"创业 / 自己做 / 客户 / VC / grant"关键词吗？
  ├─ 有 → Path C ai-solo-founder-bootcamp
  └─ 没 → 看 Q4

Q4：学员本职是 marketing / 运营 / 内容吗？
  ├─ 是 → Path D ai-marketing-bootcamp
  └─ 否 → 暂不主动推，记录到 alumni list，等下一门匹配课程上线再触达
```

---

## §3. 推荐机制 / 老带新 / 朋友圈裂变

### 3.1 老带新优惠（核心机制）

| 角色 | 优惠 | 触发时机 | 备注 |
|-----|------|---------|------|
| 老学员（推荐人）| 立减 $200（适用于 ai-programming 03+ 期 / 姐妹课程任一）| 被推荐人成交报名后 | 优惠以 store credit 形式发放，等他报下一门课时抵扣 |
| 新学员（被推荐人）| 立减 $100（适用于 ai-programming 03+ 期）| 报名时填推荐人 wechat / 邮箱 | 不叠加任何早鸟 / 多币种已设折扣 |

**红线（CLAUDE.md feedback_no_revenue_promise）**：

- ❌ 禁说"推荐 5 人月入 $1000"
- ❌ 禁说"推荐人即兼职 / 副业"
- ✅ 允许说"作为感谢，下次报名抵扣 $200"
- ✅ 允许说"我们感谢你帮我们带新学员"

**总额上限**：单 alumni 推荐多人，store credit 上限 $1000（4-5 个推荐封顶），防止变相分销违规。

### 3.2 referral 数据捕获（依赖数据系统 gap Top4）

**短期**（数据系统未造完）：

- 飞书表 `ai-programming-referrals.xlsx`，字段：推荐人 wechat / 被推荐人 wechat / 报名时间 / 报名金额 / store credit 发放状态
- Mason 每周一 30min review，把上周成交的 referral 关系打表

**长期**（数据系统造完后）：

- 后端 `referrals` collection（schema 在 gap audit Top4 提到）
- ApplyForm 增加 referralCode 字段
- Alumni 在 admin 自助生成 referral link：`jiangren.com.au/program-course/ai-programming?ref=alumni_<userId>`
- UTM 自动归因 + admin Referral 看板

### 3.3 朋友圈裂变机制

- **结业证书**：进阶班结业当天发 PNG 结业证（设计：DESIGN.md 主色 #FF7B5A neo-brutalism），证书上加二维码 → 自定义 referral link
- **作品晒图模板**：结业当天 Beta 发 1 套朋友圈晒图模板（基础班 / 进阶班各 3 张），学员 1 click 下载 → 配文 + 配图发朋友圈
- **不强制 / 不裹挟**：禁说"必须发朋友圈才发证书"。是请求不是要求。CLAUDE.md feedback_no_templated_group_announcements 红线已纠正过这种行为。

### 3.4 OFFER WALL 收集 SOP（与 gap audit Top2 衔接）

- 进阶班 W7-W8（结业前 2 周）：Beta 在群里主动征集"愿意把 4 大交付物（PPT/PDF/网站/视频）放在 03 期销售页"的学员
- 授权机制：纸质 + 电子签授权书（CLAUDE.md feedback_real_examples_with_attribution 已纠正：真实案例必须有署名 + 授权）
- 反馈给学员：作品上墙 → alumni 多得 $50 store credit + 销售页带姓名头像或匿名按学员意愿
- 收集表：`curriculum/ai-programming/alumni-offer-wall/02期-offers.json`（结构等 cohort-graduate-portfolio-collector skill 落定）

---

## §4. Alumni 社群运营

### 4.1 群结构（vs cohort 群）

| 群 | 性质 | 活跃度 | 谁加入 | 谁运营 |
|-----|-----|------|------|------|
| 02 期 cohort 群 | 课程期间高密度群 | 已开课起每天活跃 | 02 期所有报名学员 + 助教 + 讲师 | Beta（凭记忆运营，gap audit Top3）|
| **ai-programming Alumni 群** | 跨期 alumni 总群（本 SOP 新建）| 季度活跃 | L0+ 所有期 alumni（02 期 + 03 期 + ...）| Mason + Beta 共同 |
| **ai-programming Inner Circle** | L2+ 内圈群（晒证 / 推荐过的）| 月度活跃 | L2-L4，邀请制 | Lightman 偶尔下场 + Beta |
| 各姐妹课程 Alumni 总群 | 跨课程 alumni 群 | 季度活跃 | 任一 JR Academy AI 课结业者 | 各课负责人轮流 |

### 4.2 群运营节奏（不刷屏 / 不卷 / 不推销）

| 频次 | 动作 | 谁 |
|-----|-----|----|
| 每周 1 次 | 群里发 1 条"本周我用 AI Coding 做了 X"（Beta / Mason / alumni 主动）| Beta |
| 每月 1 次 | Alumni 主题分享（自荐讲，30min 在线腾讯会议）| 主讲 = 上月最活跃 alumni / 受邀 alumni |
| 每季 1 次 | 跨 cohort 大聚会（在线 90min）| Lightman 主持 + 邀请 5-10 alumni 分享 |
| 6 月 / 12 月 | 线下聚会（一线城市轮流：墨尔本 / 悉尼 / 上海 / 北京 / 深圳）| 当地 alumni 中心 + Aurora / Seren 协助场地 |

### 4.3 月度 alumni 主题分享 SOP

- **T-7 天**：Beta 在群里 + 1v1 私聊确认下月主讲人（优先 L2+ 自荐）
- **T-3 天**：Mason 帮主讲人捋讲稿 outline（30min）
- **T-1 天**：群里发预告海报（用 DESIGN.md 主色 + neo-brutalism）+ 腾讯会议链接
- **当天**：主讲 20min + Q&A 10min + Beta / Mason 主持互动
- **T+1**：录播剪辑（5-10min 精华片段）→ 公众号长文（消费 `/blog-longform-writer`）+ 小红书 3 条切角（消费 `/xhs-draft`）+ 视频号 1 条
- **T+3**：群里发剪辑链接 + 谢主讲

### 4.4 季度跨 cohort 大聚会

- 90min 在线
- 议程：① Lightman 5min welcome + 平台进展（新课 / 数据）② 5-10 alumni 各 5min 闪电分享 ③ 30min 自由交流分组（用 Zoom 分组功能）
- 内容产出：1 篇公众号 recap + 3-5 个 alumni testimonial 视频片段（用于销售页 alumni section）

### 4.5 线下聚会（6 / 12 月）

- 与 `offline-event-content-design` + `offline-event-sop` + `offline-event-article-quality` 三件套对齐（CLAUDE.md 内容质量审核 skill 矩阵）
- 由 Aurora / Seren / 当地 alumni 牵头
- 60-80 人规模，免费报名（alumni only）
- 内容：1 场主题 talk + 5 张 alumni lightning talks + 自由社交
- 输出：1 篇公众号活动文章（用 `offline-event-article-quality` 审核）+ 朋友圈 / 小红书素材 30 条+

---

## §5. 续费 / 升学窗口（精确时间轴）

### 5.1 基础班结业前 14 天 → 进阶班升级窗（Path A）

| 时间 | 动作 | 谁 | 触达通道 |
|-----|-----|----|---------|
| W5 中（结业前 14 天）| 群里 1 条预告"进阶班升级窗下周开"+ 个性化标记 | Beta | wechat 群 |
| 结业前 10 天 | 1v1 私聊符合条件的 alumni | Beta | wechat 1v1 |
| 结业前 7 天 | 进阶班 sneak peek 直播 30min（Lightman + 进阶班讲师）| Lightman | 腾讯会议 |
| 结业前 3 天 | 个性化邮件 + wechat 二次推送 + 限时差价倒计时 | Mason | email + wechat |
| 结业当天 (D0) | 群里发结业证书 + 个性化升学邀请 | Beta | wechat 群 + 1v1 |

### 5.2 基础班结业后 D+7 → 进阶班升级最终窗

| 时间 | 动作 | 触达通道 |
|-----|-----|---------|
| D+3 | 群里 1 条"还有 4 天升级窗" | wechat 群 |
| D+5 | 1v1 私聊未升学者 | wechat 1v1 |
| D+7 | 升级窗关闭 / store credit 补偿（如果他后期升，差价不退但能用 $100 抵扣其他课）| Mason |

### 5.3 进阶班结业后 D+30 / D+60 / D+90 → 跨课升学窗（Path B/C/D）

| 时间 | 动作 | 谁 |
|-----|-----|----|
| D+7 | 结业满意度问卷（NPS + 跨课兴趣）| Mason |
| D+14 | Alumni 群欢迎入群仪式 | Beta |
| **D+30** | 1v1 私聊：基于 §2.2 决策树推一门姐妹课 | Mason + 课程顾问 Amelia / Rain / Angela |
| D+60 | 群里发"姐妹课 03 期开课预告" + 个性化 | Mason |
| **D+90** | 二次 1v1 私聊：跨课升学最终窗 | 课程顾问 |
| D+180 | Half-year check in（不推销，问近况，可作内容素材）| Beta |
| D+365 | 周年 check in + alumni 老带新感谢 | Lightman |

### 5.4 红线 reminder

- 触达频次硬上限：D0-D+30 每周 ≤2 次，D+30-D+90 每月 ≤2 次，D+90+ 每季 ≤1 次
- 触达内容硬上限：禁推销链接连发 ≥3 条；禁使用"限时 / 立即 / 不报名后悔"焦虑话术
- **学员说"不感兴趣 / 退群"立即停止主动触达**，标记到 alumni list 标签 `opt-out`

---

## §6. 内容贡献（alumni → 内容供给）

### 6.1 三类 alumni 内容产出

| 类型 | Alumni 投入 | 产出物 | 下游消费者 |
|-----|---------|-------|---------|
| **故事文**（"我用 AI Coding 做了什么"）| 30min 写 + 1 轮 Mason 修 | 公众号长文 1 篇 + 朋友圈版 | `/wechat-article-quality` 审核 → 公众号 + 销售页 |
| **Testimonial 视频** | 5-10min 录像（自录或 Mason 远程引导）| 30-90s 视频片段 ×2 | 销售页 alumni section（位于 Faculty 段之后）+ 小红书 |
| **作品上墙**（4 大交付物 ）| 0（学员已做完）+ 授权签字 | 销售页 OFFER WALL（gap audit Top2 cohort-graduate-portfolio-collector skill 产出）| 销售页 content.ts OFFER_WALL_DATA 数组 |

### 6.2 内容产出激励

- 故事文：alumni 公众号文署名 + store credit $50
- Testimonial 视频：alumni 销售页署名 + store credit $50
- 作品上墙：alumni 销售页署名 + store credit $50（可与 §3.4 OFFER WALL 收集合并）
- 单 alumni 累计内容贡献奖励上限 $200，防止变相分销 + 保持自愿

### 6.3 alumni 当下期 1v1 mentor

- L3+ alumni 受邀当 03 期学员的 cohort 内 1v1 mentor
- 投入：每周 30min × 8 周 = 4h
- 反馈：免费旁听 03 期任意 lesson + 进入 Faculty 储备池 + 朋友圈"我是 JR Academy ai-programming 03 期 mentor" 标签

### 6.4 与 PERSONAS / 销售页文案的接口

- Alumni 故事文里的真实原话 → 喂回 PERSONAS GT 升级（§8）→ 销售页 hero / KILL POINTS 改写
- Testimonial 视频里的真实异议破除 → 顾问话术库 + 销售页 FAQ 补丁
- 作品上墙的真实截图 + 真实数据 → 销售页 4 大交付物 section 真实素材替换占位图

---

## §7. KPI（含基线假设和数据回收方式）

### 7.1 北极星 KPI

| KPI | 02→03 期目标 ⚠️ 假设 | 数据来源 | 回收 SOP |
|-----|---------------------|---------|---------|
| 老带新转化率 = referral 报名数 / alumni 总人数 | 5-10% | referrals 表 / collection | Mason 每周一 review |
| 进阶班升级率（基础班结业 30 天内）| 20-30% | cohort + payments collection | 每月 1 号 review |
| 跨课程升学率（进阶班结业 90 天内 → 任一姐妹课报名）| 8-15% | cross-course attribution | 每月 1 号 review |
| Alumni 群日活（日发言人数 / 群总人数）| 10-20% | wechat 群手动统计 / 飞书表 | 每周五 Beta 统计 |

⚠️ 所有数字是**运营内部假设基线**，**不可进销售文案**（CLAUDE.md feedback_no_revenue_promise）。

### 7.2 过程 KPI

| KPI | 目标 | 谁 |
|-----|------|----|
| Alumni 月度分享按时举办率 | 100%（12 次/年）| Beta |
| Testimonial 视频累计数 | 03 期开课前 ≥10 条 | Mason |
| 故事文累计篇数 | 03 期开课前 ≥6 篇 | Mason |
| OFFER WALL 真实作品上墙数 | 03 期开课前 ≥12 件 | Beta + Mason |
| Referral link 自助生成使用率 | 数据系统造好后 alumni 30%+ 用过 | 数据系统 referrals collection |

### 7.3 失败信号（需 escalate Lightman）

- 任一窗口期升级率连续 2 期 <50% 基线 → 文案 / 触发时机 / 优惠机制三个变量做 A/B 测
- Alumni 群日活连续 3 月 <5% → 群运营机制重做（重新 review §4 节奏）
- 推荐链路 30 天 0 成交 → 老带新机制本身可能没吸引力 / 触达机制问题

---

## §8. 数据回收 → PERSONAS refresh / 销售页迭代

### 8.1 Alumni → PERSONAS GT 升级 0.55 → 0.85+

`PERSONAS.md` 当前 GT 0.55，最大缺口是 §6 "用户真实访谈 0 次 / 真实评论 scrape 0 源 / 02 期真实学员名单看不到"。

本 SOP 提供的 alumni 数据 = 直接补这 3 个洞：

| PERSONAS 待补字段 | Alumni 数据如何补 |
|---|---|
| Persona A/B/C 占比 ⚠️ 推测 → 真实 | 02 期真实学员职业分布 + 报名 EOI intake → Mason 标 Persona 类型 → 占比真实化 |
| Persona A 痛点 Top 3 ⚠️ 推测 → 真实 | 月度 alumni 分享 + 故事文里真实原话 → Mason 提取 30 条原话 → 替换 AI 拟写 |
| 决策周期 ⚠️ 推测 → 真实 | 02 期报名记录：知道课程到付费天数 → 数据系统造好后自动统计 |
| 信任谁 / 不信什么（黑名单）| Testimonial 视频里学员讲"我之前不信 / 后来信了" → 直接拿原话 |
| 购买触发器 | 故事文里"我看到 X 才决定报名"原话 → 销售页 hero 切角 |
| 异议 Top 3 ⚠️ 全部待补 → 真实 | Mason 回访拒报名 / 退款学员（5-10 个）→ 异议原话池 → 销售页 FAQ + 顾问话术 |

→ **PERSONAS refresh 节奏**：02 期结业 + 03 期开课 30 天后，target-user-persona-mapper refresh mode 跑一次，GT 应到 0.85+

### 8.2 Alumni → 销售页 03 期改版输入

- OFFER WALL 4-12 件真实作品 → content.ts 替换占位图（gap audit Top2 同根因）
- Testimonial 视频 10+ 条 → 销售页新增 alumni section
- 故事文 6+ 篇 → 公众号长文 + 销售页"学员故事"按钮跳转
- 推荐人头像 / 姓名 → 销售页 trust signal 段

### 8.3 验证 PERSONAS 准确度 — 用 alumni 反推

每月 alumni 主题分享后，Mason 标讲者属于哪个 Persona：

- 如果 4 个月里讲者 80% 都是 Persona A → 验证 A 是核心
- 如果讲者大量出现 Persona D（资深程序员）→ 重大信号，PERSONAS 写"D 是误点进来"假设错了，要 refresh

---

## §9. 跟其他 SOP / Skill 的接口

> 本 SOP 不孤立运行，与 ai-programming/sops/ 其他文档 + 平台 marketing skill 矩阵深度绑定。

### 9.1 上游消费

| 上游 | 本 SOP 何处用到 |
|-----|---------------|
| [`PERSONAS.md`](../PERSONAS.md) | §2 学习路径决策树（基于 Persona A/B/C 判定推哪条）|
| [`FUNNEL_PLAN.md`](../FUNNEL_PLAN.md) | §5 升学窗口设计（差价 / 优惠机制对齐）|
| [`AUDIT_LOG.md`](../AUDIT_LOG.md) | §0.2 引用 P0 判定依据 |
| [`MARKETING_WORKFLOW_GAP_AUDIT.md`](../MARKETING_WORKFLOW_GAP_AUDIT.md) §2.3 + §3 D→A 衔接 | §0.2 P0 论证 |
| `curriculum/ai-programming/public/outline.json` | §2 4 大交付物作为升学 portfolio 输入 |

### 9.2 下游消费（谁会调用本 SOP）

| 下游 skill / SOP | 何时触发 | 如何消费本 SOP |
|---|---|---|
| `/cohort-ops-conductor postmortem mode`（待造 P0）| 02 期结业 + 7 天 | postmortem 自动 trigger 本 SOP §5.3 时间轴 + §8 PERSONAS refresh |
| `/marketing-data-collector`（gap Top8 待造 P0）| 每周一自动跑 | 拉本 SOP §7 KPI 数据进 admin Content ROI 看板 |
| `/course-funnel-architect` refresh mode | 03 期 init 之前 | 消费本 SOP §7 真实数据反哺 FUNNEL_PLAN.md 假设 |
| `/course-promotion-architect rescue mode` | 03 期招生不达预期触发 | 紧急启动 §3 老带新 + §6 故事文集中投放 |
| 销售页 03 期改版 `curriculum/ai-programming/landing/content.ts` | 03 期开课前 4 周 | 消费 §6 内容 + §8.2 alumni 素材直接替换 |
| `/xhs-draft`（小红书选题）| 每周三跑 | 消费 §6 故事文 + Testimonial 转 3 条切角 |
| `/wechat-article-quality` | 月度 alumni 分享后 | 审核 alumni 故事文 + recap 文 |
| `cohort-graduate-portfolio-collector`（gap Top2 待造）| 02 期结业 + W7 | 消费 §3.4 OFFER WALL 收集 SOP / §6 内容贡献激励 |
| `/eoi-followup` | 老带新成交时 | 消费 §3 referral 数据 → 销售助理派单到 Amelia / Rain / Angela |

### 9.3 不重复造的轮子

本 SOP **不**重做这些已有动作，而是引用：

- ❌ 不重做 cohort 期间运营 → 由 `/cohort-ops-conductor`（待造）负责
- ❌ 不重做销售页改版 → 由 `/course-custom-landing` 负责
- ❌ 不重做小红书 / 公众号文案 → 由 `/xhs-draft` + `/blog-longform-writer` 负责
- ❌ 不重做线下聚会 SOP → 由 `offline-event-sop` 三件套负责
- ✅ 本 SOP 只负责"alumni 全生命周期" — 决定**触发什么 / 什么时候触发 / 触发到哪条已有链路**

---

## §10. 03 期具体启动时间轴

> 假设 03 期 commenceCourseDate 为 D0（待 Lightman 拍板）。本节给 02 期结业到 03 期开课的精确 task 矩阵。

### 10.1 03 期 launch 前的 alumni 动作（02 期已结业基础）

| 相对日期 | 动作 | 谁 | 产出 |
|-----|-----|----|-----|
| 02 期结业前 14 天 | 启动基础班升级窗 § 5.1 | Beta | 升进阶班的 L0 alumni 列表 |
| 02 期结业 D-0 | 发结业证书 + 朋友圈晒图模板 | Beta + Mason | 02 期 ~37 + 47 = ~84 张证书 ⚠️ 估算 |
| 02 期结业 D+3 | 满意度问卷 + NPS + 跨课兴趣调研 | Mason | 02 期满意度报告 + alumni 跨课兴趣画像 |
| 02 期结业 D+7 | 进阶班升级最终窗关闭 + Alumni 群正式开（§4）| Beta + Mason | 03 期升级人数 + Alumni 群 ~84 人 |
| **D+14 = ALUMNI 群第一次主题分享** | 首场 alumni 月度分享（§4.3）| Beta + 主讲（L2 自荐）| 1 篇公众号 recap + 5-8 条小红书切角 |
| D+21 | OFFER WALL 收集启动（§3.4）| Beta | 4-12 件真实作品授权 + 上墙 |
| D+28 | Testimonial 视频拍摄 launch（§6）| Mason | 5-10 条 30-90s 视频 |
| **D+30 = 跨课升学推荐启动** | §5.3 D+30 1v1 触达 进阶班 L1 alumni | Mason + Amelia / Rain / Angela | ai-engineer / ai-solo-founder / ai-marketing 升学 lead 池 |
| D+45 | 销售页 03 期改版（消费 alumni 素材）| Lightman + Mason | content.ts OFFER WALL / Testimonial section / alumni 故事 |
| D+60 | 第二次 alumni 月度分享 | Beta | 1 篇公众号 + 5-8 条小红书 |
| D+90 | 跨课升学二次窗 + 03 期开课进入 4 周倒计时 | Mason + 课程顾问 | 03 期 alumni 老带新成交人数 |

### 10.2 配套需先 ready 的依赖

| 依赖 | 状态 | 阻塞 |
|-----|-----|-----|
| 03 期 launch date | ⚠️ 待 Lightman 拍板 | 本 SOP §10.1 时间轴全部依赖 |
| referrals 飞书表 / collection | ⚠️ 飞书表可即刻起跑，collection 等 gap Top4 数据系统 | §3.2 |
| Alumni 群（wechat）| 未开 | §4 全部 |
| 进阶班升级差价 + alumni 折扣具体金额 | ⚠️ 本 SOP 建议但待 Lightman 拍板 | §2 / §3 |
| OFFER WALL 授权书模板 | 未做 | §3.4 |
| `cohort-graduate-portfolio-collector` skill | 待造（gap Top2 P0）| §3.4 + §6 |

### 10.3 立即可做（不依赖 Lightman 决策）

| 动作 | 谁 | 何时 |
|-----|----|-----|
| 起飞书表 `ai-programming-referrals` | Mason | 下周一 |
| 起 alumni 群（wechat 拉群 02 期 L0/L1）| Beta | 02 期结业前 7 天 |
| 起 OFFER WALL 授权书模板 + 收集表 | Mason | 02 期结业前 14 天 |
| 起朋友圈晒图模板（设计师 Melody / Ada）| Mason 派单 | 02 期结业前 14 天 |
| 起结业证书模板（DESIGN.md 主色 #FF7B5A）| 设计师 | 02 期结业前 14 天 |
| 起首场 alumni 月度分享主讲征集 | Beta | 02 期结业 D+3 |

---

## §11. 红线 / 自检 checklist

### 11.1 触达红线

- ❌ 禁说"包做出产品 / 月入 / 副业 / 兼职 / 包就业"（CLAUDE.md feedback_no_revenue_promise）
- ❌ 禁说"限时 X 小时 / 立即报名 / 不报名后悔"焦虑话术
- ❌ 禁单日触达同一 alumni > 1 次
- ❌ 禁强制晒朋友圈 / 强制写好评换证书
- ❌ 禁未授权使用 alumni 作品 / 头像 / 真实姓名（CLAUDE.md feedback_real_examples_with_attribution）

### 11.2 数据红线

- ❌ 禁把 §7 KPI 数字（推测 / 假设基线）写进销售文案 / 销售页 / 顾问话术
- ❌ 禁伪造 alumni 数量 / 转化率 / 推荐数 用作 marketing
- ✅ 销售页 alumni section 真实人数 + 真实头像 + 真实作品 + 真实授权

### 11.3 商业模式红线

- 老带新 store credit 累计上限 $1000 / alumni（防变相分销）
- referral 仅成交后发 credit，不预付（防套利）
- alumni 升学折扣不叠加任何早鸟 / 多币种优惠（一次只用 1 折扣）

### 11.4 自检 checklist（每月 1 号 Beta + Mason 30min review）

- [ ] 上月 §5 时间轴所有窗口动作是否准时执行？
- [ ] §7 KPI 是否回写到飞书表？
- [ ] §6 内容产出数量是否达到当月节奏？
- [ ] Alumni 群是否有 opt-out 学员被骚扰？
- [ ] PERSONAS GT 是否有 alumni 新数据可补？
- [ ] 红线 §11.1-§11.3 是否有违反案例？
- [ ] 下游 skill / SOP 是否有 stale 数据需要触发 refresh？

---

## §12. 改动 / Owner / Review

| Field | Value |
|---|---|
| 主要 Owner | Mason（alumni / referral 数据 / 跨课升学 1v1）+ Beta（群运营 / cohort 衔接 / OFFER WALL 收集）|
| 升级决策 | Lightman（差价 / 优惠机制 / Faculty 邀请 / 红线判定）|
| Review 节奏 | 月度（每月 1 号 30min）+ 每期 cohort 结业后 postmortem |
| 配套待造 | `cohort-graduate-portfolio-collector`（gap Top2）+ `/cohort-ops-conductor`（gap Top3）+ `/marketing-data-collector`（gap Top8）+ referrals collection（gap Top4）|
| 上次更新 | 2026-05-29 |
| 下次更新触发 | 02 期 cohort 结业 D+7 / 03 期 launch date 拍板 / Lightman 拍板差价 |

---

> **本文档归属**：JR Academy ai-programming 课程 marketing workflow 5 phase × 76 task gap 补全包之一。
> 与同目录 `cohort-ops-conductor.md` / `content-pipeline-orchestra.md` / `marketing-data-collector-sop.md`（待造）共同构成 ai-programming 03+ 期持续运营的 4 大支柱 SOP。
