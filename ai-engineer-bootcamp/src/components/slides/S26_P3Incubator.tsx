import { motion } from 'framer-motion';
import { Slide, colors, fonts, shadowSm } from '../ui';

const milestones = [
	{ weeks: 'W1-2', title: '组队 + 选题', color: colors.p1 },
	{ weeks: 'W3-6', title: '架构 + MVP', color: colors.p3 },
	{ weeks: 'W7-9', title: '灰度 + 迭代', color: colors.p5 },
	{ weeks: 'W10-11', title: '上线 + 监控', color: colors.p8 },
	{ weeks: 'W12', title: 'Demo Day', color: colors.red },
];

const pillars = [
	{
		tag: '多人协作',
		accent: colors.yellow,
		textOnAccent: colors.black,
		title: '10 人小组 · 真企业客户',
		points: [
			['Tech Lead', '架构选型 / Code Review / 卡点拆解'],
			['AI Engineer', 'RAG / Agent / Prompt / Eval pipeline'],
			['Full-Stack', '前端 + API + 数据层 + 体验打磨'],
			['PM / DevOps', '需求拆 ticket / CI / 部署 / 监控'],
		],
		footer: 'Linear 排期 · GitHub PR 互审 · 每周 Demo · Mentor 把关',
	},
	{
		tag: 'Production 级',
		accent: colors.red,
		textOnAccent: colors.white,
		title: '不是 demo · 真用户在用',
		points: [
			['CI/CD', 'GitHub Actions · 自动 lint/test/build/deploy'],
			['可观测性', 'Sentry 报错 · OpenTelemetry trace · LLM token 计费'],
			['灰度发布', 'Feature flag · A/B · 1% → 10% → 100%'],
			['SLO', 'p95 < 2s · 错误率 < 1% · 回滚 < 5 分钟'],
		],
		footer: '每个 Lesson 都跑过的工程链路 · 不是 PPT 名词',
	},
	{
		tag: 'Enterprise 级',
		accent: colors.indigo,
		textOnAccent: colors.white,
		title: '能交付给企业 · 通过审计',
		points: [
			['安全', 'JWT + RBAC · API Key Vault · Prompt Injection 防御'],
			['数据', '多租户隔离 · PII 脱敏 · 审计日志'],
			['成本', 'LLM 模型路由 · Cache · Rate Limit · 月度成本看板'],
			['交付', 'API Doc + Runbook + 架构图 + 部署 SOP'],
		],
		footer: '客户拿到的不只是代码 · 是一套可接手的系统',
	},
];

export default function S26_P3Incubator() {
	return (
		<Slide bg={colors.dark}>
			<div style={{
				width: '95%', maxWidth: 1440, height: '92%', padding: '20px 16px',
				display: 'flex', flexDirection: 'column', gap: 14,
			}}>
				{/* 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ textAlign: 'center' }}
				>
					<div style={{
						display: 'inline-block', padding: '4px 12px',
						background: colors.yellow, color: colors.black,
						fontFamily: fonts.mono, fontSize: 11, fontWeight: 800,
						border: `2px solid ${colors.black}`, letterSpacing: 1, marginBottom: 6,
					}}>
						P3 INCUBATOR · 12 WEEKS · TEAM PROJECT
					</div>
					<h2 style={{
						fontFamily: fonts.heading, fontSize: '44px', fontWeight: 900,
						lineHeight: 1.1, letterSpacing: -1, margin: 0, color: colors.white,
					}}>
						10 人组队，把一个 AI 项目跑到{' '}
						<span style={{
							display: 'inline-block', padding: '0 10px', background: colors.red, color: colors.white,
							border: `3px solid ${colors.white}`,
						}}>
							Production · Enterprise
						</span>
					</h2>
					<p style={{
						fontFamily: fonts.mono, fontSize: '13px', color: 'rgba(255,255,255,0.65)',
						fontWeight: 700, marginTop: 6, letterSpacing: 0.5,
					}}>
						真企业客户 · 真流量 · 真 SLO · Mentor 全程护航
					</p>
				</motion.div>

				{/* 三大支柱 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, flex: 1, minHeight: 0 }}>
					{pillars.map((p, i) => (
						<motion.div
							key={p.tag}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
							style={{
								background: colors.white, color: colors.black,
								border: `3px solid ${colors.white}`, boxShadow: shadowSm,
								display: 'flex', flexDirection: 'column',
							}}
						>
							{/* 顶部色块 */}
							<div style={{
								background: p.accent, color: p.textOnAccent,
								padding: '10px 14px',
								borderBottom: `3px solid ${colors.black}`,
							}}>
								<div style={{
									fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
									letterSpacing: 1.5, opacity: 0.85,
								}}>
									0{i + 1} · {p.tag.toUpperCase()}
								</div>
								<div style={{
									fontFamily: fonts.heading, fontSize: '18px',
									fontWeight: 900, lineHeight: 1.2, marginTop: 2,
								}}>
									{p.title}
								</div>
							</div>

							{/* 4 行要点 */}
							<div style={{ padding: '10px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
								{p.points.map(([k, v]) => (
									<div key={k} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
										<div style={{
											flexShrink: 0, minWidth: 78,
											fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
											color: p.accent === colors.yellow ? '#b88600' : p.accent,
											letterSpacing: 0.3, paddingTop: 2,
										}}>
											{k}
										</div>
										<div style={{
											fontSize: 11.5, lineHeight: 1.4, color: '#222', fontWeight: 500,
										}}>
											{v}
										</div>
									</div>
								))}
							</div>

							{/* footer */}
							<div style={{
								padding: '8px 14px',
								borderTop: `2px dashed #ddd`,
								fontFamily: fonts.mono, fontSize: 10, fontWeight: 700,
								color: '#555', lineHeight: 1.35,
							}}>
								{p.footer}
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部 12 周节奏 + Demo Day */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.85 }}
					style={{
						display: 'grid', gridTemplateColumns: '2.4fr 1fr', gap: 12, alignItems: 'stretch',
					}}
				>
					{/* 时间线 */}
					<div style={{
						background: 'rgba(255,255,255,0.06)',
						border: `2px solid rgba(255,255,255,0.15)`,
						padding: '10px 14px',
						display: 'flex', alignItems: 'center', gap: 4,
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
							color: colors.yellow, letterSpacing: 1, marginRight: 8,
						}}>
							节奏 →
						</div>
						{milestones.map((m, i) => (
							<div key={m.weeks} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
								<div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
									<div style={{
										width: 22, height: 22, borderRadius: '50%',
										background: m.color, color: colors.white,
										border: `2px solid ${colors.white}`,
										display: 'flex', alignItems: 'center', justifyContent: 'center',
										fontFamily: fonts.heading, fontSize: 11, fontWeight: 900,
									}}>
										{i + 1}
									</div>
									<div style={{
										fontFamily: fonts.mono, fontSize: 9, fontWeight: 800,
										color: m.color, letterSpacing: 0.3,
									}}>
										{m.weeks}
									</div>
									<div style={{
										fontFamily: fonts.body, fontSize: 11, fontWeight: 700,
										color: colors.white, lineHeight: 1.1, textAlign: 'center',
									}}>
										{m.title}
									</div>
								</div>
								{i < milestones.length - 1 && (
									<div style={{
										width: 16, height: 2, background: 'rgba(255,222,89,0.5)',
										marginTop: -16,
									}} />
								)}
							</div>
						))}
					</div>

					{/* Demo Day */}
					<div style={{
						padding: '10px 14px',
						background: colors.yellow, color: colors.black,
						border: `3px solid ${colors.white}`, boxShadow: `4px 4px 0 ${colors.red}`,
						display: 'flex', flexDirection: 'column', justifyContent: 'center',
					}}>
						<div style={{
							fontFamily: fonts.mono, fontSize: 10, fontWeight: 800,
							letterSpacing: 1, color: colors.red,
						}}>
							★ DEMO DAY
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: '15px',
							fontWeight: 900, lineHeight: 1.2, marginTop: 2,
						}}>
							企业客户 + 招聘方现场<br />
							<span style={{ color: colors.red }}>Meta · Amazon · Canva · 字节</span>
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
