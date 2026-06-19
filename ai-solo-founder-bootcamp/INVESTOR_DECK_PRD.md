---
title: 投资人邀约 Deck PRD（AI 一人创业营 / OPC cohort · 资源对接，不是融资）
status: build
owner: @lightman
priority: high
purpose: 规范一份给投资人 / VC / 天使 / exited founder / 加速器的「资源对接邀约」deck —— 邀请他们来给 OPC cohort 做 fireside / 分享 / mentor / W11 Demo Day 评审 / scout founder，把澳洲华人 AI solo-founder 当成他们的早期 deal flow 来源。**ASK = 来分享 + scout，不是给公司投钱。** 这是一份对外、可公开部署的邀约 deck，跟 partner-recruitment deck 平行（机构来联合推广 / 投资人来分享 + 看人）。
---

# 投资人邀约 Deck · PRD（资源对接版）

> 这是 **PRD（需求文档），不是 deck 本身**。本文逐页规定 deck 必须包含什么，实现 pass（人或 agent）照此构建 HTML multi-page deck。
>
> **位置**：`curriculum/ai-solo-founder-bootcamp/public/partnerships/investor-invite/`。**在 `public/` 下，跟 partner-recruitment 一样会被 deploy.yml 部署、公开可访问** —— 这不是机密融资材料，是一份对外的资源邀约。结构对齐 partner-recruitment：`index.html`（`<meta refresh>` 0s → `01.html`）+ `01.html`..`NN.html` + `styles.css`。横版 16:9 multi-page，每页 100vh、独立 URL、可单页 print PDF。
>
> **数据真相源**：所有事实必须可追溯到 [VISION.md](./VISION.md) / [PRD.md](./PRD.md) / [FUNNEL_PLAN.md](./FUNNEL_PLAN.md) / [PERSONAS.md](./PERSONAS.md)。任何未确认的人名、机构名、日期、cohort 数字一律 `[商务确认]` 占位，禁止编造。

---

## 1 · 这份 deck 是干什么的（+ 与 partner-recruitment 的差异）

### 1.1 目的与 ASK

读者是**投资人 / VC / 天使 / 已退出的 founder / 加速器 partner**。这份 deck 是一封**对外邀约**，要在 3 分钟内回答：

> **"我（投资人）为什么要花一个晚上来给这个 cohort 做一场 fireside / 坐 Demo Day 评审席 / 认识这批 founder？"**

**ASK = 来给 cohort 当资源**，不是给公司投钱：
- 来做一场 **fireside chat / 分享 / guest lecture**（W10 VC fireside 是现成卡位）；
- 坐 **W11 Demo Day 的评审席**；
- （选修）开 **office hour / 当 mentor**；
- **认识 / scout** 这批澳洲华人 AI solo-founder，建立自己的早期 deal flow。

**对他们的价值** = 一个被筛过的、澳洲华人 AI solo-founder 的早期 pipeline 提前接触权 + 品牌曝光 + giving back（回馈本地华人创投圈）。这条逻辑是 PRD §10.2 已经写明的「VC 互利逻辑：澳洲华人 AI 创业者池子稀缺，他们想看 deal flow，所以免费来」。

### 1.2 与 partner-recruitment deck 的差异（显式）

`partnerships/` 下已有 partner-recruitment deck（机构招募）。两份都是**对外邀约**、都公开部署、共用同一套 brand v5 + nav engine + styles.css，但**对象和 ASK 不同**：

| Deck | 给谁看 | 它们做什么 | ASK | 互利点 |
|---|---|---|---|---|
| `partner-recruitment/` | 机构 BD（媒体 / 社区 / 协会 / KOL） | **联合推广**这门课（co-promote） | 帮我们把课推给对的人 + 联名 workshop | 曝光 / 联名 / 返佣 / 会员专属价 |
| **`investor-invite/`** ← 本 PRD | 投资人 / VC / 天使 / exited founder / 加速器 | **来分享 + 看人**（come speak + scout） | 来做 fireside / 评审 Demo Day / scout founder | 早期 deal flow + 曝光 + giving back |

**一句话区分**：机构是来**帮忙卖课 / 一起办活动**的，投资人是来**给 cohort 讲东西 + 顺便相人**的。投资人不参与课程推广，也不付费、不收费 —— 是嘉宾互利关系。

### 1.3 不是融资 deck（重要）

这份 deck **不向任何人募资**：不讲估值 / TAM / CAC / LTV / 财务预测 / 融资额 / 用途拆分 / 股权。课程本身首期 cohortStatus=PLANNING，但这跟本 deck 无关 —— 我们不是在卖这门生意，是在邀请投资人来当 cohort 的资源。任何"投不投得值"的判断不在本 deck 范围。

---

## 2 · 目标读者

统一特征：**手里有早期项目 deal flow 需求 + 愿意给社区分享时间**的人。

| 读者类型 | 他为什么愿意来 | deck 主攻页 |
|---|---|---|
| **早期 VC / 投资经理**（Blackbird / Square Peg / Antler / Startmate / AfterWork 类，华人 background 优先） | 澳洲华人 AI founder 池子稀缺，想提前接触 deal flow（PRD §10.2） | cohort 画像 / 请你做什么 / 你能得到什么 |
| **天使 / 已退出 founder**（华人圈成功创业者 / JR 校友里的高净值） | 想 giving back + 当 mentor + 早期看好项目 | 请你做什么 / 合作形式菜单 |
| **加速器 / 创业平台 partner** | 想给自己的 program 找早期 pipeline + 在本地华人圈建品牌 | cohort 画像 / 你能得到什么 |

> 先做**一份通用版**覆盖三类，不为每类拆版。

---

## 3 · 目标 / Non-goals

### ✅ 目标
1. 任一类投资人 **3 分钟**翻完能回答：这是什么 cohort / 这批人是谁 / 你想请我做什么 / 我能得到什么 / 下一步怎么做。
2. **把 cohort 讲成一个值得认识的 deal flow 来源** —— 澳洲华人 AI solo-founder（PERSONAS 画像 + 50 人首期）。
3. **ASK 清楚且轻**：来分享 / 评审 / scout，不是来掏钱；行程轻、内容我们包装。
4. **互利说透**：deal flow 早期 access + 曝光 + giving back，对应 PRD §10.2 的 VC 互利逻辑。
5. **诚实**：cohort 是首期、PLANNING 阶段就如实说；不夸大网络规模。

### ❌ Non-goals
1. ❌ **不向投资人募资** —— 不讲估值 / TAM / CAC / LTV / 财务预测 / 融资额 / 股权。
2. ❌ **不对学员承诺金钱**（CLAUDE.md 顶级红线）—— 讲 cohort 画像不出现"保证学员赚 X"。
3. ❌ **不承诺任何投资 / deal** —— 来 scout 是机会不是义务，不暗示"来了就有项目可投"。
4. ❌ **不编造嘉宾 / 校友 / 机构 / cohort 真实数据** —— 未确认一律 `[商务确认]`。
5. ❌ **不夸大海外复制确定性**（VISION §7.3）—— 用"计划 / 志在"。
6. ❌ **不卖课给投资人** —— 课程只占 1 页 30 秒介绍。

---

## 4 · 叙事主线

```
① cover（co-brand）  这是一封邀约：来给澳洲华人 AI solo-founder cohort 当资源
② 为什么是现在        AI 拐点 + OPC 窗口同时成立（PRD §1.2）—— 这批 founder 正在涌现
③ 这门课是什么（30 秒）11 周三城线下 OPC cohort，把人筛出来、带到能 ship、产真实 case
④ cohort 画像 = 你为什么想认识他们  50 人澳洲华人 AI founder，画像 A/B/C 占比（deal flow）
⑤ 我们请你做什么      fireside / W10 VC fireside / W11 Demo Day 评审 / 选修 office hour / scout
⑥ 你能得到什么        早期 deal flow access + 曝光 + giving back + 连接本地华人创投圈
⑦ 合作形式菜单        一次 fireside / 持续 mentor / Demo Day 评审 / 长期资源对接
⑧ 我们包什么          行程轻 · 内容我们包装 · 曝光位我们给
⑨ 红线                不承诺 deal / 不付费互利 / 学员信息合规 / 不强制 scout
⑩ 下一步 ask          具体动作 + 时间
⑪ 我们是谁            匠人学院 + 这个 cohort（平台 + 校友鱼塘 + 澳洲本地）
```

---

## 5 · 逐页 spec（11 页）

> 每页给：**目的 / 核心信息 / 必含要素 / 数据来源（或 `[商务确认]`）**。
>
> 🚨 通用红线（每页）：① 不向投资人募资、不出现估值/TAM/CAC/LTV/融资额；② 不对学员承诺金钱；③ 不承诺任何 deal/投资；④ 海外复制用"计划/志在"；⑤ 嘉宾/校友/机构/cohort 真实数据没核实就 `[商务确认]`。

### Page 01 · COVER · 邀约一句话
- **目的**：3 秒让投资人知道这是一封"来当 cohort 资源"的邀约，不是融资也不是卖课。
- **核心信息**：来认识 / 分享给一批澳洲华人 AI solo-founder。
- **必含要素**：
  - co-brand logo lockup：匠人 brand v2 反白 logo `assets/logo/logo-zh-white.png`（deck 已就近复制为 `../../jr-logo-zh-white.png`）× `[投资人 / 机构 LOGO]`（占位，他们的）。
  - eyebrow：`投资人邀约 · INVESTOR / MENTOR INVITATION`。
  - 大标题：`来认识一批澳洲华人 AI solo-founder` / 副标点明"分享 · 评审 · 看人，不是来掏钱"。
  - 角标：`资源对接邀约 · [商务确认 日期] · 匠人学院 Jiangren Academy`。
- **数据来源**：VISION §0 / PRD §10.2。**不放价格 / syllabus / 融资字样。**

### Page 02 · 为什么是现在
- **目的**：让投资人理解"这批 founder 正在涌现，现在是接触他们的窗口"。
- **核心信息**：AI 拐点 + OPC 窗口同时成立（PRD §1.2），澳洲华人 AI founder 是一个正在形成、还没人系统接触的早期池子。
- **必含要素**（抄 PRD §1.2，投资人视角）：
  1. 技术拐点：Cursor / Claude Code / Lovable / v0 让一个人做出过去一个团队的产品；indie hacker 从孤例变 playbook；Sam Altman 公开预测"一人 billion-dollar 公司"（标"公开行业观点"）。
  2. 人群在涌现：澳洲拿 150-250k+ 的华人专业人士（senior dev / PM / 咨询 / 律师 / 会计）正动起来做 OPC。
  3. 窗口独家：`澳洲华人 AI 一人公司 + Grant + 三城线下`全球独一份（PRD §1.2.3）—— 这个早期池子现在还没人系统接触。
  - 一句话：`这批 founder 正在涌现，但还没人把他们聚到一起 —— 现在是认识他们的最早窗口`。
- **数据来源**：PRD §1.2。indie hacker / Sam Altman 标"公开行业观点"，不引为我们的数据。

### Page 03 · 这门课是什么（30 秒）
- **目的**：用 30 秒让投资人知道 cohort 怎么来的、含金量为什么够。
- **核心信息**：11 周三城线下 OPC cohort —— 申请制筛人 + 带到能 ship + 产真实毕业 case。
- **必含要素**：
  - 一句话定位（FUNNEL §1）：`用中文教澳洲华人专业人士用 AI 做一人公司：选品 → MVP → 收第一笔钱 → 全渠道营销 → 澳洲会计/Grant → Demo Day`。
  - 属性条：`11 周三城线下（墨/悉/布）· 申请制（目标录取率 30-50%）· 首期 50 人 · 不录播`（PRD §3.3 / §5 / FUNNEL Meta）。
  - 为什么含金量够（给投资人）：申请制 + 30min 面试筛掉心智不对的人；毕业 6 项硬指标（$1+ 真实付费 / 产品 URL Live / ABN / Grant 提交 / Demo Day 出席）= 这批人不是来听课的，是真在 ship 的（PRD §4.2）。
- **数据来源**：FUNNEL §1、PRD §3.3 / §4 / §5。
- **⚠️ 红线**：Grant 写"提交申请"不写"拿到退税"；不写"包做出赚钱产品"。

### Page 04 · cohort 画像 = 你为什么想认识他们
- **目的**：deck 心脏 —— 让投资人看到这是一个被筛过的、值得提前接触的 deal flow。
- **核心信息**：50 人澳洲华人 AI solo-founder，画像 A/B/C（PERSONAS §1）。
- **必含要素**：
  - 50 人首期 + 三城分布：墨 22 / 悉 16 / 布 12（PERSONAS Meta / FUNNEL Meta）。
  - 三画像卡（PERSONAS §1，占比标"PRD 目标分配，首期录取后用真实数据更新"）：
    - A ≈ 45% 焦虑型 senior 程序员（35-45 大厂 senior，会 Cursor，卡在从 0 到第一笔收入）；
    - B ≈ 35% 高薪 PM / 咨询 / Designer（想绕过工程团队自己 ship）；
    - C ≈ 20% 专业服务者（律师 / 会计 / 医生，AI productize + 吃澳洲 Grant）。
  - 一句给投资人的话：`这不是泛流量 —— 是一批有积蓄、有专业积累、申请筛过的澳洲华人 AI founder。你在 Demo Day 上见到的，就是这个池子最早的一批`。
- **数据来源**：PERSONAS §1 / Meta、FUNNEL Meta。
- **⚠️ 红线**：占比标"PRD 目标分配 · 首期录取后更新"；不引 PERSONAS 低可信字段（痛点原话 / 平台 Top5）。

### Page 05 · 我们请你做什么
- **目的**：把 ASK 说清楚、说轻 —— 来分享 + 看人，行程不重。
- **核心信息**：5 个动作菜单，从最轻（一次 fireside）到选修（office hour / scout）。
- **必含要素**（每项标来源）：
  1. **Fireside / 分享 / guest lecture** —— 一场线上或线下分享（你的创业 / 投资视角）。
  2. **W10 VC fireside chat** —— 课程现成卡位（PRD §5 W10「拿钱加速？」选修，请本地 VC 来聊"什么时候该融、什么时候不该"）。
  3. **W11 Demo Day 评审席** —— 三城联合 Demo Day，现场嘉宾评审，看每人 5 分钟 demo（PRD §5 W11 / §4.1）。
  4. **（选修）Office Hour / mentor** —— 给感兴趣的 founder 1:1 或小组答疑。
  5. **Scout / 认识 founder** —— Demo Day + networking 晚宴上自然认识，建你自己的 deal flow（PRD §10.2）。
  - 一句话：`最轻只需要一场 fireside；最深可以长期当 mentor + 看人。你挑`。
- **数据来源**：PRD §5（W10/W11）、§4.1、§10.2。
- **⚠️ 红线**：scout 标"机会不是义务"；不承诺"来了就有项目可投"。

### Page 06 · 你能得到什么
- **目的**：讲清楚投资人来这一趟的回报，让"为什么值得花时间"成立。
- **核心信息**：早期 deal flow access + 品牌曝光 + giving back + 连接本地华人创投圈。
- **必含要素**（卡片）：
  1. **早期 deal flow** —— 在别人之前接触一批被筛过的澳洲华人 AI founder（PRD §10.2「池子稀缺，想看 deal flow」）。
  2. **品牌曝光** —— logo / 介绍出现在 cohort 材料 / Demo Day / 社媒 recap（曝光位我们给）。
  3. **Giving back** —— 把经验回馈给正在起步的华人 founder，建本地口碑。
  4. **连接本地华人创投圈** —— 接到匠人的校友网络 + Faculty + 其他嘉宾（VISION §3 三层同心圆，投资人是中圈资源）。
  - 一句话：`你给一场分享的时间，换的是一批早期 founder 的提前接触权 + 本地华人创投圈的连接`。
- **数据来源**：PRD §10.2、VISION §3。
- **⚠️ 红线**：曝光位 / 席位数字 `[商务确认]`；不承诺 deal。

### Page 07 · 合作形式菜单
- **目的**：给投资人挑一个适合自己投入度的合作档，降低决策门槛。
- **核心信息**：从一次性到长期，4 档可选。
- **必含要素**（菜单卡，中间档 featured）：
  - **一次 fireside / 分享** —— 单场，最轻，1-1.5h。
  - **Demo Day 评审**（featured）—— W11 来当评审 + 现场看人，半天。
  - **持续 mentor / office hour** —— 跨多周给 founder 答疑。
  - **长期资源对接** —— 跨期来分享 + 优先接触每期 cohort 的 deal flow。
  - 每档标"行程 / 投入"概览，所有具体日期 / 频次 `[商务确认]`。
- **数据来源**：PRD §5 / §10.2、VISION §3。
- **⚠️ 红线**：不付费也不收费（嘉宾互利，PRD §10.1 VC 列"免费"）—— 明确标在菜单或红线页。

### Page 08 · 我们包什么
- **目的**：打消"会不会很麻烦"的顾虑 —— 行程轻、内容我们包装、曝光位我们给。
- **核心信息**：嘉宾只需要出现 + 分享，其余我们全包。
- **必含要素**（卡片）：
  - **行程轻**：嘉宾飞主场城市即可，另两城听直播（PRD §6.1「嘉宾飞主场，其他两城听直播，嘉宾不用飞三趟」）。
  - **内容我们包装**：大纲对齐 / 物料 / 录像 recap 我们做（PRD §10.3「T-4 嘉宾内容大纲对齐」）。
  - **曝光位我们给**：cohort 材料 / 社媒 / Demo Day 介绍位。
  - **对接专人**：T-6 到 T-1 的邀约 / 彩排 / 出席确认有运营专人跟（PRD §10.3）。
  - 一句话：`你只要出现 + 分享你真实的东西，其余我们全包`。
- **数据来源**：PRD §6.1 / §10.3。

### Page 09 · 红线（我们不做什么）
- **目的**：主动亮红线建立信任 —— 不绑架、不利益输送、合规。
- **核心信息**：4 条红线。
- **必含要素**：
  1. **不承诺任何 deal / 投资** —— 来 scout 是机会，cohort 不为任何嘉宾"包装可投项目"，founder 见谁、聊不聊由他们自己定。
  2. **嘉宾互利、不付费也不收费** —— 这是资源互利关系（PRD §10.1 VC=免费），不涉及金钱往来 / 返佣。
  3. **学员信息合规** —— 不私下转售 / 群发学员名单；founder 联系方式由 founder 本人决定是否给（呼应 CLAUDE.md PII 红线）。
  4. **不强制 scout** —— 来分享的嘉宾没有"必须看项目 / 必须给反馈"的义务，纯分享也欢迎。
- **数据来源**：PRD §10.1、CLAUDE.md PII 红线。
- **设计**：红 `#ff5757` 强调；用 partner deck `.redbox` / `.privacy-bar` 同款样式。

### Page 10 · 下一步 ask
- **目的**：给一个低压、具体的下一步。
- **核心信息**：3 步递进 —— 15min 聊 → 选合作档 → 排期。
- **必含要素**（partner deck `.steps` + `.cta-box` 同款）：
  - Step 1：15min 视频聊 —— 介绍 cohort + 你想怎么参与。
  - Step 2：收一页纸 —— cohort 一页纸 + 你那档的行程方案。
  - Step 3：排期 —— 定一场 fireside / 你来 Demo Day 的日期 `[商务确认]`。
  - 主 CTA：`约 15 分钟 —— 看看你想怎么参与这个 cohort`；联系人 `[BD / 主理人 姓名 / 邮箱 / LinkedIn · 商务确认]`。
- **数据来源**：PRD §5（Demo Day 日期）、§10.3（邀约节奏）。

### Page 11 · 我们是谁
- **目的**：让投资人相信这个 cohort 靠谱、值得来。
- **核心信息**：匠人学院既有资产 = 这个 cohort 转得起来的底气。
- **必含要素**（卡片，引用量级标"商务确认精确数"）：
  - 平台：jiangren.com.au「全球华人学习 AI 第一站」+ 32 门课 + InteractiveLab / Learn / Wiki / Roadmap（PRD §9 / CLAUDE.md）。
  - 校友鱼塘：AI Engineer Bootcamp（千级）+ OpenClaw（百级）+ 历届校友群 —— 首期 70% 生源来自内部鱼塘（PRD §7.1 / §7.2，量级标"商务确认精确数"）。
  - 澳洲本地：三城（墨/悉/布）已配 Tutor + 本地嘉宾资源（PRD §6.2）—— 全球华人创业课里唯一有澳洲本地 footprint 的。
  - 主理人 / 团队：`[Lightman + 核心团队 · 商务确认实名]`（不编履历）。
  - 收尾一句（VISION §0，标"志向非承诺"）：`想做 AI 一人公司的全球华人，第一个想到的入口 —— 你来认识的，是这个网络最早的一批人`。
- **数据来源**：PRD §6.2 / §7 / §9、VISION §0 / §3、CLAUDE.md。
- **⚠️ 红线**：校友数量级标"商务确认精确数"；团队实名占位不编；海外/网络志向标"志向非承诺"。

---

## 6 · 设计规范（jr-academy-brand v5 neo-brutalism）

> 🚨 对照 `jr-academy-brand/DESIGN.md` + Brand Board + `tokens/tokens.css`（`--jr-*`）。**直接复用 partner-recruitment 的 `styles.css`**（已是 v5、含背景动画 + `.card .ph` 深色文字 fix），保持两份 deck 视觉完全一致。

- **结构语言**：3px 纯黑边 `#000` + 直角（border-radius:0）+ 偏移硬阴影 `6px 6px 0 #000`；hover = 阴影归零 + 位移 3-4px。所有卡片 / 按钮 / 菜单 / 数据卡。
- **底色**：暖底 `#fff1e7` + 纯白卡 `#fff`；深色区块 / CTA 用 `#10162f` 或 `#1a1a2e`。**不要冷白**。
- **CTA / 强调**：红 `#ff5757` 做 CTA / 编号 / 红线 / Demo Day 评审 featured 档。
- **字体**：标题 Bricolage Grotesque / 正文 DM Sans / 数据·占位符 Space Mono / 中文 Noto Sans SC。引 4 个 Google Fonts。
- **AI/网络** 用紫 `#CB6CE6`；**信息/链接** 用蓝 `#38B6FF`。
- **圆角**只给圆形元素（头像 / 状态点 / 胶囊标签 `999px`），其余直角。
- **占位符**：`[商务确认]` 用 `.ph` 胶囊样式，一眼看出是待填占位。
- **Logo**：封面深色用 brand v2 `logo-zh-white.png`（deck 内 `../../jr-logo-zh-white.png`，**旧 `/icon/logo-zh-white.svg` 禁用**，**不用 `[LOGO]` 占位**）；投资人 / 机构方 logo 用 `[投资人 LOGO]` 占位（那是他们的）。不拉伸 / 不加 shadow / 不红底放红 logo。
- **版式**：横版 16:9 multi-page，每页 100vh，独立 URL，可单页 print PDF。页脚放页码 + 来源标注。
- **路径**：`public/partnerships/investor-invite/index.html`（`<meta refresh>` 0s → `01.html`）+ `01.html`..`11.html` + `styles.css`。

---

## 7 · 红线（实现 deck 时一字不破）

来自 CLAUDE.md + VISION §7 + FUNNEL §3 + PRD §10：

1. **不向投资人募资** —— 全篇不出现估值 / TAM / SAM / SOM / CAC / LTV / 财务预测 / 融资额 / 用途拆分 / 股权 / SAFE。ASK 永远是"来分享 + 看人"。
2. **不对学员承诺金钱**（最高红线）—— 讲 cohort 画像 / 毕业指标用"过程指标"，不出现"保证学员赚 X / 月入"。Grant 写"提交申请"，不写退税金额、不保证通过。
3. **不承诺任何 deal / 投资** —— scout 是机会不是义务，不暗示"来了就有项目可投"。
4. **不编造嘉宾 / 校友 / 机构 / cohort 真实数据** —— 唯一可写死的真数 = 50 人首期（墨22/悉16/布12，Lightman 2026-06-18 拍板）+ pricing（FUNNEL §3）+ 画像占比（PRD 目标，标"待真实数据更新"）。其余 `[商务确认]`。VC 机构名（Blackbird / Square Peg / Antler / Startmate / AfterWork）仅作"候选画像举例"，不暗示已确认来。
5. **不夸大海外复制确定性**（VISION §7.3）—— 用"计划 / 志在"。
6. **不用代码生成 pptx / docx**（最高铁律）—— HTML multi-page only，要 PDF 用浏览器单页 print。
7. **不引用 PERSONAS 低可信字段** —— GT≈0.30，只用结构性事实（画像占比 / 50 人 / 三城分布 / 申请制），不引"痛点原话 / 平台 Top5"当数据。
8. **嘉宾互利、不付费不收费** —— PRD §10.1 VC=免费；deck 不出现给嘉宾的费用 / 嘉宾要付的钱。

---

## 8 · 待 [商务确认] 占位汇总

| 项 | 出现页 | 状态 |
|---|---|---|
| deck 日期 | P01 | `[商务确认]` |
| 投资人 / 机构方 logo | P01 | 占位（他们的，不放真实） |
| 首期开课日期 / Demo Day 日期 | P03 / P05 / P10 | `[商务确认]`（PRD 2026 Q3 待定） |
| 候选 VC 机构是否确认来 | P05 | 仅举例，不暗示已确认 |
| 曝光位 / 评审席 / office hour 席位数 | P06 / P07 | `[商务确认]` |
| 合作各档具体行程 / 频次 | P07 | `[商务确认]` |
| BD / 主理人 姓名 / 邮箱 / LinkedIn | P10 | `[商务确认]` |
| 团队实名 + 履历 | P11 | `[商务确认]`，不编 |
| 校友 / 鱼塘精确数（PRD §7.2 给量级） | P11 | `[商务确认精确数]`，引用量级即可 |
| 画像 A/B/C 占比 | P04 | PRD 目标分配，标"首期录取后用真实数据更新" |

---

## 9 · 验收标准

deck 上线前逐条 check：

1. **3 分钟测试**：扮演投资人翻完能复述：这是什么 cohort / 这批人是谁 / 你想请我做什么 / 我能得到什么 / 下一步。4/5 → pass。
2. **不是融资 deck**：grep 全 deck **无**估值 / TAM / CAC / LTV / 融资额 / 股权 / SAFE 字样。
3. **ASK 是分享+看人**：读者能讲清"来 fireside / 评审 / scout"，不以为是来投钱或来买课。
4. **互利讲清**：读者能复述"deal flow + 曝光 + giving back"是他来的回报。
5. **不承诺 deal**：grep 无"保证项目 / 一定有得投 / 包对接"。
6. **不对学员承诺金钱**：grep 无"保证赚 X / 月入"；Grant=提交申请。
7. **数据合规**：除 50 人 / pricing / 画像占比（标"目标"）外，嘉宾 / 校友 / 机构 / 日期全 `[商务确认]`；VC 机构名仅举例。
8. **海外复制不夸大**：grep 无"已布局 / 已落地"。
9. **跟 partner-recruitment 不重复**：本 deck 无"联合推广 / 返佣 / 会员专属价" framing，ASK 是分享+看人不是 co-promote。
10. **brand v5 合规**：复用 partner-recruitment styles.css；3px 黑边 + 直角 + 硬阴影 + 暖底 + 4 字体 + 真实 logo（封面 `logo-zh-white.svg`）；占位符有可视区分。
11. **格式合规**：HTML multi-page（index redirect + 01-11.html + styles.css），在 `public/` 下可公开部署，无任何 .pptx/.docx。
