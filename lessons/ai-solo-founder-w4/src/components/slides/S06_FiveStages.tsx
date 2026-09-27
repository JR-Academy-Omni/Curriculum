import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

// 活动的五个阶段 —— 参照 JR 新生节（orientation-festival）实际跑过的流程
const STAGES = [
	{
		no: '1',
		name: '策划',
		bg: '#FFE9E4',
		q: '办给谁？解决他什么问题？',
		out: ['一句话定位', '目标人群', '时间 / 场地 / 规模', '这场要拿到什么'],
	},
	{
		no: '2',
		name: '招商 / 管理',
		bg: '#FFF4D6',
		q: '谁干什么？什么时候交？',
		out: ['合作方名单与话术', '跟进清单', '任务分工与 due', '预算'],
	},
	{
		no: '3',
		name: '物料',
		bg: '#DCEBFF',
		q: '别人看到的是什么？',
		out: ['Design System', 'logo / 吉祥物', '海报 / 长图', 'landing page'],
	},
	{
		no: '4',
		name: '执行',
		bg: '#D9F2E4',
		q: '当天怎么不出事？',
		out: ['报名表', '签到', '现场流程', '拍照 / 素材'],
	},
	{
		no: '5',
		name: '复盘',
		bg: '#EDE9FE',
		q: '值不值得再办一次？',
		out: ['到场率', '有效留资', '成本', '下一场改什么'],
	},
];

export default function S06_FiveStages() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '38px 60px 30px' }}>
				<SlideHead
					tag="§1 · 拆解"
					tagBg={colors.blue}
					title="拿它举例：任何一件要交付的事，都是这五段"
					titleSize="clamp(30px, 2.7vw, 44px)"
					sub="先把事情拆成段，再问每一段“这段 AI 能不能接”。不拆就交给 AI，等于让它猜你要什么。做产品做服务，换掉每段的名字就是了。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
					{STAGES.map((s, i) => (
						<motion.div
							key={s.no}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.32, delay: 0.1 + i * 0.09 }}
							style={{
								background: s.bg,
								border,
								boxShadow: shadowSm,
								padding: '16px 14px 18px',
								display: 'flex',
								flexDirection: 'column',
								gap: 10,
								minHeight: 340,
							}}
						>
							<div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
								<span
									style={{
										fontFamily: fonts.mono,
										fontSize: 13,
										fontWeight: 700,
										background: colors.black,
										color: colors.white,
										padding: '2px 8px',
									}}
								>
									{s.no}
								</span>
								<span style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900 }}>{s.name}</span>
							</div>

							<div
								style={{
									fontSize: 15,
									fontWeight: 700,
									lineHeight: 1.4,
									padding: '10px 12px',
									background: colors.white,
									border: `2px solid ${colors.black}`,
								}}
							>
								{s.q}
							</div>

							<div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 2 }}>
								{s.out.map((o) => (
									<div key={o} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
										<span style={{ fontFamily: fonts.mono, fontSize: 13, color: '#666', marginTop: 2 }}>▸</span>
										<span style={{ fontSize: 14.5, lineHeight: 1.35 }}>{o}</span>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<SourceNote>
					流程参照 JR 新生节（orientation-festival）实际跑过的三城落地：策划 → 招商作战手册与跟进清单 → 海报与城市页 → 现场集章 / 抽奖 → 复盘。今天的 Beerops 走同一套。做产品的话，这五段就是：想清楚 → 排期分工 → 做东西 → 上线运营 → 看数据复盘。
				</SourceNote>
			</Body>
		</Slide>
	);
}
