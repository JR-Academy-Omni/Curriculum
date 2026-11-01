# System Design 基础讲义与教学审阅

2026-11-01。范围：新增 `public/materials/system-design.html`，不修改共享课件、主讲义、工作单或其他 agent 文件。

## 对象与教学选择

本课对象为在职单栈工程师，代码多由 AI Coding 辅助完成。重点是能读懂请求、任务与结果流，发现边界和异常，不展开队列 SDK、Redis 命令、复杂算法或架构面试套路。

贯穿两条工作：短时保存护理记录，以及长文档生成。前者在当前课程实操中有真实 HTTP/SQLite 验证；后者在此讲义中是架构设计练习，不宣称已有任务 API、消息队列、Worker、Cache、AI provider 或 AWS 部署。

## 已交付内容

- Latency、Throughput、Concurrency 的不同口径；分布、p95 与测量边界。
- AI 请求关键路径、排队与检索／模型耗时；Streaming 的首片段等待与总完成时间。
- Synchronous 与 asynchronous job 的交付区别；202 Accepted 的非终态含义。
- Producer → Queue → Worker → Result 的角色与真实业务结果位置。
- Job status、Polling/Push、成果访问权限。
- Timeout、Retry、Backoff、Jitter、Idempotency 与部分成功／并发边界。
- Cache 的 TTL、失效、版本与用户／租户权限边界。
- Rate limit、并发控制、Backpressure 与积压诊断。
- Request ID、Job ID、日志、Metrics、Trace 的证据关系。
- Horizontal scaling、Stateless service、Availability与Single point of failure；扩容与故障恢复的边界。
- 实时与异步两条架构路径，以及英文架构任务和完成标准。

## 整合建议

1. 建议在已建立 API、数据保存与运行位置认知后进入基础 System Design；不要在“React/Node 是什么”之前堆 Queue/Cache 名词。
2. 每页只解决一个判断：慢在哪、要不要异步、谁取任务、接收后如何看结果、重试会不会重复、缓存能否安全复用、处理不过来时怎样保护系统。
3. 用不同箭头表示业务请求与返回、任务投递与消费、状态查询与结果读取；不要让浏览器直接被画成从生产队列取患者任务。
4. 保留课堂已有 API 操作时间。根agent已拟调整为210分钟，可拆两段105分钟；仍需保留API操作时间，备选服务放速查，不让服务名称清单挤掉理解。
5. “让用户更快看到反馈”与“让任务总耗时更短”分别验收；Message Queue 本身不降低模型推理耗时。
6. Queue received / API accepted、Worker started、result persisted、user can open result 为独立状态；成果入口必须存在于设计，不能以 queued 或 running 替代最终交付。

## 正确性边界

- 不承诺队列使业务恰好执行一次。SQS Standard 可重复投递；幂等需结合业务请求身份、并发协调、结果保留与部分成功处理。
- 不写假延迟、假吞吐或未经测量的性能改善数字。文中的 p95 是概念定义，不是本项目实际测量值。
- 队列增长可增加等待；Worker 扩容需同时核对数据库、外部服务额度与成本。
- TTL 不能替代业务一致性与权限校验；私密结果不应跨用户任意复用。
- 本任务未调用模型、创建云资源、安装新服务、提交、推送、触发CI或部署。无真实患者、学员或生产性能数据。
- 用户页面不加入制作方式、开发状态或“示例／虚构／模拟”等标签，课程任务通过使用场景表达性质；真实性与实施边界保留在本文件。

## 官方来源

2026-11-01 已浏览官方页面：

- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202
- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html
- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html
- https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- https://aws.amazon.com/caching/best-practices/
- https://opentelemetry.io/docs/concepts/signals/traces/
- https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/

页面中同样保留可访问的官方阅读链接；无大段复制或第三方评论作为技术依据。

## 验证

已执行HTML解析与内容检查：14个章节、robots/googlebot noindex,nofollow、所有本地导航文件存在、无禁止展示标签。已在1440px与390px本地浏览器打开，14个章节均存在，无页面横向溢出、无运行时异常。未保存截图，根agent可整合到统一截图证据与课程导航。
