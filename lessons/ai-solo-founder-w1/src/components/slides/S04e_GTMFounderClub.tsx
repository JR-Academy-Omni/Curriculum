import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const GTM = [
	{ week: 'W8 · 周日主课', title: 'AI 内容工厂', body: '小红书 / 视频号 / 公众号 / X，一套素材改成四个平台内容，并开始 Build in Public。' },
	{ week: 'W8 · 独立线上课 · 90min', title: 'AI 视频实操陪跑', body: '不用讲师样例；带自己的素材，当场导出一条带配音、字幕、可直接发布的成片。' },
	{ week: 'W8 · 独立线上课 · 90min', title: '小红书图文诊断室', body: '带已发布但没量、或发不出去的笔记；现场诊断、修改并重新发布一篇。' },
	{ week: 'W9 · 周日主课', title: '英文媒体 + 主动获客', body: '用 AI 准备 LinkedIn、Product Hunt、Podcast、Founder feature 与线下活动的外联材料。' },
	{ week: 'W10', title: '让人和 AI 都搜到你', body: 'SEO + GEO + E-E-A-T + Schema，把客户会搜索、AI 能引用的可信内容放上网。' },
	{ week: 'W11 · Phase 2 收官', title: 'Growth Hacking · 增长黑客', body: '用 AARRR 找出最大漏水环，上线一个推荐循环，并完成一次 10 渠道 launch。' },
];

const CLUB = [
	{ week: 'W14', title: '融资准备与路线判断', body: '比较客户资金、Grant、Angel、Accelerator 与 VC；准备 Pitch、Data Room，并检查实体、股权和 IP 归属。' },
	{ week: 'W15', title: 'Demo Day + 入会', body: 'Traction / Investor 两条展示路径；完成路演、intro 与毕业后 90 天行动表。' },
	{ week: '毕业后', title: 'Founder Club 继续运转', body: 'Founder salon、mastermind、Office Hour、互为客户市场与长期 intro 网络。' },
];

export default function S04e_GTMFounderClub() {
	return (
		<Slide bg="#F7F5FF">
			<Body style={{ padding: '34px 56px 30px' }}>
				<SlideHead
					tag="课程全景 · 两个不能省略的阶段"
					tagBg={colors.purple}
					title="Go To Market 不是“发几条内容”；Founder Club 也不是结课仪式"
					titleSize="clamp(29px, 2.55vw, 40px)"
					sub="前者把业务带到市场，后者让毕业后的客户、伙伴、经验与机会继续流动。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 18, flex: 1, minHeight: 0 }}>
					<section style={{ border, boxShadow: shadowSm, background: '#DCEBFF', padding: '17px 18px' }}>
						<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
							<h3 style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>PHASE 2 · Go To Market</h3>
							<span style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 900 }}>4 周主线 + 2 节独立线上课</span>
						</div>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9, marginTop: 12 }}>
							{GTM.map((item, index) => (
								<motion.div key={`${item.week}-${item.title}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.07 }} style={{ border: '2px solid #000', background: index === 1 || index === 2 ? '#FFF3BC' : colors.white, padding: '10px 11px', minHeight: 128 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: index === 1 || index === 2 ? '#B66A00' : '#2868C7' }}>{item.week}</div>
									<div style={{ marginTop: 4, fontFamily: fonts.heading, fontSize: 17.5, fontWeight: 900, lineHeight: 1.15 }}>{item.title}</div>
									<div style={{ marginTop: 6, fontSize: 12.8, lineHeight: 1.35, color: '#333', fontWeight: 600 }}>{item.body}</div>
								</motion.div>
							))}
						</div>
					</section>

					<section style={{ border, boxShadow: shadowSm, background: '#EDE9FE', padding: '17px 18px', display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
							<h3 style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 900 }}>PHASE 4 · Founder Club</h3>
							<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 900 }}>W14–W15+</span>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 12 }}>
							{CLUB.map((item, index) => (
								<motion.div key={item.week} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 + index * 0.08 }} style={{ border: '2px solid #000', background: index === 2 ? colors.dark : colors.white, color: index === 2 ? colors.white : colors.black, padding: '12px 13px' }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 900, color: index === 2 ? colors.yellow : '#7B3FC6' }}>{item.week}</div>
									<div style={{ marginTop: 4, fontFamily: fonts.heading, fontSize: 18.5, fontWeight: 900 }}>{item.title}</div>
									<div style={{ marginTop: 5, fontSize: 14, lineHeight: 1.38, color: index === 2 ? '#E4E8F5' : '#333', fontWeight: 600 }}>{item.body}</div>
								</motion.div>
							))}
						</div>
					</section>
				</div>
			</Body>
		</Slide>
	);
}
