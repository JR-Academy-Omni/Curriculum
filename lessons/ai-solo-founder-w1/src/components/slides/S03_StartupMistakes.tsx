import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const mistakes = [
	['01', '先想产品，再找用户'],
	['02', '觉得用了 AI 就叫创新'],
	['03', '一开始就想做平台'],
	['04', '把用户群体定义得太大'],
	['05', '把自己的兴趣当成市场需求'],
	['06', '没访谈用户就开始写代码'],
	['07', '认为上线后自然会有人使用'],
];

export default function S03_StartupMistakes() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="先把起点纠正"
					tagBg={colors.red}
					title="创业最常见的错误：先做东西，再找问题"
					sub="执行得越快，不代表方向越对。第一周先停下产品冲动，确认问题是否值得解决。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
					{mistakes.map(([n, text], index) => (
						<motion.div
							key={text}
							initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.06 * index }}
							style={{ border, boxShadow: shadowSm, background: index === 6 ? colors.yellow : colors.white, padding: '12px 16px', display: 'flex', gap: 14, alignItems: 'center', gridColumn: index === 6 ? '1 / -1' : undefined }}
						>
							<span style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.red, fontWeight: 800 }}>{n}</span>
							<span style={{ fontSize: 21, fontWeight: 850 }}>{text}</span>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					Idea 不是创业起点。<span style={{ background: colors.red, padding: '0 8px' }}>Problem 才是。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
