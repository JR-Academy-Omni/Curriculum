# 自学内容修订：L22–L25

状态：本地内容修订；没有执行 SDM 同步、网页发布或视频重制。

- L22：删除 SQL 在非结构化数据面前完全失灵、企业数据固定比例等无依据说法；用任务、政策与转写案例讲数据契约、真实性与权限。
- L23：不再要求 Iris/回归/聚类训练；聚焦 Baseline、错误成本、数据泄漏与时间变化。95/100 与 0/5 明确是教学算例，核算为 0.95 和 0。
- L24：纠正所有微调都是监督学习、Embedding 必为无监督、Constitutional AI 是简单升级版等误述，解释 SFT、DPO 与典型 RLHF 的边界。
- L25：不再将 Transformer 描述为淘汰所有旧架构；移除额外 MNIST 必做与猫狗分类项目要求。正文按参数、Context、运行状态和三种失败案例组织。
- 保留课程 code、类型、现有其他字段与顺序；无历史媒体删除操作。
- 按 learn-content-enhancer 的案例、模板、常见问题、自检要求组织内容，不以篇幅替代正确性。

## 验证

- JSON 解析通过，138 条有效课程，25 Live。
- 四节均包含三项学习步骤、正文、自检。
- `git diff --check` 对 outline.json 通过。
- 尚未做 production 学生页面阅读验收；不将本地修订标为发布完成。

## 技术来源

核验日期：2026-09-08。

- https://arxiv.org/abs/2305.18290
- https://arxiv.org/abs/2212.08073
- https://arxiv.org/abs/1706.03762
- https://www.sbert.net/docs/sentence_transformer/training_overview.html
