import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Hook {
	quote: string;
	highlight: string;
	trail: string;
	likes: string;
	bg: string;
	rotate: number;
	tagColor: string;
}

const hooks: Hook[] = [
	{
		quote: '会用 AI，和能做出 AI 应用',
		highlight: '差了整整 10 个 Phase',
		trail: '',
		likes: '❤️ 2.3k',
		bg: colors.yellow,
		rotate: -3,
		tagColor: colors.red,
	},
	{
		quote: '2026 薪资最猛的工程师岗',
		highlight: '不是写 CRUD 的',
		trail: '而是做 AI System 的',
		likes: '❤️ 4.1k',
		bg: colors.white,
		rotate: 2,
		tagColor: colors.indigo,
	},
	{
		quote: 'Prompt 谁都会写，但没人告诉你',
		highlight: 'Context Engineering',
		trail: '才是真正的工程化起点',
		likes: '❤️ 1.8k',
		bg: colors.teal,
		rotate: -2,
		tagColor: colors.dark,
	},
	{
		quote: '你不是不会学 AI',
		highlight: '你是缺一份完整的能力地图',
		trail: '',
		likes: '❤️ 3.5k',
		bg: colors.red,
		rotate: 3,
		tagColor: colors.yellow,
	},
];

export default function S02_XhsHook() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '90%', maxWidth: 1400, height: '85%', padding: '30px 40px', display: 'flex', flexDirection: 'column' }}>
				{/* 顶部小标 */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}
				>
					<span style={{ width: 36, height: 36, background: colors.red, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 20, transform: 'rotate(-3deg)' }}>小</span>
					<span style={{ fontFamily: fonts.heading, fontSize: '26px', fontWeight: 800, color: colors.black }}>
						你可能在小红书刷到过我们 <span style={{ color: colors.red }}>👇</span>
					</span>
				</motion.div>

				{/* 4 张金句卡片 */}
				<div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, alignItems: 'center' }}>
					{hooks.map((h, i) => {
						const textColor = h.bg === colors.red || h.bg === colors.dark ? colors.white : colors.black;
						const tagTextColor = h.tagColor === colors.yellow ? colors.black : colors.white;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: h.rotate }}
								transition={{ delay: 0.15 + i * 0.1, duration: 0.45, ease: 'easeOut' }}
								style={{
									background: h.bg,
									border,
									boxShadow: shadow,
									padding: '18px 16px',
									height: '100%',
									minHeight: 320,
									display: 'flex',
									flexDirection: 'column',
									color: textColor,
								}}
							>
								{/* 顶部 @ pill + 点赞 */}
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
									<span style={{ padding: '3px 10px', background: h.tagColor, color: tagTextColor, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, border: `2px solid ${colors.black}` }}>
										@匠人学院
									</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: textColor, opacity: 0.8 }}>
										{h.likes}
									</span>
								</div>

								{/* 金句 */}
								<div style={{ fontFamily: fonts.heading, fontSize: '18px', fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
									{h.quote}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: '24px', fontWeight: 900, lineHeight: 1.2, letterSpacing: -0.5, background: textColor === colors.white ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.55)', padding: '6px 10px', display: 'inline-block', alignSelf: 'flex-start' }}>
									{h.highlight}
								</div>
								{h.trail && (
									<div style={{ fontFamily: fonts.heading, fontSize: '16px', fontWeight: 700, marginTop: 10, opacity: 0.85, lineHeight: 1.4 }}>
										{h.trail}
									</div>
								)}

								{/* 底部 # 标签 */}
								<div style={{ marginTop: 'auto', paddingTop: 16, fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, opacity: 0.7 }}>
									#AIEngineer #转行AI #小红书
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* 底部脚注 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					style={{ marginTop: 22, textAlign: 'center' }}
				>
					<span style={{ display: 'inline-block', padding: '10px 22px', background: colors.dark, color: colors.white, fontFamily: fonts.heading, fontSize: '20px', fontWeight: 800, border, boxShadow: `5px 5px 0 ${colors.red}` }}>
						这场公开课，把 4 条小红书的坑 · <span style={{ color: colors.yellow }}>一次说透</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
