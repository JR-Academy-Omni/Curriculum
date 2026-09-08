import fs from "node:fs";

const outlinePath = new URL("../public/outline.json", import.meta.url);
const pagesPath = new URL("../public/pages.json", import.meta.url);
const outline = JSON.parse(fs.readFileSync(outlinePath, "utf8"));

const theoryCodes = new Set([
  "L16",
  "L28",
  "L37",
  "L58",
  "C7T05",
  "L101",
  "L112",
  "L122",
  "L133",
  "L138",
  "L171a",
  "L183",
]);
const practiceCodes = new Set([
  "C7P01",
  "C7P02",
  "C7P03",
  "C7P04",
  "C7P05",
  "L60",
  "C7P07",
  "L104",
  "L119",
  "C7P10",
  "C7P11",
  "C7P12",
  "L171",
]);
const liveCodes = new Set([...theoryCodes, ...practiceCodes]);

const cohort7Schedule = [
  ["L16", 1, "theory"],
  ["C7P01", 1, "practice"],
  ["L28", 2, "theory"],
  ["C7P02", 2, "practice"],
  ["L37", 3, "theory"],
  ["C7P03", 3, "practice"],
  ["L58", 4, "theory"],
  ["C7P04", 4, "practice"],
  ["C7T05", 5, "theory"],
  ["C7P05", 5, "practice"],
  ["L101", 6, "theory"],
  ["C7P07", 6, "practice"],
  ["L112", 7, "theory"],
  ["L60", 7, "practice"],
  ["L122", 8, "theory"],
  ["L104", 8, "practice"],
  ["L133", 9, "theory"],
  ["L119", 9, "practice"],
  ["L138", 10, "theory"],
  ["C7P10", 10, "practice"],
  ["L171a", 11, "theory"],
  ["C7P11", 11, "practice"],
  ["L183", 12, "theory"],
  ["C7P12", 12, "practice"],
  ["L171", 13, "practice"],
];

const library = (name, type, role, url) => ({ name, type, role, url });

// Core Stack is used or demonstrated in the lesson. Popular Ecosystem is for
// interview recognition and trade-off comparison; it is not an install list.
const cohort7LibraryMap = {
  L16: {
    core: [
      library(
        "OpenAI SDK / Anthropic SDK",
        "provider-sdk",
        "Inspect the messages, tools, streaming, usage, and error contracts behind an AI system.",
        "https://platform.openai.com/docs/libraries",
      ),
      library(
        "tiktoken",
        "oss",
        "Count tokens and make context-cost behaviour visible.",
        "https://github.com/openai/tiktoken",
      ),
    ],
    ecosystem: [
      library(
        "Hugging Face Transformers",
        "oss",
        "Recognise the standard open-model library and its model/tokenizer pipeline.",
        "https://huggingface.co/docs/transformers/",
      ),
    ],
  },
  C7P01: {
    core: [
      library(
        "Claude Code",
        "provider-tool",
        "Run the course AI Coding workflow against the starter project.",
        "https://docs.anthropic.com/en/docs/claude-code/overview",
      ),
      library(
        "GitHub Spec Kit",
        "oss",
        "Turn product intent into specification, plan, tasks, and implementation evidence.",
        "https://github.github.com/spec-kit/",
      ),
    ],
    ecosystem: [
      library(
        "OpenAI Codex CLI",
        "oss",
        "Compare another repository-aware coding agent workflow.",
        "https://github.com/openai/codex",
      ),
      library(
        "Aider",
        "oss",
        "Recognise a popular terminal-based pair-programming workflow.",
        "https://github.com/Aider-AI/aider",
      ),
    ],
  },
  L28: {
    core: [
      library(
        "tiktoken",
        "oss",
        "Measure tokens, context-window pressure, and cacheable prompt prefixes.",
        "https://github.com/openai/tiktoken",
      ),
      library(
        "Hugging Face Transformers",
        "oss",
        "Inspect tokenizers, attention inputs, generation parameters, and KV-cache behaviour.",
        "https://huggingface.co/docs/transformers/",
      ),
    ],
    ecosystem: [
      library(
        "vLLM",
        "oss",
        "Connect PagedAttention, continuous batching, and production inference efficiency.",
        "https://github.com/vllm-project/vllm",
      ),
      library(
        "llama.cpp",
        "oss",
        "Understand local inference, quantisation, and constrained-device trade-offs.",
        "https://github.com/ggml-org/llama.cpp",
      ),
    ],
  },
  C7P02: {
    core: [
      library(
        "shadcn/ui",
        "oss",
        "Build editable application components instead of importing an opaque component package.",
        "https://ui.shadcn.com/",
      ),
      library(
        "Tailwind CSS",
        "oss",
        "Implement design tokens, responsive states, and consistent visual rules.",
        "https://tailwindcss.com/",
      ),
      library(
        "Storybook",
        "oss",
        "Review components and business states independently from full pages.",
        "https://storybook.js.org/",
      ),
      library(
        "Motion",
        "oss",
        "Add purposeful UI transitions and interaction feedback.",
        "https://motion.dev/",
      ),
    ],
    ecosystem: [],
  },
  L37: {
    core: [
      library(
        "Zod / Pydantic",
        "oss",
        "Define context and structured-output contracts at the TypeScript or Python boundary.",
        "https://zod.dev/",
      ),
      library(
        "tiktoken",
        "oss",
        "Budget context deliberately instead of guessing prompt size.",
        "https://github.com/openai/tiktoken",
      ),
    ],
    ecosystem: [
      library(
        "Instructor",
        "oss",
        "Compare schema-first structured output, validation, and retry patterns.",
        "https://python.useinstructor.com/",
      ),
    ],
  },
  C7P03: {
    core: [
      library(
        "Next.js",
        "oss",
        "Build the application shell and server/client boundaries used by the starter.",
        "https://nextjs.org/",
      ),
      library(
        "Zod",
        "oss",
        "Keep UI, API, and workflow state contracts executable.",
        "https://zod.dev/",
      ),
      library(
        "Prisma ORM",
        "oss",
        "Model persistent workflow data and migrations.",
        "https://www.prisma.io/orm",
      ),
      library(
        "Playwright",
        "oss",
        "Prove the non-AI vertical slice through browser-level acceptance tests.",
        "https://playwright.dev/",
      ),
    ],
    ecosystem: [],
  },
  L58: {
    core: [
      library(
        "Sentence Transformers",
        "oss",
        "Create embeddings and implement semantic retrieval.",
        "https://www.sbert.net/",
      ),
      library(
        "FAISS",
        "oss",
        "Build and inspect a local vector index without hiding retrieval fundamentals.",
        "https://github.com/facebookresearch/faiss",
      ),
    ],
    ecosystem: [
      library(
        "Qdrant",
        "oss",
        "Compare a production vector database with filters and operational APIs.",
        "https://qdrant.tech/",
      ),
      library(
        "pgvector",
        "oss",
        "Compare vector search inside an existing PostgreSQL data platform.",
        "https://github.com/pgvector/pgvector",
      ),
    ],
  },
  C7P04: {
    core: [
      library(
        "whisper.cpp / faster-whisper",
        "oss",
        "Implement local or server-side speech-to-text and compare deployment trade-offs.",
        "https://github.com/ggml-org/whisper.cpp",
      ),
      library(
        "Silero VAD",
        "oss",
        "Detect speech boundaries before transcription and reduce empty/noisy segments.",
        "https://github.com/snakers4/silero-vad",
      ),
      library(
        "MediaRecorder API",
        "web-platform",
        "Capture audio in the browser with explicit permission and fallback states.",
        "https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder",
      ),
    ],
    ecosystem: [],
  },
  C7T05: {
    core: [
      library(
        "Ragas",
        "oss",
        "Evaluate retrieval and grounded generation with repeatable metrics and test cases.",
        "https://docs.ragas.io/",
      ),
    ],
    ecosystem: [
      library(
        "DeepEval",
        "oss",
        "Compare a test-runner-style LLM evaluation framework.",
        "https://deepeval.com/",
      ),
      library(
        "Arize Phoenix",
        "oss",
        "Compare open-source tracing, datasets, and evaluation workflows.",
        "https://phoenix.arize.com/",
      ),
      library(
        "Langfuse",
        "oss",
        "Recognise a popular tracing, prompt, dataset, and evaluation platform.",
        "https://langfuse.com/",
      ),
    ],
  },
  C7P05: {
    core: [
      library(
        "GitHub Spec Kit",
        "oss",
        "Convert a feature specification into a plan, tasks, and reviewable implementation workflow.",
        "https://github.github.com/spec-kit/",
      ),
      library(
        "Mermaid",
        "oss",
        "Keep architecture and workflow diagrams versioned beside the code.",
        "https://mermaid.js.org/",
      ),
      library(
        "MkDocs Material",
        "oss",
        "Publish a searchable docs-as-code project wiki.",
        "https://squidfunk.github.io/mkdocs-material/",
      ),
      library(
        "markdownlint-cli2 + Lychee",
        "oss",
        "Automate Markdown quality and broken-link checks.",
        "https://github.com/DavidAnson/markdownlint-cli2",
      ),
    ],
    ecosystem: [
      library(
        "Claude Code Skills + Hooks",
        "provider-tool",
        "Create reusable project workflows and detect documentation drift after code changes.",
        "https://docs.anthropic.com/en/docs/claude-code/hooks",
      ),
    ],
  },
  L101: {
    core: [
      library(
        "MCP TypeScript SDK",
        "oss",
        "Build typed MCP clients and servers with Zod schemas.",
        "https://ts.sdk.modelcontextprotocol.io/v2/",
      ),
      library(
        "MCP Python SDK",
        "oss",
        "Build the same protocol boundary in Python with typed tools and resources.",
        "https://py.sdk.modelcontextprotocol.io/",
      ),
      library(
        "FastMCP",
        "oss",
        "Implement a typed Python MCP server quickly after the underlying protocol contract is clear.",
        "https://gofastmcp.com/",
      ),
      library(
        "MCP Inspector",
        "oss",
        "Inspect schemas, capabilities, tool results, and protocol errors interactively.",
        "https://github.com/modelcontextprotocol/inspector",
      ),
    ],
    ecosystem: [
      library(
        "Pi Agent Harness (pi-mono)",
        "oss",
        "Recognise a popular unified LLM API, agent runtime, and coding-agent CLI; do not misrepresent Pi core as a native MCP SDK.",
        "https://github.com/earendil-works/pi",
      ),
    ],
  },
  L60: {
    core: [
      library(
        "Sentence Transformers",
        "oss",
        "Embed the policy corpus with an explicit, inspectable pipeline.",
        "https://www.sbert.net/",
      ),
      library(
        "FAISS",
        "oss",
        "Implement local retrieval, metadata mapping, and evidence inspection from scratch.",
        "https://github.com/facebookresearch/faiss",
      ),
    ],
    ecosystem: [
      library(
        "Qdrant",
        "oss",
        "Plan the evolution from a local index to a production vector service.",
        "https://qdrant.tech/",
      ),
      library(
        "pgvector",
        "oss",
        "Plan the alternative evolution inside PostgreSQL.",
        "https://github.com/pgvector/pgvector",
      ),
    ],
  },
  L112: {
    core: [
      library(
        "Claude Agent SDK",
        "oss",
        "Build and inspect agent sessions, tools, MCP servers, permissions, hooks, streaming, and resume behaviour.",
        "https://github.com/anthropics/claude-agent-sdk-python",
      ),
      library(
        "OpenAI Agents SDK",
        "oss",
        "Inspect a minimal agent loop, tools, handoffs, guardrails, and tracing.",
        "https://openai.github.io/openai-agents-python/",
      ),
    ],
    ecosystem: [
      library(
        "PydanticAI",
        "oss",
        "Compare typed dependencies, tools, outputs, and validation in Python.",
        "https://ai.pydantic.dev/",
      ),
      library(
        "LangGraph",
        "oss",
        "Recognise graph state, persistence, interrupts, and controlled agent workflows.",
        "https://langchain-ai.github.io/langgraph/",
      ),
      library(
        "CrewAI",
        "oss",
        "Compare role-oriented agent orchestration.",
        "https://docs.crewai.com/",
      ),
      library(
        "AutoGen",
        "oss-ecosystem",
        "Compare event-driven multi-agent patterns and their operational cost.",
        "https://microsoft.github.io/autogen/",
      ),
    ],
  },
  C7P07: {
    core: [
      library(
        "Ragas",
        "oss",
        "Run the first reproducible retrieval and answer-quality test set.",
        "https://docs.ragas.io/",
      ),
      library(
        "pytest",
        "oss",
        "Turn evaluation cases into repeatable engineering tests.",
        "https://docs.pytest.org/",
      ),
    ],
    ecosystem: [
      library(
        "DeepEval",
        "oss",
        "Compare evaluation assertions and test reporting.",
        "https://deepeval.com/",
      ),
      library(
        "Phoenix / Langfuse",
        "oss",
        "Compare trace-driven diagnosis and dataset workflows.",
        "https://phoenix.arize.com/",
      ),
      library(
        "Promptfoo",
        "oss",
        "Compare prompt and model matrix evaluation from the CLI.",
        "https://www.promptfoo.dev/",
      ),
    ],
  },
  L122: {
    core: [
      library(
        "Claude Agent SDK",
        "oss",
        "Implement subagents, scoped tools, hooks, sessions, and programmable orchestration patterns.",
        "https://code.claude.com/docs/en/agent-sdk/overview",
      ),
      library(
        "Claude Managed Agents API",
        "provider-api",
        "Study coordinator rosters, context-isolated threads, persistent delegation, advisor escalation, and version pinning.",
        "https://platform.claude.com/docs/en/managed-agents/multi-agent",
      ),
    ],
    ecosystem: [
      library(
        "LangGraph",
        "oss",
        "Compare graph state, checkpoints, interrupts, and explicit workflow orchestration.",
        "https://langchain-ai.github.io/langgraph/",
      ),
      library(
        "OpenAI Agents SDK",
        "oss",
        "Compare a smaller primitives-first agent runtime.",
        "https://openai.github.io/openai-agents-python/",
      ),
      library(
        "AutoGen",
        "oss-ecosystem",
        "Evaluate message-driven multi-agent architecture trade-offs.",
        "https://microsoft.github.io/autogen/",
      ),
      library(
        "CrewAI",
        "oss",
        "Evaluate role and crew abstractions against explicit workflow control.",
        "https://docs.crewai.com/",
      ),
    ],
  },
  L104: {
    core: [
      library(
        "Prisma ORM / repository adapter",
        "oss",
        "Extract persistence behind repository interfaces before exposing any transport.",
        "https://www.prisma.io/orm",
      ),
      library(
        "MCP TypeScript/Python SDK",
        "oss",
        "Expose bounded tools through the official protocol SDK.",
        "https://modelcontextprotocol.io/docs/sdk",
      ),
      library(
        "Zod / Pydantic",
        "oss",
        "Validate tool inputs, outputs, permissions, and error shapes.",
        "https://zod.dev/",
      ),
      library(
        "MCP Inspector",
        "oss",
        "Test tool contracts before an agent is allowed to call them.",
        "https://github.com/modelcontextprotocol/inspector",
      ),
    ],
    ecosystem: [
      library(
        "FastMCP",
        "oss",
        "Compare faster server authoring after security boundaries are explicit.",
        "https://gofastmcp.com/",
      ),
    ],
  },
  L133: {
    core: [
      library(
        "LangGraph Checkpointer + Store",
        "oss",
        "Study thread state, cross-thread memory, replay, and lifecycle boundaries.",
        "https://langchain-ai.github.io/langgraph/concepts/persistence/",
      ),
    ],
    ecosystem: [
      library(
        "Mem0",
        "oss",
        "Compare an extraction-and-retrieval memory layer.",
        "https://docs.mem0.ai/",
      ),
      library(
        "Letta",
        "oss",
        "Compare stateful agent memory and archival memory concepts.",
        "https://docs.letta.com/",
      ),
      library(
        "LangMem",
        "oss",
        "Compare background memory extraction and consolidation.",
        "https://langchain-ai.github.io/langmem/",
      ),
    ],
  },
  L119: {
    core: [
      library(
        "Zod / Pydantic",
        "oss",
        "Keep agent state, tool contracts, and stop conditions explicit.",
        "https://zod.dev/",
      ),
      library(
        "OpenTelemetry",
        "oss",
        "Trace each bounded loop step, tool call, latency, and failure.",
        "https://opentelemetry.io/docs/languages/js/",
      ),
    ],
    ecosystem: [
      library(
        "LangGraph",
        "oss",
        "Compare the hand-built bounded loop with a graph runtime.",
        "https://langchain-ai.github.io/langgraph/",
      ),
      library(
        "PydanticAI",
        "oss",
        "Compare the same contracts in a typed agent framework.",
        "https://ai.pydantic.dev/",
      ),
    ],
  },
  L138: {
    core: [
      library(
        "LangGraph",
        "oss",
        "Study checkpoint, resume, interrupt, and replay patterns for production agents.",
        "https://langchain-ai.github.io/langgraph/",
      ),
      library(
        "OpenTelemetry",
        "oss",
        "Define portable traces, metrics, and correlation across agent components.",
        "https://opentelemetry.io/",
      ),
    ],
    ecosystem: [
      library(
        "Temporal",
        "oss",
        "Compare a durable workflow engine for long-running, failure-prone processes.",
        "https://temporal.io/",
      ),
    ],
  },
  C7P10: {
    core: [
      library(
        "PostgreSQL + pgvector",
        "oss",
        "Persist governed memory records, embeddings, provenance, and deletion state.",
        "https://github.com/pgvector/pgvector",
      ),
      library(
        "Zod / Pydantic",
        "oss",
        "Validate memory write, read, update, consent, and deletion contracts.",
        "https://zod.dev/",
      ),
      library(
        "OpenTelemetry",
        "oss",
        "Trace memory decisions and prove who wrote or retrieved each record.",
        "https://opentelemetry.io/",
      ),
    ],
    ecosystem: [
      library(
        "Mem0",
        "oss",
        "Compare a packaged memory layer after implementing the governed contract.",
        "https://docs.mem0.ai/",
      ),
      library(
        "Letta",
        "oss",
        "Compare stateful agent memory architecture.",
        "https://docs.letta.com/",
      ),
      library(
        "LangMem",
        "oss",
        "Compare memory extraction and consolidation workflows.",
        "https://langchain-ai.github.io/langmem/",
      ),
    ],
  },
  L171a: {
    core: [
      library(
        "Open Policy Agent",
        "oss",
        "Express permission and release policies as testable policy-as-code.",
        "https://www.openpolicyagent.org/",
      ),
      library(
        "Microsoft Presidio",
        "oss",
        "Detect and redact PII before sensitive data crosses model or logging boundaries.",
        "https://microsoft.github.io/presidio/",
      ),
      library(
        "A2A Protocol + Official SDK",
        "oss",
        "Govern agent identity, capability discovery, delegation, task exchange, and audit across independent agents.",
        "https://github.com/a2aproject/A2A",
      ),
    ],
    ecosystem: [
      library(
        "Guardrails AI",
        "oss",
        "Compare reusable validators and structured guardrails.",
        "https://www.guardrailsai.com/",
      ),
      library(
        "Promptfoo",
        "oss",
        "Automate prompt-injection and policy regression tests.",
        "https://www.promptfoo.dev/",
      ),
      library(
        "PyRIT",
        "oss",
        "Recognise an extensible AI red-team orchestration framework.",
        "https://azure.github.io/PyRIT/",
      ),
    ],
  },
  C7P11: {
    core: [
      library(
        "OpenTelemetry",
        "oss",
        "Instrument lifecycle hooks, model calls, tools, approvals, budgets, and failures.",
        "https://opentelemetry.io/",
      ),
      library(
        "Temporal or project-native state store",
        "oss",
        "Persist checkpoints and resume long-running work without repeating side effects.",
        "https://temporal.io/",
      ),
      library(
        "Zod / Pydantic",
        "oss",
        "Enforce schemas at every harness boundary.",
        "https://zod.dev/",
      ),
    ],
    ecosystem: [
      library(
        "LangGraph",
        "oss",
        "Compare framework-native durability and human interrupts with the explicit harness.",
        "https://langchain-ai.github.io/langgraph/",
      ),
    ],
  },
  L183: {
    core: [
      library(
        "LiteLLM",
        "oss",
        "Normalise provider calls, fallbacks, budgets, and routing policies behind one gateway.",
        "https://docs.litellm.ai/",
      ),
      library(
        "vLLM",
        "oss",
        "Understand the open-weight serving path and inference economics.",
        "https://github.com/vllm-project/vllm",
      ),
      library(
        "Ollama",
        "oss",
        "Compare local model execution for privacy, development, and offline constraints.",
        "https://github.com/ollama/ollama",
      ),
    ],
    ecosystem: [
      library(
        "RouteLLM",
        "research-reference",
        "Read the routing research and benchmark design; do not treat the 2024 repository as the default production router.",
        "https://github.com/lm-sys/RouteLLM",
      ),
    ],
  },
  C7P12: {
    core: [
      library(
        "LiteLLM",
        "oss",
        "Implement provider abstraction, routing, fallback, budget, and usage telemetry.",
        "https://docs.litellm.ai/",
      ),
      library(
        "OpenTelemetry",
        "oss",
        "Compare quality, latency, cost, fallback, and failure by route.",
        "https://opentelemetry.io/",
      ),
      library(
        "Promptfoo",
        "oss",
        "Run the same evaluation matrix across router policies and models.",
        "https://www.promptfoo.dev/",
      ),
    ],
    ecosystem: [
      library(
        "vLLM",
        "oss",
        "Add an open-weight production serving option.",
        "https://github.com/vllm-project/vllm",
      ),
      library(
        "Ollama",
        "oss",
        "Add a local or privacy-sensitive development route.",
        "https://github.com/ollama/ollama",
      ),
    ],
  },
  L171: {
    core: [
      library(
        "Ragas / DeepEval",
        "oss",
        "Run production evaluation cases and calibrated LLM-as-a-Judge checks.",
        "https://docs.ragas.io/",
      ),
      library(
        "Promptfoo",
        "oss",
        "Run regression, injection, leakage, and provider/model matrices.",
        "https://www.promptfoo.dev/",
      ),
      library(
        "OpenTelemetry / Langfuse",
        "oss",
        "Review traces, latency, cost, tool failures, and escalation evidence.",
        "https://opentelemetry.io/",
      ),
      library(
        "PyRIT",
        "oss",
        "Orchestrate repeatable adversarial security scenarios.",
        "https://azure.github.io/PyRIT/",
      ),
    ],
    ecosystem: [
      library(
        "garak",
        "oss",
        "Compare an automated LLM vulnerability scanner.",
        "https://github.com/NVIDIA/garak",
      ),
      library(
        "Microsoft Presidio",
        "oss",
        "Validate PII detection and redaction controls.",
        "https://microsoft.github.io/presidio/",
      ),
      library(
        "Open Policy Agent",
        "oss",
        "Validate permission and release policy decisions.",
        "https://www.openpolicyagent.org/",
      ),
    ],
  },
};

const videoCodes = new Set([
  "L21",
  "L34",
  "L54",
  "L57",
  "L66",
  "L75",
  "L77",
  "L79",
  "L87",
  "L90",
  "L91",
  "L98",
  "L111",
  "L115",
  "L126",
  "L130",
  "L142",
  "L146",
  "L147",
  "L149",
  "L154",
  "L156",
  "L158",
  "L159",
  "L160",
  "L161",
  "L164",
  "L165",
  "L167",
  "L168",
]);

const step = (order, type, title, duration) => ({
  order,
  type,
  title,
  description: title,
  duration,
});

const lesson = ({
  code,
  title,
  titleEn,
  description,
  descriptionEn,
  duration,
  steps,
  learningMaterial,
}) => ({
  code,
  title,
  description,
  type: "Lesson",
  isLive: true,
  duration,
  steps,
  labs: [],
  learns: [],
  learningMaterial:
    learningMaterial ?? `<h2>${title}</h2><p>${description}</p>`,
  title_en: titleEn,
  description_en: descriptionEn,
});

const additions = new Map([
  [
    "C7P01",
    {
      phase: 7,
      value: lesson({
        code: "C7P01",
        title: "AI Coding + ADLC：CareKind 项目启动",
        titleEn: "AI Coding + ADLC: CareKind Project Kickoff",
        description:
          "第七期 W1 实践课。用 Frame、Specify、Ground、Build、Evaluate、Safeguard、Operate 建立可复查的 AI Coding 循环，理解老师提供的 CareKind starter repo，并交付产品范围、workflow、acceptance criteria、开发规则和任务拆分；不要求第一周完成业务或 AI vertical slice。",
        descriptionEn:
          "Cohort 7 Week 1 practice. Establish a reviewable AI coding loop, understand the provided CareKind starter repository, and deliver product scope, workflows, acceptance criteria, development rules, and task breakdowns without requiring a business or AI vertical slice in the first week.",
        duration: 120,
        steps: [
          step(1, "LIVE", "Frame：明确用户、问题、风险与 non-goals", 20),
          step(
            2,
            "WORKSHOP",
            "Specify：PRD、acceptance criteria 与 test plan",
            20,
          ),
          step(
            3,
            "LAB",
            "Ground：repo context、agent rules 与 synthetic data boundary",
            20,
          ),
          step(
            4,
            "LAB",
            "Build：用 AI Coding 阅读 starter repo 并完成受控小改动",
            25,
          ),
          step(
            5,
            "EVALUATION",
            "Evaluate + Safeguard：review、测试计划与风险检查",
            20,
          ),
          step(
            6,
            "DELIVERABLE",
            "Operate：workflow map、task board 与开发证据",
            15,
          ),
        ],
      }),
    },
  ],
  [
    "C7P02",
    {
      phase: 7,
      value: lesson({
        code: "C7P02",
        title: "CareKind Product UI & Design System",
        titleEn: "CareKind Product UI and Design System",
        description:
          "第七期 W2 实践课。先把 W1 PRD、workflow、用户角色、参考风格与 non-goals 整理成 Claude 可执行的 Design Brief，再使用 Claude Code + frontend design workflow 生成并比较设计方向、建立 DESIGN.md、design tokens、组件规则与完整关键页面。学生必须通过视觉评审、响应式、accessibility 和业务状态检查修正 AI 结果，不能把一次生成当成交付。",
        descriptionEn:
          "Cohort 7 Week 2 practice. Turn the Week 1 PRD, workflow, user roles, visual references, and non-goals into a Claude-ready design brief, then use Claude Code with a frontend-design workflow to compare visual directions and build DESIGN.md, design tokens, component rules, and key pages. Students must review and correct the AI output for visual quality, responsiveness, accessibility, and business states.",
        duration: 120,
        steps: [
          step(
            1,
            "REVIEW",
            "把 W1 PRD、workflow、用户角色与 non-goals 整理成 Design Brief",
            10,
          ),
          step(2, "WORKSHOP", "定义信息架构、关键页面、参考风格与视觉约束", 15),
          step(
            3,
            "LAB",
            "Claude Code + frontend design：生成并比较设计方向，建立 DESIGN.md 与 design tokens",
            20,
          ),
          step(
            4,
            "LAB",
            "用 Claude 迭代核心页面、组件、导航与 responsive layout",
            30,
          ),
          step(
            5,
            "LAB",
            "设计 Draft、Review、Confirmed、Failed、Escalated 状态",
            20,
          ),
          step(
            6,
            "LAB",
            "加入 recording/transcribing 输入状态、动画和 accessibility",
            15,
          ),
          step(7, "DELIVERABLE", "现场 Product Design Review 与界面验收", 10),
        ],
        learningMaterial:
          "<h2>CareKind Product UI & Design System</h2><p>W2 Practice 把 Claude 作为产品设计与前端实现协作者，而不是一键页面生成器。学生先将 W1 的 PRD、workflow、用户角色、acceptance criteria、visual references 和 non-goals 整理成 <strong>Design Brief</strong>，再让 Claude Code 在明确技术栈与现有 repo context 下工作。</p><h3>Claude frontend design workflow</h3><ol><li><strong>Ground</strong>：提供现有代码、Design Brief、目标用户、信息架构、参考风格和禁止事项。</li><li><strong>Explore</strong>：要求 Claude 给出两个有明确差异的设计方向，比较 information density、hierarchy、interaction 与 implementation cost。</li><li><strong>Systemize</strong>：把选定方向固化为 DESIGN.md、color/type/spacing tokens、component variants 和 responsive rules。</li><li><strong>Build</strong>：分页面实现 navigation、Dashboard、Resident、Shift/Task、Care Activity、Documentation、Review/Confirm 与 Audit UI。</li><li><strong>Critique</strong>：用截图和真实状态回看，让 Claude 按具体问题迭代，而不是反复要求“更好看”。</li></ol><h3>Human review gates</h3><p>学生必须人工检查视觉层级、组件一致性、mobile layout、keyboard navigation、contrast、reduced motion、loading/empty/error states，以及 Draft、Review、Confirmed、Failed、Escalated 等业务状态。Claude 生成的 UI 只有通过这些检查才算完成。</p><h3>交付证据</h3><p>提交 Design Brief、DESIGN.md、design tokens、选型比较、关键 prompt/iteration 记录、before/after screenshots 和 Product Design Review。Voice recording/transcribing 只是 Documentation 中的一组输入状态，不是整周主线。</p>",
      }),
    },
  ],
  [
    "C7P03",
    {
      phase: 7,
      value: lesson({
        code: "C7P03",
        title: "Rapid CareKind MVP Build with Claude Code",
        titleEn: "Rapid CareKind MVP Build with Claude Code",
        description:
          "第七期 W3 实践课。基于老师提供的 auth、database、API、routing 和 test starter，使用 Claude Code 快速完成第一个可运行 MVP：Resident → Shift → Task → Care Activity → Progress Note → Review → Confirm，并补齐角色权限、版本、audit event、错误状态和端到端测试。Claude 是开发工具，但 W3 产品本身不调用任何 AI 模型；W4 才第一次接入 Voice AI。",
        descriptionEn:
          "Cohort 7 Week 3 practice. Starting from provided authentication, database, API, routing, and test scaffolding, use Claude Code to rapidly complete the first runnable MVP: resident, shift, task, care activity, progress note, review, and confirmation, with roles, versions, audit events, failure states, and an end-to-end test. Claude is the development tool, but the Week 3 product does not call an AI model; Voice AI is introduced in Week 4.",
        duration: 120,
        steps: [
          step(
            1,
            "REVIEW",
            "锁定 MVP scope：从 W2 UI 选择唯一 vertical slice 与验收标准",
            10,
          ),
          step(
            2,
            "AI_CODING",
            "让 Claude Code 阅读 starter、数据模型与界面，生成实施计划",
            15,
          ),
          step(
            3,
            "LAB",
            "连接 Resident → Shift → Task → Care Activity 与状态流",
            25,
          ),
          step(
            4,
            "LAB",
            "实现 Progress Note Draft → Review → Confirm 与角色权限",
            25,
          ),
          step(
            5,
            "LAB",
            "补齐 document version、reviewer、audit event 和 failure states",
            20,
          ),
          step(
            6,
            "EVALUATION",
            "用 Claude 协助修复 integration issues，跑通 UI、API 与 database",
            10,
          ),
          step(7, "DELIVERABLE", "完成端到端测试、MVP demo 与已知限制清单", 15),
        ],
      }),
    },
  ],
  [
    "C7T03",
    {
      phase: 7,
      value: lesson({
        code: "C7T03",
        title: "Legacy W3 Theory Placeholder — Superseded by L37",
        titleEn: "Legacy Week 3 Theory Placeholder — Superseded by L37",
        description:
          "Legacy 占位记录，不进入第七期正式排课。W3 Theory 已由 L37 Context Engineering: Selection, Assembly & Lifecycle 确认；W3 Practice 是 C7P03 Rapid CareKind MVP Build with Claude Code。",
        descriptionEn:
          "Legacy placeholder excluded from the formal Cohort 7 schedule. Week 3 theory is L37 Context Engineering and Reasoning Patterns; Week 3 practice is C7P03 Rapid CareKind MVP Build with Claude Code.",
        duration: 90,
        steps: [step(1, "PLANNING", "理论内容待逐周讨论后确认", 90)],
      }),
    },
  ],
  [
    "C7T04",
    {
      phase: 7,
      value: lesson({
        code: "C7T04",
        title: "W4 Theory Live — 待讨论",
        titleEn: "Week 4 Theory Live — To Be Decided",
        description:
          "第七期 W4 理论课占位。实践课只做第一次 AI 接入：Voice → Speech-to-Text → Editable Transcript → Human Confirmed Transcript；理论内容需要单独讨论。",
        descriptionEn:
          "Cohort 7 Week 4 theory placeholder. Practice is limited to the first AI integration—voice to speech-to-text to an editable, human-confirmed transcript—while theory remains to be discussed separately.",
        duration: 90,
        steps: [step(1, "PLANNING", "理论内容待逐周讨论后确认", 90)],
      }),
    },
  ],
  [
    "C7P04",
    {
      phase: 7,
      value: lesson({
        code: "C7P04",
        title: "CareKind Voice AI：Speech-to-Text",
        titleEn: "CareKind Voice AI: Speech-to-Text",
        description:
          "第七期 W4 实践课，也是 CareKind 第一次接入 AI。只完成录音、上传、Speech-to-Text、transcript 编辑与人工确认，并保留手工输入 fallback；不生成 Care Note，不做 Context Engineering 或 RAG。",
        descriptionEn:
          "Cohort 7 Week 4 practice and the first CareKind AI integration. Implement recording, upload, speech-to-text, transcript editing, human confirmation, and manual-entry fallback only; do not generate a care note or introduce context engineering or RAG.",
        duration: 120,
        steps: [
          step(1, "LAB", "接入 microphone permission 与 record/stop", 20),
          step(2, "LAB", "生成 audio file 并完成 upload request", 20),
          step(3, "LAB", "接入一个 Speech-to-Text provider", 20),
          step(4, "LAB", "显示、编辑并人工确认 transcript", 20),
          step(5, "LAB", "处理空录音、超时、失败与 permission denied", 20),
          step(
            6,
            "EVALUATION",
            "验证 manual-entry fallback 与 synthetic audio 流程",
            20,
          ),
        ],
      }),
    },
  ],
  [
    "C7P05",
    {
      phase: 7,
      value: lesson({
        code: "C7P05",
        title:
          "AI-Native Engineering Workspace：Spec-to-Work、Living Docs、Hooks 与 Skills",
        titleEn:
          "AI-Native Engineering Workspace: Spec-to-Work, Living Docs, Hooks and Skills",
        description:
          "第七期 W5 实践课。把前四周已经运行的项目升级为可持续交付的 AI-Native Engineering Workspace：把 feature spec 转成 dependency-aware work plan 与 acceptance evidence，建立 docs-as-code Wiki、Architecture Diagram 和 ADR，再配置 Hooks 检查文档漂移，并创建可复用的 /spec-to-work 与 /update-docs Skills。Hook 负责确定性检查和触发更新流程，不无监督改写 Architecture SoT；文档变更必须经过人工 Review。",
        descriptionEn:
          "Cohort 7 Week 5 practice. Turn the runnable project from Weeks 1-4 into a sustainable AI-native engineering workspace: translate a feature spec into a dependency-aware work plan and acceptance evidence, establish a docs-as-code wiki, architecture diagrams and ADRs, configure hooks to detect documentation drift, and create reusable /spec-to-work and /update-docs skills. Hooks perform deterministic checks and trigger the update workflow rather than silently rewriting the architecture source of truth; document changes require human review.",
        duration: 120,
        steps: [
          step(
            1,
            "REVIEW",
            "盘点 PRD、DESIGN.md、README、API contract、tests 与现有 knowledge gaps",
            10,
          ),
          step(
            2,
            "WORKSHOP",
            "把一个 feature spec 转成 scope、non-goals、acceptance criteria 与 dependency-aware work plan",
            20,
          ),
          step(
            3,
            "LAB",
            "建立 docs-as-code Wiki：docs index、feature specs、runbook、decision log 与 ownership",
            20,
          ),
          step(
            4,
            "LAB",
            "用 Mermaid/C4 绘制 System Context、Container 与 AI request/data flow diagram",
            20,
          ),
          step(
            5,
            "LAB",
            "创建 ADR，记录关键架构选择、trade-off、status 与 superseded 关系",
            15,
          ),
          step(
            6,
            "LAB",
            "配置 PostToolUse/Stop Hooks：格式、链接、diagram 与 docs-drift check",
            20,
          ),
          step(
            7,
            "DELIVERABLE",
            "创建并测试 /spec-to-work 与 /update-docs Skills，提交一次从 spec 到文档更新的证据",
            15,
          ),
        ],
        learningMaterial:
          "<h2>AI-Native Engineering Workspace</h2><p>W5 Practice 不增加新的业务功能，而是解决 AI Coding 项目最容易失控的问题：spec、task、code、test、architecture 和 documentation 各自变化，最后没有人知道哪一份仍然有效。学生要把前四周已经运行的项目升级为一套可持续交付、可交接、可审计的工程工作区。</p><h3>Spec-to-Work contract</h3><p>一个 feature spec 至少包含 problem、user/workflow、scope、non-goals、constraints、acceptance criteria、data/API impact、risk、test evidence 和 documentation impact。Work plan 必须从 spec 推导，按依赖关系拆成可验证任务；不能把模型生成的 task list 直接当成事实。</p><h3>Living documentation</h3><p>在 repository 内建立 docs-as-code Wiki，包括 docs/index、feature specs、architecture、ADR、runbook、glossary、ownership 和 superseded 状态。Architecture Diagram 使用 Mermaid/C4 或等价 diagram-as-code，至少表达 System Context、Container boundary 与 AI request/data flow；README 只负责入口，不复制所有细节。</p><h3>Hooks 的正确边界</h3><p>CLAUDE.md 保存每次会话都应知道的项目约定；Skills 封装按需调用的可复用工作流；Hooks 在生命周期事件上执行必须发生的确定性检查。课堂配置 PostToolUse/Stop Hooks 检查 formatting、broken links、diagram syntax、changed paths 与 documentation impact。Hook 可以生成 drift report 或阻止“完成”，但不无监督重写 Architecture SoT；由 /update-docs Skill提出 patch，再经过 Human Review。</p><h3>Project Skills</h3><ul><li><strong>/spec-to-work</strong>：读取 feature spec 与 repo context，输出 dependency-aware implementation plan、acceptance evidence 和 docs impact。</li><li><strong>/update-docs</strong>：读取 verified diff、tests 与 drift report，只更新受影响的 Wiki、diagram、ADR 或 runbook，并明确未能验证的内容。</li></ul><h3>交付证据</h3><p>提交 feature spec、work plan、docs index、至少两张 architecture diagrams、一条 ADR、Hook config、drift report、两个 SKILL.md，以及一次 code change → docs check → reviewed documentation patch 的完整记录。</p>",
      }),
    },
  ],
  [
    "C7T05",
    {
      phase: 2,
      value: lesson({
        code: "C7T05",
        title: "RAG Quality, Testing & Improvement",
        titleEn: "RAG Quality, Testing & Improvement",
        description:
          "第七期 W5 理论课。使用老师提供的 reference RAG baseline 识别 retrieval 与 answer failure，使用 golden cases 和 RAGAS 读懂基础指标，并通过 chunk、top-k、metadata filter、citation 与 no-answer 改善结果。完整 evaluation framework、CI gate、GraphRAG、Langfuse 和云部署留到后续阶段。",
        descriptionEn:
          "Cohort 7 Week 5 theory. Diagnose retrieval and answer failures in an instructor-provided reference RAG baseline, interpret core RAGAS metrics, and improve results through chunking, top-k, metadata filters, citations, and no-answer behaviour. Full evaluation frameworks, CI gates, GraphRAG, Langfuse, and cloud deployment are deferred.",
        duration: 90,
        steps: [
          step(
            1,
            "REVIEW",
            "回顾 W4 RAG 数据流并运行老师提供的 reference baseline",
            10,
          ),
          step(
            2,
            "CONCEPT",
            "Retrieval、answer、citation 与 no-answer failure taxonomy",
            15,
          ),
          step(3, "EVALUATION", "Golden cases 与 RAGAS 四项基础指标", 20),
          step(4, "EVALUATION", "读懂指标、识别误判并进行人工抽检", 15),
          step(5, "DEMO", "Chunk、top-k 与 metadata filter 的单变量实验", 15),
          step(
            6,
            "SYSTEM_DESIGN",
            "Hybrid retrieval、reranking 与 production evaluation 预告",
            10,
          ),
          step(7, "INTERVIEW", "RAG 测试与优化的面试表达", 5),
        ],
      }),
    },
  ],
  [
    "C7P07",
    {
      phase: 2,
      value: lesson({
        code: "C7P07",
        title: "Build the Evaluation Pipeline First",
        titleEn: "Build the Evaluation Pipeline First",
        description:
          "第七期 W6 实践课。在实现自己的 Policy RAG 之前，先建立 evaluation contract：定义成功标准和 failure taxonomy，制作 versioned golden dataset，约定 candidate interface，加入 schema、citation、no-answer 等 deterministic checks，接入 RAGAS 与人工评分 rubric，并运行老师提供的 naive reference baseline。最终冻结 eval command、baseline report 与最低验收 threshold，W7 的 RAG 实现必须持续通过同一条 pipeline。",
        descriptionEn:
          "Cohort 7 Week 6 practice. Before implementing the policy RAG, establish the evaluation contract: define success criteria and a failure taxonomy, create a versioned golden dataset, specify the candidate interface, add deterministic schema, citation, and no-answer checks, connect RAGAS and a human-review rubric, and run an instructor-provided naive reference baseline. Freeze the evaluation command, baseline report, and minimum acceptance thresholds so the Week 7 RAG implementation must improve against the same pipeline.",
        duration: 120,
        steps: [
          step(
            1,
            "EVALUATION",
            "定义 success criteria、failure taxonomy 与不可接受行为",
            15,
          ),
          step(
            2,
            "DATASET",
            "建立 10–15 条 versioned golden cases：input、expected source、expected behaviour",
            20,
          ),
          step(
            3,
            "SYSTEM_DESIGN",
            "定义统一 candidate interface、run ID 与 result schema",
            15,
          ),
          step(
            4,
            "EVALUATION",
            "加入 schema、citation、no-answer 与 permission deterministic checks",
            15,
          ),
          step(
            5,
            "EVALUATION",
            "接入 RAGAS，并建立人工评分 rubric 与抽检规则",
            20,
          ),
          step(
            6,
            "EVALUATION",
            "运行 naive reference baseline，保存指标、失败样本与 trace",
            15,
          ),
          step(
            7,
            "DECISION",
            "设定最低 threshold、known gaps 与 stop/go 判定",
            10,
          ),
          step(
            8,
            "DELIVERABLE",
            "冻结 eval command、dataset version 与 W7 implementation contract",
            10,
          ),
        ],
        learningMaterial:
          "<h2>Build the Evaluation Pipeline First</h2><p>Production AI 团队不会等功能全部写完才问“怎么测”。W6 先把需求转成 versioned golden cases、deterministic checks、RAGAS metrics、人工评分 rubric 和 acceptance threshold，再让 W7 的 Policy RAG 按同一个 candidate interface 接入。这样每次修改 chunking、embedding、top-k、metadata filter 或 prompt，都能与固定 baseline 比较。</p><h3>Evaluation contract</h3><p>每条 case 记录 input、expected source、expected behaviour、forbidden behaviour、risk level 和 review notes。Pipeline 输出 run ID、dataset version、candidate version、deterministic results、RAGAS metrics、latency、cost 与 failure taxonomy。</p><h3>正确边界</h3><p>W6 使用老师提供的 naive reference adapter 验证 pipeline 可运行，不要求学生先拥有自己的 RAG。W7 才实现检索系统，并持续运行同一条 evaluation pipeline。完整 LLM-as-a-Judge 校准、CI regression gate、production tracing 与 release gate 留到 W13。</p>",
      }),
    },
  ],
  [
    "C7T07",
    {
      phase: 2,
      value: lesson({
        code: "C7T07",
        title: "RAG Testing, RAGAS & Improvement",
        titleEn: "RAG Testing, RAGAS and Improvement",
        description:
          "第七期 W7 理论课。使用 golden cases、RAGAS 基础指标、failure taxonomy、单变量实验和人工抽检测试 W6 RAG。完整 LLM-as-a-Judge framework、dataset versioning 和 CI regression gate 留到后续 AI Evaluation 阶段。",
        descriptionEn:
          "Cohort 7 Week 7 theory. Test the Week 6 RAG using golden cases, core RAGAS metrics, failure taxonomy, controlled experiments, and human review. Full LLM-as-a-judge frameworks, dataset versioning, and CI regression gates are deferred.",
        duration: 90,
        steps: [
          step(1, "REVIEW", "回顾 W6 RAG 数据流与 baseline", 10),
          step(2, "CONCEPT", "Golden cases 与 evaluation dataset", 15),
          step(
            3,
            "EVALUATION",
            "Faithfulness、Answer Relevancy、Context Precision、Context Recall",
            20,
          ),
          step(
            4,
            "EVALUATION",
            "Retrieval、answer、citation 与 no-answer failure taxonomy",
            15,
          ),
          step(5, "DEMO", "Chunk、top-k、metadata 或 prompt 的单变量实验", 15),
          step(6, "REVIEW", "指标误判、人工抽检与 RAGAS 边界", 10),
          step(7, "INTERVIEW", "RAG 测试与优化的面试表达", 5),
        ],
      }),
    },
  ],
  [
    "C7T08",
    {
      phase: 4,
      value: lesson({
        code: "C7T08",
        title: "W8 Theory Live — 待逐周确认",
        titleEn: "Week 8 Theory Live — Pending Review",
        description:
          "第七期 W8 理论课占位。由于 W3–W7 实践线已经重排，Tool Calling、MCP、Agents、Multi-Agent 与 Model Routing 的后续顺序需要重新讨论。",
        descriptionEn:
          "Cohort 7 Week 8 theory placeholder. Following the redesign of Weeks 3–7, the later order of tool calling, MCP, agents, multi-agent systems, and model routing must be reviewed.",
        duration: 90,
        steps: [step(1, "PLANNING", "理论内容待逐周讨论后确认", 90)],
      }),
    },
  ],
  [
    "C7P08",
    {
      phase: 4,
      value: lesson({
        code: "C7P08",
        title: "W8 Practice Live — 待逐周确认",
        titleEn: "Week 8 Practice Live — Pending Review",
        description:
          "第七期 W8 实践课占位。后续 CareKind 能力和验收内容待逐周讨论。",
        descriptionEn:
          "Cohort 7 Week 8 practice placeholder. The next CareKind capability and acceptance criteria remain to be discussed.",
        duration: 120,
        steps: [step(1, "PLANNING", "实践内容待逐周讨论后确认", 120)],
      }),
    },
  ],
  [
    "C7T09",
    {
      phase: 9,
      value: lesson({
        code: "C7T09",
        title: "W9 Theory Live — 待逐周确认",
        titleEn: "Week 9 Theory Live — Pending Review",
        description:
          "第七期 W9 理论课占位。原 MCP 基础已前移到 W6，本周内容将在后续逐周讨论时重新确定。",
        descriptionEn:
          "Cohort 7 Week 9 theory placeholder. MCP foundations moved to Week 6; this week will be redesigned during the week-by-week review.",
        duration: 90,
        steps: [step(1, "PLANNING", "理论内容待逐周讨论后确认", 90)],
      }),
    },
  ],
  [
    "C7P09",
    {
      phase: 9,
      value: lesson({
        code: "C7P09",
        title: "W9 Practice Live — 待逐周确认",
        titleEn: "Week 9 Practice Live — Pending Review",
        description:
          "第七期 W9 实践课占位。原 MCP 工程实践已前移到 W6，本周内容将在后续逐周讨论时重新确定。",
        descriptionEn:
          "Cohort 7 Week 9 practice placeholder. MCP engineering practice moved to Week 6; this week will be redesigned during the week-by-week review.",
        duration: 120,
        steps: [step(1, "PLANNING", "实践内容待逐周讨论后确认", 120)],
      }),
    },
  ],
  [
    "C7P10",
    {
      phase: 6,
      value: lesson({
        code: "C7P10",
        title: "Build Safe Long-Term Memory for the CareKind Agent",
        titleEn: "Build Safe Long-Term Memory for the CareKind Agent",
        description:
          "第七期 W10 实践课。为 W9 的 bounded CareKind Agent 加入安全的长期 memory：只允许经过人工确认的事实进入 memory，按 resident、user、team 与 role 控制 scope，支持 provenance、TTL、冲突处理、更正、删除、权限检查、audit 与 memory-poisoning 测试。",
        descriptionEn:
          "Cohort 7 Week 10 practice. Add safe long-term memory to the bounded CareKind agent from Week 9. Only human-confirmed facts may be written; memories are scoped by resident, user, team, and role and support provenance, lifecycle controls, conflict handling, correction, deletion, access checks, auditing, and memory-poisoning tests.",
        duration: 120,
        steps: [
          step(
            1,
            "REVIEW",
            "复查 W9 task/session state，确定哪些信息允许跨 session 保存",
            10,
          ),
          step(
            2,
            "WORKSHOP",
            "设计 memory contract：type、source、scope、owner、status、TTL 与 provenance",
            20,
          ),
          step(
            3,
            "LAB",
            "实现 write gate：只写入 human-confirmed facts，拒绝 transcript、Draft 与模型推断",
            20,
          ),
          step(
            4,
            "LAB",
            "实现按 resident、user、team、role 隔离的 scoped retrieval",
            20,
          ),
          step(
            5,
            "LAB",
            "实现过期检测、冲突标记、更正、删除与禁止静默覆盖",
            20,
          ),
          step(
            6,
            "SECURITY",
            "加入 permission、consent、audit log 与 memory-poisoning 防护",
            15,
          ),
          step(
            7,
            "EVALUATION",
            "接入 CareKind Agent，并测试跨 session recall、越权、过期和冲突路径",
            15,
          ),
        ],
      }),
    },
  ],
  [
    "C7P11",
    {
      phase: 7,
      value: lesson({
        code: "C7P11",
        title: "Build the CareKind Production Agent Harness",
        titleEn: "Build the CareKind Production Agent Harness",
        description:
          "第七期 W11 实践课。把 W9 bounded Agent 与 W10 Memory 重构进 production harness，建立 run lifecycle、adapter、hooks、budget、termination、checkpoint、resume/replay、idempotency、side-effect protection、human approval 与 structured trace。",
        descriptionEn:
          "Cohort 7 Week 11 practice. Refactor the Week 9 bounded agent and Week 10 memory into a production harness with a run lifecycle, adapters, hooks, budgets, termination, checkpoints, resume and replay, idempotency, side-effect protection, human approval, and structured tracing.",
        duration: 120,
        steps: [
          step(
            1,
            "REFACTOR",
            "把 W9 Agent loop 重构成明确的 run lifecycle",
            15,
          ),
          step(
            2,
            "SYSTEM_DESIGN",
            "拆分 model、tool、memory 与 policy adapter 接口",
            15,
          ),
          step(
            3,
            "LAB",
            "加入 pre-model、pre-tool、post-tool 与 post-output hooks",
            15,
          ),
          step(
            4,
            "RELIABILITY",
            "加入 step、token、cost、time budget、termination 与 cancellation",
            15,
          ),
          step(
            5,
            "RELIABILITY",
            "实现 durable checkpoint、resume 与 replay",
            20,
          ),
          step(
            6,
            "RELIABILITY",
            "实现 retry、idempotency key 与副作用保护",
            15,
          ),
          step(
            7,
            "SECURITY",
            "加入 permission policy、human approval 与 escalation",
            15,
          ),
          step(
            8,
            "EVALUATION",
            "输出 structured trace，并测试 crash、replay 与 duplicate-call 路径",
            10,
          ),
        ],
      }),
    },
  ],
  [
    "C7P12",
    {
      phase: 8,
      value: lesson({
        code: "C7P12",
        title: "Build the CareKind Model Router inside the Agent Harness",
        titleEn: "Build the CareKind Model Router inside the Agent Harness",
        description:
          "第七期 W12 实践课。定义 CareKind task taxonomy、model capability matrix、risk/privacy/data-residency policy 与 provider allowlist，实现统一 model adapter、rule-based router、timeout、fallback、refusal、human escalation、routing trace 与 router evaluation，并接入 W11 Agent Harness。",
        descriptionEn:
          "Cohort 7 Week 12 practice. Define the CareKind task taxonomy, model capability matrix, risk, privacy, and data-residency policy, and provider allowlist; implement a common model adapter, rule-based router, timeouts, fallbacks, refusal, human escalation, routing traces, and router evaluation; and integrate them into the Week 11 agent harness.",
        duration: 120,
        steps: [
          step(
            1,
            "WORKSHOP",
            "定义 CareKind task taxonomy 与 model capability matrix",
            15,
          ),
          step(
            2,
            "GOVERNANCE",
            "定义 risk、privacy、data residency 与 provider allowlist",
            15,
          ),
          step(3, "SYSTEM_DESIGN", "建立统一 model adapter contract", 15),
          step(4, "LAB", "实现 rule-based router 与 routing policy", 20),
          step(
            5,
            "RELIABILITY",
            "实现 timeout、fallback、refusal 与 human escalation",
            15,
          ),
          step(
            6,
            "INTEGRATION",
            "把 router 接入 W11 Harness 的 hooks、budgets 与 trace",
            15,
          ),
          step(
            7,
            "EVALUATION",
            "建立 router eval cases，测试错误路由与 provider failure",
            15,
          ),
          step(
            8,
            "DELIVERABLE",
            "输出 quality、cost、latency 与 routing decision report",
            10,
          ),
        ],
      }),
    },
  ],
]);

for (const phase of outline.phases) {
  phase.lessons = phase.lessons.filter((item) => !additions.has(item.code));
  for (const item of phase.lessons) {
    item.isLive = false;
    if (videoCodes.has(item.code) && item.type === "Lesson")
      item.type = "Video";
  }
}

const insertAfter = (items, afterCode, values) => {
  const index =
    afterCode === null
      ? -1
      : items.findIndex((item) => item.code === afterCode);
  items.splice(index + 1, 0, ...values);
};

insertAfter(outline.phases[7].lessons, null, [
  additions.get("C7P01").value,
  additions.get("C7P02").value,
  additions.get("C7P03").value,
  additions.get("C7T03").value,
  additions.get("C7T04").value,
  additions.get("C7P04").value,
  additions.get("C7P05").value,
]);
insertAfter(outline.phases[2].lessons, "L69", [
  additions.get("C7T05").value,
  additions.get("C7T07").value,
  additions.get("C7P07").value,
]);
insertAfter(outline.phases[4].lessons, "L119", [
  additions.get("C7T08").value,
  additions.get("C7P08").value,
]);
insertAfter(outline.phases[6].lessons, "L133", [additions.get("C7P10").value]);
insertAfter(outline.phases[7].lessons, "L138", [additions.get("C7P11").value]);
insertAfter(outline.phases[8].lessons, "L149", [additions.get("C7P12").value]);
insertAfter(outline.phases[9].lessons, null, [
  additions.get("C7T09").value,
  additions.get("C7P09").value,
]);

const byCode = new Map(
  outline.phases.flatMap((phase) =>
    phase.lessons.map((item) => [item.code, item]),
  ),
);
const update = (code, values) => {
  const lesson = byCode.get(code);
  if (!lesson) throw new Error(`Missing lesson: ${code}`);

  // Content is being audited sequentially. Older structural overrides in this
  // generator must not roll a lesson back after its detailed 2026-09-08 review.
  const currentRevision = lesson.cohort7ContentRevision ?? "";
  const incomingRevision = values.cohort7ContentRevision ?? "";
  if (
    currentRevision.startsWith("2026-09-08") &&
    !incomingRevision.startsWith("2026-09-08")
  )
    return;

  Object.assign(lesson, values);
};

for (const code of liveCodes) {
  const item = byCode.get(code);
  if (!item) throw new Error(`Missing live lesson: ${code}`);
  item.type = "Lesson";
  item.isLive = true;
  item.duration = theoryCodes.has(code) ? 90 : code === "L171" ? 180 : 120;
}

update("L16", {
  title: "GenAI Foundations & AI Engineer Landscape",
  title_en: "GenAI Foundations & AI Engineer Landscape",
  description:
    "第七期 W1 理论课。建立 AI、ML、Deep Learning、GenAI 与 LLM 的关系图，理解 training、inference、token、context 和 hallucination，看清 Applied AI 系统全景，并识别 Applied AI Engineer、FDE、AI Builder 与 AI Solutions Engineer 等 AI Engineer 岗位变体。Ops 只预告成本、延迟、隐私和可靠性，不在第一节展开。",
  description_en:
    "Cohort 7 Week 1 theory. Map AI, ML, deep learning, GenAI, and LLMs; understand training, inference, tokens, context, and hallucinations; and locate the AI Engineer within the applied AI stack. Operations is limited to an awareness preview.",
  steps: [
    step(1, "CONCEPT", "AI → ML → Deep Learning → GenAI → LLM 的关系", 15),
    step(
      2,
      "CONCEPT",
      "LLM 基础：training、inference、token、context、hallucination",
      15,
    ),
    step(
      3,
      "SYSTEM_DESIGN",
      "Applied AI 系统全景：Model、Context、RAG、Tools、Agents、Evals、Governance",
      20,
    ),
    step(
      4,
      "LIVE",
      "AI Engineer 岗位地图：Applied AI Engineer、FDE、AI Builder、AI Solutions Engineer",
      15,
    ),
    step(5, "DEMO", "同一任务在当期主流模型上的能力差异现场对比", 15),
    step(6, "LIVE", "Production awareness：成本、延迟、隐私、可靠性", 10),
  ],
  learningMaterial:
    "<h2>GenAI Foundations & AI Engineer Landscape</h2><p>第一节先建立全课程地图，不深入某一家 API 或某个 Ops 工具。学生需要能解释 AI、ML、Deep Learning、GenAI 与 LLM 的包含关系，并理解 training 与 inference、token 与 context、能力与 hallucination 的基本边界。</p><h3>Applied AI 系统全景</h3><ol><li><strong>Model</strong>：生成与推理能力。</li><li><strong>Context</strong>：把任务需要的信息组织给模型。</li><li><strong>RAG</strong>：检索外部知识并提供证据。</li><li><strong>Tools</strong>：让模型调用确定性能力和外部系统。</li><li><strong>Agents</strong>：在边界内规划、调用工具并管理状态。</li><li><strong>Evals</strong>：用数据证明系统是否达到发布标准。</li><li><strong>Governance</strong>：明确风险、责任、审批与审计证据。</li></ol><h3>岗位地图与 title 变体</h3><p><strong>AI Engineer / Applied AI Engineer</strong> 通常负责把模型、Context、RAG、Tools、Agent、Evals 与 Governance 组成可靠系统；<strong>FDE (Forward Deployed Engineer)</strong> 更靠近客户现场，负责需求澄清、集成与交付；<strong>AI Builder</strong> 强调快速把 AI 工作流或产品做出来，但 title 标准化程度较低；<strong>AI Solutions Engineer</strong> 常覆盖方案设计、技术演示、集成和客户协作。课堂会再与 ML Engineer、Data Scientist 和 Software Engineer 比较。这些 title 没有全球统一定义，求职时必须回到 JD 的交付物、技术栈和客户责任判断。</p><h3>模型现场对比</h3><p>现场选择当期主流模型，用同一个任务比较输出质量、结构遵循、延迟和成本。课程材料不写死具体型号，避免下一期被过时的产品名称绑住。</p><h3>Production awareness</h3><p>第一节只建立四个问题：一次调用多少钱、用户要等多久、数据能否发给供应商、模型或供应商失败时系统怎么办。Rate limit、retry、observability、deployment 和 rollback 留到后续 production 课程。</p>",
});

update("L28", {
  title: "Tokens, Context Windows & Cache Efficiency",
  title_en: "Tokens, Context Windows & Cache Efficiency",
  description:
    "第七期 W2 理论课。Transformer Architecture 与 Input Embeddings 放在课前录播和互动 Lab；Live 聚焦 Token Budget、Context Window 内容治理、Prefill/Decode、KV Cache、Prompt/Prefix Cache、Response/Semantic Cache，以及 TTFT、cache hit rate、tokens saved、成本和安全边界。W2 建立“模型看到什么、哪些计算可以复用”的判断，W3 再进入完整 Context Engineering assembly。",
  description_en:
    "Cohort 7 Week 2 theory. Transformer architecture and embeddings move to pre-class recordings and interactive labs. The live session focuses on token budgets, context-window governance, prefill and decode, KV cache, prompt and prefix caching, response and semantic caching, TTFT, cache hit rate, tokens saved, cost, and security boundaries.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Token Budget：tokenizer、input/output tokens、输出预留与成本",
      15,
    ),
    step(
      2,
      "SYSTEM_DESIGN",
      "Context Window Governance：Instructions、History、Examples、RAG、Tools 的 Selection/Exclusion",
      15,
    ),
    step(
      3,
      "CONCEPT",
      "Prefill 与 Decode：TTFT、TPOT，以及长 Prompt 为什么更慢",
      10,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "KV Cache：生成过程中的 Key/Value 复用与显存 trade-off",
      15,
    ),
    step(
      5,
      "SYSTEM_DESIGN",
      "Prompt/Prefix Cache：稳定前缀复用与 prompt ordering",
      15,
    ),
    step(
      6,
      "SECURITY",
      "Response/Semantic Cache：cache key、TTL、invalidation、tenant、permission 与 PII",
      10,
    ),
    step(
      7,
      "DEMO",
      "Cache hit/miss：Tokens Saved、延迟、成本、lost-in-the-middle 与 stale cache",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Tokens, Context Windows & Cache Efficiency</h2><p>W2 回答两个问题：<strong>这次模型调用看到了什么？哪些计算没有必要重复做？</strong>课前完成 Transformer Architecture 与 Input Embeddings 录播；Live 把原理转换成 Token Budget、Context Governance 和 Cache Strategy。</p><h3>Token、Context Window 与推理阶段</h3><p>一次请求需要同时容纳 system/developer instructions、user input、conversation history、few-shot examples、retrieved documents、tool results、多模态表示和 reserved output tokens。模型先在 <strong>Prefill</strong> 阶段处理输入，再在 <strong>Decode</strong> 阶段逐 token 生成输出。长输入主要推高 prefill 与 TTFT；输出长度影响 decode、TPOT 和总成本。</p><h3>KV Cache 是什么</h3><p>自回归生成每增加一个 token，如果重新计算此前所有 token 的 attention 会非常浪费。<strong>KV Cache</strong> 保存既有 token 在每层 attention 中的 Key/Value，使下一步只计算新 token。它主要优化同一次生成和连续上下文的重复计算，但会占用 GPU memory；更长 context、更大 batch 和更多并发都会增加 KV memory pressure。KV Cache 不会让错误 Context 变正确，也不等于长期 Memory。</p><h3>三类缓存不要混淆</h3><ul><li><strong>KV Cache</strong>：模型推理内部复用既有 token 的 attention state。</li><li><strong>Prompt/Prefix Cache</strong>：跨请求复用相同或可缓存的稳定前缀，减少重复 prefill。System Policy、Tool Definitions、Output Schema 和稳定 Few-shot Examples 放前面，动态用户输入与 RAG 结果放后面。</li><li><strong>Response/Semantic Cache</strong>：应用层复用完整答案或语义相近问题的答案，速度最快，但必须处理 freshness、permission、PII 和错误结果扩散。</li><li><strong>Memory</strong>：经过规则选择、允许跨 session 再读取的信息，不是缓存命中机制。</li></ul><h3>Production Cache Strategy</h3><p>Cache key 至少考虑 model/version、prompt/template version、tool/schema version、tenant、role/permission、language 与关键参数。任何数据、政策、权限或 prompt 版本改变都可能触发 invalidation；TTL 必须由业务 freshness 决定。不得跨 tenant 或跨权限复用敏感结果，也不能缓存 Secrets 或不必要的 PII。</p><h3>如何证明真的提效</h3><p>比较 cold/warm request 的 <strong>TTFT、TPOT、cache hit rate、cache read/write tokens、tokens saved、latency、cost 与 memory usage</strong>。同时检查 stale cache、cache poisoning、错误响应复用、低命中率和 cache stampede。Context 仍按 relevance、recency、authority、permission、provenance 与 information density 选择，避免 lost-in-the-middle 和 attention dilution。</p><h3>课堂边界与面试标准</h3><p>W2 使用最小实验比较 cache hit/miss 和 stable-prefix ordering；W3 再完成 Context Builder、trust boundary 与 structured output assembly。学生应能区分 KV Cache、Prefix Cache、Response Cache 与 Memory，解释各自优化哪段延迟、引入什么代价，以及如何安全失效。</p>",
});

update("L37", {
  title: "Context Engineering: Selection, Assembly & Lifecycle",
  title_en: "Context Engineering: Selection, Assembly & Lifecycle",
  description:
    "第七期 W3 理论课。Context Engineering 不是写一份更长的 Prompt，而是管理模型在每次调用中可见信息的完整生命周期：inventory、source ownership、selection/exclusion、trust/permission、freshness、assembly order、token allocation、validation、observability、refresh、compaction 与 eviction。CareKind 只用于映射未来场景，不作为 Context Engineering 的定义。",
  description_en:
    "Cohort 7 Week 3 theory. Context engineering is not a longer prompt; it manages the full lifecycle of what the model can see on each call: inventory, source ownership, selection and exclusion, trust and permissions, freshness, assembly order, token allocation, validation, observability, refresh, compaction, and eviction. CareKind is a mapping case, not the definition.",
  steps: [
    step(1, "CONCEPT", "Prompt Engineering 与 Context Engineering 的区别", 10),
    step(
      2,
      "SYSTEM_DESIGN",
      "Context Inventory：Instructions、User Input、State/History、Knowledge、Examples、Tools 与 Output Contract",
      15,
    ),
    step(
      3,
      "SYSTEM_DESIGN",
      "Selection Policy：relevance、authority、freshness、permission、provenance 与 include/exclude rules",
      15,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "Assembly Plan：priority、structure、order、token allocation、conflict resolution 与 validation",
      15,
    ),
    step(
      5,
      "LIFECYCLE",
      "Context Lifecycle：just-in-time loading、progressive disclosure、compaction、refresh 与 eviction",
      15,
    ),
    step(
      6,
      "SECURITY",
      "Trust Boundary 与 Observability：untrusted data、injection、context version、selected/excluded evidence",
      10,
    ),
    step(
      7,
      "WORKSHOP",
      "Context Architecture Blueprint：source → policy → assembly → validation → lifecycle",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Context Engineering: Selection, Assembly & Lifecycle</h2><p>Context Engineering 管理的是模型每次推理时可见的完整信息状态，不是把 System Prompt 写得更长。目标是在有限 attention budget 中选择最小、最相关、可信且获授权的高信号信息，并持续维护它。</p><h3>1. Context Inventory</h3><p>先列出所有候选来源：system/developer instructions、current user input、identity and permissions、runtime state、conversation history、examples、external knowledge、tool definitions/results、memory references 与 output contract。Blueprint 不直接把这些内容全部塞给模型，而是记录它们的 owner、purpose、trust level、freshness、permission 和 provenance。</p><h3>2. Selection Policy</h3><p>为每类任务定义 include、exclude、priority 与 fallback rules。相关但过期、可信但越权、最新但来源不明的信息都不能自动进入 Context。缺失、冲突或不确定时要明确 fail、ask、retrieve 或 escalate。</p><h3>3. Assembly Plan</h3><p>定义 authority hierarchy、section structure、ordering、token allocation、deduplication、normalization、compression 和 output contract。Assembly 是运行时决策，不是一份固定 Prompt Template；同一系统面对不同任务会选择不同 Context。</p><h3>4. Lifecycle</h3><p>Context 会变化，因此需要 just-in-time loading、progressive disclosure、tool-result cleanup、structured notes、compaction、refresh、invalidation 和 eviction。Context Window、Cache、RAG、Memory 和 Tool Results 都是生命周期中的不同机制，不能互相替代。</p><h3>5. Validation and Observability</h3><p>每次 assembly 应留下 context version、source IDs、selected/excluded reasons、token allocation、permission decision、freshness check、validation result 和 conflict handling。这样才能解释一次输出为什么看到了这些信息，以及问题出在哪里。</p><h3>Blueprint 交付</h3><p>学生交付一份可跨场景复用的 Context Architecture Blueprint，再把 CareKind 的未来 Structured Documentation、Policy RAG 和 Agent Tool Use 映射进去。W3 MVP Practice 仍不把模型接进产品；Reasoning Patterns 留在独立 Lab，ReAct 留到 Agent 周。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});

update("L37a", {
  title: "Quest: CareKind Context Architecture Blueprint",
  description:
    "Quest：先完成一份通用 Context Architecture Blueprint，再用 CareKind 的未来 Structured Documentation、Policy RAG 和 Agent Tool Use 三个场景验证它是否可复用。交付 Context Inventory、source ownership、selection/exclusion policy、trust/permission/freshness、assembly order、token allocation、conflict rules、validation、observability 和 lifecycle。Quest 不调用模型，也不把 Context Engine 接进 W3 MVP。",
  description_en:
    "Quest: create a reusable context architecture blueprint, then validate its applicability to three future CareKind scenarios: structured documentation, policy RAG, and agent tool use. Deliver the context inventory, source ownership, selection and exclusion policy, trust, permissions, freshness, assembly order, token allocation, conflict rules, validation, observability, and lifecycle. The quest does not call a model or integrate a context engine into the Week 3 MVP.",
  quest: {
    title: "构建可复用的 Context Architecture Blueprint",
    learningGoal:
      "产出覆盖 inventory、selection、assembly、validation、observability 与 lifecycle 的 Context Architecture Blueprint",
    successCriteria:
      "每个候选来源都有 owner、trust、permission、freshness 和 provenance；三个未来场景都有 include/exclude、assembly、conflict、validation 与 eviction 规则",
    difficulty: "intermediate",
    estimatedMinutes: 45,
    uiMode: "chat",
    context:
      "学员已完成 W3 Context Engineering Theory；W3 MVP Practice 与本 Quest 分离，产品运行时仍不调用模型。AI Tutor 检查 Blueprint 是否覆盖 Context Inventory、source ownership、purpose、trust、permission、freshness、provenance、selection/exclusion、priority、token allocation、conflict resolution、validation、observability、refresh、compaction 和 eviction。CareKind 只作为 Structured Documentation、Policy RAG 与 Agent Tool Use 的未来场景映射，不能把具体 resident fields 当成 Context Engineering 的定义。",
    stepSkeleton: [
      {
        title:
          "完成 Context Inventory、source ownership 与 trust/permission/freshness 分类",
        verificationType: "text-evidence",
      },
      {
        title:
          "定义 selection/exclusion、priority、token allocation 与 conflict rules",
        verificationType: "text-evidence",
      },
      {
        title:
          "定义 assembly、validation、observability、refresh、compaction 与 eviction",
        verificationType: "text-evidence",
      },
      {
        title: "映射三个未来场景并检查 Blueprint 可复用性",
        verificationType: "text-evidence",
        expectedEvidence:
          "仓库中包含通用 Context Architecture Blueprint 与三个 CareKind future-scenario mappings",
      },
    ],
    prerequisites: [
      "完成 L37 Context Engineering: Selection, Assembly & Lifecycle",
    ],
    targetPlatform: "local-terminal",
    tags: ["context-engineering", "context-architecture", "carekind"],
  },
  steps: [
    step(
      1,
      "LAB",
      "完成 Context Inventory、source ownership 与 trust/permission/freshness 分类",
      10,
    ),
    step(
      2,
      "LAB",
      "定义 selection/exclusion、priority、token allocation 与 conflict rules",
      10,
    ),
    step(
      3,
      "LAB",
      "定义 assembly、validation、observability、refresh、compaction 与 eviction",
      15,
    ),
    step(
      4,
      "DELIVERABLE",
      "映射 Structured Documentation、Policy RAG 与 Agent Tool Use 三个未来场景",
      10,
    ),
  ],
});

update("L58", {
  title: "RAG Fundamentals: Embeddings, Retrieval & Grounding",
  title_en: "RAG Fundamentals: Embeddings, Retrieval & Grounding",
  description:
    "第七期 W4 理论课。在 W3 Context baseline 上增加 retrieved policy context，讲清 embeddings、chunking、metadata、indexing、top-k retrieval、grounding、programmatic citation 与 no-answer policy。Hybrid Search、Query Rewrite 和 Reranking只作预告，W5 再展开。",
  description_en:
    "Cohort 7 Week 4 theory. Add retrieved policy context to the Week 3 baseline and cover embeddings, chunking, metadata, indexing, top-k retrieval, grounding, programmatic citations, and no-answer policies, with advanced retrieval deferred to Week 5.",
  steps: [
    step(
      1,
      "SYSTEM_DESIGN",
      "RAG 在 Context Architecture 中的位置，以及与 Memory、Fine-Tuning 的区别",
      10,
    ),
    step(2, "CONCEPT", "Embedding、vector 与 semantic similarity", 15),
    step(3, "SYSTEM_DESIGN", "Ingestion、chunking、metadata 与 indexing", 15),
    step(
      4,
      "CONCEPT",
      "Retrieval、top-k、similarity score 与 access boundary",
      15,
    ),
    step(
      5,
      "SYSTEM_DESIGN",
      "Grounding、programmatic citation 与 no-answer policy",
      15,
    ),
    step(
      6,
      "SCENARIO",
      "Naive RAG failure modes；Hybrid、Rewrite、Reranking 预告",
      10,
    ),
    step(
      7,
      "INTERVIEW",
      "RAG 系统设计面试题与 CareKind architecture review",
      10,
    ),
  ],
  learningMaterial:
    "<h2>RAG Fundamentals: Embeddings, Retrieval & Grounding</h2><p>W4 在 W3 Context Contract 上增加 retrieved policy chunks、document metadata 与 citation identifiers。RAG 是 Context Engineering 的一个动态信息来源，不替代 system policy、task input、validation 或 human review。</p><h3>核心链路</h3><p><strong>Documents → Chunking → Metadata → Embeddings → Vector Index → Retrieval → Context Assembly → Grounded Answer → Citation</strong></p><h3>CareKind 数据边界</h3><p>W4 只索引 synthetic policy 和操作指导，不把 resident personal data 放入 vector store。Resident snapshot 与 current observations 仍由 W3 context builder 按任务注入。</p><h3>Failure handling</h3><ul><li>没有足够证据时返回“不足以回答”。</li><li>Citation 由程序绑定 document ID 与 chunk ID，不由模型自行发明。</li><li>top-k 越大不代表越好；无关片段会增加成本并降低 groundedness。</li><li>政策文本只提供信息支持，不能自动触发临床或 SIRS 决策。</li></ul><p>Hybrid Search、Query Rewrite、Reranking、production vector database、observability 与 ingestion lifecycle 放到 W5。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});
update("L60", {
  title: "Build and Prove Policy RAG from Scratch",
  title_en: "Build and Prove Policy RAG from Scratch",
  description:
    "第七期 W7 实践课。按照 W6 已冻结的 evaluation contract，不使用 RAG framework，从 synthetic policy corpus 实现 chunking、metadata、embedding、local vector index、top-k retrieval、retrieved context、grounded Draft、programmatic citation 与 no-answer fallback。每完成一个关键能力就运行同一条 eval pipeline，与 naive baseline 比较，最后接入 W3 workflow 与 W4 human-confirmed transcript并完成可测量的 MVP。",
  description_en:
    "Cohort 7 Week 7 practice. Against the frozen Week 6 evaluation contract and without a RAG framework, implement chunking, metadata, embeddings, a local vector index, top-k retrieval, retrieved context, grounded drafts, programmatic citations, and no-answer fallbacks over a synthetic policy corpus. Run the same evaluation pipeline after each major capability, compare against the naive baseline, and then connect the system to the Week 3 workflow and Week 4 human-confirmed transcript to complete a measurable MVP.",
  steps: [
    step(1, "WORKSHOP", "准备 synthetic CareKind policy corpus 与数据边界", 10),
    step(2, "LAB", "实现 chunking 与 metadata schema", 20),
    step(3, "LAB", "生成 embeddings 并建立 local vector index", 20),
    step(4, "LAB", "实现 top-k similarity retrieval", 20),
    step(
      5,
      "LAB",
      "组装 W3 workflow data、W4 confirmed transcript 与 retrieved chunks",
      15,
    ),
    step(6, "LAB", "生成 grounded answer 并绑定 document/chunk citation", 15),
    step(7, "LAB", "实现 no-answer fallback 与 retrieval failure log", 10),
    step(
      8,
      "EVALUATION",
      "运行 W6 eval pipeline，对比 naive baseline 并提交 MVP evidence",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Build and Prove Policy RAG from Scratch</h2><p>本实践不使用 LangChain 等 RAG framework。学生要亲手实现每个接口，理解 policy document 如何成为可检索、可引用的 context，并从第一步开始连接 W6 已冻结的 evaluation pipeline。</p><h3>实现范围</h3><ol><li>准备 synthetic policy corpus。</li><li>切分文本并保存 document ID、chunk ID、section 与版本 metadata。</li><li>生成 embeddings 并建立 local vector index。</li><li>实现 top-k retrieval。</li><li>把 retrieved chunks 与 W3 workflow data、W4 human-confirmed transcript 组装为 task context。</li><li>生成 grounded Draft，并由程序绑定 citation。</li><li>没有足够证据时走 no-answer fallback。</li></ol><h3>Eval-driven implementation</h3><p>每完成 chunking/index、retrieval、grounding/citation 和 no-answer 中一个阶段，就运行同一个 versioned dataset 与 eval command，保存 candidate version、指标、失败案例、latency 和 cost，并与 W6 naive baseline 比较。课程不预设提升百分比，只报告实际结果。</p><h3>禁止范围</h3><p>Vector store 不保存 personal data；不做真实 production write-back；不自动作诊断、用药或 SIRS 决策。</p>",
});
update("L69", {
  title: "CareKind RAG Testing with RAGAS（旧提案候选）",
  title_en: "CareKind RAG Testing with RAGAS (Previous Candidate)",
  description:
    "保留的旧实践候选，不再作为第七期 W5 正式实践。第七期 RAG 测试已合并到 W7 `C7P07 RAG Testing & CareKind MVP Completion`。",
  description_en:
    "Retained previous practice candidate, no longer the formal Cohort 7 Week 5 practice. RAG testing is now integrated into the Week 7 C7P07 MVP completion workshop.",
  steps: [
    step(1, "REVIEW", "运行 W4 CareKind RAG baseline", 10),
    step(2, "LAB", "导入老师提供的 10 条 golden cases 与 RAGAS starter", 15),
    step(3, "EVALUATION", "运行 RAGAS 并保存 baseline 指标", 20),
    step(4, "EVALUATION", "定位 retrieval、answer 与 citation failure", 15),
    step(
      5,
      "LAB",
      "只修改 chunk、top-k、metadata filter 或 prompt 中一个变量",
      25,
    ),
    step(6, "EVALUATION", "重新运行 RAGAS并比较实际结果", 15),
    step(7, "REVIEW", "人工抽检两条指标与实际质量不一致的案例", 10),
    step(8, "DELIVERABLE", "提交简短 RAG testing and improvement report", 10),
  ],
  learningMaterial:
    "<h2>CareKind RAG Testing with RAGAS</h2><p>本周不要求从零建设 evaluation platform。老师提供可运行的 RAGAS starter、10 条 synthetic CareKind golden cases 和 W4 baseline 接口，学生练习运行、解释、修改与复测。</p><h3>单变量原则</h3><p>每轮只修改 chunking、top-k、metadata filter 或 prompt 中一个变量，避免无法判断结果变化来自哪里。RAGAS 指标必须结合人工抽检，不作为绝对真相。</p><h3>延后内容</h3><p>LLM-as-a-Judge 深入、完整 evaluation framework、dataset versioning、CI regression gate、Langfuse、GraphRAG 与 AWS/OpenSearch 部署留到后续课程。</p>",
  cohort7Status: "PREVIOUS_PRACTICE_CANDIDATE",
});
update("C7T05", {
  description:
    "第七期 W5 已确认理论课。承接 W4 RAG Fundamentals，使用老师提供的 reference implementation 讲解 RAG failure taxonomy、golden cases、RAGAS 基础指标、人工抽检和单变量优化；完整 LLM-as-a-Judge framework、dataset versioning 与 CI regression gate 留到后续 AI Evaluation 阶段。",
  description_en:
    "Confirmed Cohort 7 Week 5 theory. Continue from Week 4 RAG fundamentals using an instructor-provided reference implementation to teach failure taxonomy, golden cases, core RAGAS metrics, human review, and controlled improvement; full LLM-as-a-judge frameworks, dataset versioning, and CI gates are deferred.",
  cohort7Status: "CONFIRMED_THEORY",
});
update("C7T03", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W3 Theory（已由 L37 替代）",
  title_en: "Legacy Placeholder: Week 3 Theory (Replaced by L37)",
  description:
    "错误重排时产生的占位记录，已由正式 W3 理论课 `L37 Context Engineering: Selection, Assembly & Lifecycle` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("C7T04", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W4 Theory（已由 L58 替代）",
  title_en: "Legacy Placeholder: Week 4 Theory (Replaced by L58)",
  description:
    "错误重排时产生的占位记录，已由正式 W4 理论课 `L58 RAG Fundamentals: Embeddings, Retrieval & Grounding` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("C7T07", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Duplicate：RAG Testing（已由 C7T05 替代）",
  title_en: "Legacy Duplicate: RAG Testing (Replaced by C7T05)",
  description:
    "重复理论提案，已由正式 W5 理论课 `C7T05 RAG Quality, Testing & Improvement` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_BY_C7T05",
});
update("C7T08", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W8 Theory（已由 L122 替代）",
  title_en: "Legacy Placeholder: Week 8 Theory (Replaced by L122)",
  description:
    "W8 未确认时产生的占位记录，已由正式理论课 `L122 Multi-Agent Architectures` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("C7P08", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W8 Practice（已由 L104 替代）",
  title_en: "Legacy Placeholder: Week 8 Practice (Replaced by L104)",
  description:
    "W8 未确认时产生的占位记录，已由正式实践课 `L104 Build and Connect a CareKind MCP Server` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("C7T09", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W9 Theory（已由 L133 替代）",
  title_en: "Legacy Placeholder: Week 9 Theory (Replaced by L133)",
  description:
    "W9 未确认时产生的占位记录，已由正式理论课 `L133 Agent Memory & State Management` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("C7P09", {
  cohort7Included: false,
  isLive: false,
  title: "Legacy Placeholder：W9 Practice（已由 L119 替代）",
  title_en: "Legacy Placeholder: Week 9 Practice (Replaced by L119)",
  description:
    "W9 未确认时产生的占位记录，已由正式实践课 `L119 Build a Bounded CareKind Agent` 替代，不进入第七期排课。",
  cohort7Status: "REPLACED_PLACEHOLDER",
});
update("L90", {
  title: "RAGAS Framework",
  title_en: "RAGAS Framework",
  description:
    "第七期 W7 必修课前录播。认识 evaluation dataset、Faithfulness、Answer Relevancy、Context Precision 与 Context Recall，学会运行并解释结果，同时理解指标需要人工抽检。完整 evaluation framework 和 CI regression gate 留到后续课程。",
  description_en:
    "Required Week 7 pre-class recording. Introduce evaluation datasets and the core RAGAS metrics—faithfulness, answer relevancy, context precision, and context recall—while treating metrics as evidence that still requires human review. Full evaluation frameworks and CI gates are deferred.",
});
update("L65", {
  title: "Lab: LLM Cost Engineering & Budget Guard",
  title_en: "Lab: LLM Cost Engineering and Budget Guard",
  description:
    "用同一组任务测量 input、output、cached tokens、tool calls、retries 与失败请求的真实成本，计算 cost per successful task，并实现 request budget、retry budget 与超预算终止。实验不追求单纯换成最便宜模型，而是在质量、延迟和成本约束下作出可解释选择。",
  description_en:
    "Measure the real cost of input, output, cached tokens, tool calls, retries, and failed requests on the same task set. Calculate cost per successful task, then implement request and retry budgets with explicit over-budget termination.",
  steps: [
    step(
      1,
      "CONCEPT",
      "建立完整 cost model：tokens、cache、tools、retries 与 infrastructure",
      5,
    ),
    step(2, "LAB", "从 provider usage 记录计算单次任务与批次的实际成本", 7),
    step(
      3,
      "LAB",
      "比较 prompt trimming、structured output 与 stable-prefix caching",
      7,
    ),
    step(4, "LAB", "实现 request budget、retry budget 与 hard stop", 7),
    step(
      5,
      "EVALUATION",
      "比较 cost per successful task、quality 与 p95 latency",
      4,
    ),
  ],
  learningMaterial:
    "<h2>LLM Cost Engineering &amp; Budget Guard</h2><p>成本优化不是简单地少发 Token。一个 AI 请求还可能产生缓存写入与读取、Embedding、Reranking、Tool Calls、重试、超时以及基础设施成本。本实验要求先测量，再决定优化方向。</p><h3>统一测量表</h3><p>为每条 case 保存 provider、model ID、input/output/cached tokens、tool calls、attempt count、latency、结果状态和质量检查。价格从实验当天已核验的 provider price sheet 注入，不把教材中的旧价格写死。</p><h3>三个对照实验</h3><ol><li><strong>Context trimming</strong>：删除与任务无关的上下文，同时检查质量是否下降。</li><li><strong>Structured output</strong>：用明确 schema 减少冗长输出，并记录 validation/retry 成本。</li><li><strong>Stable-prefix caching</strong>：只对稳定且允许缓存的前缀计算命中收益；不得缓存跨用户敏感数据。</li></ol><h3>Budget Guard</h3><p>实现 per-request budget、retry budget、batch ceiling 与 hard stop。预算耗尽必须返回明确状态，不能静默降级到未授权模型，也不能无限重试。</p><h3>验收</h3><p>提交原始 usage、计算公式、三组对照结果和决策说明。主要指标是 <strong>cost per successful task</strong>，同时报告质量、失败率与 p95 latency；最低单价不是自动胜出条件。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L66", {
  title: "LLM Rate Limits：Backpressure、Retry Budget 与 Idempotency",
  title_en: "LLM Rate Limits: Backpressure, Retry Budgets, and Idempotency",
  description:
    "把 Rate Limit 当成分布式系统问题处理：读取真实 RPM/TPM/并发限制，分类 429 与配额、认证、服务故障，设计 admission control、queue、bounded backoff、retry budget、idempotency 和 authorized fallback，并用故障注入验证系统不会重试风暴或重复副作用。",
  description_en:
    "Treat rate limits as a distributed-systems problem: inspect actual RPM, TPM, and concurrency limits; classify failures; design admission control, queues, bounded backoff, retry budgets, idempotency, and authorised fallbacks; then verify the design through failure injection.",
  steps: [
    step(
      1,
      "CONCEPT",
      "读取真实 RPM、TPM、concurrency、quota 与 response headers",
      6,
    ),
    step(2, "CONCEPT", "分类 429、quota、auth、timeout 与 provider outage", 6),
    step(
      3,
      "SYSTEM_DESIGN",
      "Admission control、bounded queue、backpressure 与 deadline",
      6,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "Exponential backoff、jitter、Retry-After 与 retry budget",
      6,
    ),
    step(
      5,
      "RELIABILITY",
      "Idempotency key、deduplication 与 side-effect safety",
      6,
    ),
    step(6, "LAB", "故障注入：验证负载尖峰、重试风暴和 authorized fallback", 6),
  ],
  learningMaterial:
    "<h2>LLM Rate Limits：Backpressure、Retry Budget 与 Idempotency</h2><p>Rate Limit 不是在 SDK 外包一层 retry 就结束。系统必须先决定哪些请求可以进入、能等多久、最多重试多少次，以及重复执行是否会产生副作用。</p><h3>Failure taxonomy</h3><ul><li><strong>Transient rate limit</strong>：可能等待后重试，仍受总 deadline 与 retry budget 限制。</li><li><strong>Quota or billing</strong>：等待通常无效，应停止并报告配置问题。</li><li><strong>Authentication or permission</strong>：不得重试掩盖权限错误。</li><li><strong>Timeout or provider outage</strong>：按任务风险选择排队、失败、人工接管或已授权 fallback。</li></ul><h3>Control plane</h3><p>在调用前设置 token-aware admission control、bounded concurrency 与 queue timeout。请求进入后使用 exponential backoff + jitter，尊重可用的 Retry-After，并设置 max attempts、retry budget 与 end-to-end deadline。</p><h3>Side-effect safety</h3><p>对写入、发送或外部动作使用 idempotency key、deduplication store 与执行状态。模型调用失败后不能假设 Tool 没有成功；先确认状态，再决定是否补偿或重试。</p><h3>故障注入验收</h3><p>用 mock provider 注入 burst 429、持续配额耗尽、timeout 与部分成功。报告 throughput、queue wait、attempt count、终止原因、重复副作用和预算消耗；禁止用真实服务压测制造故障。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L68", {
  title: "LLM Unit Economics：Cost per Successful Task",
  title_en: "LLM Unit Economics: Cost per Successful Task",
  description:
    "把 provider token 单价转换成产品可用的 unit economics：估算并实测每个成功任务的模型、缓存、检索、工具、重试与基础设施成本，建立 expected、p50 与 p95 成本区间，并把质量门槛、预算告警和 routing decision 放进同一张决策表。",
  description_en:
    "Turn provider token prices into product unit economics by measuring model, cache, retrieval, tool, retry, and infrastructure costs per successful task, then combine expected and tail cost with quality thresholds and routing decisions.",
  steps: [
    step(1, "CONCEPT", "从 token price 到 end-to-end task cost", 4),
    step(2, "CONCEPT", "Expected、p50、p95 与 retry amplification", 4),
    step(
      3,
      "WORKSHOP",
      "建立 scenario-based usage forecast 与 monthly budget",
      4,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "把 quality threshold、budget alert 与 routing policy 连接起来",
      4,
    ),
  ],
  learningMaterial:
    "<h2>LLM Unit Economics</h2><p>模型价目表只能回答一次输入和输出大概多少钱，不能回答产品完成一个任务要多少钱。真实任务还包括 Embedding、Retrieval、Reranking、Tool Calls、缓存、失败重试与基础设施。</p><h3>Cost equation</h3><p><code>task cost = model usage + cache + retrieval + tools + retries + allocated infrastructure</code>。失败请求单独记录，最终使用 <code>total cost / successful tasks</code> 计算单位成功成本，避免通过大量失败请求得到看似便宜的平均值。</p><h3>Tail cost</h3><p>除了平均值，还要报告 expected、p50 与 p95。长上下文、工具循环和 retry amplification 会让尾部成本远高于正常请求；预算必须覆盖分布，而不是只覆盖理想案例。</p><h3>Forecast</h3><p>按低、中、高使用量和失败率建立 scenario forecast，区分固定成本与变动成本。价格、区域、缓存规则和账号折扣均从开课时核验的官方 price sheet 与实际 usage 导入，不把具体型号和旧价格冻结在录播里。</p><h3>Decision table</h3><p>每个候选方案同时记录 quality pass rate、cost per successful task、p95 latency、privacy/data-residency 与 tool compatibility。只有通过最低质量和权限条件的候选才进入成本比较。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L90", {
  title: "RAGAS Framework：Metric Contract 与 Human Calibration",
  title_en: "RAGAS Framework: Metric Contracts and Human Calibration",
  description:
    "W5 理论课前配套录播。用老师提供的 reference baseline 学会为 Faithfulness、Response Relevancy、Context Precision 与 Context Recall 配置正确字段、解释口径、处理缺失值，并通过人工样例校准 judge。它负责读懂指标，不另建 Evaluation Pipeline；W6 才实现 versioned dataset 与可重复运行框架。",
  description_en:
    "A Week 5 pre-class recording for understanding RAGAS metric contracts and calibrating judge-based metrics against human examples. It teaches metric interpretation without duplicating the versioned evaluation pipeline built in Week 6.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Metric contract：question、contexts、response、reference 与 IDs",
      10,
    ),
    step(
      2,
      "CONCEPT",
      "Context Recall：ID-based 与 claim-based 的不同口径",
      10,
    ),
    step(
      3,
      "CONCEPT",
      "Context Precision：相关性、排序位置与 required fields",
      10,
    ),
    step(4, "CONCEPT", "Faithfulness、Response Relevancy 与正确拒答", 10),
    step(5, "EVALUATION", "用人工标注样例校准 judge disagreement", 10),
    step(
      6,
      "EVALUATION",
      "记录 metric version、judge config、missing 与 failed rows",
      10,
    ),
  ],
  learningMaterial:
    "<h2>RAGAS Framework：Metric Contract 与 Human Calibration</h2><p>这是一节指标阅读课，不是第二套 Evaluation Pipeline。学生使用老师提供的固定 baseline 和标注样例，理解每个 metric 测什么、需要什么字段，以及什么时候结果不能直接相信。</p><h3>Dataset contract</h3><p>每条 case 至少有 case ID、question、retrieved contexts、response，并按 metric 需要加入 reference answer 或 reference context IDs。缺失字段必须标记 missing/not applicable，不能自动填成零分。</p><h3>四类证据</h3><ul><li><strong>Context Recall</strong>：检查应该找到的证据是否被找到；ID-based 与 claim-based 实现口径不同。</li><li><strong>Context Precision</strong>：检查检索结果相关性及排序质量，不等同普通 Precision@k。</li><li><strong>Faithfulness</strong>：检查回答是否受给定 context 支持，不证明来源本身真实。</li><li><strong>Response Relevancy</strong>：检查回答是否切题，不等同事实正确。</li></ul><h3>Human calibration</h3><p>对正确回答、无依据回答、答非所问、正确拒答和 judge 误判样例进行人工复核，记录 disagreement 及原因。不给所有项目统一及格线，也不预设优化一定提高分数。</p><h3>与后续课程边界</h3><p>W5 学会解释 teacher baseline；W6 冻结 versioned dataset、runner 与 threshold；W7 在学生实现的 RAG 上复用同一 Pipeline；W11–W13 再扩展为 Agent regression 与 release gate。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("C7T05", {
  title: "RAG Quality, Testing & Controlled Improvement",
  title_en: "RAG Quality, Testing and Controlled Improvement",
  description:
    "第七期 W5 理论课。承接 W4 RAG Fundamentals，用老师提供的 reference RAG 识别 retrieval、grounding、citation 与 no-answer failures，读懂 golden cases 和 RAGAS 报告，并通过单变量实验判断 chunking、top-k、metadata filter、hybrid retrieval 与 reranking 是否真的改善结果。W6 才搭建完整 Evaluation Pipeline。",
  description_en:
    "Cohort 7 Week 5 theory. Diagnose retrieval, grounding, citation, and no-answer failures in an instructor-provided reference RAG, interpret golden cases and RAGAS evidence, and use controlled experiments to evaluate chunking, top-k, metadata filters, hybrid retrieval, and reranking. The full evaluation pipeline is built in Week 6.",
  steps: [
    step(1, "REVIEW", "运行 reference RAG，保存可复现 baseline 与配置", 10),
    step(
      2,
      "CONCEPT",
      "Failure taxonomy：retrieval、grounding、citation 与 no-answer",
      15,
    ),
    step(3, "EVALUATION", "Golden cases 与 RAGAS metric contract", 20),
    step(
      4,
      "EVALUATION",
      "人工抽检 judge disagreement、missing data 与 false confidence",
      15,
    ),
    step(
      5,
      "DEMO",
      "单变量实验：chunking、top-k、metadata filter 与 prompt",
      15,
    ),
    step(
      6,
      "SYSTEM_DESIGN",
      "Hybrid retrieval、reranking 与 query transformation 的选择边界",
      10,
    ),
    step(
      7,
      "INTERVIEW",
      "用 baseline、failure cases 与 trade-off 讲清一次 RAG 优化",
      5,
    ),
  ],
  learningMaterial:
    "<h2>RAG Quality, Testing &amp; Controlled Improvement</h2><p>W4 回答“RAG 如何工作”，W5 回答“如何证明它工作得更好”。课堂不从零搭建评估平台，而是在老师提供的 reference RAG、固定 golden cases 和 baseline report 上进行诊断与受控优化。</p><h3>Failure taxonomy</h3><ul><li><strong>Retrieval failure</strong>：正确证据没进入 top-k，或无关资料占据排序。</li><li><strong>Grounding failure</strong>：证据存在，但回答加入了来源不支持的内容。</li><li><strong>Citation failure</strong>：回答正确但引用绑定错误、过时或不可定位。</li><li><strong>No-answer failure</strong>：证据不足仍强行回答，或有证据却错误拒答。</li></ul><h3>Controlled improvement</h3><p>每轮只改变 chunking、top-k、metadata filter、prompt、hybrid retrieval 或 reranking 中一个因素，保存 config diff、metric diff、失败样例、latency 与 cost。分数变化必须结合人工抽检解释。</p><h3>面试证据</h3><p>学生最终能用 baseline → diagnosis → one controlled change → measured result → remaining risk 的结构讲清优化过程。W6 Practice 再把这些约定实现成 versioned dataset、runner、threshold 和 regression pipeline。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7Status: "CONFIRMED_THEORY",
});
update("C7P05", {
  description:
    "第七期 W5 实践课。把前四周已运行的 AI 产品升级为可持续交付的 AI-Native Engineering Workspace：从 feature spec 生成 dependency-aware work graph 和 acceptance evidence，建立 docs-as-code Wiki、C4/Mermaid Architecture Diagram、ADR 与 ownership，再用 deterministic Hooks 发现 docs drift，并创建经过测试的 /spec-to-work 与 /update-docs Skills。",
  description_en:
    "Cohort 7 Week 5 practice. Turn the working AI product from Weeks 1–4 into a sustainable AI-native engineering workspace with spec-to-work contracts, dependency-aware work graphs, acceptance evidence, docs-as-code, architecture diagrams, ADRs, deterministic hooks, and tested project skills.",
  steps: [
    step(
      1,
      "REVIEW",
      "建立 Documentation Map：SoT、owner、freshness 与 superseded 状态",
      10,
    ),
    step(
      2,
      "WORKSHOP",
      "Feature Spec → scope、non-goals、constraints、acceptance 与 work graph",
      20,
    ),
    step(
      3,
      "LAB",
      "Docs-as-Code：Wiki index、feature spec、runbook、decision log 与 glossary",
      20,
    ),
    step(
      4,
      "LAB",
      "C4/Mermaid：System Context、Container、AI request 与 data flow",
      20,
    ),
    step(
      5,
      "LAB",
      "ADR：decision、alternatives、trade-off、status 与 superseded link",
      15,
    ),
    step(
      6,
      "LAB",
      "Hooks：format、broken link、diagram、changed-path 与 docs-drift checks",
      20,
    ),
    step(
      7,
      "DELIVERABLE",
      "测试 /spec-to-work 与 /update-docs，提交一次端到端 evidence chain",
      15,
    ),
  ],
  learningMaterial:
    "<h2>AI-Native Engineering Workspace</h2><p>这周不增加新的业务功能，而是让项目从“AI 帮我写了很多文件”升级为团队可以继续开发、交接和审计的工程系统。核心链路是 <strong>Spec → Work Graph → Code/Test → Evidence → Living Docs</strong>。</p><h3>Documentation Map</h3><p>先为 PRD、DESIGN.md、API contract、schema、tests、architecture、ADR 和 runbook 标明 source of truth、owner、last verified、dependency 与 superseded 状态。README 只作为入口，不能复制所有正文形成多份真相。</p><h3>Spec-to-Work</h3><p>Feature spec 包含 problem、workflow、scope、non-goals、constraints、acceptance criteria、data/API impact、risk、test evidence 与 docs impact。Work graph 按依赖关系拆分任务，并为每个任务绑定验收证据；AI 生成的计划必须经过人工确认。</p><h3>Architecture as Code</h3><p>用 C4/Mermaid 或等价工具画 System Context、Container boundary、AI request flow 与 data flow；ADR 记录选择、替代方案、trade-off 和状态。Diagram 与代码不一致时，以核验后的系统事实更新，而不是自动相信任意一方。</p><h3>Hooks 与 Skills</h3><p>Hooks 只做必须发生的确定性检查：格式、链接、diagram syntax、changed paths 和 docs impact。/spec-to-work 与 /update-docs 封装按需工作流，明确触发条件、输入、允许工具、输出、验证与失败状态；写入后的 patch 必须 Human Review。</p><h3>交付</h3><p>提交 Documentation Map、feature spec、work graph、Wiki index、两张 architecture diagrams、一条 ADR、Hook config、两个 Skills，以及一次 spec → implementation → tests → drift report → reviewed docs patch 的证据链。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("L146", {
  title: "Skills Engineering：可复用、可测试的 AI Coding Workflow",
  title_en: "Skills Engineering: Reusable and Testable AI Coding Workflows",
  description:
    "W5 配套录播。把重复工程任务封装成有 trigger、input contract、allowed tools、workflow、validation、failure state 和 version history 的 Skill，并区分 Project Rules、Commands、Skills、Hooks 与 Subagents。Skill 是工作流程与上下文封装，不会自动获得权限，也不保证结果正确。",
  description_en:
    "A Week 5 recording on turning repeated engineering work into testable skills with triggers, input contracts, allowed tools, workflows, validation, failure states, and version history, while distinguishing skills from project rules, commands, hooks, and subagents.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Rules、Commands、Skills、Hooks 与 Subagents 的职责边界",
      8,
    ),
    step(2, "WORKSHOP", "选择高重复、边界清楚、结果可验证的工程任务", 8),
    step(
      3,
      "CONCEPT",
      "定义 trigger、input/output contract、allowed tools 与 non-goals",
      8,
    ),
    step(
      4,
      "DEMO",
      "组织 SKILL.md、references、scripts、templates 与 examples",
      8,
    ),
    step(5, "SECURITY", "权限继承、外部副作用、敏感数据与 Human Review", 8),
    step(
      6,
      "EVALUATION",
      "用正例、缺失输入、误触发和失败案例做 regression tests",
      8,
    ),
  ],
  learningMaterial:
    "<h2>Skills Engineering</h2><p>Skill 的价值不是再保存一段 Prompt，而是把重复工程判断变成团队可复用、可测试、可维护的工作流程。</p><h3>先选对任务</h3><p>适合封装的任务具有高重复、明确输入、稳定步骤和可验证输出，例如 spec-to-work、API contract review、docs drift remediation。一次性创意任务或责任边界不清的自动发布不适合作为第一个 Skill。</p><h3>Skill contract</h3><p>至少写清 trigger、适用场景、non-goals、required inputs、allowed tools、workflow、validation、failure state 与 expected outputs。把长参考资料、可执行脚本、模板和示例分开组织，避免 SKILL.md 变成无法维护的巨型说明书。</p><h3>与其他机制的区别</h3><ul><li><strong>Project Rules</strong>：每次工作都必须遵守的约束。</li><li><strong>Command</strong>：用户显式启动的入口。</li><li><strong>Skill</strong>：按条件加载的可复用工作流。</li><li><strong>Hook</strong>：在生命周期事件上强制执行的确定性检查。</li><li><strong>Subagent</strong>：需要独立上下文或并行执行的受限角色。</li></ul><h3>权限与测试</h3><p>Skill 不能扩大调用者权限。对正常输入、缺失输入、误触发、工具失败、恶意文件和输出验证失败建立 test cases；版本升级后重跑 regression set，并记录已知限制。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L76", {
  title: "Lab: Typed Prompt Pipeline、Validation 与 Failure Recovery",
  title_en: "Lab: Typed Prompt Pipelines, Validation, and Failure Recovery",
  description:
    "把一个复杂任务拆成 Extract → Validate → Transform → Review 四个有类型契约的阶段，保存中间产物、版本和 trace，并处理 schema failure、partial failure、retry 与人工接管。该 Lab 讲确定性 Prompt Pipeline，不把固定链式调用误称为 Agent。",
  description_en:
    "Build a typed Extract–Validate–Transform–Review prompt pipeline with persisted intermediate artifacts, traces, schema validation, partial-failure handling, retries, and human escalation. This is a deterministic pipeline, not an agent.",
  steps: [
    step(1, "CONCEPT", "Workflow、Prompt Pipeline 与 Agent 的边界", 4),
    step(2, "LAB", "Extract：从输入生成 versioned structured facts", 7),
    step(
      3,
      "LAB",
      "Validate：schema、required fields、provenance 与 confidence",
      7,
    ),
    step(4, "LAB", "Transform：只消费已验证字段并生成目标 artifact", 7),
    step(
      5,
      "LAB",
      "Review：deterministic checks、LLM review 与 Human Review",
      7,
    ),
    step(
      6,
      "RELIABILITY",
      "处理 partial failure、retry、resume 与 idempotency",
      5,
    ),
    step(7, "EVALUATION", "用固定 cases 比较单 Prompt 与 typed pipeline", 5),
  ],
  learningMaterial:
    "<h2>Typed Prompt Pipeline</h2><p>把所有要求塞进一个 Prompt，失败时很难知道是信息提取、格式验证还是内容生成出了问题。本实验把任务拆成四个可观察阶段，并为阶段之间定义 typed contract。</p><h3>Pipeline</h3><ol><li><strong>Extract</strong>：从输入提取 structured facts，同时保存 source span 与未确认字段。</li><li><strong>Validate</strong>：运行 schema、required fields、enum、provenance 与业务规则检查；失败时不进入下一阶段。</li><li><strong>Transform</strong>：只消费已验证字段，生成目标 artifact，不补写未知事实。</li><li><strong>Review</strong>：先跑 deterministic checks，再进行 LLM review 或 Human Review。</li></ol><h3>Operational state</h3><p>每个阶段保存 input version、prompt version、model config、output、validation result、attempt 和 trace ID。发生 partial failure 时从最后一个已验证 checkpoint 恢复，避免重复执行已成功的外部动作。</p><h3>验收</h3><p>用正常、缺字段、矛盾信息、schema failure 和 timeout cases 比较 single prompt 与 typed pipeline，报告 pass rate、失败定位能力、latency 和 cost。不要要求模型输出隐藏 Chain of Thought，只保存可审核的结果、引用和决策摘要。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L79", {
  title: "Tracing Fundamentals：Run Tree、Correlation 与 Data Boundaries",
  title_en: "Tracing Fundamentals: Run Trees, Correlation, and Data Boundaries",
  description:
    "先建立供应商中立的 AI trace schema：把 request、retrieval、prompt assembly、model、tool、validation 与 final outcome 连接成可回放的 run tree，并定义 correlation ID、版本字段、redaction、sampling 和 retention。LangSmith 只作为一种界面示例；W6/W7 的主路径在 L91 接入 Langfuse。",
  description_en:
    "Define a vendor-neutral AI trace schema that connects requests, retrieval, prompt assembly, models, tools, validation, and outcomes into a replayable run tree, with correlation IDs, version fields, redaction, sampling, and retention.",
  steps: [
    step(1, "CONCEPT", "Trace、Span、Run Tree 与 Correlation ID", 6),
    step(
      2,
      "SYSTEM_DESIGN",
      "设计 request→retrieval→model→tool→validation span schema",
      6,
    ),
    step(
      3,
      "GOVERNANCE",
      "Redaction、sampling、retention 与 access boundary",
      6,
    ),
    step(
      4,
      "DEBUGGING",
      "从一条失败 trace 定位 retrieval、model 或 tool bottleneck",
      6,
    ),
    step(
      5,
      "COMPARISON",
      "LangSmith、Langfuse 与 OpenTelemetry adapter 的职责边界",
      6,
    ),
  ],
  learningMaterial:
    "<h2>Tracing Fundamentals</h2><p>Tracing 的目的不是多一个漂亮 dashboard，而是回答一次 AI 任务经过了哪些步骤、每一步使用哪个版本、失败发生在哪里，以及最终动作是否真的成功。</p><h3>Canonical trace schema</h3><p>根 span 保存 trace ID、request ID、environment、feature、actor scope 与 final status；子 span 分别记录 retrieval、context assembly、model call、tool call、validation 与 human approval。每个 span 保存开始/结束、输入输出摘要、version、latency、usage、error code 和 parent ID。</p><h3>版本关联</h3><p>至少关联 dataset version、prompt version、model configuration、retriever/index version、tool schema version 和 code revision。没有这些字段，两个结果不同也无法判断是哪一层变化。</p><h3>Data boundaries</h3><p>日志不是数据垃圾桶。对 Prompt、retrieved chunks、Tool arguments 和 outputs 先做敏感字段分类，再决定 redact、hash、sample 或禁止记录；同时定义 retention、访问角色与删除路径。</p><h3>一次失败诊断</h3><p>沿 run tree 判断是 retrieval 没找到证据、context assembly 丢字段、model 无依据生成、tool 被拒绝、validation 失败还是最终 read-back 不一致。LangSmith 可用于观察这个概念；课程主项目随后用 Langfuse 实现，不要求维护两套平台。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L81a", {
  title: "Graph Query Decomposition：关系问题与 Evidence Path",
  title_en:
    "Graph Query Decomposition: Relational Questions and Evidence Paths",
  description:
    "进阶自学：把跨实体、跨文档问题拆成 entity、relation、constraint 与 evidence path，比较普通 semantic retrieval、metadata filtering 与 graph retrieval 的适用边界。原 GraphPrompts 阅读入口不存在，已改为完整内嵌资料，不再保留失效链接。",
  description_en:
    "Advanced self-study on decomposing cross-entity and cross-document questions into entities, relations, constraints, and evidence paths, while comparing semantic, metadata-filtered, and graph retrieval boundaries.",
  steps: [
    step(
      1,
      "CONCEPT",
      "识别 entity、relation、constraint 与 temporal scope",
      5,
    ),
    step(
      2,
      "WORKSHOP",
      "把自然语言问题拆成可验证的 subqueries 与 evidence path",
      7,
    ),
    step(
      3,
      "COMPARISON",
      "Semantic search、metadata filter 与 graph traversal 的选择",
      5,
    ),
    step(
      4,
      "EVALUATION",
      "检查 path completeness、source provenance 与 unsupported hop",
      5,
    ),
  ],
  learns: [],
  learningMaterial:
    '<h2>Graph Query Decomposition</h2><p>Graph retrieval 只有在问题依赖明确关系时才有价值。先把问题拆成实体、关系、约束和时间范围，再判断普通 RAG 是否已经足够。</p><h3>Decomposition contract</h3><pre><code>{\n  "entities": ["resident", "policy"],\n  "relations": ["activity governed_by policy"],\n  "constraints": ["current policy version", "same facility"],\n  "required_evidence": ["activity record", "policy section"]\n}</code></pre><h3>Retrieval decision</h3><ul><li><strong>Semantic retrieval</strong>：问题主要寻找语义相近段落。</li><li><strong>Metadata filtering</strong>：关系可由 facility、date、document type 等字段限定。</li><li><strong>Graph traversal</strong>：答案依赖多跳关系、路径完整性或跨文档实体连接。</li></ul><h3>Evidence path</h3><p>每一跳保存 source ID、entity ID、relation type、extraction version 与 confidence。缺少任一关键跳时必须报告 unsupported path，而不是由模型补齐关系。</p><h3>练习</h3><p>为三个关系型问题写 decomposition，并用同一问题分别尝试 semantic、metadata-filtered 和 graph retrieval。记录哪一种能提供最短且可核验的证据路径。</p>',
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L84", {
  title: "Lab: OpenSearch Hybrid Retrieval 与 Filtered k-NN",
  title_en: "Lab: OpenSearch Hybrid Retrieval and Filtered k-NN",
  description:
    "进阶选修 Lab：复用 W7 policy corpus 和 W6 dataset，在本地容器或已授权 sandbox 中建立 text、vector 与 metadata mapping，分别运行 BM25、k-NN、filtered vector search 和 hybrid retrieval，再比较 relevance、latency、cost 与运维复杂度。不得自动创建收费云资源。",
  description_en:
    "An advanced elective lab that reuses the Week 7 corpus and Week 6 dataset to compare BM25, k-NN, filtered vector search, and hybrid retrieval in a local container or authorised sandbox without automatically creating paid cloud resources.",
  steps: [
    step(
      1,
      "PREFLIGHT",
      "选择 local container 或 authorized sandbox，确认清理与成本边界",
      5,
    ),
    step(
      2,
      "LAB",
      "建立 text、vector、document ID、version 与 access metadata mapping",
      8,
    ),
    step(
      3,
      "LAB",
      "批量写入 policy chunks，并验证 count、dimension 与 failed rows",
      8,
    ),
    step(4, "LAB", "运行 BM25、k-NN 与 metadata-filtered vector search", 8),
    step(5, "LAB", "实现 hybrid retrieval 与 deterministic rank fusion", 8),
    step(
      6,
      "EVALUATION",
      "复用 W6 dataset 比较 quality、p95 latency、cost 与 failure cases",
      8,
    ),
    step(7, "CLEANUP", "导出配置和结果，删除实验索引或关闭授权资源", 5),
  ],
  learningMaterial:
    "<h2>OpenSearch Hybrid Retrieval Lab</h2><p>本 Lab 不是重新搭一个 PDF 问答项目，而是把 W7 的 policy corpus 和 W6 的 evaluation dataset 接到不同检索方式上，比较何时需要 production search engine。</p><h3>Preflight</h3><p>优先使用本地容器；使用云 sandbox 前记录账户、region、权限、预算告警、资源名称与清理步骤。课程材料不得自动创建持续收费资源。</p><h3>Index contract</h3><p>Mapping 至少包含 chunk text、embedding vector、document ID、chunk ID、document version、effective date、source type 与 access scope。写入后核对成功数、失败 rows、向量维度与版本，不接受静默丢数据。</p><h3>四组 retrieval</h3><ol><li>BM25 lexical search。</li><li>k-NN vector search。</li><li>带 access/version metadata filter 的 vector search。</li><li>BM25 + vector candidates + deterministic rank fusion 的 hybrid retrieval。</li></ol><h3>验收</h3><p>对相同 dataset 报告 retrieval relevance、citation coverage、p50/p95 latency、estimated cost、index update complexity 和失败案例。性能没有提升时如实保留结果；不能因为工具更复杂就宣布更 production-ready。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L87", {
  title: "RAG Failure Diagnosis Matrix：从指标到可验证修复",
  title_en: "RAG Failure Diagnosis Matrix: From Metrics to Verifiable Fixes",
  description:
    "不再重复定义 RAGAS 指标，而是把 retrieval、grounding、citation、freshness、access-control 与 no-answer failures 映射到 trace evidence、可能原因、单一修复变量和回归案例。学生学会从失败样例提出假设，而不是看到低分就盲目更换 Embedding。",
  description_en:
    "Map retrieval, grounding, citation, freshness, access-control, and no-answer failures to trace evidence, hypotheses, controlled fixes, and regression cases instead of repeating metric definitions.",
  steps: [
    step(
      1,
      "DIAGNOSIS",
      "Failure label：retrieval、grounding、citation、freshness、ACL、no-answer",
      6,
    ),
    step(
      2,
      "DIAGNOSIS",
      "结合 trace、retrieved IDs、scores 与 final response 定位层级",
      6,
    ),
    step(3, "WORKSHOP", "建立 hypothesis → one change → expected evidence", 6),
    step(4, "EVALUATION", "运行 slice-level regression，检查改善与副作用", 6),
    step(5, "INTERVIEW", "把一次失败诊断讲成 engineering decision", 6),
  ],
  learningMaterial:
    "<h2>RAG Failure Diagnosis Matrix</h2><p>L90 已经解释指标口径，本课不再讲一遍 Precision、Recall 和 Faithfulness。这里练习如何从低分或用户投诉定位故障层级，并选择最小可验证修复。</p><table><thead><tr><th>Failure</th><th>先看什么证据</th><th>候选原因</th><th>一次只改什么</th></tr></thead><tbody><tr><td>Retrieval miss</td><td>query、top-k IDs、rank、filters</td><td>chunk、embedding、query、filter</td><td>其中一个 retrieval variable</td></tr><tr><td>Unsupported answer</td><td>claims 与 source spans</td><td>context assembly 或 generation policy</td><td>prompt/validator 之一</td></tr><tr><td>Wrong citation</td><td>claim→chunk binding</td><td>程序绑定或 version mismatch</td><td>citation mapping</td></tr><tr><td>Stale answer</td><td>document version/effective date</td><td>ingestion lifecycle</td><td>version filter</td></tr><tr><td>ACL leak</td><td>actor scope 与 returned IDs</td><td>filter 在 retrieval 后执行</td><td>pre-retrieval authorization</td></tr><tr><td>Bad refusal</td><td>evidence sufficiency 与 threshold</td><td>no-answer policy</td><td>decision threshold</td></tr></tbody></table><h3>Diagnosis loop</h3><p><strong>Label failure → inspect trace → state hypothesis → change one variable → rerun relevant slice → run broad regression → document remaining risk</strong>。局部指标提高但 ACL、latency 或其他 slice 退化时不能宣布修复完成。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L91", {
  title: "Langfuse：Trace、Score 与 Dataset Lineage",
  title_en: "Langfuse: Traces, Scores, and Dataset Lineage",
  description:
    "沿 W6 Evaluation Pipeline 与 W7 RAG 接入 Langfuse：定义 trace/span schema，关联 dataset、prompt、retriever、model 与 code revisions，把 deterministic checks、RAGAS 和 human review 写回同一 run，并设置 redaction、sampling、retention 与环境隔离。平台用于承载证据，不替代评估设计。",
  description_en:
    "Instrument the Week 6 evaluation pipeline and Week 7 RAG with Langfuse, linking traces to dataset, prompt, retriever, model, and code revisions while attaching deterministic, RAGAS, and human scores with explicit data controls.",
  steps: [
    step(
      1,
      "INSTRUMENTATION",
      "建立 trace/span、correlation ID 与 environment schema",
      10,
    ),
    step(
      2,
      "INSTRUMENTATION",
      "记录 retrieval、context、model、tool、validation 与 outcome",
      10,
    ),
    step(
      3,
      "LINEAGE",
      "关联 dataset、prompt、index、model config 与 code revision",
      10,
    ),
    step(
      4,
      "EVALUATION",
      "写回 deterministic、RAGAS 与 human review scores",
      10,
    ),
    step(
      5,
      "GOVERNANCE",
      "配置 redaction、sampling、retention、access 与 environment isolation",
      10,
    ),
    step(
      6,
      "DEBUGGING",
      "从 failed slice 下钻 trace，并生成可复现 regression case",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Langfuse：Trace、Score 与 Dataset Lineage</h2><p>Langfuse 是本课程的 observability 实现路径，但不是评估方法本身。W6 已定义 dataset、checks 与 thresholds；本课把运行证据连接到具体版本，使失败可以重放和比较。</p><h3>Trace model</h3><p>一个根 trace 对应一次 end-to-end task，子 spans 记录 retrieval、context assembly、model、tool、validation 与 final outcome。统一字段包括 trace ID、environment、actor scope、feature、latency、usage、status 和 stable error code。</p><h3>Lineage</h3><p>每次 run 关联 dataset/case ID、prompt version、retriever/index version、model configuration、tool schema version 与 code revision。Evaluation score 必须保存 metric name、metric version、judge config、human reviewer status 和 missing/failed 状态。</p><h3>Data governance</h3><p>在 instrumentation 前决定哪些字段记录、脱敏、hash、sample 或禁止发送；分别配置 development、staging 与 production 的 retention、access 和 dataset。选择 cloud 或 self-hosted 之前按授课时官方文档核验许可、部署、导出删除与成本，不把部署方式自动等同合规。</p><h3>验收</h3><p>选一个失败 slice，从 score 下钻到 trace，定位具体 span 和版本，生成一条可重现 regression case。提交脱敏截图或导出、correlation ID、root cause 与修复后比较。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L93", {
  title: "GraphRAG Decision Lab：One Worked Evidence Graph",
  title_en: "GraphRAG Decision Lab: One Worked Evidence Graph",
  description:
    "进阶选修：用一个跨实体、跨文档问题完成 entity/relation extraction、canonical ID、provenance-aware graph、path retrieval 与 cited answer，并与 W7 vector baseline 比较。重点是证明关系图解决了具体失败，不把 GraphRAG 当普通 RAG 的默认升级。",
  description_en:
    "An advanced elective that builds one provenance-aware evidence graph for a cross-entity, cross-document question and compares it with the Week 7 vector baseline before deciding whether graph retrieval is justified.",
  steps: [
    step(
      1,
      "DECISION",
      "选择 vector baseline 明确失败的 relational question slice",
      5,
    ),
    step(
      2,
      "LAB",
      "抽取 entity、relation、canonical ID、source span 与 version",
      8,
    ),
    step(
      3,
      "LAB",
      "构建 provenance-aware evidence graph 并检查 unsupported edges",
      8,
    ),
    step(4, "LAB", "执行 path retrieval，生成带 source path 的回答或拒答", 8),
    step(
      5,
      "EVALUATION",
      "与 vector baseline 比较 coverage、faithfulness、latency、cost 与更新负担",
      8,
    ),
    step(
      6,
      "DECISION",
      "写出 adopt、hybrid 或 reject GraphRAG 的 Architecture Decision",
      5,
    ),
  ],
  learningMaterial:
    "<h2>GraphRAG Decision Lab</h2><p>只选择一个普通 vector retrieval 明确失败的关系型 slice，例如答案需要连接 activity、resident role、policy version 和 evidence source。没有 baseline failure 就没有引入图的理由。</p><h3>Evidence graph</h3><p>Node 保存 canonical entity ID、type 与有效期；Edge 保存 relation type、source document/chunk、source span、extraction version、confidence 与 reviewer status。模型提出的关系在没有来源前只能是 candidate edge。</p><h3>Retrieval and answer</h3><p>查询先生成受约束的 path request，再检索可访问的 nodes/edges。最终回答展示关键 evidence path 与 citations；路径不完整、版本冲突或权限不足时拒答。</p><h3>Decision evidence</h3><p>对同一 slice 比较 vector baseline、metadata-filtered retrieval 和 evidence graph，报告 answer/citation quality、unsupported edges、latency、cost、ingestion complexity 与 update burden。最终交付一条 ADR：adopt、hybrid 或 reject，并说明适用范围。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L95", {
  title: "AWS RAG Architecture：Optional Production Mapping",
  title_en: "AWS RAG Architecture: Optional Production Mapping",
  description:
    "可选架构资料：把现有 RAG 的 application runtime、S3 document storage、OpenSearch index、model endpoint、IAM/KMS/network boundary、observability 与 ingestion jobs 映射到 AWS 服务选择。只做 Architecture Decision 与部署前检查；标准 CI/CD 和实际云部署由学生按已有软件基础自助完成。",
  description_en:
    "An optional architecture reference that maps the existing RAG system to AWS runtime, object storage, search, model, identity, encryption, networking, observability, and ingestion responsibilities without requiring a second deployment project.",
  steps: [
    step(
      1,
      "SYSTEM_DESIGN",
      "把现有 RAG components、data flows 与 trust boundaries 画清",
      6,
    ),
    step(
      2,
      "COMPARISON",
      "Runtime：EC2、container service 与 event-driven option 的选择",
      6,
    ),
    step(
      3,
      "DATA_ARCHITECTURE",
      "S3 source documents、OpenSearch index 与 lineage/refresh boundary",
      6,
    ),
    step(
      4,
      "SECURITY",
      "IAM least privilege、KMS、network path、secret 与 audit boundary",
      6,
    ),
    step(
      5,
      "RELIABILITY",
      "Health、logs、metrics、backup/rebuild、cost ceiling 与 cleanup",
      6,
    ),
    step(6, "DECISION", "输出 AWS mapping ADR 与 go/no-go checklist", 6),
  ],
  learningMaterial:
    "<h2>AWS RAG Architecture：Optional Production Mapping</h2><p>这份资料不要求学生再做一个 AWS 版 RAG。它把 W7 已有系统的责任映射到云端组件，训练架构选型和部署前提问。</p><h3>Reference mapping</h3><ul><li><strong>Application runtime</strong>：根据持续服务、容器、GPU、启动时间和运维能力，在 EC2、容器服务或事件驱动方案之间选择。</li><li><strong>Document source</strong>：S3 保存原始/处理后文档及版本；它不是向量索引。</li><li><strong>Search index</strong>：OpenSearch 可承载 lexical/vector/hybrid retrieval；索引必须可以从 source + pipeline version 重建。</li><li><strong>Model access</strong>：使用已授权 provider endpoint；数据路径、region 与账号访问需单独核验。</li><li><strong>Security</strong>：IAM least privilege、KMS、network boundaries、secret storage 与 audit logs。</li><li><strong>Operations</strong>：health check、logs/metrics、failure queue、re-index、backup/rebuild、budget alert 与 cleanup。</li></ul><h3>Architecture decision</h3><p>比较至少两个 runtime 方案，说明 traffic pattern、latency、cost、operational ownership、data residency 和 recovery。不得把 serverless 写成“没有运维”，也不能因为服务在 AWS 内就假设网络和数据自动安全。</p><h3>边界</h3><p>L96 提供可选 Bedrock/OpenSearch 对照 Lab。实际资源创建、CI/CD 与标准软件部署不占第七期独立 Live；使用前必须确认授权、预算和清理计划。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
update("L98", {
  title: "Function Calling：Provider Adapters 与 Safe Tool Execution",
  title_en: "Function Calling: Provider Adapters and Safe Tool Execution",
  description:
    "模型只提出 tool call，应用通过 provider adapter 归一化 call ID、arguments 与 result envelope，再执行 schema、business rule、authorization、approval、timeout、idempotency 和 read-back。课程复用现有业务工具，不再另建 search/calculator/file-read 小项目。",
  description_en:
    "Treat model tool calls as proposals, normalise provider-specific call IDs, arguments, and result envelopes through adapters, then enforce schema, business rules, authorisation, approval, timeouts, idempotency, and read-back.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Tool request、application execution 与 result message 的责任边界",
      5,
    ),
    step(
      2,
      "SYSTEM_DESIGN",
      "Provider adapter：call ID、arguments、result envelope 与 finish state",
      5,
    ),
    step(
      3,
      "SECURITY",
      "Schema、business rule、authorization 与 approval 四层验证",
      5,
    ),
    step(
      4,
      "RELIABILITY",
      "Timeout、stable error taxonomy、retry budget 与 circuit breaker",
      5,
    ),
    step(
      5,
      "RELIABILITY",
      "写工具的 idempotency、dry-run、read-back 与 compensation",
      5,
    ),
    step(
      6,
      "EVALUATION",
      "Selection、argument、permission、side-effect 与 recovery cases",
      5,
    ),
  ],
  learningMaterial:
    "<h2>Function Calling：Provider Adapters 与 Safe Tool Execution</h2><p>Function Calling 不是模型执行函数。模型输出一个不可信的结构化请求；应用决定本轮暴露哪些工具、参数是否有效、用户是否有权执行，以及真实系统是否成功产生了结果。</p><h3>Canonical adapter</h3><p>不同 provider 的 tool definition、call ID、arguments、result message 和终止状态可能不同。课程定义内部 <code>ToolCall</code> 与 <code>ToolResult</code> contract，由各 provider adapter 负责转换；开课时用实际 SDK contract test 核验，不在教材里假设跨供应商参数相同。</p><h3>Execution gate</h3><p><strong>Parse → schema validation → business validation → authorization → approval → execute → read-back → sanitised result</strong>。Schema 合法不代表业务允许；模型选择了工具也不代表用户已授权。</p><h3>Failure contract</h3><p>使用稳定错误类型，例如 INVALID_ARGUMENTS、NOT_FOUND、FORBIDDEN、RATE_LIMITED、DEPENDENCY_DOWN、ALREADY_APPLIED。返回模型的信息只包含可恢复提示，原始 stack、credentials 和内部网络信息不得进入 context。</p><h3>Side-effect safety</h3><p>写工具提供 idempotency key、dry-run/diff、approval binding、timeout、provider request ID 和真实 read-back。超时不能自动推断失败；先查询终态，再重试或补偿。</p><h3>Evaluation</h3><p>固定 cases 覆盖正确选择、不该调用、缺参数、相似工具、权限拒绝、注入结果、timeout、部分成功和重复写入。分别报告 tool selection、argument validity、policy rejection、side-effect precision 与 recovery success。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
});
const compactMaterial = (title, lead, sections, deliverable) =>
  `<h2>${title}</h2><p>${lead}</p>${sections
    .map(([heading, body]) => `<h3>${heading}</h3><p>${body}</p>`)
    .join("")}<h3>验收</h3><p>${deliverable}</p>`;

const finalContentRefreshes = [
  {
    code: "L99",
    title: "Lab: Safe Tool Selection、Validation 与 Side-Effect Safety",
    description:
      "复用现有项目工具，测试何时调用、选哪个工具、参数是否合法、权限是否允许，以及重试是否会重复产生副作用；不再另建 calculator/search 玩具项目。",
    steps: [
      [
        "DESIGN",
        "定义 read/write tools、usage conditions 与 exclusion conditions",
      ],
      ["LAB", "实现 JSON Schema 与 server-side business validation"],
      ["SECURITY", "按 actor scope 动态暴露工具并处理与拒绝越权"],
      ["RELIABILITY", "注 timeout、stable errors、idempotency 与 read-back"],
      [
        "EVALUATION",
        "运行 selection、arguments、permission 与 duplicate-action cases",
      ],
    ],
    sections: [
      [
        "Tool contract",
        "每个工具写清 when to use、when not to use、inputs、returns、stable errors 与 side effects；Schema 通过不代表业务授权与权限通过。",
      ],
      [
        "Execution boundary",
        "模型只提出 tool call；应用完成 validation、authorization、approval、execution、sanitization 与 result binding。写工具必须有 idempotency key 和真实 read-back。",
      ],
      [
        "Failure cases",
        "覆盖未知工具、坏参数、资源不存在、越权、429、timeout、部分成功、工具结果注入和重复请求。",
      ],
    ],
    deliverable:
      "提交 tool specs、executor trace 和固定测试结果，证明拒绝路径没有副作用，重复写入只产生一次终态。",
  },
  {
    code: "L100a",
    title: "MCP Engineering Checklist：Contract、Transport 与 Trust Boundary",
    description:
      "MCP 配套自学：从 protocol contract、server capability、transport lifecycle、tool schema、resource provenance、authentication、logging 与 failure recovery 审核一个 MCP integration。",
    steps: [
      ["CONCEPT", "区分 Host、Client、Server、Tool、Resource 与 Prompt"],
      [
        "SECURITY",
        "定义 capability exposure、credential、actor 与 data boundary",
      ],
      [
        "RELIABILITY",
        "处理 startup、handshake、timeout、disconnect 与 malformed result",
      ],
      ["REVIEW", "使用 checklist 审核一个现有 MCP Server"],
    ],
    sections: [
      [
        "Protocol before framework",
        "先描述消息、capability discovery、schema 和 lifecycle，再选择 SDK。FastMCP 等框架减少样板代码，但不能替代权限、业务校验与测试。",
      ],
      [
        "Trust boundary",
        "Server description、resource 和 tool result 都可能包含不可信文本；凭证由 host/runtime 管理，不进入模型 context 或普通日志。",
      ],
      [
        "Operational contract",
        "固定 command/args/env/working directory、startup timeout、stderr logging、health evidence 与 version compatibility；stdout 不混入破坏协议的调试文本。",
      ],
    ],
    deliverable:
      "完成一份 MCP integration checklist，列出 capability、权限、数据路径、失败状态、版本与仍需人工确认的风险。",
  },
  {
    code: "L102",
    title: "Lab: Build a Typed MCP Server with FastMCP",
    description:
      "使用 FastMCP 或当期核验的等价 SDK，把现有 Domain Service 暴露为 typed tools/resources；覆盖 schema、stdio lifecycle、logging、permission、invalid input 与 client contract tests。",
    steps: [
      ["PREFLIGHT", "固定 runtime、SDK 与 local client configuration"],
      ["LAB", "封装两个 read tools 与一个 draft-only write tool"],
      ["LAB", "增加 typed schema、stable error envelope 与 sanitized result"],
      [
        "SECURITY",
        "加入 actor scope、allowlist 与 human-confirmation boundary",
      ],
      [
        "TEST",
        "运行 discovery、valid、invalid、forbidden、timeout 与 disconnect tests",
      ],
    ],
    sections: [
      [
        "Thin adapter",
        "MCP handler 只做 transport mapping，不复制 Repository query 或 Domain Service 业务规则。直接 service tests 应先通过。",
      ],
      [
        "Transport discipline",
        "stdio 模式下 protocol output 与 logs 分流，明确 command、args、env、working directory、startup timeout 与 shutdown。",
      ],
      [
        "Contract tests",
        "使用本地 client 验证 capability discovery、schema、call/result correlation、错误映射和断连恢复。",
      ],
    ],
    deliverable:
      "提交 server、client config、contract-test report 与一条从 client call 到 service audit record 的 trace。",
  },
  {
    code: "L107",
    title: "MCP Packaging & Release Checklist",
    description:
      "把本地 MCP Server 整理为可安装、可验证、可撤回的 package：固定 entry point、runtime constraints、README、version、provenance、smoke test 与 release/rollback evidence。",
    steps: [
      [
        "PACKAGING",
        "定义 package metadata、entry point、runtime 与 dependency lock",
      ],
      [
        "DOCUMENTATION",
        "编写最小安装、client config、permissions 与 troubleshooting",
      ],
      ["TEST", "在干净环境执行 install、discovery、smoke 与 uninstall"],
      [
        "RELEASE",
        "生成 version、checksum、changelog、rollback 与 deprecation plan",
      ],
    ],
    sections: [
      [
        "Installability",
        "包必须在干净环境安装并启动；README 中的 command、args、env 和 working directory 与实际 artifact 一致。",
      ],
      [
        "Security",
        "不把 API key、测试数据或本机绝对路径打进 package。声明 capability、network access、data handling 与 license。",
      ],
      [
        "Lifecycle",
        "版本升级需兼容检查；破坏性变更提供 migration、旧版本支持期和撤回方案。",
      ],
    ],
    deliverable:
      "提交 package artifact、checksum、clean-room smoke test、README、changelog 与 rollback/deprecation 说明；不要求公开发布。",
  },
  {
    code: "L109",
    title: "Computer Use Architecture：Perception、Action 与 Approval Boundary",
    description:
      "把 Computer Use 拆成 screenshot/state capture、perception、action proposal、policy check、human approval、execution 与 verification；明确它何时优于 DOM/API 自动化及其安全边界。",
    steps: [
      [
        "CONCEPT",
        "Perception→proposal→policy→approval→action→verification loop",
      ],
      ["COMPARISON", "比较 API、DOM automation 与 visual Computer Use"],
      [
        "SECURITY",
        "定义 domain allowlist、secret boundary 与 high-risk confirmation",
      ],
      [
        "RELIABILITY",
        "处理 stale screenshot、layout drift、partial action 与 recovery",
      ],
    ],
    sections: [
      [
        "Selection",
        "有稳定 API 时优先 API；有可靠 DOM selector 时优先确定性 automation；只有缺少接口、需要视觉理解时才考虑 Computer Use。",
      ],
      [
        "Action safety",
        "模型生成的是 action proposal。系统在执行前检查目标、坐标/元素、domain、actor permission 与风险等级，高风险动作必须显示具体影响后确认。",
      ],
      [
        "Verification",
        "点击成功不等于任务成功。动作后重新读取页面状态，保存 before/after evidence，并对 stale state、弹窗和部分完成设置恢复路径。",
      ],
    ],
    deliverable:
      "输出一张 Computer Use state machine，以及 API/DOM/visual 三种实现的选择 ADR 和安全测试集。",
  },
  {
    code: "L113",
    title: "Lab: ReAct Loop with Typed Actions and Stop Conditions",
    description:
      "实现 Observe→Decide→Act→Verify 循环，但只保存可审核的 action rationale，不要求模型输出隐藏 Chain of Thought；加入 tool allowlist、step budget、deadline、no-progress detection 和 human escalation。",
    steps: [
      ["LAB", "定义 state、observation、typed action 与 terminal outcomes"],
      ["LAB", "实现 tool loop、result binding 与 state transition"],
      [
        "RELIABILITY",
        "加入 max steps、deadline、no-progress 与 repeated-action detection",
      ],
      [
        "SECURITY",
        "加入 tool allowlist、approval 与 untrusted-result handling",
      ],
      [
        "EVALUATION",
        "测试 success、bad arguments、tool failure、loop 与 escalation",
      ],
    ],
    sections: [
      [
        "State machine",
        "State 保存目标、已验证事实、tool results、attempt、budget 与 terminal status；自然语言历史不能作为唯一状态。",
      ],
      [
        "Bounded loop",
        "每轮只执行一个经过校验的 typed action。达到 deadline、预算耗尽、重复动作或无进展时停止并返回明确原因。",
      ],
      [
        "Reasoning evidence",
        "保存 action、使用的 evidence IDs、policy decision 和结果摘要；不把隐藏推理文本作为验收要求。",
      ],
    ],
    deliverable:
      "提交状态转移日志与固定 cases，证明循环能成功、拒绝越权并在无进展时有限停止。",
  },
  {
    code: "L114",
    title:
      "Lab: Agent Control Patterns—Router、Planner、Reviewer 与 Escalation",
    description:
      "在同一任务上比较 deterministic workflow、router、planner-executor、reviewer 与 human escalation，依据任务不确定性和风险选择最小足够架构。",
    steps: [
      ["COMPARISON", "用同一任务建立 deterministic workflow baseline"],
      ["LAB", "实现 bounded router 与 planner-executor 两种候选"],
      ["LAB", "加入 reviewer、retry ownership 与 escalation state"],
      ["EVALUATION", "比较完成率、错误、步骤、latency、cost 与可解释性"],
    ],
    sections: [
      [
        "Pattern fit",
        "固定步骤优先 workflow；有限分支使用 router；只有任务需要动态分解时才引入 planner；reviewer 不能自动把错误答案变正确。",
      ],
      [
        "Control ownership",
        "代码控制 budgets、allowed transitions、retries 和 terminal states；模型只在约束内选择下一步。",
      ],
      [
        "Evaluation",
        "同一 dataset 比较 single-call、workflow 和 agent patterns，防止因架构更复杂就默认更好。",
      ],
    ],
    deliverable:
      "提交 pattern decision matrix、两种实现 trace 与选择理由，明确未采用模式的原因。",
  },
  {
    code: "L118b",
    title: "Deep Agents：Planning、Context Isolation 与 Delegation Boundaries",
    description:
      "进阶自学：分析长任务如何拆成计划、独立上下文、delegated work 与合并检查；原缺失阅读入口移除，内容直接内嵌，不把更多 Agent 等同更强。",
    steps: [
      ["CONCEPT", "Long-horizon task、plan state 与 checkpoint"],
      ["CONCEPT", "Context isolation、delegation contract 与 evidence return"],
      [
        "RELIABILITY",
        "处理 stale plan、conflict、partial completion 与 cancellation",
      ],
      [
        "EVALUATION",
        "与 single-agent baseline 比较收益和 coordination overhead",
      ],
    ],
    sections: [
      [
        "Delegation contract",
        "子任务必须写清目标、输入、允许工具、数据边界、输出 schema、完成条件和预算；共享聊天记录不是可靠契约。",
      ],
      [
        "Merge control",
        "Coordinator 验证证据、冲突和版本后合并结果，不能把多个 Agent 的文字直接拼接成事实。",
      ],
      [
        "When not to use",
        "任务短、共享状态强或审批频繁时，多 Agent 会增加成本、延迟和责任不清。先证明 single-agent baseline 的具体不足。",
      ],
    ],
    deliverable:
      "为一个长任务画 delegation graph，并写出 single-agent、multi-agent 的对照假设与停止条件。",
    learns: [],
  },
  {
    code: "L121",
    title: "Operating RAG in Production：Freshness、Re-index 与 Recovery",
    description:
      "聚焦 RAG 上线后的 ingestion freshness、index version、blue/green rebuild、backfill、deletion propagation、drift、rollback 与 incident diagnosis；不重复讲通用云部署。",
    steps: [
      ["OPERATIONS", "定义 source→parser→chunk→embedding→index lineage"],
      [
        "RELIABILITY",
        "设计 incremental update、backfill 与 blue/green index rebuild",
      ],
      [
        "GOVERNANCE",
        "验证 correction、deletion、retention 与 access-policy propagation",
      ],
      [
        "INCIDENT",
        "演练 stale answer、partial index、embedding migration 与 rollback",
      ],
    ],
    sections: [
      [
        "Freshness SLO",
        "分别记录 source updated、ingested、indexed 和 serving version；回答 trace 必须能定位使用了哪个 document/index version。",
      ],
      [
        "Safe migration",
        "Parser、chunking 或 embedding 变化时建立新索引并对固定 dataset 验证，切流后保留可回滚窗口，不原地覆盖唯一索引。",
      ],
      [
        "Deletion",
        "源文档删除、权限撤销和用户更正必须传播到 chunks、index、cache 与评估数据；只删 S3 文件并不等于检索不可见。",
      ],
    ],
    deliverable:
      "提交 ingestion state diagram、freshness dashboard fields、re-index runbook 与一次 stale-index incident drill。",
  },
  {
    code: "L123",
    title: "Lab: Multi-Agent Orchestration with Measured Coordination Cost",
    description:
      "实现 coordinator 与两个有独立 context 的 specialists，使用 typed delegation/handoff、shared artifact version、timeout、cancellation 与 merge validation，并与 single-agent baseline 比较。",
    steps: [
      [
        "DESIGN",
        "定义 coordinator、specialists、contracts 与 shared artifact ownership",
      ],
      ["LAB", "实现 parallel-safe delegation 与 typed evidence return"],
      [
        "LAB",
        "加入 handoff、timeout、cancellation、conflict 与 merge validation",
      ],
      [
        "EVALUATION",
        "对比 single-agent quality、latency、cost 与 coordination failures",
      ],
    ],
    sections: [
      [
        "Isolation",
        "每个 specialist 只获得完成任务所需 context 和 tools，返回 structured result、evidence IDs、version 与 unresolved issues。",
      ],
      [
        "Coordination",
        "只有无数据依赖的任务并行。共享 artifact 使用版本检查；冲突、超时或取消必须进入可观察终态。",
      ],
      [
        "Baseline",
        "多 Agent 只有在质量或时延收益超过 coordination cost 时才保留；不能只展示一次成功 demo。",
      ],
    ],
    deliverable:
      "提交 orchestration graph、失败 trace、single-agent 对照报告与采用/拒绝多 Agent 的决策。",
  },
  {
    code: "L127a",
    title: "Multi-Agent Patterns：Delegation、Handoff 与 Shared-State Risks",
    description:
      "配套自学：比较 supervisor、router、peer handoff、parallel specialists 与 reviewer patterns，重点检查 context、authority、artifact ownership、conflict 与 accountability。",
    steps: [
      ["CONCEPT", "比较 supervisor、router、handoff、parallel 与 reviewer"],
      ["SECURITY", "定义 delegated authority、tool scope 与 data sharing"],
      [
        "RELIABILITY",
        "定义 artifact ownership、version conflict 与 cancellation",
      ],
      ["DECISION", "用任务约束选择最小足够 pattern"],
    ],
    sections: [
      [
        "Authority",
        "Delegation 必须绑定具体任务、工具、资源、期限和最大副作用；子 Agent 不继承无限权限。",
      ],
      [
        "State",
        "共享数据库不等于共享理解。每次 handoff 传递 typed state、evidence、version 和 unresolved items。",
      ],
      [
        "Accountability",
        "记录谁提出、谁批准、谁执行、谁合并和最终 owner；失败不能归因于一个模糊的 Agent team。",
      ],
    ],
    deliverable:
      "为三个任务分别选择 pattern，并说明权限、状态、失败恢复和不采用更复杂架构的理由。",
    learns: [],
  },
  {
    code: "L141",
    title: "Lab: Production Tool Loop State Machine",
    description:
      "实现显式 Agent state machine：tool proposal、validation、approval wait、execution、result binding、retry、resume 与 terminal outcome；每个状态可追踪、可测试。",
    steps: [
      ["LAB", "定义 typed states、events 与 allowed transitions"],
      ["LAB", "实现 tool proposal→validation→execution→result binding"],
      ["LAB", "加入 approval wait、checkpoint、resume 与 cancellation"],
      [
        "RELIABILITY",
        "加入 idempotency、retry budget、no-progress 与 terminal reasons",
      ],
      [
        "TEST",
        "运行 duplicate event、stale approval、timeout 与 crash-resume cases",
      ],
    ],
    sections: [
      [
        "State over chat history",
        "状态包含 current step、tool call ID、approval version、attempt、budget、checkpoint 与 outcome；不能只靠对话文字猜测运行位置。",
      ],
      [
        "Exactly-once illusion",
        "系统无法假设 exactly once。通过 idempotency、deduplication、provider read-back 和 compensating action 控制至少一次执行。",
      ],
      [
        "Recovery",
        "Crash 后从持久 checkpoint 恢复，先确认外部动作终态，再决定继续、补偿或人工处理。",
      ],
    ],
    deliverable:
      "提交 state diagram、transition tests 与一次在 tool execution 后崩溃再恢复且不重复副作用的证据。",
  },
  {
    code: "L143",
    title: "Lab: Harness Hooks—Policy Enforcement、Audit 与 Output Filtering",
    description:
      "实现 PreTool、PostTool、Stop 与 Audit hooks，把 permission、budget、PII filtering、result validation 与 trace 写入 Harness 生命周期；Hooks 保持确定性并接受独立测试。",
    steps: [
      [
        "DESIGN",
        "定义 hook lifecycle、ordering、inputs、outputs 与 failure policy",
      ],
      ["LAB", "PreTool：permission、budget、argument 与 approval checks"],
      ["LAB", "PostTool：sanitize、schema、read-back 与 audit record"],
      ["LAB", "Stop/Audit：terminal reason、usage、trace 与 escalation"],
      [
        "TEST",
        "测试 hook conflict、failure、bypass、timeout 与 sensitive output",
      ],
    ],
    sections: [
      [
        "Deterministic boundary",
        "权限、schema、budget 和敏感字段过滤使用确定性代码；模型可以提供风险信号，但不能成为唯一安全控制。",
      ],
      [
        "Ordering",
        "先验证 identity/permission，再检查参数和预算；执行后先验证真实结果，再 sanitize 并写审计。Hook failure 的 fail-open/fail-closed 必须明确。",
      ],
      [
        "Evidence",
        "每个 hook 记录 policy version、decision、reason、input hash、output status 和 correlation ID，不把完整敏感 payload 写进日志。",
      ],
    ],
    deliverable:
      "提交 hook pipeline、unit tests 和一条越权调用被 PreTool 阻止、敏感结果被 PostTool 过滤的 trace。",
  },
  {
    code: "L151",
    title: "Lab: Model Serving Contract—Health、Load 与 Rollback",
    description:
      "进阶选修：不限定云平台，实现一个模型服务 adapter 的 readiness、request schema、concurrency、timeout、usage、version 与 rollback contract；可使用 mock 或已授权 endpoint。",
    steps: [
      ["PREFLIGHT", "选择 mock、local open-weight 或 authorized endpoint"],
      ["LAB", "实现 readiness、model/version metadata 与 request validation"],
      [
        "LAB",
        "加入 concurrency、queue、timeout、cancellation 与 usage metrics",
      ],
      ["RELIABILITY", "执行 canary comparison、failure injection 与 rollback"],
    ],
    sections: [
      [
        "Serving contract",
        "Ready 不是进程启动，而是模型、tokenizer、adapter 和依赖均可处理 smoke request；返回实际 model/version 和 trace ID。",
      ],
      [
        "Capacity",
        "限制 concurrency 和 queue，区分 cold start、prefill/TTFT、generation 与 network latency；过载时明确拒绝。",
      ],
      [
        "Release",
        "新版本先跑固定 dataset 和 canary；质量、错误、p95 或预算越界时回滚，不静默切换未授权 endpoint。",
      ],
    ],
    deliverable:
      "提交 serving contract、load/failure test、版本对照与一次可验证 rollback；不要求购买 GPU。",
  },
  {
    code: "L152",
    title: "Lab: Inference Optimization—KV Cache、Batching 与 Quality Guard",
    description:
      "进阶选修：用 trace 拆分 TTFT 与 generation latency，比较 stable-prefix/KV cache reuse、continuous batching、quantization 或输出预算中的可用策略，同时以固定质量集防止只追求速度。",
    steps: [
      [
        "MEASURE",
        "建立 TTFT、tokens/sec、p50/p95、memory、cost 与 quality baseline",
      ],
      ["LAB", "验证 stable-prefix 与 KV cache reuse 的命中条件和隔离边界"],
      ["LAB", "比较 batching、output budget 或 quantization 中一个变量"],
      [
        "EVALUATION",
        "运行 quality regression、load test 与 tail-latency analysis",
      ],
    ],
    sections: [
      [
        "Measure first",
        "分别记录 queue、prefill/TTFT、generation、tool/network 与 end-to-end time；平均响应时间不能代表 tail latency。",
      ],
      [
        "Cache safety",
        "只有 tokenized prefix 与 model/runtime configuration 兼容时才能复用 KV cache；跨用户敏感 context 不进入共享缓存。",
      ],
      [
        "Controlled optimization",
        "一次只改变 batching、context、output budget、quantization 或 serving parameter 中一个，并用固定 dataset 检查质量和拒答退化。",
      ],
    ],
    deliverable:
      "提交 baseline、单变量实验、质量回归和 p95/成本结果；优化没有收益时保留真实结论。",
  },
  {
    code: "L172",
    title: "Lab: Prompt Injection Source-to-Sink Defense",
    description:
      "从 user input、retrieved document、tool result 与 memory 注入不可信指令，追踪它能否影响 sensitive sink，并验证 instruction/data separation、tool policy、output validation 与 human approval。",
    steps: [
      [
        "THREAT_MODEL",
        "枚举 sources、trust transitions、decisions 与 sensitive sinks",
      ],
      ["LAB", "注入 direct、retrieval、tool-result 与 memory attacks"],
      [
        "DEFENSE",
        "实现 content marking、least privilege、policy check 与 approval",
      ],
      ["EVALUATION", "保存 blocked/escaped paths、trace 与 regression cases"],
    ],
    sections: [
      [
        "Source to sink",
        "攻击是否成功由它是否改变权限决策、工具调用、数据读取或外部写入判断，不只看模型是否说了不安全的话。",
      ],
      [
        "Defense in depth",
        "不可信内容做来源标记；权限和工具白名单由代码执行；高风险动作显示具体参数后人工批准；输出在进入下一系统前验证。",
      ],
      [
        "Regression",
        "修复后重放相同攻击，并运行正常任务对照，避免防御导致所有功能不可用。",
      ],
    ],
    deliverable:
      "提交 source→decision→sink attack map、脱敏 trace、阻断点、正常任务对照与剩余风险。",
  },
  {
    code: "L173",
    title: "Lab: Hallucination Detection、Abstention 与 Evidence Verification",
    description:
      "把 hallucination 拆成 unsupported claim、wrong citation、stale evidence、conflicting sources 与 overconfident answer，组合 deterministic citation checks、claim verification、abstention policy 与 human review。",
    steps: [
      [
        "TAXONOMY",
        "标注 unsupported、wrong citation、stale、conflict 与 overconfidence",
      ],
      ["LAB", "实现 claim→source span 与 citation existence/version checks"],
      ["LAB", "加入 evidence sufficiency、abstention 与 human-review states"],
      [
        "EVALUATION",
        "测试 answer、refusal、false-positive 与 false-negative slices",
      ],
    ],
    sections: [
      [
        "Not one detector",
        "没有单一 hallucination 分数能证明答案正确。先用程序检查 citation 存在、版本和可访问性，再对 claims 与 source spans 做验证。",
      ],
      [
        "Abstention",
        "证据不足、来源冲突或任务超出权限时进入明确 abstain/review 状态；拒答率过高同样是产品失败，需要单独评估。",
      ],
      [
        "Human review",
        "高风险领域的自动检查只负责排序和提示，最终确认记录 reviewer、evidence、decision 与 correction。",
      ],
    ],
    deliverable:
      "提交标注集、claim/citation checks、abstention matrix，以及 answer quality 与 refusal quality 的独立结果。",
  },
];

for (const item of finalContentRefreshes) {
  update(item.code, {
    title: item.title,
    title_en: item.title,
    description: item.description,
    description_en: item.description,
    steps: item.steps.map(([type, title], index) =>
      step(index + 1, type, title, 6),
    ),
    ...(item.learns ? { learns: item.learns } : {}),
    learningMaterial: compactMaterial(
      item.title,
      item.description,
      item.sections,
      item.deliverable,
    ),
    cohort7ContentRevision: "2026-09-08-final-content-audit",
  });
}
update("L83", {
  title: "GraphRAG + RAG Evaluation（进阶候选）",
  title_en: "GraphRAG + RAG Evaluation (Advanced Candidate)",
  description:
    "第七期不占独立 RAG Live 周。作为后续进阶录播或选修候选，讨论 GraphRAG 适用边界与更完整的 retrieval、answer quality、faithfulness 和 regression evaluation。",
  description_en:
    "Does not occupy a separate Cohort 7 RAG live week. Retained as an advanced recording or elective candidate covering GraphRAG decision boundaries and deeper retrieval, answer-quality, faithfulness, and regression evaluation.",
});
update("L85", {
  title: "CareKind RAG Eval Harness（后续候选）",
  title_en: "CareKind RAG Evaluation Harness (Later Candidate)",
  description:
    "保留为后续完整 AI Evaluation 阶段候选，不在 W5 从零建设。内容包括 versioned golden set、baseline、retrieval/answer metrics 与 CI regression gate。",
  description_en:
    "Retained for the later full AI evaluation stage rather than built from scratch in Week 5. Candidate scope includes versioned golden sets, baselines, retrieval and answer metrics, and a CI regression gate.",
});
update("L101", {
  title: "Tool Calling, MCP & CLI Integration",
  title_en: "Tool Calling, MCP & CLI Integration",
  description:
    "第七期 W6 理论课。先学习确定性的 function/tool calling 与 MCP protocol contract，再用 FastMCP 快速实现 typed Python server，并建立 server/client、tools/resources/prompts 与 CLI integration 心智模型；Pi Agent Harness 用于比较统一模型接口、Agent runtime 与 coding CLI 的边界，不把 Pi core 误写为 MCP SDK。覆盖 command、args、env、working directory、stdio、tool discovery、权限和常见启动错误。Remote MCP、OAuth、云部署与集中式 observability 留到后续 production 阶段。",
  description_en:
    "Cohort 7 Week 6 theory. Start with deterministic function and tool calling and the MCP protocol contract, then use FastMCP to implement a typed Python server quickly. Build a clear model of servers, clients, tools, resources, prompts, and CLI integration. Use Pi Agent Harness to compare a unified model API, agent runtime, and coding CLI without misrepresenting Pi core as an MCP SDK. Cover commands, arguments, environment variables, working directories, stdio, tool discovery, permissions, and common startup failures. Remote MCP, OAuth, cloud deployment, and centralised observability are deferred.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Function/tool calling：schema、arguments 与 structured result",
      15,
    ),
    step(
      2,
      "SYSTEM_DESIGN",
      "MCP protocol contract：server、client、tools、resources 与 prompts",
      15,
    ),
    step(3, "CONCEPT", "MCP 与普通 API、tool calling、Agent 的边界", 10),
    step(
      4,
      "DEMO",
      "FastMCP typed server + CLI integration：command、args、env 与 working directory",
      15,
    ),
    step(5, "DEMO", "stdio lifecycle、stdout protocol 与 stderr logging", 10),
    step(
      6,
      "DEMO",
      "Tool discovery、manual call；比较 Pi Agent Harness 的 CLI/runtime 边界",
      10,
    ),
    step(
      7,
      "SECURITY",
      "Secrets、permission、tool allowlist 与 human confirmation",
      10,
    ),
    step(8, "TROUBLESHOOTING", "路径、环境变量、启动和协议输出故障", 5),
  ],
  cohort7Status: "CONFIRMED_THEORY",
});
update("L104", {
  title: "Extract the Data Layer, then Connect MCP & CLI",
  title_en: "Extract the Data Layer, then Connect MCP and CLI",
  description:
    "第七期 W8 实践课。先把 W7 MVP 中分散的 resident、shift/task、policy retrieval 与 Draft persistence 提取成可测试的 Repository/Data Layer，再建立不依赖 transport 的 Domain Service、canonical schema、permission scope 与 audit boundary。底层能力通过直接 service tests 后，才用薄 MCP adapter 暴露 get_resident_context、get_shift_tasks、search_policy 与 create_progress_note_draft，并连接本地 CLI/stdio。MCP tool 不包含数据库查询细节或业务规则；未来换成 REST、GraphQL、Agent SDK 或 background job 时继续复用同一 service layer。",
  description_en:
    "Cohort 7 Week 8 practice. First extract the scattered resident, shift and task, policy retrieval, and draft persistence code from the Week 7 MVP into a testable repository and data layer. Build transport-independent domain services, canonical schemas, permission scopes, and audit boundaries. Only after direct service tests pass should a thin MCP adapter expose get_resident_context, get_shift_tasks, search_policy, and create_progress_note_draft over local CLI and stdio. MCP tools must not contain database query details or business rules, allowing the same service layer to support REST, GraphQL, an Agent SDK, or background jobs later.",
  steps: [
    step(
      1,
      "DATA_ARCHITECTURE",
      "盘点 data sources、owner、schema、sensitivity、freshness 与 system-of-record boundary",
      15,
    ),
    step(
      2,
      "REFACTOR",
      "提取 Repository/Data Layer：resident、shift/task、policy 与 Draft persistence adapters",
      20,
    ),
    step(
      3,
      "SYSTEM_DESIGN",
      "提取 transport-independent Domain Services 与 canonical input/output schema",
      20,
    ),
    step(
      4,
      "SECURITY",
      "在 service boundary 加入 role scope、validation、audit 与 human-confirmation rule",
      15,
    ),
    step(
      5,
      "TEST",
      "不经过 MCP，直接运行 repository contract 与 service integration tests",
      15,
    ),
    step(
      6,
      "LAB",
      "建立 thin MCP adapter，映射四个 tools，不复制 data/business logic",
      15,
    ),
    step(
      7,
      "LAB",
      "连接 CLI/stdio，完成 discovery、manual calls 与 structured error checks",
      10,
    ),
    step(
      8,
      "DELIVERABLE",
      "提交 Data/Service/MCP boundary diagram、tests、permission matrix 与 CLI evidence",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Extract the Data Layer, then Connect MCP & CLI</h2><p>MCP 是 transport adapter，不是业务架构。若 tool handler 直接拼数据库查询、权限判断和业务状态，未来 REST API、Agent SDK、background job 与测试都会复制同一套逻辑。W8 先把 W7 MVP 整理为稳定的数据与服务边界，再接 MCP。</p><h3>Target architecture</h3><p><strong>Data Sources → Repository/Data Layer → Domain Service → Permission/Audit Policy → MCP Adapter → CLI or Agent</strong></p><h3>Repository/Data Layer</h3><p>盘点 resident、shift/task、policy corpus/index 与 Draft/version/audit 数据的 owner、schema、sensitivity、freshness 和 system-of-record status。Repository interface 隐藏 Prisma、local index、file 或 API 的具体实现；domain service 只依赖 interface。</p><h3>Domain Service</h3><p>服务层提供 getResidentContext、getShiftTasks、searchPolicy 与 createProgressNoteDraft 等能力，负责 canonical schema、workflow state、validation、role scope、human-confirmation rule 和 audit event。它不读取 MCP request，也不输出 MCP-specific content blocks。</p><h3>Thin MCP adapter</h3><p>MCP handler 只完成 protocol schema → service input、service result → MCP result 和 error mapping。每个 tool 必须能通过直接 service test 验证，也必须能从 CLI 经 stdio 做 discovery 和 manual call。课堂用 architecture boundary test 检查 MCP 层没有 ORM query 或核心业务规则。</p><h3>交付</h3><p>提交 data inventory、repository contracts、domain services、direct tests、thin MCP adapters、CLI configuration、permission matrix、audit evidence 与 Data/Service/MCP boundary diagram。W8 不引入 Agent loop、Remote MCP、OAuth、自动 Confirm 或真实 system write-back。</p>",
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("L112", {
  title: "Agents 基础 + The ReAct Framework",
  title_en: "Agent Fundamentals + The ReAct Framework",
  description:
    "第七期 W7 理论课。在 W6 确定性 tool calling 与 MCP 之后，引入 Agent 决策和 ReAct Action/Observation loop，并用 Claude Agent SDK 讲解 query 与 interactive client、tools/MCP、session/resume、permission mode、hooks、streaming 与 interrupt。随后把 SDK 能力还原为 state、maximum steps、timeout/retry、side-effect boundary、human approval 与失败模式，并与 OpenAI Agents SDK、PydanticAI 和 LangGraph 比较。课程不要求展示或持久化模型隐藏推理。",
  description_en:
    "Cohort 7 Week 7 theory. After deterministic tool calling and MCP in Week 6, introduce agent decisions and the ReAct action-observation loop. Use the Claude Agent SDK to examine one-shot queries versus interactive clients, tools and MCP, sessions and resume, permission modes, hooks, streaming, and interrupts. Map those SDK features back to state, maximum steps, timeouts, retries, side-effect boundaries, human approval, and failure modes, then compare with the OpenAI Agents SDK, PydanticAI, and LangGraph. Do not expose or persist hidden reasoning.",
  steps: [
    step(1, "CONCEPT", "Workflow、tool-using application 与 Agent 的区别", 10),
    step(2, "CONCEPT", "ReAct：Action、Observation 与下一步决策", 15),
    step(
      3,
      "DEMO",
      "Claude Agent SDK：query/client、tools/MCP、session、permissions、hooks 与 streaming",
      15,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "Agent state、task state、tool result 与 session resume",
      10,
    ),
    step(5, "SYSTEM_DESIGN", "Maximum steps、停止条件与循环检测", 10),
    step(
      6,
      "RELIABILITY",
      "Timeout、retry、fallback、interrupt 与 partial failure",
      10,
    ),
    step(
      7,
      "SECURITY",
      "Side effects、permission mode、human approval 与 hook boundary",
      10,
    ),
    step(
      8,
      "INTERVIEW",
      "Claude Agent SDK、OpenAI Agents SDK、PydanticAI、LangGraph 的选型与失败模式",
      10,
    ),
  ],
  cohort7Status: "CONFIRMED_THEORY",
});
update("L119", {
  title: "Build a Bounded CareKind Agent",
  title_en: "Build a Bounded CareKind Agent",
  description:
    "第七期 W9 实践课。使用 W8 MCP tools 构建受控单 Agent，完成 task state、Action/Observation schema、最小 tool loop、allowlist、maximum steps、termination、timeout/retry/fallback、human-review gate、trace 与失败测试。本周不做长期 resident memory、Multi-Agent、自动 Confirm 或真实系统写回。",
  description_en:
    "Cohort 7 Week 9 practice. Build a bounded single agent over the Week 8 MCP tools with task state, action and observation schemas, a minimal tool loop, allowlists, stopping conditions, reliability controls, human review, traces, and failure tests. Do not add long-term resident memory, multi-agent behaviour, automatic confirmation, or real system write-back.",
  steps: [
    step(1, "REVIEW", "验证 W8 MCP tools 与权限边界", 10),
    step(2, "WORKSHOP", "定义 Agent State、Action 与 Observation schema", 15),
    step(3, "LAB", "实现最小 ReAct/tool loop", 25),
    step(4, "SECURITY", "加入 tool allowlist 与参数 validation", 10),
    step(5, "RELIABILITY", "加入 maximum steps、termination 与循环检测", 15),
    step(6, "RELIABILITY", "加入 timeout、retry 与 fallback", 15),
    step(7, "GOVERNANCE", "接入 Human Review 与副作用边界", 15),
    step(8, "EVALUATION", "测试失败路径并检查完整 trace", 15),
  ],
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("L122", {
  title: "Multi-Agent Architectures",
  title_en: "Multi-Agent Architectures",
  description:
    "第七期 W8 理论课，对齐 Claude Certified Architect – Foundations（CCAR-F）的 Agentic Architecture & Orchestration 能力。在 W7 Agents/ReAct 之后，判断何时使用 deterministic workflow、single Agent 或 Multi-Agent；使用 Claude Agent SDK 与 Managed Agents 的 coordinator、version-pinned roster、context-isolated threads、parallelization、specialization、escalation/advisor、handoff、message contract 与 synthesis 解释 orchestration。最后用 termination、budget、partial failure、human escalation、auditability，以及 single-agent baseline 对比质量、延迟和成本。Managed Agents 属于供应商 beta surface，不包装成通用开源标准。",
  description_en:
    "Cohort 7 Week 8 theory aligned with the Agentic Architecture and Orchestration domain of Claude Certified Architect – Foundations. After Week 7 agents and ReAct, decide between deterministic workflows, a single agent, and multi-agent systems. Use the Claude Agent SDK and Managed Agents concepts—coordinators, version-pinned rosters, context-isolated threads, parallelisation, specialisation, escalation and advisors, handoffs, message contracts, and synthesis—to explain orchestration. Evaluate termination, budgets, partial failure, human escalation, auditability, quality, latency, and cost against a single-agent baseline. Managed Agents remains a provider beta surface rather than a portable open-source standard.",
  steps: [
    step(
      1,
      "CCAR_F",
      "Agentic vs single-shot：什么时候仍应使用 deterministic workflow",
      10,
    ),
    step(
      2,
      "DECISION",
      "Single Agent vs Multi-Agent：复杂度、并行性与专业化判断",
      10,
    ),
    step(
      3,
      "SYSTEM_DESIGN",
      "Orchestration patterns：sequential、parallel fan-out/synthesis、specialization、escalation/advisor",
      15,
    ),
    step(
      4,
      "DEMO",
      "Claude Agent SDK 与 Managed Agents：coordinator、roster、subagent/thread 与 version pinning",
      15,
    ),
    step(
      5,
      "SYSTEM_DESIGN",
      "Context isolation：每个 Agent 的 model、system、tools、MCP、skills 与 permission scope",
      10,
    ),
    step(
      6,
      "SYSTEM_DESIGN",
      "Delegation contract、thread messaging、artifact reference、handoff 与 synthesis",
      10,
    ),
    step(
      7,
      "RELIABILITY",
      "Termination、concurrency/budget、partial failure、retry、human escalation 与 single-agent baseline",
      15,
    ),
    step(
      8,
      "INTERVIEW",
      "CCAR-F / System Design：为场景选择 orchestration，并解释质量、延迟、成本与治理",
      5,
    ),
  ],
  learningMaterial:
    "<h2>Multi-Agent Architectures · CCAR-F Alignment</h2><p>CCAR-F 的 Agentic Architecture & Orchestration 不考“用了几个 Agent”，而是要求架构师能说明为什么任务需要 agentic behaviour、何时一个 deterministic workflow 或 single Agent 更可靠，以及增加 orchestration 后如何控制成本、失败和责任边界。</p><h3>Architecture decision</h3><p>先建立 single-agent baseline。只有任务能够拆成相对独立的工作、需要不同工具/权限/专业上下文、可以并行，或需要更高能力 advisor 处理少数困难步骤时，才考虑 Multi-Agent。不要为角色名称而拆 Agent。</p><h3>Claude orchestration model</h3><p>课堂比较两条 Anthropic surface：Claude Agent SDK 用于可编程的 subagent、hooks、tools 和 sessions；Managed Agents 使用 coordinator 和 version-pinned roster，在同一 session 中生成 context-isolated threads。每个 Agent 拥有自己的 model、system、tools、MCP servers 与 skills；结果通过 thread events 返回 coordinator，再由 coordinator synthesis。Managed Agents 是 beta provider API，不是跨供应商标准。</p><h3>Patterns</h3><ul><li><strong>Sequential</strong>：有明确依赖的 plan → execute → verify。</li><li><strong>Parallel fan-out / synthesis</strong>：独立任务并行，coordinator 汇总。</li><li><strong>Specialization</strong>：不同 Agent 使用不同 instructions、tools、permissions 与 context。</li><li><strong>Escalation / advisor</strong>：只把困难子任务交给更强模型或人工。</li><li><strong>Dynamic workflow</strong>：运行时生成 DAG 或动态 subagents，但必须有 budget 与 termination。</li></ul><h3>Production contract</h3><p>每次 delegation 必须包含 task、input/artifact references、allowed tools、output schema、deadline/budget、completion condition 和 failure semantics。系统需要处理 partial failure、duplicate work、conflicting results、stalled threads、retry/idempotency、human escalation 与 audit trail。</p><h3>Evaluation</h3><p>使用同一组 tasks 比较 single-agent 与 multi-agent：quality、completion rate、wall-clock latency、tokens/cost、tool calls、failure rate 和 human intervention。Multi-Agent 只有在收益覆盖复杂度和成本时才成立。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});
update("L129", {
  title: "Multi-Agent Care Workflow with LangGraph",
  title_en: "Multi-Agent Care Workflow with LangGraph",
  description:
    "第七期后续实践候选。实现 PCW、EN、RN 的角色权限、handoff、shared state、人工升级与可审计 workflow；具体周次待后续讨论。",
  description_en:
    "Candidate practice for a later Cohort 7 week. Implement PCW, EN, and RN roles, permissions, handoffs, shared state, human escalation, and auditability; the exact week remains to be decided.",
  cohort7Status: "LATER_PRACTICE_CANDIDATE",
});
update("L133", {
  title: "Agent Memory & State Management",
  title_en: "Agent Memory and State Management",
  description:
    "第七期 W9 理论课。区分 task state、working/session memory 与 long-term episodic/semantic/preference memory，建立 read/write policy、scope、owner、TTL、retention、update/delete、consent、provenance、冲突处理、权限边界和 memory poisoning 防护。Context window 与 vector store 都不自动等于 Memory。",
  description_en:
    "Cohort 7 Week 9 theory. Distinguish task state, working and session memory, and long-term episodic, semantic, and preference memory; establish read and write policies, scope, ownership, lifecycle, consent, provenance, conflict handling, access boundaries, and memory-poisoning defences.",
  steps: [
    step(1, "CONCEPT", "Agent State 与 Memory 的区别", 10),
    step(2, "CONCEPT", "Task State、Working Memory 与 Session Memory", 15),
    step(3, "CONCEPT", "Episodic、Semantic 与 Preference Memory", 15),
    step(4, "SYSTEM_DESIGN", "Memory read/write policy", 10),
    step(5, "SECURITY", "User、resident、team、organisation scope 与权限", 10),
    step(6, "GOVERNANCE", "TTL、retention、update、delete 与 consent", 10),
    step(7, "RELIABILITY", "冲突、过期、provenance 与 memory poisoning", 10),
    step(8, "INTERVIEW", "CareKind Memory architecture 与面试表达", 10),
  ],
  learningMaterial:
    "<h2>Agent Memory & State Management</h2><p>Agent State 记录当前任务进行到哪里；Memory 决定哪些信息可以跨步骤或跨 session 被再次读取。Context window 只是本次调用可见的内容，vector store 只是存储与检索机制，两者都不自动等于可靠 Memory。</p><h3>Memory types</h3><ul><li><strong>Task/working state</strong>：当前步骤、tool results、pending approval。</li><li><strong>Session memory</strong>：一次交互期间需要持续保留的信息。</li><li><strong>Episodic memory</strong>：带时间、来源和事件边界的经历。</li><li><strong>Semantic memory</strong>：经过验证、可复用的知识。</li><li><strong>Preference memory</strong>：用户明确表达且允许保存的偏好。</li></ul><h3>CareKind boundary</h3><p>未经确认的 transcript、AI Draft 或推断不能写成 resident fact。任何 memory 都必须有 source、scope、owner、created_at、updated_at、retention 和 delete 规则；冲突信息不能静默覆盖，跨角色读取必须经过权限检查。</p><p>W9 实践只使用 task/session state，不实现长期 resident memory。Mem0、Zep、LangMem 等作为实现案例，不作为课程定义本身。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});
update("L138", {
  title: "Harness Engineering for Production AI Agents",
  title_en: "Harness Engineering for Production AI Agents",
  description:
    "第七期 W10 理论课。讲清 Agent SDK、framework 与 harness 的边界，并设计可进入生产环境的 agent runtime：受控 tool loop、context lifecycle、hooks、permission、budget、termination、checkpoint、retry、resume、replay、idempotency、human approval、trace 与 evaluation hooks。",
  description_en:
    "Cohort 7 Week 10 theory. Distinguish agent SDKs, frameworks, and harnesses, then design a production-capable agent runtime with controlled tool loops, context lifecycle management, hooks, permissions, budgets, termination, checkpoints, retries, resume and replay, idempotency, human approval, tracing, and evaluation hooks.",
  steps: [
    step(1, "CONCEPT", "Agent、Agent SDK、Framework 与 Harness 的边界", 10),
    step(2, "SYSTEM_DESIGN", "受控 model/tool loop 与 runtime lifecycle", 10),
    step(
      3,
      "SYSTEM_DESIGN",
      "Context assembly、truncation、compaction 与 result injection",
      10,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "Tool registry、schema validation 与 pre/post hooks",
      10,
    ),
    step(
      5,
      "SECURITY",
      "Permission、sandbox、side-effect boundary 与 human approval",
      10,
    ),
    step(6, "RELIABILITY", "Token、cost、time、step budget 与 termination", 10),
    step(
      7,
      "RELIABILITY",
      "Checkpoint、retry、resume、replay 与 idempotency",
      10,
    ),
    step(
      8,
      "OBSERVABILITY",
      "Structured trace、metrics、evaluation hooks 与 model-routing insertion point",
      10,
    ),
    step(9, "INTERVIEW", "Production agent architecture review 与面试表达", 10),
  ],
  learningMaterial:
    "<h2>Harness Engineering for Production AI Agents</h2><p>Agent loop 只决定下一步做什么；Harness 负责让这个循环在明确边界内可靠运行。它连接 model adapter、context builder、tool registry、policy hooks、run state、human approval、telemetry 与 evaluation。</p><h3>Production runtime</h3><ul><li><strong>Control</strong>：maximum steps、time/token/cost budget、termination 与 cancellation。</li><li><strong>Reliability</strong>：timeout、retry、checkpoint、resume、replay 与 idempotency。</li><li><strong>Safety</strong>：tool permission、schema validation、side-effect boundary、sandbox 与 human approval。</li><li><strong>Observability</strong>：run ID、structured trace、tool result、latency、cost、failure reason 与 eval hooks。</li></ul><p>W10 理论建立 production runtime 架构；W10 实践把 W9 Agent 扩展为安全的长期 Memory。完整安全评估、release gate、monitoring、rollback 与 incident response 在 W11 完成。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});
update("C7P10", {
  learningMaterial:
    "<h2>Build Safe Long-Term Memory for the CareKind Agent</h2><p>W9 的 task/session state 只服务当前 run；W10 才允许一部分经过人工确认的信息跨 session 保存。Memory 必须有明确的 write gate、source、scope、owner、status、TTL、provenance 与删除规则。</p><h3>Write boundary</h3><p>只有 human-confirmed facts 可以成为长期 memory。原始 transcript、AI Draft、模型推断、未确认 observation 和 tool error 不得写成 resident fact。</p><h3>Read and lifecycle boundary</h3><ul><li>每次读取都重新检查 resident、user、team、role 与 purpose scope。</li><li>过期或冲突内容必须标记，不得静默覆盖。</li><li>支持 correction、supersede、delete、consent withdrawal 与完整 audit。</li><li>用越权、过期、冲突与 poisoning cases 验证系统，而不只测试正常 recall。</li></ul>",
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("C7P11", {
  learningMaterial:
    "<h2>Build the CareKind Production Agent Harness</h2><p>W9 的 bounded loop 能完成任务，W10 的 Memory 能跨 session 保存经过确认的信息；W11 把两者放入可控制、可恢复、可审计的 runtime。</p><h3>Harness responsibilities</h3><ul><li><strong>Lifecycle</strong>：created、running、waiting_for_approval、completed、failed、cancelled。</li><li><strong>Control</strong>：step、token、cost、time budget、termination 与 cancellation。</li><li><strong>Reliability</strong>：checkpoint、resume、replay、retry、idempotency 与 duplicate side-effect protection。</li><li><strong>Policy</strong>：model、tool、memory adapters，pre/post hooks，permission 与 human approval。</li><li><strong>Evidence</strong>：run ID、structured trace、failure reason、approval 与 tool result。</li></ul><p>W11 不实现 Model Routing、Remote MCP、云部署或完整 production evaluation；这些能力按依赖顺序放到后续实践。</p>",
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("C7P12", {
  learningMaterial:
    "<h2>Build the CareKind Model Router inside the Agent Harness</h2><p>Model Routing 不是按模型名称写 if/else，而是把任务、风险、质量、成本、延迟、隐私、data residency 与供应商可用性变成可测试的 routing policy。</p><h3>Runtime path</h3><p><strong>Task + Risk + Data Policy → Routing Policy → Model Adapter → Selected Provider → Validation → Fallback or Human Escalation → Routing Trace</strong></p><h3>Required evidence</h3><ul><li>task taxonomy、model capability matrix 与 provider allowlist。</li><li>timeout、fallback、refusal 与 high-risk human escalation。</li><li>错误路由、provider failure 和 policy conflict 的 eval cases。</li><li>记录 policy version、selected model、reason、latency、cost、result 与 escalation 的 decision log。</li></ul><p>W12 不做 Remote MCP、云部署或 Demo Day；这些工作进入延长实践线。</p>",
  cohort7Status: "CONFIRMED_PRACTICE",
});
update("L149", {
  title: "Model Selection, Open-Weight Models & Fine-Tuning Decisions",
  title_en: "Model Selection, Open-Weight Models & Fine-Tuning Decisions",
  description:
    "第七期 W10 必修录播。建立 Prompt、RAG、tool use、model routing、open-weight model 与 Fine-Tuning 的决策边界；深度 LoRA/QLoRA 工具实操保留为选修。",
  description_en:
    "Required Cohort 7 Week 10 recording. Decide among prompting, RAG, tool use, model routing, open-weight models, and fine-tuning; deep LoRA and QLoRA tooling remains optional.",
  duration: 60,
  steps: [
    step(1, "CONCEPT", "Prompt、RAG、tool use 与 Fine-Tuning 的边界", 15),
    step(
      2,
      "SYSTEM_DESIGN",
      "Closed、open-weight 与 provider model 的选择约束",
      10,
    ),
    step(
      3,
      "SYSTEM_DESIGN",
      "Model routing 的任务、质量、成本、延迟与数据约束",
      15,
    ),
    step(4, "DECISION", "数据质量、隐私、维护成本与 Fine-Tuning go/no-go", 10),
    step(
      5,
      "EVALUATION",
      "用 baseline 与 eval 证明模型选择或 Fine-Tuning 是否值得",
      10,
    ),
  ],
  learningMaterial:
    "<h2>Model Selection, Open-Weight Models & Fine-Tuning Decisions</h2><p>先判断问题是否可以通过 context、RAG 或 tools 解决，再判断是否需要 model routing、open-weight deployment 或 Fine-Tuning。任何选择都必须以任务数据、质量门槛、延迟、成本、隐私与维护能力为依据。</p><p>本节是 W10 必修录播。Model Routing 仍是 Applied AI Engineer 的面试重点和后续实践候选；LoRA、QLoRA 与具体训练工具放入选修 Lab，不占正式 Live。</p>",
  cohort7Status: "REQUIRED_RECORDING",
});
update("L126", {
  title: "A2A Governance: Identity, Trust & Delegation",
  title_en: "A2A Governance: Identity, Trust and Delegation",
  description:
    "第七期 W11 必修录播。区分 MCP 的 Agent-to-Tool 连接与 A2A 的独立 Agent-to-Agent 协作，并把 Agent Card、身份认证、能力声明、授权委派、数据共享、任务与产物协议、审计、撤销和责任归属放进 Governance 边界。",
  description_en:
    "Required Cohort 7 Week 11 recording. Distinguish MCP agent-to-tool connectivity from A2A collaboration between independent agents, then govern agent identity, capability claims, authorization, delegation, data sharing, task and artifact contracts, auditability, revocation, and accountability.",
  duration: 60,
  steps: [
    step(1, "BOUNDARY", "MCP Agent-to-Tool 与 A2A Agent-to-Agent 的边界", 10),
    step(2, "IDENTITY", "Agent Card、能力发现、身份认证与能力声明", 10),
    step(3, "AUTHORIZATION", "授权、委派范围、最小权限与 human approval", 10),
    step(
      4,
      "DATA_GOVERNANCE",
      "消息、任务、artifact 的数据分类、最小化与共享边界",
      10,
    ),
    step(5, "AUDIT", "provenance、decision log、责任归属与跨 Agent trace", 10),
    step(
      6,
      "INCIDENT",
      "权限撤销、信任失效、故障隔离与 incident ownership",
      10,
    ),
  ],
  learningMaterial:
    "<h2>A2A Governance: Identity, Trust & Delegation</h2><p>MCP 解决 Agent 如何调用工具；A2A 解决独立 Agent 如何发现彼此能力、委派任务并交换结果。只会连接协议还不够：跨 Agent、跨团队或跨组织协作时，必须先回答谁在调用、代表谁、可以委派什么、可以共享哪些数据，以及出错后谁负责。</p><h3>Governance controls</h3><ul><li><strong>Identity and discovery</strong>：验证 Agent Card、身份、能力声明与版本。</li><li><strong>Trust and authorization</strong>：限制 delegation scope、权限、有效期与 human approval。</li><li><strong>Data boundary</strong>：对 message、task、artifact 做分类、最小化、consent 与 retention 控制。</li><li><strong>Evidence</strong>：记录 provenance、decision、handoff、policy version 与跨 Agent trace。</li><li><strong>Failure governance</strong>：支持 revoke、quarantine、incident owner 与责任追踪。</li></ul><p>本节移到 W11 Governance，不作为 W8 Multi-Agent orchestration 的前置。W8 关注单一系统内部如何编排多个角色；W11 才处理独立 Agent 之间的信任和责任边界。</p>",
  cohort7Status: "REQUIRED_W11_RECORDING",
  cohort7SupportWeek: 11,
  cohort7SupportTrack: "theory",
});
update("L171a", {
  title: "AI Governance, Evals & Risk Management",
  title_en: "AI Governance, Evals & Risk Management",
  description:
    "第七期 W11 理论课。把 risk register、privacy、accountability、A2A identity/trust/delegation、eval threshold、release gate、vendor risk、权限撤销与 incident response 接入 ADLC。",
  description_en:
    "Cohort 7 Week 11 theory. Integrate risk registers, privacy, accountability, A2A identity, trust and delegation, evaluation thresholds, release gates, vendor risk, revocation, and incident response into ADLC.",
  duration: 90,
  steps: [
    step(1, "GOVERNANCE", "Governance、AI Safety 与 Compliance 的关系", 10),
    step(
      2,
      "RISK",
      "AI inventory、impact assessment 与 risk classification",
      10,
    ),
    step(
      3,
      "ACCOUNTABILITY",
      "RACI、system owner、release approver 与 residual-risk owner",
      10,
    ),
    step(
      4,
      "DATA_GOVERNANCE",
      "Data、model、vendor、privacy 与 retention governance",
      12,
    ),
    step(
      5,
      "A2A_GOVERNANCE",
      "Agent identity、trust、delegation、data sharing 与 accountability",
      12,
    ),
    step(
      6,
      "RELEASE_GATE",
      "Eval threshold、policy evidence 与 release gate",
      12,
    ),
    step(
      7,
      "INCIDENT",
      "Incident、material change、permission revocation 与 retirement",
      12,
    ),
    step(
      8,
      "OPERATING_MODEL",
      "Governance operating model 与真实案例决策检查",
      12,
    ),
  ],
  learningMaterial:
    "<h2>AI Governance, Evals & Risk Management</h2><p>Governance 不是上线前补一份合规文档，而是把风险负责人、数据和模型边界、评估门槛、发布审批、事故处理与系统退出机制接入 ADLC。</p><h3>A2A governance</h3><p>当一个独立 Agent 把任务委派给另一个 Agent，治理范围会从单一 runtime 扩展到跨身份、跨权限和跨数据边界。必须验证 Agent Card 与能力声明，限定 delegation scope 和有效期，对 message、task 与 artifact 执行数据分类和最小化，并保留 provenance、handoff、decision log 和责任归属。信任失效时必须能够 revoke、quarantine 和升级给明确的 incident owner。</p><h3>Release evidence</h3><ul><li>AI inventory、impact assessment、risk register 与 RACI。</li><li>data/model/vendor controls、privacy、retention 与 permission policy。</li><li>A2A identity、trust、delegation、data-sharing 与 audit controls。</li><li>eval threshold、release gate、exception approval 与 residual-risk acceptance。</li><li>incident、material change、revocation、retirement 与 evidence retention。</li></ul>",
});
update("L171", {
  title: "CareKind Production Readiness Review & Demo Day",
  title_en: "CareKind Production Readiness Review and Demo Day",
  description:
    "第七期 W13 最终实践课。学生课前自行完成 Remote MCP/Auth、部署、CI/CD 与标准软件运行基础，课堂只验收证据；现场集中完成 production eval、deterministic checks、LLM-as-a-Judge、regression/tracing、AI-specific red team、provider/tool/memory failure drill、release decision、rollback/incident response 与最终 Demo/System Design Defense。",
  description_en:
    "Final Cohort 7 Week 13 practice. Students complete remote MCP and authentication, deployment, CI/CD, and standard software operations independently before class; the live session verifies that evidence and focuses on production evaluations, deterministic checks, LLM-as-a-Judge, regression and tracing, AI-specific red teaming, provider, tool, and memory failure drills, release decisions, rollback and incident response, and the final demo and system-design defense.",
  steps: [
    step(
      1,
      "RELEASE_GATE",
      "验收学生自助完成的 Remote MCP/Auth、部署、CI/CD、health check 与运行证据",
      15,
    ),
    step(
      2,
      "EVALUATION",
      "运行 production eval cases、deterministic checks 与 LLM-as-a-Judge 人工校准",
      20,
    ),
    step(
      3,
      "OBSERVABILITY",
      "检查 Agent regression gate、Langfuse/等价 trace 与 latency/cost/tool-failure thresholds",
      15,
    ),
    step(
      4,
      "SECURITY",
      "测试 prompt injection、memory poisoning、越权和 PII 泄露",
      20,
    ),
    step(
      5,
      "INCIDENT",
      "演练 model/provider/tool/memory failure、human escalation 与 kill switch",
      15,
    ),
    step(
      6,
      "GOVERNANCE",
      "执行 release go/no-go、rollback 与 incident response tabletop",
      15,
    ),
    step(7, "DEMO", "CareKind production demo 与 System Design Defense", 65),
    step(
      8,
      "DELIVERABLE",
      "提交 eval、trace、red-team、release 与 architecture evidence pack",
      15,
    ),
  ],
  learningMaterial:
    "<h2>CareKind Production Readiness Review & Demo Day</h2><p>W13 是一场 180 分钟最终实践。Remote MCP transport、Auth、secrets、部署、CI/CD、queue 与 health checks 属于标准软件工程前置，学生在课前自行完成并提交证据，课堂不逐行教学。</p><h3>AI-specific production review</h3><ul><li>运行 production eval cases、schema/citation/permission deterministic checks 与 LLM-as-a-Judge，并用人工评分校准。</li><li>检查 regression gate、Langfuse 或等价 trace，以及 latency、cost、tool failure 和 human escalation threshold。</li><li>执行 prompt injection、memory poisoning、越权、PII、model/provider/tool/memory failure 与 kill-switch 演练。</li><li>完成 release go/no-go、rollback、incident response 和最终 System Design Defense。</li></ul><p>没有达到 eval、security 或运行 threshold 的版本不能报告 production ready；可以演示为 blocked release，并解释证据和修复计划。</p>",
  cohort7PreClassRequirements: [
    "Deployed URL and run instructions",
    "Remote MCP connectivity evidence",
    "Authentication and role-permission test results",
    "Passing CI status and secrets scan",
    "Health/readiness check evidence",
    "Rollback command or documented rollback procedure",
    "Synthetic or de-identified data declaration",
  ],
  cohort7Status: "CONFIRMED_FINAL_PRACTICE",
});
update("L183", {
  title: "Production AI System Design & Model Routing",
  title_en: "Production AI System Design and Model Routing",
  description:
    "第七期 W12 理论课。把 CareKind 的 Model、Context、RAG、Tools、Agent、Memory、Harness、Evals 与 Governance 还原为完整 production architecture，并讲清 Model Router 的位置、任务/能力映射、质量/成本/延迟/隐私/data-residency 取舍、fallback、human escalation、router evaluation 与系统设计答辩。",
  description_en:
    "Cohort 7 Week 12 theory. Reconstruct CareKind as a complete production architecture across models, context, RAG, tools, agents, memory, harnesses, evaluations, and governance, then cover the model router, task-to-capability mapping, quality, cost, latency, privacy, and data-residency trade-offs, fallbacks, human escalation, router evaluation, and system-design defense.",
  steps: [
    step(1, "SYSTEM_DESIGN", "CareKind production architecture 全景", 10),
    step(2, "SYSTEM_DESIGN", "Model Router 在 Agent Harness 中的位置", 10),
    step(3, "CONCEPT", "Task taxonomy 与 model capability matrix", 15),
    step(
      4,
      "DECISION",
      "Quality、cost、latency、privacy 与 data residency 取舍",
      15,
    ),
    step(
      5,
      "RELIABILITY",
      "Timeout、fallback、refusal、provider failure 与 human escalation",
      10,
    ),
    step(6, "EVALUATION", "Router evaluation 与 routing decision evidence", 10),
    step(
      7,
      "DECISION",
      "Prompt、RAG、Tools、Memory、Routing 与 Fine-Tuning 的选择边界",
      10,
    ),
    step(8, "INTERVIEW", "Production AI system design 答辩", 10),
  ],
  learningMaterial:
    "<h2>Production AI System Design & Model Routing</h2><p>W12 把前十一周的组件还原成一套可以解释、测试和治理的 production architecture。Model Router 位于 Harness 的 model adapter boundary，不能绕过 risk、privacy、permission、budget、fallback 和 trace。</p><h3>Routing decision</h3><p><strong>Task + Risk + Data Policy + Capability + Runtime Constraints → Routing Policy → Model Adapter → Result or Escalation</strong></p><p>课堂重点是任务与能力映射、质量/成本/延迟/隐私/data-residency 取舍、provider failure、fallback、human escalation 与 router evaluation。Prompt、RAG、Tools、Memory、Routing 和 Fine-Tuning 必须按问题类型选择，不能把所有问题都交给更大的模型。</p><p>本节不包含薪资、简历或 Career Readiness。</p>",
  cohort7Status: "CONFIRMED_THEORY",
});
update("L180", {
  title: "CareKind Production Demo Day & System Design Defense",
  title_en: "CareKind Production Demo Day and System Design Defense",
  description:
    "Legacy Demo Day 条目。第七期最终 Demo 已合并进 W13 `L171 CareKind Production Readiness Review & Demo Day`，本条不进入正式排课。",
  description_en:
    "Legacy Demo Day entry. The Cohort 7 final demo is merged into Week 13 L171 CareKind Production Readiness Review and Demo Day; this lesson is not part of the formal schedule.",
  cohort7Status: "REPLACED_BY_L171_W13",
});

outline.program.programPhase = 7;
outline.program.cohortStatus = "RECRUITING";
outline.description =
  "第七期理论线在 W12 结束，实践线延长至 W13：前 12 周每周一场理论 Live 和一场实践 Live，W13 增加 180 分钟 Production Readiness Review & Demo Day。CareKind AI 贯穿 AI Coding、RAG、Agents、Memory、Harness、Model Routing、Evals 与 Governance。";
outline.description_en =
  "Cohort 7 ends the theory track in Week 12 and extends practice through Week 13: Weeks 1-12 each include one theory and one practice live, followed by a 180-minute production-readiness review and demo day in Week 13.";
outline.cardDescription =
  "理论 12 周 · 实践 13 周 · 25 场正式直播 · CareKind AI production 项目";
outline.promoDescription =
  "从 W1 AI Coding + ADLC 开始，W12 完成 Model Routing，W13 用 production eval、安全演练、release decision 与 Demo Day 收口 CareKind AI。";
outline.timeLength =
  "理论 12 周 + 实践 13 周（25 场正式直播：12 场理论 + 13 场实践；共 45 小时）";
outline.courseObjective =
  "独立设计、实现、评估并治理一个 production-ready Applied AI 产品；能在面试中解释 RAG、Agents、MCP、Model Routing、Fine-Tuning 决策和 AI Governance 的工程取舍。";
update("L55", {
  title: "Lab: Grounded Answer Contract",
  title_en: "Lab: Grounded Answer Contract",
  description:
    "RAG 入门 Lab：先不接向量库，使用固定 evidence packets 验证 grounded answer contract。区分 supported、partially supported、conflicting 与 no-answer，检查 citation 是否真的支持 claim，而不是只看回答里有没有引用编号。",
  description_en:
    "Start RAG with fixed evidence packets before adding a vector database. Validate supported, partially supported, conflicting, and no-answer behavior, and verify that citations actually support each claim.",
  steps: [
    step(
      1,
      "CONCEPT",
      "定义 question、evidence packet、claim、citation 与 no-answer contract",
      5,
    ),
    step(
      2,
      "LAB",
      "运行 supported、partial、conflict 与 no-answer 四类 cases",
      15,
    ),
    step(
      3,
      "EVALUATION",
      "逐条 claim 检查 evidence support 与 citation correctness",
      7,
    ),
    step(
      4,
      "REVIEW",
      "区分 retrieval failure 与 generation failure，提交失败表",
      3,
    ),
  ],
  learningMaterial:
    '<h2>Lab: Grounded Answer Contract</h2><p>本实验先隔离生成阶段：老师提供固定 evidence packets，不接 Embedding 或 Vector Store。目标是先证明模型能否只根据证据回答，再进入 retrieval pipeline。</p><h3>Answer Schema</h3><pre><code>{"answer":"...","claims":[{"text":"...","source_ids":["DOC-01#p2#c3"]}],"status":"supported|partial|conflict|no_answer","review_required":false}</code></pre><h3>四类 Cases</h3><ol><li><strong>Supported</strong>：证据完整，回答与 citation 都正确。</li><li><strong>Partial</strong>：只回答被支持部分，缺失字段保持为空。</li><li><strong>Conflict</strong>：标出冲突来源和版本，不擅自选边。</li><li><strong>No answer</strong>：没有足够证据时拒绝补全。</li></ol><h3>Deterministic Checks</h3><p>source ID 必须来自输入 evidence packet；每个 factual claim 至少绑定一个 source；no_answer 不应带虚构 citation；status 与字段完整性一致。</p><h3>人工检查</h3><p>程序只能证明 citation ID 存在，不能证明证据真的支持 claim。逐条标记 supported、unsupported、overstated 或 ambiguous，并把错误分为 context assembly、generation、citation binding 或 policy failure。</p><h3>完成标准</h3><p>提交四类 case 的输入、结构化输出、deterministic check、人工判断和 failure label。回答里出现 [1] 不等于完成 grounding。</p>',
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_LAB_RUNTIME_REVIEW_PENDING",
});

update("L56", {
  title: "Lab: Versioned RAG Ingestion Pipeline",
  title_en: "Lab: Versioned RAG Ingestion Pipeline",
  description:
    "从 source manifest 构建可重复的 parse → normalize → chunk → metadata → embed → index pipeline。比较两种 chunking 策略，但不写死 chunk size；用 hash、版本和 lineage 支持增量更新、删除与索引重建。",
  description_en:
    "Build a repeatable parse, normalize, chunk, metadata, embed, and index pipeline from a source manifest. Compare two chunking strategies without prescribing one size, and preserve hashes, versions, lineage, updates, deletion, and rebuild evidence.",
  steps: [
    step(
      1,
      "LAB",
      "建立 source manifest、document ID、version、permission 与 content hash",
      5,
    ),
    step(
      2,
      "LAB",
      "实现 parse/normalize，并保存 page、section 与 parser status",
      7,
    ),
    step(3, "LAB", "实现并对照 structure-aware 与 recursive chunking", 7),
    step(
      4,
      "LAB",
      "生成 Embedding，写入带 index version 的本地 Vector Store",
      6,
    ),
    step(
      5,
      "EVALUATION",
      "测试 idempotent re-run、文档更新、删除与 rebuild",
      5,
    ),
  ],
  learningMaterial:
    '<h2>Lab: Versioned RAG Ingestion Pipeline</h2><p>目标不是把一个 PDF 塞进 Chroma，而是建立可重复、可更新、可删除、可追溯的 ingestion job。</p><h3>Manifest Contract</h3><pre><code>{"document_id":"POL-001","version":"2026-09-08","source_uri":"...","content_hash":"...","data_class":"internal","permission_scope":["care-staff"],"parser_version":"...","status":"active"}</code></pre><h3>Pipeline</h3><p><strong>Source → Validate → Parse → Normalize → Chunk → Metadata → Embed → Index → Verify</strong></p><h3>Chunk Contract</h3><p>每个 chunk 保存 document_id、document_version、chunk_id、page/section、text、content_hash、permission_scope、chunker_version 和 embedding/index version。比较 structure-aware 与 recursive 两种策略；chunk size 由文档结构、query 和 retrieval dataset 验证，不使用统一答案。</p><h3>Lifecycle Cases</h3><ul><li>相同 manifest 重跑不重复写入；</li><li>文档版本更新后旧 chunks 不再被默认检索；</li><li>撤销来源时向量和 metadata 同步删除；</li><li>embedding 配置变化触发新 index，而不是混用向量；</li><li>解析失败进入 quarantine，不静默索引乱码。</li></ul><h3>完成标准</h3><p>提交 manifest、两种 chunk outputs、index manifest、idempotency/update/delete/rebuild 结果及一张 ingestion failure table。</p>',
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_LAB_RUNTIME_REVIEW_PENDING",
});

update("L57", {
  title: "Embedding Model Contracts & Index Migration",
  title_en: "Embedding Model Contracts and Index Migration",
  description:
    "区分 Chat Model、Input Embedding 与 Retrieval Embedding，建立 query/document encoding contract。用同一 corpus 比较候选模型的 retrieval quality、语言覆盖、latency 与实测成本，并设计 vector dimension 或模型变化时的双索引迁移。",
  description_en:
    "Distinguish chat, input-embedding, and retrieval-embedding models. Compare retrieval quality, language coverage, latency, and measured cost on one corpus, then design a dual-index migration when the embedding contract changes.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Chat、Input Embedding 与 Retrieval Embedding 的职责边界",
      15,
    ),
    step(
      2,
      "CONCEPT",
      "Query/document encoding、normalization、dimension 与 distance contract",
      20,
    ),
    step(
      3,
      "EVALUATION",
      "用同一 corpus/dataset 比较 retrieval quality、语言、latency 与成本",
      25,
    ),
    step(
      4,
      "SYSTEM_DESIGN",
      "双索引 backfill、shadow query、cutover、rollback 与旧索引退休",
      20,
    ),
    step(5, "INTERVIEW", "解释为什么不能混用不同 embedding spaces", 10),
  ],
  learningMaterial:
    "<h2>Embedding Model Contracts & Index Migration</h2><p>Embedding 选型不是比较维度大小。系统需要固定 query/document encoding、normalization、distance function、dimension、model ID 与 index version，并用自己的 retrieval dataset 验证。</p><h3>Contract</h3><p>记录 model ID、provider/endpoint、query/document prefix、dimension、normalization、distance、language、max input、data boundary、checked_at 与 index version。相似度分数不可跨模型直接比较。</p><h3>Candidate Evaluation</h3><p>固定 corpus、queries、relevance labels、filters 与 top-k，比较 Recall@k/MRR 或适合任务的排序指标、hard negatives、no-answer、中文/英文、latency 和实际 usage/cost。维度更高不自动等于检索更好。</p><h3>Migration</h3><p>建立新 index → backfill → 完整性检查 → shadow queries → regression → canary cutover → rollback window → retire old index。新旧向量不能写入同一空间；切换 query encoder 前必须确认目标 index。</p><h3>完成标准</h3><p>能提交一份 embedding ADR、一张候选对比表和包含完整性、回归、cutover、rollback 的迁移计划。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_RECORDING_REVIEW_PENDING",
});

update("L58", {
  title: "RAG Fundamentals: Ingestion, Retrieval & Grounding",
  title_en: "RAG Fundamentals: Ingestion, Retrieval and Grounding",
  description:
    "第七期 W4 理论 Live。在 W3 Context Architecture 上加入 versioned knowledge source，讲清 ingestion、chunk/metadata/embedding/index contract、permission-aware retrieval、grounded generation、programmatic citation、no-answer 与 RAG failure taxonomy。Hybrid Search、Query Rewrite、Reranking 和 RAGAS 只建立后续地图。",
  description_en:
    "Cohort 7 Week 4 theory. Add versioned knowledge sources to the Week 3 context architecture and cover ingestion contracts, permission-aware retrieval, grounded generation, programmatic citations, no-answer behavior, and RAG failure taxonomy. Advanced retrieval and RAGAS are mapped for later study.",
  steps: [
    step(
      1,
      "SYSTEM_DESIGN",
      "RAG 在 Context Architecture 中的位置；与 Prompt、Memory、Tools、Fine-Tuning 的边界",
      10,
    ),
    step(
      2,
      "SYSTEM_DESIGN",
      "Source manifest → parse → chunk → metadata → embed → index",
      15,
    ),
    step(
      3,
      "CONCEPT",
      "Query/document embedding、similarity、top-k 与 hard negatives",
      10,
    ),
    step(
      4,
      "SECURITY",
      "permission-aware retrieval、tenant filter 与 data lineage",
      10,
    ),
    step(
      5,
      "SYSTEM_DESIGN",
      "Context assembly、grounded answer、claim 与 programmatic citation",
      15,
    ),
    step(
      6,
      "SCENARIO",
      "no-answer、stale/conflicting evidence 与 human review",
      10,
    ),
    step(
      7,
      "EVALUATION",
      "Retrieval vs generation failure taxonomy；后续 Hybrid/Rerank/RAGAS 地图",
      10,
    ),
    step(
      8,
      "INTERVIEW",
      "RAG System Design Review：组件、失败、指标与取舍",
      10,
    ),
  ],
  learningMaterial:
    "<h2>RAG Fundamentals: Ingestion, Retrieval & Grounding</h2><p>RAG 是 Context Engineering 的动态知识来源：在请求时检索获授权、可追溯、版本正确的 evidence，再组装给模型。它不替代 system policy、业务 state、tool authorization 或 human review。</p><h3>Architecture</h3><p><strong>Sources → Ingestion → Versioned Index → Permission Filter → Retrieval → Context Assembly → Generation → Citation Validation → Review</strong></p><h3>三个 Contracts</h3><ol><li><strong>Ingestion</strong>：source/version/hash/parser/chunker/embedding/index lineage。</li><li><strong>Retrieval</strong>：query、permission filters、top-k、score semantics、no-result behavior。</li><li><strong>Answer</strong>：claims、source IDs、supported/partial/conflict/no-answer、review state。</li></ol><h3>Failure Taxonomy</h3><table><thead><tr><th>层</th><th>失败</th><th>证据</th></tr></thead><tbody><tr><td>Ingestion</td><td>解析错、版本旧、漏页</td><td>manifest/chunk lineage</td></tr><tr><td>Retrieval</td><td>相关 chunk 未进入 top-k</td><td>ranked results/relevance</td></tr><tr><td>Assembly</td><td>证据被截断或污染</td><td>context trace</td></tr><tr><td>Generation</td><td>claim 无证据或过度概括</td><td>claim-source review</td></tr><tr><td>Policy</td><td>越权来源进入回答</td><td>permission decision/audit</td></tr></tbody></table><h3>CareKind 边界</h3><p>课堂使用 synthetic policy，不把 resident PII 放入通用 vector index。Citation 由程序绑定 document/chunk ID；政策证据不能自动触发临床、用药或监管申报决定。</p><h3>面试检查</h3><p>能够画出 online 与 offline path，解释 chunking/top-k 不存在通用最佳值，区分 retrieval 与 generation metrics，并说明更新、删除、权限、no-answer 和 rollback。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_LIVE_DECK_REVIEW_PENDING",
});

update("C7P04", {
  title: "CareKind Voice AI: Confirmed Transcript Pipeline",
  title_en: "CareKind Voice AI: Confirmed Transcript Pipeline",
  description:
    "第七期 W4 实践 Live，也是项目第一次接入 AI。完成 microphone permission、record/upload、Speech-to-Text adapter、Editable Transcript、Human Confirmed Transcript、manual fallback 与最小质量测试。输出只到 confirmed transcript，不生成 Progress Note、不接 RAG、不进入 Agent。",
  description_en:
    "Cohort 7 Week 4 practice and the project’s first AI integration. Build recording, upload, a speech-to-text adapter, editable and human-confirmed transcripts, manual fallback, and a small quality test. Stop at the confirmed transcript; do not generate notes, add RAG, or introduce agents.",
  steps: [
    step(
      1,
      "SYSTEM_DESIGN",
      "定义 Audio、Transcription Job、Transcript Version 与 Confirmation Contract",
      15,
    ),
    step(
      2,
      "LAB",
      "实现 microphone permission、record/stop、format/size validation 与 upload",
      20,
    ),
    step(
      3,
      "LAB",
      "通过 STT Adapter 接入一个 provider，保存 exact model、language 与 request trace",
      20,
    ),
    step(
      4,
      "LAB",
      "实现 Processing、Partial、Failed、Editable 与 Confirmed 状态",
      20,
    ),
    step(
      5,
      "LAB",
      "实现 transcript edit、version history、human confirmation 与 audit record",
      20,
    ),
    step(
      6,
      "FAILURE_DRILL",
      "测试 denied、empty/noisy audio、timeout、unsupported format 与 manual entry",
      15,
    ),
    step(
      7,
      "EVALUATION",
      "用 synthetic audio 检查 word/field errors、PII logging 与完成证据",
      10,
    ),
  ],
  learningMaterial:
    "<h2>CareKind Voice AI: Confirmed Transcript Pipeline</h2><p>这是项目第一次连接模型能力，但只解决“语音变成经过人确认的文字”。Human-confirmed transcript 是后续 Structured Documentation 的可信输入边界，不允许把 raw STT 直接写成业务事实。</p><h3>State Flow</h3><p><strong>Idle → Recording → Uploading → Transcribing → Editable → Confirmed</strong>；任一步都可能进入 Failed 或 Manual Entry。Confirmed 后的修改必须生成新 version 并重新确认。</p><h3>STT Adapter</h3><p>业务代码只依赖 transcribe(audio, language, trace) contract。Adapter 记录 provider、exact model、language、latency、request ID 和 failure type；密钥不进入浏览器、日志或 repository。</p><h3>Human Confirmation</h3><p>界面并排展示 audio playback、raw transcript、editable version 和 confirmation actor/time。用户必须能够修改、重试、删除或改用手工输入。</p><h3>Failure Cases</h3><p>permission denied、空录音、纯噪声、超限、错误格式、网络中断、provider timeout、混合语言、姓名/数字误识别和重复提交。</p><h3>完成标准</h3><p>提交 state diagram、adapter contract、synthetic audio cases、版本与 audit evidence、PII-safe logs 和 manual fallback。禁止提前生成 Progress Note、RAG 或 Agent。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_LIVE_STARTER_REVIEW_PENDING",
});

update("L59", {
  title: "Lab: Permission-Aware RAG Query Pipeline",
  title_en: "Lab: Permission-Aware RAG Query Pipeline",
  description:
    "连接 query normalization、query embedding、mandatory permission filter、top-k retrieval、context assembly、grounded generation 与 citation validation。用同一组 cases 分别注入 retrieval miss、越权命中、stale evidence 和 unsupported claim。",
  description_en:
    "Connect query normalization, query embedding, mandatory permission filtering, top-k retrieval, context assembly, grounded generation, and citation validation. Inject retrieval misses, unauthorized hits, stale evidence, and unsupported claims.",
  steps: [
    step(
      1,
      "LAB",
      "定义 QueryRequest、actor/tenant/permission 与 no-answer contract",
      5,
    ),
    step(
      2,
      "LAB",
      "实现 query normalization、compatible embedding 与 mandatory filters",
      7,
    ),
    step(
      3,
      "LAB",
      "返回 ranked chunks、score、source/version 与 filter trace",
      6,
    ),
    step(4, "LAB", "组装 bounded context，生成 claim + source IDs", 6),
    step(
      5,
      "EVALUATION",
      "验证 citation existence/support，并运行四类 failure injections",
      6,
    ),
  ],
  learningMaterial:
    "<h2>Lab: Permission-Aware RAG Query Pipeline</h2><p>本实验连接在线路径，但必须把 permission filter 放在生成之前并默认拒绝。不能先检索全部文档再要求模型“不要说”。</p><h3>Online Path</h3><pre><code>QueryRequest → normalize → query embedding → tenant/ACL filter → top-k → context assembly → answer schema → citation validation → result</code></pre><h3>Result Contract</h3><p>返回 query version、ranked chunk IDs、document/version、score、filter decision、claims、source IDs、answer status、latency 与 failure label。日志不保存未脱敏 PII 或完整敏感 context。</p><h3>Failure Injection</h3><ol><li>relevant chunk 不在 top-k；</li><li>高分 chunk 属于另一 tenant；</li><li>检索到 superseded policy；</li><li>模型生成 source 不支持的 claim。</li></ol><h3>完成标准</h3><p>四种失败必须被区分为 retrieval、permission、freshness 或 generation/citation failure；没有证据时返回 no_answer，而不是使用模型记忆补全。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_LAB_RUNTIME_REVIEW_PENDING",
});

update("L61", {
  title: "RAG Component Selection Guide",
  title_en: "RAG Component Selection Guide",
  description:
    "按 Parser、Chunker、Embedding、Vector Store、Keyword Search、Reranker、Evaluation 与 Observability 的职责选择组件。每个候选记录 contract、license、data boundary、filter、update/delete、backup 与 exit cost；不设通用 chunk size，也不要求把所有工具各做一次。",
  description_en:
    "Select RAG components by parser, chunker, embedding, vector store, keyword search, reranker, evaluation, and observability responsibilities. Record contracts, licensing, data boundaries, filters, lifecycle support, backup, and exit cost without prescribing one chunk size or installing every tool.",
  steps: [
    step(1, "CONCEPT", "按 Pipeline Stage 建立 Component Registry", 2),
    step(
      2,
      "SYSTEM_DESIGN",
      "用 workload、permission、lifecycle、ops 与 exit cost 完成选型",
      2,
    ),
    step(
      3,
      "REVIEW",
      "识别 framework convenience 与 production responsibility 的边界",
      1,
    ),
  ],
  learningMaterial:
    "<h2>RAG Component Selection Guide</h2><p>工具指南的目标是解释职责和取舍，不是展示 Logo 数量。</p><h3>Component Registry</h3><table><thead><tr><th>Stage</th><th>候选类型</th><th>必须验证</th></tr></thead><tbody><tr><td>Parse</td><td>PyMuPDF、pdfplumber、Unstructured 等</td><td>layout、table、OCR、lineage</td></tr><tr><td>Chunk</td><td>structure-aware、recursive、semantic</td><td>boundary、metadata、dataset result</td></tr><tr><td>Embedding</td><td>hosted/open models</td><td>query/document contract、language、migration</td></tr><tr><td>Index</td><td>FAISS、pgvector、Qdrant、OpenSearch 等</td><td>filter、tenant、update/delete、backup</td></tr><tr><td>Retrieve</td><td>dense、BM25、hybrid、reranker</td><td>latency、hard negatives、top-k evidence</td></tr><tr><td>Evaluate/Trace</td><td>Ragas、pytest、Langfuse 等</td><td>dataset、metric semantics、storage</td></tr></tbody></table><h3>Selection Questions</h3><p>数据放哪里？权限在检索前还是后执行？如何更新和删除？索引能否重建？备份与恢复是什么？SDK/服务 license 与成本如何？如果退出供应商，数据、metadata 和评估集能否导出？</p><h3>边界</h3><p>Framework 可以减少 glue code，但不能替你定义 data contract、permission、citation、evaluation 与 incident responsibility。chunk size、top-k 和阈值都由 dataset 验证。</p><h3>完成标准</h3><p>为一个场景提交两套可行 stack 的 ADR，说明选择、拒绝、未知项、迁移与回滚。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_REFERENCE_REVIEW_PENDING",
});

update("L64", {
  title: "Document Ingestion: PDF Parsing, OCR & Lineage",
  title_en: "Document Ingestion: PDF Parsing, OCR and Lineage",
  description:
    "把 PDF 当作不可信输入，先分类 born-digital、scanned、mixed、multi-column 与 table-heavy，再选择 parser/OCR 路径。输出 page/block/table lineage、parse status 与 quality report；失败页进入 quarantine，不直接污染 RAG index。",
  description_en:
    "Treat PDFs as untrusted inputs. Classify born-digital, scanned, mixed, multi-column, and table-heavy documents before selecting parser or OCR paths. Preserve page, block, and table lineage, quality status, and quarantine failures before indexing.",
  steps: [
    step(
      1,
      "CONCEPT",
      "Document Intake Contract：来源、权限、hash、type、size 与 malware boundary",
      5,
    ),
    step(
      2,
      "DEMO",
      "识别 born-digital、scanned、mixed、multi-column 与 table-heavy 页面",
      5,
    ),
    step(3, "LAB", "对照 text parser、layout-aware parser 与 OCR fallback", 8),
    step(
      4,
      "LAB",
      "保存 page/block/table、bbox、parser version 与 source lineage",
      5,
    ),
    step(
      5,
      "EVALUATION",
      "运行字符、阅读顺序、表格与 citation-anchor quality checks",
      5,
    ),
    step(6, "REVIEW", "失败页 quarantine、人工复核与 reprocess contract", 2),
  ],
  learningMaterial:
    "<h2>Document Ingestion: PDF Parsing, OCR & Lineage</h2><p>PDF 是容器，不是干净文本。先判断页面类型，再选择 extraction 路径；所有输出必须能回到原始文件、页码和区域。</p><h3>Intake</h3><p>记录 document_id、source URI、version、content hash、data class、permission、MIME/size、ingested_at 与 scanner status。加密、损坏、超限或未经授权文件直接失败。</p><h3>Routing</h3><table><thead><tr><th>类型</th><th>首选路径</th><th>检查</th></tr></thead><tbody><tr><td>Born-digital</td><td>text/layout parser</td><td>reading order、fonts、headers</td></tr><tr><td>Scanned</td><td>render + OCR</td><td>rotation、language、small text</td></tr><tr><td>Mixed</td><td>page-level routing</td><td>避免重复 text/OCR</td></tr><tr><td>Table-heavy</td><td>layout/table extraction</td><td>row/column/header integrity</td></tr><tr><td>Multi-column</td><td>bbox/layout-aware extraction</td><td>column order</td></tr></tbody></table><h3>Canonical Output</h3><p>每个 block 保存 document/version/page/block ID、type、text、bbox、heading path、table cells、parser/OCR version、quality status 和 source anchor。下游 chunk 只能引用 canonical blocks。</p><h3>Quality Gate</h3><p>检查空页、乱码率、reading order、重复 OCR、表格列数、source anchor 与抽样人工对照。不通过的页面进入 quarantine；不能因为 pipeline 返回字符串就标记成功。</p><h3>完成标准</h3><p>用 text、scan、multi-column、table 四类 synthetic/authorized files 运行，提交 routing decision、canonical output、quality report、quarantine 与 reprocess evidence。</p>",
  cohort7ContentRevision: "2026-09-08-content-enhancement",
  cohort7MaterialStatus: "CONTENT_REVISED_RECORDING_AND_LAB_REVIEW_PENDING",
});

outline.courseObjective_en =
  "Design, implement, evaluate, and govern a production-ready applied AI product, and defend engineering trade-offs across RAG, agents, MCP, model routing, fine-tuning decisions, and AI governance.";
outline.liveClasses = 25;
outline.estimatedHours = 45;
outline.features = [
  "25 场正式直播：12 场理论 + 13 场实践",
  "每周理论 + 独立实践双 Live；实践从 W1 开始沿同一条产品交付主线搭建 production Agent 系统，不限定 repository 结构",
  "理论 W12 结束，实践 W13 用 180 分钟 Production Readiness Review & Demo Day 收口",
  "W3 完成业务底座，W4 第一次接 AI，W6 先写 Evaluation Pipeline，W7 再构建并证明 Policy RAG",
  "Agent Memory + Production Harness + W12 Model Routing 实践",
  "Governance、Evals、Safety 与 ADLC 全程联动",
];
outline.highlights = [
  "每周一场理论 + 一场独立实践；实践不是附属 Lab，而是从 W1 开始搭建完整 Agent 产品",
  "沿同一条产品交付主线，从 ADLC、UI 和非 AI workflow，逐周长成 RAG、MCP、Agent、Memory、Harness 与 Routing 系统；不限定 repository 结构",
  "RAG 主线限定 W6–W7 两周：先冻结 evaluation contract 与 baseline，再构建 Policy RAG 并完成可测量的 CareKind MVP",
  "MCP Tools → Bounded Agent → Long-Term Memory → Production Harness → Model Routing",
  "Governance 从 trust boundary、Memory lifecycle 贯穿到 eval threshold、release 与 incident evidence",
  "W13 只验收标准软件工程前置，把 Live 留给 AI eval、安全/故障演练和 System Design Defense",
];
outline.highlights_en = [
  "One theory live and one independent practice live each week; practice is a continuous build-from-zero agent product track, not an attached lab",
  "Grow one continuous product-delivery track from ADLC, UI, and a non-AI workflow into RAG, MCP, agents, memory, a production harness, and model routing without prescribing a repository structure",
  "Limit the RAG core to Weeks 6-7: define the evaluation contract and baseline first, then build and prove the policy RAG against the same pipeline",
  "Progress from MCP tools to a bounded agent, long-term memory, a production harness, and model routing",
  "Carry governance from trust boundaries and memory lifecycle into evaluation thresholds, release decisions, and incident evidence",
  "Use Week 13 for AI-specific evaluations, security and failure drills, release judgement, and system-design defense",
];

const updateActive = (code, values) => {
  const matches = outline.phases
    .flatMap((phase) => phase.lessons)
    .filter(
      (lesson) => lesson.code === code && lesson.cohort7Included !== false,
    );
  if (matches.length !== 1) {
    throw new Error(`Expected one active ${code}; found ${matches.length}`);
  }
  Object.assign(matches[0], values);
};

for (const item of finalContentRefreshes) {
  updateActive(item.code, {
    title: item.title,
    title_en: item.title,
    description: item.description,
    description_en: item.description,
    steps: item.steps.map(([type, title], index) =>
      step(index + 1, type, title, 6),
    ),
    ...(item.learns ? { learns: item.learns } : {}),
    learningMaterial: compactMaterial(
      item.title,
      item.description,
      item.sections,
      item.deliverable,
    ),
    cohort7ContentRevision: "2026-09-08-final-content-audit",
  });
}

const closingContentRefreshes = [
  [
    "L156",
    "Synthetic Test Data for RAG：Coverage、Leakage 与 Human Review",
    "为 W6 Evaluation Pipeline 生成候选测试问题，但不把模型生成答案当 ground truth；覆盖事实、多跳、no-answer、冲突、权限和长尾问题，并防止训练/测试泄漏。",
    [
      [
        "Generation contract",
        "从有授权的 source documents 生成 question、reference claims、source IDs、difficulty、slice 与 generation provenance；答案必须回到来源核验。",
      ],
      [
        "Quality controls",
        "去重近似问题，过滤无来源、歧义、敏感数据和模板泄漏；训练、验证和测试按来源与近重复隔离。",
      ],
      [
        "Coverage",
        "按用户任务、文档类型、失败模式与风险 slice 检查覆盖，不能用大量同类简单题制造漂亮平均分。",
      ],
    ],
    "提交 versioned candidate set、人工抽检记录、去重/泄漏报告和最终纳入 W6 dataset 的变更说明。",
  ],
  [
    "L117",
    "Lab: Compare One Alternative Agent SDK",
    "使用同一 Agent contract 和 eval cases 接入一个替代 SDK，比较 state、tools、streaming、interrupt、checkpoint、observability 与 deployment constraints；不是再建一个新 Agent 项目。",
    [
      [
        "Adapter boundary",
        "保持相同 task、tool schemas、dataset 与 terminal outcomes，只替换 runtime adapter，避免把业务差异误算成 framework 差异。",
      ],
      [
        "Failure parity",
        "验证 timeout、bad tool result、approval wait、resume、cancellation 和 duplicate side effect 是否都能表达。",
      ],
      [
        "Decision",
        "比较 completion、trace completeness、latency、cost、lock-in、operational burden 和团队熟悉度。",
      ],
    ],
    "提交 adapter、同题 trace、缺失能力清单与 adopt/reject ADR。",
  ],
  [
    "L124",
    "LangGraph：State Graph、Interrupt 与 Durable Execution",
    "把 Agent workflow 表达为 typed state、nodes、edges、conditional routing、checkpoint 与 interrupt/resume；重点处理节点重执行和副作用安全。",
    [
      [
        "State graph",
        "State 只保存可序列化的任务事实、版本、tool results、approval 和 budgets；node 输入输出使用明确 contract。",
      ],
      [
        "Interrupt/resume",
        "暂停后恢复可能重新进入节点，因此不可重复副作用要移出可重执行区域，或使用 idempotency/read-back 保护。",
      ],
      [
        "Testing",
        "测试 conditional edge、stale checkpoint、duplicate resume、node failure 与 cancellation，而不只跑 happy path。",
      ],
    ],
    "提交 state graph、checkpoint schema 和一次 approval interrupt 后安全恢复的 trace。",
  ],
  [
    "L132",
    "Agent Operations：Runbook、SLO 与 Failure Ownership",
    "把 Agent 运行拆成 model、tool、memory、policy、queue 与 human escalation 责任，建立 SLO、error taxonomy、kill switch、runbook 和 incident evidence。",
    [
      [
        "Operational signals",
        "监控 task success、wrong action、escalation、p95 latency、cost、tool failure、memory conflict 与 policy denial，不用 token 数代替业务成功。",
      ],
      [
        "Ownership",
        "每种 failure 指定 detection、first responder、service owner、decision owner 和 escalation route。",
      ],
      [
        "Incident control",
        "提供 pause intake、disable tool/model/memory、drain queue、preserve trace、rollback 与 recovery verification。",
      ],
    ],
    "提交一页 Agent Ops dashboard spec、failure ownership matrix 和 incident runbook。",
  ],
  [
    "L120",
    "Agentic Retrieval：Query Planning、Evidence Budget 与 Stop Rules",
    "在 W7 RAG 上按需增加 query rewrite、multi-query、tool choice 与 iterative retrieval，同时限制 evidence budget、attempt、latency、cost 和停止条件。",
    [
      [
        "When to expand",
        "只有一次 retrieval 无法解决明确问题 slice 时才启用 Agentic Retrieval；简单事实问题保留直接路径。",
      ],
      [
        "Bounded search",
        "每轮记录 query、目的、returned IDs、new evidence 和 remaining gap；无新增证据、重复 query 或预算耗尽时停止。",
      ],
      [
        "Evaluation",
        "与 single retrieval baseline 比较 hard-slice quality、normal-slice regression、latency、cost 和错误放大。",
      ],
    ],
    "提交 query plan trace、stop-rule tests 与采用范围 ADR。",
  ],
  [
    "L135",
    "Agent Memory Architecture：Store、Retrieve、Consolidate 与 Forget",
    "比较 profile、episodic、semantic 和 procedural memory，设计 write gate、scope、provenance、conflict、TTL、correction、delete 与 retrieval policy。",
    [
      [
        "Memory contract",
        "每条 memory 保存 subject、scope、source、confirmation status、created/expiry、version 与 sensitivity；原始对话不自动成为事实。",
      ],
      [
        "Lifecycle",
        "写入前去重和冲突检测，读取时重查权限与 purpose，支持 supersede、correction、forget 和 consent withdrawal。",
      ],
      [
        "Evaluation",
        "同时测试 useful recall、irrelevant recall、stale memory、cross-user leak、poisoning 与 deletion propagation。",
      ],
    ],
    "提交 memory schema、lifecycle diagram、read/write policy 与风险测试结果。",
  ],
  [
    "L135a",
    "Context Engineering & Memory：Working Context 与 Persistent State",
    "解释当前任务 Context、session state、checkpoint 与 long-term memory 的不同生命周期，避免把所有历史内容向量化后塞回 Prompt。",
    [
      [
        "Four lifecycles",
        "Working context 服务当前模型调用；session state 服务当前任务；checkpoint 支持恢复；long-term memory 只保存允许跨任务复用的已确认信息。",
      ],
      [
        "Selection",
        "Context Builder 按任务、权限、freshness 和 token budget 选择内容；Memory Retriever 只返回有 provenance 且未过期的候选。",
      ],
      [
        "Conflict",
        "当前输入与 memory 冲突时不静默覆盖，显示来源和版本并进入确认、更正或拒绝路径。",
      ],
    ],
    "画出四层 state flow，并为五类数据决定存放位置、保留期、读取权限与删除路径。",
  ],
  [
    "L149",
    "Model Selection & Fine-Tuning Go/No-Go",
    "先定位失败来自 instruction、context、retrieval、tools、routing 还是稳定行为，再决定是否需要 open-weight deployment 或 Fine-Tuning；训练不是默认修复。",
    [
      [
        "Failure ownership",
        "缺知识优先 RAG，实时动作优先 tools，任务差异考虑 routing；只有可重复行为偏差且有高质量数据时才进入 Fine-Tuning 候选。",
      ],
      [
        "Data gate",
        "检查授权、代表性、去重、敏感数据、train/eval 隔离、label consistency 与持续维护成本。",
      ],
      [
        "Decision evidence",
        "在同一 held-out dataset 比较 baseline 与候选的质量、格式、拒答、退化、latency、cost、privacy 和 operations。",
      ],
    ],
    "提交 go/no-go decision memo；主线不要求训练模型，LoRA/QLoRA 保留进阶选修。",
  ],
  [
    "L171b",
    "AI Governance Pack：Risk Register、RACI、System Card 与 Release Evidence",
    "为现有 Agent 提供可直接填写的治理模板，并把风险、责任、数据/模型 lineage、人工审批、评估阈值、上线决策和事故处理连接到同一 evidence pack。",
    [
      [
        "Risk and ownership",
        "Risk Register 保存 hazard、affected users、controls、evidence、likelihood/impact、residual risk 和 owner；RACI 明确 system owner、release approver 与 incident owner。",
      ],
      [
        "System evidence",
        "System Card 记录用途、non-goals、data/model/tool/memory lineage、权限、已知限制、evaluation slices 与 human oversight。",
      ],
      [
        "Lifecycle",
        "Release Decision 引用实际 eval/red-team/trace；material change 触发重评，Incident Runbook 包含 containment、notification、rollback、recovery 和 learning review。",
      ],
    ],
    "完成 Risk Register、RACI、System Card、approval record、release decision 与 incident runbook，并链接 W6–W13 的真实证据。",
  ],
  [
    "L177",
    "Evaluation Tools Selection：Metrics、Tracing、Experiments 与 Deployment Constraints",
    "按职责比较 RAGAS、DeepEval、Langfuse、LangSmith 与 Braintrust 等候选：metric implementation、runner、dataset/experiment management、tracing 和 deployment 是不同问题。",
    [
      [
        "Capability map",
        "先写当前 Pipeline 缺什么，再比较 metric extensibility、dataset versioning、experiment comparison、trace linkage、CI integration 与 export。",
      ],
      [
        "Governance",
        "核验 data location、access control、redaction、retention、export/delete、license、self-hosting requirements 与真实费用。",
      ],
      [
        "Avoid tool tourism",
        "课程主线只维护一套 dataset 和 runner；替代平台通过 adapter 复用同一 cases，不要求所有工具都安装一次。",
      ],
    ],
    "提交工具选择矩阵和一条 ADR，说明主路径、替代方案、迁移边界与未核验信息。",
  ],
];

for (const [
  code,
  title,
  lead,
  sections,
  deliverable,
] of closingContentRefreshes) {
  updateActive(code, {
    title,
    title_en: title,
    description: lead,
    description_en: lead,
    steps: sections.map(([heading, body], index) =>
      step(index + 1, "CONCEPT", `${heading}：${body}`, 8),
    ),
    learns: code === "L135a" ? [] : byCode.get(code)?.learns || [],
    learningMaterial: compactMaterial(title, lead, sections, deliverable),
    cohort7ContentRevision: "2026-09-08-final-content-audit",
  });
}

updateActive("C7P01", {
  learningMaterial:
    "<h2>Start an AI Product with ADLC & AI Coding</h2><p>W1 Practice 从一个可验证的产品问题开始，不是先让 AI 生成代码。学生建立 problem framing、users、workflow、scope、non-goals、constraints、acceptance criteria 与 synthetic-data boundary，再让 AI Coding 工具在明确 repository context 和 rules 下完成第一次受控修改。</p><h3>ADLC evidence chain</h3><p><strong>Problem → Spec → Work Plan → Code Change → Test → Review → Evidence</strong>。每一步留下版本与 owner；模型生成的 PRD、任务和代码只是候选，必须由人确认业务事实和验收标准。</p><h3>AI Coding workflow</h3><p>先让工具读取项目结构、CLAUDE.md/AGENTS.md、DESIGN.md、schema 与 tests，再要求小范围修改。Review 检查 diff scope、URL/API contract、数据边界、失败路径和测试结果；禁止把密钥、真实个人数据或未验证命令交给模型。</p><h3>交付</h3><p>提交 product brief、workflow、acceptance criteria、repository map、AI Coding rules、一次 scoped diff、测试和人工 review 记录。W2 将在这份产品契约上建立 Design System 与完整 UI。</p>",
  cohort7ContentRevision: "2026-09-08-final-content-audit",
});

outline.curriculumPages = {
  pages: [
    "cohort-7.html",
    "curriculum.html",
    "architecture.html",
    "phase1.html",
    "phase2.html",
    "phase3.html",
    "phase4.html",
    "learning-plan.html",
    "jd-mapping.html",
  ],
  defaultPage: "cohort-7.html",
};

outline.cohort7LibraryLegend = {
  verifiedAt: "2026-08-27",
  core: "Core Stack：课堂会实际使用、演示或由 starter project 预置；每节课只保留完成交付所需的最小集合。",
  ecosystem:
    "Popular OSS Ecosystem：面试需要认识并能解释 trade-off 的热门开源生态，不代表本节课全部安装。",
  types: {
    oss: "开源软件或开源 SDK",
    "oss-ecosystem": "开源生态；采用前需再次核查具体 package/version 的许可",
    "provider-sdk": "模型供应商 SDK，不作为开源卖点",
    "provider-api":
      "供应商托管 API 或 beta platform capability，不作为开源卖点",
    "provider-tool": "供应商开发工具，不作为开源卖点",
    "web-platform": "浏览器或 Web 标准能力",
    "research-reference": "研究或历史参考，不作为默认 production 选型",
  },
  versionPolicy:
    "课程大纲不冻结易过期的版本号；开课前在 starter repository 的 lockfile 中固定并完成兼容性、安全与 license 复查。",
};

outline.cohort7Audit = {
  auditedAt: "2026-08-25",
  scope:
    "25 formal live sessions, W1-W13 ordering, Cohort 5 baseline, recording candidates, CareKind delivery chain, machine metadata, and production-readiness boundaries",
  score: 78.1,
  grade: "GOOD",
  scoringNote:
    "The generic rubric penalizes the uniform Lesson registration shell and concise summaries; the 25 live sessions contain 24 distinct step types and detailed learningMaterial.",
  strengths: [
    "One theory live plus one independent practice live, with practice building an agent product from zero rather than acting as an attached lab",
    "One continuous compliance-aware CareKind repository from ADLC and product foundations through production agent review",
    "Two-week RAG core followed by MCP, bounded agent, memory, harness, and model routing",
    "Governance by design with human confirmation, provenance, permissions, evaluation gates, and incident evidence",
    "AI-specific production review separated from standard software engineering prerequisites",
  ],
  gaps: [
    {
      priority: "P0",
      item: "Create the W13 Production Starter Pack and verify it against the starter repository",
    },
    {
      priority: "P0",
      item: "Ada must audit and select the best recordings from Cohorts 1-5 with freshness and remediation notes",
    },
    {
      priority: "P0",
      item: "Finalize the Demo Day rubric against the actual number of student teams",
    },
    {
      priority: "P1",
      item: "Add Australian-accent, noise, retention, consent, PII, and manual-fallback Voice AI cases to the final dataset",
    },
    {
      priority: "P1",
      item: "Add source-to-sink prompt injection, tool-result injection, data-exfiltration, and silent-side-effect cases",
    },
    {
      priority: "P1",
      item: "Template MCP/Auth checks for least privilege, token audience, token passthrough, secret storage, and role scope",
    },
    {
      priority: "P1",
      item: "Add aged-care information-management cases for accuracy, consent withdrawal, correction, access scope, and offline fallback",
    },
    {
      priority: "P2",
      item: "Clean remaining Legacy snapshots so search results cannot be mistaken for the formal schedule",
    },
  ],
  advancedTrack: [
    "Multi-Agent implementation",
    "GraphRAG and AWS/OpenSearch",
    "Open-weight and vLLM self-hosting",
    "Fine-Tuning, LoRA, and QLoRA",
  ],
};

for (const [code, week, track] of cohort7Schedule) {
  const item = byCode.get(code);
  if (!item) throw new Error(`Missing Cohort 7 scheduled lesson: ${code}`);
  const libraries = cohort7LibraryMap[code];
  if (!libraries) throw new Error(`Missing Cohort 7 library map: ${code}`);
  item.cohort7Week = week;
  item.cohort7Track = track;
  item.cohort7SessionOrder =
    cohort7Schedule.findIndex(([scheduledCode]) => scheduledCode === code) + 1;
  item.cohort7Libraries = libraries;
  item.level = week <= 2 ? "初级" : week <= 7 ? "中级" : "高级";
  item.learns = item.steps.slice(0, 8).map(({ title }) => title);
  if (!item.cohort7Status) {
    item.cohort7Status =
      track === "theory" ? "CONFIRMED_THEORY" : "CONFIRMED_PRACTICE";
  }
}

const lessons = outline.phases.flatMap((phase) => phase.lessons);
outline.totalLessons = lessons.length;
outline.totalSteps = lessons.reduce(
  (sum, item) => sum + (item.steps?.length ?? 0),
  0,
);
outline.totalInteractiveLabs = lessons.filter(
  (item) => item.type === "InteractiveLab",
).length;

const actualLiveCount = lessons.filter((item) => item.isLive).length;
if (actualLiveCount !== 25) {
  const actualLiveCodes = lessons
    .filter((item) => item.isLive)
    .map((item) => item.code)
    .join(", ");
  throw new Error(
    `Cohort 7 must contain exactly 25 live lessons; found ${actualLiveCount}: ${actualLiveCodes}`,
  );
}
if (
  lessons
    .filter((item) => item.isLive)
    .reduce((sum, item) => sum + item.duration, 0) !==
  45 * 60
) {
  throw new Error("Cohort 7 live duration must be 45 hours");
}

fs.writeFileSync(outlinePath, `${JSON.stringify(outline, null, 2)}\n`);
fs.writeFileSync(
  pagesPath,
  `${JSON.stringify(outline.curriculumPages, null, 2)}\n`,
);
