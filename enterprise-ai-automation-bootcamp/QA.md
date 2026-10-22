# Local Curriculum Review · 2026-10-22

## 已执行

- 按课程 Schema 核对：`type=training`、中文 level、5 个唯一课号、22 个连续课内步骤；每课步骤总和 120 分钟，总计 600 分钟。
- Program 草案价格核对：早鸟 899、正常 1,099；币种 null，未伪造日期、讲师、报名状态或 production ID。
- `curriculum.html` 包含所有五课的标题、类型、时长、描述、教学／课堂实操／成果 Review，以及完整步骤和验收。
- 12 个静态页面在 1440px、390px、320px 下共 36 次浏览检查：HTTP 200，无页面脚本错误，无横向溢出。
- 实际点击：成果主入口 → 完整预生成成果 → 企业网站原型 → 咨询演示反馈；FAQ 可展开，键盘 Tab 可达跳转正文，主要操作有 focus 样式。
- 招生海报 `#poster` 浏览器截图已生成 PNG；点击下载成功，下载文件与源图 SHA-256 一致。文件位于系统 Downloads，没有覆盖已有文件。
- 官方 JR Logo 与品牌库源文件逐字节一致，未生成或重画。
- 已核对静态页面链接、fragment 和取材文件路径。中央目录按既有 deploy-flatten 路径登记本地课程卡；未声称这些路径已经上线。
- 人工查看桌面首屏、手机课程介绍、手机第 2 课详情与招生海报截图：英文术语和中文可读，价格与五课结构一致。
- 针对修改路径执行 `git diff --check`。没有执行全量 test、lint、type-check、build 或 CI。

截图和机器检查记录见 `qa/`；机器记录 `qa/browser-check.json` 保存页面、宽度、交互和下载路径。

## 成果示例验收

| 课次 | 当前可打开内容 | 证据与限制 |
|---|---|---|
| L01 | 完整企业资料、AI Assistant 任务规则 | 虚构、预生成；不是模型运行记录 |
| L02 | 品牌规范、Design System、网站原型与咨询演示 | 真实 HTML 可浏览；没有正式上线或客户线索写入 |
| L03 | 三个选题、三篇渠道全文、Calendar 与审核清单 | 来源一致，全部 draft；未发布 |
| L04 | 45 秒 Script / Storyboard | 没有 MP4 或已验收渲染项目，成果 Demo 未完成 |
| L05 | 完整工作包、简报、SOP 与异常预期 | 预生成；无真实模型、定时触发或经营效果证据 |

公开预览仅补充课程理解，不替代正式产品内已有成果的展示与运行。该入口尚未接通，因此完整课程成果 Demo 仍未完成。

## 未执行与待处理

- 未制作五节 Talk Deck；若创建课件，按 canonical Talk Deck Skill 与 lessons 目录登记。
- 未制作／验证完整 MP4，未调用图像、TTS、音乐或视频 API，未登记新视频 registry 条目。
- 未实际创建、配置或运行 Scheduled Task，也未验证学员账号／设备。
- 未填写日期、讲师、币种、税费、早鸟期限、软件费用、回放与答疑包含范围。
- 未创建／同步 production Training、Program、Lesson；没有真实报名、支付、发布或社交渠道操作。
- 未修改 `.github/workflows/deploy.yml`。按 owner 当前未授权部署的范围，Skill 的自动部署步骤留待明确发布任务，未触发 CI/CD。
- 本次沿用已确认课程定位和价格，没有重新做 JD、竞品定价或市场规模研究；不报告市场验证分数。
- 保留仓库原有 dirty changes。没有创建或合并临时 worktree，故无对应 worktree 需要清理。

结论：**本地 curriculum 规划与预览包已创建；未部署，未触发 CI；成果 Demo 未完成，不等同于课程教学资产全部交付。**
