# 完整迁入版 · 实践第一课讲师流程

## 120分钟课堂主线

00–20：封面、目录、SoT定义与判断案例。20–40：AI OS / Context / Rules。40–70：产品拆解、ADLC与完整PRD。70–100：Repo Map、Rules、受控小改动。100–120：Diff review、实际检查与人工确认、证据包、W2衔接。

完整材料86页，不要求逐页平均分配时间。原版Lab计时保留为独立练习参考；课堂将PRD和规则Lab合并到CareKind工作单。遇到时间不足，优先保留问题定义、PRD验收、Repo Map、一次受控改动、人工review。延伸材料可课后继续练。

## 课前准备

核查实际CareKind starter的入口、启动、数据/schema和测试；带一处适合小范围修复的真实问题。缺少starter时只演示已核查教学项目的方法，不声称它具有CareKind业务功能。

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

### P05 · C01_SoT · 课堂主线

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P06 · V1_S01a_WhyVibeCoding · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S01a_WhyVibeCoding.tsx

### P07 · V1_S01b_ForEverything · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S01b_ForEverything.tsx

### P08 · V1_S03_SourceOfTruth · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S03_SourceOfTruth.tsx

### P09 · V1_S04_NoSoTChaos · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04_NoSoTChaos.tsx

### P10 · V1_S04c_SoTCase · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04c_SoTCase.tsx

停在提问页，让学生先判断；下一页再给答案，不提前翻页。

### P11 · V1_S04c2_SoTCaseAnswer · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04c2_SoTCaseAnswer.tsx

先让学生回答上一页，再揭晓；判断依据是权威owner和一致的更新链路。

### P12 · V1_S04d_SoTLadder · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04d_SoTLadder.tsx

### P13 · V1_S04d2_SoTFirst · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04d2_SoTFirst.tsx

### P14 · V1_S04e_FromSoT · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S04e_FromSoT.tsx

### P15 · V1_S05_AIOS · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05_AIOS.tsx

### P16 · V1_S05a_TwoLayers · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05a_TwoLayers.tsx

### P17 · V1_S05b_FourC · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05b_FourC.tsx

### P18 · V1_S05c_MemorySystem · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05c_MemorySystem.tsx

### P19 · V1_S05d_MyAIOS · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05d_MyAIOS.tsx

### P20 · V1_S05e_CompanyOS · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S05e_CompanyOS.tsx

### P21 · CC_S06_GoalContextMemory · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S06_GoalContextMemory.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P22 · CC_S07_ContextVsMemory · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S07_ContextVsMemory.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P23 · C02_Product · 课堂主线

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P24 · V2_L2P01_Ceiling · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01_Ceiling.tsx

### P25 · V2_L2P01b_IdeaVsNeed · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01b_IdeaVsNeed.tsx

### P26 · V2_L2P02_FiveQ · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02_FiveQ.tsx

### P27 · V2_L2P01c_PagesBreakdown · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01c_PagesBreakdown.tsx

现场点击原页可展开的例子/清单；不要只读标题。

### P28 · V2_L2P01d_CRUDPatterns · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01d_CRUDPatterns.tsx

### P29 · V2_L2P01e_Components · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01e_Components.tsx

现场点击原页可展开的例子/清单；不要只读标题。

### P30 · V2_L2P01g_PageAnatomy · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01g_PageAnatomy.tsx

### P31 · V2_L2P01f_Flows · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01f_Flows.tsx

### P32 · V2_L2P01h_DataRelations · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P01h_DataRelations.tsx

### P33 · S07_FrameExercise · 课堂主线

来源：本课封面、章节或CareKind实践页

### P34 · C03_ADLC · 课堂主线

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P35 · V1_S16c_SDLCFlow · 课堂主线

来源：lessons/vibe-coding-master/src/components/slides/S16c_SDLCFlow.tsx

### P36 · S08_ADLC · 课堂主线

来源：本课封面、章节或CareKind实践页

正式实践采用七步版；区别模型执行、人确认和实际验收。

### P37 · V2_L2P03_WholePRD · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P03_WholePRD.tsx

### P38 · V2_L2P04_PRDFive · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04_PRDFive.tsx

### P39 · V2_L2P04b_PRDQuality · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04b_PRDQuality.tsx

### P40 · V2_L2P04c_PRDLab · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04c_PRDLab.tsx

切编辑器带做，按原页左示范/右任务检查；计时为独立练习参考，课内合并到工作单。

### P41 · S11_Acceptance · 课堂主线

来源：本课封面、章节或CareKind实践页

### P42 · S12_SpecExercise · 课堂主线

来源：本课封面、章节或CareKind实践页

### P43 · C04_Ground · 课堂主线

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P44 · V2_L2P04d_PRDToRules · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04d_PRDToRules.tsx

### P45 · CC_S09_ClaudeMd · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S09_ClaudeMd.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P46 · CC_S09c_ClaudeMdTiers · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S09c_ClaudeMdTiers.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P47 · CC_S09b_RulesFirst · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S09b_RulesFirst.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P48 · CC_S10_OptimizeClaudeMd · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S10_OptimizeClaudeMd.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P49 · CC_L01_FirstClaudeMd · 课堂主线

来源：lessons/claude-code-master/src/components/slides/L01_FirstClaudeMd.tsx

切编辑器带做，按原页左示范/右任务检查；计时为独立练习参考，课内合并到工作单。

### P50 · V2_L2P04e_RulesList · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04e_RulesList.tsx

### P51 · V2_L2P04h_RulesChecklist · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04h_RulesChecklist.tsx

现场点击原页可展开的例子/清单；不要只读标题。

### P52 · V2_L2P04f_RulesFileStructure · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04f_RulesFileStructure.tsx

### P53 · V2_L2P04g_PRDFolderStructure · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04g_PRDFolderStructure.tsx

### P54 · S14_Repo · 课堂主线

来源：本课封面、章节或CareKind实践页

切真实项目只读分析；逐项核查路径与命令，不让Agent猜。

### P55 · S16_GroundExercise · 课堂主线

来源：本课封面、章节或CareKind实践页

### P56 · S17_SmallTask · 课堂主线

来源：本课封面、章节或CareKind实践页

### P57 · S18_Prompts · 课堂主线

来源：本课封面、章节或CareKind实践页

### P58 · S19_BuildExercise · 课堂主线

来源：本课封面、章节或CareKind实践页

保留17分钟小改动练习；只改已确认范围，记录实际检查。

### P59 · C05_Review · 课堂主线

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P60 · S20_Review · 课堂主线

来源：本课封面、章节或CareKind实践页

### P61 · V2_L2P05_Unstuck · 课堂主线

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P05_Unstuck.tsx

### P62 · S22_PeerReview · 课堂主线

来源：本课封面、章节或CareKind实践页

保留12分钟互审；写reviewer、结论、理由与未验证项。

### P63 · S23_TaskBoard · 课堂主线

来源：本课封面、章节或CareKind实践页

### P64 · CC_S25_Principles · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S25_Principles.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P65 · CC_S26_NoHallucination · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S26_NoHallucination.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P66 · CC_S27_ThreeSteps · 课堂主线

来源：lessons/claude-code-master/src/components/slides/S27_ThreeSteps.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P67 · S24_Handoff · 课堂主线

来源：本课封面、章节或CareKind实践页

主线收口：核查证据包，说明W2从产品契约展开UI。后面是延伸参考。

### P68 · C06_Appendix · 延伸参考

来源：本课封面、章节或CareKind实践页

章节转场：说明上一部分怎样支持接下来的项目动作。

### P69 · CC_S10b_ContextWindow · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S10b_ContextWindow.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P70 · CC_S10c_ContextRot · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S10c_ContextRot.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P71 · CC_S19_NotAutocomplete · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S19_NotAutocomplete.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P72 · CC_S20_ThreeWeapons · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S20_ThreeWeapons.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P73 · CC_S21_Skills · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S21_Skills.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P74 · CC_S21b_ProgressiveDisclosure · 延伸参考

来源：lessons/claude-code-master/src/components/slides/S21b_ProgressiveDisclosure.tsx

章节转场：说明上一部分怎样支持接下来的项目动作。

### P75 · CC_L03_Skill · 延伸参考

来源：lessons/claude-code-master/src/components/slides/L03_Skill.tsx

切编辑器带做，按原页左示范/右任务检查；计时为独立练习参考，课内合并到工作单。

### P76 · V2_L2P02a_ProductCanvas · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02a_ProductCanvas.tsx

### P77 · V2_L2P02b_MVPScope · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02b_MVPScope.tsx

### P78 · V2_L2P02c_UserBehavior · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02c_UserBehavior.tsx

### P79 · V2_L2P02d_BusinessModel · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02d_BusinessModel.tsx

### P80 · V2_L2P02e_BusinessLogic · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02e_BusinessLogic.tsx

### P81 · V2_L2P02f_ToPRD · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02f_ToPRD.tsx

### P82 · V2_L2P02g_ValidationPath · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02g_ValidationPath.tsx

### P83 · V2_L2P04i_RepoStrategy · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P04i_RepoStrategy.tsx

### P84 · V2_L2P05a_ManageADLC · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P05a_ManageADLC.tsx

### P85 · V2_L2P06_Deploy · 延伸参考

来源：lessons/vibe-coding-master-l2/src/components/slides/L2P06_Deploy.tsx

### P86 · V1_S05f_MdNotJson · 延伸参考

来源：lessons/vibe-coding-master/src/components/slides/S05f_MdNotJson.tsx

沿原页的图解、案例和步骤讲解，保留交互；问学员如何映射到CareKind的产品契约。
