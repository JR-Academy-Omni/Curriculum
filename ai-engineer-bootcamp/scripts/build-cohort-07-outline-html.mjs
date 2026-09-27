import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BOOTCAMP = path.resolve(HERE, '..');
const PUBLIC = path.join(BOOTCAMP, 'public');
const OUTLINE_PATH = path.join(PUBLIC, 'outline.json');
const COPY_PATH = path.join(PUBLIC, 'cohort-07-public-copy.json');
const HTML_PATH = path.join(PUBLIC, 'posters', 'cohort-07-detailed-outline.html');
const DOWNLOAD_PATH = path.join(
  process.env.HOME,
  'Downloads',
  'JR Academy - AI Engineer 第七期详细大纲.html',
);
const TOTAL_PAGES = 32;

const WEEK_LESSONS = {
  1: ['L16', 'C7P01'], 2: ['L28', 'C7P02'], 3: ['L37', 'C7P03'],
  4: ['L58', 'C7P04'], 5: ['C7T05', 'C7P05'], 6: ['L101', 'C7P07'],
  7: ['L112', 'L60'], 8: ['L122', 'L104'], 9: ['L133', 'L119'],
  10: ['L138', 'C7P10'], 11: ['L171a', 'C7P11'], 12: ['L183', 'C7P12'],
  13: [null, 'L171'],
};

const WEEK_STYLE = {
  1: ['01 · 产品与工程基础', '#48C9D9', 'product'],
  2: ['01 · 产品与工程基础', '#48C9D9', 'product'],
  3: ['01 · 产品与工程基础', '#48C9D9', 'product'],
  4: ['02 · 第一次接入 AI', '#FF654E', 'knowledge'],
  5: ['02 · AI 接入与工程系统', '#7957FF', 'knowledge'],
  6: ['03 · 有政策依据的输出', '#7957FF', 'knowledge'],
  7: ['03 · 有政策依据的输出', '#7957FF', 'knowledge'],
  8: ['04 · 从功能进化为 Agent', '#EC6AA7', 'production'],
  9: ['04 · 从功能进化为 Agent', '#7957FF', 'production'],
  10: ['04 · 从功能进化为 Agent', '#EC6AA7', 'production'],
  11: ['05 · Production 标准', '#7957FF', 'production'],
  12: ['05 · Production 标准', '#F3B943', 'production'],
  13: ['05 · Production 标准', '#F3B943', 'production'],
};

const iconify = (name, collection = 'logos') => `https://api.iconify.design/${collection}:${name}.svg`;

const TECH_LOGOS = {
  OpenAI: iconify('openai-icon'),
  Claude: iconify('claude-icon'),
  Google: iconify('google'),
  Python: iconify('python'),
  GitHub: iconify('github-icon'),
  Playwright: iconify('playwright'),
  Docker: iconify('docker-icon'),
  HuggingFace: iconify('hugging-face-icon'),
  NVIDIA: iconify('nvidia'),
  Redis: iconify('redis'),
  React: iconify('react'),
  'Next.js': iconify('nextjs-icon'),
  Tailwind: iconify('tailwindcss-icon'),
  PostgreSQL: iconify('postgresql'),
  Pydantic: iconify('pydantic', 'simple-icons'),
  Qdrant: iconify('qdrant-icon'),
  LangChain: iconify('langchain', 'simple-icons'),
  LangSmith: iconify('langchain', 'simple-icons'),
  'W&B': iconify('weightsandbiases', 'simple-icons'),
  Pytest: iconify('pytest', 'simple-icons'),
  OpenTelemetry: iconify('opentelemetry'),
  Mermaid: iconify('mermaid'),
  'GitHub Actions': iconify('githubactions', 'simple-icons'),
  MCP: iconify('modelcontextprotocol', 'simple-icons'),
  FastAPI: iconify('fastapi-icon'),
  OWASP: iconify('owasp', 'simple-icons'),
  Ollama: iconify('ollama', 'simple-icons'),
  TypeScript: iconify('typescript-icon'),
  'Node.js': iconify('nodejs-icon'),
  Vite: iconify('vitejs'),
  Zod: iconify('zod'),
  Storybook: iconify('storybook-icon'),
  Figma: iconify('figma'),
  Jupyter: iconify('jupyter'),
  PyTorch: iconify('pytorch-icon'),
  TensorFlow: iconify('tensorflow'),
  Chroma: iconify('chroma'),
  Pinecone: iconify('pinecone'),
  Deepgram: iconify('deepgram', 'simple-icons'),
  Supabase: iconify('supabase-icon'),
  Prisma: iconify('prisma'),
  SQLite: iconify('sqlite'),
  Prometheus: iconify('prometheus'),
  Grafana: iconify('grafana'),
  Kubernetes: iconify('kubernetes'),
  AWS: iconify('aws'),
  Git: iconify('git-icon'),
  'VS Code': iconify('visual-studio-code'),
  'shadcn/ui': iconify('shadcnui', 'simple-icons'),
  Motion: iconify('framer', 'simple-icons'),
  Vitest: iconify('vitest'),
  Temporal: iconify('temporal', 'simple-icons'),
};

const WEEK_TECH = {
  '1-theory': ['OpenAI', 'Claude', 'Python', 'GitHub', 'HuggingFace', 'Jupyter', 'Docker', 'TypeScript'],
  '1-practice': ['Claude', 'GitHub', 'Playwright', 'Docker', 'TypeScript', 'Node.js', 'Pytest', 'GitHub Actions'],
  '2-theory': ['HuggingFace', 'NVIDIA', 'Redis', 'OpenAI', 'PyTorch', 'TensorFlow', 'Jupyter', 'Python'],
  '2-practice': ['Claude', 'React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'Storybook', 'Figma'],
  '3-theory': ['Claude', 'OpenAI', 'Pydantic', 'Python', 'GitHub', 'Mermaid', 'TypeScript', 'Jupyter'],
  '3-practice': ['Claude', 'Next.js', 'PostgreSQL', 'Playwright', 'TypeScript', 'Node.js', 'Prisma', 'Docker'],
  '4-theory': ['HuggingFace', 'Qdrant', 'LangChain', 'Python', 'Chroma', 'Pinecone', 'PostgreSQL', 'OpenAI'],
  '4-practice': ['OpenAI', 'React', 'FastAPI', 'Pydantic', 'Deepgram', 'Python', 'Docker', 'PostgreSQL'],
  '5-theory': ['Qdrant', 'LangChain', 'Pytest', 'OpenTelemetry', 'Chroma', 'Pinecone', 'Prometheus', 'Grafana'],
  '5-practice': ['Claude', 'Mermaid', 'GitHub', 'GitHub Actions', 'TypeScript', 'Node.js', 'Docker', 'Pytest'],
  '6-theory': ['MCP', 'FastAPI', 'Pydantic', 'Python', 'Node.js', 'TypeScript', 'Docker', 'GitHub'],
  '6-practice': ['Pytest', 'Qdrant', 'OpenTelemetry', 'GitHub Actions', 'LangChain', 'Chroma', 'Prometheus', 'Docker'],
  '7-theory': ['Claude', 'MCP', 'OpenAI', 'Pydantic', 'LangChain', 'OpenTelemetry', 'Python', 'GitHub'],
  '7-practice': ['Qdrant', 'HuggingFace', 'LangChain', 'Python', 'Chroma', 'Pinecone', 'Pytest', 'OpenTelemetry'],
  '8-theory': ['Claude', 'OpenAI', 'GitHub', 'OpenTelemetry', 'LangChain', 'Pydantic', 'Python', 'GitHub Actions'],
  '8-practice': ['PostgreSQL', 'FastAPI', 'MCP', 'Docker', 'Prisma', 'Redis', 'Python', 'Pytest'],
  '9-theory': ['Redis', 'PostgreSQL', 'Qdrant', 'Python', 'Chroma', 'Pydantic', 'OpenTelemetry', 'Prometheus'],
  '9-practice': ['Claude', 'MCP', 'Pydantic', 'OpenTelemetry', 'LangChain', 'FastAPI', 'Python', 'Docker'],
  '10-theory': ['Claude', 'Pydantic', 'OpenTelemetry', 'Docker', 'MCP', 'GitHub', 'Prometheus', 'Grafana'],
  '10-practice': ['Redis', 'PostgreSQL', 'Qdrant', 'Python', 'Chroma', 'Pydantic', 'Pytest', 'OpenTelemetry'],
  '11-theory': ['OWASP', 'MCP', 'OpenTelemetry', 'GitHub Actions', 'Prometheus', 'Grafana', 'Docker', 'GitHub'],
  '11-practice': ['Claude', 'Pydantic', 'OpenTelemetry', 'Docker', 'MCP', 'GitHub', 'Prometheus', 'Pytest'],
  '12-theory': ['Ollama', 'HuggingFace', 'OpenAI', 'Claude', 'PyTorch', 'TensorFlow', 'NVIDIA', 'Python'],
  '12-practice': ['OpenAI', 'Claude', 'Ollama', 'OpenTelemetry', 'Redis', 'Prometheus', 'Grafana', 'Docker'],
  '13-practice': ['OWASP', 'Pytest', 'OpenTelemetry', 'GitHub Actions', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
};

// Marketing-facing weekly stack. Unlike WEEK_TECH (the compact hero dock), this
// deliberately exposes each named library, protocol and cloud service as its own
// tag. Groups make it clear what is built in class versus compared or used as
// engineering infrastructure.
const PRACTICE_TECH_STACK = {
  1: {
    mechanisms: ['AI System Layers', 'LLM API', 'Model / Provider', 'Prompt Contract', 'Structured Output', 'Tool Boundary', 'Human-in-the-Loop', 'AI Engineer', 'FDE', 'AI Builder'],
    oss: ['OpenAI SDK', 'Anthropic SDK', 'Google GenAI SDK', 'tiktoken', 'Hugging Face Transformers', 'LiteLLM', 'Pydantic', 'Zod'],
    build: ['Claude Code', 'OpenAI Codex CLI', 'GitHub Spec Kit', 'Aider', 'GitHub', 'Docker', 'Playwright'],
  },
  2: {
    mechanisms: ['Tokenization', 'Token IDs', 'Input Embeddings', 'Transformer', 'Attention', 'Context Window', 'Lost-in-the-Middle', 'Prefill', 'Decode', 'KV Cache', 'Token Budget', 'TTFT'],
    oss: ['tiktoken', 'Hugging Face Tokenizers', 'Hugging Face Transformers', 'vLLM', 'llama.cpp', 'FlashAttention', 'PagedAttention', 'Prompt Cache', 'Prefix Cache', 'Response Cache', 'Semantic Cache'],
    build: ['Claude Code', 'Claude Design', 'React', 'Next.js', 'shadcn/ui', 'Storybook', 'Playwright'],
  },
  3: {
    mechanisms: ['Context Inventory', 'Selection Policy', 'Instruction Hierarchy', 'Context Assembly', 'Token Allocation', 'Compaction', 'Eviction', 'Provenance', 'Trust Boundary', 'JSON Schema', 'Structured Output', 'Context Observability'],
    oss: ['tiktoken', 'Pydantic', 'Zod', 'Instructor', 'Outlines', 'Guardrails AI', 'LangChain', 'LlamaIndex'],
    build: ['Claude Code', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'OpenAPI', 'Playwright', 'Mermaid'],
  },
  4: {
    mechanisms: ['Embeddings', 'Vector Similarity', 'Chunking', 'Top-k Retrieval', 'Metadata Filter', 'Grounding', 'Citation', 'No-Answer', 'Speech-to-Text', 'Voice Activity Detection', 'Human Confirmation'],
    oss: ['Sentence Transformers', 'FAISS', 'Qdrant', 'pgvector', 'Chroma', 'Pinecone', 'whisper.cpp', 'faster-whisper', 'Silero VAD', 'OpenAI Whisper', 'Deepgram'],
    build: ['MediaRecorder API', 'Web Audio API', 'FastAPI', 'Pydantic', 'PostgreSQL', 'AWS S3'],
  },
  5: {
    mechanisms: ['Golden Dataset', 'Retrieval Metrics', 'Context Precision', 'Context Recall', 'Faithfulness', 'Answer Relevance', 'LLM-as-a-Judge', 'Human Rubric', 'Baseline', 'Regression Test', 'Trace'],
    oss: ['RAGAS', 'DeepEval', 'Langfuse', 'Arize Phoenix', 'Promptfoo', 'OpenTelemetry', 'Mermaid', 'C4 Model', 'MkDocs Material'],
    build: ['Claude Skills', 'Claude Hooks', 'GitHub Spec Kit', 'Pytest', 'GitHub Actions', 'markdownlint-cli2', 'Lychee'],
  },
  6: {
    mechanisms: ['Function Calling', 'Tool Schema', 'Tool Discovery', 'JSON-RPC', 'MCP Server', 'MCP Client', 'Transport', 'Authentication', 'Permission Boundary', 'Deterministic Eval', 'Regression Gate'],
    oss: ['MCP TypeScript SDK', 'MCP Python SDK', 'FastMCP', 'MCP Inspector', 'Pi Agent', 'RAGAS', 'DeepEval', 'Langfuse', 'Arize Phoenix', 'Promptfoo', 'Pydantic', 'Zod'],
    build: ['CLI / stdio', 'Pytest', 'OpenTelemetry', 'Docker', 'GitHub Actions', 'AWS CloudWatch'],
  },
  7: {
    mechanisms: ['Agent Loop', 'ReAct', 'Plan-Act-Observe', 'Tool Calling', 'Agent State', 'Stop Condition', 'Human Approval', 'Failure Recovery', 'Hybrid Retrieval', 'Reranking', 'Citation Grounding'],
    oss: ['Claude Agent SDK', 'OpenAI Agents SDK', 'PydanticAI', 'LangGraph', 'CrewAI', 'AutoGen', 'Sentence Transformers', 'FAISS', 'Qdrant', 'pgvector', 'RAGAS', 'Langfuse'],
    build: ['FastAPI', 'Pydantic', 'OpenTelemetry', 'Docker', 'AWS OpenSearch', 'AWS S3'],
  },
  8: {
    mechanisms: ['Multi-Agent', 'Orchestrator', 'Supervisor', 'Router', 'Hand-off', 'Delegation Contract', 'Shared State', 'Conflict Resolution', 'Data Layer', 'Repository Pattern', 'Domain Service', 'MCP Adapter'],
    oss: ['Claude Agent SDK', 'Claude Managed Agents', 'LangGraph', 'OpenAI Agents SDK', 'AutoGen', 'CrewAI', 'PydanticAI', 'MCP SDK', 'FastMCP', 'MCP Inspector'],
    build: ['Prisma ORM', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'OpenTelemetry', 'Docker', 'AWS IAM'],
  },
  9: {
    mechanisms: ['Agent State', 'Bounded Loop', 'ReAct', 'Tool Budget', 'Approval Gate', 'Checkpoint', 'Short-Term Memory', 'Long-Term Memory', 'Episodic Memory', 'Semantic Memory', 'Memory Scope'],
    oss: ['Claude Agent SDK', 'OpenAI Agents SDK', 'PydanticAI', 'LangGraph', 'LangGraph Checkpointer', 'LangGraph Store', 'Mem0', 'Letta', 'LangMem', 'Langfuse'],
    build: ['Pydantic', 'Zod', 'OpenTelemetry', 'Redis', 'PostgreSQL', 'pgvector'],
  },
  10: {
    mechanisms: ['Memory Write Gate', 'Confirmed Facts', 'Provenance', 'TTL', 'Scoped Retrieval', 'Conflict Handling', 'Correction', 'Deletion', 'Memory Poisoning', 'Agent Lifecycle', 'Checkpoint / Resume'],
    oss: ['Mem0', 'Letta', 'LangMem', 'LangGraph Store', 'LangGraph', 'Temporal', 'pgvector', 'Qdrant', 'Langfuse', 'OpenTelemetry'],
    build: ['PostgreSQL', 'Redis', 'Pydantic', 'Zod', 'AWS RDS', 'AWS KMS'],
  },
  11: {
    mechanisms: ['Production Harness', 'Run Lifecycle', 'Policy Hooks', 'Budget', 'Termination', 'Checkpoint / Resume', 'Idempotency', 'A2A Governance', 'Identity', 'Delegation', 'PII Defense', 'Prompt Injection'],
    oss: ['Claude Agent SDK', 'LangGraph', 'Temporal', 'Open Policy Agent', 'Microsoft Presidio', 'A2A SDK', 'Guardrails AI', 'Promptfoo', 'PyRIT', 'Langfuse', 'OpenTelemetry'],
    build: ['MCP', 'GitHub Actions', 'Prometheus', 'Grafana', 'AWS ECS', 'AWS CloudWatch'],
  },
  12: {
    mechanisms: ['Task Taxonomy', 'Capability Matrix', 'Model Routing', 'Provider Allowlist', 'Risk Policy', 'Data Residency', 'Fallback', 'Refusal', 'Human Escalation', 'Cost Budget', 'Latency SLO', 'Router Evaluation'],
    oss: ['LiteLLM', 'vLLM', 'Ollama', 'RouteLLM', 'OpenAI', 'Claude', 'Gemini', 'Hugging Face', 'Promptfoo', 'Langfuse', 'OpenTelemetry'],
    build: ['Redis', 'Docker', 'NVIDIA', 'Prometheus', 'Grafana', 'AWS EC2'],
  },
  13: {
    mechanisms: ['Production Evals', 'Deterministic Checks', 'LLM-as-a-Judge', 'Regression Gate', 'Red Team', 'Prompt Injection', 'Memory Poisoning', 'PII Leakage', 'Permission Test', 'Latency / Cost', 'Release Gate', 'Rollback'],
    oss: ['RAGAS', 'DeepEval', 'Promptfoo', 'Langfuse', 'OpenTelemetry', 'PyRIT', 'garak', 'Microsoft Presidio', 'Open Policy Agent', 'OWASP'],
    build: ['GitHub Actions', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes', 'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS Secrets Manager', 'AWS CloudWatch'],
  },
};

const PRACTICE_TECH_LOGO_KEY = {
  'Claude Code': 'Claude', 'Claude Design': 'Claude', 'Claude Skills': 'Claude', 'Claude Hooks': 'Claude',
  'Claude Agent SDK': 'Claude', 'Claude Managed Agents': 'Claude', 'Anthropic SDK': 'Claude', Claude: 'Claude',
  'OpenAI Codex CLI': 'OpenAI', 'OpenAI Agents SDK': 'OpenAI', 'OpenAI SDK': 'OpenAI', 'OpenAI Whisper': 'OpenAI', OpenAI: 'OpenAI',
  'Google GenAI SDK': 'Google', Gemini: 'Google',
  Git: 'Git', GitHub: 'GitHub', 'GitHub Spec Kit': 'GitHub', 'GitHub Actions': 'GitHub Actions', 'VS Code': 'VS Code',
  React: 'React', 'Next.js': 'Next.js', TypeScript: 'TypeScript', 'Node.js': 'Node.js', 'Tailwind CSS': 'Tailwind',
  'shadcn/ui': 'shadcn/ui', Storybook: 'Storybook', Figma: 'Figma', Motion: 'Motion', Vitest: 'Vitest',
  Playwright: 'Playwright', Pytest: 'Pytest', Python: 'Python', Docker: 'Docker', PostgreSQL: 'PostgreSQL',
  'Prisma ORM': 'Prisma', Zod: 'Zod', Pydantic: 'Pydantic', FastAPI: 'FastAPI', Redis: 'Redis',
  Qdrant: 'Qdrant', Chroma: 'Chroma', Pinecone: 'Pinecone', 'Hugging Face': 'HuggingFace',
  'Hugging Face Transformers': 'HuggingFace', 'Hugging Face Tokenizers': 'HuggingFace', OpenTelemetry: 'OpenTelemetry', Langfuse: 'Langfuse',
  Mermaid: 'Mermaid', Prometheus: 'Prometheus', Grafana: 'Grafana', Kubernetes: 'Kubernetes', OWASP: 'OWASP',
  Ollama: 'Ollama', NVIDIA: 'NVIDIA', Temporal: 'Temporal', MCP: 'MCP', FastMCP: 'MCP',
  'MCP TypeScript SDK': 'MCP', 'MCP Python SDK': 'MCP', 'MCP Inspector': 'MCP', 'MCP SDK': 'MCP', 'A2A SDK': 'Google',
  LangChain: 'LangChain', LangGraph: 'LangChain', 'LangGraph Checkpointer': 'LangChain', 'LangGraph Store': 'LangChain', LangMem: 'LangChain', LangSmith: 'LangSmith',
  PydanticAI: 'Pydantic', 'Microsoft Presidio': 'Microsoft',
  'AWS IAM': 'AWS', 'AWS EC2': 'AWS', 'AWS S3': 'AWS', 'AWS RDS': 'AWS', 'AWS KMS': 'AWS',
  'AWS ECS': 'AWS', 'AWS CloudWatch': 'AWS', 'AWS OpenSearch': 'AWS', 'AWS Secrets Manager': 'AWS',
};

const PRACTICE_SYSTEM_FLOW = {
  1: ['PRD 与验收标准', 'Repo Context', 'AI Coding', 'Review 与工程证据'],
  2: ['Design Brief', 'Design System', '完整产品 UI', 'Product Design Review'],
  3: ['Product UI', 'API 与权限', 'Database', 'E2E Test 与 MVP'],
  4: ['Voice Input', 'Speech-to-Text', 'Editable Transcript', 'Human Confirm'],
  5: ['Feature Spec', 'Work Plan', 'Docs / ADR', 'Hooks 与 Skills'],
  6: ['Golden Dataset', 'Checks 与 RAGAS', 'Baseline Run', 'Stop / Go Gate'],
  7: ['Policy Corpus', 'Chunk 与 Index', 'Retrieve 与 Cite', 'Eval Evidence'],
  8: ['Data Sources', 'Repository', 'Domain Service', 'MCP 与 CLI'],
  9: ['Agent State', 'Plan / ReAct', 'MCP Tools', 'Approval 与 Trace'],
  10: ['Confirmed Facts', 'Memory Write Gate', 'Scoped Retrieval', 'Correct / Delete'],
  11: ['Agent Run', 'Hooks 与 Policy', 'Checkpoint / Resume', 'Trace 与 Escalation'],
  12: ['Task 与 Risk', 'Router Policy', 'Model Adapters', 'Eval 与 Fallback'],
  13: ['Eval 与 Red Team', 'Release Gate', 'Demo 与 Defense', 'Evidence Pack'],
};

// Mirrors the public website Skills Tower in:
// jr-academy-web-zh/src/app/[locale]/program-course/ai-engineer-bootcamp/content.ts
const WEBSITE_SKILLS_TOWER = [
  ['L01', 'Foundation Layer', '基座层', '#46D9E6', ['Python', 'LLM API', 'Transformer', 'ML/DL Basics', 'Model Selection', 'Tokenization']],
  ['L02', 'Context Engineering', '上下文工程', '#7AD7E8', ['Prompt Strategy', 'Context Window', 'Token Budget', 'Multi-Turn State', 'System Design']],
  ['L03', 'RAG', '检索增强生成 · 知识检索层', '#9D7CFF', ['Vector Search', 'Hybrid Retrieval', 'Re-ranking', 'GraphRAG', 'Knowledge Graph', 'Chunk Strategy']],
  ['L04', 'Capability Layer', '能力层', '#B99AFF', ['Function Calling', 'Structured Output', 'Tool Use', 'MCP Protocol', 'JSON Schema']],
  ['L05', 'Agent Core', 'Agent 核心', '#E979A8', ['OpenAI Agents SDK', 'Claude Agent SDK', 'Google ADK', 'Agent Loop', 'Tool Decision']],
  ['L06', 'Multi-Agent & Orchestration', '多 Agent 编排', '#FF746B', ['A2A Protocol', 'Orchestration', 'Hand-off', 'Specialist Agents', 'Coordination']],
  ['L07', 'Memory System', '记忆系统', '#F59E5B', ['Short-term', 'Long-term', 'Episodic', 'Semantic', 'Memory Decay']],
  ['L08', 'Harness Engineering', '运行控制与治理', '#F6C75A', ['Claude Code', 'SubAgent', 'Custom Hooks', 'MCP Tools', 'CLI Architecture']],
  ['L09', 'Model Layer', '模型层', '#98D76B', ['Cost Optimization', 'Self-hosting', 'QLoRA', 'Unsloth', 'HuggingFace', 'Open-source LLM']],
  ['L10', 'Observability & Evals', '评测与监控', '#63D88D', ['LangSmith', 'W&B', 'Custom Evals', 'Regression Test', 'Token Cost Monitor', 'Latency P95']],
];

const SKILLS_TOWER_LOGO_KEY = {
  Python: 'Python',
  'LLM API': 'OpenAI',
  Transformer: 'HuggingFace',
  'MCP Protocol': 'MCP',
  'OpenAI Agents SDK': 'OpenAI',
  'Claude Agent SDK': 'Claude',
  'Google ADK': 'Google',
  'Claude Code': 'Claude',
  'MCP Tools': 'MCP',
  HuggingFace: 'HuggingFace',
  LangSmith: 'LangSmith',
  'W&B': 'W&B',
};

const THEORY_SUPPORT = {
  1: {
    heading: '开课前先把环境、节奏和 LLM 基本判断跑通',
    promise: '不是听完概念才回家配置；第一周就拥有能持续开发的 AI Engineer 工作台。',
    video: [['L21', '看懂完整学习路线', '知道 13 周怎样推进、每周交什么，以及理论、实践和项目如何配合。']],
    lab: [
      ['L17', '第一次真实操作 LLM', '直接观察输入变化如何影响回答，不再把模型当成神秘黑盒。'],
      ['L18', '把核心概念变成判断', '用交互练习理解 token、context 与模型行为之间的关系。'],
    ],
    quest: [['L16a', '搭好个人 AI Engineer 工作台', '验证 repo、terminal、runtime 与开发工具，后续每周可以直接继续构建。']],
  },
  2: {
    heading: '从 Token 与 Context Window，继续看懂 KV Cache 和生产缓存策略',
    promise: '判断模型该看什么、哪些计算可以复用，并用 TTFT、Cache Hit Rate、Tokens Saved、成本和权限边界验证优化。',
    video: [
      ['L29', '拆开 Transformer 的信息流', '看懂输入如何经过 attention 与层级计算，最终形成输出。'],
      ['L30', '看懂文字如何进入模型', '理解 Input Embeddings 如何把 token 转成模型可以处理的数字表示。'],
    ],
    lab: [
      ['L31', '动手观察 Token 与 Attention', '比较 tokenizer、内容位置和长度如何影响模型处理。'],
      ['L32', '完成一次 Context 与 Cache 实验', '比较重复前缀的 cache hit/miss，并记录 TTFT、tokens saved、延迟与成本。'],
    ],
    quest: [],
  },
  3: {
    heading: '把 Context Engineering 从 Prompt Template 升级成完整信息生命周期',
    promise: '完成可复用的 Context Architecture Blueprint，解释信息从哪里来、为何被选择、如何验证，以及何时压缩或清除。',
    video: [['L37b', '建立 Context Engineering 全景', '先分清 instruction、data、memory、tools 与 output contract 各自负责什么。']],
    lab: [
      ['L38', '组装一份可靠 Context', '把任务、资料和约束放进正确位置，并比较前后输出差异。'],
      ['L40', '识别推理方法的适用边界', '比较分步推理模式，不把 Chain of Thought 当成万能答案。'],
      ['L41', '写出有责任边界的 System Prompt', '明确角色、权限、拒答条件和人工确认点。'],
      ['L43', '让输出通过 JSON Schema 验证', '把自由文本变成后端可以接收、检查和保存的结构化数据。'],
    ],
    quest: [['L37a', '交付 Context Architecture Blueprint', '覆盖 inventory、selection、assembly、validation、observability 与 lifecycle，并映射三个未来 AI 场景。']],
  },
  4: {
    heading: '从 Embeddings 入门，一步跑通有引用、会拒答的本地 RAG',
    promise: '不只会调用向量数据库；你会知道资料怎样进入系统、怎样被找到、为什么能成为证据。',
    video: [
      ['L54', '理解 Embeddings 的工程作用', '看懂文字如何变成可比较的向量，以及它适合解决什么问题。'],
      ['L57', '分清 Embedding Model 与 Chat Model', '避免用错模型，并能解释检索模型和生成模型如何协作。'],
    ],
    lab: [['L55', '亲手完成 RAG 基础链路', '导入资料、切分、检索并验证答案是否真正来自指定内容。']],
    quest: [['L60a', '交付第一个可运行 RAG', '在本机跑通完整流程，展示 grounded answer、citation 与 no-answer 行为。']],
  },
  5: {
    heading: '把“回答看起来不错”升级成有基线、有数据的 RAG 质量报告',
    promise: '你会建立测试集、比较版本并追踪失败，而不是靠几次人工试问判断系统好坏。',
    video: [
      ['L87', '看懂 RAG 质量指标', '分清 retrieval、faithfulness、answer quality 分别在测什么。'],
      ['L90', '掌握 RAGAS 评测流程', '从 golden cases 到指标结果，建立可重复运行的评测方式。'],
      ['L91', '让每次检索与回答可追踪', '用 Langfuse 查看输入、检索结果、模型输出、延迟和失败位置。'],
    ],
    lab: [
      ['L86', '运行一组 LLM Evaluation', '用固定案例比较版本表现，发现平均分掩盖不了的失败类型。'],
      ['L88', '比较 Prompt 版本', '只改变一个变量，判断改动到底让结果变好还是变差。'],
    ],
    quest: [['L85a', '交付一份完整 RAGAS 报告', '展示测试集、基线、指标、失败案例和下一轮优化决策。']],
  },
  6: {
    heading: '从一次 Tool Call 走到可测试、可发布的 MCP 能力',
    promise: '理解 schema、权限和错误边界，能把企业能力安全地暴露给 AI 使用。',
    video: [
      ['L98', '看懂 Function Calling 与 Tool Use', '掌握模型选工具、生成参数、接收结果和处理失败的完整过程。'],
      ['L103', '读懂 MCP Server / Client 连接方式', '从源码视角理解协议消息、工具发现和调用链路。'],
    ],
    lab: [
      ['L99', '实现受校验的 Tool Call', '定义 schema、验证参数，并处理 timeout、错误和无权限情况。'],
      ['L102', '构建一个 MCP Server', '把真实能力包装成 AI 可发现、可调用、可测试的 MCP Tool。'],
    ],
    quest: [['L102a', '发布第一个 MCP Server', '补齐说明、测试和失败处理，让别人可以连接并验证你的工具。']],
  },
  7: {
    heading: '把 Agent 从循环 Demo 做成能规划、调用工具并在失败时停下的系统',
    promise: '你会比较框架、实现 ReAct，并知道哪些任务应该使用 workflow，哪些才值得使用 Agent。',
    video: [
      ['L111', '建立 Agent 基础判断', '分清 workflow、tool-using assistant 与 autonomous agent 的边界。'],
      ['L115', '比较主流 Agent SDK', '从 state、tools、approval、observability 和 lock-in 选择合适框架。'],
    ],
    lab: [
      ['L113', '实现一个 ReAct Agent', '让模型在观察、决策、调用工具和读取结果之间形成受控循环。'],
      ['L114', '比较 Agent 设计模式', '针对不同任务选择 router、planner、worker 或 reviewer。'],
      ['L117', '用同一任务比较 Agent SDK', '用运行结果而不是宣传文档判断框架差异。'],
    ],
    quest: [],
  },
  8: {
    heading: '让多个 Agent 有明确分工，而不是把同一模型复制很多份',
    promise: '完成角色、共享状态、路由和冲突处理，能解释 Multi-Agent 什么时候值得增加复杂度。',
    video: [],
    lab: [
      ['L123', '搭建多 Agent 协作流程', '为不同角色划分输入、工具、输出和责任边界。'],
      ['L125', '用 LangGraph 编排状态流转', '实现可观察、可暂停、可恢复的多节点工作流。'],
    ],
    quest: [['L125a', '交付一套 Multi-Agent Workflow', '展示图结构、共享状态、失败路径和人工接管点。']],
  },
  9: {
    heading: '让 Agent 记得有用事实，同时防止错误、越权和过期信息长期污染系统',
    promise: '实现 memory write gate、scope、TTL、更正和删除，留下完整可审计记录。',
    video: [
      ['L130', '看懂 Agent Ops 与运行追踪', '用 trace 找到 Agent 在哪一步读取、写入或误用了信息。'],
      ['L135a', '分清 Context 与 Memory', '理解短期上下文、长期记忆和外部知识库各自应该保存什么。'],
    ],
    lab: [['L134', '实现安全的 Agent Memory', '写入 confirmed facts，并验证检索范围、冲突处理与删除。']],
    quest: [['L134a', '给 Agent 装上长期记忆', '提交 memory schema、write policy、测试记录和 poisoning 防护证据。']],
  },
  10: {
    heading: '把 Agent 核心循环装进 Production Harness，获得真正的运行控制权',
    promise: '工具、预算、checkpoint、hooks、approval 和 trace 不再散落在业务代码里。',
    video: [
      ['L142', '拆解 Harness 工程化结构', '看懂 runtime、tool registry、state、policy 与 observability 怎样组合。'],
      ['L146', '把能力封装成可复用 Skill', '让同一能力可以被发现、版本管理、测试和复用。'],
      ['L147', '学习 Claude Code Skills 实践', '从真实案例理解指令、资源、边界和验证方式。'],
    ],
    lab: [
      ['L141', '实现 Tool Loop', '完成工具选择、参数校验、结果回传、预算和终止条件。'],
      ['L143', '实现 Harness Hooks', '在调用前后加入权限、日志、评测和失败处理。'],
    ],
    quest: [['L148', '交付个人 Agent Harness', '用可运行代码展示 lifecycle、checkpoint、approval、trace 与恢复能力。']],
  },
  11: {
    heading: '把 Governance 和 Safety 做成上线门槛，而不是写在 PPT 里的原则',
    promise: '建立 eval baseline、攻击测试、风险责任和发布证据，能回答企业面试中的治理问题。',
    video: [
      ['L126', 'A2A Governance：身份、信任与委派边界', '区分 MCP 的 Agent-to-Tool 与 A2A 的 Agent-to-Agent，并治理身份、授权、数据共享、审计和责任。'],
      ['L168', '建立 AI Evaluation Engineering 全景', '把 eval set、baseline、自动检查、人工评分和 regression gate 串成系统。'],
    ],
    lab: [
      ['L169', '运行 LLM Evaluation', '检查准确性、引用、schema、权限和高风险失败。'],
      ['L170', '运行 Prompt Regression', '防止新提示词修好一个案例，却破坏其他关键场景。'],
      ['L172', '测试 Prompt Injection 防御', '验证外部资料和用户输入无法绕过系统权限。'],
      ['L173', '测试幻觉与拒答行为', '检查缺少证据时系统是否拒答、升级人工并保留记录。'],
    ],
    quest: [['L171b', '交付 AI Governance Pack', '完成 risk tier、RACI、system card、上线审批和 incident evidence。']],
  },
  12: {
    heading: '学会选择模型，而不是把所有任务都交给最贵、最大的一个模型',
    promise: '根据质量、成本、延迟、隐私和 fallback 设计 Model Router，并判断何时才值得 Fine-Tuning。',
    video: [
      ['L149', '建立 Model Selection 决策框架', '比较 closed、open-weight 与 fine-tuned models 的工程取舍。'],
      ['L164', '判断 Fine-Tuning 的真正角色', '分清 Prompt、RAG、Tools 与 Fine-Tuning 分别解决什么问题。'],
      ['L165', '看懂 PEFT、LoRA 与 QLoRA', '理解低成本微调的机制、数据要求和维护代价。'],
    ],
    lab: [
      ['L162', '完成一次 SFT 实验', '建立 baseline、训练数据和评测结果，不用单个示例宣称有效。'],
      ['L166', '体验偏好对齐', '理解 RLHF / DPO 如何改变模型偏好，以及它不能解决什么。'],
    ],
    quest: [['L149a', '在本机运行 Open-Weight Model', '用 Ollama 跑通模型，记录硬件、延迟、质量和隐私取舍。']],
  },
};

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const unique = (items) => [...new Set(items)];
const termPattern = /[A-Za-z][A-Za-z0-9_+./-]*(?:[ ][A-Za-z][A-Za-z0-9_+./-]*)*/g;

function technicalTerms(title) {
  return unique((title.match(termPattern) || []).map((term) => term.replace(/^[ ./-]+|[ ./-]+$/g, '')).filter(Boolean));
}

const CANONICAL_TECH_TERMS = new Map(Object.entries({
  ai: 'AI', ml: 'ML', llm: 'LLM', genai: 'GenAI', api: 'API', rag: 'RAG', ragas: 'RAGAS',
  mcp: 'MCP', cli: 'CLI', sdk: 'SDK', json: 'JSON', ui: 'UI', prd: 'PRD', adlc: 'ADLC',
  sql: 'SQL', aws: 'AWS', gpu: 'GPU', pii: 'PII', raci: 'RACI', a2a: 'A2A', sft: 'SFT', fde: 'FDE',
  kv: 'KV', ttft: 'TTFT', tpot: 'TPOT', mvp: 'MVP',
  'design.md': 'DESIGN.md', 'readme': 'README', 'claude.md': 'CLAUDE.md', 'skill.md': 'SKILL.md',
  adr: 'ADR', posttooluse: 'PostToolUse', 'docs-as-code': 'Docs-as-Code', 'docs-drift': 'Docs-Drift',
  'spec-to-work': 'Spec-to-Work', 'update-docs': 'Update-Docs', 'non-goals': 'Non-Goals',
  'dependency-aware': 'Dependency-Aware', 'ai-native': 'AI-Native', 'mermaid/c4': 'Mermaid/C4',
  peft: 'PEFT', lora: 'LoRA', qlora: 'QLoRA', rlhf: 'RLHF', dpo: 'DPO', mteb: 'MTEB',
  ttl: 'TTL', qa: 'QA', 'ci/cd': 'CI/CD', 'top-k': 'Top-k', top_p: 'Top-p', react: 'ReAct',
  langgraph: 'LangGraph', langfuse: 'Langfuse', langsmith: 'LangSmith', mem0: 'Mem0',
}));
const LOWERCASE_TITLE_WORDS = new Set(['and', 'or', 'of', 'the', 'in', 'to', 'for', 'vs']);

function formatTechnicalTerm(term) {
  const whole = CANONICAL_TECH_TERMS.get(term.toLowerCase());
  if (whole) return whole;
  return term.split(/\s+/).map((word, wordIndex) => {
    const canonicalWord = CANONICAL_TECH_TERMS.get(word.toLowerCase());
    if (canonicalWord) return canonicalWord;
    return word.split(/([/-])/).map((part, partIndex) => {
      if (part === '/' || part === '-') return part;
      const canonicalPart = CANONICAL_TECH_TERMS.get(part.toLowerCase());
      if (canonicalPart) return canonicalPart;
      const lower = part.toLowerCase();
      if ((wordIndex > 0 || partIndex > 0) && LOWERCASE_TITLE_WORDS.has(lower)) return lower;
      return lower ? `${lower[0].toUpperCase()}${lower.slice(1)}` : lower;
    }).join('');
  }).join(' ');
}

function dataUri(buffer, mime) {
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

async function loadTechLogos() {
  return Object.fromEntries(await Promise.all(Object.entries(TECH_LOGOS).map(async ([name, url]) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unable to load ${name} logo: ${response.status}`);
    return [name, dataUri(Buffer.from(await response.arrayBuffer()), 'image/svg+xml')];
  })));
}

function techLogos(week, kind, assets, showNames = false) {
  const stack = WEEK_TECH[`${week}-${kind}`] || [];
  return stack.map((name) => `<span class="tech-logo" title="${esc(name)}"><img src="${assets[name]}" alt="${esc(name)} logo"/>${showNames ? `<b>${esc(name)}</b>` : ''}</span>`).join('');
}

function techDock(week, kind, assets) {
  return `<div class="tech-dock"><small>WEEKLY STACK</small><div>${techLogos(week, kind, assets)}</div></div>`;
}

function practiceTechTags(week, assets) {
  const stack = PRACTICE_TECH_STACK[week];
  if (!stack) return '';
  const groups = [
    ['mechanisms', 'AI MECHANISMS / 原理'],
    ['oss', 'AI LIBRARIES & OSS'],
    ['build', 'BUILD / 工程实现'],
  ];
  return groups.map(([key, label]) => `<section class="practice-tag-group ${key}">
    <strong>${label}</strong>
    <div>${stack[key].map((name) => {
      const logoKey = PRACTICE_TECH_LOGO_KEY[name];
      const logo = logoKey ? assets[logoKey] : null;
      return `<b class="practice-tech-tag${logo ? ' has-logo' : ''}" title="${esc(name)}">${logo ? `<img src="${logo}" alt=""/>` : ''}<span>${esc(name)}</span></b>`;
    }).join('')}</div>
  </section>`).join('');
}

function practiceStack(week, assets, accent) {
  const flow = PRACTICE_SYSTEM_FLOW[week];
  const toolCount = Object.values(PRACTICE_TECH_STACK[week] || {}).flat().length;
  return `<section class="practice-stack" style="--accent:${accent}">
    <div class="practice-system-flow">
      <header><small>本周系统关系图</small><strong>课堂上会把这些组件真正连接起来</strong></header>
      <div class="flow-nodes">${flow.map((node, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${esc(node)}</span>`).join('')}</div>
    </div>
    <div class="practice-tools"><header><small>本周完整 AI Engineering Stack · ${toolCount} 个技术点</small><strong>合并 Theory + Practice；AI 原理与开源生态优先，通用全栈工具降为辅助</strong></header><div class="practice-tag-groups">${practiceTechTags(week, assets)}</div></div>
  </section>`;
}

function pageFooter(pageNo) {
  return `<footer class="page-footer">
    <span>第七期 · Theory + Practice 双 Live · Enterprise AI Engineering</span>
    <span>${String(pageNo).padStart(2, '0')} / ${TOTAL_PAGES}</span>
  </footer>`;
}

function pageShell(pageNo, className, body) {
  return `<section class="page ${className}" data-page="${pageNo}">
    ${body.trim()}
    ${pageFooter(pageNo)}
  </section>`;
}

function topBar(kicker) {
  return `<div class="topbar"><strong>JR ACADEMY&nbsp; / &nbsp;AI ENGINEER BOOTCAMP</strong><span>${esc(kicker)}</span></div>`;
}

function pill(text, tone = 'purple') {
  return `<span class="pill ${tone}">${esc(text)}</span>`;
}

function learningAssets(week, lessonIndex, accent) {
  const config = THEORY_SUPPORT[week];
  if (!config) return '';
  const groups = [
    ['video', '先建立判断', 'Video / Self-study'],
    ['lab', '再亲手跑通', 'Interactive Lab'],
    ['quest', '最后留下证据', 'Quest / Evidence'],
  ].map(([key, label, format]) => {
    const entries = config[key] || [];
    if (!entries.length) return '';
    const items = entries.map(([code, title, benefit]) => {
      const item = lessonIndex[code];
      if (!item) throw new Error(`Missing support lesson: ${code}`);
      return `<li><div><strong>${esc(title)}</strong><span>${esc(benefit)}</span></div></li>`;
    }).join('');
    return `<article><header><strong>${label}</strong><small>${format}</small></header><ul>${items}</ul></article>`;
  }).filter(Boolean);
  return `<section class="learning-assets groups-${groups.length}" style="--accent:${accent}">
    <div class="assets-title"><strong>${esc(config.heading)}</strong><span>${esc(config.promise)}</span></div>
    <div class="assets-grid">${groups.join('')}</div>
  </section>`;
}

function contextBlueprintPanel(accent) {
  const stages = [
    ['01', 'Inventory', '盘点 Instructions、Data、History、Knowledge、Tools 与 Output Contract'],
    ['02', 'Selection', '按相关性、权威性、时效、权限和来源决定 Include / Exclude'],
    ['03', 'Assembly', '确定结构、顺序、Token Allocation、冲突处理与 Validation'],
    ['04', 'Lifecycle', '管理 Just-in-time Loading、Compaction、Refresh 与 Eviction'],
    ['05', 'Trust', '建立权限边界、来源证据、Context Version 与可追踪记录'],
    ['06', 'Blueprint', '把同一架构复用到 Structured Output、RAG 与 Agent 场景'],
  ];
  return `<section class="context-blueprint" style="--accent:${accent}"><header><small>W03 CONTEXT ARCHITECTURE</small><strong>不是把 Prompt 写长，而是控制信息进入、使用、更新和清除的完整系统</strong></header><div>${stages.map(([no, title, text]) => `<article><b>${no}</b><span><strong>${title}</strong><small>${text}</small></span></article>`).join('')}</div></section>`;
}

function livePage(pageNo, week, lesson, kind, publicCopy, art, lessonIndex, techAssets, options = {}) {
  const [stage, accent] = WEEK_STYLE[week];
  const isTheory = kind === 'theory';
  const label = isTheory ? '理论课 Live' : week === 13 ? '毕业项目实践课 Live' : '实践课 Live';
  const lessonCopy = publicCopy.lessons[lesson.code];
  const agendaCopy = publicCopy.stepCopy[lesson.code];
  if (!lessonCopy || !agendaCopy || agendaCopy.length !== lesson.steps.length) {
    throw new Error(`Public copy mismatch: ${lesson.code}`);
  }
  const stepStart = options.stepStart ?? 0;
  const stepEnd = options.stepEnd ?? lesson.steps.length;
  const selectedSteps = lesson.steps.map((step, index) => ({ step, index })).slice(stepStart, stepEnd);
  const agenda = selectedSteps.map(({ step, index }) => {
    const terms = technicalTerms(step.title).map(formatTechnicalTerm);
    const termHtml = terms.length ? `<strong class="technical">${esc(terms.join(' · '))}</strong>` : '';
    return `<li class="agenda-item" style="--accent:${accent}">
      <span class="agenda-number">${String(index + 1).padStart(2, '0')}</span>
      <div class="agenda-copy">${termHtml}<p>${esc(agendaCopy[index])}</p></div>
    </li>`;
  }).join('');
  const meta = publicCopy.weekMeta[String(week)];
  const leftLabel = options.leftLabel ?? (isTheory ? '下一步能做什么' : '这周真正做出来');
  const rightLabel = options.rightLabel ?? (isTheory ? '面试能讲什么' : '为什么先不做更多');
  const leftText = options.leftText ?? (isTheory ? meta.dependency : meta.delivery);
  const rightText = options.rightText ?? (isTheory ? meta.interview : meta.boundary);
  const support = options.supportHtml ?? (isTheory
    ? learningAssets(week, lessonIndex, accent)
    : practiceStack(week, techAssets, accent));
  const displayLabel = options.part ? `${label} · ${options.part}` : label;
  const title = options.title ?? lessonCopy.title;
  const description = options.description ?? lessonCopy.description;
  return pageShell(pageNo, `live-page ${isTheory ? 'theory-page' : 'practice-page'} lesson-rows-${selectedSteps.length}`, `
    ${topBar(`Week ${String(week).padStart(2, '0')} · ${displayLabel}`)}
    <header class="live-hero" style="--accent:${accent}">
      <div class="hero-copy">
        <div class="eyebrow"><b>W${String(week).padStart(2, '0')}</b><span>${esc(stage)}</span><em>${displayLabel}</em></div>
        <h1>${esc(title)}</h1>
        <p>${esc(meta.outcome)}</p>
      </div>
      <div class="hero-visual"><img src="${art}" alt="" />${techDock(week, kind, techAssets)}</div>
    </header>
    <section class="lesson-summary">
      <div class="summary-head">${pill(displayLabel, isTheory ? 'purple' : 'accent')}<strong>${isTheory ? '核心理论课 · 原理与工程判断' : '本周独立实践课 · 老师现场带做'}</strong></div>
      <p>${esc(description)}</p>
    </section>
    <section class="agenda-block">
      <h2 style="--accent:${accent}"><span>${isTheory ? '理论课内容' : '实践课怎么推进'}</span><b>${isTheory ? '原理 · 判断 · 面试表达' : '现场搭建 · 调试 · 验收'}</b><em>${selectedSteps.length} 个课堂环节</em></h2>
      <ol class="agenda-list rows-${selectedSteps.length}" style="--agenda-rows:${Math.ceil(selectedSteps.length / 2)}">${agenda}</ol>
    </section>
    ${support}
    <section class="week-meta">
      <article><h3 style="--accent:${accent}">${leftLabel}</h3><p>${esc(leftText)}</p></article>
      <article><h3>${rightLabel}</h3><p>${esc(rightText)}</p></article>
    </section>
  `);
}

function methodPage(pageNo, art) {
  const benefits = [
    ['同时处理文字和语音', '覆盖语音转文字、人工修改、确认和结构化文档。'],
    ['回答必须有资料依据', '从政策中找证据、标出来源；找不到时明确拒答。'],
    ['Agent 能连接真实工具', '读取任务、查询资料、生成草稿，并受权限和人工审批控制。'],
    ['记忆必须可管可删', '每条长期记忆都有来源、权限、有效期，也能更正和删除。'],
    ['强法规逼出真治理', '隐私、责任人、安全攻击和上线标准都必须真正落地。'],
    ['能力可以迁移到多行业', '这套方法同样适用于金融、法律、教育、医疗和企业软件。'],
  ];
  return pageShell(pageNo, 'standard-page method-page', `
    <img class="page-art" src="${art}" alt="" />
    ${topBar('Teaching Model')}
    <header class="section-heading"><span>第五期 → 第七期</span><h1>每周两场 Live：一场把原理讲懂，一场把产品真正做出来</h1><p>第七期最大的变化不是多上几节课，而是改变学习方式。理论课负责讲清为什么，实践课负责把能力一步步做进同一套 Enterprise AI 系统。</p></header>
    <section class="course-inventory">
      <div><b>25</b><strong>正式 Live</strong><span>12 场理论 + 13 场实践</span></div>
      <div><b>34</b><strong>Video Lessons</strong><span>稳定知识随时暂停回看</span></div>
      <div><b>68</b><strong>Interactive Labs</strong><span>直接在环境中完成代码练习</span></div>
      <div><b>17</b><strong>Quests</strong><span>提交架构、评测与项目证据</span></div>
    </section>
    <div class="two-track">
      <article class="track theory"><span>01 · 理论课 Live</span><h2>12 场：把复杂概念讲成人话</h2><p>从大模型为什么会答错，到 RAG 怎样查资料、Agent 怎样使用工具、系统怎样评测和治理。保留求职面试真正会问的主干。</p><strong>你能讲清：为什么系统要这样设计</strong></article>
      <article class="track practice"><span>02 · 实践课 Live</span><h2>13 场：老师现场带你从空项目做到可上线</h2><p>每周独立一堂实践课，现场完成设计、编码、调试和验收；再逐步加入语音、RAG、Agent、长期记忆、模型选择与上线控制。</p><strong>你能展示：一套完整、可验证的作品</strong></article>
    </div>
    <h2 class="why-title">为什么选择一个复杂、强监管的业务场景？</h2>
    <div class="benefit-grid">${benefits.map(([title, text]) => `<article><i></i><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  `);
}

function mapPage(pageNo, art) {
  const stages = [
    ['01', 'W1-W3', '先做出可靠的软件产品', '明确需求、完成完整界面，再跑通任务、文档、审核和权限流程', '不用 AI 也能正常工作的产品底座', '#48C9D9'],
    ['02', 'W4-W5', '第一次接入 AI，并建立工程工作区', '先完成可确认的语音输入，再把 Spec、Work Plan、Wiki、Architecture、Hooks 与 Skills 连成持续交付系统', 'AI 功能和工程知识都开始可追踪', '#FF654E'],
    ['03', 'W6-W7', '让每个答案都有资料依据', '搭建 RAG，从政策中找证据、标引用，并用标准案例测试质量', '不是会回答，而是能证明回答可靠', '#7957FF'],
    ['04', 'W8-W10', '让 AI 成为可控的 Agent', '连接工具、自己决定下一步，同时限制权限、步数、失败处理和长期记忆', '能执行任务，也知道何时必须停下', '#EC6AA7'],
    ['05', 'W11-W13', '达到企业上线标准', '加入运行控制、模型选择、治理、质量评测、安全测试和发布判断', '一套可评估、可治理、可发布的系统', '#F3B943'],
  ];
  return pageShell(pageNo, 'standard-page map-page', `
    <img class="page-art" src="${art}" alt="" />
    ${topBar('13-Week Build Map')}
    <header class="section-heading"><span>13 场独立实践 Live</span><h1>不是 13 个零散 Demo，而是 5 次看得见的产品升级</h1><p>每一阶段都建立在上一阶段之上。你不是复制老师的片段代码，而是亲手把一个普通软件逐步升级成 Enterprise AI Agent System。</p></header>
    <div class="stage-list">${stages.map(([no, weeks, title, text, result, color]) => `<article style="--stage:${color}"><div class="stage-no"><b>${no}</b><small>${weeks}</small></div><div><h2>${title}</h2><p>${text}</p></div><strong>${result}</strong></article>`).join('')}</div>
  `);
}

function modesPage(pageNo, art) {
  const panels = [
    ['必须 Live', '需要老师现场解释取舍、纠正误区和回答问题', ['大模型、Context 与 RAG 的关键判断', 'MCP、Agent 与 ReAct 如何真正工作', 'Multi-Agent 什么时候值得使用', '长期记忆与 Agent 运行控制', 'AI 治理、模型选择和每周项目实践']],
    ['录播候选', '可以暂停、回看，并且不需要每期重复占用 Live 的知识', ['Embedding 等稳定原理', 'API 限流、重试和常见操作', 'RAG 质量评测工具与运行追踪基础', '常见 Agent SDK 与 Memory 基础', 'Fine-Tuning 与 LoRA 类方法原理']],
    ['Lab + Quest', '把“我听懂了”变成真正跑得通的代码和作品', ['Lab：练习一个具体工具或代码能力', 'Quest：提交方案、架构图和质量报告', '治理证据和阶段作品也必须提交', 'Office Hour 用来答疑，不挤占正式课程']],
    ['Routing + Fine-Tuning', '保留企业面试重点，不把时间浪费在短期工具版本上', ['W12 完成模型自动选择的理论与实践', '必须有备用模型、质量测试和人工接管', '判断 Prompt、RAG、Tools 或 Fine-Tuning 应该选哪个', '更深的 LoRA / QLoRA 实操作为选修']],
  ];
  return pageShell(pageNo, 'standard-page modes-page', `
    <img class="page-art" src="${art}" alt="" />
    ${topBar('Live / Video / Lab / Quest')}
    <header class="section-heading"><span>完整课程体系</span><h1>Live 用来解决难判断的问题；稳定知识随时复习；动手任务必须真正完成</h1><p>以前五期的课程内容不会消失。第七期把内容放到最合适的位置：需要老师带着判断和讨论的内容继续 Live，稳定知识做成录播，代码练习和项目证据进入 Lab / Quest。</p></header>
    <div class="mode-grid">${panels.map(([title, sub, bullets], i) => `<article class="mode mode-${i + 1}"><h2>${title}</h2><strong>${sub}</strong><ul>${bullets.map((b) => `<li>${b}</li>`).join('')}</ul></article>`).join('')}</div>
  `);
}

function stackPage(pageNo, art, techAssets) {
  const layers = [...WEBSITE_SKILLS_TOWER].reverse();
  return pageShell(pageNo, 'standard-page stack-page', `
    <img class="page-art" src="${art}" alt="" />
    ${topBar('10-Layer Stack')}
    <header class="section-heading stack-heading"><span>AI Engineer Skills Tower · 10-Layer Stack</span><h1>One Architecture. Ten Engineering Layers.</h1><p><strong>一套架构，十层工程能力。</strong>完整保留官网 Skills Tower 的 50+ 个技术点；英文是主标题，中文只负责快速解释。阅读顺序从底部 L01 Foundation 一路向上到 L10 Observability & Evals。</p></header>
    <section class="skills-tower" aria-label="AI Engineer 10-layer skills tower">
      ${layers.map(([layer, en, zh, color, skills]) => `<article class="skills-layer" style="--layer:${color}">
        <div class="skills-layer-head"><span>${layer}</span><div><strong>${esc(en)}</strong><small>${esc(zh)}</small></div></div>
        <div class="skills-layer-tags">${skills.map((skill) => {
          const logoKey = SKILLS_TOWER_LOGO_KEY[skill];
          const logo = logoKey ? techAssets[logoKey] : null;
          return `<b class="${logo ? 'has-logo' : ''}">${logo ? `<img src="${logo}" alt="" />` : ''}<span>${esc(skill)}</span></b>`;
        }).join('')}</div>
      </article>`).join('')}
    </section>
    <div class="tower-result"><span>STACK.COMPILE()</span><strong>Production-ready AI Engineer</strong><small>Ship RAG · Build Agents · Run Evals</small></div>
  `);
}

function careerPage(pageNo, art) {
  const items = [
    ['System Design', '能画出模型、企业资料、工具、Agent、记忆、人工审核和安全控制怎样配合。'],
    ['Production Agent', '能解释 Agent 怎样限制步骤、暂停恢复、避免重复操作，并在失败时交给人工。'],
    ['Governance', '能把隐私、权限、责任人、操作记录和事故处理真正做进产品。'],
    ['Evaluation', '能用固定规则、AI 评分和人工抽查判断质量，并阻止不合格版本上线。'],
    ['Model Routing', '能根据准确度、成本、速度和隐私，为不同任务选择不同模型。'],
    ['Engineering Evidence', '能展示运行记录、质量报告、安全测试、回滚方案和完整系统设计答辩。'],
  ];
  return pageShell(pageNo, 'standard-page career-page', `
    <img class="page-art" src="${art}" alt="" />
    ${topBar('Career & Interview')}
    <header class="section-heading"><span>最终成果</span><h1>你带走的不是课堂 Demo，而是一套能讲、能演示、能答辩的作品</h1><p>面试时不再只背 RAG、Agent、Governance 的定义。你可以打开系统，展示它怎样工作、怎样失败、怎样恢复，以及为什么达到标准后才允许上线。</p></header>
    <div class="career-grid">${items.map(([title, text]) => `<article><h2>${title}</h2><p>${text}</p></article>`).join('')}</div>
    <a class="cta" href="https://jiangren.com.au/program-course/ai-engineer-bootcamp" target="_blank" rel="noopener"><div><h2>查看完整课程与申请信息</h2><p>课程安排、逐周交付、10 层技术栈与最新开课信息</p><strong>jiangren.com.au/program-course/ai-engineer-bootcamp</strong></div><span>OPEN COURSE<br/>PAGE →</span></a>
  `);
}

const CSS = `
@page{size:A4;margin:0}*{box-sizing:border-box}html,body{margin:0;padding:0;background:#d9d3d0;color:#101a3a;font-family:"PingFang SC","STHeitiSC-Light","Microsoft YaHei",Arial,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{padding:20px 0}.page{width:210mm;height:297mm;margin:0 auto 20px;background:#fff7ef;position:relative;overflow:hidden;break-after:page;page-break-after:always}.page:last-child{break-after:auto}.page-footer{position:absolute;left:10mm;right:10mm;bottom:5mm;height:6mm;border-top:.25mm solid #ddcfc8;padding-top:2mm;display:flex;justify-content:space-between;color:#706c7b;font-size:6.7pt}.topbar{height:8mm;display:flex;justify-content:space-between;align-items:center;font-size:7pt}.topbar span{color:#7957ff;font-weight:700}.standard-page,.live-page{padding:8mm 10mm 16mm}.section-heading{margin-top:4mm}.section-heading>span{color:#ff654e;font-size:8pt;font-weight:700;letter-spacing:.08em}.section-heading h1{font-size:23pt;line-height:1.2;margin:5mm 0 2.5mm;max-width:178mm}.section-heading p{margin:0;color:#666479;font-size:9.3pt;line-height:1.55;max-width:178mm}.live-page{display:grid;grid-template-rows:8mm 50mm 29mm minmax(0,1fr) 27mm 6mm;gap:3mm}.live-page>.page-footer{position:static;height:6mm}.live-hero{min-width:0;border-radius:8mm;background:var(--accent);position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) 61mm;align-items:stretch}.live-hero:before{content:"";position:absolute;inset:0 auto 0 0;width:129mm;background:#101a3a;opacity:.96;border-radius:8mm 8mm 8mm 8mm}.hero-copy{position:relative;z-index:2;padding:6mm 7mm;color:white;min-width:0;display:flex;flex-direction:column;justify-content:center}.hero-copy .eyebrow{font-size:7.2pt;letter-spacing:.03em;color:#ddd8ff;font-weight:700;margin-bottom:3mm}.hero-copy h1{font-size:20.5pt;line-height:1.16;margin:0;max-width:113mm;overflow-wrap:anywhere}.hero-copy p{font-size:8.1pt;line-height:1.45;color:#f1edff;margin:3mm 0 0;max-width:112mm}.live-hero img{width:64mm;height:56mm;object-fit:contain;align-self:center;justify-self:center;position:relative;z-index:1;filter:drop-shadow(0 3mm 4mm rgba(16,26,58,.18))}.lesson-summary{border:.3mm solid #e3d8d2;background:#fff;border-radius:5mm;padding:3.5mm 5mm;min-width:0;overflow:hidden}.summary-head{display:flex;align-items:center;gap:8mm;margin-bottom:2.5mm}.summary-head strong{font:700 8pt Arial;color:#646276}.pill{display:inline-flex;align-items:center;justify-content:center;border-radius:99px;height:6mm;padding:0 8mm;color:white;font-size:7pt;font-weight:700;background:#7957ff}.pill.accent{background:#ff654e}.lesson-summary p{margin:0;color:#686678;font-size:8.6pt;line-height:1.42;overflow-wrap:anywhere}.agenda-block{min-height:0;display:grid;grid-template-rows:7mm minmax(0,1fr);gap:1.5mm}.agenda-block h2{font-size:8.4pt;color:var(--accent);margin:0;align-self:end;letter-spacing:.02em}.agenda-block h2 span{font-weight:500}.agenda-list{list-style:none;margin:0;padding:0;display:grid;grid-template-rows:repeat(var(--rows),minmax(0,1fr));gap:1.25mm;min-height:0}.agenda-list.rows-6{--rows:6}.agenda-list.rows-7{--rows:7}.agenda-list.rows-8{--rows:8}.agenda-list.rows-9{--rows:9}.agenda-item{position:relative;display:grid;grid-template-columns:7mm minmax(0,1fr);align-items:center;min-height:0}.agenda-item:before{content:"";position:absolute;left:3.3mm;top:-1.5mm;bottom:-1.5mm;width:.45mm;background:color-mix(in srgb,var(--accent) 32%,white);z-index:0}.agenda-item:first-child:before{top:50%}.agenda-item:last-child:before{bottom:50%}.agenda-number{position:relative;z-index:1;width:5.5mm;height:5.5mm;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;font:700 6.6pt Arial}.agenda-item p{height:100%;min-width:0;margin:0;border:.25mm solid #e7ddd7;background:#fff;border-radius:3.5mm;padding:1.5mm 3.2mm;display:flex;align-items:center;flex-wrap:wrap;align-content:center;gap:.8mm;font-size:8.4pt;line-height:1.25;overflow-wrap:anywhere}.technical{font:700 7.7pt Arial;color:var(--accent)}.divider{color:#aaa0a7}.week-meta{display:grid;grid-template-columns:1fr 1fr;gap:3mm}.week-meta article{min-width:0;border:.3mm solid #e3d8d2;background:#fff;border-radius:4mm;padding:3mm 4mm;overflow:hidden}.week-meta h3{display:inline-block;margin:0 0 1.5mm;padding:1.1mm 3.2mm;border-radius:99px;background:var(--accent,#7957ff);color:white;font-size:7pt}.week-meta article+article h3{background:#ff654e}.week-meta p{margin:0;font-size:7.5pt;line-height:1.35;color:#34364c;overflow-wrap:anywhere}.two-track{display:grid;grid-template-columns:1fr 1fr;gap:5mm;margin-top:9mm}.track{height:52mm;border:.3mm solid #d9ccff;border-radius:6mm;padding:6mm;background:#f4efff;display:flex;flex-direction:column}.track.practice{background:#fff0ec;border-color:#ffd2c8}.track>span{font-size:7.5pt;color:#7957ff;font-weight:700}.track.practice>span{color:#ff654e}.track h2{font-size:16pt;line-height:1.25;margin:4mm 0 2mm}.track p{font-size:8.5pt;line-height:1.5;color:#646276;margin:0}.track strong{margin-top:auto;background:#fff;border-radius:3mm;padding:2.5mm 3mm;font-size:8pt;color:#7957ff}.track.practice strong{color:#ff654e}.why-title{font-size:15pt;margin:9mm 0 4mm}.benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3mm}.benefit-grid article{height:31mm;background:#fff;border:.25mm solid #e3d8d2;border-radius:4mm;padding:3.5mm}.benefit-grid i{display:block;width:3mm;height:3mm;border-radius:50%;background:#7957ff;margin-bottom:2mm}.benefit-grid h3{font-size:9pt;margin:0 0 1.5mm}.benefit-grid p{font-size:7.3pt;line-height:1.4;color:#666479;margin:0}.stage-list{display:grid;gap:3mm;margin-top:8mm}.stage-list article{height:35mm;display:grid;grid-template-columns:18mm minmax(0,1fr) 56mm;gap:5mm;align-items:center;background:#fff;border:.3mm solid #e3d8d2;border-radius:5mm;padding:4mm}.stage-no{height:25mm;border-radius:4mm;background:var(--stage);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.stage-no b{font:700 16pt Arial}.stage-no small{font:700 6pt Arial}.stage-list h2{font-size:13pt;margin:0 0 2mm}.stage-list p{font-size:8pt;color:#666479;line-height:1.4;margin:0}.stage-list article>strong{background:#f7f3f0;border-radius:3mm;padding:3mm;font-size:8pt;line-height:1.45;color:var(--stage)}.mode-grid{margin-top:8mm;display:grid;grid-template-columns:1fr 1fr;gap:4mm}.mode{height:72mm;border:.3mm solid #e3d8d2;background:#fff;border-radius:5mm;padding:5mm}.mode h2{display:inline-block;background:#7957ff;color:#fff;border-radius:99px;padding:1.5mm 5mm;font-size:9pt;margin:0 0 3mm}.mode-2 h2{background:#ff654e}.mode-3 h2{background:#48c9d9}.mode-4 h2{background:#f3b943}.mode>strong{display:block;font-size:9.5pt;line-height:1.35;margin-bottom:3mm}.mode ul{margin:0;padding-left:5mm}.mode li{font-size:8.2pt;line-height:1.5;margin-bottom:1mm}.layer-list{list-style:none;padding:0;margin:8mm 8mm 0;display:grid;gap:2.5mm}.layer-list li{height:15mm;display:grid;grid-template-columns:12mm 1fr 45mm;align-items:center;background:#fff;border-radius:4mm;padding:0 5mm;border:.25mm solid #e8ded8}.layer-list span{font:700 8pt Arial;color:#7957ff}.layer-list strong{font-size:10.5pt}.layer-list b{font:700 7.5pt Arial;color:#69677a;text-align:right}.career-grid{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:7mm}.career-grid article{height:43mm;background:#fff;border:.3mm solid #e3d8d2;border-radius:5mm;padding:5mm}.career-grid h2{display:inline-block;border-radius:99px;background:#7957ff;color:#fff;padding:1.3mm 4mm;font:700 7pt Arial;margin:0 0 3mm}.career-grid p{font-size:8.6pt;line-height:1.5;margin:0}.cta{height:44mm;margin-top:5mm;background:#101a3a;border-radius:5mm;color:white;padding:6mm;display:flex;justify-content:space-between;align-items:center}.cta h2{font-size:17pt;margin:0 0 2mm}.cta p{font-size:8.5pt;color:#d7d4e7;margin:0 0 3mm}.cta strong{font:700 7.4pt Arial;color:#c9c0ff}.cta>span{font:700 13pt Arial;text-align:right;color:#ff8a75}.cover-page{padding:0;background:#101a3a}.cover-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.cover-card{position:absolute;left:10mm;right:10mm;bottom:10mm;background:rgba(16,26,58,.92);color:#fff;border-radius:6mm;padding:5mm 7mm;display:flex;justify-content:space-between;align-items:center}.cover-card h1{font-size:18pt;margin:0 0 1mm}.cover-card p{font-size:8pt;color:#d8d2f2;margin:0}.cover-card strong{background:#ff654e;border-radius:99px;padding:2mm 5mm;font-size:8pt}@media print{body{padding:0;background:#fff}.page{margin:0;box-shadow:none}}
/* Live-page typography rhythm: compact cards, tighter leading, stronger hierarchy. */
.live-page{grid-template-rows:8mm 50mm 25mm minmax(0,1fr) 27mm 6mm}
.hero-copy{padding:5mm 7mm}.hero-copy .eyebrow{font-size:7pt;line-height:1.1;margin-bottom:2.4mm}.hero-copy h1{font-size:19.5pt;line-height:1.08;letter-spacing:-.012em;font-weight:700}.hero-copy p{font-size:7.9pt;line-height:1.32;margin-top:2.3mm}
.lesson-summary{padding:2.6mm 5mm}.summary-head{margin-bottom:1.7mm}.pill{height:5.5mm;font-size:6.8pt}.lesson-summary p{font-size:8.3pt;line-height:1.3}
.agenda-block{grid-template-rows:6mm minmax(0,1fr);gap:1mm}.agenda-block h2{font-size:8.2pt;line-height:1.1}
.agenda-list{grid-template-rows:none;grid-auto-rows:minmax(var(--agenda-row),auto);align-content:space-between;gap:0}.agenda-list.rows-6{--agenda-row:14.5mm}.agenda-list.rows-7{--agenda-row:13.2mm}.agenda-list.rows-8{--agenda-row:12mm}.agenda-list.rows-9{--agenda-row:10.8mm}
.agenda-item:before{top:-3mm;bottom:-3mm}.agenda-number{width:5mm;height:5mm;font-size:6.3pt}.agenda-item p{border-radius:3.2mm;padding:.9mm 3mm;gap:.7mm;font-size:8.15pt;line-height:1.16}.technical{font:700 7.55pt/1.12 Arial}

/* Editorial system V2: enterprise course dossier, not oversized web cards. */
body{background:#cbc5c1}.page{background-color:#fbf6ef;background-image:radial-gradient(circle at 91% 7%,rgba(121,87,255,.09),transparent 29%),linear-gradient(rgba(16,26,58,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(16,26,58,.025) 1px,transparent 1px);background-size:auto,8mm 8mm,8mm 8mm;box-shadow:0 8mm 22mm rgba(16,26,58,.14)}
.topbar{border-bottom:.3mm solid rgba(16,26,58,.14);font:700 7pt/1.1 Arial;letter-spacing:.045em}.topbar span{display:flex;align-items:center;gap:2mm}.topbar span:before{content:"";width:8mm;height:.8mm;border-radius:99px;background:currentColor}
.page-footer{font-size:6.4pt;letter-spacing:.025em}
.live-page{grid-template-rows:8mm 44mm 20mm minmax(0,1fr) 30mm 6mm;gap:3mm}
.live-hero{border-radius:6mm;background:#101a3a;grid-template-columns:minmax(0,1fr) 56mm;isolation:isolate;box-shadow:0 3mm 8mm rgba(16,26,58,.14)}.live-hero:before{inset:0;width:100%;border-radius:0;background:radial-gradient(circle at 83% 38%,color-mix(in srgb,var(--accent) 72%,transparent),transparent 29%),linear-gradient(110deg,#101a3a 0%,#151d43 68%,color-mix(in srgb,var(--accent) 52%,#151d43) 100%);opacity:1}.live-hero:after{content:"";position:absolute;inset:0 0 auto;height:1.2mm;background:var(--accent);z-index:3}.hero-copy{padding:5mm 7mm 4.5mm}.hero-copy .eyebrow{display:flex;align-items:center;gap:2.4mm;margin:0 0 2.2mm;color:#e9e6f7;font:600 6.6pt/1 Arial;letter-spacing:.025em}.hero-copy .eyebrow b{display:inline-flex;align-items:center;justify-content:center;min-width:11mm;height:5.2mm;padding:0 2mm;border-radius:99px;background:var(--accent);color:#fff;font:800 6.5pt/1 Arial}.hero-copy .eyebrow span{opacity:.84}.hero-copy .eyebrow em{font-style:normal;color:#fff;opacity:.72}.hero-copy h1{font-size:20pt;line-height:1.07;letter-spacing:-.018em;max-width:116mm}.hero-copy p{font-size:7.65pt;line-height:1.3;margin-top:2mm;max-width:116mm;color:#d8dbea}.live-hero img{width:55mm;height:45mm;opacity:.96;filter:drop-shadow(0 3mm 4mm rgba(0,0,0,.24))}
.lesson-summary{display:grid;grid-template-columns:33mm minmax(0,1fr);align-items:center;border:0;border-left:1.2mm solid var(--accent);border-radius:0 3.5mm 3.5mm 0;padding:2mm 4mm;background:rgba(255,255,255,.72);box-shadow:inset 0 0 0 .25mm rgba(16,26,58,.09)}.summary-head{display:flex;flex-direction:column;align-items:flex-start;gap:1.2mm;margin:0}.summary-head strong{font-size:7pt;letter-spacing:.08em}.pill{height:5mm;padding:0 4.5mm;font-size:6.2pt;letter-spacing:.06em}.lesson-summary p{padding-left:4mm;border-left:.25mm solid #ded7d2;font-size:8.15pt;line-height:1.34;color:#34384c}
.agenda-block{grid-template-rows:7mm minmax(0,1fr);gap:2mm}.agenda-block h2{display:flex;align-items:flex-end;margin:0;color:#101a3a;line-height:1}.agenda-block h2 span{font:800 8pt/1 Arial;color:var(--accent);letter-spacing:.08em}.agenda-block h2 b{margin-left:2.4mm;font-size:8pt}.agenda-block h2 em{margin-left:auto;font:700 6.3pt/1 Arial;color:#8c8793;font-style:normal;letter-spacing:.1em}
.agenda-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(var(--agenda-rows),minmax(0,1fr));grid-auto-rows:unset;align-content:stretch;gap:2.4mm 2.8mm}.agenda-item{display:grid;grid-template-columns:9mm minmax(0,1fr);align-items:stretch;border:.25mm solid rgba(16,26,58,.12);border-top:.85mm solid var(--accent);border-radius:3.5mm;background:rgba(255,255,255,.88);overflow:hidden;box-shadow:0 1.5mm 4mm rgba(16,26,58,.055)}.agenda-item:before{display:none}.agenda-item:last-child:nth-child(odd){grid-column:1/-1}.agenda-number{align-self:start;width:auto;height:auto;margin:3.2mm 0 0 3mm;border-radius:0;background:none;color:var(--accent);font:800 7.2pt/1 Arial;letter-spacing:.04em}.agenda-copy{min-width:0;padding:3mm 3.4mm 2.7mm 1.2mm;display:flex;flex-direction:column;justify-content:center}.technical{display:block;margin:0 0 1.5mm;color:var(--accent);font:800 7.15pt/1.15 Arial;letter-spacing:.01em;overflow-wrap:anywhere}.agenda-copy p{height:auto;min-width:0;margin:0;border:0;border-radius:0;padding:0;display:block;background:none;color:#242940;font-size:8.1pt;line-height:1.36;overflow-wrap:anywhere}
.week-meta{gap:2.8mm}.week-meta article{position:relative;border:0;border-radius:4mm;padding:4mm 4.5mm;background:#121b3b;color:#fff;box-shadow:0 2mm 5mm rgba(16,26,58,.12)}.week-meta article+article{background:#fff;border:.3mm solid rgba(255,101,78,.24);color:#101a3a;box-shadow:0 2mm 5mm rgba(16,26,58,.06)}.week-meta h3{display:block;margin:0 0 2mm;padding:0;background:none!important;color:var(--accent);font:800 6.5pt/1 Arial;letter-spacing:.09em}.week-meta article+article h3{color:#ff654e}.week-meta p{font-size:7.65pt;line-height:1.4;color:#edf0fb}.week-meta article+article p{color:#34384c}
.section-heading>span{display:inline-flex;align-items:center;height:6mm;padding:0 3.5mm;border-radius:99px;background:#fff0ec;color:#e94f3c;font-size:6.8pt;letter-spacing:.06em}.section-heading h1{font-size:24pt;line-height:1.12;letter-spacing:-.018em;margin:4mm 0 2.5mm}.section-heading p{max-width:170mm;font-size:9pt;line-height:1.48;color:#55596c}
.track,.benefit-grid article,.stage-list article,.mode,.layer-list li,.career-grid article{border-color:rgba(16,26,58,.12);box-shadow:0 2mm 6mm rgba(16,26,58,.055)}.track{position:relative;overflow:hidden;background:linear-gradient(145deg,#f4efff,#fff);border-radius:5mm}.track:before{content:"";position:absolute;inset:0 auto 0 0;width:1.2mm;background:#7957ff}.track.practice{background:linear-gradient(145deg,#fff0ec,#fff)}.track.practice:before{background:#ff654e}.benefit-grid article{background:rgba(255,255,255,.82)}.stage-list article{background:rgba(255,255,255,.84);border-radius:4mm}.mode{background:rgba(255,255,255,.84)}.layer-list li{background:rgba(255,255,255,.84);border-radius:3mm}.career-grid article{background:rgba(255,255,255,.86)}
.standard-page{isolation:isolate}.standard-page>*:not(.page-art):not(.page-footer){position:relative;z-index:1}.standard-page>.page-footer{position:absolute;z-index:2}.page-art{position:absolute;z-index:0;right:8mm;bottom:14mm;width:90mm;height:90mm;object-fit:contain;opacity:.07;filter:saturate(.9) drop-shadow(0 4mm 8mm rgba(16,26,58,.12));pointer-events:none}.method-page .page-art{right:8mm;bottom:18mm;width:112mm;height:112mm;opacity:.13}.map-page .page-art,.modes-page .page-art,.stack-page .page-art{opacity:.045}.career-page .page-art{right:4mm;bottom:9mm;width:102mm;height:102mm;opacity:.065}

/* Type scale V3: designed for real browser reading, not thumbnail viewing. */
.topbar{font-size:7.6pt}.hero-copy .eyebrow{font-size:7.3pt}.hero-copy .eyebrow b{font-size:7pt}.hero-copy h1{font-size:22pt;line-height:1.06}.hero-copy p{font-size:8.7pt;line-height:1.34}
.summary-head strong{font-size:7.8pt}.pill{height:5.5mm;font-size:6.9pt}.lesson-summary p{font-size:9.35pt;line-height:1.42}
.agenda-block h2 span{font-size:9.1pt}.agenda-block h2 b{font-size:9.2pt}.agenda-block h2 em{font-size:7pt}.agenda-number{margin-top:3.4mm;font-size:9pt}.agenda-copy{padding:4.4mm 4.4mm 4mm 1.4mm}.technical{margin-bottom:2.2mm;font-size:10.2pt;line-height:1.2}.agenda-copy p{font-size:11.2pt;line-height:1.38;font-weight:500}
.agenda-list.rows-8 .agenda-copy,.agenda-list.rows-9 .agenda-copy{padding:2.5mm 3.2mm 2.2mm 1mm}.agenda-list.rows-8 .technical,.agenda-list.rows-9 .technical{margin-bottom:1.1mm;font-size:8.45pt;line-height:1.15}.agenda-list.rows-8 .agenda-copy p,.agenda-list.rows-9 .agenda-copy p{font-size:9.4pt;line-height:1.28}.agenda-list.rows-8 .agenda-number,.agenda-list.rows-9 .agenda-number{font-size:7.6pt}
.week-meta h3{font-size:7.4pt}.week-meta p{font-size:8.45pt;line-height:1.42}
.section-heading h1{font-size:26pt;line-height:1.1}.section-heading p{font-size:10pt;line-height:1.5}.track>span{font-size:8.2pt}.track h2{font-size:17pt}.track p{font-size:9.2pt;line-height:1.48}.track strong{font-size:8.6pt}.why-title{font-size:16pt}.benefit-grid h3{font-size:9.8pt}.benefit-grid p{font-size:8.15pt;line-height:1.42}.stage-list h2{font-size:13.8pt}.stage-list p{font-size:8.7pt}.stage-list article>strong{font-size:8.5pt}.mode>strong{font-size:10pt}.mode li{font-size:8.85pt;line-height:1.48}.layer-list strong{font-size:11pt}.layer-list b{font-size:8pt}.career-grid p{font-size:9.2pt;line-height:1.48}

/* Compact agenda V4: card height follows content; whitespace is no longer fake padding. */
.live-page{grid-template-rows:8mm 44mm 20mm auto minmax(0,1fr) 30mm 6mm}
.agenda-list{grid-template-rows:repeat(var(--agenda-rows),auto);align-content:start}.agenda-item{min-height:0}.agenda-copy{padding:2.8mm 3.4mm 2.6mm 1.2mm}.technical{margin-bottom:1.4mm}.agenda-list.rows-8 .agenda-copy,.agenda-list.rows-9 .agenda-copy{padding:2.1mm 3mm 1.9mm .9mm}
.page-spacer{min-height:0;border-top:.25mm solid rgba(16,26,58,.1);display:flex;align-items:flex-end;justify-content:flex-end;overflow:hidden}.page-spacer span{color:var(--accent);opacity:.075;font:800 22pt/1 Arial;letter-spacing:.02em;white-space:nowrap}

.learning-assets{align-self:start;min-width:0;border:.3mm solid color-mix(in srgb,var(--accent) 26%,#ded8d2);border-left:1.2mm solid var(--accent);border-radius:0 4mm 4mm 0;background:rgba(255,255,255,.82);padding:2.6mm 3.2mm 3mm;box-shadow:0 1.5mm 5mm rgba(16,26,58,.05)}.assets-title{display:flex;align-items:baseline;gap:2.5mm;margin-bottom:2.2mm}.assets-title strong{font-size:8.8pt;color:#101a3a}.assets-title span{font-size:7.4pt;color:#777383}.assets-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2.5mm}.learning-assets.groups-2 .assets-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.assets-grid article{min-width:0;padding-right:2mm;border-right:.25mm solid rgba(16,26,58,.1)}.assets-grid article:last-child{border-right:0}.assets-grid header{display:flex;flex-direction:column;gap:.7mm;margin-bottom:1.35mm}.assets-grid header strong{font:800 7.2pt/1 Arial;color:var(--accent);letter-spacing:.055em}.assets-grid header small{font-size:6.8pt;line-height:1.2;color:#777383}.assets-grid ul{list-style:none;margin:0;padding:0;display:grid;gap:.9mm}.assets-grid li{display:grid;grid-template-columns:8.5mm minmax(0,1fr);gap:1mm;align-items:baseline;min-width:0}.assets-grid li b{font:800 6.8pt/1.15 Arial;color:#777383}.assets-grid li span{font-size:7.8pt;line-height:1.24;color:#242940;overflow-wrap:anywhere}
.course-inventory{display:grid;grid-template-columns:repeat(4,1fr);gap:2.5mm;margin-top:5mm}.course-inventory div{min-width:0;height:22mm;border:.25mm solid rgba(16,26,58,.12);border-radius:3.5mm;background:rgba(255,255,255,.86);padding:2.7mm 3mm;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;column-gap:2.2mm;align-content:center;box-shadow:0 1.5mm 5mm rgba(16,26,58,.05)}.course-inventory b{grid-row:1/3;color:#7957ff;font:800 18pt/1 Arial}.course-inventory strong{font:800 7.1pt/1.1 Arial;color:#101a3a}.course-inventory span{font-size:6.8pt;line-height:1.25;color:#686678}.method-page .two-track{margin-top:5mm}.method-page .why-title{margin-top:6mm}

/* Sales copy V5: every support asset explains the outcome, not just the format. */
.assets-title{display:flex;flex-direction:column;align-items:flex-start;gap:.7mm;margin-bottom:2.5mm}.assets-title strong{font-size:9.25pt;line-height:1.18;color:#101a3a}.assets-title span{font-size:7.55pt;line-height:1.3;color:#686678}.assets-grid header{display:flex;flex-direction:row;align-items:baseline;gap:1.3mm;margin-bottom:1.5mm}.assets-grid header strong{font:800 7.7pt/1 Arial;color:var(--accent);letter-spacing:0}.assets-grid header small{font:700 6.1pt/1 Arial;color:#8a8591;letter-spacing:.045em}.assets-grid ul{gap:1.25mm}.assets-grid li{grid-template-columns:7.5mm minmax(0,1fr);gap:.8mm;align-items:start}.assets-grid li b{padding-top:.3mm;font:800 5.9pt/1.2 Arial;color:#99939c}.assets-grid li>div{min-width:0;font-size:7.2pt;line-height:1.3;color:#34384c}.assets-grid li>div strong{font-size:7.65pt;color:#171d36}.assets-grid li>div span{font-size:7.05pt;line-height:1.3;color:#5d5b6b}.assets-grid li>div span:before{content:" · ";color:var(--accent);font-weight:800}
/* Contrast V6: technical terms lead; compact type fits the richer sales content. */
.agenda-block h2 span{color:#101a3a}.agenda-block h2 span:before{content:"";display:inline-block;width:6mm;height:.9mm;margin-right:2mm;border-radius:99px;background:var(--accent);vertical-align:middle}.technical{color:#101a3a;border-left:1mm solid var(--accent);padding-left:1.8mm;font-size:10.3pt;line-height:1.18;font-weight:800;letter-spacing:-.004em}.agenda-copy p{color:#5a5d6d;font-size:9.35pt;line-height:1.36;font-weight:500}.agenda-number{color:#101a3a;font-size:8pt}.agenda-list.rows-8 .technical,.agenda-list.rows-9 .technical{color:#101a3a;font-size:8.65pt;line-height:1.16}.agenda-list.rows-8 .agenda-copy p,.agenda-list.rows-9 .agenda-copy p{color:#5a5d6d;font-size:8.2pt;line-height:1.28}.agenda-list.rows-8 .agenda-number,.agenda-list.rows-9 .agenda-number{color:#101a3a;font-size:7.1pt}.assets-grid header strong{color:#101a3a}.assets-grid li>div span:before{color:#101a3a}.week-meta article:first-child h3{color:#fff}
/* Typography V7: one casing system, one visual voice, denser text without oversized whitespace. */
.topbar,.hero-copy .eyebrow,.pill,.summary-head strong,.agenda-block h2,.technical,.agenda-number,.assets-grid header,.assets-grid li b,.course-inventory strong,.track>span,.layer-list b,.career-grid h2,.cta>span{font-family:"PingFang SC","Helvetica Neue",Arial,sans-serif}
.topbar{font-size:7.2pt;letter-spacing:.02em}.topbar span{font-weight:700}.hero-copy .eyebrow,.pill,.agenda-block h2 span,.agenda-block h2 em,.summary-head strong,.assets-grid header strong,.assets-grid header small,.course-inventory strong,.track>span,.career-grid h2{letter-spacing:0}
.lesson-summary p{font-size:8.9pt;line-height:1.36}.agenda-copy{padding:2.5mm 3.2mm 2.3mm 1.1mm}.technical{margin-bottom:1.2mm;font-size:9.45pt;line-height:1.18;font-weight:750}.agenda-copy p{font-size:8.85pt;line-height:1.34;font-weight:500}.agenda-number{font-size:7.7pt}
.agenda-list.rows-8 .agenda-copy,.agenda-list.rows-9 .agenda-copy{padding:1.9mm 2.8mm 1.8mm .85mm}.agenda-list.rows-8 .technical,.agenda-list.rows-9 .technical{margin-bottom:.8mm;font-size:8.15pt;line-height:1.14}.agenda-list.rows-8 .agenda-copy p,.agenda-list.rows-9 .agenda-copy p{font-size:7.85pt;line-height:1.25}.agenda-list.rows-8 .agenda-number,.agenda-list.rows-9 .agenda-number{font-size:6.9pt}
.assets-title strong{font-size:8.8pt}.assets-title span{font-size:7.25pt}.assets-grid header strong{font-size:7.35pt}.assets-grid header small{font-size:6.15pt}.assets-grid li>div strong{font-size:7.25pt}.assets-grid li>div span{font-size:6.85pt;line-height:1.28}
/* Cover V10: Avenir display typography plus a dedicated Chinese course name. */
.cover-page .cover-content .cover-kicker{font-family:"Avenir Next","Helvetica Neue",Arial,sans-serif;font-weight:700;letter-spacing:.075em}.cover-page .cover-content .cover-title{font-family:"Avenir Next","Helvetica Neue",Arial,sans-serif;font-size:39.5pt;line-height:.92;font-weight:700;letter-spacing:-.04em}.cover-title-zh{margin-top:2.8mm;color:#101a3a;font-family:"PingFang SC","Microsoft YaHei",sans-serif;font-size:14.5pt;line-height:1;font-weight:700;letter-spacing:.16em}.cover-page .cover-content .cover-cohort{margin-top:3.8mm}
/* Cover V9: three years of teaching is the trust proof behind the positioning. */
.cover-rarity{display:inline-flex;margin-top:11mm;color:#7957ff;font-size:8.2pt;font-weight:750;letter-spacing:.025em}.cover-page .cover-logo{width:61mm;height:21mm}.cover-page .cover-kicker{margin-top:11.5mm;font-size:8.25pt}.cover-page .cover-title{margin-top:4.5mm;font-size:39pt;line-height:.93}.cover-page .cover-cohort{margin-top:4.5mm;font-size:9pt;padding:2.2mm 5mm}.cover-page .cover-positioning{margin-top:4mm;max-width:118mm}.cover-page .cover-positioning span{display:block;color:#101a3a;font-size:21pt;line-height:1}.cover-page .cover-positioning em{margin-top:2mm;font-size:25.5pt}.cover-page .cover-subtitle{max-width:108mm;font-size:9.55pt;line-height:1.44}.cover-page .cover-proof{width:108mm;margin-top:7mm;gap:2.6mm}.cover-page .cover-proof span{min-height:11mm;font-size:8.25pt;padding:2.2mm 3.2mm}.cover-page .cover-system strong{font-size:11.5pt}.cover-page .cover-system p{max-width:150mm;font-size:6.8pt;line-height:1.35}.cover-page .cover-edition{font-size:7.4pt}
/* Cover V8: deterministic typography over a text-free systematic-engineering visual. */
.cover-page{padding:0;background:#fff5ed;color:#101a3a;isolation:isolate}.cover-image{z-index:0}.cover-page:after{content:"";position:absolute;z-index:1;inset:0;background:linear-gradient(90deg,rgba(255,248,240,.98) 0%,rgba(255,248,240,.93) 34%,rgba(255,248,240,.48) 53%,rgba(255,248,240,0) 72%),linear-gradient(0deg,rgba(255,248,240,.84),transparent 30%)}.cover-content{position:absolute;z-index:2;inset:0;padding:14mm 12mm 12mm;display:flex;flex-direction:column;align-items:flex-start}.cover-logo{width:56mm;height:19mm;object-fit:contain;object-position:left center}.cover-kicker{margin-top:13mm;display:inline-flex;align-items:center;gap:2.5mm;color:#7957ff;font:800 7.5pt/1 "PingFang SC","Helvetica Neue",Arial,sans-serif;letter-spacing:.055em}.cover-kicker:before{content:"";width:9mm;height:1mm;border-radius:99px;background:#ff654e}.cover-title{margin:5mm 0 0;font:800 34pt/.94 "PingFang SC","Helvetica Neue",Arial,sans-serif;letter-spacing:-.04em;color:#101a3a}.cover-cohort{display:inline-flex;margin-top:5mm;padding:2mm 4.5mm;border-radius:99px;background:linear-gradient(90deg,#7957ff,#ff654e);color:#fff;font:750 8.2pt/1 "PingFang SC","Helvetica Neue",Arial,sans-serif}.cover-positioning{margin:15mm 0 0;max-width:112mm;font:750 23pt/1.18 "PingFang SC","Helvetica Neue",Arial,sans-serif;letter-spacing:-.025em}.cover-positioning em{display:block;color:#ff654e;font-style:normal}.cover-subtitle{max-width:104mm;margin:4mm 0 0;color:#4e5266;font-size:9.4pt;line-height:1.48}.cover-proof{margin-top:8mm;width:103mm;display:grid;grid-template-columns:1fr 1fr;gap:2.4mm}.cover-proof span{min-height:10mm;display:flex;align-items:center;padding:2mm 3mm;border:.25mm solid rgba(16,26,58,.14);border-radius:3mm;background:rgba(255,255,255,.8);font-size:7.7pt;font-weight:650;box-shadow:0 1.3mm 4mm rgba(16,26,58,.05)}.cover-proof span:before{content:"";flex:0 0 auto;width:2mm;height:2mm;margin-right:2mm;border-radius:50%;background:#48c9d9;box-shadow:0 0 0 1.1mm rgba(72,201,217,.16)}.cover-system{margin-top:auto;width:100%;padding:5mm 6mm;border-radius:5mm;background:rgba(16,26,58,.95);color:#fff;box-shadow:0 3mm 10mm rgba(16,26,58,.17)}.cover-system strong{display:block;font-size:10.5pt;margin-bottom:2mm}.cover-system p{margin:0;color:#d9dced;font:650 7pt/1.45 "PingFang SC","Helvetica Neue",Arial,sans-serif;letter-spacing:.015em}.cover-edition{position:absolute;right:12mm;bottom:13mm;z-index:3;padding:1.8mm 4mm;border-radius:99px;background:#ff654e;color:#fff;font-size:7pt;font-weight:750}
.cover-logo-link{display:block;line-height:0}.cover-system a{display:inline-block;margin-top:2.2mm;color:#ffad9e;font:750 7.2pt/1.3 "PingFang SC","Helvetica Neue",Arial,sans-serif;text-decoration:none}.cta{text-decoration:none}.cta>span{font-size:11pt;line-height:1.35}
/* Weekly stack V11: real technology marks replace internal lesson codes. */
.hero-visual{position:relative;z-index:2;width:58mm;height:44mm;align-self:stretch;justify-self:end}.hero-visual>img{position:absolute;inset:-1mm 0 auto auto;width:55mm;height:42mm;object-fit:contain;opacity:.72}.tech-dock{position:absolute;right:2.5mm;bottom:2mm;display:flex;align-items:center;gap:1.5mm;padding:1.3mm 1.5mm;border:.25mm solid rgba(255,255,255,.3);border-radius:3mm;background:rgba(255,255,255,.95);box-shadow:0 1.5mm 5mm rgba(0,0,0,.2);backdrop-filter:blur(4px)}.tech-dock small{color:#56586a;font:800 4.8pt/1 Arial;letter-spacing:.045em;writing-mode:vertical-rl;transform:rotate(180deg)}.tech-dock>div{display:grid;grid-template-columns:repeat(4,6mm);gap:1mm}.tech-logo{display:flex;align-items:center;justify-content:center;background:#fff}.tech-dock .tech-logo{width:6mm;height:6mm;border-radius:1.6mm;box-shadow:inset 0 0 0 .2mm rgba(16,26,58,.1)}.live-hero .tech-logo img{position:static;width:4mm;height:4mm;object-fit:contain;opacity:1;filter:none}.summary-head strong{font-size:7.1pt;letter-spacing:0;color:#777383}.practice-stack{position:relative;isolation:isolate;min-width:0;display:grid;grid-template-columns:48mm minmax(0,1fr);align-items:center;gap:4mm;overflow:hidden;border:.3mm solid color-mix(in srgb,var(--accent) 42%,#ddd5cf);border-left:1.4mm solid var(--accent);border-radius:0 6mm 6mm 0;padding:4.5mm 5mm;background:radial-gradient(circle at 82% 18%,color-mix(in srgb,var(--accent) 23%,transparent),transparent 37%),linear-gradient(120deg,#fff 0%,color-mix(in srgb,var(--accent) 10%,white) 100%);box-shadow:0 2.5mm 9mm rgba(16,26,58,.09)}.practice-stack:after{content:"BUILD STACK";position:absolute;z-index:-1;left:5mm;bottom:-3mm;color:color-mix(in srgb,var(--accent) 9%,transparent);font:900 29pt/1 Arial;letter-spacing:-.06em;white-space:nowrap}.practice-stack>div:first-child small{display:block;margin-bottom:2mm;color:var(--accent);font:850 7.6pt/1 Arial;letter-spacing:.045em}.practice-stack>div:first-child strong{display:block;color:#20253d;font-size:8.5pt;line-height:1.42}.practice-stack-logos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:2mm}.practice-stack-logos .tech-logo{min-width:0;height:28.5mm;flex-direction:column;gap:2mm;border:.25mm solid rgba(16,26,58,.12);border-top:.8mm solid var(--accent);border-radius:3.5mm;background:linear-gradient(150deg,#fff 20%,color-mix(in srgb,var(--accent) 7%,white));box-shadow:0 1.6mm 4mm rgba(16,26,58,.09)}.practice-stack-logos .tech-logo img{width:9.5mm;height:9.5mm;object-fit:contain;filter:drop-shadow(0 .8mm 1.2mm rgba(16,26,58,.13))}.practice-stack-logos .tech-logo b{max-width:100%;padding:0 .7mm;color:#20253d;font:800 5.8pt/1.1 "PingFang SC","Helvetica Neue",Arial,sans-serif;text-align:center;overflow-wrap:anywhere}
.assets-grid li{display:block}.assets-grid li>div strong{display:inline}.assets-grid li>div span{display:inline}
.context-blueprint{position:relative;min-width:0;display:grid;grid-template-columns:49mm minmax(0,1fr);align-items:center;gap:4mm;overflow:hidden;border:.3mm solid color-mix(in srgb,var(--accent) 40%,#ddd5cf);border-left:1.4mm solid var(--accent);border-radius:0 5mm 5mm 0;padding:4mm 4.5mm;background:linear-gradient(120deg,#fff,color-mix(in srgb,var(--accent) 9%,white));box-shadow:0 2mm 7mm rgba(16,26,58,.07)}.context-blueprint:after{content:"CONTEXT";position:absolute;left:4mm;bottom:-3mm;color:color-mix(in srgb,var(--accent) 8%,transparent);font:900 28pt/1 Arial;letter-spacing:-.055em}.context-blueprint header{position:relative;z-index:1}.context-blueprint header small{display:block;margin-bottom:1.7mm;color:var(--accent);font:850 7pt/1 Arial;letter-spacing:.045em}.context-blueprint header strong{display:block;color:#20253d;font-size:8.2pt;line-height:1.38}.context-blueprint>div{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.7mm}.context-blueprint article{min-width:0;display:grid;grid-template-columns:6mm minmax(0,1fr);gap:1.2mm;align-items:start;padding:2mm;border:.25mm solid rgba(16,26,58,.1);border-radius:2.5mm;background:rgba(255,255,255,.9)}.context-blueprint article>b{color:var(--accent);font:850 5.8pt/1 Arial}.context-blueprint article span>strong{display:block;margin-bottom:.7mm;color:#161d38;font:800 6.4pt/1 Arial}.context-blueprint article span>small{display:block;color:#5b5e70;font-size:5.7pt;line-height:1.26}
.practice-page.lesson-rows-7 .practice-stack,.practice-page.lesson-rows-8 .practice-stack,.practice-page.lesson-rows-9 .practice-stack{padding:3mm 4mm}.practice-page.lesson-rows-7 .practice-stack-logos,.practice-page.lesson-rows-8 .practice-stack-logos,.practice-page.lesson-rows-9 .practice-stack-logos{gap:1.4mm}.practice-page.lesson-rows-7 .practice-stack-logos .tech-logo,.practice-page.lesson-rows-8 .practice-stack-logos .tech-logo,.practice-page.lesson-rows-9 .practice-stack-logos .tech-logo{height:18mm;gap:1mm;border-radius:2.7mm}.practice-page.lesson-rows-7 .practice-stack-logos .tech-logo img,.practice-page.lesson-rows-8 .practice-stack-logos .tech-logo img,.practice-page.lesson-rows-9 .practice-stack-logos .tech-logo img{width:6.6mm;height:6.6mm}.practice-page.lesson-rows-7 .practice-stack-logos .tech-logo b,.practice-page.lesson-rows-8 .practice-stack-logos .tech-logo b,.practice-page.lesson-rows-9 .practice-stack-logos .tech-logo b{font-size:5pt}
/* Page 30 V13: static export of the website's interactive 10-layer Skills Tower. */
.stack-page .stack-heading{margin-top:2mm}.stack-page .stack-heading>span{color:#7957ff;font:800 7.3pt/1 "Avenir Next","Helvetica Neue",Arial,sans-serif;letter-spacing:.07em}.stack-page .stack-heading h1{margin:3.5mm 0 2mm;font:750 25pt/1.04 "Avenir Next","Helvetica Neue",Arial,sans-serif;letter-spacing:-.035em}.stack-page .stack-heading p{max-width:180mm;font-size:8.25pt;line-height:1.42}.stack-page .stack-heading p strong{color:#101a3a;font-weight:750}.skills-tower{position:relative;margin-top:4.5mm;display:grid;gap:1.25mm}.skills-tower:before{content:"BUILD UP";position:absolute;left:-7mm;top:2mm;bottom:2mm;display:flex;align-items:center;color:#8b8490;font:800 5.2pt/1 Arial;letter-spacing:.09em;writing-mode:vertical-rl;transform:rotate(180deg)}.skills-layer{height:15.2mm;display:grid;grid-template-columns:57mm minmax(0,1fr);align-items:center;gap:3mm;padding:1.7mm 3mm;border:.25mm solid color-mix(in srgb,var(--layer) 48%,#d9d2cd);border-left:1.3mm solid var(--layer);border-radius:3mm;background:linear-gradient(90deg,#fff 0%,color-mix(in srgb,var(--layer) 8%,white) 100%);box-shadow:0 1.3mm 3.5mm rgba(16,26,58,.055)}.skills-layer-head{min-width:0;display:grid;grid-template-columns:10mm minmax(0,1fr);align-items:center;gap:2mm}.skills-layer-head>span{display:flex;align-items:center;justify-content:center;width:9mm;height:7mm;border-radius:2mm;background:color-mix(in srgb,var(--layer) 20%,white);color:color-mix(in srgb,var(--layer) 78%,#101a3a);font:850 6.2pt/1 "Avenir Next",Arial,sans-serif}.skills-layer-head div{min-width:0}.skills-layer-head strong{display:block;color:#101a3a;font:750 8.6pt/1.08 "Avenir Next","Helvetica Neue",Arial,sans-serif;letter-spacing:-.012em;white-space:nowrap}.skills-layer-head small{display:block;margin-top:.9mm;color:#6d6875;font-size:6.1pt;line-height:1}.skills-layer-tags{min-width:0;display:flex;align-items:center;flex-wrap:wrap;gap:1mm}.skills-layer-tags b{display:inline-flex;align-items:center;gap:1mm;min-height:4.5mm;padding:.65mm 1.7mm;border:.2mm solid color-mix(in srgb,var(--layer) 42%,#ddd6d0);border-radius:99px;background:rgba(255,255,255,.86);color:#444758;font:700 5.25pt/1 "Avenir Next","Helvetica Neue",Arial,sans-serif;white-space:nowrap}.skills-layer-tags b.has-logo{padding-left:1.1mm;background:#fff;box-shadow:0 .65mm 1.7mm rgba(16,26,58,.08);color:#20243a;font-weight:800}.skills-layer-tags b img{display:block;width:3.1mm;height:3.1mm;object-fit:contain}.skills-layer-tags b span{display:block}.tower-result{height:14mm;margin-top:3mm;display:grid;grid-template-columns:31mm minmax(0,1fr) auto;align-items:center;gap:3mm;padding:0 4mm;border-radius:4mm;background:#101a3a;color:#fff;box-shadow:0 2mm 6mm rgba(16,26,58,.14)}.tower-result span{color:#63d88d;font:800 6.1pt/1 "Avenir Next",Arial,sans-serif;letter-spacing:.055em}.tower-result strong{font:750 10pt/1 "Avenir Next","Helvetica Neue",Arial,sans-serif}.tower-result small{color:#d9dced;font:650 6.2pt/1 "Avenir Next","Helvetica Neue",Arial,sans-serif}
/* Practice clarity V12: Chinese-first classroom labels plus a real system relationship view. */
.practice-stack{grid-template-columns:70mm minmax(0,1fr);align-items:stretch;gap:3.5mm;padding:3mm 4mm}.practice-stack:after{content:"SYSTEM BUILD";font-size:24pt}.practice-system-flow,.practice-tools{position:relative;z-index:1;min-width:0}.practice-system-flow header,.practice-tools header{margin-bottom:2mm}.practice-system-flow header small,.practice-tools header small{display:block;margin-bottom:.7mm;color:var(--accent);font:850 6.7pt/1 "PingFang SC","Helvetica Neue",Arial,sans-serif;letter-spacing:.02em}.practice-system-flow header strong,.practice-tools header strong{display:block;color:#20253d;font-size:6.8pt;line-height:1.25}.flow-nodes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:2.3mm;align-items:stretch}.flow-nodes span{position:relative;min-width:0;min-height:17mm;padding:2.2mm 1.4mm;border:.25mm solid color-mix(in srgb,var(--accent) 35%,#d8d3d0);border-top:.8mm solid var(--accent);border-radius:2.5mm;background:rgba(255,255,255,.94);color:#242940;font-size:6.05pt;line-height:1.22;font-weight:700;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow-wrap:anywhere}.flow-nodes span+span:before{content:"";position:absolute;left:-2.55mm;top:50%;width:2.3mm;height:.45mm;background:var(--accent)}.flow-nodes span+span:after{content:"";position:absolute;left:-.8mm;top:calc(50% - .8mm);border-left:1.2mm solid var(--accent);border-top:.8mm solid transparent;border-bottom:.8mm solid transparent}.flow-nodes b{display:block;margin-bottom:1mm;color:var(--accent);font:850 5.6pt/1 Arial}.practice-tools{padding-left:3.5mm;border-left:.25mm solid color-mix(in srgb,var(--accent) 30%,#d8d3d0)}.practice-stack-logos{gap:1.4mm}.practice-stack-logos .tech-logo{height:17.5mm;gap:.9mm;border-radius:2.7mm}.practice-stack-logos .tech-logo img{width:6.8mm;height:6.8mm}.practice-stack-logos .tech-logo b{font-size:5pt;line-height:1.05}.practice-page.lesson-rows-7 .practice-stack,.practice-page.lesson-rows-8 .practice-stack,.practice-page.lesson-rows-9 .practice-stack{padding:2.6mm 3.5mm}.practice-page.lesson-rows-7 .practice-system-flow header,.practice-page.lesson-rows-8 .practice-system-flow header,.practice-page.lesson-rows-9 .practice-system-flow header,.practice-page.lesson-rows-7 .practice-tools header,.practice-page.lesson-rows-8 .practice-tools header,.practice-page.lesson-rows-9 .practice-tools header{margin-bottom:1.3mm}.practice-page.lesson-rows-7 .flow-nodes span,.practice-page.lesson-rows-8 .flow-nodes span,.practice-page.lesson-rows-9 .flow-nodes span{min-height:14.5mm;padding:1.6mm 1.1mm;font-size:5.45pt}.practice-page.lesson-rows-7 .practice-stack-logos .tech-logo,.practice-page.lesson-rows-8 .practice-stack-logos .tech-logo,.practice-page.lesson-rows-9 .practice-stack-logos .tech-logo{height:14.5mm}
/* Weekly practice stack V14: every important tool/service is an individual,
   readable tag. Groups separate hands-on tools from comparisons and platform. */
.practice-page{grid-template-rows:8mm 44mm 20mm auto minmax(0,1fr) 38mm 6mm}
.practice-stack{grid-template-columns:67mm minmax(0,1fr);gap:3mm;padding:2.7mm 3.5mm}
.practice-system-flow header,.practice-tools header{margin-bottom:1.5mm}
.practice-tools{padding-left:3mm}
.practice-tools header small{font-size:6.55pt;font-weight:850;color:#101a3a}
.practice-tools header strong{font-size:5.8pt;color:#686b7a}
.practice-tag-groups{display:grid;gap:1.15mm}
.practice-tag-group{min-width:0;display:grid;grid-template-columns:27mm minmax(0,1fr);align-items:start;gap:1.4mm}
.practice-tag-group>strong{padding-top:1.15mm;color:#5f6070;font:850 4.35pt/1.05 "Avenir Next","Helvetica Neue",Arial,sans-serif;letter-spacing:.018em;white-space:nowrap}
.practice-tag-group.mechanisms>strong,.practice-tag-group.oss>strong{color:var(--accent)}
.practice-tag-group>div{min-width:0;display:flex;flex-wrap:wrap;gap:.75mm}
.practice-tech-tag{display:inline-flex;align-items:center;gap:.75mm;min-height:4.15mm;padding:.55mm 1.25mm;border:.2mm solid rgba(16,26,58,.15);border-radius:99px;background:rgba(255,255,255,.92);color:#252940;font:750 5.05pt/1 "Avenir Next","PingFang SC","Helvetica Neue",Arial,sans-serif;white-space:nowrap;box-shadow:0 .45mm 1.2mm rgba(16,26,58,.055)}
.practice-tag-group.mechanisms .practice-tech-tag{border-color:color-mix(in srgb,var(--accent) 52%,#d9d3ce);background:color-mix(in srgb,var(--accent) 9%,white);color:#101a3a}
.practice-tag-group.oss .practice-tech-tag{border-color:color-mix(in srgb,var(--accent) 38%,#d9d3ce);color:#101a3a}
.practice-tag-group.build .practice-tech-tag{background:rgba(247,247,249,.96);color:#4c4e5d}
.practice-tech-tag img{display:block;width:2.85mm;height:2.85mm;object-fit:contain;flex:0 0 auto}
.practice-tech-tag span{display:block}
.practice-page.lesson-rows-7 .practice-stack,.practice-page.lesson-rows-8 .practice-stack,.practice-page.lesson-rows-9 .practice-stack{padding:2.4mm 3.2mm}
.practice-page.lesson-rows-7 .practice-tag-groups,.practice-page.lesson-rows-8 .practice-tag-groups,.practice-page.lesson-rows-9 .practice-tag-groups{gap:.9mm}
.practice-page.lesson-rows-7 .practice-tech-tag,.practice-page.lesson-rows-8 .practice-tech-tag,.practice-page.lesson-rows-9 .practice-tech-tag{min-height:3.75mm;padding:.42mm 1.05mm;font-size:4.65pt}
.practice-page.lesson-rows-7 .practice-tech-tag img,.practice-page.lesson-rows-8 .practice-tech-tag img,.practice-page.lesson-rows-9 .practice-tech-tag img{width:2.55mm;height:2.55mm}
`;

async function build() {
  const [outline, publicCopy, cover, logo, product, knowledge, production, techAssets] = await Promise.all([
    fs.readFile(OUTLINE_PATH, 'utf8').then(JSON.parse),
    fs.readFile(COPY_PATH, 'utf8').then(JSON.parse),
    fs.readFile(path.join(PUBLIC, 'posters', 'assets', 'cohort-07-systematic-engineering-cover-bg-v1.png')),
    fs.readFile(path.join(PUBLIC, 'posters', 'assets', 'jr-academy-logo-zh.svg')),
    fs.readFile(path.join(PUBLIC, 'posters', 'assets', 'cohort-07-pdf-product-foundation-v1.png')),
    fs.readFile(path.join(PUBLIC, 'posters', 'assets', 'cohort-07-pdf-voice-rag-v1.png')),
    fs.readFile(path.join(PUBLIC, 'posters', 'assets', 'cohort-07-pdf-production-agent-v1.png')),
    loadTechLogos(),
  ]);
  const lessons = Object.fromEntries(outline.phases.flatMap((phase) => phase.lessons || []).filter((lesson) => lesson.code).map((lesson) => [lesson.code, lesson]));
  const renderDocument = (coverSrc, logoSrc, art) => {
    const pages = [];
    pages.push(`<section class="page cover-page" data-page="1">
      <img class="cover-image" src="${coverSrc}" alt="十层 Enterprise AI Engineering System"/>
      <div class="cover-content">
        <a class="cover-logo-link" href="https://jiangren.com.au" target="_blank" rel="noopener"><img class="cover-logo" src="${logoSrc}" alt="JR Academy 匠人学院"/></a>
        <span class="cover-kicker">3 YEARS · SYSTEMATIC AI ENGINEERING</span>
        <h1 class="cover-title">AI ENGINEER<br/>BOOTCAMP</h1>
        <div class="cover-title-zh">AI 工程师训练营</div>
        <span class="cover-cohort">连续 3 年 · 第七期</span>
        <span class="cover-rarity">全球少有 · 从基础到 Production 的完整体系</span>
        <h2 class="cover-positioning"><span>连续 3 年</span><em>系统教 AI Engineering</em></h2>
        <p class="cover-subtitle">历经 7 期课程迭代，从 LLM 原理、Context、RAG 到 Agent、Memory、Harness、Governance、Model Routing 与 Evaluation，持续构建完整的 AI 工程能力体系。</p>
        <div class="cover-proof"><span>3 年持续迭代</span><span>第 7 期课程体系</span><span>25 场双 Live</span><span>13 周 Production 项目主线</span></div>
        <div class="cover-system"><strong>系统教学，不是工具速成</strong><p>10-LAYER STACK · LLM · CONTEXT · RAG · AGENTS · MEMORY · HARNESS · GOVERNANCE · ROUTING · EVALUATION</p><a href="https://jiangren.com.au/program-course/ai-engineer-bootcamp" target="_blank" rel="noopener">查看完整课程与申请信息 → jiangren.com.au/program-course/ai-engineer-bootcamp</a></div>
      </div>
      <span class="cover-edition">第七期详细课程大纲</span>
    </section>`);
    pages.push(methodPage(2, art.product));
    pages.push(mapPage(3, art.knowledge));
    let pageNo = 4;
    for (let week = 1; week <= 13; week++) {
      const [theoryCode, practiceCode] = WEEK_LESSONS[week];
      const artKey = WEEK_STYLE[week][2];
      if (theoryCode && week === 3) {
        pages.push(livePage(pageNo++, week, lessons[theoryCode], 'theory', publicCopy, art[artKey], lessons, techAssets, {
          part: '1 / 2',
          title: 'Context Engineering：决定哪些信息进入模型',
          description: '先把 Context 拆成可管理的工程对象：盘点来源、决定 Include / Exclude，再设计结构、顺序和 Token Budget。',
          stepStart: 0,
          stepEnd: 4,
          supportHtml: contextBlueprintPanel(WEEK_STYLE[week][1]),
          leftLabel: '这一页先完成',
          leftText: 'Context Inventory、Selection Policy、Assembly Plan 与 Token Allocation。',
          rightLabel: '下一页继续',
          rightText: 'Lifecycle、Trust Boundary、Observability，以及最终可复用的 Context Architecture Blueprint。',
        }));
        pages.push(livePage(pageNo++, week, lessons[theoryCode], 'theory', publicCopy, art[artKey], lessons, techAssets, {
          part: '2 / 2',
          title: 'Context Engineering：管理生命周期、信任与验证',
          description: '再处理 Context 怎样按需加载、压缩、刷新和清除，并留下来源、版本、权限与选择证据。',
          stepStart: 4,
          stepEnd: 7,
        }));
      } else if (theoryCode) {
        pages.push(livePage(pageNo++, week, lessons[theoryCode], 'theory', publicCopy, art[artKey], lessons, techAssets));
      }
      pages.push(livePage(pageNo++, week, lessons[practiceCode], 'practice', publicCopy, art[artKey], lessons, techAssets));
    }
    pages.push(modesPage(pageNo++, art.production));
    pages.push(stackPage(pageNo++, art.production, techAssets));
    pages.push(careerPage(pageNo++, art.production));
    if (pages.length !== TOTAL_PAGES) throw new Error(`Expected ${TOTAL_PAGES} pages, got ${pages.length}`);
    return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>JR Academy AI Engineer 第七期详细大纲</title><style>${CSS}</style></head><body>${pages.join('\n')}</body></html>`;
  };
  const publicHtml = renderDocument('assets/cohort-07-systematic-engineering-cover-bg-v1.png', 'assets/jr-academy-logo-zh.svg', {
    product: 'assets/cohort-07-pdf-product-foundation-v1.png',
    knowledge: 'assets/cohort-07-pdf-voice-rag-v1.png',
    production: 'assets/cohort-07-pdf-production-agent-v1.png',
  });
  const standaloneHtml = renderDocument(dataUri(cover, 'image/png'), dataUri(logo, 'image/svg+xml'), {
    product: dataUri(product, 'image/png'),
    knowledge: dataUri(knowledge, 'image/png'),
    production: dataUri(production, 'image/png'),
  });
  await fs.mkdir(path.dirname(HTML_PATH), { recursive: true });
  await fs.mkdir(path.dirname(DOWNLOAD_PATH), { recursive: true });
  await fs.writeFile(HTML_PATH, publicHtml);
  await fs.writeFile(DOWNLOAD_PATH, standaloneHtml);
  console.log(HTML_PATH);
  console.log(DOWNLOAD_PATH);
}

build();
