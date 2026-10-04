# W2 讲师流程

按 C7P02 的120分钟顺序进行；独立页码从1开始。课前先核查实际 starter 的启动和测试。本课件描述课程要求，不代表业务已实现。

- P02：从产品契约到完整 UI。本周交付：Design Brief、DESIGN.md、tokens、页面与视觉评审。
- P03：先接住 W1 的产品契约。缺少业务事实时标记问题，不能通过画页面补造事实。

05–17 分钟完成 P04–P11 概念导读；提前发给学生回看，现场选择关键图解复述。

- P04：完整迁入 W1 原 P26，保留图解与互动。组件 V2_L2P01_Ceiling。
- P05：完整迁入 W1 原 P27，保留图解与互动。组件 V2_L2P01b_IdeaVsNeed。
- P06：完整迁入 W1 原 P28，保留图解与互动。组件 V2_L2P02_FiveQ。
- P07：完整迁入 W1 原 P29，保留图解与互动。组件 V2_L2P01c_PagesBreakdown。
- P08：完整迁入 W1 原 P30，保留图解与互动。组件 V2_L2P01d_CRUDPatterns。
- P09：完整迁入 W1 原 P31，保留图解与互动。组件 V2_L2P01e_Components。
- P10：完整迁入 W1 原 P32，保留图解与互动。组件 V2_L2P01g_PageAnatomy。
- P11：完整迁入 W1 原 P33，保留图解与互动。组件 V2_L2P01f_Flows。

- P12：给 Claude 一份能执行的设计任务。Brief 是设计决策的依据，不能只写“做得高级一点”。
- P13：画页面地图，再安排导航。这里列出课程页面范围；实际字段与权限仍以 W1 契约为准。
- P14：页面之间要有可解释的入口。在纸上走一遍：进入、返回、失败重试、权限不足。
- P15：比较两个有差异的设计方向。A/B 是课堂设计练习，不是对 CareKind 用户偏好的既定结论。
- P16：生成方向，选定后固化规则。AI 提供候选；最终选择由人确认。
- P17：DESIGN.md 记录设计决策。把实际选定值写进去；不要抄一套与页面不一致的规则。
- P18：相同意义使用相同 token。Token 是课程设计产物，不代表 starter 已经存在这些字段。
- P19：一个组件，要展示它的状态。用独立样例检查组件，再把它们放进完整页面。
- P20：按页面实现，按任务验收。本周可以使用明确标记的 synthetic fixture；真实业务数据不进入演示。
- P21：用 Claude 迭代核心页面。保留 prompt、diff 与 before/after，不用“更好看”替代标准。
- P22：让状态决定可用动作。界面呈现规则；最终权限和状态转换必须在 W3 服务端落实。
- P23：先讲清主路径，再画分支。失败与升级分支必须保留恢复入口；状态名称不能代替权限定义。
- P24：录音和转写是一组输入状态。W2 不把模拟输入状态声称为真实 Voice AI 集成。
- P25：缩到手机后，还能完成任务吗。桌面截图不能证明手机任务通过。
- P26：用键盘完成一次完整任务。用实际页面检查 keyboard、contrast 与 reduced motion。
- P27：让截图说明具体问题。一次生成是候选；通过人工检查后才是界面交付。
- P46：现场 Product Design Review。评审对象是可操作 UI，不是单张宣传截图。
- P47：把设计选择与页面一起交付。未接通的数据、输入与后端状态明确标记。

时间分配：00–05 P01–P03；05–17 P04–P11；17–25 P12–P14；25–45 P15–P19；45–75 P20–P21 动手；75–95 P22–P23；95–110 P24–P27；110–120 P46–P47 评审与交付。

## W2第2部分 · 完整进阶练习

P28–P45原W1整组教学页全部移到本周。120分钟按阶段选讲，核心UI课堂不增加总时长；进阶Lab可作为本周带练选择与回看，不将每个旧Lab计时叠加。它们不再位于W1附录。

### P28 · C06_Appendix
来源：本课W2章节页
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P29 · CC_S10b_ContextWindow
来源：lessons/claude-code-master/src/components/slides/S10b_ContextWindow.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P30 · CC_S10c_ContextRot
来源：lessons/claude-code-master/src/components/slides/S10c_ContextRot.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P31 · CC_S19_NotAutocomplete
来源：lessons/claude-code-master/src/components/slides/S19_NotAutocomplete.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P32 · CC_S20_ThreeWeapons
来源：lessons/claude-code-master/src/components/slides/S20_ThreeWeapons.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P33 · CC_S21_Skills
来源：lessons/claude-code-master/src/components/slides/S21_Skills.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P34 · CC_S21b_ProgressiveDisclosure
来源：lessons/claude-code-master/src/components/slides/S21b_ProgressiveDisclosure.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P35 · CC_L03_Skill
来源：lessons/claude-code-master/src/components/slides/L03_Skill.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。
Skill Lab先定义触发、输入、检查标准与输出，再试运行；独立填写、自查与讲师点评。

### P36 · V2_L2P02a_ProductCanvas
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02a_ProductCanvas.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P37 · V2_L2P02b_MVPScope
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02b_MVPScope.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P38 · V2_L2P02c_UserBehavior
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02c_UserBehavior.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P39 · V2_L2P02d_BusinessModel
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02d_BusinessModel.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P40 · V2_L2P02e_BusinessLogic
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02e_BusinessLogic.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P41 · V2_L2P02f_ToPRD
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02f_ToPRD.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P42 · V2_L2P02g_ValidationPath
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P02g_ValidationPath.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P43 · V2_L2P05a_ManageADLC
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P05a_ManageADLC.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P44 · V2_L2P06_Deploy
来源：lessons/vibe-coding-master-l2/src/components/slides/L2P06_Deploy.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

### P45 · V1_S05f_MdNotJson
来源：lessons/vibe-coding-master/src/components/slides/S05f_MdNotJson.tsx
完整图解与操作保留，围绕当前CareKind规格、设计与交付讲解。

最终放映顺序：P01–P27 UI与设计主线 → P28–P45完整进阶教学 → P46 Product Design Review → P47交付。进阶材料不位于收尾之后，最后两页完成全课评审与交接。
