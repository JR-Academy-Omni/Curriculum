# 课程介绍 Deck · PRD

> **目的**：给"对课程感兴趣的潜在学员"看的一份课程介绍 deck — 让他们 30 秒能回答 3 个问题：① 这门课是给我的吗 ② 我能拿到什么 ③ 我为什么要花 11 周 + $3,800-6,800？
>
> **状态**：PRD draft v1 · Mason 拍板后再 ship 实现
>
> **位置**：`curriculum/ai-solo-founder-bootcamp/partnerships/course-intro/`（建议 multi-page 横版 deck · 类似 mvc-proposal 结构）

---

## 1 · 问题陈述

### 1.1 现状：之前所有 deck 课程介绍页都失败了

我做过 3 次"课程介绍"尝试 · 用户每次都 reject：

| 版本 | Framing | 用户反馈 |
|---|---|---|
| **MVC proposal v1** 02 page (Course is what) | vs OpenClaw / AI Engineer / 其他课对比 | "看不懂这是什么课，也没介绍" |
| **MVC proposal v2** 02-04 重写 (target user transformation) | 35-45 senior 程序员 / 律师 / 小老板 前后对比 | "都不是从 target user 角度描述，亮点特色都没说的，毫无吸引力" |
| **MVC proposal v3** + Hero 口号 (用 AI 做一人公司 / 拿 Grant / 走出打工天花板) | 三大并列口号 | "完全都不对，他们为什么参加创业营，解决问题。真产品 — 他们有人可能做服务行业的，没有产品" |

### 1.2 失败根因（self critique）

| 失败模式 | 我做了什么 | 应该怎样 |
|---|---|---|
| ❌ **产品视角不是用户视角** | "vs OpenClaw / AI Engineer 内部对比" | 用户不关心匠人产品矩阵 · 关心"我能赚到钱吗" |
| ❌ **抽象 transformation** | "5 年人生轨迹切换" / "走出天花板" | 太 vague · 没说具体做什么 |
| ❌ **功能列表 ≠ 卖点** | "Phase 1 · Phase 2 · 6 硬指标 · 11 类 Faculty" | 用户在乎 "我能赚什么钱" 不是 "课程有什么 feature" |
| ❌ **"真产品"不通用** | 强调 "ship 真产品" | 律师 / 会计 / consultant 做服务不做产品 |
| ❌ **"拿 Grant" 上口号** | 跟"做一人公司"并列地位 | Grant 是辅助卖点 · 不是核心 driver |
| ❌ **缺"为什么报名"chain** | 直接讲 features | 应该是 pain → driver → solution → outcome chain |

### 1.3 用户最新 framing（这次的方向）

来自用户原话：
> "这门课核心还是因为 AI 能够帮助他们自动 · OPC 不是要么副业赚钱 · 要么主业赚更多钱 · 这个是创业营啊"

**Core insight**：
1. **创业营** = 实战赚钱（不是 mindset 课 · 不是 AI 工具课）
2. **核心 driver** = AI 自动化（让一个人 ≈ 一个团队）
3. **两条用户路径**：
   - **副业型**（在职 senior）：用 AI 起一条副业现金流（不雇人 / 不辞职 / 主业不影响）
   - **主业型**（已有公司老板）：用 AI 让公司同样人手赚更多 + 拿 RDTI 退税

**Final 口号**（用户已 ack）：
```
AI 让一个人 ≈ 一个团队
副业从 0 起 · 主业 1 到 10
11 周澳洲华人 OPC 创业实战营
```

---

## 2 · 目标用户

### 2.1 谁会看这份 deck

- 收到 BD outreach 邮件后点开 deck 的人
- 朋友圈 / LinkedIn 看到课程文章后点链接来看 deck 的人
- 听过 lead magnet 后想"看看课程长什么样"的人

**共同特点**：
- **已经听过 AI / 创业相关内容 1-2 年** · 不需要科普
- **预算 $3,800-6,800 在思考阶段** · 不是冲动消费
- **35-45 岁澳洲华人专业人士** · 拿 senior 薪水 / 已经有公司

### 2.2 5 类目标用户细分（按"为什么报名"分）

| 谁 | 当前痛点 | 报名 driver |
|---|---|---|
| **A · Senior 程序员 / PM / Designer**（拿 150-250k 打工） | 听了 1-2 年 AI 时代要 founder · 但不知怎么开始 · 怕踩坑 | 想用 AI 起一条副业现金流 · 不辞职 不雇人 不影响主业 |
| **B · 高薪 PM / Designer 想做产品** | 看 Lovable / Cursor 觉得能绕过工程团队 · 但缺完整 path | 11 周 ship 出能跑能卖的产品 (服务 / SaaS / 工具皆可) |
| **C · 律师 / 会计 / Doctor / 资深 consultant** | 1:1 卖时间到顶 · 想 scale 但雇人成本高 | 用 AI 把服务 productize 成可复用资产 · 不雇人也能 scale 3-5x |
| **D · 小公司老板** (已有 ABN + 1-5 人) | 被琐事拖 · 想用 AI 真正提效 · 想拿 Grant 回血 | 用 AI 接管运营琐事 + 拿 RDTI 43.5% 退税 · 同样人手赚更多 |
| **E · YC / Antler 申请准备者** | 想拿 accelerator 但缺 traction | 11 周做出 traction + 拿 cohort 同学 + VC fireside 网络 |

**注意**：A/B/E 是"副业型"路径，C/D 是"主业型"路径。Deck 必须**两条路径都明确呈现** · 不只讲一种。

---

## 3 · 目标 / Non-goals

### ✅ 目标

1. **30 秒内让任意 5 类用户回答 3 个问题**：
   - ① 这门课是给我的吗？（A-E 任一画像 self-identify）
   - ② 我能拿到什么？（副业现金流 / 主业增收 二选一）
   - ③ 为什么花 $3,800-6,800 + 11 周值得？（cohort 网络 + 真实产出 + RDTI 退税）
2. **直接讲钱**：副业 / 主业现金流 / 退税 / RDTI / 成本节省 — 不绕弯
3. **两条路径明确**：副业型 vs 主业型 不能混在一起讲
4. **真实产出 ≠ "真产品"**：副业型出 "第一笔付费"（产品 / 服务皆可）· 主业型出 "退税 + 自动化"
5. **30 秒 + 3 分钟两种阅读方式**：30 秒党滚关键 hook · 3 分钟党读 detail

### ❌ Non-goals

1. ❌ **不教育用户什么是 OPC** — 这是给"已经知道 / 已经感兴趣"的人 · 不科普
2. ❌ **不喂 mindset 鸡汤**（"走出天花板" "改变人生轨迹"）— 直接讲钱
3. ❌ **不放 Grant 在口号位**（demote 到 KILL POINT 之一 · 不是 headline）
4. ❌ **不混路径**（副业 + 主业不能放在同一句话讲 · 必须左右分栏 / 上下分块）
5. ❌ **不放 vs 其他课内部对比**（用户不关心匠人产品矩阵）
6. ❌ **不强调 "真产品"**（要 inclusive 服务行业）
7. ❌ **不放 "你 MVC 会员" / "你的成员"**（这份 deck 给学员自己看 · 不是给合作方）

---

## 4 · 课程介绍 Deck 内容大纲（建议 10 page · 横版 deck）

> ⚠️ **不是 single-file vertical scroll** · 是 multi-page 独立 URL deck（学 mvc-proposal 结构）
> 路径建议：`partnerships/course-intro/01.html ~ 10.html`

### Page 1 · COVER · 直击两条路径

**目的**：3 秒让 A/B/E 副业型 + C/D 主业型用户都 self-identify

**内容**：
- Hero：`AI 让一个人 ≈ 一个团队`
- Sub-hero：`副业从 0 起 · 主业 1 到 10`
- Footer：`11 周澳洲华人 OPC 创业实战营 · 三城线下 · 限额 25 人`

**避免**：don't put metadata (date / location / price) 抢占视觉焦点 · 这些放 next page

---

### Page 2 · 这是给你的吗？· 5 个 self-check question

**目的**：让用户**自己识别**是不是 target user · 不是我们硬塞画像

**内容**：5 个 self-check 句式：
- 「你拿着 senior 薪水但担心 AI 替代？」→ 是副业型
- 「你 1:1 卖咨询时间想 scale 但雇人成本高？」→ 是主业型 (服务业)
- 「你有公司但被琐事拖 想用 AI 真自动化？」→ 是主业型 (老板)
- 「你想做副业但不知道做什么 / 怎么找客户 / 怎么收钱？」→ 是副业型
- 「你想申请 YC / Antler 但缺 traction？」→ 是副业型 (founder track)

3 句以上 yes → 这门课是给你的。

**避免**：don't use abstract personas（"35-45 senior 程序员" 这种内部画像名）

---

### Page 3 · 副业型路径 · 在职打工的看这里

**目的**：副业型用户深读 · 解决 "我不辞职怎么起副业 + 不踩坑"

**内容**：
- 痛点 1: 想起副业但 0 时间 → 课程解：AI 自动化让副业不吃你晚上时间
- 痛点 2: 不知道做什么 → 课程解：W1 选品 + 用户验证 framework
- 痛点 3: 不会找客户 → 课程解：W4-W6 AI Marketing OS + Cohort 同学互相 ship 第一笔付费
- 痛点 4: 不会合规收钱 → 课程解：W3 Stripe + W8 ABN + 5 份法律文件
- 痛点 5: 怕踩坑 → 课程解：50 个同期同学 + 11 类 Faculty (含麦肯锡 / 微软 / VC)

**结果承诺**：11 周后 → 第一笔副业真实付费 + 合规 ABN 公司 + 持续运转的 AI system

---

### Page 4 · 主业型路径 · 已有公司的看这里

**目的**：主业型用户深读 · 解决 "怎么用 AI 让我现有公司赚更多"

**内容**：
- 痛点 1: 被琐事吃 5-10h/周 → 课程解：W2 装 Claude Cowork AI 员工接管客服 / 报价 / 跟进
- 痛点 2: 想 productize 服务但没 system → 课程解：W2 + W3 把咨询变 AI 出初稿 + 你审 30min 套餐
- 痛点 3: 不会用 AI 营销 → 课程解：W4-W6 Marketing OS · 1 人 × 30min/天 = 4 平台 × 12 篇
- 痛点 4: 想拿 Grant 退税 → 课程解：W7-W9 持牌 CPA + Grant consultant 现场陪写 RDTI
- 痛点 5: 没同行可商业互通 → 课程解：cohort 50 同学之间互为客户 / 服务采购 / 合伙人

**结果承诺**：11 周后 → AI 替代 1-2 员工工作 + RDTI 申请提交（43.5% 退税）+ 毛利 / 现金流双升

---

### Page 5 · 4 Phase 11 周课程结构（共同部分）

**目的**：让两类用户都看到完整课程节奏

**内容**：4 phase（沿用现有设计 · 但加 "副业型 / 主业型 各自重点周" 标记）：

| Phase | 周 | 副业型重点 | 主业型重点 |
|---|---|---|---|
| Phase 1 · Build & Sell | W0-W3 | ⭐ W1 选品 + W3 收第一笔付费 | ⭐ W2 装 AI 员工接管现有业务 |
| Phase 2 · Marketing | W4-W6 | ⭐ W6 AI Marketing OS (从 0 找客户) | ⭐ W4-W5 用 AI 优化现有营销 |
| Phase 3 · Australia Ops | W7-W9 | W8 ABN 注册 + W3 法律文件 | ⭐ W7 财务自动化 + W9 RDTI 43.5% 退税 |
| Phase 4 · Scale & Demo | W10-W11 | ⭐ W11 Demo Day + 互为客户日 | ⭐ W10 VC fireside + W11 networking |

**避免**：don't 给一个长 W0-W11 table 让用户自己读 — 用 phase 卡 + 路径高亮

---

### Page 6 · 学员真实产出（两类各晒什么）

**目的**：让用户**画面感感受 "11 周后我能晒什么"** — 避免抽象 outcome list

**内容**：
- **副业型 5 张能晒朋友圈的截图**：
  - 📸 Stripe 第一笔真付费截图
  - 🏛 ABN + Pty Ltd 注册成功
  - 🌐 产品 / 服务 landing URL Live
  - 💰 RDTI 申请提交回执 (43.5% 退税)
  - 🍷 Demo Day 上台 + 互为客户日合影

- **主业型 5 张能晒的"系统截图"**：
  - 📊 AI 自动化运营 dashboard
  - 📨 Claude Cowork AI 员工 24/7 处理客服 / 报价的日志
  - 💼 已 productize 服务标准套餐 SKU 截图
  - 💰 RDTI 申请提交回执 (43.5% 退税 · 真金白银)
  - 📈 W11 复盘：每周省下 5-10h · 同样客户多收 30-50%

**避免**：don't 列抽象 "outcomes" · 用具体 "你能晒什么" 画面

---

### Page 7 · 为什么是这门课 · 3 个独家（demote Grant 到这里）

**目的**：让用户看到 "vs 其他 AI 课 / 创业课 这门课独家" 但不放 hero 位

**内容** 3 张独家卡：
- 🇦🇺 **Phase 3 RDTI 退税实战**：全球独家 · Reforge / On Deck / 生财有术 / Antler 都没
- 🏗 **Enterprise-grade AI System**：Claude Cowork（Anthropic 桌面 App · GUI 配置）+ Memory + Marketing OS · 不是教 ChatGPT
- 🤝 **W11 互为客户日**：cohort 50 同学之间 ship 第一笔付费 · 5 年澳洲华人 AI 圈核心节点

**避免**：don't 放 Faculty 11 类 / 校友 2000+ 这些 trust anchor — 留到 page 8

---

### Page 8 · Faculty + 学员同期网络 (trust anchor)

**目的**：信任 anchor · 让犹豫的用户拍板

**内容**：
- **11 类 Faculty**（compact grid · 不展开）：麦肯锡 + 微软 + AI Engineer + SEO + Growth + CPA + Grant consultant + 投资人 VC + 已退出 founder + PM Coach + Senior eng
- **50 同学 cohort 网络** 5 年潜在 $500k-4M 交易额
- **匠人 dogfood data**: 1 人 × 30min/天 = 4 平台 × 12 篇
- **2,000+ 校友** 分布 Atlassian / Canva / 4 大行 / 4 大律所

**避免**：don't 详细列每位讲师姓名（占位符）— 用类别 + LinkedIn placeholder

---

### Page 9 · 价格 + 5 FAQ

**目的**：解决犹豫前最常问的 5 个 question

**内容**：
- 价格三档：Early Bird $3,800 / Standard $4,800 / Premium $6,800
- 价格锚：单独搞 $70-240k vs 打包 $3.8-6.8k
- (⚠️ 不放任何"学费返还 / gamification" — Mason 明确 reject · 不做慈善)
- **5 FAQ**（按用户最常问）：
  - 我没创业想法可以来吗？
  - 8-12h/week 我做不到怎么办？
  - 服务行业（律师 / 会计）也适合吗？
  - 这是 lecture-only 还是 coaching 双轨？
  - 怎么申请？

**避免**：don't 放 18 个 FAQ — 只 5 个最常问的 · 详细留到 curriculum.html

---

### Page 10 · 怎么报名（CTA · 极简）

**目的**：从"感兴趣" → "提交申请单"

**内容**：
- 3 步申请流程：① 3 分钟申请单 → ② 24-48h 后台审核 → ③ 批准 + 缴费 + 入群
- LinkedIn 必填（唯一硬门槛）
- 申请入口 / 联系方式 / Calendly link
- 「想先聊 30min」option · 给犹豫不决的人

**避免**：don't 推销 / don't urgency 话术（"今晚截止" 这种）

---

## 5 · 设计原则

### 5.1 文字优先级

```
重要 → 不重要：
1. 钱 (副业现金流 / 主业增收 / RDTI 退税具体金额)
2. 时间 (11 周 / W0-W11 路径 / 多久能 ship)
3. 同伴 (50 同学 / Faculty / 校友)
4. 结果 (能晒什么截图)
5. Process (Phase / 工具 / 议程)
```

**违反这个优先级 = 又会变成 "feature list"**

### 5.2 句子写法

| ❌ 不要 | ✅ 要 |
|---|---|
| "11 周 4 Phase 49 节课" | "11 周后你有副业第一笔真付费截图" |
| "vs OpenClaw / AI Engineer" | "副业型 看这里 / 主业型 看这里" |
| "Enterprise-grade leverage triple" | "AI 让一个人做一个团队的事" |
| "走出打工天花板" | "起一条副业现金流 / 主业同样人手赚更多" |
| "Cohort 同学互相做生意" | "同学之间互为第一笔付费 (Stripe 真付)" |
| "$500k-4M 网络潜在交易" | "5 年内你互相付钱给的人 / 给你付钱的人" |

### 5.3 视觉

- **横版 16:9 multi-page**（不是 vertical scroll · 跟 mvc-proposal 同款）
- 主色：深蓝 #10162f + 橙 #FF914D + 金 #FFDE59 + 米黄 #fffbe6
- 字体：Bricolage Grotesque (标题) + DM Sans (正文) + Noto Sans SC (中文)
- 每 page 100vh · 独立 URL · 可单独 print PDF
- 副业型 / 主业型用**颜色 code 区分**（蓝 vs 橙）让两类路径视觉分明

---

## 6 · 验收标准 (Mason 拍板用)

Deck ship 后 Mason / BD 测试 — **找 3 个目标用户(各类型 1 个)读 deck 30 秒** · 然后问：

1. 这门课是给谁的？— 用户能说出至少 1 类自己 self-identify 的画像
2. 你能拿到什么？— 用户能讲清"副业现金流" 或 "主业增收 + RDTI 退税" 之一
3. 你为什么报？— 用户能讲出至少 2 个具体 driver（不是"想 founder"这种 vague 话）

3/3 pass → 上线。任何一题 fail → 回头改。

---

## 7 · 跟其他物料的关系

| 物料 | 给谁看 | 当前状态 |
|---|---|---|
| **landing.html** (5 屏极简 vertical) | 营销页 SEO 入口 / 朋友圈链接 | ✅ 已 ship · 已更新口号 |
| **curriculum.html** (long-form vertical) | 内部完整 reference · BD / 招生 / 讲师用 | ✅ 已 ship · 已更新口号 |
| **mvc-proposal/** (横版 multi-page deck) | 合作机构看 | ✅ 已 ship · 课程介绍 page 没用新 framing |
| **speaker-proposal/** (横版 multi-page deck) | 讲师看 | ✅ 已 ship · 课程介绍 page 没用新 framing |
| **course-intro/** (横版 multi-page deck) ← 本 PRD | **潜在学员看** | ❌ 待 ship |

**互补关系**：
- `landing.html` = 5 屏 SEO + 朋友圈 viral 用 · 短
- `course-intro/` = 10 page deck 深度展示 · 给认真考虑的人看
- `curriculum.html` = 内部完整 reference · 给真正报名的人看完整 syllabus

---

## 8 · 开放问题（等 Mason 拍板）

1. **副业型 / 主业型**两条路径 · deck 内**是否真要左右分栏并列展示**？还是单一 narrative 但 highlight 两条路径 example？
2. ~~**Demo Day 100% 学费返还**~~ ❌ Mason 明确 reject · 不做学费返还 gamification（"做慈善啊"）
3. **服务业 vs 产品业** — 课程教学内容是否**真的能 cover 两类**？(我假设 Yes · 但需要 Mason 确认 W2/W3 是否给服务业学员充分 path)
4. ~~**Cowork 是匠人自有产品**~~ ❌ 错 · Cowork = **Claude Cowork**（Anthropic 桌面 App 内置功能 · 不是匠人自有产品）· deck 里精准说 "Claude Cowork" · 不再说"匠人 Cowork / 不需第三方"
5. **价格策略** — 副业型用户 vs 主业型用户 · **是否同价**？还是主业型给企业版 ($X 公司报销)？(我假设同价 · Mason 确认)
6. **录取 / 申请门槛** — 当前是 LinkedIn 必填 + 后台审核 · **副业型 (在职打工的) 和 主业型 (老板) 应该有相同门槛吗**？还是主业型更严？

---

## 9 · 下一步

PRD 拍板（解决 §8 6 个开放问题）后：
1. 我 ship `partnerships/course-intro/` 10 page multi-page deck
2. 用新 framing 重做 mvc-proposal 02-04 课程介绍 page (跟 course-intro 一致)
3. 用新 framing 重做 speaker-proposal 03 课程介绍 page (简化版 · 不需 5 类痛点)
4. 更新 landing.html / curriculum.html 相关 section 跟 course-intro 对齐

**所有 deck 课程介绍 page 用同一 framing · 不再多版本不一致**。

---

## 10 · Anti-PRD · 这个 PRD 自己也可能跑偏

我之前已经跑偏过 3 次 · 这次的 risk：

| Risk | Mitigation |
|---|---|
| ❌ 又落回"feature list" framing | 严格按 §5.1 文字优先级（钱 > 时间 > 同伴 > 结果 > Process）· 每 page review 一次 |
| ❌ 副业 / 主业混在一起讲 | 强制 page 3 / page 4 分开 · 不允许并入同一段落 |
| ❌ Grant 又被推到 hero | 严格 Grant 只出现在 page 7 (3 独家之一) · 不进 hero / 不进 page 2 self-check |
| ❌ "真产品" 不通用 | 全 deck 用 "产品 / 服务" 复合词 · 不用单一 "产品" |
| ❌ 抽象 mindset 话术 | 每 paragraph 至少 1 个 specific（金额 / 工具名 / 周数 / 截图）· 没 specific 删 |

---

> 📌 **PRD 写完 self-check**：
> - [x] 不放 .pptx 生成（CLAUDE.md 红线）— 输出 HTML multi-page deck
> - [x] 不放 "走出天花板" / "改变人生轨迹" 抽象 mindset
> - [x] 副业型 + 主业型两条路径明确分块
> - [x] "产品 / 服务" 复合词 (不只产品)
> - [x] Grant demote 到 page 7 (3 独家之一) 不进 hero
> - [x] 5 类用户 self-check 句式 (page 2) 让用户自己识别
> - [x] 6 个开放问题等 Mason 拍板，不假设默认值
