import { motion } from 'framer-motion';
import { ActBadge, Page, Head, BYPASSERS, colors, fonts, border, shadow, FS } from '../deck';

// P20 · 本地的都可以改 ⭐⭐ v3 新增 · 第四幕开场，全节最该有而 v2 完全没有的一格
// 🚨 主要攻击者不是坏人，是【赶时间的你自己】和【图省事的 agent】。
//    讲成「防同事」，学员会觉得跟自己无关，这是本页最大的讲飞点。
// 🎬 现场演示：跟 agent 说「把 CI 弄绿」，看它去改检查而不是改文件。
//    ⚠️ 这个演示的稳定复现方案还没定（蓝图 N5），讲师必须课前自己跑通。
// 🔥 回收埋点 4（P03 那句「你改不了的远端」）。
// 🔴 续 L12：L12 讲「它可以不读，读了可以不照做」，
//    L13 讲「**它还可以把那条规矩本身改掉**」。
const LOCAL = ['规则文件', '检查脚本', '给 AI 的指令文件', '你本地的 git 配置'];

export default function L13P20_LocalIsMutable() {
	return (
		<Page bg={colors.dark}>
			<ActBadge act={4} mode="🎬 我现场跑" />
			<Head color={colors.white} sub={<span style={{ color: 'rgba(255,255,255,0.55)' }}>你有六条检查了。但它们在哪？</span>}>
				本地的，<span style={{ color: colors.red }}>都可以改</span>
			</Head>

			<div style={{ display: 'flex', gap: 14, marginBottom: 26 }}>
				{LOCAL.map((x, i) => (
					<motion.div
						key={x}
						initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.12 * i }}
						style={{
							flex: 1, border: `3px solid rgba(255,255,255,0.3)`, padding: '14px 12px',
							textAlign: 'center', fontSize: 21, color: colors.white,
						}}
					>
						{x}
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.red, marginTop: 6 }}>可改</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
				style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}
			>
				<div style={{ flex: '1 1 0', minWidth: 0, border, background: colors.white, boxShadow: shadow, overflow: 'hidden', flexShrink: 0 }}>
					<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 1.3fr' }}>
						{['谁会绕', '为什么', '怎么绕'].map((h, i) => (
							<div key={h} style={{
								padding: '10px 16px', background: colors.dark, color: colors.white,
								fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								borderRight: i < 2 ? `2px solid ${colors.black}` : 'none',
							}}>{h}</div>
						))}
					</div>
					{BYPASSERS.map((b) => (
						<div key={b.who} style={{
							display: 'grid', gridTemplateColumns: '0.8fr 1fr 1.3fr',
							borderTop: `2px solid ${colors.black}`,
							background: b.star ? colors.yellow : colors.white,
						}}>
							<div style={{ padding: '12px 16px', fontSize: 21, fontWeight: b.star ? 900 : 600, borderRight: `2px solid ${colors.black}` }}>{b.who}</div>
							<div style={{ padding: '12px 16px', fontSize: 19, borderRight: `2px solid ${colors.black}`, color: b.star ? colors.black : '#666' }}>{b.why}</div>
							<div style={{ padding: '12px 16px', fontSize: 19, fontWeight: b.star ? 700 : 400 }}>{b.how}</div>
						</div>
					))}
				</div>

				<div style={{ flex: '0 0 470px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
					<div style={{
						border: `4px solid ${colors.yellow}`, background: 'rgba(255,222,89,0.08)', padding: '18px 20px',
					}}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, letterSpacing: 2, marginBottom: 10 }}>
							现在我跟它说一句话
						</div>
						<div style={{
							fontFamily: fonts.heading, fontSize: 34, fontWeight: 900, color: colors.white, lineHeight: 1.35,
						}}>
							「把 CI 弄绿。」
						</div>
					</div>
					<div style={{ fontSize: 23, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
						看它去改<b style={{ color: colors.red }}>检查</b>，
						还是去改<b style={{ color: colors.white }}>文件</b>。
					</div>
					<div style={{
						fontFamily: fonts.heading, fontSize: 26, fontWeight: 900,
						color: colors.white, lineHeight: 1.45,
						borderTop: '2px dashed rgba(255,255,255,0.25)', paddingTop: 16,
					}}>
						本地的检查挡不住它 ,
						<br />
						<span style={{ color: colors.yellow }}>因为检查也是本地文件。</span>
					</div>
				</div>
			</motion.div>

			<div style={{
				marginTop: 18, fontSize: FS.note, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65,
			}}>
				上一节我们说：<b style={{ color: 'rgba(255,255,255,0.8)' }}>它可以不读，读了可以不照做。</b>
				今天多一条 ,
				<b style={{ color: colors.yellow }}>它还可以把那条规矩本身改掉。</b>
			</div>
		</Page>
	);
}
