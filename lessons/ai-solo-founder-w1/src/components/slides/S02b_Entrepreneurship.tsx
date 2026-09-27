import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const LOOP = [
	['01', '看见问题', '具体的人，在具体场景里遇到具体麻烦'],
	['02', '提出交换', '你承诺一个结果，对方投入时间、数据或金钱'],
	['03', '完成交付', '用最小成本让客户真正体验到结果'],
	['04', '根据证据改进', '看行为、复购、推荐和付款，不靠自我感觉'],
];

export default function S02b_Entrepreneurship() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="创业的最短定义" tagBg={colors.red} title="创业，是反复完成一次价值交换" sub="公司注册、融资和 AI 都不是起点。起点是：你能不能为一群人解决一个真实问题。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{LOOP.map(([no, title, body], index) => (
						<motion.div key={no} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} style={{ position: 'relative', border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '20px 17px', minHeight: 245 }}>
							<div style={{ fontFamily: fonts.mono, fontSize: 22, fontWeight: 900, color: colors.red }}>{no}</div>
							<div style={{ marginTop: 18, fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.5 }}>{body}</div>
							{index < 3 ? <div style={{ position: 'absolute', right: -18, top: 105, zIndex: 2, border, background: colors.yellow, width: 32, height: 32, display: 'grid', placeItems: 'center', fontWeight: 900 }}>→</div> : null}
						</motion.div>
					))}
				</div>
				<Punchline>W1 不证明你的生意已经成立；W1 先让这套循环有一个清楚、可执行的起点。</Punchline>
			</Body>
		</Slide>
	);
}
