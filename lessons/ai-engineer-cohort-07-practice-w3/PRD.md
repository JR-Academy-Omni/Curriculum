# W3 独立实践课 · Rapid CareKind MVP Build with Claude Code

用户明确要求 W1/W2/W3 全部单独。按已确认 C7P03 课程拆分创建，120分钟。每个课件有封面、目录、交付收尾、独立页码、工作单与入口；不共用 W1 的放映列表。

来源：`../../ai-engineer-bootcamp/public/outline.json` C7P03。不声明 starter 已实现或已验收；具体路径、权限、字段与运行命令必须从实际 starter 读取。

## 整体节奏

锁定 scope 10 分钟；读取 starter 与实施计划 15 分钟。
连接活动链 25 分钟；文档流程与角色权限 25 分钟。
版本、audit 和 failure states 20 分钟；集成修复 10 分钟。
端到端测试、MVP demo 与限制清单 15 分钟。

## 逐页规格

P01：正式封面。
P02：把 W2 UI 接成一条真实业务链 · 七个环节，对应 C7P03。 · 版式 rows。
P03：先锁定唯一 vertical slice · 以 W2 UI 和 W1 契约确定本次闭环。 · 版式 grid。
P04：Resident 到 Confirm，要能一路走通 · 课程主路径由三段组成。 · 版式 flow。
P05：先核查老师提供的底座 · 大纲要求 auth、database、API、routing 和 test starter。 · 版式 rows。
P06：让 Claude 先给出可审查计划 · 计划需要映射到实际文件与验收。 · 版式 rows。
P07：完成 repo 阅读和任务拆分 · 用具体证据验证模型是否理解 starter。 · 版式 exercise。
P08：把活动放回正确的业务上下文 · 从 Resident 到 Care Activity，关系必须一致。 · 版式 rows。
P09：一次动作必须跨过三层 · 画面成功只是其中一层。 · 版式 flow。
P10：连接 Resident 到 Care Activity · 分步实现后，用同一任务检查。 · 版式 exercise。
P11：Progress Note 不能直接越过复核 · 大纲要求 Draft → Review → Confirm。 · 版式 flow。
P12：按钮隐藏不足以保护业务规则 · 服务端必须判断角色与当前状态。 · 版式 grid。
P13：实现文档状态与角色边界 · 先跑正常路径，再试一次应拒绝的操作。 · 版式 exercise。
P14：确认针对哪一个文档版本 · 版本与 reviewer 是业务证据的一部分。 · 版式 rows。
P15：一次关键动作，留一条可追溯记录 · 课程要求补齐 audit event。 · 版式 grid。
P16：错误路径也要写成验收动作 · 每次失败都要知道系统有没有改变。 · 版式 grid。
P17：补齐版本、audit 和失败分支 · 用一组明确操作证明业务规则。 · 版式 exercise。
P18：沿 UI → API → 数据库定位问题 · 把失败现场交给 Claude，而不是让它猜。 · 版式 rows。
P19：把 MVP 主路径写成浏览器验收 · 课程使用 Playwright 验证 non-AI vertical slice。 · 版式 rows。
P20：现场演示与限制清单 · 演示同一条完整业务链，说明真实完成范围。 · 版式 exercise。
P21：把可运行 MVP 交给下一周 · Voice AI 的第一次接入安排在 W4。 · 版式 hero。

状态：本地构建与浏览器验收通过，未部署。
