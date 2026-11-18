# W8 · 来源

API 信息核对于 2026-11-18。课件里的数字只来自 demo 的实际运行（第 38 页），没有引用外部统计。

| 页 | 内容 | 来源 |
|---|---|---|
| 全课 | 主题、各部分时间、CareKind 边界 | JR Curriculum `ai-engineer-bootcamp/COHORT_07_OUTLINE.md` 的 W8 与 CareKind 章节 |
| 2、41 | CCAR-F 的 Agentic Architecture & Orchestration | https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification （大纲引用） |
| 3 | W7 回顾 | 本课程 W7 课件（Curriculum `lessons/ai-engineer-cohort-07-w7-agents-react`）第 1、5、6、7 部分 |
| 4、8 | 先用最简单的做法，确实需要再加复杂度 | Anthropic, Building effective agents: https://www.anthropic.com/engineering/building-effective-agents ；Google Cloud 指南也建议先从单 Agent 开始（见下一行） |
| 12、14、33 | 模式名对照（Sequential、Parallel、Coordinator、Review and critique、Human-in-the-loop、Hierarchical task decomposition、Loop、Iterative refinement、Swarm）；Coordinator / Hierarchical 多出模型调用、成本和延迟；Swarm 无中心协调、成本最高、可能不收敛 | Google Cloud Architecture Center, Choose a design pattern for your agentic AI system: https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system （核对于 2026-11-18，页面没有更新日期；W7 第 8 部分也引用了它）。“接近”的两格是本课的对应，不是指南原话 |
| 33、14 | 协调开销的信号与解法；message passing 与 shared blackboard 的取舍 | 观点，依据本课 demo 的设计（传引用、固定回报格式、共享容器文件）。不含外部统计 |
| 12–13 | 五种编排模式 | 大纲 W8；Managed Agents multiagent 文档列出的 parallelization、specialization、escalation；Cookbook 的 dynamic workflow 示例 https://platform.claude.com/cookbook/patterns-agents-async-multi-agent-orchestration |
| 12、25 | advisor：执行者模型不能比 advisor 强；Opus 5.5 的建议对客户端 redacted | Managed Agents multiagent 文档的 Advisor 一节 |
| 15 | BDI | M. E. Bratman, *Intention, Plans, and Practical Reason* (1987)；A. S. Rao & M. P. Georgeff, “BDI Agents: From Theory to Practice”, ICMAS 1995 |
| 15 | Contract Net Protocol | R. G. Smith, “The Contract Net Protocol: High-Level Communication and Control in a Distributed Problem Solver”, *IEEE Transactions on Computers* C-29(12), 1980 |
| 15 | Blackboard（Hearsay-II） | L. D. Erman et al., “The Hearsay-II Speech-Understanding System”, *ACM Computing Surveys* 12(2), 1980 |
| 17、19、20、22、35 | coordinator / roster / version pinning / thread / 共享容器 / 一层委派 / 25 个子线程 / session 预算 / 子线程工具调用转发到主事件流 / `multiagent_20261001` 取代旧 `coordinator` 类型 | https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration （通过 Claude Code 自带的 claude-api 参考核对）；Python SDK `anthropic` 2.6.0 的类型定义 |
| 18 | `AgentDefinition` 字段（description、prompt、tools、model） | 已安装的 `claude-agent-sdk` 0.2.178 的 `types.py`；文档 https://code.claude.com/docs/en/agent-sdk |
| 26 | 各 Agent 的模型 | demo `settings.py`（lead / drafter：Sonnet 5.5，advisor：Opus 5.5，checker：Haiku 5.5）；模型路由的完整内容在大纲 W12 |
| 30 | 委派契约字段、对齐 W7 交接单的八个字段和卡片格式 | 大纲 W8（delegation contract）；W7 课件第 7 部分“一张交接单，八个字段”“哪一张，接手的人能直接开工？”；demo `prompts.py` 的 SHIFT_LEAD |
| 34 | R-102 未确认转写被挡掉 | demo `carekind.py` 与 `tests/test_handover.py` 的 `test_unconfirmed_transcript_is_never_returned`、`test_draft_cannot_cite_unconfirmed_observation` |
| 42、43 | Harness Engineering Framework 的模型分工、reviewer 无写工具、WHITEBOARD.md、跨项目按顺序、四个人工关卡 | https://github.com/MCP-Simplr/Harness-Engineering-Framework （`README.md`、`CLAUDE.md`、`.claude/harness/workflow.md`、`.claude/agents/reviewer.md`，核对于 2026-11-18）；讲师本人的项目 |
| 43 | 课外推荐：mcp-simplr.au、Harness Engineering Framework（讲师自己的项目，不属于课程内容） | 讲师提供的描述（mcp-simplr：帮人一天内把原型部署到生产环境）；框架仓库的 GitHub 简介 |
| 5、全部 demo | 住户、政策 | 课堂合成数据（`data/residents.json`、`data/policy.md`），不是真实的 Aged Care Quality Standards 或 SIRS 规则 |
| 43 | W8 实践、W9–W11 | 大纲第 5 节实践线和 W11 A2A 说明 |
