import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Teacher {
	initials: string;
	name: string;
	title: string;
	company: string;
	companyColor: string; // 公司品牌色
	bio?: string;         // 没有确认过的 bio 就留空，不要编
	accentColor: string;  // 头像色
}

interface PoolTeacher {
	name: string;
	company: string;
	region?: string;
}

// 🔑 数据源：curriculum/ai-engineer-bootcamp/TEACHERS.md（导师名单唯一真相源）
// 改导师先改 TEACHERS.md，再同步这里。不要在这里编公司 / 头衔 / bio。

// 本期正在带课的导师
const teachers: Teacher[] = [
	{
		// ⚠️ 公司保密 —— 对外只写「头部 AI 公司」，不要填具体公司名
		initials: 'XM', name: 'Xiaoxiao Ma', title: 'Senior Applied Scientist', company: '头部 AI 公司',
		companyColor: '#64748b', accentColor: colors.p8,
		bio: 'IT 领域 8+ 年 · 当前在头部公司做 LLM / GenAI research · PhD 期间发表 Core Ranked A* 顶会/顶刊 9 篇，其中 CCF-A 类 6 篇',
	},
	{
		initials: 'LS', name: 'Liangjun Song', title: 'Machine Learning Engineer', company: 'WiseTech Global',
		companyColor: '#0b5cab', accentColor: colors.p3,
	},
	{
		initials: 'LW', name: 'Lightman Wang', title: 'Co-founder & CEO', company: 'JR Academy',
		companyColor: colors.red, accentColor: colors.p7,
	},
	{
		// 曾用署名 Jason Li（Future Secure AI）—— 同一人，现行署名统一用 Tianyi Li @ V2 AI
		initials: 'TL', name: 'Tianyi Li', title: 'Lead AI Engineer', company: 'V2 AI',
		companyColor: '#111827', accentColor: colors.p1,
		bio: '4 年参与 15+ 商业 GenAI 项目 · 精通后端/云原生/DevOps · LangChainJS · Prompt Engineering · Tool Calling · RAG · 多模态',
	},
	{
		initials: 'HZ', name: 'Huansong（Winston） Zeng', title: 'Senior Software Engineer', company: 'Canva',
		companyColor: '#00C4CC', accentColor: colors.p4,
	},
	{
		initials: 'SS', name: 'Samuel Shaw', title: 'Research Scientist', company: 'CSIRO',
		companyColor: '#00843D', accentColor: colors.p5,
	},
];

// 可排课导师池 — 按主题 / 期次组合排课
const pool: PoolTeacher[] = [
	{ name: 'Leon', company: 'Google', region: '美国' },
	{ name: 'Albert Zhou', company: 'Amazon', region: '西雅图' },
	{ name: 'Larry Jiang', company: 'AWS' },
	{ name: 'Peiyao Li', company: 'AWS' },
	{ name: 'Selina Li', company: 'Microsoft' },
	{ name: 'Joey Yang', company: 'Ericsson', region: '瑞典' },
	{ name: 'Sheldon Lin', company: 'Optus' },
	{ name: 'Jenny Lin', company: 'RACV' },
	{ name: '许光', company: 'New Aim' },
	{ name: 'Notail', company: 'Smokeball' },
	{ name: '黄靖锋', company: '华为' },
	{ name: '庞莹 Julie', company: '思科' },
	{ name: '王刚', company: 'CENTFOR' },
	{ name: 'Hao Luo', company: '千锋教育' },
	{ name: '孙玉昌', company: '青软创新' },
	{ name: '刘雨杭', company: '星凡星启' },
	{ name: '闫俊杰', company: '湖州云梯科技' },
	{ name: '岑玲', company: 'Neurospark Lab', region: '新加坡' },
	{ name: 'Seng Yong Ong', company: 'OSY Marketing', region: '马来西亚' },
	{ name: 'Wanqi Oh', company: 'Hitachi eBworx', region: '马来西亚' },
	{ name: 'Eyvonne Tan', company: 'KumHoi Engineering', region: '马来西亚' },
	{ name: 'Celine Tay', company: 'Agile Coach', region: '马来西亚' },
	{ name: 'Yee Yon Yeong', company: 'Senior Python / AI Engineer', region: '马来西亚' },
];

export default function S24_Teachers() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 18px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '95%', maxWidth: 1440, padding: '18px 28px' }}>
				{/* 顶部标题 */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 12 }}
				>
					<div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 4 }}>
						<h2 style={{
							fontFamily: fonts.heading,
							fontSize: '40px',
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
							本期 {teachers.length} 位带课 · 池子 {pool.length} 位
						</span>
					</div>
					<p style={{
						fontSize: '13px',
						color: '#444',
						fontWeight: 600,
						marginTop: 4,
					}}>
						全部来自 Canva / CSIRO / WiseTech Global / V2 AI / AWS / Microsoft 等一线公司在职工程师与科学家 · 不是兼职讲师
					</p>
				</motion.div>

				{/* 本期带课导师 3x2 */}
				<SectionLabel text="本期带课导师" color={colors.red} />
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
										fontSize: '15px',
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

								{/* Bio — 没确认的不编，直接标待补 */}
								<div style={{
									fontSize: 11,
									color: t.bio ? '#333' : '#999',
									lineHeight: 1.4,
									fontWeight: 500,
									fontStyle: t.bio ? 'normal' : 'italic',
								}}>
									{t.bio ?? 'bio 待补 — 见 TEACHERS.md'}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 可排课导师池 */}
				<div style={{ marginTop: 12 }}>
					<SectionLabel text="可排课导师池 · 按主题与期次组合" color={colors.dark} />
				</div>
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 6,
					}}
				>
					{pool.map((p) => (
						<span
							key={p.name}
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 5,
								padding: '3px 8px',
								background: colors.white,
								border: `2px solid ${colors.black}`,
								boxShadow: `2px 2px 0 ${colors.black}`,
								fontSize: 11,
								fontWeight: 800,
								color: colors.black,
								whiteSpace: 'nowrap',
							}}
						>
							{p.name}
							<span style={{
								fontFamily: fonts.mono,
								fontSize: 9,
								fontWeight: 700,
								color: '#666',
							}}>
								@{p.company}{p.region ? ` · ${p.region}` : ''}
							</span>
						</span>
					))}
				</motion.div>

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
						📝 头像待补 · 名单以 TEACHERS.md 为准
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}

function SectionLabel({ text, color }: { text: string; color: string }) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
			<span style={{
				padding: '2px 9px',
				background: color,
				color: colors.white,
				fontFamily: fonts.mono,
				fontSize: 10,
				fontWeight: 900,
				border: `2px solid ${colors.black}`,
				letterSpacing: 0.5,
			}}>
				{text}
			</span>
			<div style={{ flex: 1, height: 2, background: colors.black, opacity: 0.15 }} />
		</div>
	);
}
