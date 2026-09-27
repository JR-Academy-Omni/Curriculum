import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, SourceNote } from '../DeckTable';

// 办一场线下活动的真实倒计时 —— 取自匠人内部线下活动 SOP 的 T- 倒计时表
// （.claude/skills/offline-event-sop/SKILL.md「T-倒计时清单」）
// 黄色 = 今天现场做掉的几步；红字 = 对应的断点编号
const BEFORE = [
	{ t: 'T-4 周', h: '锁方案 + 抢场地', d: '定主题/时间/受众；场地最先发邮件；嘉宾第一轮邀请', mark: '①⑥', today: true },
	{ t: 'T-3 周', h: '场地确认 + 冻预算', d: '合同签掉；嘉宾确认 ≥80%；写风险预案', mark: '⑦', today: true },
	{ t: 'T-2 周', h: '设计 + 报名页上线', d: '海报/名牌/EOI 表开做；报名页上线', mark: '②③④⑤⑧', today: true },
	{ t: 'T-10 天', h: '第一波宣发', d: '朋友圈/公众号/小红书；嘉宾 PPT 收齐', mark: '', today: false },
	{ t: 'T-1 周', h: '物料确认', d: '对照清单核物料；EA 提前 2 天培训', mark: '', today: false },
	{ t: 'T-3 天', h: '报名截止', d: '第一轮到场提醒；现场分工表 final', mark: '', today: false },
	{ t: 'T-1 天', h: '全员就位', d: '签到桌 + 红 sticker；EA 拉群；场地门禁', mark: '', today: false },
	{ t: 'T-day', h: '现场', d: '入场 → 开场 → 拍摄 → 收 EOI → 发反馈表', mark: '', today: false, big: true },
];

const AFTER = [
	{ t: 'T+1', d: 'EOI 第一轮跟进（24h SLA）+ 合影组图' },
	{ t: 'T+2', d: '小红书图文 recap' },
	{ t: 'T+3', d: '公众号长文 recap' },
	{ t: 'T+5', d: '短视频 cut' },
	{ t: 'T+7', d: '嘉宾金句卡；EOI 第一轮 close' },
];

export default function S06b_Timeline() {
	return (
		<Slide bg={colors.warmBg}>
			<Body style={{ padding: '32px 46px 24px' }}>
				<SlideHead
					tag="§1 · 时间线"
					tagBg={colors.blue}
					title="办一场活动，倒着从那天往回排"
					titleSize="clamp(26px, 2.3vw, 38px)"
					sub="活动日子钉死，所有事从那天倒推。这是匠人内部真在用的倒计时表 —— 黄色三格就是今天现场要做掉的。"
				/>

				{/* 活动前 */}
				<div style={{ display: 'grid', gridTemplateColumns: `repeat(${BEFORE.length}, 1fr)`, gap: 7, position: 'relative' }}>
					<div style={{ position: 'absolute', left: 0, right: 0, top: 86, height: 3, background: colors.black }} />

					{BEFORE.map((n, i) => (
						<motion.div
							key={n.t}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.26, delay: 0.06 + i * 0.055 }}
							style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
						>
							<div
								style={{
									fontFamily: fonts.mono,
									fontSize: 13,
									fontWeight: 700,
									background: n.today ? colors.black : n.big ? colors.red : 'transparent',
									color: n.today ? colors.yellow : n.big ? colors.white : '#666',
									padding: n.today || n.big ? '3px 9px' : '3px 0',
								}}
							>
								{n.t}
							</div>

							<div style={{ height: 22, display: 'flex', alignItems: 'center' }}>
								{n.mark ? (
									<span style={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: colors.red, letterSpacing: -1 }}>
										{n.mark}
									</span>
								) : null}
							</div>

							<div
								style={{
									width: n.today ? 18 : 13,
									height: n.today ? 18 : 13,
									borderRadius: '50%',
									background: n.today ? colors.yellow : n.big ? colors.red : colors.white,
									border: `3px solid ${colors.black}`,
									zIndex: 2,
									marginBottom: 11,
								}}
							/>

							<div
								style={{
									background: n.today ? colors.yellow : colors.white,
									border,
									boxShadow: shadowSm,
									padding: '9px 7px 10px',
									width: '100%',
									textAlign: 'center',
									minHeight: 92,
								}}
							>
								<div style={{ fontFamily: fonts.heading, fontSize: 16.5, fontWeight: 900, lineHeight: 1.15 }}>{n.h}</div>
								<div style={{ fontSize: 12.5, color: '#444', lineHeight: 1.35, marginTop: 5 }}>{n.d}</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* 活动后 */}
				<div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '132px 1fr', gap: 12, alignItems: 'center' }}>
					<div
						style={{
							background: colors.dark,
							color: colors.white,
							border,
							padding: '9px 10px',
							textAlign: 'center',
						}}
					>
						<div style={{ fontFamily: fonts.heading, fontSize: 17, fontWeight: 900 }}>活动之后</div>
						<div style={{ fontSize: 12, color: colors.yellow, marginTop: 2 }}>一周内收完</div>
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: `repeat(${AFTER.length}, 1fr)`, gap: 8 }}>
						{AFTER.map((a, i) => (
							<motion.div
								key={a.t}
								initial={{ opacity: 0, x: 10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.25, delay: 0.55 + i * 0.06 }}
								style={{ background: colors.white, border, boxShadow: shadowSm, padding: '8px 10px' }}
							>
								<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700 }}>{a.t}</div>
								<div style={{ fontSize: 13, color: '#444', lineHeight: 1.35, marginTop: 3 }}>{a.d}</div>
							</motion.div>
						))}
					</div>
				</div>

				<div
					style={{
						marginTop: 12,
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr',
						gap: 12,
					}}
				>
					<div style={{ background: colors.white, border, padding: '10px 13px', fontSize: 14.5, lineHeight: 1.4 }}>
						<b>场地要最先动</b>
						<br />
						<span style={{ color: '#555' }}>T-4 周第一件事就是发邮件问场地，它的档期不等人。</span>
					</div>
					<div style={{ background: colors.white, border, padding: '10px 13px', fontSize: 14.5, lineHeight: 1.4 }}>
						<b>报名截止定在 T-3 天</b>
						<br />
						<span style={{ color: '#555' }}>留出时间做最后提醒和现场分工，不要开放到当天。</span>
					</div>
					<div style={{ background: colors.yellow, border, padding: '10px 13px', fontSize: 14.5, lineHeight: 1.4 }}>
						<b>活动结束不是结束</b>
						<br />
						<span style={{ color: '#333' }}>高意向 24 小时内必须真人跟进，过夜就凉。</span>
					</div>
				</div>

				<SourceNote>
					取自匠人内部线下活动 SOP 的「T- 倒计时清单」（四城通用）。黄色三格 = 今天这三小时做掉的，剩下的是找场地、谈人、把人请来 —— 那些 AI 替不了。
				</SourceNote>
			</Body>
		</Slide>
	);
}
