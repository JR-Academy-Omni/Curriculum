# 第七期逐课内容提升 · Batch 08

日期：2026-09-08
范围：数据库顺序第 43–50 条，RAG Grounding、Ingestion、Embedding、W4 Theory/Practice、Query Pipeline、工具选型与 PDF Parsing
状态：本地内容与 HTML 已生成；既有 Lab、录播、Deck 与 Starter 待运行或选片验收；未同步 production

## 本批完成

- `L55`：从 RAG 名词体验改为固定 evidence packet 的 Grounded Answer Contract Lab。
- `L56`：从固定 `500 token + Chroma` 改为 versioned ingestion、两种 chunking 对照、幂等更新/删除与 index rebuild。
- `L57`：加入 embedding contract、候选模型对照与双索引迁移。
- `L58`：W4 Theory 补齐 offline/online architecture、permission-aware retrieval、grounding、citation 与 failure taxonomy。
- `C7P04`：保持第一次接 AI 只到 confirmed transcript，补 Adapter、状态机、版本、audit、失败与 PII 边界。
- `L59`：加入 permission filter、ranked trace、citation validation 与 failure injection。
- `L61`：把固定参数和工具名单改为 Component Registry 与选型 ADR。
- `L64`：把 PDF 百科改为 intake、page routing、canonical output、quality gate 与 quarantine。
- 重写 `ai-engineer/rag-basics` 与 `vibe-coding/data-rag` 两篇中文阅读。

## 生成链修复

- `apply-cohort-07.mjs` 现在不会用旧 override 覆盖已完成的 2026-09-08 逐课审核。
- 7 个 Legacy Placeholder 明确保持 `cohort7Included: false`，重建后仍为 138 条、25 场 Live。
- 修正旧 “same repository” 宣传语，改为同一条产品交付主线且不限定 repository 结构。
- 同步 `L58`、`C7P04` public copy，HTML mismatch gate 通过。

## 边界

- RAG 不替代 database tool、Memory、Fine-Tuning、业务权限或 Human Review。
- Citation ID 存在不等于 claim 被支持；必须做 claim-source 检查。
- Voice Practice 不提前生成 Progress Note，也不接 RAG 或 Agent。
- chunk size、top-k、threshold 和 vector database 不存在课程统一答案。
