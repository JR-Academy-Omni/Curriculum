import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, Punchline, SlideHead } from '../DeckTable';

const ANSWERS = [
	['Q1', 'A · 要更新', '真实访谈缩小了客户范围。这会改变访谈对象、报价、网站和获客任务。'],
	['Q2', 'B · 不要更新', '文案只是一次任务的输出。客户、问题、交付和边界都没变。'],
	['Q3', 'B · 记为待验证想法', '创始人的灵感不是证据。先放进待验证清单，不要直接改当前方向。'],
	['Q4', 'B · 更新初步方案', '客户给出了明确限制。把“必须由员工检查后发送”写进方案的人机分工。'],
];

export default function S11e_SoTQuizAnswers() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '34px 58px 28px' }}>
				<SlideHead
					tag="现场测试 · 答案"
					tagBg={colors.green}
					title="改不改 SoT，不看声音大小，只看证据"
					titleSize="clamp(32px, 2.85vw, 44px)"
					sub="产出变了，不一定改 SoT；影响经营方向或边界的新证据出现了，才需要更新。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15 }}>
					{ANSWERS.map(([q, answer, why], index) => (
						<motion.div
							key={q}
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.1 + index * 0.12 }}
							style={{ border, boxShadow: shadowSm, background: colors.white, padding: '18px 20px', minHeight: 162 }}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 900, background: colors.dark, color: colors.yellow, padding: '4px 8px' }}>{q}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900 }}>{answer}</span>
							</div>
							<div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.5, fontWeight: 550 }}>{why}</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					SoT 不是“永远不变”，也不是“想到什么就改什么”。<span style={{ background: colors.red, padding: '0 8px' }}>它是有证据才更新的当前版本。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
