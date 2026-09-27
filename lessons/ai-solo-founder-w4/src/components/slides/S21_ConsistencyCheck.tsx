import { Slide, colors, fonts, border, shadow } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

export default function S21_ConsistencyCheck() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§4 · 终极验收"
					tagBg={colors.red}
					title="改一处，全部跟着变——这才叫跑通"
					sub="这一步不做，你以为你在用那份说明，其实你只是用 AI 做了一堆互不相干的东西。"
				/>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 20 }}>
					<div style={{ background: colors.warmBg, border, boxShadow: shadow, padding: '20px 22px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, marginBottom: 12 }}>现场做这个实验</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 16.5, lineHeight: 1.5 }}>
							<div>
								<b>1 ·</b> 打开那份说明，把<b>人数从 30 改成 50</b>（或者改个时间）
							</div>
							<div>
								<b>2 ·</b> 让 AI 重新生成介绍、招商方案、网页
							</div>
							<div>
								<b>3 ·</b> 打开页面，看那个数字变了没有
							</div>
						</div>
						<div style={{ marginTop: 14, paddingTop: 12, borderTop: `2px dashed ${colors.black}`, fontSize: 16, lineHeight: 1.5 }}>
							变了 → 恭喜，你是真的在用那份说明。
							<br />
							<b style={{ color: colors.red }}>没变 → 说明这个数字是你在页面里手写死的。</b>
						</div>
					</div>

					<div style={{ background: colors.dark, border, boxShadow: shadow, padding: '20px 22px', color: colors.white }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 23, fontWeight: 900, marginBottom: 12, color: colors.yellow }}>
							为什么这件事这么重要
						</div>
						<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
							一场活动从策划到办完，信息会改<b>十几次</b>——时间变、场地变、嘉宾变、人数变。而你今天已经做出了介绍、招商方案、海报素材、网页。
							<div style={{ marginTop: 10 }}>
								一样样手改的话：每改一次，你要去介绍、招商方案、网页、海报里各改一遍，
								<b style={{ background: colors.red, padding: '0 5px' }}>漏一个就是错的信息发出去了</b>。
							</div>
							<div style={{ marginTop: 10 }}>
								这个做法：改一处，重新生成一遍。<b style={{ color: colors.yellow }}>漏不了。</b>
							</div>
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					这就是今天真正教的东西。<u>不是「用 AI 做图做网页」，是「让一份说明管住所有东西」。</u>做产品、做服务、做课程，全都一样。
				</Punchline>
			</Body>
		</Slide>
	);
}
