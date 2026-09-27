import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// ② 同桌互念 —— 来源：W1_RUNSHEET.md §3「15:10–15:20 同桌两人互念」三个问题 + 定规矩
const QUESTIONS = [
	'我能不能复述：谁在什么场景遇到什么问题？',
	'他们现在怎么处理，为什么不够好？',
	'本周的 5 / 3 / 3 / 付费验证动作是否具体？',
];

export default function S17_PeerReview() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="同桌互相检查"
					tagBg={colors.green}
					title="一对一互念，对方只问三个问题"
					sub="一人用自己的话讲，另一人只负责复述和追问。项目细节分享多少由本人决定。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 8 }}>
					{QUESTIONS.map((q, i) => (
						<motion.div
							key={q}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 + i * 0.13 }}
							style={{
								border,
								boxShadow: shadow,
								background: [colors.warmBg, '#EDE9FE', '#D9F2E4'][i],
								padding: '26px 22px',
								minHeight: 250,
								display: 'flex',
								flexDirection: 'column',
								gap: 14,
							}}
						>
							<span
								style={{
									fontFamily: fonts.mono,
									fontSize: 46,
									fontWeight: 700,
									lineHeight: 1,
									color: colors.red,
								}}
							>
								Q{i + 1}
							</span>
							<span style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.4 }}>{q}</span>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.dark}>
					定规矩：不要因为同学喜欢就把假设当事实。想改可以，但必须<b>带着证据</b>更新 Opportunity Card。
					<span style={{ display: 'block', marginTop: 6, fontSize: 18, color: colors.yellow }}>
						换方向不是失败；没有证据却每天换方向，才是。
					</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
