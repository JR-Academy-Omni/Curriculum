import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const TRACKS = [
	{
		name: 'Traction Track',
		tag: '默认路径 · 面向生意',
		bg: '#DFF4E7',
		accent: '#248651',
		audience: '客户 · 合作伙伴 · 校友 · 潜在合伙人',
		story: '我做出了什么、卖给了谁、现在需要什么合作。',
		gate: '完成当期毕业要求即可进入；重点是订单、合作和真实反馈。',
	},
	{
		name: 'Investor Track',
		tag: '申请制 · 面向投资人',
		bg: '#DCEBFF',
		accent: '#2868C7',
		audience: '到场投资人 · Angel · Accelerator · VC',
		story: '为什么是这个市场、增长是否可重复、资金怎样换来速度。',
		gate: '需要真实收入、连续增长或留存信号、结构计划与完整材料包。',
	},
];

const INTRO = ['准备度检查', '提交具体 Ask', '按阶段与赛道匹配', '获得双方同意', '发送引荐', '两周反馈'];

export default function S04g_FounderClubTracks() {
	return (
		<Slide bg="#F6F8FF">
			<Body style={{ padding: '32px 56px 28px' }}>
				<SlideHead
					tag="FOUNDER CLUB · DEMO DAY + INTRO DESK"
					tagBg={colors.purple}
					title="不是所有项目都应该对着投资人讲"
					titleSize="clamp(32px, 2.8vw, 44px)"
					sub="Founder Club 把客户合作与投资人沟通拆成两个场，保护双方时间，也让传统生意和专业服务不用硬讲 VC 故事。"
				/>

				<div style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '12px 17px', display: 'grid', gridTemplateColumns: '1fr 52px 1fr', alignItems: 'center', gap: 14 }}>
					<div><b style={{ color: colors.yellow }}>学院</b>：负责课程、教学、作业和毕业验收</div>
					<div style={{ textAlign: 'center', fontFamily: fonts.mono, fontSize: 18, color: colors.yellow }}>≠</div>
					<div><b style={{ color: colors.yellow }}>Founder Club</b>：负责评审席、Intro Desk 与毕业后社群</div>
				</div>

				<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 17 }}>
					{TRACKS.map((track, index) => (
						<motion.section key={track.name} initial={{ opacity: 0, x: index === 0 ? -18 : 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + index * 0.1 }} style={{ border, boxShadow: shadowSm, background: track.bg, padding: '15px 17px' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
								<h3 style={{ fontFamily: fonts.heading, fontSize: 26, fontWeight: 950 }}>{track.name}</h3>
								<span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: track.accent }}>{track.tag}</span>
							</div>
							<div style={{ marginTop: 11, display: 'grid', gap: 8 }}>
								{[
									['台下是谁', track.audience],
									['台上讲什么', track.story],
									['进入条件', track.gate],
								].map(([label, value]) => (
									<div key={label} style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: 10, borderTop: '2px solid rgba(0,0,0,0.18)', paddingTop: 8 }}>
										<div style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 900, color: track.accent }}>{label}</div>
										<div style={{ fontSize: 15, lineHeight: 1.35, fontWeight: 700 }}>{value}</div>
									</div>
								))}
							</div>
						</motion.section>
					))}
				</div>

				<div style={{ marginTop: 14, border, boxShadow: shadowSm, background: '#FFF2B8', padding: '12px 15px' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 14 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 950 }}>Intro Desk 不是“老师把投资人微信推给你”</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 900, color: colors.red }}>不保证融资 · 不收成功费 · 不代持 · 不代签</div>
					</div>
					<div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(11, auto)', justifyContent: 'space-between', alignItems: 'center', gap: 6 }}>
						{INTRO.map((step, index) => (
							<Fragment key={step}>
								<div style={{ border: '2px solid #000', background: colors.white, padding: '7px 9px', fontSize: 12.5, fontWeight: 850, textAlign: 'center' }}>{step}</div>
								{index < INTRO.length - 1 ? <span style={{ fontSize: 18, fontWeight: 950 }}>→</span> : null}
							</Fragment>
						))}
					</div>
				</div>
			</Body>
		</Slide>
	);
}
