import { motion } from 'framer-motion';
import { Slide, colors, fonts, border, shadow, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 今天拿什么练手 —— 讲师用活动、学员用自己的东西
// ⚠️ Beerops 的模式与多赢结构在断点① 之前那一页讲，这里不展开。
const STAGES = [
	{ k: '策划', v: '办给谁、解决什么、什么形式' },
	{ k: '管理', v: '谁干什么、什么时候交' },
	{ k: '执行', v: '报名 / 签到 / 跟进' },
	{ k: '品牌', v: '规范 · logo · 吉祥物 · 周边' },
	{ k: '门面', v: '网页上线' },
];

export default function S04_TodayTarget() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§0 · 今天拿什么练手"
					tagBg={colors.green}
					title={
						<>
							今天的例子是{' '}
							<span style={{ background: colors.yellow, padding: '0 10px' }}>Beerops</span>
							——一场真要办的活动
						</>
					}
					sub="我用一场真要办的活动演示，因为假案例学不到东西。但你不用跟着做活动 —— 有公司就用公司，有产品就用产品，流程一模一样。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch' }}>
					{/* 左：你拿什么跟着做 */}
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '22px 24px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 12 }}>
							那你今天拿什么跟着做？
						</div>

						<div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 17, lineHeight: 1.45 }}>
							<div>
								<b>有公司、有在做的生意</b>
								<br />
								<span style={{ fontSize: 15.5, color: '#555' }}>就用它。今天把它的品牌和网页做出来</span>
							</div>
							<div>
								<b>有个产品或服务的想法</b>
								<br />
								<span style={{ fontSize: 15.5, color: '#555' }}>就用它，正好逼自己说清楚</span>
							</div>
							<div>
								<b>什么都还没有</b>
								<br />
								<span style={{ fontSize: 15.5, color: '#555' }}>跟着这个活动走一遍，把流程记住</span>
							</div>
						</div>

						<div
							style={{
								marginTop: 16,
								padding: '11px 14px',
								background: colors.yellow,
								border: `2px solid ${colors.black}`,
								fontSize: 16.5,
								lineHeight: 1.45,
								fontWeight: 700,
							}}
						>
							我在台上做这个活动，你在台下做你自己那个。<b>每一步我跑完，你跟着跑。</b>
						</div>
					</div>

					{/* 右：三小时后的状态 */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888' }}>
							17:00 之前，你手上那个也要长成这样
						</div>
						{STAGES.map((s, i) => (
							<motion.div
								key={s.k}
								initial={{ opacity: 0, x: 16 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
								style={{
									display: 'grid',
									gridTemplateColumns: '30px 96px 1fr',
									alignItems: 'center',
									gap: 12,
									background: colors.white,
									border,
									boxShadow: shadowSm,
									padding: '12px 14px',
								}}
							>
								<span
									style={{
										width: 22,
										height: 22,
										border: `2px solid ${colors.black}`,
										background: colors.white,
										display: 'inline-block',
									}}
								/>
								<span style={{ fontFamily: fonts.heading, fontSize: 19, fontWeight: 900 }}>{s.k}</span>
								<span style={{ fontSize: 15.5, color: '#444', lineHeight: 1.4 }}>{s.v}</span>
							</motion.div>
						))}
					</div>
				</div>

				<Punchline bg={colors.dark}>
					五个空格子，是<b>你自己</b>那个东西的。下课前一个个打勾——<u>打不上勾的那一格，就是你回去要补的作业。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
