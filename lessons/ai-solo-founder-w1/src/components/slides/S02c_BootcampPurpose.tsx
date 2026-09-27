import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const STARTS = [
	{
		label: '有 IDEA',
		title: '把想法拿出来验证',
		body: '把“我想做点什么”变成具体客户、真实问题、最小交付和下一次验证。',
		bg: '#FFE5DF',
		accent: colors.red,
	},
	{
		label: '没有 IDEA',
		title: '从行动里找到机会',
		body: '从熟悉行业、反复麻烦和大量人工流程里，找到第一个值得调查的问题。',
		bg: '#DCEBFF',
		accent: '#3478F6',
	},
	{
		label: '共同纪律',
		title: '拒绝只想不做',
		body: '每周必须带回一个别人看得见、能反馈、下一周还能继续改的真实产出。',
		bg: '#FFF2B8',
		accent: '#E28A00',
	},
];

const LOOP = ['做一条内容', '发到公开窗口', '同伴指出问题', '真诚支持好内容', '下周改一版'];

export default function S02c_BootcampPurpose() {
	return (
		<Slide bg="#FFF9F4">
			<Body style={{ padding: '34px 56px 30px' }}>
				<SlideHead
					tag="WHY THIS BOOTCAMP · 创业营为什么存在"
					tagBg={colors.yellow}
					title="有 Idea 就来验证；没有 Idea，就从行动里长出来"
					titleSize="clamp(31px, 2.8vw, 44px)"
					sub="这里不是听完就走的课程。大家一起把模糊想法推进成真实业务，也一起阻止彼此拖到“准备好了再开始”。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
					{STARTS.map((item, index) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: 0.08 + index * 0.09 }}
							style={{ border, boxShadow: shadowSm, background: item.bg, minHeight: 155, padding: '18px 20px' }}
						>
							<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900, color: item.accent, letterSpacing: 1.3 }}>
								{item.label}
							</div>
							<div style={{ marginTop: 8, fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, lineHeight: 1.15 }}>{item.title}</div>
							<div style={{ marginTop: 10, fontSize: 16.5, lineHeight: 1.45, color: '#343434', fontWeight: 600 }}>{item.body}</div>
						</motion.div>
					))}
				</div>

				<div style={{ marginTop: 17, border, background: colors.dark, color: colors.white, boxShadow: shadowSm, padding: '15px 18px 17px' }}>
					<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 22, fontWeight: 900 }}>第一周就建立你的公开内容窗口</div>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.yellow, fontWeight: 800 }}>
							小红书 · TikTok · LinkedIn · Instagram · YouTube · 平台任选
						</div>
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, auto)', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 14 }}>
						{LOOP.map((step, index) => (
							<Fragment key={step}>
								<div style={{ background: colors.white, color: colors.black, border: '2px solid #000', padding: '9px 12px', fontSize: 15, fontWeight: 800, textAlign: 'center' }}>
									{step}
								</div>
								{index < LOOP.length - 1 ? <span style={{ color: colors.yellow, fontSize: 22, fontWeight: 900 }}>→</span> : null}
							</Fragment>
						))}
					</div>
					<div style={{ marginTop: 10, fontSize: 14.5, color: '#DCE3FF', lineHeight: 1.4 }}>
						每周中段互看内容：指出哪里看不懂、哪里不相信、下一版改什么；内容确实有价值，再点赞、收藏或转发。
					</div>
				</div>

				<Punchline bg={colors.red}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
						<span>共同纪律：<span style={{ color: colors.yellow }}>每周有产出、被看见、根据反馈改一次。</span></span>
						<span style={{ fontSize: 17, maxWidth: 510, textAlign: 'right' }}>
							经营目标：课程期间累计真实业务收入争取覆盖并超过学费。<u>目标，不是收益保证。</u>
						</span>
					</div>
				</Punchline>
			</Body>
		</Slide>
	);
}
