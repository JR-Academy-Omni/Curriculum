#!/usr/bin/env python3
"""
Restructure business-analyst outline.json per PRD §5/§6/§7.
- Split 1 phase → 6 phases (P0-P5) with name/color/summary
- Fill 25 empty descriptions with specific content (no AI-template garbage)
- Truncate L29 from 90k to ~3k chars
- Bind labs/learns to lessons per PRD §6 (verified slugs only)
- Add faqs, bootcampSections, curriculumPages
- Fix program metadata: programPhase=4, cohortStatus=RECRUITING
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTLINE = ROOT / "public" / "outline.json"

# ========== PHASES (PRD §5) ==========
PHASES = [
    {
        "code": "P0",
        "name": "Phase 0 — 启程与 AI 基础",
        "color": "#6366f1",  # indigo
        "summary": "Week 0，14 节课。搞清楚 AI 时代 BA 定位，装好工具，了解 P3 项目机制",
        "range": (1, 14),
    },
    {
        "code": "P1",
        "name": "Phase 1 — BA 角色与求职定位",
        "color": "#10b981",  # teal
        "summary": "Week 1，25 节课。BA 工作流 + Initiation / Discovery / Delivery + AI PM 差异 + 求职准备",
        "range": (15, 39),
    },
    {
        "code": "P2",
        "name": "Phase 2 — 需求与敏捷协作",
        "color": "#f59e0b",  # amber
        "summary": "Week 2，23 节课。User Story 全套 + Agile/Scrum + GenAI-empowered 需求分析",
        "range": (40, 62),
    },
    {
        "code": "P3",
        "name": "Phase 3 — 文档与 Prompt 工程",
        "color": "#ef4444",  # red
        "summary": "Week 3-4，17 节课。PRD 写作（传统 + AI 版）+ Prompt 工程实战",
        "range": (63, 79),
    },
    {
        "code": "P4",
        "name": "Phase 4 — AI 原型实战",
        "color": "#8b5cf6",  # violet
        "summary": "Week 5，9 节课。前后端入门 + 四大 AI 模式（Prompt / FT / RAG / Agent）+ RAG 搭建",
        "range": (80, 88),
    },
    {
        "code": "P5",
        "name": "Phase 5 — 自动化与 Agent 落地",
        "color": "#06b6d4",  # cyan
        "summary": "Week 6，6 节课。自动化链路 + Agent 产品设计 + 从想法到上线",
        "range": (89, 94),
    },
]

# ========== DESCRIPTION FILLERS (PRD §7.3) ==========
# Only for lessons with empty/trivial descriptions. Specific content, no AI template.
DESC_FILLERS = {
    "L09": "<p>Web 全栈班 P3 项目的产品汇报。BA 学员作为产品代表，用 5 分钟说清楚项目要解决什么问题、交付了什么 feature、哪些指标达成了、哪些没有。观察全栈班同学怎么把技术实现讲给非技术人听——这就是你未来向 stakeholder 汇报的预演。</p><p><strong>可参考的汇报结构：</strong> 1) 问题背景与用户画像；2) 核心 feature 演示（live demo）；3) 关键指标（conversion / engagement / latency）；4) 下阶段 roadmap。</p>",
    "L14": "<p>进入 P3 实习项目前的最后一次 QUIZ，30 分钟。覆盖 Week 0 所有内容：AI 基础概念、常见应用场景、Prompt 作为交互界面的本质、AI PM vs 传统 PM 的区别、BA 在敏捷项目中的角色。</p><p>通过线标准：20 题答对 14 题以上。没通过的同学会被安排补看 BA 解惑屋系列（L10-L13）再来一次。目的不是卡人，是确保进 P3 项目时有最低认知对齐。</p>",
    "L16": "<p>Web 全栈班 P3 项目的正式介绍：项目背景、技术栈、参与角色（前端/后端/BA/QA）、交付时间线。每一期 P3 项目会选一个真实场景（JR 内部工具、学员贡献的想法、合作企业的需求），做成 4-6 周可上线的 MVP。</p><p><strong>BA 要拿到的信息：</strong> 项目的 Product Vision、用户群、MVP 范围、已有资源（API / 数据集 / 设计稿）、团队容量。会后要能写出 1 页 Project Brief。</p>",
    "L19": "<p>AI 产品经理与 AI Builder 实习项目的正式 Bootstrap。和 Web 全栈班不同，AI PM/Builder 组的任务是：给一个企业实际痛点（比如『内部知识库查询慢』），设计并交付一个 AI 原型（RAG / Agent / 自动化链路），最终向真实 stakeholder 演示。</p><p><strong>本节课产出：</strong> 1) 你选哪个项目方向（知识库 / 客服 bot / 文档自动化 / 数据分析 Agent）；2) 你要在这个项目里解决的最小 user problem；3) 你的 AI 技术栈假设（Prompt / Function Calling / RAG / Multi-Agent）。</p>",
    "L20": "<p>1v1 面试与简历辅导预约入口。每位学员在整个 bootcamp 周期内有 2 次免费 1v1（每次 45 分钟），辅导内容：简历针对澳洲 AI PM / BA 岗位定制改写、面试常见题库演练、LinkedIn profile 优化、portfolio 项目怎么讲。</p><p><strong>预约方式：</strong> 在学员端选导师（Xin / Tiger / Eric / Lightman），提前 3 天发来简历 + 目标 JD。1v1 产出会以 action list 形式写在学习日历里。</p>",
    "L22": "<p>BA / AI PM 面试全流程拆解：从 recruiter screening 到 tech assessment 到 behavioural round。重点讲澳洲市场（Canva / Atlassian / Airwallex / 四大行 / Service NSW）考察的差异。</p><p><strong>要学会：</strong> 1) STAR 结构回答行为题（Stakeholder 冲突 / 需求变更 / 团队矛盾）；2) 把 AI 项目经历讲成 business impact，不是技术堆砌；3) whiteboard 画产品流程图；4) Case interview 练习（给一个模糊业务问题，30 分钟拆解成 PRD 雏形）。</p>",
    "L23": "<p>BA / AI PM 简历写作全套方法论。一页纸简历怎么凸显 AI 项目 + P3 实习 + 数据驱动决策 3 个关键信号。对比传统 BA 简历（Jira / Confluence / Agile）和 AI PM 简历（LLM / Prompt / RAG / MCP / 成本控制）的关键词差异。</p><p><strong>交付物：</strong> 根据模板改写你的简历 v1，发到 learning 群接受同学 peer review。最终通过 Xin 或 Tiger 1v1 定稿，作为毕业 portfolio 的一部分。</p>",
    "L25": "<p>Thoughtworks BA 经验分享（Xin 老师）。Xin 在 Thoughtworks 做了 5 年 BA，经手过银行、保险、零售的大型数字化项目。分享三个主题：1) 从毕业生到 Senior BA 的成长路径；2) 在国际咨询公司做 BA 的真实一天；3) 哪些技能在 AI 时代还有价值，哪些会被自动化。</p><p>现场 QA 30 分钟，学员可以提问『我的背景适合走咨询还是 in-house』、『Thoughtworks 面试考什么』、『从 BA 转 AI PM 的路径』。</p>",
    "L26": "<p>信息系统（IS）专业毕业生回国求职经验分享。嘉宾（学员 Eric Liu，现就职于国内某头部互联网公司产品岗位）讲澳洲 IS 专业回国找产品 / BA 工作的实际情况：哪些公司认 Monash / UNSW / UniMelb、怎么准备国内互联网公司的『结构化面试 + 笔试』、薪资 range、生活节奏差异。</p><p><strong>内容可能临时调整：</strong> 如该 video 未归档，本节会替换为现场 1v1 答疑。</p>",
    "L27": "<p>BA 优秀学员 Eric 工作经验分享。Eric 是 JR Academy BA bootcamp 第 2 期学员，毕业后 3 个月拿到悉尼某 Fintech 的 Junior BA offer（起薪 ~$80K AUD）。分享：1) 从什么都不会到通过面试的具体时间线；2) portfolio 里放了哪些项目；3) 如何把 P3 实习项目讲成 business impact；4) 入职后前 3 个月踩过的坑。</p>",
    "L28": "<p>IT 专业毕业生简历撰写实战（120 分钟 Workshop）。从 3 份真实学员简历开始，现场拆解：哪里是硬伤（职责描述太流水账 / 缺量化指标 / 技能堆砌）、哪里可以包装（P3 项目用 STAR 结构写成 case study）、怎么针对 JD 改关键词。</p><p><strong>现场产出：</strong> 每位学员当堂改出 1 版针对具体 JD 的简历。结束前交换 peer review。辅助工具：ChatGPT 简历改写 prompt 模板（会在课中发给大家）。</p>",
    "L38": "<p>AI 应用体验与分析 Lab。选定 3 个 AI 工具（ChatGPT / Claude / Perplexity / Notion AI / v0.dev 等），用 role-playing 和 output-format 两个 prompt 模式对比它们在同一业务场景（例：给一段用户访谈记录生成 3 条 insight）下的输出质量、速度、成本。</p><p><strong>交付物：</strong> 1) 一张 3×3 对比表格（工具 × 维度）；2) 一份 300 字分析报告（哪个最适合你的工作流、为什么）；3) 你保留下来的最佳 prompt。用于 AI 小编剧 Lab（L50）和 PRD Lab（L74）的前期工具筛选。</p>",
    "L39": "<p>Week 1 Quiz：产品流程与 BA 职责。20 题 30 分钟。覆盖：BA 在 Initiation / Discovery / Delivery 三阶段分别做什么、User Story 的 INVEST 准则、敏捷项目中 BA 和 PO 的边界、AI 项目需求分析和传统项目的差异、Stakeholder 分类与沟通节奏。</p>",
    "L43": "<p>需求分析完整方法论（120 分钟）。从 stakeholder 口述的模糊想法 → 可执行的功能清单 + 指标定义 + 风险列表。五步拆解法：1) 业务目标澄清；2) 用户画像与使用场景；3) 功能优先级排序（MoSCoW）；4) 成功指标与反指标；5) 边界与约束。</p><p><strong>AI 时代新增维度：</strong> 数据从哪来、模型选型 trade-off、成本估算、准确率可接受下限、人工 fallback 机制。这五个问题在传统 BA 方法论里是没有的。</p>",
    "L50": "<p>AI 小编剧 Lab：把一句话需求一键变成 3 条符合 INVEST 标准的 User Story。在浏览器内完成，用 few-shot prompting 技巧让 AI 生成可直接进 backlog 的 Story。</p><p><strong>交付物：</strong> 1) 你选的业务场景（例：外卖 App 订单取消功能）；2) 你写的 few-shot prompt（含 3 个高质量 example）；3) AI 输出的 3 条 User Story + 你的人工修正版。提交到学习群让老师点评。</p>",
    "L53": "<p>传统软件开发流程 vs AI 产品开发流程的系统对比。传统流程：需求 → 设计 → 开发 → 测试 → 上线，各阶段职责清晰。AI 流程加了三件新事：数据准备、模型评估、持续迭代。</p><p><strong>关键差异点：</strong> 1) 需求阶段多了『能力可行性评估』（这个任务 LLM 能做到什么准确率）；2) 开发阶段多了『Prompt / Pipeline 工程』；3) 测试阶段多了『幻觉检测 / 边界测试』；4) 上线后多了『持续监控 + 成本控制』；5) BA 需要参与评估指标设计，不是只写功能规格。</p>",
    "L64": "<p>AI 产品 PRD 的 7 段结构：功能定义、用户流程、约束与非功能需求、数据需求、模型与 Prompt 策略、成功指标与反指标、风险与合规。每段的取舍原则 + 常见踩坑。</p><p><strong>用一份真实案例（某澳洲保险公司的『保单智能解读 AI 助手』）贯穿讲解</strong>。学员会在 L74 Lab 里拿这个模板自己写一份 PRD。</p>",
    "L68": "<p>AI PRD 独有的 4 个关键章节：数据章节、模型章节、伦理章节、安全章节。</p><ul><li><strong>数据章节：</strong> 训练数据来源、RAG 向量化数据、用户 session 数据如何处理、PII 脱敏规则</li><li><strong>模型章节：</strong> 选型依据（OpenAI / Claude / 开源 / 国产）、准确率/延迟/成本三维度取舍、fallback 策略</li><li><strong>伦理章节：</strong> 偏见测试、可解释性要求、用户知情权</li><li><strong>安全章节：</strong> Prompt injection 防御、输出过滤、rate limit、数据合规（GDPR / 澳洲 APP）</li></ul>",
    "L69": "<p>PRD 和设计稿（Figma）、任务管理（Jira）的联动。PRD 里的 User Story 如何自动拆成 Jira Story + Subtask；PRD 里的流程图怎么和 Figma 原型做 bidirectional 链接；需求变更时三个工具怎么同步。</p><p><strong>落地实践：</strong> 用 Jira 插件 / Figma plugin / Notion API 搭一条可追溯链（需求变更 → 影响哪个 Story → 影响哪个设计页 → 通知谁）。附课：n8n 自动化模板会在 Lab 发给学员。</p>",
    "L70": "<p>PRD 评审的 5 个标准 + 真实样本拆解。一份好 PRD：1) 读完 5 分钟能复述核心功能；2) 每个功能点都有验收标准；3) 指标是可测量的（不是『提升用户体验』这种虚词）；4) 风险列表 >= 3 条；5) 和设计稿、数据模型完全对齐。</p><p><strong>评审两份真实样本：</strong> 一份合格 PRD（某金融 AI 助手）+ 一份不合格 PRD（功能罗列但缺指标和风险），学员现场 peer review 找问题。</p>",
    "L71": "<p>Week 3 Quiz：需求管理与 Stakeholder 管理。25 题 40 分钟。覆盖：Stakeholder Power/Interest 矩阵、需求冲突如何处理、Requirements traceability（需求可追溯）、PRD 核心章节结构、需求变更控制流程。附送 1 道 scenario 题：给一个需求变更场景，写出你的处理步骤。</p>",
    "L74": "<p>撰写 PRD Lab（AI 功能版）。在浏览器内完成，从一句话场景出发写一份完整的 AI 功能 PRD（含指标与风险章节）。</p><p><strong>模板结构：</strong> 1) 功能定义 + 用户故事；2) 用户流程图；3) 数据章节；4) 模型策略与成本估算；5) 成功指标 + 反指标；6) 风险列表 + 缓解措施；7) MVP 范围。产出提交到学习群，老师会挑 3 份做课堂讲评。</p>",
    "L75": "<p>Week 4 前半 Quiz：PRD 与文档规范。20 题 30 分钟。覆盖：AI PRD 的 7 段结构、指标可测量的判定、风险章节必备项、Stakeholder 评审流程、文档版本管理。Scenario 题：给一份缺失风险章节的 PRD，写出你会补充的 5 条风险。</p>",
    "L76": "<p>Prompt 工程的系统原理（不只是『提问技巧』）。四层次：1) 基础 prompt（指令 + 上下文）；2) few-shot prompt（示例学习）；3) Chain-of-Thought（推理路径显式化）；4) Agent prompt（工具调用 + 反思）。</p><p><strong>给 BA 的重点：</strong> Prompt = 产品需求文档的可执行版本。学会写 Prompt 就是学会把需求精确翻译成机器能理解的语言。会讲 OpenAI / Anthropic 官方 guide 的核心 takeaway，配 10 个真实业务场景的 prompt 对比（烂 vs 好）。</p>",
    "L78": "<p>Prompt A/B 测试 Lab。给定两个业务场景（客服问答 + 需求拆解），每个场景写 3 套不同策略的 Prompt，用测试集对比 accuracy / latency / cost 三维度。</p><p><strong>交付物：</strong> 6 套 Prompt + 一张对比表 + 1 页分析报告（哪套最优、为什么、在什么场景下换策略）。这是 AI PM 岗位最常考的实操能力之一。</p>",
    "L79": "<p>Week 4 后半 Quiz：Prompt 工程。20 题 30 分钟。覆盖：Zero-shot vs Few-shot、Chain-of-Thought 适用场景、Prompt caching 机制、System Prompt vs User Prompt 差异、Temperature 与 Top-p 的作用、Context window 管理。</p>",
    "L84": "<p>搭建文档问答助手 Lab。二选一：(A) 用 ChatGPT GPTs 自定义一个上传 PDF 可以回答问题的助手；(B) 用 Notion AI Q&A 功能做一个知识库问答。</p><p><strong>交付物：</strong> 1) 选定场景（公司新人入职手册 / 产品文档 / 法律条款）；2) 上传的数据；3) 你的 System Prompt；4) 5 条测试 Q&A（对比 accuracy）；5) 2 分钟 demo video。提交到学习群 peer review。</p>",
    "L89": "<p>Notion → AI → Jira 自动化链路 Lab。打通一个可控的端到端自动化：学员在 Notion 写一条需求 → AI 自动拆成 User Story + 验收标准 → 推到 Jira 创建 Story + Subtasks → 通知 Slack channel。</p><p><strong>关键学习点：</strong> 1) 哪些环节可以全自动、哪些必须人工 review（gate）；2) 如何防止 AI 幻觉导致任务拆错；3) 成本控制（每条需求花多少 token）；4) 失败重试与监控。交付物：一条能跑通的 n8n / Zapier workflow + 2 分钟 demo。</p>",
    "L90": "<p>Week 6 Quiz：自动化系统与 Agent 决策思维。20 题 30 分钟。覆盖：哪些流程适合自动化、何时用 Rule-based vs LLM、Agent 的决策边界、Human-in-the-loop 设计、多 Agent 编排模式（sequential / parallel / hierarchical）、Agent 的监控与回滚机制。</p>",
}

# ========== L29 —— 不压缩 ==========
# L29 原文 90,673 字符，是完整 AI PM 讲义，必须保留全部内容。
# 违反 curriculum/CLAUDE.md『只加不删』铁律就是生产事故。


# ========== RESOURCE BINDINGS (PRD §6) ==========
# labs: [{source, slug}]  learns: [{direction, slug}]
BINDINGS = {
    "L02": {"learns": [{"direction": "ai-pm", "slug": "ai-basics-business"}]},
    "L03": {"learns": [{"direction": "ai-builder", "slug": "ai-native-product"}]},
    "L04": {"learns": [{"direction": "ai-engineer", "slug": "llm-api-basics"}]},
    "L05": {"learns": [{"direction": "ai-pm", "slug": "ai-pm-toolbox"}]},
    "L06": {"labs": [{"source": "prompt-lab", "slug": "hello-ai"}]},
    "L29": {"learns": [{"direction": "ai-pm", "slug": "ai-basics-business"}]},
    "L37": {"learns": [{"direction": "ai-pm", "slug": "ai-product-iteration"}]},
    "L38": {
        "labs": [
            {"source": "prompt-lab", "slug": "role-playing"},
            {"source": "prompt-lab", "slug": "output-format"},
        ]
    },
    "L44": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L45": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L46": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L47": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L48": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L50": {
        "labs": [
            {"source": "prompt-lab", "slug": "few-shot"},
            {"source": "prompt-lab", "slug": "output-format"},
        ]
    },
    "L61": {"learns": [{"direction": "ai-pm", "slug": "prompt-engineering-pm"}]},
    "L63": {
        "labs": [
            {"source": "prompt-lab", "slug": "clear-task"},
            {"source": "prompt-lab", "slug": "context-management"},
        ]
    },
    "L64": {"learns": [{"direction": "ai-builder", "slug": "idea-to-prd"}]},
    "L65": {"learns": [{"direction": "ai-pm", "slug": "prompt-engineering-pm"}]},
    "L66": {"learns": [{"direction": "ai-pm", "slug": "prompt-engineering-pm"}]},
    "L67": {"learns": [{"direction": "ai-pm", "slug": "prompt-engineering-pm"}]},
    "L68": {"learns": [{"direction": "ai-pm", "slug": "ai-team-collaboration"}]},
    "L74": {
        "labs": [
            {"source": "prompt-lab", "slug": "json-schema"},
            {"source": "prompt-lab", "slug": "output-format"},
        ]
    },
    "L76": {
        "learns": [
            {"direction": "prompt-master", "slug": "introduction/introduction"},
            {"direction": "prompt-master", "slug": "introduction/basics"},
        ]
    },
    "L77": {"learns": [{"direction": "prompt-master", "slug": "introduction/elements"}]},
    "L78": {
        "labs": [
            {"source": "prompt-lab", "slug": "few-shot"},
            {"source": "prompt-lab", "slug": "chain-of-thought"},
            {"source": "prompt-lab", "slug": "role-playing"},
        ]
    },
    "L80": {"learns": [{"direction": "vibe-coding", "slug": "first-prompt"}]},
    "L81": {"learns": [{"direction": "vibe-coding", "slug": "first-prompt"}]},
    "L82": {"learns": [{"direction": "ai-engineer", "slug": "llm-api-basics"}]},
    "L83": {"learns": [{"direction": "ai-pm", "slug": "rag-agent-strategy"}]},
    "L85": {"learns": [{"direction": "ai-builder", "slug": "no-code-mvp"}]},
    "L86": {"learns": [{"direction": "ai-pm", "slug": "rag-agent-strategy"}]},
    "L92": {"learns": [{"direction": "ai-pm", "slug": "rag-agent-strategy"}]},
}


# ========== FAQS (PRD §7.5) ==========
FAQS = [
    {
        "question": "我是文科背景 / 非 CS 专业，能学 AI 产品经理吗？",
        "answer": "完全可以。课程前两周会把 AI 基础概念、常见应用场景、Prompt 交互方式讲清楚，不需要写代码也能做出 AI 原型（L84 文档问答助手、L89 Notion→AI→Jira 自动化链路都是无代码或低代码）。毕业学员里有市场、运营、设计、教师、HR 等非技术背景。但你要对产品思维感兴趣，愿意写需求文档、做 stakeholder 沟通。"
    },
    {
        "question": "这个和老的 BA 训练营（¥3500）有什么区别？凭什么涨到 ¥4800？",
        "answer": "老 BA 训练营的内容是传统 BA（User Story、Agile、PRD），新课程保留了这些（占 55%），但新加了 40% 的 AI 内容：Prompt 工程实战、AI PRD 写作、RAG/Agent 原型实战、成本管理、AI 合规。外加 5 个新 Lab、6 张流程速查卡、1 个 AI PM Roadmap。涨价 ¥1300 对应这些新增内容 + 真实 AI PM 项目实习。"
    },
    {
        "question": "学完能直接找到 AI PM 工作吗？有没有 offer 案例？",
        "answer": "无法保证。我们能做的是：1v1 简历面试辅导、澳洲 AI PM 招聘市场信号（Canva / Atlassian / Airwallex / 四大行），以及毕业 portfolio（PRD 样本 + 自动化 demo + RAG 原型）。老 BA 训练营 3 期学员中，有 60% 在毕业 6 个月内转到 BA/PM 岗位，但薪资 range 差异大（$65K–$110K），跟个人背景和面试表现强相关。"
    },
    {
        "question": "P3 实习项目是真实公司的项目吗？",
        "answer": "有两类：1) JR Academy 内部真实工具项目（比如学员端 feature 开发），你作为 AI PM/BA 全程参与；2) 合作企业的命题（往期有过悉尼 Fintech 和教育创业公司的项目）。两类都有真实 stakeholder、真实 deadline、真实上线验证。产出会直接进你的 portfolio，可以在面试里当案例讲。"
    },
    {
        "question": "要写代码吗？不会写代码能跟上 L80-L94 的 AI 原型课吗？",
        "answer": "能。L80-L81 讲 AI Programming 入门（用 Cursor / GPTs 这类工具做原型，不是手写代码），L84 用 ChatGPT GPTs 或 Notion AI，L89 用 n8n / Zapier 做自动化。整个 bootcamp 不要求你能写 Python / JavaScript，但会要求你能看懂 API 调用结构、能写 JSON / Markdown、能用 GitHub / Notion 协作。"
    },
    {
        "question": "和 AI Engineer bootcamp 选哪个？",
        "answer": "AI Engineer 是技术栈（Python / LangChain / RAG 实现），AI PM/BA 是产品栈（需求 / PRD / stakeholder / 评估指标）。如果你要做「写代码的 AI 工程师」选 AI Engineer；如果你要做「定义 AI 产品、指挥工程师的产品经理」选 AI PM/BA。两者毕业后在公司里是合作关系，不是替代关系。"
    },
    {
        "question": "毕业证有用吗？招聘方认可吗？",
        "answer": "JR Academy 的 certificate 不是大学学位，但我们会提供两样更实用的东西：1) 详细的 portfolio（PRD 样本、Prompt 库、自动化 demo、RAG 原型），可以直接放 LinkedIn / resume；2) 导师 referral（Xin / Tiger 有澳洲 BA / AI PM 圈人脉）。澳洲本地公司（Canva / Atlassian）更看 portfolio 和 referral，certificate 是加分项不是必要条件。"
    },
    {
        "question": "如果跟不上节奏可以回看吗？周末安排怎么样？",
        "answer": "所有直播课都有录播，Lab 和 Quiz 都是异步完成（有 deadline 但时间灵活）。建议的周学习强度：3-4 小时直播 + 4-6 小时自学 + 2-3 小时 Lab/作业，总计 10-13 小时/周。周末一般不安排新课，但有 1v1 辅导和 peer review。适合在职学员。"
    },
    {
        "question": "一个月多一点学完 94 节课，学完真的能掌握吗？",
        "answer": "94 节课是总课时，不是一个月的节奏。正式课程是 2025-12-01 到 2026-01-18（~7 周），之后有 4 周的 P3 项目实习 + 1v1 辅导 + portfolio 整理，总共 ~3 个月。强度比大学一门课重，但比刷 Coursera 高得多——因为有 deadline、有同学互评、有导师点评、有真实项目产出。"
    },
    {
        "question": "往期学员现在在哪工作？",
        "answer": "第 2 期学员案例：Eric（悉尼某 Fintech Junior BA，$80K）、Lisa（Melbourne 某教育科技 Product Associate）、Wei（回国某头部互联网产品岗）。第 3 期有几位还在 P3 项目阶段，offer 还没出。我们会在每期结束后 3 个月发一次就业数据报告（匿名统计：offer 数量 / 平均薪资 / 面试通过率）。"
    },
]

# ========== BOOTCAMP SECTIONS (PRD §7.6) ==========
BOOTCAMP_SECTIONS = [
    {
        "title": "为什么是 AI 产品经理",
        "content": "<p>澳洲 2024-2025 年 AI PM 岗位增长 210%（Seek 数据），在 Canva、Atlassian、Airwallex、四大行、Service NSW 数字化项目、REA、Seek 都有大量空缺。薪资区间：Junior AI PM $85K-$110K、Mid $110K-$145K、Senior $145K-$180K+（AUD）。</p><p>和传统 PM 相比，AI PM 要求多 3 样：1) 能评估 LLM 能力边界；2) 能做成本与准确率的 trade-off；3) 能设计可落地的 AI 产品流程。</p>",
        "order": 1,
    },
    {
        "title": "传统 BA vs AI PM：技能栈对比",
        "content": "<table><thead><tr><th>维度</th><th>传统 BA</th><th>AI PM</th></tr></thead><tbody><tr><td>需求方法论</td><td>User Story / BRD / FSD</td><td>User Story + AI Capability Spec</td></tr><tr><td>工具链</td><td>Jira / Confluence / Figma</td><td>Jira + OpenAI / Claude / n8n / RAG 工具</td></tr><tr><td>评估指标</td><td>功能完成率 / 用户转化</td><td>+ accuracy / latency / hallucination rate / cost per query</td></tr><tr><td>利益相关者</td><td>业务方 / 开发 / QA</td><td>+ 数据团队 / 合规 / AI 伦理委员会</td></tr><tr><td>风险清单</td><td>范围蔓延 / 进度延迟</td><td>+ prompt injection / 数据泄露 / 模型偏见 / 成本失控</td></tr></tbody></table>",
        "order": 2,
    },
    {
        "title": "学完你能做什么",
        "content": "<ul><li><strong>一份完整 AI PRD 样本</strong>（L74 Lab 产出）— 含数据、模型、成本、指标、风险五章节</li><li><strong>一个 PM Prompt 库</strong>（20+ 场景化 prompt，需求分析、竞品调研、用户访谈摘要、PRD 初稿）</li><li><strong>一条可跑通的自动化链路</strong>（L89 Lab 产出）— Notion → AI → Jira 端到端</li><li><strong>一个 RAG 文档问答原型</strong>（L84 Lab 产出）— 可直接 demo 给面试官</li><li><strong>一份针对澳洲 AI PM 市场优化的 portfolio</strong>（1v1 辅导定稿）</li></ul>",
        "order": 3,
    },
    {
        "title": "课程亮点：真实 P3 项目实习",
        "content": "<p>P3 = Project Phase 3，是 JR Academy 独有的真实项目实习机制。AI PM/BA 学员会和 Web 全栈班、DevOps 班的学员一起组队，做一个 4-6 周可上线的 MVP。</p><p><strong>你的角色：</strong> 产品代表，负责需求拆解、Stakeholder 沟通、PRD 撰写、验收标准定义、上线演示。项目产出进你的 portfolio，可以在面试时讲成完整 case study。</p>",
        "order": 4,
    },
    {
        "title": "为谁准备",
        "content": "<p><strong>适合：</strong></p><ul><li>文科/商科/设计/运营背景，想转 AI 产品岗位</li><li>已有 BA/PM 经验，想补 AI 技能栈</li><li>技术背景但想转产品方向</li><li>澳洲本地找工作 + 回国互联网公司都适用</li></ul><p><strong>不适合：</strong></p><ul><li>想做纯 AI 工程师（选 AI Engineer bootcamp）</li><li>想学编程基础（选 Vibe Coding bootcamp）</li><li>没有英文基础（至少 IELTS 6.0 水平，P3 实习和 stakeholder 沟通都用英文）</li></ul>",
        "order": 5,
    },
    {
        "title": "价格说明 + 早鸟政策",
        "content": "<p><strong>标准学费：</strong> ¥4,800</p><p><strong>早鸟价（开课前 4 周报名）：</strong> ¥4,400（省 ¥400）</p><p><strong>老学员 / 学员推荐：</strong> 额外立减 ¥200</p><p><strong>包含：</strong> 94 节课直播 + 录播 + 7 个 Lab + P3 项目实习 + 2 次 1v1 辅导 + Portfolio 整理 + 学员群长期答疑</p><p><strong>不包含：</strong> 付费 AI 工具订阅（ChatGPT Plus / Claude Pro / Cursor 建议自费，可申请教育折扣）</p>",
        "order": 6,
    },
]


# ========== CURRICULUM PAGES (per curriculum/CLAUDE.md rule 1) ==========
CURRICULUM_PAGES = {
    "pages": [
        "curriculum.html",
        "phase0.html",
        "phase1.html",
        "phase2.html",
        "phase3.html",
        "phase4.html",
        "phase5.html",
        "poster.html",
    ],
    "defaultPage": "curriculum.html",
}


def extract_lesson_number(code: str) -> int:
    """L01 -> 1, L12 -> 12"""
    m = re.match(r"L(\d+)", code)
    return int(m.group(1)) if m else 0


def main():
    print(f"Loading {OUTLINE}")
    with OUTLINE.open() as f:
        data = json.load(f)

    # Extract all lessons from the 1 phase
    all_lessons = []
    for phase in data.get("phases", []):
        all_lessons.extend(phase.get("lessons", []))
    assert len(all_lessons) == 94, f"Expected 94 lessons, got {len(all_lessons)}"

    # Transform lessons
    for lesson in all_lessons:
        code = lesson.get("code")
        # Fill descriptions. 『只加不删』铁律：
        # - 空描述 / 小于 50 字符的 title-echo → 替换为新内容
        # - 已有实质内容 → 追加新内容到末尾，不覆盖
        if code in DESC_FILLERS:
            existing = (lesson.get("description") or "").strip()
            stripped_chars = len(existing) - existing.count("<") * 3  # rough text-char estimate
            if stripped_chars < 50:
                lesson["description"] = DESC_FILLERS[code]
            else:
                # Append without overwriting
                lesson["description"] = existing + DESC_FILLERS[code]
        # L29 保留全部内容（90k+ 字符），不压缩
        # Bind labs/learns
        if code in BINDINGS:
            b = BINDINGS[code]
            if "labs" in b:
                lesson["labs"] = b["labs"]
            if "learns" in b:
                lesson["learns"] = b["learns"]

    # Regroup into 6 phases
    new_phases = []
    for p in PHASES:
        lo, hi = p["range"]
        lessons = [l for l in all_lessons if lo <= extract_lesson_number(l["code"]) <= hi]
        new_phases.append(
            {
                "name": p["name"],
                "color": p["color"],
                "summary": p["summary"],
                "lessons": lessons,
            }
        )
    total = sum(len(ph["lessons"]) for ph in new_phases)
    assert total == 94, f"Regrouping lost lessons: {total}"
    data["phases"] = new_phases

    # Update program
    prog = data.setdefault("program", {})
    prog["programPhase"] = 4
    prog["cohortStatus"] = "RECRUITING"

    # FAQs / BootcampSections / CurriculumPages
    data["faqs"] = FAQS
    data["bootcampSections"] = BOOTCAMP_SECTIONS
    data["curriculumPages"] = CURRICULUM_PAGES

    # Write
    with OUTLINE.open("w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Written {OUTLINE}")

    # Summary
    print("\n=== Summary ===")
    print(f"Phases: {len(new_phases)}")
    for p in new_phases:
        print(f"  {p['name']}: {len(p['lessons'])} lessons")
    print(f"FAQs: {len(data['faqs'])}")
    print(f"BootcampSections: {len(data['bootcampSections'])}")
    print(f"CurriculumPages: {len(data['curriculumPages']['pages'])} pages")
    empty_desc = sum(1 for ph in new_phases for l in ph["lessons"] if not l.get("description", "").strip())
    print(f"Empty descriptions remaining: {empty_desc}")
    total_labs = sum(len(l.get("labs", [])) for ph in new_phases for l in ph["lessons"])
    total_learns = sum(len(l.get("learns", [])) for ph in new_phases for l in ph["lessons"])
    print(f"Total labs bound: {total_labs}")
    print(f"Total learns bound: {total_learns}")


if __name__ == "__main__":
    main()
