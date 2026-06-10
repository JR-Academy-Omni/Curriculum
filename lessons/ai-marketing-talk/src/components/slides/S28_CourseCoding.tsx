import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const points = ['零基础用 Cursor，从想法到产品上线', '33 个 AI 工具 · 4 个可上线交付物（PPT / PDF / 网站 / 视频）', '基础班 6 周 · 进阶班 8 周', '人人都能学 —— 不需要会写代码'];

export default function S28_CourseCoding() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1320, height: '85%', padding: '34px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 16 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700 }}>路径 A · 缺「做得出」这条腿 → 人人必会 baseline</span>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 26, alignItems: 'center' }}>
					<motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
						<h2 style={{ fontFamily: fonts.heading, fontSize: '44.5px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, marginBottom: 8 }}>
							人人都能学的<br /><span style={{ background: colors.rose, color: colors.white, padding: '0 14px', display: 'inline-block', transform: 'rotate(-1deg)', border, boxShadow: shadow }}>AI Coding 实战课</span>
						</h2>
						<ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0' }}>
							{points.map((p, i) => (
								<motion.li key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.1 }}
									style={{ fontFamily: fonts.body, fontSize: 21, fontWeight: 600, color: colors.black, marginBottom: 12, paddingLeft: 26, position: 'relative' }}>
									<span style={{ position: 'absolute', left: 0, color: colors.rose, fontWeight: 900 }}>✓</span>{p}
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
						style={{ background: colors.dark, color: colors.white, border, boxShadow: `7px 7px 0 ${colors.rose}`, padding: '26px 24px', textAlign: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 15.5, fontWeight: 700, color: colors.yellow, marginBottom: 10 }}>预售价 · AUD</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 42.5, fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>$860<span style={{ fontSize: 21, opacity: 0.7 }}> 起</span></div>
						<div style={{ fontFamily: fonts.body, fontSize: 16.5, opacity: 0.8, marginBottom: 18 }}>基础班 6 周 · 进阶班 $1360</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15.5, opacity: 0.75 }}>承诺：做出 1 个上线产品 + 一套 Cursor 工作流</div>
					</motion.div>
				</div>
			</div>
		</Slide>
	);
}
