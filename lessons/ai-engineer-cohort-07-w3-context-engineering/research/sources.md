# 来源与核对记录

核对日期：2026-10-14。只记录要点（转述），原文以链接为准。本课不引用 Manus、Chroma。

## 1. Anthropic — Effective context engineering for AI agents

- 链接：https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- 作者：Anthropic Applied AI 团队 · 发表：2025-09-29

| 页面上的说法 | 原文要点 | 用在 |
|---|---|---|
| Prompt Engineering 管指令怎么写；Context Engineering 管每次调用放哪些内容 | 前者是写和组织指令；后者是在推理时挑选和维护最合适的一组 token，每次传给模型时都在发生 | 第 4 页 |
| 注意力有限；内容越多越容易漏掉或记错 | attention budget：每个新 token 都消耗有限的预算；context rot：token 越多，模型对其中信息的回忆越差，是逐渐变差 | 第 6 页 |
| 最小的一组、信息量最高的 token | 找到让期望结果最可能出现的、最小的一组高信号 token | 第 6 页 |
| 压缩：先保证不漏，再去掉多余的 | 压缩过于激进会丢掉后来才重要的细节；先最大化召回，再提高精度 | 第 13 页 |
| 先给目录，需要再给全文；用到才去取；现取更慢 | progressive disclosure、just-in-time retrieval；运行时探索比预先检索慢 | 第 17 页 |
| 历史太长缩成摘要；清掉旧的工具返回 | compaction；tool result clearing 是最轻的一种压缩 | 第 17 页 |

## 2. Anthropic 文档 — Prompt caching

- 链接：https://platform.claude.com/docs/en/build-with-claude/prompt-caching

| 页面上的说法 | 文档要点 | 用在 |
|---|---|---|
| 缓存要求前缀完全一致 | 命中需要前缀 100% 相同 | 第 5 页 |
| 第一行是时间戳，每次都不命中、每次按写入计费 | 断点所在的块里有时间戳时，哈希永远对不上，每次请求都付写入的钱而读不到 | 第 5 页 |
| 会变的内容放到不变的内容后面 | 静态内容放前面，时间戳等动态内容放在断点之后 | 第 5、12 页 |

## 3. Anthropic 文档 — Context editing

- 链接：https://platform.claude.com/docs/en/build-with-claude/context-editing
- 要点：清理旧的工具返回会让缓存前缀失效；文档建议用 `clear_at_least` 保证每次清掉的量值得这次失效。用在第 17 页「清理会让缓存失效，要一次清够」。

## 4. Anthropic 文档 — Context windows

- 链接：https://platform.claude.com/docs/en/build-with-claude/context-windows
- 要点：context window 是模型的「工作记忆」；更多上下文不一定更好，token 增多时准确率和回忆会下降。用在第 6 页。

## 5. 不是来自外部资料的内容

- 五项标签、五条标准、四条 fallback、Assembly 六件事、Observability 四个字段、refresh / invalidation / eviction、五种机制、Blueprint 五步：来自 W3 课程描述。
- 五个评价指标：来自讲师 2026-10-14 的大纲。
- 所有例子（小明、退款政策文档、只能退回原卡、工单备注、账户审核中、40 条交易记录）：教学示例，不是真实案例。
- freshness 与 recency 的区分：依据 W2 课件第 12 页的六条标准整理。
