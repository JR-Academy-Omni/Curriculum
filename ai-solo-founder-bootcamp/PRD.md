# PRD: AI 一人创业营（首期）

**状态**: Draft v0.4
**作者**: Claude + lightman
**目标期数**: 2026 Q3 首期（具体开课日期待商务确认嘉宾供应链后定）
**Production 状态**: 全新课程，未在 prod 创建
**Curriculum 目录**: `curriculum/ai-solo-founder-bootcamp/`
**Slug**: `ai-solo-founder-bootcamp`（URL/英文站统一）
**中文名**: 「AI 一人创业营」（2026-04-30 决定，从初版 "AI 一人公司 Bootcamp" 改名）
**英文名**: AI Solo Founder Bootcamp（保留 slug 一致性，海外复制时英文不变）

**命名决策记录**:
- 候选过程：AI 一人公司 / AI Solo Founder / AI 独立创业训练营 / AI 一人创业营 / AI 单干创业营 / AI 自由创业营 / AI 自立门户 / AI 单飞 / AI 出师 / 换轨 / 另起一行 / 下半场
- 最终选定："AI 一人创业营"——保留"创业营"骨架（受众预期匹配）+ "一人"前缀差异化于"创业课"通用品类污染
- 跟 JR 现有 Bootcamp 的命名差异：用"营"取代"Bootcamp"后缀，更适合中产专业人士受众
- 海外复制：加拿大 / 英国 / 新加坡版主品牌不变（中文统一，slug 仍用 ai-solo-founder-bootcamp）

**v0.4 定价阶梯重做（2026-05-25）**:
- 💰 首期定价改三段式："预售 → 首期早鸟 → 第二期"
  - PRE-SALE: AUD **$2,400** · 限 15 席 · 可付定金锁席（满即关闭）
  - EARLY BIRD: AUD **$2,800** · 预售关闭后剩余席位（首期共 50 人）
  - NEXT COHORT: AUD **$3,800** · 第二期回标准价
- 🗑 删除原 §8.1 v0.3 三档（$3,800 / $4,800 Standard / $6,800 Premium）—— 首期不再卖 1:1 mentorship 档位
- 📉 §8.2 第二期定价从 $4,800-$9,800 三档简化为单价 $3,800（不再分早鸟/standard/premium）
- 📊 首期总收入预期：50 人 × ~$2,500 均价 ≈ ~$125k——首期定位为 case study 引流，不是利润中心
- ⚠️ **2 个动作要 lightman 拍板** — landing.html 已留 TODO 占位符：
  - ✅ 定金 = **A$1,000**（2026-06-19 拍板，已同步 landing.html / hundun-au）。仍待定：定金转全款的规则（预售期截止前如何收尾、退款衔接）
  - 预售期是否设时间截止（除"满 15 人"外加 "或 YYYY-MM-DD 截止，先到先停"）
- ✅ 已同步：`landing.html` 顶部 hero label / pricing-grid 三档 / value-anchor 打包价 / sticky bar；`promo-kit.html` 加了 28 张 AIGC 海报 prompt 一键复制 section

**v0.3 重大调整（2026-04-30）**:
- ❌ 删除 W10 移民/签证整周（GTV / 188 / 888 / 482 / MARA 嘉宾）—— 用户决策："PR 不知道，移民模块不加"
- ⏱ 课程从 12 周缩短到 11 周（W0 + W1-W11）
- 👥 受众画像 D（移民诉求 + 创业诉求双重，10%）从 §3.1 移除；A/B/C 重新分配为 45%/35%/20%
- 🎤 嘉宾从 4 类 → 3 类：会计师 + Grant consultant + VC（移民代理 MARA 移除）
- 📊 totalLessons 53 → 49 / liveClasses 29 → 26 / estimatedHours 96 → 92
- 🔢 Phase 4 W11-W12 重编号为 W10-W11；Phase 4 lesson L45-L52 重编号为 L41-L48
- 🌏 海外复制时本地化模块从"会计 + Grant + 签证"简化为"会计 + Grant"，更轻量

---

## 1. Context — 为什么做这门课

### 1.1 现有 JR Bootcamp 的出口都不解决"自己开公司"

扫了一遍 `curriculum/` 下现有 5 门主力 bootcamp 的定位：

| 课程 | 解决的问题 | 学员出口 |
|------|-----------|---------|
| AI Engineer Bootcamp（12+12 周） | 我会 AI 工程，能拿 AI 工程师 offer | **打工**（升职/换工作） |
| AI Adoption Bootcamp（8 周） | 我能在公司里推动 AI 落地 | **打工**（内部转型岗） |
| OpenClaw Bootcamp（4 周） | AI 接管我每周 5h+ 重复劳动 | **个人提效**（不丢饭碗） |
| Vibe Coding / ai-builder | 我用 AI 做全栈开发更快 | **技能提升** |
| AI Essentials | AI 入门科普 | **认知升级** |

**所有 bootcamp 出口都是"在某家公司里干活"或"个人提效"。完全没有"自己开公司、卖产品、拿 Grant"这条出口**。这是清晰的产品空白，不是跟现有课程重叠。

### 1.2 三件事同时成立，市场窗口真实

1. **技术拐点真实** — Cursor / Claude Code / Lovable / v0 让一个程序员一周做出过去一个团队半年做的 SaaS。Pieter Levels、Marc Lou、Tony Dinh 这类 $30k-$100k MRR 的 indie hacker 不再是孤例，而是可批量复制的 playbook。Sam Altman 公开预测"未来会有一人 billion-dollar 公司"。

2. **焦虑供给侧真实** — 程序员焦虑被 AI 替代是表面，更深层是澳洲拿 150k-250k+ 工资的中产专业人士（PM、咨询、律师、会计、senior dev）天花板焦虑。AI Engineer Bootcamp 解决的是"学新技能继续打工"，但很多学员真正的问题是"打工的天花板在哪、能不能不打工"。

3. **澳洲特色形成全球独家定位** — "全球华人 AI 创业课"没有差异化（生财有术、出海帮、Greenlets 都在做）。但**"澳洲华人 AI 一人公司课 + Grant 拿到手 + 三城线下 networking"是全世界独一份的产品**。

### 1.3 三个核心张力（已在前期讨论中决策）

**张力 1：OPC 一人公司 vs 可融资 startup → 选 OPC 主轴**

不能两条都教，会精神分裂。OPC 拒绝融资（dilution = 失去自由），VC 路线必须融资（不融跟不上）。两条路在团队、营销、财务、心智每一层都冲突。

决策：**主轴选 OPC / Indie**，"投资人对接 / 创业投资"降级成 W10 选修课 fireside chat（请 1-2 个本地 VC 来分享），不做系统训练。理由：
- 痛点描述（焦虑、被替代）= OPC 受众心智
- VC 学员人数极少（澳洲华人能拿 angel round 一年个位数）收不回三城运营成本
- VC 内容半衰期短（term sheet 行情每年变），OPC 内容半衰期长
- Grant / 澳洲会计 这些两条路都要用，不浪费

**张力 2：定位锁定澳洲华人 = 全球 → 全球可复制的本地化产品**

加入"澳洲会计、Grant 补助、本地 networking"后，这门课不再是中文站"全球华人"定位下的产品，而是**澳洲华人本地化产品**。

但用户已确认："就是线下课，复制到其他国家的话也可以类似模式"。这定下了真正的产品形态：

```
首期澳洲（验证 + 建 SOP）       — 50 人 × ~$2.5k 均价 = ~$125k 收入（v0.4 调整 · 持平就好）
       ↓ 6-8 周
第二期澳洲（复制扩规模）         — 35-50 人 × $5.5k = $200-280k
       ↓ 6-12 个月
加拿大首期 + 英国首期 + 新加坡首期 — 用同一套核心 + 当地化模块
       ↓
全球华人 AI Solo Founder 校友网络
```

课程内容架构必须**一开始就拆"全球通用核心 80% + 当地化模块 20%"**，否则后续国家复制时要重做。

**张力 3：付费筛选不是 bug 是 feature**

用户明确："毕竟付费，筛选了很多没有钱的创业者"。这反而正中目标客户画像：

- OPC 真实学员：35-45 岁 / 有 5-15 年职业积累 / 6-12 个月生活费储蓄敢辞职 / 敢一次性掏 $5k+ 学费
- 没钱的创业者其实**不该走 OPC** — 课上完第二天为下个月房租焦虑，撑不到 $1k MRR

定位自信往高价高净值走，不假装普惠。

---

## 2. 市场判断 + 竞品定位

### 2.1 可比品类对照

| 品类 | 例子 | 定价 | 学员数级 | 跟 JR 这门课的差异 |
|------|------|------|---------|-------------------|
| 国外 cohort-based 创业课 | Reforge / On Deck | USD $4k-$7k | 千人级/期 | 英文圈、不含 Grant、远程 |
| YC Startup School | YC | 免费 | 万人级 | 通识科普、非 cohort、无落地 |
| 中文创业社群 | 生财有术 | RMB 3000-5000/年 | 万人级 | 社群型、不教 AI 产品、内容碎片 |
| 中文出海创业 | 出海帮 / Greenlets | 免费 - RMB 几千 | 千人级 | 偏内容、不针对澳洲 |
| 澳洲本地创业课 | Antler / Startmate（项目制） | 免费（拿股份） | 几十人/期 | VC track only、英文圈、不教 OPC |
| **JR 这门课** | **AI 一人创业营** | **AUD $2.4k 预售 / $2.8k 首期早鸟 / $3.8k 二期** | **50 人首期** | **澳洲华人专属 + AI 工具栈 + Grant + 三城线下** |

差异化定位：**这是世界上唯一一门"用中文教澳洲华人专业人士用 AI 做一人公司、拿澳洲 Grant、三城线下 networking"的 cohort-based 课**。

### 2.2 跟现有 JR 课程的关系

```
入口 1：AI Essentials Bootcamp  ────┐
                                    │
入口 2：OpenClaw Bootcamp           │
（学会 AI 工具）                     │
                                    ├──→  AI 一人创业营
入口 3：AI Engineer Bootcamp        │     （把会 AI 转成自己赚钱）
（会 AI 工程）                       │
                                    │
入口 4：Vibe Coding / ai-builder    │
（会 AI 编程）                       │
                                    │
直接入口：澳洲华人 senior pro ─────┘
```

**这门课不抢现有 bootcamp 学员，是给他们一条新出路**。AI Engineer 学员升级 + OpenClaw 学员升级是首期最重要的内部鱼塘。

---

## 3. 受众画像 + 不收谁

### 3.1 理想学员画像（要收谁）

**画像 A：焦虑型 senior 程序员（最对口，目标占比 45%）**
- 35-45 岁 / 在 Atlassian/Canva/Telstra/Optus/Airwallex/银行 拿 150-250k+ 工资
- 已经会用 Cursor/Claude Code，看到 AI 替代趋势
- 想"做点自己的事"但不知道怎么从 0 到 $1 MRR
- 有 6-12 个月生活费储蓄，敢辞职/兼职过渡

**画像 B：高薪 PM/咨询/Designer（目标占比 35%）**
- 40-50 岁 / Senior PM / Senior Designer / 咨询合伙人
- 看完 Lovable + Cursor 演示，想绕过工程团队自己做产品
- 有强行业洞察（Legal/Real Estate/Healthcare/EdTech）但缺技术信心
- AI 工具让他们第一次能自己 ship

**画像 C：副业冲动 professional（目标占比 20%）**
- 律师 / 会计 / 医生 / 资深咨询
- 不想辞职但想用 AI 做 niche SaaS / 行业知识产品
- 看重澳洲税务 + Grant 合规

### 3.2 不收谁（明确排除）

- **没积蓄的应届生 / 在校生** — 撑不到 $1k MRR，应该先打工攒钱
- **没辞职勇气的纯打工者** — 不投入时间，cohort 文化被污染
- **想拍短视频割韭菜的** — 应用申请筛掉
- **想做币圈/Token 项目的** — 不在课程范围
- **不在澳洲且不打算来澳洲的** — Grant/会计模块对他无用，会觉得课不值
- **想做 VC fundable startup 的** — 推荐去 Antler / Startmate / Y Combinator

### 3.3 申请制（核心筛选机制）

光靠价格筛掉的还有"有钱但心智不对的人"。Reforge / On Deck / YC 都用申请制。

**申请流程**：
```
申请表（5 分钟填）
├─ 你为什么想做 OPC，不是找下一份工作？（200 字）
├─ 你过去 90 天为某个 idea 做过什么？（具体行动，不要空话）
├─ 你能稳定每周投入多少小时？
├─ 当前财务状况能撑几个月不收入？
├─ 一个你过去做过的"独立完成的事"（任何领域都可以）
└─ 你在澳洲吗？澳洲身份状态？
        ↓
通过 → 30 分钟 1:1 视频面试 → 录取
不通过 → 推荐去 OpenClaw / AI Engineer Bootcamp
```

**目标录取率：30-50%**（公开这个数字本身就是 social proof）。

---

## 4. 学员旅程 + 毕业标准

### 4.1 11 周学员里程碑

```
W0 报到前       → 完成 Pre-work（选品模板 + 真实工作素材集 + LLM Key + ABN 注册预备）
W1 选品 + 验证  → 砍到 1 个 idea，跟 5 个目标用户聊过
W2 MVP 周       → 上线一个能跑的 demo（域名 + Stripe 测试模式）
W3 上线 + 收钱  → ⭐ 收到 $1+ 真实付费 ⭐
W4 中文内容机器 → 发出 5+ 篇小红书 / 视频号 / 公众号
W5 英文内容机器 → 发出 5+ 篇 X / LinkedIn / ProductHunt
W6 SEO + GEO    → 网站 SEO 完成 + AI 搜索可见性配置
W7 财务 + 自动化 → Stripe → Xero 打通、AI 客服上线
W8 澳洲会计     → ABN 注册完成 / Sole trader vs Pty Ltd 决策
W9 Grant 实战   → ⭐ 提交至少 1 个 Grant 申请 ⭐
W10 选修：拿钱 → 听 VC fireside chat、决定要不要走 VC 路径
W11 Demo Day    → 三城联合 Demo Day + Networking Tour
```

### 4.2 毕业硬指标（不是 demo）

学员不达标不发结业证书。这条会让"想试试"和"真要干"的学员自动分层，也是这门课跟所有创业割韭菜班最大的差异。

| # | 指标 | 验收标准 |
|---|------|----------|
| 1 | 真实付费 | Stripe / Lemonsqueezy 截图，$1+ 真金白银（不是承诺） |
| 2 | 内容产出 | 中文 5 条 + 英文 5 条，公开链接可访问 |
| 3 | 法律实体 | ABN 已注册（或已有 Pty Ltd） |
| 4 | Grant 申请 | 提交至少 1 个 Grant（拿到算 bonus） |
| 5 | 产品 URL | 在线可访问的产品/服务页 |
| 6 | Demo Day 出席 | W11 现场或卫星教室到场 |

---

## 5. 课程结构（11 周）

### 5.1 全局架构：80% 通用核心 + 20% 澳洲本地化

为支持后续国家复制，课程内容**一开始就明确拆分**：

| 模块 | 性质 | 复制到其他国家时 |
|------|------|------------------|
| W0 / W1-W7 / W10-W11 | 全球通用核心（80%） | 直接复用 |
| W8 澳洲会计 | 当地化（20%） | 换成加拿大/英国/新加坡会计 |
| W9 澳洲 Grant | 当地化（20%） | 换成当地 Grant 体系 |

### 5.2 详细课表（11 周）

#### W0 — Pre-work（自学，开班前 2 周完成）

**目标**：第一节课不卡装机和素材准备。

- L00 Pre-work · 装机 + LLM Key（继承自 OpenClaw Bootcamp Pre-work）
- L01 Pre-work · 真实工作素材集（10+ 邮件 / 5+ 文档 / 1 个客户清单）
- L02 Pre-work · ABN 注册预备（澳洲税务局账号 / myGov）
- L03 Pre-work · 5 件最想让 AI 替你干的事（开课用）

#### W1 — 选品 + 验证（线下 4h + 自学 2h）

- L1.1 [Live] OPC 心智 + 选品方法论（澳洲华人 indie 案例 3-5 个）
- L1.2 [Live] AI 用户调研：Reddit / X / 小红书 / 牛客 挖痛点
- L1.3 [Self] Lab：5 个 idea → 1 个（模板）
- L1.4 [Self] 跟 5 个目标用户做 30min interview

#### W2 — MVP 周（线下 4h + 自学 8h）⭐ 继承 ai-builder

- L2.1 [Live] Cursor / Claude Code / Lovable / v0 工具地图
- L2.2 [Live] 一周做一个 SaaS 的 PRD → MVP playbook
- L2.3 [Self] InteractiveLab × 5（复用 Vibe Coding Lab）
- L2.4 [Self] 部署到 Vercel / Cloudflare / Railway

#### W3 — 上线 + 收第一笔钱（线下 4h + 自学 4h）

- L3.1 [Live] Stripe / Lemonsqueezy 接入实战
- L3.2 [Live] 域名 + 部署 + 监控
- L3.3 [Self] $1 真实付费挑战（毕业硬指标 #1）
- L3.4 [Self] 法律免责 / 隐私政策 / TOS 模板（澳洲版）

#### W4 — 中文内容机器（线下 4h + 自学 4h）⭐ 重点差异化

- L4.1 [Live] 小红书爆款笔记结构 + 私信转化
- L4.2 [Live] 视频号 / 公众号 矩阵 + 跨平台分发
- L4.3 [Self] AI 内容工厂：选题 → 写稿 → 改稿 → 出图（继承 OpenClaw）
- L4.4 [Self] 私域闭环：小红书 → WeChat → 转化

#### W5 — 英文内容机器（线下 4h + 自学 4h）

- L5.1 [Live] X/Twitter Build in Public 打法
- L5.2 [Live] LinkedIn outreach + ProductHunt 冷启动
- L5.3 [Self] Reddit / IndieHackers 社区策略
- L5.4 [Self] YouTube Shorts / TikTok 杠杆

#### W6 — SEO + GEO（线下 4h + 自学 4h）⭐ 继承 seo-optimizer / eeat-optimizer

- L6.1 [Live] Google SEO long-tail 关键词
- L6.2 [Live] AEO / GEO（AI 搜索时代的 cite-worthy 内容）
- L6.3 [Self] E-E-A-T + Schema.org 结构化数据
- L6.4 [Self] 自媒体作者档案（GSC 警告修复）

#### W7 — 财务 + 自动化（线下 4h + 自学 4h）⭐ 继承 OpenClaw

- L7.1 [Live] Notion 个人 ERP（CRM / 收入 / 任务一体化）
- L7.2 [Live] AI 客服 + 邮件自动化（OpenClaw / n8n / Zapier）
- L7.3 [Self] Stripe → Xero 自动同步
- L7.4 [Self] 数据看板（每日 MRR / 流量 / 客户）

#### W8 — 澳洲会计 + 税务（线下 4h，会计师嘉宾主讲）🇦🇺 当地化

- L8.1 [Live] Sole trader vs Pty Ltd 决策树
- L8.2 [Live] ABN / TFN / GST / BAS 实操
- L8.3 [Live] PSI rules / 个人 vs 公司税分水岭 / CGT
- L8.4 [Self] 一年期财务规划模板（澳洲版）

**嘉宾需求**：澳洲华人会计师（CPA / CA），熟悉 small business / sole trader / Pty Ltd 三种实体差异，能用中文讲。

#### W9 — 澳洲 Grant 实战（线下 4h，Grant consultant 嘉宾主讲）🇦🇺 当地化

- L9.1 [Live] R&D Tax Incentive (RDTI) 43.5% / 38.5% 退税
- L9.2 [Live] Export Market Development Grant (EMDG)
- L9.3 [Live] 各州 Grant：LaunchVic (VIC) / Advance Queensland (QLD) / NSW MVP Grant / WA Innovation Voucher
- L9.4 [Live] Accelerating Commercialisation / Industry Growth Program
- L9.5 [Self] Grant 申请书结构 + AI 辅助起草

**嘉宾需求**：澳洲 Grant consultant，至少帮 5+ 客户拿过 RDTI / EMDG，能讲实操陷阱。

#### W10 — 选修：拿钱加速？（线下 4h 选修，2 个 VC fireside chat）

- L10.1 [Live] VC 入门：什么时候该融钱、什么时候不该
- L10.2 [Live] Term sheet 入门 / SAFE notes / 估值
- L10.3 [Live] **Fireside chat × 2**：本地 VC（Blackbird / Square Peg / Antler 墨尔本 / Startmate 悉尼 / AfterWork Ventures）
- L10.4 [Self] OPC vs VC 路线决策表

**嘉宾需求**：2 个本地 VC 投资人 / 投资经理（华人 background 优先）。

#### W11 — Demo Day + Networking Tour（三城联合，全天）

- L11.1 [Live] 每人 5 分钟 Demo（产品 + MRR + 用户数）
- L11.2 [Live] 三城卫星教室直播联合
- L11.3 [Live] 现场嘉宾评审（会计师 / Grant consultant / VC / 老师）
- L11.4 [Live] 校友 networking 晚宴（每城本地举办）

---

## 6. 三城线下交付模式（Hub-and-Spoke）

### 6.1 模式确认（用户已验证 2020 年前跑通）

```
                ┌─────────────────────┐
                │  墨尔本 主场教室      │
                │  老师现场讲 + 学员    │
                │  本地 Tutor 1:8       │
                └──────────┬───────────┘
                           │ 直播 + 互动
              ┌────────────┼────────────┐
              ▼                          ▼
    ┌────────────────┐        ┌────────────────┐
    │ 悉尼 卫星教室    │        │ 布里斯班 卫星教室 │
    │ 本地 Tutor 1:8  │        │ 本地 Tutor 1:8  │
    │ 学员一起看 + 讨论│        │ 学员一起看 + 讨论│
    └────────────────┘        └────────────────┘
```

**关键设计**：
- 主场轮换：W1-W4 墨尔本主场 / W5-W8 悉尼主场 / W9-W12 布里斯班主场（也可以一城固定，看商务安排）
- Tutor 不需要懂 AI 工程（OpenClaw 装机简单）— 主要负责现场氛围 / 网络问题 / 个人化提问
- 学员选一个 home city，全期固定
- W11 Demo Day 三城联合直播 + 各城本地 networking 晚宴
- 嘉宾飞主场城市，其他两城听直播（嘉宾不用飞三趟，成本可控）

### 6.2 三城运营资源现状

| 城市 | Tutor 配置 | 场地 | 本地嘉宾资源 | 招生鱼塘 |
|------|-----------|------|-------------|---------|
| 墨尔本 | ✅ 已配置 | 待确认 | ✅ 强（JR HQ） | ✅ 最大 |
| 悉尼 | ✅ 已配置 | 待确认 | 🟡 中等 | ✅ 大 |
| 布里斯班 | ✅ 已配置 | 待确认 | 🟡 待开发 | 🟡 中等 |

### 6.3 跟纯线上的差异化叙事

- 三城线下沉浸（不录播 / 不开纯线上）
- 同期同学是真实可见的人（同城 networking → 互相投资 / 雇佣 / 收购）
- 嘉宾飞到主场跟学员吃饭（不是连线讲完就走）
- Demo Day 三城联合（罕见仪式感）

---

## 7. 招生策略（核心：不靠流量，靠鱼塘）

### 7.1 高客单价 cohort-based course 的招生公式

```
第一期生源 = JR 内部鱼塘老学员升级（70%）
            + 创始团队私聊邀请（15%）
            + 1-2 场 free webinar 漏斗（15%）

第二期起 = 第一期学员推荐 + 复购（70%）
        + 第一期 Demo Day case study 做内容（20%）
        + 新流量（10%）
```

### 7.2 内部鱼塘盘点（招生主战场）

| 鱼塘 | 量级（待运营确认） | 跟 OPC 课匹配度 |
|------|------------------|-----------------|
| AI Engineer Bootcamp 老学员 | 千级 | ⭐⭐⭐⭐⭐ |
| OpenClaw Bootcamp 老学员 | 百级 | ⭐⭐⭐⭐ |
| jiangren.com.au 中文站精准流量 | 万级月活 | ⭐⭐⭐ |
| 公众号 / 小红书既有粉丝 | 万级 | ⭐⭐⭐ |
| 历届 JR 训练营校友群 | 千级 | ⭐⭐⭐⭐ |

### 7.3 三阶段招生节奏

**Phase 1（开班前 8-10 周）— 内部精选邀请**
- 给 AI Engineer + OpenClaw 老学员发精准邀请邮件
- 创始团队 1:1 私聊邀请最对口的 30 人
- 目标：录满前 50% 名额（约 10-12 人）

**Phase 2（开班前 4-6 周）— 漏斗式公开**
- 三城各办 1 场免费 2h 线下《AI 一人公司诊断会》
- 现场填诊断表（你适不适合走 OPC）
- 转化率目标 10-20% 报名正课
- 目标：录满后 50% 名额

**Phase 3（开班前 2 周）— 补位**
- 老学员推荐 / waitlist 转化
- 关单：早鸟价截止前 push

### 7.4 五个降低招生门槛的杠杆

1. **首期定价低开高走** — 预售 $2,400（限 15 席 · 可付定金锁席）→ 首期早鸟 $2,800（满 15 后开放剩余席位）→ 第二期 $3,800。明说"首期为建立 case study，仅此一期"。
2. **退款保障** — "前两周不满意全额退款"（cohort 课标准条款，澳洲消费者法本来就保护）。
3. **奖学金 1-2 个名额** — 全奖给一个有故事的候选人（女性 / 已辞职 / 公开 build in public）。social proof，不是降价。
4. **推荐分成** — 老学员推荐成功 → 双方各 $500-800。澳洲华人圈是熟人社会。
5. **免费诊断会鱼塘建设** — 即使不报班也建立联系，二期、三期持续受益。

### 7.5 首期招生目标（保守）

```
墨尔本   22 人（主场，最易招）
悉尼     16 人
布里斯班  12 人
─────────────────────
合计     50 人
```

**首期不是收入产品，是 LTV 引擎**：50 人 × ~$2.5k 均价 ≈ ~$125k 收入（v0.4 阶梯），覆盖嘉宾费 + 三城场地 + 运营。真正产出是 5-8 个真实赚钱的毕业 case study + SOP——LTV 在第二期之后才能跑回来。

---

## 8. 定价策略

### 8.1 首期定价（case study price · v0.4 阶梯）

| 档位 | 价格 | 触发条件 | 包含 |
|------|------|---------|------|
| 🔥 **PRE-SALE** · 限 15 席 | **AUD $2,400** | 先到先得 · 可付定金 **A$1,000** 锁席 · 满 15 即关闭 | 11 周课程 + 三城线下 + 10 类 Faculty + Demo Day + 校友群 + 6 个月 Office Hour |
| **EARLY BIRD** · 首期早鸟 | **AUD $2,800** | 预售关闭后开放 · 首期剩余 3-10 席 | 同上（内容与预售档完全一致） |

明说"首期为建立 case study，价格只此一期。预售为首期最低价，可付定金锁席"。

**🚨 待 lightman 拍板**：
- ✅ 定金 = **A$1,000**（2026-06-19 拍板）
- 定金转全款规则（首期开班前几周补齐？）
- 预售期是否带时间截止（除"满 15 人"外加日期）

### 8.2 第二期起标准定价

| 档位 | 价格 |
|------|------|
| NEXT COHORT · 第二期 | **AUD $3,800** |

第二期起加视频面试 + 严筛 + 公布录取率。无早鸟/Standard/Premium 三档区分（v0.3 的 $4,800-$9,800 三档已废弃）。

### 8.3 学员 LTV 估算

```
首期学费                    $2,400-$2,800（v0.4）
后续课程（AI 团队扩张课等）   $3,000-5,000
推荐 2-3 人                  价值 $2-4k
校友网络 + 互相收购合作       价值无法量化但巨大
─────────────────────────────────────
单学员 5 年 LTV ≈ $15-25k+
```

---

## 9. JR 平台已有资源整合（必须复用，不重做）

设计课程时必须查看并整合已有资源生态：

### 9.1 InteractiveLab 复用清单（W2-W3 MVP 周）

| 资源 | 路径 | 复用到 |
|------|------|--------|
| Vibe Coding Lab 全部 | `/learn/vibe-coding/hub` | W2 MVP 周 |
| Prompt Lab 22+ 个 | `/study-center?tab=learn&mode=prompt-lab` | W1 选品（用 prompt 做用户调研） |
| Frontend Lab | InteractiveLab type=frontend | W2 |
| AWS Lab | InteractiveLab type=aws | W2-W3 部署 |

### 9.2 Wiki / Cheat Sheet 复用清单

| 资源 | 路径 | 复用到 |
|------|------|--------|
| Cursor / Claude Code / v0 cheat sheet | `/cheat-sheets/*` | W2 |
| ChatGPT / Claude / Gemini cheat sheet | `/cheat-sheets/*` | W1, W4 |
| Vibe Coding Hub | `/learn/vibe-coding/hub` | W2 |

### 9.3 Roadmap 复用清单

| 资源 | 状态 | 行动 |
|------|------|------|
| AI Solo Founder Roadmap | ❌ 不存在 | **新建**（W12 给学员发） |
| Indie Hacker Roadmap | ❌ 不存在 | **新建**（首期前完成） |

### 9.4 Skill 复用清单（marketing 教学内容）

| Skill | 用到哪节 |
|-------|---------|
| `seo-optimizer` | W6 SEO |
| `eeat-optimizer` | W6 GEO |
| `xhs-poster` | W4 中文内容机器（教学员怎么做小红书海报） |
| `mp-article` | W4（公众号文章生成） |
| `bootcamp-video` | W4（视频号短视频） |
| `blog-longform-writer` | W5 英文内容（Build in Public 长文） |
| `saiwen-qiaoyi-style` / `wushi-caijing-style` | W4-W5（写作风格参考） |

---

## 10. 嘉宾供应链（这门课能不能开 70% 取决于这）

### 10.1 必需嘉宾清单（开班前 2 个月必须确认）

| 嘉宾类型 | 用到哪节 | 数量 | 候选画像 | 预算/人 |
|---------|---------|------|---------|---------|
| 澳洲华人会计师 (CPA/CA) | W8 | 1 | 熟悉 small business + Pty Ltd，中文流利 | $500-1500 |
| Grant consultant | W9 | 1 | 帮 5+ 客户拿过 RDTI / EMDG | $1000-2500 |
| 本地 VC 投资人 | W11 | 2 | Blackbird / Square Peg / Antler / Startmate / AfterWork | 免费（他们想看 deal flow） |
| Indie hacker 中文案例 | W1 / W12 | 2-3 | $3k-30k MRR 的中文 indie，可远程连线 | $300-1000 |
| 澳洲华人创业 case study | W3-W12 穿插 | 3-5 | 已经做出 OPC 的澳洲华人 | $500-1000 |

### 10.2 嘉宾互利逻辑（为什么他们愿意来）

- **会计师 / Grant consultant**：高净值学员是他们的目标客户，来讲课直接拿 leads
- **VC**：澳洲华人 AI 创业者池子稀缺，他们想看 deal flow
- **Indie hackers**：曝光 + JR 平台流量 + 同期学员可能成为他们的客户

### 10.3 嘉宾供应链 TODO（运营动作）

- [ ] T-8 周：列出 3 个候选会计师 + 3 个候选 Grant consultant
- [ ] T-6 周：完成嘉宾 1:1 邀约 + 合作条款（费用 / 时长 / leads 分成）
- [ ] T-4 周：嘉宾内容大纲对齐（避免重复 / 互相 promote）
- [ ] T-2 周：嘉宾彩排 + 三城直播测试
- [ ] T-1 周：嘉宾出席确认 + 备份方案

---

## 11. 风险与失败模式

### 11.1 P0 风险（开班前必须解决）

| 风险 | 影响 | 缓解 |
|------|------|------|
| 嘉宾供应链没建立 | 课跑不起来 | 开班前 8 周开始铺嘉宾，2 个月不到位 → 推期 |
| 招生不足 < 10 人 | 三城跑不起来 | 内部 30 人精选邀请测水温，达不到 8 人意向 → 推期 |
| 三城场地没落地 | 卫星教室开不了 | 开班前 6 周确认三城场地长租 |
| AI 一人公司案例不足 | 课没有可信度 | 提前找 5-10 个澳洲/中国 indie hacker 案例 |

### 11.2 P1 风险（执行期会出问题）

| 风险 | 影响 | 缓解 |
|------|------|------|
| 学员中途辍学 > 30% | cohort 文化崩 | 申请制严筛 + 退款保障到 W2 末 |
| 毕业指标达成率低 | 无 case study 喂第二期 | W3 收钱挑战做强 + Tutor 1:8 紧盯 |
| OPC vs VC 路线模糊 | 学员搞错预期 | 招生页 + 申请表多次明示主轴 |


### 11.3 失败定义

如果出现以下任一，承认这门课失败、转向下一个产品：

- 首期招生 < 10 人（且不是因为推迟原因）
- 首期完课率 < 50%
- 首期毕业指标达成率 < 30%（达成 = 5/6 个硬指标完成）
- 净推荐值 NPS < 30

---

## 12. Phase 1 交付清单（开班前 12 周到开班）

### 12.1 内容交付物

- [ ] `outline.json` 完整 12 周大纲（≥ 60 个 lesson，含 Lab/Live/Self/Quest 各 type）
- [ ] 每个 lesson 有非空 description（≥ 100 字，按 §3 写法 — 不要 AI 味）
- [ ] 每个 Lab 是独立 lesson（铁律：不能塞在 step 里）
- [ ] 至少 30 个 lesson 绑定平台已有资源（Lab + Learn + Wiki ≥ 30）
- [ ] 嘉宾主讲的 4 节（W8/W9/W10/W11）有详细嘉宾 brief
- [ ] 毕业硬指标的 6 项验收清单
- [ ] 课程 cardDescription / promoDescription / highlights / suitable 完整
- [ ] FAQ ≥ 15 条（OPC vs VC / 澳洲身份要求 / 退款 / 三城选择 / 学完能干什么 等）
- [ ] bootcampSections 营销 section ≥ 5 个

### 12.2 营销交付物

- [ ] 首期 landing page (`curriculum/ai-solo-founder-bootcamp/public/curriculum.html`)
- [ ] phase1-12.html 各阶段详情页
- [ ] internal.html 内部资料（嘉宾名单 / 价格策略 / 招生话术）
- [ ] 申请表（Typeform / Google Form）+ 1:1 面试问题清单
- [ ] 给 AI Engineer / OpenClaw 老学员的精准邀请邮件文案
- [ ] 三城免费诊断会议程模板
- [ ] 小红书 / 公众号 招生海报（用 `/xhs-poster` skill 生成）
- [ ] 公众号长文 1 篇（用 `/blog-longform-writer` skill 生成）
- [ ] posters.html 注册（CLAUDE.md 强制规则 2）
- [ ] `.github/workflows/deploy.yml` 添加该 slug（CLAUDE.md 强制规则 1）

### 12.3 运营交付物

- [ ] 三城场地确认 + 长租合同
- [ ] 三城 Tutor 团队 brief + 培训
- [ ] 嘉宾名单 + 合作条款 + 内容大纲
- [ ] 直播 + 卫星教室技术测试
- [ ] Stripe / 学费收款 / 退款流程
- [ ] 学员系统（Slack / Discord / WeChat 群）
- [ ] 结业证书设计

### 12.4 时间线

```
T-12 周：PRD 确认 + slug 决定 + 嘉宾铺设启动
T-10 周：outline.json v1 完成 + 内部 30 人邀请启动
T-8 周：嘉宾确认 + 三城场地确认 + landing page 上线
T-6 周：三城免费诊断会启动（每城 1 场）+ 申请表上线
T-4 周：第一批申请面试 + 录取
T-2 周：补位招生 + 嘉宾彩排
T-0 ：W1 第一节课开始
T+12：Demo Day + 第一期校友群闭环
T+14：第一期 case study 提炼 + 第二期招生启动
```

---

## 13. Open Questions（需要决策才能进 outline.json）

| # | 问题 | 推荐答案 | 待决策方 |
|---|------|---------|---------|
| 1 | 中文名最终用哪个？ | "AI 一人创业营" | lightman |
| 2 | 首期开课日期 | 2026 Q3（嘉宾铺设需 2 个月） | lightman + 运营 |
| 3 | 三城主场轮换 vs 墨尔本固定 | 墨尔本固定主场（首期降低复杂度） | lightman |
| 4 | 首期定价档位 | v0.4: $2.4k 预售（15 席）/ $2.8k 早鸟 / $3.8k 二期（v0.3 的三档已废弃） | lightman |
| 5 | VC fireside chat 是否做 | 做（W10 选修，2 个 VC） | lightman |
| 6 | 申请录取目标 | 50 人 / 录取率 30-50% | lightman |
| 7 | 退款窗口 | 到 W2 末（前 2 周满意承诺） | lightman + 法务 |
| 8 | 嘉宾费用预算上限 | $8k-12k 全期（4 嘉宾 × 平均 $2-3k） | lightman + 财务 |
| 9 | 海外华人能不能报？ | 可以但明说 W7-W9 跟你无关，价格不变 | lightman |
| 10 | 复制到加拿大/英国/新加坡的优先级 | 加拿大 > 新加坡 > 英国（华人密度） | lightman（这个可以晚点定） |

---

## 14. Next Steps（PRD 通过后立即做）

1. **lightman 决策 §13 的 10 个 Open Questions**
2. Claude 起 `outline.json` v1（基于 §5 课表 + §9 资源整合）
3. Claude 写 `curriculum.html` + `phase1.html`-`phase12.html`
4. Claude 加 `posters.html` 注册 + `deploy.yml` 配置
5. lightman + 运营启动嘉宾铺设（4 个嘉宾类型并行）
6. lightman + 运营从 AI Engineer / OpenClaw 老学员里手工挑 30 人发精准邀请测水温

---

**文档版本**: v0.1
**下次更新**: lightman 决策 Open Questions 后 → v0.2
