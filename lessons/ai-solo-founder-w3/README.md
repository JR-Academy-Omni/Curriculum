# W3 · 这是不是一门好生意

AI 一人创业营 W3 正课投屏 deck。32 张，3 小时（**2026-08-23 周日 14:00–17:00** 悉尼时间）。

**讲师**：Stan Luo — Head of Engineering, Kindling (AirTree portfolio) · Ex Principal Software Engineer, McKinsey
**对应 lesson**：`outline.json` → `L09`（180min，`isLive: true`）
**配套自学**：`L10` 选品决策矩阵（60min）+ `L11` 一页商业验证报告（60min，**W3 过关物**）

> ⚠️ **本期 W3 / W4 排期对调** —— W4「把想法做出来」已于 08-16 先上，本节（W3）排在它后面。
> deck 的 S03 路线页、S04 定调页、S31 下周预告都按对调后的顺序写；`outline.json` **未改动**（沿用 W4 deck 的既定处理：只换排期，不动大纲）。

---

## 这节课在讲什么

**主题是「算账」，不是「做东西」。** 今天全程不产出任何对外物料，只产出判断。

学员在 W1 锁了方向，W2 让 agent 跑了调研 + 做了 5 场访谈，W4 已经把东西做出来了 ——
**W3 是唯一一次有人逼着他们冷静算这笔账。**

一句话定位：把 idea 从「我觉得有戏」变成「我算过，它这样才赚钱，风险在这两处」。

**三种结论都合格：继续 / 调整 / 换。** 唯一不合格的是三小时之后还写「再看看」。
deck 在 S04 / S29 / S32 三处反复点这条，别让学员以为今天是来挨批的。

**讲法**：沿用 W4 的大白话口径。`TAM / unit economics / churn / anchor / MRR` 这类行话第一次出现时用括号给中文注释，能不用就不用（例：「订阅」不写 SaaS 订阅制、「先免费再收费」不写 Freemium 当标题）。班上有律师 / 会计 / 医生 / 咨询背景、不写代码但专业积累很厚的学员。

---

## 跑起来

```bash
cd curriculum/lessons/ai-solo-founder-w3
bun install
bun run dev      # → http://localhost:5173/
bun run build    # 上线前必须过
```

翻页 `← →` · 全屏 `F` · 摄像头 `V` · 直达某页 `?page=N`

> 📌 本机验证时用的是 `npm`（当前环境没装 bun）。`bun.lock` 从 `ai-solo-founder-w4` 复制而来——两个 deck 的依赖集完全相同（已逐项比对），CI 的 `bun install` 走的就是这份。装了 bun 的机器上跑一次 `bun install` 可重新生成属于本 deck 的锁文件。

---

## 🔴 上台前必须做的四件事

1. **确认讲师对外署名（S01 封面）**
   `TEACHERS.md` 的原始资料写的是 "ex **principle** software engineer"，正确拼写是 **Principal**；
   而且**能否实名、是否露出 Kindling** 都没跟本人确认过。
   封面现在写的是 `Stan Luo · Ex-McKinsey`。**上台前找本人过一眼**，要改就改 `S01_Cover.tsx`。

2. **课前定好上台被拆的 3–4 位学员（S19–S20）**
   step ④ 是这节课的卧槽点，占 35 分钟。**不能现场临时抓人** ——
   要提前通知，让他们按 S19 的三句话准备 3 分钟。没人上台，这 35 分钟就散了。

3. **补上本节主场城市（S01）**
   封面现在写「三城线下 + 同步直播」。`cohort-01/STATE.md` 没记 W3 主场在哪，定了就填进去。

4. **落实混合班 Tutor 排班**
   `TEACHING_QUALITY_SOP.md` 硬性要求：**线下现场必须配 Tutor 专门接个案，老师专注对镜头讲主线；每 20–30 分钟点一次线上学员。**
   W1 / W2 的差评根子都在这条没落实（「非授课城市全程参与不到」「线上整节课无进度」）。
   deck 已经在 S04 底部写死了这条规矩（「线上的同学：每讲完一段我会点名问你们」），**但规矩要人执行**。
   本节每章末页都留了自然的点名口：S07 / S11 / S17 / S21 / S26 / S29。

---

## 内容来源

| 来源 | 用在哪 |
|---|---|
| `../../ai-solo-founder-bootcamp/public/outline.json` → **L09** | **主来源**。六个 step 的标题 / 顺序 / 内容逐条落到 CH1–CH6，**没有自创环节**；三件套与「现场过关」逐字取用 |
| 同上 → **L10 / L11** | S27–S29 一页报告四段结构与裁决口径、S30 本周任务 |
| `../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md` | S03 十五周路线、S31 下周主题 |
| `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` §1.2 | S21 SoT 六个业务字段（客户 / 问题场景 / 现有做法 / 方案缺口 / 初步交付 / 验证动作） |
| `../../ai-solo-founder-bootcamp/TEACHERS.md` | S01 讲师署名 |
| `../../ai-solo-founder-bootcamp/cohort-01/STATE.md` | 日期 08-23、上课时间、W3/W4 对调、混合班要求 |
| `../../ai-solo-founder-bootcamp/HANDOVER_DECKS.md` §2.3 / §4.1 | 内容红线、中段 30min Founder Exchange |
| `../ai-solo-founder-w4/` | 引擎与视觉语言（`DeckTable.tsx` 逐字复用）、S03 路线页、S18 Exchange 页的既定形态 |

---

## 🚨 红线（照抄 HANDOVER_DECKS.md §2.3）

- **deck 内不出现任何具体金额、转化率、市场规模或案例收入。** 这一节教的是算账方法，数字由学员现场填。
  - S08 七条变现路径：大纲要求「逐条给客单价区间」但**没给数字**，deck 不编 —— 客单价一列做成留白
  - S10 反推表：数字是**当场的除法结果**（目标 ÷ 客单价），页面上明写「这一页是算术，不是承诺」
  - S23 Freemium 转化率 1–5%、S25 早鸟 30–50%：来自 outline 原文，deck **标注为课程大纲的经验区间，不印成结论**
  - S30：L10 原文的「6 个月内能否做出 $1k MRR」按不承诺金钱结果的红线改述为「半年内能不能做到第一个收入目标」
- **一个案例都没写。** `W1_CASE_STUDIES.md` 不在本仓库，来源无从核对 → 宁可空着，由讲师现场口述自己经手过的。
- 不承诺金钱结果 ✓ · 不给法律 / 税务意见 ✓（留到 W7 / W13）· 不提任何人的族裔 ✓ · 无编造人名公司名 ✓
- 有数据或有出处的页面**全部带 `SourceNote` 出处条**（共 22 页）。

---

## 结构

| 页 | 时间 | 章节 | 内容 | 对应 outline step |
|---|---|---|---|---|
| 1–4 | 14:00 | **CH0 开场** | 封面 / 今天带走三样 / 15 周路线（高亮 W3）/ **今天怎么走 + 三种合格结论** | — |
| 5–7 | 14:10 | **CH1 顾问视角** | 顾问的三个动作 / 三种自我欺骗 / **证据梯度 L0–L4** | ① |
| 8–11 | 14:25 | **CH2 变现 + 算式** | 七条变现路径 / 赚钱算式 / **$1k·$10k 反推表** / 单量从哪来 | ② |
| 12–17 | 14:50 | **CH3 四把尺子** | 总览 / 市场规模 / 竞争 / **单位经济（两套贡献）** / 护城河 / **现场打分** | ③ |
| 18 | 15:10 | **中场** | Founder Exchange 30min | §4.1 固定环节 |
| 19–21 | 15:40 | **CH4 现场拆 idea** | 上台规则 + 三层追问 / **台下十问答题卡** / 想改方向怎么办 | ④ LIVE |
| 22–26 | 16:15 | **CH5 形态 + 定价** | 形态四选一 / 定价五选一 / 三维决策 / 价格 anchor / **组合挑错 + W7 收款映射** | ⑤ |
| 27–29 | 16:35 | **CH6 写裁决书** | 四段结构 / **现场 20min 动笔** / 继续·调整·换 | ⑥ |
| 30–32 | 16:55 | **CH7 收尾** | 本周两份作业 / 下周预告 / 过关线 | — |

**时间口径说明**：`outline.json` L09 六个 step 相加正好 180min，**没给中段 30min Founder Exchange 留位置**。
按 `HANDOVER_DECKS.md` §4.1（Lightman 2026-08-01 定案），本 deck 把六个环节按比例压到 140min，Exchange 占 30min，开场收尾 10min。
**环节顺序与内容与 outline 完全一致，只压缩时长。** step ⑥（原 35min）现场只写 20min，余下落到课后 L11（60min 自学，本来就是 W3 过关物）。

---

## 复用的引擎

`SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts` / `main.tsx` **逐字从 `lessons/_template` 拷贝，未改动**（已与 `ai-solo-founder-w4` 逐文件 diff 确认一致）。
`DeckTable.tsx`（含 `SlideHead` / `Punchline` / `SourceNote` / `FitBox` / `Body`）从 `ai-solo-founder-w4` 复用，未改动 —— 保证系列内视觉一致。
**本 deck 新写的只有内容层**：`App.tsx` + 32 个 `slides/*.tsx` + `PRD.md` + 本文件。没有 `data/*.ts` 和 `research/`（原因见 `PRD.md` §6：这节课没有需要外部引用的市场数据）。

技术栈锁死：React 19 + Vite + framer-motion + inline style，仅 3 个依赖。视觉走 Register B Neo-Brutalism。

---

## 当前状态

- ✅ `bun run build` 通过（`tsc -b` 无错，455 modules）
- ✅ **32 页逐页实测：FitBox scale 全为 1**，没有一页需要压缩 —— 投屏不会出现小字
- ✅ 32 页逐页实测：无内容被裁切，无元素超出 1600×900 画布
- ✅ 已登记 `curriculum/lessons.html`
- ✅ 已接入 `.github/workflows/deploy.yml`（Build + Assemble 两处）
- 🔴 讲师对外署名待本人确认（Principal 拼写 / 能否实名）
- 🔴 上台被拆的 3–4 位学员待课前指定
- 🔴 本节主场城市待补
- 🟠 S31 下周预告按 W5「立起你的品牌门面」写 —— 但 **W4 那节已经把品牌规范 / logo / 网页讲过一轮**，W5 的具体切入点需 Lightman 确认；页面已用「W4 已经动过手的同学：这次是把它对齐到今天的裁决结果」留了口子

### 与 W4 deck 的一处刻意差异

W4 的 `S03_Roadmap15Weeks` 里 W3 那格写的是「有人真的需要吗 · 访谈真实客户」——那其实是 W2 自学（`L08` 跟 5 个目标用户做 30min interview）的动作。
本 deck 把 W3 那格改成了「**这是不是一门好生意 · 算清楚它到底赚不赚钱，写下继续、调整还是换**」，与 `outline.json` L09 一致；其余 14 周文案与 W4 完全相同。
另加了「已上」标记（W1 / W2 / W4）。
