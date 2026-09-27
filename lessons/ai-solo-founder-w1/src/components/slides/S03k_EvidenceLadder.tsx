import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const EVIDENCE = [
	['1', '我觉得', '只有创始人的判断', '#F3F0EA'],
	['2', '用户说喜欢', '礼貌回答，不代表会行动', '#FFE9E4'],
	['3', '描述最近一次行为', '能说出时间、过程和困难', '#FFF6D6'],
	['4', '已经投入成本', '花过时间、人工或预算', '#DCEBFF'],
	['5', '作出真实承诺', '提供样本、参加试点、订金或付款', '#D9F2E4'],
];

export default function S03k_EvidenceLadder() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead tag="评分之前先学会看证据" tagBg={colors.yellow} title="不是所有“看起来不错”都同样可信" sub="分数反映你目前掌握的证据，不反映你对这个点子的热爱。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, alignItems: 'end' }}>
					{EVIDENCE.map(([no, title, body, bg], index) => <motion.div key={no} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ border, boxShadow: shadowSm, background: bg, padding: '18px 15px', minHeight: 160 + index * 22 }}><div style={{ fontFamily: fonts.mono, fontSize: 28, fontWeight: 900, color: colors.red }}>{no}</div><div style={{ marginTop: 14, fontSize: 22, lineHeight: 1.25, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.45 }}>{body}</div></motion.div>)}
				</div>
				<Punchline bg={colors.dark}>评分时补完一句：<span style={{ color: colors.yellow }}>“我给这个分，因为我已经看到 ______；仍需验证 ______。”</span></Punchline>
			</Body>
		</Slide>
	);
}
