import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border, shadow } from '../ui';

// 8 大类被 AI 重塑的工作 —— 共性都是：重复 + 非 stakeholder + 数字化 IO + 单一上下文
interface Category {
	no: string;
	name: string;
	nameEn: string;
	jobs: string[];
	why: string;
	severity: 'extreme' | 'high' | 'medium';
}

const CATEGORIES: Category[] = [
	{
		no: '01',
		name: '数据整理 / 报告制作',
		nameEn: 'Data Wrangling',
		jobs: ['BI Dashboard Analyst', 'Junior Data Analyst', 'Financial Reporting Analyst', 'Excel Reconciliation Clerk', 'Market Research Analyst (基础)'],
		why: 'SQL · 图表 · 模板报告全部能 AI 一句话搞定',
		severity: 'extreme',
	},
	{
		no: '02',
		name: '后台行政',
		nameEn: 'Back-office Admin',
		jobs: ['Admin Assistant', 'Bookkeeper', 'Data Entry Clerk', 'Travel Agent', 'Payroll Clerk', 'Records Clerk'],
		why: '重复 form-filling + 调度 + 录入 全 SOP 化',
		severity: 'extreme',
	},
	{
		no: '03',
		name: '基础内容生产',
		nameEn: 'Basic Content',
		jobs: ['Junior Copywriter', 'Marketing Coordinator', 'Manual SEO Specialist', 'Junior News Editor', '机翻 Translator'],
		why: 'AI 写文案 / 配图 / 翻译 / 摘要 都已经够用',
		severity: 'extreme',
	},
	{
		no: '04',
		name: '基础法律 / 合规',
		nameEn: 'Junior Legal',
		jobs: ['Paralegal', 'Junior Lawyer (基础研究)', 'Compliance Analyst', 'Contract Reviewer (基础)'],
		why: '文档检索 + 模板生成 + rule-checking AI 更快',
		severity: 'high',
	},
	{
		no: '05',
		name: 'Tier-1 客户支持',
		nameEn: 'Tier-1 Customer Support',
		jobs: ['Call Center T1', 'Email Support', 'Chat Support', 'FAQ 答疑'],
		why: 'AI Chatbot + RAG 已替代 80% 重复咨询',
		severity: 'extreme',
	},
	{
		no: '06',
		name: '基础编程',
		nameEn: 'Junior Code',
		jobs: ['CRUD Developer', 'Junior UI Dev (纯实现)', 'Manual QA Tester', 'WordPress Theme Dev', '小程序模板复制'],
		why: 'Cursor / Copilot / Claude Code 生成 boilerplate',
		severity: 'high',
	},
	{
		no: '07',
		name: '销售开发 (SDR / Outbound)',
		nameEn: 'Sales Development',
		jobs: ['SDR / BDR', 'Cold Caller', 'Inbound Lead Qualifier', '基础 Outbound Email Writer'],
		why: 'AI 自动 personalized email + 自动 qualify lead',
		severity: 'high',
	},
	{
		no: '08',
		name: '基础设计',
		nameEn: 'Junior Design',
		jobs: ['Junior Graphic Designer (社媒图)', 'Junior UI Designer (静态 mockup)', 'Banner / Logo (entry-level)'],
		why: 'Midjourney + DALL-E + Canva AI 已够用',
		severity: 'medium',
	},
];

const SEVERITY_COLOR: Record<Category['severity'], { bg: string; text: string; label: string }> = {
	extreme: { bg: colors.explosive, text: colors.white, label: '极高风险' },
	high: { bg: colors.orange, text: colors.white, label: '高风险' },
	medium: { bg: colors.yellow, text: colors.black, label: '中等风险' },
};

export default function C02b_AffectedCategories() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 12 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '5px 12px', background: colors.explosive,
						color: colors.white, fontFamily: fonts.mono, fontSize: 13,
						fontWeight: 700, letterSpacing: 2, marginBottom: 10,
					}}>8 个工作品类 · 全部正在被 AI 重塑</div>
					<Title size="40px">
						被 AI 重塑的 <span style={{ color: colors.explosive }}>8 类工作</span>
					</Title>
					<p style={{ fontSize: 15, color: '#555', marginTop: 6 }}>
						共同特征：① 重复模式 + ② 不是 stakeholder + ③ 数字化输入输出 + ④ 单一上下文
					</p>
				</motion.div>

				{/* 8-card grid 4x2 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
					style={{
						display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, width: '100%',
					}}
				>
					{CATEGORIES.map((c) => {
						const sev = SEVERITY_COLOR[c.severity];
						return (
							<motion.div
								key={c.no}
								variants={{
									hidden: { opacity: 0, y: 20, scale: 0.95 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
								style={{
									background: colors.white, border, boxShadow: shadow,
									padding: 14, display: 'flex', flexDirection: 'column',
									minHeight: 220, position: 'relative',
								}}
							>
								{/* Severity tag */}
								<div style={{
									position: 'absolute', top: -10, right: -8,
									padding: '3px 8px', background: sev.bg, color: sev.text,
									fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
									letterSpacing: 1, border: `2px solid ${colors.black}`,
								}}>{sev.label}</div>

								{/* Number + Name */}
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 22, fontWeight: 700,
										color: colors.explosive, lineHeight: 1,
									}}>{c.no}</span>
									<span style={{
										fontFamily: fonts.mono, fontSize: 11, color: '#999',
										letterSpacing: 1, textTransform: 'uppercase',
									}}>{c.nameEn}</span>
								</div>
								<div style={{
									fontSize: 16, fontWeight: 900, lineHeight: 1.2,
									marginBottom: 8, color: colors.dark,
								}}>{c.name}</div>

								{/* Jobs list */}
								<div style={{ flex: 1, marginBottom: 8 }}>
									{c.jobs.map((j) => (
										<div key={j} style={{
											fontSize: 14, lineHeight: 1.6, color: '#333',
										}}>· {j}</div>
									))}
								</div>

								{/* Why */}
								<div style={{
									borderTop: '1px dashed #ccc', paddingTop: 6,
									fontSize: 13, color: '#666', lineHeight: 1.45,
									fontStyle: 'italic',
								}}>
									<span style={{
										fontFamily: fonts.mono, fontSize: 11, color: colors.explosive,
										fontWeight: 700, letterSpacing: 1,
									}}>WHY · </span>
									{c.why}
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Footer rule */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.8 }}
					style={{
						width: '100%', background: colors.dark, color: colors.white,
						padding: '12px 18px', display: 'flex', alignItems: 'center',
						gap: 16, fontSize: 15,
					}}
				>
					<span style={{
						background: colors.yellow, color: colors.black, padding: '4px 8px',
						fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, letterSpacing: 1.5,
					}}>判断公式</span>
					<span>
						只要一个工作同时满足这 4 条 → <span style={{ color: colors.yellow, fontWeight: 700 }}>AI 会先吃掉它</span>，
						不管头衔写的多好听。反过来：缺一条，岗位就会被<span style={{ color: colors.yellow, fontWeight: 700 }}>重塑</span>而不是消失。
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
