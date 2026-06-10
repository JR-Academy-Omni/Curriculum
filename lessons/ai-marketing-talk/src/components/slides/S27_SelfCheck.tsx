import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const rows = [
	{ l: 'L1', you: '还在 ChatGPT 复制粘贴', next: '先把你的「一份真相」写出来' },
	{ l: 'L2', you: '有几个固定模板', next: '学搭流水线，让它自动跑' },
	{ l: 'L3', you: '想多平台但每个手改', next: '一份 Master → 自动 fan-out' },
	{ l: 'L4', you: '想要数据闭环但接不动', next: 'AI Coding：把 pipeline 接起来' },
	{ l: 'L5', you: '想把整个生意交给 AI', next: '一人创业营：装进 AI 的脑子' },
] as const;

export default function S27_SelfCheck() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '92%', maxWidth: 1400, height: '86%', padding: '30px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.rose, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>SELF CHECK · 现在轮到你</span>
				</motion.div>
				<motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}
					style={{ fontFamily: fonts.heading, fontSize: '44.5px', fontWeight: 900, letterSpacing: -1, marginBottom: 20 }}>
					你卡在哪一层？<span style={{ color: colors.rose }}>卡在哪，就知道学什么</span>
				</motion.h2>

				<div style={{ display: 'grid', gridTemplateColumns: '70px 1fr 1.2fr', border, boxShadow: shadow, background: colors.white }}>
					<div style={{ background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, padding: '10px', textAlign: 'center' }}>层</div>
					<div style={{ background: colors.dark, color: colors.white, fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, padding: '10px 16px' }}>你是不是这样</div>
					<div style={{ background: colors.rose, color: colors.white, fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, padding: '10px 16px' }}>下一步</div>
					{rows.map((r, i) => (
						<motion.div key={r.l} style={{ display: 'contents' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 + i * 0.1 }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 23.5, fontWeight: 900, color: colors.rose, padding: '12px', textAlign: 'center', borderTop: `2px solid ${colors.black}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.l}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 600, color: '#444', padding: '12px 16px', borderTop: `2px solid ${colors.black}`, borderLeft: `2px solid #eee` }}>{r.you}</div>
							<div style={{ fontFamily: fonts.body, fontSize: 19, fontWeight: 800, color: colors.black, padding: '12px 16px', borderTop: `2px solid ${colors.black}`, borderLeft: `2px solid ${colors.rose}`, background: '#fff5f8' }}>{r.next}</div>
						</motion.div>
					))}
				</div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
					style={{ marginTop: 18, fontFamily: fonts.body, fontSize: 19, fontWeight: 700, color: colors.dark, textAlign: 'center' }}>
					两条岔路：缺「做得出」能力 → <b style={{ color: colors.rose }}>AI Coding 课</b> ｜ 想自己开公司 → <b style={{ color: colors.rose }}>一人创业营</b>
				</motion.p>
			</div>
		</Slide>
	);
}
