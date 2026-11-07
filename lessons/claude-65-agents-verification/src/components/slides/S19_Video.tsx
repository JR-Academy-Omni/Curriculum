import { DeckFrame, AnimatedGroup, Label, colors, fonts } from '../deck';
import { Shot, muted, Takeaway } from '../lesson';

// 截帧出自宣传片各版本的低清预览和高清定稿
const versions = [
	{ v: 'v1', img: 'ver1.jpg', t: '浅色截图版', d: '我说：不像大片' },
	{ v: 'v2', img: 'ver2.jpg', t: '暗场电影版', d: '名字改成「天枢」' },
	{ v: 'v3', img: 'ver3.jpg', t: '讲取数和验证', d: '我说：要讲怎么拿的数据' },
	{ v: 'v5', img: 'v5_verify.jpg', t: '配乐卡点 + 定稿文案', d: '先低清预览，确认后出高清' },
];

export default function S19_Video() {
	return (
		<DeckFrame tag="06 · 连宣传片也让 AI 做" title="连宣传片，也是一句句「说」出来的" subtitle="视频用代码生成（Remotion），配乐用程序合成，鼓点和画面按帧号对齐。我只负责说「哪里不对」。" accent={colors.orange}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, flex: 1, minHeight: 0, alignContent: 'center' }}>
					{versions.map((x, i) => (
						<AnimatedGroup key={x.v} delay={.12 + i * .12}>
							<div style={{ marginBottom: 12 }}><Label bg={i === 3 ? colors.red : colors.dark}>{x.v}</Label></div>
							<Shot src={x.img} alt={`宣传片 ${x.v}`} style={{ aspectRatio: '16 / 9', objectFit: 'cover' }} />
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 24, marginTop: 14 }}>{x.t}</div>
							<div style={{ fontSize: 19, color: muted, marginTop: 4 }}>{x.d}</div>
						</AnimatedGroup>
					))}
				</div>
				<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
					<Takeaway>先出低清版快速看，方向对了再定稿</Takeaway>
					<span style={{ fontSize: 19, color: muted }}>音乐它听不见，所以它用程序测拍点：重拍都落在 0.5 秒的整数倍上。</span>
				</div>
			</div>
		</DeckFrame>
	);
}
