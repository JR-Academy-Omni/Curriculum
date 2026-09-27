import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow } from '../ui';

const ITEMS = [
	['接好权限的 agent', '主线只装一条，五类权限按边界给完，敏感目录已排除', '#FFE9E4'],
	['一份 agent JD', '五段写全，存进了 memory，它能自己判断什么叫做完', '#FFF6D6'],
	['5 条 Agent Schedule', '每条有 cron 表达式，至少一条手动跑过并留下输出截图', '#D9F2E4'],
];

export default function S25_Checkout() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner center style={{ gap: 28 }}>
				<div style={{ display: 'inline-block', padding: '7px 18px', background: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 3 }}>WEEK 2 · CHECKOUT</div>
				<h2 style={{ fontFamily: fonts.heading, fontSize: 'clamp(42px, 4vw, 62px)', fontWeight: 950, lineHeight: 1.1, textAlign: 'center' }}>走出这个门之前，检查这三件</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, width: '100%' }}>
					{ITEMS.map(([title, body, bg], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.12 }}
							style={{ border, boxShadow: shadow, background: bg, padding: '25px 22px', minHeight: 220, textAlign: 'left' }}
						>
							<div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 29, fontWeight: 900 }}>0{index + 1}</div>
							<div style={{ marginTop: 13, fontSize: 26, fontWeight: 950, lineHeight: 1.25 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 18, lineHeight: 1.5 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '17px 28px', fontSize: 22, fontWeight: 850, textAlign: 'center', lineHeight: 1.5 }}>
					主线没变：<span style={{ color: colors.yellow }}>SoT → Skill 与 Agent → 执行 → 人工检查 → 新证据 → 更新 SoT。</span><br />
					<span style={{ fontSize: 19, fontWeight: 700 }}>这周只是让第二步不再需要你坐在电脑前。</span>
				</div>
			</Inner>
		</Slide>
	);
}
