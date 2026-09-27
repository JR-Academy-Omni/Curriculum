import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const LADDER = [
	['我觉得', '最轻', '#f2f2f2'],
	['用户说喜欢', '', '#FFE9E4'],
	['用户描述最近一次行为', '', '#FFF6D6'],
	['已经投入过时间 / 人工 / 预算', '', '#DCEBFF'],
	['真实承诺或付款', '最重', '#D9F2E4'],
];

export default function S21_OutputIsNotEvidence() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="⑥ 这周最容易搞混的一件事"
					tagBg={colors.red}
					title="agent 产出了 40 页调研，这 40 页仍然是「我觉得」"
					sub="上周那把证据梯度这周继续用。agent 的产出进不了梯度，它只是把资料整理好了。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, alignItems: 'end' }}>
					{LADDER.map(([label, note, bg], index) => (
						<motion.div
							key={label}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.12 + index * 0.09 }}
							style={{ border, boxShadow: shadowSm, background: bg, padding: '15px 14px', minHeight: 96 + index * 34, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
						>
							{note ? <div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.red, marginBottom: 6 }}>{note}</div> : null}
							<div style={{ fontSize: 18.5, lineHeight: 1.35, fontWeight: 800 }}>{label}</div>
						</motion.div>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.65 }}
					style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
				>
					<div style={{ border, boxShadow: shadow, background: colors.white, padding: '15px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.red }}>agent 能做到的</div>
						<div style={{ marginTop: 8, fontSize: 19, lineHeight: 1.45, fontWeight: 700 }}>把散落在各处的抱怨、竞品页面和讨论收集齐、聚成类、附上原文链接</div>
					</div>
					<div style={{ border, boxShadow: shadow, background: colors.dark, color: colors.white, padding: '15px 18px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900, color: colors.yellow }}>只有你能做到的</div>
						<div style={{ marginTop: 8, fontSize: 19, lineHeight: 1.45, fontWeight: 700 }}>去问那五个真人：上个月真的发生过吗，上次你怎么处理的，为这件事花过钱吗</div>
					</div>
				</motion.div>
				<Punchline bg={colors.red}>
					没有出处的痛点一律划掉。<u>每一条都要能点回原始帖子。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
