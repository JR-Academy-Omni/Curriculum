# 讲师流程 · 210 分钟

讲师待排课。投屏使用 HTML deck；N 打开逐页备注，P 打印同一 HTML，F 全屏。正式日期与课程编号未调整。

## 课前

在本课目录执行 `bun install`、`bun run build`。两个独立终端执行 `bun run dev -- --host 127.0.0.1 --port 8046 --strictPort` 与 `python3 lab/server.py`。访问 http://127.0.0.1:8046/ 和 http://127.0.0.1:8047/ 。练习仅 loopback，学员在自己的电脑运行同一材料；不要共享工作区 cookie。手机查看 localhost 指向手机自身，不能用手机链接访问讲师电脑。无 AWS、模型调用或生产数据。

## 节奏

| 时间 | 模块 | 页码 | 核心动作与产出 |
|---|---|---|---|
| 0–30 | 应用与技术栈 | 1–14 | 完整成果、HTML/CSS/JS、React、Node、Web Server与运行位置图 |
| 30–75 | API | 15–24 | Request/Response/API Contract、身份、错误、Network和独立请求验证 |
| 75–95 | 数据与配置 | 25–27 | 保存重读、文件引用、前端公开配置与服务端秘密 |
| 95–105 | 休息 | 28 | 保留当前练习环境 |
| 105–130 | AWS、Firewall 与 IaC | 29–40 | 计算、入口、网络、数据、权限、日志、费用及技术Logo |
| 130–160 | System Design | 41–50 | Latency/Throughput、Sync/Async、MQ、Job、Retry/Idempotency、Cache、Backpressure、架构与扩容 |
| 160–180 | Docker 与 CI/CD | 51–57 | 源码、镜像、容器、运行版本、外部AI依赖 |
| 180–205 | 排障 | 58–60 | 证据定位、最小修复、完整链路恢复与重读 |
| 205–210 | 收尾 | 61–62 | 个人项目迁移与资料入口 |

新增System Design后保留完整API和排障练习时间。建议210分钟，可分两段105分钟；不自动改变正式排课。主线不调用真实模型或创建云资源，System Design用图解和设计任务解释机制。

## 故障与恢复

正常请求返回 201；Invalid field name 改为 notes 字段返回 400；Missing session 省略 cookie 返回 401；Read-only role 将本会话设为 viewer 返回 403；Incorrect API path 发送 /api/note 返回 404。选择 Normal request 后再保存，会将本练习角色恢复 editor 并发送合规请求。Reset workspace 只重置当前会话，需确认。

练习条件切换用于观察协议和权限结果，不是让学员假装改过源代码。真正代码修复迁移回各自项目时，需独立复现、计划、修改与回归。CORS、数据库网络和 AWS IAM 本次用图与官方资料讲解，不宣称真实云环境验证。

## 教学边界

这是本课程专用实操应用，不是已上线 CareKind。人工教学数据不进入真实业务。日志是真实本地请求结果；不称为 CloudWatch。练习角色切换不是生产鉴权设计。每个会话独立 SQLite 数据，角色、日志和重置均限定会话。无学生真实身份、患者、云 key 或计费调用。

## 时间不足

保留个人 API 验证和故障练习；缩短 EC2/Lambda/DynamoDB 备选介绍。不跳过权限以赶进度，不要求当堂新建云账号、开资源或迁移技术栈。

## 图解播放

51页含分步图解。每页可暂停、单步和重播。先辨认运行对象，再沿请求或数据流讲解。技术栈新增7页在第6–13页：先讲React/Node/浏览器/Web Server的职责，再讲API。

## System Design讲解

从短记录保存迁移到长文档生成：先定义Latency边界，再区分Sync/Async，画清Producer/Queue/Worker/Result以及Job查询。重点解释Timeout不等于未执行、重复投递需要Idempotency、Cache需校验时效和权限、扩容受下游容量约束。具体服务Logo只用于识别，不代表已选择或部署。

IaC第39页：只讲Write→预览→Review→Apply与四层职责，不运行terraform/CloudFormation。State可能敏感，Review包含删除与替换，不把回退源码当作恢复业务数据。

Firewall第34页，讲来源/协议/端口、入站出站和连接状态。SG只配置allow，NACL有按序allow/deny且stateless，WAF检查Web请求；不做任何真实网络规则变更。

P24：解释 Cross-Origin Resource Sharing；按 Missing header → Preflight → Credentials → 正常响应 → 原理动画切换，用 Console 关键词对应 Network 证据。提醒 no-cors 不解决 JSON 读取。

P44 Message Queue：先看4条消息同时保留，再单步领取M1、处理、保存与确认，直到4条完成；对照失败重新可见与无队列突发。强调不用队列不必然失败，队列也仍需重试、幂等、容量及保留期。

当前225分钟。P41–44新增15分钟Agent Runtime：代码与模型分开、容器/VM/microVM内核边界、AgentCore会话隔离与外部持久化。后续内容顺延4页，仅图解，不创建云资源。
