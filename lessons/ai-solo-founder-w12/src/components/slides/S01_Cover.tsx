import { motion } from 'framer-motion';
import { Slide, Inner } from '../ui';
import { Label, colors, fonts } from '../kit';

const runs = [['08:00', '行业简报', '✅'], ['09:00', '选题排序', '✅'], ['10:00', '写文章', '✅'], ['12:00', '视频脚本', '🙋'], ['每 6 小时', '竞品监控', '⏭']];

export default function S01_Cover() {
	return <Slide bg={colors.warmBg} style={{ position: 'relative', backgroundImage: 'linear-gradient(rgba(16,22,47,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(16,22,47,.045) 1px,transparent 1px)', backgroundSize: '48px 48px' }}>
		<div aria-hidden style={{ position: 'absolute', left: 0, top: 0, width: 18, height: '100%', background: colors.red }} />
		<Inner style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', alignItems: 'center', gap: 50, padding: '48px 30px', height: '88%' }}>
			<div>
				<Label bg={colors.dark} color={colors.yellow}>OPC 创业营 · W12</Label>
				<motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} style={{ fontFamily: fonts.heading, fontSize: 116, fontWeight: 900, lineHeight: 1.08, letterSpacing: -5, margin: '28px 0 6px', color: colors.dark }}>
					让生意<br /><span style={{ backgroundImage: `linear-gradient(transparent 72%,${colors.yellow} 72%,${colors.yellow} 96%,transparent 96%)` }}>自己运转</span>
				</motion.h1>
				<div style={{ fontFamily: fonts.heading, fontSize: 36, fontWeight: 800, color: colors.dark }}>AUTOPILOT</div>
				<p style={{ fontSize: 28, lineHeight: 1.55, margin: '24px 0 0', color: colors.dark, fontWeight: 700 }}>用 Codex 搭会判断、会接力的自动化</p>
				<div style={{ display: 'flex', gap: 26, marginTop: 30, paddingTop: 22, borderTop: `2px solid ${colors.dark}`, fontSize: 22, color: colors.dark, alignItems: 'center' }}>
					<span style={{ fontFamily: fonts.mono, fontWeight: 700 }}>2026.11.08</span><span>180 分钟 · 含 30 分钟练习</span><span>Lightman Wang</span>
				</div>
			</div>
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 26, boxShadow: `9px 9px 0 ${colors.dark}`, padding: '26px 30px' }} role="img" aria-label="一份自动化日报：五个任务按时间自己运行，其中一个需要你判断，一个今天无变化">
				<div style={{ fontFamily: fonts.mono, fontSize: 15, letterSpacing: 1.6, color: colors.red, fontWeight: 700 }}>今日自动化日报 · 07:00 你还在睡觉</div>
				<div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
					{runs.map(([t, n, s], i) => <motion.div key={n} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .45 + i * .12 }} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 44px', alignItems: 'center', fontSize: 25, fontWeight: 800, padding: '12px 16px', borderRadius: 14, background: i % 2 ? '#fff8f2' : colors.white, border: '1px solid rgba(16,22,47,.15)' }}>
						<span style={{ fontSize: 19, fontWeight: 700 }}>{t}</span><span>{n}</span><span style={{ fontSize: 28 }}>{s}</span>
					</motion.div>)}
				</div>
				<div style={{ fontSize: 20, marginTop: 16, lineHeight: 1.5 }}>🙋 视频脚本：文章里有一个数字找不到来源，等你确认</div>
			</motion.div>
		</Inner>
	</Slide>;
}
