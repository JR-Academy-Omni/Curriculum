import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const FORMS = [
	{ icon: '📦', title: '卖产品', examples: '软件、实体商品、工具、订阅', buy: '客户购买一个可以重复使用的东西', bg: '#FFE9E4' },
	{ icon: '🤝', title: '卖服务', examples: '咨询、中介、培训、代运营、专业服务', buy: '客户购买结果、经验和交付', bg: '#FFF6D6' },
	{ icon: '🏪', title: '改造现有生意', examples: '装修、餐饮、会计、教育、物业、电商', buy: 'AI 可以留在内部，客户不必购买 AI', bg: '#D9F2E4' },
];

export default function S02a_BusinessForms() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="先把范围说清楚" tagBg={colors.yellow} title="创业营不等于做一个 AI 产品" sub="你可以创建产品、提供服务，也可以把已经在经营的生意做得更好。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
					{FORMS.map((item, index) => (
						<motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ border, boxShadow: shadow, background: item.bg, padding: '24px 22px', minHeight: 270 }}>
							<div style={{ fontSize: 42 }}>{item.icon}</div>
							<div style={{ marginTop: 12, fontFamily: fonts.heading, fontSize: 31, fontWeight: 900 }}>{item.title}</div>
							<div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.45, fontWeight: 700 }}>{item.examples}</div>
							<div style={{ marginTop: 16, borderTop: '2px solid #111', paddingTop: 12, fontSize: 17, lineHeight: 1.45 }}>{item.buy}</div>
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>共同起点只有一个：<span style={{ color: colors.yellow }}>找到真实问题，提供有人愿意交换时间或金钱的价值。</span></Punchline>
			</Body>
		</Slide>
	);
}
