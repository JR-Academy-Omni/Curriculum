import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Stage { icon: string; name: string; color: string; tasks: string[]; }

const STAGES: Stage[] = [
	{ icon: '🔍', name: '调研', color: colors.indigo, tasks: ['竞争对手调查', '用户画像', '市场趋势'] },
	{ icon: '🎯', name: '策略', color: colors.purple, tasks: ['定位', '漏斗设计', '渠道规划'] },
	{ icon: '💡', name: '选题', color: colors.rose, tasks: ['Topics 获取', '热点借势', '内容日历'] },
	{ icon: '✍️', name: '内容', color: colors.orange, tasks: ['文案', '视频脚本', '配图 / 海报'] },
	{ icon: '📡', name: '触达', color: colors.blue, tasks: ['SEO / GEO', '投放 / 私域', '用户增长 / 裂变工具', '线上+线下活动\n（策划 + 执行）'] },
	{ icon: '📊', name: '数据', color: colors.green, tasks: ['数据回收', '多触点归因', '复盘周报'] },
];

export default function S07b_Landscape() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '24px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', marginBottom: 18 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>先看清 · AI Marketing 到底涉及多少活</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '42.5px', fontWeight: 900, letterSpacing: -1 }}>这不是「写写文案」—— 是<span style={{ color: colors.rose }}>一整条流水线</span></h2>
				</motion.div>

				<div style={{ display: 'flex', alignItems: 'stretch', gap: 6 }}>
					{STAGES.map((s, i) => (
						<div key={s.name} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
							<motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
								style={{ flex: 1, background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', minHeight: 300 }}>
								<div style={{ background: s.color, color: colors.white, padding: '12px 8px', textAlign: 'center', borderBottom: `3px solid ${colors.black}` }}>
									<div style={{ fontSize: 32, lineHeight: 1 }}>{s.icon}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 23.5, fontWeight: 900, marginTop: 4 }}>{s.name}</div>
									<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, opacity: 0.85 }}>0{i + 1}</div>
								</div>
								<div style={{ padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
									{s.tasks.map((t) => (
										<div key={t} style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 700, color: colors.dark, background: '#f7f5ef', border: `1.5px solid ${colors.black}`, padding: '7px 6px', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{t}</div>
									))}
								</div>
							</motion.div>
							{i < STAGES.length - 1 && <div style={{ fontFamily: fonts.mono, fontSize: 26, fontWeight: 700, color: colors.rose, padding: '0 2px', flexShrink: 0 }}>→</div>}
						</div>
					))}
				</div>

				{/* 反馈回流 + 结论 */}
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.9 }} style={{ display: 'flex', gap: 12, marginTop: 16 }}>
					<div style={{ flex: 1, background: colors.black, color: colors.white, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ background: colors.yellow, color: colors.black, padding: '3px 8px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1, whiteSpace: 'nowrap' }}>↺ LOOP</span>
						<span style={{ fontFamily: fonts.body, fontSize: 17, lineHeight: 1.5 }}>数据复盘 → 回流到下一轮<b style={{ color: colors.yellow }}>调研 / 策略</b>，整条流水线循环跑</span>
					</div>
					<div style={{ flex: 1.1, background: colors.rose, color: colors.white, padding: '10px 18px', display: 'flex', alignItems: 'center' }}>
						<span style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, lineHeight: 1.35 }}>传统上这要 <span style={{ color: colors.yellow }}>一个团队</span>分工干 —— 今晚教你一个人 + AI 全包</span>
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
