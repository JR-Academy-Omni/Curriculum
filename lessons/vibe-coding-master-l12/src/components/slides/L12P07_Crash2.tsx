import { motion } from 'framer-motion';
import { ActBadge, Page, Code, OfficialQuote, colors, fonts, border, shadow } from '../deck';
import { SETTINGS_POST } from '../../data/code';

// P07 · 翻车②：挂错时点 🎬⭐⭐ 第三幕支点
// 🔴 不许砍，不许和 P06 / P08 合并（蓝图 §10.1 铁律 4）。
// 🔴 讲师必须让全班**现场打开 .env 看那一行**（§7.2）——
//    「看见那一行真的在里面」和「听你说它在里面」，是两回事。
// 🔴 学员最常见的反应是"哦所以要用 PreToolUse"。这句对，但太浅。
//    要的是他记住「**这次失败没有声音**」，那才是 P11 二维图的钩子。
export default function L12P07_Crash2() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={3} mode="🎬 你自己触发" />

			<div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
				<span style={{
					fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2, color: colors.red,
				}}>
					翻车 ②
				</span>
				<h2 style={{
					fontFamily: fonts.heading, fontSize: 44, fontWeight: 900,
					color: colors.white, letterSpacing: -1,
				}}>
					就改<span style={{ color: colors.red }}>一个词</span>
				</h2>
			</div>

			<div style={{ flex: 1, display: 'flex', gap: 30, minHeight: 0 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
					<Code code={SETTINGS_POST} hi={[0]} hiColor={colors.red} size={16} wrap label="PreToolUse → PostToolUse" style={{ flex: 1, minHeight: 0 }} />
					<p style={{ fontSize: 22, color: 'rgba(255,255,255,0.72)', marginTop: 16, lineHeight: 1.6 }}>
						改完，<b style={{ color: colors.white }}>再让它往 .env 里加一行。</b>
					</p>
				</div>

				<div style={{ flex: 1.05, display: 'flex', flexDirection: 'column', gap: 16 }}>
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.35, duration: 0.5 }}
						style={{
							border: `3px solid ${colors.red}`, background: 'rgba(255,87,87,0.09)',
							boxShadow: `6px 6px 0px ${colors.red}`, padding: '26px 28px',
						}}
					>
						<div style={{ fontSize: 23, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
							脚本跑了。你的判据也判对了。
							<br />
							它甚至收到了你那句 <code style={{ fontFamily: fonts.mono, color: colors.yellow }}>Blocked</code>。
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 38, fontWeight: 900,
							color: colors.white, marginTop: 18, lineHeight: 1.25, letterSpacing: -1,
						}}>
							而那一行<span style={{ color: colors.red }}>已经在文件里了。</span>
						</div>
						<div style={{
							marginTop: 16, padding: '10px 16px', background: colors.yellow,
							color: colors.black, fontSize: 20, fontWeight: 700, border,
						}}>
							👉 现在，打开你的 .env 看一眼
						</div>
					</motion.div>

					<OfficialQuote>
						<b>PostToolUse</b> hooks <b>can't undo actions</b> since the tool has already executed.
					</OfficialQuote>

					<div style={{ border, background: colors.white, boxShadow: shadow, overflow: 'hidden' }}>
						{[
							['PreToolUse', 'Yes', 'Blocks the tool call', false],
							['PostToolUse', 'No', 'Shows stderr to Claude; the tool already ran', true],
						].map(([ev, can, what, hot]) => (
							<div key={ev as string} style={{
								display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
								background: hot ? colors.red : colors.white,
								color: hot ? colors.white : colors.black,
								borderTop: ev === 'PostToolUse' ? `2px solid ${colors.black}` : 'none',
							}}>
								<code style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, minWidth: 130 }}>{ev}</code>
								<span style={{ fontSize: 19, fontWeight: 900, minWidth: 44 }}>{can}</span>
								<span style={{ fontSize: 16, lineHeight: 1.35 }}>{what}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.6 }}
				style={{
					marginTop: 16, textAlign: 'center',
					fontFamily: fonts.heading, fontSize: 32, fontWeight: 900, color: colors.white, letterSpacing: -0.5,
				}}
			>
				红字照出，日志照写，监控上一切正常。
				<span style={{ color: colors.red }}>　只有文件变了。</span>
			</motion.div>
		</Page>
	);
}
