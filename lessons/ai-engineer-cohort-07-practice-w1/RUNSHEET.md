# W1项目管理 · 讲师流程

## 120分钟线上课

00–20：封面、CareKind商业模式与SoT；20–40：项目上下文、规则与决策，Company OS为FDE企业范围延伸；40–70：产品范围、五步ADLC、多Agent图解、SDD与完整PRD；70–100：先PRD→Rules→CLAUDE.md，再仓库策略与一次受控改动；100–120：独立自查、实际检查、讲师点评、证据与W2交接。

W1共60页，无延伸附录。37个完整旧教学页保留；八页UI概念与整组18页进阶教学已迁到W2。实际starter、路径、命令和测试必须课前核查，本任务不声称产品功能已实现。线上独立填写/自查、课堂聊天提交、讲师抽样点评。

## 逐页提示

### P01 · S01_Cover · 课堂主线
来源：本课封面、章节或CareKind实践页

正式开场：AI Engineer实践第一课，今天用AI Coding + ADLC启动CareKind。

### P02 · A01_Agenda · 课堂主线
来源：本课封面、章节或CareKind实践页

### P03 · S02_Evidence · 课堂主线
来源：本课封面、章节或CareKind实践页

### P04 · S03_Weeks · 课堂主线
来源：本课封面、章节或CareKind实践页

### P05 · S04_CareKindBusiness · 课堂主线
来源：用户定义养老定位；research/carekind-business-model.md 的商业假设与官方参考。

本页用2分钟问清谁付款、谁使用、谁受益。养老机构订阅是建议，收费和需求尚未验证；记录价值要从时间、漏项、复核量和续费衡量。8小时录音是后续方向，先做短记录，保留来源、对象归属和人工确认。ChildCare、GP/Clinic、物业共用记录底座，但各有行业流程、责任、接入和销售。GP属于诊所场景，不重复计算为独立市场。本页占开场20分钟的一部分，后续主线课时不变。

### P06 · S04b_IndustryModel · 课堂主线
用2分钟比较四行业：同一个记录底座和B2B订阅思路，但购买者、记录对象、审批责任、软件接入和收费单位不同。先养老试点，再逐行业扩展；GP属于诊所场景，不重复计算。

### P07 · C01_SoT · 课堂主线
来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P08 · V1_S01a_WhyVibeCoding · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S01a_WhyVibeCoding.tsx

### P09 · V1_S01b_ForEverything · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S01b_ForEverything.tsx

### P10 · V1_S03_SourceOfTruth · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S03_SourceOfTruth.tsx

### P11 · V1_S04_NoSoTChaos · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04_NoSoTChaos.tsx

### P12 · V1_S04c_SoTCase · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04c_SoTCase.tsx

停在提问页，让学生先判断；下一页再给答案，不提前翻页。

### P13 · V1_S04c2_SoTCaseAnswer · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04c2_SoTCaseAnswer.tsx

先让学生回答上一页，再揭晓；判断依据是权威owner和一致的更新链路。

### P14 · V1_S04d_SoTLadder · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04d_SoTLadder.tsx

### P15 · V1_S04d2_SoTFirst · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04d2_SoTFirst.tsx

### P16 · V1_S04e_FromSoT · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S04e_FromSoT.tsx

### P17 · V1_S05_AIOS · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S05_AIOS.tsx

讲师提示：围绕 CareKind 的目标、范围、任务、规则、决策与交付讲项目管理，不引入个人 AI OS。

### P18 · V1_S05a_TwoLayers · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S05a_TwoLayers.tsx

讲师提示：围绕 CareKind 的目标、范围、任务、规则、决策与交付讲项目管理，不引入个人 AI OS。

### P19 · V1_S05b_FourC · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S05b_FourC.tsx

讲师提示：围绕 CareKind 的目标、范围、任务、规则、决策与交付讲项目管理，不引入个人 AI OS。

### P20 · V1_S05c_MemorySystem · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S05c_MemorySystem.tsx

讲师提示：围绕 CareKind 的目标、范围、任务、规则、决策与交付讲项目管理，不引入个人 AI OS。

### P21 · V1_S05e_CompanyOS · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S05e_CompanyOS.tsx

讲师提示：Company OS 属 FDE 的企业工作范围；比较企业流程、权限、系统接入与运营闭环，以及 AI Engineer 项目的 PRD、实现与验收，说明两者协作。

### P22 · CC_S06_GoalContextMemory · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S06_GoalContextMemory.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P23 · C02_Product · 课堂主线
来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P24 · S07_FrameExercise · 课堂主线
来源：本课封面、章节或CareKind实践页

### P25 · C03_ADLC · 课堂主线
来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P26 · V1_S16c_SDLCFlow · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S16c_SDLCFlow.tsx

### P27 · V2_S16d_ADLCFlow · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/S16d_ADLCFlow.tsx

讲五步生命周期：需求→PRD→开发→部署→反馈。人确认方向、范围、验收与发布审批；Agent在授权范围执行。随后讲多Agent并行管理，七项工程检查清单另列，不能叫另一套ADLC。

### P28 · V1_S16e_MultiAgentWorktree · 课堂主线
来源：lessons/vibe-coding-master/src/components/slides/S16e_MultiAgentWorktree.tsx

展示线上大师课P13的完整关系图：repo→四条worktree/Agent→人工review/test/merge。先约定任务、文件边界和接口；worktree不隔离数据库，外部服务仍可能共享。并行不保证更快，合并与清理需要授权。

### P29 · S08_ADLC · 课堂主线
来源：本课SDD实践页

讲Spec-Driven Development：先把需求、约束与验收写成规格，再按规格实施、检查和迭代。五步ADLC是生命周期，SDD是本周项目执行方式，不把两者混为另一套定义。以当前页面最终正文和实际CareKind任务为准。

### P30 · V2_L2P03_WholePRD · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P03_WholePRD.tsx

### P31 · V2_L2P04_PRDFive · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04_PRDFive.tsx

### P32 · V2_L2P04b_PRDQuality · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04b_PRDQuality.tsx

### P33 · V2_L2P04c_PRDLab · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04c_PRDLab.tsx

切编辑器带做，按原页左示范/右任务检查；计时为独立练习参考，课内合并到工作单。

### P34 · S11_Acceptance · 课堂主线
来源：本课封面、章节或CareKind实践页

### P35 · S12_SpecExercise · 课堂主线
来源：本课封面、章节或CareKind实践页

### P36 · C04_Ground · 课堂主线
来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P37 · V2_L2P04d_PRDToRules · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx

### P38 · CC_S09b_RulesFirst · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S09b_RulesFirst.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P39 · V2_L2P04e_RulesList · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04e_RulesList.tsx

### P40 · V2_L2P04h_RulesChecklist · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04h_RulesChecklist.tsx

现场点击原页可展开的例子/清单；不要只读标题。

### P41 · V2_L2P04f_RulesFileStructure · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04f_RulesFileStructure.tsx

### P42 · V2_L2P04g_PRDFolderStructure · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04g_PRDFolderStructure.tsx

### P43 · CC_S09_ClaudeMd · 课堂主线
来源：Claude Code大师课，当前入口文案已校正

先完成PRD和Rules，再让CLAUDE.md指向规格、规则和真实repo入口；它不是独立重复一套项目规则。

### P44 · CC_S09c_ClaudeMdTiers · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S09c_ClaudeMdTiers.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P45 · CC_S10_OptimizeClaudeMd · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S10_OptimizeClaudeMd.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P46 · CC_L01_FirstClaudeMd · 课堂主线
来源：Claude Code大师课Lab

学生先完成PRD与Rules，再做CLAUDE.md入口；独立填写、自查，在课堂聊天提交，讲师抽样点评。

### P47 · V2_L2P04i_RepoStrategy · 课堂主线
来源：Vibe Coding大师课L2

PRD→Rules→CLAUDE.md之后讲仓库策略；对照实际项目判断边界，不为小项目制造多仓库复杂度。

### P48 · S16_GroundExercise · 课堂主线
来源：本课封面、章节或CareKind实践页

### P49 · S17_SmallTask · 课堂主线
来源：本课封面、章节或CareKind实践页

### P50 · S18_Prompts · 课堂主线
来源：本课封面、章节或CareKind实践页

### P51 · S19_BuildExercise · 课堂主线
来源：本课封面、章节或CareKind实践页

保留17分钟小改动练习；只改已确认范围，记录实际检查。

### P52 · C05_Review · 课堂主线
来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P53 · S20_Review · 课堂主线
来源：本课封面、章节或CareKind实践页

### P54 · V2_L2P05_Unstuck · 课堂主线
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P05_Unstuck.tsx

### P55 · S22_PeerReview · 课堂主线
来源：本课实践页

线上独立自查：对照验收标准检查自己的diff、实际测试与证据，在课堂聊天区提交问题或结果，由讲师抽样点评；不安排同桌互审。

### P56 · S23_TaskBoard · 课堂主线
来源：本课封面、章节或CareKind实践页

### P57 · CC_S25_Principles · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S25_Principles.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P58 · CC_S26_NoHallucination · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S26_NoHallucination.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P59 · CC_S27_ThreeSteps · 课堂主线
来源：lessons/claude-code-master/src/components/slides/S27_ThreeSteps.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P60 · S24_Handoff · 课堂主线
来源：本课封面、章节或CareKind实践页

主线收口：核查证据包，说明W2从产品契约展开UI。后面是延伸参考。

## W2交接

八页产品/UI概念到W2 P04–P11；原整组18页进阶教学到W2 P28–P45。W2独立47页，120分钟按阶段选择讲授，保留UI动手和评审，不把全部旧Lab时间强制叠加。
