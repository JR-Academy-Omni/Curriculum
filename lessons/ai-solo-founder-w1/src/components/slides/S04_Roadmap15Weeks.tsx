import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

// 15 周路线全景 —— 来源：../../ai-solo-founder-bootcamp/COURSE_REDESIGN.md
//   Phase 1 (W1–W7) / Phase 2 (W8–W11) / Phase 3 (W12–W13) / Phase 4 (W14–W15)
//   每周标题 + 一句具体动作来自该文件的周描述与产出；本页不展示讲师或嘉宾姓名。

interface Week {
	w: string;
	name: string;
	desc: string;
}

const PHASES: { no: string; title: string; range: string; desc: string; bg: string; weeks: Week[] }[] = [
	{
		no: '1',
		title: '把生意跑起来',
		range: 'W1–W7',
		desc: '把产品、公司或服务说清楚，做出最小版本，走到真实客户面前',
		bg: '#FFE9E4',
		weeks: [
			{ w: 'W1', name: '把生意说清楚', desc: '明确客户、问题和要做的产品、公司或服务' },
			{ w: 'W2', name: '给生意配 AI 助手', desc: '让 AI 承担一项低风险、可检查的工作' },
			{ w: 'W3', name: '有人真的需要吗', desc: '访谈真实客户，判断继续、修改还是停止' },
			{ w: 'W4', name: '先做最小版本', desc: '做出客户能看懂、能购买、能交付的版本' },
			{ w: 'W5', name: '让客户找到你', desc: '上线品牌与产品或服务介绍页面' },
			{ w: 'W6', name: '一周只推一件事', desc: '砍掉无关任务，把时间留给客户和收入' },
			{ w: 'W7', name: '完成第一轮销售尝试', desc: '联系客户、报价，记录成交或未成交的真实原因' },
		],
	},
	{
		no: '2',
		title: 'Go To Market',
		range: 'W8–W11',
		desc: '4 周主线 + 2 节独立线上 Workshop，把产品、公司或服务真正带到市场',
		bg: '#DCEBFF',
		weeks: [
			{ w: 'W8', name: 'AI 内容工厂', desc: '四平台内容产线 + Build in Public' },
			{ w: 'W8·线上课', name: 'AI 视频实操陪跑', desc: '90 分钟，用自己的素材当场做出第一条成片' },
			{ w: 'W8·线上课', name: '小红书图文诊断室', desc: '90 分钟，改完一篇并重新发布' },
			{ w: 'W9', name: '英文媒体与主动获客', desc: 'LinkedIn、Product Hunt、Podcast、Founder feature' },
			{ w: 'W10', name: '让人和 AI 都搜到你', desc: '用 SEO、GEO 与可信内容建立长期入口' },
			{ w: 'W11', name: 'Growth Hacking · 增长黑客', desc: '用 AARRR 找漏水环节，上线推荐循环，完成一次 10 渠道 launch' },
		],
	},
	{
		no: '3',
		title: '把经营理顺',
		range: 'W12–W13',
		desc: '理顺交付、财务和澳洲经营事项，让生意不再全靠你救火',
		bg: '#D9F2E4',
		weeks: [
			{ w: 'W12', name: '把交付流程固定下来', desc: '整理交付步骤、成本、回款和老板时间' },
			{ w: 'W13', name: '把澳洲经营事项理清', desc: '查清注册、税务与 Grant 的下一步' },
		],
	},
	{
		no: '4',
		title: 'Founder Club',
		range: 'W14–W15+',
		desc: '融资判断、两条 Demo Day 路径、长期 Intro Desk 与毕业后持续同行',
		bg: '#EDE9FE',
		weeks: [
			{ w: 'W14', name: '融资准备与路线判断', desc: '比较资金形式，准备材料包、Data Room 与企业架构' },
			{ w: 'W15', name: 'Demo Day · 双 Track', desc: 'Traction 面向客户合作；Investor 申请制' },
			{ w: '毕业后', name: 'Intro Desk 长期开放', desc: '准备度检查、匹配、双方同意、引荐与反馈' },
			{ w: '30/60/90 天', name: 'Founder Club 继续运转', desc: 'Salon、Mastermind、Office Hour 与互为客户市场' },
		],
	},
];

function WeekChip({ week, index, today }: { week: Week; index: number; today: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.28, delay: 0.1 + index * 0.035, ease: 'easeOut' }}
			style={{
				border,
				boxShadow: shadowSm,
				background: today ? colors.yellow : colors.white,
				padding: '9px 10px 10px',
				minHeight: 96,
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
				<span style={{ fontFamily: fonts.mono, fontSize: 15, fontWeight: 700, letterSpacing: 0.5 }}>{week.w}</span>
				{today ? (
					<span style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, background: colors.black, color: colors.yellow, padding: '1px 6px' }}>
						今天
					</span>
				) : null}
			</div>
			<div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.25 }}>{week.name}</div>
			<div style={{ fontSize: 13, lineHeight: 1.35, color: '#4a4a4a' }}>{week.desc}</div>
		</motion.div>
	);
}

export default function S04_Roadmap15Weeks() {
	let running = 0;

	return (
		<Slide bg={colors.white}>
			<Body style={{ padding: '36px 60px 30px' }}>
				<SlideHead
					tag="课程全景 · 15 周路线"
					tagBg={colors.orange}
					title="15 周，把一门生意从想法推进到真实经营"
					titleSize="clamp(28px, 2.5vw, 40px)"
					sub="你可以做传统生意、专业服务、公司或产品；AI 是帮助你研究、交付和经营的工具，不是限定赛道。"
				/>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					{PHASES.map((p) => (
						<div
							key={p.no}
							style={{
								display: 'grid',
								gridTemplateColumns: '188px 1fr',
								gap: 14,
								alignItems: 'stretch',
								background: p.bg,
								border,
								padding: 10,
							}}
						>
							<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
									PHASE {p.no} · {p.range}
								</div>
								<div style={{ fontFamily: fonts.heading, fontSize: 20, fontWeight: 900, lineHeight: 1.15, marginTop: 3 }}>
									{p.title}
								</div>
								<div style={{ marginTop: 7, fontSize: 12.5, lineHeight: 1.35, color: '#3e3e3e' }}>{p.desc}</div>
							</div>

							<div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
								{p.weeks.map((wk) => {
									const i = running;
									running += 1;
									return <WeekChip key={wk.w} week={wk} index={i} today={wk.w === 'W1'} />;
								})}
							</div>
						</div>
					))}
				</div>
			</Body>
		</Slide>
	);
}
