# 页面来源

版式沿用 2026-11-16 确认的 W12 快照。运行时基于 Curriculum lessons/_template，deck.tsx 与 kit.tsx 逐字采用批准版本。原素材见 [W12 课件](https://jracademy.ai/curriculum/lessons/ai-solo-founder-w12/?page=1)。

2026-11-25 按「方法 + 核心组件」重写全节内容，页数从 13 页调整为 18 页。原 P05–P11 的 outbox、租约、条件更新和验收表移到 L03 讲。

| 页 | 主题 | 文件 | 版式来源 |
|---:|---|---|---|
| 1 | System Design 基础 | P01_Cover.tsx | W12 P01_Cover，保留标题和五步动效 |
| 2 | System Design 要回答什么 | S02_WhatIs.tsx | W12 Panel 与 Arrow |
| 3 | 分析任何系统的 5 步 | S03_Method.tsx | W12 S17_Failures 的 Table |
| 4 | 把需求说清楚 | S04_Requirements.tsx | W12 Panel 双栏 |
| 5 | 估出数量级 | S05_Capacity.tsx | W12 Panel 与 Takeaway |
| 6 | 估算时要记住的数字 | S06_Numbers.tsx | W12 Table 与 Panel |
| 7 | 从一台机器开始 | S07_SingleBox.tsx | W12 Node 与 Steps |
| 8 | 数据库与对象存储 | S08_Storage.tsx | ComponentSlide（W12 Node、Arrow、Panel 组合） |
| 9 | 负载均衡与无状态服务 | S09_LoadBalancer.tsx | ComponentSlide |
| 10 | 缓存 | S10_Cache.tsx | ComponentSlide |
| 11 | Message Queue | S11_Queue.tsx | ComponentSlide |
| 12 | 同步还是交给队列 | S12_SyncAsync.tsx | W12 S12_Approval 的 Node 和 Arrow |
| 13 | 组件速查表 | S13_ComponentMap.tsx | W12 Table |
| 14 | 每个组件挂了会怎样 | S14_Failures.tsx | W12 Table |
| 15 | 重试与幂等 | S15_Idempotency.tsx | W12 Panel 双栏与 Takeaway |
| 16 | 把整条链路走一遍 | S16_Outcome.tsx | 原 S02_Outcome 的成果组件 |
| 17 | 小组练习 · 订单报表导出 | S17_Exercise.tsx | W12 Steps 与 Panel |
| 18 | 组件地图与后两节 | S18_Next.tsx | W12 Panel 三栏与 Steps |

## 数据来源

- P06 延迟数量级：Jeff Dean 整理、Peter Norvig 等人传播的「Latency Numbers Every Programmer Should Know」，如 <https://gist.github.com/jboner/2841832>。课件只取数量级，具体值随硬件变化。
- P04 的 43 分钟：30 天 × 24 小时 × 60 分钟 × 0.1% = 43.2 分钟。
- P05、P17 的负载、文件大小和耗时为课堂假设。
