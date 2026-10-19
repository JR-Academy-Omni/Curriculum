# 来源与核对记录

核对日期：2026-10-19。只记录要点（转述），原文以链接为准。本课只引用 Anthropic 的文章和文档。

## 1. Anthropic — Introducing Contextual Retrieval

- 链接：https://www.anthropic.com/news/contextual-retrieval
- 发表：2024-09-19

| 页面上的说法 | 原文要点 | 用在 |
|---|---|---|
| 知识库小于 20 万 token，可以整个放进 prompt | 知识库小于 200,000 token（约 500 页）时，可以把整个知识库放进 prompt，不需要 RAG；prompt caching 让这样做更快更便宜 | 第 7 页 |
| embedding 可能漏掉精确匹配 | embedding 模型可能漏掉关键的精确匹配；例子是查询错误码 TS-999；BM25 按精确字符串查找 | 第 16 页 |
| Hybrid search：向量加关键词 | 结合 BM25 和 embedding，用 rank fusion 合并结果；两者结合比只用 embedding 好 | 第 29 页 |
| Rerank：先多取一些，再重新排序 | 先取较多候选块，rerank 后只把最相关的交给模型；有额外的延迟和成本 | 第 29 页 |

## 2. Anthropic 文档 — Citations

- 链接：https://platform.claude.com/docs/en/build-with-claude/citations

| 页面上的说法 | 文档要点 | 用在 |
|---|---|---|
| 引用由程序解析，保证指向提供的文档 | API 把引用解析成固定格式并直接抽取 `cited_text`，因此引用保证包含指向所提供文档的有效指针；引用带 `document_index` 和位置信息 | 第 19 页 |

## 3. 内部资料

| 内容 | 来源 | 用在 |
|---|---|---|
| 五样东西（Context Window、RAG、Memory、Tool Results、Cache） | `lessons/ai-engineer-cohort-07-w3-context-engineering` 第 19 页 | 第 4 页 |
| freshness、permission、fallback 四条路、组装顺序 | W3 课件第 9–12 页 | 第 14、18、23、24 页 |
| 窗口上限、token 计费、top-k 预算 | `lessons/ai-engineer-cohort-07-w2-tokens-cache` | 第 7、10、13 页 |
| 全课结构、目录八个部分、第 3 页架构测试、contract 字段、failure taxonomy、CareKind 边界、检查点 1 的例子 | 讲师 Jessie 的 W4 大纲（2026-10-19） | 全课 |
