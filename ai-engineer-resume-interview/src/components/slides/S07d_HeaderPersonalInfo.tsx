import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

interface Element {
	idx: string;
	label: string;
}

const goodElements: Element[] = [
	{ idx: '①', label: '姓名大字' },
	{ idx: '②', label: '一行 title（含核心方向）' },
	{ idx: '③', label: '邮箱（专业域名）' },
	{ idx: '④', label: '电话（国际格式）' },
	{ idx: '⑤', label: '城市 + 可搬迁 + 签证状态' },
	{ idx: '⑥', label: 'LinkedIn' },
	{ idx: '⑦', label: 'GitHub + Portfolio' },
];

interface Pitfall {
	num: string;
	title: string;
	points: string[];
}

const pitfalls: Pitfall[] = [
	{
		num: '01',
		title: '放头像',
		points: [
			'澳洲 / 北美反歧视法 — 看到头像可能直接 reject',
			'国内互联网也越来越不看头像',
			'例外：演艺 / 销售 / 客户对接岗位',
		],
	},
	{
		num: '02',
		title: '放生日 / 性别 / 婚姻状态',
		points: [
			'同样反歧视风险',
			'行业潜规则：写了 = 不专业',
		],
	},
	{
		num: '03',
		title: '邮箱用 QQ / 163 / 学校邮箱',
		points: [
			'学校邮箱毕业后失效，HR 联系不上你',
			'QQ 邮箱在国际公司投递显得不正式',
			'用 Gmail / Outlook / 自定义域名',
		],
	},
	{
		num: '04',
		title: 'Title 写 "Software Engineer"',
		points: [
			'AI Engineer JD 投错位置',
			'必须 specific：AI Engineer · RAG / Agent / LLM Ops',
			'别写 "Aspiring" / "Junior Enthusiast"',
		],
	},
	{
		num: '05',
		title: '没有 LinkedIn / GitHub',
		points: [
			'AI Engineer 没 GitHub = 招聘官直接怀疑能力',
			'LinkedIn 必须跟简历一致（不能 LinkedIn 写 SDE 简历写 AIE）',
		],
	},
	{
		num: '06',
		title: '签证状态不写',
		points: [
			'澳洲 / 北美必写：PR / Citizen / Open Work Visa / Need Sponsorship',
			'不写默认按"需 sponsor"处理 → 大厂直接刷',
		],
	},
];

export default function S07d_HeaderPersonalInfo() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '94%', padding: '18px 32px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
				>
					<span style={{ padding: '7px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						SECTION 1 / 5
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#666' }}>
						Header · 看似简单的雷区
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -32 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 4 }}
				>
					Section 1 · Header / 个人信息 · <span style={{ color: colors.red }}>看似简单的雷区</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.18 }}
					style={{ fontFamily: fonts.body, fontSize: 17, color: '#555', fontWeight: 500, marginBottom: 14 }}
				>
					<strong style={{ color: colors.black }}>8 秒钟</strong>，招聘官先扫这里决定要不要继续看
				</motion.p>

				{/* 主体：左 ✅ 模板 / 右 ❌ 雷区 */}
				<div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 16, flex: 1, minHeight: 0 }}>
					{/* 左：标准模板 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.4 }}
						style={{
							border: `3px solid ${colors.teal}`,
							boxShadow: `6px 6px 0 ${colors.teal}`,
							background: colors.white,
							display: 'flex',
							flexDirection: 'column',
							minHeight: 0,
						}}
					>
						{/* 标题条 */}
						<div style={{ background: colors.teal, color: colors.white, padding: '10px 16px', fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, borderBottom: `2px solid ${colors.black}` }}>
							✅ 标准 AI Engineer Header 模板
						</div>
						{/* 模板预览 */}
						<div style={{ padding: '18px 20px', fontFamily: fonts.body, lineHeight: 1.55, borderBottom: `2px dashed #ddd` }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, letterSpacing: -1, color: colors.black, lineHeight: 1.1 }}>
								Your Name
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 17, fontWeight: 700, color: colors.dark, marginTop: 6 }}>
								AI Engineer · RAG / Agent / LLM Ops
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#555', marginTop: 12, lineHeight: 1.7 }}>
								<div>📧 yourname@example.com　　📱 +61 4XX XXX XXX</div>
								<div>📍 Sydney, AU · Open to relocation · PR holder</div>
								<div>🔗 linkedin.com/in/yourname</div>
								<div>💻 github.com/yourname　　🌐 yourname.dev</div>
							</div>
						</div>
						{/* 7 元素清单 */}
						<div style={{ padding: '12px 16px', flex: 1, minHeight: 0, overflow: 'hidden' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.teal, marginBottom: 8 }}>
								7 个必备元素
							</div>
							<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 14.5, lineHeight: 1.6, color: colors.black, columnCount: 1, fontWeight: 500 }}>
								{goodElements.map((e) => (
									<li key={e.idx} style={{ marginBottom: 3 }}>
										<span style={{ color: colors.teal, fontWeight: 700, fontFamily: fonts.mono, marginRight: 6 }}>{e.idx}</span>
										{e.label}
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* 右：6 雷区 */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } } }}
						style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, minHeight: 0 }}
					>
						{pitfalls.map((p) => (
							<motion.div
								key={p.num}
								variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								style={{
									border: `2.5px solid ${colors.red}`,
									boxShadow: shadowSm,
									background: colors.white,
									padding: '8px 11px',
									display: 'flex',
									flexDirection: 'column',
									gap: 3,
									minWidth: 0,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: colors.red }}>{p.num}</span>
									<span style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900, letterSpacing: -0.3, lineHeight: 1.2 }}>
										❌ {p.title}
									</span>
								</div>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 13.5, lineHeight: 1.45, color: '#333', fontWeight: 500 }}>
									{p.points.map((pt, pi) => (
										<li key={pi} style={{ marginBottom: 2 }}>
											<span style={{ color: colors.red, fontWeight: 700 }}>· </span>{pt}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* 底部红色总结条 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95 }}
					style={{ marginTop: 12 }}
				>
					<div style={{
						background: colors.red,
						color: colors.white,
						border,
						boxShadow: `6px 6px 0 ${colors.black}`,
						padding: '14px 26px',
						fontFamily: fonts.heading,
						fontSize: 22,
						fontWeight: 900,
						lineHeight: 1.3,
						letterSpacing: -0.3,
						textAlign: 'center',
					}}>
						Header 错一行 = <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px', marginLeft: 4, marginRight: 4 }}>ATS 进不去</span> = 后面写得再好都白搭。
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
