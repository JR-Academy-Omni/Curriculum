# 来源与资源复用记录

核对日期：2026-10-22。课程按当前对话确认范围设计。

## 本地来源

| 来源（相对 curriculum） | 用法 | 边界 |
|---|---|---|
| `ai-solo-founder-bootcamp/COURSE_REDESIGN.md` | W1 / W2 / W5 / W10 / W12 方法 | 不复制创业、融资、税务、就业承诺 |
| `ai-solo-founder-bootcamp/public/outline.json` | 现有分课与操作粒度参考 | 新课维持五课，不搬运完整创业营课时 |
| `ai-solo-founder-bootcamp/skills/opc-ceo-ai-os/SKILL.md` | SoT、输入／输出／审核和状态 | 不声称本次已连企业账号或运行一周 |
| `ai-solo-founder-bootcamp/skills/opc-brand-launch/SKILL.md` | 品牌规范应用至网站 | 基础 VI 与原型，不等于完整商业品牌项目 |
| `ai-solo-founder-bootcamp/skills/opc-ai-team/SKILL.md` | 工作说明、Schedule Contract、失败演练 | 手动与定时结果分别验收 |
| `codex-ai-video-course/public/outline.json` | 视频素材目录 | 模板是否适配两小时新课尚未验证 |

## 已核对的资源候选

`jr-academy-web-zh/src/config/prompt-labs/` 中 `clear-task.ts`、`output-format.ts`、`business-writing.ts`、`information-extraction.ts`、`prompt-chaining.ts` 文件存在。仅作为教师参考，不绑定课程、不声称线上可用。若后续正式引用平台 Lab，需按 Skill 将其作为独立 InteractiveLab Lesson 并重新核对总时长。

## 官方能力依据

[OpenAI Scheduled tasks](https://learn.chatgpt.com/docs/automations?surface=app)，2026-10-22 已打开核对。本地任务需要电脑、应用和项目可用；任务配置和真实触发分别记录。这里用于说明运行条件，不代表本次配置或执行过定时任务。

## 调研边界

本次是已确认课程方案的 curriculum 创建，不重新制定学制和价格。课程属于企业在职提效，不使用求职营的十份 JD、薪资或就业路径模板。没有做客户访谈、竞品价格排名或市场规模验证，不将课程设计假设写成市场事实。Microsoft 2025 Work Trend Index 搜索仅提供背景候选，未形成充分正文证据，未用于营销数字或课程需求结论。

## Skill 应用

主流程：`../../.claude/skills/bootcamp-curriculum-creator/SKILL.md`。
审查：`../.claude/skills/curriculum-review/SKILL.md`。
格式：`../OUTLINE_JSON_FORMAT.md` 与 `../../tools/skills-data-manager/SCHEMA_REFERENCE.md`。

按用户确认范围保留五节实操课；不强塞四阶段、求职、P3、证书或额外 Lab。Slide Deck、完整视频、生产同步与发布不是本次源文件创建的已完成项。owner CI/CD 与费用禁令优先于 Skill 中自动部署和付费调用默认。
