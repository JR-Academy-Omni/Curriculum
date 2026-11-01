# AI 应用 System Design 基础 · 官方来源与教学边界

2026-11-01。对应 `src/data/system-design-module.ts` 的 diagramId 200–209。面向通过 AI Coding 开发的在职单栈学员，使用常见英文术语配中文短解释，不展开框架代码。

## 来源

- [AWS CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html)：百分位数与统计窗口；用于说明平均值不代表所有请求体验。
- [AWS Lambda concurrency](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html)：Concurrency 是同时在途请求数；与请求速率不同。本课不引用账户配额或固定上限。
- [OpenAI latency optimization](https://developers.openai.com/api/docs/guides/latency-optimization)：减少关键路径等待、并行与流式体验的基本考虑；本课不调用模型，不引用未实测性能数字。
- [SQS standard at-least-once delivery](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html)：standard Queue 可能重复交付，应用需处理重复。
- [SQS dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)：失败消息可按策略隔离、诊断和 redrive；DLQ 不是自动修复。
- [AWS Builders Library: timeouts, retries and backoff with jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)：Timeout 不代表副作用未发生；不受控重试可能放大过载；退避与 jitter 需配合适用的幂等设计。
- [MDN 202 Accepted](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202)：接收请求不等于完成处理，后续状态需另行获取。
- [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)：Cache 复用、fresh/stale、private/shared 与个性化内容泄露边界。

## 逐页教学映射

| diagramId | 主题 | 读图任务 |
|---|---|---|
| 200 | Latency / Throughput / Concurrency | 区分单次等待、单位时间完成量和同时在途数量 |
| 201 | AI latency breakdown / TTFT / Streaming | 找关键路径；不把节点宽度当耗时比例 |
| 202 | Sync / Async | 区分等待业务完成与接收后后台执行 |
| 203 | Message Queue | 分开 Producer、Queue、Worker、Result 与失败路径 |
| 204 | Job status / Poll / push | 接收、执行、成果可打开分别验收 |
| 205 | Timeout / Retry / Backoff / Idempotency | 结果未知时避免重复副作用 |
| 206 | Cache | 命中、时效、失效和用户边界共同判断 |
| 207 | Backpressure / rate limit | 积压反映流入和消费能力差异；容量有界 |
| 208 | AI app architecture | 实时和异步是两条路径，运行证据支撑两者 |
| 209 | Scale / Stateless / Availability | 更多实例不自动解决共享依赖瓶颈或恢复 |

## 事实与实现边界

全部图形为课程机制解释，没有实际业务人数、延迟、吞吐、价格、在线状态或 Queue 积压指标。没有 AWS 资源创建、真实 Queue、Worker、Cache、扩容或模型调用。现有本课 HTTP/SQLite 练习不因新增图解而自动具备异步任务功能。

- Queue 增加调度和等待，不能承诺单任务更快。
- 传输协议的交付语义不等于业务副作用的恰好一次；去重和幂等需端到端设计。
- HTTP 202 不保证任务最终成功。
- Streaming 可降低首个可见结果的等待，完整生成时间仍需测量。
- Cache 不能跨用户复用任意私密结果；权限、key scope、TTL、版本与失效策略需共同考虑。
- Health checks 和多个实例不等于已完成 Availability 或灾备；恢复需要实际验证。

## 集成

根课件导入 `systemDesignSlides`，按顺序将 notes 放入讲师备注数组，数据其余字段放入 slides.json；导入 `systemDesignDiagrams` 并 spread 到已有 `diagrams`。保持 diagramId 200–209，物理页码可另行安排。现有 `DiagramStage` 可直接播放这些标准 Diagram 数据；无需改受保护运行时。
