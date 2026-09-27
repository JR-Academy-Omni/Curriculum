import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const SEGMENTS = [
	['10 min', '1–2 人上台', '讲这周真实进展：SoT 改了什么、拿到什么证据、卡在哪', colors.warmBg],
	['8 min', '围绕 ta 提问', '不评价点子，只问证据和下一步；能帮上忙的当场说能帮什么', '#FFF6D6'],
	['12 min', '组队 + 写契约', '按下一页的方式亮牌，3–4 人成组，当场写完组内契约', '#D9F2E4'],
];

export default function S11_FounderExchange() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="FOUNDER EXCHANGE · 30 MIN"
					tagBg={colors.yellow}
					title="这 30 分钟老师不讲——你们讲"
					sub="每次课中段都有这一段。今天是第一次带着真实进展来，也是第一次组队。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{SEGMENTS.map(([time, title, body, bg], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.12 + index * 0.1 }}
							style={{ border, boxShadow: shadow, background: bg, padding: '22px 20px', minHeight: 240 }}
						>
							<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, fontSize: 17 }}>{time}</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 27, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 13, fontSize: 17.5, lineHeight: 1.55 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 16, border, boxShadow: shadow, background: '#FFE9E4', padding: '15px 20px', fontSize: 19, fontWeight: 700, lineHeight: 1.5 }}>
					上台的人讲三句就够：<b>我在做什么 · 这周拿到的最硬的一条证据 · 我现在最卡的一件事。</b>没有证据也照说，说清为什么没拿到比编一个强。
				</div>
				<Punchline bg={colors.dark}>
					不要夸点子，也不要替别人重写。<span style={{ color: colors.yellow }}>只帮他找到最薄的一条假设和最小的下一步。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
