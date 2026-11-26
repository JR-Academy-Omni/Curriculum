import { Page, Head, Card, body, c, f, grid, type Tone } from '../kit';

const stats: [Tone, string, string, string][] = [
	['sunshine', '500+', '家公司', '学员拿到过这些公司的 Offer'],
	['sky', '100+', '家合作企业', '建立人才合作，定期举办招聘会和职业发展活动'],
	['mint', '105', '家公司', '匠人的老师来自这些公司'],
];

export default function BigStats() {
	return (
		<Page dots>
			<div style={{ ...body, justifyContent: 'center', gap: 56 }}>
				<Head eyebrow="匠人与企业" title="我们和多少企业在一起" />
				<div style={grid(3, 28)}>
					{stats.map(([tone, n, unit, d]) => (
						<Card key={d} style={{ borderTop: `10px solid ${c(tone)}`, padding: '44px 40px', minHeight: 360 }}>
							<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 132, lineHeight: 1.05 }}>{n}</div>
							<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 36, marginTop: 6 }}>{unit}</div>
							<p style={{ fontSize: 23, lineHeight: 1.7, color: c('slate'), marginTop: 20 }}>{d}</p>
						</Card>
					))}
				</div>
			</div>
		</Page>
	);
}
