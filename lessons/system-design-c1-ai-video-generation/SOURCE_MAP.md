# 页面来源

原页采用 2026-11-16 确认的 W12 快照。运行时基于 Curriculum lessons/_template，本课三份副本加明页码和翻页按钮名称，并把竖屏翻页控件移到画布外。deck.tsx 与 kit.tsx 逐字采用批准版本。原素材见 [W12 课件](https://jracademy.ai/curriculum/lessons/ai-solo-founder-w12/?page=1)。

2026-11-25 加入第 2 页复习 L01 的 5 步，并新增一页概念页，页数从 13 页调整为 15 页。

| 页 | 主题 | 文件 | 来源和适配 |
|---:|---|---|---|
| 1 | AI Video Generation System Design | P01_Cover.tsx | W12 P01_Cover，保留标题、标记和五步动效 |
| 2 | 还是 5 步，地图上再加几块 | S01b_Recap.tsx | 本课新增，复习 L01 方法并列出本节新组件 |
| 3 | 先看成片，再回查三个镜头 | S02_Outcome.tsx | W12 DeckFrame 与 Panel，本课行为和拓扑 |
| 4 | 一次生成与逐镜头生成 | S03_Architecture.tsx | W12 DeckFrame 与 Panel，本课行为和拓扑 |
| 5 | 什么样的镜头可以选入成片 | S04_Quality.tsx | W12 S17_Failures 的 Table |
| 6 | 生成是可跟踪的长任务 | S05_Jobs.tsx | W12 S12_Approval 的 Node 和 Arrow |
| 7 | 长任务怎样不丢、不重复 | S05b_Reliability.tsx | 从 L01 原 P07–P09 移入：状态归属、outbox、租约、条件更新 |
| 8 | 把成片绑定到确切的镜头版本 | S06_VersionTree.tsx | W12 P05_Memory，保留左文件树与右侧面板 |
| 9 | 按可用成片计算单位成本 | S07_Budget.tsx | W12 Panel 双栏 |
| 10 | FFmpeg 只读取已选版本 | S08_Command.tsx | W12 PromptCard 和 Panel |
| 11 | 只换第二镜，再合成新版 | S09_Rework.tsx | W12 DeckFrame 与 Panel，本课行为和拓扑 |
| 12 | 小组设计 · 只重做出错的镜头 | S10_Exercise.tsx | W12 Steps 与 Panel，加入课内工作单 |
| 13 | 哪种失败要重跑模型 | S11_Failure.tsx | W12 S17_Failures 的 Table |
| 14 | 用两份清单证明返工范围 | S12_Review.tsx | W12 Steps |
| 15 | 从成片回查每个镜头 | S13_Materials.tsx | W12 Steps 与 Panel |
