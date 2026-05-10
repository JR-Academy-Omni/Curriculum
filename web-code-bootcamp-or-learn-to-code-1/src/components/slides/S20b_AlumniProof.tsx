import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

const companies = [
	'Atlassian', 'Canva', 'Google', 'Microsoft', 'Amazon',
	'Meta', 'Apple', 'Tesla', 'Airwallex', 'Afterpay',
	'REA Group', 'SEEK', 'Xero', 'Zip', 'NAB',
	'CommBank', 'Westpac', 'ANZ', 'Macquarie', 'Woolworths',
	'Telstra', 'Optus', 'Myer', 'Domain', 'Coles',
];

const bigStats = [
	{ value: '5,000+', label: '匠人学员拿到 offer', sub: '8 年累计' },
	{ value: '29', label: '期 IT 就业课 · 第 30 期招生中', sub: '2018 年首期至今' },
	{ value: '80+', label: '澳洲互联网公司有匠人校友', sub: 'Tech / Fintech / Ecommerce' },
];

export default function S20b_AlumniProof() {
	return (
		<Slide bg={colors.warmBg} style={{ position: 'relative', overflow: 'hidden' }}>
			{/* 背景斜线装饰 */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.025) 0 1px, transparent 1px 14px)`,
			}} />

			<div style={{ position: 'relative', zIndex: 1, width: '94%', maxWidth: 1400, padding: '28px 28px', display: 'flex', flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 20 }}
				>
					<div style={{ display: 'inline-block', padding: '5px 14px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, border, boxShadow: shadowSm, marginBottom: 12 }}>
						ALUMNI · 匠人校友网络
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '52px', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, margin: 0 }}>
						<span style={{ display: 'inline-block', padding: '0 12px', background: colors.yellow, border, boxShadow: `5px 5px 0 ${colors.black}`, transform: 'rotate(-1deg)' }}>
							5,000+
						</span>{' '}学员拿到 offer · 遍布澳洲几乎所有互联网公司
					</h2>
				</motion.div>

				{/* 三大 stat */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
					style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 18 }}
				>
					{bigStats.map((s) => (
						<motion.div
							key={s.label}
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.4 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 18px' }}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: '66px', fontWeight: 900, color: colors.red, letterSpacing: -2, lineHeight: 1 }}>
								{s.value}
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: '20px', fontWeight: 800, color: colors.black, marginTop: 8, lineHeight: 1.3 }}>
								{s.label}
							</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', marginTop: 4, letterSpacing: 0.5 }}>
								{s.sub}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* 公司墙 */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					style={{ background: colors.dark, border, boxShadow: shadow, padding: '16px 18px' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
						<div style={{ display: 'inline-block', padding: '4px 10px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, letterSpacing: 1 }}>
							CAREER · 部分校友雇主
						</div>
						<span style={{ fontFamily: fonts.mono, fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 700, letterSpacing: 0.5 }}>
							只展示 25 家 · 实际远超于此
						</span>
					</div>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.025, delayChildren: 0.7 } } }}
						style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}
					>
						{companies.map((c) => (
							<motion.div
								key={c}
								variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }}
								transition={{ duration: 0.3 }}
								style={{
									padding: '8px 10px',
									background: 'rgba(255,255,255,0.08)',
									border: `1.5px solid rgba(255,255,255,0.25)`,
									fontFamily: fonts.heading,
									fontSize: '18px',
									fontWeight: 800,
									color: colors.white,
									textAlign: 'center',
									letterSpacing: -0.2,
								}}
							>
								{c}
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 }}
					style={{ marginTop: 16, padding: '12px 18px', background: colors.black, border, boxShadow: `5px 5px 0 ${colors.yellow}`, textAlign: 'center' }}
				>
					<span style={{ fontFamily: fonts.heading, fontSize: '19px', color: colors.white, fontWeight: 900, letterSpacing: -0.3 }}>
						你毕业后去面试 —— <span style={{ color: colors.yellow }}>大概率面试官就是匠人校友</span>。内推 + 模拟面试 + 经验传承全打通
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
