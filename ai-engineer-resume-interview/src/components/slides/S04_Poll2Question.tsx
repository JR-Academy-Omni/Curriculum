import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Choice {
	letter: 'A' | 'B';
	label: string;
	sub: string;
	bg: string;
	rotate: number;
	emoji: string;
}

const choices: Choice[] = [
	{
		letter: 'A',
		label: '认可',
		sub: '比 99% 的程序员强，我都不敢写代码了',
		bg: colors.green,
		rotate: -2,
		emoji: '🤖',
	},
	{
		letter: 'B',
		label: '不认可',
		sub: '还差得远，让它写个复杂系统就翻车',
		bg: colors.orange,
		rotate: 2,
		emoji: '🧠',
	},
];

export default function S04_Poll2Question() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, height: '85%', padding: '40px 40px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部 POLL 标签 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
				>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
						POLL · 02
					</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: '#666' }}>
						这题更刺激，再想 10 秒
					</span>
				</motion.div>

				{/* 大字提问 */}
				<motion.h2
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.15, duration: 0.45 }}
					style={{
						fontFamily: fonts.heading,
						fontSize: '60px',
						fontWeight: 900,
						lineHeight: 1.15,
						letterSpacing: -1.5,
						color: colors.black,
						marginBottom: 12,
					}}
				>
					<span style={{ background: colors.indigo, color: colors.white, padding: '0 14px', border, boxShadow: shadow, display: 'inline-block', transform: 'rotate(-1deg)' }}>LLM 大模型</span> 是否比
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.25, duration: 0.45 }}
					style={{ fontFamily: fonts.heading, fontSize: '60px', fontWeight: 900, lineHeight: 1.15, letterSpacing: -1.5, marginBottom: 36 }}
				>
					所有人类的 <span style={{ color: colors.red }}>Coding 能力</span> 强？
				</motion.div>

				{/* 两张投票卡 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, alignItems: 'center' }}>
					{choices.map((c, i) => (
						<motion.div
							key={c.letter}
							initial={{ opacity: 0, y: 50, rotate: 0 }}
							animate={{ opacity: 1, y: 0, rotate: c.rotate }}
							transition={{ delay: 0.35 + i * 0.12, duration: 0.45, ease: 'easeOut' }}
							whileHover={{ y: -6, transition: { duration: 0.15 } }}
							style={{
								background: c.bg,
								border,
								boxShadow: shadow,
								padding: '36px 32px',
								minHeight: 280,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								cursor: 'pointer',
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
								<div style={{ width: 80, height: 80, background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.white}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 52 }}>
									{c.letter}
								</div>
								<span style={{ fontSize: 56 }}>{c.emoji}</span>
							</div>
							<div style={{ fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900, lineHeight: 1.2, marginBottom: 10, color: colors.black }}>
								{c.label}
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: '17px', fontWeight: 600, color: '#333', lineHeight: 1.5 }}>
								{c.sub}
							</div>
						</motion.div>
					))}
				</div>

				{/* 底部投票方式 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					style={{ marginTop: 28, textAlign: 'center' }}
				>
					<span style={{ display: 'inline-block', padding: '12px 24px', background: colors.dark, color: colors.white, fontFamily: fonts.heading, fontSize: '20px', fontWeight: 800, border, boxShadow: `5px 5px 0 ${colors.red}` }}>
						✋ 举手 &nbsp;·&nbsp; 💬 群里发 <span style={{ color: colors.green }}>A</span> 或 <span style={{ color: colors.orange }}>B</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
