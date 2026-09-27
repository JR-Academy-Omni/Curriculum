import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// Skill 名与产出均来自 ../../ai-solo-founder-bootcamp/skills/*/SKILL.md。
// 本页只承诺 Skill 真实定义的产出，不把“草稿 / 执行 / 验证”混为一谈。
interface WeeklySkill {
	week: string;
	name: string;
	result: string;
	accent: string;
}

const SKILLS: WeeklySkill[] = [
	{ week: 'W1', name: 'Business SoT', result: '把模糊想法整理成一页可验证的当前版本', accent: colors.orange },
	{ week: 'W2', name: 'AI 团队设计', result: '设计最多 3 个 AI 角色，并跑通一项安全任务', accent: colors.orange },
	{ week: 'W3', name: '客户验证', result: '整理真实访谈证据，决定继续、修改还是停止', accent: colors.orange },
	{ week: 'W4', name: 'Offer 与最小交付', result: '做出产品或服务的 Offer 与最小可售版本', accent: colors.orange },
	{ week: 'W5', name: '品牌上线', result: '写好 Brand SoT，上线可访问的产品或服务页面', accent: colors.orange },
	{ week: 'W6', name: '交付复盘', result: '砍掉远离客户的任务，排出一周交付计划', accent: colors.orange },
	{ week: 'W7', name: '销售与收款', result: '建立销售管道、报价与真实收款路径', accent: colors.orange },
	{ week: 'W8', name: 'AI 内容工厂', result: '做中英文内容与 AI 视频，参加视频陪跑和小红书诊断', accent: '#4B8DFF' },
	{ week: 'W9', name: '主动获客', result: '完成 LinkedIn / Product Hunt / 英文媒体与线下触达', accent: '#4B8DFF' },
	{ week: 'W10', name: 'SEO + GEO', result: '发布客户会搜索、AI 能引用的可信内容', accent: '#4B8DFF' },
	{ week: 'W11', name: 'Growth Hacking', result: '用 AARRR 找最大漏水环，上线推荐循环并跑 10 渠道 launch', accent: '#4B8DFF' },
	{ week: 'W12', name: '交付与财务', result: '固定交付流程，并检查收入、成本和老板时间', accent: '#42A875' },
	{ week: 'W13', name: '澳洲经营准备', result: '用官方来源整理注册、税务与 Grant 决策包', accent: '#42A875' },
	{ week: 'W14', name: 'Funding Readiness', result: '比较资金形式，准备 Pitch / Data Room，并列出企业架构缺口', accent: colors.purple },
	{ week: 'W15', name: 'Founder Club', result: '选择展示路径，完成 Demo Day、入会与 90 天行动表', accent: colors.purple },
];

function SkillRow({ item, index }: { item: WeeklySkill; index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25, delay: 0.05 + index * 0.025 }}
			style={{
				border,
				borderLeft: `8px solid ${item.accent}`,
				boxShadow: shadowSm,
				background: item.week === 'W1' ? '#FFF7C2' : colors.white,
				padding: '9px 11px 10px',
				minHeight: 79,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'baseline', gap: 8, minWidth: 0 }}>
				<strong style={{ fontFamily: fonts.heading, fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{item.week}</strong>
				<span style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 800, lineHeight: 1.2, overflowWrap: 'anywhere' }}>{item.name}</span>
			</div>
			<div style={{ marginTop: 7, fontSize: 14.5, lineHeight: 1.35, color: '#303030', fontWeight: 600 }}>{item.result}</div>
		</motion.div>
	);
}

export default function S04c_WeeklyFounderSkills() {
	return (
		<Slide bg="#FFF9F4">
			<Body style={{ padding: '34px 56px 28px' }}>
				<SlideHead
					tag="课程全景 · 15 周 Skills"
					tagBg={colors.purple}
					title="每周给你一个 Skill，帮你完成一个具体结果"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="不管你做移民中介、专业服务、实体生意、公司还是软件产品，都从自己的真实业务资料开始。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 11 }}>
					{SKILLS.map((item, index) => (
						<SkillRow key={item.week} item={item} index={index} />
					))}
				</div>

				<div style={{ marginTop: 13, fontSize: 14, lineHeight: 1.4, color: '#3e3e3e' }}>
					每周的新 Skill 都读取同一个 Founder Workspace 和当前 SoT。AI 可以准备材料；发布、联系客户、付款、法律与税务决定仍由你本人确认。
				</div>
			</Body>
		</Slide>
	);
}
