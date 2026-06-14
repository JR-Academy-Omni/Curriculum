import { Slide, Inner, Half, Title, Tag, colors, fonts, border, shadow } from '../ui';
import { slideFromLeft, slideFromRight } from '../ui';
import { motion } from 'framer-motion';

const cases = [
	{ cron: '每天 07:30', name: 'daily-jobs', d: '抓 AU+CN 校招岗位 → 落盘 → 自动 sync 到学员端' },
	{ cron: '每天', name: 'cert-questions-watch', d: '巡检证书题库上游有没有更新,一行结论' },
	{ cron: '5 条 routine', name: 'omni-report', d: 'SEO / 竞品 / 选题 / AI 可见度 / 增长 定时跑' },
];

// Claude Code 的 schedule 能力
export default function S23b_Schedule() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner split>
				<Half>
					<motion.div {...slideFromLeft}>
						<Tag bg={colors.purple} color={colors.white}>自动化进阶 · Schedule</Tag>
						<Title size="46px" style={{ marginTop: 14, lineHeight: 1.14 }}>
							让 AI <span style={{ background: colors.yellow, padding: '0 8px' }}>自己定时</span> 干活
						</Title>
						<p style={{ fontSize: 19, color: '#444', marginTop: 16, lineHeight: 1.6 }}>
							前面都是「你在场、AI 干活」。<code style={{ color: colors.purple }}>/schedule</code> 再进一步:
							把任务挂成 <b>cron 云端 agent</b>,按点自动跑 ——
							<b style={{ color: colors.red }}>你不在,它照样产出</b>。
						</p>
						<div style={{ marginTop: 16, fontSize: 17, color: '#444', lineHeight: 1.7 }}>
							<div><span style={{ color: colors.purple, fontWeight: 800 }}>→</span> 重复的日常运营 → 变成定时任务</div>
							<div><span style={{ color: colors.purple, fontWeight: 800 }}>→</span> 产出落盘 / 推通知,人只看结果</div>
							<div><span style={{ color: colors.purple, fontWeight: 800 }}>→</span> 也能一次性:「明天 3 点跑一下 X」</div>
						</div>
					</motion.div>
				</Half>
				<Half>
					<motion.div {...slideFromRight} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: '#888', marginBottom: 2 }}>// 匠人真实在跑的定时 agent</div>
						{cases.map((c, i) => (
							<motion.div key={c.name}
								initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.13 }}
								style={{ background: colors.white, border, boxShadow: shadow, padding: '13px 16px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
									<span style={{ fontSize: 12, fontWeight: 900, fontFamily: fonts.mono, color: colors.white, background: colors.purple, padding: '3px 9px' }}>⏰ {c.cron}</span>
									<span style={{ fontFamily: fonts.mono, fontSize: 16, fontWeight: 800 }}>{c.name}</span>
								</div>
								<div style={{ fontSize: 15, color: '#555', marginTop: 5 }}>{c.d}</div>
							</motion.div>
						))}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
							style={{ background: colors.dark, color: colors.white, padding: '12px 16px', border, fontSize: 15, lineHeight: 1.5, marginTop: 2 }}>
							<b style={{ color: colors.yellow }}>交互式</b>(你在场,要决策) +
							<b style={{ color: colors.purple }}> Scheduled</b>(无人值守,跑流程) = 全天候团队
						</motion.div>
					</motion.div>
				</Half>
			</Inner>
		</Slide>
	);
}
