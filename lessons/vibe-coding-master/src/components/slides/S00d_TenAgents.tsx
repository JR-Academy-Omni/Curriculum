import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 毕业北极星：同时指挥 10 个 agent，每个跑一个【独立的 PRD / 不同的项目 / 不同的产品】，并行推进
const PROJECTS = [
	{ t: '简历产品', c: colors.blue }, { t: '公司内部工具', c: colors.teal }, { t: '一个小程序', c: colors.green },
	{ t: '数据分析报告', c: colors.purple }, { t: '营销落地页', c: colors.red }, { t: '自动化脚本', c: colors.orange },
	{ t: 'Chrome 插件', c: colors.indigo }, { t: 'API 服务', c: colors.techPurple }, { t: '电子书生成器', c: colors.govOrange },
	{ t: '客服机器人', c: colors.industryCyan },
];

export default function S00d_TenAgents() {
	return (
		<Slide bg={colors.darkBg}>
			<Inner style={{ flexDirection: 'column', justifyContent: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
					<Tag bg={colors.red} color={colors.white}>8 周后的毕业标准</Tag>
					<Title white size="40px">同时指挥 <span style={{ background: colors.yellow, color: colors.black, padding: '0 8px' }}>10 个 Agent</span>，各跑一个独立项目</Title>
				</div>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
					style={{ fontSize: 18, color: '#cfd3e6', marginBottom: 18, lineHeight: 1.5 }}>
					这是<b style={{ color: colors.yellow }}>维度升级</b>：你不再是「自己干活的人」，而是升维成「指挥一支自主 agent 军团的人」—— 在更高维度上<b style={{ color: colors.white }}>同时</b>推动 10 个独立的真实项目 / 产品，每个 agent 吃一份完整 PRD、自主端到端跑；你只做<b style={{ color: colors.white }}>拆解、编排、判断、把关</b>。
				</motion.p>

				<div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
					{/* 你 = 指挥 */}
					<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 170, damping: 14 }}
						style={{ flexShrink: 0, background: colors.yellow, border, boxShadow: `6px 6px 0 ${colors.red}`, padding: '20px 22px', textAlign: 'center' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28 }}>你</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, marginTop: 4 }}>升维 · 在它们之上</div>
					</motion.div>

					<div style={{ flexShrink: 0, fontSize: 28, color: colors.yellow, fontWeight: 900 }}>⇉</div>

					{/* 10 个独立项目 */}
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, flex: 1 }}>
						{PROJECTS.map((p, i) => (
							<motion.div key={p.t}
								initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
								style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 8px', textAlign: 'center', borderTop: `5px solid ${p.c}` }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: p.c }}>agent {i + 1} · 独立 PRD</div>
								<div style={{ fontWeight: 800, fontSize: 14, marginTop: 4, lineHeight: 1.2 }}>{p.t}</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 22, textAlign: 'center', fontSize: 20, color: colors.white, fontWeight: 700 }}>
					一个人 = <span style={{ background: colors.red, color: colors.white, padding: '2px 10px' }}>一家公司的并行产能</span>。这就是这门课要带你到的维度。
				</motion.p>
			</Inner>
		</Slide>
	);
}
