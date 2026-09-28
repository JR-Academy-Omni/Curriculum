import { motion } from 'framer-motion';
import { ActBadge, Page, Head, colors, fonts, border, shadowSm } from '../deck';

// P17 · 用不了 Claude Code 怎么办
// 🔴 不许砍（蓝图 §10.1 铁律 8）。
// 🔴 只讲**能力维度**，不排名、不点评任何具体产品的版本能力（§21.2）。
//    退让阶梯只用 git hook / CI 这类通用机制，不依赖任何产品的功能宣称。
type Rung = { t: string; when: string; lose: string; best?: boolean; last?: boolean };

const LADDER: readonly Rung[] = [
	{ t: 'Claude Code hook', when: '它每一次动手之前', lose: '', best: true },
	{ t: 'git hook：pre-commit / pre-push', when: '提交或推送那一刻', lose: '拦得晚了。返工从「一次工具调用」变成「一整轮改动」' },
	{ t: 'CI 检查', when: '推上去之后', lose: '更晚。反馈从秒级变成分钟级' },
	{ t: 'CLAUDE.md 写一条 + 你自己 review', when: '回到第一幕那个状态', lose: '失去「强制」。但判断线、时点图、脚本解剖三样完全保留', last: true },
] as const;

export default function L12P17_Fallback() {
	return (
		<Page>
			<ActBadge act={4} />
			<Head sub={<>先说清楚 hook 依赖什么：<b>宿主愿意在自己生命周期的固定时点，执行你给的命令，并且听你的返回值。</b>你换任何一个 agent 壳，先去查它有没有这个能力。</>}>
				用不了 Claude Code 怎么办
			</Head>

			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
				{LADDER.map((l, i) => (
					<div key={l.t}>
						<motion.div
							initial={{ opacity: 0, x: -22 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.15 + i * 0.14, duration: 0.4 }}
							style={{
								display: 'flex', alignItems: 'center', gap: 16,
								border: l.best ? `4px solid ${colors.black}` : border,
								background: l.best ? colors.green : l.last ? '#efeae2' : colors.white,
								boxShadow: l.best ? shadowSm : 'none',
								padding: '14px 20px',
								marginLeft: i * 46,
							}}
						>
							<span style={{ fontSize: l.best ? 24 : 21, fontWeight: 800, minWidth: 400 }}>{l.t}</span>
							<span style={{ fontSize: 17, color: '#666', fontFamily: fonts.mono, minWidth: 210 }}>{l.when}</span>
							{l.lose && (
								<span style={{
									fontSize: 17, color: colors.red, fontWeight: 700, lineHeight: 1.4,
									borderLeft: `3px solid ${colors.red}`, paddingLeft: 12,
								}}>
									{l.lose}
								</span>
							)}
						</motion.div>
						{i < LADDER.length - 1 && (
							<div style={{
								marginLeft: i * 46 + 26, fontFamily: fonts.mono, fontSize: 14,
								color: '#999', padding: '2px 0',
							}}>
								↓ 用不了
							</div>
						)}
					</div>
				))}
			</div>

			<div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
				<div style={{
					flex: 1, border, background: colors.white, boxShadow: shadowSm,
					padding: '14px 20px', fontSize: 20, lineHeight: 1.55,
				}}>
					越往下退，能守住的规矩越少。但<b>「说得清才守得住」这条不变</b> ——
					一条你说不清的规矩，<b>在哪一档都守不住</b>。
				</div>
				<div style={{
					flex: 0.85, border, background: colors.dark, color: colors.white,
					padding: '14px 20px', fontSize: 21, fontWeight: 700, lineHeight: 1.5,
					display: 'flex', alignItems: 'center',
				}}>
					工具会变，会被墙，会改名，会涨价。
					<b style={{ color: colors.yellow }}>「这条机器判不判得出来」这个问题不会。</b>
				</div>
			</div>
		</Page>
	);
}
