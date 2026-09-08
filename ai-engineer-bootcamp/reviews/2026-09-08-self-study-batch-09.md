# 第七期逐课内容审核 · Batch 09

审核范围：数据库顺序第 51–58 条。

## 本批处理结果

- `L65` 从“少用 Token”的基础练习升级为 LLM Cost Engineering Lab，要求测量完整 usage、实现预算守门，并用 cost per successful task 验收。
- `L66` 将 Rate Limit 补成分布式系统设计：admission control、backpressure、bounded queue、retry budget、idempotency 与 failure injection。
- `L68` 不再罗列易过期价格，改为 end-to-end unit economics、tail cost、scenario forecast 与 routing decision。
- `L90` 只负责讲清 RAGAS metric contract 和 human calibration，不在 W5 重建 Evaluation Pipeline。
- `C7T05` 固定 W5 理论边界：诊断 reference RAG、读指标、做受控单变量实验；W6 才正式搭建 versioned evaluation pipeline。
- `C7P05` 保留 AI-Native Engineering Workspace 主线，补齐 Documentation Map、work graph、Architecture as Code、ADR、Hooks 与可测试 Skills。
- `L146` 明确 Rules、Commands、Skills、Hooks 与 Subagents 的区别，并加入权限与 regression test。
- `L76` 从三句占位 Lab 改为 typed prompt pipeline，覆盖 stage contract、validation、trace、partial failure、resume 与 idempotency。

## 顺序关系

1. 成本与限流课先建立调用层的预算、排队、重试和副作用安全。
2. W5 理论使用老师提供的 RAG baseline 学会判断质量，不要求学生提前搭评估平台。
3. W5 实践整理工程工作区，让后续 RAG、Agent 与 Harness 有稳定的 Spec、文档和证据链。
4. W6 Practice 建立完整 Evaluation Pipeline，W7 实现 RAG 并复用同一 dataset。
5. Prompt Pipeline Lab 用于理解确定性多阶段工作流，为后续 Agent 的动态决策边界做对照。

## 未宣称完成的状态

- 本批只更新课程 SoT、生成产物与本地详细大纲。
- 录播选片、Lab starter、参考实现、线上数据库同步和 production read-back 仍需分别验收。
- Provider 价格、配额和模型能力必须在实际授课时从官方资料及账号配置重新核验。
