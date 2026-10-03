// Migrated teaching page; original source: lessons/vibe-coding-master-l2/src/components/slides/L2P05a_ManageADLC.tsx
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, springIn } from '../courseUi';
import { motion } from 'framer-motion';
const prdRules = [
    { n: '1', t: '建 PRD Backlog', d: '所有想做的东西先进入需求池：一句话需求、用户、价值、状态、负责人。不要散在聊天记录里。', color: colors.red },
    { n: '2', t: '排优先级', d: '每次只选 1 个最值得做的 PRD。按用户痛、商业价值、实现成本、风险来排序。', color: colors.blue },
    { n: '3', t: '管状态', d: 'Draft → Ready → In Progress → Review → Done / Dropped。状态不清楚，agent 和人都会乱。', color: colors.green },
    { n: '4', t: '管版本', d: 'PRD v1 做 MVP，v2 改反馈，v3 再加范围。不要在同一份 PRD 里无限改目标。', color: colors.orange },
];
// Mini CRM 的真实 backlog 长这样（状态定义见前面 PRD 文件夹结构那页）
const backlog: {
    t: string;
    status: string;
    color: string;
}[] = [
    { t: '客户管理 CRUD', status: 'Done', color: colors.green },
    { t: '订单管理 CRUD', status: 'Ready', color: colors.yellow },
    { t: '跟进记录时间线', status: 'Draft', color: '#e5e7eb' },
    { t: '数据导出 Excel', status: 'Dropped', color: '#e5e7eb' },
];
// 管理多个 PRD：你不是管理“循环”，而是管理需求文档队列和版本
export default function L2P05a_ManageADLC() {
    return (<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.dark}>Manage PRDs</Tag>
					<Title size="48px" style={{ marginTop: 12 }}>
						你要学会管理多个 PRD，<span style={{ color: colors.red }}>不是想到什么就让 agent 做什么</span>
					</Title>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: 20, marginTop: 24, alignItems: 'stretch' }}>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
						{prdRules.map((item, i) => (<motion.div key={item.n} {...springIn} transition={{ ...springIn.transition, delay: 0.1 + i * 0.08 }} style={{ borderRadius: 18, background: colors.white, border, boxShadow: shadow, padding: '18px 18px 16px', minHeight: 154 }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
									<div style={{ borderRadius: 18, width: 44, height: 44, background: item.color, border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.mono, fontSize: 18, fontWeight: 900, color: item.color === colors.green ? colors.black : colors.white }}>{item.n}</div>
									<div style={{ fontFamily: fonts.heading, fontSize: 24, fontWeight: 900, color: colors.black }}>{item.t}</div>
								</div>
								<div style={{ marginTop: 10, fontSize: 15.5, fontWeight: 720, lineHeight: 1.45, color: '#374151' }}>{item.d}</div>
							</motion.div>))}
					</div>

					<motion.div {...springIn} transition={{ ...springIn.transition, delay: 0.28 }} style={{ borderRadius: 18, background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '22px 22px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.yellow, fontWeight: 900 }}>Mini CRM 的 Backlog</div>
						<div style={{ marginTop: 12, fontFamily: fonts.heading, fontSize: 26, fontWeight: 900, lineHeight: 1.15 }}>同一个项目，4 个 PRD 排队</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
							{backlog.map((item) => (<div key={item.t} style={{ borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', color: colors.black, border, padding: '11px 14px' }}>
									<span style={{ fontSize: 15.5, fontWeight: 900 }}>{item.t}</span>
									<span style={{ borderRadius: 18, background: item.color, border: `2px solid ${colors.black}`, padding: '3px 10px', fontSize: 12.5, fontWeight: 900, fontFamily: fonts.mono }}>{item.status}</span>
								</div>))}
						</div>
						<div style={{ borderRadius: 18, marginTop: 'auto', background: colors.red, border: `3px solid ${colors.white}`, padding: '13px 15px', fontSize: 18, fontWeight: 900, lineHeight: 1.35 }}>
							一次只喂一个 Ready PRD 给 agent；做完再决定下一个。
						</div>
					</motion.div>
				</div>
			</Inner>
		</Slide>);
}
