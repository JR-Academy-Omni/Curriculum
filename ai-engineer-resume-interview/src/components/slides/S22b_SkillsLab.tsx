import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface SkillCard {
	name: string;
	icon: string;
	what: string;
	io: string;
	accent: string;
}

const skills: SkillCard[] = [
	{
		name: 'JD 解析',
		icon: '🎯',
		what: '把目标公司 JD 拆成关键词矩阵',
		io: 'JD 全文 → must-have / nice-to-have / 关键词 Top 20',
		accent: colors.indigo,
	},
	{
		name: '简历润色',
		icon: '✍️',
		what: '用 JD 关键词反向改写经验 bullet',
		io: '你的 bullet + JD 关键词 → 重写后的 bullet（每条带量化）',
		accent: colors.red,
	},
	{
		name: '量化补全',
		icon: '📊',
		what: '找出 bullet 缺哪个量化维度',
		io: '没数字的 bullet → cost / latency / accuracy 候选指标',
		accent: colors.orange,
	},
	{
		name: '内推话术',
		icon: '🤝',
		what: '找到内部人后怎么开口',
		io: 'LinkedIn 资料 → 内推请求模板（3 切角）',
		accent: colors.purple,
	},
	{
		name: '面试题预测',
		icon: '🔮',
		what: '按你简历预测 30 道面试题',
		io: '简历 PDF → RAG 题 10 / Agent 题 10 / Behavioral 10',
		accent: colors.teal,
	},
];

interface LabStep {
	num: string;
	time: string;
	title: string;
	bullets: string[];
	hot?: string;
}

const steps: LabStep[] = [
	{
		num: '1',
		time: '3 分钟',
		title: '调查 JD 和公司',
		bullets: [
			'从 Seek / LinkedIn 选 1 个真的想投的 AI Engineer JD · 复制全文',
			'LinkedIn 搜公司 People → 抓 5 个现任 + 离职 AI Engineer profile',
			'公司技术 blog / GitHub → 看用什么模型 / 框架 / Vector DB',
		],
		hot: '同步建立"公司技术栈认知"，不是只看 JD 字面',
	},
	{
		num: '2',
		time: '2 分钟',
		title: 'JD 解析',
		bullets: [
			'跑 JD 解析 Skill',
			'拿到关键词矩阵：must-have / nice-to-have / 加分项',
		],
		hot: '检查你的简历能命中几个关键词',
	},
	{
		num: '3',
		time: '3 分钟',
		title: '简历润色',
		bullets: [
			'挑今晚改过的 3 段经验',
			'跑简历润色 Skill，用 JD 关键词反向重写',
		],
		hot: 'AI 给的版本不直接用 — 删废话，保量化',
	},
	{
		num: '4',
		time: '2 分钟',
		title: '量化补全',
		bullets: [
			'跑量化补全 Skill，看 AI 提示哪些 bullet 缺数字',
			'补上区间值（不是死数字）',
		],
	},
	{
		num: '5',
		time: '2 分钟',
		title: '输出 + 自检',
		bullets: [
			'改完的版本群里同步',
			'每个 bullet 都有具体工具名了吗？',
			'每个 bullet 都有量化指标了吗？',
			'整份简历 8 秒内能看出 AI Engineer 定位吗？',
		],
	},
];

export default function S22b_SkillsLab() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1480, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}
				>
					<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						LIVE LAB · 10 MIN
					</span>
					<span style={{ padding: '6px 14px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, border }}>
						匠人 Skill Marketplace · 内测中 · 学员优先体验
					</span>
					<a
						href="jd-company-skill-extractor.zip"
						download
						style={{
							display: 'inline-flex', alignItems: 'center', gap: 8,
							padding: '6px 14px', background: colors.green, color: colors.black,
							fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, letterSpacing: 0.5,
							border, boxShadow: `4px 4px 0 ${colors.black}`,
							textDecoration: 'none',
							cursor: 'pointer',
						}}
					>
						⬇ 下载 skill · jd-company-skill-extractor.zip
					</a>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, lineHeight: 1.2, letterSpacing: -1, marginBottom: 4 }}
				>
					🔬 现场 Lab · 用 AI Skill 把简历再迭代一遍
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.25 }}
					style={{ fontSize: 17, color: '#555', fontWeight: 600, marginBottom: 2 }}
				>
					你不用一字一句改 — 让 AI Skill 帮你跑 5 轮 iteration
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.32 }}
					style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 700, marginBottom: 14 }}
				>
					接下来 10 分钟 · 群里同步操作 · 改完版本下次课带来 mock interview
				</motion.p>

				{/* 主体两栏 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 18, minHeight: 0 }}>
					{/* 左侧：5 个 Skill 卡片 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.35 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.dark, marginBottom: 2 }}>
							5 个可用 AI Skill · 现场跑
						</div>
						{skills.map((s, i) => (
							<motion.div
								key={s.name}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + i * 0.06 }}
								style={{
									border, background: colors.white, boxShadow: shadowSm,
									padding: '10px 12px', display: 'grid',
									gridTemplateColumns: '32px 1fr', gap: 10, alignItems: 'start',
									borderLeft: `8px solid ${s.accent}`,
								}}
							>
								<div style={{ fontSize: 22, lineHeight: 1 }}>{s.icon}</div>
								<div style={{ minWidth: 0 }}>
									<div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
										<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.black }}>{s.name}</span>
										<span style={{ fontFamily: fonts.body, fontSize: 12.5, fontWeight: 600, color: '#555' }}>{s.what}</span>
									</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 600, color: '#888', lineHeight: 1.4 }}>
										{s.io}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* 右侧：5 步流程 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.35 }}
						style={{ display: 'flex', flexDirection: 'column', gap: 7 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: colors.dark, marginBottom: 2 }}>
							Lab 流程 · 5 步 / 10 分钟
						</div>
						{steps.map((step, i) => (
							<motion.div
								key={step.num}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 + i * 0.05 }}
								style={{
									border, background: colors.white, boxShadow: shadowSm,
									padding: '8px 12px', display: 'grid',
									gridTemplateColumns: '36px 1fr', gap: 10, alignItems: 'start',
								}}
							>
								<div style={{
									width: 36, height: 36, background: colors.dark, color: colors.yellow,
									fontFamily: fonts.heading, fontSize: 18, fontWeight: 900,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									border: `2px solid ${colors.black}`,
								}}>
									{step.num}
								</div>
								<div style={{ minWidth: 0 }}>
									<div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2, flexWrap: 'wrap' }}>
										<span style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 900 }}>Step {step.num} · {step.title}</span>
										<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: colors.red }}>{step.time}</span>
									</div>
									<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 12, lineHeight: 1.45 }}>
										{step.bullets.map((b, bi) => (
											<li key={bi} style={{ color: '#333' }}>
												<span style={{ color: colors.indigo, fontWeight: 700 }}>→ </span>{b}
											</li>
										))}
									</ul>
									{step.hot && (
										<div style={{
											marginTop: 4, padding: '3px 8px', background: colors.yellow,
											display: 'inline-block', fontFamily: fonts.mono, fontSize: 11,
											fontWeight: 700, border: `2px solid ${colors.black}`,
										}}>
											🔥 {step.hot}
										</div>
									)}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* 底部红色警告卡 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95 }}
					style={{
						marginTop: 12, padding: '12px 18px', background: colors.red,
						color: colors.white, border, boxShadow: shadow,
						display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 18, alignItems: 'center',
					}}
				>
					<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, lineHeight: 1.2 }}>
						⚠️ AI Skill 不是替你写<br />是帮你迭代
					</div>
					<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 13, lineHeight: 1.5, fontWeight: 600 }}>
						<li>• 面试时你必须能讲出每个 bullet 的真实 backstory</li>
						<li>• AI 加的"看似很厉害但你不懂"的话术 → 立刻删掉</li>
						<li>• 没有真实项目，AI 包装得再漂亮也是 0</li>
						<li style={{ marginTop: 2, fontWeight: 900, background: colors.black, padding: '2px 8px', display: 'inline-block' }}>
							红线：不要用 AI 写虚构项目放进简历，面试一深挖立刻暴露
						</li>
					</ul>
					<div style={{
						padding: '10px 16px', background: colors.dark, color: colors.yellow,
						fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, lineHeight: 1.25,
						border: `2px solid ${colors.black}`, textAlign: 'center', whiteSpace: 'nowrap',
					}}>
						下次课<br />带改完的版本来<br />
						<span style={{ color: colors.white, fontSize: 13 }}>mock interview</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
