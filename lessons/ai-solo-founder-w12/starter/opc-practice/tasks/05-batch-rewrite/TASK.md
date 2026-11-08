# 05 · 旧内容批量改写（批量 · 断点续跑）

重点不是改写，是**跑到一半断了，重跑时不重复、不遗漏**。

## 输入
- 旧内容：`practice-data/old-posts/`，或者换成你自己的 5 篇（一篇一个 `.md`）
- 改成什么（练习前填）：例如「英文版，给澳洲本地用户看」/「小红书版，500 字以内」
- 保留：原文的事实、数字和亲身经历；不加原文没有的数据

## 做法
1. 读 `state/05-batch-rewrite/progress.json`（第一次不存在），跳过已经做完的文件。
2. **这一次最多做 3 篇。** 每做完一篇，马上写进 output 并更新 progress，不要攒到最后。
3. progress 格式：`{ "done": ["a.md"], "failed": { "b.md": "原因" } }`

## 产出
- `output/<今天>/05-batch-rewrite/<原文件名>`
- `state/05-batch-rewrite/progress.json`
- `output/<今天>/05-batch-rewrite/report.md`：这次做了哪几篇、跳过哪几篇、还剩几篇

## 完成判据
- `done`：全部做完
- `skipped`：还有剩余，reason 写「还剩 N 篇，再跑一次」
- `needs-human`：有失败的，列出文件和原因

---

**对 Codex 说：**
> 今天是（今天日期）。按 AGENTS.md 的规则，执行 tasks/05-batch-rewrite/TASK.md，最后写回执。

**跑两次：** 第一次做 3 篇，回执是 `skipped`。再跑一次，它应该只做剩下的 2 篇。

**弄坏它：** 第一次跑到一半时在 Codex 里点停止，再重新跑。已经写好的那几篇不应该再做一遍。
