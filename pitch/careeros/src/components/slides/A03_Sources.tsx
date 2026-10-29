import { AnimatedGroup } from '../deck';
import { Page, colors, fonts } from '../pitch';

const sources = [
	['JSA · Changing recruitment trends in the IT industry (24 Sep 2026)', 'jobsandskills.gov.au/news/changing-recruitment-trends-it-industry', 'accessed 9 Oct 2026'],
	['SEEK Employment Report – July 2026 (June data)', 'au.seek.com/about/news/article/seek-employment-report-july26', 'accessed 9 Oct 2026'],
	['OAIC · Guidance on privacy and commercially available AI products', 'oaic.gov.au/privacy/…/guidance-on-privacy-and-the-use-of-commercially-available-ai-products', 'accessed 6 Oct 2026'],
	['CareerOS product demo and acceptance records', 'available in due diligence (screenshots and recordings)', 'as of Oct 2026'],
	['JR Academy Career OS strategy and methodology', 'available in due diligence', 'Oct 2026'],
];

export default function A03_Sources() {
	return (
		<Page tag="Appendix A3 · Sources" title="Sources" titleSize={44} accent={colors.blue} source="All market data is from public sources; access dates shown per item">
			<AnimatedGroup delay={.12}>
				<div style={{ display: 'grid', gap: 12, maxWidth: 1300 }}>
					{sources.map(([t, u, d]) => (
						<div key={t} style={{ background: colors.white, border: `2px solid ${colors.dark}`, borderRadius: 14, padding: '12px 18px' }}>
							<div style={{ fontWeight: 800, fontSize: 21 }}>{t}</div>
							<div style={{ fontFamily: fonts.mono, fontSize: 15, color: '#5c554f', marginTop: 4, wordBreak: 'break-all' }}>{u} · {d}</div>
						</div>
					))}
				</div>
			</AnimatedGroup>
		</Page>
	);
}
