# AI Engineer W5 · RAG Quality, Testing & Controlled Improvement · PRD

版本：2026-10-27，35 页（目录 + 七个部分，第 2–7 部分前各一张过渡页）。依据讲师 Jessie 在对话里确认的大纲（2026-10-27），以及 `docs/ai-engineer-cohort-07-theory-w5-w12-blueprint.md` 的 W5 部分。

## 课程定位

第七期 W5 理论 Live，90 分钟。W4 讲了“答错了先分层”；W5 回答：拿到一份评估报告，怎么判断一个改动真的让 RAG 变好了，还是只是分数看起来变好了。

一句话：**分数变了，不等于系统变好了。**

W6 Practice 由学员把今天的约定做成自己的 Evaluation Pipeline；本课只读、只判断，不搭 pipeline。

## 学习目标

1. 把一个坏答案归到四类失败之一：retrieval、grounding、citation、no-answer；知道 no-answer 有两个方向（over-answer、false refusal）。
2. 说出一条 golden case 要写的五样东西：问题、期望状态、gold evidence、参考答案、陷阱标签；说出 gold evidence 为什么写原句而不写 chunk id。
3. 读懂一份报告：哪个指标看哪一层；faithfulness 满分也可能答错；`0.853（n=17）` 里 n 的意思；20 条 case 时一条就是 5 个百分点；RAGAS 的裁判也会判错。
4. 说出单变量实验的规则：冻结数据、语料、prompt、模型，一次只改一个键，config diff 超过一项就无法归因；读 compare 时看修好的和新坏的 case。
5. 说出五个旋钮各修什么、代价是什么：metadata filter、chunking、hybrid retrieval、top-k、reranking；知道“先看失败原因，再选旋钮”。

完成判据：四道开场测试和三个检查点都能在聊天框答对并说出理由。本课不布置作业。

## 已确认范围

- **对象**：第七期 AI Engineer 学员，约 30 人，有的有开发基础、有的没有。**讲师**：Jessie。**时长**：90 分钟，内容压在 82 分钟，留 8 分钟缓冲。**形式**：线上，互动只用聊天框，不分组，不要求学员装任何东西。讲课用中文，术语保留英文。
- **开场分两部分（讲师 2026-10-27 要求）**：先放“足迹地图”，W1–W12 十二节理论课一条路线，学过的写一个问题加关键词，本周标“你在这里”，后面只写课名；再做 4 道重要概念测试。地图只画理论线。
- **页面原则**：一页一件事，几行“大白话 → 术语”。时间、讲法、答案放讲师备注（N）和 RUNSHEET。课上不跑代码，不需要讲代码；完整命令放讲义的“开发者加餐”。
- **不重讲 W4**：R / G 分层、recall@k、faithfulness、四种回答状态、no-answer 是正确行为、chunk 没有通用最佳值，页面上标“上节课讲过”。
- **例子**：全部来自老师的 reference RAG（`carekind-reference-rag`，虚构的养老院家属政策，没有住户个人信息）。主线例子“退款客服”从 W6 起使用，本课不用。
- **数据纪律**：页面上的数字全部来自 reference RAG 的真实运行，不编数字。
  - 四类失败的例子、faithfulness、裁判错判：`runs/20261027-144153-baseline`（完整运行，作答和裁判都是本地 `qwen3:14b`，经 Ollama）。页面上标“作答与裁判：本地 qwen3:14b”，不说成 Claude 的效果。
  - 五个旋钮：`runs/20261023-*`（只跑检索的 6 组实验）。
  - 第 10 页 over-answer 的例子 G15：`runs/20261027-152150-baseline`（作答与裁判是本地 `bonsai-2`）；两组本地模型的分数对比放讲义。
- **外部资料**：RAGAS 文档（指标定义，0.4.3）；Anthropic《Contextual Retrieval》（hybrid + rerank 的出处）。见 `SOURCE_MAP.md`。

## 节奏表

| 部分 | 分钟 | 页码 | 页数 | 学员产出 |
|---|---|---|---|---|
| 封面 + 目录 | 0–2 | 1–2 | 2 | — |
| 1 开场 | 2–11 | 3–8 | 6 | 看清学到哪；聊天框答四道测试 |
| 2 四类失败 | 11–23 | 9–13 | 5 | 检查点 1：四个坏答案归类 |
| 3 Golden case | 23–32 | 14–17 | 4 | 能说出五个字段和覆盖原则 |
| 4 读报告 | 32–46 | 18–23 | 6 | 检查点 2：读 baseline 报告，先修什么 |
| 5 单变量实验 | 46–54 | 24–26 | 3 | 能说出冻结什么、只改什么 |
| 6 五个旋钮 | 54–76 | 27–32 | 6 | 检查点 3：hybrid 上不上 |
| 7 地图 + 收尾 | 76–82 | 33–35 | 3 | 知道 W6 接什么 |
| 缓冲 | 82–90 | — | — | 答聊天框问题 |

## 逐页规格

格式：页码 · 文件 · 标题｜页面上有什么｜讲师提示（不上页面）。过渡页（C02–C07）用同一个目录组件，当前部分高亮、讲过的打勾、没讲的变淡。

1. **S01_Cover** · RAG Quality｜“分数变了，不等于系统变好了。”；讲师 Jessie｜—
2. **S01b_Agenda** · 今天的目录｜七个部分，各一个问题；灰字接 W2 / W4｜每部分开始前回到目录
3. **S02_Footprint** · 我们走到哪了｜W1–W12 路线；W1–W4 打勾，各一个问题 + 关键词；W5 “你在这里”；W6 下一站；W7–W12 只写课名、变淡；三段灰字：W2–W5 模型看到什么 / W6–W9 模型能做什么 / W10–W12 怎么上生产｜2 分钟沿路线走一遍，W4 停一下：“今天在它上面加测试”。W1 关键词待讲师确认
4. **S03_Q1** · 测试 1：top-k 从 3 调到 5，每次请求多付出什么？｜选项：只多花一点检索时间 / 更多 token 和成本，还可能混进更多无关内容 ✓ / 什么都不多付｜接 W2 预算、W4 top-k 是预算
5. **S04_Q2** · 测试 2：v1 已作废、v2 生效，两版都在索引里，用户问能不能带狗｜选项：没问题，模型会自己挑新版 / 作废的 v1 可能被检索出来，答成“不能带” ✓ / 检索一定只找到 v2｜接 W3 freshness、W4 索引版本；埋第 11 页 G04
6. **S05_Q3** · 测试 3：哪种回答状态？｜左：“访客停车超过 3 小时怎么收费？”，政策只写“免费停车 3 小时”；选项：supported / partial ✓ / conflict / no_answer｜G16；埋第 13 页
7. **S06_Q4** · 测试 4：这算失败吗？｜左：“护理经理的电话是多少？”助手：“资料里没有找到”；选项：算，没回答问题 / 不算，资料里本来就没有，这是正确的 no-answer ✓｜G17；埋第 10 页
8. **S07_System** · 今天用的这套系统｜三张卡：9 份政策（探视政策 v1 作废 / v2 生效，1 份仅限员工）；20 条 golden cases；baseline：固定 120 字切块、纯向量检索、top-3、不过滤版本｜“老师提供的 reference RAG”；不讲代码
9. **C02** · 第 2 部分 · 四类失败
10. **S08_FourFailures** · 错，分四类｜四行：该找的没找到 → Retrieval；说的话没证据 → Grounding；引用指错了 → Citation；该答不答、不该答却答 → No-answer（两个方向）｜R 和 G 标“上节课讲过”，今天多两类
11. **S09_G04** · 证据明明在，为什么还算 retrieval 失败？｜G04 “能带狗去看我爸吗”；top-1 v2：可以，需提交 VF-02；top-2 v1（已作废）：宠物不得进入院区｜过期版本混进 top-k 也算 retrieval 失败：模型可能跟着 v1 答
12. **S10_G01** · 一句话被切成两半｜G01 “周末要预约吗”；gold 句子“周末及公众假期探视需至少提前 24 小时通过家属门户预约”被固定 120 字切块切在两块里｜规则：一块必须包含整句才算找到。指标按定义算，先读定义再读分数
13. **S11_Check1** · 检查点 1：R、G、C 还是 N？｜四张卡，每张一个问题 + 关键证据 + 助手回答：G10（漏了药物分装，那块没进 top-k）→ R；G02（答对 20:00，又补一句“未提及第 2 版是否生效”，原文写着生效）→ G；G03（引用作废 v1，答“最多 2 位”，v2 是 3 位）→ C；G16（资料写了免费 3 小时，却整个拒答）→ N｜真实运行，页脚标模型
14. **C03** · 第 3 部分 · Golden case
15. **S12_CaseAnatomy** · 一条 golden case 长什么样｜G07 “周末带 8 岁的孙子去探视，要注意什么？”五个字段：question / expected_state: supported / gold_evidence：两句原文 / reference / traps: multi_evidence, stale_version｜一页一个字段一行
16. **S13_QuoteNotId** · 证据写原句，不写 chunk 编号｜左：`visiting-policy@v2#01` → 换切块后编号就变了；右：原句永远在｜接第 12 页的“整句才算”
17. **S14_Coverage** · 20 条题，要考到哪些坑｜陷阱分布：stale_version 5 / multi_evidence 4 / lexical_code 2 / out_of_scope 2 / clinical_boundary 2 / permission 1 / partial_evidence 1；期望状态 16 supported、1 partial、3 no_answer｜没有拒答题，就测不出 over-answer
18. **C04** · 第 4 部分 · 读报告
19. **S15_MetricMap** · 每个指标看哪一层｜Retrieval：recall@k（上节课讲过）、precision@k、MRR、context precision / recall；Grounding：faithfulness（上节课讲过）；Citation：程序检查；No-answer：状态对比；回答切题：answer relevancy｜RAGAS 是一套打分工具，大部分分数由 LLM 当裁判打
20. **S16_G03** · faithfulness 满分，答案却是错的｜G03：引用作废 v1，“最多 2 位”；faithfulness 1.0；citation 检查：stale_version｜faithfulness 只看有没有证据撑着，不看证据是不是过期；所以引用要由程序查版本（接 W4）
21. **S17_ReadNumber** · 一个数字怎么读｜`recall 0.853（n=17）`：3 条拒答题没有 gold 证据，不算进去，不是记 0；20 条 case：一条 = 5 个百分点；裁判出错记缺失，不记 0｜—
22. **S18_JudgeWrong** · 裁判也会判错｜G19 回答“不可以，易腐食品不得存放在住户房间内。”几乎照抄原文，faithfulness 0.5；G12 完全有据，0.2；都被标成 grounding 失败｜5 条 grounding 失败里，抽检至少 2 条是裁判错。先抽检，再相信
23. **S19_Check2** · 检查点 2：先修什么？｜baseline 报告摘要：失败 R 6 / G 5 / C 1 / N 1；混入过期版本的 case 5；状态正确率 0.650；选项：先换更强的模型 / 先解决过期版本混入检索 ✓ / 先调 prompt｜R 最多，且大多数和过期版本有关；G 的 5 条里有 2 条是裁判错
24. **C05** · 第 5 部分 · 单变量实验
25. **S20_OneVariable** · 一次只改一样｜冻结：golden set、语料、prompt、模型（manifest 里的 hash）；只改：config 里的一个键；config diff 超过一项 → 无法归因｜—
26. **S21_ReadCompare** · 读对比报告，看四样｜主指标；护栏指标（延迟、成本）；修好的 case；新坏的 case → 最后人工抽检｜—
27. **C06** · 第 6 部分 · 五个旋钮
28. **S22_Filter** · Metadata filter：只检索生效版本｜过期混入 5 → 0；失败 6 → 3；修好 G02、G03、G04；recall 不变｜正好对上失败原因
29. **S23_Section** · 按章节切块：平均分涨了，一条变坏了｜recall 0.853 → 0.941；新坏 G05 “VF-02 表在哪里拿”；失败 6 → 7｜—
30. **S24_Check3** · 检查点 3：hybrid 上不上？｜recall 0.853 → 0.765；MRR 0.853 → 0.735；修好 G04；新坏 0；失败 6 → 5；延迟 2.9 → 4.1 ms｜没有唯一答案；好回答：不能只看平均分，去看修好的和掉了的是哪几条
31. **S25_TopkRerank** · 两个没帮上忙的旋钮｜top-k 3 → 5：precision 0.314 → 0.188，过期混入 5 → 9，修好 0；rerank：延迟 2.9 → 67.6 ms，修好 0｜只念结论
32. **S26_Remaining** · 还剩 3 条，哪个旋钮都修不好｜G01、G07、G10 在六组实验里都失败；聊天框：下一个实验做什么？｜引导：chunk overlap（句子被切断）、多证据要更大的 top-k 或 Query Rewrite；一次只试一个
33. **C07** · 第 7 部分 · 地图 + 收尾
34. **S27_NextMap** · 接下来｜W6 Practice：把今天的约定做成 eval pipeline；Query Rewrite 留到以后；W6 理论：Tool Calling & MCP｜—
35. **S28_End** · 收尾｜“先看失败原因，再选旋钮；结论要配具体的 case。”｜答聊天框问题

## 发布范围

已部署。讲师 2026-10-27 说“可以直接做 W5 的课件了”，课件完成后又说“直接部署吧”；经 PR #102 合并到 main 并发布，线上回读通过，见 `QA.md`。
