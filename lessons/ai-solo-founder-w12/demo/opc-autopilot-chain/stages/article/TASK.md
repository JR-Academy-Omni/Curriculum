# 练习 2/3 · 写文章（每天 10:00）

## 目标
把今天排第 1 的话题写成一篇可以直接发主平台的文章草稿。

## 输入
- `runs/<日期>/topic-radar/topics.json` 的 rank=1（只有上游 status=done 才读）
- `config/business.md`、`config/voice.md`
- 话题的来源 URL（重新打开核对事实）

## 产出
`runs/<日期>/article/article.md`，开头是 YAML：
```
---
title:
platform:
topic_rank: 1
sources: [ ... ]
---
```
正文按主平台的长度和格式写。

## 完成判据（done）
- 开头第一段直接给结论或具体信息，不用「在当今……」这类开场
- 每个事实性说法都能在 sources 里找到
- 至少一处来自 `business.md` 的我自己的经验 / 产品场景
- 结尾的行动号召指向我的产品链接，不承诺收入或结果

## 其他情况
- 来源打开后发现事实不成立 → `needs-human`，写清是哪一句
- 第 1 名的话题写不出我的角度 → 改用第 2 名，在 reason 里说明
