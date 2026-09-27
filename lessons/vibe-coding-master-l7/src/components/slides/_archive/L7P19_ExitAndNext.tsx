import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';

// P19：收尾 —— 三选一 + Exit ticket + 作业 + 下节预告
// SoT：蓝图 §14.1 Exit ticket 四题 + §14.2 作业
//
// ⚠️ 下节预告：L7 不是系列收尾。主题定下来后改下面这一个常量即可，
//    其余 19 页不受影响。留空时卡片显示「待公布」，不会在投屏上出现占位符。
const NEXT_LESSON: { code: string; title: string; hook: string } | null = null;
// 例：{ code: 'L8', title: 'MCP', hook: '给 Agent 接上外部世界' }

const CHOICES = [
	{ n: '单 Agent', d: '没有强收益，或成本明显更高', color: colors.yellow, dark: true },
	{ n: 'Subagent', d: '任务独立，只需把结果交回中心', color: colors.blue },
	{ n: 'Agent Team', d: '成员需要互通、协调依赖、共同收敛', color: colors.purple },
];

const EXIT = [
	'不看笔记，画出 Subagent 和 Agent Team 的通信结构。',
	'三路独立搜索、只需统一汇总，应选哪种结构？为什么？',
	'A 的新证据会改变 B 的任务，且两人要共同处理冲突，应选哪种？为什么？',
	'Team 全部任务显示 completed，是否代表可以验收？还缺什么？',
];

const HOMEWORK = [
	'在真实项目里找一个值得多 Agent 的任务，<strong>先填结构选择卡</strong> —— 不能先开 Agent 后补理由',
	'选 Subagent：交每一路 brief + 完成回执 + 汇总矩阵；选 Team：交 charter + 任务板 + 关键消息 + Lead 结论',
	'至少执行一个<strong>来自 Agent 自述之外</strong>的验收动作，并附输出',
	'再找一个<strong>不值得</strong>多 Agent 的微任务，写 100 字说明为什么直接做更好',
];

export default function L7P19_ExitAndNext() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner split>
				<div style={{ flex: '0 0 44%' }}>
					<Tag bg={colors.red}>收口</Tag>
					<Title size="40px" white style={{ marginTop: 12, marginBottom: 16, lineHeight: 1.2 }}>
						最后只剩<br />一道<span style={{ color: colors.yellow }}>三选一</span>
					</Title>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 20 }}>
						{CHOICES.map((c, i) => (
							<motion.div
								key={c.n}
								initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.35, delay: 0.12 + i * 0.12 }}
								style={{ display: 'flex', border: `3px solid ${colors.white}`, boxShadow: '5px 5px 0 rgba(0,0,0,0.5)', background: colors.white }}
							>
								<div style={{
									flex: '0 0 128px', background: c.color, color: c.dark ? colors.black : colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								}}>{c.n}</div>
								<div style={{ flex: 1, padding: '11px 14px', fontSize: 14.5, color: '#333', display: 'flex', alignItems: 'center', lineHeight: 1.4 }}>
									{c.d}
								</div>
							</motion.div>
						))}
					</div>

					{/* 系列位置 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						style={{ border: `3px solid rgba(255,255,255,0.35)`, padding: '14px 17px', marginBottom: 16 }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 9 }}>
							系列主线走到哪了
						</div>
						{[
							{ k: 'L1–L5', v: '往 context 里放对的东西', on: false },
							{ k: 'L6', v: '看懂 context 怎么被消耗、怎么坏', on: false },
							{ k: 'L7', v: '给 context 分家，并选择结构', on: true },
						].map((s) => (
							<div key={s.k} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 6 }}>
								<span style={{
									flex: '0 0 62px', fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700,
									color: s.on ? colors.black : 'rgba(255,255,255,0.6)',
									background: s.on ? colors.yellow : 'transparent', padding: '2px 7px', textAlign: 'center',
								}}>{s.k}</span>
								<span style={{ fontSize: 14.5, color: s.on ? colors.white : 'rgba(255,255,255,0.6)', fontWeight: s.on ? 700 : 400 }}>{s.v}</span>
							</div>
						))}
					</motion.div>

					{/* 下节预告 */}
					<motion.div
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.8 }}
						style={{ border: `3px dashed rgba(255,255,255,0.4)`, padding: '13px 17px' }}
					>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, color: 'rgba(255,255,255,0.55)', letterSpacing: 1.4, fontWeight: 700, marginBottom: 6 }}>
							下节预告
						</div>
						{NEXT_LESSON ? (
							<div>
								<div style={{ fontSize: 20, fontWeight: 800, color: colors.white }}>
									{NEXT_LESSON.code} · {NEXT_LESSON.title}
								</div>
								<div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{NEXT_LESSON.hook}</div>
							</div>
						) : (
							<div style={{ fontSize: 17, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>待公布</div>
						)}
					</motion.div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.yellow, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						EXIT TICKET · 5 分钟四题 · 至少答对三题，第 2、3 题必须分对结构
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
									background: colors.dark, color: colors.yellow, padding: '3px 9px',
								}}>{i + 1}</span>
								<span style={{ fontSize: 15, fontWeight: 600, color: colors.dark, lineHeight: 1.45 }}>{q}</span>
							</motion.div>
						))}
					</div>

					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.green, letterSpacing: 1.4, fontWeight: 700, marginBottom: 10 }}>
						作业 · 提交包 = 结构选择卡 + 运行材料 + 验收证据 + 150 字复盘
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
						多 Agent 改变的是<span style={{ color: colors.yellow }}>信息怎样流动</span>，<br />
						不会转移<span style={{ color: colors.yellow }}>最终验收责任</span>。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
