import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Row { icon: string; stage: string; color: string; role: string; foundation?: boolean; }

const ROWS: Row[] = [
	{ icon: '🔍', stage: '调研', color: colors.indigo, role: '蒸馏竞品 · 蒸馏知识 · 蒸馏一切 → 建知识体系 + 定 AI 规则/Goal', foundation: true },
	{ icon: '🎯', stage: '策略', color: colors.purple, role: '定 AI 的决策框架 · 打分规则' },
	{ icon: '💡', stage: '选题', color: colors.rose, role: 'Agent 自动扫信号、决策选题' },
	{ icon: '✍️', stage: '内容', color: colors.orange, role: 'AI 多模态生成：文字 / 视频 / 配图' },
	{ icon: '📡', stage: '触达', color: colors.blue, role: '分发 agent + 各平台 variant' },
	{ icon: '📊', stage: '数据', color: colors.green, role: '反馈学习闭环 → 回流 Master' },
];

export default function S21b_MarketingToAI() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '93%', maxWidth: 1460, height: '88%', padding: '22px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 14 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>总结 · 回到那张全景图</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900, letterSpacing: -1, marginTop: 10 }}>营销的每一步，在 AI 里<span style={{ color: colors.rose }}>都是一个角色</span></h2>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
					{ROWS.map((r, i) => (
						<motion.div key={r.stage} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.09 }}
							style={{ display: 'flex', alignItems: 'stretch', border, boxShadow: r.foundation ? `6px 6px 0 ${colors.rose}` : shadow, background: colors.white }}>
							<div style={{ flexShrink: 0, width: 168, background: r.color, color: colors.white, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRight: `3px solid ${colors.black}` }}>
								<span style={{ fontSize: 26 }}>{r.icon}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900 }}>{r.stage}</span>
							</div>
							<div style={{ flexShrink: 0, width: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 24, fontWeight: 900, color: r.color }}>→</div>
							<div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '10px 18px', minWidth: 0 }}>
								<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: '#999', whiteSpace: 'nowrap' }}>🤖 AI =</span>
								<span style={{ fontFamily: fonts.body, fontSize: 20, fontWeight: 700, color: colors.dark }}>{r.role}</span>
								{r.foundation && <span style={{ marginLeft: 'auto', fontFamily: fonts.mono, fontSize: 13, fontWeight: 800, color: colors.white, background: colors.rose, padding: '4px 10px', border: `2px solid ${colors.black}`, whiteSpace: 'nowrap' }}>= Master 地基</span>}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.85 }} style={{ marginTop: 16, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '13px 28px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>
						你只要把<span style={{ color: colors.yellow }}>第一步喂好</span>（知识体系 + 规则 + Goal）—— 剩下 5 步 AI 接力
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
