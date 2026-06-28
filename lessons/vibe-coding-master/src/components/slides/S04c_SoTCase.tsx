import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { motion } from 'framer-motion';

// 互动判断 ②（提问页）—— 用真实场景压力测试 SoT 概念，下一页揭晓
export default function S04c_SoTCase() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ height: '88%' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
					style={{ display: 'inline-block', padding: '7px 18px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 2, marginBottom: 22 }}>
					互动判断 ② · 你来定
				</motion.div>

				<Title size="48px" style={{ textAlign: 'center', lineHeight: 1.16, maxWidth: 1100 }}>
					这算<span style={{ background: colors.yellow, padding: '0 10px' }}>正确的 Source of Truth</span> 吗？
				</Title>

				{/* 场景 */}
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
					style={{ marginTop: 26, maxWidth: 1040, background: '#fff', border, boxShadow: shadow, padding: '18px 26px', fontSize: 20, lineHeight: 1.55, textAlign: 'left' }}>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#999', fontWeight: 800 }}>场景&nbsp;</span>
					公司的 PRD 放在<b>云端 docs</b>（Notion / 飞书 / Confluence）；程序员手上又自己存了一份<b style={{ color: colors.red }}>「给代码用的 PRD」</b>。
				</motion.div>

				{/* 你站哪边 */}
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
					style={{ marginTop: 28, display: 'flex', gap: 22 }}>
					<div style={{ background: '#f0fdf4', border: `3px solid #0a8a3a`, boxShadow: `5px 5px 0 #0a8a3a`, padding: '14px 30px', fontSize: 24, fontWeight: 900, color: '#0a8a3a' }}>✅ 对</div>
					<div style={{ background: '#fff0f0', border: `3px solid ${colors.red}`, boxShadow: `5px 5px 0 ${colors.red}`, padding: '14px 30px', fontSize: 24, fontWeight: 900, color: colors.red }}>❌ 不对</div>
				</motion.div>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
					style={{ marginTop: 26, fontSize: 18, color: '#555', fontFamily: fonts.mono }}>
					// 先举手，别急着看答案 —— 下一页揭晓
				</motion.p>
			</Inner>
		</Slide>
	);
}
