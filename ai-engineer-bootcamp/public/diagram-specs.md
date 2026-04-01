# Prompt Lab Diagram Specifications

7 diagrams needed for prompt-labs config files. Each has a `<!-- TODO: create this diagram -->` marker and an `![](...)` image tag already in place.

---

## Diagram 1: System Prompt Design — Multi-Tenant Architecture

**File**: `prompt-labs/system-prompt-design.ts`
**Location**: Step id=7 (concept), after the multi-tenant `BASE_TEMPLATE` code block showing `{company_name}`, `{custom_rules}`, `{tone_style}` variable slots
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/system-prompt-design/multi-tenant-architecture.png`

### Type
Architecture diagram (layered)

### Content
Shows how a SaaS platform serves different AI personalities to different tenants using a shared base template + per-tenant configuration. The key insight: security rules live in the immutable base layer, tenant customization is sandboxed to business logic and tone only.

**Nodes/Boxes:**

1. **Base Template** (top layer, full width) — label: "Base Template (Immutable)", color: #6366f1 (indigo). Contains three sub-items listed inside:
   - "Security Rules: no leak system prompt, no competitor talk"
   - "Scope Rules: redirect to human when out of scope"
   - "Variable Slots: {company_name}, {product_name}, {custom_rules}, {tone_style}"

2. **Tenant A Config** (bottom left) — label: "Tenant A Config", color: #10b981 (teal). Contains:
   - "company_name: AcmeCorp"
   - "product_name: AcmeBot"
   - "custom_rules: Focus on returns policy"
   - "tone_style: Formal, professional"

3. **Tenant B Config** (bottom center) — label: "Tenant B Config", color: #FF914D (orange). Contains:
   - "company_name: FunShop"
   - "product_name: ShopBuddy"
   - "custom_rules: Upsell accessories"
   - "tone_style: Casual, friendly"

4. **Tenant C Config** (bottom right) — label: "Tenant C Config", color: #38bdf8 (sky blue). Contains:
   - "company_name: HealthCo"
   - "product_name: MedAssist"
   - "custom_rules: Never give medical advice"
   - "tone_style: Empathetic, careful"

5. **Assembled Prompt A** (below Tenant A) — label: "Final Prompt A", color: light indigo fill
6. **Assembled Prompt B** (below Tenant B) — label: "Final Prompt B", color: light indigo fill
7. **Assembled Prompt C** (below Tenant C) — label: "Final Prompt C", color: light indigo fill

8. **Red X overlay** (on Tenant B) — small annotation: "Tenant tried 'Ignore security rules' in custom_rules — blocked by template isolation", color: #ff5757 (red)

**Arrows/Connections:**
- Base Template → Tenant A Config: "merge" (dashed)
- Base Template → Tenant B Config: "merge" (dashed)
- Base Template → Tenant C Config: "merge" (dashed)
- Tenant A Config → Assembled Prompt A: "render"
- Tenant B Config → Assembled Prompt B: "render"
- Tenant C Config → Assembled Prompt C: "render"

**Color scheme:**
- Primary: #6366f1 (indigo) — base template and final prompts
- Success: #10b981 (teal) — Tenant A
- Warning: #FF914D (orange) — Tenant B
- Info: #38bdf8 (sky blue) — Tenant C
- Error: #ff5757 (red) — blocked attempt annotation

### Suggested dimensions
- Width: 900px
- Height: 550px
- Format: PNG with transparent background

### Notes
- The "blocked" annotation is important; it illustrates the text's point that a tenant tried to override security rules via custom_rules but the template structure prevented it.
- Keep text in Chinese where it matches the surrounding content (labels can be English since the code example uses English variable names).

---

## Diagram 2: Hallucination Defense — Fact-Check Pipeline

**File**: `prompt-labs/hallucination-defense.ts`
**Location**: Step id=7 (concept), after the `factuality_score` Python code block, before the ASCII flowchart
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/hallucination-defense/fact-check-pipeline.png`

### Type
Flowchart (horizontal, with branching)

### Content
Shows the production-grade hallucination defense pipeline: user question flows through RAG retrieval, LLM generation, fact-checking, and conditional routing based on factuality score thresholds.

**Nodes/Boxes:**

1. **User Question** (left, rounded rectangle) — label: "用户问题", color: #6366f1 (indigo)
2. **RAG Retrieval** (rectangle) — label: "RAG 检索文档", color: #6366f1 (indigo)
3. **LLM Generation** (rectangle) — label: "LLM 生成回答", color: #6366f1 (indigo)
4. **Fact Check** (diamond/decision) — label: "Fact Check\n逐条对比原文", color: #FF914D (orange border)
5. **Score > 0.8** (output, green) — label: "直接返回\n✓ 可信", color: #10b981 (teal)
6. **Score 0.5-0.8** (output, yellow) — label: "返回 + 灰色提示\n⚠ '此回答可能不完全准确'", color: #fbbf24 (amber)
7. **Score < 0.5** (output, red) — label: "不返回\n✗ '建议查阅原始文档'", color: #ff5757 (red)
8. **Human Review Queue** (rectangle, below red output) — label: "人工审核队列", color: #ff5757 (red, dashed border)

**Arrows/Connections:**
- User Question → RAG Retrieval: (solid)
- RAG Retrieval → LLM Generation: "Retrieved docs as context"
- LLM Generation → Fact Check: (solid)
- Fact Check → Score > 0.8: "factuality > 0.8"
- Fact Check → Score 0.5-0.8: "0.5 ~ 0.8"
- Fact Check → Score < 0.5: "factuality < 0.5"
- Score < 0.5 → Human Review Queue: (dashed)

**Color scheme:**
- Primary: #6366f1 (indigo) — main flow nodes
- Success: #10b981 (teal) — high confidence pass
- Warning: #fbbf24 (amber) — medium confidence with caveat
- Error: #ff5757 (red) — low confidence block
- Orange: #FF914D — decision diamond

### Suggested dimensions
- Width: 950px
- Height: 450px
- Format: PNG with transparent background

### Notes
- The three threshold bands (>0.8, 0.5-0.8, <0.5) are central to this diagram. Make the score labels prominent.
- The text mentions these thresholds "took 3 weeks to stabilize", so they should look like carefully tuned values.

---

## Diagram 3: Code Generation — Sandbox Execution Flow

**File**: `prompt-labs/code-generation.ts`
**Location**: Step id=6 (concept), after the E2B Sandbox TypeScript code block and the "don't do this" warnings
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/code-generation/sandbox-flow.png`

### Type
Flowchart (vertical, with security boundary)

### Content
Shows how LLM-generated code is safely executed in an E2B sandbox, contrasted with the unsafe direct execution path. Emphasizes the isolation boundary.

**Nodes/Boxes:**

1. **LLM** (top, rounded) — label: "LLM 生成代码", color: #6366f1 (indigo)
2. **Generated Code** (rectangle) — label: "Generated Code\n(untrusted)", color: #FF914D (orange border, dashed)

3. **Security Boundary** (large dashed rectangle enclosing nodes 4-6) — label: "E2B Sandbox (隔离环境)", color: #10b981 (teal dashed border)
4. **Sandbox Create** (inside boundary) — label: "Sandbox.create()\n~150ms startup", color: #10b981 (teal)
5. **Run Code** (inside boundary) — label: "sandbox.runCode()\ntimeout: 30s", color: #10b981 (teal)
6. **Result** (inside boundary) — label: "stdout / stderr / artifacts", color: #10b981 (teal)

7. **Safe Output** (bottom, rounded) — label: "返回结果给用户", color: #6366f1 (indigo)

8. **Unsafe Path** (right side, crossed out) — label: "exec() / child_process\n❌ 直接执行", color: #ff5757 (red), with a large red X or strikethrough
9. **Danger** (below unsafe path) — label: "rm -rf / 、数据泄露", color: #ff5757 (red)

**Arrows/Connections:**
- LLM → Generated Code: (solid)
- Generated Code → Sandbox Create: "Safe path ✓" (green arrow)
- Sandbox Create → Run Code: (solid)
- Run Code → Result: (solid)
- Result → Safe Output: (solid, exits boundary)
- Generated Code → Unsafe Path: "Unsafe path ✗" (red dashed arrow)
- Unsafe Path → Danger: (red arrow)

**Color scheme:**
- Primary: #6366f1 (indigo) — LLM and output
- Success: #10b981 (teal) — sandbox boundary and safe execution
- Warning: #FF914D (orange) — untrusted code
- Error: #ff5757 (red) — unsafe direct execution

### Suggested dimensions
- Width: 750px
- Height: 600px
- Format: PNG with transparent background

### Notes
- The E2B sandbox boundary box is the visual centerpiece. Make it clearly look like an isolated container.
- The "unsafe path" should be visually de-emphasized (faded, crossed out) to show it as the anti-pattern.
- Include the "~150ms" and "30s timeout" numbers; they come directly from the text.

---

## Diagram 4: Context Engineering — Context Assembly Pipeline

**File**: `prompt-labs/context-engineering.ts`
**Location**: Step id=7 (concept), after the `build_context()` Python function with token budget management
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/context-engineering/context-assembly-pipeline.png`

### Type
Flowchart (horizontal, with token budget visualization)

### Content
Shows how context is assembled within a fixed token budget: system prompt takes a fixed chunk, then vector search results are packed in order until budget runs out, with the last document potentially truncated.

**Nodes/Boxes:**

1. **Token Budget Bar** (top, full width) — a horizontal stacked bar showing budget allocation:
   - Segment 1: "System Prompt (~500 tokens)" — color: #6366f1 (indigo), fixed width
   - Segment 2: "Doc 1 (800 tokens)" — color: #10b981 (teal)
   - Segment 3: "Doc 2 (600 tokens)" — color: #10b981 (teal), slightly lighter
   - Segment 4: "Doc 3 (400 tokens)" — color: #10b981 (teal), lighter still
   - Segment 5: "Doc 4 (truncated)" — color: #FF914D (orange), with a scissors icon or jagged edge
   - Segment 6: "Remaining (unused)" — color: #e5e7eb (gray), striped/hatched
   - Total bar labeled: "Budget: 4000 tokens"

2. **Pipeline Flow** (below the bar):
   - **Question** (rounded) — label: "用户问题", color: #6366f1
   - **Vector Search** (rectangle) — label: "vector_search()\ntop_k=10", color: #6366f1
   - **Budget Check Loop** (diamond) — label: "doc_tokens <= remaining?", color: #FF914D
   - **Add Doc** (rectangle) — label: "selected_docs.append(doc)\nremaining -= doc_tokens", color: #10b981
   - **Truncate & Add** (rectangle) — label: "truncate_to_tokens()\nadd partial doc", color: #FF914D
   - **Output** (rounded) — label: "system_prompt + selected_docs", color: #6366f1

**Arrows/Connections:**
- Question → Vector Search: (solid)
- Vector Search → Budget Check Loop: "10 candidate docs"
- Budget Check Loop → Add Doc: "Yes (fits)"
- Budget Check Loop → Truncate & Add: "No (partial fit)"
- Add Doc → Budget Check Loop: "next doc" (loop back)
- Truncate & Add → Output: "break"
- Add Doc → Output: "budget exhausted" (when loop ends)

**Color scheme:**
- Primary: #6366f1 (indigo) — system prompt, main flow
- Success: #10b981 (teal) — docs that fit
- Warning: #FF914D (orange) — truncated doc, decision points
- Neutral: #e5e7eb (gray) — unused budget

### Suggested dimensions
- Width: 900px
- Height: 500px
- Format: PNG with transparent background

### Notes
- The token budget bar at the top is the key visual. It should look like a progress bar divided into segments, making it immediately obvious that context assembly is a packing problem.
- The text compares this to "writing a resume with a one-page limit" -- the visual should convey that constraint.

---

## Diagram 5: Chain of Thought — CoT Routing Decision Flow

**File**: `prompt-labs/chain-of-thought.ts`
**Location**: Step id=6 (concept), in the "Smart Routing" section, before the LangGraph Python code
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/chain-of-thought/cot-routing-flow.png`

### Type
Decision tree / flowchart

### Content
Shows a complexity-based router that sends simple questions to a cheap/fast direct-answer path and complex questions through the full CoT reasoning path. The LangGraph pattern: classify complexity, then branch.

**Nodes/Boxes:**

1. **User Query** (left, rounded) — label: "用户问题", color: #6366f1 (indigo)
2. **Complexity Classifier** (diamond) — label: "estimate_complexity()\ncomplexity > 0.7?", color: #FF914D (orange)

3. **CoT Path** (upper branch):
   - **CoT Node** (rectangle) — label: "cot_node\nGPT-4o + CoT prompt", color: #6366f1 (indigo)
   - **Extract** (rectangle) — label: "extract <thinking> + <answer>", color: #6366f1 (indigo)
   - **CoT Cost Badge** — small annotation: "~1500 tokens, ~$0.02", color: #ff5757 (red text)

4. **Direct Path** (lower branch):
   - **Direct Node** (rectangle) — label: "direct_node\nGPT-4o-mini", color: #10b981 (teal)
   - **Direct Cost Badge** — small annotation: "~200 tokens, ~$0.001", color: #10b981 (teal text)

5. **Response** (right, rounded) — label: "最终回答", color: #6366f1 (indigo)

6. **Example queries** (annotations near branches):
   - Near CoT path: "'分析这段代码的安全漏洞'" (complex)
   - Near Direct path: "'营业时间几点？'" (simple)

**Arrows/Connections:**
- User Query → Complexity Classifier: (solid)
- Complexity Classifier → CoT Node: "complexity > 0.7 (complex)" (upper branch)
- CoT Node → Extract: (solid)
- Extract → Response: (solid)
- Complexity Classifier → Direct Node: "complexity <= 0.7 (simple)" (lower branch)
- Direct Node → Response: (solid)

**Color scheme:**
- Primary: #6366f1 (indigo) — main flow and CoT path
- Success: #10b981 (teal) — direct/cheap path
- Warning: #FF914D (orange) — classifier decision
- Error: #ff5757 (red) — cost annotation for expensive path

### Suggested dimensions
- Width: 850px
- Height: 400px
- Format: PNG with transparent background

### Notes
- The cost comparison is the key message. The text describes going from $800/mo to $2400/mo by applying CoT everywhere. The diagram should make the 10x cost difference between paths visually obvious.
- Include the example queries as speech-bubble annotations to make it concrete.

---

## Diagram 6: Prompt Injection Defense — Security Testing Pipeline

**File**: `prompt-labs/prompt-injection-defense.ts`
**Location**: Step id=7 (concept), after the Garak CLI example, before "部署前跑安全测试"
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/prompt-injection-defense/security-pipeline.png`

### Type
Flowchart (horizontal, CI/CD pipeline style)

### Content
Shows the security testing pipeline for AI applications: development-time scanning with promptfoo in CI, quarterly deep audits with Garak, and runtime protection with LLM Guard. Three layers of defense at different stages.

**Nodes/Boxes:**

1. **Dev Time** (left section, labeled "开发阶段"):
   - **Code Change** (rounded) — label: "修改 System Prompt", color: #6366f1 (indigo)
   - **CI Pipeline** (rectangle) — label: "CI: promptfoo\n50 attack cases", color: #6366f1 (indigo)
   - **Pass/Fail Gate** (diamond) — label: "All pass?", color: #FF914D (orange)
   - **Block Deploy** (rectangle, bottom) — label: "❌ 阻止部署\n通知开发者", color: #ff5757 (red)

2. **Pre-Deploy** (center section, labeled "部署前"):
   - **Garak Audit** (rectangle) — label: "Garak 安全审计\n100+ attack probes\n~30 min", color: #FF914D (orange)
   - **Audit Report** (document shape) — label: "安全报告", color: #FF914D (orange)

3. **Runtime** (right section, labeled "运行时"):
   - **User Input** (rounded) — label: "用户输入", color: #6366f1 (indigo)
   - **LLM Guard Input Scan** (rectangle) — label: "LLM Guard\nInput Scanners\n(Injection, Toxicity, TokenLimit)", color: #10b981 (teal)
   - **LLM** (rectangle) — label: "LLM", color: #6366f1 (indigo)
   - **LLM Guard Output Scan** (rectangle) — label: "LLM Guard\nOutput Scanners\n(Sensitive, Relevance)", color: #10b981 (teal)
   - **Safe Response** (rounded) — label: "安全回答", color: #10b981 (teal)
   - **Blocked** (rectangle) — label: "拒绝: '检测到异常输入'", color: #ff5757 (red)

**Arrows/Connections:**
- Code Change → CI Pipeline: (solid)
- CI Pipeline → Pass/Fail Gate: (solid)
- Pass/Fail Gate → Garak Audit: "Pass ✓" (green)
- Pass/Fail Gate → Block Deploy: "Fail ✗" (red)
- Garak Audit → Audit Report: (solid)
- Audit Report → Deploy (implied): "季度审计" annotation
- User Input → LLM Guard Input Scan: (solid)
- LLM Guard Input Scan → LLM: "Clean ✓" (green)
- LLM Guard Input Scan → Blocked: "Detected ✗" (red)
- LLM → LLM Guard Output Scan: (solid)
- LLM Guard Output Scan → Safe Response: "Clean ✓" (green)

**Color scheme:**
- Primary: #6366f1 (indigo) — core pipeline flow
- Success: #10b981 (teal) — LLM Guard protection, safe outputs
- Warning: #FF914D (orange) — Garak audit phase
- Error: #ff5757 (red) — blocked/failed states

### Suggested dimensions
- Width: 1100px
- Height: 500px
- Format: PNG with transparent background

### Notes
- This is a three-stage pipeline. Use vertical dividers or background shading to separate "Dev Time", "Pre-Deploy", and "Runtime" sections.
- The CI integration story is important: the text mentions a real incident where a colleague's "you can answer in English" rule broke injection defenses and CI caught it.
- The comparison to "running OWASP ZAP before deploying a web app" frames this as standard practice, not optional.

---

## Diagram 7: Few-Shot — Dynamic Few-Shot Pipeline

**File**: `prompt-labs/few-shot.ts`
**Location**: Step id=6 (concept), at the top of the "Dynamic Few-Shot and Vector Retrieval" section, before the ASCII pipeline
**Image path**: `https://jr-web.s3.ap-southeast-2.amazonaws.com/labs/prompt-labs/few-shot/dynamic-few-shot-pipeline.png`

### Type
Architecture diagram (horizontal pipeline)

### Content
Shows the dynamic few-shot example retrieval pipeline: user input is embedded, similar examples are retrieved from a vector database, and the top-K examples are assembled into the prompt before sending to the LLM. Replaces static hardcoded examples with semantically relevant ones.

**Nodes/Boxes:**

1. **User Input** (left, rounded) — label: "用户输入\n'你们支持花呗分期吗'", color: #6366f1 (indigo)
2. **Embedding** (rectangle) — label: "OpenAI Embedding\ntext-embedding-3-small", color: #6366f1 (indigo)
3. **Vector DB** (cylinder/database shape) — label: "示例库\nPinecone / Chroma / pgvector\n数百个标注示例", color: #FF914D (orange)
4. **Similarity Search** (rectangle) — label: "向量相似度搜索\nTop-K (k=3)", color: #FF914D (orange)

5. **Retrieved Examples** (stacked cards, 3 cards):
   - Card 1: "花呗能分几期？ → 支付", color: #10b981 (teal)
   - Card 2: "微信支付怎么绑定？ → 支付", color: #10b981 (teal)
   - Card 3: "信用卡付款失败 → 支付", color: #10b981 (teal)

6. **Prompt Assembly** (rectangle) — label: "组装 Prompt\nSystem + Few-Shot Examples + User Query", color: #6366f1 (indigo)
7. **LLM** (rounded) — label: "LLM\n→ '支付' (correct)", color: #6366f1 (indigo)

8. **Contrast annotation** (bottom, faded/crossed out):
   - "Static examples: '退款要多久到账' → 售后" with a red X
   - Label: "固定示例匹配不了支付问题 → 错误分类为 '售后'"

**Arrows/Connections:**
- User Input → Embedding: (solid)
- Embedding → Similarity Search: "query vector"
- Vector DB → Similarity Search: "search" (bidirectional or from DB)
- Similarity Search → Retrieved Examples: "Top-3 most similar"
- Retrieved Examples → Prompt Assembly: (solid)
- Prompt Assembly → LLM: (solid)

**Color scheme:**
- Primary: #6366f1 (indigo) — main pipeline flow
- Success: #10b981 (teal) — retrieved relevant examples
- Warning: #FF914D (orange) — vector DB and search
- Error: #ff5757 (red) — contrast with static (wrong) approach

### Suggested dimensions
- Width: 1000px
- Height: 450px
- Format: PNG with transparent background

### Notes
- The "contrast annotation" at the bottom is critical. The text tells a specific story: static examples returned "退款要多久到账" (refund timing) for a payment question, causing misclassification. The diagram should show why dynamic retrieval fixes this.
- The vector database should be visually prominent since it is the architectural differentiator from static few-shot.
- Use the actual Chinese example text from the code ("花呗分期", "退款", etc.) to match the surrounding content.
