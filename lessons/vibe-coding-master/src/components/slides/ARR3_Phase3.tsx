import { motion } from 'framer-motion';
import { Slide, Inner, Title, Tag, colors, fonts, border, shadow, shadowSm } from '../ui';

// 对照 ai-builder/public/outline.json phases[2]（Phase 3 — 自动化 & Agent 运营，L67–L83，共 16 节 / 6 Lab）
// 升维：从「你让 AI 写代码」→「AI 自动把活干了」。多模型选型 / Prompt 精调 / 性能成本降级为支撑技能。
// 16 节按主题归 5 簇；count 之和 = 3+4+3+4+2 = 16；Lab 之和 = 1+2+1+2+0 = 6
const clusters = [
	{
		num: '①',
		theme: 'AI 自动做 coding',
		learn: 'agent 自主完成开发任务 —— 派一个目标，它自己拆步骤、写代码、跑测试、改 bug，不用你一直盯',
		rep: 'Lab: 给 agent 派活 — 一句目标跑完一个 feature',
		count: 3,
		labs: 1,
	},
	{
		num: '②',
		theme: 'AI 帮你 / 企业自动管理运营',
		learn: 'cron / 定时 / 事件触发，让 agent 自动出日报周报、汇总数据、监控告警、自动派活；点名 jr-omni 5 条 routine（SEO / 竞品 / 选题 / AI 可见度 / 增长）每天自己跑出结果',
		rep: 'Lab: 搭一条定时 routine · Lab: 让 agent 自动出运营日报',
		count: 4,
		labs: 2,
	},
	{
		num: '③',
		theme: '给自动化选对引擎',
		learn: '多模型选型：Claude 啃复杂推理 / Codex 本地小步改 / GPT 快速生成 —— 按任务挑最省的那个，自动化跑得起还不烧钱',
		rep: 'Lab: 工具选型实战 — 没有最好，只有最适合这个任务',
		count: 3,
		labs: 1,
	},
	{
		num: '④',
		theme: '让自动化不翻车',
		learn: 'Prompt 精调 + 评估把准确率提上去：Chain of Thought 思维链 / Self-Consistency 多路投票 / 迭代追问，让无人值守的 agent 输出可信',
		rep: 'Lab: Chain of Thought · Lab: Self-Consistency 与迭代追问',
		count: 4,
		labs: 2,
	},
	{
		num: '⑤',
		theme: '稳 + 省：性能 · 成本闭环',
		learn: '自动化一旦持续跑，质量 / 速度 / 成本就得一起调 —— 少返工、少等待、少无效调用，让 agent 长期跑得稳又便宜',
		rep: 'AI 自动化优化闭环：质量、速度、成本一起调',
		count: 2,
		labs: 0,
	},
];

// Phase 3 详细课程安排 —— 让 AI 自动替你/企业干活
export default function ARR3_Phase3() {
	return (
		<Slide bg={colors.warmBg}>
			<Inner style={{ flexDirection: 'column' }}>
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<Tag bg={colors.blue} color={colors.black}>Phase 3 · Week 5-7 · 自动化 & Agent 运营</Tag>
					<Title size="40px" style={{ marginTop: 10 }}>
						Phase 3 · 让 AI 自动替你/企业干活<span style={{ color: '#888', fontWeight: 800 }}>（约 16 节）</span>
					</Title>
					<p style={{ fontSize: 17, color: '#555', marginTop: 8, lineHeight: 1.5 }}>
						从「你让 AI 写代码」→ <b style={{ color: colors.blue }}>AI 自动把活干了</b> —— 让 agent <b style={{ color: colors.black }}>定时跑、自己触发、自动管理运营</b>，你不在它也产出。
					</p>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
					{clusters.map((c, i) => (
						<motion.div key={i}
							initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 160, damping: 18 }}
							style={{ display: 'flex', alignItems: 'center', gap: 16, background: colors.white, border, boxShadow: shadowSm, padding: '10px 16px' }}>
							<div style={{ width: 42, flexShrink: 0, fontSize: 30, fontWeight: 900, lineHeight: 1, color: colors.blue, textAlign: 'center' }}>{c.num}</div>
							<div style={{ width: 4, alignSelf: 'stretch', background: colors.blue, flexShrink: 0 }} />
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ fontSize: 18, fontWeight: 900, color: colors.black }}>{c.theme}</div>
								<div style={{ fontSize: 13.5, color: '#666', marginTop: 2, lineHeight: 1.4 }}>{c.learn}</div>
								<div style={{ fontSize: 12.5, color: colors.black, marginTop: 4, fontFamily: fonts.mono }}>
									<span style={{ color: '#999' }}>代表 ·</span> {c.rep}
								</div>
							</div>
							<div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
								<span style={{ padding: '3px 10px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>{c.count} 节</span>
								{c.labs > 0 && (
									<span style={{ padding: '3px 10px', background: colors.red, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>🔨 {c.labs} Lab</span>
								)}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
					style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14, background: colors.dark, border, boxShadow: shadow, padding: '12px 20px' }}>
					<span style={{ fontSize: 15, fontWeight: 900, color: colors.white }}>从「被叫一次干一次」→「自己持续跑」</span>
					<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#cfd3e6' }}>16 节 = 5 大主题 · 3 直播 · 7 自学/参考 · 6 互动 Lab</span>
					<span style={{ marginLeft: 'auto', padding: '5px 14px', background: colors.yellow, color: colors.black, fontFamily: fonts.mono, fontSize: 13, fontWeight: 900 }}>
						🔨 含 6 个互动 Lab — 让 agent 自己跑起来
					</span>
				</motion.div>
			</Inner>
		</Slide>
	);
}
