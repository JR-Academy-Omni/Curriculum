import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';

interface PartyData {
	label: string;
	tag: string;
	color: string;
	traits: string;
	cares: string;
	tech: string;
	focus: string;
	strategy: string;
	examples: string[];
}

const partyA: PartyData = {
	label: '甲方 · 产品公司',
	tag: 'PRODUCT',
	color: colors.p3,
	traits: '一个产品打到底 / SaaS / 互联网 / 自营业务',
	cares: 'DAU · 转化率 · 留存 · NPS · scale',
	tech: '稳定 + 可扩展 + iteration speed',
	focus: 'scale 设计 / cost 把控 / user experience / A/B 迭代节奏',
	strategy: '用「产品视角」讲项目；metric 优先讲用户量、转化、deflection',
	examples: ['Atlassian', 'Canva', 'Anthropic', 'OpenAI', 'Notion', 'Linear'],
};

const partyB: PartyData = {
	label: '乙方 · 咨询 / SI / 服务',
	tag: 'SERVICE',
	color: colors.p7,
	traits: '多客户多项目 / 咨询 / 外包 / Solution Provider',
	cares: 'delivery speed · 客户满意度 · 项目利润率',
	tech: 'fast PoC + 多场景适配 + 客户教育',
	focus: '跨领域适应 / 客户沟通 / 压力 + 加班 + 多 deadline / 技术栈广度',
	strategy: '强调「广度 + 抗压」— 必问 "How do you handle pressure / long hours / tight deadlines"，不要回避，直接给 SOP（优先级 / 跟 PM 重新对齐 scope / 主动 escalate）',
	examples: ['Accenture', 'Deloitte AI', 'Thoughtworks', '本地 AI 咨询'],
};

const judgeRules = [
	{ k: 'About 页面', a: '单一产品 = 甲方', b: '"We help clients..." = 乙方' },
	{ k: 'JD 措辞', a: '"our users / our platform" = 甲方', b: '"client engagements / various industries" = 乙方' },
	{ k: '招聘节奏', a: '单点深挖招 = 甲方', b: '广撒网招 = 乙方' },
];

function PartyCard({ data, side }: { data: PartyData; side: 'left' | 'right' }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.2 }}
			style={{ background: colors.white, border, boxShadow: shadow, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
		>
			<div style={{ background: data.color, color: colors.white, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `3px solid ${colors.black}` }}>
				<span style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900 }}>{data.label}</span>
				<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, padding: '3px 9px', background: colors.black, color: colors.white, border: `2px solid ${colors.white}` }}>
					{data.tag}
				</span>
			</div>
			<div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
				<Row k="特征" v={data.traits} c={data.color} />
				<Row k="关心" v={data.cares} c={data.color} />
				<Row k="技术追求" v={data.tech} c={data.color} />
				<Row k="面试侧重" v={data.focus} c={data.color} />
				<div style={{ background: '#fff8e6', border: `2px dashed ${data.color}`, padding: '8px 10px' }}>
					<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: data.color, letterSpacing: 1, marginBottom: 3 }}>答题策略</div>
					<div style={{ fontSize: 12.5, fontWeight: 700, color: colors.black, lineHeight: 1.45 }}>{data.strategy}</div>
				</div>
				<div>
					<div style={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: '#666', letterSpacing: 1, marginBottom: 4 }}>代表公司</div>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
						{data.examples.map((e) => (
							<span key={e} style={{ padding: '3px 8px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, border: `2px solid ${colors.black}` }}>
								{e}
							</span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function Row({ k, v, c }: { k: string; v: string; c: string }) {
	return (
		<div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
			<span style={{ flexShrink: 0, fontFamily: fonts.mono, fontSize: 10, fontWeight: 900, color: c, letterSpacing: 1, paddingTop: 2, minWidth: 56 }}>{k}</span>
			<span style={{ fontSize: 12.5, color: '#222', fontWeight: 600, lineHeight: 1.45 }}>{v}</span>
		</div>
	);
}

export default function S23c_CompanyType() {
	return (
		<Slide bg={colors.warmBg}>
			<div style={{ width: '94%', maxWidth: 1400, height: '92%', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
				{/* 标题 */}
				<motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
						<span style={{ padding: '4px 12px', background: colors.dark, color: colors.white, fontFamily: fonts.mono, fontSize: 12, fontWeight: 800, border, boxShadow: `3px 3px 0 ${colors.red}` }}>
							PRE-INTERVIEW · 5 MIN
						</span>
						<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: '#666' }}>
							故事讲法在这两种公司是反的
						</span>
					</div>
					<h2 style={{ fontFamily: fonts.heading, fontSize: '38px', fontWeight: 900, letterSpacing: -1, lineHeight: 1.1 }}>
						面试前 5 分钟 · 判断{' '}
						<span style={{ background: colors.yellow, padding: '0 10px', border, boxShadow: `4px 4px 0 ${colors.black}`, display: 'inline-block', transform: 'rotate(-1deg)' }}>
							甲方 vs 乙方
						</span>
					</h2>
				</motion.div>

				{/* 两张大卡片 */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
					<PartyCard data={partyA} side="left" />
					<PartyCard data={partyB} side="right" />
				</div>

				{/* 两个调查法并排 */}
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 12 }}>
					{/* 左：甲方/乙方快判 */}
					<div style={{ background: colors.white, border, boxShadow: shadowSm, padding: '10px 14px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
							<span style={{ fontSize: 16 }}>🔍</span>
							<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>5 分钟判断甲 / 乙方</span>
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: '70px 1fr 1fr', gap: 6, fontSize: 11 }}>
							<div style={{ fontFamily: fonts.mono, fontWeight: 800, color: '#666' }}>信号</div>
							<div style={{ fontFamily: fonts.mono, fontWeight: 800, color: partyA.color }}>甲方</div>
							<div style={{ fontFamily: fonts.mono, fontWeight: 800, color: partyB.color }}>乙方</div>
							{judgeRules.flatMap((r) => [
								<div key={r.k + 'k'} style={{ fontWeight: 700, color: '#333' }}>{r.k}</div>,
								<div key={r.k + 'a'} style={{ color: '#222', lineHeight: 1.35 }}>{r.a}</div>,
								<div key={r.k + 'b'} style={{ color: '#222', lineHeight: 1.35 }}>{r.b}</div>,
							])}
						</div>
					</div>

					{/* 右：LinkedIn 调查法 */}
					<div style={{ background: colors.dark, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.yellow}`, padding: '10px 14px' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, justifyContent: 'space-between' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
								<span style={{ fontSize: 16 }}>🕵️</span>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, letterSpacing: 1, color: colors.yellow }}>LinkedIn 调查法 · 反推真实技术栈</span>
							</div>
							<span style={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>see: LinkedIn 课</span>
						</div>
						<div style={{ fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600, lineHeight: 1.4, marginBottom: 6 }}>
							JD 写得再漂亮也不够 — <strong style={{ color: colors.yellow }}>看现任 + 离职员工 profile</strong> 才知道公司真实在用什么。
						</div>
						<ol style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: fonts.body, fontSize: 11.5, color: '#fff', lineHeight: 1.45, fontWeight: 600 }}>
							<li style={{ marginBottom: 3 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.yellow, marginRight: 6 }}>①</span>
								LinkedIn 搜公司 → People → 过滤 "AI Engineer / ML / LLM"
							</li>
							<li style={{ marginBottom: 3 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.yellow, marginRight: 6 }}>②</span>
								点开 5-10 个 profile · 抓 Experience 共同关键词
							</li>
							<li style={{ marginBottom: 3 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.yellow, marginRight: 6 }}>③</span>
								提取技术栈：模型(Claude/GPT) · Vector DB · 框架 · Cloud
							</li>
							<li style={{ marginBottom: 3 }}>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.yellow, marginRight: 6 }}>④</span>
								Past Employees → 看离职跳去哪 = 团队 stability 信号
							</li>
							<li>
								<span style={{ fontFamily: fonts.mono, fontWeight: 900, color: colors.yellow, marginRight: 6 }}>⑤</span>
								公司 Page Posts + 工程师 Recent Activity → 真实方向
							</li>
						</ol>
						<div style={{ marginTop: 6, padding: '5px 8px', background: 'rgba(255,255,255,0.08)', border: `1px dashed ${colors.yellow}`, fontFamily: fonts.body, fontSize: 11, color: colors.yellow, fontWeight: 700, lineHeight: 1.4 }}>
							→ 面试时反过来用：<strong>"我注意到你们团队在用 X，我刚好做过 Y..."</strong> 立刻拉高分
						</div>
					</div>
				</motion.div>

				{/* 落点 — 红字警告 */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} style={{ background: colors.red, color: colors.white, border, boxShadow: `4px 4px 0 ${colors.black}`, padding: '8px 14px', textAlign: 'center' }}>
					<span style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 800 }}>
						⚠️ 答错策略代价大 · 甲方面试讲多客户经验 → 不专一 · 乙方面试讲单产品深度 → 不灵活
					</span>
				</motion.div>
			</div>
		</Slide>
	);
}
