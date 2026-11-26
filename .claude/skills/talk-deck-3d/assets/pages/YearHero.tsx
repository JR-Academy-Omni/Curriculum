import { Page, asset, c, f, parallax } from '../kit';

const stats = [['9 年', '深耕 IT 教育'], ['6028+', '学员拿到 Offer'], ['600+', '行业导师'], ['6万+', '社群成员']];
// 立体照片堆叠 [图片, left, top, 宽, 景深, 旋转]
const photos: [string, number, number, number, number, number][] = [
	['images/event-slider-9.webp', 150, 20, 480, -60, -4],
	['images/event-slider-3.webp', 30, 265, 420, 40, 3],
	['images/partnership-2.jpg', 260, 430, 390, 90, -2],
];

export default function YearHero() {
	return (
		<Page dots>
			<div className="scene" {...parallax} style={{ position: 'absolute', inset: 0 }}>
				<div className="stage">
					<div style={{ position: 'absolute', left: 96, top: 72, width: 660, transform: 'translateZ(30px)' }}>
						<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 70, lineHeight: 1.2 }}>我们是谁？</h1>
						<div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, marginTop: 14 }}>
							<span className="year3d">2017</span>
							<span style={{ fontFamily: f.h, fontWeight: 700, fontSize: 48, paddingBottom: 30 }}><span className="marker">年 · 成立</span></span>
						</div>
						<p style={{ fontSize: 27, lineHeight: 1.75, color: c('ink-soft'), marginTop: 6 }}>匠人学院 2017 年成立于澳大利亚，是一家专注 IT 领域的 AI 互联网教育科技公司。从澳大利亚出发，服务全球华人。</p>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 34 }}>
							{stats.map(([n, l]) => (
								<div key={l} className="flip" style={{ background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: c('r-card'), boxShadow: c('shadow-card'), padding: '18px 26px' }}>
									<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 48, lineHeight: 1.15 }}>{n}</div>
									<div style={{ fontSize: 19, color: c('slate') }}>{l}</div>
								</div>
							))}
						</div>
					</div>
					<div style={{ position: 'absolute', left: 850, top: 100, width: 660, height: 720, transformStyle: 'preserve-3d' }}>
						{photos.map(([src, left, top, width, depth, rot], i) => (
							<div key={src} style={{ position: 'absolute', left, top, width, transform: `translateZ(${depth}px) rotate(${rot}deg)` }}>
								<img className="float" src={asset(src)} alt="匠人学院活动现场" style={{ animationDelay: `${i * 1.3}s`, width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block', borderRadius: c('r-tile'), border: `8px solid ${c('canvas-pure')}`, boxShadow: c('shadow-pop') }} />
							</div>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
}
