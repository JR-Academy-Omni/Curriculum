# AI Engineer 第五期结课总结 · Speaker Notes

完整课堂 Runsheet：`../../ai-engineer-bootcamp/COHORT_05_FINAL_CLASS_RUNSHEET.md`

## S01 · 封面

今天不增加一套新工具。目标是把第五期学过的内容重新连接成系统能力，并明确这些能力对应什么岗位。

## S02 · 四个课堂结果

逐项说明系统地图、岗位方向、Product Thinking 和下一步路径。告诉学生，结课标准不是“记住多少名词”，而是能否解释系统、岗位和证据。

## S03 · 冷启动

让学生先写目标岗位和最能证明能力的项目。暂时不点评，最后一页再回答一次，用前后变化检验本节课是否有效。

## S04 · 空白系统

只展示输入和业务结果。邀请学生补中间层。常见回答只有 Prompt、Model、RAG，这正好引出完整系统图。

## S05 · 十层系统地图

按 Product、Model、Context、RAG、Tools、Agent、Memory、Harness、Evaluation、Governance 的顺序解释。每层只问一个问题：删掉它以后，系统会怎样失败？

## S06 · 缺层故障

把十层合并成五组故障。强调这些失败不能都归因于模型，也不能靠更换模型统一解决。

## S07 · 工程链

知识点只有进入一条完整工程链，才会成为项目证据。学生需要从业务问题走到 release decision，而不是做到一次正确回答就停止。

## S08 · 五类岗位地图

五种方向表示工作重心，不表示高低级别。真实 JD 可能使用不同 title，所以要先看动词和责任范围。

## S09 · Applied AI Engineer

强调产品 workflow、系统集成和 Evals。面试回答必须包含为什么选择某种架构、怎样测试，以及如何处理失败。

## S10 · Agent Engineer

Agent Engineer 不等于会调用 Agent Framework。重点是执行边界、状态、停止条件、人工审批和失败恢复。

## S11 · FDE / AI Solutions Engineer

FDE 不是只做售前演示。先进入客户团队，访谈实际使用者并拆解现有流程；再把“想做 AI”收敛为第一阶段可以交付的范围。随后需要亲手做原型、接数据和 API、处理权限与失败路径，并推动客户真正上线使用。面试时要能讲出一个模糊需求怎样变成系统、怎样处理客户环境限制，以及用什么证据判断采用是否成功。

## S12 · AI Platform / Eval Engineer

这个方向面向多个产品团队。重点是统一接入、模型路由、trace、dataset、regression 和 release gate。

## S13 · ML Engineer

ML Engineer 关注训练、推理和模型性能。本课程提供相邻知识，但主要交付方向仍然是应用层和 Production AI System。

## S14 · Product Thinking

先说“政策 chatbot”，再追问具体用户、原有工作、下一步动作和责任边界。把技术功能改写成能够被采用的产品问题。

## S15 · 八个产品问题

用会议总结 Agent 做现场练习。要求学生补出目标用户、工作、痛点、AI Fit、下一步动作、成功指标、失败影响和人工边界。

## S16 · 不同背景

学生不需要抹掉原有经验。每种背景都有可迁移能力，也有必须补的缺口。职业选择应从已有优势和目标岗位的交集开始。

## S17 · 工程成熟度

第五期多数学生的合理位置，是从 Demo Builder 进入 System Builder。Production AI Engineer 的差别在于能管理失败、证据和发布责任。

## S18 · Policy Assistant Incident

一次性揭示五个问题，再读出团队的第一反应：“换一个更强的模型。”让学生投票同意或不同意，并说出第一个要看的证据。

## S19 · 分层诊断

按 Product、Context、RAG、Agent、Memory、Harness、Evaluation、Governance、Model 逐层检查。只有证据确实指向模型能力时，才讨论 routing 或 fine-tuning。

## S20 · 四条 Claude 认证路径

四门认证对应不同工作内容，不是由低到高的必考阶梯。CCAO-F 面向产品和知识工作，CCDV-F 面向应用开发，CCAR-F 面向架构基础，CCAR-P 面向 Production architecture 与治理。官方报名资格、政策和费用以当期平台为准，课程不承诺通过。

## S21 · 第五期复盘

第五期已经覆盖完整知识面，问题不在“内容太少”，而在学生需要自己连接理论、项目和 Production 判断。

## S22 · 第七期教学重构

先把最重要的信息说清楚：第七期的 13 场 Practice Live 由 Lightman 和 Jason 共同带领，学生沿一条从 W1 到 Production Readiness 的工程路线持续升级。Theory、录播和 Lab 都是这条实践主线的支撑系统，而不是四种平均分配注意力的课程形式。

必须说明第五期原本就是每周两场。第七期的变化是明确两场课的职责：Theory 建系统判断，Practice 做连续交付；录播承接稳定知识，Lab 练单项技能。

Practice 从 W1 启动同一条 Enterprise AI 产品交付路线，但可以按工程边界使用多个 repository。

## S23 · W1–W3：ADLC、Design System 与 Application MVP

先讲 W1 的 ADLC 证据链：Problem、Spec、Work Plan、Code Change、Test、Review、Evidence。AI Coding 提升的是实现速度，但课程要求每一步都留下可复核证据。W1 先形成 Task Brief、范围边界、Acceptance Criteria、项目规则和一次受控修改；不要求一周生成整个产品。

W2 把需求转成 Design Brief、Design Tokens、组件规则、完整关键页面和各种业务状态。W3 基于 Starter 串起用户操作、API、数据、权限、版本和审计，交付可运行 Vertical Slice。W3 仍然不接 AI，目的是先让后续 AI 能进入真实 Workflow。

## S24 · W4–W7：首次 AI、工程工作区、Evaluation 与 RAG

W4 只做 Voice 到 Human Confirmed Transcript，包含编辑、失败恢复和 manual fallback，不提前生成 Progress Note。W5 把整个项目改造成 AI-Native Engineering Workspace，建立 Spec-to-Work、Living Docs、C4/Mermaid、ADR、Hooks 和 Skills。

W6 先定义评估契约、版本化 dataset、deterministic checks、RAGAS、人工 rubric 和 baseline。W7 才从零实现 chunking、metadata、embedding、retrieval、citations 与 no-answer fallback，并且每一步都运行 W6 的同一套评估。

## S25 · W8–W13：Data Layer、Agent、Memory 与 Production

W8 先抽取 Repository 和 Domain Service，再接 MCP 和 CLI，避免把数据库查询和业务规则塞进 tool handler。W9 用这些工具实现有步数上限、停止条件、失败恢复和人工确认的 Bounded Agent。

W10 加入只保存人工确认事实的 Long-Term Memory。W11 把 Agent 重构为 Production Harness，支持 hooks、budget、checkpoint、resume、replay、idempotency 和 approval。W12 在 Harness 内加入 Model Router，并针对任务、质量、成本、延迟、隐私与 data residency 做 routing decision。W13 用 production eval、LLM-as-a-Judge 校准、安全红队、故障演练、release decision、rollback 和 System Design Defense 完成验收。

## S26 · 下一条升级主线

让每个人只选 Product、AI、Production 或 Domain depth 中的一条。要求说明现有项目、目标能力、验收证据和暂时不做的内容。

## S27 · 结课

重新回答开场的两个问题。结束时不要求所有人选择同一岗位，而是要求岗位、项目和证据能够对应。
