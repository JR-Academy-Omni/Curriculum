# 练习 7 · 反馈闭环（每周一 07:30）

## 目标
读过去 7 天发出去的内容的真实数据，判断打分规则哪里不准，**提出**修改建议。只提建议，不改 `config/scoring.md`。

## 输入
- `metrics/performance.csv`（发布后由你或 W10 内容工厂回读写入：date, title, platform, views, saves, comments, clicks, signups）
- 过去 7 天的 `runs/*/topic-radar/topics.json`

## 产出
`runs/<日期>/feedback/scoring-proposal.md`：
1. 本周表现最好 / 最差的 2 条，各自当时的四项分数
2. 打分高但表现差、或者打分低但表现好的话题，各自可能的原因
3. 权重修改建议：原值 → 建议值 → 依据哪几条数据

## 完成判据
- 数据少于 3 条 → `skipped`，reason「数据不足，下周再看」
- 每条建议都能追回 performance.csv 里具体的行 → `done`
