import { Page, Head, Card, asset, body, c, f, grid } from '../kit';

const partners = [
	['OpenAI', 'brand/openai-partner.webp', 'OpenAI Select Partner', 110],
	['Claude', 'brand/claude-partner-certified.svg', 'Claude Certified Services Partner', 170],
	['AWS', 'brand/aws-partner.webp', 'AWS Partner Network', 80],
	['Google', 'brand/google.webp', 'Google Partner', 90],
	['Microsoft', 'brand/microsoft.webp', 'Microsoft Partner', 90],
] as const;

export default function BadgeCards() {
	return (
		<Page dots>
			<div style={{ ...body, justifyContent: 'center', gap: 56 }}>
				<Head eyebrow="合作伙伴" title="五家 AI 与云厂商的合作伙伴" />
				<div style={grid(5, 22)}>
					{partners.map(([name, src, label, h]) => (
						<Card key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 340, padding: 24, textAlign: 'center' }}>
							<div style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}><img src={asset(src)} alt={label} style={{ maxWidth: '100%', maxHeight: h, objectFit: 'contain' }} /></div>
							<div style={{ fontFamily: f.h, fontWeight: 700, fontSize: 21, lineHeight: 1.45, minHeight: 62, color: c('ink') }}>{label}</div>
						</Card>
					))}
				</div>
			</div>
		</Page>
	);
}
