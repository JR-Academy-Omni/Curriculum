import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const LAYERS = [
	['01', 'Founder Workspace', '固定保存你的业务上下文、任务和证据', '#FFE9E4'],
	['02', 'Business SoT', '唯一当前版本：方向、依据、边界、下一步', '#FFF6D6'],
	['03', 'Weekly Skills', '每周领取一种做事方法，不靠临时提示词', '#DCEBFF'],
	['04', 'Human Review', '你检查、纠错、批准，并决定是否更新 SoT', '#D9F2E4'],
];

export default function S19_MinimumAIOS() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead tag="PERSONAL AI OS · 最小结构" tagBg={colors.blue} title="你的个人 AI OS，只需要四层" sub="第一周不追求工具数量。先保证上下文能保存、任务能重跑、结果有人负责。" />
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
					{LAYERS.map(([no, title, body, bg], index) => <motion.div key={no} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ border, boxShadow: shadowSm, background: bg, padding: '22px 18px', minHeight: 250 }}><div style={{ fontFamily: fonts.mono, color: colors.red, fontSize: 22, fontWeight: 900 }}>{no}</div><div style={{ marginTop: 17, fontFamily: fonts.heading, fontSize: 27, lineHeight: 1.2, fontWeight: 900 }}>{title}</div><div style={{ marginTop: 13, fontSize: 17, lineHeight: 1.5 }}>{body}</div></motion.div>)}
				</div>
				<Punchline bg={colors.dark}>OS 不是一堆工具。<span style={{ color: colors.yellow }}>它是一套能记住业务、重复执行、留下证据的工作方式。</span></Punchline>
			</Body>
		</Slide>
	);
}
