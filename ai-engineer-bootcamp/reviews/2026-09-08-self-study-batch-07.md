# 第七期逐课内容提升 · Batch 07

日期：2026-09-08
范围：数据库顺序第 35–42 条，Multimodal、Context Playbook、Self-Consistency、Toolbox、LLM Gateway 与 Retrieval Embeddings
状态：本地内容完成；既有 Lab/录播待运行或选片验收；未同步 production

## 本批完成

- `L47a`：重写多模态阅读，按 Image、Document、Audio、Video 分拆 contract、extraction、lineage、human review 与 evaluation。
- `L47b`：补齐 Task、Input Map、Evidence Rule、Output Schema、region/timestamp grounding 与 abstention；原关联深度阅读入口仍不可用。
- `L48`：加入七类 Context failure taxonomy、Context Trace、四种压缩/重建策略和单变量 regression。
- `L50`：把玩具式“固定 5 次 + majority vote”改成 baseline/ensemble 实验，加入 normalization、verifier、tie/abstain、correlated error 和真实成本。
- `L52`：把工具清单改成 Capability Registry，区分产品、CLI、SDK、API 与 hosted service。
- `L52a`：重写 LLM Gateway 阅读，覆盖 business contract、Model Registry、Policy Routing、Provider Adapter、可靠性、trace 与发布控制。
- `L52b`：把“追最新”改成 Tool/Model Change Management，加入官方来源、sandbox、contract tests、canary、rollback 与 retirement。
- `L54`：补齐 Retrieval Embedding 的 query/document contract、配置兼容、index migration、hard-negative/no-answer/permission dataset 与检索指标。

## 边界

- Multimodal 输入能力不等于 RAG、Tool Calling 或 Agent。
- Self-Consistency 不承诺准确率提升，也不要求模型暴露隐藏 Chain of Thought。
- Gateway 统一业务控制，但不抹平 provider 参数、工具、stream、cache、错误与数据边界差异。
- 相似度分数用于排序，不是答案正确概率；未知访问、价格或地区状态标记 `unavailable`。
