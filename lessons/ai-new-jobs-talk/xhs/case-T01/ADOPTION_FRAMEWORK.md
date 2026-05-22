# Case T01 · Adoption Framework — 收口三页（page 54-56 演示对象）

> **对应 PPT**：
> - `Z05b_EnterpriseMemory.tsx` (page=54) · 企业记忆
> - `Z06_WhatIsAIAdoption.tsx` (page=55) · 三层价值阶梯
> - `Z07_YourPosition.tsx` (page=56) · 自检
>
> **角色**：把 T01 这个具体 case 跟"AI Adoption"的定义、自检收口 — 听众听完知道自己卡在哪、下一步该学什么

---

## §A · Enterprise Memory（page 54）

> 单条 Pipeline 不够 —— 让 AI 记住整个公司，主动安排 / 调整 / 生成

### Enterprise Memory 3 层结构（讲座原图）

```
[INPUT · 3 层企业记忆]
│
├─ 员工长期记忆
│    每个人的历史、偏好、技能图、3 个月写过的 doc/code
│    反复犯过的错、谁擅长什么
│
├─ 公司知识库记忆
│    所有 Notion / Confluence / Drive
│    Slack 历史 + 决策
│    客户 / 项目 / SOP / 品牌语调 / 合规
│
└─ 业务状态记忆
     当前 OKR / 季度进展 / KPI 历史曲线
     客户 lifecycle / 团队带宽 / 排期
              ↓
        [AI BRAIN]
              ↓
[OUTPUT · 4 件 AI 主动做的事]
│
├─ 自动安排工作
├─ 动态调整任务
├─ 内容自动生成
└─ 主动提醒决策
```

### T01 这条笔记，在 Enterprise Memory 加持下长什么样

**员工记忆**（写手 KIKI）：
```yaml
employee_id: KIKI-002
recent_work:
  - 5/14 写过 "Vibe Coding 实战" 收藏率 11.2%
  - 5/16 写过 "26 岗位预告" 转发 142
  - 5/19 跟运营会议确认要做 T01 这个主题
writing_signature:
  - 钩子模式偏好: "你以为 X？其实 Y"
  - emoji 密度: 每段 ~0.8 个（克制派）
  - 开场偏好: 故事开场 > 数据开场（A/B 测过她两版表现）
  - 上周已用过: "上个月朋友 SEO 团队裁员"故事 → 这次必须换钩子
recent_mistakes:
  - 5/12 一篇笔记 CTA 写了"私信领" → /xhs-review 拦下 → 该词进 KIKI 个人 ban-list
```

**公司记忆**（JR Academy 品牌）：
```yaml
brand:
  voice: Neo-Brutalism · 数据驱动 · 不卖鸡汤
  forbidden_words:
    - global: [最, 第一, 月入, 副业, +V, 扫码]
    - project: [副业, 包就业, 学完月入 X]  # 项目自加红线
  preferred_data_sources:
    - Levels.fyi  # 公开可验证
    - Karpathy / swyx / levelsio  # 真实人物可引
    - Gartner / IDC  # 权威机构
    - OpenAI / Anthropic careers  # 雇主一手
historical_winners:
  - "💼 AI Engineer 跟普通程序员到底差什么" → 收藏率 14.1%
  - "📊 AI 时代 26 个新岗位（薪资分档）" 类主题 平均收藏 9.1%
audience_breakdown:
  - 澳洲华人: 65%
  - 留学生: 25%
  - 国内: 10%
```

**业务状态记忆**（本季 OKR + 当前活动）：
```yaml
quarterly_okr:
  - 求职号 A 涨粉 +5K / 收藏率 ≥ 8%
  - AI Engineer Bootcamp 招生 30 人（5/31 截止）
  - 60 分钟讲座导流 +500 人次
active_campaigns:
  - AI Engineer Bootcamp · 报名期 · CTA 优先承接
  - 60min 讲座 · 在跑 · 主页可点
team_bandwidth:
  - KIKI 本周可发 5 条
  - Summer 本周排 8 条已满
  - Lily 在做 AI Marketing 主题专攻
```

### Enterprise Memory + T01 输出 = 一条"被定制过"的笔记

AI 在生成 T01 这条笔记时，自动应用了：

1. **避开 KIKI 上周用过的"上个月朋友 SEO"开头** → 换成"不要再问 AI 时代该转什么"反问句开场
2. **CTA 承接当前 Bootcamp 招生** → 末句加"主页有 AI Engineer Bootcamp 5/31 截止"（如运营确认）
3. **数据源选 Levels.fyi 优先** → 而不是某些不可验证的二手统计
4. **避开 KIKI 个人 ban-list** → "私信领"被自动替换为"评论扣"
5. **配图比例 3:4** → KIKI 的"克制 emoji"风格映射到海报上是"少装饰多数据"
6. **发布时段** → KIKI 历史最佳时段 周三 12:30 PM

→ **同样的 Master 主稿**，如果换成 Summer 写，AI 会自动调成：emoji 高密度 + 故事开场 + 不用"反问"句式 + 周日 21:00 发。

### 没有记忆的 AI = 工具；有记忆的 AI = 同事

| 场景 | 工具型 AI | 同事型 AI（Enterprise Memory） |
|------|-----------|----------------------------|
| KIKI 写 T01 | 每次重新告诉它人设 | AI 已经知道她偏好 |
| 避开重复钩子 | 你得人工查上周写过啥 | AI 已记录 30 天历史 |
| CTA 对接活动 | 你手动加 | AI 看本周 OKR 自动加 |
| 配最佳发布时段 | 你查后台 | AI 已学过你账号曲线 |
| 改稿避错 | 你审 → 退回 → 改 | AI 已知 KIKI 个人 ban-list |

---

## §B · What is AI Adoption（page 55）· 用 T01 重讲三层

### 三层价值阶梯（讲座原图）

```
Level 1 · AI 用户            Level 2 · AI Operator        Level 3 · AI Specialist
   $0/hr 提升                   ~$30/hr 提升                 $80-200/hr · AU$130-200K 年薪
   提速 20%                     效率 ×2-3                    业务 KPI 直接对接
   不会涨工资                    可能涨薪                       价值跃迁 L1→L3 ×100
```

### 同一选题 T01，三层人会怎么做

**Level 1 · AI 用户**（大部分人）

```
用户：[打开 ChatGPT]
"帮我写一条小红书 主题 2026 AI 岗位"

ChatGPT：[吐出朴素版]
✨ 2026 年最热门的 AI 新岗位盘点 🚀
（见 STEP1_CHATGPT_NAIVE.md 完整版）

用户：[复制 → 粘贴小红书 → 配一张图 → 发]
```

特征：
- 用 AI = 在 ChatGPT 里打字
- 单条耗时 2 分钟，1 平台 1 条
- 每次都是新对话，没有记忆
- 评分 28-35 / 100，可能挂违规

**Level 2 · AI Operator**（会用工具的人）

```
用户：[已经准备好的资产]
- System prompt 模板（200 字，含人设/红线/数据源）
- 5 个数据源 csv（薪资数字 / 岗位库 / 公开人物名）
- Notion 工作流：触发 → 生成 → 推送 → 审核

用户：[星期一早会确认要发 T01]
[在 Notion 里点"用 T01 模板生成 5 个候选"]

AI：[1 分钟后吐出 5 个候选标题 + 首图]
用户：[选第 1 个 → 配图 8 张 → 4 平台手动发]
```

特征：
- 用 N8N / Zapier / Notion AI 串工具
- 模板复用，但跨平台还是手发
- 单条 5-10 分钟，团队效率 ×2-3
- 评分 65-75 / 100，能发但不爆

**Level 3 · AI Adoption Specialist / AI Engineer**（前面 N3/N4 讲的新岗位）

```
[周一 8 AM] cron 自动触发
[8:15]    AI Agent 扫 Reddit / X / Trends → 选 T01 入 Top3
[8:30]    Master Variant Generator 跑出 4 平台 4 个 Variant
[9:00]    Enterprise Memory 注入（KIKI 人设 + Bootcamp CTA）
[9:15]    8 张配图自动出 + 品牌色校验
[9:20]    /xhs-review 跑过红线 0 命中
[9:25]    /xhs-score 自评 89/100 → 直接进发布队列
[12:30]   Buffer 自动发布到 4 个平台 6 个账号
[T+7d]    数据回流 → 学到"X 列表型 +60%" 自动更新 Master 权重

用户做了什么？
- 设计 Pipeline（一次性，4-6 周）
- 调权重（看 dashboard 30 分钟/周）
```

特征：
- 设计整条 Pipeline + Enterprise Memory
- 系统自我进化，监控成本极低
- 单"周"产 35 条跨 5 平台
- 评分平均 85-92 / 100，可监控可调
- 年薪 AU$130-200K（澳洲数据）/ $130-250K（北美）

### L1 → L3 价值跃迁 = ×100

把 T01 这个选题作为单位测：

| 维度 | L1 用户 | L2 Operator | L3 Specialist |
|------|---------|-------------|---------------|
| 单条耗时 | 2 分钟 | 5-10 分钟（含审稿） | 0 分钟（监控 30 分钟/周） |
| 单条覆盖 | 1 平台 1 账号 | 1 平台 1 账号 | 4 平台 6 账号 |
| 周产出 | 5 条（如果坚持） | 15-20 条 | 35-50 条 |
| 内容质量 | 28-35 分 | 65-75 分 | 85-92 分 |
| 数据回流 | 0 | 手动看 | 自动学习 |
| 时薪 | $0 提升 | ~$30 | $80-200 |
| 年薪 | 不变 | 微涨 | AU$130-200K |

**差价 = Pipeline 的设计 + 落地能力**。
不是工具差距，是**架构差距 + 系统思维差距**。

### 三层人各自学什么

- **L1 → L2**：学 prompt 模板化 / Notion AI / Zapier / N8N 入门 → 看 N4 主稿
- **L2 → L3**：学完整 pipeline 架构 / RAG / Agent 框架 / Enterprise Memory → AI Engineer Bootcamp（N3 主稿讲过 5 支柱）
- **L3 → 更高**：进入"Solo Founder / Independent Operator"模式（参考 Pieter Levels）

---

## §C · Your Position（page 56）· 用 T01 测你卡在第几步

### 自检题（直接照搬讲座 4 步 + T01 case）

**Step 1 · 我还在手动用 AI**

> 问：你写小红书是不是打开 ChatGPT 输入"帮我写一条 主题 X"？
> 是 → 你在 Step 1
>
> 你的能力图：
> - ✅ 会跟 AI 对话
> - ❌ 没有可复用模板
> - ❌ 不知道平台违禁词
> - ❌ 不知道哪个数据可以信
>
> 你的下一步：学 prompt 模板 + 平台规则 + 数据源管理

**Step 2 · 我用模板把重复任务自动化了**

> 问：你有没有一个写得很细的 System prompt（200+ 字含人设/规则/数据源），每次复用？
> 是 → 你在 Step 2
>
> 你的能力图：
> - ✅ 会写 prompt 模板
> - ✅ 知道平台基本规则
> - ❌ 跨平台还是手动复制
> - ❌ 没有自动选题
> - ❌ 没有数据回流
>
> 你的下一步：学 N8N / Zapier / Make 串工具 + 学 fan-out 架构

**Step 3 · 我会用 N8N/Make/Zapier 串多个工具**

> 问：你的工作流会不会自动从 Reddit / Levels.fyi 拉数据？写完会不会自动 fan out 到 4 平台？
> 是 → 你在 Step 3
>
> 你的能力图：
> - ✅ 自动选题（数据驱动）
> - ✅ 4 平台 fan out
> - ✅ 部分数据回流
> - ❌ 数据回流只是"展示"，没自动改 Master
> - ❌ 没有 Enterprise Memory（员工/品牌/业务记忆）
>
> 你的下一步：学 Multi-Agent 系统 + 反馈学习 + 长期记忆架构

**Step 4 · 我能设计 + 监控完整业务 pipeline**

> 问：你的系统会不会从 4 平台互动数据自动学"哪种钩子在哪平台最好"，下次自动优化 Master？有没有 Enterprise Memory 记住员工/品牌/业务状态？
> 是 → 你在 Step 4
>
> 你的能力图：
> - ✅ Pipeline 设计（架构 + 落地）
> - ✅ 自我进化（数据驱动 prompt 调权）
> - ✅ Enterprise Memory（员工/品牌/业务三层记忆）
> - ✅ 监控成本 < 1 小时/周
>
> 你的下一步：跨业务复用 Pipeline（marketing → sales → support → HR），变成公司级 AI Operator

---

## §D · 收尾陈述（讲座台词参考）

> 「26 个 AI 新岗位听上去很多。但其实只要你能搭一条 T01 这样的 pipeline，
> 你就已经在'AI Engineer / AI Adoption Specialist'这个赛道上了。
>
> 区别不是你叫什么 title。
> 区别是你愿不愿意把"用 ChatGPT 写一条小红书"这件事，
> 拆成 5 个 skill / 5 层 pipeline / 3 层记忆，
> 然后让它自我进化。
>
> 这就是 AI Adoption 真正的定义。
>
> 不是用 AI，是把 AI 做成可复用、可监控、可进化的 pipeline。
>
> ——
>
> 今天你听完这场讲座，问自己 4 个问题：
> 1. 我现在卡在第几步？
> 2. 我下一步要学什么？
> 3. 我要选哪条转型路径？
> 4. 我什么时候开始？
>
> 这 4 个问题的答案，决定你 18 个月后在那 26 个岗位里的哪一个位置。」

---

## 📂 全套 case-T01 文件回顾

```
xhs/case-T01/
├── STEP1_CHATGPT_NAIVE.md       (page=49) · 反面教材 28-35 分
├── STEP2_TEMPLATED.md           (page=50) · 模板化 5 阶段
├── STEP3_MULTIPLATFORM.md       (page=51-52) · 4 平台 fan-out + Master/Variant
├── STEP4_PIPELINE_FINAL.md      (page=53) · 89 分爆款级成品
└── ADOPTION_FRAMEWORK.md        (page=54-56) · 本文 · Enterprise Memory + 三层 + 自检
```

**贯穿的一句话**：
> T01 不是一个选题，是一面镜子。
> 镜子里看到你今天写小红书是 L1 还是 L3。
> L1 → L3 不是聪明问题，是有没有架构思维问题。
