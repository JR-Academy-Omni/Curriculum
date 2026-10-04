# AI Engineer 第七期 · 实践第一课 PRD

## 当前修订 · 2026-10-04

用户直接授权：CareKind养老商业模式拆成两页、去除个人AI OS、AI Engineer讲项目管理、Company OS作为FDE范围延伸；多Agent并行重组，把原W1 P26–P33八个产品/UI概念页完整迁到W2；修正ADLC并加入大师课P13多Agent/worktree图解。保留现有目录和URL。

当前W1共60页、全部主线、无延伸附录，含37个完整旧教学页。W2共47页，迁入页为P04–P11；独立构建和页码。W1个人AI OS示例、重复Context定义与Mini CRM数据关系页保留Legacy源码，不放映。Repo Map页已按用户要求移除；仓库策略在PRD→Rules→CLAUDE.md之后。

状态：本次修订已在本地构建与浏览器验证，实际范围见QA.md；线上历史版已发布，本次60/47页修订待发布，不声称云端已更新。真实CareKind starter尚未在本任务中验收。

## 课程边界与教学决策

W1按C7P01完成产品契约、repo map、rules、任务拆分与一次受控改动；W2按C7P02完成UI/Design System。CareKind是养老记录与交班项目：机构购买、护理人员使用、老人受益；收费方式与跨行业拓展是待访谈/付费试点验证的商业假设。8小时录音分析是后续方向，先短记录MVP；分析须保留来源、对象归属与人工确认。商业参考见research/carekind-business-model.md。

AI Engineer聚焦目标、范围、PRD、任务、规则、实现、验收和交接；Company OS作为FDE的企业流程、权限、系统接入与持续运营范围延伸，两类岗位可以协作，不是互斥定义。个人AI OS不进入课堂主线。

ADLC采用需求→PRD→开发→部署→反馈五步生命周期。本周项目采用Spec-Driven Development（SDD）：先规格、约束与验收，再按规格实施和检查；SDD是执行方式，不替代五步ADLC生命周期。完整PRD提供项目上下文，本次Work Plan约束范围、负责人、验收与权限；允许一个或多个Agent协作，人保留确认、review和发布审批。并行需要文件边界、接口与共享服务约定；worktree隔离文件，不自动隔离数据库。

线上练习采用独立填写/自查、课堂聊天区提交、讲师抽样点评，不安排同桌互审。原课堂案例保留为教学案例，不能冒充CareKind的实际需求或已实现功能。修改整份PRD自动部署、每次必遵守、Markdown总优于JSON、80%上下文必断崖等绝对承诺；代码命令、路径和检查从实际starter核查。

## 120分钟节奏

| 时间 | 章节 | 教学动作 |
|---|---|---|
| 00–20 | 开场/商业模式/SoT | 问清CareKind付费者、记录价值、权威来源 |
| 20–40 | 项目上下文 | 目标、规则、决策与任务；FDE企业范围延伸 |
| 40–70 | 项目范围/ADLC/PRD | 对象关系、五步循环、多Agent图解、验收与Work Plan |
| 70–100 | Repo/Rules/开发 | 仓库策略、真实路径、一次受控改动 |
| 100–120 | Review/交接 | 独立自查、实际检查、讲师点评、证据与W2交接 |

W1不再保留延伸附录；课内Lab合并到CareKind工作单。原八页概念与整组18页进阶页均在W2独立课件。W2按阶段选择讲授，不把旧Lab时长硬塞进120分钟。

## 逐页规格

| 页 | 组件 | 定位与来源 |
|---|---|---|
| P01 | `S01_Cover` | 主线 · 本课实践/章节 |
| P02 | `A01_Agenda` | 主线 · 本课实践/章节 |
| P03 | `S02_Evidence` | 主线 · 本课实践/章节 |
| P04 | `S03_Weeks` | 主线 · 本课实践/章节 |
| P05 | `S04_CareKindBusiness` | 主线 · 本课实践/章节 |
| P06 | `S04b_IndustryModel` | 主线 · 本课实践/章节 |
| P07 | `C01_SoT` | 主线 · 本课实践/章节 |
| P08 | `V1_S01a_WhyVibeCoding` | 主线 · vibe-coding-master |
| P09 | `V1_S01b_ForEverything` | 主线 · vibe-coding-master |
| P10 | `V1_S03_SourceOfTruth` | 主线 · vibe-coding-master |
| P11 | `V1_S04_NoSoTChaos` | 主线 · vibe-coding-master |
| P12 | `V1_S04c_SoTCase` | 主线 · vibe-coding-master |
| P13 | `V1_S04c2_SoTCaseAnswer` | 主线 · vibe-coding-master |
| P14 | `V1_S04d_SoTLadder` | 主线 · vibe-coding-master |
| P15 | `V1_S04d2_SoTFirst` | 主线 · vibe-coding-master |
| P16 | `V1_S04e_FromSoT` | 主线 · vibe-coding-master |
| P17 | `V1_S05_AIOS` | 主线 · vibe-coding-master |
| P18 | `V1_S05a_TwoLayers` | 主线 · vibe-coding-master |
| P19 | `V1_S05b_FourC` | 主线 · vibe-coding-master |
| P20 | `V1_S05c_MemorySystem` | 主线 · vibe-coding-master |
| P21 | `V1_S05e_CompanyOS` | 主线 · vibe-coding-master |
| P22 | `CC_S06_GoalContextMemory` | 主线 · claude-code-master |
| P23 | `C02_Product` | 主线 · 本课实践/章节 |
| P24 | `S07_FrameExercise` | 主线 · 本课实践/章节 |
| P25 | `C03_ADLC` | 主线 · 本课实践/章节 |
| P26 | `V1_S16c_SDLCFlow` | 主线 · vibe-coding-master |
| P27 | `V2_S16d_ADLCFlow` | 主线 · vibe-coding-master-l2 |
| P28 | `V1_S16e_MultiAgentWorktree` | 主线 · vibe-coding-master |
| P29 | `S08_ADLC` | 主线 · 本课实践/章节 |
| P30 | `V2_L2P03_WholePRD` | 主线 · vibe-coding-master-l2 |
| P31 | `V2_L2P04_PRDFive` | 主线 · vibe-coding-master-l2 |
| P32 | `V2_L2P04b_PRDQuality` | 主线 · vibe-coding-master-l2 |
| P33 | `V2_L2P04c_PRDLab` | 主线 · vibe-coding-master-l2 |
| P34 | `S11_Acceptance` | 主线 · 本课实践/章节 |
| P35 | `S12_SpecExercise` | 主线 · 本课实践/章节 |
| P36 | `C04_Ground` | 主线 · 本课实践/章节 |
| P37 | `V2_L2P04d_PRDToRules` | 主线 · vibe-coding-master-l2 |
| P38 | `CC_S09b_RulesFirst` | 主线 · claude-code-master |
| P39 | `V2_L2P04e_RulesList` | 主线 · vibe-coding-master-l2 |
| P40 | `V2_L2P04h_RulesChecklist` | 主线 · vibe-coding-master-l2 |
| P41 | `V2_L2P04f_RulesFileStructure` | 主线 · vibe-coding-master-l2 |
| P42 | `V2_L2P04g_PRDFolderStructure` | 主线 · vibe-coding-master-l2 |
| P43 | `CC_S09_ClaudeMd` | 主线 · claude-code-master |
| P44 | `CC_S09c_ClaudeMdTiers` | 主线 · claude-code-master |
| P45 | `CC_S10_OptimizeClaudeMd` | 主线 · claude-code-master |
| P46 | `CC_L01_FirstClaudeMd` | 主线 · claude-code-master |
| P47 | `V2_L2P04i_RepoStrategy` | 主线 · vibe-coding-master-l2 |
| P48 | `S16_GroundExercise` | 主线 · 本课实践/章节 |
| P49 | `S17_SmallTask` | 主线 · 本课实践/章节 |
| P50 | `S18_Prompts` | 主线 · 本课实践/章节 |
| P51 | `S19_BuildExercise` | 主线 · 本课实践/章节 |
| P52 | `C05_Review` | 主线 · 本课实践/章节 |
| P53 | `S20_Review` | 主线 · 本课实践/章节 |
| P54 | `V2_L2P05_Unstuck` | 主线 · vibe-coding-master-l2 |
| P55 | `S22_PeerReview` | 主线 · 本课实践/章节 |
| P56 | `S23_TaskBoard` | 主线 · 本课实践/章节 |
| P57 | `CC_S25_Principles` | 主线 · claude-code-master |
| P58 | `CC_S26_NoHallucination` | 主线 · claude-code-master |
| P59 | `CC_S27_ThreeSteps` | 主线 · claude-code-master |
| P60 | `S24_Handoff` | 主线 · 本课实践/章节 |

## 完整迁入与迁移证据

37个旧教学页来源、当前页码与八页W2映射见SOURCE_MAP.md/source-map.json；新多Agent图解的线上原页实读见research/master-page13-import.md。Vibe Coding大师课提供SoT、项目上下文与SDLC；L2提供五步ADLC、PRD、Rules和项目策略；Claude Code大师课提供项目Context、CLAUDE.md、Skills与工程心法。迁入完整图解、互动和Lab；不修改旧课源文件。五个runtime文件沿用_template，官方Logo直接使用本地品牌资产。

## 历史版本

24页摘要版曾作为初稿；其后86页完整迁入版已发布。新增CareKind两页后曾为88页草稿；本次经过W2迁移、去除个人示例/重复定义/Mini CRM数据关系、加入多Agent页与仓库策略重排，上一版曾冻结为79页；本次移除Repo Map并将整组18页迁到W2后，当前为60页。历史页码不得作为当前讲师流程。

## 新修订：整组18页迁入W2

用户要求W1的Context、Skills、产品验证、项目管理与部署整组教学页全部迁到下一节W2。18页完整保留图解、Lab与素材；W1不再注册，源码Legacy保留。W2在最终Review与交付前接Review与交付前的“W2进阶练习”，共47页。本课持续120分钟，页面库用于教学选择与准备，不将全部原Lab时长叠加到课堂。当前页码和验证状态在迁移后按实际App重建。

## 整组18页迁入W2的最终范围

W1只保留60页主线；W2共47页。W2 P28为“W2进阶练习”章节页，P29–P45完整保留Context、Skills图解与Lab、产品验证、项目管理与部署教学页。原文件在W1保留Legacy、不放映；source-map保留两组26页迁移位置。当前顺序以App生成表为准，SDD/Company OS的页面正文由对应内容修订负责，验证与发布状态见QA.md。
