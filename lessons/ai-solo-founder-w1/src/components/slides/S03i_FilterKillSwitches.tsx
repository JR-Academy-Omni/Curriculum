import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const gates = [
	{
		n: '01',
		label: 'USER',
		question: '这周能找到 5 个用户吗？',
		pass: '能说出从哪里找到、今天先联系谁',
		bg: '#FFE6DF',
	},
	{
		n: '02',
		label: 'MONEY',
		question: '到底谁会为结果付钱？',
		pass: '分清使用者、受益者和付款人',
		bg: '#FFF2B8',
	},
	{
		n: '03',
		label: 'SPEED',
		question: '两到四周能验证吗？',
		pass: '能让真人体验、试用、报价或接受服务',
		bg: '#DFF3E7',
	},
];

export default function S03i_FilterKillSwitches() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '30px 56px 24px' }}>
				<SlideHead
					tag="机会筛选 · 三道硬门槛"
					tagBg={colors.red}
					title="只要一扇门关着，这周就先换方向"
					sub="总分只能帮你比较；这三道门决定你能不能马上得到真实证据。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '0.62fr 1.38fr', gap: 24, alignItems: 'stretch' }}>
					<motion.div
						initial={{ opacity: 0, x: -34 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						style={{ border, boxShadow: shadow, background: colors.red, color: colors.white, padding: '24px 24px 21px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
					>
						<div>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, letterSpacing: 2, color: colors.yellow }}>DECISION</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 68, lineHeight: 0.88, fontWeight: 950, letterSpacing: -3 }}>NOT<br />YET</div>
						</div>
						<div>
							<div style={{ borderTop: '3px solid #111', paddingTop: 13, fontSize: 23, lineHeight: 1.25, fontWeight: 950 }}>先不做，<br />不是永远不做。</div>
							<div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.45, fontWeight: 650 }}>把本周时间留给能接触真人、能看到行为、能拿到证据的方向。</div>
						</div>
					</motion.div>

					<div style={{ position: 'relative', display: 'grid', gap: 12 }}>
						<div style={{ position: 'absolute', left: 39, top: 34, bottom: 34, width: 4, background: colors.red, zIndex: 0 }} />
						{gates.map((gate, index) => (
							<motion.div
								key={gate.n}
								initial={{ opacity: 0, x: 38 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.42, delay: 0.14 * index }}
								style={{ position: 'relative', zIndex: 1, border, boxShadow: shadowSm, background: gate.bg, padding: '14px 17px', display: 'grid', gridTemplateColumns: '72px 1.02fr 0.9fr', gap: 16, alignItems: 'center' }}
							>
								<div style={{ width: 52, height: 52, border: '3px solid #111', background: colors.white, display: 'grid', placeItems: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: colors.red, boxShadow: '4px 4px 0 #111' }}>{gate.n}</div>
								<div>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1.5, color: colors.red }}>{gate.label}</div>
									<div style={{ marginTop: 4, fontSize: 22, lineHeight: 1.2, fontWeight: 950 }}>{gate.question}</div>
								</div>
								<div style={{ borderLeft: '3px solid #111', paddingLeft: 16 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1.2 }}>PASS WHEN</div>
									<div style={{ marginTop: 5, fontSize: 16, lineHeight: 1.35, fontWeight: 750 }}>{gate.pass}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ marginTop: 16, border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
					<div style={{ fontSize: 20, fontWeight: 900 }}>过关：进入下一页做选择</div>
					<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, fontWeight: 800 }}>没过关：缩小问题 / 换用户 / 换验证方式</div>
				</div>
			</Body>
		</Slide>
	);
}
