# 练习 2/3 · 选题雷达（每天 09:00）

## 目标
从 `config/sources.md` 的信息源里，找出今天最值得我写的 3–5 个话题，按 `config/scoring.md` 打分排序。

## 输入
- `config/business.md`、`config/sources.md`、`config/scoring.md`
- 最近 7 天的 `runs/*/topic-radar/topics.json`（避免重复选题）

## 做法
1. 逐个打开信息源，只看最近 48 小时的内容。
2. 每个候选话题写一句 `angle`：从我的目标用户的角度，这件事和他有什么关系。写不出来就丢掉。
3. 按 4 个维度打分，算加权总分，排序，取前 3–5 个。
4. 和最近 7 天选过的话题比较，重复的降到最后或删掉。

## 产出
`runs/<日期>/topic-radar/topics.json`，格式见 `schemas/topics.schema.json`。每个话题至少一个来源 URL。

## 完成判据（done）
- 至少 1 个话题，每个都有 angle、四项分数、来源 URL
- 第 1 名的总分 ≥ 3.0

## 其他情况
- 所有候选总分都 < 3.0 → `skipped`，reason 写「今天没有值得写的」，并列出最高分的那个
- 一半以上信息源打不开 → `needs-human`，列出打不开的 URL
