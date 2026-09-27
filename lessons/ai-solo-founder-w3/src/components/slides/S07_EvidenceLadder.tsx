import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline, SourceNote } from '../DeckTable';

// CH1 收口 —— 证据梯度：把 W2 的 5 场访谈变成可数的东西
// 承接 outline.json L11 step ②「把感受性描述全部删掉，只留可数的」
const RUNGS = [
	{ lv: 'L0', h: '听说过这个问题', c: '#e9e9e9', txt: colors.black, d: '「我朋友好像也说过类似的」', w: '不算证据。转述、印象、群里看到的，全部归这一档。', count: false },
	{ lv: 'L1', h: '他说这事很痛', c: colors.yellow, txt: colors.black, d: '「对对对，这个真的很烦」', w: '最容易骗人的一档。人在聊天里天然会附和你。', count: false },
	{ lv: 'L2', h: '上个月真的遇到过', c: colors.blue, txt: colors.white, d: '「上个月我为这事加班到十点」', w: '开始算数了。有时间、有具体场景，能被追问细节。', count: true },
	{ lv: 'L3', h: '已经在为它花钱', c: colors.green, txt: colors.black, d: '「我现在每月付 $X 给某某」或「我雇了人做这个」', w: '硬证据。钱已经在流动，你要抢的是这笔已存在的预算。', count: true },
	{ lv: 'L4', h: '愿意付钱给你', c: colors.red, txt: colors.white, d: '预付、定金、签了的意向、真实成交', w: '最高一档。W7 才要求，今天只是让你知道终点在哪。', count: true },
];

export default function S07_EvidenceLadder() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§1 · 证据分级"
					tagBg={colors.purple}
					title="把 W2 那 5 场访谈，摆到这把尺子上"
					sub="下面那两档听着舒服，但一分钱都换不来。今天所有的判断，只认 L2 以上。"
				/>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					{RUNGS.map((r, i) => (
						<motion.div
							key={r.lv}
							initial={{ opacity: 0, x: -16 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.32, delay: 0.12 + i * 0.09 }}
							style={{
								display: 'grid',
								gridTemplateColumns: '92px 1fr 1.35fr 1.5fr 132px',
								gap: 0,
								border,
								boxShadow: r.count ? shadow : 'none',
								background: colors.white,
								alignItems: 'stretch',
								opacity: r.count ? 1 : 0.72,
							}}
						>
							<div
								style={{
									background: r.c,
									color: r.txt,
									fontFamily: fonts.mono,
									fontSize: 20,
									fontWeight: 700,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderRight: '3px solid #000',
								}}
							>
								{r.lv}
							</div>
							<div style={{ padding: '11px 14px', fontSize: 18, fontWeight: 800, display: 'flex', alignItems: 'center', borderRight: '2px solid #000' }}>
								{r.h}
							</div>
							<div style={{ padding: '11px 14px', fontSize: 15.5, color: '#444', display: 'flex', alignItems: 'center', borderRight: '2px solid #000', fontStyle: 'italic' }}>
								{r.d}
							</div>
							<div style={{ padding: '11px 14px', fontSize: 15.5, lineHeight: 1.45, display: 'flex', alignItems: 'center', borderRight: '2px solid #000' }}>
								{r.w}
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontFamily: fonts.mono,
									fontSize: 14,
									fontWeight: 700,
									background: r.count ? '#f6f6f6' : 'transparent',
									color: r.count ? colors.black : '#aaa',
								}}
							>
								{r.count ? '数得出人数' : '不计入'}
							</div>
						</motion.div>
					))}
				</div>

				<Punchline bg={colors.red}>
					现在动笔：你那 5 场访谈里，<u>L2 有几个人，L3 有几个人</u>。
					<b style={{ background: colors.yellow, color: colors.black, padding: '0 8px', marginLeft: 8 }}>是 0 就写 0。</b>
					写 0 不丢人，写假的才要命——后面十二周都会建在这个数上。
				</Punchline>

				<SourceNote>
					来源：<b>outline.json · L11 step ②</b>「逐场访谈回看录音 / 转录，标出三类事实：上个月真遇到过（计数）、已经在为它花钱（金额）、现有替代方案是什么。把感受性描述（『他们说很痛』）全部删掉，只留可数的」。
					L0–L4 的分级命名为本 deck 整理。
				</SourceNote>
			</Body>
		</Slide>
	);
}
