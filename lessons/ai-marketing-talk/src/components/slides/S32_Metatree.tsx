import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

const SERVICES = [
	{ icon: '⚙️', t: 'Workflow 自动化', d: 'AI 助手帮你 7×24 跑流程' },
	{ icon: '🛠️', t: '定制 AI 软件', d: '从想法到上线 3-7 天' },
	{ icon: '📄', t: '文档智能处理', d: '合同 / 发票 / 报告自动读' },
	{ icon: '🎓', t: '团队 AI 培训', d: '把你的团队带成 AI-native' },
	{ icon: '🏠', t: '地产营销 AI', d: '房源内容 + 投放一条龙' },
	{ icon: '🔗', t: 'Web3 / 区块链', d: '新一代互联网应用' },
];

const STATS = [
	{ v: '省 20+ 小时/周', },
	{ v: '$2k → $200k+', },
	{ v: '1000+ 企业伙伴', },
	{ v: '团队 ex Google / AWS / Atlassian', },
];

export default function S32_Metatree() {
	return (
		<Slide bg={colors.dark}>
			<div style={{ width: '93%', maxWidth: 1440, height: '90%', padding: '20px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 14, display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
					<span style={{ padding: '6px 16px', background: colors.rose, color: colors.white, fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>JR Academy 旗下 · AI Lab</span>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '46px', fontWeight: 900, color: colors.white, letterSpacing: -1 }}>Metatree <span style={{ color: colors.rose }}>AI Lab</span></h2>
					<span style={{ fontFamily: fonts.mono, fontSize: 17, fontWeight: 700, color: colors.yellow }}>"Cut costs. Ship faster. AI that works."</span>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontFamily: fonts.body, fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: 14 }}>
					澳洲 AI 咨询 + digital studio —— 帮企业把今晚这套真正落地。我们能做：
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
					{SERVICES.map((s, i) => (
						<motion.div key={s.t} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
							style={{ background: colors.white, border, boxShadow: shadow, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
							<span style={{ fontSize: 30, flexShrink: 0 }}>{s.icon}</span>
							<div style={{ minWidth: 0 }}>
								<div style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, color: colors.black }}>{s.t}</div>
								<div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600, color: '#666' }}>{s.d}</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
					{STATS.map((s) => (
						<span key={s.v} style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, color: colors.dark, background: colors.yellow, border, padding: '6px 12px' }}>{s.v}</span>
					))}
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} style={{ textAlign: 'center' }}>
					<span style={{ display: 'inline-block', padding: '13px 30px', background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.yellow}`, fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>
						🔗 metatreelab.ai —— 想把你的生意自动化？<span style={{ color: colors.yellow }}>找 Metatree</span>
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
