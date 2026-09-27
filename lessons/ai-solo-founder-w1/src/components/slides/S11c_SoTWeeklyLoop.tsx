import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, Punchline, SlideHead } from '../DeckTable';

const STEPS = [
	['1', '读当前 SoT', '今天服务谁、要解决什么、哪些不能做'],
	['2', '只选一个任务', '访谈、报价、样品、一次服务或一个可用版本'],
	['3', '执行并人工检查', 'AI 可以起草；发布、承诺和高风险决定由人确认'],
	['4', '留下证据', '客户做了什么、拒绝了什么、愿不愿意付费或再来'],
	['5', '决定要不要更新', '证据改变了客户、问题、交付或边界，才改 SoT'],
];

export default function S11c_SoTWeeklyLoop() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '36px 54px 30px' }}>
				<SlideHead
					tag="SoT · 每周怎么用"
					tagBg={colors.red}
					title="每周不是重想一遍生意，而是跑完同一个闭环"
					titleSize="clamp(31px, 2.75vw, 43px)"
					sub="SoT 管方向，任务负责往前走，证据决定下一版。三者不能混在一起。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, alignItems: 'stretch' }}>
					{STEPS.map(([no, title, body], index) => (
						<motion.div
							key={no}
							initial={{ opacity: 0, x: 14 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
							style={{ position: 'relative', border, boxShadow: shadowSm, background: [colors.white, '#FFF6D6', '#EDE9FE', '#DCEBFF', '#D9F2E4'][index], padding: '18px 16px', minHeight: 280 }}
						>
							<div style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', border, background: index === 4 ? colors.green : colors.red, color: index === 4 ? colors.black : colors.white, fontFamily: fonts.mono, fontWeight: 900, fontSize: 22 }}>{no}</div>
							<div style={{ marginTop: 18, fontFamily: fonts.heading, fontWeight: 900, fontSize: 23, lineHeight: 1.2 }}>{title}</div>
							<div style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.5, fontWeight: 550 }}>{body}</div>
							{index < STEPS.length - 1 ? (
								<div style={{ position: 'absolute', right: -19, top: 124, zIndex: 3, width: 34, height: 34, display: 'grid', placeItems: 'center', border, background: colors.yellow, fontFamily: fonts.mono, fontSize: 24, fontWeight: 900 }}>→</div>
							) : null}
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					只有第 5 步可以改 SoT。<u>AI 生成了一份新文案，不代表生意方向发生了变化。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
