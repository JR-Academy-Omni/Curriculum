# 用户增长基础设施 / Growth Infrastructure

2026-10-11。此页解释“如何把一条增长机制接进网站、App 与后台”。**新增后台链路、示意 URL、Super Admin 配置和奖励账本是教学设计，不是薅羊毛 App 已部署能力。**

## 页面设计记录

- 结论：网站或 App 收集路径与行为，服务端验证邀请关系及规则，把奖励写入可去重的账本，再向账户回读；之后仍须观察用户有没有获得价值与回访。
- 模式：入口参数剖解 + 5 节点流程 + 闭环箭头 + 小型幂等演示。
- 白底让连接线和 URL 参数清楚；使用课程现有品牌色区分入口、事件、验证、账本和账户。
- 演示初态：登录用户的示意基线 5 个雷达，不纳入其他任务奖励。第一次模拟同一有效邀请后 7；再次重放同一事件仍 7；重置 5。无请求、无真实奖励。
- 动画：第一次有效邀请改变账本/额度文字与状态底色；不让整页依赖延迟淡入。低运动直接更新；打印初态为 5 且完整显示所有流程与条件。
- 精简画面把 schema、反作弊边界、错误状态放在此资料与讲师备注。

## 真实代码观察，未做线上验收

源码在 `/Users/lightman/Documents/sites/au-deals-app/mobile/src/`，读于本日期。

| 已核实内容 | 代码依据 | 不可扩大的结论 |
|---|---|---|
| 登录后基础雷达额度 5；每位成功邀请新 JR 账户增加 2 | `store.tsx` 常量 `RADAR_BASE=5`、`RADAR_PER_INVITE=2` 及 `radarLimit` 公式 | 未登录额度是 0；任务奖励也会影响实际额度。教学图 5→7 排除了其他奖励。 |
| 邀请数来自 JR 的 `/referral/stats` | `auth.ts` 的 `fetchReferral`；`store.tsx` 的 `refreshReferral` | 这是共享 JR 推荐系统的总注册邀请数，不证明邀请发生在薅羊毛 App，也不等于 App 活跃或首次获值人数。注册成功人数不等于新用户首次获值人数。并未声称已经有统一增长数据仓库。 |
| 注册可传入 `referralCode` | `auth.ts` 的 `signUpWithEmail` | 页面示意 `ref=DEMO` 不是现有 API 字段，也不是已存在的公开路径。真实实现应遵循已有 URL 与字段契约，不改线上 URL 结构。 |
| 任务进度与领取记录写本地存储 | `store.tsx` 的 `taskLog`、`writeTaskLog`、`claimTask` | 跨设备奖励账本、后台核验和反作弊是本次教学设计；不能将本地日志当成已验证的服务端事实。 |
| 分享图片面板关闭会记一次分享 | `components/ShareSheet.tsx` 的 `recordShare()` 与代码注释 | expo-sharing 不返回实际是否发出；面板完成不是朋友点击、新注册或成交证据。 |
| 雷达在 App 打开/重新拉取等时机扫描，本地通知 | `store.tsx` 雷达逻辑与 `notify.ts` | 不是已验证的服务端推送；不能承诺关闭 App 后实时到达。 |

## 渠道、邀请、成交是三种关系

- **UTM / Channel Attribution** 回答哪个渠道或活动带来访问，例如 `utm_source=wechat`、`utm_medium=share`、`utm_campaign=radar`。Google 文档将这些参数用于流量来源与营销活动归类；UTM 是可编辑的来源标签，不充当登录身份、邀请资格或佣金凭证。
- **Referral / Invitation Attribution** 回答谁邀请了哪个新账户。用服务端可解析的邀请码/标识与活动版本关联，不把用户邮箱、手机等个人数据暴露在 URL；注册后按明确规则绑定关系，定义归因窗口、覆盖政策及奖励资格。
- **Affiliate / Commission Attribution** 回答哪位合作方带来哪笔有效订单。邀请注册奖励与成交佣金使用独立规则/账本；支付确认、取消、部分退款、全额退款、争议和结算窗口都会影响佣金。退款后怎样撤销或冲减已结算佣金是经营规则，需要在活动前定义，不能把“点了购买链接”视为成交。
- **Deep Link / App Link** 负责 Web 与 App 打开路径。已安装 App、未安装网页兜底、登录中断、跨设备/跨会话的来源保存都要验收。通用 HTTPS App Links 本身不证明安装后自动恢复完整归因；若需要 deferred deep linking，另设计并验证。

页面 `example.invalid/...` 是不可用于真实活动的教学地址。`ref` 为示意参数名，不是声称产品已有此路径。

## 最小实现清单（设计建议）

| 层 | 最小内容 | 验收证据 |
|---|---|---|
| 入口 / Entry | 稳定分享落地 URL、渠道标签、活动标识、可解析邀请标识、Web/App 兜底 | 分享链接重新打开，刷新及登录后仍能恢复正确上下文 |
| 身份 / Identity | 匿名访问标识；登录后将允许关联的来源与账户绑定 | 不把同一人跨访问直接多算；不以 UTM 替代账户身份 |
| 事件 / Events | `event_id`、事件类型、发生/接收时间、账户、活动、来源、邀请关系、对象、规则版本；字段为建议 schema | 分别查看访问、注册、首次获值、回访；客户端报告与服务器已确认事实分开 |
| 核验 / Validation | 活动有效、资格、自己邀请自己排除、新账户条件、每人/活动上限、奖励预算、停止开关 | 通过、拒绝、重复、预算不足均有清楚结果 |
| 奖励账本 / Reward Ledger | 同一逻辑奖励的唯一业务键；服务端持久去重；发放与记录保持一致；外部失败可安全重试 | 同一事件发送两次仅一笔奖励；并发重放仍不会双发 |
| 回读 / Read-back | 账户看到余额、奖励状态、来源与可解释失败；重试不会多奖励 | 核验后读取状态和余额，而非只看请求成功 |
| Super Admin | 活动/渠道/资格/奖励/预算/停止，配规则版本与审计；配置发布前校验 | 运营能明确停止活动；已发奖励保留历史，不被新规则覆盖 |
| Affiliate | 合作方/订单/支付/退款/佣金状态与结算窗口；可信支付事件 | 支付成立后入佣金；按活动条款处理退款，能对账 |

幂等不是“按钮点一次”：事件去重、业务奖励去重与调用外部支付/奖励服务时的幂等分别处理。一个事件对象可能产生多次投递；不同事件对象也可能描述同一个逻辑奖励，业务唯一键还需要覆盖后一种情况。奖励可采用 `(campaign_id, rule_version, inviter_id, referred_user_id, reward_type)` 的逻辑键，具体字段与数据库约束由工程设计确定。重试沿用同一逻辑键，不能每次新建奖励。

首次获值示例为“新用户保存一个真正适用的优惠 / 创建一条有用雷达”；真实领取折扣是否成功，不能仅从打开官方链接推断。当前注册即加雷达的规则与更深的获值指标分别讲，不能无依据把现有规则改成首次获值才发奖励。

## 官方依据

访问日 2026-10-11，仅以官方 primary source 核验技术概念。页面为教学架构，不要求学员使用这些具体供应商。

1. [Google Analytics：URL builders / campaign data](https://support.google.com/analytics/answer/10917952?hl=en-uk)：UTM 用于营销活动来源归类；至少一致使用 source / medium / campaign。
2. [Google Analytics：Traffic-source dimensions](https://support.google.com/analytics/answer/11242870?hl=en)：解释渠道来源与 medium 的含义。
3. [Expo：Overview of linking, deep links, Android App Links, and iOS Universal Links](https://docs.expo.dev/linking/overview/)：说明 deep links 与 App/Universal Links；App 已安装和未安装有不同打开行为。
4. [Stripe：Receive events / Webhooks](https://docs.stripe.com/webhooks)：事件会重试，可能重复或乱序；确认事件签名并处理重复事件。此来源支持事件投递边界，不代表 App 已接 Stripe。
5. [Stripe：Idempotent requests](https://docs.stripe.com/api/idempotent_requests)：相同逻辑请求使用同一幂等键可以安全重试；外部服务的保留期限不替代自己的奖励账本。
6. [Stripe：Refunds](https://docs.stripe.com/refunds)：退款有独立事件与状态，需要跟踪更新。Affiliate 如何冲减佣金是本课设计建议与业务条款，不是 Stripe 的自动分佣保证。

## 本页验收

- 已合入本地第 26 页，课件总数 65；2026-10-11 `bun run build` 成功。只出现 Vite 现有大 chunk 提示。
- 实际 Playwright 桌面 1440×900、1920×1080，手机 390×844、横屏 844×390：初态 5，模拟有效邀请 7，同一事件重放仍 7，重置 5；所有文字位于 slide canvas 内。已目视查看桌面与手机截图，修正节点短说明靠底的问题。
- 普通动画实际读回：余额文字与状态同时变化，背景由白色经中间色到品牌绿色；低运动测试直接显示终态。
- 键盘 Shift+Tab / Tab 到演示按钮时，浏览器显示可见 `auto 1px` 焦点 outline。
- 打印视图第 26 页保留全图、URL、配置栏、全部短说明与基线 5；在足够宽的视口截图目视检查没有内部裁切。
- 截图与机读结果：`curriculum/out/qa/ai-solo-founder-w11-infrastructure/`。未发出任何真实 API、邀请、奖励、支付或部署操作。
