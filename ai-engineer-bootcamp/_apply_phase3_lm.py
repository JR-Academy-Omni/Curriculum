#!/usr/bin/env python3
"""Apply Phase 3 learningMaterial to outline.json"""
import json

with open("curriculum/ai-engineer-bootcamp/public/outline.json") as f:
    outline = json.load(f)

lm = {}

lm["L95"] = '<h2>Agents 基础</h2>\n<p>Agent = LLM + 推理 + 工具调用 + 记忆。LLM 只能生成文本，Agent 能执行操作。</p>\n<h3>Agent 核心循环</h3>\n<pre><code>while not done:\n    thought = llm.think(context)\n    action = llm.decide(thought)\n    result = execute(action)\n    context = update(context, result)</code></pre>\n<h3>Agent vs Chain</h3>\n<table><tr><th></th><th>Chain</th><th>Agent</th></tr><tr><td>执行流程</td><td>固定顺序</td><td>动态决策</td></tr><tr><td>工具选择</td><td>预定义</td><td>LLM 自主选择</td></tr></table>\n<h3>常见 Agent 模式</h3>\n<ul><li><strong>ReAct</strong> — Reasoning + Acting</li><li><strong>Tool Use</strong> — 配备工具</li><li><strong>Planning</strong> — 先规划再执行</li><li><strong>Multi-Agent</strong> — 多 Agent 协作</li></ul>'

lm["L96"] = '<h2>实验目标</h2>\n<p>在 Prompt Lab 中体验 ReAct Agent 的推理-行动循环。</p>\n<h3>你会练习</h3>\n<ul><li>观察 Thought → Action → Observation 循环</li><li>给 Agent 一个需要多步推理的问题</li><li>分析推理链是否合理</li></ul>'

lm["L97"] = '<h2>The ReAct Framework</h2>\n<p>ReAct = Reasoning + Acting。Agent 交替"思考"和"行动"直到完成任务。</p>\n<h3>ReAct 循环</h3>\n<p>Thought（推理）→ Action（工具调用）→ Observation（结果）→ 循环直到 Final Answer。</p>\n<h3>手写 ReAct Agent</h3>\n<pre><code>def react_agent(question):\n    messages = [{"role": "system", "content": "Use Thought/Action format."}]\n    messages.append({"role": "user", "content": question})\n    for _ in range(5):\n        r = client.chat.completions.create(model="gpt-4o", messages=messages)\n        text = r.choices[0].message.content\n        if "Final Answer:" in text:\n            return text.split("Final Answer:")[-1].strip()</code></pre>'

lm["L98"] = '<h2>实验目标</h2>\n<p>在 Prompt Lab 中练习 Tool Use：给 LLM 定义工具 schema。</p>\n<h3>你会练习</h3>\n<ul><li>定义工具的 JSON Schema</li><li>让 LLM 决定是否调用工具</li><li>观察 LLM 何时选择工具 vs 直接回答</li></ul>'

lm["L99"] = '<h2>Function Calling + Tool Use</h2>\n<p>Function Calling 是让 LLM 调用外部函数的标准机制。</p>\n<h3>OpenAI Function Calling</h3>\n<pre><code>tools = [{"type": "function", "function": {\n    "name": "get_weather",\n    "description": "Get weather for a city",\n    "parameters": {"type": "object", "properties": {"city": {"type": "string"}}, "required": ["city"]}\n}}]\nr = client.chat.completions.create(model="gpt-4o", messages=[...], tools=tools)\nif r.choices[0].message.tool_calls:\n    call = r.choices[0].message.tool_calls[0]\n    args = json.loads(call.function.arguments)</code></pre>\n<h3>三大 SDK 对比</h3>\n<table><tr><th></th><th>OpenAI</th><th>Anthropic</th><th>Google</th></tr><tr><td>Schema</td><td>JSON Schema</td><td>JSON Schema</td><td>OpenAPI</td></tr><tr><td>并行调用</td><td>✅</td><td>✅</td><td>✅</td></tr></table>'

lm["L100"] = '<h2>实验目标</h2>\n<p>探索 AI Agent 设计模式。</p>\n<h3>你会练习</h3>\n<ul><li>Plan-and-Execute：先列计划再执行</li><li>Self-Reflection：Agent 检查输出质量</li><li>对比不同模式效果</li></ul>'

lm["L101"] = '<h2>Agent SDK 对比</h2>\n<p>OpenAI、Claude、Google ADK 选型。</p>\n<h3>选型建议</h3>\n<table><tr><th>维度</th><th>OpenAI</th><th>Claude</th><th>Google ADK</th></tr><tr><td>成熟度</td><td>最高</td><td>高</td><td>新</td></tr><tr><td>Agent 抽象</td><td>低（DIY）</td><td>中</td><td>高</td></tr><tr><td>推荐场景</td><td>灵活性</td><td>安全敏感</td><td>Google Cloud</td></tr></table>'

lm["L102"] = '<h2>实验目标</h2>\n<p>体验多 Agent 协作。</p>\n<h3>你会练习</h3>\n<ul><li>设计搜索 Agent + 分析 Agent</li><li>观察 Agent 间信息传递</li><li>对比单 vs 多 Agent</li></ul>'

lm["L103"] = '<h2>Agent SDK 参考</h2>\n<p>三大 SDK 技术参考。</p>\n<h3>差异</h3>\n<ul><li>OpenAI Assistants API 有 Threads 状态管理</li><li>Claude 独有 Computer Use</li><li>Google ADK 与 Google Cloud 深度集成</li></ul>'

lm["L104"] = '<h2>Production RAG 部署运维</h2>\n<h3>运维清单</h3>\n<ul><li>监控：延迟 P99 &lt; 5s、错误率 &lt; 1%</li><li>缓存：Redis 缓存相同问题</li><li>重试：API 429/500 指数退避</li><li>Fallback：主模型切备用</li><li>增量索引：定时检查新文档</li></ul>'

lm["L105"] = '<h2>构建第一个 Agent</h2>\n<p>从零实现搜索+计算+总结 Agent。</p>\n<pre><code>def run_agent(task):\n    messages = [{"role": "user", "content": task}]\n    for _ in range(10):\n        r = client.chat.completions.create(model="gpt-4o", messages=messages, tools=tools)\n        msg = r.choices[0].message\n        messages.append(msg)\n        if msg.tool_calls:\n            for call in msg.tool_calls:\n                result = execute_tool(call.function.name, json.loads(call.function.arguments))\n                messages.append({"role": "tool", "tool_call_id": call.id, "content": str(result)})\n        else:\n            return msg.content</code></pre>'

lm["L106"] = '<h2>Agentic RAG</h2>\n<p>Agent 自主决定何时检索、检索什么。</p>\n<h3>vs Naive RAG</h3>\n<table><tr><th></th><th>Naive</th><th>Agentic</th></tr><tr><td>检索时机</td><td>每次都检索</td><td>Agent 决定</td></tr><tr><td>策略</td><td>固定 top-k</td><td>可改写 query 多次检索</td></tr></table>'

lm["L107"] = '<h2>Multi-Agent Architectures</h2>\n<h3>架构模式</h3>\n<ol><li><strong>Sequential</strong> — 流水线</li><li><strong>Hierarchical</strong> — Manager 分配任务</li><li><strong>Debate</strong> — 两 Agent 辩论</li><li><strong>Collaborative</strong> — 各有专长协商</li></ol>\n<p>任务可拆成独立子任务时才用 Multi-Agent。线性任务用单 Agent + 多工具更简单。</p>'

lm["L108"] = '<h2>LangGraph</h2>\n<p>状态图定义 Agent 协作。</p>\n<h3>核心</h3>\n<ul><li><strong>State</strong> — 共享状态</li><li><strong>Node</strong> — Agent/工具节点</li><li><strong>Edge</strong> — 转移条件</li></ul>\n<pre><code>graph = StateGraph(AgentState)\ngraph.add_node("research", researcher)\ngraph.add_node("write", writer)\ngraph.add_edge("research", "write")\ngraph.add_conditional_edges("review", should_continue, {"pass": END, "revise": "write"})</code></pre>'

lm["L109"] = '<h2>Agent Memory + Mem0</h2>\n<h3>三种记忆</h3>\n<ul><li><strong>短期</strong> — messages 数组</li><li><strong>长期</strong> — 跨会话偏好</li><li><strong>工作记忆</strong> — 当前任务中间状态</li></ul>\n<h3>Mem0</h3>\n<pre><code>from mem0 import Memory\nm = Memory()\nm.add("User prefers Python", user_id="u123")\nmemories = m.search("language", user_id="u123")</code></pre>'

lm["L110"] = '<h2>A2A Protocol</h2>\n<p>Agent-to-Agent 通信标准。</p>\n<h3>MCP vs A2A</h3>\n<table><tr><th>协议</th><th>层级</th><th>作用</th></tr><tr><td>MCP</td><td>工具层</td><td>Agent 调用工具</td></tr><tr><td>A2A</td><td>Agent 层</td><td>Agent 间通信</td></tr></table>\n<h3>A2A 概念</h3>\n<ul><li>Agent Card — 能力描述</li><li>Task — 任务对象</li><li>Message — 通信消息</li></ul>'

lm["L111"] = '<h2>Agent SDK 实战对比</h2>\n<p>同一任务三框架实现。</p>\n<h3>对比维度</h3>\n<ul><li>代码量 — OpenAI 最少，LangGraph 最多</li><li>可控性 — LangGraph 最高，OpenAI 最低</li><li>调试 — LangGraph + LangSmith 可视化</li></ul>'

lm["L112"] = '<h2>Agent Ops with LangSmith</h2>\n<h3>监控指标</h3>\n<ul><li>步数 — 平均完成任务需几步</li><li>工具失败率</li><li>总延迟</li><li>总成本</li></ul>'

lm["L113"] = '<h2>Multi-Agent RAG</h2>\n<p>Retriever + Generator + Quality Checker。</p>\n<pre><code>用户 → Router Agent\n  ├→ Retriever → Vector Search\n  ├→ Web Search\n  └→ Generator → Quality Check → 通过/打回</code></pre>'

lm["L114"] = '<h2>Protocol Ecosystem</h2>\n<pre><code>应用层: AutoGen / CrewAI / LangGraph\n通信层: A2A Protocol\n工具层: MCP\n模型层: OpenAI / Claude / Gemini</code></pre>\n<p>100+ 社区 MCP Server 让工具跨框架复用。</p>'

lm["L115"] = '<h2>Agent Memory 全景</h2>\n<table><tr><th>方案</th><th>适用</th><th>优势</th></tr><tr><td>Messages</td><td>短期</td><td>简单</td></tr><tr><td>摘要压缩</td><td>中期</td><td>节省 token</td></tr><tr><td>向量存储</td><td>长期</td><td>语义检索</td></tr><tr><td>Mem0</td><td>长期</td><td>自动管理</td></tr></table>'

lm["L116"] = '<h2>Introducing MCP</h2>\n<p>Model Context Protocol — 工具调用开放标准。</p>\n<pre><code>Agent ↔ MCP Protocol ↔ MCP Server\n  ├→ 文件系统\n  ├→ 数据库\n  ├→ GitHub\n  └→ Slack</code></pre>'

lm["L117"] = '<h2>Build MCP Server</h2>\n<pre><code>from mcp.server import Server\napp = Server("my-tools")\n\n@app.tool()\nasync def query_db(sql: str) -> str:\n    return json.dumps(db.execute(sql))\n\n@app.tool()\nasync def send_email(to: str, subject: str, body: str) -> str:\n    return f"Sent to {to}"</code></pre>\n<p>docstring 成为 Agent 描述，type hint 自动生成 Schema。</p>'

lm["L118"] = '<h2>Hallucination Detection</h2>\n<h3>幻觉类型</h3>\n<ul><li>事实幻觉 — 编造事实</li><li>忠实幻觉 — 不基于 context</li><li>逻辑幻觉 — 推理错误</li></ul>\n<h3>检测方法</h3>\n<ol><li>LLM-as-Judge</li><li>NLI</li><li>Self-Consistency</li></ol>'

lm["L119"] = '<h2>实验目标</h2>\n<p>练习幻觉检测和防护。</p>\n<ul><li>检查回答是否忠于 context</li><li>设计拒答策略</li><li>LLM-as-Judge 评估幻觉率</li></ul>'

lm["L120"] = '<h2>实验目标</h2>\n<p>CloudWatch 监控 LLM 应用。</p>\n<ul><li>Metrics：延迟、错误率</li><li>Alarm：阈值告警</li><li>Logs：排查错误</li></ul>'

lm["L121"] = '<h2>Computer Use + Claude Code</h2>\n<h3>Computer Use</h3>\n<p>看屏幕 + 鼠标点击 + 打字。适合自动化无 API 的遗留系统。</p>\n<h3>Claude Code</h3>\n<p>Terminal Agent：读代码、改文件、跑命令。适合大规模重构。</p>'

lm["L122"] = '<h2>Agent Ops 最佳实践</h2>\n<h3>必须做</h3>\n<ul><li>max_iterations=10</li><li>工具 timeout 30s</li><li>token 上限</li><li>完整 trace</li></ul>\n<h3>不要做</h3>\n<ul><li>❌ 不受限数据库写权限</li><li>❌ 自主发邮件</li><li>❌ 无 sandbox 执行代码</li></ul>'

lm["L123"] = '<h2>MCP Integration</h2>\n<h3>常用 Server</h3>\n<ul><li>@anthropic/mcp-filesystem</li><li>@anthropic/mcp-github</li><li>@anthropic/mcp-slack</li><li>@anthropic/mcp-postgres</li></ul>'

lm["L124"] = '<h2>MCP Project</h2>\n<p>数据分析 Agent：查数据库 → 图表 → 报告。</p>\n<ul><li>query_db — SQL 查询</li><li>generate_chart — 图表</li><li>send_report — 报告</li></ul>'

lm["L125"] = '<h2>Phase 3 总结</h2>\n<ul><li>Agent vs Chain、ReAct</li><li>Function Calling</li><li>Agent SDK 选型</li><li>Multi-Agent + LangGraph</li><li>Memory + Mem0</li><li>MCP + A2A</li><li>Agent Ops</li><li>Hallucination Detection</li></ul>'

# Apply
applied = 0
for phase in outline["phases"]:
    for lesson in phase["lessons"]:
        if lesson["code"] in lm:
            lesson["learningMaterial"] = lm[lesson["code"]]
            applied += 1

with open("curriculum/ai-engineer-bootcamp/public/outline.json", "w") as f:
    json.dump(outline, f, ensure_ascii=False, indent=2)

total_lm = sum(1 for p in outline["phases"] for l in p["lessons"] if l.get("learningMaterial") and len(l["learningMaterial"]) > 50)
print(f"Phase 3: Applied {applied}")
print(f"Total: {total_lm}/157")
