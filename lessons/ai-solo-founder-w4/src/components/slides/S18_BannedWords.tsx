import { Slide, colors, fonts, border, shadowSm } from '../ui';
import { Body, SlideHead, Punchline } from '../DeckTable';

const BANNED = ['赋能', '一站式', '全方位', '打造闭环', '深度赋能', '全新升级', '不容错过', '干货满满', '在当今快速发展的', '让我们一起'];

export default function S18_BannedWords() {
	return (
		<Slide bg={colors.white}>
			<Body>
				<SlideHead
					tag="§4 · 文案"
					tagBg={colors.red}
					title="这些词出现一个，那句话就白写了"
					sub="不是它们难听。是它们换到任何一个活动上都成立——所以它们没有传递任何信息。"
				/>

				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 22 }}>
					{BANNED.map((w) => (
						<div
							key={w}
							style={{
								fontFamily: fonts.heading,
								fontSize: 26,
								fontWeight: 900,
								padding: '10px 20px',
								background: '#FFE9E4',
								border,
								boxShadow: shadowSm,
								textDecoration: 'line-through',
								textDecorationColor: colors.red,
								textDecorationThickness: 3,
							}}
						>
							{w}
						</div>
					))}
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<div style={{ background: colors.warmBg, border, padding: '18px 20px' }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10 }}>
							怎么自己检查（AI 写的东西尤其要查）
						</div>
						<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
							把这句话里的<b>活动名换成随便另一个活动</b>。
							<br />
							还通顺 → 这句话是废话，删掉重写。
							<br />
							变得荒谬 → 说明它真的在说你这一个。
						</div>
					</div>

					<div style={{ background: colors.dark, border, padding: '18px 20px', color: colors.white }}>
						<div style={{ fontFamily: fonts.heading, fontSize: 21, fontWeight: 900, marginBottom: 10, color: colors.yellow }}>
							顺便：把这些词写进那张单子
						</div>
						<div style={{ fontSize: 16.5, lineHeight: 1.6 }}>
							这不是让你自己记着。是<b>写进那张单子的「口气」那一行</b>，每次让 AI 写字都带上——让它自己躲开，比你事后一个个抓快得多。
						</div>
					</div>
				</div>

				<Punchline bg={colors.red}>
					AI 最爱写这些词，因为训练数据里全是。<u>你不明确禁掉，它默认就给你端上来。</u>
				</Punchline>
			</Body>
		</Slide>
	);
}
