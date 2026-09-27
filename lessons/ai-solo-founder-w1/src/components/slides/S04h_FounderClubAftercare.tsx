import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead } from '../DeckTable';

const CLUB = [
	['每两周', 'Mastermind', '4–6 人互查真实进展与下一个承诺'],
	['每月', 'Founder Salon', '一个主题，小规模连接校友、Founder 与专业人士'],
	['每月', 'Office Hour', '毕业后 6 个月，带具体经营问题回来解决'],
	['每季度', 'Investor Office Hour', '为已准备好的项目问答；没准备好可以旁听'],
	['长期开放', 'Intro Desk', '达到 intro-ready 后再按阶段和赛道申请匹配'],
	['持续更新', '互为客户市场', '公开“我能提供什么 / 我需要什么”，促成采购与合作'],
];

const DAYS = [
	{ day: '30 天', color: colors.red, title: '把 Demo Day 的人接住', body: '完成当晚 3 个 follow-up，发出第一封毕业后月度 update。' },
	{ day: '60 天', color: colors.orange, title: '完成一个增长动作', body: '沿用 W11 Growth Hacking，跑一个可量化实验，并参加一次 Club 活动。' },
	{ day: '90 天', color: colors.purple, title: '根据数字选下一段路', body: '复盘收入、留存和时间：加速、稳住现金流，或申请进入 Intro Desk。' },
];

export default function S04h_FounderClubAftercare() {
	return (
		<Slide bg="#FFF9F4">
			<Body style={{ padding: '32px 56px 28px' }}>
				<SlideHead
					tag="FOUNDER CLUB · 毕业后继续运转"
					tagBg={colors.yellow}
					title="毕业不是结束：把 15 周的势头接住"
					titleSize="clamp(33px, 2.9vw, 46px)"
					sub="Founder Club 的价值不是再建一个聊天群，而是用固定节奏让反馈、客户、专业经验和引荐持续发生。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: 18, flex: 1, minHeight: 0 }}>
					<section style={{ border, boxShadow: shadowSm, background: '#EDE9FE', padding: '15px 17px' }}>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 950 }}>会籍如何持续产生价值</h3>
						<div style={{ marginTop: 11, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 9 }}>
							{CLUB.map(([cadence, name, body], index) => (
								<motion.div key={name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 + index * 0.06 }} style={{ border: '2px solid #000', background: colors.white, padding: '10px 11px', minHeight: 112 }}>
									<div style={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 900, color: '#7442B5' }}>{cadence}</div>
									<div style={{ marginTop: 4, fontFamily: fonts.heading, fontSize: 18, fontWeight: 950 }}>{name}</div>
									<div style={{ marginTop: 5, fontSize: 13, lineHeight: 1.35, color: '#383838', fontWeight: 650 }}>{body}</div>
								</motion.div>
							))}
						</div>
					</section>

					<section style={{ border, boxShadow: shadowSm, background: colors.dark, color: colors.white, padding: '15px 17px' }}>
						<h3 style={{ fontFamily: fonts.heading, fontSize: 25, fontWeight: 950 }}>毕业后 90 天行动表</h3>
						<div style={{ marginTop: 13, display: 'flex', flexDirection: 'column', gap: 12 }}>
							{DAYS.map((item, index) => (
								<motion.div key={item.day} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + index * 0.1 }} style={{ border: '2px solid #fff', background: '#171E3B', padding: '12px 13px', display: 'grid', gridTemplateColumns: '76px 1fr', gap: 12 }}>
									<div style={{ display: 'grid', placeItems: 'center', background: item.color, color: '#fff', fontFamily: fonts.heading, fontSize: 19, fontWeight: 950 }}>{item.day}</div>
									<div>
										<div style={{ fontFamily: fonts.heading, fontSize: 18, fontWeight: 950, color: colors.yellow }}>{item.title}</div>
										<div style={{ marginTop: 5, fontSize: 13.5, lineHeight: 1.38, color: '#E0E5F2', fontWeight: 650 }}>{item.body}</div>
									</div>
								</motion.div>
							))}
						</div>
						<div style={{ marginTop: 13, padding: '10px 12px', background: colors.yellow, color: colors.black, border: '2px solid #fff', fontSize: 14, lineHeight: 1.4, fontWeight: 850 }}>
							把 30 / 60 / 90 天节点写进 W1 建好的个人 AI OS：提醒、复盘、更新 SoT，不从毕业晚宴后重新归零。
						</div>
					</section>
				</div>

				<div style={{ marginTop: 12, fontFamily: fonts.mono, fontSize: 11.5, color: '#555', fontWeight: 750 }}>Founder Club 具体活动频率、席位与运营规则以当期公布版本为准；不保证融资、订单或引荐结果。</div>
			</Body>
		</Slide>
	);
}
