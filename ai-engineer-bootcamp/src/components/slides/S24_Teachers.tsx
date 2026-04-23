import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Teacher {
	initials: string;
	name: string;
	title: string;
	company: string;
	companyColor: string; // 公司品牌色
	bio: string;
	accentColor: string;  // 头像色
}

// 数据源：2026 AI Engineer Bootcamp 导师阵容（jiangren.com.au 公开介绍）
const teachers: Teacher[] = [
	{
		initials: 'PL', name: 'Peiyao Li', title: 'Sr. Specialist SA GenAI', company: 'AWS',
		companyColor: '#FF9900', accentColor: colors.p3,
		bio: '亚马逊 AWS GenAI Sr. Specialist · 10+ 年数据科学、机器学习、AI 工程经验 · 领导澳新地区云平台的 AI 战略与大客户落地',
	},
	{
		initials: 'LJ', name: 'Larry Jiang', title: 'AI Architect', company: 'AWS',
		companyColor: '#FF9900', accentColor: colors.p4,
		bio: 'Generative AI 技术专家 · 在 AWS、Azure 等多个云平台设计并实现先进 AI 解决方案 · 擅长 AI 驱动的生产落地与预测准确率/运营效率提升',
	},
	{
		initials: 'JL', name: 'Jason Li', title: 'Lead Engineer-Gen AI', company: 'Future Secure AI',
		companyColor: '#0ea5e9', accentColor: colors.p5,
		bio: '4 年参与 15+ 商业 GenAI 项目 · 精通后端/云原生/DevOps · LangChainJS · Prompt Engineering · Tool Calling · RAG · 多模态',
	},
	{
		initials: 'SL', name: 'Selina Li', title: 'Senior Data & AI Architect', company: 'Microsoft',
		companyColor: '#0078D4', accentColor: colors.p2,
		bio: '微软亚太区 Office of the CTO · 专注 ANZ 战略级数据与 AI 项目 · 10+ 年技术与管理经验 · CBA / Officeworks / 德勤核心岗位',
	},
	{
		initials: 'G', name: 'Guang', title: 'Tech Lead', company: 'New Aim',
		companyColor: '#00aaff', accentColor: colors.p6,
		bio: '莫纳什大学博士 · 专攻空间大数据 · Google Scholar H-Index 21 · Kaggle Competition Expert 全球 4% · 领导 B2B 电商 AI 平台',
	},
	{
		initials: 'JY', name: 'Joey Yang', title: 'AI Full-stack Engineer', company: 'Ericsson',
		companyColor: '#0082F0', accentColor: colors.p1,
		bio: '10 年软件开发 · 先后服务 Ericsson / 平安 / 顺丰 · 精通 Java · Python · 微服务 · 熟悉前后端框架 · 深度参与 AI Playground + 企业云平台',
	},
	{
		initials: 'JL', name: 'Jenny Lin', title: 'Lead AI Innovation', company: 'RACV',
		companyColor: '#ef4444', accentColor: colors.p7,
		bio: 'RACV Team Leader · Data Engineering · 熟练运用 Microsoft Azure AI + BI 技术栈 · 擅长 Data Modelling / Warehouse / GenAI / RAG / ETL 管道',
	},
	{
		initials: 'XM', name: 'Xiaoxiao Ma', title: 'Applied Scientist', company: '头部 AI 公司',
		companyColor: '#64748b', accentColor: colors.p8,
		bio: 'IT 领域 8+ 年 · 当前在头部公司做 LLM / GenAI research · PhD 期间发表 Core Ranked A* 顶会/顶刊 9 篇，其中 CCF-A 类 6 篇',
	},
	{
		initials: 'SL', name: 'Sheldon Lin', title: 'AI Integration Architect', company: 'Optus',
		companyColor: '#fbbf24', accentColor: colors.p9,
		bio: 'AI 集成架构师 · 专长数据科学、数据工程、ML Ops · 关注 GenAI + LLM 企业级落地 · 精通 Python / R / SQL + Azure / AWS / GCP 多云栈',
	},
];

export default function S24_Teachers() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 18px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '95%', maxWidth: 1440, padding: '22px 28px' }}>
				{/* 顶部标题 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 14 }}
				>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
						<h2 style={{
							fontFamily: fonts.heading,
							fontSize: '42px',
							fontWeight: 900,
							lineHeight: 1.1,
							letterSpacing: -1,
							color: colors.black,
							margin: 0,
						}}>
							AI Engineer{' '}
							<span style={{
								display: 'inline-block',
								padding: '0 10px',
								background: colors.yellow,
								border: `3px solid ${colors.black}`,
								boxShadow: `4px 4px 0 ${colors.black}`,
								transform: 'rotate(-1deg)',
							}}>
								导师阵容
							</span>
						</h2>
						<span style={{
							padding: '3px 10px',
							background: colors.red,
							color: colors.white,
							fontFamily: fonts.mono,
							fontSize: 11,
							fontWeight: 800,
							border,
							boxShadow: shadowSm,
							letterSpacing: 0.5,
						}}>
							9 位真人带课
						</span>
					</div>
					<p style={{
						fontSize: '14px',
						color: '#444',
						fontWeight: 600,
						marginTop: 4,
					}}>
						全部来自 AWS / Microsoft / Optus / Ericsson / RACV 等一线公司在职工程师 · 不是兼职讲师
					</p>
				</motion.div>

				{/* 9 位导师 3x3 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 10,
				}}>
					{teachers.map((t, i) => (
						<motion.div
							key={t.name + i}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadow,
								padding: '10px 12px',
								display: 'grid',
								gridTemplateColumns: '52px 1fr',
								gap: 10,
								alignItems: 'flex-start',
							}}
						>
							{/* 头像占位（initials） */}
							<div style={{
								width: 52,
								height: 52,
								background: t.accentColor,
								border: `2px solid ${colors.black}`,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontFamily: fonts.heading,
								fontSize: 18,
								fontWeight: 900,
								color: colors.white,
								letterSpacing: -0.5,
							}}>
								{t.initials}
							</div>

							<div style={{ minWidth: 0 }}>
								{/* Name + title pill */}
								<div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 3 }}>
									<span style={{
										fontFamily: fonts.heading,
										fontSize: '16px',
										fontWeight: 900,
										color: colors.black,
										letterSpacing: -0.3,
									}}>
										{t.name}
									</span>
									<span style={{
										padding: '1px 6px',
										background: t.accentColor,
										color: colors.white,
										fontFamily: fonts.mono,
										fontSize: 9,
										fontWeight: 800,
										border: `1.5px solid ${colors.black}`,
										letterSpacing: 0.3,
									}}>
										{t.title}
									</span>
								</div>

								{/* Company */}
								<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
									<span style={{
										padding: '2px 8px',
										background: t.companyColor,
										color: colors.white,
										fontFamily: fonts.mono,
										fontSize: 10,
										fontWeight: 900,
										border: `1.5px solid ${colors.black}`,
										letterSpacing: 0.3,
									}}>
										@ {t.company}
									</span>
								</div>

								{/* Bio */}
								<div style={{
									fontSize: 11,
									color: '#333',
									lineHeight: 1.4,
									fontWeight: 500,
								}}>
									{t.bio}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部标语 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
					style={{
						marginTop: 12,
						padding: '8px 16px',
						background: colors.dark,
						color: colors.white,
						border,
						boxShadow: `5px 5px 0 ${colors.red}`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 14,
						flexWrap: 'wrap',
					}}
				>
					<div style={{
						fontFamily: fonts.heading,
						fontSize: '16px',
						fontWeight: 900,
						letterSpacing: -0.3,
					}}>
						所有导师都在{' '}
						<span style={{ color: colors.yellow }}>生产环境跑 AI 系统</span>，
						不是讲 PPT 的
					</div>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: 10,
						color: 'rgba(255,255,255,0.7)',
						fontWeight: 700,
					}}>
						📝 头像待补 · 每期按主题组合排课
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
