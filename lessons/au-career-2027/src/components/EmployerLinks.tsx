import accenture from '../assets/employers/accenture.webp?inline';
import endla from '../assets/employers/endla.webp?inline';
import google from '../assets/employers/google.webp?inline';
import myob from '../assets/employers/myob.webp?inline';
import openai from '../assets/employers/openai.webp?inline';
import salesforce from '../assets/employers/salesforce.webp?inline';
import suntory from '../assets/employers/suntory.webp?inline';
import { colors, ink } from './kit';

const employerLogos = { accenture, endla, google, myob, openai, salesforce, suntory };

type EmployerJob = {
	company: string;
	logo: keyof typeof employerLogos;
	role: string;
	location: string;
	href: string;
};

export function EmployerLinks({ jobs }: { jobs: EmployerJob[] }) {
	return <div role="group" aria-label="澳洲雇主招聘说明" style={{ display: 'grid', gridTemplateColumns: 'repeat(' + jobs.length + ', minmax(0, 1fr))', gap: 12, marginTop: 14 }}>
		{jobs.map(({ company, logo, role, location, href }) =>
			<a key={href} href={href} target="_blank" rel="noreferrer" aria-label={company + ' · ' + role + ' · ' + location + ' · 招聘说明'}
				style={{ display: 'flex', alignItems: 'center', gap: 13, minWidth: 0, padding: '10px 12px', background: colors.white, color: colors.dark, border: `2px solid ${colors.dark}`, borderRadius: 12, textDecoration: 'none' }}>
				<img alt={company} src={employerLogos[logo]} style={{ display: 'block', flexShrink: 0, width: 91, height: 32, objectFit: 'contain', objectPosition: 'left center' }} />
				<span style={{ lineHeight: 1.24, minWidth: 0 }}>
					<strong style={{ display: 'block', fontSize: 17 }}>{role} ↗</strong>
					<span style={{ display: 'block', marginTop: 4, fontSize: 15, color: ink }}>{location}</span>
				</span>
			</a>
		)}
	</div>;
}
