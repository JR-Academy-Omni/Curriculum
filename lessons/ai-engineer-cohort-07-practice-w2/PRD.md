# W2 · 人与 Agent 协作交付 CareKind UI

2026-10-11 owner 已确认：组合已有 ADLC、Subagent、Agent Team、Company OS、Skills 教学；补混合团队总图与 CareKind 实操；保留 UI / Design System；交付本地预览。仅本地修订，不发布。

## 目标与边界
- 学生能区分人和人、人和 Agent、Agent 和 Agent 三种协作，指定 accountable owner、执行者、reviewer、依赖与证据。
- 同一合成 CareKind 案例串起需求→任务计划→分工→统一设计→执行→交接→集成验收。ADLC 仍为需求→PRD→开发→部署→反馈；SDD 为执行方法。
- 管理 Agent 协助拆解、派工、汇报与协调；工具连接和授权才形成真实送达。Skill 是步骤与检查标准，不等于员工或消息系统。
- 产品 UI 用合成 Resident / Shift / Progress Note 演示；字段、权限和状态为课堂候选契约，不声称真实 CareKind starter、API、数据库或 Voice AI 已实现。
- 沿用 JR Register B / DeckFrame / 1600×900；不改运行时，不改 URL。原47页与上一轮15页保留注册；本轮新增6页公开图解/案例，总计68页。旧页重复概念按课堂地图选讲，非全部计时相加。

## 120分钟课堂路径
| 时间 | 行动 | 内容 |
|---|---|---|
| 00–15 | 讲图与复查 | 混合团队、五步ADLC、共享真相；旧需求页按需回看 |
| 15–35 | 拆任务与分工 | 六格Brief、依赖、Subagent / Team、worktree、通信、派工 |
| 35–50 | 固化做法 | Skill / Rules / Prompt、起草任务拆解Skill并核查 |
| 50–70 | 设计与试操作 | CareKind Brief、A/B设计、DESIGN.md、tokens、组件状态 |
| 70–100 | 30分钟分工Lab | 3人小组或独立+Agent替代路径；UI任务、交接冲突、证据回收 |
| 100–115 | 集成与评审 | 业务状态、手机模拟布局、键盘、Review / 合并证据 |
| 115–120 | 交付 | Owner、Skill、UI、状态矩阵、handoff与W3接口待办 |

## 新增/改编页规格
| 组件 | 教学任务与主视觉 | 来源 |
|---|---|---|
| X01_CollaborationShift | 三种协作；传统团队与混合团队对照 | 大师课S04b_TeamWork |
| X02_HybridMap | 负责人→管理Agent→三名员工+各自Agent→验收；共享SoT与反馈回路 | Company OS N24/N16/N15，owner本次主线 |
| X03_ADLC | 完整五步循环 | W1 V2_S16d_ADLCFlow完整迁入 |
| X04_TaskTree | 同一成果→契约门→三条并行任务→集成门；依赖先于并行 | L8 Charter / Lead职责；CareKind教学适配 |
| X05_TaskBrief | 六格任务卡，已填写的CareKind UI任务 | L7 六格Brief适配 |
| X06_AgentTopologies | Subagent中心汇总 vs Team成员交换证据 | L7/L8拓扑适配 |
| X07_Worktree | 完整repo/worktree/review图，任务换为CareKind | W1 worktree图迁入适配 |
| X08_TeamCharter | Outcome、Owner、证据、消息触发、Done；含冲突消息 | L8 Charter与Messages适配 |
| X09_SharedTruth | 人和每个人的Agent读同一份规则/状态/接口 | 大师课团队SoT适配 |
| X10_Dispatch | 目标下发→接单→结果→证据→阻塞回流 | Company OS员工工作流适配 |
| X11_SkillParts | Prompt / Rules / Skill / 管理Agent分工 | L5适配 |
| X12_SkillDraft | 任务拆解SKILL.md关键片段+输入输出+实测任务卡 | L5起草/迭代流程适配 |
| X13_HandoffConflict | 旧status/pending vs新state/Review；交接与裁决可切换 | L8 Conflict→Decision适配 |
| X14_LabPlan | 30min任务、角色、输出、检查与独立替代路径 | 本课Lab |
| X15_IntegrationReview | 分支/PR/Review/集成/证据/反馈 | W1 Review / TaskBoard、L8 Lead |

## 原有页显著补强
- S04：填好的CareKind Design Brief，区分候选权限与业务事实。
- S07：同一Documentation任务的两个可视化方向。
- S09：DESIGN.md示例与可判定的规则。
- S10：primitive→semantic→component与同一值影响两个组件。
- S11：交互组件的默认、focus、disabled、loading、error状态。
- S12：可操作CareKind合成UI（导航、草稿、保存、送审、角色确认、失败/升级/恢复、审计、窄布局）。
- S14：完整候选状态/角色/动作矩阵。
- S02、S20、S21：课堂路径与完整协作交付。
- P10–P17需求图解、P49–P66旧进阶材料仍完整保留；更新最终页码与来源映射。

## 配套与验收
统一WORKSHEET/public副本；HANDOUT可复制Brief/Skill/冲突/验收模板；RUNSHEET逐阶段示例与失败兜底；SOURCE_MAP逐页追溯。
构建、62页桌面和手机画布检查、重点互动/键盘/禁用/加载/空/错/未保存/保存/刷新/导航检查、官方Logo匹配。静态QA不等于真实产品/API或课堂演练验收。

## 2026-10-11 · 公开图解与案例组合（owner授权）

六页新增 + 既有X06官方来源补强；总计68页，保留既有62页、UI/Design System、合成实操和120分钟。
页内统一写出处、文献日期/核查日期和改编范围。所有新图以可编辑React图层重绘，不复制来源图片、Logo或大段文章；课堂例子明确标记JR改编。

| 新页 | 教学对象 | 图解 / 互动 | 事实边界 |
|---|---|---|---|
| R01_WorkModes | 微软四种工作模式 | 四种模式卡片，选择后显示CareKind任务例子 | 按原文模式概念改编；不是原图矩阵、数据图或能力评级 |
| R02_TeamExperiment | Cybernetic Teammate团队研究 | 实验四组条件图；研究结论与课堂迁移分区 | 用2026正式期刊版摘要，791名专业人员；不造数值柱图，不外推所有职业 |
| R03_ResearchArchitecture | Anthropic研究系统 | 用户→Lead/Memory→Subagents/Tools→综合/Citation→补充研究回路 | 2025厂商工程案例简化重绘；CareKind检查是教学迁移，不是原文实测 |
| R04_IssueToReview | GitHub Copilot任务交付 | 5步可切换Issue→Agent→PR→Review→复查/合并示意，真实反馈可读 | 官方操作流程 + 自拟CK-UI-02；不创建真实Issue/PR或触发模型 |
| R05_SkillLayers | Anthropic/Agent Skills机制 | 元数据→指令→按需资料；卡片切换显示上下文内容 | 不声称每种会话加载机制相同；示意不是token测量 |
| R06_SkillCaseBridge | 官方PDF Skill案例 | forms/reference按需资料树→CareKind任务拆解Skill目录 | 原文PDF案例为事实；CareKind目录是本课模板，不称已安装运行 |
| X06补强 | Claude Code Subagent/Team | 原拓扑对照保留，添加当前官方来源与实验状态 | 核查日2026-10-11；具体产品能力与版本依官方文档 |

节奏：六页嵌入已有讲授段，原概念页按需回看；不叠加课时，不减少30分钟Lab和10分钟集中评审。
同步页码、目录、RUNSHEET、HANDOUT、逐页SOURCE_MAP和公开来源台账；核查新增页三尺寸、模式/流程/加载互动、原CareKind路径、实际导航与本地预览。

## 最终68页放映顺序

- P01：S01_Cover。
- P02：S02_Lesson。
- P03：S03_Lesson。
- P04：X01_CollaborationShift。
- P05：R01_WorkModes。
- P06：R02_TeamExperiment。
- P07：X02_HybridMap。
- P08：X03_ADLC。
- P09：X09_SharedTruth。
- P10：V2_L2P01_Ceiling。
- P11：V2_L2P01b_IdeaVsNeed。
- P12：V2_L2P02_FiveQ。
- P13：V2_L2P01c_PagesBreakdown。
- P14：V2_L2P01d_CRUDPatterns。
- P15：V2_L2P01e_Components。
- P16：V2_L2P01g_PageAnatomy。
- P17：V2_L2P01f_Flows。
- P18：X04_TaskTree。
- P19：X05_TaskBrief。
- P20：X06_AgentTopologies。
- P21：R03_ResearchArchitecture。
- P22：X07_Worktree。
- P23：X08_TeamCharter。
- P24：X10_Dispatch。
- P25：X11_SkillParts。
- P26：R05_SkillLayers。
- P27：R06_SkillCaseBridge。
- P28：X12_SkillDraft。
- P29：S04_Lesson。
- P30：S05_Lesson。
- P31：S06_Lesson。
- P32：S07_Lesson。
- P33：S08_Lesson。
- P34：S09_Lesson。
- P35：S10_Lesson。
- P36：S11_Lesson。
- P37：S12_Lesson。
- P38：S13_Lesson。
- P39：X13_HandoffConflict。
- P40：X14_LabPlan。
- P41：X15_IntegrationReview。
- P42：R04_IssueToReview。
- P43：S14_Lesson。
- P44：S15_Lesson。
- P45：S16_Lesson。
- P46：S17_Lesson。
- P47：S18_Lesson。
- P48：S19_Lesson。
- P49：C06_Appendix。
- P50：CC_S10b_ContextWindow。
- P51：CC_S10c_ContextRot。
- P52：CC_S19_NotAutocomplete。
- P53：CC_S20_ThreeWeapons。
- P54：CC_S21_Skills。
- P55：CC_S21b_ProgressiveDisclosure。
- P56：CC_L03_Skill。
- P57：V2_L2P02a_ProductCanvas。
- P58：V2_L2P02b_MVPScope。
- P59：V2_L2P02c_UserBehavior。
- P60：V2_L2P02d_BusinessModel。
- P61：V2_L2P02e_BusinessLogic。
- P62：V2_L2P02f_ToPRD。
- P63：V2_L2P02g_ValidationPath。
- P64：V2_L2P05a_ManageADLC。
- P65：V2_L2P06_Deploy。
- P66：V1_S05f_MdNotJson。
- P67：S20_Lesson。
- P68：S21_Lesson。
