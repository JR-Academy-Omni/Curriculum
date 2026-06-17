# Changelog — AI Engineer Bootcamp

## 2026-06-16

- 新增整套推广三件套（PERSONAS / FUNNEL_PLAN / PROMOTION_PLAN）
  - PERSONAS.md：3 个核心买家画像（在职转 AI 开发者 / 留学转行求 offer / 资深工程师补 LLM 工程）+ 2 个不会买的人（纯小白 / 白嫖型），全部为 🚧 AI 推断版（GT 0.15，待真实访谈+评论+客服校准）
  - FUNNEL_PLAN.md：完整四档漏斗 + 单引流课形态，三档承诺按结果分级（自学/教学/陪跑），定价为 AI 推断占位待 curl 销售页核实
  - PROMOTION_PLAN.md：识别为 Type 1 求职转型 bootcamp，按 T-30→D+30 8 周时间轴排 task 矩阵，主推校友转岗案例 + 7 项目对得上 JD + Faculty 实名，红线不承诺包就业/offer

## 2026-04-21

- 新增 88 节「自学」Information lesson，绑定 ai-engineer / prompt-master / vibe-coding / openclaw 4 个 Learn 方向的章节
  - 每个 learn 章节作为独立 lesson，遵循 `curriculum/CLAUDE.md` "Learn 章节也是独立 Lesson" 规则
  - 覆盖 55 节原有 concept 课，横跨所有 10 个 Phase
  - lesson 编号用 `L{N}{a/b/c}` 子后缀，与已有 Quest 子编号共存
  - 总课数 198 → 286，totalSteps 723 → 869

## 2026-04-20

- 公开课 PPT 升级：slide deck 从 13 张扩充到 36 张（同步自 presentations/ 工作区）
  - 覆盖 Cover / Pain / Market / Capability Map / 10 Phases / Demo / Projects / Teachers / P3 Incubator / Competitors / FAQ / Pricing
  - S26 P3 Incubator 重写：去掉 82% 数据，强调多人协作 + Production 级 + Enterprise 级
- curriculum.html 顶部加 "▶ 打开课程介绍 PPT" 按钮，链接到 ./index.html

## 2026-04-14

- 新增 Phase 4: Harness Engineering（8 节课，90+30+120+30+90+20+60+30 = 470min）
  - L132 Harness Engineering 基础（LIVE）
  - L133 Harness 架构剖析：以 Claude Code 为例
  - L134 从零构建 AI Coding Agent Harness（LIVE）
  - L135 Lab: Tool Loop 实现（InteractiveLab）
  - L136 Harness 工程化（LIVE）
  - L137 Harness Patterns 参考
  - L138 Skills 范式：可复用 Agent 能力单元（LIVE）
  - L139 Quest: 在你电脑上构建个人 Harness
- 原 Phase 4（模型优化 + AI Evals + 毕业）顺延为 Phase 5
- 课程总数 164 → 172，Phase 总数 4 → 5
- 生成 V4_V5_AUDIT.md — 第四期 vs 第五期完整审计报告

## 2026-04-13

- 审计第四期 production syllabus（95 lessons），发现 44 节有录播视频
- 生成视频映射表：37 节能映射到第五期 / 7 节第五期缺失
- 新增第四期独有的 7 节课到第五期 outline.json（157 → 164 lessons）
  - Phase 1: L29 The Transformer Architecture, L30 Input Embeddings
  - Phase 3: L120-L123 MCP 源码解读/工程集成/实战项目 01/实战项目 02
  - Phase 5: L169 学员小组项目展示

## 2026-04-06

- 拆分 61 个 Lab 引用为独立 InteractiveLab lesson（96 → 157 节课）
- Lab 类型自动分类：prompt-lab / llm-lab / python-lab / aws-lab / git-lab
- 每节课后面紧跟对应的 Lab 练习课
- 重新编号 L01-L157

## 2026-04-05

- 从本地 outline.html（v5 最新版）生成 outline.json（96 lessons, 4 phases, 452 steps）
- 重建 internal.html 为课程大纲管理页面
- 96 个 lesson description 待填充（TODO）
