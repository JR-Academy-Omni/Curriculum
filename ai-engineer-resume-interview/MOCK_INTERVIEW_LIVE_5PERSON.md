# AI Engineer 模拟面试 — 线上 5 人直播主持脚本

> 本文件是 `MOCK_INTERVIEW_QUESTIONS.md`（核心 Q1–Q11）和 `MOCK_INTERVIEW_SUPPLEMENT.md`（补充题库）的**第三份、不同用途**的文件：前两份是「读答案库」格式，本文件是**线上 5 人同时模拟面试的直播主持脚本**——全程口头、不写码不看码、按点名轮转、题干英文（真实面试语言）+ 中文考察点/评分。
>
> **目标场景**：针对 Deloitte（AI & Data Engineer，咨询业务线）/ Future Secure AI（Staff AI Engineer，企业 Digital Worker 产品）类似公司的 AI Engineer 面试，做学员模拟面试。
>
> **画像依据**（有 ground truth，不是拍脑袋）：
> - Future Secure AI 真实 Seek JD（`jr-jobs/src/data/scraped-jobs/2026-06-11.json`）：Staff AI Engineer @ Sydney Olympic Park，做企业 "Digital Workers"（LLM + RAG + ML 自动化），关键词 regulated industries 安全部署 / AI governance / vector DB / stakeholder 沟通 / mentor junior
> - Deloitte 官方招聘流程（`skills-data/interview-processes/deloitte/`）：咨询业务线，强调技术深度 × client-facing 沟通，看 production-grade GitHub 不是 notebook，要 business outcome 不要工具清单
>
> **共同定位**：企业级 AI 交付，不是硅谷产品公司也不是 research。

---

## 怎么跑（线上 5 人核心机制）

1. **每题先点名一个人答**，答完必问下一个人 *"Do you agree? Anything you'd add or change?"* —— 逼所有人听前面的人说什么，也能看出谁敢说"我不同意"
2. **每轮换不同的人先答**，避免总是同一人开口
3. **有人讲超过 90 秒就打断**："Let me stop you there — C, do you agree with that?"
4. **每轮结束花 30 秒讲一句点评**，不要攒到最后
5. 速答题（Rapid Fire）：30 秒内答，答不出说 "pass" 立刻传给下一个人

---

## 总时长与轮次总览

| 轮 | 内容 | 时长（完整版） | 时长（90min 压缩版） |
|---|---|---|---|
| R1 | 自我介绍 & 现状 | 15-20 min | 10-12 min |
| R2A | 参数速答（temperature/token 等） | 5-8 min | 挑陷阱题 |
| R2B | RAG 速答 + 核心递进链 + 深挖题 | 30-35 min | 20 min |
| R2C | Agentic AI | 20-25 min | 挑 5 题 12 min |
| R3 | AI Coding + ADLC + Context 文件 | 25-30 min | 12 min |
| R4 | System Design（RAG 案例） | 35-60 min | **不砍，32 min** |
| — | Agent Case Study（发票 Digital Worker，可选加时） | 20 min | 时间不够跳过 |
| R5 | 沟通 & Behavioral 收尾 | 20-30 min | 12-14 min |

**总计**：完整版约 2.5-3 小时（建议拆两晚跑，或砍掉 Agent Case Study 和部分选做题控制在 2 小时）；90 分钟压缩版见文末。

---

# Round 1 · 自我介绍 & 现状
**15-20 min · 每人 3 分钟 · 人人能答，暖场**

每人依次答三件事：
1. *"Who are you in one sentence?"*（一句话说清你是谁）
2. *"What have you actually been building in the last three months? Walk me through a normal Tuesday."*（最近三个月实际在做什么，一个普通周二你在干嘛）
   - ✅ 具体到文件/工具/卡点；🚩 全程主语"我们团队"，或答的是技术栈清单
3. *"What's the one thing you know you're weak at?"*（最清楚自己弱在哪）
   - 🚩 假缺点（"我太追求完美"）或"没有明显弱项"

**追加题（Deloitte/Future Secure AI 区分度）**：
- *"Why us? We're a consulting firm delivering to clients / we're a product company building Digital Workers for regulated industries. Which one fits you and why?"*（要能分清"咨询"和"产品"两种活法，不能用通用答案糊弄）
- *"Where do you want to be in two years — IC depth or leading a team?"*（Staff 级必问）

**收尾**：*"After hearing everyone, who here has a background closest to yours? Who's most different?"*（测倾听）

---

# Round 2 · RAG

## R2A · 参数速答
**5-8 min · 每题 30 秒，答不出传下一个人**

### A 档（人人该会）
1. What is temperature?
2. 政策问答机器人该用高还是低 temperature，为什么
3. What is a token? Is it a word?
4. max_tokens 限制的是输入还是输出
5. What's the context window?
6. System prompt vs user prompt 区别
7. 为什么要流式输出（streaming）
8. Input token 和 output token 哪个更贵

### B 档（真写过代码）
9. What is top_p?
10. 会同时调 temperature 和 top_p 吗（一般只调一个）
11. Stop sequences 是干嘛的
12. Seed 的作用
13. 怎么让模型可靠返回 JSON（structured output/function calling，不是自己写正则）
14. JSON 总是被截断一半，最可能原因（max_tokens 设小了）
15. Prompt caching 是什么，什么时候有用
16. 检索里 top_k 是什么意思

### C 档 ⭐ 陷阱题（最有教学价值，一定要留时间）
- **T1** *"temperature=0 就不会幻觉了？"* → ❌ False。temperature 管的是"怎么挑"，不管"候选答案对不对"——0 只会让它稳定地重复同一个错误答案
- **T2** *"max_tokens 调大回答就更好？"* → ❌ 只是允许更长，跟质量无关，还更贵
- **T3** *"context window 这么大了，还需要 RAG 吗？"* → ✅ 需要——贵、慢、塞太满中间反而看不见、**没法做权限**（不能塞财务文档给实习生指望它自己不说）
- **T4** *"同 prompt 同模型 temperature=0，输出一定完全一样吗？"* → ⚠️ 不保证，工程上不能当确定性系统依赖
- **T5** ⭐⭐ *"答案不对，该调高还是调低 temperature？"* → 陷阱——正确反应是反问"是编的还是检索错了"，检索错了调 temperature 完全无关。**这题是整晚"先诊断再动手"主线的第一次出现**

---

## R2B · RAG 核心递进链
**20 min · 一条链问到底，每层换一个人**

1. **Layer 1** *"In simple words — what is RAG?"*
2. **Layer 2** *"Why not just ask the model directly?"*（模型知识截止/不知道内部数据/会编/没出处）
3. **Layer 3** *"How does it find the right documents?"*（变成向量，找距离最近的）
4. **Layer 4** *"What is a vector/embedding? Explain to someone non-technical."*
5. **Layer 5** *"200 页文档塞不进去怎么办？"*（切块；追问：切错地方会怎样——一句话切两半，答案就错）
6. **Layer 6** 上线后搜 "ERR_2043" 返回无关内容，5 人每人答一个不同原因（切坏了/没这内容/用词不匹配/排序问题/索引没更新）
7. **Layer 7** ⭐⭐⭐ *"动手改之前，怎么确认到底是哪个原因？"*（先看检索到了什么，先诊断再动手——**答得出来的人 R4 重点关注**）

### RAG 陷阱题补充（挑 3-4 题问最强的几人）
- 检索越多文档越好？→ ❌ 噪音稀释+成本涨+塞太满看不见
- 答案在所有文档里都没有，系统会怎样？→ ⚠️ 照样自信编，得靠阈值+显式要求"不知道就说不知道"
- 新旧政策矛盾会怎样？→ ⚠️ 模型不知道哪个新，靠 metadata 生效日期过滤，不是靠 prompt 说"用最新的"
- 检索差该换 embedding 模型吗？→ 先看 top-50 里有没有对的文档：有=排序问题加 rerank，没有=召回问题才换模型
- 相似度分数 0.85 算高吗？→ 单独看无意义，不同模型分布不一样，要看自己数据上的分布再定阈值

### RAG 深挖题（独立展开，可插入递进链后）

**Q. Chunking strategies, and how do you choose the right chunk size?**
- ✅ 策略：fixed-size / fixed+overlap / recursive structure-aware / semantic chunking（贵）/ document-aware（企业最实用，按条款/标题切）
- ✅ 大小取决于：文档类型、问题类型、embedding 模型甜点区间、有没有 rerank 兜底、成本
- **关键句**：不凭空定数字，先看真实文档结构+真实用户问题，拿候选 size 在标准问题集上测
- 追问：条款横跨两个 chunk 会怎样（答案不完整/错）；换 500→800 token，索引要重新切+重新 embed（成本要算进决策）

**Q. What are embedding models, and how do they convert text to vectors?**
- ✅ 是什么：训练出来的网络，输出固定长度向量，是"意思"在数学空间的坐标
- ✅ 为什么：把"语义相似"变成能计算的数学题（cosine similarity）
- ✅ **怎么变成向量（技术步骤，容易漏答）**：Tokenize → 过 Transformer 每层根据上下文互相调整 → 每个 token 有自己的向量 → **Pooling**（mean 或 CLS token，把一堆 token 向量压成一个）→ 输出固定维度向量
- ✅ 为什么相似的话向量接近：训练用对比学习（contrastive learning），相近样本对拉近、无关的推远
- 追问："river bank" 和 "bank account" 里的 "bank" embedding 一样吗（不一样，上下文相关）；中文文档英文提问还能搜到吗（取决于是不是多语言模型）；两个不同 embedding 模型的向量能互相比吗（不能，坐标系不同）

**Q. GraphRAG / 其他 RAG 架构，什么时候该用？**
- ✅ Naive RAG（局部事实型问题）→ Advanced RAG（query rewriting/hybrid/rerank，企业默认及格线）→ Agentic RAG（多跳问题，自己决定要不要再检索）→ **GraphRAG**（"总结全部文档共同主题"这种 global sensemaking 问题，代价是建图谱预处理成本高+维护成本高）
- **关键句**：不因为更新就默认用 GraphRAG，先看真实问题是"找一个事实"还是"理解全局"
- 追问：5 万篇文档主要问"X 流程是什么"该推荐 GraphRAG 吗（不该，标准 RAG 就够，规模不是决定因素，问题类型才是）

**Q. ⭐ 检索到的文档里藏着 "ignore previous instructions" 这种话，怎么防？**（间接 prompt injection，企业/受监管行业必问）
- ✅ 检索内容和用户输入一样不可信；防御分层：system prompt 划清"文档只是参考不是指令" + 格式隔离（XML 标签包住）+ 高风险输出后置检测 + **权限最小化**（就算被骗了能做的事也有限）
- 追问：如果是有工具调用权限的 agent 而不只是 chatbot，为什么更危险（被注入的指令可能真的触发一次转账/删除操作）

**其他选做题**（时间够再问）：
- 每条消息都要走检索吗（query routing，"你好"不该触发检索）
- 除了 faithfulness 还追踪什么指标（RAGAS：Context Recall/Precision 测检索侧，Faithfulness/Answer Relevance 测生成侧）
- 保单文档有表格，chunking 会踩什么坑（表格切碎，要单独识别处理）
- 两份文档 95% 相似（草稿 vs 终稿），会造成什么问题（挤占 top-k，且可能内容冲突）

---

# Round 2C · Agentic AI
**20-25 min · 建议插在 R2B 之后或独立成 R3.5**

## 基础
1. *"单次调用 LLM 和跑一个 agent，区别在哪？"*（agent 能自己决定下一步、调工具、看结果、循环直到完成）
2. *"agent 为什么需要工具？"*（模型不能执行真实动作）
3. *"为什么用 function calling 而不是自己 parse JSON？"*（schema 约束、少 retry、类型安全）

## 核心区分度
4. ⭐ *"What is MCP, and what problem does it solve that function calling alone doesn't?"*
   - ✅ **协议不是 API**——把工具从"绑死在某应用"解耦成"任何 client 都能连的 server"，写一次到处复用
   - 追问：什么场景不需要 MCP（工具只自己项目内用，不需要跨应用复用）
5. *"Single agent + tools vs multi-agent，怎么选？"*（任务能线性拆 → single+tools；有并行/需要角色协作 → multi-agent。别一上来就 multi-agent）
6. ⭐⭐ *"Agent 卡进循环烧了 200 刀 token，怎么定位，怎么防？"*
   - ✅ 定位靠 trace 看完整工具调用序列；防止：max_iterations + 成本预算熔断
   - **关键加分**：根因常是**工具描述写烂了**——模型看不懂怎么用，反复试。改描述比加限制更治本
7. *"事后怎么知道 agent 真正做了什么？"*（靠 trace/log，不是看它自己的总结——自我总结可能和实际执行不一致）

## 治理与边界（Staff 级 / 受监管行业必问）
8. ⭐⭐⭐ *"Digital Worker 处理发票端到端，上线前加什么护栏？"*（直接对应 Future Secure AI 业务）
   - ✅ 工具权限最小化 + 金额异常触发人工审核 + 每步可审计 + 先跑影子模式观察再放权
9. *"Agent 调工具参数错了（查错发票号），怎么在造成损失前发现？"*（工具本身要参数校验，高风险动作前加确认步骤）
10. *"什么任务哪怕涉及 AI，你也不会用 agent 做？"*（流程固定确定性的，用普通代码写死，别为了"听起来炫"就 agentic 化——这是这两家最容易踩的坑）
11. *"评估 agent 为什么比评估单次 LLM 调用更难？"*（多步骤，误差累积；同一任务可能走不同路径都达成目标，"过程对不对"比"结果对不对"更难衡量）

---

## Multi-Agent Shared Memory · 独立小节
**15-20 min · Staff 级，留给场上表现最好的人**

### 核心题
**⭐⭐⭐ *"多个 agent 协作，怎么处理它们之间的共享 memory？做错了会出什么问题？"***
- ✅ 分三层：① 先分清 memory 类型（短期会话内 vs 长期持久化）② "共享"是设计决策不是默认行为 ③ 做错了的后果——一个 agent 写错会像滚雪球污染所有读它的人；竞态问题；权限问题；context 爆炸
- 🚩 "就用同一个数据库大家都能读写"

### 具体 Strategy（答出 2 个以上算过关）
| Strategy | 怎么运作 | 适合场景 |
|---|---|---|
| Orchestrator-Worker | 中心协调者持有状态，worker 汇报回来 | 任务能拆、需要统一决策 |
| Blackboard 共享草稿板 | 公共白板贴结果，写入要校验 | 探索型任务 |
| Handoff 消息传递 | 结构化结果直接传给下一个，不共享存储 | 流程线性 |
| 共享向量库当长期记忆 | 结论写进库，靠检索读 | 需要跨任务持久化知识 |
| 分区/命名空间隔离 | 按 agent/任务分区，共享要走显式提升步骤 | 权限本来就不一样的多个 agent |

追问：*"发票 case 你会选哪个，为什么不选别的？"*（线性流程选 Orchestrator/Handoff；探索型协作才用 Blackboard）

### Architecture 拓扑
| 架构 | 长什么样 | 代价 |
|---|---|---|
| Single Agent + Tools | 一个 agent 多工具——**默认选项** | 无，基线 |
| Pipeline | A→B→C 固定顺序 | 好 debug，灵活性低 |
| Supervisor | 中心协调者拆任务派活 | 中等复杂度，**企业最常用** |
| Hierarchical | Supervisor 之上还有 Supervisor | 链路长难追责，通常过度设计 |
| P2P/Swarm | 无中心互相转手 | 最灵活也最难 debug |
| Network | 任意调用任意 | 生产环境不推荐 |

⭐ 最该问的追问：*"每多一个 agent 都加延迟成本，怎么判断真的需要拆多个 agent 而不是一个 agent 配几个工具？"*（🚩 最常见误区：默认 agent 越多越强）

### 收尾陷阱题（测有没有盲目追新）
**Q. *"有人说用 blockchain 协调 agent 共享状态，也有人用 git 式版本管理。区别在哪，什么时候选哪个？"***
- ✅ Git 解决：**已经信任的系统内**的历史记录和回滚，企业内部多 agent 协作够用
- ✅ Blockchain 解决：**互不信任的多方之间**的共识和防篡改，只有跨组织、无中心权威才需要
- 🚩 "blockchain 更安全所以用它"——没想清楚企业内部根本不存在"互不信任"这个前提
- 追问：反过来，Digital Worker 要和另一家公司的 agent 交易，双方都不完全信任对方，这时候答案会变吗（会——这才是 blockchain 真正的主战场）

**教学总结句（跟全组说）**：*GraphRAG → Multi-agent 拓扑 → Blockchain vs Git —— 今晚同一条主线第三次出现：技术选型不是看哪个更新更炫，是看你的问题到底是什么。*

---

# Round 3 · AI Coding + ADLC + Context 文件
**25-30 min · 全程口头**

## AI Coding 基础
1. 用什么工具，Copilot 和 agent 模式区别
2. 动手改之前先干嘛（先读文件出计划）
3. "测试都过了"之后你做什么（**先看 diff 不是先看测试结果**——测试断言可能被悄悄改松）
4. ⭐ 它编出一个不存在的函数/库，怎么发现（跑起来才知道，没跑过的人答"没遇到过"）
5. 什么绝不让 AI 写（钱/权限相关核心逻辑）
6. 它把密钥硬编码/SQL 拼接，让它自审能发现吗（**不能完全指望**，安全代码要独立人工检查）
7. 老代码没注释没测试，做法有什么不一样（更谨慎：先只读不改、核实理解对不对，改动范围收更小）

## Context 文件 / CLAUDE.md
8. *"What is a CLAUDE.md (or .cursorrules 之类)？为什么需要它？"*（每次开新对话 AI 是失忆的）
9. ⭐ *"好的和差的上下文文件区别在哪？举一个不该写进去的例子"*（能从代码推断的不用写；该写代码里看不出来的——为什么这么设计、踩过的坑、红线）
10. *"约定写清楚了 AI 还是不遵守，可能原因？"*（文件太长关键规则被埋没/规则和当前任务"距离太远"/没被读进这次 context）
11. *"monorepo 60 个子项目，一个大文件还是很多小的？"*（多个分层，大部分工具自动往上找父目录叠加读取）
12. ⭐⭐ *"能百分百信任 AI 会遵守上下文文件吗？信任了风险是什么？"*（**不能**，它是提示不是约束，真正红线需要流程硬卡点如 review/CI/权限控制兜底）
13. *"谁有权限改'告诉 AI 哪些代码碰不得'的这份文件？"*（应该受控，不能随便一个人改了就生效）

## ADLC 团队流程
> 过渡语：*"接下来聊 ADLC——如果不确定我指哪个意思，先问我。"*（测澄清意识，答不上来直接猜是 🚩）

14. 从"要这功能"到"上线"，AI 在哪几步介入，哪几步不介入（**帮不上的是搞清楚需求**）
15. 哪一步 AI 帮得最少，哪一步反而更危险（帮最少=需求对齐；更危险=代码审查因量大被懒得看、测试可能被改松）
16. ⭐ 代码是 AI 写的、测试也是 AI 写的，到底在验证什么（全组抢答——验证的是"AI 理解自洽"不是"需求本身对不对"，人必须留在定义正确性这一环）
17. AI 生成量大了，"done"的定义变了吗（该包含"我能解释这段代码为什么这么写"）
18. Review 变成瓶颈后，怎么防质量下滑（强制拆小 PR、AI 生成部分标注、关键路径人工卡点）
19. ⭐ 谁决定哪些代码 AI 不能碰（**必须是写下来的规则**，不是"大家都知道"——口头约定赶工期第一个失效）

## 治理收尾
20. ⭐⭐ AI 写的代码出了生产事故，复盘和人写的 bug 有区别吗（**没区别，责任在批准合入的人**——答"AI 的锅"是危险信号，说明会甩锅）
21. 上线之后有什么要一直做下去的（监控质量、模型/工具换版本要重测、定期审查约定是否还有效）
22. 怎么知道 AI 工具真的让团队变快了，不只是用得多（看周期+返工率+线上 bug 密度，不是使用频率）

**收尾一句话**：AI 让你变成更好的工程师还是更懒的？说实话。

---

# Round 4 · System Design（RAG 案例）
**35-60 min · 口头递进，我一层层加条件，不画图不写码**

**开场**：*"公司想要一个内部文档问答系统：5 万篇文档（HR/合规/信用风险/IT），1 万员工，文档每天更新，有的文档有权限限制（信用风险能看的 HR 看不了），受监管行业（数据不能出境，每个回答要可审计）。设计它。"*

| Step | 加的条件 | 期待答案 |
|---|---|---|
| 1 | 最先 5 分钟你会问我什么（不问就扣分） | 谁用/问什么类型问题/答错后果多大/延迟要求/预算/成功怎么衡量 |
| 2 | 画完整 pipeline | ingestion→embedding→index→hybrid retrieval→rerank→generation+citation→eval→监控 |
| 3 | ⭐⭐⭐ 信用风险能看的文档 HR 不能看，怎么强制 | **必须在检索层做**（metadata filter），不能靠 prompt 说"不要回答"；权限来自 SSO 且要实时；追问：昨天有权限今天没了，缓存怎么办 |
| 4 | 文档每天更新，怎么防索引变旧 | 增量同步+变更检测；**别漏了删除也要同步**，不只是新增 |
| 5 | 怎么知道系统好不好 | golden set + context recall/faithfulness 分开看 + eval gate + 用户反馈回流 |
| 6 | faithfulness 从 92% 掉到 78%，第一步做什么 | **先看 context recall 有没有跟着掉**——跟着掉=检索侧，没跟着掉=生成侧 |
| 7 | 攻击自己的设计，还有三个没覆盖的失败点 | 文档互相矛盾/答案压根不存在/多跳问题/表格图片搜不到/中英混合 |
| 8 | CFO 要砍一半 token 账单，质量不许降，按 ROI 排序 | prompt caching（最大且几乎零代价）→语义缓存→模型路由→压缩上下文→最后才换模型 |
| 9 | 数据不能出境、要可审计，设计变什么 | 区域绑定端点、embedding 也算数据出境、日志要能重放（检索了哪些 chunk/什么模型版本/什么 prompt）、保留期限和删除权 |

---

# Agent Case Study · Digital Worker 处理发票（可选加时）
**20 min · 口头递进，和 R4 对称——R4 讲"回答问题的 AI"，这个讲"会采取行动的 AI"**

**开场**：*"财务团队每天收 200 张发票邮件，要核对采购单再录入账务系统。客户想要 agent 端到端搞定。一步步来。"*

| Step | 问题 | 期待答案 |
|---|---|---|
| 1 | 最简单版本要做哪几步 | 读附件→提取信息→核对采购单→匹配就录入不匹配就标记 |
| 2 | 需要接入哪些工具 | 读（邮箱/文件）、查（ERP 核对）、写（记账系统）——三类权限性质不同 |
| 3 | 金额差 $50 不匹配，agent 该怎么办 | **不自己拍板**，标记异常转人工。🚩 让它自己判断合不合理就放行 |
| 4 | ⭐ 该不该让它自动点"提交付款" | **按风险分层**：小额+白名单供应商+完全匹配可自动放行；大额/新供应商/不匹配必须人工。不是非黑即白 |
| 5 | 3 万块打错账户，怎么查发生了什么 | 拉 trace/日志看那次读到什么、匹配了哪条、有没有走人工确认 |
| 6 | 发现它对同一发票反复调 40 次"查供应商"工具 | 大概率工具描述写不清楚；根治是改工具描述+错误返回信息，不只是加 max_iterations |
| 7 | 审计要求"给我看上个月每个决定和谁批准的高风险项" | 前提是从一开始就设计了完整审计日志，不是事后能补的 |
| 8 | 全组：这设计还缺什么 | 供应商信息可能被钓鱼伪造/多币种汇率/OCR 识别不准手写扫描件 |

---

# Round 5 · 沟通 & Behavioral 收尾
**20-30 min · 简单情景，人人能答**

1. 客户只说"要个 ChatGPT"，你问什么（反问范围/用户/后果/时限）
2. ⭐ 30 秒给完全不懂技术的人解释我们刚设计的系统，不许出现一个术语（最好的沟通测试）
3. 员工担心被 AI 取代，你怎么说（诚实+讲清楚接管哪类不接管哪类，承认担忧合理）
4. 讲一次你做砸的项目，哪里错了（测诚实度，不许甩锅）
5. 客户坚持一个你确信会失败的方案，他在付钱，你怎么办（不硬顶不照做——用他们的语言讲清风险，留痕，设检查点）
6. 你想问真面试官什么（有信息量的问题：团队现在最难的技术债是什么/新人前三个月做什么）

**全场收尾**：一句话，今晚之后第一件要去补的是什么

---

# 打分表

| 维度 | 看什么 | 主要在哪轮 |
|---|---|---|
| 真实性 | "我做过"还是"我知道" | R1 R3 R5 |
| 概念清晰 | 说得出边界不只是定义 | R2 |
| 工程手感 | 出问题第一步干嘛 | R3 R4 |
| 系统思维 | 分层、取舍、知道自己方案哪里弱 | R4 |
| 治理意识 | 权限/审计/责任归属 | R2C R3 R4 |
| 沟通 | 能对非技术的人说人话 | R1 R5 |
| 不追新 | 技术选型看问题不看新旧 | R2C（GraphRAG/拓扑/blockchain 三连） |

**判断线**：
- R2 基础链断了 → 补概念别急着投
- R4 Step 3（权限题）答"prompt 里说" → 企业岗必挂
- R5 Q2 说不清人话 → 技术再好也过不了终面，这两家尤其
- 连续答"AI 的锅"/"blockchain 更安全所以用它" → 不会取舍，只会追新，Staff 级会挂

---

# 90 分钟压缩版

| 轮 | 时长 | 保留 |
|---|---|---|
| R1 | 10 min | 只问"最近三个月在做什么"+"最弱是什么" |
| R2A+R2B | 20 min | 陷阱题 T3/T5 + 递进链 Layer 1/3/5/6/7 |
| R2C | 12 min | Q1/Q4/Q6/Q8/Q10 五题 |
| R3 | 12 min | AI Coding Q3/Q4/Q6 + Context Q9/Q12 + ADLC Q16/Q19/Q20 |
| R4 | **32 min，不砍** | 全部 Step |
| R5 | 12 min | Q2/Q4/Q5 |

---

*本文件与 `MOCK_INTERVIEW_QUESTIONS.md`/`MOCK_INTERVIEW_SUPPLEMENT.md` 是互补关系，三份共同构成 AI Engineer 模拟面试题库。*
