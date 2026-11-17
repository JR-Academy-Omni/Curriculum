# W8 · 来源

API 信息核对于 2026-11-18。课件里的数字只来自 demo 的实际运行（第 43 页），没有引用外部统计。

| 页 | 内容 | 来源 |
|---|---|---|
| 全课 | 主题、各部分时间、CareKind 边界 | JR Curriculum `ai-engineer-bootcamp/COHORT_07_OUTLINE.md` 的 W8 与 CareKind 章节 |
| 2、46 | CCAR-F 的 Agentic Architecture & Orchestration | https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification （大纲引用） |
| 6、11 | 先用最简单的做法，确实需要再加复杂度 | Anthropic, Building effective agents: https://www.anthropic.com/engineering/building-effective-agents |
| 15–20 | 五种编排模式 | 大纲 W8；Managed Agents multiagent 文档列出的 parallelization、specialization、escalation；Cookbook 的 dynamic workflow 示例 https://platform.claude.com/cookbook/patterns-agents-async-multi-agent-orchestration |
| 18、30 | advisor：执行者模型不能比 advisor 强；Opus 5.5 的建议对客户端 redacted | Managed Agents multiagent 文档的 Advisor 一节 |
| 22、24、25、27、40 | coordinator / roster / version pinning / thread / 共享容器 / 一层委派 / 25 个子线程 / session 预算 / 子线程工具调用转发到主事件流 / `multiagent_20261001` 取代旧 `coordinator` 类型 | https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration （通过 Claude Code 自带的 claude-api 参考核对）；Python SDK `anthropic` 2.6.0 的类型定义 |
| 23 | `AgentDefinition` 字段（description、prompt、tools、model） | 已安装的 `claude-agent-sdk` 0.2.178 的 `types.py`；文档 https://code.claude.com/docs/en/agent-sdk |
| 34 | 委派契约字段 | 大纲 W8（delegation contract）；W7 第 46 页交接单 |
| 4、全部 demo | 住户、政策 | 课堂合成数据（`data/residents.json`、`data/policy.md`），不是真实的 Aged Care Quality Standards 或 SIRS 规则 |
| 47 | W8 实践、W9–W11 | 大纲第 5 节实践线和 W11 A2A 说明 |
