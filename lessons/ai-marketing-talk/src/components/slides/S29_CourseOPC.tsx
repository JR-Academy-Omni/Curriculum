import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const points = ['OPC 一人公司主轴：把会 AI 转成自己的生意', '拿澳洲 Grant 补助 + 本地会计落地', '墨 / 悉 / 布三城线下 networking', '给已有积累、想自己干的那批人'];

export default function S29_CourseOPC() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 16 }}>
					<span style={{ padding: '6px 16px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>路径 B · 想要 Step 5 终态 / 自己开公司</span>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 26, alignItems: 'center' }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
						<h2 style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, color: colors.white, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
							AI <span style={{ background: colors.rose, color: colors.white, padding: '0 14px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>一人创业营</span>
						</h2>
						<ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0' }}>
							{points.map((p, i) => (
								<motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1 }}
									style={{ fontFamily: fonts.body, fontSize: 21, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 12, paddingLeft: 26, position: 'relative' }}>
									<span style={{ position: 'absolute', left: 0, color: colors.yellow, fontWeight: 900 }}>✓</span>{p}
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
						style={{ background: colors.white, color: colors.black, border, boxShadow: `7px 7px 0 ${colors.rose}`, padding: '26px 24px', textAlign: 'center' }}>
						<motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: [1, 1.05, 1], opacity: 1 }} transition={{ delay: 0.6, duration: 1.6, repeat: Infinity, repeatDelay: 0.4 }}
							style={{ display: 'inline-block', background: colors.rose, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.black}`, padding: '8px 18px', fontFamily: fonts.heading, fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
							🔥 仅剩 4 个名额
						</motion.div>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: colors.rose, marginBottom: 10 }}>首期席位 · 限量 · AUD</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 42.5, fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>$2,400<span style={{ fontSize: 21, color: '#999' }}> 预售</span></div>
						<div style={{ fontFamily: fonts.body, fontSize: 16.5, color: '#666', marginBottom: 18 }}>首期早鸟 $2,800 · 第二期 $3,800</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15.5, color: '#666' }}>只讲能力与机会，不承诺收入</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
