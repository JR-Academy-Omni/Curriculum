#!/usr/bin/env python3
"""Sample descriptions for AI Engineer Bootcamp - 5 representative lessons.
Engineer-targeted style: technical pain points, no condescension, concrete numbers.
"""
import json

samples = {}

# ============================================================
# L01 — Information: Pre-work 必要知识储备
# ============================================================
samples["L01"] = """<h3>🎯 这节课解决什么问题</h3>
<p>第一节直播课开场，讲师问"大家 venv 都装好了吗"，群里 30% 的人在搜 venv 是什么。第二节讲 OpenAI API，又有人在问 API key 怎么设环境变量。Bootcamp 12 周内容密度高，第一周跟不上，后面 11 周都在追。Pre-work 就是提前把这些"不该花直播课时间讲"的基础打牢。</p>

<h3>📖 你将学到</h3>
<ul>
  <li><strong>四项必备技能自检表</strong> — Python、Git、AWS、命令行，每项给你具体的"会到什么程度才算过关"标准，不会就刷对应的 Lab</li>
  <li><strong>开发环境一次配齐</strong> — Python 3.10+、VS Code、OpenAI key、AWS Free Tier、Docker，一份清单照着装，避免开课后才发现 Python 版本不对</li>
  <li><strong>10 个 Pre-work Lab 的正确用法</strong> — 哪些可以跳、哪些必须做、卡住怎么办，用 4 小时换后面 12 周不掉队</li>
</ul>

<h3>💡 适合谁</h3>
<p>你写过 Python 但没系统学过、用过 Git 但只会 add/commit/push、知道 AWS 但没真正点开过 Console — 这节就是帮你把这些"半会不会"的状态变成"扎实够用"。如果你 Python 完全没碰过，建议先去刷 Python 入门课再来。</p>

<h3>📦 课程包含</h3>
<ul>
  <li>1 份完整 Pre-work 自检指南（先修要求 + 环境清单 + 开发工具）</li>
  <li>10 个 Pre-work Lab（L02-L10）— Python × 4、Git × 2、AWS × 4，总时长约 4 小时</li>
  <li>常见误区与避坑提示，含 Windows 用户必须装 WSL2 的原因</li>
</ul>

<h3>✅ 学完能做什么</h3>
<p>第一节直播课开始时，你不会再被 venv、API key、git branch 这些基础概念卡住。你的开发环境能在 10 分钟内跑通一个调用 OpenAI API 的 Python 脚本。看到任何报错信息，你知道复制去 Google/ChatGPT 该怎么问。</p>"""

# ============================================================
# L02 — InteractiveLab: Python Hello World
# ============================================================
samples["L02"] = """<h3>🎯 这节课解决什么问题</h3>
<p>你可能已经写过几年 Java 或 Go，但 Python 一直没正经写过。或者你跟着教程复制粘贴跑过几行代码，但从没自己从空文件开始敲一行 print。这节 Lab 不是教你"什么是 print"，而是让你在 5 分钟内验证：你的电脑能听懂 Python，你的手指能记住 Python 的语法节奏。</p>

<h3>📖 你将学到</h3>
<ul>
  <li><strong>print() 的本质</strong> — 它不是关键字，是函数。理解这一点你就能秒懂后面 openai.chat.completions.create() 这种"看起来复杂"的调用</li>
  <li><strong>变量 vs 字符串</strong> — Python 区分 name 和 "name" 的方式，新手最常踩的坑（占 Python 报错的 30% 以上）</li>
  <li><strong>四种错误的报错对照</strong> — SyntaxError、NameError、IndentationError 各自长什么样，看到能立刻定位</li>
</ul>

<h3>💡 适合谁</h3>
<p>你是从其他语言转 Python 的工程师，或者 Python 是你的第一门编程语言。如果你能不查文档写出一个调 REST API 的 Python 脚本，可以直接跳过这个 Lab。如果不能，花 15 分钟刷一遍，省下后面调 LangChain 时的痛苦。</p>

<h3>📦 课程包含</h3>
<ul>
  <li>1 个浏览器内 Python 实验环境（不用本地装 Python）</li>
  <li>4 个动手任务 — 从 print 到 f-string，每步有自动验证</li>
  <li>1 张 Python 报错速查表（4 种最常见错误对照表）</li>
  <li>预计 15-20 分钟，做完直接进 L03</li>
</ul>

<h3>✅ 学完能做什么</h3>
<p>你能从空白编辑器开始，30 秒写出一段 print 加变量加 f-string 的 Python 代码。看到 SyntaxError 不再慌，知道大概率是引号或括号问题。后面调 OpenAI SDK 时，你能看懂返回对象的嵌套结构，知道 .choices[0].message.content 每一层是什么。</p>"""

# ============================================================
# L21 — Lesson (LiveLecture): 开课讲解会
# ============================================================
samples["L21"] = """<h3>🎯 这节课解决什么问题</h3>
<p>12 周课程，4 个 Phase，7 个 Project，30 多节直播课，60 多个 Lab。第一次接触 Bootcamp 的人最常遇到的问题不是"学不会"，而是"不知道现在该学什么、为什么学这个、学完连到哪里"。开课讲解会的目标就是让你拿到一张完整的 12 周路线图，明确每个 Phase 的产出物，知道你毕业时简历上能写什么。</p>

<h3>📖 你将学到</h3>
<ul>
  <li><strong>4 Phase 学习路径详解</strong> — GenAI 基础 → RAG 全栈 → AI Agents → 模型优化 + Evals，每个 Phase 的核心技术栈和验收标准</li>
  <li><strong>7 个 Project 长什么样</strong> — 从最基础的 Prompt 工程到生产级 Agentic RAG，每个 Project 用什么数据集、对标什么业界场景、产出什么 deliverable</li>
  <li><strong>ISA 方向选择 + 群规则 + 答疑机制</strong> — 怎么找 mentor、卡住了去哪里求助、how to maximize 这 12 周</li>
</ul>

<h3>💡 适合谁</h3>
<p>每一位刚加入 AI Engineer Bootcamp 的同学都必须看。如果你之前上过 Bootcamp 但中途掉队，这节也建议重新听一次——不是听内容，是听"怎么用"才能避免再掉队。</p>

<h3>📦 课程包含</h3>
<ul>
  <li>约 90 分钟直播 + 现场答疑</li>
  <li>1 份 12 周完整学习计划 PDF</li>
  <li>4 Phase × 7 Project 的可视化路线图</li>
  <li>全员分组、ISA 方向确认、mentor 匹配</li>
  <li>录播回放（错过直播也能补）</li>
</ul>

<h3>✅ 学完能做什么</h3>
<p>你知道下周一要做什么、为什么做、做完怎么验证。你的 Notion / Linear 里有一份按周拆分的学习计划。你认识同期的同学，知道遇到问题去哪个群、找哪位 mentor。整个 12 周对你来说不再是"一团迷雾"，而是一条清晰的路径。</p>"""

# ============================================================
# L72 — Lesson: LangChain Core Constructs
# ============================================================
samples["L72"] = """<h3>🎯 这节课解决什么问题</h3>
<p>你打开 LangChain 文档，看到 LLMs、Prompts、Chains、Memory、Retrievers、Agents、LCEL 一堆概念，每个都有 N 种用法、M 种封装。看完一遍能照着 demo 跑通，但自己写新东西时不知道用哪个抽象、什么场景该 chain 还是 agent。这节直播带你把这些核心 construct 的关系理清楚——什么时候用谁、彼此怎么组合、为什么 LCEL 是新的标准写法。</p>

<h3>📖 你将学到</h3>
<ul>
  <li><strong>5 个核心 construct 的边界</strong> — LLM/Prompt/Chain/Memory/Retriever 各自负责什么，重叠时优先用哪个，避免"用 Chain 包了一层其实没必要"的常见反模式</li>
  <li><strong>LCEL 三步法</strong> — 用 | 管道把 prompt | model | output_parser 拼成 chain，比传统 LLMChain 写法少 50% 代码、错误更可读</li>
  <li><strong>多轮对话 Memory 的 4 种实现</strong> — Buffer、Window、Summary、TokenBuffer，分别适合什么场景，token 成本和上下文质量怎么权衡</li>
</ul>

<h3>💡 适合谁</h3>
<p>已经能调通 OpenAI SDK，但被 LangChain 的概念量劝退过的工程师。或者你跟着 tutorial 跑通过 Q&A demo，但要自己设计一个新的 chain 时不知道从哪开始。这节是 LangChain 的"骨架课"，骨架立起来，后面的 RAG/Agent 模块都会变简单。</p>

<h3>📦 课程包含</h3>
<ul>
  <li>约 90 分钟直播 + 现场 coding 演示</li>
  <li>LCEL 3-step Chain 实战（prompt | model | parser）</li>
  <li>带 Memory 的多轮对话 demo（含 4 种 memory 对比）</li>
  <li>完整代码 notebook + 录播回放</li>
  <li>课后作业：用 LCEL 重写一个旧版 LLMChain 实现</li>
</ul>

<h3>✅ 学完能做什么</h3>
<p>你能徒手写出一个带 memory 的多轮对话 chain，不用查文档。看到任何 LangChain 代码，你能立刻识别它用的是哪个 construct、为什么这么组合。后面学 RAG、Agent 时，你不会被新增的抽象层迷惑——因为骨架你已经懂了。</p>"""

# ============================================================
# L106 — Lesson: Production-grade Agentic RAG
# ============================================================
samples["L106"] = """<h3>🎯 这节课解决什么问题</h3>
<p>Naive RAG 在 demo 阶段都能跑，但放到生产就出问题：用户问"对比 A 和 B"，它只返回 A 的内容；用户问的问题需要先查表再算，它直接生成幻觉答案；retrieval 结果不相关，它也照样硬答。这些不是 prompt 调一调能解决的，需要让 LLM 自己决定"该不该查、查哪个数据源、查不到要不要换策略"——这就是 Agentic RAG。这节直播带你从 0 到 1 搭一个真正能上线的 Agentic RAG 系统。</p>

<h3>📖 你将学到</h3>
<ul>
  <li><strong>Agentic vs Naive RAG 的边界</strong> — 什么场景必须 agent 化、什么场景 naive 就够，避免无脑套 agent 浪费 token</li>
  <li><strong>路由决策 + 多工具协作</strong> — 用 LangGraph 设计一个会"先判断问题类型 → 选 retriever → 评估结果 → 必要时换源"的 agent loop</li>
  <li><strong>错误恢复机制</strong> — retrieval 失败、tool 报错、LLM 输出格式错乱时的 fallback 策略，让系统不会一报错就崩</li>
  <li><strong>LangSmith 监控接入</strong> — 每个 agent step 的耗时、token 成本、成功率可视化，生产环境必备</li>
</ul>

<h3>💡 适合谁</h3>
<p>已经做过基础 RAG（向量库 + retrieve + generate），但发现 demo 跑得 OK 一上线就翻车的工程师。或者你在公司被要求做"智能客服"、"内部知识库 Agent"，但不知道怎么设计 fallback 和监控。这节是从"能跑 demo"到"敢上线"的关键一节。</p>

<h3>📦 课程包含</h3>
<ul>
  <li>约 90 分钟直播 + 完整代码演示</li>
  <li>Agentic RAG 架构图（路由 + 多工具 + 错误恢复）</li>
  <li>LangGraph 实现 + LangSmith 监控接入</li>
  <li>3 个真实 failure case 的 debug 过程</li>
  <li>完整 notebook + 录播</li>
</ul>

<h3>✅ 学完能做什么</h3>
<p>你能独立设计一个生产级 Agentic RAG 架构，画得出每个 node 的职责和回退路径。你的 RAG 系统遇到 retrieval 失败时知道换数据源而不是硬答。你能在 LangSmith 上定位"为什么这条用户 query 答错了"，精确到是 routing 错了还是 retrieval 错了还是 generation 错了。</p>"""

# Save samples
with open('curriculum/ai-engineer-bootcamp/_descriptions_samples.json', 'w') as f:
    json.dump(samples, f, ensure_ascii=False, indent=2)

print("Generated 5 sample descriptions:")
for code, desc in samples.items():
    print(f"  {code}: {len(desc)} chars")
