import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S22c — Section 4 · Education
 * 应届 vs 在职两种写法 + 5 个雷区
 * 红线：不针对具体学校排名做承诺、占位示例不硬编码学校 ranking
 */

interface FreshElement {
	num: string;
	label: string;
	rule: string;
}

const freshElements: FreshElement[] = [
	{ num: '①', label: '学位', rule: '完整学位名 + 专业' },
	{ num: '②', label: 'GPA', rule: '≥ 3.5/4.0 才写' },
	{ num: '③', label: '排名', rule: 'Top X% 才写' },
	{ num: '④', label: '学校 + 年份 + 城市', rule: '三件套都要' },
	{ num: '⑤', label: '相关课程', rule: '挑 3-5 个 AI 相关' },
	{ num: '⑥', label: 'Capstone / 毕业项目', rule: '必有 GitHub link' },
];

interface Pitfall {
	num: string;
	title: string;
	desc: string;
}

const pitfalls: Pitfall[] = [
	{ num: '1', title: '写 GPA 但低于 3.5/4.0', desc: '主动减分 — 不如不写' },
	{ num: '2', title: '罗列所有课程', desc: '招聘官不在乎你学了 20 门课，挑 3-5 门跟 JD 相关的' },
	{ num: '3', title: 'Certification 跟学位混在一起', desc: 'AWS / Azure / GCP 单独 section，或放 Skills 底部' },
	{ num: '4', title: '学历不真实 / 夸张', desc: '背调抓出来 = blacklist；学校排名可写，具体数字必须真实' },
	{ num: '5', title: '中学 / 高中信息', desc: '不写（除非你是 olympiad 国家队级别）' },
];

export default function S22c_Education() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '16px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标签 + 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}
				>
					<span style={{ padding: '6px 14px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}`, letterSpacing: 0.5 }}>
						SECTION 4 · EDUCATION
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						应届跟在职写法不一样
					</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.15, duration: 0.4 }}
					style={{ fontFamily: fonts.body, fontSize: 16, color: '#555', fontWeight: 600, marginBottom: 10 }}
				>
					副标题：AI Engineer 招聘看的是项目，不是学位 — 写对就行，不用拼。
				</motion.div>

				{/* 大字分流：你是哪种 */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
					<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
						你是哪种？
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#888', fontWeight: 700 }}>
						两种简历完全不同的写法
					</span>
				</div>

				{/* 左右分流 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, minHeight: 0 }}>
					{/* 左：应届 */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.25, duration: 0.4 }}
						style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column', minHeight: 0 }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
							<span style={{ padding: '4px 12px', background: colors.green, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, border: `2px solid ${colors.black}`, letterSpacing: 0.3 }}>
								应届 / 在校 / 毕业 &lt; 2 年
							</span>
							<span style={{ fontFamily: fonts.body, fontSize: 14, color: colors.black, fontWeight: 700 }}>
								Education 放 Skills 后 / Experiences 前
							</span>
						</div>

						{/* 简历示例 */}
						<div style={{ background: '#f1f8e9', borderLeft: `3px solid ${colors.green}`, padding: '10px 12px', marginBottom: 10 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#1b5e20', fontWeight: 900, letterSpacing: 0.5, marginBottom: 6 }}>
								标准模板（占位示例）
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.black, fontWeight: 700, lineHeight: 1.55 }}>
								<div style={{ marginBottom: 4 }}><span style={{ color: colors.red }}>Education</span></div>
								<div>Master of Computer Science · <span style={{ background: '#fff59d' }}>GPA 3.8/4.0 (Top 10%)</span></div>
								<div>University X · 2024.03 - 2026.06 · Sydney</div>
								<div><span style={{ color: '#555' }}>Relevant Coursework:</span> Distributed Systems · ML · NLP</div>
								<div style={{ marginTop: 4 }}>Bachelor of Software Engineering · GPA 3.6/4.0</div>
								<div>University Y · 2020.09 - 2024.06 · Beijing</div>
								<div><span style={{ color: '#555' }}>Capstone:</span> RAG legal Q&amp;A serving 200+ users <span style={{ color: colors.green, fontWeight: 900 }}>[GitHub]</span></div>
							</div>
						</div>

						{/* 6 元素绿字标注 */}
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#1b5e20', fontWeight: 900, marginBottom: 6, letterSpacing: 0.3 }}>
							✅ 必备 6 元素
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
							{freshElements.map((e, i) => (
								<motion.div
									key={e.num}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.35 + i * 0.04, duration: 0.3 }}
									style={{ display: 'flex', alignItems: 'flex-start', gap: 5, fontFamily: fonts.body, fontSize: 13.5, lineHeight: 1.4 }}
								>
									<span style={{ color: colors.green, fontWeight: 900, flexShrink: 0 }}>{e.num}</span>
									<span><span style={{ fontWeight: 900, color: colors.black }}>{e.label}</span> <span style={{ color: '#666' }}>· {e.rule}</span></span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 右：在职 */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.25, duration: 0.4 }}
						style={{ background: colors.white, border, boxShadow: shadowSm, padding: '12px 14px', display: 'flex', flexDirection: 'column', minHeight: 0 }}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
							<span style={{ padding: '4px 12px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, border: `2px solid ${colors.black}`, letterSpacing: 0.3 }}>
								在职 / 毕业 ≥ 2 年
							</span>
							<span style={{ fontFamily: fonts.body, fontSize: 14, color: colors.black, fontWeight: 700 }}>
								Education 放最后，简短
							</span>
						</div>

						{/* 简历示例 */}
						<div style={{ background: '#fffce0', borderLeft: `3px solid ${colors.yellow}`, padding: '10px 12px', marginBottom: 10 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#7a5e00', fontWeight: 900, letterSpacing: 0.5, marginBottom: 6 }}>
								简化模板（占位示例）
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.black, fontWeight: 700, lineHeight: 1.55 }}>
								<div style={{ marginBottom: 4 }}><span style={{ color: colors.red }}>Education</span></div>
								<div>Master of Computer Science · University X · 2022</div>
								<div>Bachelor of Software Engineering · University Y · 2020</div>
							</div>
						</div>

						{/* 关键说明 */}
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#7a5e00', fontWeight: 900, marginBottom: 6, letterSpacing: 0.3 }}>
							✅ 关键规则
						</div>
						<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
							{[
								<><span style={{ fontWeight: 900 }}>不写 GPA</span>（除非超高 + 应届 &lt; 1 年）</>,
								<><span style={{ fontWeight: 900 }}>不写课程</span>（工作经验更重要）</>,
								<><span style={{ fontWeight: 900 }}>不写中学</span></>,
								<><span style={{ fontWeight: 900 }}>顺序：最近的学位在上</span></>,
							].map((item, i) => (
								<motion.li
									key={i}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
									style={{ fontFamily: fonts.body, fontSize: 14.5, color: colors.black, fontWeight: 600, lineHeight: 1.45, marginBottom: 5, display: 'flex', gap: 6 }}
								>
									<span style={{ color: colors.orange, fontWeight: 900, flexShrink: 0 }}>→</span>
									<span>{item}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* 5 个雷区 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55, duration: 0.4 }}
					style={{ marginTop: 12, padding: '10px 14px', background: '#fff5f5', border: `3px solid ${colors.red}`, boxShadow: `4px 4px 0 ${colors.red}` }}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
						<span style={{ fontSize: 18 }}>🚨</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.red, letterSpacing: 0.5 }}>
							5 个 EDUCATION 雷区
						</span>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
						{pitfalls.map((p, i) => (
							<motion.div
								key={p.num}
								initial={{ opacity: 0, y: 6 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.65 + i * 0.05, duration: 0.3 }}
								style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
							>
								<div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
									<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.red }}>雷区 {p.num}</span>
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 900, color: colors.black, lineHeight: 1.3 }}>
									{p.title}
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 12.5, color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
									{p.desc}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* 底部总结条 */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.4 }}
					style={{ marginTop: 10, textAlign: 'center' }}
				>
					<div style={{ display: 'inline-block', padding: '12px 28px', background: colors.dark, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.red}`, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, lineHeight: 1.3, letterSpacing: -0.3 }}>
						AI Engineer 招聘看 <span style={{ color: colors.yellow }}>项目 &gt; 学位</span>。Education 写对就行，不用拼。
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
