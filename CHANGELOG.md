# Changelog

## 2026-09-27

- 更新 AI 一人创业营 W10 为「AI 内容工厂与智能投流实操」：使用 Codex + Buffer MCP、JSON Schema、HITL 与异步状态回读，并补入 Little Henri、Google / Meta / LinkedIn / TikTok Ads、通用 Landing Page 和 5 层 AI 营销 OS（`ai-solo-founder-bootcamp`；本地与 production W10 课时）。

## 2026-09-23 — WorkBuddy AI 智能办公实战课程方案

- 新增 `WORKBUDDY_COURSE_PLAN.md`，提供面向澳洲华人职场人士的 4 小时 WorkBuddy 实操工作坊设计。
- 课程覆盖安装与安全配置、办公任务、个人 AI 专家、远程工作，并将微信群记录与 Blender 3D 项目划为独立进阶模块。
- 新增 `workbuddy-workshop` 线上直播课程页面、结构化大纲与 1242×1660 可下载海报，并接入课程海报中心和静态部署流程。
- 根据课程原始选题重新定位为《WorkBuddy AI 智能办公全能实战课》：安装缩短为 25 分钟，主体明确覆盖技能应用、AI员工、AI专家和远程操作四大主题；“别再只问 AI，让它开始交付”保留为宣传口号。

## 2026-09-11

- 新增三张可独立售卖的 AI 自动化课程竖版海报，分别聚焦中文媒体 AI 自动化、TikTok + Meta AI 自动化和 AI 全自动内容工厂；对外版本移除 W8-W10、OPC 与创业营内部上下文，仅保留课程价值、Michael Nie、日期与报名信息（`ai-solo-founder-bootcamp/public/promo/ai-automation-standalone`；本地）。

- 重构 OPC 创业营 W8-W10：W8/W9 分别讲清公众号、小红书、抖音与 TikTok、Meta 系平台的特色、内容形态、运营方法和 AI 私信边界；W10 改为现场搭建从单一资料源、自动选题到原生内容生成、自动发送、状态回读与反馈学习的全自动内容工厂；三周主讲统一确认为 Michael Nie，并同步静态课程页与师资排课（`ai-solo-founder-bootcamp`；本地）。

## 2026-09-10

- 新增 AI Engineer 第七期 48 页招生公开课与 MiniClaw Live Coding：覆盖课程安排、全球学员、校友证据、Product Thinking、OpenClaw / MiniClaw 架构、TUI、Harness、Memory、Skills、Provider Router、Trace 与人工审批，并接入 curriculum 生产部署工作流（`lessons/ai-engineer-cohort-07-miniclaw`）。

- 调整 OPC 营销三节课为 W8 中文媒体 AI 自动化、W9 英文媒体自动化、W10 内容工厂自动发布，将 X 配套自学迁至 W9，并同步教学计划与课程页面（`curriculum/ai-solo-founder-bootcamp`；本地）。

- 调整 OPC 创业营 W10 为 AI 内容工厂：实现 AI 自动化发布，将原 SEO & GEO 保留为 3 小时周中独立课（时间待定），同步课程大纲、教学计划与静态课程页（`curriculum/ai-solo-founder-bootcamp`；本地）。

## 2026-09-09

- 更新 `talk-deck` Skill 与 React Deck 模板，将第五期结课 PPT 的网格纸、marker underline、圆角主面板、克制描边和高密度课程排版设为新的视觉黄金范本，并新增可复用 `DeckFrame` / `Panel` / `RoleFocusSlide` 组件（`.claude/skills/talk-deck`、`lessons/_template`）

- 扩展 AI Engineer 第五期结课 deck 的第七期实践路线：新增 W1 ADLC 证据链并逐周展开 W1–W13 的 Design System、MVP、Voice AI、Evaluation、RAG、MCP、Agent、Memory、Harness、Model Routing 与 Production Readiness，同时重写 FDE 职责说明（`lessons/ai-engineer-cohort-05-final`、`ai-engineer-bootcamp`、`lessons.html`）

- 新增 AI Engineer 第五期结课总结课件的正式构建与云端发布路径，并更新 `talk-deck` Skill 及 React Deck 模板的圆角视觉规则（`lessons/ai-engineer-cohort-05-final`、`.claude/skills/talk-deck`、`lessons/_template`）

## 2026-09-08

- 完成第五期到第七期的逐条视频继承复核：第七期现保留 51 个可播放历史录像，补齐前半段 GenAI、Transformer、Embeddings、AI Coding、RAG、LCEL、Production RAG 与求职内容，修正 Prototype 错挂 GPT Store，并排除标题与实际录像不符的旧 RAG 条目（`ai-engineer-bootcamp`）

- 修复第七期往期录播继承范围，将第五期后半段 23 个已转码的 RAG、MCP、Agent、Memory、Harness、Model Routing、Fine-Tuning 与 Evaluation 视频映射到当前课程，并排除一个不可播放的重复转码队列记录（`ai-engineer-bootcamp`）

## 2026-08-31

- 将逐周技术栈从 Practice 工具表升级为 Theory + Practice 的完整 AI Engineering Stack，增加模型机制、Token/Context/Cache、AI OSS、RAG/Eval/Agent/Memory/Governance，并降低通用全栈技术的视觉权重（`ai-engineer-bootcamp`）

- 将 13 场 Practice 的“本周实践工具”扩展为 20–25 个独立技术 Tag，区分课堂实作、AI-native 新能力与 Platform/Cloud，并将 Langfuse 和各项 AWS 服务分别列出（`ai-engineer-bootcamp`）

- 优化 10-Layer Skills Tower 的技术栈视觉：全部技术点改为胶囊 Tag，有正式 Logo 的品牌或工具在 Tag 左侧显示 Logo，概念类能力保持纯文字（`ai-engineer-bootcamp`）

- 将详细大纲 10-Layer Stack 重做为官网 Skills Tower 的 PDF 静态版：英文层名为主、中文为副，并展开 10 层的 50+ 具体技术标签（`ai-engineer-bootcamp`）

- 将第七期全部 Practice 页面改为中文优先的“实践课 Live”，强调老师现场带做、调试和验收，并逐周增加四节点 System Design 关系图与实践技术栈（`ai-engineer-bootcamp`）

- 将 W03 Context Engineering Theory 从一页拆为两页，分别呈现 Context 选择与组装、Lifecycle 与 Trust/Observability/Blueprint，避免压缩字号；详细大纲调整为 32 页（`ai-engineer-bootcamp`）

- 将 AI Engineer 第七期每场课的技术视觉扩展为 8 个 Core + Popular OSS 标识，实践周页改成两排大型 Logo 卡，覆盖模型、AI Coding、UI、RAG、MCP、Agent、Memory、Observability 与 Production 生态（`ai-engineer-bootcamp`）

- 优化 AI Engineer 第七期详细大纲营销版：隐藏内部 Lesson Code，逐周展示真实技术 Logo 与实践 Build Stack，并重新生成可点击、Mac 兼容的电子书 PDF（`ai-engineer-bootcamp`）

## 2026-08-29

- 扩展 AI Engineer 第七期推广计划为全球分区执行体系，加入澳洲、中国大陆、港澳台/新加坡、北美、英国/欧洲的时区与本地化策略，以及短期冲刺、长期品牌、五类增长、实验矩阵和衡量框架（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 Seedance 短视频 Campaign：用 12 个连续机制与事故叙事覆盖教学方式、13 周 Build、RAG、Memory、Harness、A2A Governance、Model Routing 与面试证据（`ai-engineer-bootcamp`）
- 明确 Seedance 短视频矩阵是可协商候选池，不锁制作数量、顺序、语言、片长、视觉隐喻或 CTA（`ai-engineer-bootcamp`）

## 2026-08-27

- 调整第七期 A2A 排课，从 W8 编排内容移到 W11 Governance，补齐身份、信任、授权委派、数据共享、审计、撤销和责任边界（`ai-engineer-bootcamp`）
- 重构第七期 W8 Practice 为 Data Sources → Repository/Data Layer → Domain Services → Permission/Audit → MCP Adapter → CLI，禁止在 MCP handler 内堆 ORM 与业务规则（`ai-engineer-bootcamp`）
- 增强第七期 W8 Multi-Agent Theory，对齐 CCAR-F orchestration domain，并加入 Claude Agent SDK 与 Managed Agents 架构模式、隔离、委派、失败和成本判断（`ai-engineer-bootcamp`）
- 调换第七期 W6/W7 Practice，改为 Evaluation Pipeline First → Build and Prove Policy RAG 的市场主流 Eval-Driven Development 顺序（`ai-engineer-bootcamp`）
- 增强第七期 W7 Agents/ReAct Theory Live，加入 Claude Agent SDK 的 sessions、tools/MCP、permissions、hooks、streaming、interrupt 与跨框架选型（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 25 场 Live 的 Core Stack / Popular OSS Ecosystem 选型表，W6 Core 加入 FastMCP 并补充 Pi Agent Harness 的 CLI/runtime 定位，覆盖 AI Coding、UI、RAG、MCP、Agent、Memory、Harness、Governance、Routing 与 Evals（`ai-engineer-bootcamp`）
- 重构 AI Engineer 第七期 W5 Practice 为 Spec-to-Work 与 Living Documentation 工程工作区，加入 Wiki、Architecture Diagram、ADR、Hooks 和 Project Skills 交付（`ai-engineer-bootcamp`）
- 重写 AI Engineer 第七期 W3 Context Architecture Blueprint，删除把 Context Engineering 等同于固定 Prompt Template 与 CareKind 字段的旧定义（`ai-engineer-bootcamp`）
- 修正 AI Engineer 第七期 W3 Practice 为 Claude Code Rapid MVP Build，删除 W3 实践接入模型的旧口径，明确 W4 才第一次接入 Voice AI（`ai-engineer-bootcamp`）
- 加入 AI Engineer 第七期 W2 Claude Code frontend design workflow、Design Brief、方向比较、截图反馈和人工 Product Design Review（`ai-engineer-bootcamp`）
- 补强 AI Engineer 第七期 W2 的 LLM Efficiency 内容，加入 KV Cache、Prefix Cache、Response Cache、安全失效策略及 TTFT/命中率/Tokens Saved 验证（`ai-engineer-bootcamp`）
- 重构 AI Engineer 第七期 W2 理论侧重点：以 Token Budget 与 Context Window 工程判断为主线，补齐可进入/应排除的上下文内容及长上下文质量、延迟、成本边界（`ai-engineer-bootcamp`）
- 修正 AI Engineer 第七期 A4 大纲 W1 的课程定位，由“AI 产品”改为“AI 系统”，并补齐系统组成表达（`ai-engineer-bootcamp`）
- 新增 AI Engineer 第七期 A4 大纲的 macOS Preview 兼容渲染流程，从已验证 HTML/PDF 生成高清扁平版，规避 Type 3 中文字体显示差异（`ai-engineer-bootcamp`）
- 扩展 AI Engineer 第七期 W1 岗位地图，加入 Applied AI Engineer、FDE、AI Builder、AI Solutions Engineer 等 title 变体及与 ML/Data/Software 岗位的职责边界（`ai-engineer-bootcamp`）

## 2026-08-25

- 统一 AI Engineer 第七期总览页、主海报、设计规范与推广计划为 Editorial Premium 柔和技术栈风格，重制 1242×1660 主海报 PNG，并以 6 个宣传点、5 个内容方向、30 天节奏和渠道原生格式替换第五期旧口径（`ai-engineer-bootcamp`）
- 恢复 AI Engineer 页面原定 Editorial Premium 视觉：以已确认的 A3 V5 十层技术栈海报为风格基准，加入无文字紫橙玻璃 3D Stack Hero、官方 Logo、奶油渐变、圆角卡片与柔阴影，移除误用的 Neo-Brutalism（`ai-engineer-bootcamp/public`）
- 统一 AI Engineer 第七期全部当前课程 HTML：课程总览、系统架构、四个交付阶段、学习方式与面试能力均读取同一份第七期排课口径；旧版长页面、Review 与美国第六期 Landing 原样归档并保留兼容 URL（`ai-engineer-bootcamp/public`）

- 新增第七期数据驱动大纲网页、主宣传海报与无字 Agent 系统主视觉，登记第七期入口并保留第五/第六期历史资产（`ai-engineer-bootcamp`、`posters.html`）
- 强化第七期定位为“每周理论 + 独立实践双 Live”，明确实践从 W1 在同一 CareKind repository 从 0 搭建完整 production Agent 产品，而非理论课附属 Lab（`ai-engineer-bootcamp`）
- 保存第七期最终总结与质量审计，记录 78.1/100 GOOD、10 项亮点、P0/P1 缺口、Advanced Track 和外部依据，并补齐正式 Live 的 week/track/order/level/knowledge/status（`ai-engineer-bootcamp`）
- 合并第七期延长实践为 W13 一场 180 分钟 Production Readiness Review & Demo Day，标准 Remote MCP/Auth/部署/CI/CD 由学生课前完成，正式排课更新为 25 场 Live、45 小时（`ai-engineer-bootcamp`）
- 确认第七期 W12 Production AI System Design/Model Routing 理论与 CareKind Model Router 实践，旧 Demo Day 移为延长实践线最终候选（`ai-engineer-bootcamp`）
- 修正第七期 W11 实践为 `Build the CareKind Production Agent Harness`，将原 8 项 production evaluation/safety 内容完整移动为 W13 延长实践候选（`ai-engineer-bootcamp`）
- 确认第七期 W11 `Productionize the CareKind Agent` 实践，记录 8 项 production eval、tracing、red-team、threshold 与 release hardening 内容（`ai-engineer-bootcamp`）
- 更新第七期 W10 为 production Agent Harness 理论与 CareKind 安全长期 Memory 实践，加入 write gate、scope、lifecycle、permission、audit 和 poisoning 测试；Model Routing 实践回到待排池（`ai-engineer-bootcamp`）
- 确认第七期 W9 Agent Memory/State 理论与 bounded CareKind Agent 实践，补齐 tool loop、termination、fallback、human review 和 trace（`ai-engineer-bootcamp`）
- 确认第七期 W8 Multi-Agent 理论与 CareKind MCP/CLI 实践，补齐 tools、权限、audit 和故障排查边界（`ai-engineer-bootcamp`）
- 恢复第七期 W3–W7 已确认理论线，明确理论与实践独立排课，修正 W3/W4 被误标为待讨论的问题（`ai-engineer-bootcamp`）
- 重排 AI Engineer 第七期 W1–W7 实践节奏：W3 非 AI 业务底座、W4 Voice STT 首次 AI、W5 Structured Documentation、W6 Policy RAG、W7 RAGAS 与 MVP 验收；W8 以后重新待排（`ai-engineer-bootcamp`）

## 2026-08-24

- 更新 AI Engineer 第七期 W5–W7：RAG 主线锁定为 W4–W5 两周，W5 必修 RAGAS 基础测试，W6 改为 Tool Calling/MCP/CLI，W7 只锁定 Agents/ReAct 理论课并保留实践课待讨论（`ai-engineer-bootcamp`）
- 升级 AI Engineer 第七期 Phase 10，新增 AI Governance & Risk Management 直播课与 ISA Governance Pack Quest，同步课程大纲、介绍 Deck、概览页和架构页（`ai-engineer-bootcamp`）
- 落地 AI Engineer 第七期正式大纲与 `outline.json`：12 周每周理论/实践双 Live，新增 CareKind 连续项目、Production RAG、Compliance-aware Model Routing，收束为 24 场正式直播并保留旧内容为录播/Lab/Quest/选修（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W1 理论课，聚焦 GenAI 基础、Applied AI 系统全景与 AI Engineer 岗位边界，Ops 降为生产意识预告（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W2 理论与实践排课，建立 Transformer 课前录播 + Live 工程理解，并将 CareKind Care Note Drafting 的 Design System、角色权限、业务状态与 UI 验收写入课程 SoT（`ai-engineer-bootcamp`）
- 更新 AI Engineer 第七期 W3/W4 为 Context single-model baseline → CareKind Policy RAG 的连续递进，保留 Chain of Thought，记录 Memory/Tool Calling/完整 Prompt Injection 的后续排课边界，并移除无证据的效果百分比（`ai-engineer-bootcamp`）
- 建立 AI Engineer 第七期 W0–W4 Required/Conditional/Pool 学习顺序，将 94 个候选条目收束为 29 个固定主线、14 个诊断补齐和 51 个待排 Pool，明确每周前置、后置、Quest 与学习时长（`ai-engineer-bootcamp`）

## 2026-08-21

- 新增 `opc-offer-mvp`、`opc-shipping-review`、`opc-first-dollar`、`opc-customer-acquisition` 四个学生 Skill 与共享 Founder OS，生成中文安装包并绑定生产课程附件（`ai-solo-founder-bootcamp`）

## 2026-08-19

- 新增 AI 一人创业营 W3《这是不是一门好生意 · Prove the Business》网页版讲课 deck：32 张 React SlideEngine slide，讲师 Stan Luo（Ex-McKinsey），对应 `outline.json` 的 `L09`（2026-08-23 周日 14:00–17:00）。主题是「算账」不是「做东西」——全程不产出对外物料，只产出判断。六个环节照 outline L09 逐条做、不自创：顾问看生意的三个动作（拆成可算的部件 → 找结构性约束 → 看约束解不解得开）+ indie hacker 三种自我欺骗 + 证据梯度 L0–L4（把 W2 那 5 场访谈摆上尺子，「0 就写 0」）；七条变现路径全景 + 赚钱算式（客单价 × 目标单量 − 可变成本 = 月毛利）+ $1k / $10k 反推表 + 单量四来源产能上限；麦肯锡四把尺子（市场规模自下而上算不甩 TAM / 竞争看「钱现在正付给谁」并把 Excel 与实习生算进替代方案 / 单位经济算两套贡献并把创始人时间折成钱 / 一人公司只有行业积累·分发渠道·数据流程沉淀三种现实护城河）+ 现场四维打分；中段 30 分钟 Founder Exchange；Stan 主刀现场拆 3–4 个学员 idea（赚钱算式 / 形态 / 结构性风险三层追问，台下同步做十问答题卡）+ 想改方向就改 W1 那份 SoT 原件、不新建文档（六个业务字段取自 `W1_RUNSHEET.md` §1.2）；形态四选一 + 定价五选一 + 三维决策框架 + 价格 anchor 四步 + 组合挑错（订阅 × 一年用两次 = churn 必死）并映射到 W7 的收款方式；最后现场 20 分钟写一页裁决书，继续 / 调整 / 换三选一并明写「允许写换」。数据纪律从严执行 `HANDOVER_DECKS.md` §2.3：deck 内不出现任何具体金额、转化率、市场规模或案例收入，需要数字处一律留白由学员现场填，反推表明标「这是算术，不是承诺」，outline 里的 Freemium 转化率 1–5% 与早鸟 30–50% 只标注为课程大纲经验区间而不印成结论，L10 的「6 个月做出 $1k MRR」按不承诺金钱结果改述为「半年内第一个收入目标」，一个案例都不写（`W1_CASE_STUDIES.md` 不在本仓库、来源无从核对），22 页带 `SourceNote` 出处条。引擎 `SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `theme.ts` / `main.tsx` 逐字从 `lessons/_template` 拷贝未改动，`DeckTable.tsx`（含 `FitBox` / `SlideHead` / `Punchline` / `SourceNote`）复用 W4 版本，新写的只有内容层。按 `HANDOVER_DECKS.md` §4.1 把中段 30 分钟交流排进时间表（outline 六个 step 一个不删，按比例压到 140 分钟，step ⑥ 现场只写 20 分钟、余下落到课后 L11 自学）。配 `PRD.md`（180 分钟节奏表、逐页 spec、数据纪律说明与 4 条上台前未决项）与 `README.md`（上台前四件事：讲师署名待本人确认 Principal 拼写与能否实名、课前指定上台被拆的学员、补主场城市、落实混合班 Tutor 排班）。32 页逐页实测 FitBox scale 全为 1、无内容裁切、无元素超出 1600×900 画布。已登记 `lessons.html` 并接入 `deploy.yml` 的 Build 与 Assemble 两处（`lessons/ai-solo-founder-w3`、`lessons.html`、`.github/workflows/deploy.yml`）
- 本期 W3 / W4 排期对调留痕：W4「把想法做出来」已于 08-16 先上，W3 排在其后（08-23）。W3 deck 的 15 周路线页、定调页与下周预告均按对调后的顺序写；`outline.json` 未改动（沿用既定处理：只换排期、不动大纲）。同时修正路线页中 W3 那格的文案——W4 deck 写的是「访谈真实客户」，那其实是 W2 自学 `L08` 的动作，本 deck 改为与 `L09` 一致的「算清楚它到底赚不赚钱，写下继续、调整还是换」（`lessons/ai-solo-founder-w3`）

## 2026-08-09

- **L8 蓝图从零重写为 v1.0《Agent Team —— 从「多开 context」到「共同完成任务」》，并据此重建 deck 与讲稿。** 蓝图抬头写死：Deck、`RUNSHEET.md` 与 `HANDOUT.md` 必须以它为唯一事实源重新生成，**旧版拍次、旧版双实验与旧版角色编号全部作废**。
  - **为什么推翻重来**（蓝图 §0）：旧版「先撞墙、再解释」+ 浅题/深题双线造成四个问题——① 学员还没建立 Agent Team 心智，就被要求同时管理角色文件、三个会话、任务板、消息协议和两条根因线；② 角色 `C` 在 config 与唱反调之间换身份，角色/任务板/讲稿无法保持一致；③ 课堂把「发现某个预设答案」当成功，反而弱化了真正应学的结构与设置；④ 大量概念靠课后解释，学员做的时候不知道自己在观察什么。**新版不靠隐藏答案制造戏剧性：先把尺子讲清楚，再要求学员用尺子做出一个可验收的 Team。**
  - **课型改为「先讲后做」两幕**：第一幕先讲（0–50）→ 过渡（50–60 老师 smoke test + 休息）→ 第二幕后做（60–113）→ 结尾（113–120）。节奏铁律：**0–55 分钟不让学员创建 Team；60 分钟后不再插入新概念；最小 Team 验证不过不进正式 Lab；不以「找到根因」替代「证明真实协作」。**
  - **立论换成**：Agent Team 的价值不是多开几个 Agent，是**让一名成员的新证据在任务结束前改变另一名成员的下一步**。并配一条**必须讲清的诚实边界**——Team 不会让某个结论「在结构上只有 Team 才能发现」，优秀的 Lead 也能手动转发证据；**选 Team 是收益与协调成本的比较，不是能力等级判断**。（旧版「交界处的 bug 在结构上不可能发现」的说法随之作废。）
  - **课堂硬产物变成「亲手做出真正的 Team」**：最小可用单位 **Lead + 2**（不是 Lead + 1——只有一名 teammate 就没有成员间通信），五条缺一不可，其中 **teammate → teammate 直接消息是唯一不可通融的过关证据**；只有 Lead ↔ 成员往返按 Subagent 处理。
  - **deck 整体删除重建：21 页拍次版 → 20 页 P00–P19**，严格按蓝图 §12 实现。新增 `deck.tsx` 统一构件（`PageHead` / `Verdict` / `Code` / `NumRow` / `PracticeBoard` + `FS` 字号常量），`TopoDiagram` 按 §11.2 重画（Team 侧改为 A↔B / ↘↙C / ↕Lead + shared task list），删除 `PromptBox`（§12.1：完整 prompt 不上 deck）。**落实三条硬约束**：① **字号下限**（主正文 26 / 代码 22 / 脚注 16）——建常量统一管，做完自检发现 43 处偏小全部抬升；② **实践页 P14–P18 只显示「现在做什么 / 完成判据 / 硬停时间」，不出现标准答案**——自检脚本扫案例关键词，**发现 P18 把蓝图 §9.6 的「用两个只在大小写或空白上不同的具体输入核对」搬上了 slide，等于在 99 分钟给案例方向，已改为「按 HANDOUT 的 Lead 验收 Prompt 独立核对」**；③ **禁止按时间自动出现答案**——全部用拆页，无 delay 揭晓。另将 P17 的两个底部警告合并进 `PracticeBoard`，避免一页同时堆代码/表/prompt/警告。
  - **P05 六张任务卡第一张原为「查 `MAX_RETRY` 定义」**——这个常量课上从未出现过，学员看到只会卡在「这是什么」上，而这六张卡考的是**任务形状**。改为「查一个常量定义在哪个文件」，与蓝图 §7.3 组合选择表首行口径一致（deck / 蓝图 §11.3 / RUNSHEET 三处同步）。
  - **RUNSHEET 按蓝图 §19 九项重写**（625 → 1302 行）：逐分钟口播与硬停、smoke-test 正常/异常画面对照、环境路由表、助教巡场检查顺序、正式 Lab 标准证据链（行号待锁 commit 后填）、**不透露根因的 0–4 级提示阶梯**、学员提前找到答案时的追问方式、三类故障恢复步骤、评分与收作业。三处现场最容易走样的地方写成硬约束：**76 分钟 smoke test 不过不放行**（放行等于本节没过关）、**提示阶梯到第 4 级也不给根因**（并明写「没找到根因但协作证据齐全算过关」）、**「没有改变我的下一步」是合格答案**（不要为了实验好看让学员假装被说服）。
  - **新增附录 H「创建 Agent Team 的完整流程与全部 Prompt」**：从启用能力到 Lead 收口 9 步端到端，每步给「什么时候 / **在哪个会话敲** / prompt 全文 / 敲完应该看到什么」。单列一张「在哪个会话敲」对照表——**PING 和 DISCOVERY 必须在成员会话里发，敲进 Lead 会话就变成 Lead 转述，整节课白跑**。收尾附老师彩排掐表清单（自己跑超过 45 分钟，学员在 53 分钟里一定跑不完）。
  - **新增附录 I「完整使用实例」**：一个组 53 分钟的实录（时间线 / 每步敲什么回什么 / 依赖未满足时 T3 显示 blocked 是对的）+ 三条关键消息填好的样子 + **一份「做砸了」的对照**——同一道题、**也找到了正确答案**，但所有消息都是成员 → Lead、Lead 自己拼根因、C 只验证 Lead 的结论、全员同意就收口，判定不过关：**「这是一支长得像 Team 的 Subagent，花了 Team 的钱，拿到 Subagent 的结构。」** 另给 `[CONFLICT]` 一个好样板——不是「我觉得你错了」，而是指出对方结论**解释不了症状的全部细节**。
  - **附录 H 改写为「用 Agent Team 开发一个新功能」的完整走查**（原为通用创建流程）：以本地 `star-mansions` 为对象，从建 teammate → 建 Team → 到交付，做一个**塔罗牌占卜**功能（78 张牌打乱，用户输入三个 1–78 的数字抽三张并给分析）。这个例子不是硬凑的——摸完仓库发现 `types/contract.ts` **前后端各一份且必须逐字段一致**，后端定的字段形状直接决定前端能不能渲染，**契约就是那条把两个人绑在一起的中途依赖**，正是蓝图 §11.3 第 3 张任务卡「前后端持续协商接口并分别实现 → Team」的真实版本。编队用蓝图 §7.2 标准单位 Lead + 3（`tarot-backend` / `tarot-web` / `tarot-verify`），并对齐该项目自己 `CLAUDE.md §9` 的纪律（Lead 是编排者不写产品代码、dev→test 最小编队、走 PR 不自合并）。三处做重：**① H.4 文件所有权表**——这是写入任务与课堂只读题最大的区别（蓝图 §6.3），并点出唯一高危点「两份 contract.ts 不是同一个文件所以不会触发写冲突，但会静默不一致」，处理办法写进 charter；**② H.11 契约协商**——B 的 CONFLICT 不是「我觉得不好」而是「我照这份写会渲染不出来」+ 三条具体证据，Lead 的裁决判据是「哪一侧持有能避免两份数据漂移」，且 `unchecked_scope` 里留了一条没定的事并指定后续谁定；**③ H.12 那条 seed 消息**——后端发现 serverless 存不住洗好的牌、seed 随响应返回，**这直接改变前端「再抽一次」按钮的做法**，是本节立论「一名成员的新证据改变另一名成员的下一步」的实物。另补 **H.12.1「成员可以自己创建和调用 subagent」**——teammate 本身是独立会话，L7 那套委派在成员内部原样成立（配两层结构图：L8 的成员互通 + 每个成员内部各自 hub-and-spoke），但三条边界要讲死：**teammate 可以开 subagent、不能再开 teammate（加成员只能 Lead 做，这是「角色不漂移」的另一面）、而且 subagent 的产出只回给它的父 teammate —— 不进共享任务板，也不会自动传给别的成员**，所以跨边界的证据仍要成员自己点名发 `[DISCOVERY]`（**subagent 帮成员省力，但不替成员承担通信责任**）。判断线不新增，就是 L7 第一问换个主语。本例两处真实用法正好对齐项目 `CLAUDE.md §9.2`：`tarot-backend` → `research-agent` 查证 78 张牌释义出处（项目规则要求「释义出处先 research-agent 出带出处的结论」，而且取证噪音留在成员主线里会挤坏后面写代码那几轮——L7 的隔离收益）；`tarot-verify` → `test-agent` + `codex-test-agent` 并行双验（API 契约属项目定义的高风险区，且**不互相传阅结果**，传阅了两个验收就退化成一个）。**并把这条能力接回创建口径**（Rick 指出的缺口：H.12.1 说了成员能开 subagent，但 H.6/H.8 的创建 prompt 一个字没提）——委派能力**不是默认送的**：自然语言直接建的成员通常继承默认工具集能委派，但**用 `.claude/agents/` 角色定义建的成员，其 `tools` 会生效（蓝图 §6.4），窄 `tools`（如只有 `Read, Grep, Glob`）会把委派能力一起切掉**。因此三处同时改：① H.6 创建 prompt 显式写死「可以调用 subagent、不得再创建 teammate」并把「有没有委派能力」加进必须报告的第 4 项（逐句表补两行说明：两个方向都要写，不写前半句成员会把大活硬扛在自己 context 里，不写后半句它可能自己扩编、Lead 失去编制控制）；② H.8 明确 **verifier 的委派能力是硬需求不是可选项**——项目 §9.2 的高风险区双验就是靠它开两个 subagent 实现的，没有这项 H.13 的验收直接降级成单验；③ charter §2 补一行成员可调用 subagent、不得创建 teammate、subagent 产出只回父成员。另在 H.12.1 顶部加**能力自检**（20 秒的一条 prompt + 判定表），并点明这是「**L7 那句『不假设继承，先做 capability check』在 L8 里要再做一次，只是检查对象从子 Agent 变成队友**」。**H.9 补「有 PRD 了 charter 还要写吗」**（Rick 的问题）：答案是要、但会短很多，而短掉的恰好不是重要的那几项 —— 两者**正交**：**PRD = 做什么（产品真相源）／charter = 这几个 agent 怎么协作（编队协议）**。配覆盖表：第 1 项 Outcome ✅ 被完全覆盖（改成**指向 PRD 路径**）、第 5 项 Done 🔶 覆盖一半（PRD 的验收 = 产品对不对；charter 还要问冲突裁决了吗 / 外部验收执行了吗 / 未检查范围标了吗），而**第 2、3、4 项 ❌ 一条都不覆盖**，其中**第 4 项通信触发器正是 charter 存在的全部理由**。并标一条硬警告：**绝不要把 PRD 抄进 charter** —— 项目 `CLAUDE.md` 写死「产品的 SoT = PRD.md」，复制一份就制造了第二份产品真相源必然漂移；项目 §9.3-2 的做法才对（**派活带的是需求 SoT 的路径，不是内容**）。charter 示例随之改成「PRD 已存在」的版本：第 1 项只留 PRD 路径 + 歧义时停下来问 Lead，第 5 项明确只写 PRD 管不到的「协作完成没完成」。**新增 H.1.5「顺序与职责分界：谁决定什么」**（Rick 的问题：是不是建完 Team、出了 PRD 就让主 agent 自己分配）—— **分配确实该让 Lead 做，原附录把 Lead 的活替它干了**（蓝图 §8.6 Lead 四项责任第一项就是「结构」，而 H.3 编队、H.4 所有权、H.10 拆任务全是预先写死的，学员照抄学不会拆）。但前面两步不能交给 Lead：**① 写 PRD 用单 Agent 不用 Team**（过一遍三问就知道：需求澄清是你和一个 agent 来回对话，没有跨成员中途依赖，用 Team 是过度组队），**② 三问判断必须人做**——**不能问 Team「你需不需要存在」，那是循环论证**。正确顺序：PRD（人拍板/单 Agent 起草）→ 三问（人）→ 建最小 Team + smoke test（固定起点，不需要方案）→ **编队/所有权/任务拆分（Lead 起草 → 人批）** → 契约裁决与验收（Lead 执行，人收口）。配职责分界表、PRD 起草 prompt、**让 Lead 出编队方案的 prompt**（五问，第 5 问是「你预判最可能出现的一次跨成员依赖是什么」——**让 Lead 自己给出「为什么要用 Team」的证据，答不出来就说明这题可能根本不需要 Team**）、以及人只验三件事的清单（重叠 / 缺口 / 第 5 问答不答得出来）。H.3 / H.4 / H.10 相应改标为**参考答案而非模板**，并加「文档顺序 ≠ 执行顺序」说明。演示脚本加一条（8 → 12 分钟）：**展示 Lead 出的编队方案原文 + 人批的意见**，说「编队不是我规定的，是 Lead 读完 PRD 自己提的，我只批了有没有重叠、有没有缺口」。另加 H.15 演示脚本（8 分钟，重点不是塔罗牌是协作过程：功能 → 名单 → 所有权表 → CONFLICT/DECISION → seed 消息 → verifier 独立输出 → 未合并的 PR）与 H.16 彩排清单（顶一条警告：**不要在课堂现场跑这整套**，它是课前做好的成品）。附录 I 相应改名为「课堂 Lab 完整实例」并在抬头写明与 H 的分工（H 写入 / I 只读）。**附录 H 引用的 11 个文件路径与 4 条 npm 命令均已对照 `star-mansions` 实际结构核过。**
  - 同步更新 `lessons.html` L8 卡片（v1.0 全新描述 / 20 页 / 先讲后做 / 须锁 commit / 三个入口文案）（`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`lessons/vibe-coding-master-l8/`、`lessons.html`）
  - ⚠️ **已知缺口**：`HANDOUT.md` 仍是旧版内容，与 v1.0 不一致，待按蓝图 §18 的 12 项重写；正式 Lab 的 `文件:行号` 待锁定 commit 后填入（蓝图 §13.2 不允许凭旧行号上课）。

## 2026-08-08

- 新增 AI 一人创业营 W2《你的 AI 员工上岗 · Agents at Work》网页版讲课 deck：35 张 React SlideEngine slide，沿用 W1 的引擎与 Register B 视觉。主线是把 W1 的「懂你的秘书」升级成「替你干活的员工」——四条 agent 路线现场选型（Hermes / 龙虾 OpenClaw / Codex / Claude Code，只对照定位与适用场景，价格与系统要求标注以官方页面为准）、装机四检查点、五类权限的授权边界与审计要求、敏感行业本地路径与数据红线、agent 工作说明书（JD）五段写法与合成示范、JD 与 SoT 的分工（agent 读 SoT 不改 SoT）、中段 30 分钟 Founder Exchange 与 W2 首次组队及半页组内契约、Agent Schedule 五段结构与五个案例（竞品监控 `0 7 * * *` / SEO 周报 `0 9 * * 1` / 财务月报 `0 8 1 * *` / 周报 `0 18 * * 0` / git 日报 `0 22 * * *`）、cron 速查、跨平台定时机制「关机还跑不跑」对照、五个失败模式兜底、责任边界、agent 产出不等于市场证据、Mom Test 访谈口径与本周作业。新增 `ScheduleCase.tsx` 模板 + `data/schedules.ts` 承载五个同构案例页；配 `PRD.md`（含 180 分钟节奏表、逐页 spec、红线自查与 5 条上台前未决项）与 `README.md`。按 `HANDOVER_DECKS.md` §4.1 把中段 30 分钟交流排进时间表（outline 六个 step 一个不删，各压缩 5–10 分钟腾出）。已登记进 `lessons.html` 并接入 `deploy.yml` 的独立构建与 Assemble 路径（`lessons/ai-solo-founder-w2`、`lessons.html`、`.github/workflows/deploy.yml`）

## 2026-08-06

- **L8 蓝图升 v0.2《做一步讲一步 · 手动 Team 主线版》**，并新增 `lessons/vibe-coding-master-l8/` 的 **RUNSHEET.md**（12 拍分钟级带课手册）与 **HANDOUT.md**（学员讲义，含课堂全部 prompt 及逐句「为什么这么写」）。三处结构性改版：
  - **① 课型从「讲 64 分钟 + 一次大实验」改成 12 拍做/讲交替**，第 6 分钟就动手，立论页挪到第 30 分钟（学员刚看完结论翻转的那一刻）。v0.1 把立论页和 charter 全排在唯一一次实验之前，重复了 L7 v0.3 已经付过学费的错误——**尺子先于撞墙**；且 v0.1 唯一的「撞墙」只是幻灯片上的一个故事，学员没有亲历。每一拍的「讲」必须解释学员**刚亲手做出来的那个东西**，配硬停点、兜底产物、「贴一行到群里」checkpoint，以及提前写死的可砍顺序（拍 9 → 拍 10 → 拍 8 的做 → 拍 5 压缩；**拍 1/2/3/6 不可砍**）。deck 从 18 页讲义改为 **22 页节拍器 + 白板**：一拍一页、每页底部固定三行页脚（现在做什么 / 什么时候停 / 贴什么到群里）、**4 页留空由课堂填满**、只有 2 页大字页（拍 3 的口令和立论）。
  - **② 主教具从自动 Agent Team 改成「手动 Team」**（三会话 + 学员自己当消息总线 + 一个 md 当任务板），自动 Team 降为拍 9 的 8 分钟投屏对照。三条理由：**自动 Team 一开跑就是黑盒、喊停停不住，结构上不支持「做一步讲一步」**；Team 的价值全在消息里，而消息自动飞过去就看不见了（手动粘贴看到的不是「结果不一样了」，而是「**这一句话改变了什么**」）；全班同步无门槛。连带效果——**本节不再有开课门槛**，v0.1 那三条 🔴（协作开关 / 显示模式 / 权限预批）全部降级为「只影响拍 9 那 8 分钟」，§15 从「国内学员降级方案」升格为**全班主路径**。
  - **③ 实验题换成两道预埋题**，因为 v0.1「课堂脚本必须制造一次通信有价值的时刻」靠嘱咐保不住、必然退化成分工。现在把对抗时刻做成**题目本身的结构性事实**：**浅题**（拍 2–4，**零制作成本，真实存在于 `star-mansions` 的 `main` 分支上**）——前端只 trim 不改大小写「是对的」+ 后端用邮箱原文派生 user.id「也是对的」，交界处两个大小写派生出两个账号导致历史记录消失；**深题**（拍 6–8，**只需一页现象报告，不改任何代码**）——时间线诱导三路一致得出「部署导致丢失」这个错误但自洽的结论，真因是生产配置没生效走了内存回落，部署只是**共因不是因果**，拆穿它只有「专职找反例」一条路。**两道题教两件不同的事：浅题教「不通信就发现不了」，深题教「不通信会一起错、而且错得很自信」。**
  - **立论升级**：从「锚定」（**概率问题**，派得够多有可能碰上）升级为「**交界处的 bug**」（**结构问题**）——「A 没问题」+「B 没问题」+「C 没问题」=「都没问题」≠ 真相，**不管派多少路、每一路 brief 写得多好，这个和永远算不出真相**。全课最重要的一句：**交界处的 bug，互不通信的调查者在结构上不可能发现——不是漏了，是算不出来。** 两种病排成递进（先 A 后 B，顺序不能换），各由一道题演出来。
  - **课程从「搭一个 agent」开始**（Rick 要求）：拍 1 用 8 分钟让学员从零写角色文件，**今天的三个队友就是这三份自己搭的文件**，一路走到拍 9「同一份文件当 teammate 再跑一次」——那句「一个字没改」的对照才有主语。暗线是 `tools` 字段：**你砌的那道墙挡住噪音（L7 的收益），也挡住证据（今天的代价）**。
  - **课堂仓库锁定 `star-mansions`（与 L7 同一个）**，蓝图 §17 待确认项 1–4 全部关闭。新增 §3.0 记录三条结构性事实（前后端跨域天然形成调查边界 / `token` 就是由邮箱派生的 `user.id` / `history` 有一条内存回落分支）以及「**小仓库的边界从哪来**」这段必讲内容——**盲区的成因是边界，不是仓库大小**。
  - **新增操作纪律「传证据，不传结论」**（规律 7）：原文转贴不做二次总结，否则对方翻转的是「同意你」而不是「发现矛盾」。这条贯穿拍 3/4/5，也写进 charter 通信规则。
  - **§19 新增「课堂全部 prompt（逐句拆解）」**（Rick 要求讲义含全部 prompt 并讲清为什么这么写）：七条通用规律 + 9 组 prompt 逐句「这一句在治什么」，含**唱反调 prompt 的四种常见错法对照表**（「批判性看一下」是态度不是任务 → **唱反调不是性格，是有具体检索目标的任务**）。讲义第一页印着「**考试不考 prompt，考右边那一列**」，理由是 prompt 会过期、组词的理由不会。
  - RUNSHEET 含：课前素材表（含「没有的话」降级列）、分钟级 12 拍表、逐拍可直接念的讲稿、拍 3 的三条纪律与「B 不翻转」救场话术、拍 6 的实验管理手册（两句节拍问题 + 巡场只记三类典型）、救场降级表、**讲这节课的三个注意**、以及**附录 A 可直接发的《线上现象报告》fixture**（诱饵 / 反例 / 噪音 / 留白四块的设计说明与彩排判据）、附录 B 三份兜底产物。
  - 同步更新 `lessons.html` 的 L8 卡片（状态改为「蓝图 v0.2 + Runsheet + 讲义已就绪 · deck 未开工」，22 页，补 Runsheet / 讲义 / 课堂仓库三个入口）（`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`lessons/vibe-coding-master-l8/`、`lessons.html`）

- **实现 L8 deck（21 页 React SlideEngine）**，接入 `deploy.yml`（Build 步骤 + Assemble cp 块），并按 Rick 现场反馈做了两轮删减：
  - **删掉每页底部的 BeatFooter 三行节拍页脚**（现在做什么 / 什么时候停 / 贴什么到群里）。初版按蓝图 §11.1 把它做成强制页脚，Rick 判定太抢。**保留的判断：节拍信息是老师要看的，写在投屏上等于把操作手册投给学员**——现在它只在 `RUNSHEET.md` 的分钟级表里。同时把为它让位而移到顶部的页码 / 圆点导航改回底部，与 L6/L7 引擎完全一致。
  - **删掉 4 页课堂填空表**（三类消息 / charter / 任务板 / 验收清单）。Rick 判定「填写的表格太多」。**任务板页整页删除**（22 → 21 页，其后 8 页重编号，文件名同步 rename）；**三类消息页和 charter 页的空格改成填好的样例**——三类消息用学员刚做的那两次粘贴当例子，charter 用 §19.5 那份填好的；验收清单去掉打勾框改编号列表。**空白模板一律留在 `HANDOUT.md`**，投屏上只给样例：一格空白等于 60 个人盯着一片空，填好的样例反而讲得动。
  - 保留的 deck 性质：**白板不是讲义**——只有 P07（拍 3 口令）/ P08（拍 3 立论）两页是大字页，那 9 分钟不许被多余信息稀释；P15 共因≠因果用手写 SVG 因果分叉图；P17 两张拓扑图**到这里才第一次同屏**（复用 L7 的 `TopoDiagram`，学员两种都亲历过了对比才有基础）。
  - **🔴 页序修正三处**（deck 做完投屏才发现，全部违反 §8.1「先撞墙，再给尺子」——而那正是 v0.2 拆课时批评 v0.1 的同一条）：
    - ① **「`tools` 是一道墙」从拍 1 移到拍 3 立论之后**——它一说破「边界也挡证据」，等于在学员撞墙前 40 分钟剧透立论。现在性质从**预告**变成**回收**（「回头看你一小时前亲手写的那一行」），而这句话的分量全在「**你自己砌的**」五个字上，只有被这道墙坑过之后才成立。拍 1 讲评改为四格收口 + 比对仓库自带的 4 个角色文件，结尾只留一句白：「记住你 `tools` 那一行写了什么，一小时后我们回来看它。」
    - ② **「小仓库的边界从哪来」从拍 2 移到拍 3 结尾**——拍 2 讲评收尾是「记住这个感觉，这不是质量问题」，情绪必须直接推到拍 3 的口令，**中间插一页方法论把气泄掉了**。拍 2 现场只用 30 秒挡一句「好问题，先记着，一会儿回答它」。
    - ③ **「价值发生在消息里」从拍 6 移到拍 7 揭穿之后**——深题硬停时全班手里揣的是**错答案**，而那个错答案恰恰是**互相通信之后**达成的；此刻问「通信有什么价值」，诚实的回答是「好像没帮上忙」，这一问就废了。挪到揭穿之后，答案变成两层，而**第二层才是真正要教的**：浅题里不通信＝没有答案，深题里通信了＝更快地一致地错，**所以通信是必要条件，不是充分条件**。拍 6 讲评降级为口播过程诊断（传递记录几行 / 几条 CONFLICT / 点名巡场典型），不占页。
    - 净效果：**拍 2 讲 4→2 分钟、拍 3 讲 6→10 分钟、拍 6 讲 4→2 分钟、拍 7 讲 7→9 分钟——时间从铺垫段挪到两个高潮段，总时长 120 分钟和页数 21 页都不变。** 蓝图新增 §11.2.1 页序修正记录、§8.1 补三条铁律（6/7/8），§9.2 / §9.3 / §9.4（新增 9.4c 回收那道墙 / 9.4d 边界从哪来）/ §9.7 / §9.8（新增 9.8c）逐段改写；RUNSHEET 分钟表与逐拍讲稿同步。
  - 蓝图 §11 整段重写（21 页逐页表 + 「为什么不放空白填写表」的判断记录 + 被挤下 deck 的 8 项去向），`App.tsx` 头部注释记录 12 拍映射与五条顺序铁律（含三条本次修正的来龙去脉）（`lessons/vibe-coding-master-l8/`、`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`.github/workflows/deploy.yml`、`lessons.html`）

- **RUNSHEET 收敛为纯讲稿**（848 → 548 行）。原来它是「带课手册」——讲稿 + 课前素材表 + 分钟级表 + 救场降级表 + 四个附录混在一起，而**其中多数与蓝图重复**（课前素材表 ≈ §12.1、救场表 ≈ §13、讲义清单 ≈ §12.4）。现在它只剩一件事：**从头念到尾的逐字讲稿**，「」里的话直接照念，其余是舞台指示；时间和页码写进每一拍的标题（`拍 3 ｜ 30–43 分钟 ｜ …` / `P05 → P06 → P07 → P08`），不再单列分钟表。三处内容按「谁用它」重新归位，一行没丢：
  - **《线上现象报告》fixture → `HANDOUT.md` §6.4** —— 它是**发给学员**的深题素材，本来就该在讲义里；同时补了两句留白说明（这一页里没有 `memStore`/`SUPABASE`/`env` 任何字样、也没有任何结论，**因为诱饵要由学员自己得出，他才会为它辩护**）。
  - **兜底产物（拍 2 三份报告标准版 + 拍 6 任务板中期快照）→ 蓝图 §12.5** —— 老师**课前**备的东西，归到「老师课前准备」下。
  - **fixture 的埋法说明（诱饵 / 反例 / 噪音 / 留白四块 + 彩排判据）→ 蓝图 §12.6** —— 明确标注「老师看，不发学员」，与 §6.4 的正文分离。
  - 「讲这节课的三个注意」不再单列一节，**折进对应那一拍的行内 ⚠️**：① 拍 3 不许压缩挤到 10 分钟以内 → 拍 3 抬头；② 「这三份里有错的吗」**必须真的停住等答案，不能自问自答**（一带而过学员会理解成「他们不够仔细」，后面立论就是空的）→ 拍 2 讲评；③ **唱反调不是一种性格，是一个有具体检索目标的任务** → 拍 7 讲评。写在动作旁边比单列一节更可能被读到。
  - 附录 D 的 3 分钟口播稿**直接内联进拍 11**（口播稿本身就是讲稿），交叉引用同步：蓝图抬头、§20、§12.1/§12.4、`HANDOUT.md` 抬头、`lessons.html` 按钮文案改为「🎙 讲稿（12 拍逐字手稿 · 从头念到尾）」（`lessons/vibe-coding-master-l8/RUNSHEET.md`、`HANDOUT.md`、`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`lessons.html`）

- **新增「如何和 Agent 对话生成专家 Agent」（Agent 架构师五阶段访谈法）**：讲义 `HANDOUT.md` §12（完整方法 + 逐句拆解 + 可直接复制的完整提示词）、蓝图 §20 附录 C（教学决策）、`RUNSHEET.md` 拍 11（3 分钟口播稿 + 学员必问的两个问题 + 砍掉时的补救）、作业第 9 题（选做）。
  - **核心反面例子**：直接说「帮我创建一个安全专家 Agent」只会拿到一段人设提示词——**等于一个没有 `tools` 字段的角色文件**（回收 L7：人设不是边界，权限才是）。正确做法是让 Agent 先当架构师：定义任务（命脉是「**请先不要生成最终提示词**」+「每次只问一个最重要的问题」）→ 给三个真实案例 → 反推能力并交缺口清单（「**不要自行假设关键业务规则**」）→ 生成 12 项 Specification（**暂不写 Prompt**）→ 才生成 System Prompt → 六类测试场景 + 审计员。
  - **🔴 教学决策：绝不能提前到拍 1**（蓝图 §20.2，三条不让步的理由）——① **你不会审规格，就不该让 AI 替你写规格**，学员必须先亲手写过 `tools`／出口／产出合同；② 拍 9 那句「一个字没改」需要「这是**你**写的」这个主语；③ 违反系列一贯的「先撞墙，再给工具」。所以课堂只用拍 11 的 3 分钟预告，完整方法进讲义、作业里选做。
  - **补了一条原材料没有的判断线**（§20.3 / HANDOUT §12.1）：五阶段访谈认真做要半小时，**不是每个 agent 都值得**——只读 / 一次性 / 自己用 → 手写四格；要交给别人用 / 长期复用 / 碰得到权限 → 才走五阶段。与「Team 门槛必须比 Subagent 高」同一种判断，防的是「学完什么都走五阶段」。
  - **它和本节四条判断一一对应**（§20.4，这是它能进 L8 而不是外挂的理由）：**规格先于 Prompt = charter 先于开跑**（规格能逐条审，Prompt 是散文审不动；且失败模式一样——临场判断的人恰恰最没资格判断）；**第三阶段风险检查那 10 条全是交界问题**（职责重叠 / 权限超职责 / 输出没人消费，单看都合理合起来才出事）；**「让另一个 Agent 当审计员」就是拍 7 的唱反调成员**（同样不能说「审计一下」，要给具体检索目标——「找一个它会越权的具体动作」，**态度 ≠ 任务**本节第二次出现）；**「别只问抽象的风格或角色定位」= L7 的 `tools`**。
  - 另标两条风险（§20.5）：AI 会很乐意替你填 Severity 定义和升级门槛而那些恰恰只有你知道，拿到规格要把「AI 填的」和「你填的」分开标；不能跳过前三阶段直接要规格，否则业务规则全是它编的。
  - §17-10 记入待确认：内容量够半节课，且讲的是「**设计** Agent」而非「**用** Agent」，与 L1–L8 主线不同层，**若开 L9 这是候选主题**（`lessons/vibe-coding-master-l8/HANDOUT.md`、`RUNSHEET.md`、`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`lessons.html`）

## 2026-08-02

- 给 L7 补 **`RUNSHEET.md`**（带课手册，此前只有蓝图没有讲稿）：按 L6 体例写——课前素材表（含「没有的话」降级列）、分钟级 runsheet、逐段讲稿、**两段实验的课堂管理手册**（这节课和 L6 的根本差别是学员要自己跑，所以 §5 动手 A 和 §8 动手 B 两段比任何讲稿都重要：巡场抓四种人、到点统一停的话术、红灯段「差距不明显整节课就废了」的预警）、救场与降级表、讲这节课的三个注意（别在开场就给判断线 / 红灯那段别心软 / 「不假设继承」要讲三个不同的面）；附录 A 动手 A 材料 + 标准答案骨架、附录 B 红灯材料 + **老师课前验收表（合格线 ≥5 倍）**、附录 C 六份学员讲义清单、**附录 D 三个可直接抄的角色文件**（`readonly-investigator` 执行密集低力度 / `scoped-implementer` 判断密集 + `isolation: worktree` 写入隔离 + `maxTurns` 止损 / `readonly-verifier` 判断密集只读，三份共同点是**范围不靠正文嘱咐、靠 `tools` 字段物理限制**——这是六格 brief 里唯一一格能从「请求」变成「保证」的）（`lessons/vibe-coding-master-l7/RUNSHEET.md`）
- 给 L7 deck 补 `L7P12_HowToCreate`（21 页 → **22 页**）：**把它落盘——怎么建一个子 Agent**。三种建法（让它替你写 / 手写文件 / 临时传入）、`.claude/agents/` vs `~/.claude/agents/` 放哪决定谁能用（同名项目级赢）、三档调用语法，以及那个会浪费十分钟的坑：`/agents` 已经不是创建向导了、跑它只提示去问 Claude 或直接编辑目录。**这是全课唯一一页出现具体路径和命令**，页面底部明确标注，蓝图 §16.3 数据纪律同步加了这条例外说明（理由：不知道文件放哪、不知道怎么触发，学员回去就落不了地，判断线再对也没用；路径和调用语法是稳定的结构事实，会变的版本行为仍然只口播）。蓝图 §8 流程表与 §11 逐页表同步改 22 页并重排时间——42–56 段变四页，为**保住动手 A 的 17 分钟**，从底线段和收尾各挤 1 分钟（`lessons/vibe-coding-master-l7`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`、`lessons.html`）
- 给 L7 deck 补 `L7P09_Anatomy`（20 页 → **21 页**，其余整体顺延，保持连续编号）：**一个子 Agent 由什么构成**——最小定义只有 `name` + `description` 两项必填（正文即它的 system prompt），剩下全是运行时自动组装且你控制不了：它自己的 system prompt、**一条主 Agent 转述的委派消息（不是你的原话）**、项目规则全层级、git 快照自动到位，而**你的对话历史 / 输出风格 / 长期记忆拿不到**；它只还回来最终那段文字，中间读的每个文件、跑的每条命令都留在**它自己的 transcript 文件**里（`~/.claude/projects/{项目}/{会话}/subagents/agent-{id}.jsonl`，一个子 Agent 一个文件，主对话压缩动不了它——「独立 context」不是比喻）。这一页插在选档与六格 brief 之间，作用是让 brief 从「规矩」变成「必然」：学员看到「它拿不到你的对话历史」是运行时事实后，第 3 格「已知事实与已排除方向」不需要再解释。同时把 `L7P08` 从「谁用什么档」扩成「**谁用什么档、花多少力气**」——一张表两个旋钮（模型档 + 思考力度），同一条判断密度线；新增两条判断：力度控制的是「愿意花多少步」不是「有多聪明」（调低 = 工具调用更少更合并），以及**低力度会「想当然」**，所以那几路的 brief 里「附文件:行号」更不能省。蓝图同步：§11 逐页表改 21 页并加编号纪律说明，§6.9 标题与表格补力度列，§18 新增 **18.5「它到底怎么跑（以及会不会起两个）」**（执行链路、transcript 独立落盘、subagent 自身 auto-compact、context window 由自己的模型决定；以及「会不会起两个」的三条答案：每次 Agent 调用都是全新实例——想续必须走 `SendMessage` resume、内置 Explore/Plan 不返回 agent ID 根本不能 resume、v2.1.199 起同名再生成会被拒绝发送，这条设计本身证明同名两实例并存真实存在），§18.6 补按角色选力度的表和三条易踩点（`lessons/vibe-coding-master-l7`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`、`lessons.html`）
- 按 L7 蓝图 v1.0 §11 **重新组装 deck**：20 页，**连续编号、不再有 b/c 后缀**（旧版 b/c 页承载主干内容，老师看不出哪页可砍，§13 降级清单也对不上号）。构成：5 页直接复用（`L7P01` 钩子 / `L7P09` 六格 brief / `L7P10` 怎么派 / `L7P11` Lab A / `L7P12` 汇总矩阵）、9 页改写、3 页新写、1 页拆成两页。三页新写的是 `L7P02_ItsTheStructure`（**问题在结构不在你交得不好**——你按 L6 四格交得很好，但它得同时干「到处翻」和「下结论」，塞进同一个 context 就等于让下结论那一轮读到全部垃圾；指令再调也治不了）、`L7P06_TwoGates`（两层门 + 6 张任务卡快速分类，配「讲完再投第二次」的双投票格）、`L7P14_YourOwnLine`（**你自己的判断线**，该派/不该派各三条留空由学员从两次实验数据里填，配工具默认倾向校准）。重点改写：`L7P03_OneMoreContext` 从原「结构 A」升格为**全节立论页**（多一个独立 context 的对比图 + 四条推论：收益/代价/铁律/冲突全是它的推论），`L7P13_RedLightHandsOn` 从 5 分钟纸面估算**恢复为 12 分钟动手实测**（微任务 + 自己做/派出去两栏计时对照 + 「过关答案不是派出去也能做，而是三项强收益一项都没命中」），`L7P18_MinimalConfig` 把最小配置阶梯提到主位、异构降为附带，`L7P04_HubAndSpoke` 只留左图并把「它们之间没有连线」讲成能力与边界的同一句话（配学员必问的「那要互相说话呢」→「那是下节课」），`L7P18_ReceiptAndVerifier` 拆成 `L7P16_Receipt`（含坏回执三行反例表）+ `L7P17_IndependentVerify`（三件事对照 + verifier 模板）。Team 相关内容全部摘除，活跃页里只剩 P19 有意的 L8 预告；原 25 页仍完整保留在 `slides/_archive/`，Team 线 9 页等 L8 迁移（`lessons/vibe-coding-master-l7`、`lessons.html`）
- **拆课**：把 Vibe Coding 大师课第七节从「双结构版」（同时讲 Subagent 和 Agent Team）拆成两节——**L7 只讲 Subagent，Agent Team 整体移到新建的 L8**。拆分理由（记在 L7 蓝图 §0.1）：① 两侧无法对称，Team 侧天然多一层（charter / 成员通信 / 对抗设计 / 外部验收），deck 做出来 Team 侧 6 页 vs Subagent 侧 4 页，**视觉上暗示 Team 更重要，而本节核心判断恰恰相反**；② 120 分钟装不下两次实验 + 两套开课门槛，挤压的结果是过度分派红灯从动手实验降级成 5 分钟纸面判断，而那正好是最需要痛感的地方；③ 双结构版必须在实验前讲完决策树，尺子先于撞墙，违反 L4/L5/L6 一贯的「先撞墙，再给尺子」。原 25 页 deck **全部归档**在 `lessons/vibe-coding-master-l7/src/components/slides/_archive/`（一页没删，Team 相关页移交 L8 复用），`App.tsx` 换成重构期占位页并在注释里记录拆课决定与归档位置，`tsconfig.app.json` 排除 `_archive`（`lessons/vibe-coding-master-l7`、`lessons.html`、`CHANGELOG.md`）
- 重写 **L7 蓝图 v1.0（Subagent 单线版）**：主题从「多 Agent 协作」收回「**Subagent — 给 context 分家**」。立论恢复为 v0.2 那句「**子 Agent 不是多一个人手，是多一个独立的 context**」（双结构版把它稀释了），收益/代价/铁律/冲突全部作为它的推论展开；决策卡从两问收回一问，第二问移交 L8；**红灯实验从纸面判断恢复为 12 分钟动手实测**，判断线回到两次实验之后由学员自己的数据长出来；新增 §6.7 最小配置阶梯（1 verifier → 2 → 3，并说清为什么最小那个是 verifier——三项强收益里「独立视角」是唯一一个 1 个成员就能拿满的）、§6.9 按判断密度选模型档、§6.10 异构埋点；120 分钟流程重排（两次实验相邻、判断线后置）；§11 逐页表收敛到 20 页并标注可复用的归档页；§18 附录只留 Subagent 部分并补「模型与力度五个技巧 + 三个坑」（换档不炸缓存 / 别让 model 空着 / 先调力度后调档 / 给搜索型角色设天花板 / 环境变量统一压档；最便宜的档 context 最小、组织 allowlist 静默降级、fork 不是省钱工具）（`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`）
- 新建 **L8 蓝图 v0.1《Agent Team — 从分派到协作》**：开场把 L7 埋的那句「子 Agent 之间没有连线」变成痛点（三份「我这边看起来没问题」= 还是不知道根因）；核心是**对抗辩论**——它治的是**锚定**（单个 Agent 找到一个说得通的解释就停），并点破最容易做错的一步「**对抗 ≠ 分工**」（按模块切拿到的是覆盖，认领假设 + 专职反例拿到的才是收敛；没人有动机推翻别人的团队其实是 Subagent 只是更贵），配门槛的操作化版本「**没有廉价判据时辩论才值**」；含 Team charter 六项、三类关键消息（DISCOVERY/CONFLICT/DECISION）、Lead 收敛责任（任务板完成 ≠ 外部验收完成）、异构只能进 Subagent 的回收；§3.1 预检卡比 L7 多三行**开课门槛**（协作开关 / 怎么确认成型 / 消息看不看得见）；§12 硬要求含三条 🔴（先跑通、定投屏显示模式、课前预批权限）；§15 国内环境的**人肉信使方案**明确标为主路径而非降级；§18 附录含完整设置与生成方法及头号坑「工具会用 Subagent 冒充 Team 而面板上看不出来」。18 页逐页表已定，复用列指向 L7 的 `_archive/`（`lessons/VIBE_CODING_MASTER_L8_BLUEPRINT.md`、`lessons.html`）
- 修正 L6 蓝图 §15 待确认项 7 的下节预告：原写「L7 = Agent Team」是拆课前口径，改为「L7 = Subagent · 给 context 分家；Agent Team 拆到 L8」并注明变更缘由（`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`）
- 新增 Vibe Coding 大师课第七节《多 Agent 协作：Subagent 与 Agent Team 两种结构》网页版讲座 deck：20 张 React SlideEngine slide（P00–P19），按蓝图 v0.4 §11 逐页实现。新增 `TopoDiagram.tsx` 作为全课视觉主角——两张 SVG 通信拓扑图（Hub-and-spoke：成员之间没有连线，分工/补 context/冲突处理全经过主 Agent；Team：成员互通的紫色 mesh + 共享任务板与信箱），P03 两张同屏对比、P04/P05 各自放大讲。主干四段：① 两种结构总览（拓扑图 → 七维并排对照表 → 两问决策树）② 结构 A · Subagent（六格 brief + 坏 brief 现场改写 → Lab A 三路只读调查 → Hub 汇总矩阵 + 四个必答问题）③ 结构 B · Agent Team（Team charter 六项 → Lab B 三个竞争假设 → DISCOVERY/CONFLICT/DECISION 三类关键消息 → 任务板全绿 ≠ 外部验收完成）④ 共同底线（红灯：微任务三结构成本对照 / context 隔离 ≠ workspace 隔离五层矩阵 / 完成回执 + verifier）；P08 能力预检卡单独成页，9 项当天实测 + 三条必须当场明示的产品事实。遵守蓝图 §16.3 数据纪律：deck 上不出现任何参数名、开关字面量、版本号或并发上限，那些留在蓝图 §18 附录 A 的老师备课材料里。P19 按「L7 不是系列收尾」处理，下节预告用 `NEXT_LESSON` 常量控制，主题定了改一行即可（`lessons/vibe-coding-master-l7`、`lessons.html`、`.github/workflows/deploy.yml`）
- 给 Vibe Coding 大师课第七节 deck 补四页操作层（20 页 → 24 页），补上原版只讲判断、不讲「实际要打什么字」的缺口：`L7P08b_ModelChoice`（谁用什么模型——三个默认值陷阱：Subagent 默认跟随主对话 / Teammate 默认**不**跟随 Lead / Teammate 的档在 spawn 时就定死改不了；选档跟「判断密度」走不跟「重要性」走，Verifier 与 Team Lead 判断密集不能省、调查员执行密集便宜档够用；先扫思考力度再动模型档）、`L7P09b_HowToSpawn`（派一个 Subagent——三档调用强制力递增，①点名与②@提及的差别本身就是「我说了 ≠ 它照做了」的教学点；一次性委派 prompt 逐句拆解：边界用否定句显式收窄、证据格式前置否则只能拿到自然语言总结、以及最容易漏的「给『不知道』一个出口，不给出口它就编」）、`L7P12b_HowToSpawnTeam`（开一个 Team——spawn prompt 只有自然语言没有命令；「让它们互相对话、试图推翻彼此的理论」这半句就是 Team 的全部意义，去掉它拿到的是三份互不相干的报告即 Subagent 只是更贵；配开完必验的两个动作防「Subagent 冒充 Team」）、`L7P15b_Heterogeneous`（异构混用——成员只能是同一家的会话，想混只有「包成工具」和「只给 Bash 的包装层」两条路；结构性结论 **异构只能进 Subagent、进不了 Agent Team**，因为成员资格靠共享任务板 + 信箱，外部进程收不到消息也不出现在任务板，永远只能是一根 spoke；真该混的只有 verifier，换模型家族的独立性比换 context 硬；最小成员阶梯 1 verifier → 2 调查+验证 → 3 并行分支，最小那个是 verifier 因为四项强收益里「独立视角」是唯一一个 1 个成员就能拿满的）。四页均遵守蓝图 §16.3 数据纪律：只讲档位与判断线，不出现模型名、价格、版本号或开关字面量。同步更新蓝图 §11 逐页表与 `lessons.html` 卡片（`lessons/vibe-coding-master-l7`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`、`lessons.html`）
- 修 Vibe Coding 大师课第七节 deck 的静默裁切：`L7P01` 右栏写死 `height: 400` + 外层 `overflow: hidden`，12 行内容实际需要约 490px，底部被无声裁掉（不报错也不出滚动条）。改为按内容撑开并收紧行距；同时把共享 `ui.tsx` 的 `Inner` 从固定 `height: 85%` 改为 `minHeight: 85% / maxHeight: 94%`，把这类溢出从「静默裁切」变成「向下生长」（`lessons/vibe-coding-master-l7`）
- 给 Vibe Coding 大师课第七节蓝图补 **§18 附录 A：两种结构的设置与生成方法**（v0.3 → v0.4）：§18.1 Subagent 的四种生成方式与优先级、文件格式与教学要用的字段、三档调用方式、启动时 context 里有什么；§18.2 Agent Team 的 12 条（开关是前提、自然语言生成、复用 subagent 定义当 teammate 角色、计划审批、显示模式、任务认领、落盘位置与「怎么证明 team 真成型」、权限弹窗全部冒到 Lead、规模建议、已知限制、以及头号坑「Claude 会用 Subagent 冒充 Team 且面板看不出来」）；§18.3 学员课后自查清单、§18.4 老师开课前必跑的五条验收、§18.5 国内环境没有 Team 结构时的人肉信使降级方案。同步回填：§2 对照表补「写入隔离」「嵌套」两行，§3.1 能力预检卡补两行开课前提，§5 非目标为「默认关闭的结构开关」开唯一例外，§12.1 补三条 🔴 硬要求，§16.2 记入三条产品事实，§17 增补两条待确认项（`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`）

- 扩展 AI 一人创业营 W1 的 Founder Club 前置说明：在 15 周路线页直接列出 W14 融资准备、W15 Traction / Investor 双 Track、毕业后 Intro Desk 与 30 / 60 / 90 天持续运营；新增学院与 Founder Club 分工、双 Track 进入条件、Intro Desk 六步流程及边界页，以及 Salon、Mastermind、Office Hour、互为客户市场和毕业后行动表页，deck 更新为 45 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 统一 AI 一人创业营 W1 课程全景中的 W11 正式名称为“Growth Hacking · 增长黑客”，并按 PR #64 补清 AARRR 最大漏水环、推荐循环与一次 10 渠道 launch 的 Phase 2 收官动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 的 Sponsorship SoT 案例左侧：用拟真 Google Drive 路径、搜索框、Word 文档、Excel 表格与图表、PPT 图表缩略图和六份互相冲突的 final 版本，替代纯文件名列表，让版本灾难与右侧唯一当前 SoT 的对比一眼可见（`lessons/ai-solo-founder-w1`）
- 新增 AI 一人创业营 W1 前置“创业营为什么存在”页：明确有无 Idea 都从行动开始、第一周建立公开内容窗口、每周中段互评与真实支持，并把“课程期间真实业务收入覆盖并争取超过学费”写成经营目标而非收益保证；同步把 Phase 2 纠正为 Go To Market，把 AI 视频实操陪跑与小红书图文诊断室分别呈现为独立 90 分钟线上课，补入英文媒体 / Podcast / Founder feature 外联；把 Phase 4 统一为 Founder Club，新增资金形式、投资材料、Data Room、企业实体、股权、IP、合同与治理准备页，并明确专业建议边界（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 增加 AI 一人创业营 W1 的 Beachhead Market 教学：依据 MIT Sloan / Bill Aulet 的 Disciplined Entrepreneurship 框架，把“第一个用户”纠正为一群购买方式、价值判断与口碑网络相近的首个切入市场；同时把 LLM / SoT 页改成大型活动 Sponsorship Deck 的 Google Drive final-final 版本灾难案例，讲清价格、权益、名额、Logo 与联系人只应从当前 SoT 生成（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 调整 AI 一人创业营 W1 叙事顺序：把原本位于课尾的 15 周路线、阶段成果、每周 Skills 与时间投入四页整体移到封面和本节目标之后，让试听学员先看清完整课程安排，再进入创业、SoT 与个人 AI OS 主线（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 扩展 AI 一人创业营 W1 的 SoT 教学段：以“到底哪一份算数”建立需求，再拆解 Single / Source / Truth 三个承诺，新增 LLM 上下文冲突解释，并把 SoT 的客户问题、竞品流程、初步交付、验证动作、证据与版本边界分别映射到对应 AI Skill，让试听学员看到后续 15 周的能力增长路径（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 第 11 页三道硬门槛：以 NOT YET 决策面板和 USER / MONEY / SPEED 三个连续闸门替代横向说明条，补清每道门的可观察过关标准与不过关后的缩小动作（`lessons/ai-solo-founder-w1`）
- 重做 AI 一人创业营 W1 第 9 页 Opportunity Scan：改为“本人提供真实经历 → AI 只追问事实 → 留下 3 个可验证问题”的单向扫描构图，明确 AI 不得发明用户、数据、痛点或付费意愿，并按 4 / 7 / 4 分钟完成课堂练习（`lessons/ai-solo-founder-w1`）
- 重构 AI 一人创业营 W1 为“搭起你的创业 AI OS”：将课程主线调整为理解创业价值交换、建立 Business SoT v0.1、搭建 Founder Workspace 并跑通 Weekly Skill 与 Human Review；Opportunity Card 提前到 SoT 之前，新增 SoT 管理层、个人 AI OS 四层结构、装修服务案例、数据与责任边界，统一 5/3/3/付费证据作业口径，课程全景移入附录，deck 更新为 40 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟机会筛选模型：三个候选机会按痛点、频率、付费、触达、创始人优势、AI 杠杆与 MVP 可实现性评分，再用三个一票否决圈定本周验证方向，deck 更新为 42 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 新增 AI 一人创业营 W1 的 30 分钟“创业机会从哪里来”模块：从熟悉行业、反复痛点、人工流程和已有付费四个入口寻找候选问题，并用 Opportunity Scan 圈出一个进入机会卡，deck 更新为 38 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重构 AI 一人创业营 W1 为《Find a Problem Worth Solving》：新增七个创业误区、Canva 与 DoorDash 一手来源案例、六字段 Opportunity Card、问题与方案句式及 5 / 3 / 3 / 付费意愿验证承诺；把机会卡定义为 SoT v0.1，并将 AI OS 降为验证辅助工具，deck 更新为 34 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 恢复 AI 一人创业营 W1 的产品验证路径图，作为独立页面与通用生意验证路径并存，讲清 Idea → PoC → MVP → 付费证据 → PMF → Scale，并将 deck 更新为 30 页（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）
- 重做 AI 一人创业营 W1 为 29 页学生讲课版：覆盖产品、公司、专业服务与传统生意，补齐 15 周逐周 Skills、生意验证路径、SoT 项目管理闭环与 4 道现场理解题；删除内部讲师话术，时间投入移到课尾，并把案例 A 改为现有会计服务的经营改造（`lessons/ai-solo-founder-w1` / `ai-solo-founder-bootcamp`）

## 2026-07-30

- 把 Vibe Coding 大师课第六节《Agent》从 130 分钟动手工作坊改版为 **90 分钟诊断课**（Rick：实操时间不够，主要讲会遇到的问题、怎么定位、怎么改）。主干重构为诊断链「① 会遇到的问题 → ② 怎么定位 → ③ 怎么改」：五条跑偏机制从中段素材升格为主干；新增 `L6P02_TodayMap`（三段地图）、`L6P10_FiveDeaths`（五条机制总览）、`L6P16_ThreeQuestions`（定位三问）、`L6P17_LookupTable`（症状 → 机制反查表，学员带走）、`L6P18_ABDemo`（A/B 预录对照，替代原课上实跑）、`L6P19_DiagnosisDrill`（10 分钟诊断单练习，替代长任务实操）、`L6P20_FixOverview`（机制 → 处方一一对应）、`L6P25_FixWriteToDisk`（落盘处方）、`L6P26_FixInterrupt`（打断，合并原两页）；删除 `L6P13_HandsOnA`（后台跑长任务）、`L6P09_ThreeBeatsOfTasking`（被处方段吸收）、原 `L6P22_ABDiagnosis`；交付单/计划先行/可执行验证三页重构为「处方」定位并按新编号重排。deck 24 页 → 28 页，蓝图升 v0.2（含 v0.1→v0.2 改版对照表），RUNSHEET 按新结构全篇重写（含分钟级节奏、逐段讲稿、救场表），同步更新 `lessons.html` 卡片（`lessons/vibe-coding-master-l6`、`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons.html`）
- 新增 Vibe Coding 大师课第六节《Agent》网页版讲座 deck：24 张 React SlideEngine slide，讲清 Agent = 模型 + 工具 + 循环、循环的四拍与「它每轮重新读一遍 context 再决定」、核心立论「它没有记忆只有 context」（并把前五节所有 SoT 重新解释成 context 治理，作为系列收束页）、交任务三拍（计划 → 执行 → 验证）与铁律「它说完成了不算完成」、五条长任务跑偏机制（context 稀释 / 压缩丢细节 / 错误累积 / 目标漂移 / 进度幻觉，每条配学员认得出的症状）、该打断的三个信号与打断后怎么给新 context，以及 A/B 红灯实验（裸交 vs 任务交付单，过关标准是能指认跑偏机制）；新增 `MechPage.tsx` 作为五条机制页的共用版式；配 `VIBE_CODING_MASTER_L6_BLUEPRINT.md`（内容 SoT）+ `RUNSHEET.md`（含分钟级节奏、十段逐字讲稿、救场降级表），登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync；PRD.md 待补）（`lessons/vibe-coding-master-l6`、`lessons.html`）
- 新增 Vibe Coding 大师课第六、七节课程蓝图：L6《Agent —— 原理与驾驭长任务》与 L7《Agent Team —— 从一个 context 到一支队伍》。两节是「诊断 → 解法」关系：L6 诊断出 context 稀释 / 压缩丢细节 / 错误累积，L7 的 context 隔离正好治这三条；系列主线因此走完三步（L1–L5 往 context 里放对的东西 → L6 看懂 context 怎么被消耗 → L7 给 context 分家）。原 L6《从静态到动态 / Auth + Database》蓝图按 Rick 决定保持删除，内容留在 git 历史（`lessons/VIBE_CODING_MASTER_L6_BLUEPRINT.md`、`lessons/VIBE_CODING_MASTER_L7_BLUEPRINT.md`）

## 2026-07-29

- 将 CCAR-F YouTube 封面升级为固定 JR Academy 女性虚拟讲师版本，保留原 `v1` 并在发布 SoT 增加人物母图与身份一致性检查（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-28

- 新增 CCAR-F 6 分 19 秒 YouTube 完整指南：用 12 个信息场景讲清考试结构、五大领域、16 节课程、30 项能力要求、近 480 道原创题、双模式模考、原创场景题和两周计划；补齐 Amy 配音、真实 Demo Exam 操作、配乐、字幕、逐字稿、image model 封面、联系表与 1080p 母版（`cca-f-cert-pack/video-ad-remotion-15s`、`cca-f-cert-pack/public/assets`）

## 2026-07-24

- 把 Vibe Coding 大师课 L5《Skills》deck 里所有"用本仓库 `.claude/skills/`（`talk-deck`/`xhs-poster`/其余 14 个 Skill）当教材"的例子，全部换成 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）原文给出的真实例子：`L5P05_RealSkillTeardown`（summarize-changes/pdf-processing 的 frontmatter）、`L5P06_SkillMdStructure`（fix-issue + argument-hint、pdf-processing 的真实目录树）、`L5P09_MetaExample`（原"这套课的 deck 就是 talk-deck 做的"改为官方真实功能 `/run-skill-generator`——专门生成别的 Skill 的 Skill）、`L5P16_SkillLibraryGrows`（原本仓库 14 个 Skill 列表改为 Claude Code 9 个真实 bundled skill + 官方开源 `github.com/anthropics/skills` 仓库 + 插件市场）；同步重写 PRD.md 核心教学决策/数据纪律、RUNSHEET.md 全篇讲稿与 附一、`lessons.html` 卡片描述，课程内容与本课程仓库解耦（`lessons/vibe-coding-master-l5`、`lessons.html`）

- 给 Vibe Coding 大师课 L5《Skills》deck 的 `L5P06_SkillMdStructure` 把「支持文件」从笼统的"模板/脚本"拆成官方三类（Instructions 参考文档 / Code 脚本，代码不进 context 只有运行结果进 / Resources 素材模板示例），并补上通用目录树示意（不假称本仓库有真实案例）；RUNSHEET.md 同步展开三类讲法，并新增"有没有 YAML frontmatter，Level 1 token 上限是否一样"的澄清（结论：上限一样，都封顶在官方 1536 字符的 skill 列表预算里，差的是匹配精度不是 token），同步更新 PRD.md 逐页 spec 与数据纪律，并顺带把此前"career-bootcamp 等三个是旧格式"的不准确措辞改成"没写 frontmatter，退到正文首段当 description，是官方支持的合法简化写法"（`lessons/vibe-coding-master-l5`）

- 核对 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 里渐进式披露/Project vs Personal Skill 的讲法与 Anthropic 官方文档（`code.claude.com/docs/en/skills`、`platform.claude.com/.../agent-skills/overview`）一致，补上官方给的精确 token 数字（Level 1 ~100 token/skill、Level 2 <5k token、Level 3 按需 0 token）与来源引用，并如实说明官方其实还有 Enterprise/Plugin 两层（今晚课程只讲对个人/小团队最常用的 Project/Personal 两层）（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 补充 Project Skill（`.claude/skills/`，随项目 git 共享）vs Global/个人 Skill（`~/.claude/skills/`，跟着用户走）的区别与设置方法，讲稿追加到 §4（拆真实 Skill）和 §6（落地前先定位置），并在附一加一条对应降级预案；只改 RUNSHEET.md 讲稿，不涉及 deck slide（`lessons/vibe-coding-master-l5/RUNSHEET.md`）

- 给 Vibe Coding 大师课 L5《Skills》deck 扩展 SKILL.md 组成格式并新增渐进式披露原理页：`L5P06_SkillMdStructure` 补上 `argument-hint`（本仓库 14 个 Skill 里 11 个真实在用）+ 支持文件说明，`L5P06b_ProgressiveDisclosure`（新增）讲三层加载模型（常驻 description / 触发时读正文 / 按需读支持文件）及 Skill 好处（可复用/一致性/高效/团队共享/可版本管理）；deck 由 22 页扩到 23 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`，并把 `L5P17b_DomesticAlternatives` 里的模型名同步更正为 Kimi K3（`lessons/vibe-coding-master-l5`、`lessons.html`）
- 给 Vibe Coding 大师课 L5《Skills》RUNSHEET.md 的「附一：现场卡住了怎么降级」从 6 条扩到 14 条，覆盖新增章节（prompt 原理页、国内替代方案）的降级预案，并按优先级给出时间不够时的取舍顺序（`lessons/vibe-coding-master-l5/RUNSHEET.md`）
- 给 Vibe Coding 大师课 L5《Skills》deck 加两页实战向内容：`L5P11b_PromptAnatomy` 逐句拆解投屏 prompt 为什么这样组词（上下文先行/产出形态先定/结构化字段拆开要/检查点前置），`L5P17b_DomesticAlternatives` 讲国内用不了 Claude Code 时的三条退而求其次路线及生态差距；deck 由 20 页扩到 22 页，同步更新 `PRD.md`/`RUNSHEET.md`/`lessons.html`（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-22

- 重做 CCAR-F 90 秒 YouTube 缩略图：改用图片模型完成图文一体设计，以陌生观众可直接理解的“Claude 架构师证书”为最大标题，并逐字校验中文与技术词（`cca-f-cert-pack/public/assets`）
- 新增 CCAR-F 90 秒 YouTube 干货型横屏视频：用原创退款场景讲解 prompt、PreToolUse 与重试的架构判断，复用真实题库和双模式模考录屏，补齐 Amy 配音、字幕、逐字稿、封面、联系表及发布规格验收（`cca-f-cert-pack/video-ad-remotion-15s`）
- 新增 Vibe Coding 大师课第五节《Skills》网页版讲座 deck：20 张 React SlideEngine slide，讲清 Skill 是什么、与一次性 prompt/rules 的区别、该不该做成 Skill 的判断线、`description` 触发命门、拆解本仓库真实 `talk-deck`/`xhs-poster` Skill，并带学员动手写一个 Skill、调用、迭代；配 `PRD.md` + `RUNSHEET.md`，登记到 `lessons.html`（尚未接入 `ai-builder/outline.json`，待 bootcamp-sync）（`lessons/vibe-coding-master-l5`、`lessons.html`）

## 2026-07-21

- 发布并绑定 CCDV-F 第 7–10 章重制 Production Release：70/70 张签名缩略图返回图片，140/140 段音频支持 `206 audio/mpeg` 分段播放，课程登记同步改为已发布（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`、`lessons.html`）
- 重做 CCDV-F 第 7–10 章完整配音：将 140 段旧版 Eleven v3 + 1.18 倍后处理替换为 Amy Multilingual v2、0.92 语速、固定 seed、上下文衔接且保留自然停顿；补齐 70 张同 Release 缩略图，并增加逐文件编码、时长、声线配置和五视口固定画布闸门（`lessons/ccdv-f-{prompt-context-engineering,security-safety,tools-mcps,exam-prep}`）
- 修复 CCDV-F Claude Code 云端固定画布 QA 在切换 Slide 后未等待新增中文字形加载的问题，避免 `settings-precedence` 标题被误判为跨视口重排（`lessons/ccdv-f-claude-code`）
- 修复 CCDV-F 第 2–6 章 Production Manifest 缺少 `thumbnailUrl` 的问题，为 77 张 Slide 接入同 Release 缩略图并增加构建文件存在性闸门（`lessons/ccdv-f-{agents-workflows,applications-integration,claude-code,eval-testing-debugging,model-selection-optimization}`）
- 修复 CCDV-F 第六课第一页权重条的双重边框与标题压线排版，并增加标题和轨道不得重叠的视觉 QA 闸门（`lessons/ccdv-f-model-selection-optimization`）

## 2026-07-20

- 修复 CCDV-F 第五课第 4 页中 429、500、529 HTTP 状态码的逐位数字朗读，并增加单段语音重生成入口 (`lessons/ccdv-f-eval-testing-debugging`)
- 配置 Classroom Deck 发布 Runner 安装 ffmpeg/ffprobe，使配音时长、编码规格与语速闸门在 CI 中可执行（`.github/workflows/publish-classroom-deck.yml`）
- 修复 CCDV-F 第一章配音过快与分段声线漂移：移除 1.18 倍速和全段静音裁剪，改用 Amy Multilingual v2、0.92 速度、固定 seed 与上下文衔接，重生成 41 段 15:34 配音并新增语速/声线配置闸门（`lessons/ccdv-f-exam-overview-pilot`）
- 发布 CCDV-F 十章 React Classroom Production Release 并绑定生产章节，补全线上登记；移除第一章页脚的本地试验标签（`lessons/ccdv-f-*`、`lessons.html`）
- 修复 CCDV-F 第四章 Claude Code 云端 QA 的字体加载竞态，在建立布局基线前等待 `document.fonts.ready`，并在失败时输出具体重排明细（`lessons/ccdv-f-claude-code`）

## 2026-07-19

- 更新 CCDV-F 第六至第十章的课程登记为 UAT Draft 已发布，保持 Production 未绑定（`lessons.html`）
- 新增 CCDV-F 第十章 Exam Prep 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-exam-prep`）
- 新增 CCDV-F 第九章 Tools and MCPs 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-tools-mcps`）
- 新增 CCDV-F 第八章 Security and Safety 的 16 张内容驱动 React Slide、32 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-security-safety`）
- 新增 CCDV-F 第七章 Prompt and Context Engineering 的 18 张内容驱动 React Slide、36 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-prompt-context-engineering`）
- 修复 CCDV-F 第六章云端 QA 的字体加载竞态，在建立首个布局基线前等待 `document.fonts.ready`，避免 CI 使用 fallback 字体后切换造成伪 reflow（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第六章 Model Selection and Optimization 的 18 张内容驱动 React Slide、38 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-model-selection-optimization`）
- 新增 CCDV-F 第五章 Eval, Testing, and Debugging 的 13 张内容驱动 React Slide、28 段 Amy 配音、13 张缩略图与 Classroom Bridge；完成 13 页 × 5 容器共 65 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-eval-testing-debugging`）
- 新增 CCDV-F 第四章 Claude Code 的 12 张内容驱动 React Slide、25 段 Amy 配音、12 张缩略图与 Classroom Bridge；完成 12 页 × 5 容器共 60 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-claude-code`）
- 新增 CCDV-F 第三章 Applications and Integration 的 18 张内容驱动 React Slide、43 段 Amy 配音、18 张缩略图与 Classroom Bridge；完成 18 页 × 5 容器共 90 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-applications-integration`）
- 新增 CCDV-F 第二章 Agents and Workflows 的 16 张内容驱动 React Slide、39 段 Amy 配音、16 张缩略图与 Classroom Bridge；完成 16 页 × 5 容器共 80 项固定 16:9 QA，作为独立 UAT Draft 发布候选，不绑定生产课程（`lessons/ccdv-f-agents-workflows`）
- 新增 CCDV-F 第一章 15 张内容驱动 React Slide、41 段 Amy 完整配音、真实 Classroom Bridge 自动翻页和逐段审核播放器，不上传、不绑定生产（`lessons/ccdv-f-exam-overview-pilot`）
- 重做 CCDV-F 第一章视觉为用户确认的 JR Course Studio 演播室语言：暖灰渐变外场、官方 Logo 顶栏、独立圆角白色教学主板、克制硬阴影和内容驱动版式；重生成 15 张缩略图，并通过 15 页 × 5 容器的 75 项固定 16:9 QA（`lessons/ccdv-f-exam-overview-pilot`）
- 修复独立 Classroom Deck CI/CD：把 MP3 上传到按 `deckId/releaseId` 隔离的 UAT/Production 专用音频桶，上传后校验对象数量与 206 Range，并让 narration、音频、缩略图和发布脚本变更都能触发 changed-deck 工作流（`.github/workflows/publish-classroom-deck.yml`）
- 修复 Classroom 发布角色无 `s3:ListBucket` 时的音频发布校验，改为逐个对象验证 `Content-Type` 与不可变缓存头，保持最小权限部署（`.github/workflows/publish-classroom-deck.yml`）

## 2026-07-17

- 更新 CCDV-F 第一张 Classroom Deck 的 UAT 音频地址、发布工作流和 Release Candidate 登记（`lessons/ccdv-f-exam-overview-pilot`）

## 2026-09-14 · Curriculum domain

- 更新课程资料、索引和发布模板的 curriculum 绝对链接为 jracademy.ai，增加上传前域名检查；保留原路径和非 curriculum 服务地址。
