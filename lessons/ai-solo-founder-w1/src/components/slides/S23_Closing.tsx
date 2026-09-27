import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

const ITEMS = [
	['理解创业', '从真实问题与价值交换出发，不把 AI 或产品形式当起点', '#FFE9E4'],
	['建立 SoT', '一个当前版本写清方向、证据状态、边界和下一步', '#FFF6D6'],
	['跑通 AI OS', '固定工作空间读取 SoT，调用 Skill，完成并人工检查任务', '#D9F2E4'],
];

export default function S23_Closing() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 28 }}>
				<div style={{ display: 'inline-block', padding: '7px 18px', background: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 3 }}>WEEK 1 · CHECKOUT</div>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(42px, 4vw, 62px)', fontWeight: 950, lineHeight: 1.1, textAlign: 'center' }}>走出这个门之前，检查这三件</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, width: '100%' }}>
					{ITEMS.map(([title, body, bg], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }} style={{ border, boxShadow: shadow, background: bg, padding: '25px 22px', minHeight: 220, textAlign: 'left' }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 29, fontWeight: 900 }}>0{index + 1}</div><div style={{ marginTop: 13, fontSize: 28, fontWeight: 950 }}>{title}</div><div style={{ marginTop: 12, fontSize: 18, lineHeight: 1.5 }}>{body}</div></motion.div>)}
				</div>
				<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '17px 28px', fontSize: 22, fontWeight: 850 }}>以后所有课程都使用同一条主线：<span style={{ color: colors.yellow }}>SoT → Skill → 执行 → 人工检查 → 新证据 → 更新 SoT。</span></div>
			</Inner>
		</Slide>
	);
}
