---
name: opc-content-factory
description: 把资料源、选题、平台生成、审核、授权、排程和回读串成可审计流程；适用于 W10 自动内容工作流设计与演练。
---

# 受控 AI 内容工厂

## 开始前

读取学员已有 BUSINESS-SOT.md 和相关证据；没有时先建立最小草案，未知写 unavailable。阅读随包的 [Founder OS](../opc-founder-os/SKILL.md) 与[证据规则](../opc-founder-os/references/evidence-policy.md)。本 Skill 适用于产品、专业服务和实体业务，不假设学员必须做 SaaS。

## 执行方法

读取 W8/W9 内容、品牌、来源、素材权利和可用工具。建立 MASTER 索引：定位、受众、痛点、语气、禁说项、真实证据、当前业务目标，引用业务 SoT，不复制出另一份事实。

给候选记录 source revision、受众价值、证据完整度、新鲜度、重复度和制作可行性；门槛由本栏目目标设定。合格候选产生 brief，缺证据不能自动 selected。TikTok 走独立原生脚本，其余平台也有各自变体。

定义状态：draft → reviewed → approved → queued/scheduled → publishing → published，另有 blocked/stale。审核覆盖事实、来源、语言、权利、重复、目标身份、时区、格式、必填字段和媒体 QA。生成成功不能自动等于批准。

自动发布需要现有明确授权：栏目、账号、语言、格式、内容边界、起止时间、频率/预算、撤销机制和人工例外。用户要求“创建 skill”不授予运行时发布权限；已有适用长期授权可使用，无须重复询问。无授权时做到可审阅的完整样包。

执行前读取随包发布契约并核对实时工具能力。相同逻辑帖子始终同一幂等键，记录内容哈希、目标、operation ID、provider ID、实际状态与公开 URL。超时先回读原 operation；不能为重试换键。

演练重复触发、断开权限、事实源变更、媒体失败、敏感私信；源变更使尚未发布版本 stale 并重新审核，不偷偷重发已发布版本。没 live route 就用明确模拟回执测试状态逻辑，保留 blocked，不能声称一周无人值守运行成功。

只在有已验证 analytics contract 时回收同平台同口径数据，否则 unavailable。输出工作流和一次 run report，清楚区分设计、模拟、手动跑通、定时跑通及发布。

涉及发布、排程、状态读取或正式媒体制作时，先读[发布与媒体契约](../opc-founder-os/references/publishing-contract.md)。

## 交付与验收

按用户所需范围保存下列产出；沿用已有同义文件，避免重复维护。每个关键结论标来源/日期或假设，每项未完成动作标负责人、下一步和通过标准。

- `CONTENT-FACTORY.md`
- `AUTHORIZATION-SCOPE.md`
- `CONTENT-RUN-LOG.md`

- drafted：材料可读、来源与缺口可检查；尚未发生的动作明确待执行。
- executed：本 Skill 要求的实际访谈、运行、演练或外部动作有日期与记录；只记录真的发生的部分。
- verified：相关输出与来源逐项一致，并有适用的学员/课程/客户或专业审阅者的验收记录。涉及税务法律、客户接受或课程资格的结果不能由 AI 自行批准。

最后说明本次做到哪一步，哪些证据还缺。提供公开下载包或导出文件时使用系统 Downloads，同名文件加序号；业务工作文件继续保留在学员自己的项目中。

## 课程依据

当前大纲 + 跨课参考课件，未找到该周专属课件。阅读[课件映射](references/course-source.md)了解实际取材与版本边界。
