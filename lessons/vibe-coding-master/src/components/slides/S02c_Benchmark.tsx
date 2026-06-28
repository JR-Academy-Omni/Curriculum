import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight, springIn } from '../ui';
import { motion } from 'framer-motion';

// 标尺：三方 SSO 你能不能 1 小时做完
export default function S02c_Benchmark() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div {...slideFromLeft}>
					<Tag bg={colors.dark}>第 0 章 · 标尺</Tag>
					<Title size="52px" style={{ marginTop: 14 }}>
						你到底会不会？<span style={{ background: colors.yellow, padding: '0 8px' }}>一个标尺</span>
					</Title>
				</motion.div>

				<motion.div {...slideFromRight} style={{ marginTop: 26, background: colors.dark, border, boxShadow: shadow, padding: '28px 30px' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
						<span style={{ background: colors.blue, border: `2px solid ${colors.black}`, padding: '5px 14px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>LinkedIn</span>
						<span style={{ background: colors.red, color: colors.white, border: `2px solid ${colors.black}`, padding: '5px 14px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>Google</span>
						<span style={{ background: colors.yellow, border: `2px solid ${colors.black}`, padding: '5px 14px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>GitHub</span>
					</div>
					<div style={{ fontSize: 30, fontWeight: 900, color: colors.white, lineHeight: 1.35 }}>
						一个同时集成 <span style={{ color: colors.yellow }}>LinkedIn + Google + GitHub</span> 三方 SSO 登录的功能，
						你能不能 <span style={{ color: colors.red }}>1 小时内</span>全做完？
					</div>
				</motion.div>

				<div style={{ display: 'flex', gap: 18, marginTop: 24 }}>
					<motion.div
						{...springIn} transition={{ ...springIn.transition, delay: 0.5 }}
						style={{ flex: 1, background: colors.green, border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>✅ 会 AI coding 的人</div>
						<div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
							<span style={{ fontFamily: fonts.heading, fontSize: 40, fontWeight: 900 }}>⏱ 1 小时</span>
							<span style={{ fontSize: 17, fontWeight: 700 }}>搞定，全做完</span>
						</div>
					</motion.div>
					<motion.div
						{...springIn} transition={{ ...springIn.transition, delay: 0.7 }}
						style={{ flex: 1, background: '#fff', border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: colors.red }}>❌ 只会 AI chat 的人</div>
						<div style={{ fontSize: 17, color: '#444', lineHeight: 1.5 }}>
							光看文档、配 key、调 callback ——
							<b style={{ color: colors.red }}>卡你一整天</b>。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
