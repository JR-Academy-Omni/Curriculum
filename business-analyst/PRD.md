# PRD: AI 产品经理(BA)训练营 2025-12 期课程升级

**状态**: Draft
**作者**: Claude + lightman
**目标期数**: 2025-12-01 ~ 2026-01-18 (AI产品经理（BA）训练营+实习 — tuition ¥4800 / promo ¥4400)
**Production 目标**: 在产品侧 `business-analyst` 课程升级现有 syllabus（不新建课程）
**Curriculum**: `curriculum/business-analyst/public/outline.json`（已从 training-outlines 自动生成）

---

## 1. Context — 为什么要做这件事

BA 训练营是 JR Academy 最老的课程之一（最早一期 2021-10-18），历史上跑过 3 期。2025-12 这一期第一次明确定位为"**AI 产品经理**"——课程名从 "Business Analyst产品经理+实习" 改成 "AI产品经理（BA）训练营+实习"，学费从 ¥3630 涨到 ¥4800（promo ¥4400），在 prod 里已经招生 2 人开始上课。

但 syllabus 里**AI 相关内容是补丁式塞进去的**，不是重构：94 节课里有 AI 基础、Prompt 工程、RAG、Agent、自动化的 lesson，但它们和老的 BA 内容（需求分析、Agile、User Story、PRD）没有形成闭环；25 节课描述是空的；大量 lesson 只有标题没有 step 序列；0 个 Lab/Learn 资源绑定。现在这个 outline 放在付费学员面前，体验不合格。

这个 PRD 定义 v2 要修什么、补什么、怎么交付。

## 2. 现状数据（Source of Truth: 本地 outline.json）

| 指标 | 值 |
|------|---|
| Total Lessons | 94 |
| Total Steps | **0** |
| Total Labs bound | **0** |
| Total Learns bound | **0** |
| Phases | **1**（94 节全在一个 phase 里） |
| Estimated Hours | 116h |
| Description 有结构化 HTML (`<h3>`) | 13 / 94（14%） |
| Description 完全空 | **25 / 94**（27%） |
| learningMaterial 有内容 | 0 / 94 |
| FAQs | 0 |
| bootcampSections（营销 section） | 0 |
| cohortStatus | null（数据问题） |
| programPhase | 1（数据问题，应该是第 4 期） |

Lesson 类型分布：Video 64 · Lab 7 · Quiz 10 · Workshop 5 · Information 3 · Lesson 4 · Tutorial 1

---

## 3. 问题清单（按严重度）

### P0 — 阻塞学员学习体验

1. **Steps 全空** — 所有 94 节 lesson 的 `steps: []`，`labs: []`，`learns: []`。学员打开课程看不到"这节课该怎么学"的步骤序列，只有一个标题和一段 description。对照 ai-engineer-bootcamp 第五期标准，每节课至少要有 CONCEPT → LAB → MCQ → SCENARIO 的 step 序列。

2. **25 节课描述完全空**，其中包含大量核心内容：
   - L22 BA 面试指导、L23 BA 如何写简历、L28 如何撰写 IT 专业简历 — **求职核心**
   - L43 如何做需求分析 — **BA 核心技能**
   - L53 现代的开发 vs AI 产品开发流程 — **AI BA 差异化核心**
   - L64 PRD 结构、L68 AI PRD 关键章节、L69 PRD-Figma-Jira 联动、L70 PRD 评审 — **整个 PRD 模块**
   - L76 Prompt 工程原理与技巧 — **AI 时代 BA 必修**
   - L50/L74/L78/L84/L89 — 5 个 Lab 都是空的（lab 是最贵的内容类型，空 = 学员没法练）

3. **内容密度严重不均**：
   - L29 "什么是 AI Product Management" 有 **90,673 字符**（相当于一篇学位论文），学员根本读不完
   - 同时其他 video 大多 1000-3000 字符，结构化 `<h3>` 分章的只有 13 节
   - 空的和超长的同时存在，说明是历史拼接产物，没经过统一编辑

4. **1 个 phase 装 94 节课**。Training 的 quiz 标题里明确写了 "Week 0/1/2/3/4/5/6"，说明内部有周节奏，但 `phases` 结构没体现出来。学员在课程页面看不到阶段感，课程又长又没有"里程碑"。

### P1 — 资源未整合，0 复用

5. **0 Lab 绑定 / 0 Learn 绑定**。JR Academy 平台上有 247 个 Lab、277 个 Learn 章节，其中 prompt-master / ai-pm / ai-builder / ai-engineer 四个方向有 **15+ 个直接可复用**的 AI PM 章节（下文详列）。BA bootcamp 当前完全没有绑定这些资源，等于学员出钱上这个课但享受不到平台其他 direction 已有的沉淀。

6. **没有 learningMaterial**。学员点进 lesson 看到的是 description 里的 HTML 长文本，没有结构化的"学习资料"区域（图 / 表 / 步骤指引 / 外链）。对比其他 bootcamp（ai-essentials），每节课的 learningMaterial 是展开的 2000-4000 字教程式内容。

### P2 — 营销 / 体验外壳缺失

7. **FAQs 0 条、bootcampSections 0 个**。课程主页几乎没有营销 section（为什么选这个课 / 学完能做什么 / 往期学员案例 / 老师介绍 / 价格对比），所有判断只能靠下拉看 94 节课表，转化率很低。

8. **program metadata 错乱**。`programPhase = 1`（但这是第 4 期了），`cohortStatus = null`（应该是 RECRUITING），这些字段前端依赖它们显示"第 N 期 / 招生中 / 已满"等状态。

### P3 — AI 时代 BA 职能缺口

9. **AI PM 核心技能缺课**，下列话题在当前 syllabus 里**完全没有**或只有标题没内容：
   - **AI 产品评估体系** — 怎么给 LLM feature 定成功指标（accuracy / latency / hallucination rate / cost per query），怎么设计 A/B 实验
   - **AI 成本管理** — token 成本、inference 成本、RAG 向量库成本、为什么要做 prompt caching
   - **MCP / Tool Calling** — 2025 年 AI PM 必须理解的架构模式，当前 syllabus 只提了 Agent 抽象，没讲 MCP
   - **AI 数据边界** — 用户数据合规（GDPR / APP / PII），训练数据 vs RAG 数据的差异，哪些数据能喂给 LLM
   - **AI Ethics & Governance** — L68 标题提了但内容空，实际这是一整节课的内容
   - **Context Engineering** — 比单点 prompt 更高阶的能力，Anthropic、OpenAI 2025 文档都强调的概念
   - **AI 竞品分析框架** — 怎么系统评估 OpenAI / Claude / Gemini / 国产模型的差异

10. **求职内容停留在传统 BA**。L20-L28 的求职模块是 Thoughtworks 时代的经验（约 2021-2023），但 2025 年招 AI PM 的公司（如 Canva、Atlassian、Airwallex、Service NSW 数字化项目）考察的点已经变了：portfolio 要有 AI 项目、要能展示 prompt engineering 过程、要能讲清楚 LLM 成本取舍。这块需要**更新案例 + 新增 AI PM 面试题库**。

### P1 — 跨资源类型缺口（deep scan 才发现的系统性问题）

BA bootcamp 不只靠 lesson 构成学习闭环，还要靠 **Wiki / Cheat Sheet / Video / Roadmap / Interview Questions / Company Intelligence** 六类资源做支撑。deep scan 结果：

11. **Wiki 核心话题 12 个全缺**：Context Engineering、MCP、Token 经济、AI 评估框架、Prompt 缓存、Vector DB 选型、LLM 提供商对比、AI 数据合规、Tool Calling、Multi-Agent 编排、AI A/B 测试、Fine-tuning vs RAG 决策 — 这些是 2025 年 AI PM 的 **day-1 必懂知识**，平台 wiki 0 覆盖。同时 `wiki/business-analyst` 和 `wiki/ai-engineer` 目前是 **empty draft 状态**（有目录无内容）。仅 `wiki/prompt-engineering` 有 3 章基础内容，深度不够。

12. **Cheat Sheet 对 BA/PM 流程话题零覆盖**。平台实际有 **213 张** cheat sheet，存储在 `jr-academy-web-zh/public/cheat-sheets/*.md`，123 张在 `src/constants/cheatSheets.ts` 配置索引里（剩 90 张是 orphan md 文件未挂 index，也是需要清理的债）。10 张 AI 工具类 cheat sheet 已经很强（chatgpt / claude / gemini / cursor / github-copilot / notion-ai / v0-dev / perplexity / midjourney / stable-diffusion），BA bootcamp 可以直接引用。**但 BA/PM 流程类的 cheat sheet 一张都没有**：没有 INVEST / PRD 模板 / Stakeholder 矩阵 / PM Prompt 库 / AI 成本估算 / Agile 仪式 / BPMN 速查 / BA 面试 FAQ。另外 `public/cheat-sheets/` 里有两张重量级 md 孤儿文件 `ai.md`（1332 行）和没挂 index，是沉没资产，W1 要确认是要挂上还是删掉。

13. **Roadmap 零覆盖**。平台有 42 个 roadmap，**全部是工程方向**（AI Engineer / Data / DevOps / Fullstack 等）。没有 `ai-product-manager-roadmap`、没有 `business-analyst-career-roadmap`。BA 学员看不到"从零 → 初级 BA → 资深 BA → AI PM → 产品总监"的长期路径图，学完 bootcamp 就断档。

14. **Interview Question 库 BA/PM 覆盖几乎为零**。344 个 question bank 里只有 2 个沾边的（`agile`、`agile-testing`），**没有 Product Manager 专门题库、没有 Requirements Analysis 题库、没有 Stakeholder Management 题库**。公司维度：只有 atlassian / asana / canva 三家有少量 BA 相关问题。

15. **Company Intelligence 对澳洲 AI PM 招聘市场覆盖不均**：
   - **RICH**（有 aiIntelligence + 面经）：Canva（32 条面经）、Atlassian（详细 AI 产品标注）— 这俩是最强的
   - **EXISTS 但薄**：ANZ、REA、Seek、Westpac、Optus、Telstra、Qantas、Coles、Woolworths、Afterpay、Sportsbet —— 有公司档案但**缺 AI PM 招聘信号**和面经
   - **GHOST**（空 entry）：Service NSW（空 description、0 面经、`showInInterviewsPage=false`）
   - **MISSING**：**Airwallex 完全找不到 company profile** — 澳洲最大的 Fintech 独角兽之一，招大量 AI PM，但平台 0 覆盖

16. **Video 里有 2 条幽灵引用**。L22/L23 BA 面试指导+如何写简历（空描述）、L25 Thoughtworks BA 经验分享（✓ 确认存在 `ba-business-analyst-user-story-ba` Thoughtworks Xin 的 67min video）、L26 IS 专业毕业生回国经验分享（❌ **找不到对应 video entry**）、L27 BA 优秀学员 Eric 经验分享（❌ **找不到对应 video entry**）。L26/L27 在 syllabus 里是幽灵 lesson，需要要么录制要么删除。

---

## 4. Goals — v2 交付后要达到的状态

### Must Have（交付 blocker）

- **所有 94 节 lesson 有非空 description + 至少 1 个 step**（CONCEPT 或 LAB）
- **Lab lesson（L06/L38/L50/L74/L78/L84/L89）7 节全部有完整可操作 steps**（每个 Lab 有 labSlug 指向实际 Lab 配置，不能是"完成一个练习"这种泛泛话）
- **6 phases 结构**，phase 名称能让学员看出阶段目标
- **至少 30 个 lesson 绑定现有平台资源**（labs + learns 合计 >= 30，复用率 >= 30%）
- **program metadata 修正**：`programPhase = 4`、`cohortStatus = 'RECRUITING'`（本地 curriculum 修复后同步到 prod）
- **核心 AI PM 内容补齐**：新增 4 节必修（评估 / 成本 / MCP / 数据合规），穿插到相应 phase
- **跨资源最小集**（对应 §3 的 P1 问题 11-16）：
  - 4 个新 Wiki（Context Engineering / MCP / Token 经济 / AI 评估框架）— 最卡脖子的 4 个话题
  - **复用 14 张已有 AI / 工具类 Cheat Sheet**（chatgpt / claude / gemini / cursor / notion-ai / figma / jira 等）通过 learningMaterial 链接到相应 lesson
  - **新建 6 张 BA/PM 流程 Cheat Sheet**（INVEST / PRD 模板 / Stakeholder 矩阵 / PM Prompt 库 / AI 成本估算 / BA 面试 FAQ），补平台真正的流程类缺口
  - **新增 `product-management` cheat sheet 分类**（当前 11 个分类里没有 PM 方向）
  - 1 个新 Roadmap：`ai-product-manager-roadmap`（零 → AI PM → 产品总监）
  - 3 个新 Interview Question bank（product-manager / requirements-analysis / stakeholder-management）
  - L26/L27 幽灵 video 处理：找到原 video 或从 outline 删除（不可以留空引用）

### Should Have

- **每个 phase 结尾有章节测试**（MCQ 5-10 题 + 1 个 SCENARIO 项目验证），解锁下一个 phase
- **10 条 FAQ**（聚焦转化：适合谁 / 要多少基础 / 和老的 BA 训练营有什么区别 / 能不能拿 offer）
- **5-6 个 bootcampSections**（营销主页的大块卡片）
- **P3 项目闭环**：L08、L19 这些 P3 workshop lesson 要链接到实际的 P3 task 拆解（Kanban）
- **learningMaterial 填充核心 20 节**（CONCEPT 类 lesson，每节 1500-3000 字结构化 HTML）
- **扩展 Wiki / Cheat Sheet / Interview Question 到覆盖所有 AI 时代缺口**（Must Have 之外的 8 个话题全补）
- **扩写 `wiki/business-analyst` 和 `wiki/ai-engineer`**（当前都是 empty draft）
- **完善 `wiki/prompt-engineering`**（当前只有 3 章基础，要加进阶 5 章）

### Nice to Have

- 94 节全部 learningMaterial 填充
- 英文版 `title_en` / `description_en`（国际学员 / SEO）
- 老师 1v1 分工注释（L20 已有框架）

---

## 5. Phase 重构方案

把现有 94 节按 Week 节奏拆成 6 phases。lesson 顺序基本不动（尊重现有的时间线），只是把它们分组，给 phase 加 `name/color/summary/test`。

| Phase | 名称 | Lesson 范围 | 课时 | 核心目标 |
|-------|------|------------|-----|---------|
| P0 | 启程与 AI 基础 | L01 – L14 | 14 | 搞清楚 AI 时代 BA 定位、装好工具、了解 P3 项目机制 |
| P1 | BA 角色与求职定位 | L15 – L39 | 25 | 理解 BA 工作流 + Initiation/Discovery/Delivery 全周期 + AI PM 差异 + 求职准备 |
| P2 | 需求与敏捷协作 | L40 – L62 | 23 | User Story 全套 + Agile/Scrum + GenAI-empowered 需求分析 |
| P3 | 文档与 Prompt 工程 | L63 – L79 | 17 | PRD 写作（传统 + AI 版）+ Prompt 工程实战 |
| P4 | AI 原型实战 | L80 – L88 | 9 | 前后端入门 + 四大 AI 模式（Prompt / FT / RAG / Agent）+ RAG 搭建 |
| P5 | 自动化与 Agent 落地 | L89 – L94 | 6 | 自动化链路 + Agent 产品设计 + 从想法到上线 |

**Phase 颜色**（用于前端渲染）：P0 `#6366f1` P1 `#10b981` P2 `#f59e0b` P3 `#ef4444` P4 `#8b5cf6` P5 `#06b6d4`

**每个 phase 结尾的 test**（合并现有 Quiz）：

- P0 test: L07 (AI 基础知识 - Week 0) + 新增 3 题 SCENARIO
- P1 test: L14 (进入 P3 前 Quiz) + L39 (产品流程与 BA 职责 - Week 1) 合并
- P2 test: L51 (Agile - Week 2) + L62 (User Story & Backlog - Week 2) 合并 + 1 个 SCENARIO（写一份完整 User Story）
- P3 test: L71 (Requirements - Week 3) + L75 (PRD - Week 4) + L79 (Prompt - Week 4) 合并
- P4 test: L88 (RAG 概念测验 - Week 5) + 1 个 SCENARIO（搭建一个文档问答 demo）
- P5 test: L90 (Agent 决策思维 - Week 6) + 毕业项目（1 个自动化链路）

---

## 6. 资源绑定方案（P1 问题的系统性答复）

以下是从已有平台资源 inventory 里挑出来、直接可以 paste 到 `outline.json` 里的 `labs[]` / `learns[]`。所有 slug 都是 subagent 在本地代码库里验证存在的。

### P0 启程与 AI 基础

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L02 AI 基础概念及应用场景 | `learn: ai-pm/ai-basics-business` | LLM mechanics & cost models |
| L03 AI PM 与 AI Builder 岗位 | `learn: ai-builder/ai-native-product` | AI-native 产品设计思维 |
| L04 AI 核心概念与术语 | `learn: ai-engineer/llm-api-basics` | API 调用基础 |
| L05 AI 典型应用场景 | `learn: ai-pm/ai-pm-toolbox` | ChatGPT / Claude / Notion AI 实战 |
| L06 工具与账号配置 | `lab: prompt-lab/hello-ai` + `wiki: openai-api` | 第一个 prompt |

### P1 BA 角色与求职定位

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L17-L19 P3 BA 角色 | `wiki: business-analyst` | BA 职责参考（wiki 待扩充） |
| L29 什么是 AI PM ⚠️ | 拆分！目前 90K 字符太长，拆成 3 节 + 绑 `learn: ai-pm/ai-basics-business` |
| L30 BA 自我提升 | `wiki: business-analyst` |
| L37 行业案例（已 11K 字符） | `learn: ai-pm/ai-product-iteration` | 版本管理 + A/B 测试案例 |
| L38 AI 应用体验（Lab 空） | `lab: prompt-lab/role-playing` + `lab: prompt-lab/output-format` |

### P2 需求与敏捷

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L44-L49 User Story I/II/III | `learn: ai-builder/idea-to-prd`（Idea→PRD）| 现代化的 User Story 写法 |
| L50 AI 小编剧 Lab（空） | `lab: prompt-lab/few-shot` + `lab: prompt-lab/output-format` | 用 few-shot 让 AI 生成 User Story |
| L52-L60 Agile/Scrum 基础 | `wiki: ` ⚠️ **平台缺口** — 没有 Agile wiki，需要新建或外链 |
| L61 GenAI-empowered BA | `learn: ai-pm/prompt-engineering-pm` | PRD / BRD 生成 |
| L63 Stakeholder Interview | `lab: prompt-lab/clear-task` + `lab: prompt-lab/context-management` |

### P3 文档与 Prompt 工程

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L64 PRD 结构（空） | `learn: ai-builder/idea-to-prd` | **新写 description**，参考这个 chapter |
| L65-L67 Requirements Documentation | `learn: ai-pm/prompt-engineering-pm` |
| L68 AI PRD 关键章节（空） | `learn: ai-pm/ai-team-collaboration` + **新写 description** |
| L69 PRD-Figma-Jira 联动（空） | `wiki: n8n-workflow-automation` |
| L70 PRD 评审（空） | **新写 description** + 外链真实 PRD 样本 |
| L74 撰写 PRD Lab（空） | `lab: prompt-lab/json-schema` + `lab: prompt-lab/output-format` |
| L76 Prompt 工程（空） | `learn: prompt-master/introduction/introduction` + `learn: prompt-master/introduction/basics` |
| L77 多轮对话与记忆 | `learn: prompt-master/introduction/elements` |
| L78 Prompt A/B Lab（空） | `lab: prompt-lab/few-shot` + `lab: prompt-lab/chain-of-thought` + `lab: prompt-lab/role-playing` |

### P4 AI 原型实战

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L80-L81 AI Programming 入门 | `learn: vibe-coding/*`（多章可选）|
| L82 前后端 API 入门 | `learn: ai-engineer/llm-api-basics` |
| L83 四大 AI 模式 | `learn: ai-pm/rag-agent-strategy` + `wiki: langchain` + `wiki: chromadb` |
| L84 文档问答 Lab（空） | `lab: chatgpt-notion-qanda` | **EXACT MATCH** |
| L85 低代码 RAG | `learn: ai-builder/no-code-mvp` + `learn: ai-pm/rag-agent-strategy` |
| L86 Agent 工作流 | `learn: ai-pm/rag-agent-strategy` + `learn: ai-pm/ai-team-collaboration` |
| L87 AI 自动化产品设计 | `wiki: n8n-workflow-automation` |

### P5 自动化与 Agent 落地

| Lesson | 绑定资源 | 说明 |
|--------|---------|------|
| L89 Notion→AI→Jira Lab（空）| `lab: notion-ai-jira` **EXACT MATCH** + `wiki: n8n-guide` |
| L91 自动化思维 | `wiki: n8n-workflow-automation` |
| L92 Agent 思维 | `learn: ai-pm/rag-agent-strategy` |
| L93 自动化架构思维 | `wiki: langchain` + `wiki: claude-api` |
| L94 Agent 落地实战（毕业项目）| 无直接绑定 — 这是毕业 SCENARIO |

**合计**：52 个 lesson 绑定了资源（Lab 绑定 ~12 个 + Learn 绑定 ~28 个 + Wiki 参考 ~12 个），复用率 **55%**，远超 40% 目标线。

---

## 7. 新增内容清单（平台缺口 + 内容缺口）

### 7.1 新建 Lab（平台要新建）

| 优先级 | Lab 名 | 用途 | 绑定 lesson |
|-------|-------|------|------------|
| P0 | `prompt-lab/user-story-generator` | AI 生成 User Story（需求→INVEST 格式）| L50 |
| P0 | `prompt-lab/prd-writer` | AI 辅助写 AI PRD（含指标与风险）| L74 |
| P0 | `prompt-lab/stakeholder-interview-sim` | 模拟 stakeholder 访谈，AI 扮演不同角色 | L63（新增 Lab step）|
| P1 | `prompt-lab/ai-cost-calculator` | 给一个产品场景估算 token 成本 | L92（新增 Lab step）|
| P1 | `prompt-lab/mcq-generator-for-pm` | 用 Prompt 生成产品 MCQ（学员既是学习者又是出题人）| P3 test |

### 7.2 新建 Learn 章节（平台要新建）

| 方向 | Slug | 标题 | 内容要点 |
|-----|------|-----|---------|
| `ai-pm` | `ai-evaluation-framework` | AI 产品评估体系 | accuracy / latency / hallucination / cost / user trust score，A/B 实验设计 |
| `ai-pm` | `ai-cost-management` | AI 成本管理入门 | token 成本、推理 vs 训练、RAG 向量库成本、prompt caching 策略 |
| `ai-pm` | `mcp-tool-calling-intro` | MCP & Tool Calling 入门（给 PM 看的）| 不讲代码只讲架构 + 产品影响 |
| `ai-pm` | `ai-data-compliance` | AI 数据合规边界 | GDPR / Australia APP / PII 识别，训练数据 vs 上下文数据 |
| `ai-pm` | `context-engineering-for-pm` | Context Engineering for PM | prompt → context → workflow 演进 |
| `ai-pm` | `ai-competitor-analysis` | AI 竞品分析框架 | 对比 OpenAI / Claude / Gemini / 国产 |

这 6 个章节直接对应 §3 的 P3 问题 9（AI 时代 BA 缺口），分配到 P1-P5 各 phase。

### 7.3 新写 description（本地 curriculum 填）

对 25 节空描述 lesson 分批补：

- **Batch 1 - P0 blocker (10 lessons)**：L22 / L23 / L28 求职三件套，L43 如何做需求分析，L64 / L68 / L69 / L70 PRD 四件套，L76 Prompt 工程原理，L53 AI 开发流程
- **Batch 2 - Lab steps (7 lessons)**：L38 / L50 / L74 / L78 / L84 / L89 所有 Lab lesson 的详细 step 序列
- **Batch 3 - 碎片 (8 lessons)**：L09 / L25 / L26 / L27 / L39 / L71 / L75 / L79 / L90 求职经验分享 + Quiz 题目

### 7.4 新写 learningMaterial（核心 20 节）

优先级顺序：
1. P0-P1 的 BA 核心知识 lesson（L31 BA 工作流 / L32 什么是 BA / L33-L36 BA 成长四阶段 / L40-L42 需求分析三连 / L44-L48 User Story 五连）
2. AI 新增内容的 learningMaterial（绑定 ai-pm 的 6 个新章节后，本地 lesson 再写 2000-4000 字对应解读）

### 7.5 FAQ（10 条，聚焦转化）

1. "我是文科背景 / 非 CS 专业，能学 AI 产品经理吗？"
2. "这个和老的 BA 训练营 (¥3500) 有什么区别？凭什么涨到 ¥4800？"
3. "学完能直接找到 AI PM 工作吗？有没有 offer 案例？"
4. "P3 实习项目是真实公司的项目吗？"
5. "要写代码吗？不会写代码能跟上 L80-L94 的 AI 原型课吗？"
6. "和 AI Engineer bootcamp 选哪个？"
7. "毕业证有用吗？招聘方认可吗？"
8. "如果跟不上节奏可以回看吗？周末安排怎么样？"
9. "一个月多一点学完 94 节课，学完真的能掌握吗？"
10. "往期学员现在在哪工作？"

### 7.6 bootcampSections（营销 section，6 个）

1. **"为什么是 AI 产品经理？"** — 市场数据 + 澳洲 AI PM 薪资区间 + 岗位增长
2. **"传统 BA vs AI PM：技能栈对比"** — 表格对照
3. **"学完你能做什么"** — 5 个真实产出物（PRD 样本 / Prompt 库 / 自动化 demo / RAG 原型 / portfolio）
4. **"课程亮点：真实 P3 项目实习"** — 和全栈班 / DevOps 班协作
5. **"为谁准备"** — 适合 / 不适合人群（避免踩坑招错学员）
6. **"价格说明 + 早鸟政策"** — ¥4800 vs ¥4400 的解释

### 7.7 新建 Wiki（平台要新建）

`wiki/` 目录下新增，每条 wiki 产出 2000-4000 字 + 图示 + 代码示例。

**Must Have（v2 blocker）— 4 个 AI 时代基础 wiki：**

| 优先级 | Slug | 话题 | 对应 lesson |
|-------|------|-----|------------|
| P0 | `wiki/ai-context-engineering` | Context Engineering 入门（从 Prompt Eng 到 Context Eng 的演进）| L77 多轮对话与记忆、L78 Prompt A/B |
| P0 | `wiki/mcp-protocol-for-pm` | MCP (Model Context Protocol) 给 PM 看的架构图 | L86 Agent 工作流设计、L94 Agent 落地 |
| P0 | `wiki/llm-token-economics` | Token 经济学：推理成本 / prompt caching / 向量库成本 | L87 AI 自动化产品设计、L92 Agent 思维 |
| P0 | `wiki/ai-product-evaluation` | AI 产品评估体系：accuracy / latency / hallucination / cost metrics | L83 四大 AI 模式、新增毕业测试 |

**Should Have — 8 个进阶 wiki：**

| Slug | 话题 |
|------|-----|
| `wiki/llm-provider-comparison` | OpenAI / Claude / Gemini / Qwen / DeepSeek 对比，给 PM 决策用 |
| `wiki/ai-data-compliance-au` | 澳洲 Privacy Act / APP + GDPR 基础，PII 识别 |
| `wiki/tool-calling-patterns` | Function Calling / Tool Use 模式 |
| `wiki/multi-agent-orchestration` | Agent 编排模式（sequential / parallel / hierarchical）|
| `wiki/ai-ab-testing` | AI feature 的 A/B 实验设计 |
| `wiki/finetune-vs-rag-decision` | 决策树：什么情况用 FT 什么情况用 RAG |
| `wiki/vector-db-selection` | Pinecone / Weaviate / Chroma / pgvector 对比 |
| `wiki/prompt-caching-strategies` | Anthropic / OpenAI prompt caching 机制与成本影响 |

**Must Have — 扩写已有 empty wiki：**

- `wiki/business-analyst` 当前 empty — 扩写成 BA 职业全景：BA 的 Delivery / Discovery / Initiation 三阶段 + BA vs PM vs PO 对比 + 澳洲 BA 薪资区间 + 晋升路径
- `wiki/ai-engineer` 当前 empty — 扩写成 AI Engineer 技术栈概览（给 BA 学员看的"对话语言表"，了解工程侧在说什么）
- `wiki/prompt-engineering` 当前只有 3 章基础 — 加进阶 5 章（chain-of-thought、ReAct、self-consistency、prompt caching、context window management）

### 7.8 Cheat Sheet — 已存在 + 新建

**基础设施**：
- 实体文件：`jr-academy-web-zh/public/cheat-sheets/{slug}.md`（213 张 md 文件）
- 配置索引：`jr-academy-web-zh/src/constants/cheatSheets.ts`（123 张进了索引 + category + tags）
- 路由：`src/app/[locale]/cheat-sheets/[slug]/page.tsx` → 读 public md 文件渲染
- 分类：`ai / programming / frontend / backend / database / devops / tools / linux / shortcuts / data-science / other`

**7.8.1 已存在可直接引用到 BA lesson（14 张）**

| Cheat Sheet | Slug | 文件行数 | 绑定到哪些 lesson |
|-------------|------|---------|-----------------|
| ChatGPT | `chatgpt` | 1017 | L06 工具配置、L76-79 Prompt 工程、L84 文档问答 |
| Claude | `claude` | 689 | L06、L76-79、L77 多轮对话 |
| Gemini | `gemini` | 589 | L05 AI 典型应用、L76 Prompt 对比 |
| Cursor | `cursor` | — | L80-81 AI Programming 入门 |
| GitHub Copilot | `github-copilot` | — | L80-81 |
| v0.dev | `v0-dev` | — | L84 搭建文档问答助手 |
| Perplexity | `perplexity` | — | L05、L63 Stakeholder Interview（AI 研究辅助）|
| Notion AI | `notion-ai` | 559 | L06、L89 Notion→AI→Jira |
| Notion | `notion` | 207 | L06、L89 |
| Figma | `figma` | — | L69 PRD-Figma-Jira 联动 |
| Jira | `jira` | 85 | L69、L89、P3 项目管理 |
| Markdown | `markdown` | — | L44-L48 User Story 写法 |
| Midjourney | `midjourney` | — | L04 AI 核心概念（multimodal 演示）|
| Stable Diffusion | `stable-diffusion` | — | L04（同上）|

这 14 张在 v2 里不需要新建，只要在 lesson 的 `learningMaterial` 或 description 里以 `/cheat-sheets/{slug}` 链接引用即可。

**7.8.2 新建 Must Have — 6 张 BA/PM 流程速查卡（平台真缺口）**

流程类 cheat sheet 是 0，这是最值得补的类别：

| 优先级 | Slug | 话题 | 内容要点 |
|-------|------|-----|---------|
| P0 | `user-story-invest` | User Story INVEST 检查卡 | Independent / Negotiable / Valuable / Estimable / Small / Testable，每条 good/bad 示例 |
| P0 | `prd-template-ai` | AI 产品 PRD 模板 | 功能 / 流程 / 指标 / 风险 / 成本 / 数据 / 伦理 7 段结构，配一份真实 AI feature PRD 示例 |
| P0 | `stakeholder-matrix` | Stakeholder Power/Interest 2x2 | 4 象限 + 沟通频率表 + 4 类角色的话术模板 |
| P0 | `pm-prompt-library` | PM 日常 Prompt 库 | 20 个场景：需求分析 / 竞品调研 / 用户访谈摘要 / PRD 初稿 / 数据解读 / 用户故事生成 / 会议纪要 / PRFAQ 生成 等 |
| P0 | `ai-cost-estimator` | AI 成本估算卡 | token 估算公式 + 常见 feature 月成本对照表（客服 bot / RAG 搜索 / 文档摘要 / code assistant）|
| P0 | `ba-interview-au` | 澳洲 BA 面试 30 题 | 按 Initiation / Discovery / Delivery / Behavioural 分 4 组，每题 STAR 答案结构 |

**7.8.3 新建 Should Have — 4 张进阶速查卡**

- `bpmn-notation` — BPMN 2.0 常用符号（Task / Gateway / Event / Pool / Lane）+ 一份简单 purchase 流程示例
- `agile-ceremonies` — Stand-up / Planning / Retro / Showcase 的时长 / 议程 / 主持人 / 产出物
- `jql-queries` — Jira JQL 常用 20 条（按 sprint / by assignee / blocked / stale）
- `ai-data-pii-checklist` — 哪些字段是 PII / 哪些能进 prompt / 哪些要脱敏 / 哪些不能存

**7.8.4 分类调整 + orphan 清理**

- 需要新增分类 `product-management`（现在 11 个分类里没有 PM 方向），把新建的 10 张流程速查卡归入这个分类，路由 `/cheat-sheets?category=product-management` 能单独筛选
- `public/cheat-sheets/` 里 213 张 md 但配置索引只收了 123 张，有 **90 张 orphan**。W1 要扫一遍：有价值的挂进 index，没价值的删掉。特别是 `ai.md`（1332 行）和 `chatgpt.md`（1017 行）这两张大文件，确认它们是新版本备份还是该归进 index

**7.8.5 Schema 注意：outline.json 不支持 per-lesson cheat sheet binding**

当前 `outline.json` lesson 只有 `labs[]` 和 `learns[]` 两种 binding。Cheat sheet 引用有 3 种方案：

- **方案 A（v2 采用）**：在 lesson 的 `learningMaterial` HTML 里写 `<a href="/cheat-sheets/chatgpt">ChatGPT 速查卡</a>`，学员点 "学习资料" tab 能看到。简单，不改 schema。
- **方案 B（v3 考虑）**：扩展 `outline.json` 加 `cheatSheets[]` 字段 + 后端 Lesson schema 加对应 `cheatSheetSlugs[]`，同步时写入。结构化但工作量大。
- **方案 C**：在 course 级别（不是 lesson 级别）加一个 "推荐速查卡" section 到 `bootcampSections[]`，课程主页集中展示。营销效果好。

**v2 建议做 A + C 组合**：lesson 里用 learningMaterial 链接（A），bootcamp 主页加一个"附赠 20 张速查卡"的 bootcampSection（C）。

### 7.9 新建 Roadmap（Must Have 1 个）

| Slug | 标题 | 节点结构 |
|------|-----|---------|
| `ai-product-manager-roadmap` | AI 产品经理成长路径 | **5 层**：①AI 小白 → ②AI 工具使用者 → ③AI 功能设计师 → ④AI 产品经理 → ⑤AI 产品总监。每层有技能清单 + 推荐 bootcamp/wiki/cheat-sheet 引用 + 典型薪资区间（澳洲市场）|

Roadmap 的每个节点链接到本次新建/已有的 lesson + wiki + cheat sheet，形成闭环。BA bootcamp 毕业学员打开这个 roadmap 能看到自己处于哪一层、下一步该学什么。

### 7.10 新建 / 扩展 Interview Question Bank（Must Have 3 个）

当前 344 个 question bank 里只有 `agile` 和 `agile-testing` 沾边。新增：

| Slug | 话题 | 题数目标 |
|------|-----|---------|
| `interview-questions/product-manager` | PM 通用题库：产品思维 / 用户调研 / 指标设计 / 优先级 | 50 题 |
| `interview-questions/requirements-analysis` | BA 需求分析：User Story / 需求拆解 / PRD 评审 | 40 题 |
| `interview-questions/stakeholder-management` | 利益相关者管理：冲突处理 / 沟通技巧 / 谈判 | 30 题 |
| `interview-questions/ai-product-manager` **新增** | AI PM 专属：LLM 选型 / RAG vs FT / AI 成本 / 评估 / 伦理 | 40 题 |

每道题要有：中文题目 + 英文版本 + 参考答案结构（STAR 或技术点） + 对应 bootcamp lesson 引用。

### 7.11 Company Intelligence 扩展（澳洲 AI PM 招聘市场覆盖）

BA 学员毕业主要在澳洲找工作。平台当前 company intelligence 覆盖不均，以下补齐优先级：

**P0 Missing**：
- **Airwallex** — 平台 0 覆盖。澳洲最大 Fintech 独角兽之一，重度招 AI PM。需要新建 company profile + aiIntelligence + interview questions。

**P0 Ghost**：
- **Service NSW** — 当前 `showInInterviewsPage=false`、空 description、0 interviews。政府数字化项目大量用 BA/PM。需要填充 description + aiIntelligence + 至少 5 条面经。

**P1 扩展**（这 10 家已有 profile 但缺 AI PM 信号 + 面经）：
- CBA / Westpac / ANZ / NAB（四大行，都在搞 AI 转型）
- Telstra / Optus（电信 AI）
- REA / Seek（招聘 + 房产平台，大量 PM 岗位）
- Canva / Atlassian 已经 rich，作为标杆参考

每家补：aiIntelligence 字段（标注哪些部门用 AI / 招 AI PM 的关键词 / 2024-2025 AI 战略引用）+ 至少 5 条 BA/PM 面经。

### 7.12 Video 清理与补录（处理幽灵引用 + 补空）

**P0 清理**：
- **L26 IS 专业毕业生回国求职经验分享** — 找不到对应 video entry，两个选择：(a) 在 `skills-data/videos/` 找到原 video 补上 slug（需要 operations team 确认是否录过）；(b) 从 outline 里删除这节 lesson 改成 Wiki 文章链接
- **L27 BA 优秀学员 Eric 经验分享** — 同上处理

**P0 补录**（Must Have）：
- **L22 BA 面试指导** — 空，需要录制 30-60min video + 上架 video entry
- **L23 BA 如何写简历** — 空，需要录制或 repurpose 现有的 `ba-business-analyst-user-story-ba`（Thoughtworks Xin 的 67min）作为 fallback

**P1 Should Have**（补全 AI PM 时代内容）：
- `video/ai-pm-day-in-life` — 一个真实 AI PM 一天的工作流
- `video/prd-walkthrough-ai-feature` — 拿一个真实 AI feature PRD 做演示
- `video/ai-product-ab-testing-demo` — AI feature A/B 实验全流程

### 7.13 Free Resources 策划（Nice to Have）

`/free-resources` 当前对 BA/PM 0 覆盖。建议策划 6 项免费资源引流：

1. 免费 PRD 模板（Notion template）
2. 免费 PM Prompt 库（Notion 数据库）
3. 免费 AI 成本计算器（Google Sheets）
4. 免费 BPMN 建模工具清单（draw.io / Lucidchart / Excalidraw）
5. 免费 LLM 对比评测报告（2025 Q4 更新）
6. 免费 BA 面试 30 题答案集（PDF）

这 6 项作为引流 + SEO 内容，不是 bootcamp 学员专属。

---

## 8. Step 设计规范（交付约束）

每节 lesson 至少 1 个 step，具体类型按下表：

| Lesson 类型 | 必须的 step 序列 |
|------------|-----------------|
| Video (概念讲解) | `CONCEPT`（核心知识点）+ `MCQ`（3-5 题理解检查） |
| Lab | `CONCEPT`（原理）+ `LAB`（labSlug 必填）+ `MCQ`（验证） |
| Workshop | `CONCEPT` + `SCENARIO`（实战场景）+ `PROJECT`（交付物定义）|
| Quiz | 沿用现有 quiz 题库，不拆 step |
| Information | `CONCEPT`（知识点）即可 |
| Tutorial (1v1 辅导) | `CONCEPT`（准备清单）+ `PROJECT`（1v1 交付物）|
| Lesson | 视内容定 — 同 Video 或 Workshop |

**step 字段要求**（outline.json 里）：

```json
{
  "order": 1,
  "type": "LAB",
  "title": "用 Few-shot 生成 3 条 User Story",
  "description": "给定一个业务场景（例如：外卖 App 的订单取消功能），用 few-shot prompt 让 AI 产出 3 条符合 INVEST 的 User Story。交付物：3 条 User Story + 你的 prompt。",
  "duration": 20,
  "labSlug": "prompt-lab/user-story-generator"
}
```

**description 质量要求**（对照 CLAUDE.md 的 anti-template rule）：
- 不许 "在 AI 时代，BA 需要..." 开头
- 每段必须有具体动词 / 具体命令 / 具体交付物 / 具体场景
- 写不出来就留空而不是填废话（但本次目标是 0 空描述）

---

## 9. 交付 Roadmap（按周）

假设 2026-04-14 开工（周一），下一期开课前要交付完毕。

| 周 | 范围 | Owner |
|----|------|-------|
| W1 | **outline 结构重构 + P0 blocker 补齐** — 6 phases 拆分、program metadata 修正、25 节空 description 全写完、P0 10 节 learningMaterial | Claude AI + Lightman review |
| W2 | **资源绑定** — 52 个 lesson 的 labs/learns 字段全部填入，本地跑 diff 确认无 prod 冲突 | Claude AI |
| W3 | **新建 Lab + Wiki 核心 4 篇** — 5 个新 Lab（§7.1）+ 4 篇 Must Have Wiki（§7.7 的 Context Eng / MCP / Token 经济 / AI 评估）| Claude AI + Prompt Lab reviewer |
| W4 | **新建 Learn 章节 + Cheat Sheet 6 张 + Roadmap 1 个** — 6 个 ai-pm 新章节（§7.2）+ 6 张 Must Have Cheat Sheet（§7.8）+ `ai-product-manager-roadmap`（§7.9）| Claude AI |
| W5 | **learningMaterial + FAQ + bootcampSections + Interview Question bank 3 个 + Video 清理** | Claude AI |
| W6 | **Company Intelligence 扩展 + Sync 到 prod** — 补 Airwallex + Service NSW + 四大行 AI 信号；跑 `/bootcamp-sync` 全量同步；Skills Data Manager 里检查 diff；Production 测试第 4 期课程主页 | Claude AI + Lightman |
| W7 | **学员侧验证 + Should Have 补齐** — 现有 2 个学员 walkthrough；补 §7.7 的 8 个进阶 Wiki + `wiki/business-analyst` 扩写 | Lightman |

**里程碑 M1**（W2 末）：outline.json 里所有 Must Have 字段齐整，6 phases 可在 Skills Data Manager 里可视化审查。
**里程碑 M2**（W5 末）：所有平台侧内容（Lab / Learn / Wiki）准备完毕，准备同步。
**里程碑 M3**（W7 末）：prod BA 第 4 期 ready for launch。

---

## 10. 验收标准（Done Criteria）

### 自动化检查（脚本可跑）

```bash
# 跑这个脚本，全 PASS = 验收通过
python3 curriculum/business-analyst/_verify.py
```

检查项：
- [ ] `totalLessons == 94`
- [ ] `phases.length == 6`
- [ ] 所有 lesson 有非空 `description`
- [ ] 所有 Lab 类型 lesson 有非空 `steps` 且至少 1 个 step 有 `labSlug`
- [ ] `labs.length + learns.length >= 52`（合计所有 lesson 的 labs + learns 数组长度）
- [ ] `faqs.length >= 10`
- [ ] `bootcampSections.length >= 6`
- [ ] `program.programPhase == 4`
- [ ] `program.cohortStatus == 'RECRUITING'`
- [ ] 每个 phase 都有 `test.questions >= 5`
- [ ] **跨资源 Must Have 全到位**：
  - [ ] 4 篇新 Wiki 存在（`ai-context-engineering` / `mcp-protocol-for-pm` / `llm-token-economics` / `ai-product-evaluation`）
  - [ ] 6 张新 Cheat Sheet md 文件存在于 `jr-academy-web-zh/public/cheat-sheets/`（`user-story-invest` / `prd-template-ai` / `stakeholder-matrix` / `pm-prompt-library` / `ai-cost-estimator` / `ba-interview-au`）
  - [ ] 6 张新 Cheat Sheet 都在 `src/constants/cheatSheets.ts` 的 index 里注册（包含 slug / title / category / tags）
  - [ ] `cheatSheets.ts` 的 `categoryConfig` 里加入 `product-management` 分类
  - [ ] 14 张已有 Cheat Sheet 都至少有 1 个 BA lesson 通过 learningMaterial 引用到
  - [ ] `ai-product-manager-roadmap` 存在且 5 层节点齐全
  - [ ] 3 个新 Interview Question bank 存在（`product-manager` / `requirements-analysis` / `stakeholder-management`）
  - [ ] `wiki/business-analyst` 不是 empty（`chapters.length > 0` 且总字数 >= 2000）
  - [ ] Airwallex 和 Service NSW 的 company intelligence 不为空
  - [ ] L26/L27 的 video slug 要么实际存在要么已从 outline 删除（不允许幽灵引用）

### 人工验收（lightman review）

- [ ] 随机抽 10 节 lesson，description 没有 AI 味模版化内容
- [ ] 90K 字符的 L29 拆成了 3 节合理大小的 lesson
- [ ] FAQ 的答案是人写的、有立场、能说服人，不是空话
- [ ] bootcampSections 在 prod 页面渲染正常
- [ ] 新建的 5 个 Lab 本地能跑通全流程

### 学员侧验收

- [ ] 现有 2 个学员（2025-12 这期）试走 P0+P1，反馈"路径清晰 / 能看懂阶段目标 / Lab 能做出东西"
- [ ] 第 4 期（2026-04-14 开课）招到 >= 5 人即证明营销 section 起作用

---

## 11. 风险与 Out of Scope

### 风险

1. **历史数据污染** — prod 里 3 期都是 `programPhase=1`，不敢轻易写 `programPhase=4`，会不会被后端 validation 拒绝？**Mitigation**: 在 `/bootcamp-sync` 之前先在 Skills Data Manager 里用 dry-run 看 diff，确认字段被后端接受。
2. **L29 拆分破坏学员进度** — 现有 2 个学员可能已经在学 L29（90K 字符的那节），拆成 3 节后他们的进度记录会丢。**Mitigation**: 询问后端 team 能不能把拆出去的新 lesson 插到 L30 后面而不是替换 L29，保持 L29 的 \_id 不变。
3. **新 Learn 章节内容写不完** — 6 个新 ai-pm 章节，每个需要 2000-4000 字 + 图示，一个人写不动。**Mitigation**: W4 可以再拆 skill 调研+草稿并行。
4. **Agile/Scrum wiki 缺口** — 平台完全没有 Agile 内容，不是 BA 课程该造的。**Decision**: 本次课程 skip 新建 Agile wiki，用外链到 scrum.org 官方文档，等以后全栈班或 DevOps 班推动。

### Out of Scope（这一版不做）

- 英文版 `title_en` / `description_en` — 进 v3
- 完整 learningMaterial 填满 94 节 — v2 只做 20 节核心
- 毕业证书模板设计 — 复用现有 ai-essentials 模板
- P3 Kanban Task 拆解的全量补 — v2 只补 L08/L19 两节 workshop lesson 作为示范
- Marketing 页面（curriculum.html / jd-mapping.html / learning-plan.html 等）— 本次先补 outline.json 的营销字段（faqs + bootcampSections），静态 HTML 页面留 v3

---

## 12. 附录：数据支撑

### A. 94 节 lesson 当前描述字数分布

```
超长（>10000 字符）: L29 (90,673), L37 (11,208) — 2 节，需要拆或切
正常（500-5000 字符）: 67 节
过短（1-500 字符）: 0 节
空（0 字符）: 25 节
```

### B. Quiz 自然周边界

```
L07  AI 基础知识 - Week 0
L14  进入 P3 项目之前的 QUIZ
L39  产品流程与 BA 职责 - Week 1
L51  Agile - Week 2
L62  User Story & Backlog - Week 2
L71  Requirements and Stakeholder Management - Week 3
L75  PRD 与文档规范测验 - Week 4
L79  Prompt 工程测验 - Week 4
L88  知识库问答与 RAG 概念测验 - Week 5
L90  自动化系统与 Agent 决策思维测验 - Week 6
```

### C. 3 期 program 对比

| 维度 | 第 1 期 (2021-10) | 第 2 期 (2025-06) | **第 4 期 (2025-12)** |
|------|------------------|------------------|---------------------|
| 名称 | Business Analyst 产品经理项目实习 | Business Analyst 产品经理+实习 | **AI 产品经理（BA）训练营+实习** |
| 学费 | ¥3630 | ¥3500 | **¥4800（promo ¥4400）** |
| 周期 | 2021-10 ~ 2030-10 | 2025-06 ~ 2025-09 | **2025-12 ~ 2026-01** |
| 学员数 | 0 | 0 | **2** |
| AI 内容占比 | 0% | ~10% | **~40%（但内容不完整）** |

v2 PRD 的本质是把"~40% 内容不完整"做成"~45% AI 内容完整 + 55% 传统 BA 内容也整合了 AI 工具"。

### D. Platform 资源复用率基准

- ai-essentials-bootcamp（第 1 期 RECRUITING）: 复用率 ~50%
- ai-engineer-bootcamp（第 5 期）: 复用率 ~65%
- vibe-coding-bootcamp: 复用率 ~45%
- **business-analyst (v1 current)**: 复用率 **0%**
- **business-analyst (v2 target)**: **55%**

---

## 13. 下一步动作

1. **Lightman 审这个 PRD**，确认要不要开工、要不要调整范围
2. 确认后用 `curriculum/business-analyst/TODO.md` 把 §9 Roadmap 拆成周粒度任务
3. **W1 开工第一步**：先改 phase 结构（94 节 → 6 phases），最小改动，可以马上在 http://localhost:5188/bootcamp/business-analyst 验证效果
4. 后续每完成一个 batch 在 `curriculum/business-analyst/CHANGELOG.md` 记录进度

---

**PRD 作者备注**：本 PRD 基于当前 `curriculum/business-analyst/public/outline.json` 的 snapshot（从 `skills-data/training-outlines/business-analyst.json` 自动转换而来）。如果 prod 侧 BA syllabus 在本 PRD 写完后有变动，需要重新跑 `POST /api/bootcamps/business-analyst/generate-from-course` 拉最新数据再比对 diff。
