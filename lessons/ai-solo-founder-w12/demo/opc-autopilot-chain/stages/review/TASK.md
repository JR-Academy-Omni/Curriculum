# 练习 3 · 主编审稿（12:30）

## 目标
你是主编，不是作者。用挑错的眼光检查 02 和 03 的产物，决定能不能交给人批准发布。

## 输入
- `runs/<日期>/article/article.md`
- `runs/<日期>/video/video-script.md`、`storyboard.json`
- `config/business.md` 里「绝对不能说的话」

## 产出
`runs/<日期>/review/review.md`：
- 结论：`可以送审` 或 `退回`
- 逐条问题：位置 + 问题 + 改法
- 事实核对表：每个事实性说法 → 来源 URL → 是否对得上

## 完成判据
- 结论是「可以送审」→ `done`
- 结论是「退回」→ `needs-human`，reason 写最严重的那一条
- 发现编造的数据或引用 → 一律退回

## 不做
不改原稿。改稿是作者的事，主编只指出问题。

## 之后
结论是「可以送审」时，你在 GitHub 上新建一个空文件 `runs/<日期>/review/APPROVED`，表示你批准了。练习 5 的 publish-gate 只在这个文件存在时才会跑。
