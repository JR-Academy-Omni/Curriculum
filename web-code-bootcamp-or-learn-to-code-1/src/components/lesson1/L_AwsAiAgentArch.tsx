import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

const AWS_ORANGE = '#ff9900';
const AWS_INK = '#0f1830';
const VPC_GREEN = '#7AA116';
const PUBLIC_BLUE = '#147eba';
const PRIVATE_PURPLE = '#7d3ca6';
const DATA_TEAL = '#3b48cc';
const LLM_RED = '#dd344c';
const SEC_GRAY = '#6b7280';

interface NodeProps { x: number; y: number; w?: number; h?: number; icon: string; label: string; sub?: string; cat: 'compute' | 'storage' | 'ai' | 'security' | 'network' | 'observability' | 'user'; }

const CAT_COLOR: Record<NodeProps['cat'], string> = {
	compute: '#ed7100',     // AWS orange
	storage: '#7aa116',     // green
	ai: '#cd2264',          // magenta
	security: '#dd344c',    // red
	network: '#8c4fff',     // purple
	observability: '#01a88d', // teal
	user: '#3b48cc',        // blue
};

function Node({ x, y, w = 110, h = 70, icon, label, sub, cat }: NodeProps) {
	const bg = CAT_COLOR[cat];
	return (
		<div style={{
			position: 'absolute', left: x, top: y, width: w, height: h,
			background: '#fff', border: `2.5px solid ${AWS_INK}`,
			boxShadow: `2.5px 2.5px 0 ${bg}`,
			padding: 6, display: 'flex', flexDirection: 'column',
			alignItems: 'center', justifyContent: 'center',
			zIndex: 3,
		}}>
			<div style={{
				width: 30, height: 30, background: bg, color: '#fff',
				border: `2px solid ${AWS_INK}`,
				display: 'flex', alignItems: 'center', justifyContent: 'center',
				fontSize: 16, lineHeight: 1, marginBottom: 3,
			}}>
				{icon}
			</div>
			<div style={{
				fontFamily: fonts.heading, fontSize: 11, fontWeight: 900,
				color: AWS_INK, lineHeight: 1, letterSpacing: -0.2, textAlign: 'center',
			}}>
				{label}
			</div>
			{sub && (
				<div style={{
					fontFamily: fonts.mono, fontSize: 9, color: '#666',
					fontWeight: 700, marginTop: 2, lineHeight: 1, letterSpacing: 0.3,
				}}>
					{sub}
				</div>
			)}
		</div>
	);
}

function Zone({ x, y, w, h, label, color, dashed = true }: { x: number; y: number; w: number; h: number; label: string; color: string; dashed?: boolean }) {
	return (
		<div style={{
			position: 'absolute', left: x, top: y, width: w, height: h,
			border: `${dashed ? '3px dashed' : '3px solid'} ${color}`,
			background: `${color}10`, borderRadius: 6, zIndex: 1,
		}}>
			<div style={{
				position: 'absolute', top: -14, left: 14,
				background: '#1a2240', color, padding: '2px 10px',
				fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, letterSpacing: 1.5,
				border: `2px solid ${color}`,
			}}>
				{label}
			</div>
		</div>
	);
}

export default function L_AwsAiAgentArch() {
	// 服务节点位置 (基于 ~1700 wide x 720 tall canvas)
	const NODES: NodeProps[] = [
		// 边缘 + 用户
		{ x: 30, y: 280, icon: '👤', label: 'User', sub: 'web / mobile', cat: 'user' },
		{ x: 175, y: 200, icon: '🌐', label: 'CloudFront', sub: 'CDN', cat: 'network' },
		{ x: 175, y: 360, icon: '🛡', label: 'WAF + Shield', sub: 'security', cat: 'security' },
		{ x: 320, y: 280, icon: '📍', label: 'Route 53', sub: 'DNS', cat: 'network' },

		// Public subnet (API)
		{ x: 510, y: 200, icon: '⇆', label: 'API Gateway', sub: 'REST · WS', cat: 'network' },
		{ x: 510, y: 290, icon: '🔐', label: 'Cognito', sub: 'auth', cat: 'security' },
		{ x: 510, y: 380, icon: '⚡', label: 'EventBridge', sub: 'events', cat: 'compute' },

		// Compute subnet
		{ x: 720, y: 170, icon: 'λ', label: 'Lambda', sub: 'serverless', cat: 'compute' },
		{ x: 720, y: 270, icon: '🐳', label: 'ECS Fargate', sub: 'agent loop', cat: 'compute' },
		{ x: 720, y: 370, icon: '🔄', label: 'Step Functions', sub: 'workflow', cat: 'compute' },
		{ x: 720, y: 470, icon: '📨', label: 'SQS / SNS', sub: 'queue / pub-sub', cat: 'compute' },

		// LLM / AI subnet
		{ x: 920, y: 170, w: 130, icon: '🧠', label: 'Bedrock', sub: 'Claude · Nova', cat: 'ai' },
		{ x: 920, y: 270, w: 130, icon: '🤖', label: 'Bedrock Agents', sub: 'tool use · RAG', cat: 'ai' },
		{ x: 920, y: 370, w: 130, icon: '🎯', label: 'Bedrock Guardrails', sub: 'safety', cat: 'ai' },
		{ x: 920, y: 470, w: 130, icon: '🧬', label: 'SageMaker', sub: 'fine-tune', cat: 'ai' },

		// Data subnet (向量 + 存储)
		{ x: 1140, y: 170, w: 130, icon: '🔍', label: 'OpenSearch', sub: 'vector + 检索', cat: 'storage' },
		{ x: 1140, y: 270, w: 130, icon: '🐘', label: 'Aurora pgvector', sub: 'PostgreSQL', cat: 'storage' },
		{ x: 1140, y: 370, w: 130, icon: '📊', label: 'DynamoDB', sub: 'session · state', cat: 'storage' },
		{ x: 1140, y: 470, w: 130, icon: '⚡', label: 'ElastiCache', sub: 'Redis cache', cat: 'storage' },

		// 文档源
		{ x: 1340, y: 270, w: 130, icon: '📦', label: 'S3', sub: '原始文档 / 日志', cat: 'storage' },
		{ x: 1340, y: 370, w: 130, icon: '📥', label: 'Kinesis', sub: '流数据', cat: 'storage' },

		// 外部
		{ x: 1340, y: 170, w: 130, icon: '🔗', label: 'External APIs', sub: 'tool calls', cat: 'network' },

		// 底部 observability bar (cross-cutting)
		{ x: 175, y: 580, icon: '📈', label: 'CloudWatch', sub: 'logs · metrics', cat: 'observability' },
		{ x: 320, y: 580, icon: '🔬', label: 'X-Ray', sub: 'tracing', cat: 'observability' },
		{ x: 510, y: 580, icon: '📜', label: 'CloudTrail', sub: 'audit', cat: 'observability' },
		{ x: 720, y: 580, icon: '🚨', label: 'GuardDuty', sub: 'threat detect', cat: 'security' },
	];

	// 连接线 (源, 目标, 是否为虚线)
	const EDGES: { from: [number, number]; to: [number, number]; dashed?: boolean }[] = [
		// User → edge
		{ from: [140, 315], to: [175, 235] },
		{ from: [140, 315], to: [175, 395] },
		{ from: [285, 235], to: [320, 305] },
		{ from: [285, 395], to: [320, 325] },
		// Edge → API
		{ from: [430, 315], to: [510, 235] },
		// API → compute
		{ from: [620, 235], to: [720, 205] },
		{ from: [620, 235], to: [720, 305] },
		// Compute → AI
		{ from: [830, 205], to: [920, 205] },
		{ from: [830, 305], to: [920, 305] },
		{ from: [830, 305], to: [920, 405] },
		// AI ↔ data (核心 RAG/memory)
		{ from: [1050, 205], to: [1140, 205] },
		{ from: [1050, 305], to: [1140, 305] },
		{ from: [1050, 305], to: [1140, 405] },
		// Data → S3 / Kinesis
		{ from: [1270, 205], to: [1340, 305] },
		{ from: [1270, 305], to: [1340, 305] },
		// AI → External tool
		{ from: [1050, 305], to: [1340, 205], dashed: true },
		// Compute → Step / SQS
		{ from: [775, 240], to: [775, 370] },
		{ from: [775, 440], to: [775, 470] },
	];

	return (
		<Slide bg={AWS_INK} style={{ position: 'relative', overflow: 'hidden' }}>
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(255,153,0,0.025) 0 2px, transparent 2px 28px)`,
				zIndex: 0,
			}} />

			<div style={{
				position: 'relative', zIndex: 1, width: '96%', maxWidth: 1820, padding: '20px 30px',
			}}>
				{/* 顶部标题条 */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					style={{
						marginBottom: 14, display: 'flex', alignItems: 'baseline',
						gap: 14, flexWrap: 'wrap',
					}}
				>
					<div style={{
						display: 'inline-block', padding: '8px 18px',
						background: AWS_ORANGE, color: AWS_INK,
						fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, letterSpacing: -0.5,
						border: `3px solid #fff`, boxShadow: `4px 4px 0 #000`,
					}}>
						aws
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: 40, fontWeight: 900,
						letterSpacing: -1.5, lineHeight: 1, color: '#fff',
					}}>
						Generative AI Agent · <span style={{ color: AWS_ORANGE }}>Reference Architecture</span>
					</h2>
					<div style={{
						padding: '5px 12px', background: LLM_RED, color: '#fff',
						fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, letterSpacing: 2,
						border: `2.5px solid #fff`, transform: 'rotate(-2deg)',
					}}>
						🎯 6 个月后能搭的目标
					</div>
				</motion.div>

				{/* 架构图主画布 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					style={{
						position: 'relative', width: '100%', height: 720,
						background: '#1a2240', border: `4px solid ${AWS_ORANGE}`,
						boxShadow: `8px 8px 0 #000`,
						overflow: 'hidden',
					}}
				>
					{/* 网格背景 */}
					<svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.15 }}>
						<defs>
							<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
								<path d="M 40 0 L 0 0 0 40" fill="none" stroke={AWS_ORANGE} strokeWidth="0.5" />
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid)" />
					</svg>

					{/* 区域 (VPC / Subnet 虚线框) */}
					<Zone x={150} y={140} w={310} h={420} label="EDGE · Public Internet" color={PUBLIC_BLUE} />
					<Zone x={480} y={140} w={420} h={520} label="VPC · Public Subnet" color={PUBLIC_BLUE} />
					<Zone x={690} y={140} w={220} h={420} label="Compute Subnet" color={PRIVATE_PURPLE} />
					<Zone x={900} y={140} w={220} h={420} label="LLM · AI Subnet" color={LLM_RED} />
					<Zone x={1120} y={140} w={350} h={420} label="Data · Memory Subnet" color={DATA_TEAL} />
					<Zone x={150} y={550} w={690} h={110} label="Observability · Security · Cross-Cutting" color={SEC_GRAY} />
					<Zone x={20} y={120} w={1460} h={560} label="AWS Region · ap-southeast-2 (Sydney)" color={VPC_GREEN} dashed={false} />

					{/* 连接线 SVG (在节点下方) */}
					<svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }} viewBox="0 0 1460 720" preserveAspectRatio="none">
						<defs>
							<marker id="ah1" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="10" markerHeight="10" orient="auto">
								<polygon points="0,0 12,6 0,12" fill={AWS_ORANGE} />
							</marker>
						</defs>
						{EDGES.map((e, i) => (
							<line
								key={i}
								x1={e.from[0]} y1={e.from[1]}
								x2={e.to[0]} y2={e.to[1]}
								stroke={AWS_ORANGE} strokeWidth="2"
								strokeDasharray={e.dashed ? '5 4' : undefined}
								markerEnd="url(#ah1)"
								opacity="0.85"
							/>
						))}
					</svg>

					{/* 节点 */}
					{NODES.map((n, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.4 + i * 0.025 }}
							style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
						>
							<Node {...n} />
						</motion.div>
					))}

					{/* 图例 (右下) */}
					<div style={{
						position: 'absolute', bottom: 12, right: 14, zIndex: 4,
						background: 'rgba(255,255,255,0.95)', border: `2.5px solid ${AWS_INK}`,
						padding: '8px 12px', boxShadow: `3px 3px 0 ${AWS_ORANGE}`,
						display: 'flex', flexDirection: 'column', gap: 4, minWidth: 240,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 900,
							color: AWS_INK, letterSpacing: 1.5, marginBottom: 2,
						}}>
							SERVICE CATEGORY
						</div>
						{[
							{ c: CAT_COLOR.network, l: 'Network · Edge' },
							{ c: CAT_COLOR.compute, l: 'Compute · Orchestration' },
							{ c: CAT_COLOR.ai, l: 'AI · LLM · Agent' },
							{ c: CAT_COLOR.storage, l: 'Storage · Memory · Vector' },
							{ c: CAT_COLOR.security, l: 'Security · Auth' },
							{ c: CAT_COLOR.observability, l: 'Observability' },
						].map((it) => (
							<div key={it.l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
								<div style={{ width: 12, height: 12, background: it.c, border: `1.5px solid ${AWS_INK}` }} />
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: AWS_INK }}>
									{it.l}
								</div>
							</div>
						))}
					</div>
				</motion.div>

				{/* 底部 punchline */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 12, padding: '10px 22px',
						background: AWS_ORANGE, color: AWS_INK,
						border: `3px solid #000`, boxShadow: `5px 5px 0 #fff`,
						fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
						letterSpacing: -0.3, lineHeight: 1.4, textAlign: 'center',
					}}
				>
					25+ AWS 服务 · VPC 子网分区 · 数据流闭环 · <span style={{ background: AWS_INK, color: AWS_ORANGE, padding: '0 8px', border: `2px solid #fff` }}>能从零画 + 上线这套图 = AI Engineer L4+</span>
				</motion.div>
			</div>
		</Slide>
	);
}
