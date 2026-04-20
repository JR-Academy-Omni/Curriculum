import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface JobRole {
	id: string;
	nameEn: string;
	nameZh: string;
	salary: string;
	growth: 'explosive' | 'fast';
	growthNote?: string;
	skills: string[];
	companies: string[];
	bornYear: number;
}

// 数据源: jr-academy-web-zh/src/config/aiNewJobs/index.ts
// 只取 jrCourses 包含 ai-engineer-bootcamp / ai-engineer-rag-agent 的技术岗
const jobs: JobRole[] = [
	{
		id: 'ai-engineer',
		nameEn: 'AI Engineer',
		nameZh: 'AI 工程师',
		salary: '$155K – $400K+',
		growth: 'explosive',
		growthNote: '300%+',
		skills: ['LLM', 'RAG', 'AI Agent', 'Prompt', 'AI Coding'],
		companies: ['OpenAI', 'Anthropic', 'Google', 'Meta', 'Stripe'],
		bornYear: 2026,
	},
	{
		id: 'fde',
		nameEn: 'Forward Deployment Engineer',
		nameZh: '前线部署工程师 (FDE)',
		salary: '$270K – $500K+',
		growth: 'explosive',
		skills: ['全栈工程', '快速原型', 'LLM 应用', '客户现场'],
		companies: ['OpenAI', 'Anthropic', 'Palantir', 'Scale AI'],
		bornYear: 2026,
	},
	{
		id: 'agent-dev',
		nameEn: 'AI Agent Developer',
		nameZh: 'AI 智能体开发者',
		salary: '$130K – $250K+',
		growth: 'explosive',
		growthNote: '986%',
		skills: ['Multi-Agent', 'LangChain', '工作流编排', 'MCP'],
		companies: ['OpenAI', 'Microsoft', 'Salesforce'],
		bornYear: 2026,
	},
];

interface CompareRow {
	label: string;
	items: [string, string, string]; // AI Engineer / FDE / Agent Dev
}

const compareRows: CompareRow[] = [
	{
		label: '工作模式',
		items: [
			'在公司内部做 AI 产品',
			'飞到客户现场 2–8 周快速搭原型',
			'设计多智能体工作流 + 编排系统',
		],
	},
	{
		label: '技能侧重',
		items: [
			'LLM 应用 + 产品迭代',
			'全栈 + LLM + 沟通谈判（3 合 1）',
			'Multi-Agent + MCP + 工作流',
		],
	},
	{
		label: '成功标准',
		items: [
			'产品指标 / 用户增长',
			'客户买单 + 续约',
			'Agent 成功率 + 任务完成度',
		],
	},
	{
		label: '薪资天花板',
		items: [
			'$400K+',
			'$500K+ · 工程师 + 咨询 + 销售 三份工',
			'$250K+ · Multi-Agent 技术溢价',
		],
	},
];

const growthConfig = {
	explosive: { label: '爆炸增长', bg: colors.red, color: colors.white },
	fast: { label: '快速增长', bg: colors.p6, color: colors.black },
};

export default function S22b_JobRoles() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景点阵 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `radial-gradient(${colors.black} 1px, transparent 1px)`,
				backgroundSize: '22px 22px',
				opacity: 0.05,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1420, padding: '14px 32px' }}>
				{/* 顶部标题 */}
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 10 }}
				>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
						<div style={{
							padding: '4px 12px',
							background: colors.black,
							color: colors.yellow,
							fontFamily: fonts.mono,
							fontSize: 11,
							fontWeight: 800,
							letterSpacing: 1,
							border,
							boxShadow: shadowSm,
						}}>
							JOB OUTCOMES · 3 个直通岗位
						</div>
						<div style={{
							fontFamily: fonts.mono,
							fontSize: 11,
							color: '#555',
							fontWeight: 700,
						}}>
							📊 jiangren.com.au/ai-new-jobs · 全部直接 map 到本 Bootcamp
						</div>
					</div>

					<h2 style={{
						fontFamily: fonts.heading,
						fontSize: 'clamp(26px, 3.6vw, 46px)',
						fontWeight: 900,
						lineHeight: 1.1,
						letterSpacing: -1,
						color: colors.black,
						margin: 0,
					}}>
						学完第五期 · 你能{' '}
						<span style={{
							display: 'inline-block',
							padding: '0 10px',
							background: colors.red,
							color: colors.white,
							border: `3px solid ${colors.black}`,
							boxShadow: `4px 4px 0 ${colors.black}`,
							transform: 'rotate(-1deg)',
						}}>
							直接去投
						</span>{' '}
						这 3 个岗位
					</h2>
				</motion.div>

				{/* 3 张岗位卡片 */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 10,
				}}>
					{jobs.map((j, i) => {
						const gc = growthConfig[j.growth];
						return (
							<motion.div
								key={j.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
								style={{
									background: colors.white,
									border,
									boxShadow: shadow,
									padding: '10px 12px 8px',
									display: 'flex',
									flexDirection: 'column',
									gap: 6,
									position: 'relative',
									minHeight: 0,
								}}
							>
								{/* 右上角：born year + growth */}
								<div style={{
									position: 'absolute',
									top: 10,
									right: 10,
									display: 'flex',
									gap: 4,
								}}>
									<span style={{
										padding: '2px 7px',
										background: colors.dark,
										color: colors.white,
										fontFamily: fonts.mono,
										fontSize: 11,
										fontWeight: 700,
										letterSpacing: 0.3,
									}}>
										{j.bornYear}
									</span>
									<span style={{
										padding: '2px 8px',
										background: gc.bg,
										color: gc.color,
										fontFamily: fonts.mono,
										fontSize: 11,
										fontWeight: 900,
										letterSpacing: 0.3,
										border: `1.5px solid ${colors.black}`,
									}}>
										{j.growthNote ? `${gc.label} ${j.growthNote}` : gc.label}
									</span>
								</div>

								{/* 编号 */}
								<div style={{
									width: 26,
									height: 26,
									background: colors.black,
									color: colors.yellow,
									fontFamily: fonts.heading,
									fontSize: 13,
									fontWeight: 900,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
									{String(i + 1).padStart(2, '0')}
								</div>

								{/* 英文大名 */}
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(16px, 1.75vw, 21px)',
									fontWeight: 900,
									color: colors.black,
									lineHeight: 1.15,
									letterSpacing: -0.4,
									marginTop: -4,
								}}>
									{j.nameEn}
								</div>
								{/* 中文小名 */}
								<div style={{
									fontFamily: fonts.heading,
									fontSize: 'clamp(12px, 1.2vw, 15px)',
									fontWeight: 700,
									color: '#555',
									marginTop: -4,
								}}>
									{j.nameZh}
								</div>

								{/* 薪资 */}
								<div style={{
									padding: '6px 12px',
									background: colors.yellow,
									border: `2px solid ${colors.black}`,
									fontFamily: fonts.mono,
									fontSize: 'clamp(15px, 1.65vw, 19px)',
									fontWeight: 900,
									color: colors.black,
									letterSpacing: -0.3,
									alignSelf: 'flex-start',
								}}>
									{j.salary}
								</div>

								{/* 核心技能 tag */}
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
									{j.skills.map((s) => (
										<span key={s} style={{
											padding: '2px 8px',
											background: '#f4f4f4',
											border: `1.5px solid #bbb`,
											fontFamily: fonts.mono,
											fontSize: 12,
											fontWeight: 700,
											color: '#333',
										}}>
											{s}
										</span>
									))}
								</div>

								{/* 招聘公司 */}
								<div style={{
									marginTop: 'auto',
									paddingTop: 6,
									borderTop: '1.5px dashed #ddd',
									fontFamily: fonts.mono,
									fontSize: 12,
									color: '#555',
									fontWeight: 700,
									lineHeight: 1.4,
								}}>
									<span style={{ color: '#888' }}>hiring ↗</span>{' '}
									{j.companies.join(' · ')}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 三个岗位的核心区别 — 对比表 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.7 }}
					style={{
						marginTop: 10,
						background: colors.white,
						border,
						boxShadow: shadow,
						padding: '10px 12px',
					}}
				>
					<div style={{
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						marginBottom: 7,
					}}>
						<div style={{
							padding: '3px 10px',
							background: colors.black,
							color: colors.yellow,
							fontFamily: fonts.mono,
							fontSize: 11,
							fontWeight: 800,
							letterSpacing: 0.8,
						}}>
							COMPARE · 三者区别
						</div>
						<div style={{
							fontFamily: fonts.heading,
							fontSize: 'clamp(14px, 1.45vw, 17px)',
							fontWeight: 900,
							color: colors.black,
							letterSpacing: -0.3,
						}}>
							同属 AI 工程，工作方式完全不同
						</div>
					</div>

					<div style={{
						display: 'grid',
						gridTemplateColumns: '120px repeat(3, 1fr)',
						gap: 0,
						border: `1.5px solid ${colors.black}`,
					}}>
						{/* 表头 */}
						<div style={{
							background: colors.black,
							color: colors.white,
							padding: '7px 12px',
							fontFamily: fonts.mono,
							fontSize: 12,
							fontWeight: 800,
							letterSpacing: 0.5,
						}}>
							维度
						</div>
						{(['AI Engineer', 'FDE', 'Agent Developer'] as const).map((h) => (
							<div key={h} style={{
								background: colors.black,
								color: colors.yellow,
								padding: '7px 12px',
								fontFamily: fonts.mono,
								fontSize: 12,
								fontWeight: 800,
								letterSpacing: 0.5,
								borderLeft: `1.5px solid ${colors.yellow}`,
							}}>
								{h}
							</div>
						))}

						{/* 数据行 */}
						{compareRows.map((row, idx) => (
							<div key={row.label} style={{ display: 'contents' }}>
								<div style={{
									background: idx % 2 === 0 ? '#fafafa' : colors.white,
									padding: '8px 12px',
									fontFamily: fonts.mono,
									fontSize: 12,
									fontWeight: 800,
									color: colors.black,
									borderTop: idx === 0 ? 'none' : '1px solid #e4e4e4',
									letterSpacing: 0.3,
								}}>
									{row.label}
								</div>
								{row.items.map((cell, ci) => (
									<div
										key={ci}
										style={{
											background: idx % 2 === 0 ? '#fafafa' : colors.white,
											padding: '8px 12px',
											fontFamily: fonts.body,
											fontSize: 12.5,
											fontWeight: 600,
											color: '#222',
											lineHeight: 1.38,
											borderTop: idx === 0 ? 'none' : '1px solid #e4e4e4',
											borderLeft: '1px solid #e4e4e4',
										}}
									>
										{cell}
									</div>
								))}
							</div>
						))}
					</div>

					<div style={{
						marginTop: 8,
						fontFamily: fonts.mono,
						fontSize: 12,
						color: '#555',
						fontWeight: 700,
						letterSpacing: 0.2,
					}}>
						一句话记忆 · <span style={{ color: colors.black, fontWeight: 900 }}>AI Engineer</span> 做产品 · <span style={{ color: colors.red, fontWeight: 900 }}>FDE</span> 带代码去客户公司 · <span style={{ color: colors.black, fontWeight: 900 }}>Agent Dev</span> 造智能体
					</div>
				</motion.div>

				{/* 底部 CTA */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.9 }}
					style={{
						marginTop: 8,
						padding: '8px 18px',
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
						fontSize: 'clamp(13px, 1.45vw, 17px)',
						fontWeight: 900,
						letterSpacing: -0.3,
					}}>
						这不是"可能"，是第四期学员毕业后{' '}
						<span style={{ color: colors.yellow }}>真的去投的岗位</span>
					</div>
					<div style={{
						fontFamily: fonts.mono,
						fontSize: 11,
						color: 'rgba(255,255,255,0.72)',
						fontWeight: 700,
					}}>
						完整 23 个 AI 新岗位 → jiangren.com.au/ai-new-jobs
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
