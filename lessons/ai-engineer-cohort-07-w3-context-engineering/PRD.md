# AI Engineer W3 · Context Engineering: Selection, Assembly & Lifecycle · PRD

版本：精简版（2026-10-14，21 页）。替换同日的 trace 案例版（27 页）和 9 块生活例子版（20 页）。

## 学习目标

学完能说清楚：每一轮调用，给模型看什么、不给看什么、怎么排、什么时候换掉。

1. 区分 Prompt Engineering 与 Context Engineering。
2. 说出每份资料要看的五项标签，和挑资料的五条标准；区分 freshness 与 recency。
3. 说出资料不够时的四条路。
4. 说出排上下文时要做的六件事，知道压缩会丢约束。
5. 区分 untrusted data 与 prompt injection。
6. 说出每次调用要记的四件事和五个评价指标。
7. 区分 refresh、invalidation、eviction；说出 Context Window、RAG、Memory、Tool Results、Cache 各管什么。
8. 按顺序说出 Blueprint 五步。

完成判据：学员能对一样资料判断放不放进上下文并说出理由；能用自己的话讲出五步。

## 已确认范围

- **对象**：第七期 AI Engineer 学员。**讲师**：Jessie。**时长**：90 分钟。**形式**：线上互动课，讲课用中文，术语保留英文。
- **页面原则（讲师要求）**：页面要简单，不加太多内容。一页一件事，几行「大白话 → 术语」。时间、讲法放讲师备注和 RUNSHEET。
- **概念范围**：覆盖 W3 课程描述里的全部概念，CareKind 三个场景除外。不讲本周边界，不布置作业。
- **开场是上节课复习测试**：四道选择题，学员在聊天区回答，答案在页面上点开。内容是 W2 讲过的：模型不记事、上下文每次调用现拼、Prompt 与 Context Engineering 的区别、缓存要求前缀一致。
- **不重讲 W2 的内容**：成本、缓存、每层占多少 context 都不再讲。relevance、authority、Cache 与 Memory 的区别在页面上标「上节课讲过」。
- **与 W2 六条标准的衔接**：W2 讲的是 information density、relevance、isolation、recency、authority、permission · provenance。本课把 permission 和 provenance 分开讲，并用一页专门区分 freshness 与 recency。
- **例子**：全部来自一个口头场景「客服 agent 帮客户处理退款」。不用 trace 文件，没有课堂练习。
- **外部资料**：只引用 Anthropic 的文章和文档，见 `research/sources.md`。不用 Manus、Chroma。
- **数据纪律**：本课没有统计数字。例子是教学示例，不是真实案例。

## 节奏表

| 阶段 | 分钟 | 页码 | 页数 | 学员产出 |
|---|---|---|---|---|
| 开场 + 上节课复习测试 | 0–9 | 1–5 | 5 | 聊天区回答四道题 |
| 为什么要管上下文 | 9–16 | 6–7 | 2 | 能解释 attention budget 和 context rot |
| Source：摆资料 | 16–25 | 8 | 1 | 能说出五项标签 |
| Policy：挑 | 25–44 | 9–11 | 3 | 能说出五条标准、四条路；能区分 freshness 与 recency |
| Assembly：排 | 44–58 | 12–13 | 2 | 能说出六件事；知道压缩会丢约束 |
| Trust Boundary：防 | 58–65 | 14 | 1 | 能区分两个词 |
| Validation：检查 | 65–75 | 15–16 | 2 | 能说出四件事和五个指标 |
| Lifecycle：换，加五种机制 | 75–88 | 17–19 | 3 | 能区分换新、作废、扔掉；能说出五种机制各管什么 |
| 总结与 Q&A | 88–90 | 20–21 | 2 | 能按顺序说出五步 |

## 逐页规格

格式：页码 · 文件 · 标题｜页面上有什么｜讲师提示（不上页面）｜完成判据。

1. **S01_Cover** · 封面｜Context Engineering；一句话「每一轮，给模型看什么、不给看什么。」｜—｜—
2. **S02_Quiz1** · 第 1 题：模型为什么答得出来｜左：两轮对话（我叫小明 / 我叫什么）；右：三个选项，答案可点开｜答案 B｜每人给出答案
3. **S03_Quiz2** · 第 2 题：第 2 次调用只发最后一句，会怎样｜左：只剩一句话；右：三个选项｜答案 B｜每人给出答案
4. **S04_Quiz3** · 第 3 题：哪个是 Prompt Engineering，哪个是 Context Engineering｜两个改动，点开后各显示一个标签｜落到「今天讲后一个」｜学员能区分两者
5. **S05_Quiz4** · 第 4 题：system prompt 第一行是时间戳，会怎样｜左：system prompt 示意；右：三个选项｜答案 B；今天不再重讲缓存｜每人给出答案
6. **S06_Why** · 放得下，不等于应该放｜三张卡：Context Window、Attention budget、Context rot；一句话：最小的一组、信息量最高的 token｜回指 W2 的 lost-in-the-middle｜学员能解释两个新词
7. **S07_Map** · 今天讲六件事｜六张卡：摆资料、挑、排、防、检查、换；一句话交代场景｜—｜—
8. **S08_Inventory** · 每份资料，先看五项标签｜五行：Owner、Provenance、Freshness、Trust、Permission｜请学员再举一样资料｜学员能说出五项
9. **S09_Selection** · 挑哪些放进去：五条标准｜五行：Relevance、Freshness、Provenance、Permission、Authority；两行标「上节课讲过」｜permission 和 provenance 分开讲｜学员能说出五条
10. **S10_Freshness** · 「还有效」和「离得近」是两回事｜两张卡：Recency、Freshness，各一个例子｜重点页｜学员能各举一例
11. **S11_Fallback** · 资料不够，怎么办｜四张卡：Fail、Ask、Retrieve、Escalate；一句话：就是不能瞎编｜问：客户催着现在退款，状态是早上查的，走哪条路｜学员能说出四条路
12. **S12_Assembly** · 怎么排：每一轮现拼｜六行：Runtime not template、Token allocation、Priority / Order、Dedup、Compression、Conflict resolution｜第三行接 W2 的缓存｜学员能解释第一行
13. **S13_Compress** · 小心：压缩会悄悄丢掉约束｜客户原话对照压缩后的摘要；一句话：先保证不漏，再去掉多余的｜应对：关键约束单独保存｜学员能指出丢了什么
14. **S14_Trust** · 查回来的内容里，夹着一句命令｜一条工单备注；两行：Untrusted data、Prompt injection；一句话：可以当资料看，不能当指令听｜安全只讲这一个例子｜学员能区分两个词
15. **S15_Observability** · 每次调用，记下四件事｜四行：Context version、Source IDs、Selected / excluded reasons、Token allocation｜—｜学员能说出四项
16. **S16_Metrics** · 怎么知道改对了：五个指标｜五行：Task success rate、Input tokens / cost、Latency、Retrieval recall、Constraint violation rate｜最后一个要专门造测试｜学员能选对指标
17. **S17_Load** · 资料怎么拿，怎么收｜四行：Progressive disclosure、Just-in-time loading、Compaction、Tool-result cleanup；一句代价｜W2 在 Claude Code 里见过这四件事｜学员能各举一例
18. **S18_Update** · 资料会变：换新、作废、扔掉｜三张卡：Refresh、Invalidation、Eviction｜三个词容易混｜学员能区分三者
19. **S19_Mechanisms** · 五样东西，各管一件事｜五行：Context Window、RAG、Memory、Tool Results、Cache｜不能互相顶替｜学员能说出各管什么
20. **S20_Blueprint** · 合起来，就是这五步｜五张卡：Source、Policy、Assembly、Validation、Lifecycle｜trust boundary 贯穿在挑和排里｜学员能按顺序说出五步
21. **S21_End** · 收尾 + Q&A｜「模型答错了，先看它这一轮拿到了什么。」｜—｜—

## 相对讲师最初大纲拿掉的内容

按「页面简化、不留 trace、不留 Chroma、Manus 换成 Anthropic」的要求，下面这些没有进课件：trace 与 `measure.py`、三个埋点、综合练习与讲评、Chroma 数据、Manus 数据、A / B / C 三个方案、写到外部 / 按需选择 / 压缩 / 隔离四种操作的单独页面（内容分散在第 12–14、17 页）。

## 发布范围

Local / 未部署。未授权 commit、push 或部署。旧版备份在仓库外：`jr/_backup/`（9 块版和 trace 版各一份）。
