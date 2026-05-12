import { motion } from 'framer-motion';
import { Slide, Inner, Title, colors, fonts, border } from '../ui';

const DATA = [
	{ name: 'AI Engineer', min: 155, max: 400, hot: true },
	{ name: 'FDE', min: 270, max: 500, hot: true },
	{ name: 'AI Agent Developer', min: 130, max: 250, hot: true },
	{ name: 'Context Engineer', min: 130, max: 220 },
	{ name: 'MLOps Engineer', min: 120, max: 200 },
	{ name: 'RAG Engineer', min: 120, max: 200 },
	{ name: 'AI Red Teamer', min: 110, max: 200 },
	{ name: 'AI Automation Specialist', min: 100, max: 180 },
	{ name: 'Prompt Engineer', min: 100, max: 300 },
	{ name: 'Knowledge Architect', min: 100, max: 170 },
	{ name: 'AI Adoption Specialist', min: 90, max: 190 },
	{ name: 'Algorithm Bias Auditor', min: 90, max: 160 },
	{ name: 'AI Trainer', min: 60, max: 180 },
];

const MAX = 500;
const ROW_STAGGER = 0.06;
const BAR_DURATION = 0.55;
const START_DELAY = 0.35;

export default function S11_TechSalaryChart() {
	return (
		<Slide bg={colors.techBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					style={{ marginBottom: 20, width: '100%' }}
				>
					<div style={{
						display: 'inline-block', padding: '6px 14px', background: colors.techPurple,
						color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 10,
					}}>CHAPTER 1 · 薪资全景</div>
					<Title size="40px">技术岗薪资带宽 · <span style={{ color: colors.techPurple }}>13 个岗位横向对比</span></Title>
					<p style={{ fontSize: 14, color: '#666', marginTop: 4, fontFamily: fonts.mono }}>USD · 年薪 · 含 base + 部分股权 · 数据 2026-05</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.2 }}
					style={{ flex: 1, width: '100%', background: colors.white, border, padding: 24 }}
				>
					{DATA.map((d, idx) => {
						const left = (d.min / MAX) * 100;
						const width = ((d.max - d.min) / MAX) * 100;
						const rowDelay = START_DELAY + idx * ROW_STAGGER;
						return (
							<div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: rowDelay }}
									style={{
										width: 180, fontSize: 13, fontWeight: 700, textAlign: 'right',
										color: d.hot ? colors.red : colors.dark,
									}}
								>{d.name}{d.hot && ' 🔥'}</motion.div>
								<div style={{ flex: 1, height: 24, position: 'relative', background: '#f3f3f3', border: '1px solid #ddd' }}>
									<motion.div
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ duration: BAR_DURATION, delay: rowDelay + 0.05, ease: [0.16, 1, 0.3, 1] }}
										style={{
											position: 'absolute', left: `${left}%`, width: `${width}%`, height: '100%',
											background: d.hot ? colors.red : colors.techPurple, border: '1px solid #000',
											transformOrigin: 'left',
										}}
									/>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.25, delay: rowDelay + BAR_DURATION }}
										style={{
											position: 'absolute', left: `${left}%`, transform: 'translateX(-100%)',
											top: 2, fontFamily: fonts.mono, fontSize: 10, color: '#555', paddingRight: 4,
										}}
									>${d.min}K</motion.div>
									<motion.div
										initial={{ opacity: 0, x: -8 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3, delay: rowDelay + BAR_DURATION }}
										style={{
											position: 'absolute', left: `${left + width}%`, top: 2,
											fontFamily: fonts.mono, fontSize: 10, color: '#555', paddingLeft: 4, fontWeight: 700,
										}}
									>${d.max}K</motion.div>
								</div>
							</div>
						);
					})}
					<div style={{ display: 'flex', marginLeft: 192, marginTop: 8, color: '#888', fontFamily: fonts.mono, fontSize: 11 }}>
						<span style={{ width: '20%' }}>$100K</span>
						<span style={{ width: '20%' }}>$200K</span>
						<span style={{ width: '20%' }}>$300K</span>
						<span style={{ width: '20%' }}>$400K</span>
						<span style={{ width: '20%' }}>$500K+</span>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 1.6 }}
					style={{ marginTop: 12, fontSize: 14, color: '#444', fontStyle: 'italic' }}
				>
					🔥 = top tier · FDE 和 AI Engineer 在最高带，Bias Auditor / Trainer 是入门门槛
				</motion.div>
			</Inner>
		</Slide>
	);
}
