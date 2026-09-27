# 第七期逐课内容提升 · Batch 04

日期：2026-09-08
范围：W2 Transformer、Tokenization 与相关互动 Lab
状态：本地内容完成；Lab 入口尚待运行；未同步 production

## 本批完成

- `L29`：按 decoder-only 架构重组 Token → Embedding → Causal Attention/MLP → Logits → Next Token，并连接 Prefill、Decode 与 KV Cache。
- `L30`：区分 Token、Token ID、Input Embedding、Contextual Representation 和 RAG Embedding，加入 tokenizer mismatch 与 truncation 风险。
- `L18`：把名词理解检查改为 Token、Context Pressure 与输出变化的受控实验。
- `L31`：把泛化 Transformer 讲义改为 Causal Mask、Logits 与 KV Reuse 的逐步 Checkpoint。
- `L32`：删除固定 temperature/top_p 配方，改为先核验模型 capability，再对同一 dataset 做单变量比较。

## 验收边界

- 三个既有 Lab slug 保留，避免破坏入口；本批未宣称其浏览器实现已和新版讲义完全一致。
- 不要求从零训练 Transformer，不新增作业。
- 课程继续以真实 model capability 与 usage 为准；unsupported 与 unavailable 必须明确记录。
