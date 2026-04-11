#!/usr/bin/env python3
"""Upgrade P0 LIVE lessons (< 500 chars) — Batch 1: L106, L107, L112, L113, L118"""
import json

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

lm = {}

lm["L106"] = """<h2>学习目标</h2>
<p>这节课结束后，你能：</p>
<ul>
<li>区分 Naive RAG 和 Agentic RAG 的架构差异，知道什么时候该升级</li>
<li>实现一个 Agent 自主决定"是否检索、检索什么、检索几次"的 RAG 系统</li>
<li>用 LangSmith 追踪 Agentic RAG 的完整调用链</li>
<li>设计 Agentic RAG 的错误恢复和降级策略</li>
</ul>

<h2>核心概念</h2>

<h3>Naive RAG 的局限</h3>
<p>Phase 2 你构建的 RAG 系统是"Naive RAG"——每次用户提问都走同样的流程：</p>
<pre><code>用户问题 → Embedding → 向量搜索 top-5 → 拼入 Prompt → LLM 生成回答</code></pre>
<p>这个流程的问题：</p>
<ul>
<li><strong>不需要检索时也检索</strong> — 用户说"你好"，系统也去向量库搜一遍，浪费 token 和时间</li>
<li><strong>一次检索不够时没法再搜</strong> — 用户问"对比 RAG 和 Fine-Tuning 的优缺点"，一次 top-5 可能只覆盖 RAG 的文档，Fine-Tuning 的文档没搜到</li>
<li><strong>检索结果不好时无法自我修正</strong> — 搜到的文档不相关，LLM 只能硬着头皮编答案</li>
</ul>

<h3>Agentic RAG = Agent + RAG</h3>
<p>给 RAG 加一个 Agent 层，让它自主决策：</p>
<table>
<tr><th></th><th>Naive RAG</th><th>Agentic RAG</th></tr>
<tr><td>检索时机</td><td>每次都检索</td><td>Agent 判断是否需要检索</td></tr>
<tr><td>检索策略</td><td>固定 query、固定 top-k</td><td>Agent 可以改写 query、调整 top-k、多次检索</td></tr>
<tr><td>回答策略</td><td>一次生成</td><td>Agent 可以验证回答、发现不足时补充检索</td></tr>
<tr><td>工具</td><td>只有向量搜索</td><td>向量搜索 + 网页搜索 + SQL 查询 + 计算器</td></tr>
<tr><td>错误处理</td><td>无</td><td>检索失败时 fallback、回答不确定时拒答</td></tr>
</table>

<h3>实现架构</h3>
<pre><code>def agentic_rag(question):
    # Agent 有三个工具
    tools = [
        search_docs,      # 向量搜索内部文档
        search_web,        # 网页搜索（文档不够时用）
        calculator,        # 数值计算
    ]

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages.append({"role": "user", "content": question})

    for _ in range(5):  # 最多 5 轮决策
        response = llm(messages, tools=tools)

        if response.tool_calls:
            # Agent 决定调用工具
            for call in response.tool_calls:
                result = execute(call)
                messages.append(tool_result(call.id, result))
        else:
            # Agent 决定直接回答（不需要更多检索）
            return response.content

    return "无法回答，请换个问题试试"</code></pre>

<h3>Agent 的路由决策</h3>
<p>Agentic RAG 的 System Prompt 需要明确告诉 Agent 什么时候用什么工具：</p>
<pre><code>你是一个知识助手。根据用户问题，选择合适的策略：

1. 如果问题可以直接回答（如"你好"、"谢谢"）→ 直接回答，不调用工具
2. 如果需要查找内部文档 → 调用 search_docs
3. 如果内部文档不够 → 补充调用 search_web
4. 如果需要计算 → 调用 calculator
5. 如果检索到的内容无法回答问题 → 说"我在文档中没有找到相关信息"

重要：不要编造信息。回答必须基于检索到的内容。</code></pre>

<h3>错误恢复</h3>
<ul>
<li><strong>检索结果不相关</strong> → Agent 改写 query 重新搜索（最多重试 2 次）</li>
<li><strong>检索服务超时</strong> → 降级到直接用 LLM 回答（标注"未经文档验证"）</li>
<li><strong>回答不确定</strong> → 明确拒答："文档中没有足够信息回答这个问题"</li>
</ul>

<h3>用 LangSmith 监控</h3>
<p>Agentic RAG 的调用链比 Naive RAG 复杂得多。LangSmith Trace 能让你看到：</p>
<ul>
<li>Agent 做了几轮决策</li>
<li>每轮调用了什么工具、输入什么参数</li>
<li>检索返回了哪些文档、相关性得分多少</li>
<li>最终回答基于哪些检索结果生成</li>
<li>每步的延迟和 token 消耗</li>
</ul>

<h2>动手练习</h2>
<h3>Project：ISA Agent 升级</h3>
<p>把你的 ISA 从 Naive RAG 升级为 Agentic RAG：</p>
<ol>
<li>给 ISA 加 search_docs 和 search_web 两个工具</li>
<li>写 Agent 路由 System Prompt</li>
<li>测试 10 个问题，对比 Naive vs Agentic 的回答质量</li>
<li>接入 LangSmith，截图一个完整的 Agentic RAG Trace</li>
</ol>

<h2>常见问题</h2>

<h3>Q: Agentic RAG 比 Naive RAG 慢多少？</h3>
<p>取决于 Agent 做了几轮决策。简单问题（不需要检索）反而更快。复杂问题（需要多次检索）可能慢 2-3 倍。实测：平均延迟从 Naive 的 2.1s 增加到 Agentic 的 3.5s，但回答质量（Faithfulness）从 0.78 提升到 0.91。</p>

<h3>Q: 什么时候不该用 Agentic RAG？</h3>
<p>如果你的场景查询模式单一（比如只查 FAQ），Naive RAG 就够了。Agentic RAG 的价值在"查询模式多样"的场景——有时需要文档、有时需要搜网页、有时不需要检索。</p>

<h2>小结</h2>
<p>Agentic RAG = 给 RAG 系统加一个"大脑"。Agent 决定何时检索、检索什么、检索几次、怎么组合信息。代价是更高的延迟和成本，收益是显著更好的回答质量和用户体验。</p>"""

lm["L107"] = """<h2>学习目标</h2>
<p>这节课结束后，你能：</p>
<ul>
<li>说出三种多 Agent 架构模式（Supervisor、Peer-to-Peer、Hierarchical）的适用场景</li>
<li>理解 Context Isolation 是多 Agent 的核心价值，不是角色扮演</li>
<li>评估什么时候该用多 Agent、什么时候单 Agent + 多工具就够了</li>
<li>设计一个 Orchestrator + Workers 的多 Agent 系统</li>
</ul>

<h2>核心概念</h2>

<h3>为什么需要多 Agent</h3>
<p>单 Agent 的 Context Window 是有限的。当一个任务需要：</p>
<ul>
<li>多种专业知识（代码审查 + 安全扫描 + 性能分析）</li>
<li>多个数据源（内部文档 + 网页搜索 + 数据库）</li>
<li>不同的 System Prompt 和工具集</li>
</ul>
<p>硬塞进一个 Agent 的 Context 会导致注意力稀释——模型"看到"的信息太多，反而抓不住重点。</p>
<p><strong>多 Agent 的核心价值不是"角色扮演"，是 Context Isolation。</strong> 每个 Agent 有自己的 Context Window，只放自己需要的信息。</p>

<h3>Token 经济学</h3>
<p>多 Agent 的成本显著更高：</p>
<table>
<tr><th>架构</th><th>Token 倍数</th><th>适用场景</th></tr>
<tr><td>单 Agent 对话</td><td>1x 基线</td><td>简单问答</td></tr>
<tr><td>单 Agent + 工具</td><td>~4x</td><td>工具调用任务</td></tr>
<tr><td>多 Agent 系统</td><td>~15x</td><td>复杂研究/协调</td></tr>
</table>
<p><strong>单 Agent 能搞定的绝不用多 Agent。</strong> 多 Agent 只在复杂度超过单 Context 承载能力时才值得。</p>

<h3>三种架构模式</h3>

<h4>模式 1: Supervisor / Orchestrator</h4>
<p>中心 Supervisor 控制流程、分派任务、汇总结果：</p>
<pre><code>用户问题 → Supervisor → [专家A, 专家B, 专家C] → 汇总 → 最终回答</code></pre>
<p><strong>适用</strong>：任务清晰、需要协调多个领域、需要人工监督。</p>
<p><strong>风险</strong>：Telephone Game 问题——Supervisor 转述任务时丢失细节。解决方案：让 sub-agent 直接 pass-through 原始响应，不要让 Supervisor 重新总结。</p>

<h4>模式 2: Peer-to-Peer / Swarm</h4>
<p>没有中心控制者，Agent 之间平等协作：</p>
<pre><code>Agent A ↔ Agent B ↔ Agent C（互相传递信息，协商决策）</code></pre>
<p><strong>适用</strong>：Agent 之间需要频繁交互、辩论、协商的场景。</p>
<p><strong>风险</strong>：容易陷入无限讨论。必须设 max_rounds。</p>

<h4>模式 3: Hierarchical</h4>
<p>多层管理结构，Manager 管 Manager，Manager 管 Worker：</p>
<pre><code>Director → [Manager A → Workers, Manager B → Workers]</code></pre>
<p><strong>适用</strong>：大型复杂任务（如完整的代码审查 + 测试 + 部署流程）。</p>
<p><strong>风险</strong>：层级越深，延迟越高、成本越大、信息丢失越严重。</p>

<h3>代码审查系统示例</h3>
<pre><code># Orchestrator + 3 Workers
orchestrator_prompt = "你是代码审查协调者。将代码分发给三个审查员，汇总报告。"

workers = {
    "logic_reviewer": "专注代码逻辑、算法正确性、边界条件",
    "security_reviewer": "专注安全漏洞、注入风险、权限问题",
    "style_reviewer": "专注代码风格、命名规范、可维护性",
}

# Orchestrator 并行分发任务
results = await asyncio.gather(
    run_agent(logic_reviewer, code),
    run_agent(security_reviewer, code),
    run_agent(style_reviewer, code),
)

# 汇总
final_report = run_agent(orchestrator, f"汇总以下审查报告：{results}")</code></pre>

<h3>选择决策树</h3>
<pre><code>任务步骤是否固定？
├─ YES → 用 Workflow（LangGraph 固定边）
└─ NO → 单 Agent 能搞定吗？
    ├─ YES → 单 Agent + 多工具
    └─ NO → 需要多少种专业？
        ├─ 2-3 种 → Supervisor + Workers
        └─ 更多，有层级 → Hierarchical</code></pre>

<h2>动手练习</h2>
<p>打开 <a href="/learn/prompt-lab/multi-agent">Multi-Agent Lab</a>，设计一个代码审查系统：</p>
<ol>
<li>定义 Orchestrator 的 System Prompt</li>
<li>定义 3 个 Worker 的角色和 System Prompt</li>
<li>测试：给系统一段有 bug 的代码，看三个 Worker 是否各自发现不同类型的问题</li>
</ol>

<h2>常见问题</h2>

<h3>Q: 多 Agent 之间怎么通信？</h3>
<p>三种方式：串行传递（A→B→C 流水线）、并行独立（A/B/C 同时工作后汇总）、对话式（互相讨论）。大多数场景用并行独立就够了。</p>

<h3>Q: 多 Agent 的调试比单 Agent 难多少？</h3>
<p>难很多。必须用 LangSmith 或 Langfuse 追踪每个 Agent 的输入/输出。没有 Trace 工具，多 Agent 系统基本不可调试。</p>

<h2>延伸阅读</h2>
<ul>
<li><a href="/learn/ai-engineer/multi-agent-patterns">Multi-Agent Architecture Patterns</a> — 三种架构模式的深度对比、Token 经济学分析</li>
<li><a href="/learn/ai-engineer/agent-frameworks-compare">Agent Frameworks Compare</a> — LangGraph、AutoGen、CrewAI 等 8 大框架对比</li>
</ul>

<h2>小结</h2>
<p>多 Agent 的核心价值是 Context Isolation 和专业分工，不是角色扮演。Token 成本是单 Agent 的 15 倍。单 Agent 够用就不要上多 Agent——复杂度是你的敌人。</p>"""

lm["L112"] = """<h2>学习目标</h2>
<p>这节课结束后，你能：</p>
<ul>
<li>用 LangSmith 追踪一个 Agent 的完整运行：每步 Thought/Action/Observation</li>
<li>定义 Agent Ops 的三大支柱：Observability（可观测）、Evaluation（评估）、Guardrails（防护）</li>
<li>设置 Agent 监控告警：步数异常、工具调用失败、成本超限</li>
</ul>

<h2>核心概念</h2>

<h3>Agent Ops 三大支柱</h3>
<table>
<tr><th>支柱</th><th>解决什么问题</th><th>工具</th></tr>
<tr><td><strong>Observability</strong></td><td>Agent 在干什么？每步做了什么决策？</td><td>LangSmith、Langfuse</td></tr>
<tr><td><strong>Evaluation</strong></td><td>Agent 做得好不好？回答准确吗？</td><td>RAGAS、LLM-as-Judge</td></tr>
<tr><td><strong>Guardrails</strong></td><td>Agent 会不会做危险的事？</td><td>NeMo Guardrails、自定义检查</td></tr>
</table>

<h3>LangSmith Trace 详解</h3>
<p>设置环境变量后，所有 LangChain/LangGraph 调用自动上报：</p>
<pre><code>export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY=ls-xxx
export LANGCHAIN_PROJECT="my-agent-app"</code></pre>

<p>LangSmith 的 Trace 视图展示 Agent 的完整调用链：</p>
<pre><code>Agent Run (总耗时 4.2s, 总 tokens 3,840)
├── LLM Call #1 (0.8s, 520 tokens)
│   → Thought: "用户问退款政策，我需要搜索文档"
│   → Action: search_docs("退款政策")
├── Tool: search_docs (0.3s)
│   → 返回 3 个文档片段
├── LLM Call #2 (1.1s, 1,200 tokens)
│   → Thought: "文档提到 7 天无理由退款，信息足够"
│   → Final Answer: "根据我们的政策..."
└── Total: 2 LLM calls, 1 tool call, 4.2s</code></pre>

<h3>关键监控指标</h3>
<table>
<tr><th>指标</th><th>正常范围</th><th>异常信号</th></tr>
<tr><td>Agent 步数</td><td>2-5 步</td><td>>8 步可能在循环</td></tr>
<tr><td>工具调用失败率</td><td><5%</td><td>>10% 说明工具有问题</td></tr>
<tr><td>总延迟</td><td><5s</td><td>>10s 用户体验差</td></tr>
<tr><td>单次 token 消耗</td><td><5,000</td><td>>10,000 成本失控</td></tr>
<tr><td>Faithfulness</td><td>>0.8</td><td><0.7 幻觉率过高</td></tr>
</table>

<h3>告警设置</h3>
<pre><code># LangSmith 告警规则示例
rules:
  - name: "Agent Looping"
    condition: "agent_steps > 8"
    action: "slack_alert"
  - name: "High Error Rate"
    condition: "tool_error_rate > 10%"
    action: "pagerduty"
  - name: "Cost Spike"
    condition: "daily_cost > $50"
    action: "email_alert"</code></pre>

<h2>动手练习</h2>
<ol>
<li>给你的 ISA Agent 接入 LangSmith（设置 3 个环境变量）</li>
<li>跑 10 个测试问题，在 LangSmith Dashboard 查看 Trace</li>
<li>找出：平均步数、平均延迟、工具调用成功率</li>
<li>截图一个 Multi-Agent 的 Trace（如果做了 L113 的 LangGraph 项目）</li>
</ol>

<h2>常见问题</h2>
<h3>Q: LangSmith 是免费的吗？</h3>
<p>有免费额度（每月 5000 traces）。个人学习和小项目够用。生产环境需要付费计划。开源替代方案是 Langfuse（自部署，完全免费）。</p>

<h2>小结</h2>
<p>Agent 没有 Observability 就像飞机没有仪表盘——你不知道它在干什么，出了问题也无法排查。LangSmith 是最简单的起步方案：3 个环境变量搞定。</p>"""

lm["L113"] = """<h2>学习目标</h2>
<p>这节课结束后，你能：</p>
<ul>
<li>用 LangGraph 构建一个多 Agent RAG 系统：Retriever → Generator → Quality Checker</li>
<li>理解 LangGraph 的 State Graph 模型：State、Node、Edge、Conditional Edge</li>
<li>实现 Quality Check 循环：回答不达标时自动重新检索</li>
<li>用 LangSmith 追踪多 Agent 的完整执行图</li>
</ul>

<h2>核心概念</h2>

<h3>为什么用 LangGraph</h3>
<p>普通的 LangChain Chain 是线性的：A → B → C。但 Multi-Agent RAG 需要<strong>条件分支和循环</strong>：</p>
<ul>
<li>Router 决定用哪个 Agent</li>
<li>Quality Checker 不合格时要循环回去重新检索</li>
<li>不同类型的问题走不同的路径</li>
</ul>
<p>LangGraph 用<strong>状态图（State Graph）</strong>来定义这些复杂流程。</p>

<h3>架构设计</h3>
<pre><code>用户问题 → Router Agent（判断问题类型）
    ├─ "需要内部文档" → Retriever Agent → Vector Search
    ├─ "需要最新信息" → Web Search Agent → 搜索引擎
    └─ "简单问候" → 直接回答
         ↓
    Generator Agent（基于检索结果生成回答）
         ↓
    Quality Checker（检查 Faithfulness）
    ├─ 通过 → 返回给用户
    └─ 不通过 → 回到 Retriever 重新检索（最多 2 次）</code></pre>

<h3>LangGraph 核心概念</h3>
<table>
<tr><th>概念</th><th>作用</th><th>类比</th></tr>
<tr><td><strong>State</strong></td><td>所有 Agent 共享的状态对象</td><td>白板——谁都能读写</td></tr>
<tr><td><strong>Node</strong></td><td>每个 Agent 或工具是一个节点</td><td>流程图的方框</td></tr>
<tr><td><strong>Edge</strong></td><td>节点之间的固定连线</td><td>流程图的箭头</td></tr>
<tr><td><strong>Conditional Edge</strong></td><td>根据状态决定走哪条线</td><td>流程图的菱形判断框</td></tr>
</table>

<h3>完整实现</h3>
<pre><code>from langgraph.graph import StateGraph, END
from typing import TypedDict

# 1. 定义共享状态
class RAGState(TypedDict):
    question: str
    search_results: list
    answer: str
    quality_score: float
    retry_count: int

# 2. 定义节点
def router(state):
    # LLM 判断问题类型，决定走哪条路
    question_type = classify_question(state["question"])
    return {**state, "route": question_type}

def retriever(state):
    results = vector_search(state["question"], top_k=5)
    return {**state, "search_results": results}

def generator(state):
    answer = llm_generate(state["question"], state["search_results"])
    return {**state, "answer": answer}

def quality_checker(state):
    score = check_faithfulness(state["answer"], state["search_results"])
    return {**state, "quality_score": score, "retry_count": state.get("retry_count", 0) + 1}

# 3. 条件判断函数
def should_retry(state):
    if state["quality_score"] >= 0.8:
        return "pass"
    if state["retry_count"] >= 2:
        return "pass"  # 重试 2 次后强制通过
    return "retry"

# 4. 构建图
graph = StateGraph(RAGState)
graph.add_node("retrieve", retriever)
graph.add_node("generate", generator)
graph.add_node("check", quality_checker)

graph.set_entry_point("retrieve")
graph.add_edge("retrieve", "generate")
graph.add_edge("generate", "check")
graph.add_conditional_edges("check", should_retry, {
    "pass": END,
    "retry": "retrieve"  # 不合格则重新检索
})

app = graph.compile()
result = app.invoke({"question": "What is RAG?", "retry_count": 0})</code></pre>

<h3>LangSmith 可视化</h3>
<p>LangGraph 的执行会在 LangSmith 中显示为一个图形化的 Trace：你能看到 Router 的判断、每次检索的结果、Generator 的输入输出、Quality Checker 的分数。如果发生了重试，Trace 会显示循环路径。</p>

<h2>动手练习</h2>
<h3>Project: Multi-Agent RAG 系统</h3>
<ol>
<li>用 LangGraph 实现上面的架构（Router + Retriever + Generator + Quality Checker）</li>
<li>测试 3 种类型的问题：需要文档的、不需要检索的、需要多次检索的</li>
<li>接入 LangSmith，截图 Trace 中的循环路径（Quality Check 失败 → 重新检索）</li>
<li>部署：给系统加一个 Streamlit 界面，URL 提交到作业</li>
</ol>

<h2>常见问题</h2>

<h3>Q: LangGraph 和 LangChain 的关系？</h3>
<p>LangGraph 是 LangChain 团队开发的扩展库，专门用于构建有状态、有分支、有循环的 Agent 系统。LangChain 的 Chain 是线性的，LangGraph 是图形的。</p>

<h3>Q: 不用 LangGraph 能实现多 Agent 吗？</h3>
<p>能，手写循环和条件判断也行。但 LangGraph 提供了状态管理、可视化、LangSmith 集成这些开箱即用的能力。项目复杂度上去后，手写维护成本会很高。</p>

<h2>小结</h2>
<p>LangGraph 用状态图解决了"多 Agent 怎么协作"的问题。关键设计：共享 State + 条件 Edge + 循环重试。Quality Check 循环是 Agentic RAG 和 Naive RAG 的核心差异。</p>"""

lm["L118"] = """<h2>学习目标</h2>
<p>这节课结束后，你能：</p>
<ul>
<li>理解 Claude Computer Use 的工作原理：截屏 → 识别 → 操作 → 验证循环</li>
<li>列出 Agent 上生产环境的安全检查清单</li>
<li>实现基本的 Agent Guardrails：输入过滤、操作确认、输出检查</li>
<li>设计 Agent 的 Production Deployment Plan</li>
</ul>

<h2>核心概念</h2>

<h3>Computer Use</h3>
<p>Claude 的 Computer Use 能力让 AI 像人一样操作电脑：看屏幕截图 → 识别 UI 元素 → 移动鼠标/点击/打字 → 验证结果。</p>
<p><strong>适用场景</strong>：</p>
<ul>
<li>自动化没有 API 的遗留系统（比如老的企业内部系统，只有 Web UI）</li>
<li>跨多个应用的工作流（从邮件复制数据到 Excel 再提交到系统）</li>
<li>UI 测试自动化</li>
</ul>
<p><strong>不适用</strong>：有 API 的系统——直接调 API 比操控 UI 更快、更可靠、更便宜。</p>

<h3>Computer Use 的工作循环</h3>
<pre><code>1. Claude 请求截屏 → 你的代码截取当前屏幕
2. Claude 分析截屏 → 识别按钮、输入框、文本
3. Claude 发出操作指令 → move_mouse(x,y), click(), type("text")
4. 你的代码执行操作 → 实际移动鼠标、点击、输入
5. Claude 请求新截屏 → 验证操作结果
6. 循环直到任务完成</code></pre>

<h3>Agent 生产环境安全清单</h3>
<p>Agent 不是 Demo，上生产必须考虑安全：</p>

<h4>必须做 ✅</h4>
<table>
<tr><th>检查项</th><th>说明</th><th>实现方式</th></tr>
<tr><td>最大迭代次数</td><td>防止 Agent 无限循环</td><td><code>max_iterations=10</code></td></tr>
<tr><td>工具调用超时</td><td>单个工具不能跑太久</td><td><code>timeout=30s</code></td></tr>
<tr><td>Token 上限</td><td>防止单次调用消耗过多</td><td><code>max_tokens=10000</code></td></tr>
<tr><td>输入过滤</td><td>检测 Prompt Injection</td><td>正则 + LLM 检查</td></tr>
<tr><td>输出检查</td><td>敏感信息不能泄露</td><td>PII 检测 + 关键词过滤</td></tr>
<tr><td>操作确认</td><td>危险操作需人工审批</td><td>发邮件、删数据前暂停</td></tr>
<tr><td>完整 Trace</td><td>每步都要可追踪</td><td>LangSmith / Langfuse</td></tr>
</table>

<h4>绝对不要做 ❌</h4>
<ul>
<li>❌ 给 Agent 不受限的数据库写权限</li>
<li>❌ 让 Agent 自主发邮件或消息（至少要人工确认）</li>
<li>❌ 在没有 sandbox 的环境里执行 Agent 生成的代码</li>
<li>❌ 把 API Key 放在 Agent 的 System Prompt 里</li>
<li>❌ 上线前不做 Red-teaming 测试</li>
</ul>

<h3>Guardrails 实现</h3>
<pre><code># 输入过滤
def check_input(user_message):
    # 1. 正则检测常见注入模式
    injection_patterns = [
        r"ignore previous instructions",
        r"you are now",
        r"system prompt",
    ]
    for pattern in injection_patterns:
        if re.search(pattern, user_message, re.IGNORECASE):
            return False, "检测到可疑输入"
    return True, "OK"

# 输出检查
def check_output(agent_response):
    # 检查是否泄露敏感信息
    pii_patterns = [
        r"\b\d{3}-\d{2}-\d{4}\b",  # SSN
        r"sk-[a-zA-Z0-9]{48}",      # OpenAI API Key
    ]
    for pattern in pii_patterns:
        if re.search(pattern, agent_response):
            return False, "输出包含敏感信息"
    return True, "OK"

# 操作确认
def confirm_action(action_type, details):
    if action_type in ["send_email", "delete_data", "execute_code"]:
        # 暂停，等人工确认
        approval = wait_for_human_approval(action_type, details)
        return approval
    return True  # 非危险操作自动通过</code></pre>

<h2>动手练习</h2>
<h3>Project: Production Agent 部署计划</h3>
<p>为你的 ISA Agent 写一份 Production Deployment Plan：</p>
<ol>
<li><strong>安全配置</strong>：max_iterations、timeout、token limit 的具体值</li>
<li><strong>Guardrails</strong>：输入过滤规则、输出检查规则、需要人工确认的操作列表</li>
<li><strong>监控</strong>：LangSmith 项目配置、告警规则（哪些指标、什么阈值）</li>
<li><strong>降级策略</strong>：LLM API 挂了怎么办、工具超时怎么办</li>
</ol>

<h2>常见问题</h2>
<h3>Q: Computer Use 的延迟有多高？</h3>
<p>每次截屏 + 分析 + 操作大约 3-5 秒。一个需要 10 步操作的任务大约 30-50 秒。比人慢，但 24/7 不间断且不出错（如果设计好的话）。</p>

<h3>Q: Guardrails 会不会误杀正常请求？</h3>
<p>会。正则过滤容易误报。建议用两层：第一层正则快速过滤明显的注入，第二层用 LLM 判断（更准但更慢）。只有两层都判定为危险才拦截。</p>

<h2>小结</h2>
<p>Agent 上生产的核心原则：<strong>最小权限 + 完整可观测 + 人在回路</strong>。Computer Use 适合无 API 系统自动化。Guardrails 不是可选项，是必须项。</p>"""

# Apply
applied = 0
for phase in outline["phases"]:
    for lesson in phase["lessons"]:
        if lesson["code"] in lm:
            lesson["learningMaterial"] = lm[lesson["code"]]
            applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

# Verify
for code in ["L106", "L107", "L112", "L113", "L118"]:
    for phase in outline["phases"]:
        for lesson in phase["lessons"]:
            if lesson["code"] == code:
                length = len(lesson.get("learningMaterial", ""))
                print(f"  {code} {lesson['title'][:35]:35s} {length:5d} chars")
                break

print(f"\nApplied {applied} upgraded LM entries")
