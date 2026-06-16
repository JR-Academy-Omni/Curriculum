import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Step { n: string; stage: string; color: string; skills: string[]; out: string; }

const STEPS: Step[] = [
	{ n: '1', stage: '写策划案', color: colors.indigo, skills: ['/offline-event-content-design'], out: '8 框架策划案 + 100 分自评' },
	{ n: '2', stage: '排执行', color: colors.purple, skills: ['/offline-event-sop'], out: '6 阶段 checklist · T-倒计时 · 风险预案' },
	{ n: '3', stage: '出海报', color: colors.rose, skills: ['/xhs-poster', '/poster-user-test'], out: '海报 + 6 persona 反应测试' },
	{ n: '4', stage: '写宣发', color: colors.orange, skills: ['/xhs-draft', '/blog-longform-writer'], out: '小红书 + 公众号宣发稿' },
	{ n: '5', stage: '审详情页', color: colors.teal, skills: ['/offline-event-article-quality'], out: '8 维度打分（发布线 75）' },
	{ n: '6', stage: '活动后 recap', color: colors.blue, skills: ['/xhs-draft', '/wechat-article-quality'], out: '小红书图文 + 公众号长文 recap' },
	{ n: '7', stage: '跟进转化', color: colors.green, skills: ['/eoi-followup'], out: '24h / 72h / 7d 三道闸 + 角色派单' },
];

export default function S21c_OfflineEventWorkflow() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '93%', maxWidth: 1460, height: '90%', padding: '18px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 10 }}>
					<span style={{ padding: '6px 16px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>真实例子 · 一场线下活动 = 7 个 skill 接力</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '34px', fontWeight: 900, letterSpacing: -1, marginTop: 8 }}>匠人线下活动 workflow —— <span style={{ color: colors.rose }}>调了哪些 skill、怎么串的</span></h2>
				</motion.div>

				{/* 表头 */}
				<div style={{ display: 'grid', gridTemplateColumns: '188px 1fr 1fr', gap: 0, fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#999', letterSpacing: 1, padding: '0 4px 6px' }}>
					<div>步骤</div><div>调用 skill</div><div>产出</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
					{STEPS.map((s, i) => (
						<motion.div key={s.n} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
							style={{ display: 'grid', gridTemplateColumns: '188px 1fr 1fr', alignItems: 'center', gap: 12, background: colors.white, border, boxShadow: shadow, padding: '8px 12px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
								<span style={{ width: 30, height: 30, flexShrink: 0, background: s.color, color: colors.white, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.heading, fontSize: 16, fontWeight: 900 }}>{s.n}</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 900, color: colors.black }}>{s.stage}</span>
							</div>
							<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
								{s.skills.map((sk) => (
									<span key={sk} style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, color: colors.white, background: colors.rose, padding: '4px 10px', border: `2px solid ${colors.black}` }}>{sk}</span>
								))}
							</div>
							<div style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 600, color: '#444' }}>{s.out}</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.85 }} style={{ marginTop: 12, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '11px 26px', background: colors.dark, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.rose}`, fontFamily: fonts.heading, fontSize: 20, fontWeight: 900 }}>
						人只在 <span style={{ color: colors.yellow }}>策划 + 现场</span> 把关 —— 其余 7 个 skill 自动接力
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
