# AI 一人创业营 推广方案 PROMOTION_PLAN.md

> 由 `/course-promotion-architect init` 生成 · 2026-06-16
> 维护人：Beta（课程主理人 / BD，本课主战场亲自跑）+ Aurora / Seren（Marketing 主管协调）+ Lightman 把关
> 单一真相文档 — 任何推广节奏调整必须改这里
>
> 🧑 目标用户画像见 [./PERSONAS.md](./PERSONAS.md)（2026-06-10，⚠️ GT ≈ 0.30，v0 启动版）
> 💰 漏斗 / 三档定价见 [./FUNNEL_PLAN.md](./FUNNEL_PLAN.md)（2026-06-16，三档 $2,800 / $3,800 / $6,800 AUD）

---

## 0. Meta

| Field | Value |
|-------|-------|
| Course Slug | ai-solo-founder-bootcamp |
| Course 中文名 | AI 一人创业营 |
| Prod Training ID | **无**（cohortStatus=PLANNING，未在 prod 创建）|
| **🎯 Course Type** | **Type 3 · Bootcamp 创业孵化** + **Type 6 · 引流课**（单引流课，见 FUNNEL_PLAN §4）|
| 类型识别理由 | 客单价 $2,800-6,800 AUD（> ¥10k）+ 目标人群是「有积蓄想下场创业的专业人士」（早期 founder 而非求职者 / 在职提效）+ 靠学员真实案例 + Faculty 实名撑信任 → COURSE_TYPE_PLAYBOOKS Type 3 |
| **🧑 PERSONAS.md 状态** | ⚠️ GT ≈ 0.30（< 0.5 合格线）— v0 AI 推测，渠道方向可用、痛点原话不可直接落文案（PERSONAS §6 红线）|
| **💰 三档定价**（AUD，纯澳洲无多币种）| 自学陪练 $2,800 / 标准 $3,800 / 陪跑（含 1:1）$6,800 |
| 引流课 | 单引流课《一个晚上判断：AI 一人公司这条路你下不下得了场》，复用 3 个现成 lead-magnet HTML，定价待定（建议免费 / $29 AUD）|
| **推广周期** | **T-60 → D+90（约 20 周）** — Type 3 最长周期 |
| **launch date** | ⚠️ 待定（outline.json `commenceCourseDate: TBD，嘉宾铺设需 8 周`）— 推广节奏强依赖此日期，先按 T-60 倒排占位 |
| **目标 Target Enrollment** | **50 人**（墨 22 / 悉 16 / 布 12）— 2026-06-18 拍板统一到 50，收口原 20±5 vs 40-60 分歧 |
| 录取机制 | 申请制 + LinkedIn 必填（首期无视频面试，目标录取率 30-50%）|
| Status | build（2026-06-28 起：讲座已实跑给客户、报名踊跃；开始产出公众号长文切角2，待复盘 + EOI 跟进。launch date / Faculty 实名仍 P0 待定）|
| Created | 2026-06-16 by `/course-promotion-architect init` |
| Related Docs | [PERSONAS.md](./PERSONAS.md) / [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) / public/outline.json / program-course/ai-solo-founder-bootcamp/content.ts |

---

## 1. 课程定位摘要（从 FUNNEL_PLAN.md / outline.json 抽取，不重写）

**One-liner**（outline.json `promoDescription`）：用中文教澳洲华人专业人士做 AI 一人创业 + 拿澳洲 Grant 退税，11 周三城线下（墨尔本主场 + 悉尼 / 布里斯班卫星教室），从选品 → MVP → 收第一笔钱 → 全渠道营销 → 澳洲会计 → Grant → Demo Day。

**目标人群**（PERSONAS §1，⚠️ GT 0.30）：
- **A · 焦虑型 senior 程序员（45%，最对口）** — 35-45 岁大厂 senior，会 Cursor 卡在「从 0 到第一笔收入」，决策周期 4-8 周
- **B · 高薪 PM / 咨询 / Designer（35%）** — 想绕过工程团队自己 ship，缺技术信心，决策周期 3-6 周
- **C · 副业冲动 professional（20%）** — 律师 / 会计 / 医生，最看重澳洲税务 + Grant 合规，决策周期 2-4 周
- ❌ 不投不讨好（PERSONAS §4）：没积蓄的应届 / 纯打工躺平 / 想割韭菜 / 想融 VC / **不在澳洲的人**（投放必须地域定向澳洲）

**🎯 主推内容角度**（Type 3 创业孵化 playbook 优先级 × PERSONAS，⚠️ persona 痛点原话待 GT 补足后才能直接落文案）：

| 内容角度 | 权重 | 锚定 persona | 来源 |
|---------|------|------|------|
| Faculty 履历（麦肯锡 / 微软 senior eng / 持牌 CPA / Grant consultant / VC partner）实名 + LinkedIn 可核实 | ⭐⭐⭐⭐⭐ | A 购买触发器 #2 + B/C 信任谁 | COURSE_TYPE_PLAYBOOKS Type 3 + PERSONAS §2 |
| 学员 / 校友真实案例（澳洲华人 indie 从 0 到第一笔 $1,800，非营销 vlog）| ⭐⭐⭐⭐⭐ | A 购买触发器 #1（真实同侪）| PERSONAS §2 A |
| 「不写代码的 PM / 律师也 ship 出产品」非技术学员案例 | ⭐⭐⭐⭐ | B 购买触发器 #1 | PERSONAS §2 B |
| RDTI 43.5% 退税怎么算 + 持牌 CPA 全程 review（合规切角，别处学不到）| ⭐⭐⭐⭐ | C 购买触发器 #1/#2 | PERSONAS §2 C + outline.json L36 |
| 三城 hub-and-spoke 线下 + Demo Day + 互为客户日晚宴（cohort 网络）| ⭐⭐⭐ | A/B/C 都吃熟人信任 | outline.json highlights |

**承诺红线**（CLAUDE.md 顶级铁律 + course-promotion-architect 红线 §1）：
- ❌ 所有 task 文案禁用「月入 X / 包做出能赚钱的产品 / 保证拿到 Grant 退税 / 包就业 / 拿 offer」；禁用「副业」一词
- ✅ 只承诺过程结果：MVP Live / $1+ 真实付费（毕业指标 #1）/ ABN 注册 / 提交 Grant 申请（提交 ≠ 拿到）/ Demo Day 出席
- ⚠️ RDTI 措辞：「教你准备 + 提交 RDTI 申请」，不写「帮你退 $X 万」（PERSONAS §0 已标 RDTI $87k 是营销 hook 虚构叙事）

---

## 1.5 双切角宣传策略（Dual-Angle · 2026-06-22 新增）

> 📐 写手挑具体内容角度看 [CONTENT_ANGLES.md](./CONTENT_ANGLES.md)（9 个切角调色板，是本节 2 个商业切角的展开素材库）。本节仍是商业定位 / 人群分流的权威。

> Lightman 2026-06-22 拍板：**同一门 OPC 课、同一套三档定价 / Faculty / Demo Day / 漏斗，两套宣传话术打两类人**。不是两门课、不另造 funnel —— 销售页 URL / 价格 / 毕业指标全共用，只在 hero 文案 / 内容切角 / 部分渠道侧重上分流。

### 为什么要两个切角
现有 PROMOTION / PERSONAS 全围绕「还在打工、想下场创业」的 A/B（焦虑程序员 / 高薪 PM）。但同样适合 OPC 的还有一类人：**已经有生意 / 专业 / 客户 / 现金流的小老板**（PERSONAS §2.5 Persona E）—— 他们不是从 0 起，是从「已有积累」起。对这群人喊「辞职创业」是错的，要喊「用 AI 把你已有的东西变成一个能独立卖的产品」。

### 两个切角定义

| | 切角 1 · 创业营 | 切角 2 · 小企业老板用 AI |
|---|---|---|
| 一句话 | 趁窗口下场，做一家 AI 一人公司，从 0 到第一笔收入 | 你已有行业 know-how + 客户 + 现金流，用 AI 把它做成一个新产品 / 新收入线 |
| 主锚定 persona | A 焦虑型 senior 程序员 / B 高薪 PM·Designer | C 专业人士产品化 / **E 有积累的小老板**（PERSONAS §2.5）|
| 身份词 | founder / 一人公司 / OPC / 下场 | 老板 / 生意 / 多一条收入线 / 用 AI 给生意装个产品 |
| 核心痛点 | 打工到天花板、窗口在关、技术够但不会做生意 | 收入靠卖时间 / 靠人力堆、想要可复制的产品收入但没技术 |
| 主 hook | 真实同侪从 0 收第一笔 / Faculty 实名可核实 / cohort 网络 | 你的行业积累 = 别人没有的护城河 / ABN·RDTI 你本来就有 / 在职可跑不用 all-in |
| 用得上的课程模块 | 全程（选品 → MVP → 收钱 → Demo Day）| 同一套，强调「把现有 know-how 当选品土壤」+ Phase 3 澳洲合规 / Grant（他们本就有 ABN）|

### 🚨 产品-承诺一致性护栏（最重要，别翻车）
OPC 教的是「**从 0 做一个一人 AI 产品 / 公司**」，**不是**「优化你咖啡店日常运营 / 全面数字化你现有的店」。所以切角 2 的承诺必须收在：
- ✅ 能说：用 AI + 你的行业理解，做出一个**新的**可复制产品 / 数字收入线，并收到第一笔真实付费（毕业指标 #1）；ABN 你已有、教你准备 RDTI 申请。
- ❌ 不能说：「帮你省 X% 人力」「帮你把店全面数字化」「AI 接管你的日常运营」「帮你的生意降本」—— 这些课程不教，说了就是过度承诺 + 退费风险（CLAUDE.md 红线）。
- ⚠️ 「传统中小企业数字化」（Persona E3）这类人里，**只吸引「想用 AI 做个新产品 / 新收入」的那部分**；纯内部提效需求引导去 `ai-adoption-bootcamp`，别硬塞 OPC。

### 渠道分流（共用 §3 矩阵，切角 2 额外侧重）
两个切角**共用 §3 全部渠道**，差别在侧重 + 文案：
- **切角 1 重**：校友群 1v1 / LinkedIn / 即刻·Twitter build-in-public / 公众号「一人公司」切角。
- **切角 2 额外重**：视频号 + 朋友圈（40-50 岁老板年龄层）、**澳洲本地华人商会 / 行业群 / 同乡群**（C/E 独有渠道，PERSONAS §3 标 ROI 高）、线下商家 / 专业人士沙龙、公众号「专业人士·小老板用 AI 做产品 + 澳洲 Grant」切角、小红书「澳洲副业退税 / 不写代码做产品」切角（B/C/E）。
- **不变**：付费投放仍需 Lightman 审批 + 地域定向澳洲 + 避开「躺赚 / 割韭菜」词（PERSONAS §4）。

### 落地动作（接 §4 时间轴，不另起一条线）
- **销售页**（§4 T-56 / T-5，`/course-custom-landing` Mode B）：hero 加一个「你已经有生意 / 专业？」二级入口段，复用同一页（**URL 不变，铁律**），不新建路由。
- **公众号 / 小红书选题**：每切角各留固定配额（建议 6:4 偏切角 1；切角 2 用 C/E 切角）。
- **海报**（§4 T-45）：切角 2 单出一套「老板版」主视觉（主打「行业积累 → AI 产品」，**不主打「辞职创业」**）。
- **GT 前置**：切角 2 文案落地前，Persona E 现在 GT≈0.15，痛点原话不可直接用，先按 PERSONAS §7 P0(E) 补真实样本（客服记录搜「我开店 / 我是律师 / ABN」+ 商会群反馈）。

---

## 2. 目标与漏斗反推

> ⚠️ 以下公式来自行业基线（course-promotion-architect Mode A 模板），不是本课实测。Type 3 创业课转化路径跟求职 / 在职课不同 —— 申请制 + 1v1 私聊为主，所以「加微信 → 报名」转化率比公域漏斗高、但流量绝对量小。首期跑完用真实数据替换。

```
报名目标：50 人（已统一 50 · 墨 22 / 悉 16 / 布 12）
  ↓ 申请制录取率：30-50%（outline.json）
申请单提交目标：~125 份（50 ÷ 40%）
  ↓ 私域 / 引流课 → 申请转化率：假设 25%（Type 3 高信任低量，⚠️ 基线推测）
进私域群 / 引流课报名目标：~500 人
  ↓ 引流课 / lead magnet 页面 CTR 假设 25%
落地页 / lead-magnet UV 目标：~2000 人
  ↓ 各渠道流量分摊（Type 3 创业孵化基线 — 不是小红书主导！）
  - 1v1 私聊 + 创业者圈层 + LinkedIn DM：占转化大头（量小质高，主战场）
  - LinkedIn 长文（英文创业者圈 + Faculty 背书）：~600 UV（30%）
  - 公众号 / 知乎深度长文（一人公司 / RDTI 实战）：~500 UV（25%）
  - 老学员 / 校友群定向私聊（AI Engineer / OpenClaw 校友，PRD 写 70% 生源）：高转化（不计 UV，直接进申请）
  - 线下 founder 沙龙（墨 / 悉，闭门邀请）：~300 UV（15%）
  - 小红书少量种草（B/C 切角）：~400 UV（20%，曝光为主非转化）
  - 视频号 founder 短视频（B/C 年龄层）：~80 UV（10%）
```

> 🚨 **PERSONAS §3 最关键结论**：这门高价课的买家重心**不在小红书**。Persona A（45%，最大群体）几乎打不到小红书，「往小红书加号 = 往错的地方加资源」。本课真正的「矩阵」是 **微信私域（公众号 + 校友群 + 澳洲本地华人群）+ LinkedIn 建可信 + 线下 networking 转化**，小红书只留 1-2 个切角（非技术 ship / 澳洲副业退税）当补充。

⚠️ **待补 ground truth**：launch date / 真实申请 → 录取转化率 / 引流课 → 申请转化率 / 老学员升级专属优惠金额（outline.json FAQ 写「待商务确认」）。全部需 FUNNEL_PLAN.md + 首期真实数据。

---

## 3. 渠道矩阵（按 PERSONAS §3 加权 ROI 排序 — 私域 + LinkedIn + 线下为主轴，小红书为辅）

> 🚨 本表以 **PERSONAS §3 跨 persona 渠道 ROI 排序为权威**（非 COURSE_TYPE_PLAYBOOKS Type 3 默认数字），因为本课 persona 渠道方向虽 GT 0.30 但方向性结论可用（PERSONAS §3 注明「方向性结论已能用」）。频次取 Type 3 playbook 兜底。

| Rank | 渠道 | 主负责 | 子 skill | 频次（Type 3 创业孵化基线）| 锚定 persona | 备注 |
|------|------|--------|---------|------------------|------|------|
| 1 | **老学员 / 校友群定向 1v1 推荐**（AI Engineer / OpenClaw 校友里 35-50 岁高薪、动过创业念头的人）| Beta + 课程主理人 | （无 skill，✏️ 人执行）| 持续，T-60 起每周 5-10 个定向私聊 | A/B/C 全员最高 ROI | PRD 写 70% 生源来自内部升级 — **这是本课第一渠道，不是公域** |
| 2 | **1v1 私聊 + LinkedIn DM**（创业者圈层 + Faculty 引荐）| Beta 亲自，不外包 | `/eoi-followup`（lead 进来后跑 SOP）| 每天 2-3 个 lead | A/B 高净值 | Type 3 主战场（COURSE_TYPE_PLAYBOOKS）|
| 3 | **LinkedIn 长文 + Faculty 背书帖**（英文创业者圈 + 履历可核实）| Beta + 已退出 founder 嘉宾轮流 | `/blog-longform-writer`（写）| 3 篇/周 × 20 周 = ~60 篇 | A/B 信任建立 | Faculty 实名 + LinkedIn 可一一核实是 A 的购买触发器 |
| 4 | **公众号 / 知乎深度长文**（一人公司 / RDTI 实战 / 非技术 ship 三独家切角）| Marketing 文案 + Beta | `/blog-longform-writer` + `/wechat-article-quality`（审）/ `/wushi-caijing-style`（深度）| 4-6 篇 总周期（单篇 3000-5000 字深度）| A/B/C 通吃 | PERSONAS §3 第 2 高 ROI「全员通吃」|
| 5 | **销售页 Custom Landing**（Faculty 名册 + 三档对比 + P3 协作图 + 校友案例）| Beta + Dev | `/course-custom-landing`（Mode B 迭代）| 1 次搭 + 月度迭代 | A/B/C | content.ts 已有，需补 Faculty 实名 + 校友案例 |
| 6 | **线下 founder 沙龙 / networking**（墨 / 悉闭门邀请，非公开宣传）| Aurora / Seren + Beta | `/offline-event-content-design` + `/offline-event-sop` | 1-2 场总周期 | C 最吃熟人信任 + A/B | 三城线下本就是课程卖点，前置成获客渠道 |
| 7 | **视频号直播 / 财经商业内容**（真人演示 + 直播答疑，适配 40-50 岁）| Beta 出镜（不代笔）| `/webinar-topic-feasibility`（先审 topic 能不能爆）| 1-2 场总周期 | B/C 年龄层 | PERSONAS §3 Rank 5「偏 B/C 年龄向」|
| 8 | **小红书少量种草**（仅「非技术也能 ship / 澳洲副业退税」两切角）| Summer / Lily / KIKI | `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` | 3 篇/周 × 20 周 = ~60 篇（轻量，曝光为主）| B/C（A 几乎打不到）| 🔴 PERSONAS §3 注明对本课是**次要渠道**，不当主力 |
| 9 | **SEO 长尾**（「澳洲一人公司」「RDTI 退税 自己申请」「澳洲华人 AI 创业」）| Dev | `/seo-optimizer` + `/eeat-optimizer` | 一次性投入 + 月度迭代 | A/B/C | 长期资产，起效 30-90 天 |
| 10 | 海报（朋友圈 + 小红书 + 视频号配套）| Designer | `/poster-user-test`（ChatGPT 侧 6 选 3 测）| 2-3 套总周期 | — | 主打 Faculty 阵容 + 三城线下，不主打「快速变现」（A 黑名单）|
| 11 | **OPC 公开机会雷达 → 官网周报（引流层）**（一人公司能申请的全类型「搞钱机会」：全球 + 澳洲 hackathon / AI 比赛奖金 / 加速器·孵化器 / **政府补贴·创业资助·RDTI 等 grant** / startup credits，每条带 deadline + 官方链接）。**免费公开**，引人进漏斗；报名后的申请陪跑/补贴日历等会员专属服务见 [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) §11| 自动（2 个 schedule cloud routine）+ Beta 周校对 | **已上线 schedule routine**：① `Hackathon & AI 比赛雷达 — 隔天 (OPC 创业营视角)`（`trig_0189qzNAfH7dKW8TJysPTPXY`，隔天写 `omni-report/hackathon-radar/{date}.md`）② `OPC 比赛雷达 · 每周官网周报`（`trig_01RDCxuVDhjGHkuJZko5yNt1`，周日重写 jr-wiki 文章 + 海报）| 隔天采集 + 每周一发布 | A/B/C（C 尤其看重 Grant/RDTI）| **常青 SEO + nurture 活资产**，已上线 `https://jiangren.com.au/blog/ai-hackathon-weekly`。是本课 Grant/RDTI + Demo Day 卖点的「活内容证明」。**双向链**：周报底部已链向课程；课程销售页 §C 加反向链回（OPC↔雷达）。**这是已存在的自动化引擎，promotion 直接消费、不另造** |

**不跑的渠道**（Type 3 红线 + PERSONAS §4）：
- ❌ EOI 群发式跟进（创业者反感模板话术 — 用 `/eoi-followup` 但走高质 1v1，不群发）
- ❌ 大型公开讲座（不是目标人群场景 — 改闭门 founder 沙龙）
- ❌ 付费投放（创业者圈层付费投放转化率 < 0.5%；且若投必须地域定向澳洲、避开「学生 / 躺赚 / 割韭菜」关键词 — PERSONAS §4。⚠️ 任何付费 task 需 Lightman 审批预算）
- ❌「副业 / 月入 X / 包做出产品」钩子（A/B/C 黑名单 + CLAUDE.md 红线）

> **决策原则**：本课至少跑 1+2+3+4+5+6 这 6 个渠道（私域 + 1v1 + LinkedIn + 公众号 + 销售页 + 线下沙龙是地基），小红书 / 视频号 / SEO / 海报视 bandwidth 加。**注意：本课地基跟求职 / 在职课不同 —— 私域 + 1v1 + 线下排在小红书之前。**

---

## 4. 时间轴 Task 矩阵（T-60 → D+90，Type 3 最长周期）

> ⚠️ launch date 待定，以下按 launch=D0 倒排，T-60 = 开课前 60 天。嘉宾铺设需 8 周（outline.json），故 Faculty 确认必须 T-56 前启动。
> 🤖 = AI 执行（Claude 跑 skill）/ ✏️ = 人执行（真名发声 / 1v1 / 拍板）/ 🤖→✏️ = AI 出稿人精修发布。
> **不要一次执行全部** —— 本节是派单清单，每周一晨会按 `/course-promotion-architect weekly` 取当周 task。

### 🔴 T-60 ~ T-56（开课前 8-9 周）· 信任地基 + 嘉宾铺设（创业课命脉，最先做）

- **T-60 周一 10:00**：✏️ Beta 确认 Faculty 11 类讲师实名 + LinkedIn + 履历，把 outline.json / content.ts 里的占位符替换成真名（嘉宾铺设需 8 周，这是 P0 阻塞项）— 半天 — **P0**
- **T-60 周一 14:00**：✏️ Beta 确认 launch date（嘉宾档期定下来才能定）+ 三城名额上限（墨 10-12 / 悉 6-8 / 布 3-5）+ 老学员升级优惠金额（outline.json FAQ「待商务确认」）— 2h — **P0 ⚠️ 阻塞全盘**
- **T-58 周三 10:00**：✏️ Beta + Aurora 从 AI Engineer / OpenClaw 校友群筛出符合「35-50 岁 / 高薪 / 动过创业念头」的名单（PRD 写 70% 生源来自内部）→ 建定向私聊清单 — 半天 — **P0**（这是本课第一渠道）
- **T-58 周三 14:00**：🤖→✏️ 跑 `/target-user-persona-mapper validate ai-solo-founder-bootcamp` 把 PERSONAS GT 从 0.30 往 0.5 拉（配合 P0 校友访谈），文案落地前必须做 — Claude 出框架 + Beta 安排 5-8 个校友访谈 — 跨周 — **P1**
- **T-56 周五 10:00**：✏️ Dev + Beta `/course-custom-landing` Mode B 给销售页补 Faculty 实名名册 + 三档对比表（$2,800 / $3,800 / $6,800）+ 校友案例占位 — 2 天 — **P0**（销售页是落地承接点，学员落地无处去 = 崩盘）

### 🟠 T-49 ~ T-42（开课前 6-7 周）· 内容信任资产开始铺

- **T-49 周一 09:00**：✏️ Beta 在校友定向清单里启动第一波 1v1 私聊（每周 5-10 个，不是群发，PERSONAS A 黑名单忌刷屏）— 每条 5-10min — **P1**
- **T-49 周一 11:00**：🤖 `/blog-longform-writer` 出 LinkedIn 长文 #1：「为什么澳洲 senior 工程师该认真考虑 OPC 这条路」（A 切角）— ✏️ Beta 真名发布（LinkedIn 发声必须 ✏️ 人）— 60min 写 + 20min 精修 — **P1**
- **T-49 周三 10:00**：🤖 `/blog-longform-writer` + `/wushi-caijing-style` 出公众号深度长文 #1：「一个澳洲华人 indie 怎么从 0 收到第一笔 $1,800」（真实案例，非营销 vlog 口气，A 购买触发器 #1）— 🤖→✏️ Marketing 文案精修 — 半天 — **P1**
- **T-49 周三 14:00**：🤖 `/wechat-article-quality` 审上文（按 C 类推广文 + 反 AI 味）— 30min — **P1**
- **T-47 周五 10:00**：🤖 `/blog-longform-writer` LinkedIn 长文 #2：已退出 founder 嘉宾视角「我当年踩的坑」— ✏️ 嘉宾 / Beta 发 — **P2**
- **T-45 周一 10:00**：✏️ Designer 出海报套 #1（主打 Faculty 阵容 + 三城线下，**不主打快速变现**）→ 🤖 `/poster-user-test` 让 ChatGPT 扮 A/B/C 中 3 个 persona 测「看不看得懂 / 信不信」— 设计 1 天 + 测 0.5 天 — **P2**

### 🟠 T-35 ~ T-28（开课前 4-5 周）· 公众号 + LinkedIn 持续 + 线下沙龙筹备

- **T-35 周一 09:00**：✏️ Beta 校友 1v1 第二波 + 把意向高的 lead 倒进 `/eoi-followup` 跑 24h-72h-7d 高质 SOP（不群发）— **P1**
- **T-35 周三 10:00**：🤖 公众号深度长文 #2：「不写代码的 PM / 律师怎么 ship 出产品」（B 切角 + coaching 70% 说明）— 🤖→✏️ 精修 — 半天 — **P1**
- **T-33 周五 10:00**：✏️ Beta + 持牌 CPA 嘉宾敲定线下 founder 沙龙（墨 / 悉，闭门邀请制）日期 + 场地 → `/offline-event-content-design` 出策划案 — **P1**
- **T-30 周一 10:00**：🤖 公众号深度长文 #3：「RDTI 43.5% 退税自己怎么准备 + 持牌 CPA review」（C 切角，合规独家，⚠️ 措辞「教你准备提交」不写「帮你退 $X」）— 🤖→✏️ — 半天 — **P1**
- **T-30 周三 10:00**：🤖 `/xhs-topic-picker` 出 9 个候选选题（仅「非技术也能 ship / 澳洲副业退税」两切角，B/C 用）→ ✏️ Summer 选 3 个 — 30min — **P2**
- **T-30 周三 11:00**：🤖 `/xhs-draft` 3 选题各 3 切角 → `/xhs-poster` 配图 → `/xhs-review` 过违禁词 + 降 AI 率 → ✏️ Summer 排期（小红书是本课**次要**渠道，轻量发，别堆资源）— **P2**

### 🟠 T-21 ~ T-14（开课前 2-3 周）· 引流课上线 + 私域培育 + 视频号

- **T-21 周一 10:00**：🤖→✏️ `/intro-course-design` 把 3 个现成 lead-magnet HTML（opc-assessment / 30min-ship / rdti-prompt-template）包装成单引流课《一个晚上判断：OPC 你下不下得了场》+ 入私域群入口 — Claude 出结构 + Beta 定价拍板（免费 / $29 AUD）— **P1**
- **T-21 周三 14:00**：🤖→✏️ `/funnel-handoff-design` 落地 7 天过渡序列话术（D0-D7，见 FUNNEL_PLAN §5）+ 私域群 SOP — **P1**
- **T-18 周五 10:00**：✏️ Beta 视频号直播 #1：真人演示「30 分钟 ship 一个最小产品」+ 直播答疑（B/C 年龄层，适配）— `/webinar-topic-feasibility` 先审 topic — 1.5h — **P2**
- **T-16 周一 09:00**：✏️ Beta 校友 1v1 第三波 + 引流课报名者进 7 天过渡序列 — **P1**
- **T-14 周三 10:00**：🤖 LinkedIn 长文 #3（Faculty 背书帖：麦肯锡 / 微软 senior eng / VC partner 阵容）— ✏️ Beta 发 — **P1**

### 🔴 T-7 ~ T-1（开课前 1 周）· 申请收口 + 名额倒计时 + 阻塞项清零

- **T-7 周一 09:00**：✏️ Beta + Amelia / Rain / Angela 对所有引流课 / 私域意向 lead 做 1v1 push（解决 A「凭什么花钱」/ B「会不会做 demo 玩具」/ C「Grant 出错谁担责」三类异议，PERSONAS §2 异议 Top3）— 每条 5-10min — **P1**
- **T-7 周三 10:00**：✏️ Beta 群内 + 销售页同步「三城名额现状 + 申请截止」（墨 X / 悉 X / 布 X，真实剩余，不造假紧迫感）— **P1**
- **T-5 周五**：✏️ Dev + Beta 检查申请表单 + 报名 endpoint 通（报名按钮死链 = P0 崩盘）+ 销售页 Faculty 实名 / 三档价 / 校友案例全部到位 — **P0**
- **T-3 周一**：🤖 `/poster-user-test` 过的海报套 #2（开课倒计时 + 三城）→ ✏️ 全员 + 校友真名发朋友圈（学员真名 > 销售号广告）— **P1**
- **T-1 周五**：✏️ Aurora 检查 D-1 清单：拉三城班级群 / 发开课通知 / Pre-work（L00 装机 + LLM Key + ABN 预备）提醒已发 — **P0**

### 🟢 D0 ~ D+14（开课后）· 现场内容资产 + EOI 收尾

- **D0**：✏️ Beta 现场拍三城线下开课氛围（卫星教室 + 1:8 Tutor）→ 🤖→✏️ 整理成朋友圈 / 小红书素材（为二期招生攒料）— **P1**
- **D+3**：✏️ Aurora EOI 收尾：T-7 没转化的 lead 转「下期意向」长期私域池（不放弃，配合 D+90 长周期）— **P2**
- **D+7**：🤖 公众号长文「首期开课了，他们在做什么」（W1 选品周 + OPC 心智课现场）— 🤖→✏️ — **P2**
- **D+14**：🤖→✏️ `/course-promotion-architect weekly` 复盘首两周推广，更新 §6 周报 — **P2**

### 🟢 D+30 ~ D+90（开课后 1-3 月）· 二期招生资产 + 长尾

- **D+30**：✏️ Beta 收集 W1 vs W4 学员数据看板（MRR / 流量 / 内容产出）→ 攒「真实毕业 case」（二期招生命脉，Reforge / On Deck 玩法）— **P2**
- **D+60**：🤖 `/seo-optimizer` + `/eeat-optimizer` 上线长尾词矩阵（「澳洲一人公司」「RDTI 自己申请」「澳洲华人 AI 创业」）— Dev — **P2**
- **D+90**（接近 W11 Demo Day）：✏️ Beta 三城联合 Demo Day + 互为客户日晚宴现场 → 拍学员真实 MVP / Demo → 成为二期招生第一批 social proof + 回灌 PERSONAS（首期真实数据）+ FUNNEL（二期升价决策）— **P1**

---

## 5. 责任分配（RACI）

| 角色 | 负责的 task 类型 | 本课特别说明 |
|------|---------------|------|
| **Beta**（BD / 课程主理人）| **本课主战场** — Faculty 邀请 / 校友 1v1 / LinkedIn 发声 / 公众号深度文 / 视频号出镜 / 线下沙龙 / launch date 拍板 | Type 3 创业课靠 Beta 亲自跑信任，**不能外包**（COURSE_TYPE_PLAYBOOKS）|
| **Lightman** | 预算审批 / 二期升价决策 / 红线把关 / 三城招生数拍板（已统一 50：墨 22 / 悉 16 / 布 12）| 付费投放 / 升价必须他拍板 |
| **Aurora / Seren**（Marketing 主管）| 渠道排期 / 线下沙龙总指挥 / EOI 协调 / KPI 监控 | 协调，非主战场执行 |
| **Marketing 文案** | 公众号 / 知乎深度长文 / 海报文案（走 `/blog-longform-writer` + `/wechat-article-quality`）| 4 类切角轮流（A/B/C + Faculty）|
| **Summer / Lily / KIKI**（新媒体）| 小红书选题 / 写稿 / 配图 / 排期（**轻量，本课次要渠道**）| 只跑「非技术 ship / 澳洲副业退税」两切角，别堆资源在小红书 |
| **Amelia / Rain / Angela**（课程顾问）| 引流课 / 私域 lead 1v1 跟进（24-72h-7d SOP）/ 三类异议话术 | 走高质 1v1，不群发 |
| **Neomi**（销售助理）| EOI 派单 / SLA 监控 / lead 状态维护 | — |
| **Designer** | 海报（Faculty 阵容 + 三城线下，不主打变现）/ 销售页视觉 | 海报必走 `/poster-user-test` 测 |
| **Dev** | 销售页 Custom Landing 迭代 / 申请表单 + 报名 endpoint / SEO 上线 | 报名 endpoint 死链 = P0 |

---

## 6. 周报（每周一晨会更新一行 · `/course-promotion-architect weekly`）

| Week of | 上周完成 | 上周阻塞 | 本周目标 | 风险 flag |
|---------|---------|---------|---------|----------|
| 2026-06-16（init）| 本方案创建 | launch date 未定 / Faculty 占位符未替实名 / PERSONAS GT 0.30 | 待 Beta 确认 launch + Faculty + 校友名单 | ⚠️ launch date 不定则整条时间轴无法落地 |
| 2026-06-28 | 「企业如何构建高效AI操作系统」讲座已实跑（客户场，报名踊跃）+ 公众号长文（切角2 小老板）大纲定稿待写正文 | 复盘缺真实数据（日期/到场/EOI 数）+ EOI 名单未导入 | 写完切角2长文过 2 道 gate + 收复盘数据（顺带采 Persona E 真实 GT）+ EOI 名单进 `/eoi-followup` | 🟢 讲座 attendees = Persona E 真实样本，是把 GT 0.15→0.5 的金矿，别浪费 |

---

## 7. 风险与决策日志

### 2026-06-16 v0 init

**已对齐**：
- 课程类型 = Type 3 创业孵化（客单价 $2,800-6,800 AUD > ¥10k + 早期 founder 人群 + 靠学员案例 + Faculty 实名撑信任）
- 三档定价 $2,800 / $3,800 / $6,800 AUD（FUNNEL_PLAN §3，对齐 content.ts + outline.json）
- 渠道矩阵以 PERSONAS §3 为权威：私域 + 1v1 + LinkedIn + 公众号 + 线下为主轴，**小红书是次要渠道**（A 45% 打不到）
- 推广周期 T-60 → D+90（Type 3 最长，决策周期 4-8 周需要长慢推）

**⚠️ 待补 ground truth（防幻觉，不要瞎填）**：
- 🚨 **launch date 未定**（outline.json `commenceCourseDate: TBD`，嘉宾铺设需 8 周）— 整条时间轴按 T-60 占位，定了立刻倒排
- 🚨 **Faculty 占位符未替换实名**（outline.json / content.ts 仍是占位）— Type 3 命脉，T-60 P0
- 🚨 **PERSONAS GT 0.30 < 0.5** — 渠道方向可用，但**痛点原话不能直接落文案**（PERSONAS §6 红线）；必须先补邻近 cohort（AI Engineer / OpenClaw 校友）访谈 + 销售顾问口播（PERSONAS §7 P0）
- ✅ **招生目标已统一 50 人**（墨 22 / 悉 16 / 布 12）— 2026-06-18 Lightman 拍板，收口原 20 vs 40-60 分歧
- ⚠️ **老学员升级优惠金额未定**（outline.json FAQ「待商务确认」）

**🚨 红线**（CLAUDE.md 顶级铁律）：
- 禁止承诺金钱 / 副业 / 入职 / offer / 保证 Grant 退税；RDTI 只写「教你准备提交」
- 投放 / 内容必须地域定向澳洲，避开「学生 / 躺赚 / 割韭菜」关键词（会引来 Persona D 错的人）
- LinkedIn / 朋友圈 / 群发声 task 必须 ✏️ 人执行（真名），不能 🤖 AI 替发

---

### 2026-06-22 双切角宣传

**决策**：Lightman 拍板 OPC 用**两个切角**宣传 —— 切角 1「创业营」（A/B）+ 切角 2「小企业老板用 AI」（C/E）。**同一门课、同一漏斗、同一销售页 URL**，只分流文案 / 内容切角 / 部分渠道侧重。详见 §1.5。

**新增**：PERSONAS §2.5 Persona E「有积累的小老板」（4 子类：实体生意 / 专业人士产品化 / 传统 SME / 想新开），全字段 GT≈0.15 纯推测。

**🚨 护栏**：切角 2 承诺收在「用行业积累 + AI 做出新产品 / 新收入线」，**禁说「降本 / 省人力 / 全面数字化你的店」**（OPC 不教这个，过度承诺 = 退费风险）。纯内部提效需求引导去 ai-adoption-bootcamp。

**待办**：① 切角 2 文案落地前补 Persona E GT（PERSONAS §7 P0(E)）② 销售页加「老板」二级入口段（不新建路由）③ 海报出「老板版」一套。

---

## 8. 调用子 skill 索引

| Task / 场景 | 调用 skill | 在本方案的位置 |
|------------|----------|--------------|
| 落地引流课（3 个 lead-magnet → 单引流课）| `/intro-course-design` | T-21 |
| 落地 7 天过渡序列话术 | `/funnel-handoff-design` | T-21 |
| 销售页补 Faculty 实名 + 三档对比 + 校友案例 | `/course-custom-landing`（Mode B）| T-56 / T-5 |
| LinkedIn / 公众号 / 知乎深度长文 | `/blog-longform-writer` + `/wushi-caijing-style` | T-49 起持续 |
| 公众号文质检 | `/wechat-article-quality` | 每篇长文后 |
| 小红书（次要渠道，轻量）| `/xhs-topic-picker` → `/xhs-draft` → `/xhs-poster` → `/xhs-review` | T-30 起 |
| 海报用户测试 | `/poster-user-test`（ChatGPT 侧 6 选 3）| T-45 / T-3 |
| 线下 founder 沙龙策划 | `/offline-event-content-design` + `/offline-event-sop` | T-33 |
| 视频号 / 讲座 topic 可行性 | `/webinar-topic-feasibility` | T-18 |
| EOI / 私域 lead 跟进 SOP | `/eoi-followup`（高质 1v1，不群发）| T-35 起 |
| SEO 长尾 | `/seo-optimizer` + `/eeat-optimizer` | D+60 |
| PERSONAS GT 升级 | `/target-user-persona-mapper validate` | T-58 |
| 首期开课后漏斗 / 推广审计 | `/curriculum-positioning-audit` + `/course-promotion-architect audit` | D+30 起 |
| 报名不达预期补救 | `/course-promotion-architect rescue` | 按需 |

---

## 9. 🚑 RESCUE · 报名补救冲刺（2026-06-30 · `audit`+`rescue` by Simone）

> 触发：报名偏少 —— 当前**全三城约 17 人** vs 目标 **50（墨22/悉16/布12）**，gap ≈ 33。老板要大力宣传、三城各至少 2 人保底。本节是**未来 2 周冲刺**，不改上面 T-60 主线，只补救。

### 9.1 诊断：为什么报名少（root cause）

| # | 根因 | 证据 | 影响 |
|---|------|------|------|
| 1 | **没有硬开班日期 = 没有倒计时锚点** | Meta `launch date 待定`（嘉宾铺设需 8 周）| 用户没有"现在不报就错过"的理由 —— 高客单创业课最依赖紧迫感，这是头号失血点 |
| 2 | **报名/申请入口不顺** | `cohortStatus=PLANNING`、prod 未创建 Training ID | 种草来的人**落地无处可去**或申请流程不清，漏斗顶端再大也漏 |
| 3 | **17 人未必是失败，是漏斗没走完** | 申请制 + $3,800、A/B 决策周期 4–8 周 | 很多人正在决策中 → 缺的是**1v1 临门一脚**，不是更多曝光 |
| 4 | **主战场没火力全开** | Type 3 靠 1v1 私聊 / 校友群（70% 生源）/ 线下沙龙，不是公域种草 | 若只发了图文、没逐个私聊校友 + 没办闭门沙龙 → 等于没打主战场 |
| 5 | **缺真实校友案例**（Type 3 信任核心）| 首期未开课、无 $1,800 真实案例可晒 | 信任背书只能靠 Faculty 实名先顶，转化天花板被压低 |
| 6 | **PERSONAS GT 0.30、痛点原话不能直接落文案** | PERSONAS §6 红线 | 种草文案不够戳、像"喊口号" |

### 9.2 补救策略：把「公开课」当转化引擎，主战场 1v1 收口

核心思路 = **免费公开课蓄水（体验关）→ 私域/蓄水群养信任 → 1v1 临门一脚转申请**。曝光为辅、私聊为主。

### 9.3 两周冲刺 Task 矩阵

| 时间 | 动作 | 负责人 | skill | P |
|------|------|--------|-------|---|
| **D0（今天）** | 确认 prod 报名/申请入口是否通；不通先开"先报公开课/留资"临时入口 | Simone + Dev | — | **P0** |
| D0 | 蓄水群复活第一条（破冰+公众号长文），文案已就绪 | Simone | 蓄水群SOP | P0 |
| D0 | 跟 Summer 对齐 OPC 广告分工：谁出图谁出文/渠道/节奏 | Simone+Summer | — | P0 |
| **D+1** | 布里斯班 7/17 公开课**预热开跑**（小红书+朋友圈+群），扣1报名 | Summer/Simone | xhs-draft | P1 |
| D+1 | **校友群定向私聊**（AI Engineer/OpenClaw 校友，70%生源）——逐个 1v1，不群发 | Beta/销售 | eoi-followup | **P0** |
| D+1 | 新卖点上线：「让公司自动化运行/老板级 AI 个人 OS」海报 + 报名送 OS 模板 | Simone+设计 | poster-user-test | P1 |
| **D+2~3** | LinkedIn 发 OPC 长文（英文创业者圈，最对口最被忽略）+ 个人号 DM 高意向 | Simone/Beta | blog-longform-writer | P1 |
| D+2~3 | 公众号长文《赚到钱了吗》正式发（配封面+阅读原文+二维码） | Simone | wechat-article-quality | P1 |
| D+3 | **墨尔本/悉尼补一场公开课或线上直播**（三城都要有蓄水入口，别只布村） | Beta+Aurora | webinar-topic-feasibility | P1 |
| **D+5~7** | 公开课现场/花絮回流社群（FOMO）+ 当晚 EOI 24h 跟进 | Simone+销售 | eoi-followup | P0 |
| D+7 | 紧迫锚点：哪怕开班日未定，用「首期 case study 价 $3,800，第二期起涨+严筛」+「公开课名额限定」造稀缺 | Simone | — | P1 |
| D+10 | 投放（信息流/朋友圈广告，地域定向澳洲、避躺赚词）| Summer | ⚠️ 需 Lightman 审批预算 | P1 |
| D+14 | 冲刺复盘：报名/申请/加群数对照，决定要不要 Lightman 拍开班日期 | Simone | — | P1 |

### 9.4 ⚠️ 待补 ground truth（别拍脑袋）
- **开班日期**（最关键）—— 没有它，所有紧迫感都是空的，建议尽快让 Lightman/ Beta 拍一个"目标开班月"。
- **当前 17 人的构成**（哪城/哪档/处在漏斗哪一步）—— 决定是该拉新还是该催决策。
- **prod 报名入口是否真的通** —— D0 必须先验证。
- PERSONAS GT 仍 0.30，文案痛点原话落地前先补真实样本（PERSONAS §7）。

### 9.5 本周必做 3 条（口播给 Simone）
1. 🔴 **验证报名入口 + 校友群逐个 1v1**（最高 ROI：17 人里在犹豫的，一通私聊可能就转了）
2. 🔴 **布里斯班公开课预热开跑 + 跟 Summer 敲定分工**（公开课是你现在最强的转化引擎）
3. 🔴 **催一个"目标开班日期"**（没有倒计时，高客单课永远慢热）
