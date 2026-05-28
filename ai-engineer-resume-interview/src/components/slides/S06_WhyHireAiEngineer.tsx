import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Reason {
	num: string;
	title: string;
	tagline: string;
	example: string;
	bg: string;
	accent: string;
	rotate: number;
}

const reasons: Reason[] = [
	{
		num: '01',
		title: '业务对齐',
		tagline: 'LLM 是通用工具，要被绑到具体业务流',
		example: '例：把 Claude 接到内部客服系统，要懂工单字段、SLA、退款规则——LLM 自己不懂业务',
		bg: colors.indigo,
		accent: colors.yellow,
		rotate: -2,
	},
	{
		num: '02',
		title: '质量兜底',
		tagline: 'LLM 会幻觉、会失败，要设计 eval + fallback',
		example: '例：法律 AI 助手生成的合同条款 95% 对，剩下 5% 必须人审——eval 集 + reviewer queue 都得自己搭',
		bg: colors.red,
		accent: colors.yellow,
		rotate: 2,
	},
	{
		num: '03',
		title: 'Production 落地',
		tagline: 'cost / latency / safety / observability，LLM 搞不定',
		example: '例：日均 50k 次调用要从 GPT-4 降到 Claude Haiku，省 80% 成本——选型 + 缓存 + 监控全套要自己做',
		bg: colors.teal,
		accent: colors.dark,
		rotate: -1,
	},
	{
		num: '04',
		title: 'AI 桥梁',
		tagline: '把 LLM 嫁接到企业现有 system',
		example: '例：要让 LLM 查 CRM、改工单、调 ERP——MCP / Function Calling / 数据库 schema 一样都不能少',
		bg: colors.yellow,
		accent: colors.red,
		rotate: 1,
	},
];

export default function S06_WhyHireAiEngineer() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '88%', padding: '28px 40px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}
				>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						WHY HIRE
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#666' }}>
						企业的 4 个真实需求
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '50px',
						fontWeight: 900,
						lineHeight: 1.15,
						letterSpacing: -1.5,
						marginBottom: 20,
					}}
				>
					企业招 AI Engineer 的
					<span style={{ display: 'inline-block', background: colors.yellow, padding: '0 14px', marginLeft: 10, transform: 'rotate(-1deg)', border, boxShadow: shadow }}>
						4 个真实理由
					</span>
				</motion.h2>

				{/* 4 张卡 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 20 }}>
					{reasons.map((r, i) => {
						const textColor = r.bg === colors.yellow || r.bg === colors.teal ? colors.black : colors.white;
						const exampleBg = textColor === colors.white ? 'rgba(0,0,0,0.22)' : 'rgba(255,255,255,0.55)';
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: r.rotate }}
								transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
								style={{
									background: r.bg,
									border,
									boxShadow: shadow,
									padding: '20px 22px',
									display: 'flex',
									flexDirection: 'column',
									color: textColor,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 30, fontWeight: 900, color: r.accent, lineHeight: 1, letterSpacing: -1 }}>
										{r.num}
									</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.5 }}>
										{r.title}
									</div>
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 700, lineHeight: 1.35, marginBottom: 10, opacity: 0.95 }}>
									{r.tagline}
								</div>
								<div style={{ background: exampleBg, padding: '10px 12px', fontFamily: fonts.body, fontSize: 13.5, fontWeight: 500, lineHeight: 1.5, marginTop: 'auto' }}>
									{r.example}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 底部小注 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.95 }}
					style={{ marginTop: 18, textAlign: 'center', fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 600 }}
				>
					这 4 个理由，决定了你简历上要放什么 — 下半场我们会一条条对应到 "怎么写"
				</motion.div>
			</div>
		</Slide>
	);
}
