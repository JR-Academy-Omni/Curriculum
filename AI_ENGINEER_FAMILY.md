# AI Engineer 产品线 · 家底盘点（初稿）

> 🔗 **先看这个**：产品「卖什么、多少钱、谁教、在哪买」的真相源是 **[`AI_ENGINEER_PRODUCT_CATALOG.md`](./AI_ENGINEER_PRODUCT_CATALOG.md)**（Ada 2026-08-12 整理，20 个产品全量，含 7 个本仓库没有目录的在售产品）。本文件只讲**结构判断**（谁主谁辅、怎么排阶梯、缺什么）。价格 / 链接 / 师资一律以 CATALOG 为准。
>
> ⚠️ **2026-08-12 更正**：初稿把「入门课线上买不到」列为 P0，**该判断有误** —— 入门课在售（`/program-course/ai-engineer-rag`，$299）。初稿测的是从 `outline.json` 内部 slug 拼出的中文路由，不是对外真实路径。相关段落已改。
>
> **状态：初稿，待 Ada 复核 → Lightman 拍板。**
> 生成日期：2026-08-12 ｜ 生成人：Claude（受 Ada 委托）｜ 派单来源：`jr-omni/team-log/worklog/Ada/2026-08-11.md`
> 本文只做**第①步「盘清家底」+ 第④步「缺口清单」**。第②步（谁主谁辅、谁合并谁砍）已给出**建议**，标 🟡 的必须 Lightman 拍板后才能落为定论。
> 数据来源：各目录 `public/outline.json` / `prod-state.json` / `DESIGN.md` / git log（截至 2026-08-12），线上状态取自 jiangren.com.au 公开页面。**未接后台数据库，后台真实上架状态需 Ada 登录核对。**

---

## 一、这条线上到底有几样东西

派单里列了 5 个目录，**仓库里**实际盘出来是 **6 个**——多出来的那个是 `web-code-bootcamp-or-learn-to-code-1`，目录名叫 web-code，但**对外挂的是「AI Engineer 全栈项目班」这个名字**，而且它就在官网 `/bootcamp` 页上和 AI Engineer Bootcamp 并排卖。

> 🚩 **但仓库不等于产品线全貌**。Ada 的产品表显示，这条线**实际在卖 10 个产品**，其中 **6 个在 curriculum 仓库里连目录都没有**（进阶视频课 $1999、合集 $2180、Dispatch AI 项目单报 $1980/$2600、VIP 计划 $5500+7%、VIP 预备计划 $5500、AI Agent & MCP 实战营 $465）。全量见 [`AI_ENGINEER_PRODUCT_CATALOG.md`](./AI_ENGINEER_PRODUCT_CATALOG.md)。下面这张表只是**仓库侧**的家底。

| # | 目录 | 对外名字 | 是什么 | 现状 |
|---|------|---------|--------|------|
| 1 | `ai-engineer-bootcamp/` | AI Engineer Bootcamp（在职程序员转 AI Engineer） | **主课**（旗舰直播班） | ✅ **在售**，官网第 7 期招生中 |
| 2 | `web-code-bootcamp-or-learn-to-code-1/` | **AI Engineer 全栈项目班** / AI 全栈产品班·线下小班 | **另一条主课**（线下小班，全栈向） | ✅ **在售**，第 30 期 |
| 3 | `ai-engineer-rag/` | AI Engineer 入门（Essentials: LLM & RAG） | **引流课**（纯录播 video） | ✅ **在售** $299（原价 $399），`/program-course/ai-engineer-rag` |
| 4 | `ai-engineer-cn/` | 大模型应用开发 · 真项目训练营<br><sub>原名 AI 应用开发工程师训练营（国内版），2026-08-19 改名</sub> | **国内市场版主课** | 🔴 **半成品 / 疑似停滞**，见下方风险 |
| 5 | `ai-engineer-resume-interview/` | AI Engineer 简历 + 面试讲座 | **不是课**，是内部学员的 90min 讲座 deck | 🟢 已交付的教具，静态部署中 |
| 6 | `video-ai-engineer/` | —— | **不是课**，是给主课做 60s 竖版短片的 Remotion 工具目录 | ⚪️ 物料工具，2026-04 后没动 |

> 另有一处不在 curriculum 里但属于这条线：官网 `/learn/ai-engineer/hub` —— 免费/会员混合的学习中心页，承担引流和转化。**它和 `ai-engineer-rag` 引流课的关系没人理过**（见缺口 G3）。

---

## 二、对比表

| | ① AI Engineer Bootcamp | ② AI Engineer 全栈项目班 | ③ AI Engineer 入门 | ④ 大模型应用开发 · 真项目训练营 |
|---|---|---|---|---|
| **slug** | `ai-engineer-bootcamp` | `web-code-bootcamp-or-learn-to-code-1` | `ai-engineer-rag` | `ai-engineer-cn` |
| **面向谁** | 已有 Python + API 经验的在职工程师、数据/ML/DevOps 工程师 | 想线下小班带练 AI Coding 的全栈方向学员 | 有基础 Python、想转 AI Engineer 但还没入门的人 | 国内 2–5 年后端/全栈转大模型应用开发 |
| **形式** | 直播 + 录播 + Lab + P3 项目 | 线下小班 | **纯录播，自主节奏** | 直播（每周 2 节 ≤3h）+ Lab + Quest |
| **时长** | 官网写 24 周；outline.json 写 12 周技术 + 12 周 P3 ⚠️口径不一 | 6 个月 | 4 周（52 小时视频） | 12 周 + 职业孵化 |
| **价格**（以 CATALOG 为准） | **$3500+GST** | **$3599+GST** | **$299+GST** | **暂定 8999** |
| **前置要求** | Python 编程基础、RESTful API、云平台、Git | 待补（DESIGN 未写明） | 基础 Python（能写函数、调 API），无需 ML 背景 | Python 基础、API、Git |
| **产出什么** | 7 个可放简历的项目 + 12 周 P3 真实企业项目 | 待补 | 3 个渐进 Project（GPT Store → Python RAG → PDF RAG） | 在真实系统 Dispatch AI 上叠 6 个 Quest 里程碑，毕业带独创功能 |
| **课量** | ⚠️ 见「数字打架」 | 170 课 | 79 课（37 视频 + 25 Lab + 5 Quest） | 61 课 / 24 直播 / 18 Lab |
| **营销文档齐不齐** | DESIGN / PERSONAS / FUNNEL / PROMOTION / AUDIT **全有** | DESIGN / PERSONAS / FUNNEL / PROMOTION 有，AUDIT 缺 | **只有 DESIGN** | **只有 DESIGN** |

---

## 三、阶梯关系（建议，🟡 待拍板）

现在**没有一条能对学员讲清楚的路径**——这是这次盘点最大的发现。按现有资产，我建议的阶梯是：

```
免费  /learn/ai-engineer/hub（免费 + 会员混合内容）
   ↓
自学  AI Engineer 入门 $299  ─┐
      AI Engineer 进阶 $1999 ─┤→ 或直接买合集 $2180（= 入门+进阶）
   ↓
带教  ├─ AI Engineer 训练营 $3500（直播 + P3 职业孵化器）← 主课
      └─ AI Engineer 全栈项目班 $3599（线下 3-5 人小班 + AI Coding 陪跑）
   ↓
加项  ├─ AI Engineer 项目 · Dispatch AI 单报 $1980（学员）/ $2600（非学员）
      ├─ AI Agent & MCP 项目实战营 $465
      └─ + DevOps 视频课组合包 $5000（🔴 官网无页面）
   ↓
求职  ├─ AI Engineer 简历 + 面试 $39  ✅ 2026-08-19 上线 /program-course/ai-e
      ├─ VIP 预备计划 · Jobpin AI 8 周 $5500（🔴 无链接）
      └─ VIP 高薪 Offer 计划 $5500 + Offer Package 7%
```

**「买了 A 还该买 B 吗」**：
- 买了「入门 $299」→ **该买**主课。入门是纯录播、不含直播答疑和 P3，其 `cardDescription` 自称「AI Engineer 进阶学习的官方前置入门课」。
- 买了主课 → **不需要**再买入门/进阶视频课，内容被覆盖。**这条必须写进销售话术，否则会重复卖。**
- 买了「进阶 $1999」→ **销售侧默认推合集 $2180**（只贵 $181 就多一门 $299 的课）。定价本身不动，见 Q2。
- 「训练营」和「全栈项目班」→ 🟡 **二选一，不是阶梯**。两门都 $3.5K 级、都打就业，同名同前缀并排卖，销售和学员都会问「这俩什么区别」。**目前没有任何一份文档回答这个问题。**
- 「VIP 预备计划 $5500」→「VIP 高薪 Offer 计划 $5500+7%」是**面试复评晋级**关系，不是自选。预备计划是给没达到 VIP 入选标准的人补项目经验用的。

---

## 四、🟡 必须拍板的三个问题（我给判断和理由，不空着）

**Q1｜`ai-engineer-cn` 国内版怎么办？——建议：暂停，或明确重启并给资源。**
理由：`outline.json` 里写着第一期 `commenceCourseDate: 2026-07-13`、`completeDate: 2026-10-05`、状态 `RECRUITING`。今天是 8/12，**开班日已过去一个月**，而这个目录**最后一次内容更新是 2026-06-17**（6/19 那次是机器生成 lineage 文件，不算内容）。也就是说：要么这期根本没开成、页面还挂着招生中；要么开了但课程内容两个月没维护。两种都不能这样放着。另外它的 `DESIGN.md` 自己标了 ⚠️ 待确认——主线项目 Dispatch AI 的映射是照 `techscrum-devops` 课程页猜的，**至今没拿到源码校准**。这门课的地基还没夯实。
👉 建议 Ada 先查后台这一期实际报名和开班情况，再让 Lightman 定：停、还是排资源重启。

**Q2｜~~入门课上架了没~~ → 已查实：在售。真正的问题换成了「视频课三件套怎么摆」。**
入门课活在 `/program-course/ai-engineer-rag`，$299（原价 $399），37 节视频 + 25 Lab + 5 Quest。初稿说它 404 是我测错了路由（拿 `outline.json` 里的内部 slug `ai-engineer-核心基础与-rag-入门` 去拼公开地址），**已更正**。
留下的观察：这条线上有**三个价位重叠的视频课**——入门 $299 / 进阶 $1999 / 入门+进阶合集 $2180。合集只比进阶贵 $181，单买进阶的理由不强。
🔒 **已定（Ada 2026-08-12）：三件套定价暂时不动，除非 Lightman 提出修改。** 本条留作记录，不是待办。销售侧可直接把合集当默认推荐。

**Q3｜「Bootcamp」和「全栈项目班」重名怎么办？——建议：保留两门，但把名字和卖点分开。**
理由：两门都真在卖、都有完整营销文档，砍任何一门都是砍现金流，不该砍。问题只在**命名**：目录叫 `web-code-*`、后台 program 叫「AI Engineer 全栈项目班30期」、outline 里的课名又叫「AI 全栈产品班·线下小班」——**一个产品三个名字**，7/28 刚改过版但只改了一处。销售拿它跟客户讲，客户搜到的是另一个名字。
👉 建议：定一个对外正式名 + 一句话区隔（例如「Bootcamp = 线上直播·转 AI 工程岗」vs「全栈项目班 = 线下小班·全栈就业」），三处名字统一。这个不用 Lightman 拍板细节，Ada 定完给他过一眼即可。

---

## 五、⚠️ 数字打架（做海报和投放前必须先定死）

同一门 AI Engineer Bootcamp，**五个地方五个数**：

| 出处 | 课数 |
|---|---|
| `public/outline.json`（totalLessons + 10 个 phase 实际相加） | **290** |
| 官网课程页 | **286** |
| `prod-state.json`（2026-04-21 同步的后台真实数据） | **535** |
| `CONTENT_GAP_ANALYSIS.md`（2026-04-14） | **171** |
| `video-ai-engineer` 短片脚本（对外播的） | **183** |

时长同样打架：官网写 24 周，`outline.json` 写「12 周技术 + 12 周 P3」。期数也旧了：官网已到**第 7 期**，`outline.json` 和 `prod-state.json` 都停在**第 5 期**（后者最后同步于 2026-04-21，已 4 个月没同步）。

> 🚩 **这条直接影响 Ada 昨天做的三张 AI 课程海报**（ai 岗位数量 / aijd / ai 薪酬方向）。对外物料上的课数、周数、期数在定稿前必须统一到一个口径，否则不同渠道的数字对不上。**建议以后台真实数据为准，反向修 outline.json。**

---

## 六、共用的东西（只在这里写一次，各课 DESIGN.md 从这里继承，不要复制粘贴）

- **师资**：讲师来自 Meta / Microsoft / Amazon 等公司（见 `ai-engineer-bootcamp/TEACHERS.md`，那是师资的真相源）。
- **交付方式**：直播 + 录播 + 浏览器内即时验证 Lab + AI Tutor 一对一 Quest + P3 真实项目。
- **视觉主色**：Bootcamp `#FF5757` / 入门 `#38B6FF` / 国内版 `#2F6BFF`（各课 DESIGN.md 已定，海报不要串色）。
- **合规红线（对外一律不能说）**：不承诺包就业 / 保 offer / 保录取 / 必进大厂 / 保证薪资 X 万。薪资和岗位数只能引**有出处的公开数据**并标注来源与时间，不能说成"我们的学员都能拿到"。

---

## 七、④ 后续开发清单（缺口 + 优先级）

| # | 缺口 | 影响 | 优先级 | 建议谁做 |
|---|------|------|:---:|---|
| G1 | ~~入门课线上买不到~~ **已查实在售，本条作废** | —— | ✅ 关闭 | —— |
| G1b | **6 个在售产品在仓库里没有任何目录**（进阶 $1999 / 合集 $2180 / Dispatch AI 项目 $1980 / VIP $5500+7% / VIP 预备 $5500 / MCP 实战营 $465） | 仓库只覆盖一半产品线，AI 和新同事查不到；这些产品没有大纲 / PERSONAS / 推广方案 | 🔴 P0 | Ada 定哪些要补目录 |
| G1c | ~~视频课三件套定价重叠~~ 🔒 **已定暂不动**（Ada 2026-08-12），除非 Lightman 改 | —— | ✅ 关闭 | —— |
| G1d | **2 个产品在收钱但官网无页面**（DevOps 组合包 $5000、VIP 预备计划 $5500），只靠 sales 口头卖 | 无落地页 = 无法投放、无法自助转化、口径靠人传 | 🔴 P0 | Ada → Lightman 拍板补不补页面 |
| G1e | ~~$39 简历+面试视频课后台存不上~~ ✅ **2026-08-19 已上线** `/program-course/ai-e` | —— | ✅ 关闭 | —— |
| G2 | **课数/周数/期数口径五处不一致 + 期数停在第 5 期**（不含价格 —— 价格已定以 CATALOG 为准、Ada 手动处理） | 海报 / 投放 / 销售话术数字对不上 | 🔴 P0 | Ada 定口径 → 反向修 outline.json |
| G3 | **`/learn/ai-engineer/hub` 与入门课关系没人定** | 免费内容和 299 付费课可能互相吃掉 | 🟠 P1 | Ada + Marketing |
| G4 | **国内版 `ai-engineer-cn` 开班日已过仍挂 RECRUITING** | 页面在骗人，且课程地基（Dispatch AI 映射）未校准 | 🟠 P1 | Ada 查实 → Lightman 拍板停/重启 |
| G5 | **两门主课重名、无区隔说明** | 销售讲不清，学员选择困难 | 🟠 P1 | Ada 定名 → Lightman 过目 |
| G6 | `ai-engineer-cn` / `ai-engineer-rag` **各缺 PERSONAS + FUNNEL_PLAN + PROMOTION_PLAN** | 没画像就没法投放，等于不能推广 | 🟡 P2 | `/target-user-persona-mapper` → `/course-funnel-architect` → `/course-promotion-architect` |
| G7 | **主课 Lab 覆盖缺口**（Phase 4/6/7/8 严重不足，Phase 7 Memory 零 Lab） | 教学质量，见 `CONTENT_GAP_ANALYSIS.md`（2026-04 的分析，需复核是否已补） | 🟡 P2 | 课程侧 |
| G8 | `web-code-bootcamp-or-learn-to-code-1` **缺 AUDIT_LOG** | 上线前没有体检记录 | 🟡 P2 | `/course-outline-auditor` |
| G9 | `prod-state.json` **4 个月没同步**（最后 2026-04-21） | 本地和线上已漂移，改任何东西前都不可信 | 🟡 P2 | `/bootcamp-sync` 重新拉 |
| G10 | `video-ai-engineer` 短片数字过时（183 课） | 已发出去的视频物料口径错 | ⚪️ P3 | 定完 G2 口径后重渲染 |

---

## 八、📌 两条给 Ada 的操作提示

1. **派单里让参照的 `curriculum/CLAUDE_CERT_FAMILY.md` 不存在**——全库（jr-omni + curriculum）都搜过，没有这个文件。别再找了，本文的结构是照派单第③步列的 5 条要求现搭的。要不要照这个结构反过来去建 Claude 认证那条线的 FAMILY 文档，可以问 Lightman。
2. **本文只做了第①步和第④步**。第②步的三个关键判断（Q1/Q2/Q3）我给了判断和理由，但**都需要先查后台真实数据**才能定死——这是 Ada 下一步该做的第一件事。
