# W3 工作单 · CareKind 可运行 MVP

依据 [PRD](PRD.md) 与 [讲师流程](RUNSHEET.md)。本课的产品不调用 AI 模型；用 Claude Code 帮助实现并验收 non-AI vertical slice。

## 1. 先核查 starter

检查实际 auth、database、API、routing 和 test starter。记录路径与运行结果；缺少底座时写缺失，不编造已有功能。

## 2. 完成一条业务链

Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm。

| 检查点 | 操作与真实证据 |
|---|---|
| UI、API、数据库关联同一对象 | |
| Draft → Review → Confirm 状态正确 | |
| 服务端拒绝越权操作 | |
| 确认绑定正确文档版本与 reviewer | |
| 关键动作写入 audit event | |
| 失败后状态是否改变 | |

## 3. 定位、测试与演示

沿 UI → API → 数据库保留一次失败现场，交给 Agent 修复后自己复测。用 Playwright 覆盖正常路径、越权、版本冲突与失败路径；列出真实通过、未执行和失败的检查。

## 交付与独立迁移

演示同一条完整业务链，提交测试结果、audit 证据与限制清单。换一个 Resident 或任务重复验收，确认流程没有绑定固定示例。Voice AI 接入属于 W4，本课不提前宣称已实现。
