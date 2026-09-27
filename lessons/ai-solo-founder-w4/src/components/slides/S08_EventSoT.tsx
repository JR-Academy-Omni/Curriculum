import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

// 活动 SoT —— 承接 W1 的 Source of Truth，套用到「活动」这个项目上
const FIELDS = [
	{ f: 'positioning', z: '一句话定位', e: '办给谁 · 解决什么 · 什么形式' },
	{ f: 'audience', z: '目标人群', e: '他们现在的处境、来的动机' },
	{ f: 'format', z: '形式与流程', e: '时长、几个环节、每段干什么' },
	{ f: 'logistics', z: '时间 / 地点 / 规模', e: '定了的写定，没定的写 TBD' },
	{ f: 'brand', z: '品牌段 ⭐', e: '名字 · 主色 · 字体 · 语气 · 图片风格' },
	{ f: 'goals', z: '这场要拿到什么', e: '到场 / 留资 / 转化，写数字' },
	{ f: 'not_doing', z: '不做清单', e: '这次明确不做的事，至少 3 条' },
];

export default function S08_EventSoT() {
	return (
		<Slide bg={colors.warmBg}>
			<Body>
				<SlideHead
					tag="§1 · 承接 W1"
					tagBg={colors.purple}
					title="先把事情写清楚，AI 才知道怎么帮你"
					sub="W1 你给自己的生意写过一份。今天给一场活动写一份——填的东西不一样，道理一模一样。"
				/>

				{/* 非技术学员最容易卡的一点：以为 PRD 和 SoT 是两个东西 */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 14,
						padding: '11px 18px',
						marginBottom: 14,
						background: colors.yellow,
						border,
					}}
				>
					<span
						style={{
							fontFamily: fonts.mono,
							fontSize: 12.5,
							fontWeight: 700,
							background: colors.black,
							color: colors.yellow,
							padding: '3px 10px',
							flexShrink: 0,
						}}
					>
						如果你在公司听过 PRD
					</span>
					<span style={{ fontSize: 16.5, lineHeight: 1.45 }}>
						<b>那就是同一个东西。</b>PRD、需求文档、brief、SoT —— 都是「把你要什么写清楚，让别人照着做」。
						区别只在：<b>SoT 多了一条规矩 —— 只有这一份是准的，改只改它。</b>
					</span>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 22 }}>
					<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px 20px' }}>
						<div style={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#888', marginBottom: 12 }}>
							这份说明要回答七个问题
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
							{FIELDS.map((x) => (
								<div
									key={x.f}
									style={{
										display: 'grid',
										gridTemplateColumns: '132px 118px 1fr',
										gap: 10,
										alignItems: 'baseline',
										padding: '7px 10px',
										background: x.f === 'brand' ? colors.yellow : '#fafafa',
										border: `2px solid ${x.f === 'brand' ? colors.black : '#e3e3e3'}`,
									}}
								>
									<span style={{ fontFamily: fonts.mono, fontSize: 14, fontWeight: 700 }}>{x.f}</span>
									<span style={{ fontSize: 15.5, fontWeight: 800 }}>{x.z}</span>
									<span style={{ fontSize: 14.5, color: '#4a4a4a', lineHeight: 1.35 }}>{x.e}</span>
								</div>
							))}
						</div>
					</div>

					<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
						<div style={{ background: '#DCEBFF', border, boxShadow: shadow, padding: '18px 20px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10 }}>
								为什么「长什么样」要单独写一段
							</div>
							<div style={{ fontSize: 16, lineHeight: 1.55 }}>
								因为它是<b>之后每次让 AI 出东西都要带上的那一段</b>。海报、吉祥物、网页——只要是要看的东西，就把这段一起发过去。这样十样东西才像一家人。
							</div>
						</div>

						<div style={{ background: colors.white, border, boxShadow: shadow, padding: '18px 20px' }}>
							<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10 }}>
								写这份说明的两条硬规矩
							</div>
							<div style={{ fontSize: 16, lineHeight: 1.6 }}>
								<div style={{ marginBottom: 8 }}>
									<b>1 · 没定的写 TBD，不要瞎填。</b>
									<span style={{ color: '#555' }}>填了假的，AI 会当真的用，一路错到网页上。</span>
								</div>
								<div>
									<b>2 · 要改就改这份说明，别改产物。</b>
									<span style={{ color: '#555' }}>在海报里手改一个字，下次重新生成就没了。</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.dark}>
					一句话记住今天：<u>你养的是那份说明，不是那些图和网页。</u>图和网页只是它的影子。
				</Punchline>
			</Body>
		</Slide>
	);
}
