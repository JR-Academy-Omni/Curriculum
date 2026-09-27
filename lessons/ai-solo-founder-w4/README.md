# W4 · 把想法做出来

AI 一人创业营 W4 正课投屏 deck。31 张，3 小时（周日 14:00–17:00）。

**本节在布里斯班主场讲**（封面已改，不再写墨尔本主场 / 三城卫星）。Beerops 也是布里斯班要办的活动。

> ⚠️ **Beerops ≠ AI 圈线下活动**，是两个不同的东西。不要把 `jr-academy-memory/events/ai-circle-brisbane.md` 里的人群调研 / 选址 / 数据套到 Beerops 上——那份文档是给 AI 圈 meetup 写的。Beerops 的定位、人群、场地目前**全部未知**，deck 里一个字都没填。

**主题是「用 AI 把一个想法做成能给人看的东西」，不是「怎么办活动」。**
Beerops（一场真要办的活动）只是今天走一遍流程用的例子——用真项目是因为假案例学不到东西。
学员换成自己的产品 / 服务 / 生意，流程完全一样。这条定位在 S01 / S04 / S05 / S06 都点了一遍，别再让例子盖过主题。

**讲法**：全程大白话。PRD / Design System / 部署 / landing page 这些行话一律降级成括号里的附注，主语用人话（「一份写清楚的说明」「一套定死的样子」「一个能打开的网页」）。第 8 页是专门的术语翻译表——听不懂随时翻回去。品牌那一章按学员熟悉的 **VI / 设计规范 / branding** 讲，不用「Design System」这种互联网产品黑话（创业者和专业人士听得懂前者）。这是给律师 / 会计 / 医生 / 咨询这类不写代码但专业积累很厚的学员定的调子。

> ⚠️ **本期 W3 / W4 排期对调** —— 本周上 W4（先做出来），下周上 W3（再验证值不值得做）。
> deck 的 S24「下周预告」已经按对调后的顺序写；outline.json **未改动**（按用户决定：只换排期，不动大纲）。

---

## 跑起来

```bash
cd curriculum/lessons/ai-solo-founder-w4
bun install
bun run dev      # → http://localhost:5173/
bun run build    # 上线前必须过
```

翻页 `← →` · 全屏 `F` · 摄像头 `V` · 直达某页 `?page=N`

---

## 🔴 上台前必须做的三件事

1. **补 Beerops 那一句话（S04，第 4 页）**
   页面上现在是灰色占位「（现场口述：办给谁 · 解决什么 · 什么形式）」。
   要么上台前把这句写进 `src/components/slides/S04_TodayTarget.tsx`，要么现场口述——
   但**必须真的说出来**，因为后面八个 Codex 断点全部依赖它。这句含糊，整节课会散。

2. **八个 LIVE 断点先自己跑一遍**
   八个 prompt 都是可以直接复制的，但**没有在真实 Codex 里验证过**。
   上台前至少跑一遍断点①（写说明）、⑦（招商方案）和⑧（做网页），
   确认模型行为符合 deck 上写的验收标准。跑出来不对，改 deck 上的 prompt，别现场硬顶。

3. **准备 fallback 截图**
   每个断点页右下角都有「卡住了怎么办」，但最保险的还是提前把八步的产出各截一张图。
   现场 demo 翻车是常态，不是意外。

---

## 内容来源

| 来源 | 用在哪 |
|---|---|
| 本次课由 Lightman 重新定义（2026-08-15） | 整体主线。**未取自 `outline.json` 原 W4 description**（原文是交付物清单 / 报价单方向，与本次内容不同） |
| `../../ai-solo-founder-bootcamp/W1_RUNSHEET.md` | SoT 方法论（S08 承接 W1） |
| `jr-omni/orientation-festival/` | 活动五阶段流程（S06，新生节三城实际落地） |
| `jr-academy-memory/events/` | 运营口径（24h 首触、consent 三 touchpoint、到场率约 50%） |
| `.claude/skills/offline-event-sop/SKILL.md` | 第 6 页活动时间线，逐条取自内部「T- 倒计时清单」（T-4 周 → T+7），不是自己推的 |
| `../../ai-solo-founder-bootcamp/public/outline.json` | S24 下周预告（W3 = L09 的六个环节） |

---

## 🚨 红线（照抄 HANDOVER_DECKS.md §2.3）

- **Beerops 的活动细节（日期 / 场地 / 规模 / 合作方）deck 里一个字都没写死** —— 因为还没定。
  现场也不要编，没定的就说没定，这本身就是 SoT「没定写 TBD」那一课的示范。
- 不承诺金钱结果 / 不给法律税务意见 / 不提任何人的族裔。
- 有数据的页面必须有来源条（S06 / S07 / S22 已加 `SourceNote`）。

---

## 结构

| 页 | 章节 | 内容 |
|---|---|---|
| 1–4 | CH0 开场 | 封面 / 今天带走什么 / 15周路线（高亮 W4）/ 今天的靶子 Beerops |
| 5–7 | CH1 拆解 | 五阶段 / AI 与人的边界 / **术语翻译表** |
| 8–9 | CH1 续 | 把事情写清楚（含 PRD ≡ SoT 说明）/ **🔴断点① 写说明** |
| 10–16 | CH2 做品牌 | 为什么先说好 / 品牌要定的六样 / **🔴② 品牌规范** / **🔴③ logo** / **🔴④ 吉祥物** / **🔴⑤ 周边** / 四个检查 |
| 17 | 中场 | Founder Exchange 30min |
| 18–23 | CH3 门面 | 首屏三件套 / 禁用词 / **🔴⑥ 网页** / 上线四步 / **一份说明出全套（6 样交付物）** / 改一处全部变 |
| 24 | CH4 执行 | 报名→签到→跟进链路的自动化边界 |
| 25–27 | CH5 收尾 | 本周任务 / 下周预告（W3）/ 过关线 |

时间轴：14:00 开场 → 14:15 拆解 → 14:50 品牌 → **15:20 中场交流 30min** → 15:50 landing → 16:35 执行 → 16:50 收尾 → 17:00 结束。

---

## 复用的引擎

`SlideEngine.tsx` / `ui.tsx` / `DeckTable.tsx` / `CameraBubble.tsx` / `theme.ts` 全部从 `ai-solo-founder-w1` 复制，未改动。
本 deck 新增 `CodexRun.tsx` —— 八个 LIVE 断点共用的「演示夹层」组件（左边 prompt、右边验收清单 + fallback）。

技术栈锁死：React 19 + Vite + framer-motion + inline style，仅 3 个依赖。视觉走 Register B Neo-Brutalism。

---

## 当前状态

- ✅ `bun run build` 通过（450 modules）
- ✅ 31 页全部渲染，**FitBox scale 全为 1**（逐页实测，没有一页塞到需要压缩，投屏不会出现小字）
- ✅ 最长的 prompt 页（断点⑤）实测不溢出（bottom 792 < 视口 900）
- ✅ 已登记 `curriculum/lessons.html`
- ✅ 已接入 `.github/workflows/deploy.yml`（Build + Assemble 两处）
- 🔴 Beerops 一句话定位待补
- 🔴 八个 prompt 未在真实 Codex 验证
