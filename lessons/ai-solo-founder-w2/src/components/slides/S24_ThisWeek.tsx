import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const TASKS = [
	['3', '条排程真的跑过', '不是配好挂着，是到点自己跑过一次并且你看过输出', '#FFE9E4'],
	['1', '份 agent 调研报告', '竞品对照 + 自下而上算的市场规模 + 痛点矩阵，每条痛点附至少 2 条原文出处', '#FFF6D6'],
	['5', '场真人访谈', '每场 30 分钟，先用 AI 扮演目标用户练一遍手感再去问真人', '#DCEBFF'],
	['1', '次 SoT 复核', '把访谈结论对回 SoT：哪一条假设被证实了、哪一条被推翻了', '#D9F2E4'],
];

export default function S24_ThisWeek() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="本周作业 · 下周带回来"
					tagBg={colors.green}
					title="机器替你跑调研，你自己去见人"
					sub="这两件事不能互相替代。报告让你知道该问什么，访谈才产生证据。"
				/>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 15 }}>
					{TASKS.map(([value, title, body, bg], index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 + index * 0.09 }}
							style={{ border, boxShadow: shadow, background: bg, padding: '21px 18px', minHeight: 256 }}
						>
							<div style={{ fontFamily: fonts.heading, fontSize: 54, lineHeight: 1, fontWeight: 950, color: colors.red }}>{value}</div>
							<div style={{ marginTop: 9, fontSize: 22, fontWeight: 900 }}>{title}</div>
							<div style={{ marginTop: 13, borderTop: '2px solid #111', paddingTop: 11, fontSize: 16, lineHeight: 1.45 }}>{body}</div>
						</motion.div>
					))}
				</div>
				<div style={{ marginTop: 15, border, boxShadow: shadow, background: '#FFF6D6', padding: '14px 20px', fontSize: 18.5, fontWeight: 700, lineHeight: 1.5 }}>
					跑不通的记进卡点日志，<b>下周现场问</b>——不要一个人卡一周。组已经建好了，卡住 24 小时内先在组里说。
				</div>
				<Punchline bg={colors.dark}>
					下周带回：<span style={{ color: colors.yellow }}>排程的真实输出、调研报告、访谈记录，以及继续 / 修改 / 停止的决定。</span>
				</Punchline>
			</Body>
		</Slide>
	);
}
