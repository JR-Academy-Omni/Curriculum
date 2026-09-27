import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const SEG = [
	['①', '触发', '到点自己跑，还是有事件才跑', '#FFE9E4'],
	['②', '输入源', '这一次它去读哪几个具体的地方', '#FFF6D6'],
	['③', '处理', '按 JD 做完这份活，不多做也不少做', '#DCEBFF'],
	['④', '交付物', '格式、长度、必含字段都写死', '#EDE9FE'],
	['⑤', '送到哪', '一个落点，不要发三个地方', '#D9F2E4'],
];

export default function S12_ScheduleAnatomy() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="④ AGENT SCHEDULE · 工作坊 35 MIN"
					tagBg={colors.blue}
					title="一条排程只有五段，五个案例都是这五段"
					sub="接下来五个案例，每一个都照这五段拆一遍。拆完你自己那条也照着填。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{SEG.map(([no, title, body, bg], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.09 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: bg, padding: '20px 16px', minHeight: 244 }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 34, fontWeight: 900, color: colors.red }}>{no}</div>
							<div style={{ marginTop: 12, fontFamily: fonts.heading, fontSize: 27, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.5 }}>{body}</div>
							{index < SEG.length - 1 ? (
								<div style={{ position: 'absolute', right: -18, top: 104, zIndex: 3, width: 32, height: 32, display: 'grid', placeItems: 'center', border, background: colors.yellow, fontFamily: fonts.mono, fontSize: 21, fontWeight: 900 }}>→</div>
							) : null}
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.dark}>
					五段里最常被跳过的是 ④。<span style={{ color: colors.yellow }}>交付物没写死，跑出来的东西你自己都不想看第二眼。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
