import { Page, asset, c, f, parallax } from '../kit';
import CoverScene from '../CoverScene';

export default function CoverGlobe() {
	return (
		<Page night style={{ background: '#0d0b1c' }}>
			<div className="scene" {...parallax} style={{ position: 'absolute', inset: 0 }}>
				<CoverScene />
				<div className="stage" style={{ zIndex: 6, pointerEvents: 'none' }}>
					<div style={{ position: 'absolute', left: 88, top: 138, width: 680, transform: 'translateZ(90px)' }}>
						<div className="cover-in">
							<p style={{ fontSize: 22, fontWeight: 700, color: c('sunshine') }}>匠人学院 JR Academy · 2017 年成立于澳大利亚</p>
						</div>
						<div className="slab cover-in" style={{ animationDelay: '0.15s' }}>
							<img src={asset('brand/tagline-xueai-laijiangren.png')} alt="学 AI 来匠人" style={{ width: 540, display: 'block' }} />
						</div>
						<div className="cover-in" style={{ animationDelay: '0.35s' }}>
							<h1 className="shine" style={{ fontFamily: f.h, fontWeight: 700, fontSize: 52, lineHeight: 1.35, marginTop: 56 }}>全球华人学习 AI 第一站</h1>
							<p style={{ fontSize: 24, color: c('on-night'), marginTop: 16 }}>一起成为 AI 时代的匠人 · Be an AI Craftsman.</p>
						</div>
						<div className="cover-in" style={{ animationDelay: '0.55s', display: 'flex', gap: 38, marginTop: 58 }}>
							{[['6028+', '学员拿到 Offer'], ['500+', '学员去向公司'], ['600+', '行业导师']].map(([n, l]) => (
								<div key={l} style={{ borderLeft: `3px solid ${c('sunshine')}`, paddingLeft: 18 }}>
									<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 46, lineHeight: 1.15 }}>{n}</div>
									<div style={{ fontSize: 17, color: c('on-night-muted') }}>{l}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
