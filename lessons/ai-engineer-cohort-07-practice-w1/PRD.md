---
title: AI Engineer 第七期实践第一课 · 完整迁入版
status: local-verified
owner: Lightman
session_date: 2026-10-04
duration_minutes: 120
---

# AI Coding + ADLC：CareKind 项目启动 · 完整迁入版

用户要求正式 Talk Deck 封面，并重新检查旧课件，将完整内容嫁接进来。此次直接授权重组；在同一课件目录/URL 上迭代。原24页摘要版停止作为最终方案。

## 设计与内容

正式封面 → 目录与交付 → AI Coding / SoT完整讲解及判断案例 → AI OS / Context / 规则 → Product Thinking与页面、CRUD、组件、流程、数据 → SDLC/七步ADLC/完整PRD → Repo与Rules动手 → CareKind受控修改 → Review/证据/收尾 → 延伸材料。

直接迁入旧课件的页面源码、图解、互动示例与 Lab；不把旧内容重新压成同构摘要卡片。保留一个引擎，迁入内容依赖统一到当前课程视觉组合。官方Logo从brand真实资产嵌入，禁止生成。

课内120分钟优先沿主线讲解：开场/SoT 20、AI OS/Rules 20、产品分析/PRD 30、Ground+Build 30、Review/交付20。完整页库用于带练和课后回看；延伸页（Context深讲、Skill Lab、商业模式、仓库/部署）保留并标为参考，不把所有Lab时间相加成120分钟。PRD Lab与规则Lab合并为CareKind工作单的相应步骤，受控改动与互审仍在课内完成。

W1范围以C7P01为准：产品契约、repo map、rules、任务拆分与一次受控改动；不要求完整UI或业务/AI vertical slice。拓展资料不是本周额外作业。

## 迁移修正

保留原案例作为教学案例，不冒充CareKind实际需求。五步ADLC定位为背景，正式实践用七步版。旧内容“整份PRD自动部署”“每次必遵守”“Markdown总优于JSON”“80%上下文质量断崖”等绝对表述修正为范围、权限与模型相关的具体约束，不保留无源阈值。保留实际有来源的课程图解和师生操作结构。

Claude Code机制参考（2026-10-03查阅官方文档）：
- https://code.claude.com/docs/en/memory
- https://code.claude.com/docs/en/skills
- https://code.claude.com/docs/en/best-practices

## 完整来源清单

- `lessons/vibe-coding-master/src/components/slides/S01a_WhyVibeCoding.tsx` → `V1_S01a_WhyVibeCoding.tsx`
- `lessons/vibe-coding-master/src/components/slides/S01b_ForEverything.tsx` → `V1_S01b_ForEverything.tsx`
- `lessons/vibe-coding-master/src/components/slides/S03_SourceOfTruth.tsx` → `V1_S03_SourceOfTruth.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04_NoSoTChaos.tsx` → `V1_S04_NoSoTChaos.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04c_SoTCase.tsx` → `V1_S04c_SoTCase.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04c2_SoTCaseAnswer.tsx` → `V1_S04c2_SoTCaseAnswer.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04d_SoTLadder.tsx` → `V1_S04d_SoTLadder.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04d2_SoTFirst.tsx` → `V1_S04d2_SoTFirst.tsx`
- `lessons/vibe-coding-master/src/components/slides/S04e_FromSoT.tsx` → `V1_S04e_FromSoT.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05_AIOS.tsx` → `V1_S05_AIOS.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05a_TwoLayers.tsx` → `V1_S05a_TwoLayers.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05b_FourC.tsx` → `V1_S05b_FourC.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05c_MemorySystem.tsx` → `V1_S05c_MemorySystem.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05d_MyAIOS.tsx` → `V1_S05d_MyAIOS.tsx`
- `lessons/vibe-coding-master/src/components/slides/S05e_CompanyOS.tsx` → `V1_S05e_CompanyOS.tsx`
- `lessons/vibe-coding-master/src/components/slides/S16c_SDLCFlow.tsx` → `V1_S16c_SDLCFlow.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01_Ceiling.tsx` → `V2_L2P01_Ceiling.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01b_IdeaVsNeed.tsx` → `V2_L2P01b_IdeaVsNeed.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02_FiveQ.tsx` → `V2_L2P02_FiveQ.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01c_PagesBreakdown.tsx` → `V2_L2P01c_PagesBreakdown.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01d_CRUDPatterns.tsx` → `V2_L2P01d_CRUDPatterns.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01e_Components.tsx` → `V2_L2P01e_Components.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01g_PageAnatomy.tsx` → `V2_L2P01g_PageAnatomy.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01f_Flows.tsx` → `V2_L2P01f_Flows.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P01h_DataRelations.tsx` → `V2_L2P01h_DataRelations.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P03_WholePRD.tsx` → `V2_L2P03_WholePRD.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04_PRDFive.tsx` → `V2_L2P04_PRDFive.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04b_PRDQuality.tsx` → `V2_L2P04b_PRDQuality.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04c_PRDLab.tsx` → `V2_L2P04c_PRDLab.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx` → `V2_L2P04d_PRDToRules.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04e_RulesList.tsx` → `V2_L2P04e_RulesList.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04h_RulesChecklist.tsx` → `V2_L2P04h_RulesChecklist.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04f_RulesFileStructure.tsx` → `V2_L2P04f_RulesFileStructure.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04g_PRDFolderStructure.tsx` → `V2_L2P04g_PRDFolderStructure.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P04i_RepoStrategy.tsx` → `V2_L2P04i_RepoStrategy.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P05a_ManageADLC.tsx` → `V2_L2P05a_ManageADLC.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P05_Unstuck.tsx` → `V2_L2P05_Unstuck.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P06_Deploy.tsx` → `V2_L2P06_Deploy.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02a_ProductCanvas.tsx` → `V2_L2P02a_ProductCanvas.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02b_MVPScope.tsx` → `V2_L2P02b_MVPScope.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02c_UserBehavior.tsx` → `V2_L2P02c_UserBehavior.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02d_BusinessModel.tsx` → `V2_L2P02d_BusinessModel.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02e_BusinessLogic.tsx` → `V2_L2P02e_BusinessLogic.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02f_ToPRD.tsx` → `V2_L2P02f_ToPRD.tsx`
- `lessons/vibe-coding-master-l2/src/components/slides/L2P02g_ValidationPath.tsx` → `V2_L2P02g_ValidationPath.tsx`
- `lessons/claude-code-master/src/components/slides/S06_GoalContextMemory.tsx` → `CC_S06_GoalContextMemory.tsx`
- `lessons/claude-code-master/src/components/slides/S07_ContextVsMemory.tsx` → `CC_S07_ContextVsMemory.tsx`
- `lessons/claude-code-master/src/components/slides/S09_ClaudeMd.tsx` → `CC_S09_ClaudeMd.tsx`
- `lessons/claude-code-master/src/components/slides/S09c_ClaudeMdTiers.tsx` → `CC_S09c_ClaudeMdTiers.tsx`
- `lessons/claude-code-master/src/components/slides/S09b_RulesFirst.tsx` → `CC_S09b_RulesFirst.tsx`
- `lessons/claude-code-master/src/components/slides/S10_OptimizeClaudeMd.tsx` → `CC_S10_OptimizeClaudeMd.tsx`
- `lessons/claude-code-master/src/components/slides/L01_FirstClaudeMd.tsx` → `CC_L01_FirstClaudeMd.tsx`
- `lessons/claude-code-master/src/components/slides/S10b_ContextWindow.tsx` → `CC_S10b_ContextWindow.tsx`
- `lessons/claude-code-master/src/components/slides/S10c_ContextRot.tsx` → `CC_S10c_ContextRot.tsx`
- `lessons/claude-code-master/src/components/slides/S19_NotAutocomplete.tsx` → `CC_S19_NotAutocomplete.tsx`
- `lessons/claude-code-master/src/components/slides/S20_ThreeWeapons.tsx` → `CC_S20_ThreeWeapons.tsx`
- `lessons/claude-code-master/src/components/slides/S21_Skills.tsx` → `CC_S21_Skills.tsx`
- `lessons/claude-code-master/src/components/slides/S21b_ProgressiveDisclosure.tsx` → `CC_S21b_ProgressiveDisclosure.tsx`
- `lessons/claude-code-master/src/components/slides/L03_Skill.tsx` → `CC_L03_Skill.tsx`
- `lessons/claude-code-master/src/components/slides/S25_Principles.tsx` → `CC_S25_Principles.tsx`
- `lessons/claude-code-master/src/components/slides/S26_NoHallucination.tsx` → `CC_S26_NoHallucination.tsx`
- `lessons/claude-code-master/src/components/slides/S27_ThreeSteps.tsx` → `CC_S27_ThreeSteps.tsx`

逐页顺序与课内/延伸标识见 SOURCE_MAP.md。QA完成后更新状态、README、RUNSHEET、lessons.html、CHANGELOG。旧课源文件不修改。
