import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const files = [
	{ f: 'PERSONAS.md', d: '卖给谁的真相', note: '画像 / 痛点 / 不信什么', bg: colors.rose },
	{ f: 'PROMOTION_PLAN.md', d: '推广方案的真相', note: 'T-30 → D+30 全计划', bg: colors.green },
	{ f: 'STATE.json', d: '业务状态的真相', note: 'KPI / gap / 卡住的事', bg: colors.blue },
] as const;

export default function S20_MasterRealExample() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '90%', maxWidth: 1360, height: '85%', padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 16 }}>
					<span style={{ padding: '6px 16px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, border }}>拍胸脯 · 这是我们自己在跑的</span>
				</motion.div>

				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
					style={{ fontFamily: fonts.heading, fontSize: '49px', fontWeight: 900, color: colors.white, letterSpacing: -1, lineHeight: 1.1, marginBottom: 28 }}>
					我们每门课，就<span style={{ color: colors.rose }}>一份真相</span>
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 26 }}>
					{files.map((file, i) => (
						<motion.div key={file.f} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.14 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '20px 20px' }}>
							<div style={{ display: 'inline-block', fontFamily: fonts.mono, fontSize: 17.5, fontWeight: 700, color: colors.white, background: file.bg, padding: '5px 12px', border: `2px solid ${colors.black}`, marginBottom: 12 }}>{file.f}</div>
							<div style={{ fontFamily: fonts.heading, fontSize: 23.5, fontWeight: 900, color: colors.black, marginBottom: 6 }}>{file.d}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16.5, fontWeight: 600, color: '#666' }}>{file.note}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
					style={{ fontFamily: fonts.body, fontSize: 22.5, fontWeight: 600, color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}>
					所有 AI、所有平台内容，都从这里<b style={{ color: colors.yellow }}>取料</b>。这就是 Step 5 那个终态 —— 整个公司装进 AI 的脑子。
				</motion.p>
			</div>
		</Slide>
	);
}
