# 练习 6 · 批量处理（一次性大活 · 可以断点续跑）

把一堆旧内容改成新版本。重点不是改写，是**跑到一半断了，重跑时不会重复做、不会漏**。

## 目标
把 `inbox/` 里的每篇旧内容改写成 `config/batch.md` 指定的新版本（例如英文版、小红书版、SEO 版）。

## 输入
- `inbox/*.md`：你的旧内容，一篇一个文件（现场放 5–10 篇）
- `config/batch.md`：改成什么、要求是什么
- `state/batch-progress.json`：哪些已经做完（第一次运行时不存在）

## 做法
1. 读 `state/batch-progress.json`，跳过已经做完的文件。
2. 这一次**最多处理 5 篇**，每做完一篇立刻写进 outbox 并更新 progress，不要攒到最后一起写。
3. 写到 `outbox/<原文件名>`。

## 产出
- `outbox/*.md`
- `state/batch-progress.json`：`{ "done": ["a.md", "b.md"], "failed": { "c.md": "原因" } }`
- `runs/<日期>/batch/batch-report.md`：这次做了哪几篇、跳过哪几篇、还剩几篇

## 完成判据
- inbox 全部处理完 → `done`
- 还有剩余 → `skipped`，reason「还剩 N 篇，再跑一次」
- 有失败的 → `needs-human`，列出文件和原因
