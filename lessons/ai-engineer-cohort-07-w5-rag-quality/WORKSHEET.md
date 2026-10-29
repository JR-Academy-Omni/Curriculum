# AI Engineer W5 · RAG Quality, Testing & Controlled Improvement · 讲义

本课不布置作业。这份讲义给想课后自己看的同学：前半是课上内容的完整版，后半是“开发者加餐”。

## 一、四类失败怎么判定

reference RAG（`carekind-reference-rag`）的规则：

| 失败 | 判定 |
|---|---|
| Retrieval | 有 gold 证据没进 top-k（被切断也算），或同一文档的过期版本进了 top-k |
| Grounding | 回答了，但 RAGAS faithfulness 低于 0.7 |
| Citation | 引用了不存在的编号 / 回答了却没有引用 / 引用了过期版本 / 证据在 top-k 里却引用了别的块 |
| No-answer | 证据不足仍回答（over_answer），或有证据却拒答（false_refusal） |

一道题可以同时有几个标签。注意 Grounding 靠 LLM 裁判，裁判会判错（课上第 22 页）。

## 二、Golden case 的字段

| 字段 | 说明 |
|---|---|
| `question` | 用户会怎么问 |
| `expected_state` | supported / partial / conflict / no_answer |
| `accept_states` | 可选。有些题两种状态都算对 |
| `gold_evidence` | `(doc_id, 原句)`。不用 chunk id：换切块后 id 会变。一个 top-k 块必须包含整句才算找到 |
| `reference` | 参考答案，供 RAGAS context precision / recall 使用 |
| `traps` | 这道题考哪个坑：stale_version、lexical_code、multi_evidence、out_of_scope、partial_evidence、clinical_boundary、permission |

## 三、指标对照

| 指标 | 看哪一层 | 需要的输入 | 什么时候是 N/A |
|---|---|---|---|
| evidence recall@k / precision@k / MRR | Retrieval | gold_evidence + top-k | 没有 gold 证据的题（应拒答） |
| RAGAS context_precision / context_recall | Retrieval | 问题 + reference + top-k | 期望拒答的题 |
| RAGAS faithfulness | Grounding | 问题 + 回答 + top-k | 系统拒答时 |
| RAGAS answer_relevancy | 切题 | 问题 + 回答 + embedding | 系统拒答时 |
| 引用检查 | Citation | 回答里的引用 + top-k 的版本 | 系统拒答时 |
| 状态对比 | No-answer | 回答状态 + expected_state | — |

N/A 不计入平均，报告里写成 `值（n=有效条数）`。裁判出错记缺失，不记 0。RAGAS 当前版本 0.4.3，新 API 里叫 `AnswerRelevancy`，旧名 `ResponseRelevancy` 将在 1.0 移除。

## 四、换了模型和裁判，分数就变了

同一套检索（baseline，结果完全相同），只换作答和裁判的本地模型：

| 指标 | qwen3:14b | bonsai-2 |
|---|---|---|
| 回答状态正确率 | 0.650 | 0.350 |
| 强答 / 误拒 | 0 / 1 | 1 / 2 |
| 有引用问题的题 | 1 | 4 |
| RAGAS faithfulness | 0.815（n=16） | 0.683（n=16） |
| RAGAS answer_relevancy | 0.577（n=16） | 0.330（n=16） |
| 失败 R / G / C / N | 6 / 5 / 1 / 1 | 6 / 9 / 4 / 3 |
| 无失败的题 | 11 / 20 | 6 / 20 |

bonsai-2 给 G09 的回答“晚上 8 点以后主入口已关闭”完全正确（原文：主入口在晚上 20:00 后关闭），faithfulness 却是 0.0。结论：裁判换了，分数就不能和以前比；单变量实验里裁判也必须冻结。

数据：`runs/20261027-144153-baseline`、`runs/20261027-152150-baseline`。两次都是本地 Ollama 模型，不代表 Claude 的效果。

## 五、六组单变量实验（只跑检索）

| 实验 | 只改了什么 | recall@k | precision@k | 混进作废版本 | 有失败的题 | 修好 | 新坏 | 检索延迟 p50 |
|---|---|---|---|---|---|---|---|---|
| baseline | — | 0.853 | 0.314 | 5 | 6 | — | — | 2.9 ms |
| exp-01 | top-k 3 → 5 | 0.853 | 0.188 | 9 | 6 | 0 | 0 | 2.9 ms |
| exp-02 | 固定 120 字 → 按小节切 | 0.941 | 0.353 | 9 | 7 | 0 | G05 | 2.8 ms |
| exp-03 | 只检索 status=current | 0.853 | 0.314 | 0 | 3 | G02 G03 G04 | 0 | 2.9 ms |
| exp-05 | dense → hybrid（BM25 + RRF） | 0.765 | 0.275 | 5 | 5 | G04 | 0 | 4.1 ms |
| exp-06 | 先取 10 个再 rerank 取 3 个 | 0.853 | 0.314 | 7 | 6 | 0 | 0 | 67.6 ms |

exp-04（prompt v2：资料带版本和生效状态）需要调模型，还没跑。G01、G07、G10 在六组里都失败。

## 六、面试检查

1. RAG 的回答错了，你怎么判断是检索的问题还是生成的问题？
2. faithfulness 很高，回答还可能是错的吗？举个例子。
3. 你改了切块方法，recall 从 0.85 涨到 0.94，能上线吗？还要看什么？
4. 一份 golden set 至少要覆盖哪几类题？为什么要有“应该拒答”的题？

## 开发者加餐

reference RAG 在 `carekind-reference-rag/`，README 有完整说明。

```bash
uv venv --python 3.12 && uv pip install -r pyproject.toml

.venv/bin/python -m evals.run configs/baseline.yaml --retrieval-only        # 只跑检索，不需要 key
.venv/bin/python -m evals.run configs/baseline.yaml                         # 检索 + 作答 + RAGAS（Claude API，需要 key）
.venv/bin/python -m evals.run configs/baseline.yaml --local qwen3:14b       # 用本地 Ollama 模型，不需要 key

.venv/bin/python -m evals.compare runs/<baseline> runs/<experiment>          # 对比：config diff、metric diff、修好和新坏的题
.venv/bin/python -m evals.sample_review runs/<experiment> --compare-to runs/<baseline>
```

自己试一个实验：复制 `configs/exp-01-topk5.yaml`，只改一个键（比如 `index.chunk_overlap: 20`），跑完用 `evals.compare` 和 baseline 对比，看 G01 有没有修好、有没有新坏的题。
