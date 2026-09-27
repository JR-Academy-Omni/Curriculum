import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P14：你自己的判断线 —— 从两次实验的数据里长出来
// SoT：蓝图 v1.0 §6.4「先撞墙，再给尺子」+ §9.9
// ⚠️ 这一页必须在两次实验之后。判断线不是听来的，是学员自己测出来的。
const TENDENCY = [
	{ t: '偏保守', d: '该派的时候不派，非要你推一把', fix: '往「多派一点」校准', c: colors.blue },
	{ t: '过度热情', d: '一点小事也开一堆子 Agent', fix: '往「先自己做」校准', c: colors.orange },
];

function BlankLines({ n, color: c }: { n: number; color: string }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingTop: 4 }}>
			{Array.from({ length: n }, (_, i) => (
				<div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: c, fontWeight: 700, flex: '0 0 auto' }}>
						{i + 1}.
					</span>
					<span style={{ flex: 1, height: 2, background: '#ddd' }} />
				</div>
			))}
		</div>
	);
}

export default function L7P16_YourOwnLine() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
					<Tag bg={colors.red}>两次实验之后</Tag>
					<Tag bg={colors.dark}>带走这一页</Tag>
				</div>
				<Title size="42px" style={{ marginBottom: 6 }}>
					<span style={{ background: colors.yellow, padding: '0 10px' }}>你自己</span>的判断线
				</Title>
				<p style={{ fontSize: 17, color: '#555', fontWeight: 600, marginBottom: 20 }}>
					对着你那两张观察卡写——不是抄我的，是<strong>从你刚才测到的数据里长出来</strong>。
				</p>

				<div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
					<motion.div
						initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.15 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.green, color: colors.black, padding: '10px 16px', fontSize: 17, fontWeight: 800 }}>
							我会派，当：
						</div>
						<div style={{ padding: '16px 18px' }}>
							<BlankLines n={3} color={colors.green} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.45, delay: 0.15 }}
						style={{ flex: 1, border, boxShadow: shadow, background: colors.white }}
					>
						<div style={{ background: colors.red, color: colors.white, padding: '10px 16px', fontSize: 17, fontWeight: 800 }}>
							我不会派，当：
						</div>
						<div style={{ padding: '16px 18px' }}>
							<BlankLines n={3} color={colors.red} />
						</div>
					</motion.div>
				</div>

				<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
					写完再补一条：你手上这个工具偏哪边
				</div>
				<div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
					{TENDENCY.map((t, i) => (
						<motion.div
							key={t.t}
							initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.45 + i * 0.12 }}
							style={{ flex: 1, border, boxShadow: '3px 3px 0 #000', background: colors.white }}
						>
							<div style={{ background: t.c, color: colors.white, padding: '7px 14px', fontSize: 15.5, fontWeight: 800 }}>
								{t.t}
							</div>
							<div style={{ padding: '10px 14px' }}>
								<div style={{ fontSize: 14, color: '#555', lineHeight: 1.5, marginBottom: 7 }}>{t.d}</div>
								<div style={{ fontSize: 13.5, fontWeight: 700, color: t.c, paddingTop: 7, borderTop: '2px solid #f0f0f0' }}>
									→ {t.fix}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.8 }}
					style={{ padding: '16px 22px', background: colors.dark, color: colors.white, border, boxShadow: shadow }}
				>
					<div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.5, marginBottom: 8, textAlign: 'center' }}>
						教的不是「多派」或「少派」，<br />
						是<span style={{ color: colors.yellow }}>掌握判断线，然后往你的工具的反方向校准。</span>
					</div>
					<div style={{ fontSize: 14.5, opacity: 0.85, lineHeight: 1.6, textAlign: 'center', paddingTop: 10, borderTop: '2px solid rgba(255,255,255,0.2)' }}>
						这个教法不会过期：工具换了、模型升级了，判断线还成立——
						你只需要<strong>重新观察一次它的默认倾向</strong>。
					</div>
				</motion.div>
			</Inner>
		</Slide>
	);
}
