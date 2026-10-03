# DevOps 工程师 × AI 实战课 · 入门 — 设计说明

> **SoT**：课程内容（课时、步骤、文案、价格）只写在 `public/outline.json`。本文件只记录定位决策、JD 证据、环境与 starter repo 需求、常见翻车点和待核实事项，不复述大纲。

## 定位

- **学员**：在职 DevOps / SRE / 平台工程师，以及有 DevOps 基础、想继续做这一行的求职者。
- **一句话**：给自己的 DevOps 团队搭一套 AI 工具箱——MCP、skills、hooks、subagents、云端 agent，最后打包成团队插件，走 AWS Bedrock 落地。
- **课后带走**：一个团队插件仓库，同事一条命令装上；一份给安全团队看的落地方案。
- **不是转职课**：不向 AI Engineer 产品线导流；不写 AI 应用、不部署模型。
- **与 `techscrum-devops`（DevOps AI 项目陪跑，$3550）的区别**：陪跑课从零学传统 DevOps 体系；本课假设学员已经会 DevOps，只教怎么用 agent 体系提升团队效率。
- **与 Ada 9 月 24 日上架的「DevOps 低价课」的关系**：工作日志显示那门应是陪跑课前三节的拆分（传统 DevOps）。价格和内容未核实，需要对一次，确认两门不重叠。

## 决策记录

这门课的方向改了很多次，留下原因，避免回头路：

1. **用 AI 做 DevOps 的 5 件日常活**：被否。销售上没有吸引力，说不出一个成果。
2. **造一个 AI 值班助手**：被否。那是 AI Engineer 的活。
3. **部署和运维 LLM（含自托管模型）**：被否。显卡和显存成本高，学员和公司都受不了；澳洲 JD 里自托管 GPU 几乎没有需求。
4. **先做普通 DevOps 项目，后面再加 AI**：被否。前面太"过去"，不够 AI。
5. **AI 全程驱动，一个 AWS 项目做到底**：被否。方向偏窄，看不到 agent、MCP、云端、扩展这些关键词。
6. **确定：围绕 Claude Code 的扩展体系，给团队搭 AI 工具箱。** 每节课加一类扩展，项目只是被运维的对象。

## JD 证据（调研日期 2026-09-29）

> 来自调研子任务，我没有逐条二次核对原文。引用到销售页之前，要打开原链接核对。

- **样本**：Seek 澳洲 29 份 DevOps / Platform / SRE / Cloud 岗位 JD，其中 19 份提到 AI；另看了 5 份海外 JD。**多数是用 AI 关键词搜出来的，比例偏高，不代表整个市场**；29 份里有 10 份完全没提 AI。
- **最常见的 AI 要求**：
  1. 用 AI 编码助手或 agent 干 DevOps 的活：8 份。Allianz「Senior AI DevOps Engineer」（Seek 94825104）：「AI-driven IaC generation, automated code/security review」「integrating AI/LLM tooling into DevOps workflows (e.g., MCP servers, AI-assisted pipelines)」；Culture Amp 的 Associate SRE 点名 Claude Code：「Partner with AI coding agents as part of your day-to-day workflow」；EML：「Basic AI or LLM knowledge is expected」。
  2. MLOps / LLMOps：6 份，其中约 2 份是重复发布。
  3. Amazon Bedrock：5 份。**没有 JD 要求用 Terraform 开通 Bedrock。**
  4. MCP：3 份。
  5. AI 安全与治理：2 份。
- **几乎没有需求**：GPU 和模型自托管（1 份 HPC 公司）；LLM 网关、token 成本管理、评估进 CI（澳洲 0 份，只在美国 JD 出现）。
- **JD 里没有出现 hooks、subagents、插件体系。** 这些是本课的扩展，不是 JD 要求。销售页不能写成"JD 要求你会 hooks"，只能写成"JD 要求 AI 辅助 IaC 和流水线、MCP，这门课教你怎么安全地做到"。
- **样本限制**：LinkedIn 没试；部分页面抓取失败。定稿前建议再做一轮不带 AI 关键词的抽样。

## 项目与环境

被运维的对象：一个订单系统（前端 + API + Postgres），课程提供代码，学员不改应用。

| 项 | 选型 | 状态 |
|---|---|---|
| 云 | AWS | 已定 |
| 运行环境 | ECS（Fargate），不用 EKS | 倾向 ECS：课上建 EKS 慢且贵；JD 里 K8s 出现多，若改 EKS 需重排 L04 |
| 每位学员的 AWS | 预置沙箱账号，设预算上限，课后回收 | **待定**：每期的费用和管理方式 |
| 初始状态 | L00 一条命令把订单系统部署进沙箱，L01 起直接运维 | 待开发 |
| 通知 | Slack（免费工作区或课程统一工作区） | 待定 |
| 代码托管 | GitHub（每位学员自己的仓库） | 已定 |

## Starter repo 需求

| 内容 | 用途 | 状态 |
|---|---|---|
| 订单系统应用 + Terraform（一条命令部署） | L00 | 待开发 |
| 环境检查脚本（Claude Code / Terraform / AWS CLI / Docker） | L00 | 待开发 |
| 沙箱账号开通和回收脚本，带预算告警 | L00、全课 | 待开发 |
| 一个故意写有过宽权限和公网数据库的 Terraform PR | L02 审查练习 | 待开发 |
| 故障注入脚本（数据库连接被占满，API 报 500） | L03 | 待开发 |
| 一个没人用的高价资源（供成本 agent 发现） | L03 | 待开发 |
| GitHub Actions 模板（PR 审查、CI 失败诊断） | L04 | 待开发 |
| checkpoint 分支 `session-1-start` … `session-5-start` | 跟丢的学员一条命令追上 | 待开发 |

## 常见翻车点（课上让学员自己撞到）

学员看到的描述在 `outline.json` 的 SCENARIO 步骤里。下面是给课程开发看的，每条都要在课前用 Claude Code 实跑验证：**AI 或配置确实会出这个问题**，才保留。

- L01：MCP 用了管理员凭证，AI 实际能改能删；社区来源的 MCP server 带来的供应链风险
- L02：hook 只拦了 `terraform apply`，换成别的写法或拆成多步命令就绕过去了
- L03：排障 agent 被报错最多的服务带偏，没找到上游的真根因
- L04：云端 agent 用了长期密钥而不是 OIDC；没设单次运行成本上限
- L05：团队插件里带了某个人的本地凭证；Bedrock 实际走了境外区域

## 系列结构

| 课 | slug | 定位 | 价格 |
|---|---|---|---|
| 入门（本课） | `devops-ai-foundations` | 搭一套 AI 工具箱，装到团队里 | $599 |
| 进阶（未建） | `devops-ai-advanced` | 企业级：统一 LLM 网关、多团队配额与成本分摊、评估进 CI、合规审计 | $788 |

价格是否含 GST 未定。网关和成本管理在澳洲 JD 里目前没有需求，留给进阶课观察。

## 上线前待核实

**能力核实（2026-10-03）**：子任务对照官方文档（code.claude.com）核实了一轮。「文档确认」不等于实测过，每一项上课前都要在沙箱里实跑一遍。

文档确认支持（均未见 beta 标记，但没有逐页贴原文，我也没有逐页核对）：
- MCP：`claude mcp add`，项目级配置 `.mcp.json`
- Skills：`.claude/skills/` 下的 `SKILL.md`
- Hooks：`PreToolUse` 事件，在 settings 里配置
- Subagents：`.claude/agents/` 下的定义文件，可限制工具
- 插件：`claude plugin install 名称@市场名`，一个插件可打包 skills、agents、hooks、MCP
- GitHub Actions：`anthropics/claude-code-action@v1`，可由 `pull_request`、`workflow_run` 触发

**报告有疑点，必须实测或另查再写进课里：**
- [ ] **hooks 拦截的退出码**：报告写"退出码非零即拦截"。我的理解是只有退出码 2 才拦截并把 stderr 反馈给 AI，其他非零只报错、不拦。L02 的红队测试依赖这一点
- [ ] **AWS MCP**：报告列出的官方 AWS server（awsiac、awsknowledge、awspricing）分别是 IaC、文档、价格，**不能查询账号里的真实资源**。L01 需要能读 CloudWatch、ECS、IAM 的 AWS MCP，具体用哪个未确认
- [ ] **Slack MCP**：需要注册 Slack 应用或用社区实现，社区实现有供应链风险，要定用哪个
- [ ] **GitHub Actions 用 OIDC 访问 AWS**：报告引用的输入项（`anthropic_federation_rule_id` 等）看起来是 Anthropic API 的联合认证，不像 AWS OIDC，不能采信；要对照 action 的 README 实测。L04 的"不存长期密钥"依赖这一点
- [ ] **无人值守**：官方有 GitHub Actions `schedule` 触发和 `/schedule` 云端任务（需要订阅）；`/loop` 要会话开着，不算。L04 "合上电脑也在跑"只能靠前两者；学员是否有订阅、费用谁出要定
- [ ] **Bedrock 悉尼**：报告称较新的模型需用 `au.*` 跨区域推理配置，直接在悉尼区域只有较老的模型。**"推理是否全程留在澳洲"没有证据**（只引用了一篇 AWS 博客标题和一句"取决于你与云厂商的协议"）。在核实前，课程文案不写"数据不出境"，只写"选用澳洲区域的推理配置，并核对数据流向"

其他待核实：
- [ ] 沙箱 AWS 账号每期的费用和预算上限
- [ ] 价格是否含 GST；开课日期
- [ ] 与 Ada 上架的 DevOps 低价课的内容重叠

## 新课上线必做（来自 curriculum/CLAUDE.md，目前都没做）

- [ ] `.github/workflows/deploy.yml` 的 Assemble 步骤加上本课目录，否则线上 `/curriculum/devops-ai-foundations/` 永远 404，官网课程大纲 iframe 空白。**部署工作流近期出过事故，改动要单独评审**
- [ ] `outline.json` 补 `curriculumPages` 字段，对应的 `public/curriculum.html` 等页面先要存在
- [ ] 至少 1 张宣传海报，并在 `curriculum/posters.html` 登记；没登记等于课程未完成
- [ ] `/curriculum-review` 过一遍大纲

## 下一步

1. 等能力核实结果，按结论修订 `outline.json` 里的描述
2. `/curriculum-review`
3. 开发 starter repo，逐个验证翻车点
4. `/target-user-persona-mapper devops-ai-foundations`
5. 讲师：在职、有 AWS 经验，审大纲并核实上面的清单
6. 销售页、海报、waitlist；凑够 15 人再开第一期
