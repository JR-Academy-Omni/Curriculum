# Lab 插图规格文档

7 张插图需要制作，对应 `prompt-labs/` 配置文件中的 `<!-- TODO: create this diagram -->` 标记。每张图已有 `![](S3 URL)` 占位。

**通用风格**: Neo-Brutalism (黑边框 2-3px solid #000, 粗线条连接箭头, 明亮配色, offset box-shadow 可选)。背景 #fff1e7 或透明。字体 DM Sans (英文) / Noto Sans SC (中文)。

---

## System Prompt Design — Multi-Tenant Architecture

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/system-prompt-design.ts, Step 7
**图片类型**: 架构图 (分层)
**建议尺寸**: 900x550px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/system-prompt-design/multi-tenant-architecture.png`

### 内容描述
展示 SaaS 多租户 System Prompt 架构：一个不可变的基础模板(含安全规则)在顶层，下方三个租户各自配置业务逻辑和语气变量，合并渲染成最终 Prompt。重点突出：安全规则在基础层不可被租户覆盖。

### 节点/元素
1. **Base Template** (顶层, 全宽, #6366f1 indigo 填充, 黑边框) — "Base Template (Immutable)"，内含三条:
   - "Security Rules: no leak system prompt, no competitor talk"
   - "Scope Rules: redirect to human when out of scope"
   - "Variable Slots: {company_name}, {product_name}, {custom_rules}, {tone_style}"
2. **Tenant A Config** (左下, #10b981 teal) — company_name: AcmeCorp, tone: Formal
3. **Tenant B Config** (中下, #FF914D orange) — company_name: FunShop, tone: Casual
4. **Tenant C Config** (右下, #38bdf8 sky blue) — company_name: HealthCo, tone: Empathetic
5. **Final Prompt A/B/C** (各租户下方, 浅 indigo 填充)
6. **Red X 标注** (Tenant B 上方, #ff5757) — "Tenant tried 'Ignore security rules' in custom_rules — blocked by template isolation"

### 连接
- Base Template → 三个 Tenant Config: 虚线, 标 "merge"
- 各 Tenant Config → 对应 Final Prompt: 实线, 标 "render"

### Alt Text
SaaS multi-tenant System Prompt architecture diagram. A shared immutable base template containing security rules sits at the top. Three tenant configurations below (AcmeCorp, FunShop, HealthCo) each customize business logic and tone. Variables merge into final prompts. A red annotation shows that Tenant B's attempt to override security rules via custom_rules was blocked by template isolation.

---

## Hallucination Defense — Fact-Check Pipeline

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/hallucination-defense.ts, Step 7
**图片类型**: 流程图 (水平, 含分支)
**建议尺寸**: 950x450px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/hallucination-defense/fact-check-pipeline.png`

### 内容描述
生产级幻觉防御流水线：用户问题经 RAG 检索、LLM 生成回答后，进入 Fact Check 环节逐条对比原文，按 factuality 分数三档路由——高置信直接返回、中置信加灰色提示、低置信拒绝返回并进入人工审核队列。

### 节点/元素
1. **用户问题** (左侧, 圆角矩形, #6366f1)
2. **RAG 检索文档** (矩形, #6366f1)
3. **LLM 生成回答** (矩形, #6366f1)
4. **Fact Check 逐条对比原文** (菱形决策节点, #FF914D 橙色边框)
5. **直接返回 ✓ 可信** (输出, #10b981 teal) — factuality > 0.8
6. **返回 + 灰色提示 ⚠** (输出, #fbbf24 amber) — 0.5 ~ 0.8, 标注 "此回答可能不完全准确"
7. **不返回 ✗** (输出, #ff5757 red) — < 0.5, 标注 "建议查阅原始文档"
8. **人工审核队列** (矩形, #ff5757 虚线边框, 位于低分输出下方)

### 连接
- 用户问题 → RAG → LLM → Fact Check: 实线箭头
- Fact Check 三路分支: 标注各自阈值范围
- 低分输出 → 人工审核队列: 虚线

### Alt Text
Hallucination defense pipeline flowchart. User question flows through RAG document retrieval and LLM generation into a Fact Check decision node. Three output branches based on factuality score: above 0.8 returns directly (green), 0.5-0.8 returns with a gray warning (amber), below 0.5 blocks the response and routes to a human review queue (red).

---

## Code Generation — Sandbox Execution Flow

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/code-generation.ts, Step 6
**图片类型**: 流程图 (垂直, 含安全边界)
**建议尺寸**: 750x600px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/code-generation/sandbox-flow.png`

### 内容描述
LLM 生成的代码通过 E2B Sandbox 安全执行的流程，与不安全的直接执行路径(exec/child_process)形成对比。E2B 隔离边界是视觉核心。

### 节点/元素
1. **LLM 生成代码** (顶部, 圆角, #6366f1)
2. **Generated Code (untrusted)** (矩形, #FF914D 橙色虚线边框)
3. **E2B Sandbox 隔离环境** (大虚线矩形, #10b981 teal 虚线边框, 包裹节点 4-6)
4. **Sandbox.create() ~150ms startup** (内部, #10b981)
5. **sandbox.runCode() timeout: 30s** (内部, #10b981)
6. **stdout / stderr / artifacts** (内部, #10b981)
7. **返回结果给用户** (底部, 圆角, #6366f1)
8. **exec() / child_process ❌ 直接执行** (右侧, #ff5757, 划线/半透明表示反模式)
9. **rm -rf / 、数据泄露** (右侧下方, #ff5757)

### 连接
- LLM → Generated Code → Sandbox Create: 绿色箭头标 "Safe path ✓"
- Sandbox 内部顺序连接
- Result → 返回结果: 实线, 穿出隔离边界
- Generated Code → Unsafe Path: 红色虚线标 "Unsafe path ✗"

### Alt Text
Code execution safety flowchart comparing two paths. The safe path routes LLM-generated untrusted code through an E2B Sandbox (150ms startup, 30s timeout) that isolates execution and returns stdout/stderr safely. The unsafe path using exec() or child_process is crossed out in red, leading to dangers like rm -rf and data leaks.

---

## Context Engineering — Context Assembly Pipeline

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/context-engineering.ts, Step 7
**图片类型**: 流程图 (水平, 含 Token 预算可视化)
**建议尺寸**: 900x500px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/context-engineering/context-assembly-pipeline.png`

### 内容描述
上下文组装流水线：在固定 4000 token 预算内，System Prompt 占固定份额，然后按相关度依次填入向量搜索结果文档，最后一个文档可能被截断。顶部用堆叠进度条直观展示 token 分配。

### 节点/元素
1. **Token 预算条** (顶部, 全宽堆叠条, 总标注 "Budget: 4000 tokens"):
   - System Prompt (~500 tokens) — #6366f1 indigo
   - Doc 1 (800 tokens) — #10b981 teal
   - Doc 2 (600 tokens) — #10b981 稍浅
   - Doc 3 (400 tokens) — #10b981 更浅
   - Doc 4 (truncated) — #FF914D orange, 锯齿边缘或剪刀图标
   - Remaining (unused) — #e5e7eb gray, 斜线填充
2. **Pipeline 流程** (预算条下方):
   - **用户问题** (圆角, #6366f1)
   - **vector_search() top_k=10** (矩形, #6366f1)
   - **doc_tokens <= remaining?** (菱形决策, #FF914D)
   - **selected_docs.append(doc)** (矩形, #10b981) — 循环回到决策节点
   - **truncate_to_tokens() add partial** (矩形, #FF914D)
   - **system_prompt + selected_docs** (圆角输出, #6366f1)

### 连接
- 用户问题 → vector_search → 决策菱形: 实线
- 决策 Yes → append → 循环回决策: 标 "next doc"
- 决策 No → truncate → 输出: 标 "break"
- append → 输出: 标 "budget exhausted"

### Alt Text
Context assembly pipeline with token budget visualization. A stacked progress bar at the top shows how a 4000-token budget is allocated: system prompt takes 500 tokens, followed by retrieved documents packed sequentially until the budget runs out, with the last document truncated. Below, a flowchart shows the greedy packing loop: vector search returns 10 candidates, each checked against remaining budget, added if it fits, or truncated and added as the final document.

---

## Chain of Thought — CoT Routing Decision Flow

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/chain-of-thought.ts, Step 6
**图片类型**: 决策树 / 流程图
**建议尺寸**: 850x400px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/chain-of-thought/cot-routing-flow.png`

### 内容描述
基于复杂度的智能路由：轻量分类器判断问题复杂度，简单问题走便宜模型(GPT-4o-mini)直接回答，复杂问题走 CoT 推理路径(GPT-4o)。重点突出两条路径的 10 倍成本差异。

### 节点/元素
1. **用户问题** (左侧, 圆角, #6366f1)
2. **estimate_complexity() complexity > 0.7?** (菱形, #FF914D)
3. **CoT 路径** (上分支):
   - **cot_node GPT-4o + CoT prompt** (矩形, #6366f1)
   - **extract <thinking> + <answer>** (矩形, #6366f1)
   - 成本标注: "~1500 tokens, ~$0.02" (#ff5757 红字)
   - 示例气泡: "'分析这段代码的安全漏洞'"
4. **Direct 路径** (下分支):
   - **direct_node GPT-4o-mini** (矩形, #10b981)
   - 成本标注: "~200 tokens, ~$0.001" (#10b981 teal 字)
   - 示例气泡: "'营业时间几点?'"
5. **最终回答** (右侧, 圆角, #6366f1)

### 连接
- 用户问题 → 分类器: 实线
- 分类器 → CoT 路径: 上方, 标 "complexity > 0.7 (complex)"
- 分类器 → Direct 路径: 下方, 标 "complexity <= 0.7 (simple)"
- 两路径汇聚 → 最终回答

### Alt Text
CoT routing decision flowchart. A user query enters a complexity classifier. Complex queries (above 0.7 threshold, e.g. "analyze security vulnerabilities in this code") route to GPT-4o with Chain-of-Thought reasoning at ~$0.02 per call. Simple queries (e.g. "what are the business hours?") route to GPT-4o-mini for direct answers at ~$0.001 per call, showing a 20x cost difference between paths.

---

## Prompt Injection Defense — Security Testing Pipeline

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/prompt-injection-defense.ts, Step 7
**图片类型**: 流程图 (水平, CI/CD 管道风格)
**建议尺寸**: 1100x500px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/prompt-injection-defense/security-pipeline.png`

### 内容描述
AI 应用的三阶段安全测试管道：开发阶段 CI 里用 promptfoo 跑 50 个攻击 case，部署前用 Garak 做季度安全审计(100+ probe)，运行时用 LLM Guard 做输入/输出扫描。三个阶段用背景色区分。

### 节点/元素
1. **开发阶段** (左区, 浅 indigo 背景):
   - **修改 System Prompt** (圆角, #6366f1)
   - **CI: promptfoo 50 attack cases** (矩形, #6366f1)
   - **All pass?** (菱形, #FF914D)
   - **❌ 阻止部署, 通知开发者** (矩形, #ff5757)
2. **部署前** (中区, 浅 orange 背景):
   - **Garak 安全审计 100+ attack probes ~30 min** (矩形, #FF914D)
   - **安全报告** (文档形状, #FF914D)
3. **运行时** (右区, 浅 teal 背景):
   - **用户输入** (圆角, #6366f1)
   - **LLM Guard Input Scanners (Injection, Toxicity, TokenLimit)** (矩形, #10b981)
   - **LLM** (矩形, #6366f1)
   - **LLM Guard Output Scanners (Sensitive, Relevance)** (矩形, #10b981)
   - **安全回答** (圆角, #10b981)
   - **拒绝: '检测到异常输入'** (矩形, #ff5757)

### 连接
- 开发: Code Change → CI → Pass/Fail Gate
- Pass → Garak Audit (绿色), Fail → Block Deploy (红色)
- Garak → 安全报告, 标注 "季度审计"
- 运行时: 用户输入 → Input Scan → LLM → Output Scan → 安全回答
- Input Scan → 拒绝 (红色虚线, 标 "Detected ✗")

### Alt Text
Three-stage AI security testing pipeline. Stage 1 (Development): system prompt changes trigger CI with promptfoo running 50 attack cases, blocking deploy on failure. Stage 2 (Pre-Deploy): Garak runs 100+ attack probes in quarterly security audits producing a report. Stage 3 (Runtime): LLM Guard scans both user input (injection, toxicity, token limit) and LLM output (sensitive data, relevance), blocking suspicious requests.

---

## Few-Shot — Dynamic Few-Shot Pipeline

**文件**: /Users/lightman/Documents/sites/jr-academy-ai/jr-academy-web-zh/src/config/prompt-labs/few-shot.ts, Step 6
**图片类型**: 架构图 (水平管道)
**建议尺寸**: 1000x450px
**风格**: Neo-Brutalism (黑边框, 粗线条, 明亮配色)
**S3 路径**: `labs/prompt-labs/few-shot/dynamic-few-shot-pipeline.png`

### 内容描述
动态 Few-Shot 示例检索管道：用户输入经 Embedding 后在向量数据库(Pinecone/Chroma/pgvector)中做相似度搜索，取 Top-K 最相关示例组装进 Prompt 发给 LLM。底部用划线对比展示静态示例的失败案例。

### 节点/元素
1. **用户输入 '你们支持花呗分期吗'** (左侧, 圆角, #6366f1)
2. **OpenAI Embedding text-embedding-3-small** (矩形, #6366f1)
3. **示例库 Pinecone / Chroma / pgvector 数百个标注示例** (圆柱/数据库形状, #FF914D)
4. **向量相似度搜索 Top-K (k=3)** (矩形, #FF914D)
5. **检索到的示例** (三张堆叠卡片, #10b981):
   - "花呗能分几期? → 支付"
   - "微信支付怎么绑定? → 支付"
   - "信用卡付款失败 → 支付"
6. **组装 Prompt: System + Few-Shot Examples + User Query** (矩形, #6366f1)
7. **LLM → '支付' (correct)** (圆角, #6366f1)
8. **对比标注** (底部, 半透明/划线, #ff5757):
   - "Static examples: '退款要多久到账' → 售后" 加红色 X
   - "固定示例匹配不了支付问题 → 错误分类为 '售后'"

### 连接
- 用户输入 → Embedding → Similarity Search: 实线, 标 "query vector"
- 示例库 → Similarity Search: 双向或从库方向
- Search → 检索示例: 标 "Top-3 most similar"
- 检索示例 → Prompt 组装 → LLM: 实线

### Alt Text
Dynamic few-shot pipeline architecture. A user query about Alipay installments is embedded via OpenAI text-embedding-3-small and used to search a vector database of labeled examples. The top-3 semantically similar examples (all payment-related) are retrieved and assembled into the prompt before sending to the LLM, which correctly classifies as "payment". A crossed-out contrast at the bottom shows how static examples would have returned an irrelevant refund example, causing misclassification as "after-sales".
