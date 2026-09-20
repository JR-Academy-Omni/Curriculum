# 交接文档 · AI 一人创业营讲课 Deck(给 Codex)

> **接手人要做的事**:照 W1 已建好的 deck 为范例,把 **W2–W15 共 14 节课的讲课 PPT** 做出来。
> 本文档写于 2026-08-01,W1 于 2026-08-02 首讲。

---

## 0. 一句话背景

AI 一人创业营 = 15 周课程,**每周日 14:00–17:00 三小时线下课**(墨尔本主场 + 悉尼/布里斯班卫星教室 + 同步直播)。
W1 当前为 45 张 slide 的 React+Vite deck，主题是《搭起你的创业 AI OS》。封面和本节目标之后先讲创业营为什么存在与共同纪律，再展示课程全景、Go To Market / Founder Club 详解、阶段成果、每周 Skills 与时间投入。Phase 2 统一叫 **Go To Market**；除 W8–W11 四周主课外，**AI 视频实操陪跑**与**小红书图文诊断室**是两节独立的 90 分钟线上课，不得缩写成 W8 的两个功能点。W9 还包含用 AI 准备英文媒体、Podcast 与 Founder feature 外联。Phase 4 统一只叫 **Founder Club**，并单独讲资金来源与投资形式、Pitch / Data Room / Investor Update、实体与股权结构、IP / 合同和治理税务准备、Traction / Investor 两条 Track、Intro Desk 规则，以及毕业后的 Salon、Mastermind、Office Hour、互为客户市场和 30 / 60 / 90 天行动计划；这些是决策教育，不替代律师、会计师或持牌专业人士，也不保证融资、订单或引荐结果。教学链为“知道为什么现在就行动 → 看清 15 周路线 → 理解创业的价值交换 → 缩到 Beachhead Market → 找到可验证的问题 → 写 Opportunity Card → 理解 SoT / 为什么需要 SoT / LLM 为什么依赖 SoT → 看到每类 SoT 对应的 AI Skill → 升级为 Business SoT v0.1 → 搭 Founder Workspace → 调用 Weekly Skill → 人工检查 → 把新证据写回 SoT”。**W2–W15 必须沿用这条 Founder OS 闭环，不重新建立另一份业务真相。**

---

## 1. 范例:W1 deck 在哪、长什么样

### 1.1 位置
```
curriculum/lessons/ai-solo-founder-w1/
├── package.json          # React 19 + Vite + framer-motion,依赖只有这三个
├── vite.config.ts        # base: '/curriculum/lessons/ai-solo-founder-w1/'
├── index.html
├── README.md             # 来源对照表 + 上台前红线清单
├── public/logo-zh-full.svg
├── public/product-validation-path.png
└── src/
    ├── App.tsx           # 把 slides 按顺序组装进 SlideEngine
    ├── main.tsx
    ├── styles/theme.ts   # 颜色/字体常量
    └── components/
        ├── SlideEngine.tsx   # 翻页引擎(← → 翻页 / F 全屏 / V 摄像头 / ?page=N 直达)
        ├── CameraBubble.tsx
        ├── ui.tsx            # 共享组件 + FitBox(防止内容超高被裁)
        └── slides/           # 一文件一页
            ├── S01_Cover.tsx
            ├── ...
            └── S23_Closing.tsx
```

### 1.2 本地跑起来
```bash
cd curriculum/lessons/ai-solo-founder-w1
bun install
bun run dev      # → http://localhost:5173/
bun run build    # 上线前必须过
```

### 1.3 W1 当前 45 张 slide 顺序

| # | Slide | 作用 |
|---|---|---|
| S01 | Cover | 封面 |
| S02 | Takeaways | **今天你会带走什么**(产出 + 验收标准) |
| S02c | BootcampPurpose | 有无 Idea 都立即行动；公开内容窗口、每周互评、收入覆盖学费的经营目标（不作收益保证） |
| S04 / S05 / S04c / S06 | Course Overview | 15 周路线、阶段成果、每周 Skills、时间投入；Phase 2 = Go To Market，Phase 4 = Founder Club |
| S04e | GTMFounderClub | 单独讲清 W8–W11 四周主课、两节独立 90 分钟线上课，以及 W14–W15 Demo Day、双展示路径和毕业后 Founder Club |
| S04f | FounderClubFunding | 资金形式、投资材料、Data Room、企业实体、股权、IP、合同与治理准备；明确专业建议边界 |
| S04g | FounderClubTracks | 学院与 Founder Club 分工、Traction / Investor 两条 Track、Intro Desk 流程与不保证融资边界 |
| S04h | FounderClubAftercare | Salon、Mastermind、Office Hour、互为客户市场与毕业后 30 / 60 / 90 天行动计划 |
| S02a–S02b | BusinessForms / Entrepreneurship | 产品、服务与现有生意均适用；创业是反复完成价值交换 |
| **S03–S03c** | **Startup / WorthSolving / Cases / Sources** | **创业误区、值得解决的问题、两个真实起点与四个机会入口** |
| **S03f / S03k / S03i / S03j** | **Scan / Evidence / Filter** | **用证据梯度、评分表和三道硬门槛留下一个本周验证方向** |
| **S04b** | **ProductValidationPath** | **客户与场景 → 真实问题 → 最小交付 → 付费证据 → 复购与推荐 → Scale**（实际第 14 页） |
| **S04d** | **ProductOnlyValidationPath** | **产品型项目分支；Problem / Opportunity 起步，技术风险存在时才需要 PoC** |
| S16 / S16b / S12 / S12b / S16d | Opportunity Card | 六个字段、写法、会计与装修案例、20 分钟独立写卡 |
| S09 | Founder Exchange | 中段 30 分钟；同伴复述并挑战最薄假设 |
| S10b–S11 | Why SoT / What is SoT | 写完机会卡后再解释为什么要成为唯一当前版本 |
| **S11b / S11f / S11c** | **SoT Control / Anatomy / Loop** | **业务核心 + 管理层；SoT 如何控制任务、AI、证据和版本** |
| **S11d–S11e** | **SoTQuiz / Answers** | **4 道现场情境题与答案解析** |
| S19 / S19b | Personal AI OS / 15-week reuse | Founder Workspace + SoT + Weekly Skills + Human Review；以后每周从同一个 Workspace 继续 |
| S20 / S20b / S21 | Load SoT / Skill / First Task | 载入 SoT、理解 Skill、完成第一项真实任务 |
| S21c / S21b | Human Boundary / Evidence States | 人机责任与数据边界；写完、跑过、市场证据不能混为一谈 |
| S22 | NextWeek | 统一 5 位用户 / 3 个案例 / 3 种替代 / 一条付费证据 |
| S23 | Closing | 过关线 |

> 课程全景固定放在前部：先让学生知道 15 周会走到哪里，再进入 W1 的创业、SoT 与个人 AI OS 动作链。

---

## 2. 🔴 做 W2–W15 deck 前必须知道的规矩

### 2.1 技术栈锁死(`curriculum/CLAUDE.md` 铁律)
- ✅ React 19 + Vite + framer-motion + **inline style**
- ❌ **禁止** Next.js / React Router / styled-components / Tailwind / CSS Modules / 任何 UI 组件库 / axios
- 每个 deck 只有 3 个依赖:`react` `react-dom` `framer-motion`

### 2.2 视觉规范:讲课 deck 用 **Register B · Neo-Brutalism**
- 3px 黑边 + 直角 + `box-shadow: 6px 6px 0 #000` 硬阴影
- 暖底 `#fff1e7`
- 字体:Bricolage Grotesque(标题)/ DM Sans(正文)/ Space Mono(数据)/ Noto Sans SC(中文)
- 字号一律用 `clamp()`;1600×900 固定画布
- ⚠️ **这是讲课 deck,用 Register B 是对的**。官网页面才用 Register A 精致软风,别搞混
- **必须用 `FitBox`**:内容超高时整块等比缩,投屏不会被裁

### 2.3 🚨 内容红线(违反会在讲台上穿帮)
- **禁止编造**:人名、公司名、收入数字、案例细节、法条。没有来源就标「待补」
- **每张有数据的 slide 底部必须有来源条**
- **不给法律/税务意见**:涉及合同、公司结构、税务的 slide 必须明写「这是提醒你去问专业人士,不是法律建议」
- **不承诺金钱结果**:不许出现「保证赚 / 月入 X / 包就业」
- **禁 AI 味模板腔**:不许「在当今快速发展的」「深入探讨」「全面掌握」「至关重要」「无论你是初学者还是」
- **不许说任何案例人物是华人** —— 已核实:公开资料里找不到一个确认的「澳洲+华人+公开收入」案例(见 `W1_CASE_STUDIES.md` §A.9.2)

### 2.4 平台强制登记(`curriculum/CLAUDE.md`)
**每做一个新 deck,必须在同一次修改里更新 `curriculum/lessons.html`**,加登记卡片(标题/技术栈/讲师/时长/slide 数/入口链接/源码链接/状态)。没登记 = 以后没人找得到。

---

## 3. 每节课的内容来源(**只用这些,不要自己发挥**)

| 来源 | 用途 |
|---|---|
| **`curriculum/ai-solo-founder-bootcamp/W{n}_RUNSHEET.md`** | **主来源**。W1–W7 各一份完整教案,含逐环节详案、时间表、台词、坑位 |
| **`W8-W15_RUNSHEETS.md`** | W8–W15 的精简教案(一个文件装 8 周) |
| **`public/outline.json`** | 机器大纲。每周现场课的 lesson code:W2=`L05` W3=`L09` W4=`L12` W5=`L21` W6=`L23` W7=`L26` W8=`L29` W9=`L34` W10=`L54` W11=`L39` W12=`L42` W13=`L45` W14=`L50` W15=`L52`；周中 SEO & GEO=`L37`。**每节现场课的 steps 里有真实的环节标题+时长+内容,照它做,别自己编环节** |
| **`COURSE_REDESIGN.md`** | 整门课 15 周单一真相(周名/Phase/产出/嘉宾) |
| **`W1_CASE_STUDIES.md`** | 案例库(1534 行,含 10 个澳洲案例),**每个案例都标了来源和可信度**,用之前先读它的红线 |
| **`W2_AGENT_ROUTES.md`** | W2 专用:四条 agent 路线(Claude Code / OpenClaw / Hermes / Codex)的真实定价与系统要求 |
| **`PRICING_SOT.md`** | 价格唯一真相:**$3,800 标价 / $2,800 促销**。其它数字别用 |

---

## 4. 🔴 每节课的固定结构(Lightman 定案)

### 4.1 每次课中间有 30 分钟交流活动
> **2026-08-01 Lightman 明确:「每次课中间半小时交流活动」**

- **位置:课程中段**(不是开场)。⚠️ 注意:现有的 `W2_RUNSHEET.md` ~ `W7_RUNSHEET.md` 里把它排在**开场**,**以本条为准,需要改**
- **时长 30min**
- **内容**:1-2 人上台讲这周进展 + 围绕 ta 的 networking;**组队也在这个环节发生**(W2 首次)
- **W1 也执行**：第一周交流方向、卡点和可提供的帮助；W2 起带真实进展与产出交流
- 做 deck 时:这 30min 要在时间表 slide 上体现出来

### 4.2 每周三件套(每套 deck 的 S02 都要有)
每周的「**本周真实动作 / 本周产出 / 卧槽点**」——这三样在 `outline.json` 每节现场课的 `description` 里有原文,**逐字取用,别改写**。

### 4.3 W1 课程全景放在最前面
W1 在本节目标之后先讲创业营目的，再展示 15 周路线、Go To Market / Founder Club 详解、阶段成果、每周 Skills 与时间投入。W2–W15 可按当周教学需要保留缩略版，但 Phase 名称与周安排必须一致。

---

## 5. 已知的待办与冲突(接手人要注意)

### 5.1 🔴 每套 deck 都会遇到的空缺

| 空缺 | 说明 |
|---|---|
| **AI OS 的 5 个具体方案名** | W1 deck 里只列了选型维度,没写死方案名(待 Lightman 拍板) |
| **Ray(微软)的 title / 团队 / 年限** | W6 嘉宾,repo 里只有「Ray(微软)」。**不许编真人履历** |
| **Stan(麦肯锡)的全名 / 能否实名** | W3 + W14 嘉宾,同上 |
| **W13 持牌 CPA / Grant consultant** | 嘉宾未定,W13 有 74 分钟直接落空 |
| **W14 投资人 fireside 2 位** | 未定 |
| **DeepRouter** | `deeprouter.ai` 目前是「Launching Soon」邮件收集页,**学员自助注册不到**。pre-work 却在推荐它 —— 待 Lightman 决定撤下还是改成「课程统一发额度」 |
| **W2 的 3 个 Agent Schedule 录播** | W2 教案的取舍方案依赖「其余 3 个案例走录播」,**录播不存在** |

### 5.2 🟠 文档间的已知冲突(做 deck 时以哪个为准)

| 冲突 | 以哪个为准 |
|---|---|
| networking 在**开场**还是**中段** | **中段**(§4.1,Lightman 2026-08-01 定案)。runsheet 里写「开场」的需改 |
| W15 Demo Day 时长 180min vs 510min | 实际是**全天**(路演 240 + 对接 90 + 晚宴 180),outline 按 180 统一记是口径问题 |
| 价格 | **`PRICING_SOT.md`**,$3,800 / $2,800 |
| 每周时长 | **约 6 小时/周**(已在 outline.json 修正统一) |

### 5.3 OpenClaw Windows 支持口径打架
官网说 Windows 原生支持(`install.ps1` + Hub App),但平台自己三门课写「原生跑不了,必须 WSL2」。**W2 deck 涉及这个,做之前需要实机验证给一个答案**(见 `W2_AGENT_ROUTES.md`)。

---

## 6. 建议的工作顺序

1. **先做 W2**(下周就要用)—— 内容源 `W2_RUNSHEET.md` + `W2_AGENT_ROUTES.md` + outline `L05`
2. 再做 W3(⭐Stan 嘉宾课,有嘉宾协作的特殊安排)
3. 之后按周推进 W4→W15
4. **每做完一套**:`bun run build` 过 + 登记进 `curriculum/lessons.html` + 更新根 `CHANGELOG.md`

**命名规范**:目录 `curriculum/lessons/ai-solo-founder-w{n}/`,`vite.config.ts` 的 `base` 改成对应路径。

---

## 7. 部署(做完之后)

curriculum 是静态站,**push 到 main 自动部署**(GitHub Actions)。
新 deck 目录必须接进 `.github/workflows/deploy.yml` 的 Build 与 Assemble 步骤，否则线上 404。W1 已接入，后续 W2–W15 仍须逐套登记。

---

## 8. 附:W1 deck 当前状态

- 🟡 当前 45 张 slide；创业营目的与课程全景八页已置于开场，随后理解创业与选择业务方向，再完成 Business SoT v0.1，最后搭 Founder Workspace 并跑通 SoT → Skill → 人工检查 → 新证据闭环
- ✅ 本地 `http://localhost:5173/` 可访问
- ✅ 已登记进 `curriculum/lessons.html`（状态：Production Published）
- ✅ 所有案例带来源条,无编造内容
- ✅ 已接入 `deploy.yml` 的独立构建与 Assemble 路径
- 🟡 当前部署状态以 GitHub Actions 与公开 URL 回读为准
