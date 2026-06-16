import { Slide, Inner, Title, colors, fonts, border } from '../ui';
import { motion } from 'framer-motion';

const befores = [
	{ icon: '⌨️', t: '写第一行代码前' },
	{ icon: '🤖', t: '配第一个 agent 前' },
	{ icon: '🚀', t: '开一个新 project 前' },
];

// 一句话结论 —— 动手之前先确定 SoT
export default function S04d2_SoTFirst() {
	return (
		<Slide bg={colors.dark}>
			<Inner center>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '7px 18px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 2, marginBottom: 22 }}>
					一句话结论
				</motion.div>

				<Title white size="62px" style={{ textAlign: 'center', lineHeight: 1.12, maxWidth: 1180 }}>
					动手之前 —— 第一件事是<br />
					<motion.span initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
						style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 16px', marginTop: 10 }}>
						确定你的 Source of Truth
					</motion.span>
				</Title>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
					style={{ fontSize: 21, color: '#cfd3e6', marginTop: 24, maxWidth: 940, textAlign: 'center', lineHeight: 1.55 }}>
					不是先写代码、不是先配工具 —— 是先定好那份<b style={{ color: colors.white }}>唯一真相</b>。它一歪，后面 AI 干得越快、错得越远。
				</motion.p>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 28, display: 'flex', gap: 16 }}>
					{befores.map((b) => (
						<div key={b.t} style={{ background: colors.white, color: colors.black, border, boxShadow: `5px 5px 0 ${colors.yellow}`, padding: '12px 20px', fontSize: 16, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8 }}>
							<span style={{ fontSize: 22 }}>{b.icon}</span>{b.t} → 先问「SoT 在哪」
						</div>
					))}
				</motion.div>
			</Inner>
		</Slide>
	);
}
