# AI Engineer 第七期 · 实践第一课

60 页项目管理版，全部为课堂主线，无延伸附录。保留37个旧教学页；完整多Agent图解、五步ADLC、SDD、PRD→Rules→CLAUDE.md和仓库策略串起CareKind任务实施与验收。

来源：大师课第一课的 AI Coding / SoT / 项目上下文；第二课的产品分析、完整 PRD 和规则；Claude Code 大师课的 Context、CLAUDE.md、Skills与实践心法。CareKind练习、受控修改、review和W2交接串在同一条主线。

课堂120分钟沿目录带练；W2承接产品/UI概念及整组进阶材料。实践导师 Lightman / Jason，本场主讲依实际安排。

```bash
bun install --frozen-lockfile
bun run dev --host 127.0.0.1 --port 8026
bun run build
```

方向键/空格翻页；F全屏；V摄像头；`?page=1`回到正式封面。页码见SOURCE_MAP.md。

- PRD.md：完整迁入与纠错范围。
- SOURCE_MAP.md：每页来源与W2迁移标识。
- RUNSHEET.md：讲师流程和逐页提示。
- WORKSHEET.md：由public目录提供的CareKind工作单。
- QA.md：当前版本本地验收记录。

真实CareKind starter尚未在本任务中验收；代码示范用老师实际提供并核查的项目，不编造路径、命令、测试或已实现功能。86页历史版本已部署；本次版本包括P05商业模式、P06跨行业比较、移除个人AI OS与八页产品拆解迁到W2，本次60页修订处于本地验证完成、待发布状态；线上历史版不代表本次修订。实际验收范围见QA.md。

## 三周独立入口

- W1：项目启动，本课件。
- W2：独立目录 `../ai-engineer-cohort-07-practice-w2/`，本地 http://127.0.0.1:8032/ 。
- W3：独立目录 `../ai-engineer-cohort-07-practice-w3/`，本地 http://127.0.0.1:8033/ 。

每周独立放映列表、页码、工作单和构建，不在一个PPT内切周。

新增 P05：CareKind养老业务、收费与录音流程；P06：跨行业商业模式比较。


## 本次课程范围

AI Engineer 主线是 CareKind 项目管理：目标与范围、PRD、上下文与规则、任务拆分、受控开发、验收和交接。Company OS 是 FDE 的企业工作范围延伸，涉及业务流程、权限、系统接入与持续运营；两类职责可以协作。

八页产品拆解内容移到 W2 独立课件，W1 对应源码作为 Legacy 保留且不放映。个人 AI OS 示例页不再放映。逐页来源和迁移映射见 SOURCE_MAP.md / source-map.json。

五步ADLC主图为需求→PRD→开发→部署→反馈；本周执行方式是Spec-Driven Development（SDD）。先PRD→Rules→CLAUDE.md，再按受控任务实施与验收。原八页概念迁到W2 P04–P11，原18页进阶页迁到W2 P28–P45。
