import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';

/**
 * S22d — Section 5 · Reference · 写一行就够
 * 但选错推荐人能让你前功尽弃
 */

interface WhyCard {
	num: string;
	title: string;
	bullets: string[];
	color: string;
}

const whys: WhyCard[] = [
	{
		num: '1',
		title: '隐私保护',
		bullets: [
			'不在简历里直接写推荐人手机 / 邮箱',
			'招聘官真要联系会主动问',
			'推荐人也不希望被随便骚扰',
		],
		color: colors.p1,
	},
	{
		num: '2',
		title: '节省篇幅',
		bullets: [
			'简历 1-2 页是黄金尺寸',
			'留给 Skills / Experiences 是真的',
			'Reference 占太多 = 浪费',
		],
		color: colors.p3,
	},
	{
		num: '3',
		title: '灵活匹配',
		bullets: [
			'不同公司面试，可以选不同推荐人',
			'投甲方公司用前甲方同事',
			'投乙方公司用前乙方 senior',
		],
		color: colors.p5,
	},
	{
		num: '4',
		title: 'ATS 不扫这里',
		bullets: [
			'关键字不在 Reference section',
			'ATS 评分跟这里无关',
			'写多了反而稀释关键字密度',
		],
		color: colors.p7,
	},
];

interface Principle {
	num: string;
	title: string;
	desc: string;
}

const principles: Principle[] = [
	{ num: '1', title: '时间窗口 < 3 年', desc: '太老的同事记不清细节 → 推荐变成"嗯他还行"' },
	{ num: '2', title: 'Senior level', desc: '选过你的 manager / tech lead / 团队 senior，别选同 level 同事' },
	{ num: '3', title: '知道你具体做过什么', desc: '推荐人能讲出你的 1-2 个具体项目 + 量化，否则没意义' },
	{ num: '4', title: '提前沟通', desc: '联系前 1 周通知，把 JD + 简历 + 想强调的点发给他，别让他被电话突袭' },
	{ num: '5', title: '中英文匹配', desc: '投英文公司用英文推荐人；投中国大陆公司中文推荐人 OK；不匹配 = 反向减分' },
];

const dontDos: string[] = [
	'不要在简历里写 "Reference: 张三 138xxx" — 隐私 + 招聘官印象差',
	'不要用从没共事过 / 只是 LinkedIn 联系人 的"大佬"做推荐人 — 一通话立刻露馅',
	'不要不通知推荐人就投出去 — 推荐人没准备 = 推荐质量崩',
];

export default function S22d_Reference() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '96%', maxWidth: 1420, height: '94%', padding: '14px 28px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部标签 + 标题 */}
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}
				>
					<span style={{ padding: '5px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, border, boxShadow: `3px 3px 0 ${colors.red}`, letterSpacing: 0.5 }}>
						SECTION 5 · REFERENCE
					</span>
					<span style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.black, letterSpacing: -0.5 }}>
						写一行就够
					</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.15, duration: 0.4 }}
					style={{ fontFamily: fonts.body, fontSize: 13, color: '#555', fontWeight: 600, marginBottom: 10 }}
				>
					但选错推荐人能让你前功尽弃 — 写法简单，选人是 100 倍的事。
				</motion.div>

				{/* 大字示范 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.4 }}
					style={{ display: 'flex', gap: 12, marginBottom: 10 }}
				>
					<div style={{ flex: 1, background: '#f1f8e9', border, boxShadow: shadowSm, padding: '12px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, color: '#1b5e20', fontWeight: 900, letterSpacing: 0.5, marginBottom: 6 }}>
							✅ 标准 Reference section 只需要一行
						</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 18, color: colors.black, fontWeight: 700, lineHeight: 1.6 }}>
							<div style={{ color: colors.red, fontSize: 16 }}>References</div>
							<div>Available upon request.</div>
						</div>
					</div>
					<div style={{ flex: '0 0 240px', background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '12px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.yellow, fontWeight: 900, letterSpacing: 0.5, marginBottom: 4 }}>
							就这一行
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, color: colors.white, lineHeight: 1.2, letterSpacing: -0.3 }}>
							占 <span style={{ color: colors.yellow }}>5%</span> 篇幅
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 600, marginTop: 4 }}>
							剩下 95% 留给 Skills + Experiences
						</div>
					</div>
				</motion.div>

				{/* 为什么这样写 · 4 张说明卡 */}
				<div style={{ marginBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
						<span style={{ fontFamily: fonts.heading, fontSize: 16, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
							为什么这样写
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 10, color: '#888', fontWeight: 700 }}>
							4 个核心理由
						</span>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
						{whys.map((w, i) => (
							<motion.div
								key={w.num}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
								style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 11px', display: 'flex', flexDirection: 'column' }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
									<div style={{ width: 22, height: 22, background: w.color, color: colors.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontSize: 11, fontWeight: 900, border: `2px solid ${colors.black}` }}>
										{w.num}
									</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 900, color: colors.black, letterSpacing: -0.3 }}>
										{w.title}
									</div>
								</div>
								<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
									{w.bullets.map((b, j) => (
										<li key={j} style={{ fontFamily: fonts.body, fontSize: 10.5, color: colors.black, fontWeight: 600, lineHeight: 1.35, marginBottom: 3, display: 'flex', gap: 4 }}>
											<span style={{ color: w.color, fontWeight: 900, flexShrink: 0 }}>→</span>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>

				{/* 真要给推荐人时 · 选人 5 原则 */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.55, duration: 0.4 }}
					style={{ background: '#fffce0', border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '10px 12px', marginBottom: 10 }}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
						<span style={{ fontSize: 14 }}>⭐</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: '#7a5e00', letterSpacing: 0.5 }}>
							真要给推荐人时 · 选人 5 原则
						</span>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
						{principles.map((p, i) => (
							<motion.div
								key={p.num}
								initial={{ opacity: 0, y: 6 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.65 + i * 0.05, duration: 0.3 }}
								style={{ background: colors.white, border: `2px solid ${colors.black}`, padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}
							>
								<div style={{ fontFamily: fonts.heading, fontSize: 12, fontWeight: 900, color: colors.orange }}>
									原则 {p.num}
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 11, fontWeight: 900, color: colors.black, lineHeight: 1.25 }}>
									{p.title}
								</div>
								<div style={{ fontFamily: fonts.body, fontSize: 10, color: '#555', fontWeight: 600, lineHeight: 1.3 }}>
									{p.desc}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* 红色警告条 + 落点 */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.4 }}
					style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10 }}
				>
					{/* 警告 */}
					<div style={{ padding: '8px 12px', background: '#fff5f5', border: `3px solid ${colors.red}`, boxShadow: `4px 4px 0 ${colors.red}` }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
							<span style={{ fontSize: 13 }}>🚨</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: colors.red, letterSpacing: 0.5 }}>
								三个绝对不要
							</span>
						</div>
						<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
							{dontDos.map((d, i) => (
								<li key={i} style={{ fontFamily: fonts.body, fontSize: 11, color: colors.black, fontWeight: 700, lineHeight: 1.35, marginBottom: i < dontDos.length - 1 ? 3 : 0, display: 'flex', gap: 5 }}>
									<span style={{ color: colors.red, fontWeight: 900, flexShrink: 0 }}>❌</span>
									<span>{d}</span>
								</li>
							))}
						</ul>
					</div>

					{/* 落点 */}
					<div style={{ padding: '8px 12px', background: colors.dark, border, boxShadow: `4px 4px 0 ${colors.yellow}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 9.5, color: colors.yellow, fontWeight: 900, letterSpacing: 0.5 }}>
							ACTION
						</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 900, color: colors.white, lineHeight: 1.25, letterSpacing: -0.3 }}>
							写 "Available upon request"。
							<br />
							<span style={{ color: colors.yellow }}>选人比写法重要 100 倍。</span>
						</div>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
