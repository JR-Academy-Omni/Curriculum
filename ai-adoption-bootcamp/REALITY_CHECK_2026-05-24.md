# AI Adoption Bootcamp — Market Reality Check

**日期**: 2026-05-24
**触发原因**: Marketing 团队反馈：参加线下活动的学员一搜 Seek 发现 AI Adoption 类岗位"一只手都数得过来"，还都是 Lead/Head 级。咨询时无法给学员"学完能找到工作"的信心。
**调研产出**: `/tmp/claude-b/.claude/jobs/e2eea352/jd-research.md`（完整 JD 调研，含 URL）

---

## 1. 当前定位（来自 outline.json + workshop + PRD）

| 项 | 当前承诺 |
|---|---|
| 课程名 | AI Adoption Specialist Bootcamp |
| 时长 | 8 周（22 直播 + 30+ 自学 + 39 lab） |
| 目标用户 | "业务专业人士、运营管理者、希望推动企业 AI 采纳的**非技术人员**" |
| 准入门槛 | "无需编程基础。需要有基本的办公软件使用经验。" |
| 核心 outcome | "市场薪资 **$70K-$250K**"（写进 L01 + workshop 标题） |
| 隐含承诺 | 学完能转岗 AI Adoption Specialist 找到工作 |
| Workshop 副标题 | "让你看清这个 **$70K-$250K 新岗位**长什么样" |

> **承诺红线检查**：写明薪资数字但**没有金融兜底承诺**（没说"包就业 / 月入 X"），形式上不违反 `feedback_no_revenue_promise`。但**间接构成对学员的就业暗示** —— 真撞市场时学员会觉得被骗。

---

## 2. 市场真实数据（vs 当前承诺）

### AU 市场（学员直接对照的市场）

| 当前承诺 | 真实数据 | Gap |
|---|---|---|
| "$70K-$250K 新岗位" | 全 AU title 写明 "AI Adoption Specialist/Lead" 的真实 active JD: **5-15 个** | 池子太小，无法支撑就业承诺 |
| "无需编程基础" + 写给"非技术人员" | 拿到全 JD 的 Virgin AU 案例：**5+ 年 transformation 经验 + 懂 LLM/RAG/agents/prompting** | 准入门槛 vs 课程门槛**完全错位** |
| 隐含 entry-level 转岗 | Seniority 分布: Junior **0** / Mid 30% / Lead+ **70%** | **entry-level 缺口几乎为零** |
| $70K 是下限 | 真实薪资带：Pathfindr 未披露；Tomoro.ai $120-180K（Senior）；Virgin $115-146K（Mid 5+yr） | 数字本身没编，但**全部对应资深级**，写成"$70K-$250K"暗示可从 $70K 起步是误导 |

### 对照 baseline：AU AI Engineer 池子

| Title | active jobs | 薪资 |
|---|---|---|
| AI Adoption Specialist (写明) | **5-15** | 全 Mid+ 级 |
| AI Engineer | **1,000-1,500** | $140K-$230K+，**Junior $90-130K 存在** |

**结论**：AU 学员"学完能找工作"的成功概率，AI Engineer 路径比 AI Adoption Specialist 路径**高 50-100 倍**。当前定位卖错了池子。

### CN 市场（完全反向）

| 数据点 | 数字 | 来源 |
|---|---|---|
| BOSS直聘"销售/商务类 AI 岗" 2025 增长 | **+682%** | 央媒（新浪财经/光明网/第一财经） |
| 法律/咨询/HR 等专服 AI 岗 2025 增长 | +200% | 同上 |
| 2026 春节后 AI 新发职位 YoY | +172% | 同上 |
| CN AIGC 运营 entry 薪资 | 8-18K RMB/月 | 猎聘 / BOSS直聘 |

**CN 是真有 entry-level 入口的市场**，"AI 落地 / AI 售前 / AIGC 运营 / AI 应用师" 都属于 AI Adoption 的近义岗，CN 学员有真实路径。

### AI Marketing 的真相（参照样本）

- Nugget Digital 抽样 13,000 个 AU marketing JD：**只 3.5% 真要 AI 技能**（455 个）
- 但**现有 marketer 加 AI 技能可加薪 +20-43%**
- 这说明 AI Marketing 不是"专岗赛道"，而是"现有岗位附加技能" —— 走 ai-marketing 当前的"在岗提效"定位是对的

---

## 3. Gap 总结

**根因**：原 PRD 默认"AI 行业 = 技术 AI Engineer + 非技术 AI Adoption"二元划分，假设非技术岗有对称的就业市场。市场数据证明这个假设**在 AU 不成立、在 CN 部分成立**。

**当前漏斗的 4 个错位**：

1. **目标用户错** — 写"无需编程基础的非技术人员"（暗示新手 / 转行者），但市场要 5+ 年转型经验的资深人。**学员画像与岗位画像 5 年 gap**。
2. **市场错** — 一份课程同时卖 AU + CN，但两边市场结构完全相反（AU 池子小+门槛高 / CN 池子大+entry 存在）。**一份承诺无法同时跨两个市场**。
3. **outcome 错** — 用"$70K-$250K 薪资"作为核心 hook，但学员一查 Seek 立刻穿帮，**反向损害信任**。
4. **替代路径未提供** — 学员对 AI 有兴趣但不能/不想转码，被推到 ai-adoption 后撞墙；其实应该被引向 ai-marketing（在岗提效）或 ai-coding（真就业池子）。

---

## 4. 三种 Repositioning 选项

### 选项 A：在岗提效型（**推荐**，参照 ai-marketing）

**改什么**：把"转职 AI Adoption Specialist"改成"在你现有非技术岗位用好 AI"。

| 项 | 改为 |
|---|---|
| 目标用户 | **已在职**的 PM / BA / Operations / Marketing / HR / Finance，想用 AI 提效现有工作 |
| 准入门槛 | 在职 1 年+，有具体业务流程要优化 |
| Outcome 承诺 | "8 周搭出**你部门**的 AI 工作流（识别 → 选工具 → 试点 → SOP → 度量），毕业带走可复用的 5 个 SOP + 1 份 ROI 报告" |
| 禁说 | $70K-$250K / 找新工作 / 转 AI Adoption Specialist 岗 |
| 价格档 | 参考 ai-marketing 三档：自学 $199 / 教学 $899 / 陪跑 $2980 |
| Workshop 改 | "2 小时学会把 AI 装进你**现在**的部门工作流" |
| 引流课 | 每个 ¥99 解决 1 个具体痛点（写 SOP / 跑 demo / 算 ROI） |

**为什么推荐**：
- 与市场 reality 一致（AU "marketer 加 AI 技能 +20-43%" 是真的）
- 与 ai-marketing 形成统一战略（"在岗提效 + 工具链"），不互相吃单
- 学员转化路径短（不需要等到换工作才看到价值）
- 不撞 `feedback_no_revenue_promise` 红线

**风险**：放弃"AI Adoption Specialist 新岗位"的差异化故事，营销文案需要重写。

---

### 选项 B：资深咨询型（小而精，AU 真实市场）

**改什么**：明确定位"已经是 PM/BA/Consultant 的资深人士转 AI 咨询业务"，匹配 Seek 上 Mid+/Lead 级的真实岗位池。

| 项 | 改为 |
|---|---|
| 目标用户 | 3-5 年+ 经验的 PM / BA / Consultant / Change Manager，想加 AI 维度 |
| 准入门槛 | **门槛筛选制** — 报名前 30 分钟 1v1，确认有 3+ 年项目经验。无经验直接劝退转 ai-marketing |
| Outcome 承诺 | "毕业 deliverable：1 份完整 AI Adoption 方案（针对你当前公司或目标客户），可直接放进简历作品集" |
| 班型 | 高定价小班（< 15 人/期），导师必须是真的做过 AI 转型项目的 Senior |
| 价格档 | 单档 ¥9800 / $2980+（不做三档分流） |
| 不承诺 | "学完找到 AI Adoption Specialist 工作" → 改成"学完有能力参与企业 AI 转型项目" |

**为什么这个也成立**：
- AU 池子虽小但真有需求，资深人转过去匹配度高
- 高客单价支撑小班 + 真实导师
- 与 ai-coding 互补不冲突

**风险**：
- 学员规模小，每期只能开 10-15 人
- 营销门槛高（要筛选），不适合广告投放
- 现有 7K-25K 主课报名画像跟这个目标不匹配，相当于推倒重做

---

### 选项 C：拆 AU/CN 双轨（最复杂）

**改什么**：承认 AU 和 CN 是两个完全不同的市场，拆成两套产品。

| 维度 | AU 版 | CN 版 |
|---|---|---|
| 定位 | 走选项 A（在岗提效，禁说找工作） | 走"AI 落地/AI 售前/AI 应用师"转职路径 |
| Outcome | 现有岗位 AI 工作流 | 真转 AI 应用岗（数据级真实需求） |
| 价格 | $199/$899/$2980 AUD | ¥699/¥2980/¥9800 RMB |
| 引流课 | 在岗痛点 quick win | 转职路径 + 简历改造 |
| 招生渠道 | Bupa/ANZ 等线下活动 + LinkedIn | 小红书 / 视频号 / B 站 |

**为什么这是最重的选项**：
- 真实最贴合市场 — 数据明确显示两边是两套游戏
- ai-marketing 已经留了"Q3 双轨走法"未决问题，可以一起拍板
- 一份课同时卖两边的承诺红线会反复踩

**风险**：
- 工程量大（两套 outline.json + 两套 workshop + 两套销售话术）
- 团队跨时区运营成本高
- 第 1 期跑通前不建议碰

---

## 5. 推荐方案

**短期（2 周内）**：走**选项 A**（在岗提效型）。

最小化改动清单：
1. 改 `outline.json`：删 `$70K-$250K` 字样（出现在 L01 description + learningMaterial + courseObjective）
2. 改 workshop `outline.json` 标题副标题
3. 改 `cardDescription` / `promoDescription`：从"8 周毕业输出完整 AI 采纳方案"改为"8 周搭出你部门的 AI 工作流"
4. 在 marketing 话术里加一句明确的"**这不是转职课**，是给已在职的你把 AI 装进现有工作流"
5. 准入沟通话术：如果学员明确说"我想转行找新工作"，引导到 ai-coding（真池子）而不是 ai-adoption

**中期（1 个月内）**：跑一期数据后评估是否进入**选项 C**（双轨）。CN 那边数据级真实需求（+682%）值得单独包装。

**不推荐**：选项 B（小班高定价）—— 与现有报名画像差距太大，重启成本高。

---

## 6. 决策记录（待用户拍板）

- [ ] 接受 reality check 结论：当前定位需要重定位
- [ ] 选择 repositioning 方向：A / B / C
- [ ] 授权改 outline.json + workshop / 还是先做最小话术调整跑 1 个月观察
- [ ] 是否同步在 marketing 团队内部宣贯"不要硬推 AI Adoption 给求职 active 学员"

---

## 7. 附录：本次调研的 skill 化

本次调研流程已固化为 `.claude/skills/course-market-reality-check/`，未来 ai-marketing / ai-coding / 任何新 AI 课要重审定位时直接调用。
