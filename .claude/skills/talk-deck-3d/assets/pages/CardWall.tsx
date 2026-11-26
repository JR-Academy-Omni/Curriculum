import { Page, asset, body, c, f } from '../kit';
import { offers, type Offer } from '../../data/offers';

const ROWS = 5;
const rows = Array.from({ length: ROWS }, (_, r) => offers.filter((_, i) => i % ROWS === r));

function OfferCard({ o }: { o: Offer }) {
	const salary = o.badge.startsWith('年薪');
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 14, height: 84, padding: '0 20px 0 14px', background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: 999, boxShadow: c('shadow-card'), whiteSpace: 'nowrap' }}>
			<div style={{ width: 58, height: 58, borderRadius: '50%', border: `1px solid ${c('hairline')}`, display: 'grid', placeItems: 'center', overflow: 'hidden', background: c('canvas-pure'), fontWeight: 700, fontSize: 22 }}>
				{o.logo ? <img src={asset(`offers/${o.logo}`)} alt="" style={{ maxWidth: 44, maxHeight: 44 }} /> : o.company.slice(0, 1)}
			</div>
			<div style={{ maxWidth: 330, overflow: 'hidden' }}>
				<div style={{ fontSize: 19, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.name} → {o.company}</div>
				<div style={{ fontSize: 16, color: c('slate'), overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.role || ' '}</div>
			</div>
			<span style={{ marginLeft: 8, padding: '5px 13px', borderRadius: 999, fontSize: 16, fontWeight: 700, background: c(salary ? 'wash-mint' : 'wash-sky'), color: c(salary ? 'mint-deep' : 'sky-deep') }}>{o.badge}</span>
		</div>
	);
}

export default function CardWall() {
	return (
		<Page dots>
			<div style={{ ...body, gap: 0, paddingBottom: 0 }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 66, lineHeight: 1.2 }}>9 年，帮 <span className="marker">6028+ 人</span>拿到 Offer</h1>
				<p style={{ fontSize: 22, color: c('slate'), marginTop: 10 }}>下面每张都是学员拿到的 Offer。全部记录见 <a href="https://jracademy.ai/offer-board" target="_blank" rel="noreferrer" style={{ color: c('ink'), fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 5 }}>jracademy.ai/offer-board</a></p>
			</div>
			<div className="offer-wall" style={{ position: 'absolute', left: -80, right: -80, top: 270, transform: 'perspective(1500px) rotateX(16deg) rotateY(-9deg) rotateZ(-2.4deg) scale(1.04)', display: 'flex', flexDirection: 'column', gap: 24, maskImage: 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)' }}>
				{rows.map((row, r) => (
					<div key={r} className={`offer-row${r % 2 ? ' reverse' : ''}`} style={{ ['--dur' as string]: `${130 + r * 14}s`, marginLeft: -r * 130 }}>
						{[0, 1].map((copy) => (
							<div key={copy} aria-hidden={copy === 1}>{row.map((o, i) => <OfferCard key={i} o={o} />)}</div>
						))}
					</div>
				))}
			</div>
		</Page>
	);
}
