# Case T01 · Step 3 — 自动选题 + 4 平台分发（page 51-52 演示对象）

> **对应 PPT**：`Z04_Step3_AutoTopic.tsx` (page=51) + `Z04b_MasterVariantArch.tsx` (page=52)
> **演进**：Step 2 你定选题 → Step 3 AI 自动选题 + 一份 Master fan-out 到 4 平台
> **角色变化**：你从"审核员"升级为"内容架构师"
> **节省**：跨平台同步成本从 4 × 单平台 → 1 × Master + 自动 transform

---

## 一、5 层 Pipeline（Z04 原图）

```
Layer 01 · 数据采集
   Reddit API · X scraping · Google Trends · 行业 RSS · 评论区情绪
        ↓
Layer 02 · 决策（AI Agent）
   每天 8 AM 扫所有信号 · 按热度/相关度/新鲜度打分 · 输出 Top3 选题 + hook
        ↓
Layer 03 · 生成（4 平台版本）
   X 280 字 · 小红书 400 字 · LinkedIn 1200 字 · 公众号 1800 字
        ↓
Layer 04 · 配图 + 水印
   gpt-image-2 各平台尺寸 · 品牌色校验 · 自动 alt 文案
        ↓
Layer 05 · 发布 + 追踪
   4 平台同时发 · 6h/24h/7d 取互动数据 · 写入 dashboard
```

---

## 二、Layer 01 · 数据采集（T01 怎么被选中的）

```
[2026-05-22 08:00 AEST] cron 触发数据采集

[Reddit]
  r/cscareerquestions  热帖 #1: "Is Prompt Engineer dead?" (487↑ in 24h)
  r/MachineLearning    热帖 #3: "OpenAI Levels.fyi update" (312↑)
  r/cscareeradvice     连续 5 天出现 "AI roles" 相关问题

[X / Twitter]
  @karpathy            "Context Engineering > Prompt Engineering" (1.2K 转发)
  @swyx                "The Rise of the AI Engineer revisited" (847)
  @levelsio            "Solo dev earnings 2025 recap" (623)

[Google Trends]
  "AI Engineer salary"      ↑ 47% (vs 上周)
  "26 AI jobs"              新增搜索词 (上周 0 → 本周 230)
  "AI Adoption Specialist"  ↑ 22%

[行业 RSS]
  Levels.fyi changelog: OpenAI 5/21 更新薪资数据 ($1.5M 股权)
  Anthropic careers: 新增 Forward Deployment Engineer 12 个开放岗位
  Gartner: 5/20 发布 AI workforce 2026 报告

[评论区情绪]
  上周 N2 主稿评论区 73% 在问 "完整 26 个名单在哪"
```

---

## 三、Layer 02 · 决策（AI Agent 排序）

```
[2026-05-22 08:15] AI Agent 跑分

候选选题打分（热度 × 相关度 × 新鲜度 × 历史转化）：

T01 · 2026 年 26 个 AI 新岗位完整地图
  - 热度: 9.2 (Reddit + Google Trends 强信号)
  - 相关度: 9.5 (JR 求职号核心受众)
  - 新鲜度: 9.0 (Levels.fyi 5/21 更新)
  - 历史转化: 8.8 (相似主题平均收藏率 9.1%)
  → 综合分: 9.1 ⭐ Top1

T02 · OpenAI 股权 $1.5M 怎么算
  → 综合分: 8.4

T03 · Karpathy 提的 Context Engineer 跟 Prompt 啥区别
  → 综合分: 7.9

→ 选定 T01 进入 Layer 03 生成
→ 自动调起 5 个 Claude Skill 串联（Pipeline 见 Step 4）
```

**关键**：选题这步**完全自动**，你不用决定"这周写什么"。你的角色变成"看 Top3 决定要不要全做 / 砍掉 / 加哪个"。

---

## 四、Layer 03 · 生成 4 平台 Variant（核心）

### Master 主稿（共用素材池）

```yaml
title_zh: "2026 年 26 个 AI 新岗位（薪资分档）"
title_en: "26 AI Jobs in 2026, Sorted by Salary"
core_data_points:
  - 26 个岗位 · 3 大类
  - $300K+ / $100-250K / $70-140K 三档
  - OpenAI 股权 $1.5M / Anthropic $746K / Google $893K
  - Gartner 71,000 个 AI Adoption 岗位增量
data_sources:
  - Levels.fyi
  - Karpathy (@karpathy)
  - Gartner 2026 AI workforce 报告
  - OpenAI / Anthropic / Figure.ai careers
  - Pieter Levels (@levelsio)
brand_voice: "Neo-Brutalism · 数据驱动 · 不卖鸡汤"
red_lines: ["最", "第一", "100%", "月入", "包过", "副业", "+V"]
```

### Variant A · X / Twitter（280 字 thread）

```
🧵 26 AI jobs in 2026, sorted by salary. (1/9)

1/ Top tier ($300K+):
- Forward Deployment Engineer ($270-500K)
- AI Engineer ($155-400K, sr $600K+)
- Chief AI Officer ($200K-$1.8M total comp)

Source: Levels.fyi public data

2/ Mid tier ($100-250K), 12 roles:
- AI Agent Dev
- Prompt Engineer
- Context Engineer (coined by @karpathy)
- RAG Engineer
- MLOps Engineer
... thread continues

3/ Entry tier ($70-140K), non-technical friendly:
- GEO Specialist
- AI Trainer (RLHF)
- Algorithm Bias Auditor (EU AI Act 2026 driver)

4/ Governance roles (6):
- AI Product Manager
- AI Adoption Specialist
- AI Ethics Officer
- Human-AI Collaboration Lead
- Chief AI Revenue Officer
- CAIO

5/ Vertical-specific (5):
- Healthcare AI Integrator
- AI Finance Compliance
- AI Sales Engineer
- Digital Agronomist
- AI EdTech

6/ Key data anchor:
OpenAI per-employee equity: $1.5M
Anthropic Research total: $746K
Google DeepMind senior: $893K
(All Levels.fyi)

7/ For perspective: @karpathy's "Context Engineer" concept (Oct 2024) is now a hiring category. The role didn't exist 18 months ago.

8/ This is from 18 months of tracking via @levelsio, JD scraping, and Levels.fyi. Full Chinese-language breakdown coming on 小红书 today.

9/ Bookmark this if you're job hunting in 2026.
What role would you want to transition to?

#AIEngineer #FutureOfWork #AICareers
```

- 长度：约 850 字符 / 9 推
- 配图：1 张 16:9 主图（关键数字大字报）
- Hashtag：英文核心 3 个

### Variant B · 小红书（400-600 字 + 9 张配图）

→ **见 STEP4_PIPELINE_FINAL.md §3** （完整终稿）

简要差异化要点：
- 标题 ≤20 字 + emoji + 数字
- 正文 500 字 · 5 个 #话题
- 8 张 1242×1660 海报
- CTA：评论扣 2 + 主页讲座

### Variant C · LinkedIn（1200 字专业稿）

```text
The 26 AI Jobs That Actually Exist in 2026 — Sorted by Salary
(18 months of tracking, fully sourced)

After watching this market shift for 18 months — tracking Levels.fyi
data, scraping public JDs from OpenAI / Anthropic / Figure / Google
DeepMind, and reading what @karpathy and @swyx have written publicly
— I've consolidated 26 AI-native roles that are genuinely hiring
in 2026.

A few patterns worth flagging upfront:

1. The top tier is dominated by Forward Deployment Engineering —
a role pioneered by OpenAI and Anthropic where you fly to enterprise
clients to architect their AI integration. Compensation reflects
rarity: $270K-$500K+ base, with senior FDEs commanding equity
that rivals Anthropic Research Scientists ($746K total per Levels.fyi).

2. Six of the 26 roles are "Governance" — meaning non-coding. AI
Adoption Specialist, AI Ethics Officer, AI Product Manager, etc.
For professionals worried they're "too late" to enter AI without
a CS degree, this category is your runway.

3. Three salary bands map cleanly onto background:
   - $300K+: Top-tier technical (AIE / FDE / CAIO)
   - $100-250K: Mid-tier technical or senior governance
   - $70-140K: Entry-level technical or non-technical with
     domain expertise (GEO, Bias Auditor, etc.)

The full $300K+ tier:
- Forward Deployment Engineer ($270-500K+)
- AI Engineer ($155-400K, senior at $350-600K+)
- Chief AI Officer ($200-400K, total comp up to $1.8M
  at frontier labs)

The $100-250K mid-tier (12 roles):
[AI Agent Developer / Prompt Engineer / Context Engineer (Karpathy's
2024 coinage, now a hiring category) / RAG Engineer / MLOps Engineer /
AI Automation Specialist / Knowledge Architect / AI Red Teamer /
AI Product Manager / AI Adoption Specialist / Human-AI Collaboration
Leader / Chief AI Revenue Officer / AI Ethics & Compliance Officer]

The $70-140K entry tier (non-technical friendly):
[GEO Specialist / AI Trainer (RLHF) / Algorithm Bias Auditor
(EU AI Act 2026 is the demand driver here)]

Industry-specific (5):
[Healthcare AI Integrator / AI Finance Compliance / AI Sales
Engineer / Digital Agronomist / AI EdTech]

Sources:
- Levels.fyi for public compensation data
- @karpathy commentary for the Context Engineer category
- Gartner 2026 AI Workforce Report (71,000 new AI Adoption roles
  projected by 2028)
- Direct JD scraping from OpenAI, Anthropic, Figure.ai
- @levelsio's public independent-developer tracking

A note on transitions: the path differs by your starting point.
Engineers go to AIE / FDE / RAG. PMs and consultants go to
AI Product Manager / AI Adoption / CAIO. Non-technical professionals
with domain expertise have the GEO / Bias Auditor / Compliance lane.

Happy to break down any specific role in the comments.
Which one are you targeting?

#AIEngineer #FutureOfWork #CareerStrategy
#ArtificialIntelligence #TechCareers
```

- 长度：约 1200 字
- 配图：1 张 1200×627 banner
- 语气：第三人称专业 / 非小红书的"姐妹们"
- CTA：评论求互动（LinkedIn 不接受"扣 1"这类话术）

### Variant D · 公众号（1800 字深度长文）

```text
标题：2026 年 AI 行业 26 个岗位完整地图（18 个月追踪 · 5 个数据源 · 含转型路径）

【开篇 · 这件事正在发生】

2026 年 5 月 21 日，Levels.fyi 公开了 OpenAI 一组数据：人均股
权 $1.5M。这条更新在 LinkedIn 上引发了一轮讨论。同一天，Anthropic
的招聘页放出了 12 个新的 Forward Deployment Engineer 开放岗位。

这不是新闻，是常态。过去 18 个月，我做了一件事：盯着 Levels.fyi
的薪资更新、扫 OpenAI / Anthropic / Figure 的 JD、读 Karpathy
和 swyx 的公开文章、跟 Pieter Levels 这类独立开发者学怎么追踪
真实赚钱的赛道。

整理出 26 个 AI-native 岗位 —— 这些岗位 18 个月前要么不存在，
要么名字不是这个。这篇文章是那张地图。

【一、为什么需要这张地图】

很多人卡在两个误区：

误区 1：以为 AI 岗位 = 写代码 = 数学要好
误区 2：以为"等更明朗了再决定"

实际数据：26 个 AI 岗位里，有 6 个是治理管理岗（不写代码），有
5 个是行业垂直岗（需要原行业经验 + 一点 AI 工具）。也就是
说，11 / 26 ≈ 42% 的 AI 岗位对非技术背景友好。

第二条误区更危险。Gartner 2026 AI Workforce 报告预测：到 2028
年，全球将新增 71,000 个 AI Adoption Specialist 岗位 —— 但这个
岗位的初始招聘高峰会在 2026-2027 落地。等更明朗 = 等别人占完坑。

【二、$300K+ 起跳的 3 个高薪段位】

▌Forward Deployment Engineer · $270K-$500K+

这是 OpenAI 和 Anthropic 创造的岗位。FDE 不是远程程序员，是
"飞到客户现场，给客户搭 AI 系统的人"。需要全栈 + 业务感
+ 客户沟通 + 快速原型能力。

招聘标准接近"现场创业 CTO 的能力，干客户的事"。资深 FDE 的总
包接近 Anthropic Research Scientist 水平 — Levels.fyi 公开
数据 $746K total comp。

▌AI Engineer · $155K-$400K+

中级 $200K，senior $350-600K+。这是过去 18 个月增长最快的岗位
类别。Shawn Wang (@swyx) 2023 年的文章《The Rise of the AI
Engineer》给这个岗位下了定义：

"AI Engineer = 不做模型训练，专门把 LLM API + RAG + Agent 框架
组装成产品的人。"

技能栈 5 大支柱（共 77 项），见 N3 主稿《AI Engineer 跟普通程序
员到底差什么》（jiangren.com.au 主页可查）。

▌Chief AI Officer · $200K-$400K+，总包至 $1.8M

董事会层面制定 AI 战略。极少数公司开。但开了的公司都给到顶
配总包。Lyft / Citi / Mastercard / Carlyle Group 都已设此
职位。

【三、$100-250K 中坚 12 个岗位】

技术岗（8 个）：
- AI Agent Developer ($130-250K) — Multi-Agent 工作流编排
- Prompt Engineer ($100-300K) — 设计 LLM 输入指令
- Context Engineer ($130-220K) — Karpathy 2024 年提出，现在
  是真实的招聘类别
- RAG Engineer ($120-200K) — 把 LLM 接到企业知识库
- MLOps Engineer ($120-200K) — LinkedIn 数据 5 年增长 9.8x
- AI Automation Specialist ($100-180K) — 业务运营 + AI 工程
- Knowledge Architect ($100-170K)
- AI Red Teamer ($110-200K) — 对抗性攻击 LLM

治理管理岗（4 个）：
- AI Product Manager ($120-220K)
- AI Adoption Specialist ($90-190K)
- Human-AI Collaboration Leader ($110-190K)
- AI Ethics & Compliance Officer ($120-200K)

【四、$70-140K 入门档（非技术友好）】

- GEO Specialist ($70-140K) — ChatGPT/Perplexity 时代的 SEO。
  顶 36% 在 $200-500K
- AI Trainer ($60-180K) — RLHF + 数据标注
- Algorithm Bias Auditor ($90-160K) — 欧盟 AI Act 2026 实施
  后必需

【五、行业垂直岗 5 个】

- Healthcare AI Integrator ($100-180K)
- AI Finance Compliance Officer
- AI Sales Engineer
- Digital Agronomist
- AI EdTech

【六、数据源说明】

1. Levels.fyi — 北美科技公司公开薪资库。本文所有具体数字均
   来自此处的可验证数据
2. Karpathy (@karpathy) — Context Engineer 概念 2024 年 10
   月提出，现已成为招聘类别
3. Gartner 2026 AI Workforce 报告 — 71,000 个 AI Adoption
   岗位增量预测
4. OpenAI / Anthropic / Figure 公开 JD —— 直接扫雇主招聘页
5. Pieter Levels (@levelsio) — 独立开发者公开追踪，对单人公司
   模式有参考价值

【七、行动建议】

三条转型路径（按你的起点）：

Path 1 · 技术背景 → AI Engineer / AI Agent Dev / RAG Engineer
Path 2 · 业务/产品背景 → AI PM / AI Adoption Specialist / CAIO
Path 3 · 非技术背景 → AI Ethics / GEO / Finance Compliance

每条路径的详细 6 个月学习计划，见 JR Academy 60 分钟讲座完整版
（jiangren.com.au/curriculum/lessons/ai-new-jobs-talk/）。

【结语】

18 个月前，本文 26 个岗位里有 11 个还不叫现在的名字。再过 18
个月，名单会再变。这就是 AI 时代真实的样子 — 不可怕，但需要
持续看图。

收藏这张地图，下次有人问"AI 时代该转什么"，把这条文章发给他。

#职业规划 #AI #求职 #AIEngineer #未来工作
```

- 长度：约 1850 字
- 配图：900×500 header + 内文 3 张
- 语气：第三人称深度分析 / 引用学术 + 公开数据
- CTA：评论 + 跳转讲座完整版

---

## 五、Layer 04 · 配图 + 水印

每平台用 gpt-image-2 自动出对应比例：

| 平台 | 尺寸 | 张数 | 字号档（min 24px） |
|------|------|------|------------------|
| X | 16:9 / 1600×900 | 1 主图 | headline 60+ |
| 小红书 | 3:4 / 1242×1660 | 8 张 | 见 Step 4 §5 |
| LinkedIn | 1200×627 banner | 1 张 | title 40 |
| 公众号 | 900×500 header + 600×400 内文 ×3 | 4 张 | subtitle 32 |

**品牌色校验**：每张图自动跑 `#fff8ee` / `#ff5757` / `#ffce44` / `#10162f` 取色一致性
**alt 文案**：每张图自动生成 SEO 友好的描述（无障碍 + 搜索权重）

---

## 六、Layer 05 · 发布 + 追踪

```
[2026-05-22 12:00] X 发布     · thread 9 推
[2026-05-22 12:30] 小红书发布 · 同时推送到 3 个账号矩阵
[2026-05-22 18:00] LinkedIn 发布 (北美时区最佳)
[2026-05-22 21:00] 公众号发布 (晚间长文阅读时段)

[T+6h]  自动取互动数据 → dashboard
[T+24h] 自动取互动数据 → dashboard
[T+7d]  自动取互动数据 → dashboard + 触发 Step 4 反馈学习
```

**Dashboard 实际数据点**（每平台）：
- 曝光 / 阅读量
- 互动率（点赞 / 收藏 / 评论 / 转发）
- 评论 top keyword（用户关心什么）
- 转化（点链接 / 搜账号 / 关注）

---

## 七、Z04b · Master + Variant 架构（核心架构图）

```
                ┌──────────────────────────┐
                │     T01 MASTER 主稿        │
                │  - 26 岗位核心数据         │
                │  - 5 处数据源              │
                │  - 品牌语调 + 红线          │
                └────────────┬──────────────┘
                             │
            ┌────────┬───────┼───────┬────────┐
            │        │       │       │        │
         X Trans  RED Trans  LI Trans  WX Trans
         280字    400字     1200字    1800字
         16:9     3:4×8     1200×627  900×500
            │        │       │       │        │
            ↓        ↓       ↓       ↓        ↓
        Twitter   小红书    LinkedIn  公众号
            │        │       │       │        │
            └────────┴───────┴───────┴────────┘
                             │
                    [互动数据回流]
                             │
                ┌──────────────────────────┐
                │     反馈循环 → Master    │
                │  - 学"哪类钩子转化好"      │
                │  - 学"哪平台对什么数据敏感" │
                │  - 下一篇主稿数据驱动      │
                └──────────────────────────┘
```

### 真实反馈例子（T01 发布 7 天后）

```
[T+7d 反馈采集]

X / Twitter:
  - thread 第 2 推（"Mid tier 12 roles"）单推转发 142，全 thread 87
  - 学习：列表型内容在 X 表现 +60%
  - 下次：单推改成"列表前置 + summary 收尾"

小红书:
  - 收藏率 12.3% (远超平台均值 6%)
  - 评论高频词：完整 PDF / 转型 / 路径
  - 学习：用户要"可下载完整版"
  - 下次：CTA 改"扣 2 我发完整 26 岗位 PDF"（已实现）

LinkedIn:
  - 阅读完成率 38%（行业均 22%）
  - 评论 high-level：是否有北美地区数据
  - 学习：北美受众想要"区域细分"
  - 下次：单独出"$ 数字 - 北美" vs "$ 数字 - 澳洲" 版本

公众号:
  - 阅读量 3.2K / 在看 47 / 转发 11
  - 高频留言：能不能加"中国 AI 岗位"数据
  - 学习：国内读者更关心国内招聘市场
  - 下次：单独出"中国版"分支 (T01-CN variant)
```

→ Master 主稿在下次更新时自动加入这 4 条反馈，再次 fan-out → 持续进化。

---

## 八、Step 2 vs Step 3 · 同选题 T01 对比

| | Step 2（模板化） | Step 3（4 平台 fan-out） |
|---|----------------|---------------------|
| 选题 | 你定 | AI Agent 自动选 |
| 平台数 | 1（小红书） | 4（X / 小红书 / LinkedIn / 公众号） |
| 输出形态 | 1 篇 | 1 Master + 4 Variant |
| 触达受众 | 求职号 A 粉丝 | 4 平台 4 类受众（含英文圈） |
| 数据回流 | 0 | 4 平台数据自动学习 |
| 你的角色 | 审核员 | 内容架构师 |

---

## 九、Step 3 没解决的问题（导向 Step 4）

虽然 Step 3 已经做到：
- ✅ 自动选题
- ✅ 一稿 fan-out 到 4 平台
- ✅ 数据自动回流

但**反馈学习还是被动**：
- 4 平台数据回流后，AI 只是"展示给你看"
- 改 Master / 调 Variant 还要**你看 dashboard + 手动调权重**
- 周期：1 周看一次，调一次

**Step 4 的关键升级**：把这一步也自动化 — AI 看到"X 列表型转化 +60%"会**自动**在下次 Master 生成时把列表前置；不需要你看 dashboard。

---

## 十、关键洞察

> **Step 3 ≠ 多平台复制粘贴**
> **Step 3 = 把内容拆成"不变的主稿 + 可换的平台外壳"**

谁会 Step 3？
- 能用 N8N / Make / Zapier 串多个工具的人
- 会写跨平台的 prompt transformer 的人
- 时薪从 ~$30 涨到 ~$50-80（Z06 三层定义中段）

Step 4 看 → `STEP4_PIPELINE_FINAL.md`
