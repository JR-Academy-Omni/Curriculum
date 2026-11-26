import { Page, asset, c, f } from '../kit';
import { employers } from '../../data/employers';

const ROWS = 12;
const rows = Array.from({ length: ROWS }, (_, r) => employers.filter((_, i) => i % ROWS === r));
// 每排滚完一轮的秒数不同，速度错开；相邻两排方向相反
const seconds = [48, 78, 58, 92, 52, 84, 66, 100, 55, 88, 62, 96];

export default function LogoWall() {
	return (
		<Page dots>
			<div style={{ padding: '38px 96px 0' }}>
				<h1 style={{ fontFamily: f.h, fontWeight: 700, fontSize: 54, lineHeight: 1.2 }}>学员拿到 Offer 的公司 <span className="marker">500+ 家</span></h1>
				<p style={{ fontSize: 20, color: c('slate'), marginTop: 4 }}>从咨询、银行、科技公司到政府机构和高校</p>
			</div>
			<div className="offer-wall dense" style={{ position: 'absolute', left: 0, right: 0, top: 174, display: 'flex', flexDirection: 'column', gap: 6, maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)' }}>
				{rows.map((row, r) => (
					<div key={r} className={`offer-row${r % 2 ? ' reverse' : ''}`} style={{ ['--dur' as string]: `${seconds[r]}s` }}>
						{[0, 1].map((copy) => (
							<div key={copy} aria-hidden={copy === 1}>
								{row.map((e) => (
									<div key={e.name} title={e.name} style={{ width: 118, height: 48, flex: 'none', background: c('canvas-pure'), border: `1px solid ${c('hairline')}`, borderRadius: c('r-sm'), display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 8px' }}>
										{e.logo ? <img src={asset(`employers/${e.logo}`)} alt={e.name} style={{ maxWidth: '100%', maxHeight: 38, objectFit: 'contain' }} /> : <span style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{e.name}</span>}
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
		</Page>
	);
}
