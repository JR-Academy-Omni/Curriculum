# AI Engineer W5 · RAG Quality, Testing & Controlled Improvement · SOURCE_MAP

## 内容与资产来源

本课的数字全部来自老师的 reference RAG（`/Users/jessieyu/Developer/Work/jr/carekind-reference-rag`）真实运行，外部资料只用于名词定义。

| 页码 / 资产 | 来源或本地路径 | 核验日期 | 事实 / 观点 | 权利与限制 |
|---|---|---|---|---|
| 3 足迹地图课名 | `lessons/ai-engineer-landscape-talk/src/data/cohort7Schedule.ts`（jracademy.ai/curriculum/ai-engineer-bootcamp/cohort-7.html） | 2026-10-27 | 事实；W1 关键词待讲师确认 | 内部 |
| 3 学过的课的问题与关键词 | W2–W4 课件的 PRD.md | 2026-10-27 | 事实 | 内部 |
| 6、7 G16、G17 | `carekind-reference-rag/data/golden/cases.v1.jsonl`；`data/corpus/parking-and-access.md` | 2026-10-27 | 事实（语料无任何电话号码，已 grep 核对） | 虚构语料 |
| 8 系统概况 | reference RAG `README.md`、`configs/baseline.yaml` | 2026-10-27 | 事实 | 内部 |
| 10 四类失败定义 | reference RAG `README.md`「四种失败怎么判定」 | 2026-10-27 | 事实 | 内部 |
| 10 G15 强答 | `runs/20261027-152150-baseline/results.jsonl`（本地 bonsai-2） | 2026-10-27 | 事实 | 本地模型输出 |
| 11 G04 top-3 | `runs/20261023-112550-baseline/results.jsonl` | 2026-10-27 | 事实 | — |
| 12 G01 切块边界 | `runs/20261023-112550-baseline/results.jsonl` 中 `visiting-policy@v2#00` / `#01` 文本；`evals/metrics.py` 整句规则 | 2026-10-27 | 事实 | — |
| 13 四个坏答案 | `runs/20261027-144153-baseline/results.jsonl`（本地 qwen3:14b），回答为原文 | 2026-10-27 | 事实 | 本地模型输出 |
| 15 G07 五个字段 | `data/golden/cases.v1.jsonl` | 2026-10-27 | 事实 | — |
| 17 陷阱分布 | 同上统计：stale_version 5、multi_evidence 4、lexical_code 2、out_of_scope 2、clinical_boundary 2、partial_evidence 1、permission 1；期望状态 16 / 1 / 3 | 2026-10-27 | 事实 | — |
| 19 指标定义 | RAGAS 文档 https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/（v0.4.3）；reference RAG metric contract | 2026-10-27 | 事实 | — |
| 20 G03 | `runs/20261027-144153-baseline`：faithfulness 1.0，citation_issues stale_version / wrong_chunk | 2026-10-27 | 事实 | 本地模型输出 |
| 21 n=17、5 个百分点 | `runs/20261027-144153-baseline/report.md`；README「已知限制」 | 2026-10-27 | 事实 | — |
| 22 G19、G12 | `runs/20261027-144153-baseline/results.jsonl`：faithfulness 0.5、0.2；“至少 2 条是裁判错”是讲师抽检判断 | 2026-10-27 | 数字是事实；“裁判错”是观点 | 本地模型输出 |
| 23 报告摘要 | `runs/20261027-144153-baseline/report.md`：R 6 / G 5 / C 1 / N 1，混入过期 5 | 2026-10-27 | 事实 | — |
| 25、26 单变量规则 | `evals/compare.py` 输出：config diff 超过一项提示无法归因；manifest hash | 2026-10-27 | 事实 | — |
| 28–31 五个旋钮 | `runs/20261023-*/compare-vs-20261023-112550-baseline.md` | 2026-10-27 | 事实 | — |
| 30 hybrid 定义 | Anthropic《Introducing Contextual Retrieval》https://www.anthropic.com/news/contextual-retrieval | 2026-10-27 | 事实 | — |
| 32 剩下 3 道 | `runs/20261023-*/results.jsonl`：G01、G07、G10 六组均失败 | 2026-10-27 | 事实；修复方向是观点 | — |
| 34 W6 Practice | 第七期排课 C7P06「Build the Evaluation Pipeline First」 | 2026-10-27 | 事实 | 内部 |

Logo 使用模板随附官方 SVG，不用生成模型绘制。字体 license 随构建复制到 licenses/。
