import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const scarce = ['真人出镜 / 真实口吻', '真案例 + 踩过的坑', '真数据 / 真截图', '有观点、敢得罪人'];
const howTo = [
	{ k: '喂真实数据', v: '把真案例 / 真数字注入 prompt，不让它编' },
	{ k: '装上你的人设', v: '从 Master 取你的真实语气，不用默认腔' },
	{ k: '降 AI 率', v: '过一道 /xhs-review，洗掉「宝子们」机器味' },
];

export default function S10_ShiftAuthenticity() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '92%', maxWidth: 1420, height: '86%', padding: '30px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border }}>转变 05 · 反直觉，但最重要</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}
					style={{ fontFamily: fonts.heading, fontSize: '53px', fontWeight: 900, color: colors.white, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 22 }}>
					AI 越多，<span style={{ color: colors.rose }}>人味越值钱</span>
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 22 }}>
					{/* 左：为什么值钱（稀缺信号）*/}
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
						style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 12 }}>① 为什么值钱 · 稀缺信号</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{scarce.map((s, i) => (
								<motion.div key={s} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.08 }}
									style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: fonts.body, fontSize: 19, fontWeight: 700, color: colors.black }}>
									<span style={{ color: colors.rose }}>✦</span>{s}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 右：怎么让 AI 也有人味（可操作）*/}
					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
						style={{ background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 12 }}>② 人味不只靠真人 —— <span style={{ color: colors.yellow }}>让 AI 也有人味</span></div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
							{howTo.map((h, i) => (
								<motion.div key={h.k} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
									style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.rose, background: colors.white, padding: '3px 9px', whiteSpace: 'nowrap' }}>{h.k}</span>
									<span style={{ fontFamily: fonts.body, fontSize: 17.5, fontWeight: 500, lineHeight: 1.4 }}>{h.v}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ marginTop: 22, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '13px 28px', background: colors.white, color: colors.black, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>
						人味不是 AI 的反面 —— 是<span style={{ color: colors.rose }}>你喂给 AI 的真实</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
