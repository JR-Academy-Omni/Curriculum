import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const TESTS = [
	['客户够不够具体？', '不是“中小企业”，而是能列出 5 个访谈对象的人群。'],
	['问题里有没有偷塞答案？', '先写客户在什么情况下遇到什么麻烦，不要一上来就写你的产品功能。'],
	['现有做法为什么不够好？', '写太贵、太慢、太复杂、数据分散或依赖人工，不要只说“不智能”。'],
	['本周怎么验证？', '访谈 5 人、收集 3 个案例、比较 3 个竞品，并直接问付费意愿。'],
];

export default function S14_CaseDebrief() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="Opportunity Card · 迁移到你自己"
					tagBg={colors.green}
					title="现在不用抄案例，只拿四把尺子检查自己的方向"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="案例 A 卖少返工；案例 B 卖少追问、少漏单。行业不同，但可验证的机会卡结构相同。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
					{TESTS.map(([head, body], index) => (
						<motion.div
							key={head}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
							style={{ border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#DCEBFF', '#D9F2E4'][index], padding: '20px 22px', minHeight: 150 }}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: colors.red }}>0{index + 1}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 900 }}>{head}</span>
							</div>
							<div style={{ marginTop: 9, fontSize: 18, lineHeight: 1.5 }}>{body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 18, border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '18px 22px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 15, color: colors.yellow, fontWeight: 700 }}>轮到你 · 先别打开模板</div>
					<div style={{ marginTop: 7, fontSize: 23, fontWeight: 800, lineHeight: 1.45 }}>
						用一句话回答：<u>你想服务谁</u>，他现在遇到什么麻烦，又在用什么办法处理？
					</div>
				</div>
			</Body>
		</Slide>
	);
}
