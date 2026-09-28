import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P19：收尾 + 预告 L8
// SoT：蓝图 v1.0 §14.1 Exit ticket 四题 + §14.2 作业 + §1 系列主线
const EXIT = [
	'用一句话说清子 Agent 是什么。',
	'三项强收益里，哪一项 1 个子 Agent 就能拿满？为什么？',
	'你刚才那个红灯任务，为什么不该派？',
	'它说「完成了」，你还要做什么才算验收？',
];

const HOMEWORK = [
	'在真实项目里找一个值得分派的任务，<strong>先填分派判断卡</strong>——不能先开 Agent 后补理由',
	'提交每一路 brief、完成回执和汇总矩阵',
	'至少执行一个<strong>来自 Agent 自述之外</strong>的验收动作，并附输出',
	'再找一个<strong>不值得</strong>分派的微任务，实测一次并记录时间差',
];

const SERIES = [
	{ k: 'L1–L5', v: '往 context 里放对的东西', on: false },
	{ k: 'L6', v: '看懂 context 怎么被消耗、怎么坏', on: false },
	{ k: 'L7', v: '给 context 分家', on: true },
	{ k: 'L8', v: '让分出去的 context 互相通信', next: true },
];

export default function L7P21_ExitAndNext() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner split>
				<div style={{ flex: '0 0 44%' }}>
					<Tag bg={colors.red}>收口</Tag>
					<Title size="40px" white style={{ marginTop: 12, marginBottom: 18, lineHeight: 1.25 }}>
						只带走<br />
						<span style={{ color: colors.yellow }}>一句话的话</span>
					</Title>

					<motion.div
						initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.45, delay: 0.12 }}
						style={{
							background: colors.white, border: `3px solid ${colors.white}`,
							boxShadow: '6px 6px 0 rgba(0,0,0,0.5)', padding: '18px 20px', marginBottom: 20,
						}}
					>
						<div style={{ fontSize: 20, fontWeight: 800, color: colors.dark, lineHeight: 1.5 }}>
							子 Agent 不是多一个人手，<br />
							是多一个<span style={{ background: colors.yellow, padding: '0 8px' }}>独立的 context</span>。
						</div>
					</motion.div>

					{/* 系列主线 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.4 }}
						style={{ border: '3px solid rgba(255,255,255,0.35)', padding: '14px 17px', marginBottom: 16 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
							系列主线走到哪了
						</div>
						{SERIES.map((s) => (
							<div key={s.k} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 7 }}>
								<span style={{
									flex: '0 0 62px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, textAlign: 'center',
									color: s.on ? colors.black : s.next ? colors.yellow : 'rgba(255,255,255,0.6)',
									background: s.on ? colors.yellow : 'transparent',
									border: s.next ? `2px dashed ${colors.yellow}` : 'none',
									padding: s.next ? '0 5px' : '2px 7px',
								}}>{s.k}</span>
								<span style={{
									fontSize: 14.5,
									color: s.on ? colors.white : s.next ? colors.yellow : 'rgba(255,255,255,0.6)',
									fontWeight: s.on ? 700 : 400,
								}}>{s.v}</span>
							</div>
						))}
					</motion.div>

					{/* 下节预告 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.62 }}
						style={{ border: `3px solid ${colors.purple}`, background: 'rgba(203,108,230,0.12)', padding: '14px 17px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.purple, letterSpacing: 1.4, fontWeight: 700, marginBottom: 7 }}>
							下节预告
						</div>
						<div style={{ fontSize: 20, fontWeight: 800, color: colors.white, marginBottom: 6 }}>
							L8 · Agent Team
						</div>
						<div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
							今天它们之间没有连线。
							<strong style={{ color: colors.yellow }}>下节课让它们互相说话</strong>——
							以及说完之后，谁负责收敛。
						</div>
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						EXIT TICKET · 5 分钟四题 · 至少三题，第 1 题必须答对
					</div>
					<div style={{ marginBottom: 20 }}>
						{EXIT.map((q, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.2 + i * 0.11 }}
								style={{
									display: 'flex', gap: 12, alignItems: 'flex-start',
									background: colors.white, border: `3px solid ${colors.white}`,
									boxShadow: '4px 4px 0 rgba(0,0,0,0.5)', padding: '11px 15px', marginBottom: 10,
								}}
							>
								<span style={{
									flex: '0 0 auto', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
									background: i === 0 ? colors.red : colors.dark, color: colors.yellow, padding: '3px 9px',
								}}>{i + 1}</span>
								<span style={{ fontSize: 15, fontWeight: 600, color: colors.dark, lineHeight: 1.45 }}>{q}</span>
							</motion.div>
						))}
					</div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						作业 · 提交包 = 判断卡 + 运行材料 + 验收证据 + 150 字复盘
					</div>
					{HOMEWORK.map((h, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.35, delay: 0.65 + i * 0.09 }}
							style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}
						>
							<span style={{ color: colors.green, fontWeight: 900, flex: '0 0 auto' }}>▸</span>
							<span
								style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}
								dangerouslySetInnerHTML={{ __html: h }}
							/>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 1.05 }}
						style={{
							marginTop: 18, padding: '15px 20px', background: colors.red, color: colors.white,
							border: `3px solid ${colors.white}`, boxShadow: shadow,
							fontSize: 19, fontWeight: 800, lineHeight: 1.5, textAlign: 'center',
						}}
					>
						分派改变的是<span style={{ color: colors.yellow }}>信息怎样流动</span>，<br />
						不会转移<span style={{ color: colors.yellow }}>最终验收责任</span>。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
