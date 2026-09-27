import { motion } from 'framer-motion';
import { colors, fonts, border, shadow } from '../ui';
import { Page, PageHead } from '../deck';

/**
 * P22 · 动手：写你自己的无人值守任务书 🎯 硬产物
 *
 * 🔴 只给骨架，不给范文（§9.1）。deck 里任何一页都不许出现填好的样例任务书 ——
 *    给了范文，交上来的就全是范文的变体。
 * 🔴 但骨架本身必须是**完整可读**的：每段写清它回答什么问题，
 *    不留「____」这种等着填的空行（讲师课前不需要补任何东西）。
 * 🔴 课堂交付线必须写在页面上（§9.1）：这八分钟里 P23 要占约 2 分钟，
 *    学员实际动笔只有 6 分钟。不讲这条线，学员会想把七段都写完美，
 *    然后一段都没写完。
 */
const BLOCK_A = [
	{ n: 1, seg: '目标', q: '跑完之后，世界上多了什么？', hint: '一个名词' },
	{ n: 2, seg: '判据', q: '我怎么知道它成了？', hint: '一条来自它之外的检查' },
	{ n: 3, seg: '边界', q: '不许碰什么？', hint: '路径 / 分支 / 对外发送' },
	{ n: 4, seg: '预答', q: '它可能问我的三个问题，答案先写在这', hint: '写不出来 = 还不能交' },
	{ n: 5, seg: '出口', q: '不确定的时候：不要猜，写进你指定的那个回执文件，然后正常结束', hint: '给一个具体文件名' },
];

const BLOCK_B = [
	{
		n: 6, seg: '回执契约', q: '它必须交回什么形状的结论',
		lines: ['状态：done / skipped / needs-human', '证据：一条来自它之外的检查结果', '原因：不是 done 时，一句话说清卡在哪', '什么都没交回来 = 报警'],
	},
	{
		n: 7, seg: '重跑规则', q: '这件事重跑一次安全吗？',
		lines: ['安全 → 脚本可以直接重试', '不安全 → 第一版只提议不生效', '不确定 → 当成不安全处理'],
	},
];

export default function L11P22_WriteYourBrief() {
	return (
		<Page>
			<PageHead
				phase="write"
				title="写你自己的无人值守任务书"
				sub={<>前五段写给<strong>它</strong>看，后两段写给<strong>盯着它的那个脚本</strong>看。</>}
			/>

			<div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0 }}>
				{/* A 块 */}
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<div style={{
						background: colors.blue, color: colors.white, padding: '9px 16px', borderBottom: border,
						fontSize: 21, fontWeight: 900, flexShrink: 0,
					}}>A · 给它看的（写进 prompt）</div>
					<div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9, flex: 1, minHeight: 0 }}>
						{BLOCK_A.map((s, i) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.28, delay: i * 0.06 }}
								style={{ display: 'flex', gap: 11, alignItems: 'flex-start', flex: 1 }}
							>
								<span style={{
									flexShrink: 0, width: 28, height: 28, background: colors.blue, color: colors.white,
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									border: `2px solid ${colors.black}`,
								}}>{s.n}</span>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ fontSize: 21, fontWeight: 900, color: colors.dark }}>{s.seg}</div>
									<div style={{ fontSize: 19, color: '#555', lineHeight: 1.35 }}>{s.q}</div>
									<div style={{ fontSize: 16, color: '#999', marginTop: 1 }}>{s.hint}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* B 块 */}
				<div style={{ flex: 1, border, boxShadow: shadow, background: colors.white, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
					<div style={{
						background: colors.purple, color: colors.white, padding: '9px 16px', borderBottom: border,
						fontSize: 21, fontWeight: 900, flexShrink: 0,
					}}>B · 给脚本看的（写进调度）</div>
					<div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minHeight: 0 }}>
						{BLOCK_B.map((s, i) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.28, delay: 0.3 + i * 0.09 }}
								style={{ display: 'flex', gap: 11, alignItems: 'flex-start', flex: 1 }}
							>
								<span style={{
									flexShrink: 0, width: 28, height: 28, background: colors.purple, color: colors.white,
									fontFamily: fonts.mono, fontSize: 17, fontWeight: 700,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									border: `2px solid ${colors.black}`,
								}}>{s.n}</span>
								<div style={{ flex: 1, minWidth: 0 }}>
									<div style={{ fontSize: 21, fontWeight: 900, color: colors.dark }}>{s.seg}</div>
									<div style={{ fontSize: 18, color: '#555', lineHeight: 1.3 }}>{s.q}</div>
									<div style={{
										marginTop: 5, background: '#faf7ff', border: `2px solid ${colors.purple}`,
										padding: '6px 10px', fontFamily: fonts.mono, fontSize: 16, lineHeight: 1.55, color: colors.dark,
									}}>
										{s.lines.map((l) => <div key={l}>{l}</div>)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* 课堂交付线 + 限时 */}
			<div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
				<div style={{
					flex: 1, border: `3px solid ${colors.orange}`, background: '#fff8e5',
					padding: '12px 18px', fontSize: 20, lineHeight: 1.45, color: '#444',
				}}>
					<strong>课堂只要做到这里：</strong>A 块五段写实；B 块两段各写到关键行
					（第 6 段写出三个状态 + 一条外部证据，第 7 段写出一句幂等结论）。
					<strong>细化是作业，不在现在。</strong>
				</div>
				<div style={{
					border, boxShadow: shadow, background: colors.red, color: colors.white,
					padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0,
				}}>
					<span style={{ fontSize: 21 }}>⏱</span>
					<span style={{ fontSize: 20, fontWeight: 700 }}>限时</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 27, fontWeight: 700 }}>6 分钟</span>
				</div>
			</div>
		</Page>
	);
}
