import { motion } from 'framer-motion';
import { Slide, Inner, Title, Grid, colors, fonts, border, shadow } from '../ui';

interface Tier {
	key: string;
	level: string;
	label: string;
	labelEn: string;
	bg: string;
	dot: string;
	count: string;
	jobs: string[];
}

const TIERS: Tier[] = [
	{
		key: 'extreme',
		level: 'EXTREME',
		label: '即将消失',
		labelEn: 'Extreme Risk',
		bg: '#fee2e2',
		dot: colors.explosive,
		count: '9+',
		jobs: ['Bookkeeper', 'Junior Accountant', 'Data Entry Clerk', 'Telemarketer', 'Manual SEO', 'CRUD Developer', 'UI / UX Designer (junior)', 'Data Analyst', 'Translation (literal)'],
	},
	{
		key: 'high',
		level: 'HIGH',
		label: '重塑中',
		labelEn: 'High Risk',
		bg: '#fed7aa',
		dot: '#ea580c',
		count: '5+',
		jobs: ['Marketing Coordinator', 'Junior Lawyer (paralegal)', 'Admin Assistant', 'Data Analyst (senior · 战略)', 'QA Manual Tester'],
	},
	{
		key: 'medium',
		level: 'MEDIUM',
		label: '辅助化',
		labelEn: 'Medium Risk',
		bg: '#fef3c7',
		dot: colors.fast,
		count: '5+',
		jobs: ['Recruiter', 'Customer Service', 'Graphic Designer', 'Financial Analyst', 'Junior Software Engineer'],
	},
	{
		key: 'low',
		level: 'LOW',
		label: '受影响小',
		labelEn: 'Low Risk',
		bg: '#dcfce7',
		dot: '#16a34a',
		count: '5+',
		jobs: ['Plumber', 'Electrician', 'Nurse', 'Therapist', 'Construction Worker'],
	},
];

export default function C02_DyingMap() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', gap: 18 }}>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ width: '100%' }}
				>
					<div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
						<span style={{
							padding: '5px 12px', background: colors.dark, color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 2,
						}}>78 JOBS · AI RISK MAP</span>
						<span style={{
							padding: '5px 12px', background: colors.explosive, color: colors.white,
							fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: 1,
						}}>SOURCE · jiangren.com.au/career-impact-map</span>
					</div>
					<Title size="52px">
						<span style={{ color: colors.explosive }}>78 个</span>传统岗位的 <span style={{ color: colors.dark }}>AI 风险地图</span>
					</Title>
					<p style={{ fontSize: 18, color: '#555', marginTop: 8 }}>
						按"被 AI 替代的速度 + 程度"分四档 —— 来源是 JR Academy 自己维护的 /career-impact-map 评级。
					</p>
				</motion.div>

				{/* 4 tier cards */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
					style={{ width: '100%' }}
				>
					<Grid cols={4} gap={18}>
						{TIERS.map((t, idx) => (
							<motion.div
								key={t.key}
								variants={{
									hidden: { opacity: 0, y: 30, scale: 0.94 },
									visible: { opacity: 1, y: 0, scale: 1 },
								}}
								transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
								style={{
									border, background: t.bg, boxShadow: shadow,
									padding: '20px 18px', minHeight: 420,
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.4, delay: 0.35 + idx * 0.15, type: 'spring', stiffness: 300, damping: 14 }}
										style={{ width: 14, height: 14, background: t.dot, border: `2px solid ${colors.black}` }}
									/>
									<span style={{
										fontFamily: fonts.mono, fontSize: 11, fontWeight: 700,
										color: '#444', letterSpacing: 2,
									}}>{t.level}</span>
								</div>
								<div style={{ fontSize: 26, fontWeight: 900, marginBottom: 4 }}>{t.label}</div>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, color: '#666', marginBottom: 14 }}>
									{t.labelEn} · <span style={{ color: t.dot, fontWeight: 700 }}>{t.count}</span>
								</div>
								<div style={{ height: 2, background: colors.black, marginBottom: 14, opacity: 0.15 }} />
								<motion.ul
									initial="hidden"
									animate="visible"
									variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 + idx * 0.15 } } }}
									style={{ listStyle: 'none', padding: 0, margin: 0 }}
								>
									{t.jobs.map(job => (
										<motion.li
											key={job}
											variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
											transition={{ duration: 0.3 }}
											style={{
												fontSize: 14, lineHeight: 1.6, color: colors.black,
												fontWeight: 600, padding: '4px 0',
											}}
										>
											<span style={{ color: t.dot, fontWeight: 700, marginRight: 6 }}>·</span>{job}
										</motion.li>
									))}
								</motion.ul>
							</motion.div>
						))}
					</Grid>
				</motion.div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.3, type: 'spring', stiffness: 200, damping: 14 }}
					style={{ width: '100%', textAlign: 'center' }}
				>
					<span style={{
						display: 'inline-block', padding: '12px 24px', background: colors.dark, color: colors.white,
						fontSize: 17, fontWeight: 700,
					}}>
						完整 78 个岗位评级 → <span style={{ color: colors.yellow, fontFamily: fonts.mono }}>jiangren.com.au/career-impact-map</span>
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
