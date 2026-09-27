import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const LOOP = [
	['1', '读当前 SoT', '今天服务谁、要解决什么、哪些不能做', colors.white],
	['2', 'Agent 按 JD 干活', '排程到点自己跑，产出交付物', '#FFF6D6'],
	['3', '人工检查', '抽查数据、看有没有幻觉、纠正一处再存回去', '#FFE9E4'],
	['4', '你去拿真实证据', '五个真人的最近一次行为和花过的钱', '#DCEBFF'],
	['5', '决定要不要改 SoT', '只有证据改变了客户、问题、交付或边界才动', '#D9F2E4'],
];

export default function S22_BackToSoT() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="闭环 · 上周那条，这周多了一环"
					tagBg={colors.blue}
					title="agent 插在第 2 步，改 SoT 的权力还在第 5 步"
					sub="它替你把第 2 步的工时压下去了，但第 3、4、5 步谁都替不了你。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
					{LOOP.map(([no, title, body, bg], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, x: 14 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + index * 0.09 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: bg, padding: '18px 15px', minHeight: 262 }}
						>
							<div style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', border, background: index === 1 ? colors.blue : index === 4 ? colors.green : colors.red, color: index === 4 ? colors.black : colors.white, fontFamily: fonts.mono, fontWeight: 900, fontSize: 21 }}>{no}</div>
							<div style={{ marginTop: 16, fontFamily: fonts.heading, fontSize: 22, lineHeight: 1.2, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5, fontWeight: 550 }}>{body}</div>
							{index < LOOP.length - 1 ? (
								<div style={{ position: 'absolute', right: -18, top: 112, zIndex: 3, width: 32, height: 32, display: 'grid', placeItems: 'center', border, background: colors.yellow, fontFamily: fonts.mono, fontSize: 21, fontWeight: 900 }}>→</div>
							) : null}
						</motion.div>
					))}
				</div>
				<Punchline bg={colors.red}>
					只有第 5 步可以改 SoT。<u>agent 跑出了一份新报告，不代表生意方向发生了变化。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
