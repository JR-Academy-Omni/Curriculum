import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, Punchline, SlideHead } from '../DeckTable';

const CHECKS = [
	['1', '客户够不够具体？', '能不能说出去哪里找到 5 位真实的人？'],
	['2', '问题和现在的做法清楚吗？', '有没有写出发生在什么场景、目前怎么处理？'],
	['3', '现有方案的缺口清楚吗？', '太贵、太慢、太复杂、数据分散，还是依赖大量人工？'],
	['4', '本周验证动作够具体吗？', '5 位用户、3 个案例、3 个竞品和付费意愿怎样完成？'],
];

const FLOW = [
	['念', '本人只念机会卡，不补背景'],
	['找', '全班一起找最含糊的一句话'],
	['改', '只改这一处，再重新念一遍'],
];

export default function S18_InstructorReview() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '34px 54px 28px' }}>
				<SlideHead
					tag="现场拆解"
					tagBg={colors.red}
					title="看 3 份同学的 Opportunity Card，你同步改自己的"
					titleSize="clamp(30px, 2.7vw, 42px)"
					sub="每份只改一个最影响下一步的问题。没被选中也不要旁观：同样四问，对照自己的内容一起改。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.65fr 0.85fr', gap: 18 }}>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 13 }}>
						{CHECKS.map(([no, title, body], index) => (
							<motion.div
								key={no}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.32, delay: 0.1 + index * 0.09 }}
								style={{ border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '16px 18px', minHeight: 142 }}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.red }}>Q{no}</div>
								<div style={{ marginTop: 7, fontFamily: fonts.heading, fontSize: 21, fontWeight: 900 }}>{title}</div>
								<div style={{ marginTop: 7, fontSize: 16, lineHeight: 1.45, fontWeight: 550 }}>{body}</div>
							</motion.div>
						))}
					</div>

					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontSize: 15, fontWeight: 800 }}>每份只走三步</div>
						{FLOW.map(([verb, body], index) => (
							<motion.div key={verb} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + index * 0.12 }} style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '48px 1fr', gap: 12, alignItems: 'center' }}>
								<div style={{ width: 44, height: 44, border: '2px solid #fff', background: index === 2 ? colors.red : colors.yellow, color: index === 2 ? colors.white : colors.black, display: 'grid', placeItems: 'center', fontSize: 21, fontWeight: 900 }}>{verb}</div>
								<div style={{ fontSize: 17, lineHeight: 1.4, fontWeight: 700 }}>{body}</div>
							</motion.div>
						))}
					</div>
				</div>

				<Punchline bg={colors.red}>
					目标不是把一页写得“专业”，而是让下一步更明确。<u>改完后，同学应该比刚才更容易复述。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
