import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const STEPS = [
	['90 秒', '念出你的卡', '只说客户、问题、现有做法和本周验证'],
	['2 分钟', '同伴复述', '不看纸，说出他理解的客户、问题和交付'],
	['4 分钟', '追问证据', '哪里仍是猜测？谁能证明或推翻？'],
	['90 秒', '写下修改', '因为同伴指出什么，所以先改哪一步'],
];

export default function S09_WeeklySessionRhythm() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="FOUNDER EXCHANGE · 30 MIN" tagBg={colors.yellow} title="这 30 分钟，老师不讲——你们讲" sub="三人一组。分享自己的产品、服务或现有生意，不要求做 AI 产品。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{STEPS.map(([time, title, body], index) => <motion.div key={time} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ border, boxShadow: shadow, background: [colors.warmBg, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '22px 18px', minHeight: 245 }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900 }}>{time}</div><div style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 26, lineHeight: 1.2, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 13, fontSize: 17, lineHeight: 1.5 }}>{body}</div></motion.div>)}
				</div>
				<Punchline bg={colors.dark}>不要夸点子，也不要替别人重写。只帮他找到<span style={{ color: colors.yellow }}>最薄的一条假设和最小的下一步。</span></Punchline>
			</Body>
		</Slide>
	);
}
