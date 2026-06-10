import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, assetPath } from '../ui';

const SHOTS = [
	{ img: 'xhs-audit/3.png', cap: '任务一 · 违禁词扫描（9 类逐项过）' },
	{ img: 'xhs-audit/4.png', cap: '任务二 · AI 率检测 → 12–18%' },
	{ img: 'xhs-audit/1.png', cap: '自检 + 配图建议 + 话题' },
	{ img: 'xhs-audit/2.png', cap: '另一切角 · 自检 + 配图建议' },
];

export default function S14b_XhsAudit() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '92%', padding: '14px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 10 }}>
					<span style={{ padding: '5px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>真实截图 · 不是 demo</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '30px', fontWeight: 900, letterSpacing: -1, marginTop: 6 }}>AI 写完自己审两道闸 —— <span style={{ color: colors.rose }}>/xhs-review + /xhs-score 真实输出</span></h2>
				</motion.div>

				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12, minHeight: 0 }}>
					{SHOTS.map((s, i) => (
						<motion.div key={s.img} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: colors.white, background: colors.rose, padding: '4px 10px' }}>{s.cap}</div>
							<div style={{ flex: 1, minHeight: 0, padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<img src={assetPath(s.img)} alt={s.cap} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', border: `1px solid #e5e5e5` }} />
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginTop: 10, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '9px 24px', background: colors.rose, color: colors.white, border, boxShadow: `5px 5px 0 ${colors.dark}`, fontFamily: fonts.heading, fontSize: 19, fontWeight: 900 }}>
						违禁词全过 + AI 率 12–18% → 才发 ｜ 守红线 + 控人味，<span style={{ color: colors.yellow }}>全自动</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
