# 教师备课与授课说明

这是一份课程创建阶段的备课说明，不是已经制作完成的五套 Slide Deck。主要课时、步骤和验收以 `public/outline.json` 为准；新 Deck 必须使用 Talk Deck。

## 全课准备

- 提前打开完整成果；每节先展示结果，再拆解过程。
- 准备订阅登录的 Codex，不提供 API Key 或启动按量模型脚本。
- 下载／本地准备可用模板和有权使用的素材；检查学员环境，不把安装等待计作成果。
- 使用同一家虚构企业，持续保留示例标记；企业素材可以脱敏替换。
- 演示目录、草稿、生产发布和真实业务状态分别说明，不实际接入邮箱、支付、CRM 或社交账号。
- 课程产物与用户导出应使用系统 Downloads 或明确选择的保存位置，不把内部工具目录当作最终交付。

## L01 · Workspace

打开 `public/examples.html#result-L01` 的企业资料和 AI Assistant 工作说明。演示把确认事实、来源和未知拆开。让学员在相同模板上整理自己的版本，再运行企业介绍／FAQ 草稿任务。检查重点是事实一致、缺失项和输出标准，不能以对话成功代替完整成果。

## L02 · Brand / Website

打开 Design System 与网站原型，说明相同资料如何进入页面。以已有文字标识或合法 Logo 开始，不现场重新设计复杂商标。准备可以替换企业资料的单页模板；课堂聚焦 Typography、Color、Spacing、Button、Card、Form，以及 Desktop / Mobile 检查。

## L03 · Content Factory

展示三篇全文而非标题列表。选题来源使用 W1-01 至 W1-03，配合上周选题检查重复。Review 先检查事实和范围，再检查语气与渠道适配。所有结果停留在 draft，审核动作不等于发布。

## L04 · Video

目前只有 45 秒 Script / Storyboard。授课前必须准备真实完整 MP4、可修改源项目和已验证的渲染模板，并在授课电脑上完成预览、修改、导出。没有这些材料时，此课不能宣称教学准备完成。优先已有图片、截图和动态图文，不依赖付费生成；如后续产生已验证 MP4，按视频 registry Skill 登记，本次未制作或上传。

## L05 · 可直接带课的工作任务

### 先展示什么

打开 `public/examples.html#result-L05`。展示本周输入、三个选题、两篇完整中文草稿、Review Checklist 与工作简报。读清楚没有发布、转化或节省工时的观测数据，不能用草稿数量推断经营效果。

### 给 Codex 的课堂任务

> Read the business Source of Truth, brand guidelines, current weekly update, and previous topic log. Create a weekly marketing pack containing three sourced topics, two complete draft posts, a review checklist, and a concise work report. Cite each factual claim to an input record. Flag missing dates, prices, permissions, or customer evidence; do not invent them. Detect repeated topics and duplicate runs. Save a new draft using the week and input revision, without overwriting reviewed material. Stop before sending, scheduling publication, or publishing. List the decisions that require human review.

### 三次演示

1. 正常输入：使用 week1 与 previousTopics。先手动执行，核对来源、草稿全文和待确认项。
2. 缺失输入：只给活动名称，不给日期或价格。对应文案应 blocked / needs-review，不能由模型补写。
3. 重复输入：同一周次、同一输入版本再次出现。识别已有成果，返回 duplicate，不覆盖、不发送。

第二周输入为 week2。学员应根据新增 FAQ 模板形成不同选题；当前包未提供第二周真实运行结果，不能把预期写成已完成记录。

### Schedule Contract 模板

- Task：Weekly Marketing Pack。
- Trigger：课堂拟设每周一 09:00，Australia/Brisbane；学员按实际时区选择。
- Input：企业资料、本周更新、上周内容，记录版本。
- Output：独立周次草稿＋审核清单＋简报。
- Runtime：需要本地文件时电脑与应用须运行、项目须可用；检查计划、权限和额度。
- Review：指定内容负责人，未经审核不外发。
- Dedupe：同一周次与输入版本已有结果时停止。
- Failure：输入不全就标 blocked；环境不可用就保留失败，不伪装完成。
- Pause：授课工具中的暂停或停用操作，课前确认实际入口。
- Evidence：手动运行记录、下一次运行时间、真实定时触发记录分别保存。

这里只交付配置模板。创建课程没有授权启动当前 owner 的真实 Scheduled Task。正式带课时，先展示账号实际支持的入口，再让学员在其授权范围内配置。无法支持时明确记录配置缺口，不把模拟回执当作定时成功。
