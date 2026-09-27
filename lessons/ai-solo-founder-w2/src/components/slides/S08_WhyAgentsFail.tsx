import { motion } from 'framer-motion';
import { Slide, Inner, colors, fonts, border, shadow, shadowSm } from '../ui';

const EXCUSES = ['模型不够聪明', '上下文窗口太小', '工具生态不行', '再等下一代模型'];

export default function S08_WhyAgentsFail() {
	return (
		<Slide bg={colors.dark}>
			<Inner center style={{ gap: 26 }}>
				<div style={{ display: 'inline-block', padding: '7px 18px', background: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 800, letterSpacing: 3 }}>③ 写工作说明书 · 25 MIN</div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ fontFamily: fonts.heading, fontSize: 'clamp(42px, 4.1vw, 64px)', fontWeight: 950, lineHeight: 1.15, textAlign: 'center', color: colors.white }}
				>
					大多数人的 agent 用不起来，<br />
					<span style={{ background: colors.red, color: colors.white, padding: '0 18px' }}>不是模型不行</span>
				</motion.h2>
				<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
					{EXCUSES.map((e, i) => (
						<motion.div
							key={e}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 0.42, scale: 1 }}
							transition={{ delay: 0.3 + i * 0.08 }}
							style={{ border: `3px solid ${colors.white}`, color: colors.white, padding: '9px 18px', fontSize: 19, fontWeight: 700, textDecoration: 'line-through' }}
						>
							{e}
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0, y: 22 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7 }}
					style={{ border, boxShadow: shadow, background: colors.yellow, padding: '24px 34px', fontFamily: fonts.heading, fontSize: 'clamp(30px, 2.8vw, 42px)', fontWeight: 950, lineHeight: 1.3, textAlign: 'center' }}
				>
					是没人告诉它，什么叫做完。
				</motion.div>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} style={{ display: 'flex', gap: 16 }}>
					{[
						['你以为你说了', '「帮我盯一下竞品」'],
						['它实际收到的', '一个没有范围、没有格式、没有交付时间的请求'],
					].map(([k, v]) => (
						<div key={k} style={{ border, boxShadow: shadowSm, background: colors.white, padding: '15px 20px', width: 430, textAlign: 'left' }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, color: colors.red }}>{k}</div>
							<div style={{ marginTop: 8, fontSize: 19, fontWeight: 700, lineHeight: 1.45 }}>{v}</div>
						</div>
					))}
				</motion.div>
			</Inner>
		</Slide>
	);
}
