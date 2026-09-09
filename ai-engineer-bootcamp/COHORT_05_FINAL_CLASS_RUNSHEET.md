# AI Engineer Bootcamp 第五期最后一课

## 结课总结：从知识点到系统能力，再到职业方向

> 课堂定位：这不是再讲一套新技术，也不是 AWS AgentCore 教程。它是一场课程总结、岗位定位和求职证据转换课。
>
> 建议时长：120 分钟核心课堂；如学生愿意留下，再做开放问答与个人路径诊断。

## 今晚学生必须带走的四个结果

1. 一张完整的 AI Engineering System Map，知道整期课程里的知识如何连接。
2. 看懂五类岗位方向，不再只靠“AI Engineer”这个 title 判断工作。
3. 理解 Product Thinking 为什么决定 AI 项目有没有价值，而不只是能不能运行。
4. 根据背景选择职业、认证和第七期实践升级路径。

## 开场定调

可以直接这样说：

> 今天不是第十二周再塞给大家十个新名词。课程结束真正要回答的是：过去这些周学过的 LLM、Context、RAG、Tools、Agent、Memory、Harness、Evaluation 和 Governance，能不能在你脑子里组成一个系统；这个系统能力对应什么岗位；你如何让面试官相信这不是“听过”，而是你真的做过、测过、解释得清楚。

随后让学生在聊天区回答两个问题：

- 如果今晚就开始投递，你会搜索什么岗位名称？
- 面试官问“你最能证明 AI Engineering 能力的项目是什么”，你现在会拿出什么证据？

不要马上点评。把答案留到最后一页，再让学生重答一次，形成明显的结课前后变化。

## 120 分钟课堂 Runsheet

### 00–08 分钟｜冷启动：你准备投什么

- 聊天区收集岗位名称和项目证据。
- 快速展示常见但不够清晰的回答：AI Engineer、会 RAG、做过 chatbot、会调 Prompt。
- 提出今晚的判断标准：岗位不能只看 title，能力不能只列 tools，项目不能只展示 happy path。

讲师判断句：

> “会用某个 Framework”是一条技能；“能把不稳定的模型行为变成可评估、可治理、可发布的系统”才是岗位能力。

### 08–23 分钟｜第一部分：把整期课程压缩成一张系统图

先放一张空白系统图，只显示用户请求和业务结果，让学生说中间还缺什么。逐层补齐：

1. Product / Workflow：给谁用，解决什么工作，什么事情不能做。
2. Model：模型能力、成本、延迟和数据边界。
3. Context：system instruction、用户状态、会话信息、tool result、token budget。
4. Knowledge / RAG：资料处理、retrieval、reranking、grounding、citation。
5. Tools / MCP：系统能调用什么，参数契约和 permission boundary 是什么。
6. Agent：plan、act、observe、state、pause、resume、failure recovery。
7. Memory：写入条件、来源、TTL、删除、poisoning 防护。
8. Harness：hooks、budget、retry、fallback、trace、human escalation。
9. Evaluation：dataset、deterministic checks、LLM-as-a-Judge、regression gate。
10. Governance：owner、risk、PII、approval、release、rollback、incident。

这里不要重讲定义。每层只问一个工程问题：

> 如果把这一层拿掉，你的系统会以什么方式失败？

最后给学生一个结论：第五期不是十组互不相关的名词，而是一套从输入到业务动作、再到证据和责任的 AI 系统。

### 23–42 分钟｜第二部分：岗位不是一条梯子，而是五种工作重心

不要再用“Junior → Senior → Staff”作为职业路径主体。先按工作重心分岗位，再在每条路径内部讨论级别。

| 岗位方向 | 企业主要让你解决什么 | 第五期最相关的能力 | 面试最常追问什么 |
| --- | --- | --- | --- |
| Applied AI / AI Engineer | 把模型接进真实产品与 workflow | LLM API、Context、RAG、Tools、Agent、Evals | 为什么用 RAG / Agent；失败如何测；如何上线 |
| Agent Engineer / Agentic AI Engineer | 构建可执行、可暂停、可恢复的 Agent | tool contract、state、memory、harness、human approval | loop 如何停止；工具失败怎么办；如何防越权 |
| Forward Deployed Engineer / AI Solutions Engineer | 进入客户场景，从模糊问题做到 production adoption | discovery、full-stack、integration、eval、governance、沟通 | 如何拆 scope；如何证明业务价值；如何处理客户约束 |
| AI Platform / LLMOps / Eval Engineer | 让多个团队稳定、安全、低成本地使用模型 | gateway、routing、observability、eval pipeline、release gate | 多模型如何治理；trace 如何定位问题；如何做 regression |
| ML Engineer / Research Engineer | 训练、优化或服务模型本身 | data、training、inference、experimentation、ML fundamentals | 算法、训练、数据、模型性能与基础设施；不是本课主线岗位 |

必须明确两点：

- 同一份 JD 可能叫 AI Engineer、Applied AI Engineer、GenAI Engineer、Software Engineer — AI、Agent Developer 或 Solutions Engineer，title 不能代替逐条读职责。
- FDE 不是“不会写代码的售前”。OpenAI 当前 FDE 职责包含 discovery、technical scoping、system design、build 和 production rollout；Anthropic 也同时使用 Applied AI Engineer、Applied AI Architect 与 Forward Deployed Engineer 等 title。

课堂互动：给出三个匿名 JD 片段，让学生只看动词分类：build、deploy、evaluate、integrate、train、optimise、partner、own。先判断工作重心，再看 title。

### 42–57 分钟｜第三部分：Product Thinking 是 AI Engineer 的分水岭

第五期需要在结课时把一个容易被忽略的问题讲透：技术可以让一个功能跑起来，Product Thinking 决定这个功能是否值得存在。

用同一个例子对比：

- Feature Thinking：做一个能回答政策问题的 chatbot。
- Product Thinking：减少一线员工查找、理解和填写政策材料的时间，同时保留人工责任边界和审核记录。

一个 AI Engineer 在写代码前应该回答八个问题：

1. User：具体是谁在什么环境中使用，不是笼统的“企业用户”。
2. Job：用户原来要完成什么工作，AI 改变的是哪一步。
3. Pain：当前成本、等待、错误或风险在哪里。
4. AI Fit：为什么需要模型、RAG 或 Agent；普通规则和搜索是否已经够用。
5. Workflow：AI 输出进入下一步后会触发什么人、数据或业务动作。
6. Success：什么结果说明产品有用；不能只用“回答看起来不错”。
7. Failure：答错、拒答、超时、越权或数据泄露时会造成什么影响。
8. Boundary：哪些事情明确不自动做，什么时候必须交给人。

课堂快速练习：给学生一个“会议总结 Agent”，让他们先列功能，再把它改成产品问题。必须补出目标用户、使用场景、下一步动作、成功指标和人工边界。

这里连接职业方向：

- Applied AI Engineer 需要把模型能力放进产品 workflow。
- Agent Engineer 需要设计 action 和 responsibility boundary。
- FDE 需要从客户的模糊问题中找到值得部署的 use case。
- Platform / Eval Engineer 需要把产品成功标准变成可复用的测试和治理能力。

结论：Product Thinking 不是 PM 专属软技能，它决定 AI Engineer 构建的是技术演示，还是有人愿意采用的系统。

### 57–70 分钟｜第四部分：不同背景与当前工程阶段

先用六种背景帮助学生找到起点：

| 原有背景 | 可以带进 AI Engineering 的能力 | 最应该补的缺口 |
| --- | --- | --- |
| Software / Full-stack | API、测试、部署、代码质量 | LLM failure、RAG、Evals、Harness、Governance |
| Data Engineer / Analytics | 数据管道、schema、质量与平台 | Context、retrieval evaluation、AI workflow |
| Data Scientist / ML Engineer | 实验、模型、指标、数据 | Product integration、Agent、deployment、operability |
| DevOps / Platform | 可靠性、安全、成本、可观测性 | LLM behaviour、evaluation dataset、RAG、human approval |
| BA / PM / Domain Expert | workflow、规则、stakeholder、领域知识 | Coding、API、data contract、testing |
| Graduate / Career Switcher | 学习速度与可塑性 | 先做窄而深的 end-to-end system，不同时追十个方向 |

再用三级成熟度让学生判断现状：

- Demo Builder：能做功能，主要验证 happy path。
- System Builder：能连接 Product、UI、API、Context、RAG、Tools 和 Agent，并解释失败边界。
- Production AI Engineer：能用 evaluation、trace、permission、governance 和 release gate 管理系统。

第五期多数学生的合理结课位置，是从 Demo Builder 进入 System Builder；第七期的实践重构，就是为了继续补上从 System Builder 到 Production AI Engineer 的缺口。

### 70–91 分钟｜第五部分：用一个系统故障，回收第五期全部内容

不要再按章节逐个总结。用一个贯穿案例让学生把所有能力重新连起来：

> 一个企业内部 policy assistant 在 Demo 时表现很好。上线试用后，它会引用旧政策；长对话后忽略关键限制；偶尔调用不该调用的写入工具；记住了用户后来要求删除的信息；模型费用不断上升。团队说“换一个更强的模型就好了”。你同意吗？

按层拆解：

1. Product：高风险输出是否应该直接执行，哪些动作必须人工确认？
2. Context：关键政策、用户状态和 tool result 怎样进入 context；是否发生污染或挤出？
3. RAG：旧政策来自 corpus、chunking、metadata filter、reranking 还是 citation contract？
4. Agent：为什么选择了写入工具；tool description、permission 和 state 是否正确？
5. Memory：谁允许写入；来源、TTL、删除和隔离如何处理？
6. Harness：budget、retry、fallback、hook、timeout 和 escalation 是否存在？
7. Evaluation：先看哪些 trace；如何区分 retrieval、generation、tool 和 memory failure？
8. Governance：谁是 system owner；什么条件阻止发布；如何 rollback 和记录 incident？
9. Model：证据显示是模型能力问题时，才讨论换模型、routing 或 fine-tuning。

这一段是整堂课的技术高潮。学生不是复述名词，而是在同一个 incident 里使用整期课程的判断框架。

### 91–101 分钟｜第六部分：四条 Claude 认证路径怎么选

JR Academy 当前提供四条 Claude 认证学习与备考路径。不要把它们讲成“越多越好”，而是让学生按工作内容选择：

| 认证 | 正式名称 | 更适合谁 | 与 AI Engineer 的关系 |
| --- | --- | --- | --- |
| CCAO-F | Claude Certified Associate – Foundations | 非技术、运营、PM、顾问和知识工作者 | 建立 output validation、workflow、governance 与 Claude 产品判断 |
| CCDV-F | Claude Certified Developer – Foundations | 写代码并交付 Claude 应用的工程师 | Applications & Integration、Agents、Tools、MCP、Context、安全与模型选型 |
| CCAR-F | Claude Certified Architect – Foundations | 开始负责 Agent 架构和技术选型的人 | Agentic Architecture、Claude Code、Structured Output、MCP 与可靠性 |
| CCAR-P | Claude Certified Architect – Professional | 有系统交付经验、需要负责架构与治理的人 | RAG、Integration、Evaluation、Governance、Stakeholder 与全生命周期决策 |

建议路径：

- 非技术或 Product / Domain 背景：先看 CCAO-F。
- Applied AI / Software Engineer：优先 CCDV-F。
- 已经在设计 Agent 系统：考虑 CCAR-F。
- 已经负责 Production delivery、治理和跨团队决策：再考虑 CCAR-P。

必须说明：四门均为独立认证路径，不要求每个人四门全考；是否具备报名资格、当期政策和费用以 Anthropic Partner Academy 为准。匠人提供学习和备考支持，官方考试费用独立于 Bootcamp 课程费用，也不承诺保过。

### 101–114 分钟｜第七部分：为什么第七期把课程大纲完全重做

这部分不要说“第五期内容不好”。第五期已经把 AI Engineering 的重要知识面铺开，问题在教学组织方式：

#### 第五期解决了什么

- 把 Context、RAG、MCP、Agent、Memory、Harness、Model 和 Evaluation 纳入完整课程。
- 一周两场课，建立了足够宽的理论和工具覆盖。
- 学生知道 AI Engineering 有哪些组成部分。

#### 第五期暴露了什么

- 两场课虽然数量足够，但多数内容仍以知识讲解和分散 workshop 为中心。
- 每周学了很多新概念，学生未必有时间把它们连续装进一个完整产品。
- 理论掌握、项目开发和 Production 判断之间缺少稳定节奏。
- 课程结束时容易出现“每一章都听过，但不知道自己的系统到底完成到哪一层”。

#### 第七期为什么完全重排

- 不是从“一周一场”增加到两场；第五期本来就是一周两场。
- 真正改变的是每周固定拆成 Theory Live + Practice Live。
- Theory 负责原理、系统关系、设计判断和面试中的 why。
- Practice 从 W1 启动同一条 Enterprise AI 产品交付主线，按工程边界可以使用多个 repository，不把实践压缩成理论课后的零散 demo。
- 13 场 Practice Live 由 Lightman 和 Jason 共同带领；两位老师围绕同一条实践路线持续带做、联调、review 和验收。
- W1–W3 建产品和 workflow；W4–W5 首次接入 AI；W6–W7 建 Eval 与 RAG；W8–W10 进入 Tools、Agent 和 Memory；W11–W13 完成 Harness、Governance、Model Routing 与 Production Readiness。
- 录播负责稳定知识，Interactive Lab 负责单项技能，Live 课堂只做最需要老师判断、反馈和联调的部分。

课堂用一张表讲清变化：

| 第五期 | 第七期 | 学生实际获得的变化 |
| --- | --- | --- |
| 每周原本就是两场课，但内容职责不够清晰 | 每周固定 Theory Live + Practice Live | 一场建立系统判断，一场完成工程交付 |
| Workshop 和练习分散在不同主题 | Lightman 和 Jason 共同带领 13 场 Practice Live，沿同一条 Enterprise AI 产品交付路线推进 | 每周知道上周产物如何进入下一周，不再重复做孤立 demo |
| 理论、工具和项目之间需要学生自己连接 | W1–W13 明确从 Product、AI、Eval、RAG、Agent 到 Production Readiness 的依赖顺序 | 学习顺序就是系统搭建顺序 |
| 课程成果容易停留在“我做过 RAG / Agent” | 要提交 eval、trace、permission、governance、routing 与 release evidence | 项目可以支持面试中的架构、失败处理和上线判断 |
| 已录内容与 Live 的分工不够明确 | 继承仍然有效的第五期录播，并按新主线重排；Lab 负责单项训练 | Live 时间用于高价值判断、联调和反馈，不重复播放稳定知识 |

一句话表达：

> 第五期让你看见完整 AI Engineering 地图；第七期让你沿着这张地图，每周把一个 Enterprise AI 系统真正搭出来。

### 114–120 分钟｜结课收束：选择下一条能力升级主线

让学生从下面四条中只选一条，不要同时开四个新项目：

1. Product depth：把现有 demo 放进一个真实 workflow，补齐用户、状态、失败路径和人工确认。
2. AI depth：补齐 RAG、Agent、Memory 或 Model 中一个明确短板。
3. Production depth：加入 eval dataset、trace、regression、cost、security 和 release gate。
4. Domain depth：进入金融、医疗、法律、教育等领域，把政策、术语、权限和风险真正做深。

回到开场的两个问题，让学生重新回答一次：

- 我适合的岗位方向是什么？
- 我拿什么证明自己具备这类岗位的能力？

结尾建议：

> 第五期结束后，你不需要再证明自己记住了多少工具。你需要证明的是：面对一个不可靠、会变化、会产生副作用的 AI 系统，你知道怎样把问题拆开，怎样找到证据，怎样做出工程决策，并且知道什么时候不应该发布。这个能力，才是课程真正交付给你的东西。

## 可选延长｜开放问答、认证与个人路径诊断

如学生愿意留下，再做开放问答。技术路径问题按学生背景、目标岗位、现有系统能力和最大缺口回答；认证问题按四条独立路径回答，不把官方考试费、Offer 或未确认服务加入承诺。

## 建议的 24 页 Slide 结构

1. 封面：AI Engineer 第五期结课总结
2. 今晚结束前，你应该看清四件事
3. 开场投票：你准备投什么
4. 空白 AI System：中间缺什么
5. 完整 AI Engineering System Map
6. 每一层拿掉后，系统会怎么失败
7. 课程内容不是知识点清单，而是一条系统链
8. 岗位不是一条梯子，是五种工作重心
9. Applied AI / AI Engineer
10. Agent Engineer
11. FDE / AI Solutions Engineer
12. AI Platform / Eval / LLMOps
13. ML Engineer 为什么是相邻但不同的路径
14. Product Thinking：从功能改写成用户工作
15. 八个产品判断问题
16. 六种背景，六个不同起点
17. Demo Builder → System Builder → Production AI Engineer
18. 一个失败的 Policy Assistant
19. 用十层系统逐层诊断，而不是先换模型
20. 四条 Claude 认证路径
21. 第五期完成了什么，也暴露了什么
22. 第七期为什么改成 Theory + Practice 双线
23. 你的下一条能力升级主线
24. 第五期结束：你用什么证据证明能力

## 今晚不要讲的内容

- 不重新讲 AWS Lambda、DynamoDB、SQS、Step Functions 入门。
- 不把 AWS AgentCore 当作 AI Engineer 职业路径本身。
- 不用未经今晚重新核验的固定薪资表制造确定感。
- 不再推荐学生从 Python / HTTP 基础重新开始四周学习。
- 不承诺学完课程、做完 P3 或考证就能拿 Offer。
- 不把后半节课变成简历修改或面试题背诵课。
- 不花大量时间逐个介绍 Framework；Framework 名称不是职业定位。
- 不说第五期原来是一周一场课；第五期本来就是一周两场，改变的是两场课的职责。
- 不把四门认证说成人人都要考，也不暗示课程费用包含官方考试费。

## 讲师课前准备清单

- 选 3 份当前 JD：Applied AI Engineer、Agent / Platform 方向、FDE / Solutions 方向各一份。
- 准备一张完整 AI Engineering System Map 和一张空白版。
- 选一个第五期项目，准备一条成功 trace 和一条失败 trace。
- 准备六类原有背景的现场投票。
- 准备一张三级工程成熟度图。
- 准备 Policy Assistant incident 的逐层揭晓版本。
- 准备四门 Claude 认证的正式名称、适合人群和报名免责声明。
- 准备第五期与第七期“教学方式变化”对照页，不做课程数量堆砌。

## 当前市场定位参考

- OpenAI 的 Forward Deployed Engineer 当前职责覆盖 discovery、technical scoping、system design、build 与 production rollout，成功标准包含 adoption、workflow impact 与 eval-driven feedback。
- Anthropic 当前同时招聘 Applied AI Engineer、Applied AI Architect 与 Forward Deployed Engineer，说明岗位 title 正在分化，但能力高度重叠。
- 澳洲官方 Jobs and Skills Australia 已把 AI Engineer 作为 emerging role 观察；课堂可以说明方向正在形成，但不要把旧广告增长数据直接当成今晚的岗位数量。

以上市场信息应在授课前打开原始职位页面重新确认；职位会下架，薪资与地区也会变化。
