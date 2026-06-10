import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const actions = ['📝 回去先写下你的「一份真相」7 样', '🔗 扫码看两门课详情 / 留资', '💬 加社群 · 领今晚的 Master 模板'];

export default function S31_End() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '88%', maxWidth: 1280, textAlign: 'center' }}>
				<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: '57px', fontWeight: 900, color: colors.white, letterSpacing: -1, marginBottom: 14 }}>
					你不缺 P50 内容 ——<br />缺的是<span style={{ color: colors.rose }}>会驾驭 AI、维护真相</span>的那个人
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
					style={{ fontFamily: fonts.body, fontSize: 23.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: 32 }}>
					今晚开始，做那个人。
				</motion.p>

				<div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 30 }}>
					{actions.map((a, i) => (
						<motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '16px 22px', fontFamily: fonts.body, fontSize: 19, fontWeight: 700, color: colors.black, maxWidth: 280 }}>
							{a}
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
					style={{ display: 'inline-block', padding: '18px 40px', background: colors.rose, border, boxShadow: `6px 6px 0 ${colors.yellow}`, textAlign: 'center' }}>
					<div style={{ fontFamily: fonts.heading, fontSize: 25.5, fontWeight: 900, color: colors.white }}>JR Academy · 学 AI 来匠人</div>
					<div style={{ fontFamily: fonts.body, fontSize: 17.5, color: 'rgba(255,255,255,0.9)' }}>Q&A 时间到</div>
				</motion.div>
			</div>
		</Slide>
	);
}
