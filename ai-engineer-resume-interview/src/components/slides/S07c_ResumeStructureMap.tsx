import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface Section {
	num: string;
	name: string;
	ratio: string;
	seconds: string;
	tonight: string;
	phase: string;
	star?: boolean;
}

const sections: Section[] = [
	{ num: '1', name: 'Header · 个人信息', ratio: '8%', seconds: '1–2s', tonight: '接下来 5 min', phase: colors.p1 },
	{ num: '2', name: 'Skills', ratio: '20%', seconds: '3–4s · 关键词扫描', tonight: '接下来 30 min', phase: colors.p2, star: true },
	{ num: '3', name: 'Experiences', ratio: '55%', seconds: '3–5s + 深读', tonight: '接下来 25 min', phase: colors.p3, star: true },
	{ num: '4', name: 'Education', ratio: '10%', seconds: '1–2s', tonight: '5 min', phase: colors.p4 },
	{ num: '5', name: 'Reference', ratio: '5–7%', seconds: '0–1s · 多数跳过', tonight: '3 min', phase: colors.p5 },
];

interface Insight {
	num: string;
	title: string;
	points: string[];
	accent: string;
}

const insights: Insight[] = [
	{
		num: '01',
		title: '招聘官 8 秒看完整份简历',
		points: [
			'Skills + Experiences 占 75% 注意力',
			'Header 决定能不能进 ATS',
			'Education / Reference 是兜底',
		],
		accent: colors.red,
	},
	{
		num: '02',
		title: 'ATS 解析失败 = 直接淘汰',
		points: [
			'关键字不在 Skills section → ATS 评分低',
			'Header 格式怪（表格 / 图片 / 头像）→ 解析不出来',
			'简历必须 PDF + 可文本选中',
		],
		accent: colors.indigo,
	},
	{
		num: '03',
		title: '顺序不能错',
		points: [
			'AI Engineer 必须先 Skills 再 Experiences（关键词命中优先）',
			'Education 放后面（除非应届）',
			'Reference "available upon request" 一行就够',
		],
		accent: colors.teal,
	},
];

export default function S07c_ResumeStructureMap() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '92%', padding: '20px 32px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
				>
					<span style={{ padding: '7px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						RESUME MAP
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#666' }}>
						今晚 90 分钟的教学地图
					</span>
				</motion.div>

				{/* 标题 */}
				<motion.h2
					initial={{ opacity: 0, x: -32 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900, lineHeight: 1.15, letterSpacing: -1, marginBottom: 4 }}
				>
					简历 <span style={{ color: colors.red }}>5 大 Section</span> · 今晚的教学地图
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.18 }}
					style={{ fontFamily: fonts.body, fontSize: 18, color: '#555', fontWeight: 500, marginBottom: 16 }}
				>
					标准 AI Engineer 简历结构 · <strong style={{ color: colors.black }}>顺序很重要</strong>
				</motion.p>

				{/* 5 步 timeline 横排 — flex 布局：卡片 + 箭头交替 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
					style={{ display: 'flex', alignItems: 'stretch', gap: 6, marginBottom: 14 }}
				>
					{sections.map((s, i) => (
						<motion.div
							key={s.num}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{ display: 'flex', alignItems: 'stretch', flex: i < sections.length - 1 ? '1 1 0' : '0 0 auto', minWidth: 0 }}
						>
							{/* 卡片 */}
							<div style={{
								flex: 1,
								background: colors.white,
								border,
								boxShadow: shadowSm,
								display: 'flex',
								flexDirection: 'column',
								minWidth: 0,
								overflow: 'hidden',
							}}>
								{/* phase 顶部色条 */}
								<div style={{ height: 6, background: s.phase, borderBottom: `2px solid ${colors.black}` }} />
								{/* 编号大字 */}
								<div style={{ padding: '10px 12px 4px', display: 'flex', alignItems: 'baseline', gap: 6 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 48, fontWeight: 900, lineHeight: 1, letterSpacing: -2, color: s.phase }}>
										{s.num}
									</span>
									{s.star && (
										<span style={{ fontSize: 18, color: colors.red }}>★</span>
									)}
								</div>
								{/* section 名 */}
								<div style={{ padding: '0 12px 6px', fontFamily: fonts.heading, fontSize: 16.5, fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.3, color: colors.black, minHeight: 40 }}>
									{s.name}
								</div>
								{/* meta */}
								<div style={{ padding: '8px 12px', borderTop: `1px dashed #ccc`, fontFamily: fonts.mono, fontSize: 13.5, lineHeight: 1.55, color: '#555' }}>
									<div>占 <strong style={{ color: colors.black }}>{s.ratio}</strong></div>
									<div>看 <strong style={{ color: colors.black }}>{s.seconds}</strong></div>
								</div>
								{/* 今晚 footer */}
								<div style={{
									marginTop: 'auto',
									padding: '8px 12px',
									background: s.star ? colors.yellow : colors.dark,
									color: s.star ? colors.black : colors.white,
									borderTop: `2px solid ${colors.black}`,
									fontFamily: fonts.mono,
									fontSize: 13,
									fontWeight: 700,
									lineHeight: 1.3,
								}}>
									{s.tonight}
								</div>
							</div>
							{/* 箭头（最后一个不画） */}
							{i < sections.length - 1 && (
								<div style={{
									width: 28,
									flexShrink: 0,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: fonts.heading,
									fontSize: 28,
									fontWeight: 900,
									color: colors.red,
								}}>
									→
								</div>
							)}
						</motion.div>
					))}
				</motion.div>

				{/* 3 个洞察卡 */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, flex: 1, minHeight: 0 }}
				>
					{insights.map((ins) => (
						<motion.div
							key={ins.num}
							variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.35, ease: 'easeOut' }}
							style={{
								background: colors.white,
								border,
								boxShadow: shadowSm,
								padding: '10px 14px',
								display: 'flex',
								flexDirection: 'column',
								gap: 6,
								minWidth: 0,
							}}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: ins.accent }}>{ins.num}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, letterSpacing: -0.3, lineHeight: 1.2 }}>
									洞察 · {ins.title}
								</span>
							</div>
							<ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: 14.5, lineHeight: 1.5, color: colors.black, fontWeight: 500 }}>
								{ins.points.map((p, pi) => (
									<li key={pi} style={{ marginBottom: 4 }}>
										<span style={{ color: ins.accent, fontWeight: 700 }}>→ </span>{p}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				{/* 底部落点 */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.05 }}
					style={{ marginTop: 12, textAlign: 'center' }}
				>
					<div style={{ display: 'inline-block', padding: '14px 28px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, lineHeight: 1.3, letterSpacing: -0.4 }}>
						接下来 <span style={{ color: colors.yellow }}>90 分钟</span>，我们把每个 section <span style={{ color: colors.yellow }}>拆开重写</span>一遍。
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
