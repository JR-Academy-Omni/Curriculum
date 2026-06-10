import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const gives = ['换脑：新时代营销到底新在哪', '自检：你卡在 5 个段位的哪一层', '看落差：同一句话跑 5 个段位', '拿走：下一步该学什么'];
const nots = ['不教你月入多少', '不是「副业」幻想', '不承诺包接单 / 包就业'];

export default function S07_Promise() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1340, height: '85%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '53px', fontWeight: 900, color: colors.white, letterSpacing: -1, marginBottom: 32 }}>
					今晚你会拿到 <span style={{ color: colors.rose }}>4 样</span>，和我<span style={{ color: colors.yellow }}>不会</span>说的 3 件事
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 28 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						{gives.map((g, i) => (
							<motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
								style={{ display: 'flex', alignItems: 'center', gap: 14, background: colors.white, border, boxShadow: shadow, padding: '14px 18px' }}>
								<span style={{ fontFamily: fonts.heading, fontSize: 27.5, fontWeight: 900, color: colors.rose, width: 40 }}>0{i + 1}</span>
								<span style={{ fontFamily: fonts.body, fontSize: 21, fontWeight: 700, color: colors.black }}>{g}</span>
							</motion.div>
						))}
					</div>

					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
						style={{ background: colors.rose, border, boxShadow: `6px 6px 0 ${colors.yellow}`, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, color: colors.white, marginBottom: 16 }}>🚫 红线 · 我不会说</div>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
							{nots.map((n, i) => (
								<li key={i} style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 600, color: colors.white, marginBottom: 12, paddingLeft: 22, position: 'relative' }}>
									<span style={{ position: 'absolute', left: 0 }}>✕</span>{n}
								</li>
							))}
						</ul>
						<div style={{ marginTop: 14, paddingTop: 14, borderTop: `2px solid rgba(255,255,255,0.3)`, fontFamily: fonts.body, fontSize: 17.5, fontWeight: 700, color: colors.white }}>
							只讲：能力 · 作品 · 能自己跑的 pipeline
						</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
