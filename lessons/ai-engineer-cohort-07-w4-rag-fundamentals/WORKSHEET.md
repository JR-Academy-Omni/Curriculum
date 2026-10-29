# AI Engineer W4 · RAG Fundamentals · 讲义

课上每个 contract 只讲一个字段，排错只讲两层。完整字段和其余失败层都在这里。本课不布置作业。

## 课上的两个检查点

0. 复习连一连（第 4 页）：1 这一次调用里放的全部内容；2 按问题，从资料库里找相关片段；3 跨会话留下来的信息；4 工具刚查回来的结果；5 重复的前缀不用重算。A Tool Results、B Cache、C RAG、D Context Window、E Memory。
1. 今天是 2026 年 10 月。用户问「去年第三季度营收是多少？」，索引里有答案的那一块写的是「2025 Q3 revenue」。纯向量检索会怎样？
2. 同一个问题「周末探视要预约吗？」，下面两个错误答案，各错在 Retrieval（R）还是 Generation（G）？
   - 答案 1：top-k 是停车说明和餐厅时间，回答「探视政策里没有提到预约」。
   - 答案 2：top-k 里有「周末探视需提前 24 小时预约」，回答「不用预约，周末随时来」。

## 三个 contract 的完整字段

| Contract | 字段 | 课上只讲 |
|---|---|---|
| Ingestion | source / version / hash / parser / chunker / embedding / index lineage | version |
| Retrieval | query / permission filters / top-k / score semantics / no-result behavior | no-result behavior |
| Answer | claims / source IDs / supported、partial、conflict、no-answer / review state | 四种状态 |

## Failure taxonomy

| 层 | 失败 | 证据 | 课上 |
|---|---|---|---|
| Ingestion | 解析错、版本旧、漏页 | manifest / chunk lineage | 讲义 |
| Retrieval | 相关 chunk 未进入 top-k | ranked results / relevance | 重点 |
| Assembly | 证据被截断或污染 | context trace | 讲义 |
| Generation | claim 无证据或过度概括 | claim-source review | 重点 |
| Policy | 越权来源进入回答 | permission decision / audit | 讲义 |

## 其他

- **hard negatives**：和正确答案很像、但其实不相关的样本，属于 embedding 模型训练与评估，从课堂移到讲义。
- **CareKind 边界**：课堂使用 synthetic policy，不把 resident PII 放入通用 vector index；政策证据不能自动触发临床、用药或监管申报决定。

## 面试检查

- 画出 online 与 offline path
- 解释 chunking、top-k 不存在通用最佳值
- 区分 retrieval 与 generation metrics
- 说明更新、删除、权限、no-answer 和 rollback

## 完成判据

课上的检查点都能说出理由；面试检查四项能用自己的话讲出来。
