// Enterprise agent platform — logical architecture（GCP 版）。坐标基于 1180×724 的图区。
// 一页讲四条线：同步请求、身份、异步 ingestion、tracing。
// 图标来自 Google Cloud 官方图标包（cloud.google.com/icons）；官方只给核心产品单独图标，
// 其余服务按官方做法用类别图标（Networking / Security & Identity / Integration Services / Data Analytics / Databases）。
// LiteLLM 用自己的 logo；Langfuse、ClickHouse、浏览器、外部系统不配图标。

export type FlowKind = 'sync' | 'identity' | 'ingest' | 'trace';
export type NodeKind = 'plain' | 'compute' | 'managed' | 'data';
export type GroupColor = 'orange' | 'red' | 'blue' | 'teal' | 'purple' | 'dark';

export interface ArchGroup {
	id: string;
	title: string;
	x: number; y: number; w: number; h: number;
	color: GroupColor;
	titleAlign?: 'left' | 'center' | 'right';
	titleX?: number; // 标题左边距，用来避开竖向箭头
}

export interface ArchNode {
	id: string;
	title: string;
	sub?: string;
	pill?: string; // 卡片内的红色小条（guardrail callbacks）
	icon?: string; // public/logos 下的路径：gcp/*.svg 或品牌 png
	x: number; y: number; w: number; h: number;
	kind: NodeKind;
}

export interface ArchEdge {
	id: string;
	d: string;
	kind: FlowKind;
	label?: string;
	lx?: number; ly?: number;
}

export const FLOW_LEGEND: { kind: FlowKind; label: string }[] = [
	{ kind: 'sync', label: 'sync request' },
	{ kind: 'identity', label: 'identity' },
	{ kind: 'ingest', label: 'async ingestion' },
	{ kind: 'trace', label: 'traces (async)' },
];

export const ARCH_GROUPS: ArchGroup[] = [
	{ id: 'cloud', title: 'Google Cloud', x: 0, y: 62, w: 1010, h: 662, color: 'dark' },
	{ id: 'apis', title: 'Google-managed APIs', x: 14, y: 160, w: 204, h: 270, color: 'orange' },
	{ id: 'run', title: 'Cloud Run · 在 VPC 之外 · ingress: internal + LB · 服务间走 IAM', x: 240, y: 160, w: 595, h: 270, color: 'red', titleAlign: 'center' },
	{ id: 'vpc', title: 'VPC · private IPs only', x: 240, y: 462, w: 755, h: 250, color: 'blue', titleX: 58 },
	{ id: 'gke', title: 'GKE · Langfuse v3', x: 475, y: 606, w: 355, h: 98, color: 'teal' },
	{ id: 'sources', title: 'Source systems（示例）', x: 1030, y: 440, w: 150, h: 216, color: 'purple' },
];

export const ARCH_NODES: ArchNode[] = [
	{ id: 'user', title: 'User / browser', x: 330, y: 0, w: 170, h: 44, kind: 'plain' },
	{ id: 'idp', title: 'Google Identity (OIDC)', icon: 'gcp/security-identity.svg', x: 600, y: 0, w: 215, h: 44, kind: 'plain' },
	{ id: 'lb', title: 'External HTTPS LB + Cloud Armor', sub: 'TLS · WAF · rate limit', icon: 'gcp/networking.svg', x: 250, y: 84, w: 420, h: 48, kind: 'plain' },
	{ id: 'spa', title: 'Web SPA', sub: 'GCS + CDN', icon: 'gcp/cloud-storage.svg', x: 730, y: 84, w: 170, h: 48, kind: 'plain' },

	{ id: 'agent', title: 'Agent runtime · ADK', sub: 'SSE streaming · tool orchestration · 校验 ID token', pill: 'Guardrail callbacks：before_model · after_model · before_tool', icon: 'gcp/cloud-run.svg', x: 260, y: 196, w: 220, h: 100, kind: 'compute' },
	{ id: 'platform', title: 'Platform API', sub: 'MCP tools · REST · per-user ACL filter · 写操作需人工批准', icon: 'gcp/cloud-run.svg', x: 580, y: 196, w: 235, h: 100, kind: 'compute' },
	{ id: 'litellm', title: 'LLM gateway · LiteLLM', sub: 'routing · budgets · spend · virtual keys', icon: 'litellm.png', x: 260, y: 340, w: 165, h: 72, kind: 'compute' },
	{ id: 'worker', title: 'Ingestion worker', sub: 'sanitize · chunk · embed · 增量 + ACL sync', icon: 'gcp/cloud-run.svg', x: 650, y: 340, w: 170, h: 72, kind: 'compute' },

	{ id: 'armor', title: 'Model Armor', sub: '筛查 prompt 与 response', icon: 'gcp/security-identity.svg', x: 28, y: 214, w: 176, h: 62, kind: 'managed' },
	{ id: 'vertex', title: 'Vertex AI', sub: 'Gemini · embeddings', icon: 'gcp/vertex-ai.svg', x: 28, y: 345, w: 176, h: 62, kind: 'managed' },
	{ id: 'scheduler', title: 'Cloud Scheduler', sub: '增量 sync cron', icon: 'gcp/integration-services.svg', x: 850, y: 212, w: 148, h: 56, kind: 'managed' },
	{ id: 'pubsub', title: 'Pub/Sub', sub: 'retries + dead letter', icon: 'gcp/data-analytics.svg', x: 850, y: 348, w: 148, h: 56, kind: 'managed' },

	{ id: 'sessions', title: 'Session store', sub: 'ADK sessions + memory', icon: 'gcp/cloud-sql.svg', x: 452, y: 490, w: 150, h: 62, kind: 'data' },
	{ id: 'knowledge', title: 'Knowledge store', sub: 'Postgres + pgvector · chunks + doc ACLs', icon: 'gcp/cloud-sql.svg', x: 615, y: 490, w: 190, h: 62, kind: 'data' },
	{ id: 'nat', title: 'Cloud NAT', sub: 'fixed egress IP', icon: 'gcp/networking.svg', x: 835, y: 490, w: 145, h: 62, kind: 'plain' },

	{ id: 'ilb', title: 'Internal LB', sub: 'trace ingest, private', icon: 'gcp/networking.svg', x: 256, y: 634, w: 200, h: 56, kind: 'plain' },
	{ id: 'lfWeb', title: 'Langfuse web', sub: 'API + UI', x: 487, y: 634, w: 103, h: 58, kind: 'compute' },
	{ id: 'lfWorker', title: 'Langfuse worker', sub: 'ingest + evals', x: 604, y: 634, w: 103, h: 58, kind: 'compute' },
	{ id: 'clickhouse', title: 'ClickHouse', sub: 'traces', x: 721, y: 634, w: 97, h: 58, kind: 'data' },
	{ id: 'stores', title: 'Managed stores', sub: 'Memorystore Redis · Cloud SQL · GCS', icon: 'gcp/databases.svg', x: 845, y: 622, w: 142, h: 80, kind: 'data' },
];

export const SOURCE_SYSTEMS = ['Docs / wiki', 'Tickets', 'CRM', 'Data warehouse'];

export const ARCH_EDGES: ArchEdge[] = [
	{ id: 'idToken', kind: 'identity', d: 'M600 22 H502', label: 'ID token', lx: 551, ly: 22 },
	{ id: 'https', kind: 'sync', d: 'M415 44 V83', label: 'HTTPS + ID token', lx: 415, ly: 62 },
	{ id: 'spaRoute', kind: 'sync', d: 'M670 108 H729', label: '/', lx: 700, ly: 108 },
	{ id: 'chat', kind: 'sync', d: 'M330 132 V195', label: '/chat · SSE', lx: 330, ly: 147 },
	{ id: 'api', kind: 'sync', d: 'M650 132 V195', label: '/api', lx: 650, ly: 147 },
	{ id: 'mcp', kind: 'sync', d: 'M480 250 H579', label: 'MCP + user ID', lx: 530, ly: 236 },
	{ id: 'screen', kind: 'sync', d: 'M260 246 H205' },
	{ id: 'invoke', kind: 'sync', d: 'M320 296 V339', label: 'invoke', lx: 320, ly: 318 },
	{ id: 'model', kind: 'sync', d: 'M260 376 H205' },
	{ id: 'sessionsRw', kind: 'sync', d: 'M465 296 V489', label: 'sessions R/W', lx: 518, ly: 446 },
	{ id: 'retrieval', kind: 'sync', d: 'M628 296 V489', label: 'ACL-filtered retrieval', lx: 560, ly: 318 },
	{ id: 'trigger', kind: 'ingest', d: 'M924 268 V347', label: 'trigger', lx: 924, ly: 308 },
	{ id: 'jobs', kind: 'ingest', d: 'M850 376 H821', label: 'jobs', lx: 836, ly: 393 },
	{ id: 'chunks', kind: 'ingest', d: 'M720 412 V489', label: 'chunks + ACLs', lx: 720, ly: 446 },
	{ id: 'pull', kind: 'ingest', d: 'M800 412 V446 H905 V489', label: 'pull', lx: 868, ly: 446 },
	{ id: 'httpsPull', kind: 'ingest', d: 'M980 521 H1029', label: 'HTTPS pull', lx: 1003, ly: 566 },
	{ id: 'egress', kind: 'sync', d: '', label: 'Direct VPC egress', lx: 378, ly: 446 },
	{ id: 'traceLlm', kind: 'trace', d: 'M290 412 V633', label: 'traces', lx: 290, ly: 446 },
	{ id: 'traceAgent', kind: 'trace', d: 'M440 296 V633', label: 'traces', lx: 440, ly: 590 },
	{ id: 'lf1', kind: 'trace', d: 'M456 662 H486' },
	{ id: 'lf2', kind: 'trace', d: 'M590 662 H603' },
	{ id: 'lf3', kind: 'trace', d: 'M707 662 H720' },
	{ id: 'lf4', kind: 'trace', d: 'M818 662 H844' },
];

// 讲解顺序：讲者整理的示例话术，不是标准答案
export interface TalkStep {
	title: string;
	say: string;
	nodes: string[];
	edges: string[];
	groups: string[];
}

export const TALK_STEPS: TalkStep[] = [
	{
		title: '入口与身份',
		say: '用户用 Google 账号登录拿 ID token；外部 HTTPS LB + Cloud Armor 统一收流量，做 TLS、WAF、限流，静态 SPA 走 GCS + CDN。',
		nodes: ['user', 'idp', 'lb', 'spa'], edges: ['idToken', 'https', 'spaRoute'], groups: [],
	},
	{
		title: 'Agent runtime',
		say: '/chat 用 SSE 进 ADK 写的 Agent runtime；调模型、调工具前后都过 guardrail callback 和 Model Armor，会话状态落在 Session store。',
		nodes: ['lb', 'agent', 'armor', 'sessions'], edges: ['chat', 'screen', 'sessionsRw'], groups: ['run', 'apis'],
	},
	{
		title: '工具与权限',
		say: 'Agent 只通过 MCP 调 Platform API，并带上 user ID；检索按每个用户的 ACL 过滤，写操作要人工批准。',
		nodes: ['lb', 'agent', 'platform', 'knowledge'], edges: ['api', 'mcp', 'retrieval'], groups: ['run'],
	},
	{
		title: '模型网关',
		say: '所有模型调用走 LiteLLM：路由、预算、spend、virtual keys 都在这层，后面是 Vertex AI。',
		nodes: ['agent', 'litellm', 'vertex'], edges: ['invoke', 'model'], groups: ['run', 'apis'],
	},
	{
		title: '异步 ingestion',
		say: 'Scheduler 定时触发，Pub/Sub 管重试和 dead letter；worker 经 Cloud NAT 的固定 IP 拉外部系统，把 chunk 和文档 ACL 一起写进 Knowledge store。',
		nodes: ['scheduler', 'pubsub', 'worker', 'knowledge', 'nat'], edges: ['trigger', 'jobs', 'chunks', 'pull', 'httpsPull'], groups: ['sources'],
	},
	{
		title: 'Tracing',
		say: 'Agent 和网关的 trace 异步打到 VPC 内的 Langfuse v3（GKE），数据留在自己的网络里。',
		nodes: ['agent', 'litellm', 'ilb', 'lfWeb', 'lfWorker', 'clickhouse', 'stores'], edges: ['traceLlm', 'traceAgent', 'lf1', 'lf2', 'lf3', 'lf4'], groups: ['gke'],
	},
];

// 讲者观点：画完图后常见的追问
export const FOLLOW_UPS = ['为什么模型调用要过一层网关？', '为什么 Agent 只能通过 MCP 碰业务数据？', '文档权限变了，检索结果怎么跟着变？', '哪一环挂了，用户会看到什么？'];

export const ARCH_ICON_NOTE = '图标：Google Cloud 官方图标包；没有单独图标的服务按官方做法用类别图标，LiteLLM 用自己的 logo';
