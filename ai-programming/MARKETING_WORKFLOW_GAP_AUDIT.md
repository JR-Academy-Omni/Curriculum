# ai-programming Marketing/运营/宣传 Workflow Gap Audit

> Workflow `wf_0d1c4499-b1b` · 6 agent · 551k tokens · 25 min · 2026-05-29

## 1. 各 Phase 覆盖率统计

| Phase | Stage | Total | Full | Partial | None | 覆盖率（full+0.5×partial）|
|-------|-------|-------|------|---------|------|--------|
| phaseA | pre-launch | 17 | 10 | 4 | 3 | **71%** |
| phaseB | 招生期 (T-7 to D0) — 开课前 7 天高压招生窗口 + 开学典礼当天 | 14 | 2 | 7 | 5 | **39%** |
| phaseC | 课程运营 | 16 | 0 | 3 | 13 | **9%** |
| phaseD | 课后复盘续费 | 14 | 3 | 6 | 5 | **43%** |
| phaseE | 内容生产闭环 | 18 | 4 | 6 | 8 | **39%** |

## 2. 系统性 Gap（跨 Phase 重复出现）

### 1. 数据回收与归因全链路缺失（marketing 黑盒 + cohort 黑盒）
出现在: Phase A pre-launch, Phase B 招生期, Phase C 课程运营, Phase D 课后复盘续费, Phase E 内容生产闭环

5 个 phase 全部出现『数据没人收 → 决策靠拍脑袋』。Phase A：营销 KPI baseline 全部⚠️占位，02 期渠道转化率没人去 GTM/GA4 拉；Phase B：招生期日 KPI 看板缺失，21:00 复盘会无数据；Phase C：cohort 进度 dashboard 0 落盘，NPS 0 沉淀；Phase D：FUNNEL_PLAN 真实转化率回写无机制；Phase E：内容 → 引流课 → 主课 attribution 完全断链，11 账号 × 7 指标员工手填漏填率 50%。marketing-agent-orchestra 已标 metrics-collector 为 P0 但还没造。结果：$50k+ marketing 预算无 ROI 归因 + cohort NPS 无法支撑定价决策 + 同样的坑 04/05 期继续跳。

### 2. 学员侧 / 用户侧 ground truth 采集机制为零（PERSONAS / 作品 / Testimonial / NPS 全靠 AI 推测）
出现在: Phase A pre-launch, Phase C 课程运营, Phase D 课后复盘续费, Phase E 内容生产闭环

PERSONAS.md GT 0.55 是阈值刚过（Phase A）；OFFER WALL 校友作品 0 收集（Phase A + D）；113 lessons × 24 人 = 768 次 Quest 提交无批改闭环（Phase C）；30/60/90 天落地追踪 0 SOP（Phase D）；内容选题 anchoring 缺真实用户语料（Phase E）。**根因**：02 期已开课 = 最值钱的 ground truth 来源（学员真实痛点 / 真实异议 / 真实作品 / 真实退款理由），但全公司 0 skill 覆盖『cohort 期间真实数据采集 SOP』。Mason 一人扛不动，Beta 凭记忆运营。结果：销售页 hero / xhs 切角 / 顾问话术 / FUNNEL 转化率全部基于推测，A/B 测出结论也归因不了。

### 3. Cohort 学员侧 onboarding / 运营 / 留存 / 升学 SOP 全套零落盘
出现在: Phase B 招生期, Phase C 课程运营, Phase D 课后复盘续费

招生期收完钱（Phase B D-1 / D0）→ 班级群运营（Phase C 整段）→ 结业后 alumni 留存与跨课程 upsell（Phase D）三段全部 0 skill 覆盖。Phase B D-1 拉群 + Welcome Email + 班委选举 0 模板；Phase C 16 task 里 13 个 skill_coverage=none（全 5 phase 最大缺口）；Phase D alumni 跨课程 LTV 矩阵不存在。employee-onboarding 是公司新员工不是学员入营。结果：Beta 一个人扛 24 学员 × 42-56 天凭记忆运营 → 完课率必跌破 50% → 作品交付率 <30% → 下期销售页无 OFFER WALL → 转化跌 → 04 期更难。**这是『课程能不能续命』的命根**。

### 4. 内容 / 物料生产→分发→评论运营→引流→转化全链路断点（marketing 闭环跑不通）
出现在: Phase A pre-launch, Phase B 招生期, Phase E 内容生产闭环

内容产出有 skill（xhs 五件套 / blog-longform-writer），但产出后的链路完全断：(1) 多平台一稿多发 0 skill（Phase E）；(2) 11 账号 × 6 平台 = 66 发布点排期手工漏发率 30%（Phase E）；(3) 前 24h 评论区运营 0 SOP（小红书算法死规则导致爆款率锁死 5%，Phase E）；(4) 评论引流到私域合规话术缺失（Phase E）；(5) 招生期 T-7→T-1 七天 nurture 序列内容 0 产出（Phase B）；(6) 02 期校友作品采集 → OFFER WALL 上架（Phase A）。结果：内容生产能力 ≠ 内容 ROI，66 发布点漏 60% 流量池（视频号 0 账号、抖音 / B站零曝光）。

### 5. Product decision 阻塞 + 关键岗位 owner 缺失，导致整条链路无法启动
出现在: Phase A pre-launch, Phase B 招生期, Phase D 课后复盘续费

Phase A：03 期 commenceCourseDate 未定 + 50/80/120 target 未拍 = FUNNEL 红色阻塞 + PROMOTION_PLAN 时间轴无法展开；Phase A + D：销售页倒计时 banner + 实时席位计数等待 Lightman 拍板早鸟价 / 涨价幅度；Phase A：marketing 文案岗位 RACI 标『—』未指派 → 公众号 / 销售页 / OFFER WALL testimonial 改写无 owner → 任务全摊到 Mason / Aurora 必然延期。结果：每多等 1 周 03 期可招生时间 -1 周，Marketing 团队 4 周『等待』状态。

### 6. 复盘 / 翻车归因 / 红线 audit 单一真相文档缺失
出现在: Phase A pre-launch, Phase C 课程运营, Phase D 课后复盘续费, Phase E 内容生产闭环

AUDIT_LOG.md 模板存在但空白（Phase D）；cohort 复盘三层（学员侧 / 课程侧 / 漏斗侧）2 层缺失（Phase C + D）；课程承诺红线（禁『副业』禁金钱承诺）销售页 / 海报 / 小红书 0 audit 记录（Phase A）；失败内容（爆款率 <10%）分层归因模板缺失（Phase E）；招生期日复盘 SOP 缺失（Phase B）。结果：同样的坑跨 cohort 重复跳，红线漂移风险（一旦顾问话术失控 → ACCC 投诉 / chargeback）。

## 3. 跨 Phase 衔接断裂

### Phase A pre-launch → Phase B 招生期
Phase A『03 期 commenceCourseDate + target 人数 + 早鸟截止』Lightman 未拍板 → Phase B 所有时间轴（倒计时 banner / 7 天 nurture 序列 / T-3 涨价 / T-1 退费 FAQ）全部依赖此决策无法启动。Phase A『PERSONAS GT 0.55 → 0.75』未补完 → Phase B 销售页 hero 原话 / 顾问话术 / 7 天 nurture 内容全部基于 AI 推测。Phase A 'OFFER WALL 校友作品采集 SOP 缺失' → Phase B 销售页改版无社会证明素材 → 零基础人群最大异议『我能不能学会』无法破除。

### Phase B 招生期 → Phase C 课程运营
Phase B D-1 / D0 学员入营 SOP 完全缺失（拉群 / Welcome Email / 班委选举 / Day 1 作业）→ Phase C 整段课程运营从第一天就裸奔。Phase B EOI 数据收单（eoi-followup skill）→ Phase C cohort 名单 + 学员画像 + 报名时填的目标，数据通道未建立：销售助理派单系统 ≠ cohort 进度追踪系统，学员进群后『他报名时说想做什么』数据丢失，助教 1v1 卡点介入无 context。Phase B 招生期日 KPI 看板 → Phase C cohort 进度 dashboard 是同一套数据系统的两个 view，但 0 共享底座。

### Phase C 课程运营 → Phase D 课后复盘续费
Phase C 学员产出 4 大交付物（PPT/PDF/网站/视频）96 件作品归档 SOP 缺失 → Phase D OFFER WALL 没素材、testimonial 视频拍摄无候选人筛选数据。Phase C NPS 调研机制（W3 / 结业 / 30 天后）缺失 → Phase D 02 期 cohort 复盘报告无问卷数据、PERSONAS refresh 无真实反馈、FUNNEL_PLAN 转化率回写无依据。Phase C 掉队学员 1v1 介入数据 → Phase D 退款理由 / 不续费理由数据池断链，老带新与升学路径推荐失去最有用的训练样本。

### Phase D 课后复盘续费 → Phase A pre-launch（下一期 cohort）
Phase D『FUNNEL_PLAN 真实转化率回写 + PERSONAS refresh + AUDIT_LOG 翻车沉淀』本应喂回 Phase A 下一期 init 跑 promotion-architect / funnel-architect，但当前回写 SOP 缺失 → 每期 cohort 都是『冷启动』，行业基线 5% 假设跑了 N 期都没改成真实数据。Phase D 老学员 → 下一门课跨课程 upsell 路径未建 → 每门课 Phase A 推广预算 80% 给新 lead，alumni 金矿浪费，全 JR Academy 多门 AI 课之间无 LTV 闭环。

### Phase E 内容生产闭环 → Phase B 招生期
Phase E 内容产出 → Phase B 招生期 7 天 nurture 序列 / T-3 朋友圈刷屏 / T-7 启动公开试听讲座，本应 wire 起来形成『日常内容池 → 招生期高密度爆发』的连续动作，但当前两段完全脱节：日常 11 账号矩阵发的内容跟招生期主题不接续 / 招生期 7 天 nurture 序列无人产出 / Phase E 没追踪『哪条爆款内容贡献了招生期 EOI』 → 招生期还是从 0 起跑而不是踩着 4 周日常势能起飞。

### Phase E 内容生产闭环 → Phase D 课后复盘续费
Phase D 02 期校友作品 + Testimonial 视频拍摄完成后，本应反哺 Phase E 11 账号矩阵作为爆款素材（同类人也能做到 = 零基础最强钩子），但当前 OFFER WALL 收集 SOP 缺失 + Testimonial 视频拍摄 brief 0 skill → 即使收集到也没有『一份真实素材 → 6 平台分发』的转化链路（Phase E 一稿多发 skill 也缺失）。结果：Phase D 沉淀的高价值素材停留在 content.ts 销售页，不流入日常内容运营。

## 4. Top 优先级（按 ROI 排序）

| # | Sev | Effort | Action Type | Name |
|---|-----|--------|-------------|------|
| 1 | P0 | 1h | product-decision | Lightman 拍板 03 期 launch date + target 人数 + 早鸟截止日（30min 决策会） |
| 2 | P0 | 2-3-day | new-skill | 新建 skill: cohort-graduate-portfolio-collector（学员 4 大作品 + Testimonial + 授权 + OFFER WALL wiring） |
| 3 | P0 | 1-week | new-skill | 新建 skill 套件: cohort-launch-sop + cohort-daily-ops + cohort-progress-tracker（学员侧 onboarding + 群运营 + 进度看板三件套） |
| 4 | P0 | 1-week | data-system | 数据系统: 后端建 cohort + attribution + referral 三个 collection + admin Content ROI 看板 |
| 5 | P0 | 2-3-day | wire-existing | Mason 强制完成 5 个 02 期学员访谈 + Summer 扫小红书评论 → PERSONAS GT 0.55 升 0.75+ |
| 6 | P0 | 2-3-day | new-skill | 新建 skill: xhs-comment-ops + content-to-private-domain-bridge（前 24h 评论运营 + 合规引流私域） |
| 7 | P0 | 1-week | new-skill | 新建 skill 套件: content-multi-platform-distributor + content-schedule-planner（一稿多发 + 66 发布点自动排期） |
| 8 | P0 | 1-week | new-skill | 新建 skill: marketing-metrics-collector + content-attribution-tracker（小红书后台爬取 + UTM 短链 attribution） |
| 9 | P1 | half-day | product-decision | HR 补 marketing 文案岗（短期兼职即可）+ PROMOTION_PLAN.md RACI 加『缺岗预警 🚨』列 |
| 10 | P1 | 2-3-day | new-skill | 新建 skill: enrollment-urgency-sop + 数据系统 CountdownBanner 组件（招生期紧迫感 + 实时席位） |
| 11 | P1 | 1-day | wire-existing | 扩展现有 skill: course-promotion-architect 加 daily-standup mode + funnel-handoff-design 加 pre-enrollment mode |
| 12 | P1 | 2-3-day | new-skill | 新建 skill: alumni-next-course-recommender（学员 LTV 跨课程升学路径） |

### Top priorities 详细 impact

**#1 Lightman 拍板 03 期 launch date + target 人数 + 早鸟截止日（30min 决策会）** (P0 · 1h · product-decision)

- Impact: 解锁 Phase A/B/E 共 30+ task 的时间轴展开；FUNNEL_PLAN 红色阻塞项消除；销售页倒计时 banner 才能上线；招生期 7 天 nurture 序列才能排期；marketing 团队不再『等待』状态。每多等 1 周 03 期可招生时间 -1 周 = 直接金钱损失。

**#2 新建 skill: cohort-graduate-portfolio-collector（学员 4 大作品 + Testimonial + 授权 + OFFER WALL wiring）** (P0 · 2-3-day · new-skill)

- Impact: 解 Phase A + C + D + E 共 5 个连环 gap：02 期 113 lessons 已结业 = 最佳采集窗口，错过 03 期开课后配合度断崖。一套 SOP 覆盖所有 bootcamp（不只 ai-programming）。零基础人群最大异议『我能不能学会』唯一破除手段 = 看到同类人做到。ai-engineer-bootcamp v1.6 加 5 张 OFFER 截图转化率明显上升 = 数据已验证。

**#3 新建 skill 套件: cohort-launch-sop + cohort-daily-ops + cohort-progress-tracker（学员侧 onboarding + 群运营 + 进度看板三件套）** (P0 · 1-week · new-skill)

- Impact: 解决 Phase B→C 最大断层 + Phase C 16 task 里 8 个 none 缺口。Beta 一个人扛 24 学员凭记忆运营是必然翻车 → 完课率跌破 50% → 作品交付率 <30% → 下期销售页无素材 → 死循环。这是『课程能不能续命』的命根。先 ship 这 3 个最高频，后续补 1v1 介入 / 答辩 / 复盘 3 个。

**#4 数据系统: 后端建 cohort + attribution + referral 三个 collection + admin Content ROI 看板** (P0 · 1-week · data-system)

- Impact: 横跨全 5 phase 的『数据黑盒 → 白盒』地基。当前没这个底座，所有 metrics-collector / progress-tracker / referral-program skill 都跑不动。具体：(1) cohortProgress collection（lesson 完成 / Lab 通过 / Quest 提交 / NPS）；(2) contentAttributions collection（contentId / platform / leadsCount / paidUsers / courseId）；(3) referrals collection（推荐人 / 被推荐人 / 优惠码）。admin 加 Content ROI tab。$50k+ marketing 预算才有 ROI 归因。

**#5 Mason 强制完成 5 个 02 期学员访谈 + Summer 扫小红书评论 → PERSONAS GT 0.55 升 0.75+** (P0 · 2-3-day · wire-existing)

- Impact: 解 Phase A→B→E 全链路 ground truth 断链。skill 齐全（target-user-persona-mapper + persona-ground-truth-scraper + INTERVIEW_SCRIPT）只是 Mason 没排时间。访谈 + 评论 scrape 各占 1 天 = 技术债不是技术难题。完成后销售页 hero / xhs 切角 / 顾问话术 / 7 天 nurture 全部有真实语料 → 转化率可对账可优化。

**#6 新建 skill: xhs-comment-ops + content-to-private-domain-bridge（前 24h 评论运营 + 合规引流私域）** (P0 · 2-3-day · new-skill)

- Impact: Phase E 爆款率锁死 5% 的核心根因 = 小红书算法死规则（前 24h 评论 <5 推流减半）+ 评论引流话术违规导致限流甚至封号。11 账号矩阵任何一个被封 = 几个月积累归零。50 条评论话术库 + 合规引流话术 + 课程顾问 handoff SOP 是低成本高 ROI 修复，爆款率 5% → 15-20% 直接 3-4 倍流量提升。

**#7 新建 skill 套件: content-multi-platform-distributor + content-schedule-planner（一稿多发 + 66 发布点自动排期）** (P0 · 1-week · new-skill)

- Impact: Phase E 一稿改 6 平台员工耗时 2h × 11 账号 = 产能砍半的根因；66 发布点漏发率 30% 直接砸渠道。视频号 0 账号 / B 站 / 抖音零曝光 = 漏 60% 目标人群流量池。修完员工产能翻倍 + 视频号矩阵从 0 启动。可复用 remotion-best-practices / hyperframes 视频系统打通短视频。

**#8 新建 skill: marketing-metrics-collector + content-attribution-tracker（小红书后台爬取 + UTM 短链 attribution）** (P0 · 1-week · new-skill)

- Impact: marketing-agent-orchestra 已标 P0 但还没造。配合 P4 数据系统底座一起 ship。员工 77 数据点漏填率 50% → 自动化爬取；『哪条内容贡献几个引流课付费 / 几个主课付费』从黑盒变白盒。本课客单价 $1360，1 个学员摊销 $30 内容成本 ROI 极高，但没追踪就无法优化、无法复制好内容、无法停坏内容。

**#9 HR 补 marketing 文案岗（短期兼职即可）+ PROMOTION_PLAN.md RACI 加『缺岗预警 🚨』列** (P1 · half-day · product-decision)

- Impact: Phase A RACI 标『—』未指派 → 公众号 2 篇 / 销售页改版 / OFFER WALL testimonial / Phase B 7 天 nurture 序列全部无 owner → 必延期。补一个兼职文案立刻解锁 4 条产出链。RACI 加缺岗预警列防止后续『假装满』的排期。

**#10 新建 skill: enrollment-urgency-sop + 数据系统 CountdownBanner 组件（招生期紧迫感 + 实时席位）** (P1 · 2-3-day · new-skill)

- Impact: Phase B T-3 临门一脚是招生期 30-40% 报名贡献窗口。当前 0 SOP 全靠 Aurora 个人经验，假紧迫感（『前 10 名』静态硬编码）一旦被识破 → 整个销售页信任崩塌 → 退款潮。早鸟梯度 / 真席位规则 / 朋友圈 3 轮话术 / 涨价后 24h 唤醒 SOP + 销售页 CountdownBanner 组件读 admin 配置（cohort.remainingSeats / priceUpAt）。

**#11 扩展现有 skill: course-promotion-architect 加 daily-standup mode + funnel-handoff-design 加 pre-enrollment mode** (P1 · 1-day · wire-existing)

- Impact: 两个 skill 都是 wire-existing（不需新建）。daily-standup mode 解 Phase B 招生期 7 天 weekly 太慢的问题（出问题 4 天才发现错过补救）；pre-enrollment mode 解 Phase B 加微信→报名 7 天 nurture 序列无内容 SOP 的问题。两个 mode 1 天能扩完。

**#12 新建 skill: alumni-next-course-recommender（学员 LTV 跨课程升学路径）** (P1 · 2-3-day · new-skill)

- Impact: Phase D→A 下一期断链的修复 + 全 JR Academy 多门 AI 课 LTV 闭环。当前每门课 Phase A 推广预算 80% 给新 lead = alumni 金矿浪费。ai-programming → ai-engineer-bootcamp / ai-solo-founder / ai-marketing 升学路径推荐 + 跨课程升级优惠。MVP 用 ai-programming 02 期 alumni 作 pilot，配合 referral collection 一起跑。

## 5. 推荐 Action 分类

### A. 需新建 skill (21 个)

- **cohort-graduate-portfolio-collector**: 每期 Bootcamp 最后 2 周自动触发：授权同意表 + 4 大交付物 URL 采集 + 1 句 testimonial + 头像 + Designer OFFER WALL 标准化卡片 + 自动 wire 到 content.ts SocialProof 模块。覆盖全公司所有 bootcamp 不只 ai-programming。

- **cohort-launch-sop**: D-1 拉群 + Welcome Email 模板 + 班委选举 SOP + 自我介绍接龙模板 + 助教分组（每 10 人 1 个）+ Day 1 作业派发。解决 Phase B→C 学员入营断层。

- **cohort-daily-ops**: 班级群日 SOP：08:00 早安 + 12:00/20:00 答疑闸 + 22:00 静默 + 防潜水机制（3 天 0 发言私聊关怀）+ 群内问题 Top 5 回流到 outline 改进。解决 Phase C 群运营靠 Beta 个人经验问题。

- **cohort-progress-tracker**: 从 jr-academy MongoDB 拉每学员 lesson 完成 / Lab 通过 / Quest 提交分桶（按时 / 慢 1 周 / 慢 2 周 / 0 动作），按 cohort 视角生成 Markdown 周报。解决 Phase C 掉队学员沉默到结业问题。

- **cohort-1v1-intervention**: 掉队学员 D+7/D+14/D+21 三道闸 1v1 触发条件 + 脚本模板（开场/探需/给方案/续命）+ 不可救 → 劝退 + 转下期 SOP。解决 Phase C 助教凭记忆照顾不过来问题。

- **cohort-graduation-defense**: 结业答辩 SOP（5min deck + 3min demo + 2min Q&A）+ 评委邀请话术 + 直播架构 + 主持脚本 + 答辩录像剪辑成 marketing 素材池。

- **cohort-postmortem**: 三层 retro（学员侧 + 课程侧 + 漏斗侧）：周报模板 + 课程末复盘 + 自动喂 PERSONAS refresh + 自动喂 AUDIT_LOG + 反推 outline.json / PROMOTION_PLAN / 定价。解决 Phase C→D→A 下期断链。

- **xhs-comment-ops**: 前 24h 评论区运营 SOP + 50 条评论话术库 + 小号互动节奏。解决 Phase E 小红书算法死规则（前 24h <5 评论推流减半）导致爆款率锁死 5% 的核心根因。

- **content-to-private-domain-bridge**: 合规引流话术（扣 1 / 主页 / 钩子文档免费领 / 私信关键词 → 课程顾问 handoff），打通『内容 → 评论 → 私信 → 加微信 → eoi-followup』断链。防止账号被限流封号。

- **content-multi-platform-distributor**: 一稿多发：小红书稿 → 公众号长文 / 视频号脚本 / LinkedIn 英文 / X / 朋友圈 / 抖音脚本。员工单稿 2h × 6 平台 → 产能翻倍。

- **content-schedule-planner**: 11 账号 × 6 平台 = 66 发布点自动排期 + 错峰 + 自动喊号。漏发率 30% → <5%。

- **marketing-metrics-collector**: 小红书后台数据爬取 + 11 账号自动汇总 + 异常账号预警。marketing-agent-orchestra 已标 P0 待建。员工 77 数据点漏填率 50% → 自动化。

- **content-attribution-tracker**: UTM + 短链 + GA4 接到每条内容 ID，追踪『哪条内容贡献几个引流课付费 / 几个主课付费』。配合后端 contentAttributions collection。

- **enrollment-urgency-sop**: 招生期 T-3 紧迫感设计：早鸟价梯度 + 真实剩余席位显示规则 + 朋友圈刷屏 3 轮话术 + 涨价后 24h 唤醒未付款 lead + 合规边界 + 课程承诺红线 cross-check。

- **alumni-next-course-recommender**: 学员 LTV 跨课程升学路径推荐：input cohort + 完课率 + NPS + 自填目标 → output 3 个推荐路径 + 升级优惠 + 跨课程文案。配合后端 alumni_journey collection。

- **testimonial-video-brief**: 学员 testimonial vlog 拍摄 SOP：候选人筛选标准 + 问题清单按 persona 分支 + 授权书模板 + 剪辑结构 spec。学员 testimonial 内容池落盘 curriculum/{slug}/testimonials/ 多平台复用。

- **referral-program-designer**: 老带新档位设计 + 文案 + 防刷规则 + SOP。配合后端 referrals collection + 课程购买流加优惠码。AUD $1360 客单价推荐礼 ROI 远好于付费投放（CAC $200+）。

- **xhs-postmortem**: 失败内容分层归因（推流 / 标题 / 内容 / 钩子 4 层）→ 输出『下次怎么避免』清单。复用 xhs-score 9 维度反向推。解决 Phase E 周五复盘靠主观讨论问题。

- **student-cohort-onboarding-sop**: D-1 至 D+3 学员入营仪式（Welcome Email + 微信群拉群 + 班委自我介绍模板 + 入营徽章 + Day 1 作业），直接影响完课率。

- **cohort-readiness-check**: T-7 开课前实测：调用 jr-academy 后端 API 实测每个 interactiveLabSlug 是否还存在 / 33 工具是否还能用 / outline.json vs production 后端 lesson list 是否 drift。或扩 curriculum-review 加 mode。

- **cohort-nps-collector**: 内置 3 套问卷（W3 周中救急 / 结业 / 30 天落地），落盘 curriculum/{slug}/cohort-{n}/nps/，自动趋势图 + 低分学员名单 + 反推 outline 改进。30 天问卷严守红线（不问金钱只问技能落地）。

### B. 现有 skill 没接上 workflow (12 个)

- **target-user-persona-mapper + persona-ground-truth-scraper + INTERVIEW_SCRIPT** → Phase A：Mason 强制完成 5 个 02 期学员访谈 + Summer 扫小红书评论 → PERSONAS GT 0.55 升 0.75+。skill 完整缺执行排期。流程 SOP：每个 Bootcamp 前一期开课中点（02 期 W3）强制完成。

- **course-promotion-architect (daily-standup mode 扩展)** → Phase B 招生期 7 天日 KPI 看板 + 21:00 复盘会模板（weekly mode 太慢，扩 daily-standup mode 含 4 核心指标 + 自动 gap 报警），关联 marketing-agent-orchestra metrics-agent。

- **funnel-handoff-design (pre-enrollment mode 扩展)** → Phase B T-7→T-1 七天 nurture 序列（加微信→报名）。当前 skill 只覆盖买完引流课→主课，扩 pre-enrollment mode 输入 PERSONAS.md 痛点 + outline.json 33 工具 → 输出 7 天 × 14 内容草稿。

- **course-custom-landing (Mode B + socialProof / faculty / anxiety-FAQ 模块扩展)** → Phase A + D 销售页升级：加 Faculty 实名 section + 02 期校友 OFFER WALL + 退费政策 + 焦虑安抚 FAQ（澳洲 ACL 合规）+ 03 期 launch date + 实时席位 banner。

- **xhs-topic-picker (信号源扩展)** → Phase E 新增 Reddit / X / 即刻 / B 站 AI 区 4 类信号源 WebFetch 模块。零基础宝妈 + 创业者 persona 真实活跃平台覆盖。

- **eoi-followup** → Phase A + B 落盘路径适配 bootcamp（curriculum/ai-programming/cohort-03/eoi.json 而非 events/）+ 顾问话术库 Top 5 异议（不会编程 / 时间不够 / 工具太贵 / 学完没用 / 比 ChatGPT 强在哪）+ 24h SLA 监控仪表盘。

- **classroom-deck-builder (kickoff-ceremony mode 扩展)** → Phase B D0 开学典礼 + Phase C 每周直播课。kickoff-ceremony mode 包含破冰游戏 + 仪式感设计 + Faculty 亮相 + 班委选举 + Q&A 议程模板。

- **curriculum-review (cohort-readiness mode 扩展)** → Phase C T-7 开课前实测 + W2 + W4 + 结业前 D-3 内容质量审计。扩 cohort-readiness mode 跑 Lab/工具/outline drift 三检测。

- **course-promotion-architect (Mode E postmortem 扩展)** → Phase D FUNNEL_PLAN 真实转化率回写：扩 postmortem mode 增『学员侧 + 课程侧』维度（不止销售漏斗），跨度盖销售期 + 课中 + 课后三段。

- **main-course-tier-design** → Phase D 基础班 → 进阶班续费转化机制。扩『同学院老学员升级 SOP』mode：续报折扣 + 推荐礼 + 进阶班试听课 + 已学知识衔接保证。

- **xhs-draft + xhs-poster + xhs-review + blog-longform-writer + poster-user-test** → Phase D D+14 海报 / 公众号 / 小红书加 02 期真实学员案例。skill 全齐，唯一卡点是 Mason 提供 5-10 个真实案例文字稿（来自 OFFER WALL task）。零新建需求。

- **marketing-agent-orchestra (Phase 0 manual runbook 补)** → Phase E 11 账号矩阵任务派单：补 MANUAL_RUNBOOK 派单 SOP；admin Kanban 加『内容任务』列；xhs-topic-picker 输出直接 import 到 admin 派单。

### C. 数据系统 (10 个)

- 后端新建 cohortProgress collection：lessonId / studentId / completedAt / labPassed / questSubmittedAt / npsScore，喂 cohort-progress-tracker skill

- 后端新建 contentAttributions collection：contentId / channel / platform / leadsCount / paidUsers / courseId / utmParams，喂 content-attribution-tracker + marketing-metrics-collector

- 后端新建 referrals collection：推荐人 ObjectId / 被推荐人 ObjectId / 优惠码 / 发放状态 / amount，配合 referral-program-designer + 课程购买流 input

- 后端新建 alumni_journey collection：studentId / cohortHistory[] / coursesEnrolled[] / nextRecommendedCourse / lastActiveAt，喂 alumni-next-course-recommender

- 后端新建 QuestSubmission collection（当前没有）：questId / studentId / submissionUrl / aiScore / humanReviewStatus / feedback，配合 quest-grader skill

- admin 新建 cohort 配置字段：commenceCourseDate / remainingSeats / priceUpAt / earlyBirdDeadline，喂销售页 CountdownBanner 组件

- jr-academy-web-zh 新建通用 CountdownBanner 组件读 admin 配置，所有 bootcamp 复用（不再硬编码每天手改 content.ts）

- admin Dashboard 新建 Content ROI tab：11 账号 × 6 平台数据汇总 + 异常预警 + 内容→引流课→主课漏斗 attribution 可视化

- admin Dashboard 新建 Cohort Ops tab：cohort 视角进度看板 + 掉队学员 1v1 触发列表 + NPS 趋势 + 作品交付率

- 招生期专用 dashboard：销售页 UV / EOI 收单 / 付款转化 / 24h 跟进完成率 4 核心指标 + gap > 20% 自动报警

### D. SOP 文档 (12 个)

- Bootcamp 开课日决策会 SOP：每个 Bootcamp 在前一期开课中点（W3）由 Lightman + Aurora + Mason 三方 30min 锁下一期 launch date + target + 早鸟截止 + 报名截止，结论落 FUNNEL_PLAN.md §0 Meta 表

- PROMOTION_PLAN.md RACI 表加『缺岗预警 🚨』列：缺岗 task 自动标 BLOCKED 防止排期假装满，HR 短期补 marketing 文案岗

- Bootcamp 学员访谈强制排期 SOP：每期前一期 W3 由课程主理人完成 5 个学员访谈 + 新媒体扫小红书评论 → PERSONAS.md GT 升 0.75+

- OFFER WALL 校友作品采集 SOP（先用 Markdown 起步，后续 cohort-graduate-portfolio-collector skill 实现）：每期 Bootcamp 进入最后 2 周自动触发

- 顾问话术库 SOP：Amelia 整理过去 02 期 EOI 跟进真实对话 → Top 5 异议真实频次 → Mason + Aurora 出标准回答 + 红线，落 curriculum/ai-programming/CONSULTANT_PLAYBOOK.md

- 11 账号矩阵人设差异化文档：docs/XHS_ACCOUNT_MATRIX.md 一次性梳理 11 个账号当前粉丝 / 笔记主题 / 互动数据 → 每个账号人设 + 目标 persona + 内容切角 + 禁发清单

- 销售页 / 海报 / 小红书草稿课程承诺红线 audit 流程：禁『副业』/ 禁金钱承诺，content.ts 全文扫一遍 + 海报 v1-v6 逐张扫 + 出 1 页 Marketing Bible 统一口径

- 招生期日 KPI 复盘会 SOP：T-7 至 D0 每日 21:00 15min 复盘 + 模板（4 核心指标 + gap 分析 + 明日动作）

- Cohort 学员入营 SOP：D-1 拉群 + Welcome Email 个性化 + 班委选举 + 助教分组 + Day 1 作业 + 破冰模板

- Cohort 复盘三层 retro 流程：D+7 问卷出 → D+14 retro 会议 → D+21 PERSONAS/FUNNEL refresh → D+30 改进点进 03 期销售页

- alumni 跨课程升学路径 SOP（先 Markdown 起步）：ai-programming → ai-engineer / ai-solo-founder / ai-marketing 升学优惠 + 推荐文案

- evergreen content + 招生期 7 天 nurture wiring SOP：日常 11 账号矩阵内容如何踩 4 周势能接续招生期高密度爆发


---

## 附录 · 每 Phase 各 task 详情

### Phase A · Pre-launch (stage: pre-launch)

#### Tasks (17)

| When | Task | Owner | Coverage | Existing Skill | Gap |
|------|------|-------|----------|--------------|-----|
| T-28 ~ T-21（开课前 4-3 周，所有下游决策的硬 | PERSONAS GT 从 0.55 升到 0.75+（真实访谈 ×2 + 评论 scrape ×3 源） | Mason（课程主理人）主跑访谈 + Summer 配合扫小红书评论 + Amelia 出 02 期 | full | target-user-persona-mapper + persona-ground-truth- | PERSONAS.md 当前 0.55 是阈值刚过，痛点 Top 3 / 异议 Top 3 / 决策周期 / 黑名单 / 触发器全部仍是 AI 推测。02 期已经开课但没人去拉学员名单做 5 个访谈 + 没人扫小红书"零基础学编程"评论。不补到 0.75+ → 销售页 hero 原话 / xhs 切角 / 公众号长文标题全部靠猜，转化率没法对账 |
| T-28（最迟，决定整个 PROMOTION_PLAN 时间 | 03 期开课日 + 早鸟名额 + 报名截止日 product decision | Lightman 拍板 + Aurora 反推招生节奏 + Mason 评估开课承载力 | partial | course-funnel-architect + main-course-tier-design | FUNNEL_PLAN.md 明确标 03 期 commenceCourseDate 待定 = 红色阻塞项。销售页现在让人看不到"什么时候能上车"。skill 能给三档模板但定不了具体日期。需要决策：(1) 03 期目标人数（50/80/120 三档 FUNNEL 已给反推公式）(2) 早鸟截止日（影响海报"剩余名额"压力点）(3) 02 期还在跑 vs 03 期开班的衔接窗口 |
| T-28 ~ T-21（与 PERSONAS 并行，给 fu | Course Market Reality Check — AU + CN 两市场 AI Coding 岗位池 + 学员承诺 gap 复审 | Mason + Aurora | full | course-market-reality-check | ai-programming 定位"做出可上线产品"不是"找工作"，但销售页和 PROMOTION_PLAN 还没做过 reality check。需要验证：(1) 零基础 → 6 周 → 真的能做出 4 件交付物吗（02 期出货率多少）(2) 进阶班 $1360 客单价在零基础人群可接受度 (3) marketing 反馈"学员咨询时问能不能找工作"如何用红线回答。skill 描述完全覆盖此场景 |
| T-21 ~ T-14（销售页改版前必须完成） | FUNNEL_PLAN 选项 B 落地 — ¥99 引流课「3 天 Claude Cowork 做 PPT 网站」拆 Phase 0 独立成课 | Mason 内容裁切 + Dev 起独立 program 页面 + Lightman 审定价 | full | intro-course-design + funnel-handoff-design | FUNNEL_PLAN 已经推荐选项 B 且 Phase 0 内容现成（6 节完整课）。skill 流程齐全。gap 是落地动作：(1) 拆完 Phase 0 后 outline.json 要不要从 ai-programming 主课里删（不要 — 主课保留）(2) 独立 program ObjectId 在 admin 新建 (3) ¥99 / $29 定价多币种配齐 (4) Phase 0 转 |
| T-21 ~ T-14（与引流课并行） | 销售页 Custom Landing 升级（加 03 期日期 + 校友 OFFER WALL + Faculty 实名） | Dev + Mason 提供 02 期学员作品 URL + Designer 拍 Faculty 头 | full | course-custom-landing (Mode B 已存在 landing 迭代) | Custom landing 已上线（5 文件 19KB）但 FUNNEL_PLAN 列出 3 个缺口：(1) 销售页未列 Faculty 实名 (vs ai-engineer-bootcamp 有 5 张 OFFER 截图) (2) 02 期校友作品 / 反馈未加（需要 ai-engineer-bootcamp v1.6 OFFER WALL 模式）(3) 03 期 commenceCourse |
| T-28 ~ T-14（必须先收集才能改销售页） | 02 期校友作品收集 + Testimonial 拍摄 + OFFER WALL 素材生产 | Mason 联系 02 期学员 + Beta 教务跟进 + Designer 出 OFFER WAL | none |  | ai-engineer-bootcamp v1.6 加了 5 张 OFFER 截图大幅提转化，但本课没有对应 workflow。需要：(1) 02 期 113 lessons 完结时收集学员做的 4 大交付物（PPT/PDF/网站/视频）真实链接 (2) 1-2 句话 testimonial（不能假，必须本人授权）(3) Designer 出标准化 OFFER WALL 卡片。当前 76 skil |
| T-21 ~ T-14 | SEO 长尾词调研 + 销售页 metadata + JSON-LD + E-E-A-T 升级 | Dev | full | seo-optimizer + eeat-optimizer | PROMOTION_PLAN 列出关键长尾词"零基础 AI 编程 / Cursor 教程 / 不会代码做网站"但没真做过 GSC 调研。skill 齐全可直接跑。gap 是这个课的 production /program-course/ai-programming 页面是否上 FAQ Schema + author markup 还没 audit |
| T-28 ~ T-21（账号画风要提前 14 天养） | 小红书 11 账号矩阵预热 — 周 9 篇内容选题库储备 + 切角差异化 | Summer 主账号 + Lily + KIKI 分账号 | full | xhs-topic-picker → xhs-draft → xhs-poster → xhs-re | skill 五件套齐全。gap 是产出节奏要前置 2 周：(1) 11 个账号每个的人设是什么没沉淀（创业者账号 vs 转型者账号 vs 学生账号画风不同）(2) PERSONAS 没补完前选题切角靠猜 (3) 第一周 9 稿要在 T-21 之前入库审完，不能到 T-14 才写 |
| T-21 ~ T-14 | 海报矩阵升级 + ChatGPT poster-user-test 6→3 persona 反馈 | Designer + Aurora 跑 ChatGPT 测试 | full | poster-user-test | 已有 8 张海报（poster-v1~v6 + xhs-posters）但没跑过 poster-user-test。skill 是 Custom GPT 用 vision 让 3 个 persona（A 创业者 + B 转型者 + C 学生其中一个邻圈）反应。gap 是 Aurora / Summer 没人配置过这个 Custom GPT。海报发出去之前必须过 user-test 否则发到小红书" |
| T-21（topic 审）→ T-14（直播） | 第 1 场试听讲座 topic 审核 + Webinar 报名页 + 公开预热 | Mason 主持 + Aurora 渠道宣发 | full | webinar-topic-feasibility + speaker-invitation-kit | PROMOTION_PLAN 已写「零基础 30 分钟做出第一个网页」候选 topic。skill 齐全（10 维度评分 ≥ 80 才能开）。gap 是讲座流程没有 SOP：(1) 报名页用 admin 哪个 mock-test/event 模板还没定 (2) 直播平台是视频号 vs 小鹅通 vs B 站没拍 (3) 讲座 deck 用 classroom-deck-builder 跑过但内容 r |
| T-21 + T-14（每周 1 篇） | 公众号长文 2 篇预热 — 「零基础做出产品的真实故事」+ 「AI Coding 工具谱 33 选」 | Marketing 文案（待补，PROMOTION_PLAN §5 标 — — 缺岗 🚨） | full | blog-longform-writer + wechat-article-quality | skill 完整（含 9 维度审 + 5 类内容结构 A/B/C/D/E 推广文判定）。gap 是 PROMOTION_PLAN §5 RACI 表标 Marketing 文案"—"未指派人。33 工具谱 ground truth 在 content.ts QUICK_STATS 里写好但没人去把工具名 + 用途 + 案例做成长文。1500-3000 字深度长文需要时间，T-21 之前没起稿来不及 |
| T-28（与 launch date 同步定） | 营销日历 + KPI baseline 设定 — 50/80/120 三档 target 反推渠道 UV | Aurora + Lightman | partial | course-promotion-architect (init mode) | PROMOTION_PLAN §2 已给反推公式（5% 主课转化 × 5 渠道分配权重）但全部标⚠️示例占位"。skill 能在确定 launch+target 后展开完整时间轴 T-21→D+30。gap 是 baseline 数字没有历史数据可参考：(1) 02 期实际渠道分布转化率没人去 GTM / GA4 拉 (2) 当前 50/80/120 是猜的，需要 Mason 评估 Faculty |
| T-14 ~ T-7（02 期接近毕业窗口） | 02 期老学员唤醒 — 进阶班 upsell + 朋友圈裂变 + 内推奖励机制 | Beta 教务 + Amelia 1v1 + Aurora 设计奖励 | none |  | 02 期 113 lessons 完成后学员是最暖的 lead，但当前没有"老学员 → 03 期推荐 → 升级进阶班"机制。没 skill 覆盖。gap：(1) 02 期学员上完基础班是否给进阶班升级折扣未定 (2) 内推 03 期一人奖励什么没定（积分 / 现金返点 / 1v1 时间）(3) 朋友圈裂变物料（结业证书 + 一句话 + 03 期 referral link）没生产 |
| T-14 ~ T-7（讲座前必须就绪） | EOI 三道闸 SOP 演练 + 课程顾问话术库 + 24h SLA 监控仪表盘 | Neomi 派单 + Amelia/Rain/Angela 顾问 + Aurora 监控 | full | eoi-followup | skill 完整（24h/72h/7d + 4 mode intake/status/script/roi + 4 角色映射）。gap 是落地：(1) 顾问话术库 — 针对零基础人群的 Top 5 异议（我不会编程 / 时间不够 / 工具太贵 / 学完没用 / 比 ChatGPT 强在哪）没沉淀真实话术 (2) 24h SLA 监控当前没仪表盘看 (3) curriculum/events/ai- |
| T-21 ~ T-14 | Faculty 邀请 + 实名露出 + 1 节大师课视频生产 | Mason 邀请 + Designer 出头像 + Dev 在销售页加 Faculty sectio | partial | speaker-invitation-kit | ai-solo-founder-bootcamp 的双护城河之一是 Faculty mentorship（8 类讲师 $43-176k AUD 价值）。ai-programming 销售页当前 0 Faculty 露出 vs ai-engineer-bootcamp 已有。skill 覆盖讲师邀请话术。gap：(1) 谁是 ai-programming 的 Faculty 还没定（Mason 1  |
| T-28 ~ T-21 | 渠道账号矩阵预热盘点 — 即刻 / 视频号 / Boss 直聘 / B 站 | Aurora | none |  | PROMOTION_PLAN §3 列了 7 个启用渠道（小红书 / 公众号 / 讲座 / 海报 / SEO / 销售页 / EOI）但漏掉零基础创业者强相关的：(1) 即刻 — 独立开发者 / 创业者聚集地（持续低频发声养号 14 天才有人看）(2) 视频号 — 公众号绑定可联动 (3) Boss 直聘 — 不是招岗位是反向运营，让 HR 看到"我们教零基础做产品"。当前 76 skill 没覆 |
| T-14（销售页改完最后必须过 Lightman 红线审） | 课程承诺红线复审 + 销售页文案 audit（防"包做出 / 副业 / 月入"违规） | Lightman 终审 + Aurora 出 audit checklist | partial | wechat-article-quality + xhs-review (违禁词) | CLAUDE.md 明确铁律「禁止承诺金钱结果 + 禁用"副业"一词」。02 期已上线但销售页 / 海报 / 小红书草稿是否扫过红线没记录。xhs-review 覆盖小红书违禁词，wechat-article-quality 覆盖公众号合规，但**销售页本身**没有专门的红线 audit skill。gap：(1) content.ts 全文扫一遍 (2) 海报 v1-v6 文案逐张扫 (3) 公 |

#### Phase PHASEA gaps_summary

- **[P0] 03 期开课日 + target 人数没拍板 = 所有时间轴无法展开** — FUNNEL_PLAN 标红色阻塞、PROMOTION_PLAN §2 数字全部⚠️占位、销售页让用户看不到上车窗口。Lightman 不拍板 launch date，Marketing 团队接下来 4 周都是"等"状态。海报"剩余名额"压力点 / EOI 7d 截止日 / 老学员唤醒窗口全部依赖此决策。每多等 1 周 03 期可招生时间就少 1 周
  → 流程 SOP — 设立"Bootcamp 开课日决策会"机制：每个 Bootcamp 在前一期开课中点（02 期 W3）就要锁下一期 launch date。Lightman + Aurora + Mason 三方 30min 会议拍板 launch date + target + 早鸟截止 + 报名截止。结论落 FUNNEL_PLAN.md §0 Meta 表

- **[P0] 02 期校友作品 + Testimonial 采集 SOP 缺失 = 销售页 OFFER WALL 做不出来** — ai-engineer-bootcamp v1.6 加 5 张 OFFER 截图大幅提转化是数据已验证的杀招。ai-programming 现在 0 校友作品上销售页。零基础人群最大异议"我能不能学会"只能靠"看到跟我一样的人做出来"破除。02 期 113 lessons 跑完了但没人去收集作品 = 错过最佳采集窗口。03 期开课后再回去找 02 期学员配合度会断崖下跌
  → 新建 skill `cohort-graduate-portfolio-collector` — 每期 Bootcamp 进入最后 2 周自动触发：(1) 给学员发授权同意表 (2) 收集 4 大交付物 URL + 1 句 testimonial + 头像 (3) Designer 出标准化 OFFER WALL 卡片 (4) 自动 wire 到 content.ts。覆盖所有 Bootcamp 不只 ai-programming

- **[P0] PERSONAS GT 0.55 是阈值刚过 = marketing 物料文案信不过** — 痛点 Top 3 / 异议 Top 3 / 黑名单 / 触发器全是 AI 推测。销售页 hero 原话 / xhs 切角 / 公众号长文标题 / 顾问话术全部基于推测 → 转化率没法对账，A/B 测出来的结论也归因不了。02 期已经开课但没人去访谈学员把真实痛点话术挖出来 = 浪费了最值钱的 ground truth 来源。0.55 → 0.75 是从"能启动"到"能优化"的临界点
  → 现有 skill wire — target-user-persona-mapper + persona-ground-truth-scraper + INTERVIEW_SCRIPT 工具齐全，但 Mason 没排时间。流程 SOP：每个 Bootcamp 前一期开课中点（02 期 W3）由 Mason 强制完成 5 个学员访谈，落 PERSONAS.md GT 0.75+。访谈+评论 scrape 各占 1 天，是技术债不是技术难题

- **[P1] 营销文案岗位空缺 = 公众号 / 销售页文案产出无 owner** — PROMOTION_PLAN.md §5 RACI 表 Marketing 文案标"—"明确缺岗。公众号长文 2 篇 / 销售页改版 / 海报文案 / OFFER WALL testimonial 改写都需要专人，当前都摊到 Mason / Aurora 头上 = 必然延期。每周 1-2 篇公众号长文是 Type 2 课程基线必交付物，没文案 = 渠道 §3 第 2 项直接哑火
  → 数据系统 + 流程 SOP — (1) HR 短期补一个 Marketing 文案岗位（哪怕兼职）(2) 临时方案：blog-longform-writer skill 让 Aurora / Lightman 直接跑产出初稿，Mason 审 (3) 长期：在 PROMOTION_PLAN.md RACI 表加"缺岗预警 🚨"列，缺岗的 task 自动标 BLOCKED 防止排期假装满

- **[P1] 11 个小红书账号矩阵无人设差异化 SOP = 11 个号发同样内容互相吃量** — Summer + Lily + KIKI 11 个账号是匠人学院最大流量入口，但每个账号的人设 / 受众 / 切角差异化没沉淀文档。3 个 persona（A 创业者 / B 转型者 / C 学生）需要不同账号承接但当前混发 = 算法识别不出账号定位 = 11 个号互相竞争 = ROI 远低于潜力。03 期推广启动 = 流量翻倍 = 这个 gap 会被放大
  → 新建 skill `xhs-account-matrix-positioning` — 输入 11 个账号当前粉丝 / 笔记主题分布 / 互动数据 → 输出每个账号的人设 + 目标 persona + 内容切角 + 禁发清单。一次性梳理产出物：`docs/XHS_ACCOUNT_MATRIX.md`。可以基于 target-user-persona-mapper export-channels 模式

- **[P1] 课程顾问零基础人群异议话术库为空 = EOI 转化卡在 Top 5 异议** — Amelia / Rain / Angela 课程顾问跟进 EOI 时遇到的 Top 5 异议（我不会编程 / 时间不够 / 工具太贵 / 学完没用 / 比 ChatGPT 强在哪）当前各自靠经验回答。没沉淀文档 = 新顾问 ramp-up 慢 / 回答口径不统一 / 红线话术（不承诺找工作 / 不承诺金钱）漂移风险。eoi-followup skill 提到 script mode 但实际话术内容空
  → 现有 skill wire + 数据系统 — (1) Amelia 把过去 02 期 EOI 跟进真实对话整理出 Top 5 异议真实出现频次 (2) Mason + Aurora 一起出标准回答 + 红线 (3) 落 curriculum/ai-programming/CONSULTANT_PLAYBOOK.md (4) eoi-followup skill script mode 直接读这个文件


### Phase B · 招生期 (stage: 招生期 (T-7 to D0) — 开课前 7 天高压招生窗口 + 开学典礼当天)

#### Tasks (14)

| When | Task | Owner | Coverage | Existing Skill | Gap |
|------|------|-------|----------|--------------|-----|
| T-7 周一 09:00 | T-7 倒计时 banner 上线 + 销售页全局插入「03 期 X 月 X 日开课，仅剩 N 席」 | Dev + Marketing 文案（Aurora 拍板） | partial | course-custom-landing | course-custom-landing 是 Mode B 改销售页内容/FAQ/hero 文案，但没有专门的「倒计时 banner 组件 + 实时席位计数」模块。当前 ai-programming content.ts 只有静态「前 10 名」标签，无真实倒计时。需新建 CountdownBanner 通用组件 + admin 配置后台（cohort.commenceCourseDate +  |
| T-7 周一 14:00（与正课开课同步开放报名） | T-7 启动 ¥99 引流课「3 天用 Claude Cowork 做出第一个 PPT 网站」 | Mason（课程主理人）+ Dev（落地页） | full | intro-course-design | intro-course-design skill 已覆盖引流课 deliverable / 3 节直播 / 1 个 Lab 设计 + FUNNEL_PLAN.md §3 选项 B 推荐做。但 ai-programming/ 目前没真起跑（FUNNEL_PLAN 列为「未做」）— skill 在但人没动手。 |
| T-7 周二 19:30（晚上黄金时段，对标朋友圈下班后传播 | T-7 公开试听讲座「零基础 30 min 做出第一个网页」直播 + 录屏存档 | Mason 主讲 + Summer/Lily 直播间运营 | partial | webinar-topic-feasibility | webinar-topic-feasibility 只审 topic 能不能爆（10 维度评分），不覆盖：(1) 直播间 SOP（开播前 30min 设备 checklist / 答题板 / 引导加微信话术）(2) 直播间转化 CTA 节奏（每 15min 一次 ApplyForm 弹窗）(3) 录屏剪辑发回放规范。需要新建 webinar-live-sop skill 或扩展 offline-e |
| T-7 至 T-1 每日 09:30 群发 + 14:00  | T-7 → T-1 七天 nurture 序列内容生产 + 自动化群发（每日 1 案例 + 1 工具 SOP） | Summer / Lily / KIKI 三人轮值 + Mason 内容审校 | partial | funnel-handoff-design | funnel-handoff-design 是「引流课买完→主课」的 7 天反推销序列（D0-D7 用户已付费），不是「加微信→报正课」的招生期序列。当前 PROMOTION_PLAN.md 未做 7 天序列，需扩展 funnel-handoff-design 增加 pre-enrollment 模式，或新建 pre-enrollment-nurture-sequence skill 输出 7 篇 |
| T-7 起持续运行至 D-1（招生期 SLA 比平时缩短到  | T-7 EOI 收单 → 课程顾问派单 + 24h/72h/7d SLA 启动 | Neomi（销售助理派单）+ Amelia / Rain / Angela（课程顾问 1v1） | full | eoi-followup | eoi-followup skill 覆盖完整（24h/72h/7d 三道闸 + 4 mode intake/status/script/roi + 4 角色映射）。落盘到 curriculum/events/{slug}/eoi.json — 但 ai-programming 是 bootcamp 不是 event，路径要适配 curriculum/ai-programming/cohort-0 |
| T-5 周四 11:00 上线（赶上下班前最后一波咨询） | T-5 三档定价决策辅助页「我该选哪个」+ 课程顾问统一话术 | Mason（决策树设计）+ Amelia（话术）+ Dev（页面） | partial | main-course-tier-design | main-course-tier-design 是设计三档定价结构（自学/教学/陪跑），但 ai-programming 当前只有 2 档（基础 6 周 / 进阶 8 周，FUNNEL_PLAN 不推 C 选项）。需要的是「2 档选择题」决策树 + Q&A（编程基础 / 时间 / 目标 / 预算 4 个分支）— skill 没覆盖。建议新建 tier-selection-helper skill  |
| T-3 周六 18:00 启动 + 23:30 last c | T-3 早鸟截止机制 + 临门一脚朋友圈刷屏（「今晚 23:59 涨价 ¥100」） | Aurora 拍板涨幅 + Summer/Lily/KIKI 朋友圈三轮发布 + 课程顾问 1v1  | none |  | 当前 76+ skill 没有「紧迫感设计 + 涨价倒计时 + 朋友圈刷屏 SOP」覆盖。FUNNEL_PLAN.md §3 选项 A 提过「前 10 名实时倒计时（防止假紧迫感被识破）」但没有 skill 实现。课程承诺红线（不夸大不虚假紧迫感）+ 早鸟价合规边界 需要 SOP。建议新建 enrollment-urgency-sop skill：早鸟价梯度 / 真实剩余席位显示规则 / 朋友圈刷 |
| T-3 周日 14:00-16:00（周末下午刷小红书黄金  | T-3 公开 1v1 答疑直播（CTO 时间 / Office Hour，解决报名前最后疑虑） | Mason 主答 + Amelia/Rain 蹲守评论区 + 销售助理实时派单 | none |  | 没有现成 skill 覆盖「招生期 Office Hour 形式 / 提问引导 / 转化埋点」。webinar-topic-feasibility 只审讲座 topic 评分，不覆盖 1v1 答疑形式。这是高转化但高成本动作（Mason 2h），需要 SOP 把每个高意向问题落到 EOI 数据库 + 24h 派单。建议新建 enrollment-office-hour-sop skill。 |
| T-1 周一 10:00（开课前最后一天降焦虑） | T-1 退费政策公示 + 学员焦虑安抚 FAQ 加 5 条「我担心 X 怎么办」 | Aurora（政策文案）+ Mason（内容焦虑）+ Dev（销售页 FAQ section 加） | partial | course-custom-landing | course-custom-landing 能改 FAQ，但「退费政策 + 焦虑安抚」是 legal + emotional 双重内容，当前 6 条 FAQ 都偏功能性（编程基础/时间/工具费/方式/学完做什么/双班选择），缺「我学不会怎么办 / 跟不上节奏怎么办 / 7 天无理由退费」三件套。skill 没有「焦虑安抚 FAQ 模板库」，需扩展 course-custom-landing 增加  |
| D-1 周二全天（确认已付款名单 → 拉群 → 群公告 →  | D-1 学员入营仪式准备：欢迎邮件 + 微信群拉群 + 班委自我介绍模板 | Neomi（群管）+ Beta（教务）+ 学习陪伴助教（待招或 Aurora 兼） | none |  | 完全没有覆盖。当前 76+ skill 里 employee-onboarding 是「公司新员工」入职，不是「Bootcamp 学员入营」。需要新建 student-cohort-onboarding-sop skill 覆盖：(1) 已付款学员 Welcome Email 模板（个性化称呼 + Day 1 学习路径 + 群入口 QR）(2) 微信群命名规则 + 群公告模板 + 群规 (3) 班 |
| D0 周三 19:30-21:00（晚上下班后开学典礼） | D0 开学典礼 / Welcome Workshop（90 min 直播 + 录屏存档给后报学员） | Mason 主持 + Aurora 致欢迎辞 + Lightman 远程问候 + 助教介绍 | partial | classroom-deck-builder | classroom-deck-builder 能做 Quest 课的 deck + ElevenLabs 配音 + 主动讲解动作，但开学典礼是「破冰 + 期待管理 + 学习路径预告 + 师资亮相」组合形式，不是单节 Quest。需扩展 classroom-deck-builder 增加 kickoff-ceremony mode，或新建 cohort-kickoff-ceremony skill： |
| D0 21:00-22:00（开学典礼结束立刻进群完成） | D0 学员入群破冰 + 班委选举 + Day 1 作业派发（开学第一天活跃度引爆） | Beta 群管 + 助教（每 10 人 1 个）+ 班长候选人 | none |  | 和 task 10 同根问题：没有 student-cohort-onboarding-sop skill。破冰仪式（4 句话自我介绍模板：地点+职业+想做的产品+期待）+ 班委选举 SOP（自荐 + 投票 + 任期）+ Day 1 作业（30 min 内完成的小任务，制造正反馈）— 全靠经验，新员工接手就翻车。这是完课率（招生期 KPI 的延伸）的核心抓手。 |
| D0 晚 22:00 群内统一 + 1v1 推送 | D0 晚 22:00 学习路径个性化派发（基础 vs 进阶分流 + 推荐学习节奏） | Mason + 助教 | partial | learning-journey | learning-journey skill 描述里没明确覆盖「cohort kickoff 当天个性化路径派发」场景。当前 outline.json 113 lessons 大纲清晰，但学员第一次看会被吓到。需要扩展 learning-journey 增加 personalize-by-tier mode（基础班 vs 进阶班分流推荐顺序）+ 「第一周必看 / 选看 / 后看」分级，让零基础学员 |
| T-7 至 D0 每日 21:00 复盘 + 周一晨会 | T-7 至 D0 招生期每日 KPI 看板（UV / EOI / 付款 / 转化率）+ 21:00 复盘会 | Aurora 主持 + Neomi（EOI 数据）+ Dev（埋点数据） | partial | course-promotion-architect | course-promotion-architect 有 weekly mode（晨会）但没有「招生期日报 SOP」。当前没有：(1) 招生期专用 dashboard（销售页 UV / EOI 收单 / 付款转化 / 24h 跟进完成率 4 个核心指标）(2) 21:00 每日复盘 15 min 会议议程模板 (3) gap > 20% 自动触发 rescue 流程。建议新建 enrollment |

#### Phase PHASEB gaps_summary

- **[P0] 学员入营 / 开学典礼 / 班委组织 SOP 完全缺失** — 招生期收完钱不算赢，D0-D7 学员入营体验直接决定完课率。当前 0 个 skill 覆盖学员侧 onboarding（employee-onboarding 是员工入职，不是学员入营）。新员工 Beta / 助教接手就靠经验摸索，每期翻车一次。完课率低 → 校友作品少 → 下期 OFFER WALL 没素材 → 下期销售页转化掉 → 死循环。
  → 新建 skill: student-cohort-onboarding-sop（D-1 拉群 / Welcome Email / 班委选举 / 破冰模板 / 助教分组 / Day 1 作业 全套）+ 新建 skill: cohort-kickoff-ceremony（90 min 开学典礼议程 + 仪式感设计 + 直播 SOP）

- **[P0] 招生期紧迫感 + 早鸟涨价 + 朋友圈刷屏 SOP 缺失** — T-3 临门一脚是招生期收入贡献最大窗口（行业基线 30-40% 报名在最后 72h），但当前完全靠 Aurora / Summer 个人经验。早鸟涨价幅度多少 / 朋友圈刷屏几轮 / 真实剩余席位怎么显示防假紧迫感 / 涨价后 24h 唤醒话术 — 全没文档。一旦虚假紧迫感被识破（学员发现「前 10 名」是假）→ 整个销售页信任崩塌 → 退款潮。
  → 新建 skill: enrollment-urgency-sop（早鸟梯度 / 真席位规则 / 3 轮朋友圈话术 / 涨价后唤醒 SOP / 合规边界 / 课程承诺红线 cross-check）

- **[P1] 倒计时 banner + 实时席位计数 技术组件缺失** — FUNNEL_PLAN.md §3 明确推荐做实时倒计时防假紧迫感，但销售页 content.ts 当前是硬编码「前 10 名」静态标签。每天手改一次 content.ts → push → CI 部署 → 5min 才生效，运营崩溃。03 期没法启动招生期。
  → 数据系统 + 组件库：admin 后台加 cohort.remainingSeats / cohort.priceUpAt 配置字段 + 销售页加通用 CountdownBanner 组件读这俩字段，所有 bootcamp 复用。归入 jr-academy-admin + jr-academy-web-zh 的产品 backlog（不是 skill）。

- **[P1] 7 天 pre-enrollment nurture 序列（加微信 → 报名）缺失** — funnel-handoff-design 是「买完引流课 → 主课」的 D0-D7 反推销序列，覆盖的是已付费用户。但加了微信还没买的潜在学员（招生期最大池子），没有内容 SOP — 销售助理只能拍脑袋发。每日 1 案例 + 1 工具 SOP 草稿没人产出 → 销售助理直接群发课程链接 → 用户屏蔽 → lead 浪费。
  → 扩展现有 skill: funnel-handoff-design 增加 pre-enrollment 模式（输入 PERSONAS.md 痛点 + outline.json 33 工具，输出 7 天 × 14 内容草稿），或新建 pre-enrollment-nurture-sequence skill。

- **[P1] 招生期每日 KPI 看板 + 复盘会 SOP 缺失** — course-promotion-architect 有 weekly mode 但招生期窗口只有 7 天，weekly 太慢。没有日报 → 出问题（如 EOI 24h SLA 漏完成）发现已是第 4 天 → 错过补救窗口。Aurora 单点依赖（出差就停），新人 Marketing 不知道每日看什么数。
  → 流程 SOP + 数据系统：扩展 course-promotion-architect 增加 daily-standup mode（招生期 7 天专用日报模板 + 4 核心指标 + 自动 gap 报警），关联 marketing-agent-orchestra 的 metrics-agent 拉数据自动化。

- **[P1] 退费政策 + 焦虑安抚 FAQ + 澳洲 ACL 合规缺失** — ai-programming 销售页 6 条 FAQ 都偏功能性，缺「学不会怎么办 / 退费政策 / 7 天冷静期」三件套。澳洲消费者法（ACL）对教育产品有冷静期要求，没合规文案 = 一旦学员投诉 ACCC 或申请 chargeback，平台输官司 + 信用受损。零基础人群本来焦虑就高，没退费保障直接劝退 30% 高意向 lead。
  → 扩展现有 skill: course-custom-landing 增加 anxiety-FAQ + refund-policy 模板（合规法务联审），或新建 refund-policy-page skill（澳洲 ACL + 中国消费者权益法双合规）。

- **[P2] 直播间 SOP（公开试听讲座 + Office Hour）缺失** — webinar-topic-feasibility 只做事前 topic 评分，不覆盖直播执行（开播前 30min checklist / 答题板节奏 / CTA 弹窗时机 / 录屏剪辑 / 回放发送）。Mason 一个人主讲 + 没助理，开播 5 min 卡机或 CTA 时机错过 = 整场流量浪费。试听讲座是招生期最大单点流量来源，没 SOP 不可复制（Mason 病了下场不能播）。
  → 新建 skill: webinar-live-sop（开播前 30min checklist / 直播间分工 / CTA 节奏表 / 录屏剪辑模板 / 回放发送话术），或扩展 offline-event-sop 增加 online webinar 形态分支。


### Phase C · 课程运营 (stage: 课程运营)

#### Tasks (16)

| When | Task | Owner | Coverage | Existing Skill | Gap |
|------|------|-------|----------|--------------|-----|
| D0 | 开班典礼直播组织（D0 — 03 期开课日） | 课程运营 PM（Beta 教务）+ 主讲 Lightman + 助教 | partial | classroom-deck-builder | classroom-deck-builder 能生成直播 deck（slide + ElevenLabs 配音 + 主动讲解动作），但 cohort 开班典礼是真人直播不是 AI tutor 课。缺：直播前 24h checklist（讲师 deck 走查 / 直播间设备测试 / Zoom 链接预约 / 助教排班）、直播中主持脚本（开场暖场 5 分钟 / 学员介绍轮 / 课程节奏宣讲 / 群规宣讲 |
| D0 → D+42（基础班）/ D+56（进阶班）每日 | 班级群日常运营（每日早安 + 答疑 + 防潜水） | 助教 1 名（推荐 KIKI/Lily 中一人轮值）+ Beta 教务兜底 | none |  | 0 skill 覆盖。需要日 SOP：08:00 早安 + 今日 lesson 节奏提醒、12:00 答疑闸 1（午休时段集中回复）、20:00 答疑闸 2 + 进度推动、22:00 静默。'防潜水'机制：3 天 0 发言学员自动私聊关怀。每日产出'群内问题 Top 5'回流到 outline 改进。当前所有 cohort 群运营都是 Beta 凭经验现写，没有标准化模板。 |
| D+3 起每日 / 每周一发周报 | 学习进度追踪 + 掉队学员识别（Dashboard） | Beta 教务 + Lightman 周一 review | none |  | 0 skill 覆盖。需要从 production 后端（jr-academy MongoDB）拉每个学员的 lesson 完成进度、Lab 通过率、Quest 提交状态，按'按时 / 慢 1 周 / 慢 2 周+ / 0 动作'分桶。当前 admin dashboard 有学生列表但没有'cohort 视角进度看板'。掉队学员 D+7 第一次卡点未识别就会沉默到结业。建议新建 skill：coh |
| D+1 起每日（学员提交即批） | Lab / Quest 提交批改（人 + AI 双轨） | AI 自动评判 + 助教人审复核 | none |  | 0 skill 覆盖。117 lessons 含 18 Lab + 14 Quest，cohort 24 人 × 32 提交 = 768 次批改。Lab 平台已有自动校验（interactiveLabSlug 后端逻辑），但 Quest（真实环境实操）目前只有 stepSkeleton 验证类型，缺'提交 → AI 初评 → 助教终审 → 学员反馈'闭环。已有的 quiz / Lab 自动判定不等 |
| 每周 1 次（基础班 6 周 = 6 次 / 进阶班 8 周 | 每周直播课组织（讲师 deck 走查 + 主持 + 回放） | Beta 教务（讲师对接 / 直播主持）+ 视频组（剪辑） | partial | classroom-deck-builder | classroom-deck-builder 只解决了 deck 生成。缺：T-72h 跟讲师确认 deck 提纲、T-24h 设备 + Zoom 测试、直播中主持脚本（暖场 / Q&A 时间分配 / 卡顿应急）、直播后 4h 内回放 + 字幕（已有 hyperframes transcribe 但没接入运营流程）。当前每场直播都是 Beta 临时拉清单，27 场直播 × 0 SOP = 高翻车风 |
| 每周一次（W1-W6 / W1-W8） | 每周班会 + 集体复盘（周五 21:00） | Lightman 主持 + Beta 协助 + 全体学员 | none |  | 0 skill 覆盖。需要班会模板：本周节奏回顾 / 本周作品 showcase（3-5 个亮点）/ 学员匿名 NPS 投票 / 下周预告 / Q&A。班会录像必须当晚剪辑发群（防止缺席学员脱节）。目前 ai-essentials / ai-engineer 跑过几期都没有标准班会模板，每期质量参差。 |
| D+14 起持续 / D+42(基础) / D+56(进阶) | 学员产出收集（4 大交付物 PPT/PDF/网站/视频） | 助教（每日盯交付清单）+ Beta（结业前总核对） | none |  | 0 skill 覆盖。这门课的核心差异化承诺就是'可上线 4 大交付物'，cohort 24 人 × 4 件 = 96 件作品要追、要存档、要发布。需要：(a) 学员提交表单 / GitHub repo / S3 链接收集机制；(b) 交付物 QA checklist（PPT 字体不崩 / PDF 可下载 / 网站可访问 / 视频字幕全）；(c) 优秀作品自动分类进 showcase 库供下期招生 |
| D+7、D+14、D+21（每次按掉队名单触发） | 学员 1v1 卡点介入（D+7 / D+14 / D+21 三道闸） | Beta 教务（私聊）+ Lightman 兜底（劝退/挽留决策） | none |  | 0 skill 覆盖。掉队学员如果 D+7 不主动 1v1，到 D+21 基本不可救。需要：(a) 触发条件（连续 3 天 0 动作 / Lab 卡同一关 ≥ 2 天 / 群内 0 发言 ≥ 5 天）；(b) 1v1 脚本模板（开场 / 探需 / 给方案 / 续命）；(c) 不可救 → 劝退 + 转下期决策 SOP。当前 0 落盘，每个学员都靠 Beta 个人记忆，cohort 一大就照顾不过来。 |
| T-7（开课前一周排班）+ 持续维护 | Faculty / 助教排班 + 答疑 SLA | Beta 教务排班 + Lightman 决策 SLA | none |  | 0 skill 覆盖。这门课 27 场直播 + 18 Lab + 14 Quest，需要至少 2-3 名兼职助教轮值。缺：(a) 助教招募 JD / 准入门槛（必须跑通过本课 Lab）；(b) 答疑 SLA（工作日 4h / 周末 12h）；(c) 排班表 + 时段覆盖 + 节假日轮换；(d) 助教月度复盘 + 工时核算。当前所有匠人 cohort 都是 Beta 一个人扛，cohort 03 期 |
| W3 周中 + 结业 D+42/D+56 + 结业 30 天 | NPS 调研（周中 W3 / 课程末 D+42 或 D+56） | Beta 教务发问卷 + Lightman 看结果 | none |  | 0 skill 覆盖。NPS 是'课程是否能续招下期'的关键指标。需要：(a) 周中 NPS（救急用，给低分学员立刻 1v1）；(b) 结业 NPS（pricing 决策依据）；(c) 结业 +30d 长尾 NPS（看作品真用没用 / 收入有没有变化，但要遵守'不承诺金钱'红线，只问技能变化）。问卷模板 + 数据落盘 + 周维度趋势分析 0 落盘。 |
| T-7 + W2 + W4 + 结业前 D-3 | 课程内容质量审计（Lab 跑不通 / outline 跟 prod 不一致 / 工具失效） | Beta 教务发起 + 助教执行 + Lightman 审最终 | partial | curriculum-review | curriculum-review 能做大纲完整性检查，但**不能检测**：(a) Lab interactiveLabSlug 后端是否还存在（被人删了 = lesson 打开 404）；(b) 33 个工具中是否有失效（Cursor / Claude / Vercel 任一改 API = 整节课废）；(c) outline.json 跟 production 后端 lesson list 是否 |
| 每周五班会 + 每日群内随机 | 学员荣誉机制（周冠军 / 周作品 Showcase / 群内激励） | Beta 教务执行 + KIKI/Lily 协助生成 showcase 图 | none |  | 0 skill 覆盖。零基础学员动力衰减快，需要正反馈机制：(a) 每周'最快完成 Lab'冠军 + 群内 @表彰；(b) 每周作品 showcase（自动从交付物里挑 3 个 + 生成海报发群 / 朋友圈）；(c) 持续打卡机制（连 7 天动作 = 小奖励 / 全员投票最有进步学员）。匠人之前用过但都是手工挑选，30 人 cohort 一上量就废。 |
| D+40（基础）/ D+54（进阶），结业前 2 天 | 结业答辩组织（基础班 P8 / 进阶班 P12） | Lightman + Beta + 邀请 1-2 位 Faculty / VC 评委 | none |  | 0 skill 覆盖。结业答辩 = 课程压轴 + 招生转化样本（下期招生页就用这些）。需要：(a) T-7 答辩前学员准备 SOP（5 分钟 deck + 3 分钟 demo + 2 分钟 Q&A）；(b) 评委邀请话术 + 评分表；(c) 直播架构（Zoom + 录像 + 实时字幕）；(d) 答辩当天主持脚本；(e) 答辩录像剪辑成 marketing 素材池。目前 ai-essentials  |
| D+42（基础）/ D+56（进阶）结业当天 | 结业证书发放 + 朋友圈晒证机制 | Beta 发证 + Lightman 签发 + KIKI 设计晒证海报 | none |  | 0 skill 覆盖。证书 = 二次传播 + LinkedIn 信任锚。需要：(a) 证书设计（含本人姓名 / 作品 URL / 课时 / 双签字 / 唯一 ID 防伪）；(b) 自动化发证 pipeline（学员名单 + 进度达标 → 生成 PDF + 上 S3）；(c) 学员晒证朋友圈/LinkedIn/小红书素材包（含 #匠人学院 #零基础学 AI 编程 话题）；(d) 晒证学员 → 自动加 |
| D+30 起每周轻 touch / D+60 / D+90 | 结业后 30 天作品落地追踪（不承诺金钱 + 技能落地） | Beta 教务 + Amelia/Rain/Angela 课程顾问（可选续课） | none |  | 0 skill 覆盖。这门课承诺'4 个可上线交付物'，结业不是终点是起点。需要追踪：(a) 网站 / 视频是否真的发布并有访问；(b) PPT / PDF 是否真的拿去用了（不问金钱结果，只问'是否给客户/同事看过'）；(c) 续报进阶班 / 陪跑层意向。⚠️ 严守红线：不能问'赚了多少钱'，只能问'用没用'。结业 +30d 转化样本 = 下期招生最强素材。 |
| 每周一发上周报 + D+45（基础）/ D+60（进阶）总复 | 运营周报 + 课程末复盘报告（cohort 03 期复盘） | Beta 教务起草 + Lightman review | none |  | 0 skill 覆盖。每期 cohort 跑完必须沉淀'下期改什么'，否则同样的坑会跳 N 期。需要：(a) 周报模板（进度 / 掉队人数 / Lab 卡点 Top 3 / 直播 NPS / 群活跃度）；(b) 课程末复盘报告（完课率 / NPS / 作品交付率 / 续报率 / outline 改进建议 / 助教绩效）。这份报告反推 outline.json 改进、PROMOTION_PLAN 调 |

#### Phase PHASEC gaps_summary

- **[P0] Cohort 运营 SOP 全套（开班 / 日常群运营 / 进度追踪 / 1v1 卡点 / 周班会 / 结业答辩 / 证书 / 30 天落地追踪）** — 这是匠人最大的系统性缺口。Marketing skills 满天飞但 0 运营 skill。03 期开课后 Beta 教务一个人扛 24 学员 × 42-56 天，凭记忆运营，必然出现：(a) 掉队学员沉默到结业完课率跌破 50%；(b) 作品交付率 < 30% 导致下期招生页无素材；(c) NPS 数据 0 沉淀无法定价决策；(d) 同样的坑跳到 04 期 05 期。这是'课程能不能续命'的命根。
  → 新建 6 个核心运营 skill：cohort-launch-sop（开班 SOP）、cohort-daily-ops（群运营日 SOP）、cohort-progress-tracker（进度看板 + 拉 prod 数据）、cohort-1v1-intervention（掉队 1v1 脚本）、cohort-graduation-defense（结业答辩 + 证书 + showcase）、cohort-postmortem（周报 + 课程末复盘报告）。优先级 P0，建议 2 周内 ship 前 3 个（最高频）。

- **[P0] Quest / Lab 批改闭环（AI 初评 + 助教终审 + 学员反馈）** — 117 lessons × 24 人 × 32 提交 = 768 次批改。Lab 有自动校验但 Quest（真实电脑环境实操）目前只有 stepSkeleton 验证类型，没有'提交 → 评分 → 反馈'闭环。助教不批改 = 学员不知道做对没 = 完课无意义。零基础学员尤其需要每次提交都有反馈，否则 W2 就放弃。
  → 扩 classroom-deck-builder 的 Quest 模块，或新建 quest-grader skill：input = 学员提交 + Quest stepSkeleton + 学员上下文；output = AI 评分（pass/partial/fail）+ 改进建议 + 助教 review queue。配合 jr-academy 后端加 QuestSubmission collection（目前没有）。

- **[P0] 学员产出 4 大交付物归档 + Showcase 库** — 这门课唯一的差异化承诺就是'4 个可上线交付物'，结业不归档 = 下期招生页无素材 = 销售页变空话 = 转化跌。当前 ai-essentials 上 3 期 0 作品归档，结业证书都是手搓。03 期 24 学员 × 4 件 = 96 件作品，不系统化归档必然丢失。
  → 新建 deliverable-collector skill：input = cohort 名单 + 4 大交付物 schema（PPT/PDF/网站/视频 各自 URL + 截图）；output = (a) 学员提交表单 + S3 上传 pipeline；(b) QA checklist；(c) 自动生成结业证书（含作品链接）；(d) 优秀作品自动同步到 ai-programming/content.ts 的 OFFER WALL（参考 ai-engineer-bootcamp v1.6）。

- **[P1] 课程开课前实测 + 内容 drift 检测** — curriculum-review 只查大纲完整性，不查 (a) Lab 后端是否还存在 / (b) 33 工具是否还能用 / (c) outline.json vs production 后端 lesson list 是否一致。任何一项失效 = 开课当天学员炸群 = Lightman 信用扣分。03 期开课日还没定 = 还有窗口补救。
  → 扩 curriculum-review 加 'cohort-readiness' mode（T-7 开课前跑），调用 jr-academy 后端 API 实测每个 interactiveLabSlug / 每个 lesson 的 prod 状态 / drift 检测；或新建 cohort-readiness-check 独立 skill。

- **[P1] NPS 调研机制（周中 / 结业 / 30 天后三道闸）** — NPS 是定价、续招、续课、提价、改 outline 的唯一客观依据。零基础课程客户敏感度高，没数据就是盲拍。当前所有 bootcamp 都没有结构化 NPS。
  → 新建 cohort-nps-collector skill：内置 3 套问卷（W3 周中救急 / 结业 / 30 天落地），落盘到 curriculum/ai-programming/cohort-{n}/nps/，自动生成趋势图 + 低分学员名单 + 反推 outline 改进建议。⚠️ 30 天问卷严守红线（不问金钱结果，只问技能落地）。


### Phase D · 课后复盘续费 (stage: 课后复盘续费)

#### Tasks (14)

| When | Task | Owner | Coverage | Existing Skill | Gap |
|------|------|-------|----------|--------------|-----|
| D+7（结课后 1 周内） | 02 期 cohort 复盘报告（完课率 / NPS / 翻车点 / 学员问卷） | Mason（课程主理人）+ Beta（教务）+ Aurora（拉问卷数据） | partial | course-promotion-architect (Mode E postmortem) | promotion-architect 的 postmortem 只覆盖『渠道转化数据回填 + 3 条 lessons learned』。它不包含『学员维度复盘』：113 lessons 的完课率分布、每个 lesson 的卡点、问卷设计（NPS / CSAT / 续费意向 / 推荐意向）、学员逐字反馈聚合、翻车 lesson 标记。当前 `AUDIT_LOG.md` 模板也只记决策日志不是 co |
| D+7 ~ D+14 | OFFER WALL / 学员真实作品集收集（4 大交付物 × 02 期学员） | Mason + Aurora + Designer | none |  | ai-engineer-bootcamp v1.6 销售页有 5 张校友 OFFER 截图模式（PROMOTION_PLAN §0.5 明确指出 ai-programming 还没做）。需要的能力：(1) 群发学员收集作品授权（PPT/PDF/Landing Page/60s 视频 4 类）；(2) 脱敏处理（去掉客户名/真实公司数据）；(3) 统一缩略图风格出 wall；(4) 同步到 cont |
| D+10 ~ D+21 | Testimonial 视频拍摄 / Vlog 邀请 3-5 位代表学员 | Aurora + Seren + 视频剪辑（外部 / Mason 内部） | none |  | PERSONAS A/B/C 三类各挑 1-2 人拍 30-60s vlog（『我之前完全不懂代码，6 周做出了 X』）→ 销售页 + 小红书 + 公众号复用。当前 skill 矩阵里：speaker-invitation-kit 是邀讲师不是学员；offline-event-* 是线下活动；没有『学员 testimonial 拍摄 brief + 问题清单 + 授权书 + 剪辑 spec』ski |
| D+7（趁热）+ D+30（second touch） | 基础班 → 进阶班 续费转化机制（02 期已结业学员定向） | Mason + Amelia（课程顾问）+ Lightman 定价审批 | partial | main-course-tier-design | main-course-tier-design 覆盖『三档定价设计』但是**预售期的事**。这里需要的是『已结业基础班 → 续报进阶班』的转化机制：续报折扣（$1360 → 老学员价？）/ 推荐礼 / 进阶班试听课 / 已学知识衔接保证。FUNNEL_PLAN.md 当前只到 D0 不覆盖『同课程内的两档升级路径』。建议扩 main-course-tier-design 增『同学院老学员升级 SO |
| D+7 ~ D+14（结业气氛最热时） | 老带新 / 推荐奖励机制设计 + 落地（学员推荐学员） | Aurora + Lightman + Dev（埋点） | none |  | AUD $860/$1360 客单价 + 零基础人群（PERSONAS A/B 决策依赖『身边人推荐』ground truth）→ 老带新 ROI 极高。需要的能力：推荐人奖励档位（现金 vs 抵扣券）/ 被推荐人优惠 / 推荐链接生成 / 后端 attribution / 防刷规则。当前 0 skill 覆盖，FUNNEL_PLAN.md 也没列。**P1 gap** — 不解决就只能靠付费投放 |
| 持续（D+7 起每周 1 次输出） | 已结业 alumni 社群维护（不让学员走丢 / 持续输出价值） | Mason + Beta（教务）+ Summer（内容代发） | partial | daily-jobs | daily-jobs 每天往学员侧 `/ai-jobs` 推 AU+CN 岗位（已在跑）但**只是岗位**，不是 alumni 群运营内容。alumni 群需要：每周精选 AI 工具 / 学员作品 spotlight / 行业新闻 / 群答疑沉淀。课程运营反原则明确禁止『群公告内容工厂』，但 alumni 群属于『从外部世界拉价值给学员』允许。当前**无 skill 覆盖『alumni 内容周报生 |
| D+14 ~ D+21（确定 03 期日期后） | 03 期招生提前预告 + 销售页加『上期同学反馈 / 这期改了什么』 | Mason 拍板改进点 + Aurora 出推广文案 + Dev 改 content.ts | partial | course-custom-landing (Mode B 迭代) | course-custom-landing Mode B 覆盖『已有 landing 迭代』，能做 hero / FAQ / 价格更新。但『上期翻车点 → 这期改进』的**叙事板块**（『02 期同学反馈进度太赶 → 03 期 6 周延到 7 周』这种 honest changelog）不是它的 strength。PROMOTION_PLAN.md 当前 03 期开课倒计时 banner 也标 ` |
| D+14（问卷数据回收后） | PERSONAS.md 用 02 期真实 cohort 数据 refresh（v0.55 → v0.80） | Mason + Aurora | full | target-user-persona-mapper | target-user-persona-mapper 有 `refresh` mode 专门做这事（『半年后用真实数据替换 AI 推测』）。当前 PERSONAS.md GT 0.55 是『刚过阈值』，02 期问卷 + 群聊记录 + 真实退款理由 → 直接喂进 refresh mode 升到 0.75-0.80。**zero gap**，会做但要等 cohort 复盘数据先出。 |
| D+14（销售数据 + 完课数据齐） | FUNNEL_PLAN.md 真实转化率回写（替换行业基线 5% 假设） | Aurora + Lightman | partial | course-promotion-architect (Mode E postmortem) + c | course-promotion-architect postmortem 明确说『把真实数据更新回 FUNNEL_PLAN.md 让下次 init 不再用行业基线』。但 ai-programming 销售页早就在跑 + 02 期已结业，**这次回写要同时盖：销售期转化（UV→加微→主课）+ 课中（完课率 / lesson 退出节点）+ 课后（NPS / 续费意向 / 老带新）**，跨度比 pos |
| D+14（复盘会议后） | 内部 AUDIT_LOG.md 写本次 cohort 翻了什么车（教训沉淀） | Mason + Lightman 联合签字 | partial | curriculum-positioning-audit | AUDIT_LOG.md 模板（参考 curriculum/ai-engineer-bootcamp/AUDIT_LOG.md）当前已存在，但 `/curriculum-positioning-audit` 是『漏斗机制翻车风险』预防性扫描，不是『cohort 结束后回写实测翻车』。两者结构不同。当前 AUDIT_LOG.md 是空模板 — 需要 manual fill。建议扩 curriculu |
| D+21 ~ D+30 | 老学员唤醒到下一门 JR Academy 课（ai-engineer / ai-solo-founder / ai-marketing 等） | Mason + Amelia + Aurora（跨课程协调） | none |  | ai-programming 学员学完后的下一步：(1) 想深入做 AI 产品 → ai-engineer-bootcamp；(2) 想做 AI 创业 → ai-solo-founder；(3) 想做 AI 营销 → ai-marketing。**当前 0 skill 覆盖『学员学习路径设计 + 跨课程 upsell 文案 + 个性化推荐』**。eoi-followup 是 lead → 成交不是 |
| D+14 ~ D+30 | 海报 / 公众号 / 小红书 加 02 期真实学员案例（content refresh） | Summer / Lily / KIKI（小红书）+ 文案（公众号）+ Designer（海报） | full | xhs-draft + xhs-poster + xhs-review + blog-longfor | skill 全齐：小红书四件套 / 公众号 longform / 海报 user-test。**唯一卡点是『真实学员案例 brief』作为 input**——需要 Mason 提供 5-10 个学员案例文字稿（来自 OFFER WALL task）。skill 之间 wire 完整。零新建 skill 需求。 |
| D+21（cohort retro + OFFER WALL | Custom landing 销售页加新 cohort data + Faculty 实名 + 校友 OFFER 模块 | Mason 提供 input + Dev 改 content.ts + Designer 出 wal | partial | course-custom-landing (Mode B) | course-custom-landing Mode B 能改 hero/FAQ/价格，但 PROMOTION_PLAN.md §0.5 标了两个具体缺口：(1) Faculty 未列实名（ai-engineer-bootcamp 是有的）；(2) 校友作品 / 反馈未加（OFFER WALL 模式）。Mode B 描述里没写明这两个模块的 wiring spec — 改要靠 Mason 手动指挥 |
| D+21 ~ T-30（衔接到 03 期推广窗口） | 03 期 cohort 启动前的 promotion-architect rescue / weekly 排期 | Aurora + Mason | full | course-promotion-architect (Mode A init / Mode D w | course-promotion-architect 完全覆盖：postmortem（02 期数据）→ init（03 期 T-30 重启）→ weekly（持续排期）形成闭环。**只是 03 期日期未定阻塞这个 task** — 看 PROMOTION_PLAN.md `03 期 launch date: ⚠️ 待运营/Mason 定`。Skill OK，等业务侧给日期。 |

#### Phase PHASED gaps_summary

- **[P0] 学员作品集 / OFFER WALL 收集 SOP（含授权书 + 脱敏 + 上架）** — ai-engineer-bootcamp v1.6 销售页因为 5 张校友 OFFER 转化率明显上升，ai-programming PROMOTION_PLAN.md §0.5 自己标了『校友作品 / 反馈 ❌ content.ts 还没加』。不解决：03 期销售页继续靠 stock 卖点 vs 隔壁 ai-engineer 用真实 OFFER WALL → ai-programming 转化率被压制 + 失去『同类人也能做到』社会证明 → PERSONAS A/B 决策周期延长 → 03 期招生不及预期 → 04 期更难。
  → 新建 skill `/student-work-showcase-builder`（5 mode：brief 群发 / 授权书模板 / 脱敏 lint / 缩略图统一风格 / content.ts wiring）— 全公司多门 bootcamp 复用。或最小化：在 course-custom-landing Mode B 加 socialProof 模块化指引 + 一份『学员作品收集运营 SOP』Markdown。

- **[P0] Alumni 长期留存与跨课程 upsell 路径（『学完下一门学什么』）** — JR Academy 有 ai-programming / ai-engineer-bootcamp / ai-solo-founder / ai-marketing / ai-adoption / ai-essentials 等十几门 AI 课，但**没有学员 LTV 矩阵**。ai-programming 学员结业即流失 = LTV 卡在 $860-$1360。横向看 ai-solo-founder $43-176k AUD faculty mentorship 完全可以是 ai-programming 学员的 next step。不解决：每门课重新拉新成本极高（推广预算 80% 给新 lead），老学员是金矿被浪费；学员侧也不知道下一步学什么 → 流失到外部社区 / Coursera。
  → 新建 skill `/alumni-next-course-recommender`（input：学员 cohort + 完课率 + NPS + 自填目标；output：3 个推荐路径 + 升级优惠 + 跨课程文案）。配套数据系统：后端加 `alumni_journey` collection 记录学员跨课程轨迹。先用 ai-programming 02 期作为 pilot。

- **[P1] Testimonial 视频拍摄 SOP（brief / 问题清单 / 授权 / 剪辑 spec）** — 30-60s 学员 vlog 是销售页 + 小红书 + 公众号通用社会证明素材。当前 skill 矩阵 0 覆盖：speaker-invitation-kit 是讲师不是学员；offline-event-* 是活动现场不是 1v1 vlog；视频系统 jr-academy-videos 是品牌讲解视频不是 testimonial。不解决：(1) Aurora / Mason 凭感觉问学员问题，每次问的不一样 → 素材质量不稳定；(2) 没授权书 → 后期不敢用怕被告；(3) 多门 bootcamp 都缺这能力 → 重复造轮子。
  → 新建 skill `/testimonial-video-brief`（4 mode：候选人筛选标准 / 问题清单按 persona 分支 / 授权书模板 / 剪辑结构 spec）。出 1 个『学员 testimonial 内容池』在 curriculum/{slug}/testimonials/ 落盘，多平台复用。

- **[P1] Cohort 复盘维度扩展（学员侧 + 课程侧 + 漏斗侧三层）** — course-promotion-architect postmortem 现在只覆盖『销售漏斗数据回填』；curriculum-positioning-audit 是『预防性翻车扫描』；AUDIT_LOG.md 是『决策日志』。**三者都不覆盖 113 lessons cohort 实际怎么过的**：哪节课最多人卡 / 哪节课问卷低分 / Faculty 哪些动作有效。不解决：03 期 04 期继续凭直觉改课程内容；翻车点在不同 cohort 重复发生；学员 NPS 数据没沉淀到 ground truth pool 喂回 PERSONAS / FUNNEL。
  → 扩 course-promotion-architect postmortem 增『学员侧 + 课程侧』维度 OR 新建 `/cohort-retrospective`（input：问卷 / 完课率 / 群聊 export；output：3 层 retro 报告 + 自动喂 PERSONAS refresh + 自动喂 AUDIT_LOG）。流程 SOP：D+7 问卷出 → D+14 retro 会议 → D+21 PERSONAS/FUNNEL refresh → D+30 改进点进 03 期销售页。

- **[P1] 老带新 / 推荐分销机制（产品 + 数据系统 + 文案）** — PERSONAS A『非技术创业者』+ B『传统行业转型者』决策依赖『身边人推荐』是 ground truth（PERSONAS.md 写过）。AUD $860/$1360 客单价高 → 推荐礼实付 $50-100 ROI 远好于付费投放（CAC 通常 $200+）。当前 0 skill + 0 后端数据系统覆盖：没有推荐链接 attribution / 没有奖励发放 SOP / 没有防刷规则。不解决：03 期招生只能继续拼付费投放 + 自然流量；老学员热情期错过；alumni 群也没动力帮你拉人。
  → 数据系统先行：后端加 `referral` collection（推荐人 / 被推荐人 / 优惠码 / 发放状态）+ 课程购买流加优惠码 input。再造 skill `/referral-program-designer`（档位设计 / 文案 / 防刷规则 / SOP）。MVP 用 ai-programming 02 期已结业学员当首批种子。


### Phase E · 内容生产闭环 (stage: 内容生产闭环)

#### Tasks (18)

| When | Task | Owner | Coverage | Existing Skill | Gap |
|------|------|-------|----------|--------------|-----|
| 每日 07:30 AEST（晨会前） | 每日热点池抓取（Reddit / X / 即刻 / 知乎热榜 / 小红书热榜） | Summer / Lily / KIKI 轮值（新媒体负责人） | partial | xhs-topic-picker | xhs-topic-picker 只覆盖知乎/百度/微博 + 小红书业务关键词；零基础非技术 persona 真正活跃的 Reddit r/learnpython / r/ChatGPT、X AI 大 V、即刻 AI 工友圈、B站 AI 区都没拉。ai-programming 目标人群一半在 X/Reddit/即刻活跃，盲区直接漏掉爆款选题。 |
| 每日晨会 09:00 | 每日 9 个候选选题筛选 + 锚定 ai-programming 3 个 persona（零基础宝妈 / 想转型传统从业者 / 想做产品创业者） | Aurora（marketing 总监）+ 三个新媒体 | full | xhs-topic-picker | skill 已覆盖 5 跨账号热点 + 4 校园垂类，但需手动喂 PERSONAS.md path；本课已有 PERSONAS.md 可直接 anchoring。 |
| 每日 10:00 派单 | 11 账号矩阵任务派单（哪个账号发什么切角） | Aurora 派单 → Summer / Lily / KIKI 执行 | partial | marketing-agent-orchestra | orchestra Phase 0 手动阶段无 task-dispatcher 自动派单；现在靠 Aurora 微信群手动喊号，新人接班无 SOP，11 个账号的内容调性差异只在 xhs-topic-picker 表格里，没绑到 admin Kanban 任务上。 |
| 每日 10:30-12:00 | 3 切角初稿生成（痛点 / 故事 / 干货 各一稿） | 员工自己写 + xhs-draft 辅助 | full | xhs-draft | skill 已覆盖 3 切角并出 + 账号人设匹配 + PERSONAS.md anchoring，本课 PERSONAS.md 齐全可直接跑。 |
| 每日 12:00-14:00（与初稿同步） | 封面 + 内文 + CTA 配图（1242×1660 海报，最小 24px 字号） | 员工自己出 + xhs-poster 辅助 | full | xhs-poster | 本课 POSTER_DESIGN.md + 已有 8 张海报范例可作 reference；xhs-poster + poster-user-test 覆盖设计 + 测试。 |
| 发布前 1 小时 | 违禁词扫描 + 降 AI 率 review | 员工自查 + xhs-review | full | xhs-review | 已覆盖；ai-programming 课程承诺红线（禁'副业'/禁金钱承诺）需手动写入 review checklist 让 skill 拦截。 |
| 发布前 30 分钟 | 9 维度内容打分（发布线 75 分） | Aurora / 内容主管审 | full | xhs-score | 已覆盖；多账号打分结果需汇总到 dashboard 看哪个账号水准持续低于 75。 |
| 每日发布窗口 | 多平台发布排期（小红书 18:30 / 视频号 19:00 / 公众号 21:00 / 朋友圈 20:00 / LinkedIn 早 8 点） | 员工手动 + 排期表 | none |  | 完全无 skill 覆盖。当前靠 Aurora 维护 Notion 排期表手动喊号，发完忘填、抢窗口、错峰发都靠人脑；11 账号 × 6 平台 = 66 个发布点，每天人工排错率 30%+。 |
| 小红书发布后 24h 内 | 一稿多发（小红书稿 → 改适配公众号长文 / 视频号脚本 / LinkedIn 英文 / X / 朋友圈短文） | 员工手动改写 | none |  | 完全无 skill 覆盖。当前一篇稿子 6 个平台 = 员工手动改 6 次，单稿耗时 2 小时；blog-longform-writer / wechat-article-quality 只审不改；没有'小红书→其他平台'的一稿多发 skill。 |
| 周三 / 周六 21:00 | 公众号长文深度版同步（小红书 500 字 → 公众号 2000 字加干货） | Summer / Aurora 写 | partial | blog-longform-writer | blog-longform-writer 能写原创长文但没有'小红书爆款 → 公众号扩写'的转换模式；wechat-article-quality 只审不写；本课暂无公众号专属发布节奏 SOP。 |
| 每周 2-3 条 | 60s 竖屏短视频生产（视频号 / 抖音 / B 站 / X / Reels） | Mason（视频剪辑）+ 新媒体配脚本 | partial | remotion-best-practices | remotion / hyperframes 偏视频生产技术；没有'小红书爆款帖 → 60s 短视频脚本 + 字幕 + 配音'的内容转化 skill；视频号矩阵 0 账号在跑，是 ai-programming 漏掉的关键流量池。 |
| 发布后 0-24h 持续 | 前 24h 评论区运营（≥5 条优质评论才能进自然流量池） | 员工自己回复 + 小号互动 | none |  | 完全无 skill 覆盖。小红书算法硬规则：前 24h 评论 <5 推流减半。当前员工发完就走，没人盯评论区；没有'评论话术库 / 小号互动 SOP / 引流话术合规审核'。爆款率 5% 大部分死在这一步。 |
| 发布后 0-72h | 评论区引流到私域（合规话术 + 不留联系方式 + 钩子 → 私信 → 加微信） | 员工 + 课程顾问（Amelia/Rain/Angela）接力 | none |  | 完全无 skill 覆盖。小红书严打留联系方式，评论引流必须用合规话术（如'扣 1 / 主页见 / 关注我私信'）；当前员工乱写被限流；没有'内容 → 私信 → 加微信 → 课程顾问'的话术 SOP + handoff 流程。eoi-followup 是活动后的，不是内容引流的。 |
| 每日 23:00 | 每日 KPI 数据日报（11 账号 × 曝光 / 点赞 / 收藏 / 评论 / 涨粉 / 引流加微） | Aurora 汇总 + 员工填报 | none |  | 完全无 skill 覆盖。当前靠员工每晚手填 Notion 表，11 账号 × 7 指标 = 77 个数据点，漏填率 50%；没有'小红书后台数据爬取 + 自动汇总 + 异常账号预警'的 metrics-collector skill。marketing-agent-orchestra 标 P0 待建但还没造。 |
| 每周一上午 | 数据回流分析（哪类切角爆 / 哪类账号涨 / 哪个时段最优） | Aurora + Lightman 周会 | none |  | 完全无 skill 覆盖。当前周会靠 Aurora 凭印象说'感觉故事版爆款率高'，没有数据支撑；没有'7 天数据 → 切角 ROI / 账号 ROI / 时段 ROI'的回流分析 skill；选题策略无法基于数据迭代。 |
| 每周五下午 | 失败内容复盘（爆款率 <10% 的内容，5 维度找原因） | Aurora 主持 + 全员参与 | partial | xhs-score | xhs-score 是发布前打分；发布后失败复盘没有专属 skill；当前复盘靠主观讨论，没有'低曝光 / 高曝光低互动 / 高互动低收藏 / 高收藏低引流'的分层归因模板。 |
| 每日数据回收 | 内容 → 引流课转化漏斗追踪（ai-programming AUD $99 引流课，从内容点击 → landing → 付费） | Aurora + Dev（埋点） | none |  | 完全无 skill 覆盖。FUNNEL_PLAN.md 设计了引流课 → 主课漏斗，但'哪条内容贡献了几个引流课付费'无追踪；没有 UTM / 短链 / GA4 attribution 接到内容侧；运营完全黑盒。本课客单价 $860-1360，1 个学员摊销 $30 内容成本 ROI 极高，但没追踪就无法优化。 |
| 每周汇总 | 内容 → 主课转化漏斗追踪（引流课 → 7 天过渡 → AUD $860/1360 主课） | Aurora + Amelia/Rain/Angela 课程顾问 | partial | funnel-handoff-design | funnel-handoff-design 设计了 7 天过渡序列但没追踪能力；'某个小红书爆款帖最终转了几个主课付费'断链；课程顾问报名表 + 内容发布表 + 引流课付费表 3 个 Excel 互不关联。 |

#### Phase PHASEE gaps_summary

- **[P0] 多平台发布排期 + 一稿多发自动化（小红书 / 公众号 / 视频号 / LinkedIn / X / 朋友圈 / 抖音 / B站）** — ai-programming 客单价 $860-1360 但目标人群（零基础宝妈 / 传统行业转型者 / 创业者）分散在 6+ 平台，只发小红书 = 漏 60% 流量池。当前 11 账号 × 6 平台 = 66 发布点全靠员工手排错峰，每天漏发 / 错峰 / 抢窗口错误 30%+，员工单稿改写 6 平台耗时 2h，按 11 账号每天产能直接砍半。视频号 0 账号在跑，B站 / 抖音零曝光，是本课最大流量漏斗。
  → 新建 skill：(1) /content-multi-platform-distributor（一稿多发：小红书稿 → 公众号长文 / 视频号脚本 / LinkedIn 英文 / X / 朋友圈）；(2) /content-schedule-planner（66 发布点排期 + 错峰 + 自动喊号）；(3) /short-video-script-converter（爆款帖 → 60s 竖屏脚本 + 字幕 + 配音），与已有 remotion-best-practices / hyperframes 视频系统打通。MVP 1-2 周可造完。

- **[P0] 前 24h 评论区运营 + 评论引流私域链路（小红书算法死规则）** — 小红书算法硬性规则：发布后前 24h 评论 <5 条 → 推流减半 → 一篇爆款胎死腹中。当前员工发完就走，评论区 0 互动是 ai-programming 课内容爆款率仅 5% 的核心原因之一（应有 15-20%）。同时评论引流到微信是小红书严打区，没有合规话术 SOP，员工乱写'扫码加微信'被限流甚至封号，11 账号矩阵任何一个被封都是几个月积累归零。
  → 新建 skill：(1) /xhs-comment-ops（前 24h 评论运营 SOP + 50 条评论话术库 + 小号互动节奏）；(2) /content-to-private-domain-bridge（合规引流话术：扣 1 / 主页 / 钩子文档免费领 / 私信关键词 → 课程顾问 handoff）；(3) 流程 SOP：内容 → 评论 → 私信 → 加微信 → eoi-followup 接力（已有 skill，但断链需要中间这一段）。

- **[P0] KPI 数据回收 + 内容 → 引流课/主课转化漏斗追踪（marketing 黑盒变白盒）** — 当前完全黑盒：11 账号每天发 30+ 条内容，哪条贡献了引流课 $99 付费、哪条最终转了主课 $860/1360 付费，全不知道。Aurora 周会靠'感觉故事版爆款率高'决策，员工每晚手填 Notion 数据漏填率 50%。本课客单价高，单个内容 ROI 应该非常高（$30 内容成本撬动 $1360 主课），但没追踪就无法把好内容复制、坏内容停掉。3 个月下来烧 marketing 预算 $50k+ 无数据回收就是无效投放。marketing-agent-orchestra 标 metrics-collector 为 P0 待建但还没造。
  → 数据系统（不止 skill）：(1) 新建 /marketing-metrics-collector skill：小红书后台数据爬取 + 11 账号自动汇总 + 异常预警；(2) 新建 /content-attribution-tracker skill：UTM + 短链 + GA4 接到每条内容 ID；(3) 后端建 attribution DB：MongoDB collection contentAttributions { contentId, channel, platform, leadsCount, paidUsers, courseId }；(4) admin dashboard 加 'Content ROI 看板' tab；(5) /content-weekly-review skill：7 天数据 → 切角/账号/时段 ROI 自动出报告。MVP 3-4 周。

- **[P1] 热点抓取覆盖盲区（Reddit / X / 即刻 / B 站 AI 区）+ ai-programming persona 偏移** — xhs-topic-picker 现只拉知乎/百度/微博/小红书热榜，但 ai-programming 目标人群（想做产品创业者尤其活跃在 X AI 大 V + Reddit r/ChatGPT + 即刻 AI 工友圈 + B 站 AI 区）的真实热点完全漏掉。零基础宝妈 persona 也大量在 B 站 / 抖音找 AI 教程而非小红书。结果：选题永远滞后真实社区热点 1-2 周，员工产的爆款率天花板被锁死在 5%。
  → 扩展 xhs-topic-picker 信号源（不新建 skill）：新增 Reddit / X / 即刻 / B 站 4 类信号源 WebFetch 模块；持续 SOP：每月人工审一次'热点池命中率'调参；ai-programming 这种创业向课程的选题，X AI Twitter 信号权重应该 ≥ 知乎。

- **[P1] 11 账号矩阵任务派单（Aurora 手动喊号 → admin Kanban 自动派单）** — marketing-agent-orchestra Phase 0 标'手动'但没给手动阶段的 SOP；当前 Aurora 每天微信群喊'Summer 你今天发 X、Lily 发 Y'，新人接班无 SOP 直接抓瞎；11 账号调性差异只在 xhs-topic-picker 表里，没绑 admin Kanban 任务对应；员工经常发错调性（Rain 姐号发了 KIKI 校园号风格）。
  → 流程 SOP（不需新 skill）：(1) admin Kanban 增加'内容任务'列，按账号分；(2) xhs-topic-picker 输出直接 import 到 admin 派单；(3) marketing-agent-orchestra 补 MANUAL_RUNBOOK 派单 SOP；(4) 远期再造 /marketing-task-dispatcher 自动派单（marketing-agent-orchestra 已标 P0 待建）。

- **[P1] 失败内容复盘（无系统归因 + 无迭代闭环）** — 当前周五复盘靠主观讨论'这条为什么没爆'，没有'低曝光（推流问题）/ 高曝光低互动（标题不对）/ 高互动低收藏（内容浅）/ 高收藏低引流（钩子不行）'的分层归因模板。结果：失败内容找不到根因 → 下周继续犯同样错 → 11 账号集体卡在爆款率 5%。
  → 新建 skill /xhs-postmortem：输入失败内容 + 数据 → 自动归因 4 层（推流 / 标题 / 内容 / 钩子）→ 输出'下次怎么避免'清单。复用 xhs-score 9 维度但反向推（爆款没爆是哪一维拉了腿）。

