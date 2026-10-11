# AI DevOps 实战课 · 高级班 — 设计说明

> **SoT**：课程内容（课时、步骤、文案、价格）只写在 `public/outline.json`。本文件只记录定位决策、AI 关系、JD 证据、环境与 starter repo 需求、翻车点、自测题和待核实事项，不复述大纲。`public/curriculum.html` 是给负责人预览的销售页，课时代号、标题、时长必须与 outline.json 逐字一致。
>
> 本课由旧的 devops-ai-foundations 改名而来：旧名里的"入门"不准确（学员要求已有 AWS、Terraform、CI/CD 基础），现在系列是 AI DevOps 实战课，分项目班和高级班，本课是高级班。

## 定位

- **学员**：在职 DevOps / SRE / 平台工程师，已经会 AWS、Terraform、GitHub Actions，要把 AI agent 引进团队日常工作。
- **买到什么**：10 小时直播带做（L00 课前 30 分钟，不直播；L01 到 L05 每节 120 分钟），每节课交出一样能带回公司的东西。$599 含 GST。一次只开一个班，报名满 15 人才开。讲师：Lightman 本人。
- **课后带走**：
  1. 一个团队插件仓库（MCP 配置、3 个 skill、hooks 规则、3 个 agent，一条命令装上）
  2. 两条 GitHub Actions 工作流（PR 审查、CI 失败诊断）
  3. 一页给安全团队看的 AI 权限与审计方案
  4. 每日巡检、告警初查、事故复盘三套模板
- **不是什么**：不是转职课，不教写 AI 应用，不部署和运维模型，不承诺薪资、晋升、工作、签证或收入。不向 AI Engineer 产品线导流。
- **与 techscrum-devops（DevOps AI 项目陪跑，$3550）的区别**：陪跑课从零学传统 DevOps 体系；本课假设学员已经会 DevOps，只教怎么管 agent。
- **与 Ada 9 月 24 日上架的「DevOps 低价课」的关系**：工作日志显示那门应是陪跑课前三节的拆分（传统 DevOps）。价格和内容未核实，需要对一次，确认两门不重叠（见待核实）。

## 与项目班的区别

| | 项目班 | 高级班（本课） |
|---|---|---|
| 学员 | 转行或刚入行，没有 DevOps 基础，只会基础编程和命令行 | 在职，已有 AWS、Terraform、CI/CD 基础 |
| AI 的角色 | 结对编程的搭档和老师 | 团队成员或流水线组件 |
| 学员的判断依据 | 学到的原则：先说清要什么、让 AI 解释、自己跑一遍验证、说不清的不提交 | 已有的领域判断：权限设计、变更风险、故障定位 |
| 课程重点 | 学会这一行的基本功，AI 帮忙学 | 给 AI 身份、规矩、分工、自主权和审计 |
| 价格 | $599 含 GST | $599 含 GST |

没有 Terraform、AWS 或 CI 基础的人，走下面的 5 题自测分流，应该先上项目班。

## 决策记录

- 2026-10-11 Lightman 定：不再叫「入门」（没人愿意报），入门版改称「项目班」；进阶版改称「高级班」（可以叫）。目录名里的 starter 和 advanced 是内部标识，保持不变。
这门课的方向改了很多次，留下原因，避免回头路：

1. **用 AI 做 DevOps 的 5 件日常活**：被否。销售上没有吸引力，说不出一个成果。
2. **造一个 AI 值班助手**：被否。那是 AI Engineer 的活。
3. **部署和运维 LLM（含自托管模型）**：被否。显卡和显存成本高，学员和公司都受不了；澳洲 JD 里自托管 GPU 几乎没有需求。
4. **先做普通 DevOps 项目，后面再加 AI**：被否。前面太"过去"，不够 AI。
5. **AI 全程驱动，一个 AWS 项目做到底**：被否。方向偏窄，看不到 agent、MCP、云端、扩展这些关键词。
6. **确定：围绕 Claude Code 的扩展体系，给团队搭 AI 工具箱。** 每节课加一类扩展，项目只是被运维的对象。
7. **LLMOps 只教 DevOps 的那一半，工具选 Langfuse，OpenTelemetry 为主线。** 评估集设计、提示词调优是 AI Engineer 的活，不教。选 Langfuse 不选 LangSmith：Langfuse 是 MIT 开源，可用 Terraform 部署在自己的 AWS（悉尼）里，运维它本身就是 DevOps 的活；LangSmith 云端是否有澳洲区域未确认，自托管要企业版。LangSmith 只在对比时提。本课 L05 讲 Langfuse 和 OpenTelemetry；评估、提示词管理、完整追踪平台不在本课范围。
8. **（2026-10-11）主线框架改为"把 AI agent 当成团队成员来管：身份、权限、审计记录"。** 原来的五节课是按"扩展类型"排的（MCP、skills 与 hooks、subagents、云端 agent、插件），现在每节课同时回答一个管理问题：L01 工具与身份，L02 上下文与护栏，L03 委派，L04 自主（谁触发、用什么身份、谁兜底），L05 可观测与治理。内容决定不变，只是把它们串成一条能一句话讲清的线。**这个框架是本课作者自己的提法，不是行业标准术语**，销售页和宣传文案里不能写成"业界通用框架"。
9. **（2026-10-11）每节直播课固定开头结尾。** 开头是 LIVE 的"先看终点"演示（10 到 15 分钟，看成品怎么跑），结尾是 PROJECT，描述以"带走："开头，写明带走什么。每节 CONCEPT 不超过 10 分钟，且写成学员当场能用的清单；原 L01 的 15 分钟概念时间并入 LIVE。
10. **（2026-10-11）不再把高级班留给网关、配额、评估进 CI。** 旧设计里"进阶"指企业级网关和合规，现在这条线暂不做：澳洲 JD 里网关、token 成本管理、评估进 CI 目前是 0 份，等有需求再开。系列的高级班指"学员已有基础"，不是"内容更深"。
11. **（2026-10-11）价格 $599 含 GST**（项目班和高级班相同），一次一个班，满 15 人开班。

## AI 关系

**一段话讲清**：这门课里，AI 是被管理的对象，也是干活的人。每节课 AI 做可以交给它的部分（查、写初稿、并行排查、值守、记录），学员做只有人能做的部分（给身份、定规矩、划权限、核对结论、写方案），然后学员必须能向同事或安全团队讲清：这个 AI 现在能碰什么，它凭什么做出了这个结论，它出错时谁会先知道。学员不是在学怎么提示 AI，是在学怎么管它。

**框架**：AI-native DevOps = 把 agent 当成团队成员，给它身份、权限和审计记录。（作者自己的提法，不是行业标准术语。）

| 课 | 管理问题 | AI 做什么 | 你做什么 | 你要能讲清或判断什么 | AI 容易错在哪 |
|---|---|---|---|---|---|
| L01 | 工具与身份 | 通过 MCP 查 AWS、GitHub、Slack，回答"现在生产环境有什么不正常"；帮你写最小 MCP server | 设计只读 IAM 角色和最小权限凭证；读它写的 MCP 代码；用控制台核对它的答案 | 这个 AI 用的是谁的身份，能读什么、不能改什么；它的答案对不对 | 只查了一个区域或一个服务就说正常；把"没查到"当成"没问题"；MCP 实际用的是管理员凭证而你没发现 |
| L02 | 上下文与护栏 | 按 skill 里的规范审 Terraform PR、写复盘；hook 之外它会尽力完成任何交代 | 把团队做法写成 3 个 skill；写 hooks 拦截危险命令并留审计日志；扮红队去绕过 | 哪些规矩写 skill（建议），哪些必须写 hook（硬拦）；hook 拦不住什么 | 审 PR 漏报或误报；换种写法或拆成多步命令绕过只拦字面命令的 hook；skill 被忽略 |
| L03 | 委派 | 审查、排障、成本三个 subagent 并行排查故障并汇总 | 定每个 agent 的职责和只给的工具；对比结论，判断谁被带偏 | 为什么这样拆、为什么只给这些权限、你凭什么相信最后那个根因 | 排障 agent 被报错最多的服务带偏，没找到上游根因；汇总时自信地选了一个互相矛盾结论中的错误一个 |
| L04 | 自主 | 在 GitHub Actions 和定时任务里无人值守：审 PR、诊断 CI、巡检、告警初查 | 决定谁触发、用什么身份（OIDC，不存长期密钥）、能做什么；设计失败通知和单次成本上限 | 凌晨三点它出错时谁先知道、能查到什么、怎么停掉它 | 修复 PR 让 CI 变绿但改的是测试；长期密钥被写进 workflow；没有成本上限；失败了没人收到通知 |
| L05 | 可观测与治理 | 整套 agent 走 Bedrock 干活，调用链、token、成本被记录 | 打包插件；接 OpenTelemetry 和 Langfuse；写一页给安全团队的权限与审计方案 | AI 能做什么、不能做什么、留了什么记录、花费怎么封顶、提示词里的数据存在哪 | 让 AI 自己总结花费会不准，以记录为准；方案写成"AI 很安全"而没写已知绕过风险；插件里带进了个人凭证 |

表里"AI 容易错在哪"一列，每一条都要在课前用 Claude Code 实跑复现，复现不了的删掉（见"常见翻车点"）。

## JD 证据

> 来源：Seek 澳洲，子 agent 在 2026-09-29 和 2026-10-11 抓取；页面文本经小模型摘要，我没有逐条二次核对原文。样本小、按关键词搜出，偏向提到 AI 的岗位，**不代表整个市场**。引到销售页之前，要打开原链接核对。

- **样本**：29 份澳洲基础设施类岗位（DevOps / Platform / SRE / Cloud）JD，其中 19 份提到 AI，10 份完全没提（由 29 减 19 推出）。
- **最常见的 AI 要求**：
  1. 在日常工作里用 AI 编码助手或 agent：8 份
  2. MLOps / LLMOps：6 份
  3. Amazon Bedrock：5 份
  4. 支持 RAG：5 份
  5. MCP：3 份
  6. AI 安全与治理：2 份
- **几乎没有需求**：GPU 和模型自托管 1 份；LLM 网关、token 成本管理、评估进 CI 在澳洲 JD 里 0 份（只在美国 JD 出现）。
- **每份 JD 的核心仍然是** AWS、Terraform、Kubernetes / EKS、CI/CD、可观测。AI 是加在这些上面的要求，不是替代。
- **引用**：Allianz「Senior AI DevOps Engineer」（Seek 94825104）：「AI-driven IaC generation, automated code/security review」「integrating AI/LLM tooling into DevOps workflows (e.g., MCP servers, AI-assisted pipelines)」。Culture Amp 的 Associate SRE：「Partner with AI coding agents as part of your day-to-day workflow」。EML 的 Lead DevOps：「Basic AI or LLM knowledge is expected, ideally with practical application in pipelines or operations.」
- **没有 JD 要求用 Terraform 开通 Bedrock。** 也没有 JD 出现 hooks、subagents、插件体系。这些是本课的扩展，销售页不能写成"JD 要求你会 hooks"，只能写成"JD 要求 AI 辅助 IaC 和流水线、MCP，这门课教你怎么安全地做到"。
- **与课程的对应**：AI 编码助手和 agent（8）对应全课；MCP（3）对应 L01；AI 安全与治理（2）对应 L02 和 L05；Bedrock（5）对应 L05；RAG 支持（5）本课不教，销售页不写。
- **LLM 可观测工具（2026-10-03 补查，样本很小；此条及下面「海外 JD」的数字不在本次提供给评审的证据里，未能核对，销售页不用）**：Seek 澳洲提到 LangSmith 的只有 1 份（Culture Amp，AI Engineer 岗位，不是 DevOps），Langfuse 0 份。海外 2 份提到 Langfuse，其中「Observability Platform Engineer」岗位职责是管理自托管的 Langfuse 平台、了解 OpenTelemetry，最贴近本课学员，但只有 1 份。"LangSmith 越来越多人用"没有独立数据支持。
- **没有研究过**：初级 DevOps 的 AI 要求（本课不服务初级，不需要）；LinkedIn 没试；部分页面抓取失败。定稿前建议再做一轮不带 AI 关键词的抽样。
- **时间和成本数字**：任何"省多少时间""花多少钱"的数字，本课全部标记为待实测，不出现在销售页和 outline.json。L05 的计时对比是学员自己的课后作业。

## 项目与环境

被运维的对象：一个订单系统（前端 + API + Postgres），课程提供代码，学员不改应用。

| 项 | 选型 | 状态 |
|---|---|---|
| 云 | AWS | 已定 |
| 运行环境 | ECS（Fargate），不用 EKS | 倾向 ECS：课上建 EKS 慢且贵；JD 里 K8s 出现多，若改 EKS 需重排 L04 |
| 每位学员的 AWS | 预置沙箱账号，设预算上限，课后回收 | 待定：每期的费用和管理方式，谁出钱 |
| Bedrock 模型调用费用 | 沙箱账号内产生 | 待定：谁出钱、预算上限 |
| Claude Code 订阅或 API 额度 | 学员自备还是课程提供 | 待定；云端 agent 和定时任务是否需要订阅，见待核实 |
| 初始状态 | L00 一条命令把订单系统部署进沙箱，L01 起直接运维 | 待开发 |
| 通知 | Slack（免费工作区或课程统一工作区） | 待定 |
| 代码托管 | GitHub（每位学员自己的仓库） | 已定 |

## Starter repo 需求

| 内容 | 用途 | 状态 |
|---|---|---|
| 订单系统应用 + Terraform（一条命令部署） | L00 | 待开发 |
| 环境检查脚本（Claude Code / Terraform / AWS CLI / Docker） | L00 | 待开发 |
| 沙箱账号开通和回收脚本，带预算告警 | L00、全课 | 待开发 |
| 一个已配好 MCP 和只读身份的演示环境 | L01 先看终点 | 待开发 |
| 一个故意写有过宽权限和公网数据库的 Terraform PR | L02 审查练习 | 待开发 |
| 一个能触发 hook 的"删除生产环境"演示脚本和审计日志格式 | L02 先看终点 | 待开发 |
| 故障注入脚本（数据库连接被占满，API 报 500） | L03 | 待开发 |
| 一个没人用的高价资源（供成本 agent 发现） | L03 | 待开发 |
| 会让 CI 失败的演示提交 | L04 先看终点 | 待开发 |
| GitHub Actions 模板（PR 审查、CI 失败诊断） | L04 | 待开发 |
| 每日巡检、告警初查、事故复盘三套模板的初版 | L02、L04 | 待开发 |
| 一个调用 Bedrock 的示例应用（订单客服问答），带 OpenTelemetry 埋点 | L05 | 待开发 |
| 自托管 Langfuse 的 Terraform（Postgres、ClickHouse、Redis、S3）；课上用老师预先部署的共享实例，每位学员一个项目 | L05 | 待开发，资源占用待测 |
| OpenTelemetry Collector 配置（Claude Code 指标进 Grafana，应用追踪进 Langfuse） | L05 | 待开发 |
| 权限与审计方案的一页模板 | L05 | 待开发 |
| checkpoint 分支 session-1-start 到 session-5-start | 跟丢的学员一条命令追上 | 待开发 |

## 常见翻车点（课上让学员自己撞到）

学员看到的描述在 outline.json 的 SCENARIO 步骤里。下面是给课程开发看的，**每条都要在课前用 Claude Code 实跑验证：AI 或配置确实会出这个问题**，才保留；没复现的不准放进销售页。

- [ ] L01：MCP 用了管理员凭证，AI 实际能改能删；社区来源的 MCP server 带来的供应链风险；AI 查了一个区域就说"一切正常"
- [ ] L02：hook 只拦了 terraform apply，换成别的写法或拆成多步命令就绕过去了；skill 里写了规矩但 AI 没遵守
- [ ] L03：排障 agent 被报错最多的服务带偏，没找到上游的真根因
- [ ] L04：云端 agent 用了长期密钥而不是 OIDC；没设单次运行成本上限；修复 PR 通过 CI 的方式是改了测试
- [ ] L05：团队插件里带了某个人的本地凭证；Bedrock 实际走了境外区域；Langfuse 里存了完整提示词和用户隐私，项目权限没收紧、保留期没设

## 报名前自测

销售页上展示这 5 道题，每道是或否：

1. 不看教程，你能写一个创建 ECS 服务和对应 IAM 角色的 Terraform，并解释 terraform plan 输出里每一项变更吗？
2. 你能读懂并修改一个 GitHub Actions 工作流，包括触发条件、secrets 和 job 之间的依赖吗？
3. 你能说清 IAM 角色的信任策略和权限策略有什么区别，并排查过一次 AccessDenied 吗？
4. 你能在 CloudWatch Logs 里找到某个 ECS 服务返回 500 的那几条日志吗？
5. 你能在自己的 AWS 沙箱账号里，用命令行登录并跑 terraform apply 和 destroy，而且知道哪些资源会持续计费吗？

**分流**：第 1、2、3 题任意一题答"否"，先上项目班。第 4、5 题答"否"，可以报本课，但开课前要补完课前准备 L00 并在助教那里确认环境。5 题全是"是"，报本课。项目班的开班信息另行公布，销售页不写具体日期。

## 上线前待核实

**能力核实（2026-10-03）**：子任务对照官方文档（code.claude.com）核实了一轮。"文档确认"不等于实测过，每一项上课前都要在沙箱里实跑一遍。

文档确认支持（均未见 beta 标记，但没有逐页贴原文，我也没有逐页核对）：
- MCP：claude mcp add，项目级配置 .mcp.json
- Skills：.claude/skills/ 下的 SKILL.md
- Hooks：PreToolUse 事件，在 settings 里配置
- Subagents：.claude/agents/ 下的定义文件，可限制工具
- 插件：claude plugin install 名称@市场名，一个插件可打包 skills、agents、hooks、MCP
- GitHub Actions：anthropics/claude-code-action@v1，可由 pull_request、workflow_run 触发

**报告有疑点，必须实测或另查再写进课里：**
- [ ] **hooks 拦截的退出码**：报告写"退出码非零即拦截"。我的理解是只有退出码 2 才拦截并把 stderr 反馈给 AI，其他非零只报错、不拦。L02 的红队测试依赖这一点
- [ ] **AWS MCP**：报告列出的官方 AWS server（awsiac、awsknowledge、awspricing）分别是 IaC、文档、价格，**不能查询账号里的真实资源**。L01 需要能读 CloudWatch、ECS、IAM 的 AWS MCP，具体用哪个未确认
- [ ] **Slack MCP**：需要注册 Slack 应用或用社区实现，社区实现有供应链风险，要定用哪个
- [ ] **GitHub Actions 用 OIDC 访问 AWS**：报告引用的输入项（anthropic_federation_rule_id 等）看起来是 Anthropic API 的联合认证，不像 AWS OIDC，不能采信；要对照 action 的 README 实测。L04 的"不存长期密钥"依赖这一点
- [ ] **无人值守**：官方有 GitHub Actions schedule 触发和 /schedule 云端任务（需要订阅）；/loop 要会话开着，不算。L04 "合上电脑也在跑"只能靠前两者；学员是否有订阅、费用谁出要定
- [ ] **Bedrock 悉尼**：报告称较新的模型需用 au.* 跨区域推理配置，直接在悉尼区域只有较老的模型。**"推理是否全程留在澳洲"没有证据**（只引用了一篇 AWS 博客标题和一句"取决于你与云厂商的协议"）。在核实前，课程文案不写"数据不出境"，只写"选用澳洲区域的推理配置，并核对数据流向"

LLMOps 部分待核实：
- [ ] Claude Code 的 OpenTelemetry 导出：报告称有成本、token 等指标，需对照官方文档（code.claude.com 的 monitoring 页）实测指标名；提示词内容记录默认关闭，课上不要打开
- [ ] Langfuse 自托管的资源需求和部署时间，决定是每人部署还是用共享实例；共享实例每期的费用
- [ ] Langfuse 版本：OTel 接入要求较新版本（报告称本地部署需 v3.22.0 以上），建课时用当前版本重测
- [ ] 示例应用调用 Bedrock 的真实费用
- [ ] **L05 时间过密（评审判断：风险高，Bedrock、OTel、Langfuse 三件事共 45 分钟加打包 20 分钟，很可能放不下；建议 Langfuse 用老师预部署的共享实例并把 Bedrock 配置移到 L00）**：先看终点 10、打包 20、Bedrock 15、可观测 30、概念 10、方案 20、带走 15。已把原来的计时对比移出到课后作业；若课前实测仍放不下，把 Bedrock 配置改成课前准备或压缩 Langfuse 部分

本次新增待核实：
- [ ] 每节"先看终点"演示的环境能稳定在 10 到 15 分钟内跑完，失败时有录屏兜底
- [ ] "AI 关系"表里"AI 容易错在哪"一列的每一条是否都能真实复现（见常见翻车点）
- [ ] JD 引用的原文、岗位编号与链接逐条核对，页面是否仍在线
- [ ] 沙箱 AWS 账号、Bedrock 调用、Claude Code 额度每期的费用和预算上限，谁出钱
- [ ] 开课日期（价格已定：$599 含 GST）
- [ ] 学员必须有可用的 Claude Code 额度（课上全程要用），目前自测题和 outline 没写这个门槛，要定：自备订阅还是课程提供，并补进销售页前置要求
- [ ] 与 Ada 上架的 DevOps 低价课的内容重叠
- [ ] 项目班是否已有开班计划，自测分流页能否指向它
- [ ] 本课提出的"把 agent 当团队成员管"框架，是否有同行已用的叫法，销售页不要自称行业标准
- [ ] 报名入口尚未开通，销售页写"报名入口待开通"，不放假链接

## 新课上线必做（来自 curriculum/CLAUDE.md，目前都没做）

- [ ] `.github/workflows/deploy.yml` 的 Assemble 步骤加上本课目录，否则线上 /curriculum/devops-ai-advanced/ 永远 404，官网课程大纲 iframe 空白。**部署工作流近期出过事故，改动要单独评审**（本次由主线程统一处理，课程作者不改）
- [ ] 至少 1 张宣传海报，并在 curriculum/posters.html 登记；没登记等于课程未完成（本次不改）
- [ ] `/curriculum-review` 过一遍大纲
- [ ] 旧 slug devops-ai-foundations 若已有外部链接或同步到 production，需要确认迁移方式；已上线 URL 结构冻结，不能直接删

## 下一步

1. 负责人看销售页预览，定调子
2. 按能力核实清单实测，修订 outline.json 里的描述
3. 开发 starter repo，逐个复现翻车点
4. `/target-user-persona-mapper devops-ai-advanced`
5. `/curriculum-review`
6. 销售页、海报、waitlist；凑够 15 人再开第一期
