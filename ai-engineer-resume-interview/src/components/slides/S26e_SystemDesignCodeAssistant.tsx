import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

/**
 * S26e — System Design 加餐 #3: Code Assistant (Copilot / Cursor)
 */

interface Step {
	num: string;
	title: string;
	time: string;
	color: string;
	bullets: string[];
}

const steps: Step[] = [
	{
		num: '01',
		title: '澄清需求',
		time: '5 min',
		color: colors.p1,
		bullets: [
			'三种模式：inline 补全 (10M+ DAU 高频) · chat · agent edits (多文件)',
			'Latency 红线：TTFT < 300ms (inline) · < 1s (chat first token)',
			'上下文：整个 repo 可能上 GB · 必须智能选 top-k file',
			'隐私：用户代码不能训练 · enterprise 客户要 self-host 选项',
			'Accept rate KPI：> 30% (低于这个用户立刻卸载)',
		],
	},
	{
		num: '02',
		title: '高层架构',
		time: '10 min',
		color: colors.p3,
		bullets: [
			'IDE 端 (VSCode/Cursor) → Local indexer (tree-sitter 解析 AST + symbol)',
			'Context retrieval: 当前文件 + import graph + 最近编辑文件 + grep top-k',
			'Model routing: inline → 小模型 self-host (latency) · chat → Claude/GPT (quality)',
			'Speculative decoding (inline) · KV cache + prefix cache (重复前缀复用)',
			'Edit transaction: agent 改多文件 → 生成 diff → 用户 review/accept',
			'Privacy gate: PII 检测 + 用户可关 telemetry · enterprise BYOK',
		],
	},
	{
		num: '03',
		title: '关键决策',
		time: '5 min',
		color: colors.p5,
		bullets: [
			'Inline model: 自托管小模型 (Qwen Coder 7B / DeepSeek Coder)',
			'Chat / Agent: Claude Sonnet 4.6 主力 · Opus 复杂 refactor',
			'Index: tree-sitter 解析 → SQLite (本地索引 · 不传服务器)',
			'Caching: prefix cache (公共代码模板) hit rate ~25%',
			'Streaming: 必须 SSE · 用户每 200ms 没看到字就觉得卡',
		],
	},
	{
		num: '04',
		title: '易踩雷',
		time: '5 min',
		color: colors.red,
		bullets: [
			'❌ Context 太大 → 模型炸 + latency 起飞 · 必须 top-k 选',
			'❌ 用户代码上传 → 隐私死刑 · 必须 local index + 可关 telemetry',
			'❌ 没 speculative decoding → inline TTFT 卡到 800ms · 用户秒卸',
			'❌ Edit 没 diff preview → AI 改错直接覆盖文件 = 用户工作丢失',
			'❌ Cost 失控 → 大公司每天 $100k+ token · 必须 model routing',
		],
	},
	{
		num: '05',
		title: '量化指标',
		time: '5 min',
		color: colors.p7,
		bullets: [
			'Inline TTFT p95: < 300ms · accept rate 30-40%',
			'Chat first token: < 1s · 完整响应 < 8s',
			'Cost/inline: < $0.001 (self-host 小模型大幅压低)',
			'Cost/agent edit: $0.05-0.20/task (复杂 refactor 调 Opus)',
			'Index 占用: < 200MB / repo · 增量更新 < 100ms',
		],
	},
];

export default function S26e_SystemDesignCodeAssistant() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '18px 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
				{/* 顶部 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							SYS DESIGN · 加餐 3
						</span>
						<span style={{ padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 11, fontWeight: 800, border }}>
							对标：GitHub Copilot · Cursor · Claude Code · Windsurf
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -1 }}>
						Code Assistant · <span style={{ color: colors.red }}>10M+ DAU · 300ms TTFT · 隐私</span>
					</h2>
				</motion.div>

				{/* 5 步骨架 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, minHeight: 0 }}>
					{steps.map((s, i) => (
						<motion.div
							key={s.num}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + i * 0.06 }}
							style={{ background: colors.white, border, boxShadow: shadowSm, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
						>
							<div style={{ background: s.color, color: colors.white, padding: '8px 10px', borderBottom: `3px solid ${colors.black}` }}>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900 }}>{s.num}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 10, opacity: 0.85 }}>{s.time}</span>
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, letterSpacing: -0.3, lineHeight: 1.1 }}>
									{s.title}
								</div>
							</div>
							<div style={{ padding: '10px 12px', flex: 1 }}>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
									{s.bullets.map((b, j) => (
										<li key={j} style={{ fontSize: 12, lineHeight: 1.45, marginBottom: 5, color: colors.black, fontWeight: 600, display: 'flex', gap: 4 }}>
											<span style={{ color: s.color, fontWeight: 900, flexShrink: 0 }}>·</span>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>

				{/* 落点 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} style={{ background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.yellow, letterSpacing: 1 }}>核心考点</span>
					<span style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 700, lineHeight: 1.4 }}>
						<strong style={{ color: colors.yellow }}>300ms TTFT</strong> · <strong style={{ color: colors.yellow }}>本地 index 隐私</strong> · <strong style={{ color: colors.yellow }}>Model Routing</strong> · <strong style={{ color: colors.yellow }}>Speculative Decoding</strong> · <strong style={{ color: colors.yellow }}>Diff preview</strong> — 5 点全提到 = 资深 AI Engineer
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}

export const __unused = shadow;
