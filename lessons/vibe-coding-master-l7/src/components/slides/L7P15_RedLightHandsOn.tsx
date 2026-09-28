import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P13 动手 B：派一个不该派的（红灯，12 分钟真的跑）
// SoT：蓝图 v1.0 §6.4 + §9.8
// ⚠️ 这一页在双结构版里被压成 5 分钟纸面估算。v1.0 恢复为动手实测 ——
//    估算出来的成本没有痛感，而本节最需要防的偏差恰恰是「学完什么都派」。
const STEPS = [
	{ side: 'self', t: '自己做', items: ['搜一次', '看结果'] },
	{ side: 'agent', t: '派出去', items: ['写 brief', '冷启动', '它重新摸一遍项目', '写完成回执', '你读回执'] },
];

export default function L7P15_RedLightHandsOn() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 47%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.red}>动手 B · 红灯</Tag>
						<Tag bg={colors.dark}>12 分钟，真的跑</Tag>
					</div>
					<Title size="40px" style={{ marginBottom: 12 }}>
						派一个<span style={{ background: colors.yellow, padding: '0 8px' }}>不该派的</span>
					</Title>

					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }}>
						<PromptBox
							label="微任务"
							accent={colors.dark}
							text="定位 MAX_RETRY 这个常量定义在哪个文件。"
						/>
					</motion.div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.red, letterSpacing: 1.4, fontWeight: 700, margin: '16px 0 9px' }}>
						两件事都做，都计时
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						{[
							{ n: '1', t: '真的派出去一次', d: '写 brief、等它回来、读回执——全程按你平时的做法，别偷工' },
							{ n: '2', t: '同时自己顺手做一遍', d: '作为对照。用同一张观察卡记两边的时间' },
						].map((s, i) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.33, delay: 0.35 + i * 0.12 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 38px', background: colors.red, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 16, fontWeight: 700,
								}}>{s.n}</div>
								<div style={{ flex: 1, padding: '9px 13px' }}>
									<div style={{ fontSize: 15.5, fontWeight: 800, color: colors.dark }}>{s.t}</div>
									<div style={{ fontSize: 13, color: '#666', lineHeight: 1.45 }}>{s.d}</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
						style={{ marginTop: 16, padding: '11px 15px', border: '2px dashed #ccc', fontSize: 14.5, color: '#666', lineHeight: 1.6 }}
					>
						<strong style={{ color: colors.dark }}>为什么必须真跑：</strong>
						估算出来的成本没有痛感。这一页要的不是「你同意」，是<strong>你亲手测到</strong>。
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						你会看到的差距
					</div>

					<div style={{ display: 'flex', gap: 14, alignItems: 'stretch', marginBottom: 18 }}>
						{STEPS.map((s, i) => (
							<motion.div
								key={s.side}
								initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.25 + i * 0.15 }}
								style={{
									flex: s.side === 'self' ? 0.8 : 1.2,
									border, boxShadow: shadow, background: colors.white,
									display: 'flex', flexDirection: 'column',
								}}
							>
								<div style={{
									background: s.side === 'self' ? colors.green : colors.red,
									padding: '9px 15px', fontSize: 16.5, fontWeight: 800,
									color: s.side === 'self' ? colors.black : colors.white,
								}}>
									{s.t}
								</div>
								<div style={{ padding: '13px 15px', flex: 1 }}>
									{s.items.map((it, j) => (
										<div key={it} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 8 }}>
											<span style={{ fontFamily: fonts.mono, fontSize: 11.5, color: '#bbb', flex: '0 0 auto', paddingTop: 2 }}>
												{String(j + 1).padStart(2, '0')}
											</span>
											<span style={{ fontSize: 14.5, color: '#444', lineHeight: 1.4 }}>{it}</span>
										</div>
									))}
								</div>
								<div style={{
									padding: '11px 15px', borderTop: '2px solid #eee', textAlign: 'center',
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
									color: s.side === 'self' ? colors.green : colors.red,
								}}>
									{s.side === 'self' ? '十几秒' : '数分钟'}
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.42, delay: 0.7 }}
						style={{ border, boxShadow: shadow, background: '#fff2f2', marginBottom: 16 }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '8px 15px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, letterSpacing: 1.2 }}>
							过关答案不是「派出去也能做」
						</div>
						<div style={{ padding: '13px 16px', fontSize: 16, lineHeight: 1.65, color: '#333' }}>
							而是：它<strong>没有强收益</strong>——
							<span style={{ color: colors.red, fontWeight: 700 }}>噪音量不够</span>、
							<span style={{ color: colors.red, fontWeight: 700 }}>没有并行分支</span>、
							<span style={{ color: colors.red, fontWeight: 700 }}>不需要独立视角</span>。
							三项一项都没命中，第一层门就没过。
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.9 }}
						style={{
							padding: '17px 22px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, textAlign: 'center',
							fontSize: 23, fontWeight: 800, lineHeight: 1.5,
						}}
					>
						能派出去完成，<br />
						<span style={{ color: colors.yellow }}>不代表应该派出去。</span>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
