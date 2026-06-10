import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, assetPath } from '../ui';

const points = ['把刚才那条 5 级阶梯，搭成你自己的生意发动机', '拿澳洲 Grant 补助 + 本地会计落地', '墨 / 悉 / 布三城线下 networking', '给已有积累、想自己干的那批人'];

// 插播广告位 · CH2 阶梯讲完热度最高的时候，先把 OPC 的钩子下了
export default function S16b_AdOPC() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 18 }}>
					<span style={{ padding: '6px 16px', background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>📢 插播一条广告 · 30 秒 · 讲完继续</span>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 30, alignItems: 'center' }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
						<h2 style={{ fontFamily: fonts.heading, fontSize: '47px', fontWeight: 900, color: colors.black, letterSpacing: -1, lineHeight: 1.12, marginBottom: 10 }}>
							Step 5 那个终态，<br />有一条<span style={{ background: colors.rose, color: colors.white, padding: '0 14px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: `4px 4px 0 ${colors.yellow}` }}>带着走的路</span>
						</h2>
						<div style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 700, color: colors.rose, marginBottom: 16 }}>AI 一人创业营 — 一个人 + 有记忆的 AI 系统 = 自己的公司</div>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
							{points.map((p, i) => (
								<motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1 }}
									style={{ fontFamily: fonts.body, fontSize: 20.5, fontWeight: 600, color: colors.black, marginBottom: 11, paddingLeft: 26, position: 'relative' }}>
									<span style={{ position: 'absolute', left: 0, color: colors.rose, fontWeight: 900 }}>✓</span>{p}
								</motion.li>
							))}
						</ul>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
							style={{ marginTop: 18, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: '#888' }}>
							jiangren.com.au/program-course/ai-solo-founder-bootcamp
						</motion.div>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
						style={{ background: colors.white, border, boxShadow: `7px 7px 0 ${colors.rose}`, padding: '24px 22px', textAlign: 'center' }}>
						<img src={assetPath('qr/opc.png')} alt="AI 一人创业营详情页二维码" style={{ width: 250, height: 250, border: `1px solid #e5e5e5` }} />
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, color: colors.black, marginTop: 12 }}>扫码看详情 · 现在就能留资</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15, color: '#666', marginTop: 6 }}>只讲能力与机会，不承诺收入</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
