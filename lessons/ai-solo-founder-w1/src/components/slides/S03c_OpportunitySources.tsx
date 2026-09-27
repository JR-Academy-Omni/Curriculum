import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const sources = [
	['01', '你熟悉的行业', '你比普通人更容易接触到客户和真实流程', '#FFE6DF'],
	['02', '你反复遇到的问题', '过去三个月，一再让你费时间或花钱', '#FFF2B8'],
	['03', '仍然大量靠人工的工作', '流程已经存在，只是又慢、又碎、容易出错', '#DFF3E7'],
	['04', '已经有人付钱，但体验很差', '需求已经发生，最值得优先看', '#E7E0FF'],
];

export default function S03c_OpportunitySources() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="创业机会从哪里来"
					tagBg={colors.yellow}
					title="不知道做什么？从这四个地方找"
					sub="不是凭空想 Idea，而是观察时间、钱和抱怨已经流向哪里。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
					{sources.map(([n, title, copy, bg], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.08 * index }}
							style={{ border, boxShadow: shadowSm, background: bg, padding: '18px 20px', display: 'grid', gridTemplateColumns: '58px 1fr', gap: 14, alignItems: 'center' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 900, color: colors.red }}>{n}</div>
							<div>
								<div style={{ fontSize: 25, fontWeight: 900 }}>{title}</div>
								<div style={{ marginTop: 6, fontSize: 18, lineHeight: 1.4 }}>{copy}</div>
							</div>
						</motion.div>
					))}
				</div>

				<Punchline>今天先找问题；最后做产品、公司还是服务，后面再决定。</Punchline>
			</Body>
		</Slide>
	);
}
