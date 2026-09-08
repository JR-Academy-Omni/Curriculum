# 第七期逐课内容审核 · Batch 10

审核范围：数据库顺序第 59–66 条。

## 本批处理结果

- `L79` 不再与 Langfuse 重复，改成供应商中立的 Trace Anatomy、Correlation、Version Lineage 与 Data Boundary。
- `L81a` 删除失效的 GraphPrompts 阅读依赖，改为完整的 Graph Query Decomposition 与 Evidence Path 自学内容。
- `L84` 重做为复用现有 corpus/dataset 的 OpenSearch Hybrid Retrieval Lab；支持本地容器或授权 sandbox，不自动创建收费资源。
- `L87` 不再重复 RAGAS 定义，改成 Failure Diagnosis Matrix 与受控修复循环。
- `L91` 明确 Langfuse 是 W6/W7 证据承载层，补齐 trace/span、score、dataset lineage、redaction、sampling 与 regression case。
- `L93` 使用一个 worked evidence graph 判断 GraphRAG 是否值得采用，并要求与 vector baseline 对照。
- `L95` 保持 AWS 为可选 Production Mapping，补齐 runtime、storage、index、model、identity、network 与 operations 责任。
- `L98` 将 Function Calling 补成 provider adapter 与 safe execution contract，不再依赖固定模型名称或跨供应商参数假设。
- 配套阅读 `tool-design-principles.md` 修正了固定工具数量、primitive tools 必然更优、统一 MCP naming format 等错误表达。

## 去重后的职责

| 条目  | 唯一职责                                     |
| ----- | -------------------------------------------- |
| L79   | 如何设计和阅读供应商中立的 trace             |
| L90   | 如何理解 RAGAS metric contract               |
| C7T05 | 如何诊断和受控优化 reference RAG             |
| L87   | 如何从具体 failure 选择最小修复              |
| L91   | 如何用 Langfuse 保存 trace、score 和 lineage |
| L93   | 什么时候 GraphRAG 的收益大于复杂度           |

## 未宣称完成的状态

- 本批只更新课程 SoT、配套阅读、生成产物与本地详细大纲。
- OpenSearch/Langfuse/GraphRAG starter、版本锁定、账号权限和云端实验仍需开课前验收。
- 线上数据库同步、production 部署与公开回读尚未执行。
