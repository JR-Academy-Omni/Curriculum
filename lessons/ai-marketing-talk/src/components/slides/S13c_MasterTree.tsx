import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow } from '../ui';

interface Branch { icon: string; title: string; color: string; leaves: string[]; }

const BRANCHES: Branch[] = [
	{ icon: '📝', title: '文字内容', color: colors.rose, leaves: ['小红书笔记', '公众号长文', 'LinkedIn', '落地页文案'] },
	{ icon: '🎬', title: '视频内容', color: colors.orange, leaves: ['口播脚本', '分镜表', '短视频', '数字人口播'] },
	{ icon: '🎨', title: '视觉内容', color: colors.purple, leaves: ['海报', '配图', '封面', 'Banner'] },
	{ icon: '💬', title: '评论 / 互动', color: colors.green, leaves: ['评论自动回复', '私信话术', '社群 SOP'] },
	{ icon: '🔍', title: 'SEO / GEO', color: colors.indigo, leaves: ['长尾页', 'FAQ Schema', '被 AI 引用'] },
	{ icon: '📧', title: '转化 / 私域', color: colors.blue, leaves: ['EDM 邮件', '销售话术', 'EOI 跟进'] },
];

// 6 个分支在 viewBox(0..1200) 上的横向中心
const XS = [100, 300, 500, 700, 900, 1100];

export default function S13c_MasterTree() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1500, height: '88%', padding: '24px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ textAlign: 'center', marginBottom: 12 }}>
					<div style={{ display: 'inline-block', padding: '6px 14px', background: colors.dark, color: colors.yellow, fontFamily: fonts.mono, fontSize: 16.5, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>一棵树 · 一份 Master 能长出多少东西</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '40.5px', fontWeight: 900, letterSpacing: -1 }}>同一份真相，不止文字 —— <span style={{ color: colors.rose }}>枝叶全从这里长出来</span></h2>
				</motion.div>

				{/* 树根 · MASTER */}
				<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.2 }} style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `7px 7px 0 ${colors.rose}`, padding: '14px 36px', textAlign: 'center' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2, color: colors.yellow }}>🌳 树根 · SOURCE OF TRUTH</div>
						<div style={{ fontFamily: fonts.heading, fontSize: 29.5, fontWeight: 900, letterSpacing: -0.5 }}>1 份 MASTER</div>
						<div style={{ fontFamily: fonts.body, fontSize: 15.5, opacity: 0.85 }}>你是谁 / 卖给谁 / 痛点 / 真实数据 / 品牌语气</div>
					</div>
				</motion.div>

				{/* 树枝连接线 */}
				<svg viewBox="0 0 1200 70" width="100%" height="58" preserveAspectRatio="none" style={{ display: 'block', marginTop: -2 }}>
					{XS.map((x, i) => (
						<motion.path key={x} d={`M 600 0 C 600 38, ${x} 30, ${x} 70`} fill="none" stroke={BRANCHES[i].color} strokeWidth={3}
							initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }} />
					))}
				</svg>

				{/* 6 个分支叶子 */}
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
					{BRANCHES.map((b, i) => (
						<motion.div key={b.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
							style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column' }}>
							<div style={{ background: b.color, color: colors.white, padding: '10px 10px', textAlign: 'center', borderBottom: `3px solid ${colors.black}` }}>
								<div style={{ fontSize: 27.5, lineHeight: 1 }}>{b.icon}</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900, marginTop: 4 }}>{b.title}</div>
							</div>
							<div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
								{b.leaves.map((leaf) => (
									<div key={leaf} style={{ fontFamily: fonts.body, fontSize: 16, fontWeight: 700, color: colors.dark, background: '#f7f5ef', border: `1.5px solid ${colors.black}`, padding: '5px 8px', textAlign: 'center' }}>{leaf}</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.2 }} style={{ marginTop: 16, textAlign: 'center' }}>
					<div style={{ display: 'inline-block', padding: '12px 28px', background: colors.rose, color: colors.white, border, boxShadow: `6px 6px 0 ${colors.dark}`, fontFamily: fonts.heading, fontSize: 26, fontWeight: 900 }}>
						你只维护<span style={{ color: colors.yellow }}>一棵树的根</span> —— AI 长出所有枝叶
					</div>
				</motion.div>
			</div>
		</Slide>
	);
}
