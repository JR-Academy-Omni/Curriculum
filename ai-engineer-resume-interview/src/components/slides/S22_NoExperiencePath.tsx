import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S22 — 没干过 AI 项目怎么写经验 · 4 条路径
 * 红线：禁说"副业"、禁承诺金钱、必须真实输出
 */

interface Path {
	num: string;
	title: string;
	tag: string;
	desc: string;
	bullets: string[];
	example: string;
	resource?: string;
	color: string;
}

const paths: Path[] = [
	{
		num: '01',
		title: '匠人 P3 Premium 项目',
		tag: '⭐ 含金量最高',
		desc: 'P3 Incubator Premium 档 — 真实付费企业客户出题 · 真给企业交付 production 代码（不是练习）。',
		bullets: [
			'付费企业客户出题：RAG 客服 / Multi-Agent 工作流 / AI 内部工具',
			'团队协作 · 代码进客户 production · 老师 + 企业方 dual review',
			'结业有企业方推荐信 + GitHub repo + demo + 真实使用 metrics',
		],
		example: `"Shipped Production RAG for {Enterprise Client} via JR Academy P3 Premium — 8w sprint, 50k+ queries/day, RAGAS 0.89, $0.003/query (enterprise reference letter on file)"`,
		resource: '资源：ai-engineer-bootcamp P3 Incubator · Premium tier',
		color: colors.red,
	},
	{
		num: '02',
		title: '匠人 P3 项目',
		tag: '⭐ 高含金量',
		desc: 'P3 Incubator 标准档 — 真实场景项目（模拟企业题 / 公益机构 / 学生组织真题），完整 production 工程。',
		bullets: [
			'真实场景出题：客服 RAG / 文档 Agent / AI 内部工具',
			'8 周 cohort · 老师全程 review · 团队协作 + 工程纪律',
			'结业有 GitHub repo + demo video + RAGAS / cost / latency 真 metrics',
		],
		example: `"Built Production-grade RAG via JR Academy P3 Incubator — 8w sprint, 30k chunks, RAGAS 0.88, $0.002/query, p95 < 1s [GitHub link]"`,
		resource: '资源：ai-engineer-bootcamp P3 Incubator · Standard tier',
		color: colors.orange,
	},
	{
		num: '03',
		title: '公司内部 POC',
		tag: '性价比最高',
		desc: '找你公司一个具体业务问题，用 1-2 周做个 RAG POC 跑出指标。',
		bullets: [
			'锁定一个具体场景：客服 / 文档查询 / 数据问答',
			'1-2 周快速 prototype，跑通 eval set',
			'哪怕没上 prod — 内部 demo 截图 + 老板邮件认可作 backup',
		],
		example: `"Prototyped RAG-based X for internal stakeholder demo, validating Y% accuracy on 500-query eval set"`,
		color: colors.p5,
	},
	{
		num: '04',
		title: '开源贡献',
		tag: '成本最低',
		desc: '给主流 LLM 生态项目提 PR、写 example notebook 进官方 cookbook。',
		bullets: [
			'给 LangChain / LlamaIndex / vLLM / Continue / Aider 提 PR',
			'写 example notebook 进官方 cookbook 仓库',
			'修 doc / 加 adapter / 补 vector store 集成',
		],
		example: `"Contributed 5 PRs to LangChain (vector store adapter, retrieval eval), 3 merged"`,
		resource: '资源：awesome-llm-apps GitHub repo',
		color: colors.p1,
	},
	{
		num: '05',
		title: '实习 / 创业项目',
		tag: '真实场景',
		desc: '在公司 / 创业 team 里做的真 AI 项目 — 哪怕 3 个月也比 toy project 强 10 倍。',
		bullets: [
			'实习：找 AI startup / 大厂 AI team · 3 个月也行 · 跑出真 metric',
			'创业：和同学合伙做 AI 产品 · MVP + GitHub + 真实用户验证',
			'必须有：可点开的 GitHub repo / demo video / 真实使用数据',
		],
		example: `"AI Engineering Intern @ {Startup} — Built RAG legal Q&A, 200+ daily users, RAGAS 0.85, reduced support tickets 30%" / "Co-founded {Project} — AI code review CLI, 200+ GitHub stars, 1k+ WAU"`,
		color: colors.p3,
	},
];

const redlines: string[] = [
	'禁说「副业」一词 — 用 side project / 个人项目 / 独立项目',
	'禁承诺金钱回报（"月入 $X" / "保证收益" 全是雷）',
	'项目必须有真实输出：GitHub repo / demo / metrics，不能凭空写',
];

export default function S22_NoExperiencePath() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '18px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}
				>
					<span style={{ padding: '5px 12px', background: colors.orange, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.black}`, letterSpacing: 0.5 }}>
						NO EXPERIENCE · 5 PATHS
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						没干过 AI 项目，怎么写经验？<span style={{ fontSize: 18, color: colors.red, marginLeft: 8 }}>· 企业级项目放首位，最有含金量</span>
					</span>
				</motion.div>

				{/* 4 path grid */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, minHeight: 0 }}>
					{paths.map((p, i) => (
						<PathCard key={p.num} p={p} delay={0.15 + i * 0.08} />
					))}
				</div>

				{/* 红线 + 落点 */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.4 }}
					style={{
						marginTop: 12, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12,
					}}
				>
					{/* 红线 */}
					<div style={{
						padding: '10px 14px', background: '#fff5f5',
						border: `3px solid ${colors.red}`, boxShadow: `4px 4px 0 ${colors.red}`,
					}}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
							<span style={{ fontSize: 14 }}>🚨</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.red, letterSpacing: 0.5 }}>
								红线警告
							</span>
						</div>
						<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
							{redlines.map((r, i) => (
								<li key={i} style={{
									fontFamily: fonts.body, fontSize: 12, color: colors.black, fontWeight: 700,
									lineHeight: 1.35, marginBottom: i < redlines.length - 1 ? 4 : 0,
									display: 'flex', gap: 6,
								}}>
									<span style={{ color: colors.red, fontWeight: 900 }}>•</span>
									<span>{r}</span>
								</li>
							))}
						</ul>
					</div>

					{/* 落点 */}
					<div style={{
						padding: '10px 14px', background: colors.dark,
						border, boxShadow: `4px 4px 0 ${colors.yellow}`,
						display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4,
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: colors.yellow, letterSpacing: 0.5 }}>
							ACTION
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.white, letterSpacing: -0.3, lineHeight: 1.2 }}>
							4 条路至少走 1 条。<br />
							<span style={{ color: colors.yellow }}>今晚回家就开始。</span>
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}

function PathCard({ p, delay }: { p: Path; delay: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			style={{
				background: colors.white, border, boxShadow: shadowSm,
				padding: '12px 12px', display: 'flex', flexDirection: 'column', minHeight: 0,
			}}
		>
			{/* 编号 + tag */}
			<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
				<div style={{
					width: 28, height: 28, background: p.color, color: colors.white,
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					fontFamily: fonts.heading, fontSize: 12, fontWeight: 900,
					border: `2px solid ${colors.black}`,
				}}>
					{p.num}
				</div>
				<span style={{
					padding: '2px 8px', background: colors.yellow, color: colors.black,
					fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, letterSpacing: 0.3,
					border: `2px solid ${colors.black}`,
				}}>
					{p.tag}
				</span>
			</div>

			{/* 标题 */}
			<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.black, letterSpacing: -0.3, marginBottom: 4 }}>
				{p.title}
			</div>

			{/* 描述 */}
			<div style={{ fontFamily: fonts.body, fontSize: 11.5, color: '#555', fontWeight: 600, lineHeight: 1.35, marginBottom: 8 }}>
				{p.desc}
			</div>

			{/* bullets */}
			<ul style={{ listStyle: 'none', margin: 0, padding: 0, marginBottom: 8 }}>
				{p.bullets.map((b, i) => (
					<li key={i} style={{
						fontFamily: fonts.body, fontSize: 11, color: colors.black, fontWeight: 600,
						lineHeight: 1.35, marginBottom: 4,
						display: 'flex', gap: 5,
					}}>
						<span style={{ color: p.color, fontWeight: 900, flexShrink: 0 }}>→</span>
						<span>{b}</span>
					</li>
				))}
			</ul>

			{/* 简历示例 */}
			<div style={{
				marginTop: 'auto',
				padding: '8px 10px', background: '#f1f8e9',
				borderLeft: `3px solid ${colors.green}`,
			}}>
				<div style={{ fontFamily: fonts.mono, fontSize: 9, color: '#1b5e20', fontWeight: 900, letterSpacing: 0.5, marginBottom: 3 }}>
					简历可以这样写
				</div>
				<div style={{ fontFamily: fonts.mono, fontSize: 10.5, color: colors.black, fontWeight: 600, lineHeight: 1.35 }}>
					{p.example}
				</div>
			</div>

			{/* 资源（可选） */}
			{p.resource && (
				<div style={{
					marginTop: 6,
					fontFamily: fonts.mono, fontSize: 9.5, color: '#666', fontWeight: 700,
				}}>
					{p.resource}
				</div>
			)}
		</motion.div>
	);
}
