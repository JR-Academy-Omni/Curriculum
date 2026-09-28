import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { PromptBox } from '../PromptBox';

// P09：Subagent —— 一份能独立开工的 brief（六格）+ 坏 brief 现场改写
// SoT：蓝图 §9.3
const BOXES = [
	{ n: '1', t: '目标', d: '一句话说清要回答或交付什么' },
	{ n: '2', t: '范围与所有权', d: '只读 / 可写 · 明确不要碰 · 你独占的文件或决策' },
	{ n: '3', t: '必要 context', d: '项目规则 · 已知事实与已排除方向 · 必读文件' },
	{ n: '4', t: '产出合同', d: '什么格式 · 每条结论附什么证据 · 没做完要报 partial / blocked' },
	{ n: '5', t: '完成判据', d: '命令、测试、清单或红绿规则' },
	{ n: '6', t: '停止与升级条件', d: '遇到什么就停下来报告，不要擅自扩大范围' },
];

export default function L7P10_SixBoxBrief() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<div style={{ flex: '0 0 44%' }}>
					<div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
						<Tag bg={colors.blue}>结构 A · Subagent</Tag>
					</div>
					<Title size="38px" style={{ marginBottom: 4 }}>
						一份能<span style={{ background: colors.yellow, padding: '0 8px' }}>独立开工</span>的 brief
					</Title>
					<p style={{ fontSize: 16, color: '#555', fontWeight: 500, marginBottom: 14 }}>
						六格必须在<strong>开工前</strong>回答完。它读不到你和主 Agent 说过的话。
					</p>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
						{BOXES.map((b, i) => (
							<motion.div
								key={b.n}
								initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.32, delay: 0.1 + i * 0.08 }}
								style={{ display: 'flex', border, boxShadow: '3px 3px 0 #000', background: colors.white }}
							>
								<div style={{
									flex: '0 0 34px', background: colors.blue, color: colors.white,
									display: 'flex', alignItems: 'center', justifyContent: 'center',
									fontFamily: fonts.mono, fontSize: 15, fontWeight: 700,
								}}>{b.n}</div>
								<div style={{ flex: 1, padding: '7px 12px' }}>
									<div style={{ fontSize: 15.5, fontWeight: 800, color: colors.dark }}>{b.t}</div>
									<div style={{ fontSize: 13, color: '#777', lineHeight: 1.4 }}>{b.d}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#888', letterSpacing: 1.5, fontWeight: 700, marginBottom: 10 }}>
						讲法不是逐格念 —— 拿一个坏 brief 现场补齐
					</div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.3 }}
					>
						<PromptBox
							label="✕ 坏 brief"
							accent={colors.red}
							text="去看看登录为什么有时失败。"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.35, delay: 0.55 }}
						style={{ textAlign: 'center', margin: '10px 0', fontSize: 26, color: colors.red, fontWeight: 900 }}
					>
						↓
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
					>
						<PromptBox
							label="✓ 好 brief"
							accent={colors.green}
							text={`只读排查 src/api/auth/，判断 refresh token 轮换是否可能造成偶发 401。

返回：最多 3 条结论；每条附文件:行号和触发路径；列出未检查范围。

不要改文件，不要排查前端或数据库。

若证据不足，返回「无法判断 + 缺什么证据」。`}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
						style={{
							marginTop: 14, padding: '11px 16px', background: colors.dark, color: colors.white,
							border, boxShadow: shadow, fontSize: 15.5, fontWeight: 700, lineHeight: 1.5,
						}}
					>
						好 brief 多出来的不是字数，是<span style={{ color: colors.yellow }}>边界、证据要求、和「不知道」的出口</span>。
					</motion.div>
				</div>
			</Inner>
		</Slide>
	);
}
