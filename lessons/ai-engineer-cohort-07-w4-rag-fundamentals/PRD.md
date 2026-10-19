# AI Engineer W4 · RAG Fundamentals · PRD

版本：2026-10-19，30 页（目录 + 八个部分，每部分前一张过渡页）。依据讲师 Jessie 的 W4 课程大纲（2026-10-19），在对话里逐条确认后定稿。

## 课程定位

第七期 W4 理论 Live，90 分钟。本节在 W3 Context Engineering 的基础上，接入一个带版本、带权限的知识来源，回答一个问题：请求时缺的知识从哪里来，怎么证明它是对的。

RAG 是 Context Engineering 的动态知识来源：在请求时检索获授权、可追溯、版本正确的 evidence，再组装给模型。它不替代 system policy、业务 state、tool authorization 或 human review。

三节课是一条线：W2 回答「一次能放多少」，W3 回答「放什么、怎么组装」，W4 回答「其中动态的知识从哪里来、怎么证明它是对的」。

## 学习目标

1. 说出 Fine-tuning、RAG、Memory、Knowledge base 各属于 LLM、Agent、外部数据哪一层；说清 RAG 只管知识这一格，不替代什么。
2. 区分三种取知识的方式：长上下文、agentic search、索引式 RAG；知道 retrieval ≠ embedding。
3. 说出 RAG 与 Fine-tuning 的分界。
4. 按顺序说出离线六步：manifest → parse → chunk → metadata → embed → index；知道 chunk 大小没有通用最佳值；知道索引有版本。
5. 说出在线四步：query embedding → similarity → top-k；说明权限为什么要在检索之前；说明检索不到时该返回什么。
6. 说明证据怎么带 source ID 组装、引用为什么要由程序绑定 chunk ID、回答的四种状态。
7. 知道答「不知道」是正确行为，知道过期或冲突证据怎么处理。
8. 拿到一个错误答案，能先判断错在 Retrieval 还是 Generation，并说出对应指标 recall@k、faithfulness。

完成判据：开场测试、连线复习和两个检查点都能在聊天框答对并说出理由。本课不布置作业。

## 已确认范围

- **对象**：第七期 AI Engineer 学员。**讲师**：Jessie。**时长**：90 分钟，内容压在 82 分钟，留 8 分钟缓冲。**形式**：线上，互动只用聊天框。讲课用中文，术语保留英文。
- **结构**：第 2 页是目录（八个部分）；第 2–8 部分开始前各有一张过渡页，回到目录、高亮当前部分（讲师 2026-10-19 要求）。第 1 部分紧接目录开始，不另设过渡页。
- **作业**：不布置（讲师 2026-10-19 要求删除）。讲义里保留原大纲的面试检查。
- **页面原则**：一页一件事，几行「大白话 → 术语」。时间、讲法、答案放讲师备注（N）和 RUNSHEET。
- **每个 contract 课上只讲一个字段**：Ingestion 只讲 version；Retrieval 只讲 no-result behavior；Answer 只讲四种状态。完整字段放讲义（`WORKSHEET.md`）。
- **排错只讲 Retrieval 与 Generation 两层**；Ingestion、Assembly、Policy 三层在页面上灰显，指向讲义。
- **Hybrid Search、Query Rewrite、Reranking、RAGAS 只放一张地图**，不展开。
- **与 W3 的衔接**：开场复习复用 W3 第 19 页「五样东西」，做成第 4 页的连线题：学员在聊天框按顺序打五个字母，揭晓后只亮 RAG 一行。freshness、permission、fallback 四条路在页面上标「上节课讲过」，一句话点回去，不重讲。W3 没有画过 policy / state / memory / tools / knowledge 的组成图，本课不使用它。
- **与 W2 的衔接**：chunk 按 token 计；top-k × chunk token 是每次请求的预算；长上下文的窗口上限和成本。
- **例子**：除检查点 1（讲师原例：「去年第三季度营收」vs「2025 Q3 revenue」）外，全部用 CareKind 的虚构探视政策。课堂使用 synthetic policy，不把 resident PII 放进通用 vector index；政策证据不能自动触发临床、用药或监管申报决定。
- **外部资料**：只引用 Anthropic 的文章和文档，见 `research/sources.md`。
- **数据纪律**：页面上唯一的数字是 Anthropic 文章里的「20 万 token」，标了出处。其余都是教学示例。

## 相对讲师原大纲的调整（2026-10-19 对话确认）

- 最初的 26 页提案合并为 23 页：开场问题并入复习题；「为什么不全塞进去」并入三种方式；「错在哪层」与「两个指标」合成一页。
- conflict 只在一处展开：第 20 页给四种状态的定义，第 24 页讲 stale / conflict 怎么处理。
- hard negatives 从课堂移到讲义。
- 2026-10-19 讲师审阅后调整第 2–4 页：原第 2 页「哪一项交给 RAG」选择题与连线题重复，删掉；连线题移到第 2 页；第 3 页换成开放问题，学员给的办法引出第 4、5 页；第 4 页改为「知识这一格，有三种填法」，并更正「三种都叫检索」（长上下文不检索）。

- 2026-10-19 讲师审阅后：开头加「它们各在架构的哪一层」测试（第 3 页），原「RAG 还是 Fine-tuning」页删掉，对比并入这页的答案；加目录与七张章节过渡页；删除 System Design Review 作业。共 30 页。
- 第 3 页的分层按讲师 2026-10-19 定稿：LLM / Agent / 外部数据三层，四题（Fine-tuning、RAG、Memory、Knowledge base），Memory 归 Agent。

## 节奏表

| 部分 | 分钟 | 页码 | 页数 | 学员产出 |
|---|---|---|---|---|
| 封面 + 目录 | 0–2 | 1–2 | 2 | — |
| 1 开场 | 2–7 | 3–4 | 2 | 聊天框答架构测试（四个字母）和连线复习（五个字母） |
| 2 定位 | 7–15 | 5–7 | 3 | 聊天框写一个「模型没见过政策怎么办」的办法；能说出知识这一格的三种填法 |
| 3 离线 | 15–28 | 8–11 | 4 | 能按顺序说出六步；知道索引有版本 |
| 4 在线 | 28–42 | 12–16 | 5 | 能说出四步、权限的位置、no-result behavior；检查点 1 |
| 5 组装作答 | 42–57 | 17–21 | 5 | 能说明 source ID、程序绑定引用、四种状态、CareKind 边界 |
| 6 兜底 | 57–65 | 22–24 | 3 | 知道 no-answer 是正确行为；知道 stale / conflict 怎么处理 |
| 7 排错 | 65–77 | 25–27 | 3 | 检查点 2：在聊天框打 R 或 G |
| 8 后续地图 + 收尾 | 77–82 | 28–30 | 3 | 知道后续工具各修哪层 |
| 缓冲 | 82–90 | — | — | 答聊天框问题 |

## 逐页规格

格式：页码 · 文件 · 标题｜页面上有什么｜讲师提示（不上页面）｜完成判据。章节过渡页（C02–C08）都是同一个目录组件，当前部分高亮、讲过的打勾、没讲的变淡。

1. **S01_Cover** · RAG Fundamentals｜一句话「请求时缺的知识从哪里来，怎么证明它是对的。」；讲师 Jessie｜三节课一条线｜—
2. **S01b_Agenda** · 今天的目录｜八个部分，每部分一个问题；第 2–7 部分带一行灰字（接 W2 / W3）｜每部分开始前回到目录｜—
3. **S02_Layers** · 测一测：它们各属于哪一层？｜左：Fine-tuning、RAG、Memory、Knowledge base 编号 1–4；右：A LLM（模型本身，训练时定下）、B Agent（每次请求时编排：拼上下文、决定要不要检索、调工具、读写记忆）、C 外部数据；点「看答案」后各项落到对应层，答案 ABBC，再出「Knowledge base 是数据，RAG 是 Agent 去取数据的动作，Fine-tuning 改的是 LLM」｜学员在聊天框按顺序打四个字母；Memory 归 Agent（讲师 2026-10-19 定稿）｜每人给出答案
4. **S03_Match** · 复习连一连：五样东西，各管什么｜左：五句大白话 1–5；右：五个术语 A–E；揭晓后只亮 RAG 一行，「RAG 只管知识这一格」｜答案 DCEAB｜每人给出配对
5. **C02_PositionCover** · 第 2 部分 · 定位｜目录，高亮「定位」｜—｜—
6. **S04_Question** · 模型没见过 CareKind 的政策，怎么办？｜家属问周末探视，助手编了「周末全天开放」，真实政策是提前 24 小时预约；「在聊天框写一个办法」｜把办法归成全塞进 prompt / 让它自己去查 / 先建索引 / 拿去训练；「拿去训练」指回第 3 页｜每人写一个办法
7. **S05_ThreeWays** · 知识这一格，有三种填法｜三张卡：Long context、Agentic search、Indexed RAG；「后两种才需要检索：retrieval ≠ embedding」；来源行｜长上下文接 W2 的上限和成本｜学员能区分三种
8. **C03_OfflineCover** · 第 3 部分 · 离线｜目录，高亮「离线」｜—｜—
9. **S07_Pipeline** · 离线：资料先变成索引｜六步流程｜metadata 是后面权限和引用的基础｜学员能按顺序说出
10. **S08_Chunk** · 切多大？没有通用最佳值｜四行：Token、Input limit、Too large、Too small｜不给推荐数字｜学员能解释为什么没有最佳值
11. **S09_Version** · 索引有版本，不是建一次就完｜三行：version、Re-index、Rollback｜Ingestion contract 只讲 version｜学员能说出政策改版后索引要做什么
12. **C04_OnlineCover** · 第 4 部分 · 在线｜目录，高亮「在线」｜—｜—
13. **S10_Online** · 在线：按问题，取最像的几块｜四步流程；top-k 是预算；分数高只说明像｜接 W2 成本｜学员能说出四步
14. **S11_Permission** · 权限先于检索｜两栏：先找再过滤 / 先过滤再找｜tenant 并入这里｜学员能说出越权文档为什么不能进候选集
15. **S12_NoResult** · 检索不到，返回什么？｜两栏：硬凑 k 块 / 返回空 + 原因｜Retrieval contract 只讲这一个字段｜学员能说出正确行为
16. **S13_Check1** · 检查点：纯向量检索会怎样？｜左：问题与真实 chunk；右：点开显示四点｜聊天框写猜测｜学员能说出至少一个原因
17. **C05_AnswerCover** · 第 5 部分 · 组装作答｜目录，高亮「组装作答」｜—｜—
18. **S14_Assembly** · 证据带着编号，放进上下文｜左：上下文示意；右：Order、Delimiter、Source ID｜接 W3 的组装｜学员能说出为什么要带编号
19. **S15_Citation** · 引用由程序绑定，不让模型自己写｜两栏对照；一条引用 = chunk id + 原文 + version｜Citations API 是同一个做法｜学员能说出程序绑定的好处
20. **S16_States** · 每个回答，先定一个状态｜Supported、Partial、Conflict、No-answer｜partial 与 conflict 合并讲｜学员能说出四种
21. **S17_CareKind** · CareKind：这条线画在哪｜Synthetic policy、No resident PII、Human decides｜—｜学员能说出三条边界
22. **C06_FallbackCover** · 第 6 部分 · 兜底｜目录，高亮「兜底」｜—｜—
23. **S18_NoAnswer** · 答「不知道」，是正确行为｜两段对话对照：编一个 / No-answer；W3 的四条路｜—｜学员认同 no-answer 不是失败
24. **S19_StaleConflict** · 证据过期或打架时｜Stale、Conflict、Human review｜检索错的证据比不检索更糟｜学员能说出两种情况怎么处理
25. **C07_DebugCover** · 第 7 部分 · 排错｜目录，高亮「排错」｜—｜—
26. **S20_Layers** · 答错了，先判断错在哪层｜五层，只亮 Retrieval（recall@k）和 Generation（faithfulness）｜其余三层见讲义｜学员能说出两个指标各量什么
27. **S21_Check2** · 检查点：错在 R 还是 G？｜两个错误答案，各带 top-k 和回答；点开显示 R / G 与理由｜聊天框打 R 或 G｜学员两题都答对
28. **C08_NextMapCover** · 第 8 部分 · 后续地图｜目录，高亮「后续地图」｜—｜—
29. **S22_NextMap** · 后续地图：每个工具修哪一层｜Hybrid search、Query rewrite、Rerank、RAGAS｜只放图不讲｜—
30. **S23_End** · 收尾｜「答得出，指得出出处；答不出，说不知道。」｜答聊天框问题｜—

## 发布范围

Local / 未部署。讲师授权范围：按 talk-deck 流程本地制作、验证、登记；不 commit、不 push、不部署。
