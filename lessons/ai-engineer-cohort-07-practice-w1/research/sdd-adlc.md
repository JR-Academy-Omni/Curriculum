# SDD 与本课 ADLC 的边界

2026-10-04 核对 GitHub 官方 Spec Kit README：
https://github.com/github/spec-kit#spec-driven-development

官方流程目前是 specify → plan → tasks → implement → converge：先明确 what/why，再形成规格、技术计划和任务，最后对照产物实现与检查。本课用中文“需求规格 → 技术计划 → 任务清单 → 实现 → 对照规格检查”解释。这是教学译写，不把中文词当作安装命令；课堂不要求安装 Spec Kit。

SDD 全称 Specification-Driven Development，规格驱动开发。本课将 PRD 定位产品方向与范围，将 spec 定位功能的用户、边界、数据约束、失败行为和验收。二者可在同一文档组织，不要求所有团队固定命名。

本课 ADLC = Agent Development Lifecycle（智能体开发生命周期），五步循环是需求、PRD、开发、部署、反馈，不宣称缩写或步数是行业唯一标准。SDD 指导需求到代码的执行，与生命周期是不同层级、可以互补。

CareKind 草稿保存示例是拟定课堂功能规格，不宣称真实 starter 已有接口或功能。实现前核对现有仓库、权限和数据状态。SDD 不意味着自动部署；人保留业务方向、验收、确认与发布审批责任。

S08_ADLC 替换原七项英文检查，文件名为稳定注册保留。五个中文动作配同一个 CareKind 例子，不要求学生先理解 Frame/Ground 等术语。
