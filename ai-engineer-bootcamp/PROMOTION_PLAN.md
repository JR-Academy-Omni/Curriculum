# AI Engineer Bootcamp Cohort 7 — 新角度推广方案

> 版本：2026-08-29
> 课程事实 SoT：[`COHORT_07_OUTLINE.md`](./COHORT_07_OUTLINE.md) 与 [`public/outline.json`](./public/outline.json)
> 视觉 SoT：[`DESIGN.md`](./DESIGN.md)
> 未确认字段：价格、开班日期、席位、学员规模、就业与薪资数据。没有负责人或生产系统证据前不得发布。

## 1. 推广策略变化

第七期不再以“学了哪些 AI 名词”或“做一个 Aged Care 项目”作为主叙事。

对外首先用最直白的话讲清教学方式的变化：

> **以前一周两节都在学知识。第七期，一节学原理，一节做项目。**

> **而且不是每周换一个 Demo，是连续 13 周把同一个 Agent 项目做完。**

这种新教学方式最终带来一个可被看见的结果：从标准软件产品底座出发，用 13 周持续交付一套能调用工具、管理记忆、接受评估、受到治理并具备发布控制的 Enterprise Agent System。

传播层级必须固定：

1. **最大改变**：以前两节课都以知识学习为主；第七期一节讲原理，一节做项目。
2. **课程品类**：Enterprise AI Engineering。
3. **学习结果**：从 Software Engineer 升级为能交付 Production Agent System 的 Applied AI Engineer。
4. **实践方法**：同一项目主线、连续 13 周、五次能力升级；代码库按系统边界合理拆分。
5. **案例角色**：CareKind 是高约束工程案例，用来暴露真实系统问题，不是课程行业定位，也不是学员未来只能做的产品。

## 2. Campaign 核心思想

### 主命题

**会调用模型，不等于会交付 AI 产品。**

### 三组传播冲突

- **Agent 能跑 ≠ Enterprise-ready**：没有 permission、tracing、eval、rollback 和 owner，就不能安全上线。
- **做过 Demo ≠ 有工程证据**：面试官需要看到架构选择、失败处理、评测结果和 release decision。
- **项目案例 ≠ 行业限制**：高约束案例训练出的 RAG、Tools、Memory、Governance 和 Human-in-the-loop 能迁移到金融、法律、政府、客服与企业内部系统。

### 推荐主标题

**13 周，完成一次 Enterprise Agent 产品交付**

### 推荐副标题

**12 场理论 Live + 13 场独立实践 Live。从标准产品底座开始，围绕同一套系统逐步完成 Tools、RAG、Agent、Memory、Harness、Governance、Evals 与 Production Release。**

### 可轮换 Hook

- 你的 Agent 为什么敢上线？
- 如果 Agent 调错工具，系统如何阻止它？
- RAG 引用了过期政策，谁能发现、谁来负责？
- Memory 写入错误事实，如何隔离、纠正和撤回？
- 面试时，除了 Demo，你能拿出哪些 production evidence？

## 3. 从第五期到第七期：教学方式重构

### 核心升级叙事

> **以前一周两节都在学知识。第七期，一节学原理，一节做项目。**

第五期已经是一周两节课，所以第七期不是“多加一节课”。真正的变化，是把其中一节完整留给项目实践。第一节讲 AI Engineering 原理；第二节马上把这项能力做进同一个项目。下周不换题目，继续在上周代码上开发，连续做 13 周。

最短广告版本：

> **一周两节：一节学，一节做。**

完整品牌版本：

> **第五期建立 10 层 AI 工程知识地图；第七期用 Theory + Practice 双 Live，让这 10 层在同一套 Production Agent System 里真正运行。**

这不是推翻第五期，也不是把理论课改成 coding class。第五期完成了从 Foundation、Context、RAG、Agents、Memory 到 Harness、Model 与 Observability 的 10 层知识组织；第七期继续保留理论线，同时新增一条同等完整的实践线。两条课各自承担不同任务：理论课建立判断，实践课完成交付。

### 教学方式的根本变化

| 第五期 | 第七期 |
|---|---|
| 一周两节课，都以学习知识为主 | 一节学原理，一节做项目 |
| 实践分布在 Lab、阶段项目和课堂内容中 | 每周固定一整节项目课 |
| 学完一个知识阶段后再验证应用 | 从 W1 启动产品，每周完成一次可运行增量 |
| 不同知识点分别理解和练习 | 同一项目主线连续 13 周，保留真实依赖与历史状态 |
| 课程结束时汇总学过的能力 | W13 用系统、评测与发布证据完成 Production Review |

最简单的学习节奏：

`第一节学原理 → 第二节做进项目 → 下周接着做`

因此，学生每周都能回答三个问题：

1. 这周理解了哪个 AI Engineering 概念？
2. 这个概念在系统中解决了什么问题？
3. 用什么运行结果、测试或 trace 证明它真的完成了？

### 五个可被用户看见的变化

| 第五期积累 | 第七期升级 | 对学员意味着什么 |
|---|---|---|
| 每周已有两场 Live，主要按理论主题展开 | 同样两场，但明确拆为 Theory + Practice | 直播数量不是卖点，课堂分工和连续交付才是 |
| 10 层 AI 工程知识地图 | 10 层知识 + 一条连续产品交付路径 | 不只知道每层是什么，还知道如何把各层连接起来 |
| 各 Phase 的理论、Lab 与阶段项目 | One System / 13 Weeks / 5 Capability Upgrades | 每周在上一周成果上继续开发，不再重新开始一个 demo |
| Governance 集中在后段总结 | 从 W3 开始 governance by design，贯穿 Memory、Harness 与 Release | 权限、PII、audit、approval 和 rollback 从设计期就进入系统 |
| 项目展示功能结果 | 提交 eval、trace、permission、failure test、release 与 incident evidence | 项目可以用于 Applied AI Engineer System Design 面试答辩 |

### 这条传播为什么成立

- **尊重旧学员**：不是说第五期“过时”或“没实践”，而是说明五期教学积累已经形成稳定知识体系。
- **解释升级必要性**：第五期每周已有两场课；第七期把其中一场完整留给实践，让理论判断在同一周进入工程交付。
- **避免课程堆料感**：第七期卖的不是更多课，而是知识之间的工程连接与最终证据。
- **形成品牌连续性**：10 层技术栈海报继续代表完整知识体系，五阶段 Build Path 代表第七期新增的交付方式。

### 推荐 Campaign 名称

**首选：一周两节，一节学，一节做**

备选：

- 《以前两节都学知识，第七期留出一整节做项目》
- 《第一节学 AI，第二节把它做进产品》
- 《不是每周换 Demo，是 13 周接着做同一个项目》
- 《这周学的，这周就做出来》

### 海报 / Carousel 六页脚本

1. **封面**：以前一周两节都在学知识。
2. **改变**：第七期，一节学原理，一节做项目。
3. **不是零散练习**：第二节课始终开发同一个 Agent 项目。
4. **不是每周重来**：这周接着上周的代码继续做。
5. **13 周之后**：项目从基础产品逐步加入 RAG、Tools、Agent、Memory 和 Governance。
6. **最终结果**：完成一套可以演示、测试、解释和参加面试答辩的 Enterprise Agent System。

### 45 秒短视频结构

- **0–5 秒**：以前一周两节课，都在学 AI 知识。
- **5–12 秒**：第七期还是两节，但一节学原理，一节专门做项目。
- **12–20 秒**：而且不是每周换一个 Demo。第一周开始，之后一直在同一个项目上继续开发。
- **20–34 秒**：从产品基础，逐步加入 RAG、Tools、Agent、Memory、Harness 和 Governance。
- **34–41 秒**：13 周后，得到一套可以演示、测试和用于面试答辩的 Agent System。
- **41–45 秒**：一周两节，一节学，一节做。

## 4. 六个新推广角度

### 角度 01：不是转行重来，是工程能力升级

**受众**：Software Engineer、Full-stack Developer、Cloud/Data Engineer、已有编程经验的技术人员。

**要讲的内容**：API、state、permissions、testing、observability 没有失效；AI Engineering 是在这些能力上加入 context、retrieval、model behaviour、tool loop、memory、eval 与 governance。

**内容题目**：

- 《Software Engineer 转 AI Engineer，不需要推倒重来》
- 《传统后端能力，在 Agent 系统里分别对应什么？》
- 《AI Engineer 面试真正新增的 8 类系统问题》

**CTA**：查看 Enterprise AI 能力地图。

### 角度 02：不是 13 个 Demo，是一次连续产品交付

**受众**：上过 AI 课但作品仍停留在 chatbot、notebook 或零散 tutorial 的人。

**要讲的内容**：One System / 13 Weeks / 5 Capability Upgrades。每周都在上一周系统上继续开发，保留状态、权限、版本、审计和失败恢复；frontend、backend、Agent、MCP 与 eval 可以按工程边界拆分，不重新开一个无关 demo。

**五次升级**：

1. W1–W3：AI System Foundation——ADLC、Design System、可运行 MVP、权限、状态和 audit。
2. W4–W5：First AI + AI-Native Workspace——Voice → Editable Transcript → Human Confirmation，再建立 Spec-to-Work、Wiki、Architecture、Hooks 与 Skills。
3. W6–W7：Evaluation-Driven RAG——先冻结 golden dataset、checks、RAGAS 与 threshold，再实现 Policy RAG、citations 和 no-answer。
4. W8–W10：Tools、Agent 与 Memory——先提取 Data/Service Layer 并连接 MCP/CLI，再构建 bounded Agent、Harness 心智模型和安全 long-term memory。
5. W11–W13：Governed Production——Production Harness、A2A Governance、model routing、evals、tracing、regression gate、rollback 与 release decision。

**内容题目**：

- 《为什么我们第一周不让学生直接写 Agent》
- 《13 周持续交付：一套 Agent System 如何逐步 productionize》
- 《从 Product Foundation 到 Production Agent 的五次升级》

**CTA**：查看 13 周 Build Path。

### 角度 03：不是聊天功能，是 Enterprise Agent System

**受众**：认为 Agent 等于聊天框、Prompt 或工作流编排的人。

**要讲的内容**：Enterprise Agent 的价值不在 UI 里“能聊天”，而在受控执行：它能调用工具、暂停等待人工批准、恢复失败任务、管理长期记忆、留下 tracing，并在权限与成本边界内运行。

**Enterprise Agent Checklist**：

- Tools 与 permission boundary
- State、checkpoint 与 failure recovery
- Human approval 与 escalation
- Long-term memory 与 write gate
- Harness、tracing 与 deterministic checks
- Model routing、latency 与 cost threshold
- Governance、eval、rollback 与 incident response

**内容题目**：

- 《一个 Agent 要达到 Enterprise 标准，至少缺哪七层？》
- 《Agent 能执行之后，为什么必须先学会暂停？》
- 《Production Agent Harness 到底管什么？》

**CTA**：下载 Enterprise Agent Checklist。

### 角度 04：不是背面试题，是带着工程证据回答

**受众**：准备 Applied AI Engineer、AI Engineer、Agent Engineer 或 AI Solution Engineer 面试的人。

**要讲的内容**：课程中的每次架构选择都可转成 System Design 回答。最终展示的不只是界面，还包括 eval cases、trace、failure test、permission check、release checklist、rollback 和 incident runbook。

**面试证据链**：

`Requirement → Architecture Decision → Control → Test/Evidence → Failure Handling → Owner`

**高频问题方向**：

- 什么时候使用 RAG，怎么评估 retrieval 与 grounded answer？
- Agent 如何限制工具权限并处理重复执行？
- Memory 写什么、不写什么，如何防止 poisoning？
- Model Routing 如何平衡 quality、latency 与 cost？
- 你如何证明 Agent 可以发布，而不是“感觉效果不错”？

**内容题目**：

- 《面试官问“你的 Agent 为什么敢上线”，怎么回答？》
- 《把课程项目变成一套 System Design Defense》
- 《Demo、Portfolio 与 Production Evidence 的区别》

**CTA**：领取 AI Engineer System Design 自检表。

### 角度 05：高约束案例，是技术覆盖面的压力测试

**受众**：担心案例过于垂直，或想理解课程为什么选择 CareKind 的人。

**要讲的内容**：CareKind 不作为首屏卖点，只在 consideration 与 trust 阶段解释。选择它是因为一个案例同时容纳了 AI 工程最难组合的条件：

- 文字与语音输入，需要多模态 workflow。
- 大量非结构化文件，需要结构化生成与 RAG。
- 使用者不是领域专家，需要 grounded domain knowledge 与 citation。
- 多角色、多步骤协作，需要 tools、agent state 与 human approval。
- 长期交互，需要安全的 memory、correction 与 isolation。
- 强法规与责任边界，需要 governance、audit、PII protection 与 escalation。
- 同时存在 B2B 与 B2C 表面，需要不同 permission、experience 与 reliability 设计。

这些能力可以迁移到金融、保险、法律、政府、客服、企业知识库和内部运营系统。宣传中统一使用：

> **CareKind 是 Enterprise AI 工程压力测试案例，不是课程的行业边界。**

**内容题目**：

- 《为什么普通 Todo Agent 测不出 Production 问题？》
- 《一个高约束案例，如何覆盖 Enterprise AI 的完整技术栈》
- 《从强监管场景学到的 Governance，如何迁移到金融与企业系统》

**CTA**：查看案例如何覆盖 10 层 AI 工程技术栈。

### 角度 06：理论和实践不再挤在同一节课

**受众**：担心课程只讲概念，或 Live coding 变成讲师赶进度的人。

**要讲的内容**：12 场理论 Live 用来建立模型、架构和 trade-off 判断；13 场独立实践 Live 用来交付同一个系统。关键理论如 RAG、Agents、ReAct、Multi-Agent、Memory、Harness、Model Routing、Governance 与 Evaluation 仍由讲师 Live 讲解，实践课不再是理论课结尾的零散 demo。

**内容题目**：

- 《为什么 AI 工程课必须把 Theory 与 Build 分开？》
- 《一周两场 Live，各自解决什么问题？》
- 《学会概念和交付系统，中间差了什么？》

**CTA**：查看双 Live 周课表。

## 5. 内容漏斗

| 阶段 | 用户此时的问题 | 主传播角度 | 核心资产 | 唯一 CTA |
|---|---|---|---|---|
| Awareness | AI Engineer 与 API Developer 有什么区别？ | 工程能力升级、Agent 能跑不等于能上线 | 10 层技术栈海报、30–45 秒冲突型短视频 | 查看能力地图 |
| Consideration | 课程是否真的做完整系统？ | One System / 13 Weeks / 5 Upgrades | 五阶段动画、Build Log、完整周课表 | 查看 13 周 Build Path |
| Trust | 为什么这个项目足够接近企业问题？ | 高约束压力测试、Governance 与 failure case | 架构拆解、Governance Checklist、技术公开课 | 参加公开课 |
| Interview Intent | 学完能否转成求职证据？ | System Design Defense、Production Evidence | 面试自检表、trace/eval/release 示例 | 下载自检表 |
| Conversion | 我是否适合、需要投入什么？ | 双 Live、前置能力、交付物 | FAQ、课程说明会、申请条件 | 咨询或申请 |
| Proof | 最终能展示和解释什么？ | Enterprise Agent Demo + Release Review | Demo Day、eval evidence pack、答辩片段 | 预约下一期 |

## 6. 三条内容系列

### 系列 A：Enterprise Agent Build · 五次升级

用统一视觉连续发布五集，不以每周课程清单开场：

1. AI System Foundation：为什么 Agent 之前必须先有 ADLC、Design System 和可运行 MVP。
2. First AI + Engineering Workspace：Voice AI 如何进入人工确认流程，Spec、Architecture、Wiki、Hooks 和 Skills 如何让工程持续演进。
3. Evaluation-Driven RAG：为什么先写 golden cases 和 threshold，再实现 retrieval、citation 与 no-answer。
4. Tools、Agent & Memory：Data Layer、MCP、bounded loop、Harness 与 long-term memory 如何按依赖顺序连接。
5. Governed Production：如何用 Production Harness、A2A Governance、Model Routing、Evals 和 Release Controls 决定是否上线。

### 系列 B：你的 Agent 为什么敢上线？

每条内容只拆一个 production failure：

- Agent 越权调用工具
- RAG 引用过期或错误材料
- Memory poisoning 与跨用户泄露
- Prompt injection 与 PII 泄露
- Tool timeout、重复执行与幂等
- Model quality drift、cost spike 与 latency breach
- 无法追踪一次错误决策

固定结尾：**Policy → Control → Evidence → Owner**。

### 系列 C：AI Engineer 面试证据库

每条以一道 System Design 类型问题开场，展示“普通答案”和“Production 答案”的差别：

- 普通答案：列工具、模型和框架。
- Production 答案：说明边界、控制、测试、失败恢复和负责人。

适合 LinkedIn Document、微信公众号长文、公开课切片与 60–90 秒技术视频。

### 系列 D：Seedance Cinematic Shorts · 让工程关系变成可见动作

Seedance 不用来生成“会动的课程海报”，也不负责画准确代码、UI、架构箭头、Logo 或技术文字。它负责生成空间、材质、人物动作、系统物体和连续状态变化；课程名、技术术语、数字、流程箭头、字幕与 CTA 在后期用 Remotion 确定性合成。

每条视频遵守四个原则：

1. 一个视频只讲一个工程判断，不塞完整课程大纲。
2. 0–2 秒直接出现事故、冲突或反常识画面，不放品牌片头。
3. 全片只有一个视觉主角和一条可见因果链，不做六张卡片轮播。
4. 结尾展示一个能执行的判断或课程证据，不用“快来报名”代替内容价值。

#### Seedance 最适合的四种叙事

| 叙事类型 | Seedance 负责什么 | 最适合表达 |
|---|---|---|
| Continuous Transformation | 同一个核心物体穿过多个空间并逐层获得能力 | 13 周、同一系统、五次能力升级 |
| Incident Story | 一次越权、污染、错误引用或重复执行造成可见后果 | Governance、Memory、RAG、Harness、Evals |
| X-Ray System | 摄像机进入透明系统内部，看到数据、工具、权限和 trace 如何流动 | Enterprise Agent 与普通 Demo 的差别 |
| Role Transformation | 工程师原有工具链保留，新的 AI 层围绕它组装 | Software Engineer → AI Engineer |

#### 第一批 12 个短视频角度

以下是创意候选池，不是锁定制作清单。选题、Hook、视觉隐喻、片长、语言、发布顺序和 CTA 都可以在每次制作前协商；只有当期选中的 1–2 条完成 claim、受众和 Design Spec 确认后，才进入 Seedance 生成与后期制作。

| ID | 0–2 秒 Hook | Seedance 连续视觉机制 | 工程结论 | CTA |
|---|---|---|---|---|
| C7V01 | “第七期不是多上一节课。” | 同一件工程 artifact 在 Theory Studio 获得蓝图，再进入 Practice Lab 变成可运行模块；两个空间由同一条轨道连接 | 一周两节仍然不变，改变的是一节建立判断、一节完成交付 | 查看 Theory + Practice 双 Live 课表 |
| C7V02 | “13 周，不是 13 个 Demo。” | 一个发光系统核心连续穿过五个环境，依次获得 UI、Voice、RAG、Tools、Agent、Memory、Harness 与 Governance；核心始终不更换 | 学员持续开发同一套系统，能力按真实依赖累积 | 查看 13 周 Build Path |
| C7V03 | “这个 Agent 会跑，但不准上线。” | 一个高速运行的 Agent 冲向 Production Gate，被 permission、eval、trace、rollback 四道物理闸门拦下 | 能执行不等于 Enterprise-ready；上线需要控制与证据 | 领取 Enterprise Agent Checklist |
| C7V04 | “转 AI Engineer，不是把过去全部清零。” | 工程师身边的 API、database、testing、cloud、observability 模块没有消失；Context、RAG、Agent、Memory、Evals 新层围绕它们组装 | Software Engineering 是底座，AI Engineering 增加新的不确定性控制 | 查看 Role Upgrade Map |
| C7V05 | “如果 Memory 记住了错误事实呢？” | 一滴黑色错误信息试图进入透明 Memory Vault；write gate 将它隔离，人工确认后只有绿色事实被写入，旧事实可撤回 | Long-term memory 必须有 provenance、scope、TTL、correction 和 delete | 查看 Memory Safety 模块 |
| C7V06 | “RAG 找到了资料，也可能答错。” | 检索臂抓到正确政策片段，但生成路径试图脱离证据；citation tether 将回答拉回原文，证据不足时出口关闭 | Retrieval 与 grounded answer 必须分开评估，并支持 no-answer | 查看 Evaluation-Driven RAG 路线 |
| C7V07 | “Agent 调错工具，谁来踩刹车？” | Agent 手臂伸向高风险工具；permission boundary、human approval 和 idempotency lock 逐级限制动作 | Tool calling 需要最小权限、批准、重复执行保护和审计 | 查看 Production Harness Checklist |
| C7V08 | “Harness 不是又一个 Agent Framework。” | 一个裸露、抖动的 Agent loop 被装进透明运行舱；预算、checkpoint、retry、approval 和 trace 仪表开始接管 | Framework 组织行为，Harness 控制一次运行的生命周期和失败恢复 | 查看 W10–W11 Harness 架构 |
| C7V09 | “两个 Agent 能对话，不代表它们可以互相信任。” | 两个独立 Agent 隔着组织边界交换密封 artifact；identity、delegation scope、data policy 和 audit seal 逐个验证 | A2A 是 Agent-to-Agent；跨 Agent 协作必须治理身份、授权、数据共享与责任 | 查看 A2A Governance 模块 |
| C7V10 | “最强模型，不该处理每一个请求。” | 不同重量和风险的任务进入路由中枢，被送往快、强、私有或人工通道；高风险任务拒绝自动通过 | Model Routing 是 quality、latency、cost、privacy 与 data residency 的政策决定 | 查看 Model Routing 架构 |
| C7V11 | “面试官不缺你的聊天框截图。” | 漂亮 Demo 屏幕熄灭后，architecture decision、eval report、trace、failure test、release decision 仍悬浮在桌面上 | 面试需要可解释的 Production Evidence，而不只是功能展示 | 下载 System Design 自检表 |
| C7V12 | “为什么不用一个普通 Todo Agent 教这门课？” | Voice、document、policy、multiple roles、memory 和 regulation 六股压力同时压向系统；普通 Demo 外壳破裂，受治理的系统保持稳定 | 高约束案例能同时暴露多模态、RAG、Agent、Memory 与 Governance 问题，能力可迁移到其他行业 | 查看案例覆盖的 10 层技术栈 |

#### 三波发布顺序

以下 Wave 只作为默认建议，可根据开班节奏、素材状态、区域需求和真实表现调整；不得把建议顺序当成自动生产授权。

- Wave 1 · 先讲课程为什么不同：`C7V01`、`C7V02`、`C7V04`、`C7V03`。
- Wave 2 · 再证明技术深度：`C7V06`、`C7V05`、`C7V08`、`C7V07`。
- Wave 3 · 最后建立企业与面试价值：`C7V09`、`C7V10`、`C7V11`、`C7V12`。

每波先做一条 Hero Short 和一条 Failure Short。前两条通过视觉、技术与受众测试后，再批量制作同波剩余内容，避免一次生成 12 条但方向不成立。

#### Seedance 制作管线

`Verified Claim → Episode SOURCE → Design Spec → 2–3 Styleframes → Seedance Shots → Remotion Technical Overlay → ElevenLabs Narration → Captions/BGM/SFX → Technical QA → Independent Review → Platform Variants`

- Seedance shot 建议控制在 3–6 秒，每个镜头只承担一个状态变化；通过前后物体、光线、运动方向和 camera continuity 保持连续。
- 中文 `zh-CN` 与英文 `en-AU` 分别写口播、生成 ElevenLabs 声音并听审，不使用自动翻译配音。
- Facebook / YouTube 使用独立中文版本；Instagram / TikTok / LinkedIn 使用独立英文版本。事实 claim 相同，Hook、节奏、屏幕文字和 CTA 按平台重写。
- 只有 YouTube 版本允许视频内链接。其他平台的画面、字幕、口播、封面、片尾和二维码保持零 URL。
- Course Campaign 与日常 `series=ai-engineer-45s` 分开登记；Campaign 视频不得插入或重排该栏目的 P01–P50 生产顺序。
- 生成视频通过技术 QA 和独立审查后，才进入视频登记与社媒发布流程；本地 MP4、已排程和已公开是三个不同状态。

## 7. 首轮宣传资产

### P0：统一认知

- Cohort 7 主海报：以“10 层 AI 工程技术栈”为认知入口。
- 官网五阶段动画：每 3 秒移动一个闪烁点，展示产品如何逐级升级。
- 课程总览页：完整保留岗位认知、架构、能力地图、课程、项目、职业结果和 P3；第七期升级作为新增主线，不替换原体系。
- 13 周双 Live 周课表：理论与实践分栏展示。

### P1：建立差异

- LinkedIn Document：《Agent 能跑，不等于 Enterprise-ready》。
- 5 条阶段短视频：《13 周 Enterprise Agent Build》。
- 1 张《Enterprise Agent Production Checklist》。
- 1 张《Governance：Policy → Control → Evidence → Owner》。
- 1 篇长文：《为什么选择高约束案例，而不是再做一个聊天机器人》。

### P2：形成求职转化

- 《Applied AI Engineer System Design 面试自检表》。
- 公开课：《你的 Agent 为什么敢上线？》
- 公开课：《Software Engineer 如何升级为 AI Engineer》。
- Demo Day 精华：产品演示、trace、eval evidence、failure drill 与 release decision 必须同时出现。

## 8. 渠道打法

| 渠道 | 主角度 | 原生形式 | 内容要求 |
|---|---|---|---|
| LinkedIn | Role Upgrade、Architecture、Interview Evidence | Document、技术长文、讲师 POV | 用架构决定与失败案例说话，不发泛招生文案 |
| 小红书 | 五次升级、学习路径、面试自检 | 3:4 图文、9:16 短视频 | 第一张给冲突，后续给清晰路径和可保存 checklist |
| 抖音 / TikTok / Reels | Agent failure、Before/After、Build reveal | 30–45 秒竖版视频 | 前 3 秒出现具体问题，画面展示系统变化而非堆术语 |
| 微信公众号 | Governance、Harness、项目深度 | 技术拆解、课程解读 | 一篇只解决一个问题，结尾链接大纲或公开课 |
| Webinar / 线下 | System Design、Live failure review | 45–60 分钟公开课 | 先拆系统或事故，最后再介绍课程结构 |

## 9. 全球市场分区：同一课程，不同购买理由

第七期是澳洲课程，但潜在用户分布在多个中文市场。不能把一条中文招生文案按时差机械转发，也不能把美区签证焦虑套到澳洲用户身上。每个区域使用同一课程事实，但入口问题、案例顺序、CTA 和发布时间独立设计。

| 市场组 | IANA 时区 | 主要人群 | 首要购买理由 | 主语言 | 优先渠道 | 主要 CTA |
|---|---|---|---|---|---|---|
| 澳洲东岸 | `Australia/Brisbane`、`Australia/Sydney`、`Australia/Melbourne` | 在职开发者、Cloud/Data Engineer、留学生与毕业生 | 从现有软件能力升级到 Applied AI Engineering；能参加本地 Live 和项目协作 | 中文为主，技术词保留英文 | LinkedIn、Facebook、Instagram、小红书、微信、线下活动 | 查看大纲 → 参加说明会 → 咨询适配度 |
| 中国大陆 | `Asia/Shanghai` | 国内开发者、计划出海或补 AI 工程体系的人 | 不是再学一个工具，而是补齐 Production Agent、RAG、Evals、Governance 的系统能力 | 中文 | 小红书、微信公众号、视频号、技术社区 | 领取技术栈图 → 观看公开课 → 咨询课程 |
| 港澳台与新加坡 | `Asia/Hong_Kong`、`Asia/Singapore` | 双语技术从业者、区域企业工程师 | 英文技术栈 + 中文讲解；Enterprise AI 与跨团队交付能力 | 中英双语，按平台分稿 | LinkedIn、Instagram、Facebook、微信社群 | 查看中英文大纲 → 参加区域场 Q&A |
| 北美华人 | `America/New_York`、`America/Los_Angeles` | 在职 SWE、CS/Data 留学生、求职者 | 对齐当地 AI Engineer / FDE / Applied AI JD；项目和 System Design Evidence | 英文职业内容 + 中文解释 | LinkedIn、北美小红书、微信群、技术社区 | 查看 JD 能力映射 → 参加美区说明会 |
| 英国与欧洲华人 | `Europe/London`、`Europe/Berlin` | 在职工程师、留学生、跨国团队成员 | Production AI 能力、异步参与方式和跨国作品展示 | 英文资产优先，中文说明 | LinkedIn、YouTube、华人社群、合作组织 | 查看英文课程简版 → 预约 Q&A |

第一阶段以澳洲东岸为核心转化市场，中国大陆负责规模化认知，北美负责英文职业内容验证；港澳台、新加坡、英国和欧洲先做低成本内容分发与活动合作，只有出现真实咨询和转化证据后再增加投入。

北美独立 cohort 的签证、退款、导师与美区渠道口径仍以 [`PROMOTION_PLAN.us.md`](./PROMOTION_PLAN.us.md) 为准。本文件中的北美部分只负责第七期全球内容分发，不能覆盖或默认为美区独立班的招生承诺。

### 9.1 区域内容不能直接翻译

- 澳洲：先讲 Software Engineer 能力升级、Theory + Practice 双 Live 和本地项目协作。
- 中国大陆：先讲 10 层知识体系和 13 周连续完成 Production Agent System，避免把海外身份当主卖点。
- 北美：先讲 JD、System Design、FDE/Applied AI Engineer title 和工程证据；签证内容只进入美区独立材料。
- 港澳台、新加坡、英国和欧洲：先讲双语技术沟通、Enterprise Architecture 和跨时区参与方式。
- CareKind 在所有区域都只作为高约束压力测试案例出现，不能成为课程品类或职业方向。

## 10. 时区发布与活动编排

### 10.1 统一规则

- 内部排程基准使用 `Australia/Brisbane`，每条内容同时登记目标地区的 IANA 时区和当地日期。
- 不保存固定时差换算。Sydney、Melbourne、New York、Los Angeles、London 和 Berlin 都受夏令时影响，必须按实际发布日期转换。
- 同一主题可以共用事实 SOURCE，但不同区域必须生成独立 caption、visual copy、CTA 与发布时间。
- 公开课至少提供两个时区版本：澳洲/亚洲友好场与北美友好场。没有真实报名需求时不单独增加欧洲场，可先提供回放和区域 Q&A。

### 10.2 第一轮测试窗口

| 市场 | 当地测试窗口 | 适合内容 | 证据状态 |
|---|---|---|---|
| 澳洲东岸 | 工作日 10:00–12:00；LinkedIn 11:00；Instagram 21:00 | 技术图、课程证据、短视频、活动提醒 | 来自 JR 当前渠道 cadence；继续用真实表现复盘 |
| 中国大陆 | 工作日 12:00–14:00 与 20:00–22:00 分组测试 | 小红书图文、公众号长文、视频号短视频 | Campaign 初始测试，不声称为最佳时间 |
| 新加坡 / 香港 | 工作日 12:00–14:00 或 19:00–21:00 | LinkedIn 技术图、双语 Carousel、区域 Q&A | Campaign 初始测试 |
| 北美东岸 | 工作日 08:00–10:00 或 12:00–14:00；活动测试 19:00–21:00 | LinkedIn、JD 拆解、Webinar | Campaign 初始测试；按平台真实数据校准 |
| 北美西岸 | 工作日 08:00–10:00 或 12:00–14:00；活动测试 19:00–21:00 | LinkedIn、项目证据、Webinar | 必须单独换算，不用美东排程直接覆盖 |
| 英国 / 欧洲 | 工作日 08:00–10:00 或 12:00–14:00 | LinkedIn、YouTube、合作社群 | 低频验证，出现真实需求后再提高产能 |

“午休”“晚间”在执行单中必须换成具体日期、当地时间和 Brisbane 时间。没有足够样本时，时段标记为 `test`；只有连续真实数据支持后才能升级为长期默认。

### 10.3 一份主题的跨区发布顺序

1. 先发布澳洲主版本，验证 Hook、评论问题和落地页行为。
2. 24–72 小时内重写为中国大陆版本，强调课程体系和学习方式。
3. 将适合职业叙事的主题重写成英文 LinkedIn 架构图或 Document，面向北美、新加坡、英国和欧洲。
4. 对表现强的主题制作公开课、长文或 45 秒视频，不因一次低播放立即否定主题。
5. 每个区域分别记录触达、深度互动、CTA 和咨询，禁止用一个平台的表现替代其他市场。

## 11. 多维 Campaign 组合

推广不按“今天发海报、明天发视频”排内容，而是给每一条资产同时标记：

`Region × Persona × Funnel Stage × Proof Type × Format`

### 11.1 Persona × 购买触发器

| Persona | 最容易被什么触发 | 最需要什么证明 | 不应先讲什么 |
|---|---|---|---|
| 在职 Software / Full-stack Engineer | 现有工程能力如何迁移；不需要从算法研究重学 | Architecture mapping、Build Path、真实代码与系统边界 | 零基础转行、高薪速成 |
| Cloud / Data / DevOps Engineer | 如何把数据、部署、可观测性变成 AI 系统优势 | RAG、MCP、Harness、Evals、Reliability 架构 | 只展示 UI 或 Prompt 技巧 |
| 求第一份 AI 岗位的学生与毕业生 | 项目如何变成简历和面试证据 | Portfolio rubric、System Design Defense、JD mapping | 包就业、虚构薪资和大厂保证 |
| 已做过 Chatbot / RAG Demo 的开发者 | 为什么 Demo 仍不能进入生产环境 | Failure cases、Governance、Regression Gate、Rollback | 重复讲“什么是 ChatGPT” |
| Tech Lead / Solution Architect | 如何设计跨团队可治理的 Agent System | A2A Governance、permission、owner、incident 与 release controls | 单一框架教程和工具排名 |

### 11.2 六条可并行 Campaign

| Campaign | 核心问题 | 主要资产 | Funnel 位置 | 适合市场 |
|---|---|---|---|---|
| Teaching Method Upgrade | 为什么第七期要把一周两节拆成 Theory + Practice？ | 对比海报、双 Live 课表、45 秒解释视频 | Awareness / Consideration | 全市场 |
| 13-Week Production Build | 13 周怎样把系统一步步做出来？ | 五次升级动画、Build Path、每周 Build Log | Consideration | 全市场 |
| Enterprise Agent Standard | Agent 能跑之后还缺什么？ | Harness、Memory、Governance、Evals Checklist | Awareness / Trust | 澳洲、北美、新加坡、欧洲 |
| AI Engineer Interview Evidence | 项目如何转成面试回答？ | System Design 自检表、Architecture Defense、JD mapping | Interview Intent | 澳洲、北美、中国大陆 |
| Governance as Engineering | 强法规和责任边界怎样变成代码与发布闸门？ | Policy → Control → Evidence → Owner 图、A2A Governance 案例 | Trust | 企业工程师、Tech Lead、B2B |
| From Software Engineer to AI Engineer | 已有开发经验哪些保留，哪些必须新增？ | Role map、技能差距测试、学习路线 | Awareness / Conversion | 澳洲、中国大陆、北美 |

同一周最多主推两个 Campaign：一个扩大认知，一个建立信任或转化。六条线同时日更会稀释主张，也无法判断哪个角度真正有效。

## 12. 短期推广：开班前 6 周到开班后 2 周

所有日期使用相对时间。课程负责人确认开班日后，再把 `T-42` 等节点转换成各地区当地日期。

| 阶段 | 目标 | 核心内容 | 关键动作 | CTA |
|---|---|---|---|---|
| T-42～T-29 · 建立认知 | 让市场知道第七期改变的是教学方式 | 一周两节，一节学，一节做；10 层技术栈；Role Upgrade | 更新官网、主海报、双 Live 解释页；准备中英文主资产 | 查看能力地图 |
| T-28～T-22 · 证明不是 Demo 课 | 让用户理解连续 13 周工程主线 | 五次能力升级、W1–W13 Build Path、项目依赖关系 | 发布五阶段动画、详细大纲、Build Log 样例 | 查看完整大纲 |
| T-21～T-15 · 建立技术信任 | 证明 Enterprise Agent 不是营销词 | RAG、Memory、Harness、A2A Governance、Evals failure cases | 发布 Checklist；举行“你的 Agent 为什么敢上线”公开课 | 报名公开课 |
| T-14～T-8 · 建立职业相关性 | 把课程能力连接到岗位与面试 | AI Engineer title map、JD 能力、System Design Evidence | 发布面试自检表、LinkedIn Document、导师技术 Q&A | 完成自检 / 参加 Q&A |
| T-7～T-1 · 转化 | 回答是否适合、时间投入、交付物和支持方式 | FAQ、样例周、Theory/Practice 区别、项目边界 | 两场跨时区说明会；销售只跟进主动留资和已授权名单 | 咨询适配度 / 申请 |
| D0～D+14 · 交付即营销 | 用真实教学过程建立下一期证据 | 开课、W1 PRD/ADLC、W2 UI、W3 MVP 的脱敏过程 | 经学员授权收集 Build Log、课堂片段、常见问题和教师复盘 | 关注 Build in Public |

### 12.1 短期最低可执行资产包

如果团队产能有限，只做下面 8 项，不做低质量日更：

1. “10 层 AI 工程技术栈”主海报。
2. “第五期 → 第七期：教学方式重构”对比图。
3. “五次能力升级”动画或 Carousel。
4. 13 周详细课程大纲 HTML/PDF。
5. Enterprise Agent Production Checklist。
6. AI Engineer System Design 面试自检表。
7. “你的 Agent 为什么敢上线？”公开课。
8. “Software Engineer 如何升级为 AI Engineer？”说明会。

### 12.2 每周内容配比

- 40% 技术价值：架构、failure case、checklist、开源库与工程判断。
- 25% 教学证据：课堂结构、Build Path、录播/Lab/Quest 如何配合。
- 20% 职业相关性：岗位 title、JD、System Design、Portfolio Evidence。
- 10% 信任资产：讲师判断、课程迭代、学员授权后的真实过程。
- 5% 直接招生：开班、说明会、FAQ、申请提醒。

直接招生内容不能成为账号主体。用户连续看到的应该是有用的 AI Engineering 内容，招生 CTA 只是下一步。

## 13. 长期推广：90 天、180 天与 12 个月

### 13.1 0–90 天：建立可持续内容引擎

- 将 13 周项目拆成 30–40 个 evergreen 工程问题，例如“Memory 为什么需要 write gate”“MCP handler 为什么不能直接写 ORM query”。
- 建立三条长期栏目：`Enterprise Agent Build`、`你的 Agent 为什么敢上线`、`AI Engineer 面试证据库`。
- 每周从真实课堂问题中选择一个主题，形成 SOURCE → 中文短帖 → 英文架构图 → 长文/视频的复用链。
- 建立真实异议库：用户为什么不理解、为什么犹豫、哪些术语看不懂，并回写官网 FAQ 和下一轮 Campaign。
- 所有表现数据按地区、渠道和资产记录；没有数据写 `unavailable`，不补零、不估算。

### 13.2 3–6 个月：把教学过程变成品牌证据

- 经明确授权后发布脱敏 Build Logs、架构演进、eval 变化和 failure review。
- Demo Day 内容不只剪最终 UI；必须同时展示 architecture、trace、eval、permission、rollback 或 release decision。
- 将优质学生问题与导师回答整理成技术文章、公开课和 FAQ，不公开学员 PII。
- 建立 Alumni / Builder Spotlight，但不把个别 Offer、薪资或雇主结果泛化为课程承诺。
- 与开发者社区、大学社团、云厂商社区和技术 Meetup 合作做主题分享，先提供技术价值再介绍课程。

### 13.3 6–12 个月：形成品类与搜索资产

- 建立 AI Engineer 中文知识集群：Context Engineering、RAG Evaluation、MCP、Agent Memory、Harness、Governance、Model Routing、Production Evals。
- 每个主题形成“免费解释页 → Checklist/Lab → 公开课 → Bootcamp”的自然路径。
- 每期课程更新都发布 Engineering Change Log：哪些内容保留、哪些转录播、哪些因市场变化进入 Live。
- 形成年度 `State of Applied AI Engineering` 内容，基于真实课程问题、公开技术变化和岗位证据，不编市场数字。
- 建立企业向内容：Agent Governance Workshop、Production Readiness Review、Team Capability Assessment，为 B2B 培训和企业合作提供入口。

## 14. Owned、Social、Earned、Community 与 Paid

| 增长面 | 做什么 | 第七期适用动作 | 边界 |
|---|---|---|---|
| Owned | 官网、Learn Hub、邮件、公众号、社群、公开课 | 课程页、详细大纲、Checklist、说明会、Build Log | 所有事实与课程 SoT 一致 |
| Social | 官方与讲师账号的原生内容 | LinkedIn 架构图、小红书 Carousel、短视频、长文 | 一份 SOURCE，多平台独立 variant |
| Earned | 社区分享、嘉宾合作、播客、技术媒体 | 以 Governance、Agent Harness、RAG Eval 做技术主题 | 先提供内容价值，不伪装软文 |
| Community | 校友、开发者社区、大学社团、Meetup | Office Hour、公开 Review、学生授权作品展示 | 不公开 PII，不诱导虚假评价 |
| Paid | 对已验证资产做小范围放大 | 只放大已有自然互动、落地页与转化证据的内容 | Google Ads `manual_only`；预算和启动需另行批准 |

付费投放不是第一步。先证明 Hook、落地页、公开课和咨询路径能在自然流量下工作，再选择已有证据的资产扩大；不能用预算掩盖定位不清或页面不转化。

## 15. 90 天实验矩阵

每轮只改变一个主要变量，避免同时换 Hook、形式、渠道、时段和 CTA 后无法解释结果。

| 实验 | A | B | 只观察什么 |
|---|---|---|---|
| 教学方式 Hook | 一周两节，一节学，一节做 | 13 周做完一套 Production Agent System | 哪个更能带来大纲查看与深度评论 |
| 角色 Hook | Software Engineer → AI Engineer | Demo Builder → Production AI Engineer | 哪个带来更多目标岗位咨询 |
| 技术 Hook | Agent 为什么敢上线 | Memory 写错了怎么撤回 | 哪个 failure case 更能产生收藏与公开课报名 |
| 证据形式 | 五阶段动画 | 静态 Build Path Carousel | 哪种形式带来更高完读与课程页访问 |
| CTA | 查看完整大纲 | 完成 System Design 自检 | 哪个产生更高质量的下一步动作 |
| 活动时区 | 澳洲/亚洲友好场 | 北美友好场 | 各区域报名、到场与有效咨询，不比较绝对规模 |

实验结果只改变下一轮尚未创建的内容，不回改已发布素材。单次结果只能生成下一轮假设，不能直接成为长期渠道规则。

## 16. 衡量框架与看板

| 层级 | 指标 | 判断问题 |
|---|---|---|
| Attention | 3 秒/6 秒留存、停留、Document 打开 | Hook 是否让目标用户停下来？ |
| Depth | 完播、完读、保存、有效评论 | 内容是否值得认真看，而不是只获得曝光？ |
| Intent | 大纲查看、Checklist 下载、公开课报名 | 用户是否愿意进一步理解课程？ |
| Qualified Lead | 参加说明会、完成适配度咨询、明确地区/背景/目标 | 来的人是否属于课程目标用户？ |
| Conversion | 申请、付费、来源资产 | 哪个市场、渠道和资产真正产生结果？ |
| Proof Loop | Build Log 授权、Demo Day 证据、真实异议 | 这一期教学是否为下一期积累了可信资产？ |

每条数据至少保留：`market_region`、`timezone`、`platform`、`account`、`persona`、`campaign`、`funnel_stage`、`asset_id`、`cta`、`published_at` 和 `source_revision`。缺失平台指标写 `unavailable`；不同平台定义不一致的指标不直接相加。

复盘节奏：每周调整 Hook；每两周比较区域、Persona、Campaign 与 CTA；每月决定哪些主题升级为长文、公开课或 SEO 资产；每期结束后用真实报名来源、咨询、转化和教学证据重写下一期计划。

## 17. 文案用词规则

### 必须使用

- Enterprise AI Engineering
- Production Agent System
- 标准 AI 产品底座
- One System / 13 Weeks / 5 Capability Upgrades
- Theory Live + Practice Live
- Tools / Memory / Harness / Governance / Evals
- System Design Evidence / Production Evidence
- 高约束工程案例 / 可迁移能力

### 禁止作为主标题或品类词

- Care 产品
- 护理业务产品
- Aged Care 产品
- 13 个项目 / 13 个 Demo
- 聊天机器人课程
- 医疗 AI 自动决策

CareKind 只能作为案例名出现。必须同时说明它是用于覆盖复杂 Enterprise AI 问题的工程压力测试，不能让用户误以为课程培养目标是进入 Aged Care 行业。

## 18. 发布红线

- 不发布没有证据的薪资、Offer、就业率、雇主名单或就业保证。
- 不把第五期表现直接写成第七期承诺。
- 不展示未确认价格、优惠、开班日期、席位或报名人数。
- 不声称学生连接真实医疗或 aged-care 生产系统。
- 不描述 AI 自动作出临床判断、自动提交监管事件或绕过人工确认。
- 不用“production-ready”替代证据；必须展示 eval、trace、permission、rollback 或 release review。
- 官网、课程大纲、海报、销售话术和公开课必须使用同一课程事实口径。

## 19. Campaign 执行状态规则

禁止预填目标数字。候选、草稿、批准、排程、发布和测量必须分开记录：

- `candidate`：只是选题，不得自动进入发布。
- `draft`：平台版本已生成，尚未批准。
- `approved`：内容、媒体、CTA 和地区版本通过人工审核。
- `scheduled`：已在发布系统创建排程，但尚未公开。
- `published`：平台返回公开状态并获得公开 URL。
- `measured`：到达观察窗口并回填真实表现。
- `blocked`：缺素材、语言、权限、证据或平台能力；不得自动降级或盲目重试。

Campaign 文件只负责策略，不形成第二套发布状态。正式社媒内容必须进入 `jr-omni/new-media/publishing/` 的 SOURCE、平台 variant、Social Hub / Buffer operation 和公开回读流程。

## 20. Owner 分工

| Owner | 任务 |
|---|---|
| 课程负责人 | 确认开班日、价格、席位、讲师、申请条件和最终 Live 口径 |
| Ada | 核对前五期可复用录播：优先检查 Fine-Tuning 等低时效内容的清晰度、完播和反馈；RAG 基础、Agents 基础、ReAct、Multi-Agent 继续按新大纲 Live |
| Design | 输出 3:4、1:1、9:16、16:9；统一“10 层技术栈 + 五次能力升级”视觉语言 |
| Content | 按六个角度建立选题池，每条标记 funnel stage、proof 和唯一 CTA |
| Dev | 保证官网、课程大纲、海报、OG 图和动画使用同一事实口径 |
| Sales | 使用“Enterprise AI Engineering”定位，回写真实咨询来源与异议，不自行增加承诺 |

## 21. 立即执行的 14 天清单

1. 课程负责人确认开班日、授课时区、价格、席位、讲师和申请条件；未确认前保持占位，不对外发布。
2. Content 从六条 Campaign 中选择两条作为首轮主线：建议 Teaching Method Upgrade + Enterprise Agent Standard。
3. Design 完成中英文主海报、五阶段动画、Production Checklist 和 System Design 自检表的多尺寸版本。
4. Dev 核对官网、详细大纲、OG 图、课程 CTA 和移动端阅读，不改变现有 URL。
5. Marketing 建立澳洲、中国大陆、北美三个地区的独立内容清单和 IANA 时区字段。
6. 公开课分别建立澳洲/亚洲友好场和北美友好场；先收报名需求再决定是否增加欧洲场。
7. Sales 使用统一资格问题记录咨询来源、地区、技术背景、目标岗位、主要异议和下一步，不补写用户没有说过的信息。
8. 每条社媒内容进入统一 SOURCE 和平台 variant；没有批准、平台回读和公开 URL，不写“已发布”。
9. 第 7 天做第一次 Hook/CTA 复盘，第 14 天决定下一轮放大、停止和重写项。
